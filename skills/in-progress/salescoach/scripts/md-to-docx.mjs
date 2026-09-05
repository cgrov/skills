#!/usr/bin/env node
// Convert a salescoach markdown artefact (call script, email, board) to .docx.
//
//   node <skill>/scripts/md-to-docx.mjs <input.md> [output.docx]
//
// Uses the `docx` package resolved from the CURRENT REPO's node_modules — no
// global install, no new dependency. If the repo doesn't have it:
//   npm i -D docx
//
// Handles what salescoach documents actually contain: headings, paragraphs,
// bold/italic/code, blockquotes, bullet and numbered lists, tables, rules.

import { readFileSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { basename, resolve } from "node:path";

const [, , inPath, outArg] = process.argv;
if (!inPath) {
  console.error("usage: md-to-docx.mjs <input.md> [output.docx]");
  process.exit(1);
}
const outPath = outArg ?? inPath.replace(/\.md$/i, "") + ".docx";

let docx;
try {
  docx = createRequire(resolve(process.cwd(), "package.json"))("docx");
} catch {
  console.error(
    "Could not resolve the `docx` package from this repo.\n" +
      "Run `npm i -D docx` in the project root, then try again.",
  );
  process.exit(1);
}

const {
  Document, Packer, Paragraph, TextRun, HeadingLevel,
  Table, TableRow, TableCell, WidthType, BorderStyle, ShadingType, AlignmentType,
} = docx;

const INK = "1A1A1A";
const MUTED = "5A5A5A";
const RULE = "D8D4CC";
const HEADER_BG = "F2EFE9";

/** Split inline markdown into styled runs. Order matters: code, bold, italic. */
function runs(text, base = {}) {
  const out = [];
  const re = /(`[^`]+`)|(\*\*[^*]+\*\*)|(\*[^*]+\*)|(_[^_]+_)/g;
  let last = 0;
  let m;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) out.push(new TextRun({ text: text.slice(last, m.index), ...base }));
    const tok = m[0];
    if (tok.startsWith("`")) {
      out.push(new TextRun({ text: tok.slice(1, -1), font: "Menlo", size: 19, ...base }));
    } else if (tok.startsWith("**")) {
      out.push(new TextRun({ text: tok.slice(2, -2), bold: true, ...base }));
    } else {
      out.push(new TextRun({ text: tok.slice(1, -1), italics: true, ...base }));
    }
    last = re.lastIndex;
  }
  if (last < text.length) out.push(new TextRun({ text: text.slice(last), ...base }));
  return out.length ? out : [new TextRun({ text: "", ...base })];
}

const splitRow = (line) =>
  line.replace(/^\s*\|/, "").replace(/\|\s*$/, "").split("|").map((c) => c.trim());

const isSep = (line) => /^\s*\|?[\s:|-]*-[\s:|-]*\|?\s*$/.test(line ?? "");

function buildTable(header, rows) {
  const cell = (text, bold) =>
    new TableCell({
      shading: bold ? { type: ShadingType.CLEAR, fill: HEADER_BG } : undefined,
      margins: { top: 90, bottom: 90, left: 140, right: 140 },
      children: [new Paragraph({ children: runs(text, { bold, size: 20, color: INK }) })],
    });
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: ["top", "bottom", "left", "right", "insideHorizontal", "insideVertical"].reduce(
      (b, k) => ({ ...b, [k]: { style: BorderStyle.SINGLE, size: 2, color: RULE } }),
      {},
    ),
    rows: [
      new TableRow({ tableHeader: true, children: header.map((h) => cell(h, true)) }),
      ...rows.map((r) => new TableRow({ children: r.map((c) => cell(c, false)) })),
    ],
  });
}

const lines = readFileSync(inPath, "utf8").replace(/\r\n/g, "\n").split("\n");
const body = [];
let i = 0;

while (i < lines.length) {
  const line = lines[i];

  // fenced code
  if (/^```/.test(line)) {
    i++;
    const buf = [];
    while (i < lines.length && !/^```/.test(lines[i])) buf.push(lines[i++]);
    i++;
    for (const c of buf) {
      body.push(
        new Paragraph({
          spacing: { before: 0, after: 0 },
          shading: { type: ShadingType.CLEAR, fill: HEADER_BG },
          children: [new TextRun({ text: c || " ", font: "Menlo", size: 18, color: INK })],
        }),
      );
    }
    body.push(new Paragraph({ text: "", spacing: { after: 120 } }));
    continue;
  }

  // table
  if (/^\s*\|/.test(line) && isSep(lines[i + 1])) {
    const header = splitRow(line);
    i += 2;
    const rows = [];
    while (i < lines.length && /^\s*\|/.test(lines[i])) rows.push(splitRow(lines[i++]));
    body.push(buildTable(header, rows));
    body.push(new Paragraph({ text: "", spacing: { after: 160 } }));
    continue;
  }

  // horizontal rule
  if (/^\s*(---|\*\*\*|___)\s*$/.test(line)) {
    body.push(
      new Paragraph({
        spacing: { before: 200, after: 200 },
        border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: RULE } },
        children: [new TextRun("")],
      }),
    );
    i++;
    continue;
  }

  // heading
  const h = line.match(/^(#{1,6})\s+(.*)$/);
  if (h) {
    const lvl = [
      HeadingLevel.HEADING_1, HeadingLevel.HEADING_2, HeadingLevel.HEADING_3,
      HeadingLevel.HEADING_4, HeadingLevel.HEADING_5, HeadingLevel.HEADING_6,
    ][h[1].length - 1];
    body.push(
      new Paragraph({
        heading: lvl,
        spacing: { before: h[1].length <= 2 ? 320 : 240, after: 120 },
        children: runs(h[2], { color: INK }),
      }),
    );
    i++;
    continue;
  }

  // blockquote — the spoken lines. Indented, left rule, emphasised.
  if (/^\s*>/.test(line)) {
    const buf = [];
    while (i < lines.length && /^\s*>/.test(lines[i])) {
      buf.push(lines[i].replace(/^\s*>\s?/, ""));
      i++;
    }
    const text = buf.join("\n").split(/\n\s*\n/);
    for (const para of text) {
      body.push(
        new Paragraph({
          indent: { left: 360 },
          spacing: { before: 120, after: 120 },
          border: { left: { style: BorderStyle.SINGLE, size: 12, color: RULE, space: 12 } },
          children: runs(para.replace(/\n/g, " ").trim(), { size: 22, color: INK }),
        }),
      );
    }
    continue;
  }

  // bullets
  const b = line.match(/^(\s*)[-*]\s+(.*)$/);
  if (b) {
    body.push(
      new Paragraph({
        bullet: { level: Math.min(2, Math.floor(b[1].length / 2)) },
        spacing: { after: 60 },
        children: runs(b[2], { size: 21, color: INK }),
      }),
    );
    i++;
    continue;
  }

  // numbered
  const n = line.match(/^(\s*)\d+\.\s+(.*)$/);
  if (n) {
    body.push(
      new Paragraph({
        numbering: { reference: "sc-numbers", level: Math.min(2, Math.floor(n[1].length / 2)) },
        spacing: { after: 60 },
        children: runs(n[2], { size: 21, color: INK }),
      }),
    );
    i++;
    continue;
  }

  // blank
  if (!line.trim()) {
    i++;
    continue;
  }

  // paragraph — join soft-wrapped lines
  const buf = [line];
  i++;
  while (
    i < lines.length &&
    lines[i].trim() &&
    !/^\s*[-*>|#]/.test(lines[i]) &&
    !/^\s*\d+\.\s/.test(lines[i]) &&
    !/^```/.test(lines[i])
  ) {
    buf.push(lines[i++]);
  }
  body.push(
    new Paragraph({
      spacing: { after: 140, line: 300 },
      children: runs(buf.join(" ").replace(/\s+/g, " ").trim(), { size: 21, color: INK }),
    }),
  );
}

const doc = new Document({
  creator: "salescoach",
  title: basename(inPath, ".md"),
  numbering: {
    config: [
      {
        reference: "sc-numbers",
        levels: [0, 1, 2].map((level) => ({
          level,
          format: "decimal",
          text: `%${level + 1}.`,
          alignment: AlignmentType.START,
          style: { paragraph: { indent: { left: 360 * (level + 1), hanging: 260 } } },
        })),
      },
    ],
  },
  styles: {
    default: {
      document: { run: { font: "Aptos", size: 21, color: INK } },
      heading1: { run: { font: "Aptos", size: 34, bold: true, color: INK } },
      heading2: { run: { font: "Aptos", size: 27, bold: true, color: INK } },
      heading3: { run: { font: "Aptos", size: 23, bold: true, color: INK } },
      heading4: { run: { font: "Aptos", size: 21, bold: true, color: MUTED } },
    },
  },
  sections: [
    {
      properties: { page: { margin: { top: 1000, bottom: 1000, left: 1000, right: 1000 } } },
      children: body,
    },
  ],
});

writeFileSync(outPath, await Packer.toBuffer(doc));
console.log(outPath);
