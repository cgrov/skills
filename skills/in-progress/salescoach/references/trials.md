# Trials — activation, lifecycle email, expiry, win-back

⚠️ secondary or directional · 🚩 conflict or scale mismatch.

---

## 0. Check activation before writing a single email

Ask the founder for the real numbers: how many signups came back on a **second day**, and how many reached the activation definition in `product.md`.

**If nobody is coming back, stop and say so.** Lifecycle copy cannot fix a product people use once and abandon. A cohort that signed up, did one thing, and vanished is an **interview pool**, not a **conversion pool** — and the correct next move is conversations that find out why, not better subject lines. Drafting a cheerful expiry sequence for that cohort burns the only users the founder has.

The honest framing to give them: *"You have N people who tried this and left. That's N conversations about why, and it's the most valuable thing on your board this week. The emails come after you know the answer."*

---

## 1. ⭐ The single biggest lever: reach out personally

> **"Conversion rates double for free trials and quadruple with freemium when sales reaches out to more than 50% of the sign ups."** — OpenView 2023 Product Benchmarks ⚠️

Corroborated for developer tools from the same report: reaching more than half of new signups *"effectively doubl[es] the rate of conversion compared to companies that don't reach out at all."*

Supporting: companies with **11+ touchpoints performed 2x higher** than those with fewer. Assisted conversion runs **3–4x** self-serve conversion ⚠️ (Tunguz — the source states "almost 4x" in body text and "3x" in its own chart caption, so treat as a range). In the 2026 data, **80% of free-trial products** have human touchpoints when a meaningful account enters a trial.

**Why this matters more to a solo founder than to anyone in those datasets:** every company surveyed is *rationing* sales capacity, reserving it for the highest-priority accounts. A founder with a handful of trials can reach **100%** — which is off the top of the scale the finding was measured on. **Doubling is the floor of what founder-led trial outreach should do, not the ceiling.** This is the empirical backing for "do things that don't scale".

Practical ordering:

1. **Every trial gets a personal email from the founder**, drafted against what that person actually *did* — not a template. Someone who used it eight times gets a different message from someone who used it once.
2. Write the reusable sequence to `.salescoach/emails/` as well, so the copy exists and has been hand-tested by the time an ESP is worth wiring up.
3. Automate the **timing**; personalise the **evidence**. At low volume the automation exists only so nobody falls through.

---

## 2. Trial length

**The only real randomised experiment**: a field experiment on **337,724 users** testing 7 vs 14 vs 30 days (Yoganarasimhan, Barzegary & Pani, *Management Science*, 2022).

Versus the 30-day baseline, **7-day trials produced +5.59% subscriptions, +6.4% retention (measured two years later), and +7.91% revenue.** **14-day trials were not statistically different from 30-day.**

> "shorter trial lengths (surprisingly) maximize customer acquisition, retention, and profitability."

Also: *"skilled and experienced users are more likely to benefit from longer trials, whereas beginners are more responsive to shorter trials"*, and a personalised trial-length policy beat uniform-30-days by 6.8% on subscriptions — though the authors caution that *"personalized policies do not always outperform uniform policies."* Only three lengths were tested; nothing is known outside 7–30 days.

**What the market does:** of 200 products surveyed, **14 days = 62%**, 7 days 14%, 30 days 14%. Only **20% require a card upfront.**

⚠️ Tunguz (600 companies): *"conversion rate is the same across trial lengths"* — consistent with the RCT's 14-vs-30 null.
🚩 *"Gartner research: shorter trials outperform longer by as much as 20%"* — **no retrievable Gartner report. Commonly repeated, unverified.**

**How to choose: match trial length to the product's natural usage frequency.** If the value event is weekly, a 7-day trial gives exactly one cycle of the core loop — enough to try it once, not enough to feel a habit. **14 days gives two cycles**, is statistically indistinguishable from 30, and matches the convention buyers are already trained on. Longer than 14 buys delay, not conversion.

---

## 3. Conversion benchmarks — and the bimodality that matters more than the median

200 B2B software products, January 2026 (Poyar / ChartMogul / ProductLed). Conversion = free signups becoming paying customers within six months.

| Model | Good (50th pct) | Great (75th pct) |
|---|---|---|
| Free trial, no credit card | **4–6%** | 10–15% |
| Free trial, credit card required | **25–35%** | 50–60% |
| Freemium | 3–5% | 8–12% |
| Reverse trial | 4–6% | 8–12% |
| B2B-focused | 6–10% | 15–20% |

**Overall median 8% — but the distribution is bimodal.** 20% of free-trial products convert below 2.5%; 23% convert above 25%. Poyar's own warning: *"very few products actually have an 8% conversion rate"*, and there is a **"10x conversion difference between the top 20% of self-serve products and the bottom 20%."**

Older, larger dataset (1,000+ products): free trial good 8–12% / great 15–25%; **freemium + sales-assist good 5–7% / great 10–15%** vs freemium self-serve 3–5%.

**By ACV** ⚠️ (ProductLed, 600+ companies): **$1K–$5K ACV converts at 30% with PQLs**, vs a **10% median without**. PQL-driven conversion runs ~2.8–3x baseline. Only 24% of companies use PQLs; **activation is tracked only 34% of the time.**

### 🚩 The credit-card question is not settled by benchmarks

The two best datasets disagree once you multiply through the *whole* funnel:

- **First Page Sage** (86 companies) visitor→paying: opt-in 8.5% × 18.2% = **1.55%**; opt-out 2.5% × 48.8% = **1.22%.** → opt-in wins.
- **ChartMogul/Poyar** per 1,000 visitors: card-required 35 signups → **10.5 customers**; no-card trial 45 signups → 3.6. → opt-out wins by ~3x.

*(That arithmetic is derived from their published figures, not stated by either source.)*

**The honest conclusion: the card decision is settled by your constraint, not by benchmarks.** A founder chasing ten customers is not volume-constrained, they're **conversation**-constrained. An opt-in trial yields ~3x more people to talk to, and founder outreach (§1) is worth more at that scale than the card's forcing function. Requiring a card also adds friction in exactly the segments where a buyer wants to see it work first.

🚩 **Excluded deliberately.** A large volume of search results on this topic are AI-generated SEO aggregators citing each other. Figures like *"users who reach the aha moment convert at 3–5x"*, *"aha must happen within 18 minutes"*, *"behavioural triggers convert 3.8x better per Intercom's SaaS engagement study"*, and *"activation optimizers see 2.4x higher trial conversion"* **have no traceable primary source.** The Intercom "SaaS engagement study" does not appear to exist. Never quote these.

---

## 4. Activation

**Benchmarks:** only **20–30%** of new users reach activation at standout PLG companies; best-in-class averages **~33%**. Userpilot's first-party data across 62 B2B companies: **average 37.5%, median 37%** (PLG 34.6%, sales-led 41.6%). Companies self-*report* a median of 50%, which Poyar dismisses: *"frankly, unlikely, as it's hard to believe that half of new users generally find any given SaaS product valuable."*

**Definition, verbatim:**

> "Product activation really just means that you're solving the problem for a user that brought them to your product in the first place… They get to their aha moment."

**Why free trials activate better than freemium**, verbatim: *"free trials create a sense of urgency that can motivate new users to complete important onboarding steps."*

### ⭐ Turn activation into an outreach trigger, not a dashboard number

Des Traynor's method — the most useful thing in this section:

> "For each of those definitions of success you should have a corresponding action in your product that you expect successful trialists to complete by day three… Using those rules e.g. 'hasn't messaged a user but signed up more than three days ago', you can then reach out to the people who are getting stuck… Now you need to think about what success looks like after 7 days?"

### Make the definition multi-party for a collaborative product

Setup events ("created an account", "created one thing") measure setup, not value — and will cheerfully report that a dead cohort is doing fine. For a product a team uses together, prefer something shaped like:

> In a single 7-day window, **≥2 distinct seats** touched the same object, the real-world event it was for has passed, and **≥1 outcome was recorded.**

That collapses three things into one number: activation, the team-expansion signal, and the trigger to reach out. **Write it down once and never change it** — a16z's warning applies: *"Different companies have almost unlimited definitions for what 'active' means... Be clear on how you define 'active.'"*

### Team signals as the trigger

> "As soon as you hit five users in the same account, maybe the sales rep gets notified." — Kyle Poyar

At founder volume, make it **2**. Poyar has since argued for moving from PQLs to **PQAs** (product-qualified *accounts*) — a PQL is *"a user-centric metric, wholly tied to a single person"*, whereas a PQA reflects *"multiple product users inside an organization"* showing collective purchasing potential.

### Why team accounts, not individual seats

ChartMogul, **2,100+ SaaS businesses**:

| ARPA band | Top-quartile net retention | % achieving NRR >100% |
|---|---|---|
| **Low ARPA (<$25/month per account)** | **70%** | **2%** |
| High ARPA (>$1k/month) | 110%+ | 47% |

🔴 **Read that carefully — the low band is <$25/month per ACCOUNT, largely B2C.** A ten-seat team at €25/seat is ~€250/month ARPA, a middle band, not the bottom one. **Don't read 70% net retention as anyone's fate.**

But the gradient is the argument: **retention improves monotonically with ARPA.** Selling €25 *individual* subscriptions lands in the band where only 2% of companies ever achieve NRR >100%. Selling €250/month *team* accounts does not. **That makes seats-per-account a first-class weekly metric** — it's the ARPA lever, and expansion is 32.3% of sector ARR.

**Concrete implications:** make the invite *be* the activation step, not a settings-page afterthought · **free viewer/guest seats** — charging for read access suppresses exactly the loop that creates seat demand, so gate on creating and editing, not viewing · the shared artefact is a distribution mechanism, not a feature.

⚠️ **What doesn't apply at ten customers:** viral/k-factor mechanics, referral incentive programmes, growth-loop optimisation. All need volume the founder won't have. At this stage "the loop" is the founder, manually, asking the trial owner who else on their team runs recurring meetings.

---

## 5. Cadence and the first 72 hours

> "We've found that the first 3 days are crucial, after that engagement drops drastically — in some cases to non-existent levels." — Samar Owais ✅ first-party practitioner

🚩 The much-quoted *"customers engaged in the first 3 days are 4x more likely to convert"* has **no primary citation** (attributed variously to Auth0 and a "Totango study"). Direction supported; **don't put "4x" in a deck.**

**Real cadences from real products.** Encharge's own live 13-email sequence — note that **both sales-touch emails land inside the first 28 hours**:

| # | Timing | Subject |
|---|---|---|
| 1 | instantly | `Welcome to [Product], {{firstName}}!` |
| 2 | **3 hours** | `A personal hello + a quick question?` |
| 3 | 1 day | `Tip 1: …` |
| 4 | **1 day + 4 hours** | `Would you like some help getting started?` |
| 5–11 | days 2–8 | `Tip 2` … `Tip 8` |
| 12 | day 11 | `Your trial expires in 3 days` |
| 13 | day 13 | `Your trial expires in 24 hours` |

Observed density across five real 14-day trials: Shopify 10 emails, CoSchedule 10, Zendesk 9, monday.com 8, Evernote 6. Day 1 the most common send day.

> "Email campaigns from Harvest, Calendly, DeepDyve, and Simple Invoice all send less than four emails over their entire 30 day trial periods. Effective onboarding campaigns are in constant contact with their customers through the trial period." — Val Geisler

> "As long as you're being useful and personal, your users won't complain that you're over-emailing them."

Practitioner cadences ⚠️: 4–5 emails in week one and 1–2 in week two, with *"if they haven't engaged after the first week, sending more emails won't persuade them… if intent doesn't show early, frequency will not fix it"* · ~3/week for trial users · daily in the first few days to build momentum.

### ⚠️ The architectural rule people get wrong

> "We recommend to tie your trial expiring campaign to the trial_expires_at property, and keep it separate from the user onboarding campaign. Trial expiration date can shift as the user e.g. extends their trial, so you shouldn't hard-bake it into the user onboarding sequence."

And behaviour should **filter**, not trigger:

> "This campaign is behavior-based, but we use behavior data to skip irrelevant emails, not trigger them. Has the user started with Feature A? If not, send them a message offering advice or help. If they have, skip on that message and move forward to Feature B."

---

## 6. Expiry playbook

**Timing:** send expiry warnings **1–3 days before** the end for a short trial (1–7 days out for a 20–30 day trial), plus one **on the day**, plus a post-trial survey **1–3 days after**.

> "The urgency has everything to do with timing. It's pointless to flood someone's inbox with warnings about a trial expiration before they have started exploring your product."

**The on-expiry email performs as well as the pre-warnings** — Upscope's first-party CTRs: −3 days **6%**, −1 day **5%**, on expiry **6%**. That's a direct argument against stopping at expiry.

**CTA discipline:** *"The goal of these emails (particularly the final expiration email) is to get a conversion. So the only calls to action should be (1) upgrade their account (2) contact support with any questions."*

⚠️ **Compliance, if a card is ever taken upfront:** Visa's trial-subscription rules require emailing a reminder **at least 7 days before** a trial converts to paid, plus express consent, enhanced receipts and descriptors, and a digital or SMS cancellation method.

### Half the conversions happen after the trial ends

⚠️ MadKudu: *"It takes about 40 days to get 80% of SaaS conversions"* and **"Half of SaaS conversions happen AFTER the trial ends."** Combined with the on-expiry CTR above, the post-expiry window is real revenue, not a wake. **Don't stop emailing at expiry.**

**Trial extensions:** the evidence is weak — the widely-quoted *"roughly 30% of customers take the extension when offered"* has no primary source, and the "extend automatically for high-engagement users" figures come only from AI-SEO sites. **At founder scale the extension isn't really a conversion tactic — it's a pretext for a conversation.** An extension email that asks *"what held you back?"* is worth more at ten customers than the marginal converted trial. Cap extensions (one per user) so the offer doesn't quietly devalue the product.

---

## 7. Templates

All verbatim from real sends. Adapt the specifics; keep the shape.

### ⭐ (a) The founder "reply to me" email — the highest-value asset here

Sent **3 hours after signup**, plain text, subject `A personal hello + a quick question?`:

```
Hey [Name],

My name is [Founder], and I'm one of the co-founders of [Product].
Thank you for giving our tool a try! I know you'll love it when you see how easy it is to
[core benefit].
If you wouldn't mind, I'd love it if you answered one quick question:

Why did you sign up for [Product]?
I'm asking because knowing what made you join us is important for us in making sure we're
delivering on what our customers want.
Just hit reply to this email now and let me know.
Alternatively, we can schedule a quick 5-minute call – book a demo here.
Kind regards,
[Founder]
Co-founder [Product]
```

Stated intent, verbatim: *"The goal of the personal intro email is to start a conversation with our trials by either: replying to the email, or booking a success call with us… We're collecting qualitative data that helps us understand our audience."*

The multiple-choice variant gets the highest response rate when the answers are clickable links:

```
Subject: What's your biggest challenge?

Hey [Name],
I really appreciate you joining us at [Product], and I know you'll love it when you see how
easy it is to [biggest benefit].
If you wouldn't mind, I'd love it if you answered one quick question: why did you sign up for
[Product]? Click on the single best answer:
- [link] [outcome 1]
- [link] [outcome 2]
- [link] [outcome 3]
- Something else — just respond to this email with your answer.
I'm asking because knowing what made you sign up is really helpful for us in making sure that
we're delivering what our users want.
Thanks,
[Founder]
```

⚠️ **On the famous "41% reply rate" for Groove's founder email: this could not be verified** — Groove's blog is gone (rebranded to Helply) and the archive was unreachable. **Commonly repeated, unverified.** The verifiable adjacent fact: their CEO-signed 5-email series over 12 days converted **~10% of blog subscribers into trial users**.

### (b) Founder welcome, with reply CTA

```
Subject: Welcome {first name}! Getting started with {product}

Hi {first name},

First off, thanks for signing up for {product}! My name is {your name}. You can think of me
as your personal assistant, here to guide you through your trial!

Hopefully you've had a chance to login and play around a bit. If you haven't, no worries.
Take a look at our {guide/video}. It'll walk you through how to get set up and it covers the
basics of using {product}.

Over the next {length of trial} days, I'll send you emails to check-in and see how things
are going. If you have any questions at all, you can reply directly to this email, or send
me a message at {your email} any time and I'll be happy to assist you!

{signature}
```

### (c) Mid-trial check-in — no pitch

```
Subject: How can I help you {first name}?

Hi {first name},

It's been a few days since you started your trial with {product}. I just wanted to check in
and see how everything is going?

I want to make sure you're getting the most out of {product} and that no questions go
unanswered.

If you have any questions or general thoughts, reply back to this email and I'll get back to
you ASAP.

{signature}
```

Rules for it, verbatim: *"Don't try to convert them. The purpose of this email is solely to answer any questions they have."* / *"The only links in your email should be to your resource center or to log-in to your product."*

### (d) ⭐ The "value experienced" expiry email — best shape for a team product

```
Subject: [value experienced] will end [specific date]!

Hey [user],

Since you started using [Product] [XX time] ago, you've [made / captured / found] [XXX]
[things].

This means you have managed to [primary outcome]. To keep [value experienced] each month,
upgrade your account today.
Your free [trial time] has reached an end, but you can still [benefit] when you subscribe.
[Upgrade CTA]

Based on [usage] we would recommend you get [plan], this way you'll get [added benefits].
[Upgrade CTA]

Thank you,
[Founder]
```

**For a team product, quantify the TEAM, not the user** — *"Since you started, your team ran 9 meetings with agendas and captured 47 action items."* That sentence is the entire pitch, and it's what a partner authorising the spend is actually buying.

### (e) Expiry −24 hours — loss framing with immediate reassurance

```
Hey [Name],
Your [Product] trial expires in just 24 hours.

Your account will be deactivated in 24 hours, and all of your [work] will be disabled.
You're also going to lose access to any data you have in [Product]. Do not worry! We keep it
safe with us for when you decide to upgrade.
Our plans start at [X], and by upgrading now, you will ensure your [work] stays active.
Upgrade now

Have questions about upgrading?
We're here to help, just hit reply to this email.
```

### (f) ⭐ Founder win-back — the highest-learning email at this stage

Send 1–3 days after expiry.

```
Subject: Curious why you didn't upgrade?

Hey [Name],
[Founder] here, the co-founder of [Product].
I noticed you [used the product / ran out of trial] a few days ago but didn't upgrade to a
paid plan. Would you mind sharing briefly with me why?
Feel free to hit reply here, or we can just schedule a quick 5-minute call. Click here to
book a time.
Would really love to hear your feedback.
Thank you,
[Founder], Co-founder of [Product].
```

### (g) Post-trial survey with branching

```
Subject: It didn't work out

Hi [Name],
I tried to get in touch with you to understand if [Product] is the right tool for [Company].
Please let me know what the #1 reason that's stopping you from upgrading is. Just click on
the right answer.
- I don't need a premium plan.
- I'm using a competitor.
- [Product] is too hard to use.
- [Product] is too expensive.
- I didn't have time to test the platform.
- I just signed up to see what was going on.
Thank you!
```

Routing logic on the answers — a good automation spec:

> - "I'm using another solution → Send to a nurturing flow to stay top of mind when they decide to churn from the other tool.
> - Too expensive → Offer an exclusive one-time discount.
> - Too difficult to learn → Start a sales-touch flow offering a 30-minute free crash course.
> - Missing features I need → Inquire about the feature… Let them know when the new feature is live."

### (h) The extension email

```
Subject: Don't worry you can extend your [Product] trial

Hey [user],

We get it. You're busy. A trial doesn't count for much if you don't actually try anything. So,
if you'd like more free time with [Product], please let us know. We'd be happy to extend your
trial.

Just reply to this email.
```

### (i) Behavioural nudge

```
Subject: Let's [do the next step]!

High five for [first milestone], [Name]!
Don't stop now! We noticed that you haven't [key action] yet.
You're getting closer to the finish line… let's power through the setup, so you can
[outcome]!
[CTA]
```

The real-world version: *"The emails are short, specific and tied to product usage. A simple, 'You haven't set up X — here is why accounts don't do well if you skip this step.'"*

---

## 8. Subject lines — swipe file, all from real sends

Expiring:
```
Don't Miss Out! Your Grain Trial Ends Tomorrow
Your Balsamiq Cloud Trial is about to expire
One week left of your Premium trial
Your free trial of Dovetail finishes soon
Your trial ends tomorrow
Your Zapier trial ends in 3 days
⏳ Your Programa trial ends tomorrow.
Your trial is half over: Do this next
```
Expired / win-back:
```
Your Avocode trial for your team [team name] has just ended
Your Online Store Has Closed
Want your free trial extended?
Your trial has ended, but it's not too late.
[Name]'s Workspace has been downgraded to Loom Starter
We'd Love to Hear About Your Experience with Grain
```
Lifecycle:
```
⚠️ Your trial ends soon!
Need some help connecting your Stripe account? 🔧
Account review
A Quick Question from Instapage
just saying hey                          ← Drift's welcome email
```

> "If your welcome email doesn't have a subject of 'Welcome to #{product_name}', you'll stand out." — Val Geisler

---

## 9. Sender identity

> "Do not send onboarding emails from a no-reply email."

> "an actual welcome email that comes from a person, preferably the founder or CEO. It's not sent from the company, right? And it's not signed 'The Intercom team', it's signed by a person." — Val Geisler

> "Plain text emails skip all of that. No template, no logo, no footer, just a message that looks like it came from an actual person, because it did." / "A plain text email sent from a no-reply address undercuts its own premise."

Plain text outperforms polished templates *"specifically in warm outreach and hand-raiser follow-up, situations where the goal is a reply, not a click."*

---

## 10. Performance data — first-party only

| Metric | Value |
|---|---|
| Encharge welcome email | **46.3% open, 6% CTR** |
| Encharge average open, all emails | 37% |
| Upscope expiry emails | 6% / 5% / 6% CTR (−3d / −1d / on expiry) |
| Upscope install-nudge email #4 | 4% response (one email in the sequence got 0%) |

🚩 **Welcome-email open-rate benchmarks conflict badly and mostly lack sources** (30–60%, 40–60%, 63.91%, 23%). Use the 46.3%/6% first-party pair as the only anchor.

**And stop using open rate at all.** Apple Mail Privacy Protection pre-loads tracking pixels, which makes it uninterpretable. One practitioner's discipline is the right one: *"We don't use open rates or unsubscribe rates"* — measure reply rate, feature adoption after emails, revenue within 14 days of an email, and silent churn instead.

🚩 *"Trigger-based emails have 70.5% higher open rates"* and the punchier multiples (3.8x, 4.5x, 3.1x) trace to unreachable or AI-generated sources. **The practice is well supported; the numbers are not.**
