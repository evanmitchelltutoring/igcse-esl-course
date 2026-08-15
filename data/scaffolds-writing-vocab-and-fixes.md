# Scaffolds, writing, vocabulary & fixes (Units 1–2, extends to all)

Concrete drop-in content + specs, working the IMPROVEMENTS list in order. Answer keys / models are **teacher-only**.

---
## P1.1 — Colour fix (exact spec, apply globally)
The clash: round **mode badges** (top-right) and the **annotation layer** reuse the same hues. Fix by (a) keeping mode badges as-is, (b) giving annotation its own palette **and** its own shape (a bordered rectangle, not a round dot), so no colour+shape means two things.

- **Mode badges (round dots) — keep:** notebook `#f4d98b` · talk `#a8c8dd` · show-me `#8fbf9f`.
- **Annotation chips (rectangle, 3px left border + uppercase label) — new palette:**
  - **Meaning** — bg `#dcebe9`, border/label `#2f6d6a` (teal)
  - **Method** — bg `#f4e2d4`, border/label `#b4632e` (terracotta)
  - **Response** — bg `#efe1ee`, border/label `#8a5a86` (plum)
- Keep the answer-reveal green (`#eef6f0` / `#8fbf9f`) — it's an answer *state*, not a badge or annotation. (If you want literally zero hue overlap, recolour the show-me badge to `#c9a8dd`; optional.)
Result: teal/terracotta/plum (rectangles) for annotation never collide with yellow/blue/green (dots) for modes.

## P1.2 — Height
Before any deck is "done", `eval_js` every `<section>` for `scrollHeight ≤ 1080`. Reading-passage and note-grid slides are the risk; if over, reduce body size/leading, don't cut content.

---
## P2.4 — Tier every task Support / Core / Stretch
Templates (Core = the task as written):
- **Reading question — Support:** the question + "look in paragraph __" + a sentence-starter. **Stretch:** "…and which word tells you?" / "…how does the writer make you feel that?"
  - *Example, U1 L2 Q3 ("Why is it hard for Lalita to study at home?"):* Support → "Look in paragraph 3. Start: *At home, Lalita gets ___ within ___ minutes.*" Stretch → "Find two words that show she is frustrated."
  - *Example, U2 L3 ("How does the welwitschia survive so long?"):* Support → "Look in paragraph 2. Start: *It grows only ___ leaves, but lives for ___.*" Stretch → "Why does the writer call it a 'living fossil'?"
- **Grammar — Support:** the rule stays on screen + a worked first item. **Stretch:** "write one more of your own; mark a partner's."
- **Writing — Support/Core/Stretch openers already exist;** extend the same three tiers to the *plan* stage.

## P2.5 — Graphic organisers (make the abstract skill visible)
- **Compare (U2 L5): a double-bubble / T-chart** — `Landscape A | (both) | Landscape B`, with row prompts: climate · plants · animals · water · danger. Students fill, then write comparative sentences from it (feeds the grammar in `grammar-extra-practice.md`).
- **Cause → Effect (U2 L6/L7 readings): arrow boxes.** Pre-made from the texts:
  - *River:* factories poured in waste → the water turned grey-green and fish vanished; volunteers planted reeds → insects and birds returned.
  - *Rooftops:* soil + plants on the roof → the floor below stays cooler → lower air-con bills; planted roof → rainwater soaked up → drains no longer overloaded.
- **For / Against T-chart (U1 L2/L5/L8/L10):** those texts give two sides — a `For | Against` chart scaffolds the exit-ticket "which side do you agree with?" (e.g. study cafés: *For* — quiet, cheap, no pressure; *Against* — you must pay to concentrate).

## P2.6 — Sentence frames on discussion / big-think / vote slides
Add these stems wherever students "turn and talk": *In my opinion… · I agree because… · I see it differently — … · That's a good point, but… · One reason is… · For example…*

## P2.7 — First-language bridge (optional, 2–3 per unit)
A small box on the hardest concepts: "In your first language, note what this means." **U1:** third place · belonging · gentrification. **U2:** habitat · ecosystem · conservation.

---
## P3.10 — Writing: weak-vs-strong + common mistakes
Add a **weak → strong** pair and a **"avoid these"** box to each writing genre.
- **U1 L9 Review:** weak *"It is a nice place and I like it."* → strong *"Its warm, low-lit ambience makes you want to linger all afternoon."* **Avoid:** only praise (no honest criticism) · vague words (nice/good) · no clear verdict.
- **U2 L10 Letter (inform + persuade):** weak *"The river is bad and you should fix it."* → strong *"For thirty years the River Mell was treated as a drain — but it can be brought back, and here is how you can help."* **Avoid:** wrong register (too formal/too slangy) · no clear purpose · no call to action.
- **U2 L11 Report (objective):** weak *"I think we should save the river."* → strong *"Steps have been taken to restore the river, and further action is needed."* **Avoid:** "I think" / "I feel" · emotional words · active where the passive is more objective (see the L8 grammar bank).

## P3.11 — Vocabulary: spiral review + word families
- **Spiral (cross-unit Do-Nows):** U2 Do-Nows should recall a U1 item. Mapping to seed it: U2 L2 → *belonging / gentrification*; U2 L3 → *adapt vs the U1 word "linger"* (habit); U2 L5 (grammar) → U1 adjective order; U2 L8 (passive) → U1 *there is/are*.
- **Word families** (add to the vocab slide): U1 — *convenient → convenience → conveniently*; *pollute → pollution → polluted*. U2 — *sustain → sustainable → sustainability*; *conserve → conservation → conservationist*; *migrate → migration → migratory*.

---
## P4 — Joins & consistency
- **Exit ticket → homework:** end every exit ticket with a one-line bridge to the packet task, e.g. *"Tonight: your review of a real place (packet p.__) continues this."*
- **"I can…" close:** every lesson ends with that lesson's objectives rewritten as tickable "I can…" statements (mirrors the unit-opener goals).
- **Answer keys:** every new item here (glossary micro-tasks, grammar banks, vocab tasks) is keyed — audit that they render as Q-then-reveal, never leaking the answer on the question slide.

## P5 — Nice-to-have
- Thin footer progress cue on lesson decks: *"Lesson N · slide x / total."*
- A one-slide **pronunciation clinic** in vocab-heavy lessons: the tricky sound in 2–3 unit words, building on the IPA already shown (e.g. U2 */ˈhæb.ɪ.tæt/*, */ˈiː.kəʊ.sɪs.təm/*).
