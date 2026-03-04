# 30-60-90 Day Self-Assessment Guide

**What**: Post-engagement self-evaluation guide for the client team to measure system health.
**When**: Created during Build Week 8. Client uses at 30, 60, and 90 days after handoff.
**Who**: David creates. Client's team lead (or designated system owner) runs it.
**Output**: Self-assessed health check that surfaces whether the system is compounding or degrading.

---

## Instructions

Run this assessment at 30, 60, and 90 days after Project Fuze handoff. Each takes ~30 minutes. Compare scores over time — the trend matters more than any single number.

---

## Section 1: System Usage (Score each 1–5)

| Question | 30 day | 60 day | 90 day |
|----------|--------|--------|--------|
| Are specs consistently using the template? | | | |
| Are meeting outputs being produced? | | | |
| Is the decision protocol being followed? | | | |
| Are agents being used for spec-to-draft? | | | |
| Are quality gates running on every PR? (Turnkey) | | | |

**1** = Abandoned. **3** = Mostly followed. **5** = Second nature.

---

## Section 2: System Effectiveness (Score each 1–5)

| Question | 30 day | 60 day | 90 day |
|----------|--------|--------|--------|
| Is time from decision to shipped feature decreasing? | | | |
| Is agent output quality improving (less human revision)? | | | |
| Are there fewer "what did we decide?" moments? | | | |
| Is new team member onboarding faster? | | | |
| Do specs arrive with enough context to build from? | | | |

**1** = Worse than before. **3** = About the same. **5** = Clearly improving.

---

## Section 3: Compounding (Score each 1–5)

| Question | 30 day | 60 day | 90 day |
|----------|--------|--------|--------|
| Are templates being updated based on experience? | | | |
| Are agent prompts being refined? | | | |
| Is each cycle noticeably easier than the last? | | | |
| Are patterns being captured for reuse? | | | |
| Is the team adding new workflows on their own? | | | |

**1** = Not at all. **3** = Sometimes. **5** = Consistently.

---

## Section 4: Warning Signs

Check any that apply:

### 30-Day Warnings
- [ ] Team has reverted to old spec format
- [ ] Meeting outputs stopped being produced
- [ ] Agents aren't being used for drafting
- [ ] Decision protocol is being bypassed
- [ ] Quality gates are being overridden regularly

### 60-Day Warnings
- [ ] System Playbook hasn't been opened since handoff
- [ ] New team members aren't being trained on the system
- [ ] Agent output quality is declining (no prompt refinement)
- [ ] Trust ladder hasn't been reviewed
- [ ] Sprint cycles feel the same speed as before

### 90-Day Warnings
- [ ] Can't clearly point to what's better than 90 days ago
- [ ] System owner role has gone vacant
- [ ] Tool configuration has drifted from spec
- [ ] No retrospective has mentioned the system in 6+ weeks
- [ ] The team can't describe the system to a new hire

---

## Scoring

### Per-Section Score
Add scores per section, divide by number of questions. Score range: 1.0–5.0.

### Overall Health Score
Average of Section 1 + Section 2 + Section 3.

### Interpretation

| Score Range | Health | Action |
|-------------|--------|--------|
| 4.0–5.0 | Thriving | Keep compounding. Share learnings. |
| 3.0–3.9 | Healthy | Normal. Identify 1–2 areas to strengthen. |
| 2.0–2.9 | At Risk | System is degrading. Assign system owner. Review playbook. Re-train if needed. |
| 1.0–1.9 | Critical | System has been abandoned. Leadership intervention needed. Consider a refresh engagement. |

### Trend Matters More Than Score

| Trend | Interpretation |
|-------|---------------|
| Rising across all 3 checks | System is compounding. Success. |
| Flat | System is operational but not compounding. Invest in Section 3. |
| Declining | System is degrading. Identify root cause and intervene. |

---

## What to Do With Results

**If healthy (3.0+)**:
- Share results with leadership
- Celebrate what's working
- Pick one area to improve for next period

**If at risk (2.0–2.9)**:
- Identify which section is weakest
- Assign ownership for improvement
- Re-read relevant System Playbook section
- Consider re-running one training module

**If critical (1.0–1.9)**:
- Leadership meeting to discuss
- Re-read full System Playbook
- Consider reaching out to Project Fuze for a refresh session
- Identify what caused the decline (people change? priority shift? tool change?)
