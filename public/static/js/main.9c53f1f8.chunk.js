(this["webpackJsonpreact-rails-api-project-template-client"]=this["webpackJsonpreact-rails-api-project-template-client"]||[]).push([[0],{141:function(e,t,n){},153:function(e,t,n){},158:function(e,t,n){"use strict";n.r(t);var a,r,i,c=n(0),s=n.n(c),o=n(41),j=n.n(o),l=n(19),d=(n(141),n(4)),u=n(17),b=n(43),h=n(88),O=n(18),x=n(215),f=n(228),p=n(227),g=n(226),m=n(209),v=n(1);function w(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}O.a.header(a||(a=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 8px;\n"]))),O.a.h1(r||(r=Object(u.a)(['\n  font-family: "Permanent Marker", cursive;\n  font-size: 3rem;\n  color: darkblue;\n  margin: 0;\n  line-height: 1;\n\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n']))),O.a.nav(i||(i=Object(u.a)(["\n  display: flex;\n  gap: 4px;\n  position: absolute;\n  right: 8px;\n"])));var y,S,R,C,D=function(e){var t=e.user,n=e.onLogin,a=s.a.useState(0),r=Object(d.a)(a,2),i=r[0],c=r[1];return Object(v.jsx)(m.a,{sx:{borderBottom:1,borderColor:"divider"},children:Object(v.jsx)(g.a,{sx:{width:"100%"},children:Object(v.jsx)(g.a,{children:Object(v.jsxs)(x.a,{value:i,onChange:function(e,t){c(t)},"aria-label":"basic tabs example",children:[Object(v.jsx)(f.a,Object(b.a)({component:l.b,to:"/user/".concat(t.id),label:t.username},w(0))),Object(v.jsx)(f.a,Object(b.a)({component:l.b,to:"/ratings/new",label:"New Review"},w(1))),Object(v.jsx)(f.a,Object(b.a)({component:l.b,to:"/restaurants",label:"Restaurants"},w(2))),Object(v.jsx)(f.a,Object(b.a)({onClick:function(){fetch("/logout",{method:"DELETE"}).then((function(e){e.ok&&n(null)}))},label:"Logout"},w(3))),Object(v.jsx)(f.a,{sx:{mx:"auto"},component:l.b,to:"/",label:"WKND EATR"})]})})})})},k=(O.a.div(y||(y=Object(u.a)(["\n  border-radius: 6px;\n  box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%),\n    0 0 0 1px rgb(10 10 10 / 2%);\n  padding: 16px;\n"]))),["variant","color"]),F={primary:{"--main":"steelblue","--accent":"white"},secondary:{"--main":"#a2add0","--accent":"white"}};var T,N,I,_,L,E,W,B=O.a.button(S||(S=Object(u.a)(["\n  cursor: pointer;\n  font-size: 1rem;\n  border: 1px solid transparent;\n  border-radius: 6px;\n  padding: 8px 16px;\n  text-decoration: none;\n"]))),P=Object(O.a)(B)(R||(R=Object(u.a)(["\n  background-color: var(--main);\n  color: var(--accent);\n\n  &:hover {\n    opacity: 0.9;\n  }\n"]))),z=Object(O.a)(B)(C||(C=Object(u.a)(["\n  background-color: white;\n  color: var(--main);\n  border: 2px solid var(--main);\n\n  &:hover {\n    background: hsl(235deg 85% 97%);\n  }\n"]))),U=function(e){var t,n=e.variant,a=void 0===n?"fill":n,r=e.color,i=void 0===r?"primary":r,c=Object(h.a)(e,k);return"fill"===a?t=P:"outline"===a&&(t=z),Object(v.jsx)(t,Object(b.a)({style:F[i]},c))},H=O.a.div(T||(T=Object(u.a)(["\n  &:not(:last-child) {\n    margin-bottom: 12px;\n  }\n"]))),M=O.a.input(N||(N=Object(u.a)(["\n  border-radius: 6px;\n  border: 1px solid transparent;\n  border-color: #dbdbdb;\n  -webkit-appearance: none;\n  max-width: 100%;\n  width: 100%;\n  font-size: 1rem;\n  line-height: 1.5;\n  padding: 4px;\n"]))),J=O.a.label(I||(I=Object(u.a)(["\n  color: #363636;\n  display: block;\n  font-size: 1rem;\n  font-weight: 700;\n  margin-bottom: 8px;\n"])));O.a.textarea(_||(_=Object(u.a)(["\n  border-radius: 6px;\n  border: 1px solid transparent;\n  border-color: #dbdbdb;\n  -webkit-appearance: none;\n  max-width: 100%;\n  width: 100%;\n  font-size: 1rem;\n  line-height: 1.5;\n  padding: 4px;\n  resize: none;\n"])));var A=O.a.div(L||(L=Object(u.a)(["\n  color: red;\n  background-color: mistyrose;\n  border-radius: 6px;\n  display: flex;\n  padding: 8px;\n  align-items: center;\n  gap: 8px;\n  margin: 8px 0;\n"]))),V=O.a.span(E||(E=Object(u.a)(["\n  background-color: white;\n  height: 30px;\n  width: 30px;\n  border-radius: 50%;\n  font-weight: bold;\n  display: grid;\n  place-content: center;\n"]))),Y=O.a.p(W||(W=Object(u.a)(["\n  margin: 0;\n"]))),K=function(e){var t=e.children;return Object(v.jsxs)(A,{children:[Object(v.jsx)(V,{children:"!"}),Object(v.jsx)(Y,{children:t})]})},q=n(224);var G=function(e){var t=e.onLogin,n=Object(c.useState)(""),a=Object(d.a)(n,2),r=a[0],i=a[1],s=Object(c.useState)(""),o=Object(d.a)(s,2),j=o[0],l=o[1],u=Object(c.useState)([]),b=Object(d.a)(u,2),h=b[0],O=b[1],x=Object(c.useState)(!1),f=Object(d.a)(x,2),p=f[0],g=f[1];return Object(v.jsxs)("form",{onSubmit:function(e){e.preventDefault(),g(!0),fetch("/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:r,password:j})}).then((function(e){g(!1),e.ok?e.json().then((function(e){return t(e)})):e.json().then((function(e){return O(e.errors)}))}))},children:[Object(v.jsxs)(H,{children:[Object(v.jsx)(J,{htmlFor:"username",children:"username"}),Object(v.jsx)(M,{type:"text",id:"username",autoComplete:"off",value:r,onChange:function(e){return i(e.target.value)}})]}),Object(v.jsxs)(H,{children:[Object(v.jsx)(J,{htmlFor:"password",children:"Password"}),Object(v.jsx)(M,{type:"password",id:"password",autoComplete:"current-password",value:j,onChange:function(e){return l(e.target.value)}})]}),Object(v.jsx)(H,{children:Object(v.jsx)(q.a,{variant:"contained",type:"submit",children:p?"Loading...":"Login"})}),Object(v.jsx)(H,{children:h.map((function(e){return Object(v.jsx)(K,{children:e},e)}))})]})};var Q,X,Z,$=function(e){var t=e.onLogin,n=Object(c.useState)(""),a=Object(d.a)(n,2),r=a[0],i=a[1],s=Object(c.useState)(""),o=Object(d.a)(s,2),j=o[0],l=o[1],u=Object(c.useState)(""),b=Object(d.a)(u,2),h=b[0],O=b[1],x=Object(c.useState)(""),f=Object(d.a)(x,2),p=f[0],g=f[1],m=Object(c.useState)(""),w=Object(d.a)(m,2),y=w[0],S=w[1],R=Object(c.useState)([]),C=Object(d.a)(R,2),D=C[0],k=C[1],F=Object(c.useState)(!1),T=Object(d.a)(F,2),N=T[0],I=T[1];return Object(v.jsxs)("form",{onSubmit:function(e){e.preventDefault(),k([]),I(!0),fetch("/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:r,password:j,password_confirmation:h,first_name:p,location:y})}).then((function(e){I(!1),e.ok?e.json().then((function(e){return t(e)})):e.json().then((function(e){return k(e.errors)}))}))},children:[Object(v.jsxs)(H,{children:[Object(v.jsx)(J,{htmlFor:"username",children:"Username"}),Object(v.jsx)(M,{type:"text",id:"username",autoComplete:"off",value:r,onChange:function(e){return i(e.target.value)}})]}),Object(v.jsxs)(H,{children:[Object(v.jsx)(J,{htmlFor:"password",children:"Password"}),Object(v.jsx)(M,{type:"password",id:"password",value:j,onChange:function(e){return l(e.target.value)},autoComplete:"current-password"})]}),Object(v.jsxs)(H,{children:[Object(v.jsx)(J,{htmlFor:"password",children:"Password Confirmation"}),Object(v.jsx)(M,{type:"password",id:"password_confirmation",value:h,onChange:function(e){return O(e.target.value)},autoComplete:"current-password"})]}),Object(v.jsxs)(H,{children:[Object(v.jsx)(J,{htmlFor:"firstName",children:"First Name"}),Object(v.jsx)(M,{type:"text",id:"firstName",value:p,onChange:function(e){return g(e.target.value)}})]}),Object(v.jsxs)(H,{children:[Object(v.jsx)(J,{htmlFor:"location",children:"Location"}),Object(v.jsx)(M,{type:"text",id:"location",value:y,onChange:function(e){return S(e.target.value)}})]}),Object(v.jsx)(H,{children:Object(v.jsx)(U,{type:"submit",children:N?"Loading...":"Sign Up"})}),Object(v.jsx)(H,{children:D.map((function(e){return Object(v.jsx)(K,{children:e},e)}))})]})};O.a.h1(Q||(Q=Object(u.a)(['\n  font-family: "Permanent Marker", cursive;\n  font-size: 3rem;\n  color: darkblue;\n  margin: 8px 0 16px;\n'])));var ee,te,ne,ae=O.a.section(X||(X=Object(u.a)(["\n  max-width: 500px;\n  margin: 40px auto;\n  padding: 16px;\n"]))),re=O.a.hr(Z||(Z=Object(u.a)(["\n  border: none;\n  border-bottom: 1px solid #ccc;\n  margin: 16px 0;\n"]))),ie=function(e){var t=e.onLogin,n=Object(c.useState)(!0),a=Object(d.a)(n,2),r=a[0],i=a[1];return Object(v.jsxs)(ae,{children:[Object(v.jsx)("h1",{children:"WKND EATER"}),r?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(G,{onLogin:t}),Object(v.jsx)(re,{}),Object(v.jsxs)("p",{children:["Don't have an account? \xa0",Object(v.jsx)(q.a,{variant:"contained",onClick:function(){return i(!1)},children:"Sign Up"})]})]}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)($,{onLogin:t}),Object(v.jsx)(re,{}),Object(v.jsxs)("p",{children:["Already have an account? \xa0",Object(v.jsx)(q.a,{variant:"contained",onClick:function(){return i(!0)},children:"Log In"})]})]})]})},ce=n(16),se=n(10),oe=n(3),je=n(15),le=n.n(je),de=n(24),ue=n(38),be=Object(ue.b)("restaurants/fetchRestaurants",Object(de.a)(le.a.mark((function e(){var t;return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/restaurants");case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))),he=Object(ue.c)({name:"restaurants",initialState:{entities:[],status:"idle"},reducers:{},extraReducers:(ee={},Object(oe.a)(ee,be.pending,(function(e){console.log("loading"),e.status="loading"})),Object(oe.a)(ee,be.fulfilled,(function(e,t){console.log("fulfilled"),e.entities=t.payload,e.status="idle"})),ee)}).reducer;var Oe=O.a.section(te||(te=Object(u.a)(["\n  max-width: 1000px;\n  margin: 40px auto;\n  padding: 16px;\n  display: flex;\n  gap: 24px;\n"]))),xe=O.a.div(ne||(ne=Object(u.a)(["\n  flex: 1;\n"]))),fe=function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),i=Object(d.a)(r,2),s=i[0],o=i[1],j=Object(c.useState)([]),l=Object(d.a)(j,2),u=l[0],b=l[1],h=Object(c.useState)(!1),O=Object(d.a)(h,2),x=O[0],f=O[1],p=Object(se.m)(),g=Object(ce.b)();return Object(v.jsx)(Oe,{children:Object(v.jsxs)(xe,{children:[Object(v.jsx)("h2",{children:"Create Restaurant"}),Object(v.jsxs)("form",{onSubmit:function(e){e.preventDefault(),f(!0),fetch("/restaurants",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n,location:s})}).then((function(e){f(!1),e.ok?e.json().then(g(be())).then(p("/restaurants")):e.json().then((function(e){return b(e.errors)}))}))},children:[Object(v.jsxs)(H,{children:[Object(v.jsx)(J,{htmlFor:"name",children:"Restaurant Name"}),Object(v.jsx)(M,{type:"text",id:"name",value:n,onChange:function(e){return a(e.target.value)}})]}),Object(v.jsxs)(H,{children:[Object(v.jsx)(J,{htmlFor:"location",children:"Restaurant Location"}),Object(v.jsx)(M,{type:"text",id:"location",value:s,onChange:function(e){return o(e.target.value)}})]}),Object(v.jsx)(H,{children:Object(v.jsx)(U,{color:"primary",type:"submit",children:x?"Loading...":"Submit Restaurant"})}),Object(v.jsx)(H,{children:u.map((function(e){return Object(v.jsx)(K,{children:e},e)}))})]})]})})},pe=n(212),ge=n(213),me=n(230),ve=n(222),we=n(214),ye=n(219);function Se(e){var t=e.filter,n=e.handleChange,a=Object(ce.c)((function(e){return e.restaurants.entities})).map((function(e){return e.location}));return Object(v.jsx)(g.a,{mt:2,children:Object(v.jsxs)(me.a,{variant:"standard",sx:{m:1,minWidth:120},children:[Object(v.jsx)(ve.a,{id:"select-restaurant-label",children:"Filter By Location"}),Object(v.jsx)(we.a,{labelId:"select-neighborhood",id:"filter",value:t,onChange:n,label:"Neighborhood",children:a?a.map((function(e,t){return Object(v.jsx)(ye.a,{value:e,children:e},t)})):""})]})})}var Re=n(234),Ce=n(235),De=n(236),ke=n(55),Fe=n.n(ke),Te=n(229);function Ne(e){var t=e.restaurant,n=e.handleDeleteRestaurant;return Object(v.jsxs)(Re.a,{sx:{minWidth:345},children:[Object(v.jsx)(Ce.a,{title:t.name,action:Object(v.jsx)(Te.a,{"aria-label":"settings",onClick:function(e){return n(t.id)},children:Object(v.jsx)(Fe.a,{})}),subheader:"Location: ".concat(t.location)}),Object(v.jsx)(De.a,{children:Object(v.jsx)(q.a,{component:l.b,to:"".concat(t.id),variant:"standard",children:"Top Dishes"})})]},t.id)}function Ie(e){var t=e.restaurants,n=e.handleDelete;return Object(v.jsx)(v.Fragment,{children:t?t.map((function(e){return Object(v.jsx)(Ne,{restaurant:e,handleDelete:n},e.id)})):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(p.a,{variant:"h2",children:"No Restaurants Found"}),Object(v.jsx)(q.a,{component:l.b,to:"/restaurants",children:"Back To Homepage"})]})})}var _e,Le=function(){var e=Object(ce.c)((function(e){return e.restaurants.entities})),t=Object(c.useState)("-"),n=Object(d.a)(t,2),a=n[0],r=n[1];return e.map((function(e){return e.location})),Object(se.m)(),Object(ce.b)(),console.log(e),Object(v.jsx)(pe.a,{maxWidth:"sm",children:Object(v.jsxs)(ge.a,{mt:2,spacing:3,children:[Object(v.jsx)(p.a,{variant:"h4",children:"Top Restaurants"}),Object(v.jsx)(Se,{filter:a,handleChange:function(e){r(e.target.value)}}),Object(v.jsx)(ge.a,{mt:2,spacing:3,children:Object(v.jsx)(Ie,{restaurants:"-"===a?e:e.filter((function(e){return e.location===a}))})}),Object(v.jsx)(q.a,{variant:"outlined",component:l.b,to:"/restaurants/new",children:"Create New Restaurant"})]})})},Ee=Object(ue.b)("dishes/fetchDishes",Object(de.a)(le.a.mark((function e(){var t;return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/dishes");case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))),We=Object(ue.c)({name:"dishes",initialState:{entities:[],status:"idle"},reducers:{},extraReducers:(_e={},Object(oe.a)(_e,Ee.pending,(function(e){console.log("loading"),e.status="loading"})),Object(oe.a)(_e,Ee.fulfilled,(function(e,t){console.log("fulfilled"),e.entities=t.payload,e.status="idle"})),_e)}).reducer,Be=n(237),Pe=n(220);function ze(e){var t=e.dish;e.handleDeleteDish;return function(e){var n=Object(se.o)(),a=Object(ce.b)();return Object(v.jsxs)(Re.a,{sx:{minWidth:345},children:[Object(v.jsx)(Ce.a,{title:t.name,subtitle:n.id?"":"Restaurant: ".concat(t.restaurant.name),action:Object(v.jsx)(Te.a,{"aria-label":"settings",onClick:function(e){return n=t.id,void fetch("/dishes/".concat(n),{method:"DELETE"}).then(a(Ee()));var n},children:Object(v.jsx)(Fe.a,{})})}),Object(v.jsxs)(Be.a,{children:[Object(v.jsxs)(p.a,{variant:"subtitle2",children:[t.ratings.length>0?"Avg. Rating:":""," "]}),t.ratings?Object(v.jsx)(Pe.a,{name:"half-rating-read",precision:.1,value:t.average,readOnly:!0,size:"small"}):"",Object(v.jsxs)(p.a,{variant:"subtitle2",children:["Total Ratings: ",t.ratings.length," "]})]}),Object(v.jsxs)(De.a,{children:[Object(v.jsx)(q.a,{component:l.b,to:"/ratings/".concat(t.id),variant:"outlined",children:"Read Reviews"}),Object(v.jsx)(q.a,{component:l.b,to:"/ratings/new/".concat(t.restaurant_id,"/").concat(t.id,"/"),variant:"outlined",children:"Review This Dish"})]})]},t.id)}()}function Ue(e){var t=e.dishes,n=e.handleDeleteDish;return t?t.map((function(e){return Object(v.jsx)(ze,{dish:e,handleDeleteDish:n})})):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h2",{children:"No Dishes Found"}),Object(v.jsx)(q.a,{component:l.b,to:"/ratings",variant:"contained",children:"Back To Homepage"})]})}var He,Me,Je=function(){var e=Object(ce.b)(),t=Object(ce.c)((function(e){return e.restaurants.entities})),n=Object(ce.c)((function(e){return e.dishes.entities})),a=Object(se.o)(),r=a.id&&n.length>0?n.filter((function(e){return e.restaurant_id===parseInt(a.id)})):n;console.log(a.id);var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t.find((function(e){return e.id===parseInt(a.id)}))&&""===e?t.find((function(e){return e.id===parseInt(a.id)})).name:t.find((function(t){return t.id===e}))?t.find((function(t){return t.id===e})).name:void 0}();return Object(c.useEffect)((function(){e(Ee())}),[e]),Object(v.jsxs)(pe.a,{maxWidth:"sm",children:[Object(v.jsxs)(p.a,{variant:"h4",children:[i," Top Rated Dishes"]}),Object(v.jsx)(ge.a,{mt:2,spacing:3,children:Object(v.jsx)(Ue,{dishes:r})}),Object(v.jsx)(g.a,{mt:2,children:Object(v.jsx)(q.a,{component:l.b,to:"/ratings/new",variant:"contained",children:"Create New Dish"})})]})},Ae=n(223),Ve=n(238),Ye=n(217);O.a.section(He||(He=Object(u.a)(["\n  max-width: 1000px;\n  margin: 40px auto;\n  padding: 16px;\n  display: flex;\n  gap: 24px;\n"]))),O.a.div(Me||(Me=Object(u.a)(["\n  flex: 1;\n"])));var Ke,qe,Ge=function(e){var t=e.dishName,n=e.setDishName,a=e.dishType,r=e.setDishType,i=e.dishVegan,c=e.setDishVegan;return Object(v.jsxs)(ge.a,{mt:2,spacing:3,children:[Object(v.jsx)(p.a,{variant:"h5",children:"Add New Dish"}),Object(v.jsx)(me.a,{children:Object(v.jsx)(Ae.a,{id:"dishName",value:t,label:"Dish Name",variant:"standard",onChange:function(e){return n(e.target.value)}})}),Object(v.jsxs)(me.a,{variant:"standard",sx:{m:1,minWidth:120},children:[Object(v.jsx)(ve.a,{id:"select-dish-type-label",children:"Dish Type"}),Object(v.jsxs)(we.a,{labelId:"select-type",id:"type",value:a,onChange:function(e){return r(e.target.value)},label:"Restaurant",children:[Object(v.jsx)(ye.a,{value:"appetizer",children:"Appetizer"},"appetizer"),Object(v.jsx)(ye.a,{value:"entree",children:"Entree"},"entree"),Object(v.jsx)(ye.a,{value:"dessert",children:"Dessert"},"dessert"),Object(v.jsx)(ye.a,{value:"drink",children:"Drink"},"drink")]})]}),Object(v.jsx)(me.a,{children:Object(v.jsx)(Ve.a,{control:Object(v.jsx)(Ye.a,{value:i,onChange:function(e){return c(e.target.value)}}),label:"Spicy?"})})]})};Object(O.a)(Pe.a)({"& .MuiRating-iconFilled":{color:"#ff6d75"},"& .MuiRating-iconHover":{color:"#ff3d47"}});O.a.section(Ke||(Ke=Object(u.a)(["\n  max-width: 1000px;\n  margin: 40px auto;\n  padding: 16px;\n  display: flex;\n  gap: 24px;\n"]))),O.a.div(qe||(qe=Object(u.a)(["\n  flex: 1;\n"])));var Qe,Xe,Ze=function(e){var t=e.userId,n=Object(ce.b)(),a=Object(ce.c)((function(e){return e.restaurants.entities})),r=Object(ce.c)((function(e){return e.dishes.entities})),i=Object(c.useState)(""),s=Object(d.a)(i,2),o=s[0],j=s[1],l=Object(c.useState)(""),u=Object(d.a)(l,2),b=u[0],h=u[1],O=Object(c.useState)(""),x=Object(d.a)(O,2),f=x[0],g=x[1],m=Object(c.useState)(""),w=Object(d.a)(m,2),y=w[0],S=w[1],R=Object(c.useState)(""),C=Object(d.a)(R,2),D=C[0],k=C[1],F=Object(c.useState)(!1),T=Object(d.a)(F,2),N=T[0],I=T[1],_=Object(c.useState)([]),L=Object(d.a)(_,2),E=L[0],W=L[1],B=Object(se.m)(),P=Object(se.o)(),z=Object(c.useState)(""),U=Object(d.a)(z,2),H=U[0],M=U[1],J=Object(c.useState)(""),A=Object(d.a)(J,2),V=A[0],Y=A[1],G=Object(c.useState)(!1),Q=Object(d.a)(G,2),X=Q[0],Z=Q[1],$=function(){return"Make New Dish"!==o},ee=function(){if(a.length>0&&r.length>0){var e=a.find((function(e){return e.id===parseInt(P.restaurant_id)})),t=r.find((function(e){return e.id===parseInt(P.dish_id)}));return{restaurant:e.name,dish:t.name}}return{restaurant:"loading...",dish:"loading..."}};return console.log(o,$()),Object(v.jsx)(pe.a,{maxWidth:"sm",children:Object(v.jsxs)(ge.a,{mt:2,spacing:3,children:[Object(v.jsx)(p.a,{variant:"h4",children:"Write Review"}),P.restaurant_id?Object(v.jsxs)(p.a,{variant:"subtitle1",children:["Restaurant ",ee().restaurant]}):Object(v.jsxs)(me.a,{variant:"standard",sx:{m:1,minWidth:120},children:[Object(v.jsx)(ve.a,{id:"select-restaurant-label",children:"Restaurant"}),Object(v.jsx)(we.a,{labelId:"select-restaurant",id:"restaurant",value:b,onChange:function(e){return h(e.target.value)},label:"Restaurant",children:a.map((function(e){return Object(v.jsx)(ye.a,{value:e.id,children:e.name},e.id)}))})]}),P.dish_id?Object(v.jsxs)(p.a,{variant:"subtitle1",children:["Dish ",ee().dish]}):Object(v.jsxs)(me.a,{variant:"standard",sx:{m:1,minWidth:120},children:[Object(v.jsx)(ve.a,{id:"select-dish-label",children:"Dish"}),Object(v.jsxs)(we.a,{labelId:"select-dish",id:"dish",value:o,onChange:function(e){console.log(e.target.value),j(e.target.value)},label:"Dish",children:[Object(v.jsx)(ye.a,{value:"Make New Dish",children:"Make New Dish"}),""===b?Object(v.jsx)(ye.a,{children:"Pick a Restaurant"},"Pick a restaurant"):a.find((function(e){return e.id===parseInt(b)})).dishes.map((function(e){return Object(v.jsx)(ye.a,{value:e.id,children:e.name},e.id)}))]})]}),$()?"":Object(v.jsx)(Ge,{dishName:H,setDishName:M,dishType:V,setDishType:Y,dishVegan:X,setDishVegan:Z}),Object(v.jsx)(p.a,{variant:"h5",children:"Review"}),Object(v.jsxs)(ge.a,{mt:2,spacing:3,children:[Object(v.jsx)(me.a,{children:Object(v.jsx)(Ae.a,{id:"title",label:"Title",value:y,variant:"standard",onChange:function(e){return S(e.target.value)}})}),Object(v.jsxs)(me.a,{children:[Object(v.jsx)(p.a,{children:"Dish Score"}),Object(v.jsx)(Pe.a,{label:"Score",name:"half-rating",defaultValue:2.5,precision:.1,onChange:function(e){return g(e.target.value)},value:f})]}),Object(v.jsx)(me.a,{children:Object(v.jsx)(Ae.a,{variant:"standard",id:"outlined-textarea",label:"Review Body",onChange:function(e){return k(e.target.value)},placeholder:"Write Your Review",multiline:!0})}),Object(v.jsx)(q.a,{variant:"outlined",type:"submit",onClick:function(e){if(e.preventDefault(),I(!0),$()){var a=function(){return P.restaurant_id&&P.dish_id?P.dish_id:o};fetch("/ratings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({dish_id:a(),user_id:t,score:f,title:y,review:D})}).then((function(e){I(!1),e.ok?e.json().then(n(Ee())).then(B("/ratings/".concat(a()))):e.json().then((function(e){return W(e.errors)}))}))}else console.log("hit"),fetch("/dishes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({restaurant_id:b,name:H,dish_type:V,vegan:X,ratings_attributes:[{user_id:t,score:f,title:y,review:D}]})}).then((function(e){I(!1),e.ok?e.json().then(n(Ee())).then(B("/restaurants/".concat(b))):e.json().then((function(e){return console.log(e.errors)}))}))},children:N?"Loading...":"Submit Review"})]}),E.map((function(e){return Object(v.jsx)(K,{children:e},e)}))]})})};Object(O.a)(Pe.a)({"& .MuiRating-iconFilled":{color:"#ff6d75"},"& .MuiRating-iconHover":{color:"#ff3d47"}});O.a.section(Qe||(Qe=Object(u.a)(["\n  max-width: 1000px;\n  margin: 40px auto;\n  padding: 16px;\n  display: flex;\n  gap: 24px;\n"]))),O.a.div(Xe||(Xe=Object(u.a)(["\n  flex: 1;\n"])));var $e,et=function(e){var t=e.userId,n=Object(ce.b)(),a=Object(ce.c)((function(e){return e.restaurants.entities})),r=(Object(ce.c)((function(e){return e.dishes.entities})),Object(ce.c)((function(e){return e.ratings.entities})));console.log(r);var i=Object(se.o)();function s(){return r.find((function(e){return parseInt(e.id)===parseInt(i.rating_id)}))}var o=s();console.log(s(),i.rating_id);var j=Object(c.useState)(o.dish.id),l=Object(d.a)(j,2),u=l[0],b=l[1],h=Object(c.useState)(o.restaurant.id),O=Object(d.a)(h,2),x=O[0],f=O[1],g=Object(c.useState)(o.score),m=Object(d.a)(g,2),w=m[0],y=m[1],S=Object(c.useState)(o.title),R=Object(d.a)(S,2),C=R[0],D=R[1],k=Object(c.useState)(o.review),F=Object(d.a)(k,2),T=F[0],N=F[1],I=Object(c.useState)(!1),_=Object(d.a)(I,2),L=_[0],E=_[1],W=Object(c.useState)([]),B=Object(d.a)(W,2),P=B[0],z=B[1],U=Object(se.m)();return Object(v.jsx)(pe.a,{maxWidth:"sm",children:Object(v.jsxs)(ge.a,{mt:2,spacing:3,children:[Object(v.jsx)(p.a,{variant:"h4",children:"Write Review"}),Object(v.jsxs)(me.a,{variant:"standard",sx:{m:1,minWidth:120},children:[Object(v.jsx)(ve.a,{id:"select-restaurant-label",children:"Restaurant"}),Object(v.jsx)(we.a,{labelId:"select-restaurant",id:"restaurant",value:x,onChange:function(e){return f(e.target.value)},label:"Restaurant",children:a.map((function(e){return Object(v.jsx)(ye.a,{value:e.id,children:e.name},e.id)}))})]}),Object(v.jsxs)(me.a,{variant:"standard",sx:{m:1,minWidth:120},children:[Object(v.jsx)(ve.a,{id:"select-dish-label",children:"Dish"}),Object(v.jsx)(we.a,{labelId:"select-dish",id:"dish",value:u,onChange:function(e){console.log(e.target.value),b(e.target.value)},label:"Dish",children:""===x?Object(v.jsx)(ye.a,{children:"Pick a Restaurant"},"Pick a restaurant"):a.find((function(e){return e.id===parseInt(x)})).dishes.map((function(e){return Object(v.jsx)(ye.a,{value:e.id,children:e.name},e.id)}))})]}),Object(v.jsx)(p.a,{variant:"h5",children:"Review"}),Object(v.jsxs)(ge.a,{mt:2,spacing:3,children:[Object(v.jsx)(me.a,{children:Object(v.jsx)(Ae.a,{id:"title",label:"Title",value:C,variant:"standard",onChange:function(e){return D(e.target.value)}})}),Object(v.jsxs)(me.a,{children:[Object(v.jsx)(p.a,{children:"Dish Score"}),Object(v.jsx)(Pe.a,{label:"Score",name:"half-rating",defaultValue:2.5,precision:.1,onChange:function(e){return y(e.target.value)},value:w})]}),Object(v.jsx)(me.a,{children:Object(v.jsx)(Ae.a,{variant:"standard",id:"outlined-textarea",value:T,label:"Review Body",onChange:function(e){return N(e.target.value)},placeholder:"Write Your Review",multiline:!0})}),Object(v.jsx)(q.a,{variant:"outlined",type:"submit",onClick:function(e){e.preventDefault(),E(!0),fetch("/ratings/".concat(i.rating_id),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({dish_id:u,user_id:t,score:w,title:C,review:T})}).then((function(e){E(!1),e.ok?e.json().then(n(Ee())).then(U("/ratings/".concat(u,"}"))):e.json().then((function(e){return z(e.errors)}))}))},children:L?"Loading...":"Update Review"})]}),P.map((function(e){return Object(v.jsx)(K,{children:e},e)}))]})})},tt=n(21),nt=Object(ue.b)("ratings/fetchRatings",Object(de.a)(le.a.mark((function e(){var t;return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/ratings");case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))),at=Object(ue.c)({name:"ratings",initialState:{entities:[],status:"idle"},reducers:{},extraReducers:($e={},Object(oe.a)($e,nt.pending,(function(e){console.log("loading"),e.status="loading"})),Object(oe.a)($e,nt.fulfilled,(function(e,t){console.log("fulfilled"),e.entities=t.payload,e.status="idle"})),$e)}).reducer,rt=n(125),it=n.n(rt),ct=n(218);var st=function(e){var t=e.rating,n=e.displayUserButton,a=e.displayTitleOff,r=e.handleDeleteRating,i=Object(c.useState)(null),s=Object(d.a)(i,2),o=s[0],j=s[1],u=Object(c.useState)(""),b=Object(d.a)(u,2),h=b[0],O=b[1],x=Object(se.m)();return Object(c.useEffect)((function(){fetch("/me").then((function(e){e.ok&&e.json().then((function(e){return j(e)}))}))}),[]),t?Object(v.jsxs)(Re.a,{sx:{minWidth:345},children:[a?"":Object(v.jsx)(Ce.a,{title:"".concat(t.dish.name," from ").concat(t.restaurant.name),subtitle:"Location: ".concat(t.restaurant.location)}),Object(v.jsxs)(Be.a,{children:[Object(v.jsx)(p.a,{variant:"h6",children:t.title}),Object(v.jsx)(Pe.a,{name:"half-rating-read",precision:.1,value:t.score,readOnly:!0,size:"small"}),Object(v.jsx)(p.a,{children:t.review})]}),Object(v.jsxs)(De.a,{children:[n?Object(v.jsx)(q.a,{component:l.b,to:"/user/".concat(t.user.id),variant:"outline",children:t.user.username}):"",Object(v.jsx)(Te.a,{onClick:function(){parseInt(t.user.id)===parseInt(o.id)?r(t.id,t.dish.id):O(Object(v.jsx)(ct.a,{severity:"error",children:"You may only delete one of your own reviews!"}))},children:Object(v.jsx)(Fe.a,{})}),Object(v.jsx)(Te.a,{onClick:function(){parseInt(t.user.id)===parseInt(o.id)?(console.log("this user should be able to edit"),x("/ratings/update/".concat(t.id))):O(Object(v.jsx)(ct.a,{severity:"error",children:"You may only update one of your own reviews!"}))},children:Object(v.jsx)(it.a,{})})]}),h]},t.id):Object(v.jsx)(p.a,{variant:"h5",children:"Loading..."})};var ot=function(e){var t=e.ratings,n=e.displayUserButton,a=e.displayTitleOff,r=e.handleDeleteRating;return t?t.map((function(e){return Object(v.jsx)(st,{rating:e,displayUserButton:n,displayTitleOff:a,handleDeleteRating:r})})):Object(v.jsxs)(g.a,{children:[Object(v.jsx)("h2",{children:"No Ratings Found"}),Object(v.jsx)(q.a,{as:l.b,to:"/",children:"Back To Homepage"})]})};var jt=function(e){var t=e.restaurantFilter,n=e.neighborhoodFilter,a=e.locations,r=e.restaurantNames,i=e.setNeighborhoodFilter,c=e.setRestaurantFilter;return Object(v.jsxs)(pe.a,{children:[Object(v.jsxs)(me.a,{variant:"standard",sx:{m:1,minWidth:120},children:[Object(v.jsx)(ve.a,{id:"select-neighborhood-label",children:"Filter By Neighborhood"}),Object(v.jsx)(we.a,{labelId:"select-neighborhood",id:"neighborhoodFilter",value:n,onChange:function(e){return i(e.target.value)},label:"Neighborhood",children:a.length>0?a.map((function(e,t){return Object(v.jsx)(ye.a,{value:e,children:e},t)})):""})]}),Object(v.jsxs)(me.a,{variant:"standard",sx:{m:1,minWidth:120},children:[Object(v.jsx)(ve.a,{id:"select-restaurant-label",children:"Filter By Restaurant"}),Object(v.jsx)(we.a,{labelId:"select-restaurant",id:"restaurantFilter",value:t,onChange:function(e){return c(e.target.value)},label:"Restaurant",children:a.length>0?r.map((function(e,t){return Object(v.jsx)(ye.a,{value:e,children:e},t)})):""})]})]})};var lt=function(e){e.user;var t=Object(ce.b)(),n=Object(se.m)(),a=Object(ce.c)((function(e){return e.restaurants.entities})),r=Object(ce.c)((function(e){return e.ratings.entities})),i=a.map((function(e){return e.location})),s=a.map((function(e){return e.name})),o=["-"].concat(Object(tt.a)(new Set(i))),j=["-"].concat(Object(tt.a)(new Set(s))),u=Object(c.useState)("-"),b=Object(d.a)(u,2),h=b[0],O=b[1],x=Object(c.useState)("-"),f=Object(d.a)(x,2),g=f[0],m=f[1];return console.log("reloaded page"),Object(v.jsxs)(pe.a,{maxWidth:"sm",children:[Object(v.jsx)(p.a,{variant:"h4",children:"Latest Ratings"}),Object(v.jsxs)(ge.a,{mt:2,spacing:3,children:[Object(v.jsx)(jt,{neighborhoodFilter:g,restaurantFilter:h,locations:o,restaurantNames:j,setRestaurantFilter:O,setNeighborhoodFilter:m}),r?Object(v.jsx)(ot,{ratings:"-"===g&&"-"===h?r:"-"!==g&&"-"===h?r.filter((function(e){return e.restaurant.location===g})):"-"!==h&&"-"===g?r.filter((function(e){return e.restaurant.name===h})):r.filter((function(e){return e.restaurant.name===h})).filter((function(e){return e.restaurant.location===g})),displayUserButton:!0,handleDeleteRating:function(e,a){fetch("/ratings/".concat(e),{method:"DELETE"}).then((function(){t(nt()).then(n("/"))}))}}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h2",{children:"No Ratings Found"}),Object(v.jsx)(q.a,{as:l.b,to:"/",children:"Back To Homepage"})]}),Object(v.jsx)(q.a,{component:l.b,to:"/ratings/new",variant:"outlined",children:"Create New Rating"})]})]})};n(153);var dt,ut=Object(ue.b)("users/fetchUsers",Object(de.a)(le.a.mark((function e(){var t;return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/users");case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))),bt=Object(ue.c)({name:"users",initialState:{entities:[],status:"idle"},reducers:{},extraReducers:(dt={},Object(oe.a)(dt,ut.pending,(function(e){console.log("loading"),e.status="loading"})),Object(oe.a)(dt,ut.fulfilled,(function(e,t){console.log("fulfilled"),e.entities=t.payload,e.status="idle"})),dt)}).reducer;function ht(e){var t=e.user;return Object(v.jsxs)(p.a,{variant:"h5",children:[t.first_name,", ",t.location]})}var Ot=function(e){e.user,Object(ce.c)((function(e){return e.restaurants.entities}));var t=Object(ce.c)((function(e){return e.ratings.entities})),n=Object(ce.c)((function(e){return e.users.entities})),a=Object(se.o)(),r=n.find((function(e){return e.id==a.id}));return console.log(r),Object(v.jsxs)(pe.a,{maxWidth:"sm",children:[Object(v.jsx)(p.a,{variant:"h4",children:r.username}),Object(v.jsxs)(ge.a,{mt:2,spacing:3,children:[r?Object(v.jsx)(ht,{user:r}):"",t?Object(v.jsx)(ot,{ratings:r.ratings}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h2",{children:"No Ratings Found"}),Object(v.jsx)(q.a,{as:l.b,to:"/",children:"Back To Homepage"})]}),Object(v.jsx)(q.a,{component:l.b,to:"/ratings/new",variant:"outlined",children:"Create New Rating"})]})]})};var xt=function(){var e=Object(ce.b)(),t=Object(se.m)(),n=Object(ce.c)((function(e){return e.restaurants.entities})),a=Object(ce.c)((function(e){return e.ratings.entities})),r=Object(ce.c)((function(e){return e.dishes.entities})),i=Object(se.o)();function c(){return r.find((function(e){return parseInt(e.id)===parseInt(i.dish_id)}))}console.log(r,i.dish_id);var s=c(),o=n.find((function(e){return parseInt(s.restaurant_id)===parseInt(e.id)})),j=c().ratings;return Object(v.jsxs)(pe.a,{maxWidth:"sm",children:[Object(v.jsxs)(p.a,{variant:"h4",children:["Ratings for ",s.name," from ",o.name]}),Object(v.jsxs)(ge.a,{mt:2,spacing:3,children:[a?Object(v.jsx)(ot,{ratings:j,displayUserButton:!0,displayTitleOff:!0,handleDeleteRating:function(n,a){fetch("/ratings/".concat(n),{method:"DELETE"}).then((function(){e(nt()).then(t("/"))}))}}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h2",{children:"No Ratings Found"}),Object(v.jsx)(q.a,{as:l.b,to:"/",children:"Back To Homepage"})]}),i.dish_id?Object(v.jsx)(q.a,{component:l.b,to:"/ratings/new/".concat(s.restaurant_id,"/").concat(s.id,"/"),variant:"outlined",children:"Rate This Dish"}):Object(v.jsx)(q.a,{component:l.b,to:"/ratings/new",variant:"outlined",children:"Create New Rating"})]})]})};n(154),n(155),n(156),n(157);var ft=function(){var e=Object(c.useState)(null),t=Object(d.a)(e,2),n=t[0],a=t[1],r=Object(ce.b)();Object(c.useEffect)((function(){fetch("/me").then((function(e){e.ok&&e.json().then((function(e){return a(e)}))}))}),[]),Object(c.useEffect)((function(){r(be())}),[r]),Object(c.useEffect)((function(){r(Ee())}),[r]),Object(c.useEffect)((function(){r(nt())}),[r]),Object(c.useEffect)((function(){r(ut())}),[r]);var i=Object(ce.c)((function(e){return e.ratings.entities}));return console.log(i),n?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(D,{user:n,onLogin:a}),Object(v.jsx)("main",{children:Object(v.jsxs)(se.c,{exact:!0,path:"/",children:[Object(v.jsx)(se.a,{path:"/",element:Object(v.jsx)(lt,{user:n})}),Object(v.jsx)(se.a,{path:"/user/:id",element:Object(v.jsx)(Ot,{user:n})}),Object(v.jsx)(se.a,{path:"/restaurants/new",element:Object(v.jsx)(fe,{})}),Object(v.jsx)(se.a,{path:"/restaurants",element:Object(v.jsx)(Le,{})}),Object(v.jsx)(se.a,{path:"/dishes",element:Object(v.jsx)(Je,{})}),Object(v.jsx)(se.a,{path:"/restaurants/:id",element:Object(v.jsx)(Je,{})}),Object(v.jsx)(se.a,{path:"/ratings/new",element:Object(v.jsx)(Ze,{userId:n.id})}),Object(v.jsx)(se.a,{path:"/ratings/new/:restaurant_id/:dish_id/",element:Object(v.jsx)(Ze,{userId:n.id})}),Object(v.jsx)(se.a,{path:"/ratings/:dish_id/",element:Object(v.jsx)(xt,{userId:n.id})}),Object(v.jsx)(se.a,{path:"/ratings/update/:rating_id",element:Object(v.jsx)(et,{userId:n.id})})]})})]}):Object(v.jsx)(ie,{user:n,onLogin:a})},pt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,239)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),i(e),c(e)}))},gt=Object(ue.a)({reducer:{restaurants:he,dishes:We,ratings:at,users:bt}});j.a.render(Object(v.jsx)(l.a,{children:Object(v.jsx)(ce.a,{store:gt,children:Object(v.jsx)(ft,{})})}),document.getElementById("root")),pt()}},[[158,1,2]]]);
//# sourceMappingURL=main.9c53f1f8.chunk.js.map