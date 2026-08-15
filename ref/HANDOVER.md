# HANDOVER — give the Cambridge IGCSE ESL course the "Suspense treatment"

**Read this first, in a new chat on THIS project.** It is the entry point. It captures exactly what "the same treatment as the Year 8 Suspense unit" means, so the work matches that unit's quality and system — applied to Cambridge IGCSE English as a Second Language.

**Before building anything, read the existing IGCSE ESL materials.** The real, live content is already in this project:
- `data/course-index.json` — the whole course map (12 thematic units + 4 exam-technique papers, with unit ids and lesson counts).
- `data/unit01-content.json` — a **deep dump of the pilot unit** (real reading texts, all 45 vocab words, the writing model, the rubric). Mirror this content, level and structure. Do **not** invent a syllabus.
- `source-packs/uNN-data.js` and `source-packs/exam-*-data.js` — the distilled per-unit spine (vocab, retrieval rounds, writing model, quiz, rubric, capstone) that the existing printable teacher packs were generated from. One file per unit, all 16.

This course is a **mature, live, paid flagship** (the course-switcher default on mrevansenglish.com). The design work **adds teacher-facing slides + printable packets on top**; it does not change the live digital lessons.

---

## Scope & build order (Evan's method: pilot → verify → roll out)

- **Course A — `igcse-esl`**: 12 thematic teaching units (137 lessons). Themes: Leisure & Belonging · Landscapes & Living Things · Health & Wellbeing · Cultures & Connections · Art & AI · Fashion & Identity · Sports & Competition · Space & Ambition · Learning & Growth · A Changing World · Mystery & the Unexplained · Adventure & Survival.
- **Course B — `igcse-esl-exam`**: 4 exam-technique units, one per paper (Reading · Writing · Listening · Speaking). These get an **exam-STRATEGY** treatment, not a thematic one.

**Do Unit 1 (Leisure & Belonging) first, all the way through, then verify with Evan before rolling out.** This mirrors how the course's digital-improvement pass was piloted on Unit 1 and then rolled out unit-by-unit. Keep a todo list; build one deck at a time.

---

## What "the same treatment" delivers per unit (the target)

For each unit, produce a complete, teacher-ready set:

1. **A unit-opener deck** — introduces the unit's through-line concept and the recurring routines.
2. **A slide deck per lesson** — one 1920×1080 deck, ~25–35 slides, following the fixed pedagogical arc (below). Unit 1 has 11 lessons.
3. **Student packet + Teacher packet** — printable. IGCSE ESL does not have a single monolithic "Student Book" like Suspense did; it has per-unit printable packs (a `Student-Workbook.docx` plus slides, retrieval, homework, vocab quiz + key, rubric, capstone). **Rebuild these in the deck/`doc-page` house style** and **audit** them the way the Suspense books were audited (numbering, answer keys, assessment-objective tags, definitions, marking standard) + add teacher furniture (pacing, misconceptions, differentiation, retrieval keys, mark scheme).
4. **An exam-skills packet + practice pair** — a take-home annotation copy + an in-class exam, built from a unit-appropriate reading/listening text, in the Cambridge paper shape.
5. **An image hand-off** — every deck uses `<image-slot>` placeholders + the manifest brief (`data/image-manifest.json`), so images are sourced in a separate pass. See `HANDOFF.md`.

Adapt all five to **ESL skills** (reading, writing, listening, speaking, use of English) rather than literary suspense.

---

## The deck system (copy this exactly from the Suspense unit)

**Build each deck as a single `.dc.html`** using the `deck-stage` starter (`copy_starter_component` kind `deck_stage.js`), mounted via `<x-import component-from-global-scope="deck-stage" from="./deck-stage.js" width="1920" height="1080">`. Slides are inline-styled `<section data-label data-screen-label data-speaker-notes>` children. **Assemble long decks in `run_script`** by concatenating section strings (small `badge()`, `head()`, `card()` helper fns), then `saveFile`. Write the doc in one go (the shrink-guard blocks tiny overwrites of big files).

**Design language (house style — reuse for a matched set):**
- Fonts: `Archivo` (headings/labels, 500/600/700) + `Source Serif 4` (body, incl. italic). Google Fonts link in `<helmet>`.
- Palette: cream `#faf7f1` / `#f7f3ec`, ink `#1a1713`. **Suspense used a maroon `#7a2820` accent and a dark register; IGCSE ESL should feel brighter and warmer** — pick a fresh, friendly accent (e.g. a teal/blue that ties to the site's ESL brand, or a warm amber) and use dark slides sparingly, for emphasis not dread. Keep the green `#8fbf9f` "answer reveal" and the highlight swatches.
- A right-hand vertical `<image-slot>` panel on title + context ("Way In") slides.
- **Every section must measure exactly 1080px tall** (verify with `eval_js`: `scrollHeight <= 1080`). **No text below 24px.** Speaker notes on **every** slide (`data-speaker-notes` = the teacher script).

**The fixed lesson arc** (adapt labels to the lesson's ESL skill):
Title → Do-Now retrieval (Q then self-mark A, reaching back across prior lessons) → **Objectives** (3, "Today you will…" + success criteria + why it matters) → Way In / context → key text or people → vocabulary (say-it-first, choral, with pronunciation) → predict/commit → core teaching point (the reading/writing/listening/speaking skill) → how-we-do-it plan → modelled example (Q then A) → 2–3 "stop and check" beats → a big-think Q/A → a class vote / discussion → quick check (5 MCQ, then keyed answers) → a visual/graph or note-completion task → speaking task with timed phases + sentence stems → language/quote bank → vocabulary practice → grammar (use of English) teach/practice/answers → a **labelled model answer** in the course's own paragraph structure (Suspense used CCERC; **ESL uses its own** — e.g. a **P-E-E / Point–Evidence–Explain** for reading responses, and clear review/argument/report structures for writing; see the writing models in the pack data) → writing scaffold with a toolkit → exit ticket that points to the next lesson.

**Recurring routines to thread through every deck:** a cumulative **Skill Bank** (reading, writing, listening, speaking strategies students build across the unit); "notebook" vs "talk" vs "show me" badges top-right; retrieval that reaches back; think→write→pair→cold-call; **sentence stems everywhere for EAL access**; "say it before you meet it" vocabulary with pronunciations and choral repetition. EAL scaffolding is non-negotiable.

**Annotation in three colours** (the ESL rename of Suspense's Evidence/Technique/Reaction): **Meaning · Method · Response** — what the text says, how the writer says it, how the reader reacts. Use these consistently on any "annotate the text" slide and in the exam packets.

---

## Exam-skills packet + practice (build from the course's real texts)

Two `doc-page` documents in the house style, per unit (and per paper for `igcse-esl-exam`):
- **Take-home / annotation copy** = cover + how-to-annotate (Meaning · Method · Response) + context/Way-In + **the text to annotate** + vocab prep. **No answer spaces.**
- **In-class practice** = exam conditions ("you may use your annotated copy, nothing else") + the questions in the **Cambridge paper shape** (skim-for-gist, scan-for-detail, note/summary completion, understanding of writer's attitude for Reading; the appropriate shapes for Writing/Listening/Speaking) + planning box + lined answer pages + the **AO rubric** (Secure / Strong band descriptors + an EAL note).

For Unit 1, "The Indoor City" and "The Corner That Closed" (both in `data/unit01-content.json`) are strong exam texts. Reuse text already in the project rather than retyping; the four exam-paper technique units have their own strategy content in `source-packs/exam-*-data.js`.

---

## Assessment objectives — use the RIGHT board

Tag against **Cambridge IGCSE ESL (0510 / 0511; 9-1 = 0991 / 0993)** assessment objectives — **not** US Common Core. A working summary is in `data/course-index.json` under `assessment_objectives`; **confirm the exact syllabus code and current AO wording with Evan / the live syllabus before printing any AO tags.** Standardise definitions and the marking standard so packet, rubric, and decks agree.

---

## Image hand-off convention

Every deck's images are `<image-slot id="…" shape="rect" fit="cover" placeholder="…">` (load `image-slot.js` in `<helmet>`, copied fresh via the starter). **Do not source images in the build chat.** Maintain `data/image-manifest.json` (one entry per slot: id, deck, slide, container size, orientation, brief, search terms) and `HANDOFF.md` (the sourcing job + constraints + licensing). **Art direction for ESL is contemporary, warm, documentary "places where people gather" — the opposite of the Suspense dark register.** The manifest already briefs Unit 1's slots; add units 2–12 + exam decks as they land.

---

## Working method that keeps quality high

- Build **one deck at a time**; after each, verify with `eval_js` (section count, none > 1080px, no < 24px text, slots present, notes on all) then `ready_for_verification`.
- Keep a todo list; snip settled phases to manage context.
- **Match the existing ESL materials' vocabulary, tone and level** — read `data/` and `source-packs/` first.
- Ask Evan a focused question set up front if anything is genuinely open (exact syllabus code, which accent for read-alouds, house accent colour, how far to take the exam packets).

## Carried-over state
The **Year 8 Suspense** unit (separate project, "Book assembly decisions") is the reference implementation of this method: decks 00–08, an audited Student Book + Teacher Copy, a take-home + in-class exam pair, and 22 briefed image slots. Nothing there is shared code — it is the **method** to reproduce here, on real IGCSE ESL content.
