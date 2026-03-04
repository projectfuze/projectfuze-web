# Meeting Output Templates

**What**: Defined output formats for every recurring meeting type. No meeting ends without its artifact.
**When**: Installed during Build Phase 1 (Week 2). Used permanently by the client team.
**Who**: Meeting facilitator is responsible for producing the output. AI agent assists.
**Output**: Structured artifacts that feed the execution pipeline.

---

## Principle

Every meeting has one job: produce a defined artifact. If the meeting can't produce its artifact, the meeting failed — reschedule or restructure.

---

## 1. Strategy / Planning Meeting

**Cadence**: Quarterly
**Duration**: 60–90 min
**Attendees**: Leadership team

### Output Template

```
# Strategy Session — [Date]

## Goals Confirmed (next quarter)
1. [Goal] — Owner: [Name] — Metric: [How measured]
2. [Goal] — Owner: [Name] — Metric: [How measured]
3. [Goal] — Owner: [Name] — Metric: [How measured]

## Initiatives Prioritized
| Priority | Initiative | Goal it serves | Owner | Status |
|----------|-----------|----------------|-------|--------|
| P0 | | | | |
| P1 | | | | |
| P2 | | | | |

## Decisions Made
- [Decision]: [Rationale] — Decided by: [Name]

## Parked (Not This Quarter)
- [Item] — Why: [Reason]

## Action Items
- [ ] [Action] — Owner: [Name] — Due: [Date]
```

---

## 2. Sprint / Cycle Planning

**Cadence**: Per cycle (weekly, biweekly, or per sprint)
**Duration**: 30–60 min
**Attendees**: Product + Engineering (+ Design if applicable)

### Output Template

```
# Cycle Plan — [Cycle dates]

## Committed Work
| # | Item | Spec Link | Assignee | Estimate | Goal Trace |
|---|------|-----------|----------|----------|------------|
| 1 | | | | | |
| 2 | | | | | |
| 3 | | | | | |

## Stretch (if capacity allows)
- [Item]

## Carried Over from Last Cycle
- [Item] — Reason: [Why it didn't ship]

## Risks / Blockers
- [Risk/Blocker] — Mitigation: [Plan]

## Decisions
- [Decision] — [Rationale]
```

---

## 3. Design Review

**Cadence**: As needed (per feature or weekly batch)
**Duration**: 30 min
**Attendees**: Design + Product + Engineering lead

### Output Template

```
# Design Review — [Date]

## Designs Reviewed
| Feature | Status | Feedback |
|---------|--------|----------|
| [Feature] | Approved / Needs revision / Blocked | [Key feedback] |

## Approved Designs
- [Feature] — Figma: [Link] — Ready for engineering

## Revision Needed
- [Feature] — Issue: [What needs to change] — Owner: [Name] — Due: [Date]

## Open Questions
- [Question] — Needs input from: [Name]

## Decisions
- [Design decision] — [Rationale]
```

---

## 4. Standup / Sync

**Cadence**: Daily or 2–3x/week
**Duration**: 15 min max
**Attendees**: Team

### Output Template

```
# Sync — [Date]

## Blockers (resolve first)
- [Blocker] — Owner: [Name] — Needs: [What to unblock]

## Status
| Person | Working On | Status | ETA |
|--------|-----------|--------|-----|
| [Name] | [Item] | On track / At risk / Blocked | [Date] |

## Decisions (if any)
- [Decision] — [Rationale]

## FYIs
- [Info that affects the team]
```

*Note: Async standups (written in Slack/PM tool) follow the same format.*

---

## 5. Retrospective

**Cadence**: Per cycle
**Duration**: 30–45 min
**Attendees**: Full team

### Output Template

```
# Retro — [Cycle dates]

## What Worked
- [Thing that worked] — Keep doing: [Yes/No/Evolve]

## What Didn't
- [Thing that didn't work] — Root cause: [Why]

## Action Items (max 3 — any more and none get done)
| # | Action | Owner | Due | Measures |
|---|--------|-------|-----|----------|
| 1 | | | | [How we know it's fixed] |
| 2 | | | | |
| 3 | | | | |

## Patterns Noticed
- [Pattern] — This is the [Nth] time. Needs structural fix: [Yes/No]

## Compounding Check
- Did this cycle make the next one easier? [Yes/No — why?]
```

---

## 6. Decision Meeting

**Cadence**: As needed
**Duration**: 15–30 min
**Attendees**: Decision maker + relevant stakeholders

### Output Template

```
# Decision — [Date]

## Decision
[One sentence: what was decided]

## Type
Strategic / Tactical / Operational

## Context
[Why this decision was needed — 2–3 sentences]

## Options Considered
1. [Option A] — Pro: [X] Con: [Y]
2. [Option B] — Pro: [X] Con: [Y]
3. [Option C] — Pro: [X] Con: [Y]

## Rationale
[Why this option was chosen — 2–3 sentences]

## Decided By
[Name, role]

## Implications
- [What changes as a result]
- [Who needs to know]
- [What work is created or changed]

## Review Date
[When this decision should be revisited]
```

---

## AI Agent Processing

After each meeting, the AI agent:
1. Receives the recording/transcript
2. Fills the appropriate template
3. Posts draft in the team's PM tool or Slack channel
4. Facilitator reviews and confirms within 30 minutes
5. Artifact becomes the official record

The goal: facilitator spends <5 minutes on post-meeting documentation.
