// Flexible KS3 slide engine — renders Launch & Writing decks from a slide list. Navy/gold, no emoji, speaker notes.
const pptxgen=require("pptxgenjs");
const NAVY="1E2A44",GOLD="B8892B",INK="222222",MUTED="6A6A6A",WHITE="FFFFFF",ICE="D9E2F0",CREAM="FBF9F5",
      SUPBG="EAF3EC",SUPINK="2F5D3A",WARM="A8611E",CARD="27324D";
const HEAD="Cambria",BODY="Calibri";
const MX=0.6,CW=13.33-2*MX;

function renderDeck(cfg){
 const P=new pptxgen(); P.layout="LAYOUT_WIDE";
 const TOTAL=cfg.slides.length; let n=0;
 const foot=(s)=>{n++;s.addText(`${cfg.brand} · ${cfg.lessonTag}`,{x:MX,y:7.05,w:9,h:0.3,fontFace:BODY,fontSize:9,color:MUTED});s.addText(`${n} / ${TOTAL}`,{x:13.33-MX-1.2,y:7.05,w:1.2,h:0.3,fontFace:BODY,fontSize:9,color:MUTED,align:"right"});};
 const header=(s,k,t)=>{s.addText(k,{x:MX,y:0.34,w:CW,h:0.3,fontFace:BODY,fontSize:12,bold:true,color:GOLD,charSpacing:2});s.addText(t,{x:MX,y:0.62,w:CW,h:0.9,fontFace:HEAD,fontSize:30,bold:true,color:NAVY});};
 const card=(s,x,y,w,h,fill,line)=>{s.addShape(P.ShapeType.roundRect,{x,y,w,h,rectRadius:0.09,fill:{color:fill},line:line?{color:line,width:1}:{type:"none"},shadow:{type:"outer",color:"BBBBBB",blur:4,offset:2,angle:90,opacity:0.35}});};
 const numCircle=(s,x,y,num,fill)=>{s.addShape(P.ShapeType.ellipse,{x,y,w:0.52,h:0.52,fill:{color:fill||GOLD}});s.addText(String(num),{x,y,w:0.52,h:0.52,align:"center",valign:"middle",fontFace:HEAD,fontSize:21,bold:true,color:WHITE,margin:0});};
 const rich=(v)=>Array.isArray(v)?v:[{text:v,options:{}}];

 for(const sl of cfg.slides){
  const s=P.addSlide();
  if(sl.kind==="title"){
   s.background={color:NAVY};
   s.addText(cfg.kicker,{x:MX,y:1.4,w:CW,h:0.4,fontFace:BODY,fontSize:15,bold:true,color:GOLD,charSpacing:3});
   s.addText(cfg.title,{x:MX,y:1.85,w:CW,h:1.3,fontFace:HEAD,fontSize:40,bold:true,color:WHITE});
   s.addText(cfg.byline,{x:MX,y:3.2,w:CW,h:0.6,fontFace:HEAD,fontSize:20,italic:true,color:ICE});
   card(s,MX,4.4,9.4,1.95,CARD);
   s.addText(sl.label||"DO NOW",{x:MX+0.35,y:4.62,w:8.6,h:0.35,fontFace:BODY,fontSize:13,bold:true,color:GOLD,charSpacing:2});
   s.addText(rich(sl.body),{x:MX+0.35,y:5.02,w:8.7,h:1.2,fontFace:BODY,fontSize:19,color:"E7ECF5",valign:"top"});
  } else if(sl.kind==="cards"){
   header(s,sl.kicker,sl.header);
   let y=1.75;const h=Math.min(1.15,(6.6-1.75)/sl.cards.length - 0.15);
   sl.cards.forEach((c,i)=>{card(s,MX,y,CW,h,CREAM,"E3DECE");if(c.length>2||sl.numbered){numCircle(s,MX+0.3,y+(h-0.52)/2,i+1,i===sl.cards.length-1&&sl.lastNavy?NAVY:GOLD);s.addText(c[0],{x:MX+1.1,y:y+0.14,w:CW-1.35,h:0.42,fontFace:HEAD,fontSize:18,bold:true,color:NAVY});s.addText(rich(c[1]),{x:MX+1.1,y:y+0.56,w:CW-1.35,h:h-0.6,fontFace:BODY,fontSize:14,color:INK,valign:"top"});}else{s.addText(c[0],{x:MX+0.3,y:y+0.12,w:3.4,h:h-0.24,valign:"middle",fontFace:HEAD,fontSize:16,bold:true,color:NAVY});s.addText(rich(c[1]),{x:MX+3.8,y:y+0.12,w:CW-4.1,h:h-0.24,valign:"middle",fontFace:BODY,fontSize:14,color:INK});}y+=h+0.15;});
  } else if(sl.kind==="big"){
   header(s,sl.kicker,sl.header);
   card(s,MX,1.75,CW,1.2,NAVY);s.addText(rich(sl.big),{x:MX+0.3,y:1.75,w:CW-0.6,h:1.2,align:"center",valign:"middle",fontFace:HEAD,fontSize:22,color:WHITE});
   card(s,MX,3.35,CW,2.5,CREAM,"E3DECE");s.addText(rich(sl.body),{x:MX+0.4,y:3.6,w:CW-0.8,h:2.1,valign:"top",fontFace:BODY,fontSize:19,color:INK,lineSpacingMultiple:1.06});
  } else if(sl.kind==="model"){
   header(s,sl.kicker||"MODEL",sl.header);
   card(s,MX,1.75,CW,0.95,NAVY);s.addText([{text:"Task:  ",options:{color:GOLD,bold:true}},...rich(sl.task).map(r=>({text:r.text,options:{...r.options,color:WHITE}}))],{x:MX+0.35,y:1.75,w:CW-0.7,h:0.95,valign:"middle",fontFace:HEAD,fontSize:17});
   card(s,MX,2.9,CW,3.0,"F7F4EC","D8CBA6");s.addText("Model",{x:MX+0.35,y:3.05,w:CW-0.7,h:0.35,fontFace:BODY,fontSize:13,bold:true,color:SUPINK});
   s.addText(rich(sl.model),{x:MX+0.35,y:3.45,w:CW-0.7,h:2.3,valign:"top",fontFace:BODY,fontSize:17,italic:true,color:INK,lineSpacingMultiple:1.08});
  } else if(sl.kind==="starters"){
   header(s,sl.kicker||"YOU CAN START",sl.header);
   card(s,MX,1.75,CW,4.1,SUPBG,"BBD3C0");
   s.addText(sl.items.map(t=>({text:"•  "+t+"\n",options:{}})),{x:MX+0.4,y:2.0,w:CW-0.8,h:3.6,fontFace:BODY,fontSize:18,color:INK,valign:"top",lineSpacingMultiple:1.25});
  } else if(sl.kind==="plenary"){
   s.background={color:NAVY};
   s.addText("PLENARY",{x:MX,y:1.0,w:CW,h:0.4,fontFace:BODY,fontSize:14,bold:true,color:GOLD,charSpacing:3});
   s.addText(sl.h,{x:MX,y:1.4,w:CW,h:0.9,fontFace:HEAD,fontSize:36,bold:true,color:WHITE});
   card(s,MX,2.5,CW,1.5,CARD);s.addText(rich(sl.share),{x:MX+0.4,y:2.5,w:CW-0.8,h:1.5,valign:"middle",fontFace:BODY,fontSize:19,color:"E7ECF5"});
   card(s,MX,4.2,CW,1.4,GOLD);s.addText("EXIT",{x:MX+0.35,y:4.35,w:CW-0.7,h:0.35,fontFace:BODY,fontSize:12,bold:true,color:"3A2A08",charSpacing:2});s.addText(rich(sl.exit),{x:MX+0.35,y:4.7,w:CW-0.7,h:0.8,fontFace:BODY,fontSize:17,bold:true,color:"3A2A08",valign:"top"});
  }
  if(sl.notes) s.addNotes(sl.notes);
  foot(s);
 }
 return P.writeFile({fileName:cfg.outFile});
}
module.exports={renderDeck};
