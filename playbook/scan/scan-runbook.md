# Scan Runbook — Week-by-Week Operations Guide

**What**: Step-by-step operations guide for running the AI-Readiness Scan.
**When**: Used by David (and Lucas) throughout the 2-week Scan engagement.
**Who**: David leads. Lucas handles engineering-specific tasks.
**Output**: Completed AI-Readiness Report delivered to client on Day 10.

---

## Pre-Engagement (2hrs David)

**Timeline**: After contract signing, before Week 1

- [ ] Send [Intake Packet](intake-packet.md) to client
- [ ] Confirm all access granted (Slack, PM tool, repo, CI/CD, calendars)
- [ ] Share repo + CI/CD access with Lucas
- [ ] Schedule all Week 1 interviews
- [ ] Review intake packet responses
- [ ] Read 3–5 submitted specs/PRDs
- [ ] Read 3–5 submitted PRs/tickets
- [ ] Share preliminary notes with Lucas
- [ ] Prepare interview-specific questions based on intake answers

---

## Week 1: Discovery & Data Collection

### Monday–Tuesday: Stakeholder Interviews

| # | Session | Duration | Owner | Guide |
|---|---------|----------|-------|-------|
| 1 | Founder/CEO | 45 min | David | [interview-guide-founder.md](interview-guide-founder.md) |
| 2 | Head of Product/PM | 45 min | David | [interview-guide-product.md](interview-guide-product.md) |
| 3 | Head of Eng/Tech Lead | 45 min | David + Lucas | [interview-guide-engineering.md](interview-guide-engineering.md) (Session 1) |
| 4 | Design Lead (if exists) | 30 min | David | [interview-guide-design.md](interview-guide-design.md) |
| 5 | Engineering Deep Dive | 60 min | Lucas + senior devs | [interview-guide-engineering.md](interview-guide-engineering.md) (Session 2) |

**After each session**:
- [ ] Feed recording to AI agent for processing
- [ ] Review AI-processed output within 2 hours
- [ ] Flag contradictions with previous interviews
- [ ] Note follow-up questions

**Time**: ~5hrs David, ~3hrs Lucas (interviews) + ~2hrs each (review)

### Wednesday–Thursday: Async Deep Dives

**David (4hrs)**:
- [ ] Review all AI-processed transcripts, synthesize themes (1hr)
- [ ] Audit PM tool: goals → initiatives → projects → issues chain. Decision tracking? (1hr)
- [ ] Audit comms: Slack structure, meeting cadence, where decisions actually happen (1hr)
- [ ] Map current decision flow: goal → shipped feature. Where does signal degrade? (1hr)

**Lucas (4hrs)**:
- [ ] Codebase audit via AI agents: structure, test coverage, CI/CD, PR patterns (2hrs)
- [ ] Tool stack audit: connected vs. siloed, data flows between tools (1hr)
- [ ] Agent-native environment assessment: [4-level checklist](../engineering/agent-native-checklist.md) (1hr)

### Friday: David + Lucas Calibration (1hr joint)

- [ ] Compare notes
- [ ] Identify 3–5 "fault lines" (cross-functional breaks)
- [ ] Preliminary staging per function (Product, Design, Engineering)
- [ ] Discuss scoring approach for Week 2
- [ ] Plan any follow-up questions for client

**Week 1 Total**: ~9hrs David, ~7hrs Lucas

---

## Week 2: Analysis, Scoring & Report

### Monday–Tuesday: Scoring

**David (4hrs)**:
- [ ] Score Product and Design functions using [Scoring Template](scoring-template.md)
- [ ] Map current → target for each function
- [ ] Identify top 3 interventions (highest leverage)
- [ ] Draft client-specific "Beliefs to Change" (3–4 beliefs)
- [ ] Select stakeholder quotes for report

**Lucas (4hrs)**:
- [ ] Score Engineering function using [Scoring Template](scoring-template.md)
- [ ] Complete Engineering Quality Scorecard
- [ ] Map engineering-specific recommendations
- [ ] Agent readiness assessment (4-level)
- [ ] Document CI/CD maturity findings

### Wednesday: Report Assembly (3hrs David, 2hrs Lucas)

- [ ] AI agent assembles report draft from [Report Template](report-template.md) + structured findings
- [ ] David reviews and edits all sections
- [ ] Lucas validates Engineering Quality Scorecard (Section 4)
- [ ] Generate radar charts from scoring data
- [ ] David writes Executive Summary (always written last)
- [ ] Final formatting and polish

### Thursday: Rehearsal (1hr joint)

- [ ] Walk through full presentation
- [ ] Anticipate client pushback (especially on Beliefs section)
- [ ] Align on recommendation (which path: Architect or Turnkey?)
- [ ] Decide who presents which section
- [ ] Time the presentation (target: 45 min findings + 15 min roadmap)

### Friday: Client Presentation (1.5hrs)

**Agenda**:
- Findings walkthrough (45 min) — David leads, Lucas presents engineering section
- Roadmap options (15 min) — David presents, recommends one path
- Q&A (30 min) — both available

**After presentation**:
- [ ] Send PDF report to client within 24 hours
- [ ] Note client reactions and questions
- [ ] If converting to Build: schedule kickoff for following week

**Week 2 Total**: ~9.5hrs David, ~7.5hrs Lucas

---

## Scan Total: ~18.5hrs David, ~14.5hrs Lucas (33hrs combined)

---

## Quality Checklist (Before Sending Report)

- [ ] Overall score calculated correctly
- [ ] Every score has evidence and a direct quote
- [ ] Fault lines are specific, not generic
- [ ] Beliefs section is provocative but respectful
- [ ] Roadmap options are clear with specific expected outcomes
- [ ] Engineering section validated by Lucas
- [ ] Radar chart matches scoring data
- [ ] No internal jargon (Compounding Org, Product Intent framework names are OK — internal methodology names are not)
- [ ] Report reads as worth $4,000
