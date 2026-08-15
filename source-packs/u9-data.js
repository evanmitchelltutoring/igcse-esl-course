// Unit 9 "Learning & Growth" — teacher-pack data for pack-engine.js
const VOCAB=[
 ["acquire","to gain a skill, habit or knowledge, usually through effort over time"],["autonomous","able to act and make decisions independently"],
 ["motivation","the reason or desire that makes someone want to do something"],["proficiency","a high level of skill or competence in something"],
 ["resourceful","good at finding clever ways to solve problems with whatever is available"],["self-directed","controlled and organised by the learner rather than by a teacher"],
 ["tutorial","a lesson or set of instructions, often online, that teaches one skill step by step"],["analyse","to examine something in detail to understand or explain it"],
 ["constructive","helpful and intended to improve something, especially of feedback"],["determination","firmness of purpose; deciding to do something and not giving up"],
 ["feedback","information about how well you are doing, given so you can improve"],["overcome","to successfully deal with or control a problem or difficulty"],
 ["perseverance","continued effort to do something despite difficulty or delay"],["reflection","serious, careful thought about what you did and could do better"],
 ["self-discipline","the ability to make yourself do what you should, even when you don't feel like it"],["collaborate","to work together with others to achieve something"],
 ["encouragement","words or actions that give someone confidence or hope to continue"],["engagement","the state of being involved and interested in an activity"],
 ["expertise","expert skill or knowledge in a particular area"],["guidance","advice and help given, especially by someone more experienced"],
 ["inspire","to make someone feel they want to do something; to fill with enthusiasm"],["mentor","an experienced person who advises and helps a less experienced one over time"],
 ["network","a group of people who keep in contact to share information and help each other"],["peer","a person of the same age, level or status as you"],
 ["adaptable","able to change easily to fit new conditions"],["broaden","to make or become wider, or to include more things"],
 ["competent","having enough skill or knowledge to do something well"],["cope","to deal successfully with a difficult situation"],
 ["evolve","to develop gradually over time"],["lifelong","continuing for or lasting your whole life"],
 ["mindset","a set of attitudes or way of thinking about something"],["obsolete","no longer used or useful because something newer has replaced it"],
 ["potential","qualities or abilities that may be developed and lead to future success"],["relevant","closely connected with and important to the current situation"],
 ["upskill","to learn new or better skills, especially for your work"],
];
module.exports={
 no:9, slug:"lifelong-learning", title:"Learning & Growth",
 byline:"Why you'll never finish learning",
 outDir:__dirname+"/unit09-learning", vocab:VOCAB,
 lessonDeck:{
  doNow:"What's something you taught yourself, without a teacher? Talk with a partner about how you did it.",
  objectives:[["Read for ideas & attitude","find advice and opinions about learning."],["Use precise learning vocabulary","self-directed, perseverance, mentor, adaptable."],["Use gerunds/infinitives & present perfect continuous","talk about how and how long you learn."],["Write to advise & argue","an informal email and an argument essay."]],
  bigIdea:{header:"Why will you never finish learning?",big:"In a world that never stops changing, the most important skill is learning how to learn.",body:"This unit explores teaching yourself, learning from mistakes, the people who help us grow, and why — in a changing world — learning is lifelong."},
  settings:[["Teaching myself","self-directed, resourceful learning."],["Learning from mistakes","feedback, reflection and perseverance."],["The people who helped","mentors, peers and communities."],["Never finished","staying adaptable in a changing world."]],
  keyVocab:["self-directed","perseverance","mentor","adaptable","lifelong"],
  framesKicker:"SENTENCE FRAMES — LEARNING",
  frames:["I taught myself ____ by ____.","When I got it wrong, I ____.","A person who helped me was ____.","To stay relevant, I need to ____."],
  plenary:{h:"Learning to learn",share:"Share one thing you'll do differently as a learner from now on.",exit:"Write: 'The best way for me to learn is ____.'"}
 },
 writingDeck:{
  title:"Writing to Advise & Argue", byline:"The email & the argument",
  doNow:"A friend keeps giving up on a new skill. In one sentence, what advice would you give?",
  shapeHeader:"The informal email — 4 parts",
  shape:[["Greeting","warm and personal."],["Why you're writing","the reason."],["Your advice","in a friendly voice."],["Sign-off","warm close + name."]],
  model:{header:"A Grade-A email of advice",task:"A friend keeps giving up on learning guitar. Email them (120–150 words).",
   model:"Hi Sam, I heard you're thinking of quitting guitar — please don't! I know exactly how you feel; when I started, I was terrible for months and nearly gave up too. Honestly, the thing that helped me most was making my practice self-directed: ten minutes a day on ONE small thing, not an hour of frustration. Mistakes aren't failure — they're feedback. Every wrong note is telling you what to fix next. What you need isn't talent, it's a bit of perseverance and a plan. Why not find a good tutorial online and just learn one song you actually love? Send me a video when you can play it — I promise you're closer than you think. You've got this. Speak soon, Alex"},
  starters:["Support: 'I know how you feel — ____. The thing that helped me was ____.'","Core: 'Honestly, don't give up: ____. Why not ____?'","Stretch: reassure them about mistakes before your final push."],
  criteria:[["Tone","warm and encouraging."],["Advice","real and useful."],["Format","greeting + sign-off."],["Vocabulary","2+ unit words."]],
  plenary:{h:"Would it help?",share:"Swap emails. Would your partner's advice actually help you keep going?",exit:"Give your partner two stars (liked) and one wish (improve)."}
 },
 retrieval:[
  ["Round 1 · Teaching Myself",[["Organised by the learner, not a teacher, is ___.","self-directed"],["The desire that makes you want to do something is ___.","motivation"],["Good at finding clever solutions is ___.","resourceful"],["What does 'acquire' mean?","to gain a skill or knowledge through effort over time"],["A step-by-step online lesson is a ___.","tutorial"]]],
  ["Round 2 · Learning From Mistakes",[["Continued effort despite difficulty is ___.","perseverance"],["Information given so you can improve is ___.","feedback"],["Careful thought about what you could do better is ___.","reflection"],["What does 'constructive' mean?","helpful and intended to improve something"],["To successfully deal with a difficulty is to ___.","overcome"]]],
  ["Round 3 · The People Who Helped",[["An experienced person who advises you over time is a ___.","mentor"],["Advice and help from someone experienced is ___.","guidance"],["To work together with others is to ___.","collaborate"],["What does 'peer' mean?","a person of the same age or level as you"],["Confidence given to you by others is ___.","encouragement"]]],
  ["Round 4 · Never Finished",[["Able to change easily to fit new conditions is ___.","adaptable"],["No longer useful because something newer replaced it is ___.","obsolete"],["Lasting your whole life is ___.","lifelong"],["What does 'upskill' mean?","to learn new or better skills, especially for work"],["To develop gradually over time is to ___.","evolve"]]],
  ["Round 5 · Mixed recall (exam warm-up)",[["Give a word for firmness of purpose, not giving up.","determination"],["What is 'lifelong learning'? (one sentence)","learning that continues throughout your whole life"],["Use 'mentor' in a short sentence.","(accept any correct sentence, e.g. 'My mentor helped me improve.')"],["After 'enjoy', do you use -ing or 'to'?","the -ing form (gerund)"],["Name one thing that helps you learn from a mistake.","feedback / reflection / perseverance / a mentor"]]]
 ],
 diffhw:{
  challenge:[["Two views on failure","Argue that mistakes are the BEST teacher, then that they waste time — same topic, both sides."],["Learning log","For 3 days, note what you learned and how; write 3 sentences on a pattern you notice."],["Two-minute talk","Prepare 2 minutes: 'The most important skill is learning how to learn.' Use 5 unit words."]],
  supportFrames:["I am learning ____.","I learn best by ____.","When I make a mistake, I ____.","Someone who helps me is ____.","I will keep going because ____."],
  wordBank:"self-directed · motivation · feedback · perseverance · mentor · guidance · adaptable · lifelong",
  homework:[["How I learn","Reflect: how do you learn best, and why?"],["Vocabulary","Learn the unit words; write 5 in sentences of your own."],["The email","Write a 120–150 word email advising a friend who keeps giving up."],["A useful mistake","Describe a mistake you learned from, in 5 sentences."],["The debate","Prepare your view: 'Are exams the best way to measure learning?'"]]
 },
 quiz:{
  clozeBank:["relevant","obsolete","lifelong","upskill","self-directed","tutorials","motivation","feedback","reflection","perseverance","mentor","guidance"],
  clozeText:["The world is changing so fast that no skill stays ",1," forever; some become ",2,
   " within a decade. To keep up, we must all become ",3," learners, willing to ",4," throughout our lives. Much of this learning is now ",5,
   ": we teach ourselves with online ",6,", driven by our own ",7,". But learning alone is hard. When we make mistakes, honest ",8,
   " and quiet ",9," help us improve, and ",10," — the refusal to give up — carries us through. We also learn from others: a good ",11,
   " can offer the ",12," that saves us years of trial and error."],
  match:[["adaptable",VOCAB.find(v=>v[0]==="adaptable")[1]],["competent",VOCAB.find(v=>v[0]==="competent")[1]],["acquire",VOCAB.find(v=>v[0]==="acquire")[1]],["resourceful",VOCAB.find(v=>v[0]==="resourceful")[1]],["collaborate",VOCAB.find(v=>v[0]==="collaborate")[1]],["encouragement",VOCAB.find(v=>v[0]==="encouragement")[1]],["constructive",VOCAB.find(v=>v[0]==="constructive")[1]],["potential",VOCAB.find(v=>v[0]==="potential")[1]]],
  matchShuf:[3,0,5,1,6,2,7,4],
  productive:["perseverance","adaptable","mentor","self-discipline","obsolete"]
 },
 rubricTitle:"Email & Argument", rubricTask:"Informal email / Argumentative essay",
 rubric:[
  ["Content & Ideas","Fully answers the task; genuine advice or a clear argument.","Answers the task; some advice or argument.","Basic; thin ideas.","Incomplete; task not addressed."],
  ["Vocabulary","Wide, precise; 3+ unit words used naturally.","Good; 2 unit words correct.","Simple; 1 unit word or some errors.","Very limited topic language."],
  ["Grammar & Accuracy","Varied sentences incl. gerunds/infinitives & perfect forms; very few errors.","Mostly accurate; errors don't block meaning.","Frequent errors; sometimes unclear.","Errors make it hard to follow."],
  ["Organisation","Clear structure (email format / P-R-R-E); good linking.","Clear structure; some linking.","Some structure; basic linking.","Little structure."],
  ["Purpose & Tone","Warm, useful email / persuasive essay; right tone throughout.","Mostly appropriate tone.","Some sense of purpose; tone uneven.","Purpose/tone unclear."]],
 rubricSelfCheck:["use the right format (email greeting/sign-off, or P-R-R-E).","give genuine advice or a clear argument.","sound warm (email) or fair to both sides (essay).","use 2+ unit words correctly.","check my grammar, especially gerunds and infinitives."],
 project:{
  title:"My Learning Journey", subtitle:"teach yourself a small new skill, then reflect on how you did it.",
  brief:"Choose a small skill you can teach yourself in a week (a chord, a recipe, a magic trick, a phrase in a new language). Learn it using online tutorials, then create a short piece (a page or 3–5 slides) about HOW you learned it and what it taught you about learning. Present it to the class.",
  research:[["The skill","What did you choose, and why?"],["Your method","What tutorials or resources did you use? How self-directed were you?"],["The struggle","What went wrong, and how did you use feedback or reflection?"],["The people","Did anyone — a mentor, a peer — help?"],["What you learned about learning","One lesson you'll carry to your next challenge."]],
  plan:"Plan your piece: (1) Title + the skill  (2) How you taught yourself  (3) The struggle and how you overcame it  (4) Who helped  (5) What it taught you about learning. Be honest about the mistakes — they're the best part.",
  langChecklist:["at least 6 unit words, used correctly","present perfect continuous ('I have been learning…')","a gerund or infinitive ('I enjoy practising', 'I decided to try')","one honest reflection on a mistake"],
  rubric:[["Content & honesty","A real, reflective account of teaching yourself a skill."],["Language & vocabulary","6+ unit words correct; perfect forms and gerunds/infinitives."],["Organisation & clarity","Logical build from method to reflection."],["Insight","A genuine lesson about how you learn."],["Presentation & delivery","Clear, sincere voice; keeps to time; answers a question."]]
 }
};
