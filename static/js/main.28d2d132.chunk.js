(this["webpackJsonpawesome-address-book"]=this["webpackJsonpawesome-address-book"]||[]).push([[0],{47:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM0AAADNBAMAAADpkulaAAAAElBMVEXc1KbMx7A/Egb/+dwkQmyV1Oi7WMeAAAAAz0lEQVR42u3WSwrCMBQF0ExcgbgBxbmldQW28/rb/1acqKDSkIEKeT33TR850HBD0/UvGROHw+FwOBwOh8PhcDgcDofzLee0LsuWw+FwOBzODJ1Nm8uew+FwOBzObJzjsrlPG8I5t2WpxmnKPlw1TrD70R/90R/9iX8/+anFCfy+ZWdVi6M/+qM/7kd/KnN26TOLghM4HA6Hw+H81rn0jxyyfwXdc2/gcDjhnUmse13hcDixnLfT+ymsy+4NHA4nvFMaDofD4XA4HA6HE8C5AdnNl/zz8GiBAAAAAElFTkSuQmCC"},55:function(e,t,n){e.exports=n(82)},82:function(e,t,n){"use strict";n.r(t);var a=n(8),i=n(0),o=n.n(i),r=n(18),l=n.n(r);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=n(1),s=n(22),d=n(17),m=n(21),u=n(16),p=n(9),f="#3a529c",g="#1ca9f0",h="#ffffff",b="#ededf7",x="#e3e3ea",w="#b1b1b7",C="#f4f5f9",y="#495576",E="640px",v=n(49),_=n(50),j=c.b.img.withConfig({displayName:"Avatar__Image",componentId:"sc-1gddwuf-0"})(["border-radius:50%;min-height:",";width:",";"],(function(e){return e.size}),(function(e){return e.size})),O=function(e){var t=e.size||"2rem";return o.a.createElement(j,{src:e.src,size:t,alt:e.alt})},k=n(47),N=n.n(k),S=c.b.nav.withConfig({displayName:"Sidebar__Container",componentId:"sc-10j93j9-0"})(["grid-area:sidebar;background-color:",";display:flex;flex-direction:column;min-width:250px;box-shadow:1px 2px 4px rgba(0,0,0,0.5);@media (max-width:","){position:absolute;height:100%;transition:transform 0.3s ease-in-out;transform:translateX(",");min-width:70%;z-index:2;}"],b,E,(function(e){return e.isSidebarOpen?"0":"-100%"})),I=c.b.ul.withConfig({displayName:"Sidebar__SidebarList",componentId:"sc-10j93j9-1"})(["list-style:none;padding:0;margin-top:0;"]),L=Object(c.b)(s.b).withConfig({displayName:"Sidebar__StyledNavLink",componentId:"sc-10j93j9-2"})(["display:flex;flex:1;flex-direction:row;align-items:center;padding:20px;text-transform:capitalize;text-decoration:none;border-left:solid 5px ",";color:",";font-size:1.3rem;font-weight:bold;@media (min-width:","){font-size:1rem;}&.active{background-color:white;border-left:solid 5px ",";}svg{height:1em;width:1em;margin-right:1rem;}"],b,f,E,g),A=c.b.div.withConfig({displayName:"Sidebar__ProfileContainer",componentId:"sc-10j93j9-3"})(["display:flex;flex-direction:column;align-items:center;padding:15px;background-color:",";color:",";"],f,b),z=c.b.span.withConfig({displayName:"Sidebar__Username",componentId:"sc-10j93j9-4"})(["margin-top:10px;font-size:1rem;"]),D=function(e){return o.a.createElement(S,{isSidebarOpen:e.isSidebarOpen},o.a.createElement(A,null,o.a.createElement(O,{alt:"User Profile Image",src:N.a,size:"6rem"}),o.a.createElement(z,null,"Cathal Mac Donnacha")),o.a.createElement(I,null,o.a.createElement("li",null,o.a.createElement(L,{to:"/",exact:!0,onClick:e.onLinkClicked},o.a.createElement(v.a,null),"Contacts")),o.a.createElement("li",null,o.a.createElement(L,{to:"/settings",onClick:e.onLinkClicked},o.a.createElement(_.a,null),"Settings"))))},B=c.b.section.withConfig({displayName:"Page__Container",componentId:"adlajs-0"})(["display:flex;flex:1;flex-direction:column;background-color:white;padding:20px;overflow:hidden;& h1{margin:0 0 20px 0;color:",";}"],y),M=c.b.article.withConfig({displayName:"Page__Content",componentId:"adlajs-1"})(["display:flex;flex:1;flex-direction:column;background-color:white;height:100%;"]),T=function(e){return o.a.createElement(B,null,o.a.createElement("h1",null,e.heading),o.a.createElement(M,null,e.children))},F=n(31),H=n.n(F),U=n(26),P=n(51),R=n(13),q=n(52),W=n.n(q),Y=n(10),G={nationalities:Object(R.a)([{label:"Switzerland",code:"ch",isSelected:!1},{label:"Spain",code:"es",isSelected:!1},{label:"France",code:"fr",isSelected:!1},{label:"Great Britain",code:"gb",isSelected:!1}])},X=Object(m.b)({name:"settings",initialState:G,reducers:{getSelectedNationalities:function(e,t){e.nationalities=t.payload}}}),K=X.actions.getSelectedNationalities,Q=function(e){return e.settings.nationalities},V=Object(Y.a)(Q,(function(e){return e.filter((function(e){return e.isSelected})).map((function(e){return e.code}))})),J=X.reducer,Z=Object(m.b)({name:"contacts",initialState:{isLoading:!1,hasErrors:!1,contacts:[],searchText:""},reducers:{getContacts:function(e){e.isLoading=!0},getContactsSuccess:function(e,t){e.contacts=[].concat(Object(R.a)(e.contacts),Object(R.a)(t.payload)),e.isLoading=!1,e.hasErrors=!1},getContactsFailure:function(e){e.isLoading=!1,e.hasErrors=!0},resetContactsList:function(e){e.contacts=[]},setSearchText:function(e,t){e.searchText=t.payload}}}),$=Z.actions,ee=$.getContacts,te=$.getContactsSuccess,ne=$.getContactsFailure,ae=$.resetContactsList,ie=$.setSearchText,oe=function(e){return e.contacts},re=Z.reducer;function le(){return function(){var e=Object(P.a)(H.a.mark((function e(t,n){var a,i,o;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(ee()),a=V(n()),e.prev=2,e.next=5,W.a.get("https://randomuser.me/api?results=".concat(50,"&nat=").concat(a));case 5:i=e.sent,o=i.data.results.map((function(e){return{id:e.login.uuid,name:e.name,username:e.login.username,avatarUrl:e.picture.large,email:e.email,phone:e.phone,cell:e.cell,location:Object(U.a)({},e.location,{street:e.location.street.name})}})),t(te(o)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),t(ne());case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t,n){return e.apply(this,arguments)}}()}var ce=c.b.div.withConfig({displayName:"ContactListItem__Container",componentId:"sc-10wq18x-0"})(["display:flex;flex:1;flex-direction:row;align-items:center;text-decoration:none;background-color:",";min-height:4rem;border-radius:5px;padding:15px 15px 15px 25px;cursor:pointer;box-shadow:0 11px 13px -6px rgba(135,142,192,0.15);transition:0.2s;&:hover{background-color:",";box-shadow:0 7px 18px 4px rgba(135,142,192,0.15);}"],b,x),se=c.b.div.withConfig({displayName:"ContactListItem__ContactsDetailsContainer",componentId:"sc-10wq18x-1"})(["display:flex;margin-left:20px;flex-direction:column;min-width:0;& span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}"]),de=c.b.span.withConfig({displayName:"ContactListItem__ContactName",componentId:"sc-10wq18x-2"})(["color:",";font-size:1.3rem;font-weight:bold;margin-bottom:12px;"],y),me=c.b.span.withConfig({displayName:"ContactListItem__ContactUsername",componentId:"sc-10wq18x-3"})(["color:",";font-weight:bold;font-size:0.8rem;margin-bottom:8px;"],y),ue=c.b.span.withConfig({displayName:"ContactListItem__ContactEmail",componentId:"sc-10wq18x-4"})(["color:",";font-weight:bold;font-size:0.8rem;"],y),pe=function(e){return o.a.createElement(ce,{onClick:e.onClick},o.a.createElement(O,{alt:"Contact Avatar",src:e.contact.avatarUrl,size:"5rem"}),o.a.createElement(se,null,o.a.createElement(de,null,e.contact.name.first," ",e.contact.name.last),o.a.createElement(me,null,e.contact.username),o.a.createElement(ue,null,e.contact.email)))},fe=c.b.div.withConfig({displayName:"Loader__Container",componentId:"eapld3-0"})(["display:flex;flex-direction:column;justify-content:center;min-width:100px;min-height:100px;"]),ge=c.b.div.withConfig({displayName:"Loader__DotsContainer",componentId:"eapld3-1"})(["display:flex;flex-direction:row;justify-content:center;min-width:100px;min-height:100px;"]),he=c.b.span.withConfig({displayName:"Loader__Dot",componentId:"eapld3-2"})(["display:inline-block;width:20px;height:20px;border-radius:100%;background-color:",";margin:35px 5px;&:nth-child(1){animation:bounce 1s ease-in-out infinite;}&:nth-child(2){animation:bounce 1s ease-in-out 0.1s infinite;}&:nth-child(3){animation:bounce 1s ease-in-out 0.2s infinite;}@keyframes bounce{0%,75%,100%{-webkit-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);transform:translateY(0);}25%{-webkit-transform:translateY(-20px);-ms-transform:translateY(-20px);-o-transform:translateY(-20px);transform:translateY(-20px);}}"],g),be=c.b.span.withConfig({displayName:"Loader__LoadingText",componentId:"eapld3-3"})(["font-size:1.3rem;"]),xe=function(e){var t=e.text?o.a.createElement(be,null,e.text):null;return o.a.createElement(fe,null,o.a.createElement(ge,null,o.a.createElement(he,null),o.a.createElement(he,null),o.a.createElement(he,null)),t)},we=c.b.div.withConfig({displayName:"Banner__Container",componentId:"sc-13flpl7-0"})(["height:30px;background-color:",";display:flex;flex:1;justify-content:center;align-items:center;color:",";"],g,h),Ce=function(e){return o.a.createElement(we,null,e.text)},ye=c.b.input.withConfig({displayName:"SearchBar__Input",componentId:"sc-10u3mjb-0"})(["height:35px;border-radius:3px;border:solid 2px ",";padding-left:10px;margin-bottom:20px;box-shadow:0 11px 13px -6px rgba(135,142,192,0.15);&:focus{border-color:",";}"],w,g),Ee=function(e){var t=e.value||"",n=Object(i.useState)(t),a=Object(p.a)(n,2),r=a[0],l=a[1];return o.a.createElement(ye,{value:r,onChange:function(t){l(t.target.value),e.onSearchTextChanged(t.target.value)},placeholder:e.placeholder,"aria-label":e.ariaLabel})};function ve(){var e=Object(a.a)(["\n  border-radius: 8px;\n  display: flex;\n  width: calc(100% - 64px);\n  max-width: 450px;\n  background: white;\n  height: 50vh;\n  text-align: center;\n"]);return ve=function(){return e},e}function _e(){var e=Object(a.a)(["\n  border-radius: 8px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n"]);return _e=function(){return e},e}var je=document.getElementById("modal")||document.createElement("div"),Oe=c.b.div(_e()),ke=c.b.div(ve()),Ne=function(e){var t=document.createElement("div");return Object(i.useEffect)((function(){if(je)return je.appendChild(t),function(){je.removeChild(t)}}),[t]),e.isOpen&&Object(r.createPortal)(o.a.createElement(Oe,null,o.a.createElement(ke,null,e.children)),t)},Se=c.b.button.withConfig({displayName:"Button__Container",componentId:"sc-1ltq5rw-0"})(["font-size:1rem;margin:10px;border:none;border-radius:3px;color:",";background-color:",";cursor:pointer;height:",";"],h,g,(function(e){return e.size?"".concat(e.size,"px"):"40px"})),Ie=function(e){return o.a.createElement(Se,{onClick:e.onClick,size:e.size},e.children)},Le=n(53),Ae=n(54),ze=c.b.div.withConfig({displayName:"ContactDetailsModal__Container",componentId:"dhns7y-0"})(["display:flex;flex-direction:column;flex:1;background-color:white;border-radius:6px;"]),De=c.b.header.withConfig({displayName:"ContactDetailsModal__Header",componentId:"dhns7y-1"})(["display:flex;flex-direction:column;flex:2;background-color:",";color:",";align-items:center;justify-content:center;padding:10px;border-radius:5px 5px 0 0;"],f,h),Be=c.b.span.withConfig({displayName:"ContactDetailsModal__ContactName",componentId:"dhns7y-2"})(["margin-top:10px;font-size:1.2rem;"]),Me=c.b.main.withConfig({displayName:"ContactDetailsModal__Body",componentId:"dhns7y-3"})(["display:flex;flex-direction:column;flex:3;background-color:",";color:#0000008a;padding:15px;font-size:1rem;align-items:flex-start;overflow-y:auto;"],h),Te=c.b.footer.withConfig({displayName:"ContactDetailsModal__Footer",componentId:"dhns7y-4"})(["display:flex;flex-direction:column;flex:1;background-color:",";justify-content:center;border-radius:0 0 5px 5px;"],h),Fe=c.b.section.withConfig({displayName:"ContactDetailsModal__AddressGridContainer",componentId:"dhns7y-5"})(["display:grid;grid-template-rows:1fr 1fr 1fr 1fr;grid-template-columns:0.2fr 2fr;grid-gap:2px;width:100%;margin-bottom:25px;"]),He=c.b.section.withConfig({displayName:"ContactDetailsModal__PhoneGridContainer",componentId:"dhns7y-6"})(["display:grid;grid-template-rows:1fr 1fr;grid-template-columns:0.2fr 2fr;grid-gap:2px;width:100%;"]),Ue=c.b.span.withConfig({displayName:"ContactDetailsModal__Label",componentId:"dhns7y-7"})(["grid-column:2;text-align:left;"]),Pe=function(e){return e.isOpen&&e.contact?o.a.createElement(Ne,{isOpen:e.isOpen},o.a.createElement(ze,null,o.a.createElement(De,null,o.a.createElement(O,{src:e.contact.avatarUrl,size:"7rem"}),o.a.createElement(Be,null,e.contact.name.first," ",e.contact.name.last)),o.a.createElement(Me,null,o.a.createElement(Fe,null,o.a.createElement(Le.a,{size:20}),o.a.createElement(Ue,null,e.contact.location.street,","),o.a.createElement(Ue,null,e.contact.location.city,","),o.a.createElement(Ue,null,e.contact.location.state,","),o.a.createElement(Ue,null,e.contact.location.postcode)),o.a.createElement(He,null,o.a.createElement(Ae.a,{size:20}),o.a.createElement(Ue,null,e.contact.phone),o.a.createElement(Ue,null,e.contact.cell))),o.a.createElement(Te,null,o.a.createElement(Ie,{onClick:e.onClose},"Close")))):null},Re=c.b.div.withConfig({displayName:"ContactsList__Container",componentId:"lteluh-0"})(["display:flex;flex-direction:column;flex:1;list-style:none;padding:0;overflow-y:auto;"]),qe=c.b.div.withConfig({displayName:"ContactsList__CenteredContainer",componentId:"lteluh-1"})(["display:flex;flex:1;flex-direction:column;justify-content:center;align-items:center;"]),We=c.b.ul.withConfig({displayName:"ContactsList__List",componentId:"lteluh-2"})(["display:flex;flex-direction:column;flex:1;list-style:none;padding:0;overflow-y:auto;"]),Ye=c.b.li.withConfig({displayName:"ContactsList__ListItem",componentId:"lteluh-3"})(["margin:10px 20px;"]),Ge=function(){var e=Object(u.b)(),t=Object(i.useState)(50),n=Object(p.a)(t,2),a=n[0],r=n[1],l=Object(i.useState)(!1),c=Object(p.a)(l,2),s=c[0],d=c[1],m=Object(i.useState)(null),f=Object(p.a)(m,2),g=f[0],h=f[1],b=Object(u.c)(oe),x=b.contacts,w=b.isLoading,C=b.hasErrors,y=b.searchText,E=Object(i.useRef)(null);Object(i.useEffect)((function(){0===x.length&&e(le())}),[e,x.length]),Object(i.useEffect)((function(){a>=1e3||x.length===a&&e(le())}),[e,x.length,a]),Object(i.useEffect)((function(){var e=E.current;if(e){var t=function(){e.offsetHeight+e.scrollTop===e.scrollHeight&&(a>=1e3||r(a+50))};return e.addEventListener("scroll",t),function(){return e.removeEventListener("scroll",t)}}}),[E,a]);return o.a.createElement(Re,null,o.a.createElement(Ee,{value:y,placeholder:"Search...",onSearchTextChanged:function(t){e(ie(t))},ariaLabel:"Search for contacts"}),o.a.createElement(We,{ref:E},w&&0===x.length?o.a.createElement(qe,null,o.a.createElement(xe,{text:"Loading contacts..."})):C||!w&&0===x.length?o.a.createElement(qe,null,o.a.createElement("span",null,"Couldn't find contacts \ud83d\ude25")):x.filter((function(e){return"".concat(e.name.first," ").concat(e.name.last).toLowerCase().includes(y.toLowerCase())})).map((function(e,t){return t>=a?null:o.a.createElement(Ye,{key:e.id},o.a.createElement(pe,{contact:e,onClick:function(){return function(e){h(e),d(!s)}(e)}}))})),a>=1e3&&o.a.createElement("li",null,o.a.createElement(Ce,{text:"End of users catalog"}))),o.a.createElement(Pe,{isOpen:s,onClose:function(){d(!s),h(null)},contact:g}))},Xe=function(){return o.a.createElement(T,{heading:"Contacts"},o.a.createElement(Ge,null))},Ke=c.b.div.withConfig({displayName:"NationalitiesSelector__Container",componentId:"xjuxdf-0"})(["display:flex;background-color:white;"]),Qe=c.b.ul.withConfig({displayName:"NationalitiesSelector__List",componentId:"xjuxdf-1"})(["margin-top:20px;padding:0;"]),Ve=c.b.li.withConfig({displayName:"NationalitiesSelector__ListItem",componentId:"xjuxdf-2"})(["list-style:none;padding:0;margin:15px 0;"]),Je=c.b.label.withConfig({displayName:"NationalitiesSelector__Label",componentId:"xjuxdf-3"})(["margin-left:10px;"]),Ze=function(e){return o.a.createElement(Ke,null,o.a.createElement(Qe,null,e.nationalities.map((function(t){return o.a.createElement(Ve,{key:t.code},o.a.createElement("input",{id:t.code,type:"checkbox",checked:t.isSelected,onChange:function(){return function(t){var n=e.nationalities.map((function(e){return e.code!==t.code?e:Object(U.a)({},e,{isSelected:!t.isSelected})}));e.onNationalitiesChanged(Object(R.a)(n))}(t)}}),o.a.createElement(Je,{htmlFor:t.code},t.label))}))))};function $e(){var e=Object(a.a)(["\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n  max-height: 50px;\n\n  & button {\n    flex: 1;\n  }\n\n  @media (min-width: ",") {\n    max-width: 120px;\n  }\n"]);return $e=function(){return e},e}function et(){var e=Object(a.a)(["\n  margin-top: 10px;\n  text-align: left;\n  font-size: 1.5rem;\n  font-weight: bold;\n  margin: 40px 0 0 10px;\n"]);return et=function(){return e},e}function tt(){var e=Object(a.a)(["\n  display: flex;\n"]);return tt=function(){return e},e}var nt=c.b.p(tt()),at=c.b.span(et()),it=c.b.footer($e(),E),ot=function(){var e=Object(u.b)(),t=Object(u.c)(Q),n=Object(i.useState)(t),a=Object(p.a)(n,2),r=a[0],l=a[1],c=Object(i.useState)(!1),s=Object(p.a)(c,2),d=s[0],m=s[1];return o.a.createElement(T,{heading:"Settings"},o.a.createElement(nt,null,"Select nationalities to be included in your address book:"),o.a.createElement(Ze,{nationalities:r,onNationalitiesChanged:function(e){l(Object(R.a)(e)),m(!1)}}),o.a.createElement(it,null,o.a.createElement(Ie,{onClick:function(){e(K(r)),e(ae()),e(le()),m(!0)},size:40},"Save")),d&&o.a.createElement(at,null,"Settings saved! \ud83d\udc4c"))},rt=c.b.main.withConfig({displayName:"Routes__Container",componentId:"kfwx58-0"})(["grid-area:content;display:flex;flex:1;margin:10px;overflow-y:hidden;"]),lt=function(){return o.a.createElement(rt,null,o.a.createElement(d.c,null,o.a.createElement(d.a,{exact:!0,path:"/"},o.a.createElement(Xe,null)),o.a.createElement(d.a,{path:"/settings"},o.a.createElement(ot,null))))},ct=c.b.button.withConfig({displayName:"MenuButton__StyledMenuButton",componentId:"sc-1pzjbc2-0"})(["@media (min-width:","){display:none;}position:absolute;display:flex;flex-direction:column;justify-content:space-around;width:2rem;height:2rem;background:transparent;border:none;cursor:pointer;padding:0;z-index:10;&:focus{outline:none;}div{width:2rem;height:0.25rem;background:",";border-radius:10px;transition:all 0.3s linear;position:relative;transform-origin:1px;:first-child{transform:",";}:nth-child(2){opacity:",";transform:",";}:nth-child(3){transform:",";}}"],E,h,(function(e){return e.isOpen?"rotate(45deg)":"rotate(0)"}),(function(e){return e.isOpen?"0":"1"}),(function(e){return e.isOpen?"translateX(20px)":"translateX(0)"}),(function(e){return e.isOpen?"rotate(-45deg)":"rotate(0)"})),st=function(e){return o.a.createElement(ct,{"aria-label":"Toggle menu","aria-expanded":e.isOpen,isOpen:e.isOpen,onClick:e.onClick},o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null))},dt=c.b.header.withConfig({displayName:"Header__Container",componentId:"isfppc-0"})(["grid-area:header;background-color:#3a529c;display:flex;flex-direction:row;justify-content:flex-start;align-items:center;padding-left:15px;box-shadow:1px 2px 4px rgba(0,0,0,0.5);"]),mt=c.b.h3.withConfig({displayName:"Header__Title",componentId:"isfppc-1"})(["margin-left:2.5em;color:",";@media (min-width:","){margin-left:0.2em;}"],h,E),ut=function(e){return o.a.createElement(dt,null,o.a.createElement(st,{isOpen:e.isSidebarOpen,onClick:e.onMenuButtonClicked}),o.a.createElement(mt,null,"\ud83d\udcd6 Awesome Address Book"))},pt=c.b.div.withConfig({displayName:"Backdrop__Container",componentId:"hwd4vy-0"})(["position:fixed;width:100%;height:100%;top:0;left:0;background:rgba(0,0,0,0.3);z-index:1;"]),ft=function(e){return o.a.createElement(pt,{onClick:e.onClick})},gt=c.b.div.withConfig({displayName:"App__Layout",componentId:"sc-1abfors-0"})(["height:100%;display:grid;grid-template-rows:50px 1fr;grid-template-columns:auto 2fr;grid-template-areas:'header header' 'sidebar content';"]);var ht=function(){var e=Object(i.useState)(!1),t=Object(p.a)(e,2),n=t[0],a=t[1],r=function(){a(!n)},l=n?o.a.createElement(ft,{onClick:r}):null;return o.a.createElement(gt,null,o.a.createElement(ut,{isSidebarOpen:n,onMenuButtonClicked:r}),o.a.createElement(D,{isSidebarOpen:n,onLinkClicked:function(){n&&r()}}),l,o.a.createElement(lt,null))},bt=n(5),xt=Object(bt.c)({contacts:re,settings:J});function wt(){var e=Object(a.a)(["\n  html, #root {\n    background-color: ",";\n    height: 100%;\n  }\n\n  body {\n    height: 100%;\n    margin: 0;\n    font-family: 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',\n      'Droid Sans', 'Helvetica Neue', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n"]);return wt=function(){return e},e}var Ct=Object(m.a)({reducer:xt}),yt=Object(c.a)(wt(),C);l.a.render(o.a.createElement(u.a,{store:Ct},o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{basename:"/awesome-address-book"},o.a.createElement(d.a,{path:"/",component:ht})),o.a.createElement(yt,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[55,1,2]]]);
//# sourceMappingURL=main.28d2d132.chunk.js.map