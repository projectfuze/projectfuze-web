# Agent-Native Environment Checklist

**What**: 4-level assessment of an engineering environment's readiness for AI agent execution.
**When**: Used during the Scan (Week 1) and referenced during Turnkey Build.
**Who**: Lucas assesses. Feeds into Engineering Quality Scorecard.
**Output**: Agent readiness level (0–3) with specific gaps identified.

---

## Level 0: Not Agent-Ready

The environment doesn't support agent execution at all.

- [ ] No AI coding tools in use
- [ ] Manual deployment process
- [ ] No automated testing
- [ ] Development environment requires extensive manual setup
- [ ] No documentation of codebase patterns or conventions

**Diagnosis**: Start with basic CI/CD and testing before introducing agents.

---

## Level 1: Agent-Assisted (Individual)

Individual developers use AI tools, but the environment doesn't support autonomous agent work.

### Checklist

- [ ] AI coding tool in use (Copilot, Cursor, etc.)
- [ ] Basic CI pipeline exists (lint + test + build)
- [ ] Some automated tests (>30% coverage)
- [ ] README or docs explain basic setup
- [ ] Consistent code formatting enforced (Prettier, ESLint, etc.)

### Gaps at This Level
- [ ] No quality gates beyond basic CI
- [ ] No structured spec format for agents to consume
- [ ] No agent-specific review process
- [ ] No trust ladder for automated vs. human review
- [ ] Environment setup requires human intervention

**Diagnosis**: Agents help individuals but can't operate independently.

---

## Level 2: Agent-Capable (Supervised)

Agents can generate code from structured input, but every output requires human review.

### Checklist

- [ ] CI/CD pipeline with meaningful checks (not just "does it build?")
- [ ] Test coverage >60%
- [ ] Structured spec format exists (agent can parse requirements)
- [ ] PR template enforces structure (description, linked issue, test plan)
- [ ] Code review process is consistent and documented
- [ ] Linting covers style + basic quality (not just formatting)
- [ ] Local dev environment reproducible (Docker, devcontainer, etc.)
- [ ] Agent can clone repo and run tests without human help
- [ ] Basic security scanning in pipeline

### Gaps at This Level
- [ ] No intent-matching gates (PR matches spec?)
- [ ] No agent-specific safety net
- [ ] No trust ladder (everything requires human review)
- [ ] No parallel execution capability
- [ ] Review bottleneck: humans review every agent line

**Diagnosis**: Agents can work, but human review is the bottleneck.

---

## Level 3: Agent-Native (Autonomous with Guardrails)

Agents execute autonomously within defined guardrails. Human review is at artifact level, not line level.

### Checklist

- [ ] Quality gates validate output against spec intent
- [ ] Agent safety net catches common mistakes pre-review
- [ ] Trust ladder defined: auto-merge / human review / senior review thresholds
- [ ] Test coverage >80% with quality checks (not just line coverage)
- [ ] Security scanning catches agent-specific patterns
- [ ] Performance checks prevent regressions
- [ ] Parallel agent execution is safe (isolation, conflict prevention)
- [ ] Agent output metadata tracked (which agent, what prompt, confidence level)
- [ ] Rollback procedures work for agent-generated changes
- [ ] Monitoring/alerting for agent output quality
- [ ] Agent prompts are version-controlled and reviewed
- [ ] New agent capabilities can be added without pipeline changes

### What This Enables
- Agents can generate PRs that auto-merge for low-risk changes
- Multiple agents can work on different features simultaneously
- Human review focuses on strategy and architecture, not line-by-line code
- Quality is verified by the system, not by human attention

**Diagnosis**: The system trusts agents within defined boundaries.

---

## Assessment Summary

| Area | Level 0 | Level 1 | Level 2 | Level 3 |
|------|---------|---------|---------|---------|
| CI/CD | None | Basic | Meaningful | Intent-matching gates |
| Testing | None | >30% | >60% | >80% + quality |
| Review | Ad-hoc | Exists | Consistent | Trust ladder |
| Specs | None | Informal | Structured | Agent-parseable |
| Security | None | None | Basic | Agent-aware |
| Monitoring | None | None | Basic | Agent quality tracking |

---

## Scoring

**Current Level**: ___ (0/1/2/3)

**Gaps to Next Level**:
1. ___
2. ___
3. ___

**Priority Recommendations**:
1. ___ (highest leverage)
2. ___
3. ___

**Estimated Time to Next Level**: ___ (based on gaps and team capacity)
