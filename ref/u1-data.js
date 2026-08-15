// Unit 1 "Leisure & Belonging" — data file (workbook + future engine use). Mirrors u1-pack.js content.
const VOCAB=[
 ["belonging","the feeling of being accepted as part of a group"],["affordable","cheap enough that most people can pay for it"],
 ["ambience","the character and atmosphere of a place"],["linger","to stay somewhere longer because you enjoy it"],
 ["unwind","to relax after work or stress"],["cosy","small, warm and comfortable"],
 ["refuge","a place that gives shelter or escape"],["convenience","the quality of being easy to use and saving time"],
 ["hub","a central place where a lot of activity happens"],["hangout","a place where people go to relax together"],
 ["ritual","something you do regularly, often with meaning"],["accessible","easy to reach or use"],
 ["gather","to come together in one place as a group"],["amenity","a useful or pleasant facility of a place"],
 ["footfall","the number of people who enter a place"],["bustling","full of busy, energetic activity"],
 ["sprawling","spreading out over a large area"],["inclusive","open to and welcoming of everyone"],
 ["sanctuary","a peaceful place of safety and escape"],["gentrification","when wealthier people move in and price out original residents"],
 ["displacement","the forced movement of people away from their home"],["exclusion","the act of keeping someone out of a place or group"],
 ["communal","shared by, and open to, a whole community"],["surveillance","close watching of people, especially by cameras"],
];
module.exports={
 no:1, slug:"leisure-and-lifestyle", title:"Leisure & Belonging",
 byline:"Third places — where we belong",
 outDir:__dirname+"/unit01-leisure", vocab:VOCAB,
 writingDeck:{
  starters:["Support: '____ is a ____ place. I like it because ____. One problem is ____.'","Core: 'Tucked away in ____, ____ is the kind of place where ____.'","Stretch: open with a question or a vivid image; end with a line to remember."],
  model:{header:"A Grade-A review (study café)",task:"Write a review of a place where people gather (120–150 words).",
   model:"Tucked down a side street, The Long Table is the kind of café where nobody asks you to leave. You pay by the hour, not by the cup, so its warm, low-lit ambience invites you to linger over one drink for a whole afternoon. What makes it special is the quiet — it's a genuine sanctuary during exam season. My only criticism is that seats near the window fill fast, so arrive early. It's perfect for any student who needs somewhere calm to unwind and study. I'd recommend it to anyone."}
 },
 retrieval:[
  ["Round 1 · Study Cafés",[["What does 'linger' mean?","to stay somewhere longer because you enjoy it"],["A word for the atmosphere/character of a place?","ambience"],["'To relax after stress' — which word?","unwind"],["What does 'affordable' mean?","cheap enough that most people can pay for it"],["A place of shelter or escape is a ___.","refuge"]]],
  ["Round 2 · The 24-Hour Konbini",[["A central place where lots happens is a ___.","hub"],["What does 'convenience' mean?","the quality of being easy to use and saving time"],["A regular, meaningful habit is a ___.","ritual"],["'To come together as a group' — which verb?","gather"],["What does 'accessible' mean?","easy to reach or use"]]],
  ["Round 3 · Indoor Worlds",[["The number of people who enter a place is the ___.","footfall"],["A useful facility (wifi, toilets) is an ___.","amenity"],["What does 'bustling' mean?","full of busy, energetic activity"],["'Spreading over a large area' — which word?","sprawling"],["A place welcoming to everyone is ___.","inclusive"]]],
  ["Round 4 · The Disappearing Hangout",[["What does 'gentrification' mean?","when wealthier people move in and price out residents"],["Keeping someone out of a place is ___.","exclusion"],["'Shared by a whole community' — which word?","communal"],["Close watching by cameras is ___.","surveillance"],["What does 'displacement' mean?","the forced movement of people away from their home"]]],
  ["Round 5 · Mixed recall (exam warm-up)",[["Give a word for a peaceful place of safety.","sanctuary"],["What is a 'third place'? (one sentence)","a public place — not home or school — where you feel you belong"],["Use 'belonging' in a short sentence.","(accept any correct sentence, e.g. 'A good café gives you a sense of belonging.')"],["Which word is the OPPOSITE of inclusive?","exclusion / exclusive"],["Name one force that makes a hangout disappear.","gentrification / rising rents / surveillance"]]],
 ],
 diffhw:{
  homework:[["Map your third places","List 3 places (not home/school). Note one feeling-word for each."],["Vocabulary","Learn the 24 unit words. Write 5 in sentences of your own."],["Review","Write a 120–150 word review of a real place where people gather."],["Listen & notice","Watch/listen to English about a place. Note 3 new words."],["The debate","Prepare your view: 'Should towns provide free places for teenagers?'"]]
 },
 quiz:{
  clozeBank:["belonging","affordable","ambience","linger","unwind","convenience","hangout","gather","amenity","footfall","gentrification","surveillance"],
  clozeText:["For many teenagers, the places that matter most are not home or school but a 'third place' — somewhere they feel a real sense of ",1,
   ". A good study café is ",2,": one drink buys hours of space, and its calm ",3,
   " invites students to ",4," for the afternoon and ",5," after a hard day. A 24-hour store is different: its whole appeal is ",6,
   " — a ",7," open all night where friends can ",8,". A shopping mall offers every ",9,
   " — wifi, seats, air-conditioning — and its high ",10," keeps the shops alive. But when rents rise, ",11,
   " can push out the small places teenagers loved, and cameras create a feeling of ",12," that makes them unwelcome."],
  match:[["cosy",VOCAB.find(v=>v[0]==="cosy")[1]],["refuge",VOCAB.find(v=>v[0]==="refuge")[1]],["hub",VOCAB.find(v=>v[0]==="hub")[1]],["ritual",VOCAB.find(v=>v[0]==="ritual")[1]],["sprawling",VOCAB.find(v=>v[0]==="sprawling")[1]],["inclusive",VOCAB.find(v=>v[0]==="inclusive")[1]],["communal",VOCAB.find(v=>v[0]==="communal")[1]],["exclusion",VOCAB.find(v=>v[0]==="exclusion")[1]]],
  matchShuf:[3,0,6,1,7,2,5,4],
  productive:["belonging","ambience","sanctuary","gentrification","inclusive"]
 },
 rubricSelfCheck:["name the place and give a clear verdict.","describe the atmosphere using 2+ unit words.","give one honest criticism, not only praise.","organise my review in three clear paragraphs.","end with a recommendation and check my spelling."]
};
