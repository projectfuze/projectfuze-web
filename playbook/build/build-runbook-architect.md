# Build Runbook — Architect (David Solo)

**What**: 8-week operations guide for The Architect engagement tier ($15K/mo).
**When**: Used by David throughout the Build engagement.
**Who**: David executes. ~10hrs/week.
**Output**: Installed Product Intent backbone that the client team operates independently.

---

## Overview

| Phase | Weeks | Focus | Hours/week |
|-------|-------|-------|------------|
| Architect | 1–2 | Design decision + execution architecture | 10 |
| Install | 3–6 | Build workflows, pilot, integrate | 10 |
| Transfer | 7–8 | Train team, hand off system | 10 |

**Total**: 80 hours over 8 weeks.

---

## Phase 1: Architect (Weeks 1–2)

### Week 1 — Decision Architecture (10hrs)

- [ ] Map client's current decision flow end-to-end (2hrs)
  - Use [Decision Architecture template](decision-architecture.md)
  - Interview 1–2 key people if Scan didn't cover enough
- [ ] Design vertical alignment: every work item traces to a goal (3hrs)
  - Goal hierarchy in their PM tool
  - Custom fields and views
- [ ] Configure PM tool structure to enforce alignment (3hrs)
  - Set up hierarchy, fields, views
  - Migrate 5–10 example items
- [ ] Write the Decision Protocol — 1-pager (2hrs)
  - Decision types, sign-off levels, recording method, agent flow

**Deliverable**: Decision Architecture Document + PM Tool Config Spec

### Week 2 — Execution Architecture (10hrs)

- [ ] Design horizontal execution flow (3hrs)
  - Use [Execution Architecture template](execution-architecture.md)
  - meetings → agreements → decisions → releases
- [ ] Create spec template: human + agent readable (2hrs)
  - Use [Spec Template](spec-template.md) as starting point
  - Customize for client's domain and tools
- [ ] Design meeting-to-artifact pipeline (2hrs)
  - Use [Meeting Output Templates](meeting-output-templates.md)
  - Define output for each recurring meeting type
- [ ] Map tool integrations (3hrs)
  - What connects, what data flows, what's missing
  - Configure key integrations

**Deliverable**: Execution Architecture + Spec Template + Meeting Output Templates

---

## Phase 2: Install (Weeks 3–6)

### Week 3 — First Workflow (10hrs)

- [ ] Implement highest-leverage workflow in client's tools (4hrs)
  - Pick the workflow with most friction (identified in Scan)
  - Configure end-to-end in their actual tools
- [ ] Build first AI agent workflow (4hrs)
  - structured spec → agent draft → human review
  - Write agent prompt, test with real examples
- [ ] Pilot with one team/project (1hr facilitation)
  - Walk team through the workflow
  - Observe, take notes on friction
- [ ] Document workflow (1hr)

**Deliverable**: Working Workflow #1 + Docs + Pilot Results

**Checkpoint**: 30-min pilot review call with client leadership

### Week 4 — Second Workflow (10hrs)

- [ ] Implement workflow #2 in client's tools (4hrs)
- [ ] Refine workflow #1 from pilot feedback (2hrs)
  - What didn't work? What confused people?
- [ ] Build cross-functional connection: Product Intent → Engineering (3hrs)
  - Spec flows to engineering with full context
  - Agent-generated drafts start from structured specs
- [ ] Agent prompt refinement based on week 3 output (1hr)

**Deliverable**: Workflow #2 + Refined #1 + Cross-functional Connection

### Week 5 — Integration (10hrs)

- [ ] Third workflow or deepen existing workflows (4hrs)
  - Based on what the team needs most
- [ ] Connect all workflows into the backbone (4hrs)
  - End-to-end flow works: decision → spec → agent → build → review → ship
- [ ] End-to-end test: decision made → work assigned to agent/human (2hrs)
  - Test with a real feature, observe the full flow

**Deliverable**: Integrated Backbone (Product Intent layer complete)

**Checkpoint**: 45-min mid-engagement review with client leadership

### Week 6 — Optimization (10hrs)

- [ ] Handle edge cases: urgencies, scope shifts, cross-team dependencies (3hrs)
  - What happens when priorities change mid-cycle?
  - What happens with cross-team work?
- [ ] Optimize agent prompts from 3 weeks of real output (2hrs)
  - Review agent output quality
  - Refine prompts based on patterns
- [ ] Build override protocol for exceptions (2hrs)
  - When and how to bypass the system (emergencies, hotfixes)
  - Document the override decision type
- [ ] Create measurement framework (3hrs)
  - How does the team know the system is working?
  - Define 3–5 leading indicators

**Deliverable**: Optimized System + Exception Protocol + Measurement Criteria

---

## Phase 3: Transfer (Weeks 7–8)

### Week 7 — Training (10hrs)

- [ ] Session 1: Product/PM team (2hrs)
  - Decision architecture, spec templates
  - See [Training Outlines](training-outlines.md) — Module 1
- [ ] Session 2: Engineering leads (2hrs)
  - How intent flows, working with agent drafts
  - See [Training Outlines](training-outlines.md) — Module 2
- [ ] Session 3: Full team (2hrs)
  - Compounding Org mindset, what changed and why
  - See [Training Outlines](training-outlines.md) — Module 3
- [ ] Create System Playbook (4hrs, AI-assisted)
  - Use [System Playbook Template](system-playbook-template.md)
  - Include all configurations, templates, procedures

**Deliverable**: 3 Training Sessions + System Playbook

### Week 8 — Handoff (10hrs)

- [ ] Observe team running system without intervention (2hrs async)
  - Monitor but don't jump in — note what struggles
- [ ] Final optimization based on observations (3hrs)
  - Fix last issues, refine edge cases
- [ ] Create 30-60-90 Day Self-Assessment guide (2hrs)
  - Use [30-60-90 template](../handoff/30-60-90-self-assessment.md)
- [ ] Final presentation to leadership (2hrs)
  - Before/after scores
  - What was installed
  - Roadmap forward
- [ ] Formal handoff call (1hr)
  - System Playbook walkthrough
  - Q&A, confirm team is confident
  - Exchange: "The system is yours now."

**Deliverable**: Final Report + System Playbook + 30-60-90 Guide

---

## Post-Engagement

- [ ] Run [Retrospective](../handoff/retrospective-template.md) (30 min, David alone or with Lucas)
- [ ] Update playbook templates based on learnings
- [ ] Add patterns to [Pattern Library](../compounding/pattern-library.md)
- [ ] Refine agent prompts in [Agent Prompts](../compounding/agent-prompts.md)
