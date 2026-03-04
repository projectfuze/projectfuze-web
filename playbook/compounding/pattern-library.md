# Pattern Library

**What**: "When we see X, root cause is usually Y" — a growing collection of diagnostic patterns from engagements.
**When**: Updated after every engagement via the [Retrospective](../handoff/retrospective-template.md).
**Who**: David and Lucas add patterns. Referenced during Scans to accelerate diagnosis.
**Output**: Faster, more accurate diagnosis in future Scans.

---

## How to Use

During a Scan, review this library against interview findings. Patterns here don't replace investigation — they accelerate it by telling you where to look first.

## How to Add

After each engagement, ask: "What client-specific insight is actually a universal pattern?" Add it below in the appropriate category.

---

## Decision & Alignment Patterns

### Pattern: "Ask [Name]" Syndrome
**Signal**: Multiple people say "You'd have to ask [specific person]" when asked about decisions.
**Root cause**: Decisions aren't documented. Key context lives in one person's head.
**Severity**: High — single point of failure, blocks agent adoption.
**Fix**: Decision Protocol + searchable decision log.
**Seen in**: *(Add engagement references as they accumulate)*

### Pattern: Meeting-as-Memory
**Signal**: Teams hold frequent alignment meetings but produce no artifacts.
**Root cause**: Meetings are being used as shared memory rather than decision-making tools.
**Severity**: Medium — time cost + no compounding.
**Fix**: Meeting Output Templates. Every meeting produces a defined artifact.
**Seen in**: *(Add engagement references)*

### Pattern: Priority Whiplash
**Signal**: Engineers mention changing priorities mid-sprint; PMs say priorities are stable.
**Root cause**: Strategic decisions aren't cascading properly. PMs interpret founder signals, engineers get whiplash.
**Severity**: High — morale + velocity impact.
**Fix**: Vertical alignment architecture. Explicit priority logic visible to all.
**Seen in**: *(Add engagement references)*

---

## Handoff Patterns

### Pattern: Spec Telephone
**Signal**: Engineers say "I had to read between the lines" or "I guessed what they meant."
**Root cause**: Specs written in narrative format, not structured format. Intent doesn't survive translation.
**Severity**: High — directly causes rework.
**Fix**: Structured spec template with explicit success criteria and agent instructions.
**Seen in**: *(Add engagement references)*

### Pattern: Design Drift
**Signal**: Design lead says "What shipped doesn't match what I designed."
**Root cause**: No structured handoff from design to engineering. Figma link ≠ spec.
**Severity**: Medium — quality and trust impact.
**Fix**: Design handoff section in spec template. Interaction notes + edge case documentation.
**Seen in**: *(Add engagement references)*

---

## Engineering Patterns

### Pattern: Review Bottleneck
**Signal**: PR review takes longer than writing the code. Senior engineers are the bottleneck.
**Root cause**: No trust ladder. Every PR gets the same review depth regardless of risk.
**Severity**: High — directly limits shipping velocity.
**Fix**: Trust ladder with auto-merge for low-risk, tiered review for higher risk.
**Seen in**: *(Add engagement references)*

### Pattern: Test Theater
**Signal**: "We have 80% coverage" but bugs still ship. Tests exist but don't test behavior.
**Root cause**: Coverage metric gamed. Tests check existence, not correctness.
**Severity**: Medium — false confidence.
**Fix**: Quality gate that checks test substance, not just coverage percentage.
**Seen in**: *(Add engagement references)*

### Pattern: Tool Graveyard
**Signal**: Multiple AI tools purchased, few consistently used. "We tried X but it didn't stick."
**Root cause**: Tools adopted without workflow integration. Individual use, no system.
**Severity**: Low (cost) to Medium (missed opportunity).
**Fix**: Integrate tools into the backbone. Tool adoption follows workflow, not the reverse.
**Seen in**: *(Add engagement references)*

---

## Organizational Patterns

### Pattern: Founder as Router
**Signal**: Founder is in most Slack threads, most meetings, most decisions.
**Root cause**: No decision architecture. Founder is the routing layer because no system exists.
**Severity**: Critical — founder bottleneck, doesn't scale.
**Fix**: Decision Protocol with delegated authority. Not everything needs founder sign-off.
**Seen in**: *(Add engagement references)*

### Pattern: Process Skepticism
**Signal**: Team pushes back on structure. "We're a startup, we need to stay agile."
**Root cause**: Previous process attempts were bureaucratic without being useful.
**Severity**: Medium — adoption risk.
**Fix**: Start with highest-pain workflow. Show value fast. Structure that saves time, not adds it.
**Seen in**: *(Add engagement references)*

---

## Adding a New Pattern

Use this format:

```
### Pattern: [Name]
**Signal**: [What you hear or observe that triggers this pattern]
**Root cause**: [The structural root cause, not the symptom]
**Severity**: [Critical / High / Medium / Low]
**Fix**: [Specific intervention from the playbook]
**Seen in**: [Engagement references]
```
