# Decision Architecture Template

**What**: Template for designing a client's vertical alignment system — every work item traces to a goal.
**When**: Build Phase 1, Week 1. First major deliverable.
**Who**: David designs. Client's Product/PM team operates.
**Output**: Decision Architecture Document + PM Tool Configuration Spec.

---

## 1. Current State Map

### Goal Hierarchy (As-Is)

Document the client's current chain (or lack thereof):

```
Company Goals: [Where do they live? Who sets them? How often updated?]
  → Initiatives: [Exist? Connected to goals? Or floating?]
    → Projects/Teams: [How is work organized? By team, product area, or ad-hoc?]
      → Epics/Milestones: [Time-bounded? Or endless backlogs?]
        → Issues/Tasks: [Traceable to anything above? Or created in isolation?]
```

**Traceability test**: Pick 3 random tasks. Can you trace each to a company goal?
- Task 1: ___ → traces to: ___ (Yes / No / Partially)
- Task 2: ___ → traces to: ___ (Yes / No / Partially)
- Task 3: ___ → traces to: ___ (Yes / No / Partially)

### Decision Flow (As-Is)

How do decisions currently get made?

| Decision Type | Who Decides | Where Documented | How Found Later |
|--------------|-------------|-----------------|-----------------|
| Strategic | | | |
| Tactical | | | |
| Operational | | | |

---

## 2. Target State Design

### Goal Hierarchy (To-Be)

```
Company Goals (quarterly review, [tool])
  → Initiatives (monthly review, [tool])
    → Projects (owned by [team structure], [tool])
      → Milestones (time-bounded, [cadence])
        → Issues (atomic, assignable, traceable)
```

**Every level must**:
- Have a clear owner
- Have defined success criteria
- Be visible to everyone
- Be queryable by agents

### Decision Protocol (To-Be)

| Element | Strategic | Tactical | Operational |
|---------|-----------|----------|-------------|
| **Scope** | Company direction, resource allocation | Initiative scope, priority changes | Implementation approach, tech choices |
| **Approver** | CEO/Founder | Product Lead | Team Lead |
| **Timeline** | 48hr decision window | 24hr decision window | Same-day |
| **Documentation** | Decision record in [tool] | Ticket/issue update | PR description or ticket comment |
| **Agent access** | Agents can read + reference | Agents can read + act on | Agents can read + execute |
| **Review cadence** | Quarterly | Sprint/cycle | N/A (immediate) |

---

## 3. PM Tool Configuration

### Recommended Structure (Adapt to Client's Tool)

**For Linear**:
- Workspace = Company
- Teams = Functional teams or product areas
- Projects = Initiatives (linked to goals via labels or custom fields)
- Cycles = Time-bounded milestones
- Issues = Atomic work items

**For Jira**:
- Projects = Product areas
- Epics = Initiatives
- Stories = Features (linked to epics)
- Tasks/Subtasks = Atomic work

**For Asana**:
- Teams = Functional teams
- Projects = Initiatives
- Sections = Phases or milestones
- Tasks = Atomic work items

### Required Custom Fields

| Field | Purpose | Values |
|-------|---------|--------|
| Goal | Traces to company goal | [List of current goals] |
| Decision Type | Categorizes decisions | Strategic / Tactical / Operational |
| Agent Parseable | Can an agent act on this? | Yes / No / Needs Context |
| Handoff Status | Cross-function tracking | Draft / Ready / In Review / Shipped |

### Required Views

1. **Goal Tracker**: All goals → initiatives → active work. Shows alignment chain.
2. **Decision Log**: All decisions sorted by date, type, and status.
3. **Agent Queue**: All items marked "Agent Parseable = Yes" ready for agent execution.

---

## 4. Implementation Checklist

- [ ] Map current goal hierarchy (with client)
- [ ] Design target hierarchy (adapt to their tool and org)
- [ ] Write Decision Protocol (1-pager for the team)
- [ ] Configure PM tool structure
- [ ] Create custom fields and views
- [ ] Migrate 5–10 existing items as examples
- [ ] Test: can an agent trace any task to a goal?
- [ ] Document the configuration for the System Playbook

---

## Deliverables

1. **Decision Architecture Document** — This template, filled out, showing current → target
2. **PM Tool Configuration Spec** — Exact setup for their tool, ready to implement
3. **Decision Protocol** — 1-page document the team can reference daily
