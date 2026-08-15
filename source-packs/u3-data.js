// Unit 3 "Health & Wellbeing" — teacher-pack data for pack-engine.js
const VOCAB=[
 ["automatic","done without conscious thought, or happening by itself"],["discouraged","having lost confidence or the will to continue"],
 ["energetic","full of energy and active"],["flexibility","the quality of bending or adapting easily without breaking"],
 ["intense","very strong, extreme or forceful"],["posture","the way someone holds their body, especially when seated"],
 ["strengthen","to make or become stronger"],["alertness","the state of being awake, attentive and quick to notice things"],
 ["consume","to eat, drink or use up"],["consumption","the act of eating, drinking or using something"],
 ["dehydration","the harmful loss of water from the body"],["hydrate","to give the body the water it needs"],
 ["misleading","giving a wrong idea or impression"],["moderation","the avoidance of extremes; keeping within sensible limits"],
 ["nourish","to provide the food and care needed to grow and stay healthy"],["nutritious","containing substances the body needs to stay healthy"],
 ["processed","(of food) changed from its natural state in a factory"],["anxiety","a feeling of worry or unease, often about something uncertain"],
 ["awareness","knowledge or perception of a situation or feeling"],["burnout","extreme physical or mental tiredness caused by too much stress"],
 ["comparison","the act of looking at two or more things to see how they differ"],["deliberate","done on purpose; intentional and considered"],
 ["mindful","aware of, and paying careful attention to, the present moment"],["overwhelm","to affect someone so strongly that they cannot cope"],
 ["resilience","the ability to recover quickly from difficulties"],["supportive","giving help, encouragement or sympathy to someone"],
 ["balanced","having different elements in the correct, healthy proportions"],["consistent","happening in the same way over time; regular and dependable"],
 ["drowsy","sleepy and not fully alert"],["recovery","a return to a normal or healthy state"],
 ["refreshed","feeling energetic and revived again, especially after rest"],["relaxation","the state of being free from tension and worry"],
 ["restore","to bring something back to its original or healthy state"],["sceptical","not easily convinced; having doubts"],
 ["steady","firm, stable, and not changing suddenly"],
];
module.exports={
 no:3, slug:"healthy-living", title:"Health & Wellbeing",
 byline:"Body, mind and the balance between",
 outDir:__dirname+"/unit03-health", vocab:VOCAB,
 lessonDeck:{
  doNow:"What is one thing you do to stay healthy — and one thing you know you should do more?",
  objectives:[["Read for detail & attitude","find facts and opinions about health in a text."],["Use precise health vocabulary","nutritious, resilience, moderation, refreshed."],["Explain cause and effect","show how habits lead to results, and give advice."],["Write to persuade & advise","a friendly message and a budget-health guide."]],
  bigIdea:{header:"What does it mean to be healthy?",big:"Health isn't just the body — it's food, movement, rest AND mind, kept in balance.",body:"This unit looks at how we move, fuel, rest and calm ourselves. The theme running through it all is moderation: small, consistent habits beat extreme, short-lived ones."},
  settings:[["Move your way","find activity you actually enjoy."],["Fuel & focus","what you eat and drink shapes how you think."],["Mind & mood","stress, resilience and looking after your mind."],["Rest & recovery","why sleep is the foundation of health."]],
  keyVocab:["nutritious","resilience","moderation","refreshed","mindful"],
  framesKicker:"SENTENCE FRAMES — HEALTH & ADVICE",
  frames:["A healthy habit I have is ____.","____ can lead to ____.","You should ____ because ____.","In the long run, ____."],
  plenary:{h:"One small change",share:"Share one small, realistic change you could make this week.",exit:"Write: 'A balanced life is one where ____.'"}
 },
 writingDeck:{
  title:"Writing to Persuade & Advise", byline:"Help a friend live well",
  doNow:"Think of a healthy habit. In one sentence, how would you persuade a friend to try it?",
  shapeHeader:"Persuade a friend — 3 moves",
  shape:[["Hook + why","name the habit and why it matters."],["Reasons + effect","give reasons; show what it leads to."],["Easy step + encourage","make it feel doable; end warmly."]],
  model:{header:"A Grade-A persuasive message",task:"Persuade a friend to build one healthy habit (120–150 words).",
   model:"Hey Leo, I know exams have been brutal, but hear me out — try going to bed just 30 minutes earlier this week. I started doing it and honestly I feel so much more refreshed; even one bad night used to leave me drowsy and useless in class. There's growing evidence that consistent sleep can lead to better focus and a calmer mood, which is exactly what we both need right now. You don't have to change everything — just pick a fixed bedtime and stick to it for five nights. Trust me, in the long run it beats another late-night scroll. Give it a go and tell me how you feel! Sam"},
  starters:["Support: 'You should try ____. It helps because ____.'","Core: 'Have you ever thought about ____? The truth is, ____ can lead to ____.'","Stretch: answer an objection ('I don't have time…') before your final line."],
  criteria:[["Reason","give a clear, kind reason to change."],["Cause-effect","use a phrase like 'can lead to'."],["Step","suggest one small first step."],["Tone","encouraging, not bossy."]],
  plenary:{h:"Would it persuade you?",share:"Swap messages. Would your partner's actually persuade you? Why?",exit:"Give your partner two stars (liked) and one wish (improve)."}
 },
 retrieval:[
  ["Round 1 · Move Your Way",[["What does 'energetic' mean?","full of energy and active"],["The ability to bend and adapt easily is ___.","flexibility"],["To make or become stronger is to ___.","strengthen"],["The way you hold your body is your ___.","posture"],["What does 'discouraged' mean?","having lost confidence or the will to continue"]]],
  ["Round 2 · Fuel & Focus",[["Food with what the body needs is ___.","nutritious"],["The harmful loss of water from the body is ___.","dehydration"],["What does 'moderation' mean?","keeping within sensible limits; avoiding extremes"],["Food changed in a factory is ___.","processed"],["Giving a wrong idea or impression is ___.","misleading"]]],
  ["Round 3 · Mind & Mood",[["A feeling of worry or unease is ___.","anxiety"],["The ability to recover from difficulties is ___.","resilience"],["What does 'mindful' mean?","paying careful attention to the present moment"],["Extreme tiredness from too much stress is ___.","burnout"],["To affect someone so they cannot cope is to ___ them.","overwhelm"]]],
  ["Round 4 · Rest & Recovery",[["Feeling revived after rest is feeling ___.","refreshed"],["Sleepy and not fully alert is ___.","drowsy"],["Regular and dependable over time is ___.","consistent"],["What does 'restore' mean?","to bring something back to its healthy state"],["Not easily convinced; doubtful is ___.","sceptical"]]],
  ["Round 5 · Mixed recall (exam warm-up)",[["Give a word for the healthy middle path between extremes.","moderation / balanced"],["What is 'resilience'? (one sentence)","the ability to recover quickly from difficulties"],["Use 'nutritious' in a short sentence.","(accept any correct sentence, e.g. 'Fruit is a nutritious snack.')"],["Which phrase links a cause to a result?","can lead to"],["Name one habit that builds wellbeing.","sleep / exercise / mindfulness / balanced diet"]]]
 ],
 diffhw:{
  challenge:[["The myth-buster","Find a 'health' advert claim and explain in 3 sentences why it may be misleading."],["Cause-effect chain","Write a 3-step chain using 'can lead to' twice (e.g. poor sleep → … → …)."],["Two-minute talk","Prepare a 2-minute talk: 'The one habit that changed how I feel.' Use 5 unit words."]],
  supportFrames:["A healthy habit is ____.","It is good because ____.","You should ____.","This can lead to ____.","In the long run, ____."],
  wordBank:"nutritious · energetic · to hydrate · to strengthen · refreshed · resilience · in moderation · you should",
  homework:[["Health habits","List 3 healthy habits and 1 to improve."],["Vocabulary","Learn the unit words; write 5 in sentences of your own."],["Persuade","Write a 120–150 word message persuading a friend to build one habit."],["Fuel diary","Track a day's food/drink; mark nutritious vs processed."],["The debate","Prepare your view: 'Is 8 hours of sleep really necessary for students?'"]]
 },
 quiz:{
  clozeBank:["balanced","nutritious","hydrate","alertness","strengthen","consistent","refreshed","burnout","resilience","mindful","moderation","steady"],
  clozeText:["Looking after your health means caring for both body and mind. A ",1," diet — with plenty of ",2,
   " food and enough water to ",3," the body — gives you energy and ",4,". Regular movement helps to ",5,
   " your muscles, while ",6," sleep leaves you ",7," and ready to focus. The mind matters too: too much stress can lead to ",8,
   ", so building ",9," and staying ",10," help you cope. The secret is ",11," — not extremes, but a ",12," approach you can keep up."],
  match:[["energetic",VOCAB.find(v=>v[0]==="energetic")[1]],["dehydration",VOCAB.find(v=>v[0]==="dehydration")[1]],["anxiety",VOCAB.find(v=>v[0]==="anxiety")[1]],["recovery",VOCAB.find(v=>v[0]==="recovery")[1]],["drowsy",VOCAB.find(v=>v[0]==="drowsy")[1]],["processed",VOCAB.find(v=>v[0]==="processed")[1]],["discouraged",VOCAB.find(v=>v[0]==="discouraged")[1]],["misleading",VOCAB.find(v=>v[0]==="misleading")[1]]],
  matchShuf:[3,0,5,1,6,2,7,4],
  productive:["resilience","moderation","nourish","sceptical","overwhelm"]
 },
 rubricTitle:"Persuade & Advise", rubricTask:"Persuasive message / Advice text",
 rubric:[
  ["Content & Ideas","Fully answers the task; convincing reasons and helpful, realistic ideas.","Answers the task; some reasons and ideas.","Basic answer; few reasons.","Incomplete; task not addressed."],
  ["Vocabulary","Wide, precise; 3+ unit words used naturally.","Good; 2 unit words correct.","Simple; 1 unit word or some errors.","Very limited topic language."],
  ["Grammar & Accuracy","Varied sentences incl. modals & cause-effect; very few errors.","Mostly accurate; errors don't block meaning.","Frequent errors; sometimes unclear.","Errors make it hard to follow."],
  ["Organisation","Clear structure; smooth linking; strong opening & close.","Clear structure; some linking.","Some structure; basic linking.","Little structure."],
  ["Purpose & Tone","Genuinely persuasive/helpful; warm, encouraging tone.","Mostly persuasive; appropriate tone.","Some persuasion; tone uneven.","Not persuasive; tone unclear."]],
 rubricSelfCheck:["give a clear, kind reason to change.","use a cause-effect phrase ('can lead to').","suggest one small, realistic first step.","use 2+ unit words correctly.","sound encouraging (not bossy) and check my spelling."],
 project:{
  title:"A Wellbeing Campaign", subtitle:"a campaign to help students live healthier.",
  brief:"Design a short wellbeing campaign (poster or 3–5 slides) that helps students your age build ONE healthy habit — movement, food, sleep or mind. Present it to the class.",
  research:[["The habit","Which healthy habit will your campaign promote?"],["Why it matters","What does it improve, and what can neglecting it lead to?"],["The barrier","Why do students find it hard? (time, money, motivation)"],["The tips","2–3 realistic, cheap tips to make it easier."],["Your slogan","A short, memorable call to action."]],
  plan:"Plan your campaign: (1) Title + slogan  (2) The habit & why it matters  (3) What it can lead to  (4) 2–3 easy tips  (5) Call to action. Use short, clear sentences and a bold, positive tone.",
  langChecklist:["at least 6 unit words, used correctly","a cause-effect phrase ('can lead to')","advice language ('you should', 'you could')","a clear, memorable call to action"],
  rubric:[["Content & message","Clear, accurate health advice that students can act on."],["Language & vocabulary","6+ unit words correct; cause-effect and advice language."],["Organisation & clarity","Logical order; strong title and slogan."],["Creativity & design","Engaging, positive design; memorable call to action."],["Presentation & delivery","Clear voice; keeps to time; answers a question."]]
 }
};
