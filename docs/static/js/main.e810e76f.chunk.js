(this["webpackJsonpjournal-app"]=this["webpackJsonpjournal-app"]||[]).push([[0],{147:function(e,t,a){},148:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),l=a.n(c),o=a(7),i=a(12),s=a(11),u=a(3),m=a(18),p=a.n(m);a(64),a(68);p.a.initializeApp({apiKey:"AIzaSyCzG7jcYHzIOhXRqZRiH_xn_-DyVHekLuI",authDomain:"react-firebase-ef893.firebaseapp.com",databaseURL:"https://react-firebase-ef893.firebaseio.com",projectId:"react-firebase-ef893",storageBucket:"react-firebase-ef893.appspot.com",messagingSenderId:"82368233926",appId:"1:82368233926:web:0ff94d223d7e7da83e32c7"});p.a.firestore();var d=new p.a.auth.GoogleAuthProvider,E=function(){return r.a.createElement("div",{className:"notes__appbar"},r.a.createElement("span",null,"28 de agosto 2020"),r.a.createElement("div",null,r.a.createElement("button",{className:"btn"},"Picture"),r.a.createElement("button",{className:"btn"},"Save")))},h=function(){return r.a.createElement("div",{className:"notes__main-content"},r.a.createElement(E,null),r.a.createElement("div",{className:"notes__content"},r.a.createElement("input",{type:"text",className:"notes__title-input",placeholder:"Some awesome title"}),r.a.createElement("textarea",{className:"notes__textarea",placeholder:"An awesome text"}),r.a.createElement("div",{className:"notes__image"},r.a.createElement("img",{src:"https://this.deakin.edu.au/wp-content/uploads/2019/06/coding-on-a-computer.jpg",alt:"imagen"}))))},f=a(19),b=a.n(f),g=a(33),_=a(34),v=a.n(_),N="[Auth] Login",y="[Auth] Logout",j="[UI] Set Error",w="[UI] Remove Error",O="[UI] Start loading",x="[UI] Finish loading",A=function(e){return{type:j,payload:e}},k=function(){return{type:x}},S=function(e,t){return function(a){a({type:O}),p.a.auth().signInWithEmailAndPassword(e,t).then((function(e){var t=e.user;a(C(t.uid,t.displayName)),a(k())})).catch((function(e){a(k()),v.a.fire("Authentication Error",e.message,"error")}))}},C=function(e,t){return{type:N,payload:{uid:e,displayName:t}}},I=function(){return{type:y}},P=function(){return r.a.createElement("div",{className:"journal__entry pointer"},r.a.createElement("div",{className:"journal__entry-picture"}),r.a.createElement("div",{className:"journal__entry-body"},r.a.createElement("p",{className:"jounral__entry-title"},"Titulo"),r.a.createElement("p",{className:"jounral__entry-content"},"Contenido del Entry")),r.a.createElement("div",{className:"journal__entry-date"},r.a.createElement("span",null,"Monday"),r.a.createElement("h4",null,"28")))},L=function(){return r.a.createElement("div",{className:"journal__entries"},[1,2,3,4,5,6,7,8,9,10,11,12].map((function(e){return r.a.createElement(P,{key:e})})))},U=function(){var e=Object(o.b)();return r.a.createElement("aside",{className:"journal__sidebar"},r.a.createElement("div",{className:"journal__sidebar-navbar"},r.a.createElement("h3",{className:"mt-5"},r.a.createElement("i",{className:"far fa-moon"}),r.a.createElement("span",null," Nicolas")),r.a.createElement("button",{onClick:function(){e(function(){var e=Object(g.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.auth().signOut();case 2:t(I());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},className:"btn"},"Logout")),r.a.createElement("div",{className:"journal__new-entry"},r.a.createElement("i",{className:"far fa-calendar-plus fa-5x"}),r.a.createElement("p",{className:"mt-5"},"New Entry")),r.a.createElement(L,null))},R=function(){return r.a.createElement("div",{className:"journal__main-content"},r.a.createElement(U,null),r.a.createElement("main",null,r.a.createElement(h,null)))},D=a(24),z=a(8),G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(e),a=Object(i.a)(t,2),r=a[0],c=a[1],l=function(){c(e)},o=function(e){var t=e.target;c(Object(z.a)(Object(z.a)({},r),{},Object(D.a)({},t.name,t.value)))};return[r,o,l]},F=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.ui})).loading,a=G({email:"nicososa@gmail.com",password:"123456"}),c=Object(i.a)(a,2),l=c[0],u=c[1],m=l.email,E=l.password;return r.a.createElement(n.Fragment,null,r.a.createElement("h3",{className:"auth__title"},"Login"),r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e(S(m,E))}},r.a.createElement("input",{className:"auth__input",type:"text",name:"email",value:m,onChange:u,placeholder:"Email"}),r.a.createElement("input",{className:"auth__input",type:"password",name:"password",value:E,onChange:u,placeholder:"Password"}),r.a.createElement("button",{className:"btn btn-primary btn-block",type:"submit",disabled:t},"Login"),r.a.createElement("div",{className:"auth__social-networks"},r.a.createElement("p",null,"Login with Social Network"),r.a.createElement("div",{onClick:function(){e((function(e){p.a.auth().signInWithPopup(d).then((function(t){var a=t.user;e(C(a.uid,a.displayName))}))}))},className:"google-btn"},r.a.createElement("div",{className:"google-icon-wrapper"},r.a.createElement("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google button"})),r.a.createElement("p",{className:"btn-text"},r.a.createElement("b",null,"Sign in with google"))),r.a.createElement(s.b,{className:"link mt-1",to:"/auth/register"},"Create new Account"))))},H=a(53),T=a.n(H),W=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.ui})).msgError,a=G({name:"Nicolas",email:"nicososa@gmail.com",password:"123456",password2:"123456"}),c=Object(i.a)(a,2),l=c[0],u=c[1],m=l.name,d=l.email,E=l.password,h=l.password2,f=function(){return 0===m.trim().length?(e(A("Name is required")),!1):T.a.isEmail(d)?E!==h||E.length<5?(e(A("Passwords missmatch")),!1):(e({type:w}),!0):(e(A("Email is not correct")),!1)};return r.a.createElement(n.Fragment,null,r.a.createElement("h3",{className:"auth__title"},"Register"),r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),f()&&e(function(e,t,a){return function(n){p.a.auth().createUserWithEmailAndPassword(e,t).then(function(){var e=Object(g.a)(b.a.mark((function e(t){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.user,e.next=3,r.updateProfile({displayName:a});case 3:n(C(r.uid,r.displayName));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){v.a.fire("User already exists",e.message,"error")}))}}(d,E,m))}},t&&r.a.createElement("div",{className:"auth__alert-error"},r.a.createElement("p",null,t)),r.a.createElement("input",{className:"auth__input",type:"text",name:"name",value:m,onChange:u,placeholder:"Name"}),r.a.createElement("input",{className:"auth__input",type:"text",name:"email",value:d,onChange:u,placeholder:"Email"}),r.a.createElement("input",{className:"auth__input",type:"password",name:"password",value:E,onChange:u,placeholder:"Password"}),r.a.createElement("input",{className:"auth__input",type:"password2",name:"password2",value:h,onChange:u,placeholder:"Confirm Password"}),r.a.createElement("button",{className:"btn btn-primary btn-block mt-1",type:"submit"},"Register"),r.a.createElement(s.b,{className:"link mt-1",to:"/auth/login"},"Already have an Account")))},X=function(){return r.a.createElement("div",{className:"auth__main"},r.a.createElement("div",{className:"auth__box-container"},r.a.createElement(u.d,null,r.a.createElement(u.b,{exact:!0,path:"/auth/login",component:F}),r.a.createElement(u.b,{exact:!0,path:"/auth/register",component:W}),r.a.createElement(u.a,{to:"/auth/login"}))))},q=a(25),B=function(e){var t=e.isAuthenticated,a=e.component,n=Object(q.a)(e,["isAuthenticated","component"]);return r.a.createElement(u.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(a,e):r.a.createElement(u.a,{to:"/auth"})}}))},J=function(e){var t=e.isAuthenticated,a=e.component,n=Object(q.a)(e,["isAuthenticated","component"]);return r.a.createElement(u.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(u.a,{to:"/"}):r.a.createElement(a,e)}}))},M=function(){var e=Object(o.b)(),t=Object(n.useState)(!0),a=Object(i.a)(t,2),c=a[0],l=a[1],m=Object(n.useState)(!1),d=Object(i.a)(m,2),E=d[0],h=d[1];return Object(n.useEffect)((function(){p.a.auth().onAuthStateChanged((function(t){(null===t||void 0===t?void 0:t.uid)?(e(C(t.uid,t.displayName)),h(!0)):h(!1),l(!1)}))}),[e,l]),c?r.a.createElement("h1",null,"Espere..."):r.a.createElement(s.a,null,r.a.createElement("div",null,r.a.createElement(u.d,null,r.a.createElement(J,{path:"/auth",isAuthenticated:E,component:X}),r.a.createElement(B,{exact:!0,path:"/",isAuthenticated:E,component:R}),r.a.createElement(u.a,{to:"/"}))))},V=a(13),K=a(54),Y={loading:!1,msgError:null},Z="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||V.d,Q=Object(V.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return{uid:t.payload.uid,name:t.payload.displayName};case y:return{};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(z.a)(Object(z.a)({},e),{},{msgError:t.payload});case w:return Object(z.a)(Object(z.a)({},e),{},{msgError:null});case O:return Object(z.a)(Object(z.a)({},e),{},{loading:!0});case x:return Object(z.a)(Object(z.a)({},e),{},{loading:!1});default:return e}}}),$=Object(V.e)(Q,Z(Object(V.a)(K.a))),ee=function(){return r.a.createElement(o.a,{store:$},r.a.createElement(M,null))};a(147);l.a.render(r.a.createElement(ee,null),document.getElementById("root"))},55:function(e,t,a){e.exports=a(148)}},[[55,1,2]]]);
//# sourceMappingURL=main.e810e76f.chunk.js.map