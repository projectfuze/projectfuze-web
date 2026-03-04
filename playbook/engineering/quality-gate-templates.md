# Quality Gate Templates

**What**: Common quality gate configurations for CI/CD pipelines.
**When**: Installed during Turnkey Build (Weeks 3–6). Adapted per client.
**Who**: Lucas designs and installs. Client's engineering team maintains.
**Output**: Automated quality gates that validate agent and human output.

---

## Gate Architecture

```
PR Submitted
  → Gate 1: Spec Compliance
  → Gate 2: Test Requirements
  → Gate 3: Agent Safety Net
  → Gate 4: Security Scan
  → Gate 5: Performance Check
  → Trust Ladder Decision
  → Human Review (if required)
  → Merge
```

Each gate: **Pass** (proceed) / **Warn** (proceed with flag) / **Fail** (block until fixed).

---

## Gate 1: Spec Compliance

**Purpose**: Validates that PR output matches the spec it was built against.

**Checks**:
- [ ] PR references a spec/issue (linked ticket exists)
- [ ] Spec has success criteria defined
- [ ] PR description maps to spec success criteria
- [ ] Files changed align with spec's "files likely affected"
- [ ] No changes outside spec scope (unexpected file modifications)

**Pass criteria**: All checks pass.
**Warn**: Missing PR description mapping (allow with flag).
**Fail**: No linked spec, or changes outside scope without explanation.

**Configuration**:
```yaml
gate_spec_compliance:
  require_linked_issue: true
  require_success_criteria: true
  require_pr_description: true
  scope_check: warn  # warn or fail for out-of-scope changes
  skip_for: [hotfix, revert]  # labels that bypass this gate
```

---

## Gate 2: Test Requirements

**Purpose**: Enforces minimum testing standards, especially for agent-generated code.

**Checks**:
- [ ] Test coverage meets minimum threshold
- [ ] New code has corresponding tests
- [ ] Tests actually test behavior (not just existence)
- [ ] Integration tests for cross-module changes
- [ ] No test regressions (existing tests still pass)

**Pass criteria**: Coverage threshold met, no regressions, new tests for new code.
**Warn**: Coverage slightly below threshold (<5% gap).
**Fail**: Coverage significantly below threshold, test regressions, or no tests for new code.

**Configuration**:
```yaml
gate_test_requirements:
  min_coverage: 80  # percentage
  coverage_warn_threshold: 75
  require_new_tests: true
  check_test_quality: true  # basic heuristic for test substance
  agent_pr_multiplier: 1.1  # higher bar for agent PRs
```

---

## Gate 3: Agent Safety Net

**Purpose**: Catches common agent mistakes before human review.

**Common Agent Patterns to Detect**:
- [ ] Unused imports or variables
- [ ] Missing error handling for external calls
- [ ] Hardcoded values that should be configurable
- [ ] Style/formatting violations (auto-fixable)
- [ ] Console.log / debug statements left in
- [ ] TODO/FIXME comments without linked issues
- [ ] Overly complex functions (cyclomatic complexity)
- [ ] Duplicate code that could use existing utilities
- [ ] Missing null/undefined checks
- [ ] Security anti-patterns (SQL injection, XSS, etc.)

**Pass criteria**: No critical patterns detected.
**Warn**: Minor patterns detected (style issues, TODOs).
**Fail**: Critical patterns (security, missing error handling).

**Configuration**:
```yaml
gate_agent_safety_net:
  enabled_for: [agent, all]  # can target agent PRs only or all
  critical_patterns: [security, error_handling, hardcoded_secrets]
  warning_patterns: [unused_code, style, todos, complexity]
  auto_fix: [formatting, unused_imports]  # fix automatically, don't block
  complexity_threshold: 15  # cyclomatic complexity
```

---

## Gate 4: Security Scan

**Purpose**: Automated security checks for common vulnerabilities.

**Checks**:
- [ ] No hardcoded secrets (API keys, passwords, tokens)
- [ ] No SQL injection patterns
- [ ] No XSS vulnerabilities
- [ ] Dependency vulnerability scan
- [ ] No sensitive file changes (.env, credentials)
- [ ] Proper input validation for user-facing endpoints

**Pass criteria**: No security issues detected.
**Warn**: Low-severity dependency vulnerabilities.
**Fail**: Any hardcoded secret, injection pattern, or high-severity vulnerability.

**Configuration**:
```yaml
gate_security:
  secret_scan: true
  dependency_scan: true
  injection_patterns: true
  sensitive_files: [.env, credentials.*, secrets.*]
  severity_threshold: medium  # fail on medium+, warn on low
```

---

## Gate 5: Performance Check

**Purpose**: Prevents performance regressions.

**Checks**:
- [ ] No N+1 query patterns
- [ ] Bundle size within threshold (frontend)
- [ ] No blocking operations in hot paths
- [ ] Database migration safety (no locks on large tables)
- [ ] API response time benchmarks (if available)

**Pass criteria**: No performance regressions detected.
**Warn**: Potential issues that need human judgment.
**Fail**: Clear N+1 patterns, blocking operations, unsafe migrations.

**Configuration**:
```yaml
gate_performance:
  n_plus_one_detection: true
  bundle_size_threshold: 5  # percentage increase allowed
  migration_safety: true
  benchmark_comparison: false  # enable after baseline established
```

---

## Adding a New Gate

1. Define: what does this gate check? What's pass/warn/fail?
2. Implement: write the check logic (script, linter rule, CI step)
3. Configure: set thresholds and targeting (all PRs vs. agent PRs)
4. Test: run against 10 recent PRs, verify results match expectations
5. Deploy: add to CI/CD pipeline in "warn-only" mode for 1 week
6. Activate: switch to "fail" mode after tuning
7. Document: add to this file and the Engineering Quality Playbook

---

## Tuning Guide

After each engagement, review gate effectiveness:

| Metric | Target | Action if Off |
|--------|--------|--------------|
| False positive rate | <10% | Loosen thresholds or refine patterns |
| False negative rate | <5% | Tighten thresholds or add patterns |
| Gate run time | <2 min per gate | Optimize checks, parallelize |
| Override rate | <5% | Investigate why gates are being bypassed |
