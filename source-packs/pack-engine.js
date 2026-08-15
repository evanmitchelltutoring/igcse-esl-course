// Data-driven IGCSE ESL teacher-pack engine. buildUnitPack(U) -> 9 artifacts (navy/gold).
// Per-unit content comes from a uNN-data.js object; layout lives here. Reuses deck-engine.js.
const { renderDeck } = require("./deck-engine.js");
const D = require("docx");
const { Document, Packer, Paragraph, TextRun, AlignmentType, Table, TableRow, TableCell, WidthType, ShadingType, BorderStyle } = D;
const fs = require("fs");

const NAVY="1E2A44",GOLD="B8892B",INK="1A1A1A",MUTED="595959",ANS="1F5AA8",GOLDBG="FBF1E4",
      LINEC="C9C3B4",HEADSH="1E2A44",ROW="F5F2EC",SUPINK="2F5D3A";
const BODY="Calibri",HEAD="Cambria";
const PAGE_W=11906,MARGIN=1021,USABLE=PAGE_W-2*MARGIN;
const R=(t,o={})=>new TextRun({text:t,font:o.font||BODY,size:o.size||21,bold:!!o.bold,italics:!!o.italics,color:o.color||INK});
const P=(runs,o={})=>new Paragraph({spacing:{after:o.after==null?100:o.after,line:o.line||268,before:o.before||0},alignment:o.align,children:Array.isArray(runs)?runs:[R(runs,o)]});
const bx=(c)=>{const b={style:BorderStyle.SINGLE,size:6,color:c||LINEC};return{top:b,bottom:b,left:b,right:b,insideHorizontal:b,insideVertical:b};};
const cell=(runs,w,o={})=>new TableCell({width:{size:w,type:WidthType.DXA},shading:o.fill?{type:ShadingType.CLEAR,fill:o.fill,color:"auto"}:undefined,margins:{top:64,bottom:64,left:110,right:110},verticalAlign:o.valign||"top",children:(Array.isArray(runs)?runs:[runs]).map(r=>typeof r==="string"?P([R(r,o)],{after:0}):r)});
const titleBand=(sub,title)=>[
  new Paragraph({spacing:{after:4},alignment:AlignmentType.CENTER,children:[R("CAMBRIDGE IGCSE ESL · MR EVANS ENGLISH",{size:15,bold:true,color:GOLD})]}),
  new Paragraph({spacing:{after:10},alignment:AlignmentType.CENTER,border:{bottom:{color:GOLD,style:BorderStyle.SINGLE,size:12,space:4}},children:[R(title,{font:HEAD,size:27,bold:true,color:NAVY})]}),
  new Paragraph({spacing:{after:130},alignment:AlignmentType.CENTER,children:[R(sub,{size:16,italics:true,color:MUTED})]}),
];
const heading=(t)=>new Paragraph({spacing:{before:180,after:70},shading:{type:ShadingType.CLEAR,fill:GOLDBG,color:"auto"},border:{left:{color:GOLD,style:BorderStyle.SINGLE,size:20,space:8}},children:[R("  "+t,{font:HEAD,bold:true,color:NAVY,size:19})]});
const nameLine=()=>P([R("Name: __________________     Class: __________     Date: __________     Score: ____ / ____",{size:16,italics:true,color:MUTED})],{align:AlignmentType.CENTER,after:120});
const doc=(title,children)=>new Document({creator:"Mr Evans English",title,styles:{default:{document:{run:{font:BODY,size:21,color:INK}}}},sections:[{properties:{page:{size:{width:PAGE_W,height:16838},margin:{top:MARGIN,bottom:MARGIN,left:MARGIN,right:MARGIN}}},children}]});

function buildUnitPack(U){
 const OUT=U.outDir; if(!fs.existsSync(OUT)) fs.mkdirSync(OUT,{recursive:true});
 const foot=(t)=>new Paragraph({spacing:{before:220},alignment:AlignmentType.CENTER,children:[R("Mr Evans English · Cambridge IGCSE ESL · Unit "+U.no+" "+U.title+" · "+t,{size:14,italics:true,color:MUTED})]});
 const save=(d,f)=>Packer.toBuffer(d).then(b=>fs.writeFileSync(OUT+"/"+f,b)).then(()=>console.log("  wrote "+f));
 const def=(w)=>{const v=U.vocab.find(x=>x[0]===w);return v?v[1]:w;};
 const tag="Unit "+U.no+" · "+U.title;

 // ---- decks ----
 const L=U.lessonDeck, W=U.writingDeck;
 const lessonDeck={brand:"IGCSE ESL",lessonTag:tag,kicker:"CAMBRIDGE IGCSE ESL · UNIT "+String(U.no).padStart(2,"0"),title:U.title,byline:U.byline,outFile:OUT+"/U"+U.no+"-Lesson-Slides.pptx",slides:[
  {kind:"title",label:"DO NOW · TALK TO A PARTNER",body:[{text:L.doNow,options:{}}]},
  {kind:"cards",kicker:"BY THE END YOU CAN",header:"Our goals this unit",numbered:true,lastNavy:true,cards:L.objectives},
  {kind:"big",kicker:"THE BIG IDEA",header:L.bigIdea.header,big:[{text:L.bigIdea.big,options:{}}],body:[{text:L.bigIdea.body,options:{}}]},
  {kind:"cards",kicker:L.settingsKicker||"WHAT WE'LL EXPLORE",header:L.settingsHeader||"The unit at a glance",cards:L.settings},
  {kind:"cards",kicker:"KEY VOCABULARY",header:"Words to own this unit",cards:L.keyVocab.map(w=>[w,def(w)])},
  {kind:"starters",kicker:L.framesKicker||"SENTENCE FRAMES",header:"You can start with these",items:L.frames},
  {kind:"plenary",h:L.plenary.h,share:[{text:L.plenary.share,options:{}}],exit:[{text:L.plenary.exit,options:{}}]}]};
 const writingDeck={brand:"IGCSE ESL",lessonTag:"Unit "+U.no+" · "+W.title,kicker:"CAMBRIDGE IGCSE ESL · UNIT "+String(U.no).padStart(2,"0"),title:W.title,byline:W.byline,outFile:OUT+"/U"+U.no+"-Writing-Slides.pptx",slides:[
  {kind:"title",label:"DO NOW",body:[{text:W.doNow,options:{}}]},
  {kind:"cards",kicker:"THE SHAPE",header:W.shapeHeader||"The plan",numbered:true,lastNavy:true,cards:W.shape},
  {kind:"model",kicker:"MODEL",header:W.model.header,task:[{text:W.model.task,options:{}}],model:[{text:W.model.model,options:{}}]},
  {kind:"starters",kicker:"SENTENCE STARTERS — CHOOSE YOUR TIER",header:"You can start with these",items:W.starters},
  {kind:"cards",kicker:"BEFORE YOU SUBMIT",header:"I can…",cards:W.criteria},
  {kind:"plenary",h:W.plenary.h,share:[{text:W.plenary.share,options:{}}],exit:[{text:W.plenary.exit,options:{}}]}]};

 // ---- retrieval ----
 const retrievalDoc=(teacher)=>{
  const k=[...titleBand(teacher?"Teacher copy — answers in blue. Five 'Do Now' rounds; spaced recall.":"'Do Now' starters — quick recall to warm up your brain.","Retrieval Starters — "+U.title)];
  if(!teacher) k.push(nameLine());
  k.push(P([R("Do ONE round at the start of a lesson — no notes, just recall. Then check and fix.",{size:17,italics:true,color:MUTED})],{after:20}));
  U.retrieval.forEach((r,i)=>{
   if(i>0&&i%3===0) k.push(new Paragraph({pageBreakBefore:true,children:[]}));
   k.push(heading(r[0]));
   const w=teacher?[USABLE*0.06,USABLE*0.52,USABLE*0.42]:[USABLE*0.06,USABLE*0.94];
   const rows=[new TableRow({tableHeader:true,children:[["#",w[0]],["Question",w[1]],...(teacher?[["Answer",w[2]]]:[])].map(([h,ww])=>cell(P([R(h,{bold:true,color:"FFFFFF",size:16})],{after:0}),ww,{fill:HEADSH}))})];
   r[1].forEach((q,j)=>rows.push(new TableRow({children:[
    cell(P([R(String(j+1),{bold:true,color:NAVY,size:17})],{after:0}),w[0],{fill:j%2?ROW:null,valign:"center"}),
    cell(P([R(q[0],{size:17})],{after:0}),w[1],{fill:j%2?ROW:null,valign:"center"}),
    ...(teacher?[cell(P([R(q[1],{italics:true,color:ANS,size:16})],{after:0}),w[2],{fill:j%2?ROW:null,valign:"center"})]:[])]})));
   k.push(new Table({width:{size:USABLE,type:WidthType.DXA},columnWidths:w,borders:bx(),rows}));
  });
  k.push(foot(teacher?"Teacher":"Student"));
  return doc("Retrieval Starters — Unit "+U.no+" ("+(teacher?"Teacher":"Student")+")",k);
 };

 // ---- challenge/support/homework ----
 const diffHwDoc=()=>{
  const H=U.diffhw; const k=[...titleBand("Differentiation & homework — stretch every learner, support every learner.","Challenge · Support · Homework — "+U.title)];
  k.push(heading("CHALLENGE · for confident learners"));
  H.challenge.forEach((c,i)=>k.push(P([R((i+1)+".  "+c[0]+" — ",{bold:true,color:NAVY,size:19}),R(c[1],{size:19})])));
  k.push(heading("SUPPORT · new-to-English scaffolds"));
  k.push(P([R("Sentence frames — say it, then write it:",{bold:true,color:SUPINK,size:18})],{after:60}));
  H.supportFrames.forEach(f=>k.push(P([R("•  "+f,{size:18})],{after:50})));
  k.push(P([R("Word bank:",{bold:true,color:SUPINK,size:18}),R("  "+H.wordBank,{size:18})],{before:60}));
  k.push(heading("HOMEWORK · this unit"));
  H.homework.forEach((c,i)=>k.push(P([R((i+1)+".  "+c[0]+" — ",{bold:true,color:NAVY,size:18}),R(c[1],{size:18})],{after:70})));
  k.push(foot("Differentiation & Homework"));
  return doc("Challenge · Support · Homework — Unit "+U.no,k);
 };

 // ---- vocab quiz ----
 const Q=U.quiz, letters="abcdefgh".split("");
 const vocabQuizDoc=(key)=>{
  const k=[...titleBand(key?"ANSWER KEY — Part A & B. Part C is teacher-marked.":"40 marks · Parts A–C · open notebook for Part C only, NO devices.","Vocabulary Quiz — "+U.title)];
  if(!key) k.push(nameLine());
  k.push(heading("Part A · Complete the passage (12 marks)"));
  k.push(P([R("Fill each numbered gap with the best word from the box. Each word is used once.",{italics:true,color:MUTED,size:17})],{after:80}));
  const br=[];for(let i=0;i<Q.clozeBank.length;i+=4){br.push(new TableRow({children:Q.clozeBank.slice(i,i+4).map(w=>cell(P([R(w,{size:17,color:NAVY,bold:true})],{after:0,align:AlignmentType.CENTER}),USABLE/4,{fill:GOLDBG}))}));}
  k.push(new Table({width:{size:USABLE,type:WidthType.DXA},columnWidths:[USABLE/4,USABLE/4,USABLE/4,USABLE/4],borders:bx(GOLD),rows:br}));
  const runs=[];Q.clozeText.forEach(part=>{if(typeof part==="number"){runs.push(new TextRun({text:" ("+part+") ",bold:true,color:key?ANS:NAVY,size:20}));runs.push(key?new TextRun({text:Q.clozeBank[part-1],bold:true,italics:true,color:ANS,size:20}):new TextRun({text:"__________",color:NAVY,size:20}));}else runs.push(new TextRun({text:part,size:20}));});
  k.push(new Paragraph({spacing:{before:120,after:120,line:340},children:runs}));
  k.push(heading("Part B · Match the word to its meaning (8 marks)"));
  k.push(P([R("The words a–h are in the box. Write the correct letter in the blank next to each meaning below.",{italics:true,color:MUTED,size:17})],{after:70}));
  const wb=[];for(let i=0;i<Q.match.length;i+=4){wb.push(new TableRow({children:Q.match.slice(i,i+4).map((m,j)=>cell(P([R(letters[i+j]+")  ",{bold:true,color:GOLD,size:17}),R(m[0],{bold:true,color:NAVY,size:17})],{after:0,align:AlignmentType.CENTER}),USABLE/4,{fill:GOLDBG}))}));}
  k.push(new Table({width:{size:USABLE,type:WidthType.DXA},columnWidths:[USABLE/4,USABLE/4,USABLE/4,USABLE/4],borders:bx(GOLD),rows:wb}));
  Q.matchShuf.forEach((mi,n)=>k.push(P([R("____ ",{bold:true,color:key?ANS:NAVY,size:18}),...(key?[R("("+letters[mi]+") ",{bold:true,italics:true,color:ANS,size:18})]:[]),R("  "+(n+1)+".  "+Q.match[mi][1],{size:18})],{before:70,after:0})));
  k.push(heading("Part C · Use the words (20 marks — teacher marked)"));
  k.push(P([R("Write ONE sentence for each word. Add enough context to show you understand it (2 marks each).",{italics:true,color:MUTED,size:17})],{after:80}));
  Q.productive.forEach((w,i)=>k.push(P([R((i+1)+".  "+w+":  ",{bold:true,color:NAVY,size:18}),R(key?"(accept any accurate, contextualised sentence)":"________________________________________________",{italics:!!key,color:key?ANS:INK,size:18})],{after:130})));
  k.push(foot(key?"Answer Key":"Quiz"));
  return doc("Vocabulary Quiz — Unit "+U.no+(key?" (Answer Key)":""),k);
 };

 // ---- rubric ----
 const rubricDoc=()=>{
  const c0=USABLE*0.16,cB=USABLE*0.21;
  const rows=[new TableRow({tableHeader:true,children:[cell(P([R("Criterion",{bold:true,color:"FFFFFF",size:15})],{after:0}),c0,{fill:HEADSH}),...["Excellent · 4","Good · 3","Developing · 2","Beginning · 1"].map(h=>cell(P([R(h,{bold:true,color:"FFFFFF",size:15})],{after:0,align:AlignmentType.CENTER}),cB,{fill:HEADSH}))]})];
  U.rubric.forEach((r,i)=>rows.push(new TableRow({children:[cell(P([R(r[0],{bold:true,color:NAVY,size:16})],{after:0}),c0,{fill:i%2?ROW:null}),...r.slice(1).map(d=>cell(P([R(d,{size:14})],{after:0}),cB,{fill:i%2?ROW:null}))]})));
  const k=[...titleBand(U.rubricTask+" · 20 marks · analytic. Teacher grid + student 'I can…' self-check.","Assessment Rubric — "+U.rubricTitle)];
  k.push(heading("Teacher grid"));
  k.push(new Table({width:{size:USABLE,type:WidthType.DXA},columnWidths:[c0,cB,cB,cB,cB],borders:bx(),rows}));
  k.push(P([R("Total:  ____ / 20        Grade:  ____        Two stars: ____________        One wish: ____________",{bold:true,color:NAVY,size:17})],{before:140,after:40}));
  k.push(heading("Student self-check · I can…"));
  U.rubricSelfCheck.forEach(s=>k.push(P([R("☐  ",{size:20,color:GOLD}),R(s,{size:18})],{after:70})));
  k.push(foot("Assessment Rubric"));
  return doc("Assessment Rubric — Unit "+U.no,k);
 };

 // ---- project ----
 const projectDoc=()=>{
  const Pr=U.project; const k=[...titleBand("Unit "+U.no+" capstone · "+Pr.subtitle,"Project — "+Pr.title)];
  k.push(P([R("THE BRIEF:  ",{bold:true,color:GOLD,size:19}),R(Pr.brief,{size:19})],{after:40}));
  k.push(P([R("The journey:  ",{bold:true,color:NAVY,size:16}),R("Research → Plan → Create → Present & reflect. Work through the four stages below.",{italics:true,color:MUTED,size:16})],{after:70}));
  k.push(new Paragraph({spacing:{before:40,after:60},shading:{type:ShadingType.CLEAR,fill:GOLDBG,color:"auto"},border:{left:{color:GOLD,style:BorderStyle.SINGLE,size:20,space:8}},children:[R("  ★ WHAT A STRONG PROJECT LOOKS LIKE",{font:HEAD,bold:true,color:NAVY,size:17})]}));
  if(Pr.exemplar) k.push(P([R(Pr.exemplar,{italics:true,size:17})],{after:60}));
  else (Pr.rubric||[]).forEach(r=>k.push(P([R("•  ",{color:GOLD,size:18}),R(r[1],{size:16})],{after:40})));
  k.push(heading("Stage 1 · Research (fill the notes frame)"));
  Pr.research.forEach((r,i)=>k.push(P([R((i+1)+".  "+r[0]+" — ",{bold:true,color:NAVY,size:18}),R(r[1],{size:18}),R("   ________________________",{color:MUTED,size:18})],{after:80})));
  k.push(heading("Stage 2 · Plan  ·  Stage 3 · Create"));
  k.push(P([R(Pr.plan,{size:18})]));
  k.push(P([R("Language checklist — your project MUST include:",{bold:true,color:SUPINK,size:18})],{before:80,after:50}));
  Pr.langChecklist.forEach(f=>k.push(P([R("☐  ",{size:20,color:GOLD}),R(f,{size:18})],{after:50})));
  k.push(heading("Stage 4 · Present & peer feedback"));
  k.push(P([R("Present for 1–2 minutes. Listeners give ",{size:18}),R("two stars",{bold:true,color:NAVY,size:18}),R(" (two things they liked) and ",{size:18}),R("one wish",{bold:true,color:NAVY,size:18}),R(" (one suggestion).",{size:18})],{after:80}));
  k.push(heading("Project rubric · 20 marks"));
  k.push(P([R("Bands:  4 Excellent · 3 Good · 2 Developing · 1 Beginning.  Score each criterion out of 4, then total.",{italics:true,color:MUTED,size:15})],{after:60}));
  const c0=USABLE*0.30,c1=USABLE*0.55,c2=USABLE*0.15;
  const rows=[new TableRow({tableHeader:true,children:[cell(P([R("Criterion",{bold:true,color:"FFFFFF",size:15})],{after:0}),c0,{fill:HEADSH}),cell(P([R("What excellent looks like",{bold:true,color:"FFFFFF",size:15})],{after:0}),c1,{fill:HEADSH}),cell(P([R("Mark /4",{bold:true,color:"FFFFFF",size:15})],{after:0,align:AlignmentType.CENTER}),c2,{fill:HEADSH})]})];
  Pr.rubric.forEach((r,i)=>rows.push(new TableRow({children:[cell(P([R(r[0],{bold:true,color:NAVY,size:16})],{after:0}),c0,{fill:i%2?ROW:null}),cell(P([R(r[1],{size:15})],{after:0}),c1,{fill:i%2?ROW:null}),cell(P([R("",{size:16})],{after:0}),c2,{fill:i%2?ROW:null})]})));
  k.push(new Table({width:{size:USABLE,type:WidthType.DXA},columnWidths:[c0,c1,c2],borders:bx(),rows}));
  k.push(P([R("Total:  ____ / 20",{bold:true,color:NAVY,size:17})],{before:120}));
  k.push(foot("Project — "+Pr.title));
  return doc("Project — "+Pr.title+" (Unit "+U.no+")",k);
 };

 return (async()=>{
  console.log("Building Unit "+U.no+" pack…");
  await renderDeck(lessonDeck); console.log("  wrote U"+U.no+"-Lesson-Slides.pptx");
  await renderDeck(writingDeck); console.log("  wrote U"+U.no+"-Writing-Slides.pptx");
  await save(retrievalDoc(true),"Retrieval-Starters-TEACHER.docx");
  await save(retrievalDoc(false),"Retrieval-Starters-STUDENT.docx");
  await save(diffHwDoc(),"Challenge-Support-Homework.docx");
  await save(vocabQuizDoc(false),"Vocabulary-Quiz.docx");
  await save(vocabQuizDoc(true),"Vocabulary-Quiz-ANSWER-KEY.docx");
  await save(rubricDoc(),"Review-Rubric.docx");
  await save(projectDoc(),"Project-Capstone.docx");
  console.log("Unit "+U.no+" pack complete ("+OUT+").");
 })();
}
module.exports={buildUnitPack};
