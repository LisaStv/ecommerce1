(this.webpackJsonpecommerce1=this.webpackJsonpecommerce1||[]).push([[0],{19:function(e,n,t){},32:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var r,a,i,c,l,o,s,u,b,d,p,x,j,v,h,O,g,y,f,m,U,S,k=t(0),C=t.n(k),D=t(22),P=t.n(D),A=(t(32),t(19),t(15)),w=t(2),R=t(3),T=t(1),L=R.a.button(r||(r=Object(w.a)(["\n  background-color: #ebeced;\n  padding: 10px 15px;\n  border-radius: 30px;\n  color: black;\n  font-family: Helvetica, Arial, sans-serif;\n  font-size: 13px;\n  transition: all 200ms ease;\n  box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0);\n  border: none;\n"]))),I=function(){return Object(T.jsx)(L,{children:"In stock"})},z=t(11),E=R.a.div(a||(a=Object(w.a)(["\n"]))),Q=R.a.div(i||(i=Object(w.a)(["\n  color: black;\n  border: 1px solid lightgrey;\n  margin: 7px;\n  font-family: Roboto, Helvetica, Arial, sans-serif;\n  border-radius: 4px;\n  box-shadow: lightgrey 0px 2px 1px -1px, lightgrey 0px 1px 3px 0px;\n\n  "]))),X=R.a.div(c||(c=Object(w.a)(["\n  padding: 20px;\n"]))),B=R.a.img(l||(l=Object(w.a)(["\n  width: 100%;\n  height: 100%;\n"]))),F=R.a.div(o||(o=Object(w.a)(["\n  font-size: 1.5rem;;\n  line-height: 1.334;\n  "]))),V=R.a.div(s||(s=Object(w.a)(["\n  margin-bottom: 12px;\n  font-size: 16px;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.6);\n  "]))),K=function(e){var n=e.prod;return n?Object(T.jsx)(E,{children:Object(T.jsx)(z.b,{to:"/prod/".concat(n.UPC),style:{textDecoration:"none"},children:Object(T.jsx)(Q,{children:Object(T.jsxs)(k.Fragment,{children:[Object(T.jsx)(B,{src:"https://via.placeholder.com/350"}),Object(T.jsxs)(X,{children:[Object(T.jsx)(F,{children:n.name}),Object(T.jsxs)(V,{children:["$ ",n.price.current.value]}),n.availability.stock>0&&Object(T.jsx)(I,{})]})]})})})}):null},M=R.a.button(u||(u=Object(w.a)(["\n  background-color: ",";\n  color: ",";\n  border: 1px solid rgb(25, 118, 210);\n  float:left;\n  margin-top: 20px;\n  letter-spacing: 0.02857em;\n  min-width: 64px;\n  font-size: 0.875rem;\n  box-sizing: border-box;\n  align-items:center;\n  vertical-align: middle;\n  text-transform: uppercase;\n  padding: 10px;\n  font-family: Roboto, Helvetica, Arial, sans-serif;\n  border-radius: 6px 0px 0px 6px;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;\n  &:last-child { border-radius: 0px 6px 6px 0px;  }\n\n"])),(function(e){return e.toggledBtn?"rgb(25, 118, 210)":"white"}),(function(e){return e.toggledBtn?"white":"rgb(25, 118, 210)"})),N=R.a.button(b||(b=Object(w.a)(['\n  float:left;\n  border: 0px;\n  background-color: white;\n  content: "";\n  clear: both;\n  display: table;\n']))),H=function(e){var n=e.selected,t=e.setSelected;return Object(T.jsxs)(N,{children:[Object(T.jsx)(M,{toggledBtn:"in"===n,onClick:function(){t("all"===n?"in":"all")},children:"IN STOCK"}),Object(T.jsx)(M,{toggledBtn:"out"===n,onClick:function(){t("all"===n?"out":"all")},children:"OUT OF STOCK"},"two")]})},J=R.a.input(d||(d=Object(w.a)(["\n  font-size: 15px;\n  margin-top: 8px;\n  width: 60%;\n  border: 1px solid lightgrey;\n  border-radius: 4px;\n  height: 1.7em;\n  padding: 16px;\n  vertical-align: middle;\n  float:left;\n  outline-color: rgb(25, 118, 210);\n  "]))),W=function(e){var n=e.setSearchQuery,t=e.searchQuery;return Object(T.jsx)(J,{placeholder:"search",onChange:function(e){n(e.target.value)},value:t})},Y=t(27),$=R.a.div(p||(p=Object(w.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  span {\n    transform: scale(0);\n    border-radius: 100%;\n    position: absolute;\n    opacity: 0.4;\n    background-color: ",";\n    animation-name: ripple;\n    animation-duration: ","ms;\n  }\n\n  @keyframes ripple {\n    to {\n      opacity: 0;\n      transform: scale(2);\n    }\n  }\n"])),(function(e){return e.color}),(function(e){return e.duration})),_=function(e){var n=e.duration,t=void 0===n?850:n,r=e.color,a=void 0===r?"#fff":r,i=Object(k.useState)([]),c=Object(A.a)(i,2),l=c[0],o=c[1];!function(e,n,t){Object(k.useLayoutEffect)((function(){var r=null;return e>0&&(clearTimeout(r),r=setTimeout((function(){t(),clearTimeout(r)}),4*n)),function(){return clearTimeout(r)}}),[e,n,t])}(l.length,t,(function(){o([])}));return Object(T.jsx)($,{duration:t,color:a,onMouseDown:function(e){var n=e.currentTarget.getBoundingClientRect(),t=n.width>n.height?n.width:n.height,r={x:e.pageX-n.x-t/2,y:e.pageY-n.y-t/2,size:t};o([].concat(Object(Y.a)(l),[r]))},children:l.length>0&&l.map((function(e,n){return Object(T.jsx)("span",{style:{top:e.y,left:e.x,width:e.size,height:e.size}},"span"+n)}))})},q=R.a.button(x||(x=Object(w.a)(["\n  overflow: hidden;\n  position: relative;\n  border: 0px;\n  margin-top: 20px;\n  margin-left: 30px;\n  letter-spacing: 0.02857em;\n  width: 84px;\n  font-size: 0.875rem;\n  align-items: center;\n  vertical-align: middle;\n  text-transform: uppercase;\n  padding: 10px;\n  font-family: Roboto, Helvetica, Arial, sans-serif;\n  color: white;\n  background-color: rgb(25, 118, 210);\n  border-radius: 4px;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px,\n    rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;\n\n  &:hover {\n    background-color: rgb(21, 101, 192);\n  }\n"]))),G=function(e){var n=e.setSearchQuery;return Object(T.jsx)("div",{children:Object(T.jsxs)(q,{onClick:function(){n("")},children:["Reset ",Object(T.jsx)(_,{})]})})},Z=R.a.div(j||(j=Object(w.a)(["\n  display: grid;\n  grid-template-columns: auto auto auto;\n  border-bottom: 1px solid black;\n"]))),ee=R.a.div(v||(v=Object(w.a)(["\n"]))),ne=R.a.div(h||(h=Object(w.a)(["\n"]))),te=R.a.img(O||(O=Object(w.a)(["\n  width: 150px;\n  height: 80px;\n"]))),re=function(e){var n=e.searchQuery,t=e.setSearchQuery,r=e.selected,a=e.setSelected;return Object(T.jsx)(k.Fragment,{children:Object(T.jsx)(ne,{children:Object(T.jsxs)(Z,{children:[Object(T.jsx)(ee,{children:Object(T.jsx)(te,{src:"https://via.placeholder.com/150x80",alt:"Placeholder"})}),Object(T.jsx)(ee,{children:Object(T.jsx)(H,{selected:r,setSelected:a})}),Object(T.jsxs)(ee,{children:[Object(T.jsx)(W,{searchQuery:n,setSearchQuery:t})," ",Object(T.jsx)(G,{setSearchQuery:t})]})]})})})},ae=[{UPC:"1",name:"Turbine\u2122 Rotor",price:{current:{value:206},currency:"USD"},availability:{stock:1},variants:[]},{UPC:"2",name:"ERIKA COLOR",price:{current:{value:167},currency:"USD"},availability:{stock:10},variants:[{UPC:"3",name:"ERIKA COLOR",price:{current:{value:132},currency:"USD"},availability:{stock:0}},{UPC:"4",name:"ERIKA COLOR",price:{current:{value:157},currency:"USD"},availability:{stock:2}}]},{UPC:"4",name:"AVIATOR",price:{current:{value:154},currency:"USD"},availability:{stock:1},variants:[{UPC:"5",name:"AVIATOR",price:{current:{value:204},currency:"USD"},availability:{stock:16}},{UPC:"6",name:"AVIATOR",price:{current:{value:204},currency:"USD"},availability:{stock:3}},{UPC:"7",name:"AVIATOR",price:{current:{value:204},currency:"USD"},availability:{stock:11}},{UPC:"8",name:"AVIATOR",price:{current:{value:154},currency:"USD"},availability:{stock:3}},{UPC:"9",name:"AVIATOR",price:{current:{value:154},currency:"USD"},availability:{stock:2}},{UPC:"10",name:"AVIATOR",price:{current:{value:204},currency:"USD"},availability:{stock:2}},{UPC:"11",name:"AVIATOR",price:{current:{value:204},currency:"USD"},availability:{stock:3}}]},{UPC:"12",name:"Round",price:{current:{value:244},currency:"USD"},availability:{stock:226},variants:[]},{UPC:"13",name:"ROUND METAL",price:{current:{value:204},currency:"USD"},availability:{stock:9},variants:[{UPC:"14",name:"ROUND METAL",price:{current:{value:154},currency:"USD"},availability:{stock:14}},{UPC:"15",name:"ROUND METAL",price:{current:{value:153},currency:"USD"},availability:{stock:4}},{UPC:"16",name:"ROUND METAL",price:{current:{value:204},currency:"USD"},availability:{stock:9}}]},{UPC:"17",name:"Old fashion",price:{current:{value:186},currency:"USD"},availability:{stock:1},variants:[{UPC:"18",name:"Old fashion",price:{current:{value:186},currency:"USD"},availability:{stock:5}},{UPC:"19",name:"Old fashion",price:{current:{value:186},currency:"USD"},availability:{stock:6}},{UPC:"20",name:"Old fashion",price:{current:{value:156},currency:"USD"},availability:{stock:0}},{UPC:"21",name:"Old fashion",price:{current:{value:156},currency:"USD"},availability:{stock:0}}]},{UPC:"22",name:"Springfield XL",price:{current:{value:186},currency:"USD"},availability:{stock:0},variants:[{UPC:"23",name:"Springfield XL",price:{current:{value:156},currency:"USD"},availability:{stock:2}},{UPC:"24",name:"Springfield XL",price:{current:{value:186},currency:"USD"},availability:{stock:2}},{UPC:"25",name:"Springfield XL",price:{current:{value:186},currency:"USD"},availability:{stock:1}},{UPC:"26",name:"Springfield XL",price:{current:{value:156},currency:"USD"},availability:{stock:0}},{UPC:"27",name:"Springfield XL",price:{current:{value:156},currency:"USD"},availability:{stock:1}},{UPC:"28",name:"Springfield XL",price:{current:{value:156},currency:"USD"},availability:{stock:0}},{UPC:"29",name:"Springfield XL",price:{current:{value:156},currency:"USD"},availability:{stock:0}},{UPC:"30",name:"Springfield XL",price:{current:{value:136},currency:"USD"},availability:{stock:0}}]}],ie=R.a.a(g||(g=Object(w.a)([""]))),ce=R.a.div(y||(y=Object(w.a)(["\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 20px;\n  text-align: right;\n  background-color: #bdbdbd;\n"]))),le=function(){return Object(T.jsxs)(ce,{children:[Object(T.jsx)(ie,{target:"_blank",href:"#",children:"TWITTER"})," ","|",Object(T.jsx)(ie,{href:"#",children:"FACEBOOK"})]})},oe=R.a.div(f||(f=Object(w.a)(["\n  padding-bottom: 80px;\n  "]))),se=R.a.div(m||(m=Object(w.a)(["\n  min-height: 100vh;\n  position: relative;\n  "]))),ue=R.a.div(U||(U=Object(w.a)(["\n  display: grid;\n  grid-template-columns: 25% 25% 25% 25%;\n  overflow: hidden;\n  "]))),be=function(){var e=Object(k.useState)(""),n=Object(A.a)(e,2),t=n[0],r=n[1],a=Object(k.useState)("all"),i=Object(A.a)(a,2),c=i[0],l=i[1];return Object(T.jsxs)(se,{children:[Object(T.jsx)(re,{searchQuery:t,setSearchQuery:r,selected:c,setSelected:l}),Object(T.jsxs)(oe,{children:[Object(T.jsx)(ue,{children:ae.filter((function(e){var n="in"===c&&e.availability.stock>0,t="out"===c&&e.availability.stock<=0;return"all"===c||n||t})).filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).map((function(e){return Object(T.jsx)(K,{prod:e})}))}),Object(T.jsx)(le,{})]})]})},de=t(4),pe=R.a.div(S||(S=Object(w.a)(["\n  display: grid;\n  width: 25%;  "]))),xe=function(){var e=Object(de.f)().id;return Object(T.jsx)(pe,{children:Object(T.jsx)(K,{prod:ae.find((function(n){return n.UPC===e}))})})},je=function(){return Object(T.jsxs)(de.c,{children:[Object(T.jsx)(de.a,{path:"/prod/:id",children:Object(T.jsx)(xe,{})}),Object(T.jsx)(de.a,{path:"/",children:Object(T.jsx)(be,{})})]})},ve=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,41)).then((function(n){var t=n.getCLS,r=n.getFID,a=n.getFCP,i=n.getLCP,c=n.getTTFB;t(e),r(e),a(e),i(e),c(e)}))};P.a.render(Object(T.jsx)(C.a.StrictMode,{children:Object(T.jsx)(z.a,{children:Object(T.jsx)(je,{})})}),document.getElementById("root")),ve(console.log)}},[[40,1,2]]]);
//# sourceMappingURL=main.a57f3616.chunk.js.map