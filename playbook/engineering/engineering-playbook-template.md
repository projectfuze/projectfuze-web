# Engineering Quality Playbook Template — Client-Facing

**What**: Structure for the engineering playbook handed off to the client at the end of a Turnkey Build.
**When**: Written during Turnkey Build Week 7. Handed off in Week 8.
**Who**: Lucas writes (with AI assistance). Client's engineering team uses as ongoing reference.
**Output**: Self-contained engineering quality guide the team operates independently.

---

## Playbook Structure

### 1. Quality Gate Reference

For each installed gate:

| Gate | Purpose | Pass | Warn | Fail | Config Location |
|------|---------|------|------|------|----------------|
| [Gate name] | [What it checks] | [Pass criteria] | [Warn criteria] | [Fail criteria] | [File/path] |

**How to modify a gate**: [Step-by-step]
**How to add a new gate**: [Step-by-step]
**How to temporarily disable a gate**: [Step-by-step + when this is appropriate]

### 2. Trust Ladder

Current thresholds:

| Level | Criteria | Reviewers Required |
|-------|----------|-------------------|
| Auto-merge | [Criteria] | 0 (gates only) |
| Standard | [Criteria] | 1 |
| Senior | [Criteria] | 2 (senior + domain) |
| Architecture | [Criteria] | 2 senior + team discussion |

**How to adjust thresholds**: [Step-by-step]
**When to adjust**: [Signs thresholds are too strict/loose]

### 3. Agent Safety Net

Patterns detected:

| Pattern | Severity | Auto-fix? | Action |
|---------|----------|-----------|--------|
| [Pattern] | Critical/Warning | Yes/No | [What to do] |

**How to add a new pattern**: [Step-by-step]
**How to tune detection sensitivity**: [Step-by-step]

### 4. CI/CD Pipeline

Pipeline diagram:
```
[Visual representation of pipeline stages]
```

| Stage | Tool | Config Location | Run Time | Purpose |
|-------|------|----------------|----------|---------|
| [Stage] | [Tool] | [Path] | [Time] | [What it does] |

**Pipeline performance targets**:
- Full run: <[X] minutes
- Build: <[X] minutes
- Tests: <[X] minutes
- Gates: <[X] minutes

### 5. Agent PR Workflow

```
Agent generates PR
  → Gates run automatically
  → Trust ladder determines review level
  → Reviewer checks output against spec
  → Merge or feedback to agent
```

**What to check in agent PRs**:
- Does it match the spec intent?
- Are there patterns the safety net might miss?
- Is the approach architecturally sound?
- Would you maintain this code?

**What NOT to check** (gates handle this):
- Style and formatting
- Test coverage
- Security patterns
- Performance regressions

### 6. Monitoring Dashboard

| Metric | Location | Target | Alert Threshold |
|--------|----------|--------|----------------|
| Gate pass rate | [URL/tool] | >90% | <80% |
| Agent PR quality | [URL/tool] | Improving trend | Declining for 2+ weeks |
| Pipeline run time | [URL/tool] | <[X] min | >[Y] min |
| Override rate | [URL/tool] | <5% | >10% |

### 7. Quarterly Health Check

Run quarterly using this checklist:

- [ ] Review gate effectiveness metrics (pass rate, false positive rate)
- [ ] Review trust ladder thresholds (adjust if needed)
- [ ] Review agent output quality trends
- [ ] Update safety net patterns from recent issues
- [ ] Check pipeline performance (any slowdowns?)
- [ ] Review override log (any patterns?)
- [ ] Update this playbook with any changes

### 8. Troubleshooting

| Issue | Likely Cause | Fix |
|-------|-------------|-----|
| Gate keeps failing incorrectly | Threshold too strict | [How to adjust] |
| Agent PRs low quality | Spec quality degraded | Check spec template compliance |
| Pipeline slow | Test suite growth | [How to optimize] |
| Auto-merge causing issues | Criteria too loose | Tighten auto-merge thresholds |
| Too many overrides | Ladder too restrictive | Review and loosen where safe |

---

## Assembly Instructions

1. Use this structure. Fill in all configuration details specific to the client.
2. AI agent drafts from engagement notes + pipeline configuration.
3. Lucas reviews all sections for accuracy.
4. Include exact file paths, config locations, and command examples.
5. Test: could a new senior engineer read this and maintain the quality system?
