// igcse-esl-exam · Paper 2 Writing — teacher-pack data (exam technique)
const VOCAB=[
 ["content point","one of the things the task tells you to cover; each must be addressed"],["register","the level of formality you use, chosen for your audience"],
 ["audience","the person you are writing to, which decides your register"],["tone","the feeling of your writing (friendly, serious, persuasive)"],
 ["directed writing","a task that gives you the situation and the points you must cover"],["summary","a short version that keeps only the key points, in your own words"],
 ["planning","spending a few minutes structuring ideas before you write"],["command word","the word that tells you what the task wants (describe, explain, suggest)"],
 ["mark scheme","the list of things an examiner rewards: content and language"],["proofread","to check your writing for errors in the final minutes"],
 ["formal","serious, polite language for officials, reports and strangers"],["informal","relaxed, friendly language for people you know well"],
 ["cohesion","how smoothly ideas connect, using linking words"],["relevance","how closely your writing sticks to the task"],
 ["mark loss","the small, avoidable mistakes that cost you easy marks"],
];
module.exports={
 no:2, slug:"writing-paper-technique", title:"Writing Paper Technique",
 byline:"Every content point, in the right voice",
 outDir:__dirname+"/exam02-writing", vocab:VOCAB,
 lessonDeck:{
  doNow:"You have 45 minutes for a writing task. What do you do in the FIRST five minutes — and why?",
  objectives:[["Cover every content point","address each thing the task asks for."],["Match register to audience","choose formal or informal on purpose."],["Plan before you write","structure ideas in five minutes."],["Avoid mark loss","catch the small, avoidable errors."]],
  bigIdea:{header:"Marks are won in the plan and lost in the details",big:"Most writing marks are lost not to weak English, but to missed content points and the wrong register.",body:"This paper trains you to cover every content point, choose the right register for your audience, plan fast, and proofread away the small errors that quietly cost marks."},
  settings:[["Content points","cover every one — nothing missed."],["Register & tone","the right voice for the reader."],["The 5-minute plan","structure before you write."],["Mark loss","the avoidable errors to hunt down."]],
  keyVocab:["content point","register","audience","planning","proofread"],
  framesKicker:"EXAM REMINDERS",
  frames:["The task asks me to cover ____.","My audience is ____, so my register is ____.","My plan is: ____.","Before I finish, I will check ____."],
  plenary:{h:"One habit",share:"Share one thing you'll always do before you start writing.",exit:"Write: 'My first five minutes will always be for ____.'"}
 },
 writingDeck:{
  title:"Your Writing Battle Plan", byline:"Plan, write, proofread",
  doNow:"A task says 'write to a friend'. Name three things about your language that must change.",
  shapeHeader:"A writing task — 4 moves",
  shape:[["Read & tick","list every content point; tick them as you cover them."],["Choose register","decide your audience and voice."],["Plan (5 min)","order your paragraphs."],["Write, then proofread","last 5 minutes for errors, not new ideas."]],
  model:{header:"A worked plan (directed email)",task:"Read the task, extract the content points, and plan before writing.",
   model:"Task: 'Email a friend about a school trip. Say where you went, what you did, and what you didn't enjoy.' Content points: (1) where, (2) what you did, (3) one negative. Audience: a friend → informal register ('Hi Sam!', contractions, exclamation marks). Plan: ¶1 greeting + where we went; ¶2 what we did (2 highlights, with detail); ¶3 the one thing I didn't enjoy + a joke; ¶4 sign-off ('Write back soon!'). Every content point is in the plan, the register is set, and I've left five minutes at the end to proofread for tenses and spelling."},
  starters:["Support: 'The content points are ____, ____, ____.'","Core: 'My audience is ____, so I will ____.'","Stretch: plan how to cover a content point with real detail, not one flat sentence."],
  criteria:[["Content","every point covered, with detail."],["Register","right voice, held throughout."],["Structure","clear, planned paragraphs."],["Accuracy","proofread for errors."]],
  plenary:{h:"Point check",share:"Swap plans. Has your partner covered every content point?",exit:"Give your partner two stars (liked) and one wish (improve)."}
 },
 retrieval:[
  ["Round 1 · Content & Task",[["Each thing the task tells you to cover is a…","content point"],["The commonest way to lose content marks is…","missing a content point"],["A task that gives the situation and points to cover is…","directed writing"],["What does 'relevance' mean?","how closely your writing sticks to the task"],["A short version in your own words is a…","summary"]]],
  ["Round 2 · Register & Audience",[["The level of formality you choose is your…","register"],["An email to a friend uses…","informal register"],["A report for the head teacher uses…","formal register"],["What decides your register?","the audience"],["'Furthermore' and 'Yours faithfully' are…","formal"]]],
  ["Round 3 · Planning & Proofreading",[["Spending five minutes structuring ideas first is…","planning"],["The final five minutes are for…","proofreading"],["'Describe' asks you to…","say what something is like"],["'Suggest' asks you to…","give ideas or recommendations"],["How smoothly ideas connect is…","cohesion"]]],
  ["Round 4 · Mark Loss",[["To keep register consistent, decide the ____ first.","audience"],["In the last minutes you should NOT…","add big new ideas"],["The mark scheme rewards content and…","language"],["Small avoidable mistakes are called…","mark loss"],["Sticking to the task is called…","relevance"]]],
  ["Round 5 · Mixed recall",[["Name the two things the mark scheme rewards.","content and language"],["What should you do in the first five minutes?","read, list content points, and plan"],["Why decide the audience before writing?","to keep the register consistent"],["Formal or informal for a job application?","formal"],["Name one thing to check when proofreading.","tenses / spelling / register / content points"]]]
 ],
 diffhw:{
  challenge:[["Two registers","Write the SAME message twice — once formal, once informal — and label every change."],["Content-point audit","Take a past task; highlight where you cover each content point. Any missed?"],["Beat mark loss","Write to time, then find and fix five avoidable errors in your own work."]],
  supportFrames:["The task wants me to cover ____.","My reader is ____.","So I will write in a ____ way.","My paragraphs are: ____.","At the end I will check ____."],
  wordBank:"content point · register · audience · formal · informal · to plan · to proofread · relevant",
  homework:[["Content points","For 3 past tasks, list the content points before writing anything."],["Register drill","Rewrite one informal message as formal, and one formal as informal."],["Timed write","Write one full task to time, with a 5-minute plan and 5-minute proofread."],["Error log","Log your five most common errors; make a personal proofreading checklist."],["Reflect","Which task type (email/report/article/review) is weakest? Practise it twice."]]
 },
 quiz:{
  clozeBank:["content","register","audience","informal","formal","planning","proofread","command","cohesion","relevance","summary","mark"],
  clozeText:["The writing paper is won before you write. Read the task and list every ",1," point — missing one is the easiest way to lose marks. Choose your ",2,
   " by thinking about your ",3,": a friend needs ",4," language; a head teacher needs ",5," language. Spend five minutes ",6," your paragraphs, and save five at the end to ",7,
   ". Watch the ",8," word — 'suggest' and 'describe' want different things. Link ideas for ",9,", and keep every sentence relevant (",10,"). For a ",11,
   " task, keep only the key points in your own words. Do all this, and you stop giving away ",12," through careless errors."],
  match:[["register",VOCAB.find(v=>v[0]==="register")[1]],["content point",VOCAB.find(v=>v[0]==="content point")[1]],["cohesion",VOCAB.find(v=>v[0]==="cohesion")[1]],["audience",VOCAB.find(v=>v[0]==="audience")[1]],["summary",VOCAB.find(v=>v[0]==="summary")[1]],["proofread",VOCAB.find(v=>v[0]==="proofread")[1]],["relevance",VOCAB.find(v=>v[0]==="relevance")[1]],["directed writing",VOCAB.find(v=>v[0]==="directed writing")[1]]],
  matchShuf:[3,0,5,1,6,2,7,4],
  productive:["content point","register","audience","proofread","relevant"]
 },
 rubricTitle:"Writing Technique", rubricTask:"Applying writing-paper technique",
 rubric:[
  ["Content coverage","Every content point covered, with real detail.","Most points covered.","Some points thin or missing.","Several points missed."],
  ["Register & tone","Right register, held consistently.","Mostly right register.","Register slips at times.","Wrong or mixed register."],
  ["Planning & structure","Clear, planned paragraphs; strong cohesion.","Clear structure; some linking.","Some structure; weak linking.","Little structure."],
  ["Accuracy","Proofread; very few errors.","Mostly accurate.","Frequent errors.","Errors block meaning."],
  ["Time management","Planned and proofread within time.","Finished on time.","Rushed; no proofread.","Ran out of time."]],
 rubricSelfCheck:["list and cover every content point.","choose my register from my audience.","plan my paragraphs in five minutes.","keep every sentence relevant to the task.","proofread for errors in the final five minutes."],
 project:{
  title:"The Writing Mock Protocol", subtitle:"write a full paper to time, then analyse the marks.",
  brief:"Complete one full past-paper Writing task under exam conditions. Then build a short 'writer's report' (a page or 3–5 slides) analysing your content coverage, register and accuracy, with a plan for improvement. Present it to the class.",
  research:[["The content points","List them; did you cover every one?"],["The register","Did you match audience and hold it?"],["The plan","Did your five-minute plan help?"],["The errors","Your five most common mistakes."],["The fix","Your two commitments for the next task."]],
  plan:"Write to time. Mark against the criteria (content, then language). Present: (1) content coverage  (2) register  (3) planning  (4) top errors  (5) two fixes.",
  langChecklist:["use the strategy vocabulary (content point, register, cohesion…)","show the content points you covered","name your top two error types","state two concrete commitments"],
  rubric:[["Honesty & accuracy","A truthful analysis of content, register and errors."],["Diagnosis","Correctly identifies what cost marks."],["Insight","Sees the pattern behind the marks lost."],["Action plan","Two specific, achievable fixes."],["Presentation & delivery","Clear voice; keeps to time; answers a question."]]
 }
};
