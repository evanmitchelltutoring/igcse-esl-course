# IGCSE ESL — Full resource audit (pass 2) & improvement directive

Reviewed in full this pass: Unit 1 (opener, L1–L3, L7, L9, student packet, in-class exam), Unit 2 (L3, L4, L5, L6, L7, L8, L9, L10, L11, exam), Unit 3 (L3, L5, L7, L9, L10) — every lesson **type** (orientation, vocab, reading-for-facts, reading-for-feeling, matching, note-completion, MCQ, grammar, listening, letter, article, report, exam paper, packet). Plus prior deep reads of Unit 5 L4 and the Unit 6 opener.

## Headline: the course is already premium. Two real gaps + polish.
The teaching is genuinely excellent and **consistent**: every lesson has retrieval Do-Now (+self-mark), objectives with success criteria, say-it-first vocab with IPA, a modelled example before independent work, Word-Check glossary + "find the word" scan task, Support/Core/Stretch tiers, fast-finisher extensions, lesson timers on timed tasks, spiral call-backs, weak→strong writing models, peer review, Skill-Bank build, and exit→"I can"→packet. The authored extra-practice is landing (e.g. Unit 3 L5 grammar carries all four banks: Spot-the-Error, Transform, Gap-Fill, Build-your-own). Exam papers are exam-authentic with banded rubrics, EAL "credit communication first" notes, and full mark schemes. **Do not rebuild any of this.**

---

## 🔴 FIX 1 — Image wiring reconciliation (the biggest single issue)
Many lesson `<image-slot>`s render **blank** because the deck tag has **no `src=`**, even though the matching JPG is already uploaded in `assets/images/`. This is inconsistent lesson-by-lesson (some wired, some not), so it must be swept, not spot-fixed.

**Directly confirmed UNWIRED (jpg exists on disk, deck slot has no src):**
`u2-l8-hero`, `u2-l9-hero`, `u2-l10-hero`, `u2-l11-hero`, `u3-l3-hero`, `u3-l5-hero`, `u3-l7-hero`, `u3-l9-hero`, `u3-l10-hero`, plus the whole Unit 6 opener + lessons (in build). Unit 3 appears **entirely unwired**.

**Confirmed WIRED (leave as-is):** u1 opener hero+apply, u1-l2/l3/l9, u2-l3/l4/l5/l6/l7, u5-l4.

### The rule (apply to EVERY deck, all units incl. 4 & 5 which were not all re-checked)
For each `<image-slot id="X" …>` that has **no `src`**: if `assets/images/X.jpg` exists, add `src="assets/images/X.jpg"`. Do **not** change `id`, `shape`, `fit`, `placeholder`, or `credit`. After the pass, every built slide with an image-slot should show its photo.

## 🔴 FIX 2 — Source the few slots that have NO jpg at all
After wiring, a small number of slots will still be blank because no JPG exists yet:
- `u1-l1-hero` (Unit 1 Lesson 1 title) — confirmed missing. Brief: an ordinary, welcoming "third place" — a bench outside a shop / café corner / library steps; warm daylight; no identifiable faces.
- Sweep for any other `image-slot id` with neither `src` nor a matching jpg and source those (CC0/PD/CC-BY, SE/E-Asia lead, no identifiable faces, no brand logos, ≤600KB, sRGB).

## 🟠 FIX 3 — Reading-passage text size (already filed)
See `data/READING-PASSAGE-TEXT-SIZE-FIX.md`. Passage bodies that shrink to ~21px (e.g. Unit 5 L4) fall below the 24px floor — split across two slides or show a larger key excerpt. Most passages are already fine at 24–25px; this only affects the densest ones.

---

## 🟢 Polish (great → exceptional; optional, low effort)
1. **Unit 1 L9 (review writing):** the "Upgrade" slide and the "Weak→Strong" slide use the *same* example ("It is a nice place and I like it." → "…ambience… linger"). Vary one so students see two distinct upgrades, not one twice.
2. **Listening lessons (e.g. U2 L9):** add a 15-second *item-specific* prediction before the first exercise ("A talk on a wildlife garden — what three tips do you expect?") to sharpen the predict step beyond the generic Predict/Preview/Note recap.
3. **Engagement hooks:** where an orientation/opener opens cold, a 10-second entry poll ("thumbs up/down: do you have a third place?") raises stakes before the Do-Now. Cheap, high-energy.
4. **Capstone through-line:** a tiny "collect-as-you-go" tick-list students mark each lesson toward the unit capstone would gamify the arc that the openers already promise.

## Coverage note
Units 4 and 5 were not re-read lesson-by-lesson this pass (they follow the identical, verified template; U5 L4 was confirmed premium + wired earlier). The **image-wiring reconciliation (Fix 1) must still sweep Units 4 & 5** — do not assume their slots are wired.
