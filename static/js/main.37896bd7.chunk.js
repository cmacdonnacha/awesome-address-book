(this["webpackJsonpawesome-address-book"]=this["webpackJsonpawesome-address-book"]||[]).push([[0],{45:function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM0AAADNBAMAAADpkulaAAAAElBMVEXc1KbMx7A/Egb/+dwkQmyV1Oi7WMeAAAAAz0lEQVR42u3WSwrCMBQF0ExcgbgBxbmldQW28/rb/1acqKDSkIEKeT33TR850HBD0/UvGROHw+FwOBwOh8PhcDgcDofzLee0LsuWw+FwOBzODJ1Nm8uew+FwOBzObJzjsrlPG8I5t2WpxmnKPlw1TrD70R/90R/9iX8/+anFCfy+ZWdVi6M/+qM/7kd/KnN26TOLghM4HA6Hw+H81rn0jxyyfwXdc2/gcDjhnUmse13hcDixnLfT+ymsy+4NHA4nvFMaDofD4XA4HA6HE8C5AdnNl/zz8GiBAAAAAElFTkSuQmCC"},51:function(e,n,t){e.exports=t(78)},78:function(e,n,t){"use strict";t.r(n);var a=t(14),i=t(0),o=t.n(i),r=t(19),l=t.n(r);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=t(1),s=t(16),d=t(10),m=t(22),u=t(18),f=t(11),p="#3a529c",g="#1ca9f0",h="#ffffff",x="#ededf7",b="#f4f5f9",w="#495576",E="640px",C=t(47),y=t(48),v=c.c.img.withConfig({displayName:"Avatar__Image",componentId:"sc-1gddwuf-0"})(["border-radius:50%;height:",";width:",";"],(function(e){return e.size}),(function(e){return e.size})),_=function(e){var n=e.size||"2rem";return o.a.createElement(v,{src:e.src,size:n})},k=t(45),O=t.n(k),j=c.c.nav.withConfig({displayName:"Sidebar__Container",componentId:"sc-10j93j9-0"})(["grid-area:sidebar;background-color:",";display:flex;flex-direction:column;min-width:250px;box-shadow:1px 2px 4px rgba(0,0,0,0.5);@media (max-width:","){position:absolute;height:100%;transition:transform 0.3s ease-in-out;transform:translateX(",");min-width:70%;z-index:2;}"],x,E,(function(e){return e.isSidebarOpen?"0":"-100%"})),A=c.c.ul.withConfig({displayName:"Sidebar__SidebarList",componentId:"sc-10j93j9-1"})(["list-style:none;padding:0;margin-top:0;"]),I=Object(c.c)(s.b).withConfig({displayName:"Sidebar__StyledNavLink",componentId:"sc-10j93j9-2"})(["display:flex;flex:1;flex-direction:row;align-items:center;padding:20px;text-transform:capitalize;text-decoration:none;border-left:solid 5px ",";color:",";font-size:1.3rem;font-weight:bold;@media (min-width:","){font-size:1rem;}&.active{background-color:white;border-left:solid 5px ",";}svg{height:1em;width:1em;margin-right:1rem;}"],x,p,E,g),N=c.c.div.withConfig({displayName:"Sidebar__ProfileContainer",componentId:"sc-10j93j9-3"})(["display:flex;flex-direction:column;align-items:center;padding:15px;background-color:",";color:",";"],p,x),L=c.c.span.withConfig({displayName:"Sidebar__Username",componentId:"sc-10j93j9-4"})(["margin-top:10px;font-size:1rem;"]),S=function(e){return o.a.createElement(j,{isSidebarOpen:e.isSidebarOpen},o.a.createElement(N,null,o.a.createElement(_,{src:O.a,size:"6rem"}),o.a.createElement(L,null,"Cathal Mac Donnacha")),o.a.createElement(A,null,o.a.createElement("li",null,o.a.createElement(I,{to:"/",exact:!0,onClick:e.onLinkClicked},o.a.createElement(C.a,null),"Contacts")),o.a.createElement("li",null,o.a.createElement(I,{to:"/settings",onClick:e.onLinkClicked},o.a.createElement(y.a,null),"Settings"))))},z=c.c.section.withConfig({displayName:"Page__Container",componentId:"adlajs-0"})(["display:flex;flex:1;flex-direction:column;background-color:white;padding:20px;& h1{margin:0;color:",";}"],w),B=c.c.article.withConfig({displayName:"Page__Content",componentId:"adlajs-1"})(["display:flex;flex:1;flex-direction:column;background-color:white;height:100%;"]),D=function(e){return o.a.createElement(z,null,o.a.createElement("h1",null,e.heading),o.a.createElement(B,null,e.children))},M=t(28),T=t.n(M),H=t(49),F=t(29),R=t(50),U=t.n(R),W=Object(m.b)({name:"contacts",initialState:{isLoading:!1,hasErrors:!1,contacts:[]},reducers:{getContacts:function(e){e.isLoading=!0},getContactsSuccess:function(e,n){e.contacts=[].concat(Object(F.a)(e.contacts),Object(F.a)(n.payload)),e.isLoading=!1,e.hasErrors=!1},getContactsFailure:function(e){e.isLoading=!1,e.hasErrors=!0}}}),Y=W.actions,q=Y.getContacts,X=Y.getContactsSuccess,K=Y.getContactsFailure,P=function(e){return e.contacts},Q=W.reducer;function V(){return function(){var e=Object(H.a)(T.a.mark((function e(n){var t,a;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(q()),e.prev=1,e.next=4,U.a.get("https://randomuser.me/api?results=".concat(10));case 4:t=e.sent,a=t.data.results.map((function(e){return{id:e.login.uuid,name:e.name,username:e.login.username,avatarUrl:e.picture.large,email:e.email}})),n(X(a)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(K());case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(n){return e.apply(this,arguments)}}()}var G=c.c.div.withConfig({displayName:"ContactListItem__Container",componentId:"sc-10wq18x-0"})(["display:flex;flex:1;flex-direction:row;align-items:center;text-decoration:none;background-color:",";margin:10px 0;min-height:4rem;border-radius:5px;padding:15px 15px 15px 25px;"],x),J=c.c.div.withConfig({displayName:"ContactListItem__ContactsDetailsContainer",componentId:"sc-10wq18x-1"})(["display:flex;margin-left:20px;flex-direction:column;"]),Z=c.c.span.withConfig({displayName:"ContactListItem__ContactName",componentId:"sc-10wq18x-2"})(["display:flex;flex-direction:column;color:",";font-size:1.3rem;font-weight:bold;margin-bottom:12px;"],w),$=c.c.span.withConfig({displayName:"ContactListItem__ContactUsername",componentId:"sc-10wq18x-3"})(["display:flex;flex-direction:column;color:",";font-weight:bold;font-size:0.8rem;margin-bottom:5px;"],w),ee=c.c.span.withConfig({displayName:"ContactListItem__ContactEmail",componentId:"sc-10wq18x-4"})(["display:flex;flex-direction:column;color:",";font-weight:bold;font-size:0.8rem;"],w),ne=function(e){return o.a.createElement(G,null,o.a.createElement(_,{src:e.contact.avatarUrl,size:"5rem"}),o.a.createElement(J,null,o.a.createElement(Z,null,e.contact.name.first," ",e.contact.name.last),o.a.createElement($,null,e.contact.username),o.a.createElement(ee,null,e.contact.email)))},te=c.c.div.withConfig({displayName:"Loader__Container",componentId:"eapld3-0"})(["display:flex;flex-direction:column;justify-content:center;min-width:100px;min-height:100px;"]),ae=c.c.div.withConfig({displayName:"Loader__DotsContainer",componentId:"eapld3-1"})(["display:flex;flex-direction:row;justify-content:center;min-width:100px;min-height:100px;"]),ie=c.c.span.withConfig({displayName:"Loader__Dot",componentId:"eapld3-2"})(["display:inline-block;width:20px;height:20px;border-radius:100%;background-color:",";margin:35px 5px;&:nth-child(1){animation:bounce 1s ease-in-out infinite;}&:nth-child(2){animation:bounce 1s ease-in-out 0.1s infinite;}&:nth-child(3){animation:bounce 1s ease-in-out 0.2s infinite;}@keyframes bounce{0%,75%,100%{-webkit-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);transform:translateY(0);}25%{-webkit-transform:translateY(-20px);-ms-transform:translateY(-20px);-o-transform:translateY(-20px);transform:translateY(-20px);}}"],g),oe=c.c.span.withConfig({displayName:"Loader__Text",componentId:"eapld3-3"})([""]),re=function(e){var n=e.text?o.a.createElement(oe,null,e.text):null;return o.a.createElement(te,null,o.a.createElement(ae,null,o.a.createElement(ie,null),o.a.createElement(ie,null),o.a.createElement(ie,null)),n)},le=c.c.div.withConfig({displayName:"Banner__Container",componentId:"sc-13flpl7-0"})(["height:30px;background-color:",";display:flex;flex:1;justify-content:center;align-items:center;color:",";"],g,h),ce=function(e){return o.a.createElement(le,null,e.text)},se=c.c.input.withConfig({displayName:"SearchBar__Input",componentId:"sc-10u3mjb-0"})(["border:blue 1px solid;"]),de=function(e){var n=Object(i.useState)(""),t=Object(f.a)(n,2),a=t[0],r=t[1];return o.a.createElement(se,{value:a,onChange:function(n){r(n.target.value.trim()),e.onSearchTextChanged(n.target.value.trim())},placeholder:e.placeholder})},me=c.c.div.withConfig({displayName:"ContactsList__CenteredContainer",componentId:"lteluh-0"})(["display:flex;flex:1;flex-direction:column;justify-content:center;align-items:center;"]),ue=c.c.ul.withConfig({displayName:"ContactsList__List",componentId:"lteluh-1"})(["display:flex;flex-direction:column;flex:1;list-style:none;padding:0;overflow-y:auto;"]),fe=c.c.ul.withConfig({displayName:"ContactsList__TempDiv",componentId:"lteluh-2"})(["display:flex;flex-direction:column;flex:1;list-style:none;padding:0;overflow-y:auto;"]),pe=function(){var e,n=Object(u.c)(P),t=n.contacts,a=n.isLoading,r=n.hasErrors,l=Object(i.useRef)(null),c=Object(u.b)(),s=Object(i.useState)(10),d=Object(f.a)(s,2),m=d[0],p=d[1],g=Object(i.useState)(""),h=Object(f.a)(g,2),x=h[0],b=h[1];Object(i.useEffect)((function(){c(V())}),[c]),Object(i.useEffect)((function(){m>=50||t.length===m&&c(V())}),[c,t.length,m]),Object(i.useEffect)((function(){var e=l.current;if(e){var n=function(){e.offsetHeight+e.scrollTop===e.scrollHeight&&(m>=50||p(m+10))};return e.addEventListener("scroll",n),function(){return e.removeEventListener("scroll",n)}}}),[l,m]);return o.a.createElement(fe,null,o.a.createElement("span",null,"Contacts length: ",t.length),o.a.createElement("span",null,"Actually displayed: ",null===(e=l.current)||void 0===e?void 0:e.children.length),o.a.createElement("span",null,"numContactsToDisplay: ",m),o.a.createElement(de,{placeholder:"Search...",onSearchTextChanged:function(e){b(e)}}),o.a.createElement(ue,{ref:l},a&&0===t.length?o.a.createElement(me,null,o.a.createElement(re,{text:"Loading contacts..."})):r||!a&&0===t.length?o.a.createElement(me,null,o.a.createElement("span",null,"Couldn't find contacts \ud83d\ude25")):t.filter((function(e){return"".concat(e.name.first," ").concat(e.name.last).toLowerCase().includes(x.toLowerCase())})).map((function(e,n){return n>=m?null:o.a.createElement("li",{key:e.id},o.a.createElement(ne,{contact:e}))})),m>=50&&o.a.createElement("li",null,o.a.createElement(ce,{text:"End of users catalog"}))))},ge=function(){return o.a.createElement(D,{heading:"Contacts"},o.a.createElement(pe,null))};function he(){var e=Object(a.a)(["\n  display: flex;\n  flex: 1;\n  background-color: white;\n  justify-content: center;\n  align-items: center;\n"]);return he=function(){return e},e}var xe=c.c.p(he()),be=function(){return o.a.createElement(D,{heading:"Settings"},o.a.createElement(xe,null,"This is the settings page"))},we=c.c.main.withConfig({displayName:"Routes__Container",componentId:"kfwx58-0"})(["grid-area:content;display:flex;flex:1;margin:10px;overflow-y:hidden;"]),Ee=function(){return o.a.createElement(we,null,o.a.createElement(d.c,null,o.a.createElement(d.a,{exact:!0,path:"/"},o.a.createElement(ge,null)),o.a.createElement(d.a,{path:"/settings"},o.a.createElement(be,null))))},Ce=c.c.button.withConfig({displayName:"MenuButton__StyledMenuButton",componentId:"sc-1pzjbc2-0"})(["@media (min-width:","){display:none;}position:absolute;display:flex;flex-direction:column;justify-content:space-around;width:2rem;height:2rem;background:transparent;border:none;cursor:pointer;padding:0;z-index:10;&:focus{outline:none;}div{width:2rem;height:0.25rem;background:",";border-radius:10px;transition:all 0.3s linear;position:relative;transform-origin:1px;:first-child{transform:",";}:nth-child(2){opacity:",";transform:",";}:nth-child(3){transform:",";}}"],E,h,(function(e){return e.isOpen?"rotate(45deg)":"rotate(0)"}),(function(e){return e.isOpen?"0":"1"}),(function(e){return e.isOpen?"translateX(20px)":"translateX(0)"}),(function(e){return e.isOpen?"rotate(-45deg)":"rotate(0)"})),ye=function(e){return o.a.createElement(Ce,{"aria-label":"Toggle menu","aria-expanded":e.isOpen,isOpen:e.isOpen,onClick:e.onClick},o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null))},ve=c.c.header.withConfig({displayName:"Header__Container",componentId:"isfppc-0"})(["grid-area:header;background-color:#3a529c;display:flex;flex-direction:row;justify-content:flex-start;align-items:center;padding-left:15px;box-shadow:1px 2px 4px rgba(0,0,0,0.5);"]),_e=c.c.h3.withConfig({displayName:"Header__Title",componentId:"isfppc-1"})(["margin-left:2.5em;color:",";@media (min-width:","){margin-left:0.2em;}"],h,E),ke=function(e){return o.a.createElement(ve,null,o.a.createElement(ye,{isOpen:e.isSidebarOpen,onClick:e.onMenuButtonClicked}),o.a.createElement(_e,null,"Awesome Address Book"))},Oe=c.c.div.withConfig({displayName:"Backdrop__Container",componentId:"hwd4vy-0"})(["position:fixed;width:100%;height:100%;top:0;left:0;background:rgba(0,0,0,0.3);z-index:1;"]),je=function(e){return o.a.createElement(Oe,{onClick:e.onClick})},Ae=c.c.div.withConfig({displayName:"App__Layout",componentId:"sc-1abfors-0"})(["height:100%;display:grid;grid-template-rows:50px 1fr;grid-template-columns:auto 2fr;grid-template-areas:'header header' 'sidebar content';"]);var Ie=function(){var e=Object(i.useState)(!1),n=Object(f.a)(e,2),t=n[0],a=n[1],r=function(){a(!t)},l=t?o.a.createElement(je,{onClick:r}):null;return o.a.createElement(Ae,null,o.a.createElement(ke,{isSidebarOpen:t,onMenuButtonClicked:r}),o.a.createElement(S,{isSidebarOpen:t,onLinkClicked:function(){t&&r()}}),l,o.a.createElement(Ee,null))},Ne=t(5),Le=Object(Ne.c)({contacts:Q});function Se(){var e=Object(a.a)(["\n  html, #root {\n    background-color: ",";\n    height: 100%;\n  }\n\n  body {\n    height: 100%;\n\n    margin: 0;\n    font-family: 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',\n      'Droid Sans', 'Helvetica Neue', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n"]);return Se=function(){return e},e}var ze=Object(m.a)({reducer:Le}),Be=Object(c.b)(Se(),b);l.a.render(o.a.createElement(u.a,{store:ze},o.a.createElement(c.a,{theme:{primary:"#00C068"}},o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{basename:"/awesome-address-book"},o.a.createElement(d.a,{path:"/",component:Ie})),o.a.createElement(Be,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[51,1,2]]]);
//# sourceMappingURL=main.37896bd7.chunk.js.map