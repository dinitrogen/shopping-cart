(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{25:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(18),i=c.n(s),r=c(20),o=c(12),d=c(11),l=(c(25),c(7)),j=c.p+"static/media/cart.93276da6.svg",b=c.p+"static/media/saw.11465890.svg",u=c(0),h=function(e){var t=e.cartQty,c=function(){document.querySelector(".hamburger").classList.remove("active"),document.querySelector(".nav-links").classList.remove("active")};return Object(u.jsxs)("nav",{children:[Object(u.jsx)(l.b,{className:"navLogo",to:"/",onClick:c,children:Object(u.jsx)("div",{className:"logoContainer",children:Object(u.jsx)("img",{className:"logoImg",src:b,alt:"saw",viewBox:"0 0 100 100"})})}),Object(u.jsxs)("ul",{className:"nav-links",children:[Object(u.jsx)(l.b,{className:"navLink",to:"/",onClick:c,children:Object(u.jsx)("li",{children:"Home"})}),Object(u.jsx)(l.b,{className:"navLink",to:"/shop",onClick:c,children:Object(u.jsx)("li",{children:"Shop"})}),Object(u.jsx)(l.b,{className:"navLink",to:"/about",onClick:c,children:Object(u.jsx)("li",{children:"About"})})]}),Object(u.jsx)("div",{className:"navLink",onClick:function(){document.querySelector(".cartDisplay").classList.contains("active")||(document.querySelector(".cartDisplay").classList.toggle("active"),document.querySelector(".hamburger").classList.remove("active"),document.querySelector(".nav-links").classList.remove("active"))},children:Object(u.jsxs)("div",{className:"cartIcon",children:[Object(u.jsx)("img",{src:j,alt:"cart",height:"36px"}),t>0&&Object(u.jsx)("span",{className:"cartQty",children:Object(u.jsx)("span",{children:t})})]})}),Object(u.jsxs)("div",{className:"hamburger",onClick:function(){document.querySelector(".hamburger").classList.toggle("active"),document.querySelector(".nav-links").classList.toggle("active")},children:[Object(u.jsx)("span",{className:"bar"}),Object(u.jsx)("span",{className:"bar"}),Object(u.jsx)("span",{className:"bar"})]})]})},m=function(){return Object(u.jsx)("div",{children:Object(u.jsx)("h1",{children:"Hand-crafted homes and modular accessories for guinea pigs, hamsters, and other small pets "})})},O=function(e){var t=e.itemName,c=e.itemId;return Object(u.jsx)("div",{className:"ShopItemCardDiv",children:Object(u.jsx)("h1",{children:Object(u.jsx)(l.b,{to:"/shop/".concat(c),children:t})})})},x=[{id:"1",name:"Guinea Pig Cage",price:"$100",description:"Spacious hand-crafted dwelling perfect for guinea pigs and other small pets."},{id:"2",name:"Hay rack",price:"$20",description:"Hand-crafted wooden hay rack with a removable spindle for easy refilling. Finished with several protective coats of food-safe butcher block oil."},{id:"3",name:"Water bottle rack",price:"$25",description:"Hand-crafted wooden water bottle holder. Makes refilling super convenient. Fits most standard small pet water bottles."}],v=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Shop"}),Object(u.jsx)("div",{children:x.map((function(e){return Object(u.jsx)(O,{itemName:e.name,itemId:e.id},e.id)}))})]})},p=c(2),f=function(e){var t=e.handleAdd,c=Object(p.f)().id,a=Object(n.useState)({}),s=Object(d.a)(a,2),i=s[0],r=s[1];return Object(n.useEffect)((function(){var e=x.find((function(e){return e.id===c}));r(e)}),[c]),Object(u.jsxs)("div",{children:[Object(u.jsxs)("h1",{children:[i.name," "]}),Object(u.jsx)("p",{children:i.description}),Object(u.jsx)("button",{onClick:function(){return t(i)},children:"Add to cart"})]})},g=function(){return Object(u.jsx)("div",{children:Object(u.jsx)("h1",{children:"About"})})},y=function(e){var t=e.itemName,c=e.itemQty;return Object(u.jsx)("div",{className:"CartItemCardDiv",children:Object(u.jsxs)("h1",{children:[t," ",c]})})},k=function(e){var t=e.cartItems,c=Object(n.useRef)();Object(n.useEffect)((function(){return document.addEventListener("mousedown",a),function(){document.removeEventListener("mousedown",a)}}),[]);var a=function(e){c.current.contains(e.target)||document.querySelector(".cartDisplay").classList.remove("active")};return Object(u.jsxs)("div",{className:"cartDisplay",ref:c,children:[Object(u.jsx)("h1",{children:"Cart"}),Object(u.jsx)("div",{children:t.map((function(e){return Object(u.jsx)(y,{itemName:e.name,itemQty:e.qty},e.id)}))}),Object(u.jsx)("button",{children:"Checkout"})]})},N=function(){var e=Object(n.useState)(0),t=Object(d.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)([]),i=Object(d.a)(s,2),j=i[0],b=i[1];return Object(u.jsx)(l.a,{children:Object(u.jsxs)("div",{children:[Object(u.jsx)(h,{cartQty:c}),Object(u.jsxs)(p.c,{children:[Object(u.jsx)(p.a,{exact:!0,path:"/",component:m}),Object(u.jsx)(p.a,{exact:!0,path:"/shop",children:Object(u.jsx)(v,{})}),Object(u.jsx)(p.a,{exact:!0,path:"/shop/:id",children:Object(u.jsx)(f,{handleAdd:function(e){var t=e.id;a(c+1),j.map((function(e){return e.id})).includes(t)?b(j.map((function(e){return e.id===t?Object(o.a)(Object(o.a)({},e),{},{qty:e.qty+1}):e}))):b([].concat(Object(r.a)(j),[Object(o.a)(Object(o.a)({},e),{},{qty:1})]))}})}),Object(u.jsx)(p.a,{exact:!0,path:"/about",component:g})]}),Object(u.jsx)(k,{cartItems:j})]})})};i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(N,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.c9ae420b.chunk.js.map