(this.webpackJsonpsetudix=this.webpackJsonpsetudix||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},41:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n.n(a),c=n(26),i=n.n(c),s=n(14),o=n(5),u=n(7),l=n.n(u),d=n(12),j=n(10),b=n(18);n(35),n(37);b.a.initializeApp({apiKey:"AIzaSyDLuzL5vHHgqM3C9-Wcad_Wz8x7CoE76Ts",authDomain:"fala-feio.firebaseapp.com",databaseURL:"https://fala-feio-default-rtdb.firebaseio.com",projectId:"fala-feio",storageBucket:"fala-feio.appspot.com",messagingSenderId:"431952397917",appId:"1:431952397917:web:7f67c7c6b66fbfc2ae2fb4"});var h=b.a.auth(),p=b.a.database(),x=n.p+"static/media/illustration.8aeb45a4.svg",O=n.p+"static/media/teste.fe09e322.svg",f=n.p+"static/media/google-icon.0dd78068.svg",m=n(28),v=n(29),g=(n(41),n(1)),k=["isOutlined"];function w(e){var t=e.isOutlined,n=void 0!==t&&t,a=Object(v.a)(e,k);return Object(g.jsx)("button",Object(m.a)({className:"button ".concat(n?"outlined ":"")},a))}n(24);var C=Object(a.createContext)({});function y(e){var t=Object(a.useState)(),n=Object(j.a)(t,2),r=n[0],c=n[1];function i(){return(i=Object(d.a)(l.a.mark((function e(){var t,n,a,r,i,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new b.a.auth.GoogleAuthProvider,e.next=3,h.signInWithPopup(t);case 3:if(!(n=e.sent).user){e.next=9;break}if(a=n.user,r=a.displayName,i=a.photoURL,s=a.uid,r&&i){e.next=8;break}throw new Error("Missing Information from Google Account");case 8:c({id:s,name:r,avatar:i});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){var e=h.onAuthStateChanged((function(e){if(e){var t=e.displayName,n=e.photoURL,a=e.uid;if(!t||!n)throw new Error("Missing Information from Google Account");c({id:a,name:t,avatar:n})}}));return function(){e()}}),[]),Object(g.jsx)(C.Provider,{value:{user:r,signInWithGoogle:function(){return i.apply(this,arguments)}},children:e.children})}function N(){return Object(a.useContext)(C)}function S(){var e=Object(o.f)(),t=N(),n=t.user,r=t.signInWithGoogle,c=Object(a.useState)(""),i=Object(j.a)(c,2),s=i[0],u=i[1];function b(){return(b=Object(d.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n){t.next=3;break}return t.next=3,r();case 3:e.push("/rooms/new");case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(){return(h=Object(d.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),""!==s.trim()){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,p.ref("rooms/".concat(s)).get();case 5:t.sent.exists()||console.log("deu ruim"),e.push("rooms/".concat(s));case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(g.jsxs)("div",{id:"page-auth",children:[Object(g.jsxs)("aside",{children:[Object(g.jsx)("img",{src:x,alt:"Ilustra\xe7\xe3o"}),Object(g.jsx)("strong",{children:"Se tu dix feio"}),Object(g.jsx)("p",{children:"N\xe3o seje tanso e tira suas duvidas sobre tainha"})]}),Object(g.jsx)("main",{children:Object(g.jsxs)("div",{className:"main-content",children:[Object(g.jsx)("img",{src:O,alt:"Fala feio"}),Object(g.jsxs)("button",{onClick:function(){return b.apply(this,arguments)},className:"create-room",children:[Object(g.jsx)("img",{src:f,alt:""}),"Cria sua sala com o Google"]}),Object(g.jsx)("div",{className:"separator",children:"Ou entre em uma sala abaixo"}),Object(g.jsxs)("form",{onSubmit:function(e){return h.apply(this,arguments)},children:[Object(g.jsx)("input",{type:"text",placeholder:"Digite o c\xf3dido da sala",onChange:function(e){return u(e.target.value)},value:s}),Object(g.jsx)(w,{type:"submit",children:"Entrar na sala"})]})]})})]})}function I(){var e=N().user,t=Object(o.f)(),n=Object(a.useState)(""),r=Object(j.a)(n,2),c=r[0],i=r[1];function u(){return(u=Object(d.a)(l.a.mark((function n(a){var r,i;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a.preventDefault(),""!==c.trim()){n.next=3;break}return n.abrupt("return");case 3:return r=p.ref("rooms"),n.next=6,r.push({title:c,authorId:null===e||void 0===e?void 0:e.id,name:null===e||void 0===e?void 0:e.name,photo:null===e||void 0===e?void 0:e.avatar});case 6:i=n.sent,t.push("/rooms/".concat(i.key));case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(g.jsxs)("div",{id:"page-auth",children:[Object(g.jsxs)("aside",{children:[Object(g.jsx)("img",{src:x,alt:"Ilustra\xe7\xe3o"}),Object(g.jsx)("strong",{children:"Oh feio crie salas de Q&A ao-vivo"}),Object(g.jsx)("p",{children:"Tire duvidas sobre tainha online"})]}),Object(g.jsx)("main",{children:Object(g.jsxs)("div",{className:"main-content",children:[Object(g.jsx)("img",{src:null===e||void 0===e?void 0:e.avatar,alt:"Fala feio",className:"photo"}),Object(g.jsx)("h1",{children:null===e||void 0===e?void 0:e.name}),Object(g.jsx)("h2",{children:"Criar uma nova sala"}),Object(g.jsxs)("form",{onSubmit:function(e){return u.apply(this,arguments)},children:[Object(g.jsx)("input",{type:"text",placeholder:"Digite o c\xf3dido da sala",onChange:function(e){return i(e.target.value)},value:c}),Object(g.jsx)(w,{type:"submit",children:"Criar sala"})]}),Object(g.jsxs)("p",{children:["Quer entrar em uma sala existente? ",Object(g.jsx)(s.b,{to:"/",children:"clique aqui"})]})]})})]})}n(50);function q(e){var t=e.content,n=e.author,a=e.children;return Object(g.jsxs)("div",{className:"question",children:[Object(g.jsx)("footer",{children:Object(g.jsxs)("div",{className:"user-info",children:[Object(g.jsx)("img",{src:n.avatar,alt:n.name}),Object(g.jsx)("span",{children:n.name})]})}),Object(g.jsx)("p",{children:t}),Object(g.jsx)("div",{className:"like",children:a})]})}var L=n.p+"static/media/copy.b8f09a77.svg";n(51);function A(e){return Object(g.jsxs)("button",{className:"room-code",onClick:function(){navigator.clipboard.writeText(e.code)},children:[Object(g.jsx)("div",{children:Object(g.jsx)("img",{src:L,alt:"Copy room code"})}),Object(g.jsxs)("span",{children:[" Sala #",e.code]})]})}function E(e){var t=N().user,n=Object(a.useState)([]),r=Object(j.a)(n,2),c=r[0],i=r[1],s=Object(a.useState)(""),o=Object(j.a)(s,2),u=o[0],l=o[1];return Object(a.useEffect)((function(){var n=p.ref("rooms/".concat(e));return n.on("value",(function(e){var n,a=e.val(),r=null!==(n=a.question)&&void 0!==n?n:{},c=Object.entries(r).map((function(e){var n,a,r=Object(j.a)(e,2),c=r[0],i=r[1];return{id:c,content:i.content,author:i.author,isHighlighted:i.isHighlighted,isAnswered:i.isAnswered,likeCount:Object.values(null!==(n=i.likes)&&void 0!==n?n:{}).length,hasLiked:Object.values(null!==(a=i.likes)&&void 0!==a?a:{}).some((function(e){return e.authorId===(null===t||void 0===t?void 0:t.id)}))}}));l(a.title),i(c)})),function(){n.off("value")}}),[e,null===t||void 0===t?void 0:t.id]),{questions:c,title:u}}n(25);function H(){var e=N().user,t=Object(o.g)(),n=Object(a.useState)(""),r=Object(j.a)(n,2),c=r[0],i=r[1],u=t.id,b=E(u),h=b.title,x=b.questions;function f(){return(f=Object(d.a)(l.a.mark((function t(n){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),""!==c.trim()){t.next=3;break}return t.abrupt("return");case 3:if(e){t.next=5;break}throw new Error("N\xe3o taix logado feio");case 5:return a={content:c,author:{name:e.name,avatar:e.avatar},isHighlighted:!1,isAnswered:!1},t.next=8,p.ref("rooms/".concat(u,"/question")).push(a);case 8:i("");case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(){return(m=Object(d.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.ref("rooms/".concat(u,"/question/").concat(n,"/likes")).push({authorId:null===e||void 0===e?void 0:e.id,name:null===e||void 0===e?void 0:e.name,avatar:null===e||void 0===e?void 0:e.avatar});case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(g.jsxs)("div",{id:"page-room",children:[Object(g.jsx)("header",{children:Object(g.jsxs)("div",{className:"content",children:[Object(g.jsx)(s.b,{to:"/",children:Object(g.jsx)("img",{src:O,alt:"Se tu dix"})}),Object(g.jsx)(A,{code:t.id})]})}),Object(g.jsxs)("main",{children:[Object(g.jsxs)("div",{className:"room-title",children:[Object(g.jsxs)("h1",{children:["Sala: ",h]}),x.length>0&&Object(g.jsxs)("span",{children:[x.length," Pergunta(s)"]})]}),Object(g.jsxs)("form",{onSubmit:function(e){return f.apply(this,arguments)},children:[Object(g.jsx)("textarea",{placeholder:"O que voc\xea deseja perguntar?",onChange:function(e){return i(e.target.value)},value:c}),Object(g.jsxs)("div",{className:"form-footer",children:[e?Object(g.jsxs)("div",{className:"user-info",children:[Object(g.jsx)("img",{src:e.avatar,alt:e.name}),Object(g.jsx)("span",{children:e.name})]}):Object(g.jsxs)("span",{children:["Para enviar uma perguntar, ",Object(g.jsx)("button",{children:"fa\xe7a seu long "})]}),Object(g.jsx)(w,{type:"submit",disabled:!e,children:"Enviar pergunta "})]})]}),Object(g.jsx)("div",{className:"question-list",children:x.map((function(e){return Object(g.jsx)(q,{content:e.content,author:e.author,children:Object(g.jsxs)("button",{className:"like-button ".concat(e.hasLiked?"liked":""),type:"button","aria-label":"Marca como gostei",onClick:function(){return function(e){return m.apply(this,arguments)}(e.id)},children:[Object(g.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(g.jsx)("path",{d:"M7 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V13C2 12.4696 2.21071 11.9609 2.58579 11.5858C2.96086 11.2107 3.46957 11 4 11H7M14 9V5C14 4.20435 13.6839 3.44129 13.1213 2.87868C12.5587 2.31607 11.7956 2 11 2L7 11V22H18.28C18.7623 22.0055 19.2304 21.8364 19.5979 21.524C19.9654 21.2116 20.2077 20.7769 20.28 20.3L21.66 11.3C21.7035 11.0134 21.6842 10.7207 21.6033 10.4423C21.5225 10.1638 21.3821 9.90629 21.1919 9.68751C21.0016 9.46873 20.7661 9.29393 20.5016 9.17522C20.2371 9.0565 19.9499 8.99672 19.66 9H14Z",stroke:"#060607",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),e.likeCount>0&&Object(g.jsx)("span",{children:e.likeCount})]})},e.id)}))})]})]})}function D(){var e=Object(o.g)(),t=E(e.id),n=t.title,a=t.questions;return Object(g.jsxs)("div",{id:"page-room",children:[Object(g.jsx)("header",{children:Object(g.jsxs)("div",{className:"content",children:[Object(g.jsx)(s.b,{to:"/",children:Object(g.jsx)("img",{src:O,alt:"Se tu dix"})}),Object(g.jsxs)("div",{children:[Object(g.jsx)(A,{code:e.id}),Object(g.jsx)(w,{isOutlined:!0,children:"Encerra Sala"})]})]})}),Object(g.jsxs)("main",{children:[Object(g.jsxs)("div",{className:"room-title",children:[Object(g.jsx)("h1",{children:n}),a.length>0&&Object(g.jsxs)("span",{children:[a.length," Pergunta(s)"]})]}),Object(g.jsx)("div",{children:a.map((function(e){return Object(g.jsx)(q,{content:e.content,author:e.author},e.id)}))})]})]})}var M=function(){return Object(g.jsx)(s.a,{children:Object(g.jsx)(y,{children:Object(g.jsxs)(o.c,{children:[Object(g.jsx)(o.a,{path:"/",exact:!0,component:S}),Object(g.jsx)(o.a,{path:"/rooms/new",component:I}),Object(g.jsx)(o.a,{path:"/rooms/:id",component:H}),Object(g.jsx)(o.a,{path:"/admin/rooms/:id",component:D})]})})})};n(52);i.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(M,{})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.2f94a275.chunk.js.map