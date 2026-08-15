# Source repository

repo: evanmitchelltutoring/mr-evans-platform
branch: main
path: (whole repo — platform source for Mr Evans' IGCSE ESL materials)

This project holds the **authored teaching materials** (HTML slide decks, printable packets, and exam papers) built from the content spine in `data/*.json`. The repository is the learning-platform source; these screens are the deliverables that platform serves. Do not recreate the repository's app UI here — the repo is source material and reference only.

## Last sync
date: 2026-08-15
commit: (not imported at a specific commit — association only; no repo files copied in yet)

### Updated in this project
- Units 1–3: full decks, packets, and exam pairs — all Pass-A improvements applied
- Unit 4 (Cultures & Connections): opener + 11 lessons built; packets & exam pair in progress
- Shared components: deck-stage.js, doc-page.js, image-slot.js, lesson-timer.js
- Content spine present for all 12 units + 4 exam papers in data/

## Screen map
| Screen (project) | Built from |
|---|---|
| Unit{N}-Opener / Lesson01–11.dc.html | data/unit{NN}-content.json (lessons, vocabulary, reading_passages, listening_tracks, writing/speaking tasks) |
| Unit{N}-Student-Packet / Teacher-Packet.dc.html | same unit content + data/reading-glossaries*, grammar-extra-practice*, scaffolds* |
| Unit{N}-Exam-Takehome / Exam-Inclass.dc.html | a unit reading passage (annotation + in-class paper) |
| (exam-technique decks, planned) | data/exam1–4-*.json |

_Note: screens are generated from the content JSON, not 1:1 from repo source files. When syncing, diff the content spine and the platform repo against this date._
