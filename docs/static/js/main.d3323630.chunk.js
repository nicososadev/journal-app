(this["webpackJsonpjournal-app"]=this["webpackJsonpjournal-app"]||[]).push([[0],{152:function(e,t,a){},153:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25),o=a.n(c),i=a(4),u=a(13),l=a(14),s=a(6),m=a(22),d=a.n(m);a(68),a(72);d.a.initializeApp({apiKey:"AIzaSyCzG7jcYHzIOhXRqZRiH_xn_-DyVHekLuI",authDomain:"react-firebase-ef893.firebaseapp.com",databaseURL:"https://react-firebase-ef893.firebaseio.com",projectId:"react-firebase-ef893",storageBucket:"react-firebase-ef893.appspot.com",messagingSenderId:"82368233926",appId:"1:82368233926:web:0ff94d223d7e7da83e32c7"});var p=d.a.firestore(),f=new d.a.auth.GoogleAuthProvider,b=a(2),h=a(5),E=a.n(h),v=a(8),_=a(15),j=a.n(_),g=function(){var e=Object(v.a)(E.a.mark((function e(t){var a,n,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.cloudinary.com/v1_1/dsselcnmz/upload",(a=new FormData).append("upload_preset","react-journal-app"),a.append("file",t),e.prev=4,e.next=7,fetch("https://api.cloudinary.com/v1_1/dsselcnmz/upload",{method:"POST",body:a});case 7:if(!(n=e.sent).ok){e.next=15;break}return e.next=11,n.json();case 11:return r=e.sent,e.abrupt("return",r.secure_url);case 15:return e.next=17,n.json();case 17:throw e.sent;case 18:e.next=23;break;case 20:throw e.prev=20,e.t0=e.catch(4),e.t0;case 23:case"end":return e.stop()}}),e,null,[[4,20]])})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(v.a)(E.a.mark((function e(t){var a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],e.next=3,p.collection("".concat(t,"/journal/notes")).get();case 3:return e.sent.forEach((function(e){a.push(Object(b.a)({id:e.id},e.data()))})),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O="[Auth] Login",N="[Auth] Logout",w="[UI] Set Error",x="[UI] Remove Error",k="[UI] Start loading",S="[UI] Finish loading",C="[Notes] Create Note",A="[Notes] Update Note",I="[Notes] Delete Note",L="[Notes] Set Active Note",P="[Notes] Load Notes",D="[Notes] Logout Cleaning",U=function(e,t){return{type:L,payload:Object(b.a)({id:e},t)}},R=function(e,t){return{type:C,payload:Object(b.a)({id:e},t)}},z=function(e){return{type:P,payload:e}},F=function(e){return function(){var t=Object(v.a)(E.a.mark((function t(a,n){var r,c,o;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n(),c=r.auth.uid,e.url||delete e.url,delete(o=Object(b.a)({},e)).id,t.next=7,p.doc("".concat(c,"/journal/notes/").concat(e.id)).update(o);case 7:a(G(e.id,o)),j.a.fire("Saved",e.title,"success");case 9:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},G=function(e,t){return{type:A,payload:{id:e,note:Object(b.a)({id:e},t)}}},T=function(e){return{type:I,payload:e}},W=a(28),q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(e),a=Object(u.a)(t,2),r=a[0],c=a[1],o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;c(t)},i=function(e){var t=e.target;c(Object(b.a)(Object(b.a)({},r),{},Object(W.a)({},t.name,t.value)))};return[r,i,o]},H=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.notes})).active;return r.a.createElement("div",{className:"notes__appbar"},r.a.createElement("span",null,"28 de agosto 2020"),r.a.createElement("input",{id:"fileSelector",type:"file",name:"file",onChange:function(t){var a=t.target.files[0];a&&e(function(e){return function(){var t=Object(v.a)(E.a.mark((function t(a,n){var r,c;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().notes.active,j.a.fire({title:"Uploading...",text:"Please wait...",allowOutsideClick:!1,willOpen:function(){j.a.showLoading()}}),t.next=4,g(e);case 4:c=t.sent,r.url=c,a(F(r)),j.a.close();case 8:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}(a))},style:{display:"none"}}),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){document.querySelector("#fileSelector").click()},className:"btn"},"Picture"),r.a.createElement("button",{onClick:function(){e(F(t))},className:"btn"},"Save")))},X=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.notes})).active,a=q(t),c=Object(u.a)(a,3),o=c[0],l=c[1],s=c[2],m=o.title,d=o.body,f=Object(n.useRef)(t.id);Object(n.useEffect)((function(){t.id!==f.current&&(s(t),f.current=t.id)}),[t,s]),Object(n.useEffect)((function(){e(U(o.id,Object(b.a)({},o)))}),[o,e]);return r.a.createElement("div",{className:"notes__main-content"},r.a.createElement(H,null),r.a.createElement("div",{className:"notes__content"},r.a.createElement("input",{type:"text",className:"notes__title-input",value:m,name:"title",onChange:l,placeholder:"Some awesome title"}),r.a.createElement("hr",{className:"mb-5"}),r.a.createElement("textarea",{className:"notes__textarea",value:d,name:"body",onChange:l,placeholder:"An awesome text"}),t.url&&r.a.createElement("div",{className:"notes__image"},r.a.createElement("img",{src:t.url,alt:"imagen"}))),r.a.createElement("button",{className:"btn btn-danger",onClick:function(){var t;e((t=f.current,function(){var e=Object(v.a)(E.a.mark((function e(a,n){var r,c;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n(),c=r.auth.uid,e.next=4,p.doc("".concat(c,"/journal/notes/").concat(t)).delete();case 4:a(T(t));case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()))}},"Delete"))},B=function(){return r.a.createElement("div",{className:"nothing__main-content"},r.a.createElement("p",null,"Select something",r.a.createElement("br",null),"Or create an entry!"),r.a.createElement("i",{className:"far fa-star fa-4x mt-5"}))},J=function(e){return{type:w,payload:e}},V=function(){return{type:S}},K=function(e,t){return function(a){a({type:k}),d.a.auth().signInWithEmailAndPassword(e,t).then((function(e){var t=e.user;a(M(t.uid,t.displayName)),a(V())})).catch((function(e){a(V()),j.a.fire("Authentication Error",e.message,"error")}))}},M=function(e,t){return{type:O,payload:{uid:e,displayName:t}}},Y=function(){return{type:N}},Z=a(56),Q=a.n(Z),$=function(e){var t=e.id,a=e.title,n=e.body,c=e.date,o=e.url,u=Q()(c),l=Object(i.b)();return r.a.createElement("div",{onClick:function(){l(U(t,{title:a,body:n,date:c,url:o}))},className:"journal__entry pointer animate__animated animate__fadeIn animate__faster"},o&&r.a.createElement("div",{className:"journal__entry-picture",style:{backgroundSize:"cover",backgroundImage:"url(".concat(o,")")}}),r.a.createElement("div",{className:"journal__entry-body"},r.a.createElement("p",{className:"jounral__entry-title"},a),r.a.createElement("p",{className:"jounral__entry-content"},n)),r.a.createElement("div",{className:"journal__entry-date"},r.a.createElement("span",null,u.format("dddd")),r.a.createElement("h4",null,u.format("Do"))))},ee=function(){var e=Object(i.c)((function(e){return e.notes})).notes;return r.a.createElement("div",{className:"journal__entries"},e.map((function(e){return r.a.createElement($,Object.assign({key:e.id},e))})))},te=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.auth})).name;return r.a.createElement("aside",{className:"journal__sidebar"},r.a.createElement("div",{className:"journal__sidebar-navbar"},r.a.createElement("h3",{className:"mt-5"},r.a.createElement("i",{className:"far fa-moon"}),r.a.createElement("span",null," ",t)),r.a.createElement("button",{onClick:function(){e(function(){var e=Object(v.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.auth().signOut();case 2:t(Y()),t({type:D});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},className:"btn"},"Logout")),r.a.createElement("div",{onClick:function(){e(function(){var e=Object(v.a)(E.a.mark((function e(t,a){var n,r,c,o;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a(),r=n.auth.uid,c={title:"",body:"",date:(new Date).getTime()},e.next=5,p.collection("".concat(r,"/journal/notes")).add(c);case 5:o=e.sent,t(U(o.id,c)),t(R(o.id,c));case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}())},className:"journal__new-entry"},r.a.createElement("i",{className:"far fa-calendar-plus fa-5x"}),r.a.createElement("p",{className:"mt-5"},"New Entry")),r.a.createElement(ee,null))},ae=function(){var e=Object(i.c)((function(e){return e.notes})).active;return r.a.createElement("div",{className:"journal__main-content animate__animated animate__fadeIn animate__faster"},r.a.createElement(te,null),r.a.createElement("main",null,e?r.a.createElement(X,null):r.a.createElement(B,null)))},ne=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.ui})).loading,a=q({email:"nicososa@gmail.com",password:"123456"}),c=Object(u.a)(a,2),o=c[0],s=c[1],m=o.email,p=o.password;return r.a.createElement(n.Fragment,null,r.a.createElement("h3",{className:"auth__title"},"Login"),r.a.createElement("form",{className:"animate__animated animate__fadeIn animate__faster",onSubmit:function(t){t.preventDefault(),e(K(m,p))}},r.a.createElement("input",{className:"auth__input",type:"text",name:"email",value:m,onChange:s,placeholder:"Email"}),r.a.createElement("input",{className:"auth__input",type:"password",name:"password",value:p,onChange:s,placeholder:"Password"}),r.a.createElement("button",{className:"btn btn-primary btn-block",type:"submit",disabled:t},"Login"),r.a.createElement("div",{className:"auth__social-networks"},r.a.createElement("p",null,"Login with Social Network"),r.a.createElement("div",{onClick:function(){e((function(e){d.a.auth().signInWithPopup(f).then((function(t){var a=t.user;e(M(a.uid,a.displayName))}))}))},className:"google-btn"},r.a.createElement("div",{className:"google-icon-wrapper"},r.a.createElement("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google button"})),r.a.createElement("p",{className:"btn-text"},r.a.createElement("b",null,"Sign in with google"))),r.a.createElement(l.b,{className:"link mt-1",to:"/auth/register"},"Create new Account"))))},re=a(57),ce=a.n(re),oe=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.ui})).msgError,a=q({name:"Nicolas",email:"nicososa@gmail.com",password:"123456",password2:"123456"}),c=Object(u.a)(a,2),o=c[0],s=c[1],m=o.name,p=o.email,f=o.password,b=o.password2,h=function(){return 0===m.trim().length?(e(J("Name is required")),!1):ce.a.isEmail(p)?f!==b||f.length<5?(e(J("Passwords missmatch")),!1):(e({type:x}),!0):(e(J("Email is not correct")),!1)};return r.a.createElement(n.Fragment,null,r.a.createElement("h3",{className:"auth__title"},"Register"),r.a.createElement("form",{className:"animate__animated animate__fadeIn animate__faster",onSubmit:function(t){t.preventDefault(),h()&&e(function(e,t,a){return function(n){d.a.auth().createUserWithEmailAndPassword(e,t).then(function(){var e=Object(v.a)(E.a.mark((function e(t){var r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.user,e.next=3,r.updateProfile({displayName:a});case 3:n(M(r.uid,r.displayName));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){j.a.fire("User already exists",e.message,"error")}))}}(p,f,m))}},t&&r.a.createElement("div",{className:"auth__alert-error"},r.a.createElement("p",null,t)),r.a.createElement("input",{className:"auth__input",type:"text",name:"name",value:m,onChange:s,placeholder:"Name"}),r.a.createElement("input",{className:"auth__input",type:"text",name:"email",value:p,onChange:s,placeholder:"Email"}),r.a.createElement("input",{className:"auth__input",type:"password",name:"password",value:f,onChange:s,placeholder:"Password"}),r.a.createElement("input",{className:"auth__input",type:"password2",name:"password2",value:b,onChange:s,placeholder:"Confirm Password"}),r.a.createElement("button",{className:"btn btn-primary btn-block mt-1",type:"submit"},"Register"),r.a.createElement(l.b,{className:"link mt-1",to:"/auth/login"},"Already have an Account")))},ie=function(){return r.a.createElement("div",{className:"auth__main"},r.a.createElement("div",{className:"auth__box-container"},r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/auth/login",component:ne}),r.a.createElement(s.b,{exact:!0,path:"/auth/register",component:oe}),r.a.createElement(s.a,{to:"/auth/login"}))))},ue=a(29),le=function(e){var t=e.isAuthenticated,a=e.component,n=Object(ue.a)(e,["isAuthenticated","component"]);return r.a.createElement(s.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(a,e):r.a.createElement(s.a,{to:"/auth"})}}))},se=function(e){var t=e.isAuthenticated,a=e.component,n=Object(ue.a)(e,["isAuthenticated","component"]);return r.a.createElement(s.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(s.a,{to:"/"}):r.a.createElement(a,e)}}))},me=function(){var e=Object(i.b)(),t=Object(n.useState)(!0),a=Object(u.a)(t,2),c=a[0],o=a[1],m=Object(n.useState)(!1),p=Object(u.a)(m,2),f=p[0],b=p[1];return Object(n.useEffect)((function(){d.a.auth().onAuthStateChanged((function(t){var a;(null===t||void 0===t?void 0:t.uid)?(e(M(t.uid,t.displayName)),b(!0),e((a=t.uid,function(){var e=Object(v.a)(E.a.mark((function e(t){var n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(a);case 2:n=e.sent,t(z(n));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))):b(!1),o(!1)}))}),[e,o]),c?r.a.createElement("h1",null,"Wait..."):r.a.createElement(l.a,null,r.a.createElement("div",null,r.a.createElement(s.d,null,r.a.createElement(se,{path:"/auth",isAuthenticated:f,component:ie}),r.a.createElement(le,{exact:!0,path:"/",isAuthenticated:f,component:ae}),r.a.createElement(s.a,{to:"/"}))))},de=a(16),pe=a(58),fe=a(39),be={notes:[],active:null},he={loading:!1,msgError:null},Ee="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||de.d,ve=Object(de.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return{uid:t.payload.uid,name:t.payload.displayName};case N:return{};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(b.a)(Object(b.a)({},e),{},{msgError:t.payload});case x:return Object(b.a)(Object(b.a)({},e),{},{msgError:null});case k:return Object(b.a)(Object(b.a)({},e),{},{loading:!0});case S:return Object(b.a)(Object(b.a)({},e),{},{loading:!1});default:return e}},notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return Object(b.a)(Object(b.a)({},e),{},{active:Object(b.a)({},t.payload)});case C:return Object(b.a)(Object(b.a)({},e),{},{notes:[t.payload].concat(Object(fe.a)(e.notes))});case P:return Object(b.a)(Object(b.a)({},e),{},{notes:Object(fe.a)(t.payload)});case A:return Object(b.a)(Object(b.a)({},e),{},{notes:e.notes.map((function(e){return e.id===t.payload.id?t.payload.note:e}))});case I:return Object(b.a)(Object(b.a)({},e),{},{active:null,notes:e.notes.filter((function(e){return e.id!==t.payload}))});case D:return Object(b.a)(Object(b.a)({},e),{},{active:null,notes:[]});default:return e}}}),_e=Object(de.e)(ve,Ee(Object(de.a)(pe.a))),je=function(){return r.a.createElement(i.a,{store:_e},r.a.createElement(me,null))};a(152);o.a.render(r.a.createElement(je,null),document.getElementById("root"))},59:function(e,t,a){e.exports=a(153)}},[[59,1,2]]]);
//# sourceMappingURL=main.d3323630.chunk.js.map