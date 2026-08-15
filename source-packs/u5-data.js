// Unit 5 "Art & AI" — teacher-pack data for pack-engine.js
const VOCAB=[
 ["algorithm","a set of step-by-step rules a computer follows to solve a problem"],["artificial","made by people or machines, not occurring naturally"],
 ["automated","done by machines with little or no human help"],["dataset","a large collection of information used to train a model"],
 ["generate","to produce or create something"],["mimic","to copy the way something looks or behaves"],
 ["novelty","the quality of being new; a new thing whose appeal may not last"],["output","the thing a process produces"],
 ["replicate","to copy something exactly"],["seemingly","based on how something appears, which may not be the truth"],
 ["authentic","real and genuine, not fake or copied"],["craft","skill in making things by hand; making with care"],
 ["emotion","a strong feeling such as joy, fear or sorrow"],["evoke","to bring a feeling or memory into someone's mind"],
 ["express","to show a thought or feeling through words, art or action"],["genuine","real and sincere; truly what it claims to be"],
 ["intention","the aim or purpose behind doing something"],["intuition","knowing or sensing something without conscious reasoning"],
 ["meaning","the idea or significance that something carries"],["soulless","lacking warmth, feeling or character"],
 ["attribution","naming who created or is responsible for a work"],["compensation","money paid to make up for loss or harm"],
 ["consent","permission for something to happen"],["derivative","copied from or based on something else; not original"],
 ["distinctive","clearly different in a way that is easy to recognise"],["exploit","to use something fully; or to use unfairly for one's own gain"],
 ["imitate","to copy the way someone does something"],["infringe","to break a rule or law, especially about rights"],
 ["intellectual property","legal ownership of something you created with your mind"],["originality","the quality of being new and not copied"],
 ["scrape","to collect data automatically from across the internet"],["consensus","general agreement among a group"],
 ["controversy","strong public disagreement about something"],["credibility","the quality of being believable and trusted"],
 ["disqualify","to remove someone from a competition for breaking a rule"],["judgement","the ability to form a careful opinion or decision"],
 ["legitimate","reasonable and acceptable; lawful"],["merit","the quality of being good and deserving praise or reward"],
 ["recognition","public acknowledgement that something is good or important"],["transparency","being open and honest, so others can see how things are done"],
 ["undermine","to gradually weaken something"],["value","how much something is worth, in money or importance"],
];
module.exports={
 no:5, slug:"art-and-expression", title:"Art & AI",
 byline:"Can a machine make art?",
 outDir:__dirname+"/unit05-art-ai", vocab:VOCAB,
 lessonDeck:{
  doNow:"One image is by a human, one by AI. Can you tell which is which — and does it matter?",
  objectives:[["Read for argument","find claims, evidence and viewpoints in a text."],["Use precise AI & art vocabulary","algorithm, authentic, derivative, credibility."],["Speculate & concede","use modals (must/might) and concession linkers."],["Write to argue","a persuasive speech and a balanced argument essay."]],
  bigIdea:{header:"Can a machine make art?",big:"AI can copy any style in seconds — but can it create meaning, or only mimic it?",body:"This unit weighs a real debate: is AI-generated art genuine creativity, clever imitation, or theft? You'll read four viewpoints, learn the language of argument, and write your own verdict."},
  settings:[["Made by a machine","how AI actually generates images."],["Whose hand, whose eye?","can AI art be authentic or carry meaning?"],["The style thief","copying artists — fair use or theft?"],["Real art, real prize?","when an AI image wins, who deserves the credit?"]],
  keyVocab:["algorithm","authentic","derivative","controversy","credibility"],
  framesKicker:"ARGUMENT FRAMES",
  frames:["There is no denying that ____, but ____.","It could be argued that ____.","On the surface ____; however, ____.","The heart of the matter is ____."],
  plenary:{h:"Your verdict",share:"In one sentence: is AI art 'real' art? Take a side.",exit:"Write: 'What makes art real is ____.'"}
 },
 writingDeck:{
  title:"Writing to Argue", byline:"The speech & the argument essay",
  doNow:"Should AI art be allowed to win human art prizes? Yes or no — and your strongest reason?",
  shapeHeader:"The argument essay — 4 parts",
  shape:[["Raise the question","open the issue clearly."],["Concede one side","'There is no denying that…'"],["Challenge it","'However… this calls into question…'"],["Your verdict","judge, with reasons."]],
  model:{header:"A Grade-A argument (opening + turn)",task:"'AI will destroy human creativity.' To what extent do you agree? (200 words)",
   model:"The rise of AI image generators has stunned the world, and it raises the question of whether human creativity has a future at all. There is no denying that these tools are astonishing: trained on vast datasets, an algorithm can mimic almost any style in seconds, and the results are, on the surface, impressive. However, this appearance is misleading. A machine can replicate the look of a painting, but it has no intention, no emotion, and no lived experience to express — the very things that give art its meaning. It could be argued that AI simply gives more people access to creativity, and there is some truth in that. Yet the heart of the matter is this: a tool that copies is not the same as a mind that creates. AI may change how art is made, but it cannot feel why it matters — and so, far from destroying human creativity, it may remind us exactly what makes it irreplaceable."},
  starters:["Support: 'There is no denying that ____. However, ____.'","Core: 'This raises the question of whether ____. On the surface ____; however, ____.'","Stretch: concede the strongest opposing point, then dismantle it before your verdict."],
  criteria:[["Both sides","present for AND against fairly."],["Concede","admit the other side's strength."],["Connectives","use discursive linkers."],["Verdict","reach a clear judgement."]],
  plenary:{h:"Whose was fairest?",share:"Swap essays. Did your partner give BOTH sides fairly before judging?",exit:"Give your partner two stars (liked) and one wish (improve)."}
 },
 retrieval:[
  ["Round 1 · Made by a Machine",[["A set of step-by-step rules a computer follows is an ___.","algorithm"],["To produce or create something is to ___.","generate"],["To copy how something looks or behaves is to ___.","mimic"],["What does 'dataset' mean?","a large collection of information used to train a model"],["Copied exactly is to ___.","replicate"]]],
  ["Round 2 · Whose Hand, Whose Eye?",[["Real and genuine, not fake, is ___.","authentic"],["To bring a feeling or memory to mind is to ___.","evoke"],["What does 'intuition' mean?","sensing something without conscious reasoning"],["The aim or purpose behind doing something is ___.","intention"],["Lacking warmth, feeling or character is ___.","soulless"]]],
  ["Round 3 · The Style Thief",[["Permission for something to happen is ___.","consent"],["Copied and not original is ___.","derivative"],["What is 'intellectual property'?","legal ownership of something you created with your mind"],["Money paid for loss or harm is ___.","compensation"],["To break a rule or law about rights is to ___.","infringe"]]],
  ["Round 4 · Real Art, Real Prize?",[["Strong public disagreement is ___.","controversy"],["To gradually weaken something is to ___.","undermine"],["What does 'legitimate' mean?","reasonable, acceptable and lawful"],["Being believable and trusted is ___.","credibility"],["The quality of deserving praise is ___.","merit"]]],
  ["Round 5 · Mixed recall (exam warm-up)",[["Give a phrase that concedes an opposing point.","There is no denying that… / Admittedly…"],["What does 'derivative' mean? (one sentence)","copied from or based on something else; not original"],["Use 'controversy' in a short sentence.","(accept any correct sentence, e.g. 'The prize caused huge controversy.')"],["Which modal shows a fairly sure guess?","must"],["Name one argument AGAINST AI art being 'real' art.","no emotion / no intention / derivative / uses others' work"]]]
 ],
 diffhw:{
  challenge:[["Steelman the other side","Write the STRONGEST version of the view you disagree with, then answer it in 3 sentences."],["Connective swap","Rewrite a flat paragraph adding 'There is no denying that…', 'However…' and 'The heart of the matter is…'."],["Two-minute debate","Prepare 2 minutes: 'AI art should/should not win prizes.' Use 5 unit words and one concession."]],
  supportFrames:["AI art is made by ____.","Some people think it is ____.","Others argue that ____.","I believe ____ because ____.","There is no denying that ____, but ____."],
  wordBank:"algorithm · to generate · authentic · derivative · emotion · controversy · to undermine · legitimate",
  homework:[["First thoughts","Is AI art 'real' art? Write your opening view with one reason."],["Vocabulary","Learn the unit words; write 5 in sentences of your own."],["The speech","Write a 150–200 word speech for or against AI art in competitions."],["Research","Find one real story about AI and art; note the two sides."],["The debate","Prepare your view: 'Should artists be paid when AI trains on their work?'"]]
 },
 quiz:{
  clozeBank:["generate","dataset","algorithm","mimic","derivative","craft","emotion","consent","compensation","controversy","credibility","value"],
  clozeText:["AI can now ",1," images in seconds. Trained on a huge ",2," of pictures, an ",3," learns to ",4,
   " almost any style. On the surface the results impress — but critics call them ",5,
   ", copied rather than created, lacking the ",6," and ",7," of human hands. A bigger worry is fairness: AI often uses artists' work without ",8,
   ", which many say should require ",9,". When an AI image won a real prize, the ",10," was instant, and some judges lost ",11,
   ". The heart of the matter is a hard question of ",12,": what makes art 'real'?"],
  match:[["authentic",VOCAB.find(v=>v[0]==="authentic")[1]],["replicate",VOCAB.find(v=>v[0]==="replicate")[1]],["originality",VOCAB.find(v=>v[0]==="originality")[1]],["undermine",VOCAB.find(v=>v[0]==="undermine")[1]],["intuition",VOCAB.find(v=>v[0]==="intuition")[1]],["transparency",VOCAB.find(v=>v[0]==="transparency")[1]],["exploit",VOCAB.find(v=>v[0]==="exploit")[1]],["legitimate",VOCAB.find(v=>v[0]==="legitimate")[1]]],
  matchShuf:[3,0,5,1,6,2,7,4],
  productive:["merit","controversy","authentic","exploit","consensus"]
 },
 rubricTitle:"Argue & Persuade", rubricTask:"Argument essay / Persuasive speech",
 rubric:[
  ["Content & Argument","Both sides weighed fairly; a clear, reasoned verdict.","Answers the task; some argument on both sides.","Basic; mostly one-sided.","Incomplete; no real argument."],
  ["Vocabulary","Wide, precise; 3+ unit words used naturally.","Good; 2 unit words correct.","Simple; 1 unit word or some errors.","Very limited topic language."],
  ["Grammar & Accuracy","Varied sentences incl. modals & concession; very few errors.","Mostly accurate; errors don't block meaning.","Frequent errors; sometimes unclear.","Errors make it hard to follow."],
  ["Organisation & Connectives","Clear structure; skilful discursive linkers.","Clear structure; some linkers.","Some structure; basic linking.","Little structure."],
  ["Persuasion & Register","Genuinely persuasive; confident, appropriate tone.","Mostly persuasive; suitable tone.","Some persuasion; tone uneven.","Not persuasive; tone unclear."]],
 rubricSelfCheck:["raise the question clearly in my introduction.","present BOTH sides fairly (concede + challenge).","use 3+ discursive connectives.","reach a clear, reasoned verdict.","use 2+ unit words correctly and check my grammar."],
 project:{
  title:"The Great AI Debate", subtitle:"research, argue and judge a real question about AI and art.",
  brief:"Choose a real question about AI and art (Should AI win prizes? Should artists be paid when AI trains on their work? Is AI art 'real' art?). Research both sides, then create a short case (3–5 slides) that presents the debate fairly and delivers YOUR verdict. Present it to the class.",
  research:[["The question","What exactly is being debated?"],["The case FOR","The two strongest points on one side."],["The case AGAINST","The two strongest points on the other side."],["The evidence","One real example or fact for each side."],["Your verdict","Your judgement — and why."]],
  plan:"Plan your case: (1) Title + the question  (2) The case for  (3) The case against  (4) The evidence  (5) Your verdict. Present BOTH sides fairly before you judge, and use the language of argument.",
  langChecklist:["at least 6 unit words, used correctly","a modal of speculation (must / might / can't)","at least 2 concession/discursive connectives","a clear, reasoned verdict"],
  rubric:[["Content & balance","Both sides researched and presented fairly, with evidence."],["Language & vocabulary","6+ unit words correct; modals and discursive connectives."],["Organisation & clarity","Logical build from question to verdict."],["Reasoning & judgement","A clear verdict, justified with reasons."],["Presentation & delivery","Confident voice; keeps to time; handles a challenge."]]
 }
};
