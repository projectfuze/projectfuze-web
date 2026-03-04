# System Playbook Template — Client-Facing

**What**: Structure for the playbook that gets handed off to the client at the end of the Build.
**When**: Written during Build Phase 3 (Week 7), AI-assisted. Handed off in Week 8.
**Who**: David writes (with AI assistance). Client's team uses as ongoing reference.
**Output**: A self-contained document the team uses to operate the system without Project Fuze.

---

## Playbook Structure

### Cover

```
[CLIENT NAME] SYSTEM PLAYBOOK
Built by Project Fuze — [Date]

This is your team's operating manual for the AI-native backbone
we installed together. Everything you need to run, maintain, and
evolve the system is in this document.
```

---

### 1. System Overview (2 pages)

**What was installed**:
- [Summary of the backbone: decision architecture, execution flow, agent workflows, quality gates]

**Before / After**:
| Dimension | Before | After |
|-----------|--------|-------|
| Decision flow | [How it was] | [How it is now] |
| Spec quality | [How it was] | [How it is now] |
| Handoff integrity | [How it was] | [How it is now] |
| Agent readiness | [How it was] | [How it is now] |
| Quality verification | [How it was] | [How it is now] |

**Your Compounding Org Score**:
- Start of engagement: [X.X / 5]
- End of engagement: [X.X / 5]
- Target (30-60-90 days): [X.X / 5]

---

### 2. Decision Architecture (2–3 pages)

- Goal hierarchy: how goals → initiatives → projects → tasks are structured
- Decision Protocol: types, approvers, documentation, agent access
- PM tool configuration: custom fields, views, workflows
- Decision log location and format

*Include screenshots of PM tool configuration.*

---

### 3. Execution Flow (2–3 pages)

- Stage-by-stage pipeline: meeting → agreement → decision → spec → build → review → ship
- Meeting output templates (reference or inline)
- Spec template (reference or inline)
- Tool integration map

*Include flow diagram.*

---

### 4. Agent Workflows (2–3 pages)

For each agent workflow installed:

| Workflow | Trigger | Agent Action | Human Review | Output |
|----------|---------|-------------|-------------|--------|
| [Name] | [What triggers it] | [What the agent does] | [What human checks] | [What it produces] |

- Agent prompt library (location and how to refine)
- How to add a new agent workflow
- Common agent failures and fixes

---

### 5. Quality Gates (2–3 pages, Turnkey only)

*Lucas's section*

For each quality gate installed:

| Gate | What It Checks | Pass Criteria | Failure Action |
|------|---------------|--------------|----------------|
| [Name] | [What it validates] | [When it passes] | [What happens on fail] |

- Trust ladder: what auto-merges, what needs human review, what needs senior review
- How to adjust trust levels
- How to add new gates
- CI/CD pipeline diagram

---

### 6. Operating Procedures (1–2 pages)

**Daily**:
- [ ] [Daily procedure — e.g., review agent queue, check blocked items]

**Per cycle**:
- [ ] [Cycle procedure — e.g., run planning meeting, produce cycle artifact]
- [ ] [Review procedure — e.g., check retro for compounding patterns]

**Monthly**:
- [ ] [Monthly check — e.g., review decision log, update goals if needed]

**Quarterly**:
- [ ] [Quarterly review — e.g., re-score Compounding Org dimensions, update strategy]

---

### 7. Troubleshooting (1 page)

| Symptom | Likely Cause | Fix |
|---------|-------------|-----|
| Agents producing bad output | Spec quality degraded | Review recent specs against template |
| Decisions not being followed | Decision Protocol not enforced | Re-train on protocol, check PM tool setup |
| Quality gate false positives | Gate configuration too strict | Adjust gate thresholds (see Section 5) |
| Team reverting to old habits | Training didn't stick | Re-run relevant training module |
| New team member not following system | Onboarding gap | Walk through Sections 2–4 with them |

---

### 8. Evolution Guide (1 page)

**How to evolve the system**:
- Add new agent workflows as new patterns emerge
- Refine agent prompts quarterly based on output quality
- Adjust quality gate thresholds as trust grows
- Update meeting output templates based on what teams actually need
- Re-score Compounding Org dimensions quarterly (use [30-60-90 Guide](../handoff/30-60-90-self-assessment.md))

**Signs the system is working**:
- Time from decision to shipped feature is decreasing
- Agent output quality is improving (less human revision needed)
- Fewer "what did we decide?" questions in Slack
- New team members are productive faster

**Signs the system needs attention**:
- Specs are getting shorter / missing sections
- Agent output quality is degrading
- Team is bypassing decision protocol
- Quality gates are being overridden regularly

---

## Assembly Instructions

1. Use this structure. Customize sections for the client's specific setup.
2. AI agent drafts from engagement notes + configuration details.
3. David reviews all sections. Lucas reviews Sections 5–6 (Turnkey only).
4. Include screenshots and diagrams — the playbook should be visual.
5. Test: could a new team member read this and understand the system?
