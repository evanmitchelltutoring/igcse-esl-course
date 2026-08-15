// Unit 12 "Adventure & Survival" — teacher-pack data for pack-engine.js (final flagship unit)
const VOCAB=[
 ["brink","the very edge of something, or the point just before disaster"],["capsize","(of a boat) to turn over in the water"],
 ["collapse","to fall down suddenly; to fail completely"],["jagged","having a rough, sharp, uneven edge"],
 ["peril","serious and immediate danger"],["perilous","full of serious danger"],
 ["plunge","to fall or drop suddenly and steeply"],["treacherous","dangerous, especially when it appears safe"],
 ["ascent","the act of climbing or going up"],["descent","the act of going down"],
 ["expedition","an organised journey made for a particular purpose, often somewhere difficult"],["frontier","the far edge of explored, settled or known land"],
 ["remote","far away from people, towns or help"],["summit","the highest point of a mountain"],
 ["terrain","an area of land, especially its physical features"],["composure","calmness and self-control, especially in a crisis"],
 ["courage","the ability to face danger, pain or fear"],["despair","the complete loss of hope"],
 ["morale","the confidence, spirit and hope of a person or group"],["panic","a sudden, uncontrollable feeling of fear"],
 ["willpower","the strength of mind to do something difficult or resist something"],["abandon","to leave someone or something behind, especially in danger"],
 ["beacon","a light or fire used as a warning or a signal"],["current","a continuous flow of water or air moving in one direction"],
 ["drift","to be carried along slowly by water or air, with no control"],["evacuate","to move people away from a dangerous place"],
 ["flare","a device that produces a bright light, fired into the sky as a signal"],["rescue","to save someone from danger"],
 ["signal","to send a message or sign, especially a call for help"],["survivor","a person who lives through a disaster or great danger"],
 ["dehydrated","having lost too much water from the body"],["endure","to suffer something difficult patiently"],
 ["exhaustion","the state of being extremely tired"],["frostbite","injury to parts of the body caused by extreme cold"],
 ["persevere","to keep trying despite difficulty or failure"],["ration","to limit how much of something you use so it lasts"],
 ["stranded","left somewhere with no way to leave"],
];
module.exports={
 no:12, slug:"adventure-and-survival", title:"Adventure & Survival",
 byline:"Facing danger — and finding a way through",
 outDir:__dirname+"/unit12-adventure", vocab:VOCAB,
 lessonDeck:{
  doNow:"You're stranded somewhere dangerous with ONE item of your choice. What do you take, and why?",
  objectives:[["Read for tension & detail","find how writers build suspense and danger."],["Use precise survival vocabulary","peril, terrain, endure, rescue."],["Use conditionals & reported speech","talk about danger, choices and what people said."],["Write to recount & report","a dramatic email and a safety report."]],
  bigIdea:{header:"What does it take to survive?",big:"When everything goes wrong, survival is less about strength than about a mind that refuses to give up.",body:"This unit follows explorers, survivors and rescuers across the world's most dangerous places — and asks what really keeps a person alive against the odds."},
  settings:[["The long walk out","perilous terrain and endurance."],["A cave rescue","when others come to save you."],["An explorer's account","the frontier and the summit."],["A survivor's recount","the mind that won't quit."]],
  keyVocab:["peril","terrain","endure","rescue","willpower"],
  framesKicker:"SENTENCE FRAMES — ADVENTURE",
  frames:["Everything was fine until ____.","If we ____, we will ____.","For one horrible moment, I thought ____.","In the end, what saved us was ____."],
  plenary:{h:"The one thing",share:"What is the ONE quality you'd most need to survive — and why?",exit:"Write: 'To survive against the odds, you most need ____.'"}
 },
 writingDeck:{
  title:"Writing to Recount & Report", byline:"The email & the report",
  doNow:"Something went badly wrong on an adventure. In one sentence, hook a friend into the story.",
  shapeHeader:"A dramatic recount — 4 parts",
  shape:[["Greeting + hook","'I've just had the scariest day…'"],["The build-up","danger growing."],["The climax","the moment of greatest peril."],["Resolution + sign-off","safety, and what you felt."]],
  model:{header:"A Grade-A survival recount",task:"Email a friend recounting a close call (120–150 words).",
   model:"Hi Jai, I've just had the most terrifying day of my life and I need to tell someone. We'd set out to climb the ridge at dawn — the guide said the weather would hold. It didn't. Halfway up, the mist rolled in and the trail turned treacherous; the rock was jagged and slick, and one slip would have meant a long plunge into the valley. Then Aisha lost her footing. For one horrible moment I thought we'd lost her — but she'd caught a root, and somehow, between us, we hauled her back up. We roped together after that and just endured, inch by inch, until the mist finally lifted. I have never been so frightened, or so proud of anyone. I honestly think it was sheer willpower that got us down. I'll call you tonight. Sam"},
  starters:["Support: 'Everything was fine until ____. Then ____.'","Core: 'For one horrible moment, I thought ____. But ____.'","Stretch: hold the climax back, then release it in a short, sharp sentence."],
  criteria:[["Tension","builds to a clear climax."],["Order","clear sequence of events."],["Format","greeting + sign-off."],["Vocabulary","2+ unit words."]],
  plenary:{h:"Did your heart race?",share:"Swap emails. Did your partner's story grip you at the climax?",exit:"Give your partner two stars (liked) and one wish (improve)."}
 },
 retrieval:[
  ["Round 1 · Danger & Terrain",[["An area of land and its physical features is the ___.","terrain"],["Far away from people or help is ___.","remote"],["Full of serious danger is ___.","perilous"],["What does 'treacherous' mean?","dangerous, especially when it appears safe"],["To fall suddenly and steeply is to ___.","plunge"]]],
  ["Round 2 · Rescue & Escape",[["To save someone from danger is to ___.","rescue"],["To move people away from danger is to ___.","evacuate"],["A bright light fired into the sky as a signal is a ___.","flare"],["What does 'stranded' mean?","left somewhere with no way to leave"],["To be carried along with no control is to ___.","drift"]]],
  ["Round 3 · The Explorer",[["The highest point of a mountain is the ___.","summit"],["An organised journey for a purpose is an ___.","expedition"],["The act of climbing up is the ___.","ascent"],["What does 'frontier' mean?","the far edge of explored or known land"],["The act of going down is the ___.","descent"]]],
  ["Round 4 · Mind & Endurance",[["To suffer something difficult patiently is to ___.","endure"],["To keep trying despite failure is to ___.","persevere"],["Calmness and self-control in a crisis is ___.","composure"],["What does 'morale' mean?","the confidence, spirit and hope of a person or group"],["The strength of mind to do something hard is ___.","willpower"]]],
  ["Round 5 · Mixed recall (exam warm-up)",[["Give a word for serious and immediate danger.","peril"],["What is a 'survivor'? (one sentence)","a person who lives through a disaster or great danger"],["Use 'endure' in a short sentence.","(accept any correct sentence, e.g. 'They had to endure freezing nights.')"],["'Unless' means the same as ___?","if… not"],["Name one thing that helps a stranded person survive.","willpower / rationing supplies / signalling for help / staying calm"]]]
 ],
 diffhw:{
  challenge:[["The choice","Write a survival scenario with a hard choice, then argue what you'd do using a conditional ('If I…, I would…')."],["Reported rescue","Recount a rescue, reporting what 3 people said using reported speech."],["Two-minute talk","Prepare 2 minutes: 'The quality that matters most in survival.' Use 5 unit words."]],
  supportFrames:["The danger was ____.","At first ____.","Then ____.","In the end ____.","What saved them was ____."],
  wordBank:"peril · terrain · treacherous · to endure · to persevere · willpower · to rescue · stranded",
  homework:[["Would you survive?","Imagine you're stranded somewhere remote; how would you stay alive?"],["Vocabulary","Learn the unit words; write 5 in sentences of your own."],["The email","Write a 120–150 word dramatic email recounting a close call."],["Real survivors","Find one real survival story; note how the person stayed alive."],["The debate","Prepare your view: 'Should people take extreme risks for adventure?'"]]
 },
 quiz:{
  clozeBank:["terrain","treacherous","jagged","plunge","persevere","composure","panic","ration","exhaustion","signal","flare","rescue"],
  clozeText:["Adventure means facing danger. An explorer on remote ",1," can be caught by ",2,
   " weather in minutes; a single wrong step on ",3," rock can end in a fatal ",4,". When disaster strikes, survival depends less on strength than on the mind. Those who ",5,
   " — who keep their ",6," instead of giving in to ",7," — are the ones who live. They ",8,
   " their food and water, endure cold and ",9,", and never stop trying to ",10," for help. And when at last a ",11,
   " is spotted or a ",12," team arrives, hope becomes reality."],
  match:[["peril",VOCAB.find(v=>v[0]==="peril")[1]],["remote",VOCAB.find(v=>v[0]==="remote")[1]],["summit",VOCAB.find(v=>v[0]==="summit")[1]],["endure",VOCAB.find(v=>v[0]==="endure")[1]],["morale",VOCAB.find(v=>v[0]==="morale")[1]],["abandon",VOCAB.find(v=>v[0]==="abandon")[1]],["evacuate",VOCAB.find(v=>v[0]==="evacuate")[1]],["willpower",VOCAB.find(v=>v[0]==="willpower")[1]]],
  matchShuf:[3,0,5,1,6,2,7,4],
  productive:["perilous","endure","composure","stranded","willpower"]
 },
 rubricTitle:"Recount & Report", rubricTask:"Dramatic email recount / Safety report",
 rubric:[
  ["Content & Ideas","Fully answers the task; gripping recount or clear report.","Answers the task; some tension or detail.","Basic; thin ideas.","Incomplete; task not addressed."],
  ["Vocabulary","Wide, precise; 3+ unit words used naturally.","Good; 2 unit words correct.","Simple; 1 unit word or some errors.","Very limited topic language."],
  ["Grammar & Accuracy","Varied sentences incl. conditionals & narrative tenses; very few errors.","Mostly accurate; errors don't block meaning.","Frequent errors; sometimes unclear.","Errors make it hard to follow."],
  ["Organisation","Clear sequence (email) / sections (report); good linking.","Clear structure; some linking.","Some structure; basic linking.","Little structure."],
  ["Purpose & Register","Dramatic recount / objective report; right tone throughout.","Mostly appropriate tone.","Some sense of purpose; tone uneven.","Purpose/tone unclear."]],
 rubricSelfCheck:["use the right format (email greeting/sign-off, or report headings).","build tension (email) or stay objective (report).","tell events in a clear order.","use 2+ unit words correctly.","check my narrative tenses and conditionals."],
 project:{
  title:"Against the Odds", subtitle:"tell a gripping survival story and its message.",
  brief:"Choose a survival scenario — a real story you research, or one you invent (lost at sea, stranded on a mountain, caught in a storm). Create a short piece (a page or 3–5 slides) that tells the story with real tension AND shows what it took to survive. Present it to the class.",
  research:[["The scenario","Where are they, and what goes wrong?"],["The danger","2–3 specific perils they face."],["The turning point","The moment survival hangs in the balance."],["How they survive","The choices and qualities that save them."],["The message","What your story says about surviving against the odds."]],
  plan:"Plan your story: (1) Title + the scenario  (2) The danger  (3) The turning point  (4) How they survive  (5) The message. Build tension towards a clear climax, then a resolution.",
  langChecklist:["at least 6 unit words, used correctly","narrative tenses (past simple and past perfect)","one conditional sentence ('If they…, they would…')","a clear climax and a resolution"],
  rubric:[["Content & tension","A gripping story with real danger and a clear turning point."],["Language & vocabulary","6+ unit words correct; narrative tenses and a conditional."],["Organisation & clarity","Logical build to a climax and resolution."],["Message & impact","A clear message about surviving against the odds."],["Presentation & delivery","Engaging voice; keeps to time; answers a question."]]
 }
};
