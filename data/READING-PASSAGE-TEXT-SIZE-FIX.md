# Fix: reading-passage slides drop below the 24px text floor

**Where:** any lesson whose reading slide shows the full passage (e.g. Unit 5 Lesson 4 — the two-column passage renders at `font-size:21px`, while the rest of that deck is ≥27px).

**Problem:** to fit a whole passage in one 1080px slide, the passage body is shrunk to ~21px. That's below the project's 24px minimum for projected text — fine on a laptop, hard to read from the back of a classroom. Every other block on the decks respects the floor; only the dense passage bodies break it.

**Fix (pick per passage, in this order of preference):**
1. **Split the passage across two "reading" slides** ("Passage · part 1 of 2" / "part 2 of 2"), keeping the body at **≥24px** (aim 26–28px). This is the default — most passages fit comfortably in two panels.
2. If the passage is short enough, keep it on one slide but at **≥24px** (widen the column / trim margins rather than shrink type).
3. For the longest passages, show a **larger key excerpt** on the slide (≥26px) with a clear "full text in your packet, p.X" cue, and do the close reading from the packet.

**Do not** go below 24px on passage bodies to make text fit. Splitting is always better than shrinking.

**Check:** after the fix, every `<section>` still measures `scrollHeight ≤ 1080`, and no passage body is under 24px.
