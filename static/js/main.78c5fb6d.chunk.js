(this["webpackJsonptic-tac"]=this["webpackJsonptic-tac"]||[]).push([[0],{17:function(e,t,n){e.exports=n.p+"static/media/logo.25bf045c.svg"},18:function(e,t,n){e.exports={Blocks:"Blocks__Blocks__3Jm9s"}},2:function(e,t,n){e.exports={App:"App__App__Mnxqh",Logo:"App__Logo__3DSsS",Header:"App__Header__1Yf--",AppButton:"App__AppButton__3Z0wk",Link:"App__Link__T7nQ2",ScoreKeeper:"App__ScoreKeeper__rp-qo"}},20:function(e,t,n){e.exports={ScoreKeeper:"ScoreKeeper__ScoreKeeper__XQLff"}},23:function(e,t,n){e.exports=n(34)},28:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(4),o=n.n(a),l=(n(28),n(5)),s=n(14),u=n(15),i=n(21),p=n(16),f=n(22),m=n(17),d=n.n(m),k=n(2),b=n.n(k),g=n(8),_=n.n(g),O=function(e){var t=null,n=null,r=!1;return"x"===e.flag?t="X":"o"===e.flag?t="O":(t="",r=!0),n=e.lastcol?r?c.a.createElement("button",{className:_.a.RightMost,onClick:function(){return e.clicked(e.row,e.col)}},t):c.a.createElement("button",{className:_.a.RightMost},t):r?c.a.createElement("button",{onClick:function(){return e.clicked(e.row,e.col)}},t):c.a.createElement("button",null,t),c.a.createElement("span",{className:_.a.Block},n)},h=n(18),y=n.n(h),v=function(e){var t=Object.keys(e.flag),n=t[t.length-1],r=Object.keys(e.flag[n]),a=r[r.length-1],o=Object.keys(e.flag).map((function(t){var r=Object.keys(e.flag[t]).map((function(n){return n===a?c.a.createElement(O,{key:"block"+t+n,flag:e.flag[t][n],row:t,col:n,lastcol:!0,clicked:e.blockClicked}):c.a.createElement(O,{key:"block"+t+n,flag:e.flag[t][n],row:t,col:n,clicked:e.blockClicked})}));return t===n?[r,c.a.createElement("br",{key:"newline"+t})]:[r,c.a.createElement("hr",{key:"newline"+t})]}));return c.a.createElement("div",{className:y.a.Blocks},o)},j=n(7),w=n(20),E=n.n(w),x=function(e){var t=null;return 4===e.score&&(t={color:"green"}),c.a.createElement("strong",{style:t,className:E.a.ScoreKeeper},e.player,": ",e.score)},S=n(9),A=n.n(S),C=function(e){return c.a.createElement("div",{className:A.a.backdrop},c.a.createElement("div",{className:A.a.modal},c.a.createElement("p",null,"And the winner is:"),c.a.createElement("strong",null,e.winner),c.a.createElement("br",null),c.a.createElement("button",{className:A.a.success,onClick:e.playAgain},"Play Again")))},D=function(e){return c.a.createElement("input",{onChange:e.changed,value:e.max,type:"number",max:"10",min:"3",required:!0})};function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var H=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(i.a)(this,Object(p.a)(t).call(this,e))).score_keeper=function(e){return e?n.props.scoreX<4?(n.props.addx(),n.clearFieldHandler()):n.setState({winner:"x"}):n.props.scoreO<4?(n.props.addo(),n.clearFieldHandler()):n.setState({winner:"o"}),null},n.maxscorehandler=function(e){return n.setState({max:e.target.value}),null},n.rowChecker=function(){var e=B({},n.state.flag);Object.keys(e).map((function(t){var n=Object.values(e[t]).reduce((function(e,t){return null!==e&&(e===t&&e)}));return!1!==n?"x"===n?"x":"o"===n?"o":null:null})).map((function(e){return"x"===e?n.score_keeper(!0):"o"===e&&n.score_keeper(!1),null}))},n.colChecker=function(){var e,t=B({},n.state.flag),r=Object.keys(t).length;Object.keys(t).map((function(n){return e=Object.keys(t[n]).length,null}));for(var c=[],a=0;a<e;a++){for(var o="col"+a,l=[],s=0;s<r;s++){var u="row"+s;l=l.concat(t[u][o])}c=c.concat(l.reduce((function(e,t){return e===t&&e})))}c.map((function(e){return"x"===e?n.score_keeper(!0):"o"===e&&n.score_keeper(!1),null}))},n.diagonalChecker=function(){var e,t=B({},n.state.flag),r=[],c=[];Object.keys(t).length;Object.keys(t).map((function(n){return e=Object.keys(t[n]).length,null}));for(var a=0,o=e-1;o>=0;a++,o--){var l="row"+a,s="col"+a,u="col"+o;r=r.concat(t[l][s]),c=c.concat(t[l][u])}r=r.reduce((function(e,t){return e===t&&e})),c=c.reduce((function(e,t){return e===t&&e})),"x"===r?n.score_keeper(!0):"o"===r&&n.score_keeper(!1),"x"===c?n.score_keeper(!0):"o"===c&&n.score_keeper(!1)},n.checkWinner=function(){n.rowChecker(),n.colChecker(),n.diagonalChecker()},n.clearFieldHandler=function(){var e=B({},n.state.flag);Object.keys(e).map((function(t){return Object.keys(e[t]).map((function(n){return e[t][n]=null,e}))})),n.setState({flag:e,winner:null})},n.resetStatHandler=function(){n.clearFieldHandler(),n.setState({turn:!1,winner:null}),n.props.reset()},n.blockClickHandler=function(e,t){var r=B({},n.state.flag);n.state.turn?r[e][t]="o":r[e][t]="x",n.setState((function(e){return{flag:r,turn:!e.turn}})),n.checkWinner();Object.keys(n.state.flag).map((function(e){return Object.values(n.state.flag[e]).map((function(e){return null!==e})).reduce((function(e,t){return!(!e||!t)}))})).reduce((function(e,t){return!(!e||!t)}))&&n.clearFieldHandler()},n.state={turn:!1,winner:null,max:5,flag:{row0:{col0:null,col1:null,col2:null},row1:{col0:null,col1:null,col2:null},row2:{col0:null,col1:null,col2:null}}},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:b.a.App},null!==this.state.winner?c.a.createElement(C,{winner:this.state.winner,playAgain:function(){return e.resetStatHandler()}}):null,c.a.createElement("div",{className:b.a.Header},c.a.createElement("img",{src:d.a,className:b.a.Logo,alt:"logo"}),c.a.createElement(D,{changed:this.maxscorehandler,max:this.state.max}),c.a.createElement("div",{className:b.a.ScoreKeeper},c.a.createElement(x,{score:this.props.scoreX,player:"X"}),"\xa0v/s\xa0",c.a.createElement(x,{score:this.props.scoreO,player:"O"})),c.a.createElement("div",null,c.a.createElement("button",{className:b.a.AppButton,onClick:this.clearFieldHandler},"Clear Fields"),c.a.createElement("button",{className:b.a.AppButton,onClick:this.resetStatHandler},"Reset Stats")),c.a.createElement(v,{flag:this.state.flag,blockClicked:this.blockClickHandler})))}}]),t}(r.Component),N=Object(j.b)((function(e){return{scoreX:e.scoreX,scoreO:e.scoreO}}),(function(e){return{addx:function(){return e({type:"ADD_X"})},addo:function(){return e({type:"ADD_O"})},reset:function(){return e({type:"RESET"})}}}))(H);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var X=n(6);function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var K={scoreX:0,scoreO:0},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_X":return F({},e,{scoreX:e.scoreX+1});case"ADD_O":return F({},e,{scoreO:e.scoreO+1});case"RESET":return F({},e,{scoreX:0,scoreO:0});default:return e}},L=Object(X.b)(R);o.a.render(c.a.createElement(j.a,{store:L},c.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,n){e.exports={Block:"Block__Block__2Tgop",RightMost:"Block__RightMost__n_YjJ"}},9:function(e,t,n){e.exports={backdrop:"Modal__backdrop__oQRaY",modal:"Modal__modal__1pYMt",success:"Modal__success__oK8Fj",danger:"Modal__danger__1bjGW"}}},[[23,1,2]]]);
//# sourceMappingURL=main.78c5fb6d.chunk.js.map