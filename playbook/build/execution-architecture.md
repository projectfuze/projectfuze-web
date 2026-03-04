# Execution Architecture Template

**What**: Template for designing a client's horizontal execution flow — how work moves from decision to release.
**When**: Build Phase 1, Week 2. Second major deliverable.
**Who**: David designs. Client's full team operates.
**Output**: Execution Architecture + Spec Template + Meeting Output Templates.

---

## 1. Current Execution Flow (As-Is)

Map how work currently moves through the org:

```
[Trigger] → [Discussion] → [Decision] → [Spec] → [Build] → [Review] → [Ship]
```

For each stage, document:

| Stage | How It Happens | Who's Involved | Artifact Produced | Time Taken | Signal Lost |
|-------|---------------|----------------|-------------------|------------|-------------|
| Trigger | | | | | |
| Discussion | | | | | |
| Decision | | | | | |
| Spec | | | | | |
| Build | | | | | |
| Review | | | | | |
| Ship | | | | | |

**Key questions**:
- Where does context get lost between stages?
- Where do things get stuck or bottleneck?
- What gets re-discussed because the original decision wasn't clear?

---

## 2. Target Execution Flow (To-Be)

### The Pipeline

```
Meeting/Trigger → Agreement → Decision Record → Structured Spec → Agent/Human Build → Quality Gate Review → Verified Ship
```

Each stage has:
- **Defined input** (what it receives from the previous stage)
- **Defined output** (artifact it produces for the next stage)
- **Clear owner** (who's responsible)
- **Quality check** (what prevents bad output from moving forward)
- **Agent role** (what agents handle vs. humans)

### Stage Definitions

#### 1. Meeting/Trigger → Agreement
- **Input**: Problem, opportunity, or request
- **Output**: Agreement on what to do (using Meeting Output Template)
- **Owner**: Meeting facilitator
- **Quality check**: Agreement includes: what, why, success criteria, constraints
- **Agent role**: AI summarizes meeting, extracts agreements

#### 2. Agreement → Decision Record
- **Input**: Agreement from meeting
- **Output**: Formal decision record (per Decision Protocol)
- **Owner**: Decision approver (based on type)
- **Quality check**: Decision is typed, signed off, documented, findable
- **Agent role**: AI drafts decision record from meeting summary

#### 3. Decision Record → Structured Spec
- **Input**: Decision record with context
- **Output**: Spec using [Spec Template](spec-template.md)
- **Owner**: Product/PM
- **Quality check**: Spec passes "agent-parseable" test
- **Agent role**: AI drafts spec from decision + context; human reviews

#### 4. Structured Spec → Build
- **Input**: Approved spec
- **Output**: Code, design, or artifact
- **Owner**: Assigned team member or agent
- **Quality check**: Output matches spec intent
- **Agent role**: Agent generates draft; human guides

#### 5. Build → Quality Gate Review
- **Input**: Built artifact
- **Output**: Verified artifact or feedback
- **Owner**: Reviewer (human or automated)
- **Quality check**: Quality gates validate against spec requirements
- **Agent role**: Automated gates + human review at artifact level

#### 6. Quality Gate Review → Verified Ship
- **Input**: Verified artifact
- **Output**: Deployed feature
- **Owner**: Engineering
- **Quality check**: CI/CD pipeline, staging validation
- **Agent role**: Automated deployment with safety nets

---

## 3. Meeting-to-Artifact Pipeline

Every meeting type produces a defined output:

| Meeting Type | Cadence | Required Output | Template |
|-------------|---------|-----------------|----------|
| Strategy/Planning | Quarterly | Goals + Initiatives list | [See Meeting Output Templates](meeting-output-templates.md) |
| Sprint/Cycle Planning | Per cycle | Committed work + assignments | [See Meeting Output Templates](meeting-output-templates.md) |
| Design Review | As needed | Approved designs + feedback items | [See Meeting Output Templates](meeting-output-templates.md) |
| Standup/Sync | Daily/2x week | Blockers + status updates | [See Meeting Output Templates](meeting-output-templates.md) |
| Retrospective | Per cycle | Action items with owners + deadlines | [See Meeting Output Templates](meeting-output-templates.md) |
| Decision Meeting | As needed | Decision record | Decision Protocol format |

**Rule**: No meeting ends without its defined artifact. If the artifact can't be produced, the meeting's purpose wasn't achieved.

---

## 4. Tool Integration Map

| From | To | What Flows | How |
|------|------|-----------|-----|
| Meetings (Zoom/etc.) | PM Tool | Agreements, decisions | AI agent processes recording → creates tickets |
| PM Tool | Code (GitHub/etc.) | Spec context | Linked issues, branch naming, PR templates |
| Code | CI/CD | Code changes | Automated pipeline |
| CI/CD | PM Tool | Status updates | Integration (auto-move tickets) |
| PM Tool | Slack | Notifications | Key events only (not noise) |

---

## 5. Implementation Checklist

- [ ] Map current execution flow with client
- [ ] Design target execution flow
- [ ] Define stage inputs, outputs, owners, and quality checks
- [ ] Create Meeting Output Templates for each meeting type
- [ ] Configure tool integrations
- [ ] Build first end-to-end flow (one feature, trigger to ship)
- [ ] Test: can you trace a shipped feature back through every stage?
- [ ] Document for System Playbook

---

## Deliverables

1. **Execution Architecture Document** — This template filled out with current → target flow
2. **Meeting Output Templates** — See [meeting-output-templates.md](meeting-output-templates.md)
3. **Spec Template** — See [spec-template.md](spec-template.md)
4. **Tool Integration Map** — What connects to what and how
