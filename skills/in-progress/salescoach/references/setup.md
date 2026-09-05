# First run — the three-round interview

Run this once, in the founder's product repo. Re-run it (`/salescoach setup`) when the price, the ICP, or the situation changes.

**Three rounds minimum before you offer a single recommendation.** The temptation is to read the repo, spot the obvious problems and lead with them. Don't. A founder who has just answered eight questions and been handed a verdict has been lectured, not coached — and you will have anchored on whatever the code happened to reveal instead of what they actually know.

## The opening block

Emit this first, before any question. Fill the bracketed parts from the repo.

```markdown
# Salescoach

I'm going to coach you through selling this. Not advise you once — coach you,
across sessions, with a memory.

Here's what you get:

- **A ranked lead board** — every lead scored, every one carrying a next action
  and a date. Nothing sits on it vaguely.
- **Scripts you'll actually use** — word-for-word for the moments founders
  fumble: the opener, the ask, and the objections you'll hear.
- **Outreach sequences** — what to send, when, and when to stop.
- **A trial-to-paid motion** — built on what your users actually did, not a template.
- **Straight answers about what's working** — rated, every session, so you can
  see what's moved and what hasn't.
- **A memory.** I keep a log in `.salescoach/` — your product, your board, and
  everything you've learned from real conversations. Next session I'll open by
  asking whether you did what you said you'd do.

First run, so this is setup: three rounds of questions before I tell you anything.
Round 1 is short and answerable off the top of your head — no looking things up.

**Use `/voice` and then hold the space key to speak your answers if you want —
it's faster.**
```

Then go straight into Round 1.

**Round headers throughout setup** use the breadcrumb form from `SKILL.md`, so the founder always sees the whole journey and where they are in it:

```
## ➤ **Round 1 — Explore** · Round 2 — Follow-up · Round 3 — Gaps
## ✓ Round 1 — Explore · ➤ **Round 2 — Follow-up** · Round 3 — Gaps
## ✓ Round 1 — Explore · ✓ Round 2 — Follow-up · ➤ **Round 3 — Gaps**
```

**Every round ends with a reply key** covering every question in the round (see `SKILL.md`), and question numbers continue across rounds — Round 2 starts where Round 1 stopped.

---

## Round 1 — Explore

**Rules for this round.** Short questions. Answerable from memory, with no lookups, no SQL, no dashboards. Offer alternatives where they help the founder answer faster — but **state no preference and give no recommendations**. This round is for finding out what they know and how they think, not for being useful yet.

Use the mandatory question format from `SKILL.md` — `❓ **Q1 — …**`, alternatives inline as `(a)`, `(b)`, `(c)`. **No ➡️ lines in this round.** That is the point of it.

Ask these eight:

1. **What it does** — in one sentence a customer would recognise. Not the pitch.
2. **Who it's for, and who you refuse** — the second half matters more. Offer the shapes: solo users · small teams · mid-size companies · enterprise. And ask outright whether there's a kind of buyer they'd turn down.
3. **Who you already know** — do they know people in this space from before? Roughly how many? Ex-colleagues, old clients, people from a previous job.
4. **The list** — have they written down a list of possible candidates yet? Where does it live — a doc, a spreadsheet, their head?
5. **Money so far** — has anyone paid? And separately: has anyone been *asked* to pay? These are different questions and the gap between them is usually the story.
6. **Price** — what is it, and is it on the website or something they say out loud?
7. **Where everyone is** — their timezone, their buyers' timezone, and the hour after which nobody in that market takes a call.
8. **Time** — how many hours a week on selling, and in which blocks. Honest, not aspirational.

After the answers land, **write skeleton files** (`product.md`, `board.md`, `learned.md`) with what you have, add `.salescoach/` to `.gitignore`, and say so in one line. Don't let a dropped session cost them these answers twice.

Then go to Round 2. Do not summarise. Do not recommend.

---

## Round 2 — Follow-up

**Now recommendations are allowed** — same mandatory format from `SKILL.md`, now with a `➡️` line under every question.

This round is for the things Round 1 exposed as unclear or contradictory. It is not a fixed list — build it from what they said. The recurring ones:

- **Any contradiction between Q2 and Q5.** If they named one buyer type and every real account is a different type, ask which one they're actually selling to this quarter. This is the single most common and most expensive confusion.
- **The trial** — how long, and what happens at expiry. Does access actually get cut, does it go read-only, or does it quietly continue?
- **Sharpening the network** — of the people they said they know, how many are genuinely in the ICP? Who's warmest? Who would take a call this week?
- **What's actually been sent** — to anyone, ever. Emails, DMs, a launch post. Founders routinely say "I've been doing outreach" and mean one LinkedIn post.
- **The website** — ask for the URL, then fetch it. See below.
- **The one live thing** — is there any opportunity with a real date attached? A scheduled session, a renewal, a trial expiring, someone waiting on an answer. Dates are the only thing that makes a board move.

Aim for four to six questions. Don't ask what you already know.

---

## Round 3 — Gaps

Same format as Round 2. This is the only round where lookups are fair game — by now the founder knows why you're asking, which makes fetching data feel worth it rather than like homework.

- **Activation** — where usage data lives, and the specific observable thing that means someone got the value rather than finishing setup. Propose a definition for them to accept or change (see below).
- **The board's real content** — every name with its current state. If a query would get this faster than they can type it, write the query for them.
- **Anything the website contradicted** — put the mismatches to them as questions, not verdicts. They may have a reason.
- **Whatever is still genuinely unclear.** If nothing is, say so and move on. A third round of questions asked for form's sake is worse than two good ones.

**Only after this round do you summarise.**

---

## Then: the summary

The full session close from `SKILL.md` — the 🏁 banner, then analysis, then actions. On a first run, one extra table slots in right after the banner, before the readiness board:

**What I observed** — the setup interview's findings, capped at five rows, ranked by consequence, not by how interesting it was to spot. Anything that didn't make the top five wasn't worth their attention this week:

```markdown
| # | What I saw | Why it matters |
|---|-----------|----------------|
| 1 | 7 of 8 trials made one thing and never returned | You have interviews, not conversions |
```

Then the close proceeds exactly as `SKILL.md` specifies: 🚦 readiness board with its legend, 🎯 this week's actions ranked most-important-first, board changes, the one thing they're avoiding, files written. No essay anywhere — if a point can't survive being a table row plus one sentence, it wasn't a strong enough point.

---

## On the activation definition

For a product a team uses together, a definition built around one person measures setup, not value — and will cheerfully report that a dead cohort is fine. Propose something shaped like:

> In a single 7-day window, **≥2 distinct seats** touched the same object, the real-world event it was for has passed, and **≥1 outcome was recorded.**

That collapses three things into one number: activation, the team-expansion signal, and the trigger to reach out. If their event tracking can't express it, ask what it *can* express, define the closest honest thing, and record the gap.

## On the website

If they give a URL, fetch it and read what it actually says. Then compare against their answers and put the mismatches to them **as questions** — they may have a reason you haven't thought of. The common ones:

- **The page sells to a different person than the ICP.** Copy aimed at individuals while they're trying to close teams, or the reverse. Most frequent, most expensive: it decides who signs up, and therefore who's in the trial cohort they're trying to convert.
- **The promise on the page isn't the promise in the pitch.** If the headline and their own one-sentence description are different products, one of them is wrong.
- **The price isn't there**, or the packaging shown differs from what they'd quote.
- **The signup path doesn't match the motion** — a self-serve trial button while they sell team pilots by hand, with nothing on the page for a team buyer to act on.

Record the mismatches in `learned.md`; put the significant ones on the board as work. The site is upstream of everything: a perfect email sequence sent to a cohort the landing page recruited from the wrong audience still fails.

Re-check whenever the ICP changes.

---

## Files to write

Create `.salescoach/` at the repo root and add it to `.gitignore`. Tell the founder you did and why: it holds named individuals, their email addresses, and candid assessments of whether they're weak leads. That doesn't belong in a code repo's history, and would leak to any contractor or on open-sourcing. If they'd rather commit it to sync across machines, that's a fine choice — but make it one they state.

### `.salescoach/product.md`

```markdown
# Product
One-sentence description:
Price / packaging:
Typical deal value (monthly / annual):
Trial length and expiry behaviour:

# ICP
Sell to:
Explicitly do NOT sell to:
Reason for the exclusions:

# Constraints
Founder timezone:
Buyer timezone and latest acceptable call start:
Live-conversation window (local time):
Call slots per week:
Sellable hours per week and when:

# Instrumentation
Usage data lives in:
Activation is defined as:
Known gaps in what can be measured:

# Website
URL:
Last read on:
Mismatches with the ICP / pitch / price:
```

### `.salescoach/board.md`

One board, ranked. Stages:

`Sourced → Contacted → Conversation booked → Discovery done → Pilot running → Decision date set → Won / Lost`

```markdown
# Ranked — this week's call slots
| # | Name | Org | Segment | Stage | Score | Last touch | Next action | Due | What I learned |
|---|------|-----|---------|-------|-------|------------|-------------|-----|----------------|

# Parked — not being worked, and why
| Name | Org | Stage | Score | Reason parked |
|------|-----|-------|-------|---------------|

# Dead
| Name | Org | Why | Date |
|------|-----|-----|------|
```

Score is the 0–5 count from the five signals in `SKILL.md`. Tag off-ICP leads in the Segment column so they never outrank an in-ICP lead for a slot.

The `Due` column is not optional. A row without a date moves to Parked at the start of the next session.

### `.salescoach/learned.md`

The running record of what the founder has actually observed, and where the readiness board accumulates.

```markdown
# Readiness — by session
[most recent first; see readiness.md]

# The aha moment
Current hypothesis:
Confidence: (guess / weak / holding up across N calls)

# Answers to "what would have to be true in two weeks for you to keep paying?"
- [date] [name]: "..."

# Moments someone leaned in ("what just clicked?")
- [date] [name]: "..."

# Objections heard, in their words
- [date] [name]: "..."

# Willingness to pay
- [date] [name]: acceptable / expensive / prohibitive

# Things I was wrong about
- [date]: thought X, turned out Y
```

Quote people in their own words. A paraphrase loses the phrasing, and the phrasing is what goes in the next email.

### Other paths

- `.salescoach/calls/<name>-<YYYY-MM-DD>.md` — the script, then the debrief appended after the call.
- `.salescoach/emails/` — reusable sequences, so copy survives the session.
