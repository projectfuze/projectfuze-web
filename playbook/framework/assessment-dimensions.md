# Assessment Dimensions — Scoring Rubric

**What**: Six dimensions used to score each function (Product, Design, Engineering) on a 0–5 scale.
**When**: During the Scan (Week 2) and referenced throughout the Build.
**Who**: David scores Product and Design. Lucas scores Engineering. Joint calibration.
**Output**: Radar chart per function + overall Compounding Org Score (0–5).

---

## The Six Dimensions

### 1. Decision Structure

**What it measures**: Are decisions codified, traceable, and actionable?

| Score | Description |
|-------|-------------|
| 0 | Decisions live in people's heads. No record. |
| 1 | Decisions captured in Slack/meetings but unstructured and unsearchable. |
| 2 | Some decisions documented in PM tool, but no consistent format or traceability. |
| 3 | Decisions follow a defined protocol: type, sign-off level, recording method. Traceable to goals. |
| 4 | Decision artifacts auto-generated from structured input. Agents can find and act on any decision. |
| 5 | Decisions cascade automatically: goal change propagates through initiatives, projects, and tasks. |

### 2. Handoff Integrity

**What it measures**: How much signal is lost between functions?

| Score | Description |
|-------|-------------|
| 0 | No defined handoffs. Work thrown over the wall. |
| 1 | Handoffs happen in meetings or Slack. Context depends on who's in the room. |
| 2 | Handoffs use tickets/specs, but significant context lost. Engineers regularly ask "what did you mean?" |
| 3 | Handoffs use structured templates. Intent, constraints, and success criteria explicitly stated. |
| 4 | Handoffs are machine-readable. Agents can parse intent and act without human translation. |
| 5 | No handoffs needed — the system maintains continuous context across functions. |

### 3. Agent Readiness

**What it measures**: Can agents act effectively within this function?

| Score | Description |
|-------|-------------|
| 0 | No agent usage. |
| 1 | Individual AI tool usage (ChatGPT, Copilot) but no system integration. |
| 2 | Agents assist but every output requires human rewrite or line-by-line review. |
| 3 | Agents produce draft artifacts from structured input. Humans review at artifact level. |
| 4 | Agents produce verified artifacts. Human review only for strategic decisions. |
| 5 | Agents run parallel workstreams autonomously within defined guardrails. |

### 4. Quality Verification

**What it measures**: Is output automatically verified against intent?

| Score | Description |
|-------|-------------|
| 0 | No verification. Ship and hope. |
| 1 | Manual QA. Humans check everything. |
| 2 | Some automated testing, but gaps. No connection between spec intent and test coverage. |
| 3 | Quality gates in pipeline. Automated checks validate output against spec requirements. |
| 4 | Multi-layer verification: unit, integration, intent-matching, security. Auto-escalation on failure. |
| 5 | Continuous verification. System self-monitors and flags degradation before it ships. |

### 5. Compounding Capability

**What it measures**: Does work make future work easier?

| Score | Description |
|-------|-------------|
| 0 | Every project starts from scratch. No institutional learning. |
| 1 | Some documentation, but rarely referenced. Knowledge leaves with people. |
| 2 | Patterns exist but aren't enforced. Templates exist but aren't used consistently. |
| 3 | Each cycle explicitly captures learnings. Templates updated. Agent prompts refined. |
| 4 | System self-improves: successful patterns automatically become defaults. |
| 5 | Compound growth measurable: each cycle is measurably faster than the last. |

### 6. Tool Integration

**What it measures**: Are tools connected or siloed?

| Score | Description |
|-------|-------------|
| 0 | Tools completely disconnected. Copy-paste between systems. |
| 1 | Some integrations (Slack→PM tool notifications) but no data flow. |
| 2 | Key tools connected but data flows are one-directional or lossy. |
| 3 | Bidirectional data flow between PM tool, codebase, CI/CD, and comms. |
| 4 | Unified data layer. Agents can query across all tools. Context available everywhere. |
| 5 | Tools are interchangeable. The backbone is tool-agnostic; swapping any tool is trivial. |

---

## Scoring Process

### Step 1: Score Each Function

For each function (Product, Design, Engineering), rate all 6 dimensions 0–5.

### Step 2: Calculate Function Score

Function Score = average of 6 dimension scores (one decimal place).

### Step 3: Calculate Overall Score

**Compounding Org Score** = average of all function scores (one decimal place).

### Step 4: Map Current → Target

For each function, identify:
- Current stage (from dimension scores)
- Target stage (typically current + 1, focused on the 2→3 transition)
- Top 3 dimensions holding the function back

### Step 5: Visualize

Create radar chart per function showing all 6 dimensions. Overlay current vs. target.

---

## Calibration Notes

*This section grows after each engagement. After 5+ scans, add benchmark data.*

- A score of 1.5–2.5 is typical for Series A/B SaaS companies
- Score of 3+ in any function is rare without deliberate system design
- Engineering often scores highest (more structured by nature); Product often scores lowest
- The gap between Engineering and Product scores predicts handoff friction
