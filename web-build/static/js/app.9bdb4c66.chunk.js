(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{184:function(e,a,t){"use strict";var l=t(0),n=t.n(l),r=t(157),c=t(260),s=t(2),u=t(52),o=t(51);function i(e){var a=e.navigation;return n.a.createElement(s.a,{style:{flex:1,alignItems:"center",justifyContent:"center"}},n.a.createElement(o.a,{style:{width:375,height:325},source:{uri:"https://ijsv.netlify.app/static/media/logo.9d4984e3.jpg"}}),n.a.createElement(s.a,{style:{marginBottom:30,marginTop:20}},n.a.createElement(u.a,{title:"Bibles",onPress:function(){return a.navigate("Bibles")}})),n.a.createElement(s.a,null,n.a.createElement(u.a,{title:"Temas",onPress:function(){return a.navigate("Temas")}})))}var h=t(8),p=t.n(h),b=t(46),m=t.n(b),v=t(25),f=t(5),E=t(183);function g(){var e=Object(l.useState)([]),a=p()(e,2),t=a[0],r=a[1];return Object(l.useEffect)((function(){m.a.get("https://ijsv-backend.herokuapp.com/api/temas").then((function(e){r(e.data)})).catch((function(e){console.log(e)}))}),[]),t?n.a.createElement(E.a,{style:d.container},n.a.createElement(s.a,{style:d.textBox},t.map((function(e){return n.a.createElement(s.a,{key:e.id},n.a.createElement(v.a,{style:d.title},e.title),n.a.createElement(v.a,{style:d.body},e.body1),n.a.createElement(v.a,{style:d.body},e.body2),n.a.createElement(v.a,{style:d.body},e.body3))})))):n.a.createElement(v.a,{style:{flex:1,alignItems:"center",justifyContent:"center"}},"Loading...")}var d=f.a.create({container:{backgroundColor:"skyblue",paddingTop:20,paddingBottom:10},textBox:{flex:1,alignItems:"center",justifyContent:"center",paddingBottom:25},header:{textAlign:"center",fontSize:32,marginBottom:20},title:{fontWeight:"bold",fontSize:18,textAlign:"center"},body:{textAlign:"left",marginTop:5,marginBottom:10,marginLeft:15,marginRight:15}}),y=f.a.create({mainview:{flex:1,alignItems:"center",marginLeft:25,marginRight:25},bookpicker:{height:50,width:150,marginBottom:20},chapterpicker:{height:50,width:150,marginBottom:30},buttons:{marginBottom:30},headers:{textAlign:"center",fontSize:32,marginBottom:20}});function S(e){var a=e.navigation;return n.a.createElement(s.a,{style:{flex:1,alignItems:"center",justifyContent:"center"}},n.a.createElement(v.a,{style:y.headers},"Pick your desired bible"),n.a.createElement(s.a,{style:y.buttons},n.a.createElement(u.a,{marginBottom:"100",title:"Old Testament",onPress:function(){return a.push("EnglishOldTestament")}})),n.a.createElement(s.a,{style:y.buttons},n.a.createElement(u.a,{title:"New Testament",onPress:function(){return a.push("EnglishNewTestament")}})),n.a.createElement(s.a,{style:y.buttons},n.a.createElement(u.a,{title:"Antiguo Testamento",onPress:function(){return a.push("Spanish Old Testament")}})),n.a.createElement(s.a,{style:y.buttons},n.a.createElement(u.a,{title:"Nuevo Testamento",onPress:function(){return a.push("SpanishNewTestament")}})),n.a.createElement(u.a,{color:"black",title:"Go back",onPress:function(){return a.goBack()}}))}var k=t(56),O=t.n(k),J=[{value:"GENESIS",label:"Genesis",chapters:50},{value:"EXODUS",label:"Exodus",chapters:40},{value:"LEVITICUS",label:"Leviticus",chapters:27},{value:"NUMBERS",label:"Numbers",chapters:36},{value:"Deuteronomy",label:"Deuteronomy",chapters:34},{value:"Joshua",label:"Joshua",chapters:24},{value:"Judges",label:"Judges",chapters:21},{value:"Ruth",label:"Ruth",chapters:4},{value:"1 Samuel",label:"1 Samuel (1 Kings)",chapters:31},{value:"2 Samuel",label:"2 Samuel (2 Kings)",chapters:24},{value:"1 Kings",label:"1 Kings (3 Kings)",chapters:22},{value:"2 Kings",label:"2 Kings (4 Kings)",chapters:25},{value:"1 Chronicles",label:"1 Chronicles",chapters:29},{value:"2 Chronicles",label:"2 Chronicles",chapters:36},{value:"Ezra",label:"Ezra",chapters:10},{value:"Nehemiah",label:"Nehemiah",chapters:13},{value:"Esther",label:"Esther",chapters:10},{value:"Job",label:"Job",chapters:42},{value:"Psalms",label:"Psalms",chapters:150},{value:"Proverbs",label:"Proverbs",chapters:31},{value:"Ecclesiastes",label:"Ecclesiastes",chapters:12},{value:"Song of Solomon",label:"Song of Solomon",chapters:8},{value:"Isaiah",label:"Isaiah",chapters:66},{value:"Jeremiah",label:"Jeremiah",chapters:52},{value:"Lamentations",label:"Lamentations",chapters:5},{value:"Ezekiel",label:"Ezekiel",chapters:48},{value:"Daniel",label:"Daniel",chapters:12},{value:"Hosea",label:"Hosea",chapters:14},{value:"Joel",label:"Joel",chapters:3},{value:"Amos",label:"Amos",chapters:9},{value:"Obadiah",label:"Obadiah",chapters:1},{value:"Jonah",label:"Jonah",chapters:4},{value:"Micah",label:"Micah",chapters:7},{value:"Nahum",label:"Nahum",chapters:3},{value:"Habakkuk",label:"Habakkuk",chapters:3},{value:"Zephaniah",label:"Zephaniah",chapters:3},{value:"Haggai",label:"Haggai",chapters:2},{value:"Zechariah",label:"Zechariah",chapters:14},{value:"Malachi",label:"Malachi",chapters:4}],T=t(32),C=t(26);var j=function(){var e=Object(l.useState)([]),a=p()(e,2),t=a[0],r=a[1],c=Object(l.useState)(1),u=p()(c,2),o=u[0],i=u[1],h=Object(l.useState)("GENESIS"),b=p()(h,2),v=b[0],f=b[1],E=Object(l.useState)([]),g=p()(E,2),d=g[0],S=g[1],k={headers:{"x-rapidapi-key":"4ff44bf1d0mshb58109f3c94d09ep13f9adjsn37028a25638a","x-rapidapi-host":"ajith-holy-bible.p.rapidapi.com",useQueryString:"true"}};return Object(l.useEffect)((function(){m.a.get("https://ajith-holy-bible.p.rapidapi.com/GetVerseOfaChapter?&Book="+v+"&chapter="+o,k).then((function(e){r([e.data])})).catch((function(e){console.log(e)})),J.map((function(e){if(e.value===v)return S(e.chapters)}))}),[v,o]),t?n.a.createElement(T.a,null,n.a.createElement(s.a,{style:y.mainview},n.a.createElement(C.a,{name:"book",style:y.bookpicker,onChange:function(e){!function(e){f(e.target.value)}(e)},form:"book"},J.map((function(e){var a=e.value,t=e.label;return n.a.createElement(C.a.Item,{label:t,value:a},t)}))),n.a.createElement(C.a,{name:"chapter",type:"text",onChange:function(e){return function(e){i(e.target.value)}(e)},style:y.chapterpicker,form:"chapter"},O.a.range(1,d+1).map((function(e){return n.a.createElement(C.a.Item,{key:e,value:e,label:e,onChange:function(e){i(e.target.value)}},e)}))),t.map((function(e){return n.a.createElement(s.a,{key:e},n.a.createElement("br",null),t[0].Output.split(/\s+(?=\d)/g).map((function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("p",null,e))})))})))):n.a.createElement("h1",null,"Loading...")},A=[{value:"MATTHEW",label:"Matthew",chapters:28},{value:"Mark",label:"Mark",chapters:16},{value:"Luke",label:"Luke",chapters:24},{value:"John",label:"John",chapters:21},{value:"Acts",label:"Acts",chapters:28},{value:"Romans",label:"Romans",chapters:16},{value:"1 Corinthians",label:"1 Corinthians",chapters:16},{value:"2 Corinthians",label:"2 Corinthians",chapters:13},{value:"Galatians",label:"Galatians",chapters:6},{value:"Ephesians",label:"Ephesians",chapters:6},{value:"Philippians",label:"Philippians",chapters:4},{value:"Colossians",label:"Colossians",chapters:4},{value:"1 Thessalonians",label:"1 Thessalonians",chapters:5},{value:"2 Thessalonians",label:"2 Thessalonians",chapters:3},{value:"1 Timothy",label:"1 Timothy",chapters:6},{value:"2 Timothy",label:"2 Timothy",chapters:4},{value:"Titus",label:"Titus",chapters:3},{value:"Philemon",label:"Philemon",chapters:1},{value:"Hebrews",label:"Hebrews",chapters:13},{value:"James",label:"James",chapters:5},{value:"1 Peter",label:"1 Peter",chapters:5},{value:"2 Peter",label:"2 Peter",chapters:3},{value:"1 John",label:"1 John",chapters:5},{value:"2 John",label:"2 John",chapters:1},{value:"3 John",label:"3 John",chapters:1},{value:"Jude",label:"Jude",chapters:1},{value:"Revelation",label:"Revelation",chapters:22}];var P=function(){var e=Object(l.useState)([]),a=p()(e,2),t=a[0],r=a[1],c=Object(l.useState)(1),u=p()(c,2),o=u[0],i=u[1],h=Object(l.useState)("MATTHEW"),b=p()(h,2),v=b[0],f=b[1],E=Object(l.useState)([]),g=p()(E,2),d=g[0],S=g[1],k={headers:{"x-rapidapi-key":"4ff44bf1d0mshb58109f3c94d09ep13f9adjsn37028a25638a","x-rapidapi-host":"ajith-holy-bible.p.rapidapi.com",useQueryString:"true"}};return Object(l.useEffect)((function(){m.a.get("https://ajith-holy-bible.p.rapidapi.com/GetVerseOfaChapter?&Book="+v+"&chapter="+o,k).then((function(e){r([e.data])})).catch((function(e){console.log(e)})),A.map((function(e){if(e.value===v)return S(e.chapters)}))}),[v,o]),t?n.a.createElement(T.a,null,n.a.createElement(s.a,{style:y.mainview},n.a.createElement(C.a,{style:y.bookpicker,name:"book",onChange:function(e){!function(e){f(e.target.value)}(e)},form:"book"},A.map((function(e){var a=e.value,t=e.label;return n.a.createElement(C.a.Item,{label:t,value:a},t)}))),n.a.createElement(C.a,{name:"chapter",type:"text",onChange:function(e){return function(e){i(e.target.value)}(e)},style:y.chapterpicker,form:"chapter"},O.a.range(1,d+1).map((function(e){return n.a.createElement(C.a.Item,{key:e,value:e,label:e,onChange:function(e){i(e.target.value)}},e)}))),t.map((function(e){return n.a.createElement(s.a,{key:e},n.a.createElement("br",null),t[0].Output.split(/\s+(?=\d)/g).map((function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("p",null,e))})))})))):n.a.createElement("h1",null,"Loading...")},N=[{value:"GEN",label:"G\xe9nesis",chapters:50},{value:"EXO",label:"\xc9xodo",chapters:40},{value:"LEV",label:"Lev\xedtico",chapters:27},{value:"NUM",label:"N\xfameros",chapters:36},{value:"DEU",label:"Deuteronomio",chapters:34},{value:"JOS",label:"Josu\xe9",chapters:24},{value:"JDG",label:"Jueces",chapters:21},{value:"RUT",label:"Rut",chapters:4},{value:"1SA",label:"1 Samuel",chapters:31},{value:"2SA",label:"2 Samuel",chapters:24},{value:"1KI",label:"1 Reyes",chapters:22},{value:"2KI",label:"2 Reyes",chapters:25},{value:"1CH",label:"1 Cr\xf3nicas",chapters:29},{value:"2CH",label:"2 Cr\xf3nicas",chapters:36},{value:"EZR",label:"Esdras",chapters:10},{value:"NEH",label:"Nehem\xedas",chapters:13},{value:"EST",label:"Ester",chapters:10},{value:"JOB",label:"Job",chapters:42},{value:"PSA",label:"Salmos",chapters:150},{value:"PRO",label:"Proverbios",chapters:31},{value:"ECC",label:"Eclesiast\xe9s",chapters:12},{value:"SNG",label:"Cantares",chapters:8},{value:"ISA",label:"Isa\xedas",chapters:66},{value:"JER",label:"Jerem\xedas",chapters:52},{value:"LAM",label:"Lamentaciones",chapters:5},{value:"EZK",label:"Ezequiel",chapters:48},{value:"DAN",label:"Daniel",chapters:12},{value:"HOS",label:"Oseas",chapters:14},{value:"JOL",label:"Joel",chapters:3},{value:"AMO",label:"Am\xf3s",chapters:9},{value:"OBA",label:"Abd\xeda",chapters:1},{value:"JON",label:"Jon\xe1s",chapters:4},{value:"MIC",label:"Miqueas",chapters:7},{value:"NAM",label:"Nah\xfam",chapters:3},{value:"HAB",label:"Habacuc",chapters:3},{value:"ZEP",label:"Sofonias",chapters:3},{value:"HAG",label:"Hageo",chapters:2},{value:"ZEC",label:"Zacar\xedas",chapters:14},{value:"MAL",label:"Malaquias",chapters:4}];function H(){var e=Object(l.useState)(),a=p()(e,2),t=a[0],r=(a[1],Object(l.useState)([])),c=p()(r,2),u=c[0],o=c[1],i=Object(l.useState)(1),h=p()(i,2),b=h[0],f=h[1],E=Object(l.useState)("GEN"),g=p()(E,2),d=g[0],S=g[1],k=Object(l.useState)([]),J=p()(k,2),j=J[0],A=J[1],P=Object(l.useState)(!1),H=p()(P,2),I=H[0],M=H[1];var B={headers:{"Api-key":"59fc91093130021fbd5e3439e270c4b2"}};return Object(l.useEffect)((function(){m.a.get("https://api.scripture.api.bible/v1/bibles/592420522e16049f-01/chapters/"+d+"."+b,B).then((function(e){A([e.data.data]),M(!0)})).catch((function(e){console.log(e)})),N.map((function(e){if(e.value===d)return o(e.chapters)}))}),[b,d]),n.a.createElement(T.a,null,n.a.createElement(s.a,{style:y.mainview},n.a.createElement(C.a,{name:"book",selectedValue:t,value:t,style:y.bookpicker,onChange:function(e){return function(e){S(e.target.value)}(e)},form:"book"},N.map((function(e){var a=e.value,t=e.label;return n.a.createElement(C.a.Item,{label:t,value:a,key:a})}))),n.a.createElement(C.a,{name:"chapter",selectedValue:t,style:y.chapterpicker,onChange:function(e){return function(e){f(e.target.value)}(e)},form:"chapter"},O.a.range(1,u+1).map((function(e){return n.a.createElement(C.a.Item,{key:e,label:e,value:e,onChange:function(e){f(e.target.value)}})}))),j.map((function(e){return n.a.createElement(s.a,{key:e},n.a.createElement(v.a,null,e.content.replace(/<.*?>/gm," ")),I?!j:n.a.createElement(v.a,null,"Loading..."))}))))}var I=[{value:"MAT",label:"San Mateo",chapters:28},{value:"MRK",label:"San Marcos",chapters:16},{value:"LUK",label:"San Lucas",chapters:24},{value:"JHN",label:"San Juan",chapters:21},{value:"ACT",label:"Hechos",chapters:28},{value:"ROM",label:"Romanos",chapters:16},{value:"1CO",label:"1 Corintios",chapters:16},{value:"2CO",label:"2 Corintios",chapters:13},{value:"GAL",label:"G\xe1latas",chapters:6},{value:"EPH",label:"Efesios",chapters:8},{value:"PHP",label:"Filipenses",chapters:4},{value:"COL",label:"Colonseses",chapters:4},{value:"1TH",label:"1 Tesalonicenses",chapters:5},{value:"2TH",label:"2 Tesalonicenses",chapters:3},{value:"1TI",label:"1 Timoteo",chapters:6},{value:"2TI",label:"2 Timoteo",chapters:4},{value:"TIT",label:"Tito",chapters:3},{value:"PHM",label:"Filem\xf3n",chapters:1},{value:"HEB",label:"Hebreos",chapters:13},{value:"JAS",label:"Santiago",chapters:5},{value:"1PE",label:"1 Pedro",chapters:5},{value:"2PE",label:"2 Pedro",chapters:3},{value:"1JN",label:"1 Juan",chapters:5},{value:"2JN",label:"2 Juan",chapters:1},{value:"3JN",label:"3 Juan",chapters:1},{value:"JUD",label:"Judas",chapters:1},{value:"REV",label:"Apocalipsis",chapters:22}];function M(){var e=Object(l.useState)(),a=p()(e,2),t=a[0],r=(a[1],Object(l.useState)([])),c=p()(r,2),u=c[0],o=c[1],i=Object(l.useState)(1),h=p()(i,2),b=h[0],f=h[1],E=Object(l.useState)("MAT"),g=p()(E,2),d=g[0],S=g[1],k=Object(l.useState)([]),J=p()(k,2),j=J[0],A=J[1],P=Object(l.useState)(!1),N=p()(P,2),H=N[0],M=N[1];var B={headers:{"Api-key":"59fc91093130021fbd5e3439e270c4b2"}};return Object(l.useEffect)((function(){m.a.get("https://api.scripture.api.bible/v1/bibles/592420522e16049f-01/chapters/"+d+"."+b,B).then((function(e){A([e.data.data]),M(!0)})).catch((function(e){console.log(e)})),I.map((function(e){if(e.value===d)return o(e.chapters)}))}),[b,d]),n.a.createElement(T.a,null,n.a.createElement(s.a,{style:y.mainview},n.a.createElement(C.a,{name:"book",selectedValue:t,value:t,style:y.bookpicker,onChange:function(e){return function(e){S(e.target.value)}(e)},form:"book"},I.map((function(e){var a=e.value,t=e.label;return n.a.createElement(C.a.Item,{label:t,value:a,key:a})}))),n.a.createElement(C.a,{name:"chapter",selectedValue:t,style:y.chapterpicker,onChange:function(e){return function(e){f(e.target.value)}(e)},form:"chapter"},O.a.range(1,u+1).map((function(e){return n.a.createElement(C.a.Item,{key:e,label:e,value:e,onChange:function(e){f(e.target.value)}})}))),j.map((function(e){return n.a.createElement(s.a,{key:e},n.a.createElement(v.a,null,e.content.replace(/<.*?>/gm," ")),H?!j:n.a.createElement(v.a,null,"Loading..."))}))))}var B=Object(c.a)();a.a=function(){return l.createElement(r.a,null,l.createElement(B.Navigator,{initialRouteName:"Home"},l.createElement(B.Screen,{name:"Home",component:i}),l.createElement(B.Screen,{name:"Temas",component:g}),l.createElement(B.Screen,{name:"Bibles",component:S}),l.createElement(B.Screen,{name:"EnglishOldTestament",component:j}),l.createElement(B.Screen,{name:"EnglishNewTestament",component:P}),l.createElement(B.Screen,{name:"Spanish Old Testament",component:H}),l.createElement(B.Screen,{name:"SpanishNewTestament",component:M})))}},194:function(e,a,t){e.exports=t(256)}},[[194,1,2]]]);
//# sourceMappingURL=app.9bdb4c66.chunk.js.map