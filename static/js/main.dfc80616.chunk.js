(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{118:function(e,n,t){e.exports=t(260)},260:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(23),o=t(271),c=t(272),l=t(114),u=t(28),s=t(29),m=t(31),f=t(30),d=t(32),h=t(33),p=function(e){for(var n=e.unit,t=e.size,r=e.rows,i=[],o=1;o<r;o++){var c=n*o;i.push(a.a.createElement(h.Line,{points:[c,0,c,t],stroke:"grey",strokeWidth:10,key:o+"v"})),i.push(a.a.createElement(h.Line,{points:[0,c,t,c],stroke:"grey",strokeWidth:10,key:o+"h"}))}return a.a.createElement(h.Layer,null,i)},v=function(e){var n=e.unit,t=e.coordinates,r=e.gameState,i=e.win,o=e.gameOver,c=e.yourTurn,l=e.ownMark,u=e.move,s=t.map(function(e,t){var s=u,m=r[t],f="black";return i&&i.includes(t)&&(f="lightgreen"),(o||!c||m)&&(s=function(){return console.log("Can't make a move now!")}),a.a.createElement(h.Text,{key:t,index:t,x:e[0],y:e[1],fontSize:n,width:n,text:m,fill:f,fontFamily:"Helvetica",align:"center",onClick:function(e){var n=e.target.index;s(n,l)}})});return a.a.createElement(h.Layer,null,s)},b=function(e){function n(e){var t;return Object(u.a)(this,n),(t=Object(m.a)(this,Object(f.a)(n).call(this,e))).state={rows:3,gameState:new Array(9).fill(!1),ownMark:"X",otherMark:"O",gameOver:!1,yourTurn:!0,winner:!1,win:!1},t.move=function(e,n){t.setState(function(r,a){var i=r.gameState,o=r.yourTurn,c=r.gameOver,l=r.winner;o=!o,i.splice(e,1,n);var u=t.winChecker(i);return u&&(l=i[u[0]]),!u&&i.includes(!1)||(c=!0),o||c||t.makeAiMove(i),{gameState:i,yourTurn:o,gameOver:c,win:u||!1,winner:l}})},t.makeAiMove=function(e){var n=t.state.otherMark,r=[];e.forEach(function(e,n){e||r.push(n)});var a=r[t.random(0,r.length)];setTimeout(function(){t.move(a,n)},1e3)},t.random=function(e,n){return e=Math.ceil(e),n=Math.floor(n),Math.floor(Math.random()*(n-e))+e},t.winChecker=function(e){return t.combos.find(function(n){var t=Object(l.a)(n,3),r=t[0],a=t[1],i=t[2];return e[r]===e[a]&&e[r]===e[i]&&e[r]})},t.turingTest=function(){},t.recordGame=function(){},t.combos=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],t}return Object(d.a)(n,e),Object(s.a)(n,[{key:"componentWillMount",value:function(){for(var e=window.innerHeight,n=window.innerWidth,t=e<n?.8*e:.8*n,r=this.state.rows,a=t/r,i=[],o=0;o<r;o++)for(var c=0;c<r;c++)i.push([c*a,o*a]);this.setState({size:t,rows:r,unit:a,coordinates:i})}},{key:"render",value:function(){var e=this.state,n=e.size,t=e.unit,r=e.rows,i=e.coordinates,o=e.gameState,c=e.win,l=e.gameOver,u=e.yourTurn,s=e.ownMark;return a.a.createElement("div",null,a.a.createElement(h.Stage,{width:n,height:n},a.a.createElement(p,{unit:t,rows:r,size:n}),a.a.createElement(v,{unit:t,coordinates:i,gameState:o,win:c,gameOver:l,yourTurn:u,ownMark:s,move:this.move})))}}]),n}(r.Component),g=t(10),w=t(12);function E(){var e=Object(g.a)(["\n        @media (max-width: 800px) {\n            ","\n        }\n    "]);return E=function(){return e},e}var y=function(){return Object(w.a)(E(),w.a.apply(void 0,arguments))};function O(){var e=Object(g.a)(["\n  display: flex;\n  width: 25%;\n"]);return O=function(){return e},e}function x(){var e=Object(g.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  width: 100%;\n  padding: 5px 0;\n  margin: 3px 0;\n  box-sizing: border-box;\n  font-weight: bold;\n"]);return x=function(){return e},e}function j(){var e=Object(g.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  width: 100%;\n  padding: 5px 0;\n  margin: 1px 0;\n  background-color: ",";\n  box-sizing: border-box;\n"]);return j=function(){return e},e}function k(){var e=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 90%;\n  padding: 5px;\n  border: 1px lightgrey solid;\n  justify-content: center;\n"]);return k=function(){return e},e}function M(){var e=Object(g.a)(["\n  display: flex;\n  padding-bottom: 2px;\n  margin: 10px 0 5px 0;\n"]);return M=function(){return e},e}function C(){var e=Object(g.a)(["\n  display: flex;\n"]);return C=function(){return e},e}function T(){var e=Object(g.a)(["\n    width: 100%;\n  "]);return T=function(){return e},e}function S(){var e=Object(g.a)(["\n  display: flex;\n  border: 1px rgb(200,200,200) solid;\n  width: 800px;\n  min-height: 100vh;\n  flex-direction: column;\n  align-items: center;\n  ","\n"]);return S=function(){return e},e}var A=w.b.div(S(),y(T())),z=w.b.h2(C()),D=w.b.h4(M()),L=w.b.div(k()),W=w.b.div(j(),function(e){return e.index%2===1?"rgb(225,225,225)":"rgb(240,240,240)"}),G=w.b.div(x()),P=w.b.span(O()),R=function(e){function n(){return Object(u.a)(this,n),Object(m.a)(this,Object(f.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){var e=this.props.user.email;return a.a.createElement(A,null,a.a.createElement(z,null,e),a.a.createElement(L,null,a.a.createElement(D,null,"MyGames"),a.a.createElement(G,null,a.a.createElement(P,null,"Outcome"),a.a.createElement(P,null,"Guess"),a.a.createElement(P,null,"Guessed Correctly"),a.a.createElement(P,null,"Date")),this.records))}},{key:"records",get:function(){return this.props.user.games.map(function(e,n){return a.a.createElement(W,{key:n,index:n},a.a.createElement(P,null,e.winner?"Won!":"Lost"),a.a.createElement(P,null,'"ROBOT"'),a.a.createElement(P,null,'"N"'),a.a.createElement(P,null,e.createdAt))})}}]),n}(r.Component);R.defaultProps={user:{email:"USER_EMAIL",games:[{winner:!0,createdAt:"02/20/2018",id:"0001"},{winner:!0,createdAt:"02/21/2018",id:"0002"},{winner:!0,createdAt:"02/22/2018",id:"0003"}]}};var B=R,H=function(){return a.a.createElement("div",null,a.a.createElement(c.a,{exact:!0,path:"/",component:b}),a.a.createElement(c.a,{exact:!0,path:"/home",component:b}),a.a.createElement(c.a,{path:"/profile",component:B}))},I=t(107),J=t.n(I),F=t(67),N=t.n(F),U=t(108),X=t.n(U),_=t(266),q=t(104),K=t.n(q),Q=t(106),V=t.n(Q);function Y(){var e=Object(g.a)(["\n    position: absolute;\n    margin-left: ","\n    transition: margin .2s;\n"]);return Y=function(){return e},e}var Z=w.b.div(Y(),function(e){return e.open?"".concat(e.width,"px"):"none"}),$=function(e){return a.a.createElement(Z,e,a.a.createElement(K.a,{onClick:e.toggleDrawer},a.a.createElement(V.a,null)))},ee=function(e){function n(){var e,t;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=Object(m.a)(this,(e=Object(f.a)(n)).call.apply(e,[this].concat(a)))).state={open:!0,width:80},t.toggleDrawer=function(){t.setState(function(e,n){return{open:!e.open}})},t}return Object(d.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement($,{toggleDrawer:this.toggleDrawer,width:this.state.width,open:this.state.open}),a.a.createElement(J.a,{open:this.state.open,width:this.state.width,variant:"persistent"},a.a.createElement("div",{style:{height:"200px",width:"100%",backgroundColor:"salmon"}}),a.a.createElement(X.a,null),a.a.createElement(_.a,{to:"/"},a.a.createElement(N.a,{onClick:this.toggleDrawer},"Play")),a.a.createElement(_.a,{to:"/profile"},a.a.createElement(N.a,{onClick:this.toggleDrawer},"Profile"))))}}]),n}(r.Component);function ne(){var e=Object(g.a)(["\n        width: 100%;\n    "]);return ne=function(){return e},e}function te(){var e=Object(g.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin: auto;\n    width: 80%\n    min-height: 80vh;\n    font-family: 'Roboto', sans-serif;\n    ","\n"]);return te=function(){return e},e}function re(){var e=Object(g.a)(["\n    text-align: center;\n    font-size: 2em;\n    font-family: 'Roboto', sans-serif;\n"]);return re=function(){return e},e}var ae=w.b.header(re()),ie=w.b.div(te(),y(ne())),oe=function(e){return a.a.createElement(ie,null,e.children)},ce=function(e){function n(){return Object(u.a)(this,n),Object(m.a)(this,Object(f.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(ee,null),a.a.createElement(ae,null,"TicTacTuring"),a.a.createElement(oe,null,this.props.children))}}]),n}(r.Component),le=t(113),ue=t(64),se=t(115),me=t(270),fe=new ue.a({link:new se.a({uri:"https://api.graph.cool/simple/v1/cjs5hdfph3n370154h4u587p5"}),cache:new me.a});Object(i.render)(a.a.createElement(le.ApolloProvider,{client:fe},a.a.createElement(o.a,{basename:"/"},a.a.createElement("div",null,a.a.createElement(ce,null,a.a.createElement(H,null))))),document.getElementById("root"))}},[[118,1,2]]]);
//# sourceMappingURL=main.dfc80616.chunk.js.map