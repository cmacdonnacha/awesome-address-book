(this["webpackJsonpawesome-address-book"]=this["webpackJsonpawesome-address-book"]||[]).push([[0],{47:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM0AAADNBAMAAADpkulaAAAAElBMVEXc1KbMx7A/Egb/+dwkQmyV1Oi7WMeAAAAAz0lEQVR42u3WSwrCMBQF0ExcgbgBxbmldQW28/rb/1acqKDSkIEKeT33TR850HBD0/UvGROHw+FwOBwOh8PhcDgcDofzLee0LsuWw+FwOBzODJ1Nm8uew+FwOBzObJzjsrlPG8I5t2WpxmnKPlw1TrD70R/90R/9iX8/+anFCfy+ZWdVi6M/+qM/7kd/KnN26TOLghM4HA6Hw+H81rn0jxyyfwXdc2/gcDjhnUmse13hcDixnLfT+ymsy+4NHA4nvFMaDofD4XA4HA6HE8C5AdnNl/zz8GiBAAAAAElFTkSuQmCC"},55:function(e,t,n){e.exports=n(82)},82:function(e,t,n){"use strict";n.r(t);var a=n(11),i=n(0),o=n.n(i),r=n(18),c=n.n(r);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=n(1),s=n(22),d=n(17),m=n(21),u=n(16),f=n(8),p="#3a529c",g="#1ca9f0",h="#ffffff",x="#ededf7",b="#b1b1b7",C="#f4f5f9",w="#495576",y="640px",E=n(49),_=n(50),v=l.c.img.withConfig({displayName:"Avatar__Image",componentId:"sc-1gddwuf-0"})(["border-radius:50%;height:",";width:",";"],(function(e){return e.size}),(function(e){return e.size})),j=function(e){var t=e.size||"2rem";return o.a.createElement(v,{src:e.src,size:t})},O=n(47),k=n.n(O),N=l.c.nav.withConfig({displayName:"Sidebar__Container",componentId:"sc-10j93j9-0"})(["grid-area:sidebar;background-color:",";display:flex;flex-direction:column;min-width:250px;box-shadow:1px 2px 4px rgba(0,0,0,0.5);@media (max-width:","){position:absolute;height:100%;transition:transform 0.3s ease-in-out;transform:translateX(",");min-width:70%;z-index:2;}"],x,y,(function(e){return e.isSidebarOpen?"0":"-100%"})),S=l.c.ul.withConfig({displayName:"Sidebar__SidebarList",componentId:"sc-10j93j9-1"})(["list-style:none;padding:0;margin-top:0;"]),I=Object(l.c)(s.b).withConfig({displayName:"Sidebar__StyledNavLink",componentId:"sc-10j93j9-2"})(["display:flex;flex:1;flex-direction:row;align-items:center;padding:20px;text-transform:capitalize;text-decoration:none;border-left:solid 5px ",";color:",";font-size:1.3rem;font-weight:bold;@media (min-width:","){font-size:1rem;}&.active{background-color:white;border-left:solid 5px ",";}svg{height:1em;width:1em;margin-right:1rem;}"],x,p,y,g),A=l.c.div.withConfig({displayName:"Sidebar__ProfileContainer",componentId:"sc-10j93j9-3"})(["display:flex;flex-direction:column;align-items:center;padding:15px;background-color:",";color:",";"],p,x),L=l.c.span.withConfig({displayName:"Sidebar__Username",componentId:"sc-10j93j9-4"})(["margin-top:10px;font-size:1rem;"]),z=function(e){return o.a.createElement(N,{isSidebarOpen:e.isSidebarOpen},o.a.createElement(A,null,o.a.createElement(j,{src:k.a,size:"6rem"}),o.a.createElement(L,null,"Cathal Mac Donnacha")),o.a.createElement(S,null,o.a.createElement("li",null,o.a.createElement(I,{to:"/",exact:!0,onClick:e.onLinkClicked},o.a.createElement(E.a,null),"Contacts")),o.a.createElement("li",null,o.a.createElement(I,{to:"/settings",onClick:e.onLinkClicked},o.a.createElement(_.a,null),"Settings"))))},D=l.c.section.withConfig({displayName:"Page__Container",componentId:"adlajs-0"})(["display:flex;flex:1;flex-direction:column;background-color:white;padding:20px;& h1{margin:0 0 20px 0;color:",";}"],w),B=l.c.article.withConfig({displayName:"Page__Content",componentId:"adlajs-1"})(["display:flex;flex:1;flex-direction:column;background-color:white;height:100%;"]),M=function(e){return o.a.createElement(D,null,o.a.createElement("h1",null,e.heading),o.a.createElement(B,null,e.children))},T=n(31),F=n.n(T),H=n(26),U=n(51),R=n(13),q=n(52),P=n.n(q),W=n(9),Y={nationalities:Object(R.a)([{label:"Switzerland",code:"ch",isSelected:!1},{label:"Spain",code:"es",isSelected:!1},{label:"France",code:"fr",isSelected:!1},{label:"Great Britain",code:"gb",isSelected:!1}])},G=Object(m.b)({name:"settings",initialState:Y,reducers:{getSelectedNationalities:function(e,t){e.nationalities=t.payload}}}),X=G.actions.getSelectedNationalities,K=function(e){return e.settings.nationalities},Q=Object(W.a)(K,(function(e){return e.filter((function(e){return e.isSelected})).map((function(e){return e.code}))})),V=G.reducer,J=Object(m.b)({name:"contacts",initialState:{isLoading:!1,hasErrors:!1,contacts:[],searchText:""},reducers:{getContacts:function(e){e.isLoading=!0},getContactsSuccess:function(e,t){e.contacts=[].concat(Object(R.a)(e.contacts),Object(R.a)(t.payload)),e.isLoading=!1,e.hasErrors=!1},getContactsFailure:function(e){e.isLoading=!1,e.hasErrors=!0},resetContactsList:function(e){e.contacts=[]},setSearchText:function(e,t){e.searchText=t.payload}}}),Z=J.actions,$=Z.getContacts,ee=Z.getContactsSuccess,te=Z.getContactsFailure,ne=Z.resetContactsList,ae=Z.setSearchText,ie=function(e){return e.contacts},oe=J.reducer;function re(){return function(){var e=Object(U.a)(F.a.mark((function e(t,n){var a,i,o;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t($()),a=Q(n()),e.prev=2,e.next=5,P.a.get("https://randomuser.me/api?results=".concat(10,"&nat=").concat(a));case 5:i=e.sent,o=i.data.results.map((function(e){return{id:e.login.uuid,name:e.name,username:e.login.username,avatarUrl:e.picture.large,email:e.email,phone:e.phone,cell:e.cell,location:Object(H.a)({},e.location,{street:e.location.street.name})}})),t(ee(o)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),t(te());case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t,n){return e.apply(this,arguments)}}()}var ce=l.c.div.withConfig({displayName:"ContactListItem__Container",componentId:"sc-10wq18x-0"})(["display:flex;flex:1;flex-direction:row;align-items:center;text-decoration:none;background-color:",";margin:10px 0;min-height:4rem;border-radius:5px;padding:15px 15px 15px 25px;"],x),le=l.c.div.withConfig({displayName:"ContactListItem__ContactsDetailsContainer",componentId:"sc-10wq18x-1"})(["display:flex;margin-left:20px;flex-direction:column;"]),se=l.c.span.withConfig({displayName:"ContactListItem__ContactName",componentId:"sc-10wq18x-2"})(["display:flex;flex-direction:column;color:",";font-size:1.3rem;font-weight:bold;margin-bottom:12px;"],w),de=l.c.span.withConfig({displayName:"ContactListItem__ContactUsername",componentId:"sc-10wq18x-3"})(["display:flex;flex-direction:column;color:",";font-weight:bold;font-size:0.8rem;margin-bottom:5px;"],w),me=l.c.span.withConfig({displayName:"ContactListItem__ContactEmail",componentId:"sc-10wq18x-4"})(["display:flex;flex-direction:column;color:",";font-weight:bold;font-size:0.8rem;"],w),ue=function(e){return o.a.createElement(ce,{onClick:e.onClick},o.a.createElement(j,{src:e.contact.avatarUrl,size:"5rem"}),o.a.createElement(le,null,o.a.createElement(se,null,e.contact.name.first," ",e.contact.name.last),o.a.createElement(de,null,e.contact.username),o.a.createElement(me,null,e.contact.email)))},fe=l.c.div.withConfig({displayName:"Loader__Container",componentId:"eapld3-0"})(["display:flex;flex-direction:column;justify-content:center;min-width:100px;min-height:100px;"]),pe=l.c.div.withConfig({displayName:"Loader__DotsContainer",componentId:"eapld3-1"})(["display:flex;flex-direction:row;justify-content:center;min-width:100px;min-height:100px;"]),ge=l.c.span.withConfig({displayName:"Loader__Dot",componentId:"eapld3-2"})(["display:inline-block;width:20px;height:20px;border-radius:100%;background-color:",";margin:35px 5px;&:nth-child(1){animation:bounce 1s ease-in-out infinite;}&:nth-child(2){animation:bounce 1s ease-in-out 0.1s infinite;}&:nth-child(3){animation:bounce 1s ease-in-out 0.2s infinite;}@keyframes bounce{0%,75%,100%{-webkit-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);transform:translateY(0);}25%{-webkit-transform:translateY(-20px);-ms-transform:translateY(-20px);-o-transform:translateY(-20px);transform:translateY(-20px);}}"],g),he=l.c.span.withConfig({displayName:"Loader__Text",componentId:"eapld3-3"})([""]),xe=function(e){var t=e.text?o.a.createElement(he,null,e.text):null;return o.a.createElement(fe,null,o.a.createElement(pe,null,o.a.createElement(ge,null),o.a.createElement(ge,null),o.a.createElement(ge,null)),t)},be=l.c.div.withConfig({displayName:"Banner__Container",componentId:"sc-13flpl7-0"})(["height:30px;background-color:",";display:flex;flex:1;justify-content:center;align-items:center;color:",";"],g,h),Ce=function(e){return o.a.createElement(be,null,e.text)},we=l.c.input.withConfig({displayName:"SearchBar__Input",componentId:"sc-10u3mjb-0"})(["height:35px;border-radius:3px;border:solid 2px ",";padding-left:10px;margin-bottom:20px;&:focus{border-color:",";}"],b,g),ye=function(e){var t=e.value||"",n=Object(i.useState)(t),a=Object(f.a)(n,2),r=a[0],c=a[1];return o.a.createElement(we,{value:r,onChange:function(t){c(t.target.value),e.onSearchTextChanged(t.target.value.trim())},placeholder:e.placeholder})};function Ee(){var e=Object(a.a)(["\n  border-radius: 8px;\n  display: flex;\n  width: calc(100% - 64px);\n  max-width: 450px;\n  background: white;\n  height: 50vh;\n  text-align: center;\n"]);return Ee=function(){return e},e}function _e(){var e=Object(a.a)(["\n  border-radius: 8px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n"]);return _e=function(){return e},e}var ve=document.getElementById("modal")||document.createElement("div"),je=l.c.div(_e()),Oe=l.c.div(Ee()),ke=function(e){var t=document.createElement("div");return Object(i.useEffect)((function(){if(ve)return ve.appendChild(t),function(){ve.removeChild(t)}}),[t]),e.isOpen&&Object(r.createPortal)(o.a.createElement(je,null,o.a.createElement(Oe,null,e.children)),t)},Ne=l.c.button.withConfig({displayName:"Button__Container",componentId:"sc-1ltq5rw-0"})(["font-size:1rem;margin:10px;border:none;border-radius:3px;color:",";background-color:",";cursor:pointer;height:",";"],h,g,(function(e){return e.size?"".concat(e.size,"px"):"40px"})),Se=function(e){return o.a.createElement(Ne,{onClick:e.onClick,size:e.size},e.children)},Ie=n(53),Ae=n(54),Le=l.c.div.withConfig({displayName:"ContactDetailsModal__Container",componentId:"dhns7y-0"})(["display:flex;flex-direction:column;flex:1;background-color:white;border-radius:6px;"]),ze=l.c.header.withConfig({displayName:"ContactDetailsModal__Header",componentId:"dhns7y-1"})(["display:flex;flex-direction:column;flex:2;background-color:",";color:",";align-items:center;justify-content:center;padding:10px;border-radius:5px 5px 0 0;"],p,h),De=l.c.span.withConfig({displayName:"ContactDetailsModal__ContactName",componentId:"dhns7y-2"})(["margin-top:10px;font-size:1.2rem;"]),Be=l.c.main.withConfig({displayName:"ContactDetailsModal__Body",componentId:"dhns7y-3"})(["display:flex;flex-direction:column;flex:3;background-color:",";color:#0000008a;padding:15px;font-size:1rem;align-items:flex-start;overflow-y:auto;"],h),Me=l.c.footer.withConfig({displayName:"ContactDetailsModal__Footer",componentId:"dhns7y-4"})(["display:flex;flex-direction:column;flex:1;background-color:",";justify-content:center;border-radius:0 0 5px 5px;"],h),Te=l.c.section.withConfig({displayName:"ContactDetailsModal__AddressGridContainer",componentId:"dhns7y-5"})(["display:grid;grid-template-rows:1fr 1fr 1fr 1fr;grid-template-columns:0.2fr 2fr;grid-gap:2px;width:100%;margin-bottom:25px;"]),Fe=l.c.section.withConfig({displayName:"ContactDetailsModal__PhoneGridContainer",componentId:"dhns7y-6"})(["display:grid;grid-template-rows:1fr 1fr;grid-template-columns:0.2fr 2fr;grid-gap:2px;width:100%;"]),He=l.c.span.withConfig({displayName:"ContactDetailsModal__Label",componentId:"dhns7y-7"})(["grid-column:2;text-align:left;"]),Ue=function(e){return e.isOpen&&e.contact?o.a.createElement(ke,{isOpen:e.isOpen},o.a.createElement(Le,null,o.a.createElement(ze,null,o.a.createElement(j,{src:e.contact.avatarUrl,size:"7rem"}),o.a.createElement(De,null,e.contact.name.first," ",e.contact.name.last)),o.a.createElement(Be,null,o.a.createElement(Te,null,o.a.createElement(Ie.a,{size:20}),o.a.createElement(He,null,e.contact.location.street,","),o.a.createElement(He,null,e.contact.location.city,","),o.a.createElement(He,null,e.contact.location.state,","),o.a.createElement(He,null,e.contact.location.postcode)),o.a.createElement(Fe,null,o.a.createElement(Ae.a,{size:20}),o.a.createElement(He,null,e.contact.phone),o.a.createElement(He,null,e.contact.cell))),o.a.createElement(Me,null,o.a.createElement(Se,{onClick:e.onClose,label:"close modal please"},"Close")))):null},Re=l.c.ul.withConfig({displayName:"ContactsList__Container",componentId:"lteluh-0"})(["display:flex;flex-direction:column;flex:1;list-style:none;padding:0;overflow-y:auto;"]),qe=l.c.div.withConfig({displayName:"ContactsList__CenteredContainer",componentId:"lteluh-1"})(["display:flex;flex:1;flex-direction:column;justify-content:center;align-items:center;"]),Pe=l.c.ul.withConfig({displayName:"ContactsList__List",componentId:"lteluh-2"})(["display:flex;flex-direction:column;flex:1;list-style:none;padding:0;overflow-y:auto;"]),We=function(){var e=Object(u.c)(ie),t=e.contacts,n=e.isLoading,a=e.hasErrors,r=e.searchText,c=Object(i.useRef)(null),l=Object(u.b)(),s=Object(i.useState)(10),d=Object(f.a)(s,2),m=d[0],p=d[1],g=Object(i.useState)(!1),h=Object(f.a)(g,2),x=h[0],b=h[1],C=Object(i.useState)(null),w=Object(f.a)(C,2),y=w[0],E=w[1];Object(i.useEffect)((function(){0===t.length&&l(re())}),[l,t.length]),Object(i.useEffect)((function(){m>=50||t.length===m&&l(re())}),[l,t.length,m]),Object(i.useEffect)((function(){var e=c.current;if(e){var t=function(){e.offsetHeight+e.scrollTop===e.scrollHeight&&(m>=50||p(m+10))};return e.addEventListener("scroll",t),function(){return e.removeEventListener("scroll",t)}}}),[c,m]);return o.a.createElement(Re,null,o.a.createElement(ye,{value:r,placeholder:"Search...",onSearchTextChanged:function(e){l(ae(e))}}),o.a.createElement(Pe,{ref:c},n&&0===t.length?o.a.createElement(qe,null,o.a.createElement(xe,{text:"Loading contacts..."})):a||!n&&0===t.length?o.a.createElement(qe,null,o.a.createElement("span",null,"Couldn't find contacts \ud83d\ude25")):t.filter((function(e){return"".concat(e.name.first," ").concat(e.name.last).toLowerCase().includes(r.toLowerCase())})).map((function(e,t){return t>=m?null:o.a.createElement("li",{key:e.id},o.a.createElement(ue,{contact:e,onClick:function(){return function(e){E(e),b(!x)}(e)}}))})),m>=50&&o.a.createElement("li",null,o.a.createElement(Ce,{text:"End of users catalog"}))),o.a.createElement(Ue,{isOpen:x,onClose:function(){b(!x),E(null)},contact:y}))},Ye=function(){return o.a.createElement(M,{heading:"Contacts"},o.a.createElement(We,null))},Ge=l.c.div.withConfig({displayName:"NationalitiesSelector__Container",componentId:"xjuxdf-0"})(["display:flex;flex:1;background-color:white;"]),Xe=l.c.ul.withConfig({displayName:"NationalitiesSelector__List",componentId:"xjuxdf-1"})(["margin-top:20px;padding:0;"]),Ke=l.c.li.withConfig({displayName:"NationalitiesSelector__ListItem",componentId:"xjuxdf-2"})(["list-style:none;padding:0;margin:15px 0;"]),Qe=l.c.label.withConfig({displayName:"NationalitiesSelector__Label",componentId:"xjuxdf-3"})(["margin-left:10px;"]),Ve=function(e){return o.a.createElement(Ge,null,o.a.createElement(Xe,null,e.nationalities.map((function(t){return o.a.createElement(Ke,{key:t.code},o.a.createElement("input",{id:t.code,type:"checkbox",checked:t.isSelected,onChange:function(){return function(t){var n=e.nationalities.map((function(e){return e.code!==t.code?e:Object(H.a)({},e,{isSelected:!t.isSelected})}));e.onNationalitiesChanged(Object(R.a)(n))}(t)}}),o.a.createElement(Qe,{htmlFor:t.code},t.label))}))))};function Je(){var e=Object(a.a)(["\n  text-align: center;\n  font-size: 1.5rem;\n  margin-bottom: 20px;\n"]);return Je=function(){return e},e}function Ze(){var e=Object(a.a)(["\n  display: flex;\n"]);return Ze=function(){return e},e}var $e=l.c.p(Ze()),et=l.c.span(Je()),tt=function(){var e=Object(u.b)(),t=Object(u.c)(K),n=Object(i.useState)(t),a=Object(f.a)(n,2),r=a[0],c=a[1],l=Object(i.useState)(!1),s=Object(f.a)(l,2),d=s[0],m=s[1];Object(i.useEffect)((function(){var e=window.setTimeout((function(){m(!1)}),2e3);return function(){return window.clearTimeout(e)}}),[]);return o.a.createElement(M,{heading:"Settings"},o.a.createElement($e,null,"Select nationalities to be included in your address book:"),o.a.createElement(Ve,{nationalities:r,onNationalitiesChanged:function(e){c(Object(R.a)(e))}}),d&&o.a.createElement(et,null,"Settings saved! \ud83d\udc4c"),o.a.createElement(Se,{onClick:function(){e(X(r)),e(ne()),e(re()),m(!0)},size:50},"Save"))},nt=l.c.main.withConfig({displayName:"Routes__Container",componentId:"kfwx58-0"})(["grid-area:content;display:flex;flex:1;margin:10px;overflow-y:hidden;"]),at=function(){return o.a.createElement(nt,null,o.a.createElement(d.c,null,o.a.createElement(d.a,{exact:!0,path:"/"},o.a.createElement(Ye,null)),o.a.createElement(d.a,{path:"/settings"},o.a.createElement(tt,null))))},it=l.c.button.withConfig({displayName:"MenuButton__StyledMenuButton",componentId:"sc-1pzjbc2-0"})(["@media (min-width:","){display:none;}position:absolute;display:flex;flex-direction:column;justify-content:space-around;width:2rem;height:2rem;background:transparent;border:none;cursor:pointer;padding:0;z-index:10;&:focus{outline:none;}div{width:2rem;height:0.25rem;background:",";border-radius:10px;transition:all 0.3s linear;position:relative;transform-origin:1px;:first-child{transform:",";}:nth-child(2){opacity:",";transform:",";}:nth-child(3){transform:",";}}"],y,h,(function(e){return e.isOpen?"rotate(45deg)":"rotate(0)"}),(function(e){return e.isOpen?"0":"1"}),(function(e){return e.isOpen?"translateX(20px)":"translateX(0)"}),(function(e){return e.isOpen?"rotate(-45deg)":"rotate(0)"})),ot=function(e){return o.a.createElement(it,{"aria-label":"Toggle menu","aria-expanded":e.isOpen,isOpen:e.isOpen,onClick:e.onClick},o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null))},rt=l.c.header.withConfig({displayName:"Header__Container",componentId:"isfppc-0"})(["grid-area:header;background-color:#3a529c;display:flex;flex-direction:row;justify-content:flex-start;align-items:center;padding-left:15px;box-shadow:1px 2px 4px rgba(0,0,0,0.5);"]),ct=l.c.h3.withConfig({displayName:"Header__Title",componentId:"isfppc-1"})(["margin-left:2.5em;color:",";@media (min-width:","){margin-left:0.2em;}"],h,y),lt=function(e){return o.a.createElement(rt,null,o.a.createElement(ot,{isOpen:e.isSidebarOpen,onClick:e.onMenuButtonClicked}),o.a.createElement(ct,null,"\ud83d\udcd6 Awesome Address Book"))},st=l.c.div.withConfig({displayName:"Backdrop__Container",componentId:"hwd4vy-0"})(["position:fixed;width:100%;height:100%;top:0;left:0;background:rgba(0,0,0,0.3);z-index:1;"]),dt=function(e){return o.a.createElement(st,{onClick:e.onClick})},mt=l.c.div.withConfig({displayName:"App__Layout",componentId:"sc-1abfors-0"})(["height:100%;display:grid;grid-template-rows:50px 1fr;grid-template-columns:auto 2fr;grid-template-areas:'header header' 'sidebar content';"]);var ut=function(){var e=Object(i.useState)(!1),t=Object(f.a)(e,2),n=t[0],a=t[1],r=function(){a(!n)},c=n?o.a.createElement(dt,{onClick:r}):null;return o.a.createElement(mt,null,o.a.createElement(lt,{isSidebarOpen:n,onMenuButtonClicked:r}),o.a.createElement(z,{isSidebarOpen:n,onLinkClicked:function(){n&&r()}}),c,o.a.createElement(at,null))},ft=n(5),pt=Object(ft.c)({contacts:oe,settings:V});function gt(){var e=Object(a.a)(["\n  html, #root {\n    background-color: ",";\n    height: 100%;\n  }\n\n  body {\n    height: 100%;\n\n    margin: 0;\n    font-family: 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',\n      'Droid Sans', 'Helvetica Neue', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n"]);return gt=function(){return e},e}var ht=Object(m.a)({reducer:pt}),xt=Object(l.b)(gt(),C);c.a.render(o.a.createElement(u.a,{store:ht},o.a.createElement(l.a,{theme:{primary:"#00C068"}},o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{basename:"/awesome-address-book"},o.a.createElement(d.a,{path:"/",component:ut})),o.a.createElement(xt,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[55,1,2]]]);
//# sourceMappingURL=main.8470b8e9.chunk.js.map