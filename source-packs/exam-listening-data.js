// igcse-esl-exam · Paper 2 Listening — teacher-pack data (exam technique)
const VOCAB=[
 ["prediction","guessing what you'll hear before the audio, using the questions"],["note-taking","writing key words (not sentences) while the audio plays"],
 ["distractor","something said to lead you towards a wrong answer"],["correction trap","when a speaker says something, then corrects it — the first is wrong"],
 ["numbers trap","when several figures are said and only the speaker's own is right"],["sequence trap","when actions are listed in order and a later one is the distractor"],
 ["attitude","the speaker's feeling or opinion, shown by their tone and word choice"],["inference","working out what a speaker means without them saying it directly"],
 ["gist","the overall idea of what is said"],["paraphrase","the same idea in different words — how the answer usually appears"],
 ["error code","a letter (L/V/T/F/I) you tag each mistake with, to find your weakness"],["transcription","writing down exactly what you hear, spelled correctly"],
 ["keyword","the most important word in a question, which you listen out for"],["attribution","noticing WHO says a figure or fact — the key to the numbers trap"],
 ["playback","the moment the audio is playing, when you take notes"],
];
module.exports={
 no:3, slug:"listening-paper-technique", title:"Listening Paper Technique",
 byline:"Hearing the answer past the traps",
 outDir:__dirname+"/exam03-listening", vocab:VOCAB,
 lessonDeck:{
  doNow:"You get 40 seconds before a recording plays. What is the single best thing to do with them?",
  objectives:[["Predict before you listen","use the questions to prime your ears."],["Take notes that keep up","key words, not sentences."],["Spot the traps","correction, sequence and numbers traps."],["Tag your errors","use the L/V/T/F/I codes to find your weakness."]],
  bigIdea:{header:"The audio plants traps on purpose",big:"Listening marks are lost to planted distractors — the first thing said, a corrected figure, a vivid later action.",body:"This paper trains you to predict before listening, take rapid notes, recognise the classic traps, and tag your errors so practice targets your real weakness."},
  settings:[["Prediction","use the pause to prime your ears."],["Note-taking","key words, kept up with the audio."],["The traps","correction, sequence and numbers."],["Error codes","L/V/T/F/I — find the pattern."]],
  keyVocab:["prediction","note-taking","distractor","attitude","attribution"],
  framesKicker:"EXAM REMINDERS",
  frames:["This question wants a ____, so I'll listen for ____.","'I'd estimate…' signals the speaker's OWN ____.","'We expected X but Y' — the answer is ____.","I'll tag that error as ____ (L/V/T/F/I)."],
  plenary:{h:"One habit",share:"Share one thing you'll do in the pause before every recording.",exit:"Write: 'Before the audio plays, I always ____.'"}
 },
 writingDeck:{
  title:"Your Listening Battle Plan", byline:"Predict, note, spot the trap",
  doNow:"You hear '250… but I'd estimate more like 270… one group said 100.' Which number is the answer, and why?",
  shapeHeader:"A listening question — 4 moves",
  shape:[["Read & predict","what kind of answer? underline the keyword."],["First play","catch the gist; note key words."],["Spot the trap","first-mentioned? corrected? whose number?"],["Second play","confirm the paraphrased answer."]],
  model:{header:"A worked question (numbers trap)",task:"Choose the number the speaker gives as their OWN estimate.",
   model:"I read the question — 'How many species does John record?' — and listen for a number, noting WHO says each one. I hear: 'some sources say 250… I'd estimate more like 270… one group found only 100.' Three figures — a numbers trap. The rule is attribution: whose figure is it? '250' belongs to 'some sources'; '100' to 'one group'. Only '270' is John's OWN estimate, signalled by 'I'd estimate'. The answer is 270. The trap works by making the first number, 250, the most memorable — so I listen past it for the speaker's own view."},
  starters:["Support: 'The question wants a ____. I listen for ____.'","Core: 'The trap here is a ____ trap because ____.'","Stretch: predict the trap TYPE from the question before the audio even plays."],
  criteria:[["Prediction","primed my ears before listening."],["Notes","kept up with key words."],["Traps","named and avoided the distractor."],["Attitude","caught feeling from tone words."]],
  plenary:{h:"Name that trap",share:"Describe a moment from the audio and name its trap type.",exit:"Give your partner two stars (liked) and one wish (improve)."}
 },
 retrieval:[
  ["Round 1 · Before You Listen",[["Guessing what you'll hear from the questions is…","prediction"],["In the pause you should underline the…","keyword"],["'How many…?' means listen for a…","number"],["'How did she feel?' means listen for a…","feeling / attitude"],["Notes during playback should be…","key words, not sentences"]]],
  ["Round 2 · The Traps",[["Speaker says something then corrects it — the first is a…","correction trap"],["Several figures said; only the speaker's own is right — a…","numbers trap"],["Actions in order; a later one distracts — a…","sequence trap"],["'We expected X but found Y' — the answer is…","Y"],["Noticing WHO says a figure is called…","attribution"]]],
  ["Round 3 · Attitude & Inference",[["A speaker's feeling shown by tone is their…","attitude"],["Working out an unstated meaning is…","inference"],["A worry raised then dismissed is…","not the main feeling (a trap)"],["The answer usually appears as a…","paraphrase"],["Evaluative words ('a few tears') signal…","attitude / feeling"]]],
  ["Round 4 · Errors & Accuracy",[["Tagging a mistake L/V/T/F/I uses an…","error code"],["'L' error means you…","misheard or processed too slowly"],["'T' error means you fell for a…","trap"],["Writing the word spelled correctly is…","transcription"],["The dominant error code shows your…","top priority to practise"]]],
  ["Round 5 · Mixed recall",[["Name one listening trap type.","correction / numbers / sequence / expectation"],["What's the best use of the pre-listening pause?","predict and underline keywords"],["Which number is the answer among three figures?","the one the speaker gives as their OWN"],["Number or feeling for an attitude question?","a feeling","(listen for tone words)"],["What does the dominant error code tell you?","the exact skill to practise most"]]]
 ],
 diffhw:{
  challenge:[["Trap spotter","Listen to any English interview; note two moments a careless listener would get wrong, and why."],["Prediction sheet","For a past paper, write your prediction for each question BEFORE listening; check your hit rate."],["Error tracker","Do three listening papers; track your L/V/T/F/I codes and name your #1 weakness."]],
  supportFrames:["The question wants a ____.","I will listen for ____.","The speaker said ____.","The trap was ____.","My answer is ____."],
  wordBank:"prediction · keyword · distractor · correction trap · numbers trap · attitude · to infer · error code",
  homework:[["Predict first","For one paper, write predictions for every question before you listen."],["Trap log","Do one listening exercise; name the trap type behind each wrong answer."],["Error codes","Complete a full section; tag every error L/V/T/F/I."],["Spelling","Log every answer you spelled wrong; practise those words."],["Reflect","Which error code dominates? Plan two targeted practices this week."]]
 },
 quiz:{
  clozeBank:["prediction","keyword","distractor","correction","numbers","attribution","attitude","inference","paraphrase","transcription","error","gist"],
  clozeText:["Listening marks are lost to traps you can learn to expect. Use the pause for ",1,": read each question and underline the ",2,
   ". As the audio plays, ignore the obvious ",3,". If a speaker says something then takes it back, that first item is a ",4," trap; if you hear several figures, it is a ",5,
   " trap, solved by ",6," — whose number is it? For 'how do they feel' questions, listen for ",7," in the tone, and be ready to ",8,
   " a meaning that isn't stated. The answer nearly always appears as a ",9,", not the exact words, so write it with careful ",10,
   ". Afterwards, tag every mistake with an ",11," code, and always catch the ",12," on the first play."],
  match:[["prediction",VOCAB.find(v=>v[0]==="prediction")[1]],["note-taking",VOCAB.find(v=>v[0]==="note-taking")[1]],["inference",VOCAB.find(v=>v[0]==="inference")[1]],["distractor",VOCAB.find(v=>v[0]==="distractor")[1]],["attitude",VOCAB.find(v=>v[0]==="attitude")[1]],["attribution",VOCAB.find(v=>v[0]==="attribution")[1]],["transcription",VOCAB.find(v=>v[0]==="transcription")[1]],["gist",VOCAB.find(v=>v[0]==="gist")[1]]],
  matchShuf:[3,0,5,1,6,2,7,4],
  productive:["prediction","distractor","attitude","attribution","transcription"]
 },
 rubricTitle:"Listening Technique", rubricTask:"Applying listening-paper technique",
 rubric:[
  ["Prediction","Uses the pause to predict and underline keywords.","Usually predicts.","Sometimes predicts.","Listens cold, unprepared."],
  ["Note-taking","Rapid key-word notes; keeps up with the audio.","Mostly keeps up.","Falls behind at times.","Tries to write everything; loses the thread."],
  ["Trap awareness","Reliably spots and names the traps.","Usually avoids traps.","Sometimes trapped.","Frequently trapped."],
  ["Attitude & inference","Catches feeling and implied meaning.","Usually catches attitude.","Sometimes misses attitude.","Answers only literal detail."],
  ["Accuracy & spelling","Answers spelled correctly.","Mostly accurate.","Some spelling errors.","Frequent transcription errors."]],
 rubricSelfCheck:["use the pause to predict and underline keywords.","take key-word notes that keep up with the audio.","spot and name the trap types.","listen for attitude in tone words.","spell my answers correctly and tag my errors."],
 project:{
  title:"The Listening Mock Protocol", subtitle:"sit a full listening paper, then find your error pattern.",
  brief:"Complete one full past-paper Listening paper under exam conditions. Then build a short 'listener's report' (a page or 3–5 slides) using the L/V/T/F/I codes to find your biggest weakness and your plan to fix it. Present it to the class.",
  research:[["The prediction","Did your pre-listening predictions help?"],["The result","Your score by exercise."],["The errors","Tag every error L (listening) / V (vocabulary) / T (trap) / F (focus) / I (inference)."],["The pattern","Which code dominates?"],["The fix","Your two commitments for the next paper."]],
  plan:"Sit the paper. Tag every error with a code. Present: (1) prediction  (2) score by exercise  (3) error codes  (4) dominant weakness  (5) two fixes.",
  langChecklist:["use the strategy vocabulary (prediction, distractor, attribution…)","name at least two trap types you met","report your L/V/T/F/I tally","state two concrete commitments"],
  rubric:[["Honesty & accuracy","A truthful, coded analysis of every error."],["Diagnosis","Correctly identifies trap types and error codes."],["Insight","Finds the real pattern behind lost marks."],["Action plan","Two specific, achievable fixes."],["Presentation & delivery","Clear voice; keeps to time; answers a question."]]
 }
};
