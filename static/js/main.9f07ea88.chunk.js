(this["webpackJsonpawesome-address-book"]=this["webpackJsonpawesome-address-book"]||[]).push([[0],{41:function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM0AAADNBAMAAADpkulaAAAAElBMVEXc1KbMx7A/Egb/+dwkQmyV1Oi7WMeAAAAAz0lEQVR42u3WSwrCMBQF0ExcgbgBxbmldQW28/rb/1acqKDSkIEKeT33TR850HBD0/UvGROHw+FwOBwOh8PhcDgcDofzLee0LsuWw+FwOBzODJ1Nm8uew+FwOBzObJzjsrlPG8I5t2WpxmnKPlw1TrD70R/90R/9iX8/+anFCfy+ZWdVi6M/+qM/7kd/KnN26TOLghM4HA6Hw+H81rn0jxyyfwXdc2/gcDjhnUmse13hcDixnLfT+ymsy+4NHA4nvFMaDofD4XA4HA6HE8C5AdnNl/zz8GiBAAAAAElFTkSuQmCC"},48:function(e,n,t){e.exports=t(75)},75:function(e,n,t){"use strict";t.r(n);var a=t(13),i=t(0),o=t.n(i),r=t(17),c=t.n(r);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=t(1),s=t(16),d=t(10),m=t(19),u=t(15),p=t(47),f="#3a529c",g="#1ca9f0",h="#ffffff",x="#ededf7",b="#f4f5f9",w="#495576",E="640px",y=t(43),C=t(44),k=l.c.img.withConfig({displayName:"Avatar__Image",componentId:"sc-1gddwuf-0"})(["border-radius:50%;height:",";width:",";"],(function(e){return e.size}),(function(e){return e.size})),v=function(e){var n=e.size||"2rem";return o.a.createElement(k,{src:e.src,size:n})},_=t(41),O=t.n(_),j=l.c.nav.withConfig({displayName:"Sidebar__Container",componentId:"sc-10j93j9-0"})(["grid-area:sidebar;background-color:",";display:flex;flex-direction:column;min-width:250px;box-shadow:1px 2px 4px rgba(0,0,0,0.5);@media (max-width:","){position:absolute;height:100%;transition:transform 0.3s ease-in-out;transform:translateX(",");min-width:70%;z-index:2;}"],x,E,(function(e){return e.isSidebarOpen?"0":"-100%"})),A=l.c.ul.withConfig({displayName:"Sidebar__SidebarList",componentId:"sc-10j93j9-1"})(["list-style:none;padding:0;margin-top:0;"]),N=Object(l.c)(s.b).withConfig({displayName:"Sidebar__StyledNavLink",componentId:"sc-10j93j9-2"})(["display:flex;flex:1;flex-direction:row;align-items:center;padding:20px;text-transform:capitalize;text-decoration:none;border-left:solid 5px ",";color:",";font-size:1.3rem;font-weight:bold;@media (min-width:","){font-size:1rem;}&.active{background-color:white;border-left:solid 5px ",";}svg{height:1em;width:1em;margin-right:1rem;}"],x,f,E,g),I=l.c.div.withConfig({displayName:"Sidebar__ProfileContainer",componentId:"sc-10j93j9-3"})(["display:flex;flex-direction:column;align-items:center;padding:15px;background-color:",";color:",";"],f,x),L=l.c.span.withConfig({displayName:"Sidebar__Username",componentId:"sc-10j93j9-4"})(["margin-top:10px;font-size:1rem;"]),S=function(e){return o.a.createElement(j,{isSidebarOpen:e.isSidebarOpen},o.a.createElement(I,null,o.a.createElement(v,{src:O.a,size:"6rem"}),o.a.createElement(L,null,"Cathal Mac Donnacha")),o.a.createElement(A,null,o.a.createElement("li",null,o.a.createElement(N,{to:"/",exact:!0,onClick:e.onLinkClicked},o.a.createElement(y.a,null),"Contacts")),o.a.createElement("li",null,o.a.createElement(N,{to:"/settings",onClick:e.onLinkClicked},o.a.createElement(C.a,null),"Settings"))))},z=t(25),B=t.n(z),D=t(45),M=t(46),H=t.n(M),F=Object(m.b)({name:"contacts",initialState:{isLoading:!1,hasErrors:!1,contacts:[]},reducers:{getContacts:function(e){e.isLoading=!0},getContactsSuccess:function(e,n){e.contacts=n.payload,e.isLoading=!1,e.hasErrors=!1},getContactsFailure:function(e){e.isLoading=!1,e.hasErrors=!0}}}),T=F.actions,R=T.getContacts,W=T.getContactsSuccess,Y=T.getContactsFailure,U=function(e){return e.contacts},X=F.reducer;var q=l.c.section.withConfig({displayName:"Page__Container",componentId:"adlajs-0"})(["display:flex;flex:1;flex-direction:column;background-color:white;padding:20px;& h1{margin:0;color:",";}"],w),K=l.c.article.withConfig({displayName:"Page__Content",componentId:"adlajs-1"})(["display:flex;flex:1;flex-direction:column;background-color:white;height:100%;align-items:center;"]),P=function(e){return o.a.createElement(q,null,o.a.createElement("h1",null,e.heading),o.a.createElement(K,null,e.children))},Q=l.c.div.withConfig({displayName:"ContactListItem__Container",componentId:"sc-10wq18x-0"})(["display:flex;flex:1;flex-direction:row;align-items:center;text-decoration:none;background-color:",";margin:10px 0;min-height:4rem;border-radius:5px;padding:15px 15px 15px 25px;"],x),V=l.c.div.withConfig({displayName:"ContactListItem__ContactsDetailsContainer",componentId:"sc-10wq18x-1"})(["display:flex;margin-left:20px;flex-direction:column;"]),G=l.c.span.withConfig({displayName:"ContactListItem__ContactName",componentId:"sc-10wq18x-2"})(["display:flex;flex-direction:column;color:",";font-size:1.3rem;font-weight:bold;margin-bottom:8px;"],w),J=l.c.span.withConfig({displayName:"ContactListItem__ContactEmail",componentId:"sc-10wq18x-3"})(["display:flex;flex-direction:column;color:",";font-weight:bold;font-size:0.8rem;"],w),Z=function(e){return o.a.createElement(Q,null,o.a.createElement(v,{src:e.contact.avatarUrl,size:"5rem"}),o.a.createElement(V,null,o.a.createElement(G,null,e.contact.name),o.a.createElement(J,null,e.contact.email)))},$=l.c.div.withConfig({displayName:"Loader__Container",componentId:"eapld3-0"})(["display:flex;flex-direction:column;justify-content:center;min-width:100px;min-height:100px;"]),ee=l.c.div.withConfig({displayName:"Loader__DotsContainer",componentId:"eapld3-1"})(["display:flex;flex-direction:row;justify-content:center;min-width:100px;min-height:100px;"]),ne=l.c.span.withConfig({displayName:"Loader__Dot",componentId:"eapld3-2"})(["display:inline-block;width:20px;height:20px;border-radius:100%;background-color:",";margin:35px 5px;&:nth-child(1){animation:bounce 1s ease-in-out infinite;}&:nth-child(2){animation:bounce 1s ease-in-out 0.1s infinite;}&:nth-child(3){animation:bounce 1s ease-in-out 0.2s infinite;}@keyframes bounce{0%,75%,100%{-webkit-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);transform:translateY(0);}25%{-webkit-transform:translateY(-20px);-ms-transform:translateY(-20px);-o-transform:translateY(-20px);transform:translateY(-20px);}}"],g),te=l.c.span.withConfig({displayName:"Loader__Text",componentId:"eapld3-3"})([""]),ae=function(e){var n=e.text?o.a.createElement(te,null,e.text):null;return o.a.createElement($,null,o.a.createElement(ee,null,o.a.createElement(ne,null),o.a.createElement(ne,null),o.a.createElement(ne,null)),n)},ie=l.c.ul.withConfig({displayName:"ContactsList__List",componentId:"lteluh-0"})(["display:flex;flex-direction:column;justify-content:center;flex:1;list-style:none;padding:0;overflow-y:auto;"]),oe=function(){var e=Object(u.c)(U),n=e.contacts,t=e.isLoading,a=e.hasErrors,r=Object(i.useRef)(null);Object(i.useEffect)((function(){var e=r.current;if(e){var n=function(){e.offsetHeight+e.scrollTop===e.scrollHeight&&alert("reached bottom")};return e.addEventListener("scroll",n),function(){return e.removeEventListener("scroll",n)}}}),[r]);return o.a.createElement(ie,{ref:r},t&&0===n.length?o.a.createElement(ae,{text:"Making contacts..."}):a||!t&&0===n.length?o.a.createElement("span",null,"Couldn't find contacts \ud83d\ude25"):n.map((function(e){return o.a.createElement("li",{key:e.id},o.a.createElement(Z,{contact:e}))})))},re=function(){var e=Object(u.b)();return Object(i.useEffect)((function(){e(function(){var e=Object(D.a)(B.a.mark((function e(n){var t;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(R()),e.prev=1,e.next=4,H.a.get("https://my-json-server.typicode.com/cmacdonnacha/mock-rest-endpoints/users");case 4:t=e.sent,n(W(t.data)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),n(Y());case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(n){return e.apply(this,arguments)}}())}),[e]),o.a.createElement(P,{heading:"Contacts"},o.a.createElement(oe,null))};function ce(){var e=Object(a.a)(["\n  display: flex;\n  flex: 1;\n  background-color: white;\n  justify-content: center;\n  align-items: center;\n"]);return ce=function(){return e},e}var le=l.c.p(ce()),se=function(){return o.a.createElement(P,{heading:"Settings"},o.a.createElement(le,null,"This is the settings page"))},de=l.c.main.withConfig({displayName:"Routes__Container",componentId:"kfwx58-0"})(["grid-area:content;display:flex;flex:1;margin:10px;overflow-y:hidden;"]),me=function(){return o.a.createElement(de,null,o.a.createElement(d.c,null,o.a.createElement(d.a,{exact:!0,path:"/"},o.a.createElement(re,null)),o.a.createElement(d.a,{path:"/settings"},o.a.createElement(se,null))))},ue=l.c.button.withConfig({displayName:"MenuButton__StyledMenuButton",componentId:"sc-1pzjbc2-0"})(["@media (min-width:","){display:none;}position:absolute;display:flex;flex-direction:column;justify-content:space-around;width:2rem;height:2rem;background:transparent;border:none;cursor:pointer;padding:0;z-index:10;&:focus{outline:none;}div{width:2rem;height:0.25rem;background:",";border-radius:10px;transition:all 0.3s linear;position:relative;transform-origin:1px;:first-child{transform:",";}:nth-child(2){opacity:",";transform:",";}:nth-child(3){transform:",";}}"],E,h,(function(e){return e.isOpen?"rotate(45deg)":"rotate(0)"}),(function(e){return e.isOpen?"0":"1"}),(function(e){return e.isOpen?"translateX(20px)":"translateX(0)"}),(function(e){return e.isOpen?"rotate(-45deg)":"rotate(0)"})),pe=function(e){return o.a.createElement(ue,{"aria-label":"Toggle menu","aria-expanded":e.isOpen,isOpen:e.isOpen,onClick:e.onClick},o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null))},fe=l.c.header.withConfig({displayName:"Header__Container",componentId:"isfppc-0"})(["grid-area:header;background-color:#3a529c;display:flex;flex-direction:row;justify-content:flex-start;align-items:center;padding-left:15px;box-shadow:1px 2px 4px rgba(0,0,0,0.5);"]),ge=l.c.h3.withConfig({displayName:"Header__Title",componentId:"isfppc-1"})(["margin-left:2.5em;color:",";@media (min-width:","){margin-left:0.2em;}"],h,E),he=function(e){return o.a.createElement(fe,null,o.a.createElement(pe,{isOpen:e.isSidebarOpen,onClick:e.onMenuButtonClicked}),o.a.createElement(ge,null,"Awesome Address Book"))},xe=l.c.div.withConfig({displayName:"Backdrop__Container",componentId:"hwd4vy-0"})(["position:fixed;width:100%;height:100%;top:0;left:0;background:rgba(0,0,0,0.3);z-index:1;"]),be=function(e){return o.a.createElement(xe,{onClick:e.onClick})},we=l.c.div.withConfig({displayName:"App__Layout",componentId:"sc-1abfors-0"})(["height:100vh;display:grid;grid-template-rows:50px 1fr;grid-template-columns:auto 2fr;grid-template-areas:'header header' 'sidebar content';"]);var Ee=function(){var e=Object(i.useState)(!1),n=Object(p.a)(e,2),t=n[0],a=n[1],r=function(){a(!t)},c=t?o.a.createElement(be,{onClick:r}):null;return o.a.createElement(we,null,o.a.createElement(he,{isSidebarOpen:t,onMenuButtonClicked:r}),o.a.createElement(S,{isSidebarOpen:t,onLinkClicked:function(){t&&r()}}),c,o.a.createElement(me,null))},ye=t(5),Ce=Object(ye.c)({contacts:X});function ke(){var e=Object(a.a)(["\n  html, #root {\n    background-color: ",";\n  }\n\n  body {\n    margin: 0;\n    font-family: 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',\n      'Droid Sans', 'Helvetica Neue', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n"]);return ke=function(){return e},e}var ve=Object(m.a)({reducer:Ce}),_e=Object(l.b)(ke(),b);c.a.render(o.a.createElement(u.a,{store:ve},o.a.createElement(l.a,{theme:{primary:"#00C068"}},o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{basename:"/awesome-address-book"},o.a.createElement(d.a,{path:"/",component:Ee})),o.a.createElement(_e,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[48,1,2]]]);
//# sourceMappingURL=main.9f07ea88.chunk.js.map