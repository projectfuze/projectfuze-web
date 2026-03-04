# Product Intent Framework

**What**: David's framework for the "Product Intent" side of the backbone — structuring how decisions flow from company goals to shipped features.
**When**: Applied during the Build phase. Assessed during the Scan.
**Who**: David designs and installs this system. Client's Product/PM team operates it.
**Output**: A decision architecture that agents can act on and humans can trust.

---

## Two Axes

### Vertical Alignment (Goals → Work)

Every piece of work traces to a company goal. The chain:

```
Company Goals
  → Initiatives (strategic bets)
    → Teams / Projects (who owns what)
      → Epics / Milestones (time-bounded chunks)
        → Issues / Tasks (atomic work)
```

**Test**: Pick any task. Can you trace it to a company goal in under 60 seconds? If not, vertical alignment is broken.

### Horizontal Execution (Decision → Release)

Work moves through a structured pipeline:

```
Meetings → Agreements → Decisions → Specs → Work → Review → Release
```

Each stage has:
- Defined input format
- Defined output artifact
- Clear owner
- Quality check before handoff

**Test**: Pick any recent release. Can you trace the chain of decisions that led to it? If not, horizontal execution is broken.

---

## Decision Protocol

Every decision in a structured org has:

| Element | Description |
|---------|-------------|
| **Type** | Strategic / Tactical / Operational |
| **Sign-off** | Who approves (based on type + scope) |
| **Recording** | Where it's documented (PM tool, decision log) |
| **Agent Flow** | How agents access and act on this decision |
| **Expiry** | When this decision should be reviewed |

### Decision Types

- **Strategic**: Affects company direction. CEO/founder sign-off. Quarterly review.
- **Tactical**: Affects initiative scope or priority. Product lead sign-off. Sprint review.
- **Operational**: Affects implementation approach. Team lead sign-off. Immediate.

---

## Org Readiness Checklist

Score each item 0 (not present) to 2 (fully present):

- [ ] Goals documented and accessible to all teams
- [ ] Every initiative traces to a goal
- [ ] Every project traces to an initiative
- [ ] Decision protocol exists and is followed
- [ ] Specs follow a consistent template
- [ ] Meeting types have defined output formats
- [ ] Handoff between Product and Engineering is structured
- [ ] Historical decisions are searchable
- [ ] Priority logic is explicit (not "ask the founder")
- [ ] Agents can access decision context

**Score interpretation**:
- 0–6: Stage 0–1 (tribal knowledge, no system)
- 7–12: Stage 1–2 (some structure, significant gaps)
- 13–16: Stage 2–3 (structured but not agent-ready)
- 17–20: Stage 3+ (structured intent, agents can act)

---

## How Intent Connects to Delivery

```
Product Intent (David's side)
  ↓ Structured specs, decisions, context
AI Agents (the middle)
  ↓ Draft artifacts: PRs, designs, docs
Verified Output (Lucas's side)
  ↓ Quality gates validate against intent
Shipped Feature
```

The quality of the middle (agents) depends entirely on the quality of the bookends:
- Bad intent in → bad artifacts out (garbage in, garbage out)
- Good intent in, no verification → untrustworthy artifacts
- Good intent in + verification → compound execution
