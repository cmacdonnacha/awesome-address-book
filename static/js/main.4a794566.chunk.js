(this["webpackJsonpawesome-address-book"]=this["webpackJsonpawesome-address-book"]||[]).push([[0],{47:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM0AAADNBAMAAADpkulaAAAAElBMVEXc1KbMx7A/Egb/+dwkQmyV1Oi7WMeAAAAAz0lEQVR42u3WSwrCMBQF0ExcgbgBxbmldQW28/rb/1acqKDSkIEKeT33TR850HBD0/UvGROHw+FwOBwOh8PhcDgcDofzLee0LsuWw+FwOBzODJ1Nm8uew+FwOBzObJzjsrlPG8I5t2WpxmnKPlw1TrD70R/90R/9iX8/+anFCfy+ZWdVi6M/+qM/7kd/KnN26TOLghM4HA6Hw+H81rn0jxyyfwXdc2/gcDjhnUmse13hcDixnLfT+ymsy+4NHA4nvFMaDofD4XA4HA6HE8C5AdnNl/zz8GiBAAAAAElFTkSuQmCC"},58:function(e,t,n){e.exports=n(85)},85:function(e,t,n){"use strict";n.r(t);var a=n(23),i=n(0),o=n.n(i),l=n(22),r=n.n(l);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=n(1),s=n(15),d=n(17),m=n(20),p=n(8),u=n(11),f="#3a529c",g="#1ca9f0",h="#ffffff",b="#ededf7",x="#e3e3ea",C="#b1b1b7",w="#747481",E="#f4f5f9",y="#495576",_="#38b249",v="640px",N=n(49),I=n(50),k=c.b.img.withConfig({displayName:"Avatar__Image",componentId:"sc-1gddwuf-0"})(["border-radius:50%;min-height:",";height:",";width:",";"],(function(e){return e.size}),(function(e){return e.size}),(function(e){return e.size})),O=function(e){var t=e.src,n=e.size,a=e.alt,i=n||"2rem";return o.a.createElement(k,{src:t,size:i,alt:a})},j=n(47),S=n.n(j),z=c.b.nav.withConfig({displayName:"Sidebar__Container",componentId:"sc-10j93j9-0"})(["grid-area:sidebar;background-color:",";display:flex;flex-direction:column;min-width:250px;box-shadow:1px 2px 4px rgba(0,0,0,0.5);@media (max-width:","){position:absolute;height:100%;transition:transform 0.3s ease-in-out;transform:translateX(",");min-width:70%;z-index:2;}"],b,v,(function(e){return e.isSidebarOpen?"0":"-100%"})),D=c.b.ul.withConfig({displayName:"Sidebar__SidebarList",componentId:"sc-10j93j9-1"})(["list-style:none;padding:0;margin-top:0;"]),L=Object(c.b)(s.c).withConfig({displayName:"Sidebar__StyledNavLink",componentId:"sc-10j93j9-2"})(["display:flex;flex:1;flex-direction:row;align-items:center;padding:20px;text-transform:capitalize;text-decoration:none;border-left:solid 5px ",";color:",";font-size:1.3rem;font-weight:bold;@media (min-width:","){font-size:1rem;}&.active{background-color:white;border-left:solid 5px ",";}svg{height:1em;width:1em;margin-right:1rem;}"],b,f,v,g),A=c.b.div.withConfig({displayName:"Sidebar__ProfileContainer",componentId:"sc-10j93j9-3"})(["display:flex;flex-direction:column;align-items:center;padding:15px;background-color:",";color:",";"],f,b),B=c.b.span.withConfig({displayName:"Sidebar__Username",componentId:"sc-10j93j9-4"})(["margin-top:10px;font-size:1rem;"]),P=function(e){var t=e.isSidebarOpen,n=e.onLinkClicked;return o.a.createElement(z,{isSidebarOpen:t},o.a.createElement(A,null,o.a.createElement(O,{alt:"User Profile Image",src:S.a,size:"6rem"}),o.a.createElement(B,null,"Cathal Mac Donnacha")),o.a.createElement(D,null,o.a.createElement("li",null,o.a.createElement(L,{to:"/contacts",onClick:n},o.a.createElement(N.a,null),"Contacts")),o.a.createElement("li",null,o.a.createElement(L,{to:"/settings",onClick:n},o.a.createElement(I.a,null),"Settings"))))},M=c.b.section.withConfig({displayName:"Page__Container",componentId:"adlajs-0"})(["display:flex;flex:1;flex-direction:column;background-color:white;padding:",";overflow:hidden;"],(function(e){return e.noPadding?"0":"20px"})),H=c.b.div.withConfig({displayName:"Page__Content",componentId:"adlajs-1"})(["display:flex;flex:1;flex-direction:column;background-color:white;height:100%;overflow:hidden;"]),T=c.b.h1.withConfig({displayName:"Page__PageHeading",componentId:"adlajs-2"})(["margin:0;color:",";"],y),F=function(e){var t=e.heading,n=e.children,a=e.noPadding;return o.a.createElement(M,{noPadding:a},t&&o.a.createElement(T,null,t),o.a.createElement(H,null,n))},q=n(31),R=n.n(q),U=n(26),W=n(51),Y=n(14),X=n(52),K=n.n(X),V=n(12),G={nationalities:Object(Y.a)([{label:"Switzerland",code:"ch",isSelected:!1},{label:"Spain",code:"es",isSelected:!1},{label:"France",code:"fr",isSelected:!1},{label:"Great Britain",code:"gb",isSelected:!1}])},Q=Object(m.b)({name:"settings",initialState:G,reducers:{getSelectedNationalities:function(e,t){e.nationalities=t.payload}}}),J=Q.actions.getSelectedNationalities,Z=function(e){return e.settings.nationalities},$=Object(V.a)(Z,(function(e){return e.filter((function(e){return e.isSelected})).map((function(e){return e.code}))})),ee=Q.reducer,te=Object(m.b)({name:"contacts",initialState:{isLoading:!1,hasErrors:!1,contacts:[],searchText:"",isContactDetailsOpen:!1},reducers:{getContacts:function(e){e.isLoading=!0},getContactsSuccess:function(e,t){e.contacts=[].concat(Object(Y.a)(e.contacts),Object(Y.a)(t.payload)),e.isLoading=!1,e.hasErrors=!1},getContactsFailure:function(e){e.isLoading=!1,e.hasErrors=!0},resetContactsList:function(e){e.contacts=[]},setSearchText:function(e,t){e.searchText=t.payload},contactDetailsOpened:function(e){e.isContactDetailsOpen=!0},contactDetailsClosed:function(e){e.isContactDetailsOpen=!1}}}),ne=te.actions,ae=ne.getContacts,ie=ne.getContactsSuccess,oe=ne.getContactsFailure,le=ne.resetContactsList,re=ne.setSearchText,ce=ne.contactDetailsOpened,se=ne.contactDetailsClosed,de=function(e){return e.contacts},me=te.reducer;function pe(){return function(){var e=Object(W.a)(R.a.mark((function e(t,n){var a,i,o;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(ae()),a=$(n()),e.prev=2,e.next=5,K.a.get("https://randomuser.me/api?results=".concat(10,"&nat=").concat(a));case 5:i=e.sent,o=i.data.results.map((function(e){return{id:e.login.uuid,name:e.name,username:e.login.username,avatarUrl:e.picture.large,email:e.email,phone:e.phone,cell:e.cell,location:Object(U.a)({},e.location,{street:e.location.street.name})}})),t(ie(o)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),t(oe());case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t,n){return e.apply(this,arguments)}}()}var ue=c.b.div.withConfig({displayName:"ContactListItem__Container",componentId:"sc-10wq18x-0"})(["display:flex;flex:1;flex-direction:row;align-items:center;text-decoration:none;background-color:",";min-height:4rem;border-radius:5px;padding:15px 15px 15px 25px;cursor:pointer;box-shadow:0 11px 13px -6px rgba(135,142,192,0.15);transition:0.2s;&:hover{background-color:",";box-shadow:0 7px 18px 4px rgba(135,142,192,0.15);}"],b,x),fe=c.b.div.withConfig({displayName:"ContactListItem__ContactsDetailsContainer",componentId:"sc-10wq18x-1"})(["display:flex;margin-left:20px;flex-direction:column;min-width:0;& span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}"]),ge=c.b.span.withConfig({displayName:"ContactListItem__ContactName",componentId:"sc-10wq18x-2"})(["color:",";font-size:1.3rem;font-weight:bold;margin-bottom:12px;"],y),he=c.b.span.withConfig({displayName:"ContactListItem__ContactUsername",componentId:"sc-10wq18x-3"})(["color:",";font-weight:bold;font-size:0.8rem;margin-bottom:8px;"],y),be=c.b.span.withConfig({displayName:"ContactListItem__ContactEmail",componentId:"sc-10wq18x-4"})(["color:",";font-weight:bold;font-size:0.8rem;"],y),xe=function(e){var t=e.contact,n=e.onClick;return o.a.createElement(ue,{onClick:n},o.a.createElement(O,{alt:"Contact Avatar",src:t.avatarUrl,size:"5rem"}),o.a.createElement(fe,null,o.a.createElement(ge,null,t.name.first," ",t.name.last),o.a.createElement(he,null,t.username),o.a.createElement(be,null,t.email)))},Ce=c.b.div.withConfig({displayName:"Loader__Container",componentId:"eapld3-0"})(["display:flex;flex-direction:column;justify-content:center;min-width:100px;min-height:100px;"]),we=c.b.div.withConfig({displayName:"Loader__DotsContainer",componentId:"eapld3-1"})(["display:flex;flex-direction:row;justify-content:center;min-width:100px;min-height:100px;"]),Ee=c.b.span.withConfig({displayName:"Loader__Dot",componentId:"eapld3-2"})(["display:inline-block;width:20px;height:20px;border-radius:100%;background-color:",";margin:35px 5px;&:nth-child(1){animation:bounce 1s ease-in-out infinite;}&:nth-child(2){animation:bounce 1s ease-in-out 0.1s infinite;}&:nth-child(3){animation:bounce 1s ease-in-out 0.2s infinite;}@keyframes bounce{0%,75%,100%{-webkit-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);transform:translateY(0);}25%{-webkit-transform:translateY(-20px);-ms-transform:translateY(-20px);-o-transform:translateY(-20px);transform:translateY(-20px);}}"],g),ye=c.b.span.withConfig({displayName:"Loader__LoadingText",componentId:"eapld3-3"})(["font-size:1.3rem;"]),_e=function(e){var t=e.text,n=t?o.a.createElement(ye,null,t):null;return o.a.createElement(Ce,null,o.a.createElement(we,null,o.a.createElement(Ee,null),o.a.createElement(Ee,null),o.a.createElement(Ee,null)),n)},ve=c.b.div.withConfig({displayName:"Banner__Container",componentId:"sc-13flpl7-0"})(["height:60px;background-color:",";display:flex;flex:1;justify-content:center;align-items:center;color:",";"],g,h),Ne=function(e){var t=e.text;return o.a.createElement(ve,null,t)},Ie=c.b.input.withConfig({displayName:"SearchBar__Input",componentId:"sc-10u3mjb-0"})(["height:35px;border-radius:3px;border:solid 2px ",";padding-left:10px;margin:20px;box-shadow:0 11px 13px -6px rgba(135,142,192,0.15);&:focus{border-color:",";}"],C,g),ke=function(e){var t=e.placeholder,n=e.value,a=e.ariaLabel,l=e.onSearchTextChanged,r=n||"",c=Object(i.useState)(r),s=Object(u.a)(c,2),d=s[0],m=s[1];return o.a.createElement(Ie,{value:d,onChange:function(e){m(e.target.value),l(e.target.value)},placeholder:t,"aria-label":a})},Oe=c.b.div.withConfig({displayName:"ContactsList__Container",componentId:"lteluh-0"})(["display:flex;flex-direction:column;flex:1;list-style:none;padding:0;overflow-y:auto;"]),je=c.b.div.withConfig({displayName:"ContactsList__CenteredContainer",componentId:"lteluh-1"})(["display:flex;flex:1;flex-direction:column;justify-content:center;align-items:center;"]),Se=c.b.ul.withConfig({displayName:"ContactsList__List",componentId:"lteluh-2"})(["display:flex;flex-direction:column;flex:1;list-style:none;padding:0;overflow-y:auto;"]),ze=c.b.li.withConfig({displayName:"ContactsList__ListItem",componentId:"lteluh-3"})(["margin:10px 20px;"]),De=function(){var e=Object(p.b)(),t=Object(i.useState)(10),n=Object(u.a)(t,2),a=n[0],l=n[1],r=Object(p.c)(de),c=r.contacts,d=r.isLoading,m=r.hasErrors,f=r.searchText,g=Object(i.useRef)(null),h=function(e){var t=Object(i.useState)(!1),n=Object(u.a)(t,2),a=n[0],o=n[1];return Object(i.useEffect)((function(){if(e){var t=function(){e.offsetHeight+e.scrollTop!==e.scrollHeight?o(!1):o(!0)};return e.addEventListener("scroll",t),function(){return e.removeEventListener("scroll",t)}}}),[e]),a}(g.current),b=c.filter((function(e){return"".concat(e.name.first," ").concat(e.name.last).toLowerCase().includes(f.toLowerCase())}));Object(i.useEffect)((function(){0===c.length&&e(pe()),a>=50||c.length===a&&e(pe())}),[e,c.length,a]),Object(i.useEffect)((function(){h&&l((function(e){return e+10}))}),[h]);return o.a.createElement(Oe,null,o.a.createElement(ke,{value:f,placeholder:"Search...",onSearchTextChanged:function(t){e(re(t))},ariaLabel:"Search for contacts"}),o.a.createElement(Se,{ref:g},function(){if(d&&0===b.length)return o.a.createElement(je,null,o.a.createElement(_e,{text:"Loading contacts..."}));if(m||!d&&0===b.length)return o.a.createElement(je,null,o.a.createElement("span",null,"No contacts found \ud83d\ude25"));var t=function(){e(ce())};return b.map((function(e,n){return n>=a?null:o.a.createElement(s.b,{key:e.id,to:"/contacts/".concat(e.id),style:{textDecoration:"none"}},o.a.createElement(ze,null,o.a.createElement(xe,{contact:e,onClick:t})))}))}(),a>=50&&o.a.createElement("li",null,o.a.createElement(Ne,{text:"No more contacts \ud83e\udd37\u200d\u200d"}))))},Le=n(53),Ae=n(54),Be=n(56),Pe=n(55),Me=n(57),He=c.b.button.withConfig({displayName:"Button__Container",componentId:"sc-1ltq5rw-0"})(["display:flex;align-items:center;justify-content:center;font-size:1rem;border:none;border-radius:3px;color:",";background-color:",";box-shadow:0 4px 6px rgba(50,50,93,0.11),0 1px 3px rgba(0,0,0,0.08);cursor:pointer;height:",";padding:0 10px;&:hover{transform:translateY(-1px);box-shadow:0 7px 14px 0 rgba(50,50,93,0.1),0 3px 6px 0 rgba(0,0,0,0.08);}& svg{margin-right:5px;}"],h,g,(function(e){return e.size?"".concat(e.size,"px"):"40px"})),Te=function(e){var t=e.size,n=e.children,a=e.onClick;return o.a.createElement(He,{onClick:a,size:t},n)},Fe=c.b.div.withConfig({displayName:"ContactDetails__MainContainer",componentId:"hz41so-0"})(["overflow-y:auto;"]),qe=c.b.div.withConfig({displayName:"ContactDetails__DetailsContainer",componentId:"hz41so-1"})(["display:flex;flex-direction:column;overflow-y:auto;flex:1;padding:20px 40px;"]),Re=c.b.div.withConfig({displayName:"ContactDetails__Row",componentId:"hz41so-2"})(["display:flex;flex-direction:row;"]),Ue=c.b.div.withConfig({displayName:"ContactDetails__Column",componentId:"hz41so-3"})(["display:flex;flex-direction:column;"]),We=c.b.header.withConfig({displayName:"ContactDetails__Header",componentId:"hz41so-4"})(["display:flex;flex-direction:row;align-items:center;"]),Ye=c.b.div.withConfig({displayName:"ContactDetails__HeaderDetails",componentId:"hz41so-5"})(["display:flex;flex-direction:column;margin-left:30px;"]),Xe=c.b.span.withConfig({displayName:"ContactDetails__UserStatus",componentId:"hz41so-6"})(["display:block;width:6px;height:6px;border-radius:50%;background-color:",";margin-left:10px;"],_),Ke=c.b.button.withConfig({displayName:"ContactDetails__BackButton",componentId:"hz41so-7"})(["text-align:start;background:none;border:none;cursor:pointer;min-height:50px;outline:none;margin-left:10px;@media (min-width:","){display:none;}"],v),Ve=c.b.h1.withConfig({displayName:"ContactDetails__ContactName",componentId:"hz41so-8"})(["display:flex;flex-direction:row;align-items:center;margin:10px 0 5px 0;"]),Ge=c.b.span.withConfig({displayName:"ContactDetails__ContactCountry",componentId:"hz41so-9"})(["margin-bottom:12px;"]),Qe=c.b.div.withConfig({displayName:"ContactDetails__Divider",componentId:"hz41so-10"})(["margin-top:24px;margin-bottom:24px;height:1px;width:100%;background:#eaedf3;background:",";"],b),Je=c.b.section.withConfig({displayName:"ContactDetails__Section",componentId:"hz41so-11"})(["flex-direction:column;& p{color:",";font-size:1rem;}"],w),Ze=c.b.h3.withConfig({displayName:"ContactDetails__SectionHeader",componentId:"hz41so-12"})(["color:",";margin-bottom:20px;"],w),$e=c.b.div.withConfig({displayName:"ContactDetails__ContactDetailsContainer",componentId:"hz41so-13"})(["flex-direction:column;color:",";& svg{min-width:1.5rem;}"],w),et=c.b.div.withConfig({displayName:"ContactDetails__ContactDetailRow",componentId:"hz41so-14"})(["display:flex;flex-direction:row;margin-bottom:10px;align-items:center;"]),tt=c.b.span.withConfig({displayName:"ContactDetails__ContactDetailLabel",componentId:"hz41so-15"})(["margin-left:10px;min-width:100px;"]),nt=c.b.span.withConfig({displayName:"ContactDetails__ContactDetailValue",componentId:"hz41so-16"})(["word-break:break-word;"]),at=function(e){var t=e.match,n=Object(p.c)(de).contacts,a=n.find((function(e){return e.id===t.params.id}))||n[0],i=Object(p.b)();return 0===n.length?o.a.createElement(qe,null,o.a.createElement("span",null,"Loading...")):o.a.createElement(Fe,null,o.a.createElement(Ke,{onClick:function(){return i(se())}},o.a.createElement(Le.a,{size:30})),o.a.createElement(qe,null,o.a.createElement(We,null,o.a.createElement(O,{src:a.avatarUrl,size:"8rem"}),o.a.createElement(Ye,null,o.a.createElement(Ue,null,o.a.createElement(Ve,null,a.name.first," ",a.name.last,o.a.createElement(Xe,null)),o.a.createElement(Ge,null,a.location.country)),o.a.createElement(Re,null,o.a.createElement(Te,null,o.a.createElement(Ae.a,{size:18}),"Chat")))),o.a.createElement(Qe,null),o.a.createElement(Je,null,o.a.createElement(Ze,null,"BIO"),o.a.createElement("p",null,"I like romantic comedies and long walks on the beach \ud83c\udf34 I'm a Professional procrastinator. Shout-out to my Mom's friends who like and share all my pictures.")),o.a.createElement(Qe,null),o.a.createElement(Je,null,o.a.createElement(Ze,null,"Contact Details"),o.a.createElement($e,null,o.a.createElement(et,null,o.a.createElement(Pe.a,{size:20}),o.a.createElement(tt,null,"Mobile:"),o.a.createElement(nt,null,a.cell)),o.a.createElement(et,null,o.a.createElement(Be.a,{size:20}),o.a.createElement(tt,null,"Work:"),o.a.createElement(nt,null,a.phone)),o.a.createElement(et,null,o.a.createElement(Me.a,{size:20}),o.a.createElement(tt,null,"Email:"),o.a.createElement(nt,null,a.email)))),o.a.createElement(Qe,null)))},it=c.b.h1.withConfig({displayName:"ContactsPage__PageHeading",componentId:"sc-1ewu7oo-0"})(["margin:20px;color:",";"],y),ot=c.b.div.withConfig({displayName:"ContactsPage__RowContainer",componentId:"sc-1ewu7oo-1"})(["display:flex;flex-direction:row;height:100%;overflow:hidden;"]),lt=c.b.div.withConfig({displayName:"ContactsPage__ContentContainer",componentId:"sc-1ewu7oo-2"})(["display:flex;@media (max-width:","){transition:all 0.6s;transform:translateX(",");min-width:100%;}"],v,(function(e){return e.isContactDetailsOpen?"-100%":"0"})),rt=Object(c.b)(lt).withConfig({displayName:"ContactsPage__ContactsListContainer",componentId:"sc-1ewu7oo-3"})(["min-width:400px;max-width:500px;flex:1;"]),ct=Object(c.b)(lt).withConfig({displayName:"ContactsPage__ContactsDetailsContainer",componentId:"sc-1ewu7oo-4"})(["flex:2;"]),st=function(){var e=Object(p.c)(de),t=e.contacts,n=e.isContactDetailsOpen;return o.a.createElement(F,{noPadding:!0},o.a.createElement(it,null,"Contacts"),o.a.createElement(ot,null,o.a.createElement(rt,{isContactDetailsOpen:n},o.a.createElement(De,null)),o.a.createElement(ct,{isContactDetailsOpen:n},o.a.createElement(d.d,null,o.a.createElement(d.b,{path:"/contacts/:id",component:at}),t.length>0&&o.a.createElement(d.a,{to:"/contacts/".concat(t[0].id)})))))},dt=c.b.div.withConfig({displayName:"NationalitiesSelector__Container",componentId:"xjuxdf-0"})(["display:flex;background-color:white;"]),mt=c.b.ul.withConfig({displayName:"NationalitiesSelector__List",componentId:"xjuxdf-1"})(["margin-top:20px;padding:0;"]),pt=c.b.li.withConfig({displayName:"NationalitiesSelector__ListItem",componentId:"xjuxdf-2"})(["list-style:none;padding:0;margin:15px 0;"]),ut=c.b.label.withConfig({displayName:"NationalitiesSelector__Label",componentId:"xjuxdf-3"})(["margin-left:10px;"]),ft=function(e){var t=e.nationalities,n=e.onNationalitiesChanged;return o.a.createElement(dt,null,o.a.createElement(mt,null,t.map((function(e){return o.a.createElement(pt,{key:e.code},o.a.createElement("input",{id:e.code,type:"checkbox",checked:e.isSelected,onChange:function(){return function(e){var a=t.map((function(t){return t.code!==e.code?t:Object(U.a)({},t,{isSelected:!e.isSelected})}));n(Object(Y.a)(a))}(e)}}),o.a.createElement(ut,{htmlFor:e.code},e.label))}))))},gt=c.b.div.withConfig({displayName:"SettingsPage__Container",componentId:"sc-11nyezq-0"})(["margin:20px;"]),ht=c.b.p.withConfig({displayName:"SettingsPage__SettingsInfoText",componentId:"sc-11nyezq-1"})(["display:flex;"]),bt=c.b.span.withConfig({displayName:"SettingsPage__SettingsSavedMessage",componentId:"sc-11nyezq-2"})(["margin-top:10px;text-align:left;font-size:1.5rem;font-weight:bold;margin:40px 0 0 10px;"]),xt=c.b.footer.withConfig({displayName:"SettingsPage__Footer",componentId:"sc-11nyezq-3"})(["display:flex;flex-direction:row;flex:1;max-height:50px;& button{flex:1;}@media (min-width:","){max-width:120px;}"],v),Ct=function(){var e=Object(p.b)(),t=Object(p.c)(Z),n=Object(i.useState)(t),a=Object(u.a)(n,2),l=a[0],r=a[1],c=Object(i.useState)(!1),s=Object(u.a)(c,2),d=s[0],m=s[1];return o.a.createElement(F,{heading:"Settings"},o.a.createElement(gt,null,o.a.createElement(ht,null,"Select nationalities to be included in your address book:"),o.a.createElement(ft,{nationalities:l,onNationalitiesChanged:function(e){r(Object(Y.a)(e)),m(!1)}}),o.a.createElement(xt,null,o.a.createElement(Te,{onClick:function(){e(J(l)),e(le()),e(pe()),m(!0)},size:40},"Save")),d&&o.a.createElement(bt,null,"Settings saved! \ud83d\udc4c")))},wt=c.b.main.withConfig({displayName:"Routes__Container",componentId:"kfwx58-0"})(["grid-area:content;display:flex;flex:1;margin:10px;overflow:hidden;"]),Et=function(){return o.a.createElement(wt,null,o.a.createElement(d.d,null,o.a.createElement(d.b,{path:"/contacts"},o.a.createElement(st,null)),o.a.createElement(d.b,{path:"/settings"},o.a.createElement(Ct,null)),o.a.createElement(d.b,null,o.a.createElement(st,null))))},yt=c.b.button.withConfig({displayName:"MenuButton__StyledMenuButton",componentId:"sc-1pzjbc2-0"})(["@media (min-width:","){display:none;}position:absolute;display:flex;flex-direction:column;justify-content:space-around;width:2rem;height:2rem;background:transparent;border:none;cursor:pointer;padding:0;z-index:10;&:focus{outline:none;}div{width:2rem;height:0.25rem;background:",";border-radius:10px;transition:all 0.3s linear;position:relative;transform-origin:1px;:first-child{transform:",";}:nth-child(2){opacity:",";transform:",";}:nth-child(3){transform:",";}}"],v,h,(function(e){return e.isOpen?"rotate(45deg)":"rotate(0)"}),(function(e){return e.isOpen?"0":"1"}),(function(e){return e.isOpen?"translateX(20px)":"translateX(0)"}),(function(e){return e.isOpen?"rotate(-45deg)":"rotate(0)"})),_t=function(e){var t=e.isOpen,n=e.onClick;return o.a.createElement(yt,{"aria-label":"Toggle menu","aria-expanded":t,isOpen:t,onClick:n},o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null))},vt=c.b.header.withConfig({displayName:"Header__Container",componentId:"isfppc-0"})(["grid-area:header;background-color:#3a529c;display:flex;flex-direction:row;justify-content:flex-start;align-items:center;padding-left:15px;box-shadow:1px 2px 4px rgba(0,0,0,0.5);"]),Nt=c.b.h3.withConfig({displayName:"Header__Title",componentId:"isfppc-1"})(["margin-left:2.5em;color:",";@media (min-width:","){margin-left:0.2em;}"],h,v),It=function(e){var t=e.isSidebarOpen,n=e.onMenuButtonClicked;return o.a.createElement(vt,null,o.a.createElement(_t,{isOpen:t,onClick:n}),o.a.createElement(Nt,null,"\ud83d\udcd6 Awesome Address Book"))},kt=c.b.div.withConfig({displayName:"Backdrop__Container",componentId:"hwd4vy-0"})(["position:fixed;width:100%;height:100%;top:0;left:0;background:rgba(0,0,0,0.3);z-index:1;"]),Ot=function(e){var t=e.onClick;return o.a.createElement(kt,{onClick:t})},jt=c.b.div.withConfig({displayName:"App__Layout",componentId:"sc-1abfors-0"})(["height:100%;display:grid;grid-template-rows:50px 1fr;grid-template-columns:auto 2fr;grid-template-areas:'header header' 'sidebar content';"]);var St=function(){var e=Object(i.useState)(!1),t=Object(u.a)(e,2),n=t[0],a=t[1],l=function(){a(!n)},r=n?o.a.createElement(Ot,{onClick:l}):null;return o.a.createElement(jt,null,o.a.createElement(It,{isSidebarOpen:n,onMenuButtonClicked:l}),o.a.createElement(P,{isSidebarOpen:n,onLinkClicked:function(){n&&l()}}),r,o.a.createElement(Et,null))},zt=n(7),Dt=Object(zt.c)({contacts:me,settings:ee});function Lt(){var e=Object(a.a)(["\n  html, #root {\n    background-color: ",";\n    height: 100%;\n  }\n\n  body {\n    height: 100%;\n    margin: 0;\n    font-family: 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',\n      'Droid Sans', 'Helvetica Neue', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n"]);return Lt=function(){return e},e}var At=Object(m.a)({reducer:Dt}),Bt=Object(c.a)(Lt(),E);r.a.render(o.a.createElement(p.a,{store:At},o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{basename:"/awesome-address-book"},o.a.createElement(d.b,{path:"/",component:St})),o.a.createElement(Bt,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[58,1,2]]]);
//# sourceMappingURL=main.4a794566.chunk.js.map