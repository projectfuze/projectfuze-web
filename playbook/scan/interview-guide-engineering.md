# Interview Guide — Engineering Lead + Deep Dive

**What**: Two sessions — 45-min leadership interview (David + Lucas) and 60-min engineering deep dive (Lucas + senior devs).
**When**: Week 1, Mon–Tue of the Scan.
**Who**: David leads the leadership session. Lucas leads the deep dive. Both recorded.
**Output**: Structured transcripts + engineering quality baseline.

---

## Session 1: Engineering Leadership (45 min)

### Setup

- Duration: 45 minutes
- Attendees: Head of Eng / Tech Lead + David + Lucas
- Recording: Yes
- Goal: Understand spec-to-shipped flow, handoff breaks, and the engineering culture around quality and AI.

### Interview Flow

#### Opening (3 min)

"We're looking at how work flows from spec to shipped feature — not to judge the engineering, but to find where the system helps or hinders your team. David will ask about the product-engineering connection. Lucas will go deeper on technical practices in a separate session."

#### Section 1: Spec to Shipped (12 min)

1. **"Walk me through what happens when a spec lands on an engineer's plate."**
   - Listen for: clarity of input, questions asked, time to start coding

2. **"How often do engineers feel they have enough context to start building?"**
   - Listen for: percentage, what's typically missing

3. **"What's the average time from 'spec received' to 'PR ready'?"**
   - Listen for: actual number, and what slows it down

4. **"When something ships and it doesn't match the spec, what usually went wrong?"**
   - Listen for: misinterpretation, scope change, missing design detail

#### Section 2: Quality & Review (12 min)

5. **"Describe your code review process."**
   - Listen for: review depth, turnaround time, who reviews, bottlenecks

6. **"What does your CI/CD pipeline look like? What gets caught automatically?"**
   - Listen for: test coverage, automated checks, deployment confidence

7. **"How do you handle quality for code you didn't write yourself — whether from a junior dev or an AI agent?"**
   - Listen for: trust levels, review approach, whether AI-generated code is treated differently

8. **"What's your testing philosophy? Where are the gaps?"**
   - Listen for: honesty about gaps vs. "we have good coverage"

#### Section 3: AI & Engineering (10 min)

9. **"How is your team using AI tools today?"**
   - Listen for: Copilot, Cursor, ChatGPT, custom agents, or resistance

10. **"What's worked well? What hasn't?"**
    - Listen for: specific wins and failures, not general optimism

11. **"If AI agents could write PRs from structured specs, what would need to change about your process?"**
    - Listen for: quality gates, review process, trust thresholds

#### Section 4: Culture (5 min)

12. **"What would you change about how your team works with Product?"**
    - Listen for: handoff frustrations, missing context, changing priorities

13. **"What's the biggest bottleneck to your team shipping faster?"**

### Closing (3 min)

14. **"Anything we should know that we haven't asked?"**

---

## Session 2: Engineering Deep Dive (60 min)

### Setup

- Duration: 60 minutes
- Attendees: Lucas + 1–2 senior engineers
- Recording: Yes
- Goal: Technical assessment — CI/CD maturity, review process, testing, agent tool usage, developer experience.

### Interview Flow

#### CI/CD & Deployment (15 min)

1. **"Walk me through a deploy. What happens from 'merge to main' to 'live in production'?"**
2. **"What checks run automatically? What's manual?"**
3. **"How long does the pipeline take? Where does it slow down?"**
4. **"When was the last time a deploy broke something? What caught it (or didn't)?"**
5. **"How confident are you hitting the deploy button on a Friday?"**

#### Code Review & Quality (15 min)

6. **"How long does a typical PR review take? What determines if it needs 1 reviewer or 2?"**
7. **"What do you actually look for in a review? What gets caught, what slips through?"**
8. **"Do you have any automated review tools or linters beyond basic CI?"**
9. **"What's your test coverage like? Be honest — where are the gaps?"**
10. **"How do you handle tech debt? Is there a process or does it just accumulate?"**

#### Developer Experience (15 min)

11. **"From the moment you understand what to build, how long until your PR is ready?"**
12. **"What slows you down most day-to-day?"**
13. **"How's your local dev environment? Any pain points?"**
14. **"How do you onboard a new engineer? How long until they're productive?"**

#### AI & Agent Usage (15 min)

15. **"Which AI tools are you using? Show me your actual workflow."**
16. **"What tasks do you delegate to AI? What do you still do manually?"**
17. **"Have you tried using agents for full PR generation? What happened?"**
18. **"What would need to change for you to trust an agent-generated PR?"**
19. **"If you could have agents handle one thing you do repeatedly, what would it be?"**

---

## Post-Interview Processing

Feed both recordings to AI agent with prompts:

**Session 1 output**:
1. Spec-to-shipped flow map (as described)
2. Quality and review process summary
3. AI adoption level and attitude
4. Product-Engineering friction points
5. Contradictions with Product interview

**Session 2 output**:
1. CI/CD maturity assessment (Stage 0–5)
2. Code review process assessment
3. Testing coverage and gaps
4. Developer experience score
5. Agent readiness level (0–5)
6. Top 3 engineering bottlenecks
7. Specific technical recommendations
