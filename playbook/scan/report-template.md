# AI-Readiness Report Template

**What**: The primary Scan deliverable — a structured report presenting findings, scores, and recommendations.
**When**: Assembled in Week 2 (Wed), rehearsed (Thu), presented to client (Fri).
**Who**: David assembles with AI agent assistance. Lucas validates engineering sections. Presented jointly.
**Output**: PDF/presentation (10–12 pages) that becomes the client's reference document.

---

## Report Structure

### Cover Page

```
THE COMPOUNDING ORG
AI-Readiness Report

[Client Name]
[Date]

Prepared by:
David Fuesser — Product Architect
Lucas Klaassen — Engineering Lead

PROJECT FUZE
```

---

### 1. Executive Summary (1 page)

**Overall Compounding Org Score: [X.X] / 5**

**One-sentence diagnosis:**
> "[Client] is at Stage [N] — [one line describing what that means]. The primary bottleneck is [X], which prevents [Y]."

**Top 3 Recommendations:**
1. [Recommendation] — addresses [dimension], expected impact: [what changes]
2. [Recommendation] — addresses [dimension], expected impact: [what changes]
3. [Recommendation] — addresses [dimension], expected impact: [what changes]

**Recommended engagement path:** [Do Nothing / Architect / Turnkey] — [one line why]

---

### 2. Compounding Org Scorecard (2 pages)

#### Radar Chart

[Insert radar chart showing all 3 functions across 6 dimensions — current state]
[Overlay target state in lighter color]

#### Function Breakdown

| Function | Score | Stage | Key Finding |
|----------|-------|-------|-------------|
| Product | X.X / 5 | Stage N | [One-line finding] |
| Design | X.X / 5 | Stage N | [One-line finding] |
| Engineering | X.X / 5 | Stage N | [One-line finding] |

#### Current → Target

| Function | Current | Target | What Needs to Change |
|----------|---------|--------|---------------------|
| Product | Stage N | Stage N+1 | [Specific change] |
| Design | Stage N | Stage N+1 | [Specific change] |
| Engineering | Stage N | Stage N+1 | [Specific change] |

---

### 3. Where the Signal Breaks (2–3 pages)

For each fault line (3–5 total):

#### Fault Line [N]: [Name]

**What we observed:**
[Specific observation with evidence from interviews and audits]

**Stakeholder perspective:**
> "[Direct quote from interview]" — [Role]

**Cost:**
[Estimated cost in time, money, or capability. Be specific: "Engineering spends ~X hours/week..." or "Every feature ships ~Y days late because..."]

**Root cause:**
[Structural root cause — not "people don't communicate" but "decisions aren't documented in a searchable format"]

**Fix:**
[Specific intervention — what would change, how, and what it enables]

---

### 4. Engineering Quality Scorecard (1–2 pages)

*Lucas's section*

#### CI/CD Maturity: [Stage N]

| Area | Current State | Gap |
|------|--------------|-----|
| Automated Testing | [Description] | [What's missing] |
| CI/CD Pipeline | [Description] | [What's missing] |
| Code Review | [Description] | [What's missing] |
| Deployment | [Description] | [What's missing] |

#### Agent Readiness: [Level]

| Level | Status |
|-------|--------|
| Environment allows agent execution | [Yes/No/Partial] |
| Quality gates catch agent mistakes | [Yes/No/Partial] |
| Trust ladder defined | [Yes/No/Partial] |
| Agents can run in parallel safely | [Yes/No/Partial] |

#### Key Engineering Recommendations
1. [Recommendation with specific technical guidance]
2. [Recommendation with specific technical guidance]
3. [Recommendation with specific technical guidance]

---

### 5. Beliefs That Need to Change (1 page)

*Deliberately provocative. Based on [Beliefs to Change](../framework/beliefs-to-change.md), customized for this client.*

For each belief (3–4):

#### "[The belief they hold]"

**What we saw:** [Specific example from their org]

**What it costs:** [Concrete cost]

**What to believe instead:** [The replacement belief]

---

### 6. The Roadmap (2 pages)

#### Option A: Do Nothing

- Current trajectory: [What happens if nothing changes]
- Cost of inaction over 6 months: [Specific estimate]
- Risk: [What gets worse]

#### Option B: The Architect ($15,000/mo, 2 months)

David installs the Product Intent backbone:
- **Week 1–2**: Decision Architecture + Execution Architecture
- **Week 3–6**: Install workflows, build AI agent integrations, connect the system
- **Week 7–8**: Training + Handoff

**Best for**: Orgs where engineering is already Stage 3+ and the bottleneck is product intent and org alignment.

**Expected outcome**: Product function moves from Stage [N] to Stage [N+1]. Decision flow becomes structured and agent-ready.

#### Option C: Turnkey ($25,000/mo, 2 months)

David + Lucas install the full backbone:
- David: Product Intent (same as Option B)
- Lucas (parallel): Quality gates, agent safety nets, trust ladder, CI/CD hardening

**Best for**: Orgs where both product alignment AND engineering quality need structural upgrades.

**Expected outcome**: All functions move from Stage [N] to Stage [N+1]. Full Plan → Execute → Review → Compound loop operational.

---

### 7. Appendix

- Full Compounding Org framework (6 stages, link to detailed model)
- Scoring methodology (6 dimensions, scale definitions)
- Tool stack map (current state, integration status)
- Interview summary (themes, not full transcripts)

---

## Assembly Instructions

1. **Template setup**: Copy this template. Fill in client name, date, scores from scoring worksheet.
2. **AI agent draft**: Feed scoring data + interview transcripts to AI agent. Prompt: "Draft sections 1, 3, and 5 using the template structure, client scores, and interview data."
3. **David review**: Review and edit AI draft. Ensure voice is direct, provocative but respectful, and specific.
4. **Lucas review**: Validate section 4 (Engineering Quality Scorecard). Add technical specifics.
5. **Radar chart**: Generate from scoring data. Current state + target state overlay.
6. **Final pass**: Read aloud. Does it feel like something worth $4,000? Is the diagnosis clear? Are the recommendations specific enough to act on?

## Presentation Flow (75 min)

- **Findings** (45 min): Walk through sections 1–5. Let the data speak.
- **Roadmap** (15 min): Present the three options. Recommend one.
- **Q&A** (30 min): Be ready for pushback on beliefs section. That's the point.
