# The readiness board

The analysis the coach gives at the end of a session — **part 1 of the session close, before the actions**. It goes in `learned.md` every session, so the trend across weeks is visible.

Two independent dials per row, and keeping them independent is the whole design:

- **Stars = where this area stands today.** A measurement, based on evidence.
- **Lights = where the founder's attention goes this week.** An instruction.

They deliberately don't correlate. A zero-star row is often 🟡 (bad, but not this week's problem), and a three-star row is 🟢 (fine, leave it alone). If the founder can't tell from your table whether green means "act" or "relax", the table failed — which is why the legend prints every session.

Use the **same eight rows every time, in this order**. The order is the funnel, and the order is what makes the priority rule work.

## The eight areas

Row 1 is written out in full in the emitted table — "Ideal customer profile (ICP)" — never bare "ICP". The founder is an expert in their domain, not in sales vocabulary.

| # | Area | Rated on |
|---|---|---|
| 1 | **Ideal customer profile (ICP)** | Can they say who they sell to *and who they refuse*, and does their behaviour match it? |
| 2 | **Lead supply** | Is there a written, ranked board with more qualified names than this week's call slots? |
| 3 | **Outreach discipline** | Are people actually being contacted, with follow-ups, not one-and-done? |
| 4 | **Live conversations** | Are they filling the call slots their timezone window actually allows? |
| 5 | **Discovery quality** | Are they learning specific past pain, or collecting compliments and fluff? |
| 6 | **The ask** | Does every conversation end with a named next step and a date? |
| 7 | **Asking for money** | Has a real human been asked to pay a real number? |
| 8 | **Activation** | Do signups come back and reach the value, or use it once and vanish? |

## Maturity stars — where each area stands

| Stars | Means |
|---|---|
| ☆☆☆☆☆ | Assessed — and it is not happening at all |
| ★☆☆☆☆ | Happened once, by accident |
| ★★☆☆☆ | Happening, inconsistently, unmeasured |
| ★★★☆☆ | Consistent but not yet producing results |
| ★★★★☆ | Working, with evidence |
| ★★★★★ | Working and repeatable — they could teach it to someone else |
| *no data* | **Could not assess** — the information doesn't exist yet. Written as the words `no data`, never as zero stars |

Zero stars and "no data" are different verdicts and must never be conflated: ☆☆☆☆☆ says *I looked, and there is nothing there* — an earned, evidence-based zero. `no data` says *I couldn't look* — and it should come with the question or query that would close the gap.

Rate on **observed behaviour and evidence in the files**, never on intent. "I'm going to start emailing them" is ☆☆☆☆☆. Be willing to give zero stars; a coach that never rates below three stars is decoration.

## Lights — where attention goes this week

| Light | Means | What the founder does |
|---|---|---|
| 🔴 **Fix now** | Nothing downstream improves until this moves. Always exactly one. | This week's work — it leads the actions table, unless something is due inside 24 hours |
| 🟡 **On hold** | Real gap, known, **deliberately not being worked yet** — acting on it before the 🔴 moves would be wasted effort | Nothing. Not neglected — sequenced |
| 🟢 **Healthy** | Good enough for this stage | Nothing. Spend no time here |

**Green always means "leave it alone".** Red is the only light that demands action. **Never write the bare word "Deferred"** — it is ambiguous between "not looked at" and "not doing it". Write what 🟡 actually means: `On hold until #2 moves — nothing to send without a list`.

## ⭐ The rule that makes this worth reading

**Exactly one row is 🔴 per session, and it is the *leftmost weak link* — the earliest area in the funnel scoring below three stars.** Not the lowest-scoring row. Not the most alarming one.

The reason: the areas are sequential. Zero stars on "asking for money" is meaningless when "live conversations" is also at zero, because there is nobody to ask. Fixing area 7 while area 4 is broken produces a founder who is very good at closing conversations that never happen.

So:

- Walk the eight rows **in order**. The first one below ★★★☆☆ is 🔴.
- Everything after it that's also weak is 🟡, and its note says what it's waiting on.
- Everything at ★★★☆☆ or above is 🟢.
- A `no data` row is 🟡 with a note naming how to get the data — unless the missing data *is* the leftmost weak link, in which case getting it is the 🔴.

If all eight are at three stars or better, there is no red — say so, and make the highest-leverage row the 🟡. That is a good week and it should feel like one.

## Format

**The legend prints above the table, every session, verbatim:**

```markdown
**How to read this** — Stars measure where each area stands today (☆☆☆☆☆ = I checked,
and it isn't happening; `no data` = I couldn't check yet). Lights say where your
attention goes **this week**: 🔴 fix now — everything downstream waits on it (always
exactly one) · 🟡 real gap, deliberately on hold until the red one moves · 🟢 healthy —
spend no time here. **Green means leave it alone; red means act.**
```

Then the table. One sentence per row, no paragraphs underneath. The Note column explains the *state* or what a 🟡 is waiting on — **concrete actions do not live here**; they live in the "What to do this week" table, which analysis must not duplicate. The 🔴 row's note points there.

```markdown
| # | Area | Maturity | This week | Note |
|---|------|-----------|-----------|------|
| 1 | Ideal customer profile (ICP) | ★★★☆☆ | 🟢 | Settled: consultancies + L&D; solo answered, never chased |
| 2 | Lead supply | ☆☆☆☆☆ | 🔴 | Zero written-down names → **see the actions below** |
| 3 | Outreach discipline | ★☆☆☆☆ | 🟡 | On hold until #2 moves — nothing to send without a list |
| 4 | Live conversations | no data | 🟡 | Can't assess until the usage query runs — action #2 |
...
```

## Trend

Append the table to `learned.md` under the session date, and when a previous table exists, note what changed in one line above it:

> Since 18 Aug: Lead supply ★☆☆☆☆ → ★★★☆☆. Asking for money unchanged at ☆☆☆☆☆ for three sessions.

**A row that hasn't moved in three sessions gets named out loud**, whatever its priority. That is usually the real story of the month, and it is exactly what a founder cannot see from inside the week.
