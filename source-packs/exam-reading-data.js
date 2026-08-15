// igcse-esl-exam · Paper 1 Reading — teacher-pack data (exam technique) for pack-engine.js
const VOCAB=[
 ["command word","the word (Give, Explain, Suggest…) that tells you exactly what a question wants"],["skim","to read fast for the general gist or main idea"],
 ["scan","to read slowly to find one specific detail"],["infer","to work out a meaning that is suggested but not stated"],
 ["explicit","stated directly and clearly in the text"],["paraphrase","the same idea expressed in different words"],
 ["distractor","a wrong answer option designed to look right"],["trap","an option planted to catch a careless reader"],
 ["key word","the most important word in a question, which you scan for"],["gist","the overall meaning of a text"],
 ["repeated-vocabulary trap","a wrong option that simply repeats a word from the text"],["partly-true trap","an option that is only half correct, so it is wrong"],
 ["wrong-viewpoint trap","an option that reverses who thinks or does something"],["detail trap","a small true detail offered instead of the real answer"],
 ["time allocation","planning how many minutes to spend on each exercise"],
];
module.exports={
 no:1, slug:"reading-paper-technique", title:"Reading Paper Technique",
 byline:"Reading the questions as carefully as the text",
 outDir:__dirname+"/exam01-reading", vocab:VOCAB,
 lessonDeck:{
  doNow:"You have a reading text and 15 questions in 60 minutes. Where do you start — and why?",
  objectives:[["Decode command words","know exactly what each question is asking for."],["Skim and scan on purpose","read fast for gist, slowly for detail."],["Spot the trap options","recognise the four classic distractors."],["Manage your time","build a battle plan for the whole paper."]],
  bigIdea:{header:"The answer is in the text — and so are the traps",big:"Reading marks are lost less to hard texts than to careless reading of the QUESTIONS.",body:"This paper trains four things: decoding command words, skimming vs scanning, spotting planted trap options, and allocating your time so no easy marks slip away."},
  settings:[["Command words","what the question actually wants."],["Skim vs scan","the right speed for the job."],["Trap options","the four classic distractors."],["The battle plan","time per exercise, and when to move on."]],
  keyVocab:["command word","skim","scan","paraphrase","distractor"],
  framesKicker:"EXAM REMINDERS",
  frames:["This command word wants ____.","I'll skim for ____, then scan for ____.","This option repeats the text — likely a ____.","I have ____ minutes for this exercise."],
  plenary:{h:"One habit",share:"Share one reading habit you'll change for the exam.",exit:"Write: 'Before I answer, I always ____.'"}
 },
 writingDeck:{
  title:"Your Reading Battle Plan", byline:"A worked approach to every question",
  doNow:"An option uses the exact words from the text. Trust it, or be suspicious? Why?",
  shapeHeader:"Answering a question — 4 steps",
  shape:[["Read the question","underline the command word AND the key word."],["Predict","what KIND of answer? (fact / reason / opinion)"],["Scan","find the paraphrase, not the matching words."],["Check the traps","reject repeated-word, partly-true and wrong-viewpoint options."]],
  model:{header:"A worked question (Multiple Choice)",task:"Choose the best option — and justify why the others are traps.",
   model:"Question: 'Why does Marcus enjoy chess?' I underline 'Why' (it wants a reason) and 'enjoy'. I scan for the paraphrase. Option A repeats 'strategy' straight from the text — a repeated-vocabulary trap. Option B is true but is about his GRANDFATHER, not Marcus — a wrong-viewpoint trap. Option C says he 'likes to think for himself', which paraphrases the line 'he was encouraged to explain his own reasoning'. C is the answer: it captures the meaning without copying the words, and it's about the right person."},
  starters:["Support: 'The command word is ____, so I need ____.'","Core: 'Option __ is a trap because ____.'","Stretch: justify every rejected option by naming its trap type."],
  criteria:[["Command word","I answered what was actually asked."],["Paraphrase","I matched meaning, not words."],["Traps","I rejected the distractors on purpose."],["Timing","I kept to my time per exercise."]],
  plenary:{h:"Name that trap",share:"Take a wrong option and name its trap type to a partner.",exit:"Give your partner two stars (liked) and one wish (improve)."}
 },
 retrieval:[
  ["Round 1 · Command Words",[["'Give / State / Identify' want an answer that is…","brief, located, no explanation"],["Which command word needs a reason?","Explain"],["'Suggest' asks you to…","give ideas or recommendations"],["What does 'skim' mean?","to read fast for the gist"],["What does 'scan' mean?","to read slowly for one detail"]]],
  ["Round 2 · Traps",[["An option repeating a word from the text is often a…","repeated-vocabulary trap"],["An option that is only half correct is…","wrong (a partly-true trap)"],["An option that reverses who thinks something is a…","wrong-viewpoint trap"],["The correct answer is usually a…","paraphrase"],["A wrong option designed to look right is a…","distractor"]]],
  ["Round 3 · Reading Speeds",[["To find the main idea you should…","skim"],["To find a specific date you should…","scan"],["Before scanning you should underline the…","key word"],["The overall meaning of a text is the…","gist"],["A meaning suggested but not stated must be…","inferred"]]],
  ["Round 4 · Timing & Nerves",[["Planning minutes per exercise is called…","time allocation"],["If a question is taking too long you should…","mark your best answer and move on"],["You should never leave an answer…","blank"],["Explicit means…","stated directly in the text"],["Two passes of a text means skim then…","scan"]]],
  ["Round 5 · Mixed recall",[["Name one of the four trap types.","repeated-vocabulary / partly-true / wrong-viewpoint / detail"],["What should you do FIRST with any question?","read it and underline the command + key word"],["Why is a word-for-word option risky?","the answer is usually paraphrased, so it's often a trap"],["Skim or scan for 'the writer's attitude'?","skim (it's a general impression)"],["Skim or scan for 'a price'?","scan (one exact detail)"]]]
 ],
 diffhw:{
  challenge:[["Trap designer","Write your own multiple-choice question with all four trap types as the wrong options."],["Justify every option","For a past-paper question, explain why EACH wrong option is wrong, by trap type."],["Beat the clock","Do a full reading section in 10% less than the exam time; note where you struggled."]],
  supportFrames:["The question asks me to ____.","The key word is ____.","I will skim/scan for ____.","This option is wrong because ____.","My answer is ____."],
  wordBank:"command word · skim · scan · key word · paraphrase · distractor · trap · infer",
  homework:[["Command words","Make a card for each command word and what it wants."],["Trap hunt","Do one reading exercise; name the trap type of every wrong option you nearly chose."],["Battle plan","Time a full reading section; write your personal timing plan."],["Vocabulary","Log every word that cost you a mark; learn 5 a day."],["Reflect","Which exercise type is weakest? Plan two practices of it this week."]]
 },
 quiz:{
  clozeBank:["command","skim","scan","key","paraphrase","distractor","repeated","partly","wrong","explicit","infer","time"],
  clozeText:["The reading paper rewards careful reading of the questions. First, decode the ",1," word — it tells you exactly what to do. Then ",2,
   " the text for the gist, and ",3," for the exact detail, guided by the ",4," word you underlined. Remember that the correct answer is usually a ",5,
   ", not the same words; an option that copies the text is often a ",6," (a ",7,"-vocabulary trap). Reject any option that is only ",8,
   "-true, or that gives the ",9,"-viewpoint. Some answers are stated ",10,"ly; others you must ",11," from clues. Above all, manage your ",12,"."],
  match:[["skim",VOCAB.find(v=>v[0]==="skim")[1]],["scan",VOCAB.find(v=>v[0]==="scan")[1]],["infer",VOCAB.find(v=>v[0]==="infer")[1]],["paraphrase",VOCAB.find(v=>v[0]==="paraphrase")[1]],["distractor",VOCAB.find(v=>v[0]==="distractor")[1]],["gist",VOCAB.find(v=>v[0]==="gist")[1]],["explicit",VOCAB.find(v=>v[0]==="explicit")[1]],["key word",VOCAB.find(v=>v[0]==="key word")[1]]],
  matchShuf:[3,0,5,1,6,2,7,4],
  productive:["command word","skim","scan","paraphrase","infer"]
 },
 rubricTitle:"Reading Technique", rubricTask:"Applying reading-paper technique",
 rubric:[
  ["Command-word focus","Always answers exactly what is asked; no over- or under-answering.","Usually answers the right thing.","Sometimes misreads the command word.","Often answers the wrong thing."],
  ["Skim/scan use","Uses the right speed for each task, efficiently.","Mostly uses the right speed.","Reads everything at one speed.","Reads slowly and runs out of time."],
  ["Trap awareness","Reliably rejects distractors and names why.","Usually avoids traps.","Sometimes falls for traps.","Frequently chooses trap options."],
  ["Use of paraphrase","Matches meaning, not words, confidently.","Usually matches meaning.","Sometimes word-matches.","Relies on matching words."],
  ["Time management","Finishes with time to check; nothing left blank.","Finishes on time.","Rushes the end.","Runs out of time; blanks left."]],
 rubricSelfCheck:["underline the command word AND key word before answering.","skim for gist, then scan for detail.","reject trap options and know why.","match meaning (paraphrase), not words.","keep to my time plan and leave nothing blank."],
 project:{
  title:"The Reading Mock Protocol", subtitle:"run a full reading paper like race day, then analyse it.",
  brief:"Sit one complete past-paper Reading paper under exam conditions (strict time, no help). Then build a short 'race report' (a page or 3–5 slides) analysing your performance and your plan for the next attempt. Present it to the class.",
  research:[["The plan","Your minutes-per-exercise plan going in."],["The result","Your score by exercise."],["The errors","Tag each wrong answer: trap / vocabulary / time / careless."],["The pattern","Which error type and which exercise cost you most?"],["The fix","Your two commitments for the next paper."]],
  plan:"Sit the paper to time. Mark it honestly. Then present: (1) your plan  (2) your score by exercise  (3) your error tags  (4) your worst pattern  (5) two fixes.",
  langChecklist:["use the strategy vocabulary correctly (command word, distractor, paraphrase…)","name at least two trap types you met","give a specific, measurable timing plan","state two concrete commitments"],
  rubric:[["Honesty & accuracy","A truthful, exercise-by-exercise analysis."],["Error diagnosis","Correctly tags and names the error types."],["Insight","Identifies the real pattern behind the marks lost."],["Action plan","Two specific, achievable fixes."],["Presentation & delivery","Clear voice; keeps to time; answers a question."]]
 }
};
