# Spec Template — Human + Agent Readable

**What**: A spec format designed to be clear for humans AND parseable by AI agents.
**When**: Used in the Build phase to replace ad-hoc specs. Becomes the standard format for the client.
**Who**: Product/PM writes (or refines AI draft). Engineers and agents consume.
**Output**: A spec that can be handed to a human or an agent with equal clarity.

---

## Spec: [Feature/Change Name]

### Metadata

| Field | Value |
|-------|-------|
| **ID** | [PM tool ID] |
| **Goal** | [Which company goal this traces to] |
| **Initiative** | [Which initiative this belongs to] |
| **Owner** | [PM responsible] |
| **Status** | Draft / In Review / Approved / In Progress / Shipped |
| **Decision Ref** | [Link to decision that triggered this] |
| **Priority** | P0 (critical) / P1 (high) / P2 (medium) / P3 (low) |
| **Target Date** | [Date or sprint/cycle] |

---

### 1. What and Why

**What**: [One sentence describing what we're building/changing]

**Why**: [One sentence describing the problem this solves or the outcome it enables]

**Success criteria**: [How do we know this is done and working?]
- [ ] [Criterion 1 — specific, testable]
- [ ] [Criterion 2 — specific, testable]
- [ ] [Criterion 3 — specific, testable]

---

### 2. Context

**User story**: As a [user type], I want [action] so that [outcome].

**Current behavior**: [What happens today]

**Desired behavior**: [What should happen after this ships]

**Constraints**:
- [Technical constraints]
- [Business constraints]
- [Timeline constraints]

**Dependencies**:
- [Other features, APIs, or decisions this depends on]

---

### 3. Scope

**In scope**:
- [Specific thing 1]
- [Specific thing 2]

**Out of scope**:
- [Specific thing that might be assumed but isn't included]
- [Future enhancement that's NOT part of this]

**Edge cases**:
- [Edge case 1]: [Expected behavior]
- [Edge case 2]: [Expected behavior]

---

### 4. Design (if applicable)

**Figma/Design link**: [URL]

**Key design decisions**:
- [Decision 1 and rationale]
- [Decision 2 and rationale]

**Interaction notes**:
- [Specific interaction behavior]
- [Responsive considerations]

---

### 5. Technical Notes (optional — Engineering can fill)

**Suggested approach**: [If PM has context on how this could be built]

**API changes**: [New endpoints, changed payloads, etc.]

**Data model changes**: [New fields, tables, migrations]

**Risk areas**: [What might be tricky or risky]

---

### 6. Agent Instructions

*This section makes the spec agent-parseable. It's the structured input that allows an AI agent to draft implementation.*

**Task type**: New feature / Bug fix / Enhancement / Refactor

**Files likely affected**: [List known files or areas of codebase]

**Acceptance tests** (as agent-executable checks):
```
GIVEN [precondition]
WHEN [action]
THEN [expected result]
```

**Agent constraints**:
- [Must/must not rules for agent execution]
- [Style/pattern requirements]
- [Performance requirements]

---

## Usage Guide

### For PMs Writing Specs

1. Fill sections 1–3 for every spec. These are non-negotiable.
2. Section 4 when design is involved.
3. Section 5 is optional — engineering may fill this after discussion.
4. Section 6 is the "agent layer" — fill this if the work will be agent-assisted.

### For Agents Consuming Specs

Parse in this order:
1. **Metadata** → understand priority, context, traceability
2. **Section 1** → understand what and why
3. **Section 3** → understand boundaries (scope + edge cases)
4. **Section 6** → get execution instructions
5. **Section 2** → get additional context if needed

### Quality Test

A spec is "ready" when:
- [ ] A new engineer could build it without asking more than 2 clarifying questions
- [ ] An AI agent could draft a PR from sections 1, 3, and 6 alone
- [ ] Success criteria are specific enough to write tests from
- [ ] Scope is explicit — no ambiguity about what's in vs. out
