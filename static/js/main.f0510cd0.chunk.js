(this.webpackJsonpecommerce1=this.webpackJsonpecommerce1||[]).push([[0],{19:function(e,n,t){},32:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var r,i,a,c,o,l,s,u,p,d,b,x,v,j,g,h,f,O,y,m,U,S=t(0),k=t.n(S),C=t(22),D=t.n(C),P=(t(32),t(19),t(15)),w=t(2),A=t(3),R=t(1),T=A.a.button(r||(r=Object(w.a)(["\n  background-color: #ebeced;\n  padding: 8px 13px;\n  border-radius: 30px;\n  color: black;\n  font-family: Helvetica, Arial, sans-serif;\n  font-size: 13px;\n  transition: all 200ms ease;\n  border: none;\n"]))),L=function(){return Object(R.jsx)(T,{children:"in stock"})},I=t(11),z=A.a.div(i||(i=Object(w.a)([""]))),E=A.a.div(a||(a=Object(w.a)(["\n  color: black;\n  margin: 7px 8px 7px 7px;\n  font-family: Roboto, Helvetica, Arial, sans-serif;\n  border-radius: 4px;\n  box-shadow: lightgrey 0px 2px 1px -1px, lightgrey 0px 1px 3px 0px;\n"]))),Q=A.a.div(c||(c=Object(w.a)(["\n  padding: 12px 20px 24px 16px;\n"]))),X=A.a.img(o||(o=Object(w.a)(["\n  width: 100%;\n  height: 100%;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n"]))),B=A.a.div(l||(l=Object(w.a)(["\n  font-size: 1.5rem;\n  line-height: 1.334;\n"]))),V=A.a.div(s||(s=Object(w.a)(["\n  margin-bottom: 12px;\n  font-size: 16px;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.6);\n"]))),F=function(e){var n=e.prod;return n?Object(R.jsx)(z,{children:Object(R.jsx)(I.b,{to:"/prod/".concat(n.UPC),style:{textDecoration:"none"},children:Object(R.jsxs)(E,{children:[Object(R.jsx)(X,{src:"https://via.placeholder.com/350"}),Object(R.jsxs)(Q,{children:[Object(R.jsx)(B,{children:n.name}),Object(R.jsxs)(V,{children:["$ ",n.price.current.value]}),n.availability.stock>0&&Object(R.jsx)(L,{})]})]})})}):null},K=t(27),M=A.a.div(u||(u=Object(w.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  span {\n    transform: scale(0);\n    border-radius: 100%;\n    position: absolute;\n    opacity: 0.4;\n    background-color: ",";\n    animation-name: ripple;\n    animation-duration: ","ms;\n  }\n\n  @keyframes ripple {\n    to {\n      opacity: 0;\n      transform: scale(2);\n    }\n  }\n"])),(function(e){return e.color}),(function(e){return e.duration})),H=function(e){var n=e.duration,t=void 0===n?850:n,r=e.color,i=void 0===r?"#fff":r,a=Object(S.useState)([]),c=Object(P.a)(a,2),o=c[0],l=c[1];!function(e,n,t){Object(S.useLayoutEffect)((function(){var r=null;return e>0&&(clearTimeout(r),r=setTimeout((function(){t(),clearTimeout(r)}),4*n)),function(){return clearTimeout(r)}}),[e,n,t])}(o.length,t,(function(){l([])}));return Object(R.jsx)(M,{duration:t,color:i,onMouseDown:function(e){var n=e.currentTarget.getBoundingClientRect(),t=n.width>n.height?n.width:n.height,r={x:e.pageX-n.x-t/2,y:e.pageY-n.y-t/2,size:t};l([].concat(Object(K.a)(o),[r]))},children:o.length>0&&o.map((function(e,n){return Object(R.jsx)("span",{style:{top:e.y,left:e.x,width:e.size,height:e.size}},"span"+n)}))})},N=A.a.button(p||(p=Object(w.a)(["\n  background-color: ",";\n  color: ",";\n  border: 1px solid rgb(25, 118, 210);\n  float: left;\n  margin-top: 21px;\n  height: 36px;\n  letter-spacing: 0.02857em;\n  min-width: 64px;\n  font-size: 0.875rem;\n  box-sizing: border-box;\n  align-items: center;\n  vertical-align: middle;\n  text-transform: uppercase;\n  padding: 10px 15px;\n  font-family: Roboto, Helvetica, Arial, sans-serif;\n  border-radius: 4px 0px 0px 4px;\n  overflow: hidden;\n  position: relative;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px,\n    rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;\n  transition: 0.3s;\n  &:last-child {\n    border-radius: 0px 4px 4px 0px;\n  }\n  &:active {\n    background-color: #b4d2f1;\n    box-shadow: rgb(0 0 0 / 20%) 0px 5px 5px -3px,\n      rgb(0 0 0 / 14%) 0px 8px 10px 1px, rgb(0 0 0 / 12%) 0px 3px 14px 2px;\n    transition: 1s;\n  }\n"])),(function(e){return e.toggledBtn?"rgb(25, 118, 210)":"white"}),(function(e){return e.toggledBtn?"white":"rgb(25, 118, 210)"})),J=A.a.button(d||(d=Object(w.a)(['\n  margin-left: 90px;\n  float: left;\n  border: 0px;\n  background-color: white;\n  content: "";\n  clear: both;\n  display: table;\n']))),W=function(e){var n=e.selected,t=e.setSelected;return Object(R.jsxs)(J,{children:[Object(R.jsxs)(N,{toggledBtn:"in"===n,onClick:function(){t("all"===n?"in":"all")},children:["IN STOCK",Object(R.jsx)(H,{duration:1200})]}),Object(R.jsxs)(N,{toggledBtn:"out"===n,onClick:function(){t("all"===n?"out":"all")},children:["OUT OF STOCK",Object(R.jsx)(H,{duration:1200})]},"two")]})},Y=A.a.input(b||(b=Object(w.a)(["\n  cursor: default;\n  font-size: 16px;\n  margin-top: 8px;\n  width: 59%;\n  border: 1px solid lightgrey;\n  border-radius: 4px;\n  height: 1.7em;\n  padding: 11px 16px 16px 16px;\n  vertical-align: middle;\n  float: left;\n  outline-color: rgb(25, 118, 210);\n"]))),$=function(e){var n=e.setSearchQuery,t=e.searchQuery;return Object(R.jsx)(Y,{placeholder:"search",onChange:function(e){n(e.target.value)},value:t})},_=A.a.button(x||(x=Object(w.a)(["\n  overflow: hidden;\n  position: relative;\n  border: 0px;\n  margin-top: 17px;\n  margin-left: 15px;\n  letter-spacing: 0.02857em;\n  width: 80px;\n  font-size: 0.875rem;\n  align-items: center;\n  vertical-align: middle;\n  text-transform: uppercase;\n  padding: 10px;\n  font-family: Roboto, Helvetica, Arial, sans-serif;\n  color: white;\n  background-color: rgb(25, 118, 210);\n  border-radius: 4px;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px,\n    rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;\n  transition: 0.3s;\n  &:hover {\n    background-color: rgb(21, 101, 192);\n  }\n  &:active {\n    background-color: #5b93d3;\n    box-shadow: rgb(0 0 0 / 20%) 0px 5px 5px -3px,\n      rgb(0 0 0 / 14%) 0px 8px 10px 1px, rgb(0 0 0 / 12%) 0px 3px 14px 2px;\n    transition: 1s;\n  }\n"]))),q=function(e){var n=e.setSearchQuery;return Object(R.jsx)("div",{children:Object(R.jsxs)(_,{onClick:function(){n("")},children:["Reset ",Object(R.jsx)(H,{})]})})},G=A.a.div(v||(v=Object(w.a)(["\n  display: grid;\n  grid-template-columns: auto auto auto;\n  border-bottom: 1px solid black;\n"]))),Z=A.a.div(j||(j=Object(w.a)([""]))),ee=A.a.img(g||(g=Object(w.a)(["\n  width: 150px;\n  height: 80px;\n"]))),ne=function(e){var n=e.searchQuery,t=e.setSearchQuery,r=e.selected,i=e.setSelected;return Object(R.jsx)("div",{children:Object(R.jsxs)(G,{children:[Object(R.jsx)(ee,{src:"https://via.placeholder.com/150x80",alt:"Placeholder"}),Object(R.jsx)(Z,{children:Object(R.jsx)(W,{selected:r,setSelected:i})}),Object(R.jsxs)(Z,{children:[Object(R.jsx)($,{searchQuery:n,setSearchQuery:t})," ",Object(R.jsx)(q,{setSearchQuery:t})]})]})})},te=[{UPC:"1",name:"Turbine\u2122 Rotor",price:{current:{value:206},currency:"USD"},availability:{stock:1},variants:[]},{UPC:"2",name:"ERIKA COLOR",price:{current:{value:167},currency:"USD"},availability:{stock:10},variants:[{UPC:"3",name:"ERIKA COLOR",price:{current:{value:132},currency:"USD"},availability:{stock:0}},{UPC:"4",name:"ERIKA COLOR",price:{current:{value:157},currency:"USD"},availability:{stock:2}}]},{UPC:"4",name:"AVIATOR",price:{current:{value:154},currency:"USD"},availability:{stock:1},variants:[{UPC:"5",name:"AVIATOR",price:{current:{value:204},currency:"USD"},availability:{stock:16}},{UPC:"6",name:"AVIATOR",price:{current:{value:204},currency:"USD"},availability:{stock:3}},{UPC:"7",name:"AVIATOR",price:{current:{value:204},currency:"USD"},availability:{stock:11}},{UPC:"8",name:"AVIATOR",price:{current:{value:154},currency:"USD"},availability:{stock:3}},{UPC:"9",name:"AVIATOR",price:{current:{value:154},currency:"USD"},availability:{stock:2}},{UPC:"10",name:"AVIATOR",price:{current:{value:204},currency:"USD"},availability:{stock:2}},{UPC:"11",name:"AVIATOR",price:{current:{value:204},currency:"USD"},availability:{stock:3}}]},{UPC:"12",name:"Round",price:{current:{value:244},currency:"USD"},availability:{stock:226},variants:[]},{UPC:"13",name:"ROUND METAL",price:{current:{value:204},currency:"USD"},availability:{stock:9},variants:[{UPC:"14",name:"ROUND METAL",price:{current:{value:154},currency:"USD"},availability:{stock:14}},{UPC:"15",name:"ROUND METAL",price:{current:{value:153},currency:"USD"},availability:{stock:4}},{UPC:"16",name:"ROUND METAL",price:{current:{value:204},currency:"USD"},availability:{stock:9}}]},{UPC:"17",name:"Old fashion",price:{current:{value:186},currency:"USD"},availability:{stock:1},variants:[{UPC:"18",name:"Old fashion",price:{current:{value:186},currency:"USD"},availability:{stock:5}},{UPC:"19",name:"Old fashion",price:{current:{value:186},currency:"USD"},availability:{stock:6}},{UPC:"20",name:"Old fashion",price:{current:{value:156},currency:"USD"},availability:{stock:0}},{UPC:"21",name:"Old fashion",price:{current:{value:156},currency:"USD"},availability:{stock:0}}]},{UPC:"22",name:"Springfield XL",price:{current:{value:186},currency:"USD"},availability:{stock:0},variants:[{UPC:"23",name:"Springfield XL",price:{current:{value:156},currency:"USD"},availability:{stock:2}},{UPC:"24",name:"Springfield XL",price:{current:{value:186},currency:"USD"},availability:{stock:2}},{UPC:"25",name:"Springfield XL",price:{current:{value:186},currency:"USD"},availability:{stock:1}},{UPC:"26",name:"Springfield XL",price:{current:{value:156},currency:"USD"},availability:{stock:0}},{UPC:"27",name:"Springfield XL",price:{current:{value:156},currency:"USD"},availability:{stock:1}},{UPC:"28",name:"Springfield XL",price:{current:{value:156},currency:"USD"},availability:{stock:0}},{UPC:"29",name:"Springfield XL",price:{current:{value:156},currency:"USD"},availability:{stock:0}},{UPC:"30",name:"Springfield XL",price:{current:{value:136},currency:"USD"},availability:{stock:0}}]}],re=A.a.a(h||(h=Object(w.a)(["\n  font-family: Roboto, Helvetica, Arial, sans-serif;\n  font-weight: 500;\n  color: rgb(25, 118, 210);\n  font-size: 14px;\n  padding: 10px;\n  border-right: 1px solid rgb(25, 118, 210);\n  display: inline;\n  &:hover {\n    background-color: rgba(25, 118, 210, 0.04);\n  }\n  &:last-child {\n    border-right: 0px;\n  }\n"]))),ie=A.a.div(f||(f=Object(w.a)(["\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 22px 15px 25px 22px;\n  text-align: right;\n  background-color: #bdbdbd;\n"]))),ae=function(){return Object(R.jsxs)(ie,{children:[Object(R.jsx)(re,{target:"_blank",href:"#",children:"TWITTER"}),Object(R.jsx)(re,{href:"#",children:"FACEBOOK"})]})},ce=A.a.div(O||(O=Object(w.a)(["\n  padding-bottom: 70px;\n"]))),oe=A.a.div(y||(y=Object(w.a)(["\n  min-height: 100vh;\n  position: relative;\n"]))),le=A.a.div(m||(m=Object(w.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\n  grid-auto-flow: row;\n  overflow: hidden;\n  padding: 8px;\n"]))),se=function(){var e=Object(S.useState)(""),n=Object(P.a)(e,2),t=n[0],r=n[1],i=Object(S.useState)("all"),a=Object(P.a)(i,2),c=a[0],o=a[1];return Object(R.jsxs)(oe,{children:[Object(R.jsx)(ne,{searchQuery:t,setSearchQuery:r,selected:c,setSelected:o}),Object(R.jsxs)(ce,{children:[Object(R.jsx)(le,{children:te.filter((function(e){var n="in"===c&&e.availability.stock>0,t="out"===c&&e.availability.stock<=0;return"all"===c||n||t})).filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).map((function(e){return Object(R.jsx)(F,{prod:e})}))}),Object(R.jsx)(ae,{})]})]})},ue=t(4),pe=A.a.div(U||(U=Object(w.a)(["\n  display: grid;\n  width: 25%;\n"]))),de=function(){var e=Object(ue.f)().id;return Object(R.jsx)(pe,{children:Object(R.jsx)(F,{prod:te.find((function(n){return n.UPC===e}))})})},be=function(){return Object(R.jsxs)(ue.c,{children:[Object(R.jsx)(ue.a,{path:"/prod/:id",children:Object(R.jsx)(de,{})}),Object(R.jsx)(ue.a,{path:"/",children:Object(R.jsx)(se,{})})]})},xe=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,41)).then((function(n){var t=n.getCLS,r=n.getFID,i=n.getFCP,a=n.getLCP,c=n.getTTFB;t(e),r(e),i(e),a(e),c(e)}))};D.a.render(Object(R.jsx)(k.a.StrictMode,{children:Object(R.jsx)(I.a,{children:Object(R.jsx)(be,{})})}),document.getElementById("root")),xe(console.log)}},[[40,1,2]]]);
//# sourceMappingURL=main.f0510cd0.chunk.js.map