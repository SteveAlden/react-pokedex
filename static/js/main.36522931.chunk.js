(this["webpackJsonpreact-poke-caro"]=this["webpackJsonpreact-poke-caro"]||[]).push([[0],{174:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(16),l=a.n(r),i=(a(47),a(8)),c=a(5),s=a(9),u=a(10),d=a(11),p=a(14),m=a.n(p),v=a(29),h=a(23),g=a(196),b=a(197);var f=function(){return o.a.createElement("div",{className:"center-navbar"},o.a.createElement(g.a,{fixed:"top",style:{backdropFilter:"blur(10px) saturate(150%)",backgroundColor:"rgba(20,20,20,0.5)"},variant:"dark"},o.a.createElement(b.a.Link,{href:"/react-pokedex-carousel"},o.a.createElement(g.a.Brand,null,o.a.createElement("h3",null,o.a.createElement("img",{alt:"",src:"https://files.thetriangle.org/assets/pokemon/ball-master.png",height:"35",className:"d-inline-block align-top"}),"   ","Steve's Pok\xe9dex")))))},E=a(32),k=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("footer",{className:"footer"},o.a.createElement(E.a,{fluid:!0,style:{marginTop:"2vh"}},o.a.createElement("span",null,o.a.createElement("p",{className:"copyright pull-right",align:"center"},"\xa9 ",(new Date).getFullYear()," S Steve Alden, all rights reserved. Made with ",o.a.createElement("img",{height:"18px",alt:"LOVE",src:"https://res.cloudinary.com/aldencloud/image/upload/v1585305047/Heart/red-heart.png"})))))}}]),t}(n.Component),y=a(42),x=a.n(y),O=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.poke;return console.log(e),o.a.createElement(o.a.Fragment,null,o.a.createElement("img",{src:"https://res.cloudinary.com/aldencloud/image/upload/v1581096275/pokemonpng/poke-".concat(e,".png"),width:"100%"}))}}]),t}(n.Component),w=(a(108),n.Component,a(109),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={transform:"scale(1.0)",boxShadow:"none"},a.onMouseOver=function(){a.setState({transform:"scale(1.05)",boxShadow:"0px 5px 15px 5px rgba(87,255,196,0.5)"})},a.onMouseOut=function(){a.setState({transform:"scale(1.0)",boxShadow:"none"})},a.getStyle=function(){return{boxShadow:a.state.boxShadow,transition:"transform .2s",transform:a.state.transform,borderRadius:"20px"}},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.poke;return console.log(e),o.a.createElement(v.b,{style:{textDecoration:"none"},to:"/pokemon/".concat(e)},o.a.createElement("img",{src:"https://res.cloudinary.com/aldencloud/image/upload/v1581096275/pokemon/poke-".concat(e,".png"),style:this.getStyle(),width:"100%",onMouseOver:this.onMouseOver,onMouseOut:this.onMouseOut,onTouchStart:this.onMouseOver,onTouchEnd:this.onMouseOut}))}}]),t}(n.Component)),C=a(30),D=a.n(C),j=C.transitions.scaleDown,S=(C.transitions.fadeDown,C.transitions.flip,C.transitions.helix,function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={displayNo:1},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e,t,a;return(null===(e=this.props)||void 0===e?void 0:e.pokemons)&&(a=this.props.pokemons,console.log("Pokelist"),console.log(a)),o.a.createElement(o.a.Fragment,null,o.a.createElement(D.a,{columnWidth:190,appear:j.appear,appeared:j.appeared,enter:j.enter,entered:j.entered,leaved:j.leaved,gutterWidth:15,gutterHeight:15,appearDelay:80},null===(t=a)||void 0===t?void 0:t.map((function(e){return o.a.createElement(w,{poke:e})}))))}}]),t}(n.Component)),F=a(192),M=a(195),A=(n.Component,a(193)),B=a(194),R=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={evWidth:"30%",transform:"scale(1.0)",boxShadow:"none"},a.onMouseOver=function(){a.setState({transform:"scale(1.05)",boxShadow:"0px 5px 15px 5px rgba(87,255,196,0.5)"})},a.onMouseOut=function(){a.setState({transform:"scale(1.0)",boxShadow:"none"})},a.getStyle=function(){return{boxShadow:a.state.boxShadow,transition:"transform .2s",transform:a.state.transform,padding:"5px",borderRadius:"50%",margin:"5px",width:"100px",height:"100px",backgroundColor:"rgb(35, 35, 35)",border:"5px solid rgb(20, 20, 20)"}},a.createEvolutionImage=function(e){return o.a.createElement(v.b,{style:{textDecoration:"none"},to:"/pokemon/".concat(e)},o.a.createElement("img",{style:a.getStyle(),onMouseOver:a.onMouseOver,onMouseOut:a.onMouseOut,onTouchStart:a.onMouseOver,onTouchEnd:a.onMouseOut,src:"https://res.cloudinary.com/aldencloud/image/upload/v1584876602/pokemonpng/poke-".concat(e,".png"),alt:"Generic placeholder"}))},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return this.createEvolutionImage(this.props.imageid)}}]),t}(n.Component),T=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).updateComponent=function(e){var t="https://pokeapi.co/api/v2/pokemon/".concat(e),n=m.a.get("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"),o=m.a.get(t);m.a.all([n,o]).then(m.a.spread((function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var o=t[0].data,r=t[1].data,l=r.species;a.setState({pokemonData:o}),a.setState({pokeApiData:r}),m.a.get(l.url).then((function(e){return a.setState({speciesDescription:e.data},console.log(e.data))})),console.log(l,l.url,a.state.speciesDescription)}))).catch((function(e){console.error(e)}))},a.getChipStyle=function(e){switch(e){case"Bug":return"#C3D21F";case"Dark":return"#8E6956";case"Dragon":return"#8774FF";case"Electric":return"#FDE53D";case"Fairy":return"#F9ADFF";case"Fighting":return"#A85643";case"Fire":return"#FA5643";case"Flying":return"#79A4FF";case"Ghost":return"#7873D4";case"Grass":return"#8DD851";case"Ground":return"#EDCC56";case"Ice":return"#96F1FF";case"Normal":return"#BDBDAE";case"Poison":return"#AB5DA2";case"Psychic":return"#F662B1";case"Rock":return"#CDBD72";case"Stell":return"#C4C2DB";case"Water":return"#56AEFF"}},a.createRowCol=function(e,t){return o.a.createElement("h5",null,o.a.createElement(A.a,null,o.a.createElement(B.a,{align:"left"},e),o.a.createElement(B.a,{align:"right"},t)))},a.getDivStyle=function(){return{borderRadius:"12px",paddingTop:"2vh",paddingBottom:"2vh",backgroundColor:a.state.bgColor}},a.getEvolutions=function(e){var t=null===e||void 0===e?void 0:e.prev_evolution,n=null===e||void 0===e?void 0:e.next_evolution;return t?n?o.a.createElement("div",{style:a.getDivStyle()},o.a.createElement("h3",null,"Evolutions"),null===t||void 0===t?void 0:t.map((function(e){var t;return(o.a.createElement(R,{imageid:null===e||void 0===e?void 0:null===(t=e.num)||void 0===t?void 0:t.replace(/^0+/,"")}))})),o.a.createElement(R,{imageid:a.props.match.params.id}),null===n||void 0===n?void 0:n.map((function(e){var t;return(o.a.createElement(R,{imageid:null===e||void 0===e?void 0:null===(t=e.num)||void 0===t?void 0:t.replace(/^0+/,"")}))}))):o.a.createElement("div",{style:a.getDivStyle()},o.a.createElement("h3",null,"Evolutions"),null===t||void 0===t?void 0:t.map((function(e){var t;return(o.a.createElement(R,{imageid:null===e||void 0===e?void 0:null===(t=e.num)||void 0===t?void 0:t.replace(/^0+/,"")}))})),o.a.createElement(R,{imageid:a.props.match.params.id})):n?o.a.createElement("div",{style:a.getDivStyle()},o.a.createElement("h3",null,"Evolutions"),o.a.createElement(R,{imageid:a.props.match.params.id}),null===n||void 0===n?void 0:n.map((function(e){var t;return(o.a.createElement(R,{imageid:null===e||void 0===e?void 0:null===(t=e.num)||void 0===t?void 0:t.replace(/^0+/,"")}))}))):void 0},a.getHr=function(){return o.a.createElement("hr",{style:{backgroundColor:"rgb(25, 25, 25)",border:"2px solid rgb(25, 25, 25)"}})},a.state={pokemonNumber:a.props.match.params.id,pokemonData:{},pokeApiData:{},speciesDescription:{},flavourText:{},dataLoaded:!1,evWidth:"30%",textColor:"#898989",bodyColor:"#252525",mediaColor:"#363636",bgColor:"rgb(25, 25, 25)",border:"5px solid rgb(15, 15, 15)"},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"shouldComponentUpdate",value:function(e){e.match.params.id;return this.props.match.params.id===e.match.params.id||this.updateComponent(e.match.params.id)}},{key:"componentDidMount",value:function(){this.updateComponent(this.props.match.params.id)}},{key:"render",value:function(){var e,t,a,n,r,l,i,c,s,u,d,p,m,v,h,g,b=this;if(null===(e=this.state)||void 0===e?void 0:e.pokemonData){var f=this.state.pokemonData.pokemon;h=null===f||void 0===f?void 0:f.find((function(e){return e.id==b.props.match.params.id}))}else console.log("no data");if(null===(t=this.state)||void 0===t?void 0:t.speciesDescription){var k,y=(null===(k=this.state)||void 0===k?void 0:k.speciesDescription).flavor_text_entries;g=null===y||void 0===y?void 0:y.find((function(e){var t,a;return"en"===(null===e||void 0===e?void 0:null===(t=e.language)||void 0===t?void 0:t.name)&"omega-ruby"===(null===e||void 0===e?void 0:null===(a=e.version)||void 0===a?void 0:a.name)})),console.log("flavourText",g)}return o.a.createElement(E.a,{style:{marginTop:"10vh",color:this.state.textColor}},o.a.createElement(A.a,null,o.a.createElement("img",{width:"50%",className:"mr-auto",src:"https://res.cloudinary.com/aldencloud/image/upload/v1584876602/pokemonpng/poke-".concat(this.props.match.params.id,".png"),alt:"Generic placeholder",style:{margin:"auto"}})),o.a.createElement("div",{style:{margin:"auto"},align:"center"},this.getHr(),o.a.createElement("h1",{align:"center"},null===(a=h)||void 0===a?void 0:a.name),this.getHr(),o.a.createElement("div",null,null===(n=h)||void 0===n?void 0:null===(r=n.type)||void 0===r?void 0:r.map((function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(M.a,{label:e,color:"primary",style:{backgroundColor:b.getChipStyle(e)}})," ")}))),o.a.createElement("br",null),o.a.createElement("h5",{style:{textAlign:"justify"}},null===(l=g)||void 0===l?void 0:l.flavor_text),o.a.createElement("br",null),o.a.createElement("div",{style:{padding:"2vh 5vw 2vh 5vw",border:"5px solid rgb(25, 25, 25)",borderRadius:"12px"}},this.createRowCol("Number :",null===(i=h)||void 0===i?void 0:i.id),this.createRowCol("Height :",null===(c=h)||void 0===c?void 0:c.height),this.createRowCol("Weight :",null===(s=h)||void 0===s?void 0:s.weight),this.createRowCol("Spawn chance :",null===(u=h)||void 0===u?void 0:u.spawn_chance),this.createRowCol("Avg Spawn :",null===(d=h)||void 0===d?void 0:d.avg_spawns),this.createRowCol("Spawn time :",null===(p=h)||void 0===p?void 0:p.spawn_time)),o.a.createElement("br",null),o.a.createElement("div",{style:{backgroundColor:this.state.bgColor,borderRadius:"12px",paddingTop:"2vh",paddingBottom:"2vh"}},o.a.createElement("h3",null,"Weakness"),null===(m=h)||void 0===m?void 0:null===(v=m.weaknesses)||void 0===v?void 0:v.map((function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(M.a,{size:"small",label:e,color:"primary",style:{backgroundColor:b.getChipStyle(e)}})," ")}))),o.a.createElement("br",null),this.getEvolutions(h)))}}]),t}(n.Component),N=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={pokemons:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151],pokemonData:{}},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;m.a.get("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json").then((function(t){return e.setState({pokemonData:t.data})}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(f,null),o.a.createElement(v.a,null,o.a.createElement(h.d,null,o.a.createElement(h.b,{exact:!0,path:"/react-pokedex-carousel",render:function(t){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{style:{marginTop:"120px"}},o.a.createElement(S,{pokemons:e.state.pokemons})))}}),o.a.createElement(h.b,{path:"/pokemon/:id",render:function(e){return o.a.createElement(T,e)}}),o.a.createElement(h.a,{exact:!0,from:"/",to:"/react-pokedex-carousel"}))),o.a.createElement(k,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},47:function(e,t,a){},81:function(e,t,a){e.exports=a(174)}},[[81,1,2]]]);
//# sourceMappingURL=main.36522931.chunk.js.map