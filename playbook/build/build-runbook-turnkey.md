# Build Runbook — Turnkey (David + Lucas)

**What**: 8-week operations guide for the Turnkey engagement tier ($25K/mo).
**When**: Used by David and Lucas throughout the Build engagement.
**Who**: David handles Product Intent (~10hrs/week). Lucas handles Compound Engineering (~10hrs/week).
**Output**: Full backbone — Product Intent + Quality Gates — that the client team operates independently.

---

## Overview

David's workstream is identical to the [Architect Runbook](build-runbook-architect.md). This document covers Lucas's parallel workstream and the coordination touchpoints.

| Phase | Weeks | David Focus | Lucas Focus |
|-------|-------|-------------|-------------|
| Architect | 1–2 | Decision + Execution Architecture | Engineering Quality Assessment + Gate Design |
| Install | 3–6 | Workflows, piloting, integration | Quality gates, safety nets, trust ladder |
| Transfer | 7–8 | Training + Handoff | Engineering training + Handoff |

**Total**: 80 hours David + 80 hours Lucas over 8 weeks.

---

## Lucas's Workstream

### Week 1 — Engineering Quality Assessment (10hrs)

- [ ] Deep codebase analysis via AI agents (3hrs)
  - Code structure, architecture patterns, tech debt
  - Test coverage analysis
  - Dependency health
- [ ] CI/CD pipeline audit (2hrs)
  - Pipeline stages, run times, failure rates
  - What's automated, what's manual
  - Deployment confidence level
- [ ] Code review process audit (2hrs)
  - Review turnaround times
  - Review depth and consistency
  - Who reviews what, bottlenecks
- [ ] Developer experience audit (2hrs)
  - Time from "know what to build" → "PR ready"
  - Local dev environment quality
  - Onboarding time for new engineers
- [ ] Quality gate architecture design (1hr)
  - Preliminary gate design based on findings

**Deliverable**: Engineering Quality Audit + Gate Architecture Plan

### Week 2 — Quality Gate Design (10hrs)

- [ ] Design quality gates for CI/CD pipeline (3hrs)
  - What each gate checks (spec compliance, tests, security, performance)
  - Pass/fail criteria
  - Failure actions (block, warn, escalate)
- [ ] Design agent review framework (3hrs)
  - How to review agent-generated code differently from human code
  - Automated checks specific to agent output patterns
  - Common agent mistakes to detect
- [ ] Map trust ladder (2hrs)
  - Use [Trust Ladder template](../engineering/trust-ladder.md)
  - Auto-merge thresholds
  - Human review thresholds
  - Senior review thresholds
- [ ] Testing strategy for agent-generated code (2hrs)
  - Test requirements per PR type
  - Coverage expectations
  - Integration test requirements

**Deliverable**: Gate Spec + Trust Ladder + Testing Strategy

### Week 3 — First Gate Build (10hrs)

- [ ] Build quality gate #1: validates PR output matches spec intent (5hrs)
  - Implement in client's CI/CD pipeline
  - Connect to spec metadata
  - Test with real PRs
- [ ] CI/CD integration (2hrs)
  - Gate runs automatically on every PR
  - Results visible in PR interface
  - Clear pass/fail with actionable feedback
- [ ] Pilot test with same project David is piloting (2hrs)
  - Run gate on the project David is using for workflow pilot
  - Collect feedback from engineers
- [ ] Documentation (1hr)

**Integration Point #1** (1hr joint — David + Lucas):
End-to-end test: David's spec → agent draft → Lucas's gate → human review. Verify the full flow works.

**Deliverable**: Working Gate #1 + CI/CD Integration + Pilot Results

### Week 4 — Second Gate + Agent Safety Net (10hrs)

- [ ] Build quality gate #2: testing requirements for agent PRs (4hrs)
  - Enforce minimum test coverage for agent-generated code
  - Check test quality (not just existence)
- [ ] Build agent safety net (4hrs)
  - Catches common agent mistakes pre-review
  - Patterns: unused imports, missing error handling, style violations, security issues
  - Runs before human review to reduce review burden
- [ ] Refine gate #1 from feedback (2hrs)
  - Adjust sensitivity based on pilot results
  - Reduce false positives

**Deliverable**: Gate #2 + Agent Safety Net + Refined Gate #1

### Week 5 — Integration (10hrs)

- [ ] Product intent metadata → engineering quality validation (4hrs)
  - Gate checks spec compliance using structured intent
  - PR must reference spec, success criteria must be testable
- [ ] Parallel agent execution architecture (3hrs)
  - How multiple agents can work on different tasks simultaneously
  - Isolation, conflict prevention, merge strategy
- [ ] End-to-end testing (3hrs)
  - Full flow: decision → spec → agent → gates → verified output
  - Test with multiple simultaneous features

**Integration Point #2** (1hr joint — David + Lucas):
Full demo to client leadership. Show end-to-end: structured decision → spec → agent PR → quality gates → verified output. Mid-engagement check on progress and priorities.

**Deliverable**: Integrated Quality System + Parallel Execution Architecture

### Week 6 — Hardening (10hrs)

- [ ] Edge cases: hotfixes, rollbacks, multi-repo (3hrs)
  - Override protocol for emergency deploys
  - Rollback procedures with gate awareness
  - Multi-repo gate coordination (if applicable)
- [ ] Optimize gate performance (3hrs)
  - Reduce false positives from 3 weeks of data
  - Speed up pipeline (target: <5 min for standard PR)
  - Gate failure messaging: make it actionable
- [ ] Build monitoring/alerting (2hrs)
  - Dashboard: gate pass rates, agent output quality, pipeline health
  - Alerts: sudden quality drops, pipeline failures, trust level breaches
- [ ] Harden safety nets from usage data (2hrs)
  - Analyze 3 weeks of agent PRs
  - Add new patterns to safety net
  - Tune detection sensitivity

**Deliverable**: Hardened Quality System + Monitoring Dashboard

### Week 7 — Engineering Training (10hrs)

- [ ] Senior engineers: maintaining gates, adding new ones, tuning trust levels (2hrs)
  - How gates work under the hood
  - How to add a new gate
  - How to adjust trust ladder thresholds
  - Gate configuration files and how to modify
- [ ] All engineers: working with agent PRs, interpreting gate failures (2hrs)
  - What agent PRs look like, how to review them efficiently
  - Gate failure messages: what they mean, how to fix
  - When to adjust vs. when to escalate
- [ ] Engineering Quality Playbook (4hrs, AI-assisted)
  - Use [Engineering Playbook Template](../engineering/engineering-playbook-template.md)
  - Document all gates, configurations, trust levels, procedures
- [ ] Pair with tech lead on independent operation (2hrs)
  - Tech lead runs the system while Lucas observes
  - Fix any gaps, answer questions, build confidence

**Deliverable**: 2 Engineering Training Sessions + Engineering Quality Playbook

### Week 8 — Handoff (10hrs)

- [ ] Observe team running quality system independently (2hrs async)
  - Monitor gate results, agent PR quality, pipeline health
  - Note what the team handles well and where they struggle
- [ ] Final pipeline optimization (3hrs)
  - Last round of gate tuning
  - Performance optimization
  - Clean up any experimental configurations
- [ ] Quarterly Quality Health Check template (2hrs)
  - Self-assessment for engineering team to run quarterly
  - Gate effectiveness metrics
  - Agent output quality trends
  - Pipeline performance benchmarks
- [ ] Contribute to joint final presentation (1hr)
  - Engineering before/after metrics
  - Gate effectiveness data
  - Agent output quality improvement
- [ ] Joint handoff with David (1hr)
- [ ] Document all configs, prompts, gate logic (1hr)
  - Ensure everything is in the Engineering Quality Playbook
  - No undocumented configurations

**Deliverable**: Final Engineering Report + Playbook + Quarterly Health Check Template

---

## David + Lucas Coordination

| Touchpoint | When | Duration | Purpose |
|------------|------|----------|---------|
| Kickoff | Week 1 | 60 min | Align on engagement plan, share Scan findings, agree on pilot project |
| Weekly sync | Every week | 30 min | Progress update, cross-workstream dependencies, course corrections |
| Integration #1 | End of Week 3 | 60 min | E2E test: spec → agent → gate → review |
| Integration #2 | End of Week 5 | 60 min | Full demo to leadership, mid-engagement check |
| Final handoff | Week 8 | 60 min | Joint handoff to client |

**Total coordination**: ~8 hours over 8 weeks (included in each person's 10hrs/week budget).

### Coordination Protocol

- Shared Slack channel for async communication
- Shared PM board for engagement tasks
- David's spec template feeds Lucas's gate validation
- Lucas's agent safety net catches issues David's spec structure prevents
- Joint decisions on: pilot project, timeline changes, client communication

---

## Post-Engagement

- [ ] Run [Retrospective](../handoff/retrospective-template.md) (30 min, David + Lucas)
- [ ] Update all playbook templates based on learnings
- [ ] Add patterns to [Pattern Library](../compounding/pattern-library.md)
- [ ] Refine agent prompts in [Agent Prompts](../compounding/agent-prompts.md)
- [ ] Update engineering templates based on Lucas's learnings
- [ ] Calibrate gate templates for future engagements
