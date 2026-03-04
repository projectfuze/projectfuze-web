# Training Session Outlines — 3 Modules

**What**: Three training sessions delivered during Build Phase 3 (Week 7).
**When**: Week 7 of the Build. 2 hours each.
**Who**: David facilitates all three. Lucas co-facilitates Session 2 (Turnkey engagements).
**Output**: Team understands and can operate the installed system independently.

---

## Session 1: Decision Architecture + Spec Templates

**Audience**: Product/PM team
**Duration**: 2 hours
**Goal**: Team understands and can operate the decision architecture and spec system.

### Agenda

**Part 1: The Why (20 min)**
- Where we started: Compounding Org Score at engagement start
- What we found: the top 3 fault lines and their cost
- What we built: overview of the decision architecture
- The shift: "direct, don't draft" — let structured intent drive agent output

**Part 2: Decision Architecture (30 min)**
- Goal hierarchy walkthrough (live in PM tool)
- Decision Protocol: types, approvers, documentation
- Live exercise: take a recent decision, document it using the protocol
- Q&A

**Part 3: Spec Template (30 min)**
- Walk through the spec template section by section
- Show before/after: an old spec vs. the new format
- Focus on Section 6 (Agent Instructions): what makes a spec agent-parseable
- Live exercise: rewrite a recent spec in the new format

**Part 4: Agent Workflows (20 min)**
- Demo: decision → spec → agent draft → human review
- Show the agent prompt and how to refine it
- When to use the agent vs. when to write from scratch
- Common pitfalls and how to spot bad agent output

**Part 5: Practice + Q&A (20 min)**
- Team practices the full flow on a real upcoming feature
- Answer questions, address concerns
- Assign: each PM writes one spec in the new format this week

### Materials Needed
- Access to PM tool (live demo)
- 2–3 before/after spec examples
- Agent workflow demo ready
- Printed/shared spec template

---

## Session 2: Engineering + Agent Workflows

**Audience**: Engineering leads (Architect) or all engineers (Turnkey)
**Duration**: 2 hours
**Goal**: Engineers understand how structured intent flows to them and how to work with agent-generated output.

### Agenda

**Part 1: How Intent Flows (20 min)**
- The pipeline: decision → spec → agent → quality gate → human review
- What's changed about how work arrives
- What engineers should expect: better specs, agent-generated drafts, quality gates

**Part 2: Working with Structured Specs (20 min)**
- Walk through the spec template from an engineer's perspective
- What's in Section 6 (Agent Instructions) and how to use it
- How to flag a spec that isn't ready (missing sections, vague criteria)
- Live exercise: review a spec, identify what's clear and what's missing

**Part 3: Agent-Generated Code (30 min)**
- How agents produce PRs from structured specs
- What to expect: quality level, common mistakes, strengths
- How to review agent PRs: what to check, what to trust
- Live demo: agent generates a PR, team reviews it together

**Part 4: Quality Gates (30 min, Turnkey only — Lucas leads)**
- Overview of installed quality gates
- Trust ladder: what auto-merges, what needs review
- How to read gate output and act on failures
- How to adjust gate sensitivity
- Live demo: PR goes through the gate pipeline

**Part 5: Day-to-Day Workflow (10 min)**
- Morning routine: check agent queue, review generated PRs
- How to request spec clarification (structured process, not Slack chaos)
- How to flag agent failures for prompt refinement

**Part 6: Q&A (10 min)**

### Materials Needed
- Agent-generated PR examples (good and bad)
- Quality gate demo (Turnkey)
- Spec template reference
- Access to CI/CD pipeline (for gate demo)

---

## Session 3: Compounding Org Mindset — Full Team

**Audience**: Full team (Product, Design, Engineering, leadership)
**Duration**: 2 hours
**Goal**: Everyone understands what changed, why, and how to keep the system compounding.

### Agenda

**Part 1: Where We Were (15 min)**
- Compounding Org Score: before engagement
- The fault lines we found (high-level, respectful)
- What it was costing: time, quality, team frustration

**Part 2: What We Built (20 min)**
- The backbone: decision architecture + execution flow + quality gates
- Walk through one end-to-end flow: decision → shipped feature
- Before/after comparison on a real example from the engagement

**Part 3: The Compounding Org Model (20 min)**
- The 6 stages: where the team was, where they are now, where they're heading
- The universal loop: Plan → Execute → Review → Compound
- Why Stage 3 is the inflection point
- What makes work compound vs. what keeps it on a treadmill

**Part 4: Beliefs That Changed (15 min)**
- Revisit the beliefs from the Scan report
- For each: what the team was doing → what they're doing now → why it matters
- This is the "aha" section — connect the framework to their lived experience

**Part 5: Operating the System (20 min)**
- System Playbook overview: where to find everything
- Daily, weekly, quarterly operating procedures
- How to onboard new team members to the system
- Signs it's working + signs it needs attention

**Part 6: Keeping It Compounding (15 min)**
- How to refine agent prompts based on output quality
- How to evolve meeting templates based on what works
- How to adjust quality gates as trust grows
- The 30-60-90 Day Self-Assessment: dates and expectations

**Part 7: Q&A (15 min)**
- Open floor
- Address concerns, skepticism, excitement
- Assign: each team member identifies one thing to watch over the next 30 days

### Materials Needed
- Before/after data from the engagement
- System Playbook (printed/shared)
- 30-60-90 Day Self-Assessment guide
- Compounding Org Score visualization (current + target)
