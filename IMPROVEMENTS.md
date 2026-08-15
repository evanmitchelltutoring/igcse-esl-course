# Improvements audit — IGCSE ESL decks (Units 1–2, extends to all)

Reviewed across openers, reading, grammar, listening and writing lessons. The build is already strong; these are targeted upgrades, **ordered by impact-per-effort**. Apply to Units 1–2 and bake into the rollout so every unit inherits them.

## P1 — Quick, high-impact (do first)
1. **Fix the colour clash (still open from PILOT-REVIEW).** The annotation layer (Meaning=blue / Method=amber / Response=rose) reuses the mode-badge colours (talk=blue / notebook=yellow / show-me=green), so one swatch means two things on the same slide — confirmed still present in the Unit 2 opener. Give **annotation its own bordered chip style** distinct from the round mode badges (e.g. a thicker border + label), and keep it identical across all units. It's the one thing students physically highlight with, so the clash matters most.
2. **Height pass.** Confirm every `<section>` measures `scrollHeight ≤ 1080` (`eval_js`) before a deck is "done" — the reading-passage slides and note-grids are the overflow risk. No text below 24px.
3. **Gloss the hard words *inside* each reading text.** "Say-it-first" pre-teaches the main vocabulary, but the passages still contain blockers (e.g. *loitering, unofficial, gentrification, barren, instinct*). Add a small **"tricky words" strip** on each reading slide: 3–4 words × a one-word gloss. This is the single biggest EAL-access win.

## P2 — Scaffolds (deepen EAL support)
4. **Tier every productive task Support / Core / Stretch** (writing already does this). Add a **Support** scaffold to reading-question and grammar slides (a sentence-starter + a "look in paragraph 3" hint + a worked first item) and a **Stretch** extension on each ("…and why does the writer choose that word?").
5. **Graphic organisers where the skill needs them:** a **T-chart / Venn** on the compare lesson (U2 L5) and a **cause → effect** arrow box on the environment readings (U2 L3/L6/L7). These make the abstract skill visible.
6. **Sentence frames on the discussion/big-think slides too** — not just speaking/writing. Every "turn and talk" should carry an opinion / agree / disagree / develop stem.
7. **Optional L1 bridge:** a small "in your first language, this means…" prompt on the 2–3 hardest concepts per unit (habitat, ecosystem, gentrification) — well-evidenced EAL practice.

## P3 — Extra practice
8. **Grammar:** each grammar lesson currently has ~2–3 drills. Add the fuller banks in **`data/grammar-extra-practice.md`** (Spot-the-Error ×6, Transform ×6, Gap-Fill-in-context, Build-Your-Own) — as extra Q→A slides or a packet worksheet. Covers U1 L4/L7 and U2 L5/L8; extend to later units on the same template.
9. **Reading:** add one **"find the word that means…"** vocabulary-in-context micro-task per reading (a real Cambridge sub-skill), and one **True/False/Not-Given** where a lesson lacks it.
10. **Writing:** the model answers are strong — add a **weak-vs-strong** comparison slide (a flat sentence beside the upgraded one) and a short **"common mistakes to avoid"** box for the genre.
11. **Vocabulary / spiral review:** make each Do-Now reach back **across units** (a Unit 2 Do-Now recalls a Unit 1 word/structure), and add a **word-family / collocation** extension to the vocab slide (e.g. *pollute → pollution → polluted*).

## P4 — Assessment & joins
12. **Answer keys on reveal** for every practice item (mostly done — audit the new grammar/vocab additions).
13. **Wire the exit ticket → the homework** in the packet explicitly ("tonight's task continues this"), so the lesson, deck, and packet form one loop.
14. **Consistent "I can…" self-check** as the closing beat of every lesson (some have it; make it universal), mirroring the unit-opener objectives.

## P5 — Nice-to-have
15. A thin **progress cue** (e.g. a footer "Lesson N · slide x/total" or a dot strip) so teacher and class track position in a 30-slide deck.
16. A one-slide **"pronunciation clinic"** in vocab-heavy lessons (the tricky sound in 2–3 unit words), building on the IPA already shown.

---
**Suggested order:** P1 (fixes + access) → apply to Unit 1 & 2 now → fold P2/P3 into the rollout template so Units 3–12 inherit them → P4/P5 as polish. The grammar banks (`data/grammar-extra-practice.md`) are ready to drop in today.
