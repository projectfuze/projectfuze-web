# CI/CD Audit Checklist

**What**: Structured assessment of a client's CI/CD pipeline maturity.
**When**: Used during the Scan (Week 1, Lucas's async deep dive) and Turnkey Build (Week 1).
**Who**: Lucas conducts the audit.
**Output**: CI/CD maturity score + specific recommendations for the Engineering Quality Scorecard.

---

## Pipeline Stages

For each stage, assess: exists? / automated? / reliable? / fast?

### Source Control

- [ ] Git-based version control
- [ ] Branch protection on main/production branch
- [ ] Required PR reviews before merge
- [ ] Branch naming convention enforced
- [ ] Commit message convention (conventional commits, etc.)
- [ ] No direct commits to main

**Score**: ___ / 5
**Notes**: ___

### Build

- [ ] Automated build on every PR
- [ ] Build completes in <5 minutes
- [ ] Build failures clearly reported with actionable messages
- [ ] Consistent build environment (Docker, Nix, etc.)
- [ ] Dependency caching for speed
- [ ] Build works locally (matches CI)

**Score**: ___ / 5
**Notes**: ___

### Testing

- [ ] Automated test suite runs on every PR
- [ ] Unit tests exist and are meaningful
- [ ] Integration tests exist for critical paths
- [ ] Test coverage measured and reported
- [ ] Tests are reliable (no flaky tests, or flaky tests quarantined)
- [ ] Test run completes in <10 minutes
- [ ] Test failures block merge

**Score**: ___ / 5
**Notes**: ___

### Code Quality

- [ ] Linting automated (ESLint, Rubocop, etc.)
- [ ] Formatting enforced (Prettier, Black, etc.)
- [ ] Type checking (TypeScript strict, mypy, etc.)
- [ ] Complexity checks
- [ ] Dead code detection
- [ ] Code quality tool (SonarQube, CodeClimate, etc.)

**Score**: ___ / 5
**Notes**: ___

### Security

- [ ] Dependency vulnerability scanning (Dependabot, Snyk, etc.)
- [ ] Secret detection (git-secrets, truffleHog, etc.)
- [ ] SAST (Static Application Security Testing)
- [ ] Container scanning (if applicable)
- [ ] License compliance checking

**Score**: ___ / 5
**Notes**: ___

### Deployment

- [ ] Automated deployment to staging
- [ ] Staging environment matches production
- [ ] One-click deployment to production
- [ ] Rollback procedure exists and is tested
- [ ] Deployment doesn't require downtime
- [ ] Deployment audit trail (who deployed what, when)
- [ ] Feature flags for gradual rollout

**Score**: ___ / 5
**Notes**: ___

### Monitoring & Observability

- [ ] Application error tracking (Sentry, Bugsnag, etc.)
- [ ] Performance monitoring (APM)
- [ ] Uptime monitoring
- [ ] Log aggregation
- [ ] Alerting for critical issues
- [ ] Dashboard for key metrics

**Score**: ___ / 5
**Notes**: ___

---

## Overall CI/CD Maturity

| Stage | Score Range | Description |
|-------|-----------|-------------|
| 0 | 0–7 | No pipeline or purely manual |
| 1 | 8–14 | Basic automation, significant gaps |
| 2 | 15–21 | Solid pipeline, some gaps |
| 3 | 22–28 | Comprehensive pipeline, agent-ready |
| 4 | 29–32 | Advanced, self-healing, fully automated |
| 5 | 33–35 | Best-in-class, continuously improving |

**Total Score**: ___ / 35
**Stage**: ___

---

## Pipeline Performance Metrics

| Metric | Current | Target |
|--------|---------|--------|
| Build time | ___ min | <5 min |
| Test suite time | ___ min | <10 min |
| Full pipeline time | ___ min | <15 min |
| Deployment frequency | ___/week | Daily+ |
| Deployment failure rate | ___% | <5% |
| Mean time to recovery | ___ | <1 hour |
| Change failure rate | ___% | <10% |

---

## Top 3 Recommendations

1. **___**: [Specific recommendation, expected impact, estimated effort]
2. **___**: [Specific recommendation, expected impact, estimated effort]
3. **___**: [Specific recommendation, expected impact, estimated effort]
