# Trust Ladder

**What**: Framework for determining which PRs auto-merge, which need human review, and which need senior review.
**When**: Designed in Turnkey Build Week 2. Installed in Weeks 3–6. Tuned over time.
**Who**: Lucas designs. Engineering team operates and adjusts.
**Output**: Clear rules for review requirements based on PR risk level.

---

## The Ladder

```
Level 3: Auto-Merge          → Low risk, high confidence
Level 2: Standard Review      → Normal risk, one reviewer
Level 1: Senior Review        → High risk, senior + domain expert
Level 0: Architecture Review  → Structural changes, team discussion
```

---

## Level 3: Auto-Merge

PR merges automatically if all quality gates pass. No human review required.

### Criteria (ALL must be true)

- [ ] All quality gates pass (spec compliance, tests, safety net, security, performance)
- [ ] Change is classified as low-risk
- [ ] Test coverage for changed code >90%
- [ ] No database migrations
- [ ] No API changes
- [ ] Files changed ≤ 5
- [ ] Lines changed ≤ 100
- [ ] No changes to auth/payment/security modules

### Typical Auto-Merge PRs
- Copy/text changes
- Style/CSS updates
- Documentation updates
- Dependency patches (no major version bumps)
- Bug fixes with clear test coverage
- Agent-generated code that meets all gate criteria

### Safety: Auto-merge PRs are still logged and can be reverted instantly.

---

## Level 2: Standard Review

One human reviewer required. Quality gates must pass first.

### Criteria (ANY triggers standard review)

- Quality gates pass, but PR doesn't qualify for auto-merge
- Files changed: 6–20
- Lines changed: 101–500
- New API endpoints (non-breaking)
- New features within existing patterns
- Agent-generated code with gate warnings

### Reviewer Selection
- Any team member with familiarity in the affected area
- Round-robin if no domain-specific need
- Review focus: does the output match intent? Any architectural concerns?

### SLA: Review within 4 hours during business hours.

---

## Level 1: Senior Review

Senior engineer + domain expert review required. Quality gates must pass.

### Criteria (ANY triggers senior review)

- Database migrations
- API breaking changes
- Auth/payment/security module changes
- Lines changed > 500
- Files changed > 20
- Performance-sensitive changes
- Third-party integration changes
- Agent-generated code with gate failures that were overridden

### Reviewer Selection
- Senior engineer (defined per team)
- Domain expert for the affected module
- Both must approve

### SLA: Review within 8 hours during business hours.

---

## Level 0: Architecture Review

Team discussion required before merge. Used for structural changes.

### Criteria (ANY triggers architecture review)

- New service or module creation
- Major refactoring (>50% of a module)
- Technology choice changes (new framework, database, etc.)
- CI/CD pipeline changes
- Security model changes
- Changes that affect multiple teams

### Process
1. PR opened with design doc or ADR (Architecture Decision Record)
2. Posted in team channel for async review (24hr window)
3. Synchronous review meeting if needed (30 min)
4. Two senior approvals required

### SLA: Review within 24 hours.

---

## Agent-Specific Rules

| Agent Output | Additional Rules |
|-------------|-----------------|
| Agent PR, first time in module | Bump to Level 2 minimum |
| Agent PR, agent has <5 successful merges | Level 2 minimum |
| Agent PR, agent has 5+ successful merges in this module | Eligible for Level 3 |
| Agent PR with any gate warning | Level 2 minimum |
| Agent PR with any gate failure | Level 1 minimum |

**Trust builds over time**: As an agent demonstrates consistent quality in a module, it earns auto-merge eligibility for that module.

---

## Override Protocol

Sometimes you need to bypass the trust ladder (emergencies, hotfixes).

### Override Process
1. Create PR with `hotfix` or `emergency` label
2. One reviewer with override permission approves
3. Override is logged with reason
4. Post-merge: backfill review within 24 hours
5. If override rate >5% in any month, review trust ladder configuration

### Override Permissions
- CTO / VP Engineering: full override
- Senior engineers: Level 1→2 override only
- No one: Level 0 bypass (structural changes always need review)

---

## Tuning

Review the trust ladder monthly for the first 3 months, then quarterly.

### Metrics to Track

| Metric | Target | What It Tells You |
|--------|--------|-------------------|
| Auto-merge rate | 20–40% | Higher = trust is building. Lower = gates too strict or PRs too complex. |
| Override rate | <5% | Higher = ladder too restrictive or emergencies too frequent |
| Post-merge issues from auto-merged PRs | <2% | Higher = auto-merge criteria too loose |
| Review turnaround time | Within SLA | Longer = need more reviewers or better distribution |
| Agent auto-merge rate | Growing over time | Should increase as agents improve and trust builds |

### Adjustment Process
1. Review metrics
2. Identify: are we too strict (bottleneck) or too loose (quality issues)?
3. Adjust one threshold at a time
4. Monitor for 2 weeks before next adjustment
