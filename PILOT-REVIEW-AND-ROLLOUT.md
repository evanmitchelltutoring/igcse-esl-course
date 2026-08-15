# Unit 1 — approved. Decisions to lock, then roll out.

**Verdict: Unit 1's 12 decks (opener + 11 lessons) are approved as the quality bar.** They're faithful to the real content, exam-aligned, EAL-scaffolded, and each lesson's arc is shaped to its skill. Build the rest of the course to this standard. Apply the decisions below to Unit 1 **and** every unit going forward.

---

## The four locked decisions

1. **No colour may carry two meanings on the same slide.** Right now the mode-badge trio (notebook = yellow, talk = blue, show-me = green), the annotation layer (Meaning / Method / Response), and L4's adjective-order strip all reuse the same blue/yellow/green. Keep the **mode badges** as they are. Give the **annotation layer its own distinct swatches** (do not reuse the badge colours) and keep them identical across every unit — this is the one students highlight with. Suggested annotation set: Meaning = teal-blue `#3a6d8c` tint, Method = amber `#c98a2e` tint, Response = rose `#b06a56` tint, each shown as a bordered chip so it never reads as a mode dot. Teach-slide category colours (like L4's O-S-A-C-N strip) are fine as local accents.

2. **Every deck must pass a height check before it's done.** Each `<section>` must measure `scrollHeight <= 1080` (verify with `eval_js`). The dense reading-passage slides are the risk (e.g. L2's full text in two columns). If one overflows, reduce body size/leading rather than cutting content. No text below 24px.

3. **Reference the papers by AO language, not paper numbers, until Evan confirms the syllabus code.** Use Cambridge IGCSE ESL assessment-objective language (Reading R1/R2/R3, Writing W1/W2/W3, and "the Reading paper / Writing paper / Listening paper / Speaking test"). Do **not** print "Paper 1" / "Paper 2" numbers yet — 0510, 0511 and the 9-1 variants (0991/0993) number and tier the papers differently. **[Evan to confirm the exact syllabus code.]**

4. **Prefer the real on-site audio.** Where a lesson's on-site listening track suits the task, mirror it (its script is in the per-unit content file) so students hear the same recording they get on the site. Only when the site track's format doesn't fit a clean note-completion demo (e.g. a five-short-clips track) may you use a purpose-built teaching script — and label it "supplementary teaching clip." Keep this choice consistent across units. **[Evan to confirm "mirror site audio" as the default.]**

---

## NEW — images must have a learning purpose (Evan's directive)

**Every `<image-slot>` must teach, not just decorate.** Before adding a slot, write a `learning_use` for it: what will students *do* with this image? Mood-only pictures don't earn their place. Add a `learning_use` field to every slot in `data/image-manifest.json`.

Good learning uses:
- **Vocabulary-in-context** — the image shows the exact features a text names, so students point to each as they meet the word. (L2 study café → long desks, power sockets, soft lamps, headphones. L5 konbini → window counter, microwave, ATM, seats.)
- **Describe-this stimulus** — the image *is* the speaking/writing prompt. (L4 grammar: describe this place using adjective-order + prepositions. L9 review: review this place.)
- **Predict-from-the-picture** — students predict a text/listening's content from the image before reading/listening. (L6 listening.)
- **Compare / sort** — two images to classify (a welcoming third place vs an excluding one; L10 the closed-down corner as inference stimulus — what happened here, and how do you know?).
- **Concept anchor** — the opener hero frames "what makes a third place," used to launch the discussion.

Re-brief the Unit 1 slots along these lines, and give every future slot a `learning_use`. The image pass itself (sourcing PD/CC0/Unsplash/Pexels photos and wiring them in) is handled separately — the manifest is the brief. Art direction stays: contemporary, warm, documentary, no identifiable faces.

---

## Green-light: roll out Units 2–12 + the 4 exam papers

Approved to build the rest to Unit 1's standard. **Order** (Evan's method — one unit fully, then the next):

- Thematic units 2–12: build each unit's opener + one deck per lesson from its content file — `data/unit02-content.json` … `data/unit12-content.json` (lesson outline, real readings, listening scripts, writing/speaking tasks, grouped vocab). Distilled spine (retrieval, quiz, rubric, capstone) is in `ref/` / `source-packs/uNN-data.js`.
- Exam-technique units (Reading / Writing / Listening / Speaking): `data/exam1-…` … `data/exam4-…-content.json` — these get the **exam-strategy** treatment (skim/scan, command words, register, develop-technique → "battle plan" decks), not the thematic arc.

Per unit, keep the recurring system: Do-Now retrieval reaching back · 3 objectives + success criteria + why-it-matters · say-it-first vocab with pronunciation · Meaning/Method/Response annotation · timed speaking with stems · keyed answers on reveal · cumulative Skill Bank · exit ticket → next lesson.

---

## Printables (being built separately by Evan's Claude Code session)
The printable **student + teacher packets** and the **exam take-home / in-class pair** for each unit are being generated from the same content via the docx pipeline, to complement these decks. You (the design chat) don't need to build those unless asked — focus on the decks.
