# Activity & Game Format Library — IGCSE ESL

The concrete catalogue of every activity, game, worksheet, practice and exam format to build, so decks and packets stay consistent across all 16 units. Each format lists **what it is**, **what data feeds it** (all live per-unit content is in `data/unitNN-content.json` / `data/examN-*-content.json`; the distilled spine is in `source-packs/`), and **how to build it**. Every answer-bearing item needs a **keyed answer** (revealed on a later slide, or in the Teacher packet only).

House rules that apply to everything: EAL scaffolding is non-negotiable (sentence stems, "say it before you meet it" vocab with pronunciation, choral repetition); annotation colours are **Meaning · Method · Response**; "notebook / talk / show-me" badges signal the mode; retrieval reaches back across prior lessons. **Teacher models (`writing_tasks.model_answer`, `speaking_tasks.rubric/model`) are TEACHER-COPY ONLY — withheld from students, exactly as on the live site.**

---

## VOCABULARY — games, practice, activities
Feed: `vocabulary` block in each unit file (grouped by subtopic) + `source-packs/uNN-data.js` (teachable core list, cloze + match banks).

- **Say-It-First (choral)** — slide per subtopic: word + phonemic hint + one example sentence with the word blanked; class says it before reading. Reveal.
- **Word Sort / Odd-One-Out** — sort words into 2 conceptual columns (the unit files/`source-packs` already define a binary sort per unit, e.g. "Belonging vs Exclusion"); or 4 words, pick the odd one and justify. Keyed.
- **Collocation Match** — match each headword to its natural partner (linger → *over a coffee*; footfall → *high/low*). Two-column drag/line-match; key on reveal.
- **Definition Match** — the `match` bank in `source-packs` (word ↔ meaning), shuffled; a worksheet grid + a slide version.
- **Cloze / Gap-Fill** — the `clozeText`+`clozeBank` in `source-packs` (a running paragraph using the unit words); worksheet + auto-check slide. Keyed.
- **Vocabulary Bingo** — 4×4 card of unit words; teacher reads definitions, students cover. Print 4 pre-scrambled cards per unit in the Teacher packet.
- **Taboo / Describe-It** — cards: the target word + 3 "banned" words; partner guesses. Print a card sheet.
- **Register Ladder** — order 3–4 near-synonyms by formality (chat → talk → converse); ties to Writing register work.
- **Word-Building** — from a headword, derive forms (convenient → convenience → conveniently); table worksheet, keyed.
- **Productive Use** — the `productive` list in `source-packs`: write one sentence per word; self-check success criteria, no auto-key.

## READING — activities & worksheets
Feed: `reading_passages` in each unit file (real texts, with `difficulty`).

- **Reading for the Facts** (scan) — 5–6 short-answer detail questions + a note-completion table. Keyed.
- **Reading for Feeling** (inference) — "What does the writer feel here? Which word tells you?" evidence-hunt in Meaning/Method/Response colours.
- **True / False / Not Given** — 6 statements against the text. Keyed. (Mirrors a Cambridge Reading task.)
- **Summary / Note Completion** — condense one section into a gapped table or ≤80-word summary; model in Teacher packet.
- **Vocabulary-in-Context** — pick 5 words from the passage, infer meaning from context, then check.
- **Annotation Worksheet** — the passage printed with wide margins + the Meaning/Method/Response key and 4–5 guided margin prompts.

## LISTENING — with reflection
Feed: `listening_tracks` in each unit file (`script_text` is the real script; many units have "Read-Aloud: …" tracks tied to a reading, plus interview/monologue tracks). Audio already exists on-site; packets use the script.

- **Predict → Preview → Note** — before listening: predict 3 things you'll hear; preview the question words; then note-take on a scaffolded grid.
- **Note-Completion / Gap-Fill** — the Cambridge listening shape: gapped notes from the track. Keyed.
- **Detail + Attitude Qs** — some factual, one "how does the speaker feel?". Keyed.
- **Reflection activity** (the "with reflection" the course threads in) — after listening: a 3-prompt reflect box — *What surprised you? · What do you agree/disagree with? · One thing it makes you want to say/write* — with sentence stems. Not marked; feeds the speaking/writing task.
- **Dictogloss** — short extract read twice; students reconstruct in pairs, compare to script.

## GRAMMAR / USE OF ENGLISH — teach → practice → answers
Feed: `grammar_exercise` blocks in the unit lessons (see `blocks` in each `lessons[]`), `source-packs` toolkits, and the unit's grammar focus (each unit centres a structure — e.g. U1 describing places / habits & preferences).

- **Teach slide** — the rule in one clear frame + 2 worked examples in context (use the unit's own texts).
- **Spot & Fix** — 6 sentences, find/correct the error. Keyed. (Reuse the error/upgrade drills where the unit has them.)
- **Transform** — rewrite a sentence to a target structure (active→passive, two clauses→one). Keyed.
- **Gap-Fill in Context** — a short paragraph on the unit theme with the target structure gapped. Keyed.
- **Sentence-Building from Stems** — EAL scaffold: given a frame, produce your own correct sentence; success-criteria self-check.

## WRITING
Feed: `writing_tasks` in each unit file (prompt + `model_answer` [TEACHER ONLY] + band meta) + `source-packs` writing model & self-check.

- **Model Deconstruction** — the labelled model answer in the course's structure (**P-E-E for responses; clear review/argument/report/email shapes for tasks**) with each move colour-tagged.
- **Toolkit slide** — sentence stems, connectives, a "power verbs/adjectives" bank for the genre.
- **Plan → Draft → Upgrade** — a planning box, lined draft space, then an "upgrade one sentence" prompt.
- **Success-Criteria / "I can…" self-check** — the `rubricSelfCheck` list in `source-packs`.
- **Peer review** — swap, mark against 3 criteria, one glow + one grow.

## SPEAKING
Feed: `speaking_tasks` in each unit file (prompt + `rubric`/model [TEACHER ONLY]).

- **Timed phases** — Think (30s) → Pair (2m) → Cold-call, with a visible timer graphic.
- **Sentence-stem cards** — opinion / agree / disagree / develop stems for EAL access.
- **Discussion Vote** — a class-vote slide on the unit's big question, then justify.
- **Exam-style Part 2/3 sim** — a topic card + follow-up prompts in the Cambridge speaking shape; the `rubric` guides the teacher.

## UNIT PACKETS & PROJECTS
Feed: `source-packs/uNN-data.js` (`project`, `rubric`, `quiz`, `diffhw`) + live `course_projects` (already on-site, one per unit).

- **Student packet** (printable `doc-page`): vocab reference table · Do-Now retrieval starters · vocab self-test (cloze+match) · reading worksheet(s) · grammar practice · writing frames + model shell · homework (Support/Core/Stretch) · "I can…" self-check.
- **Teacher packet**: everything above **+ answer keys**, a per-lesson pacing strip (starter→main→plenary + length), a bespoke **"Watch for" misconception box**, a differentiation line, and the mark scheme/rubric bands.
- **Capstone project**: the unit's group project (spec + roles + phases + rubric bands) from `source-packs`; a peer-reference phase where enabled.

## EXAM PRACTICE — all four Cambridge 0510 papers
Feed: `data/examN-*-content.json` (the 4 technique units) + each thematic unit's real texts for the take-home/in-class pair. (Deeper item banks exist on-site: reading/listening placement pools + `mock_exams` + the config-driven mock builder — note these to Evan for a fuller mock, don't rebuild here.)

- **Reading paper shell** — skim-for-gist → scan-for-detail → note/summary completion → understanding of writer's attitude, with the AO rubric (Secure/Strong + EAL note). Build the take-home annotation copy + in-class pair per HANDOVER.
- **Writing paper shell** — directed writing + extended writing prompts in the exam layout; planning box, lined pages, band descriptors.
- **Listening paper shell** — multiple-choice + note/gap-completion + a longer talk, from `listening_tracks`; keyed.
- **Speaking paper shell** — warm-up + topic card + discussion, with the assessment grid.
- **Strategy decks** — the 4 technique units already carry strategy content (skim/scan, command words, register, develop-technique) in `source-packs/exam-*-data.js` — turn each into a "battle plan" deck.

---
**Build order:** pilot **Unit 1** across all the formats above → verify with Evan → roll out unit-by-unit using each unit's `data/unitNN-content.json`.
