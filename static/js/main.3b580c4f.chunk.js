(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{25:function(A,e,c){},26:function(A,e,c){},36:function(A,e,c){},37:function(A,e,c){},38:function(A,e,c){"use strict";c.r(e);var t=c(1),s=c.n(t),g=c(18),i=c.n(g),n=c(20),a=c(9),r=c(10),o=(c(25),c(4)),B=c.p+"static/media/cart.93276da6.svg",C=c.p+"static/media/saw.0a3262b3.svg",w=(c(26),c(0)),l=function(A){var e=A.cartQty,c=function(){document.querySelector(".hamburger").classList.remove("active"),document.querySelector(".nav-links").classList.remove("active")};return Object(w.jsxs)("nav",{children:[Object(w.jsx)(o.b,{className:"navLogo",to:"/",onClick:c,children:Object(w.jsx)("div",{className:"logoContainer",children:Object(w.jsx)("img",{className:"logoImg",src:C,alt:"saw"})})}),Object(w.jsxs)("ul",{className:"nav-links",children:[Object(w.jsx)(o.b,{className:"navLink",to:"/",onClick:c,children:Object(w.jsx)("li",{children:"Home"})}),Object(w.jsx)(o.b,{className:"navLink",to:"/shop",onClick:c,children:Object(w.jsx)("li",{children:"Shop"})}),Object(w.jsx)(o.b,{className:"navLink",to:"/about",onClick:c,children:Object(w.jsx)("li",{children:"About"})})]}),Object(w.jsx)("div",{className:"navLink",onClick:function(){document.querySelector(".cartDisplay").classList.contains("active")||(document.querySelector(".cartDisplay").classList.toggle("active"),document.querySelector(".hamburger").classList.remove("active"),document.querySelector(".nav-links").classList.remove("active"))},children:Object(w.jsxs)("div",{className:"cartIcon",children:[Object(w.jsx)("img",{src:B,alt:"cart",height:"36px"}),e>0&&Object(w.jsx)("span",{className:"cartQty",children:Object(w.jsx)("span",{children:e})})]})}),Object(w.jsxs)("div",{className:"hamburger",onClick:function(){document.querySelector(".hamburger").classList.toggle("active"),document.querySelector(".nav-links").classList.toggle("active")},children:[Object(w.jsx)("span",{className:"bar"}),Object(w.jsx)("span",{className:"bar"}),Object(w.jsx)("span",{className:"bar"})]})]})},b=function(){return Object(w.jsx)("div",{children:Object(w.jsx)("h1",{children:"Hand-crafted homes and modular accessories for guinea pigs, hamsters, and other small pets "})})},d=function(A){var e=A.itemName,c=A.itemId;return Object(w.jsx)("div",{className:"ShopItemCardDiv",children:Object(w.jsx)("h1",{children:Object(w.jsx)(o.b,{to:"/shop/".concat(c),children:e})})})},j=[{id:"1",name:"Guinea Pig Cage",price:150,qty:0,imgUrl:"#",description:"Spacious hand-crafted dwelling perfect for guinea pigs and other small pets."},{id:"2",name:"Hay rack",price:25,qty:0,imgUrl:"#",description:"Hand-crafted wooden hay rack with a removable spindle for easy refilling. Finished with several protective coats of food-safe butcher block oil."},{id:"3",name:"Water bottle rack",price:25,qty:0,imgUrl:"#",description:"Hand-crafted wooden water bottle holder. Makes refilling super convenient. Fits most standard small pet water bottles."},{id:"4",name:"Hideaway hut",price:35,qty:0,imgUrl:"#",description:'Hand-crafted wooden hut makes a perfect hiding spot for you small critter. Removeable roof makes it easy to clean or change the look. Measures 9" by 9" and 8" tall, custom sizes available. Finished with food-safe butcher block oil.'}],u=function(){return Object(w.jsxs)("div",{children:[Object(w.jsx)("h1",{children:"Shop"}),Object(w.jsx)("div",{children:j.map((function(A){return Object(w.jsx)(d,{itemName:A.name,itemId:A.id},A.id)}))})]})},Q=c(2),D=function(A){var e=A.handleAdd,c=Object(Q.f)().id,s=Object(t.useState)({}),g=Object(r.a)(s,2),i=g[0],n=g[1];return Object(t.useEffect)((function(){var A=j.find((function(A){return A.id===c}));n(A)}),[c]),Object(w.jsxs)("div",{children:[Object(w.jsxs)("h1",{children:[i.name," "]}),Object(w.jsx)("p",{children:i.description}),Object(w.jsx)("button",{onClick:function(){return e(i)},children:"Add to cart"})]})},h=function(){return Object(w.jsx)("div",{children:Object(w.jsx)("h1",{children:"About"})})},m=function(A){var e=A.itemName,c=A.itemQty,t=A.handleInputChange;return Object(w.jsxs)("div",{className:"CartItemCardDiv",children:[Object(w.jsx)("h2",{children:e}),Object(w.jsx)("input",{type:"number",value:c,onChange:t})]})},x=(c(36),function(A){var e=A.cartItems,c=A.handleQtyChange,s=A.totalQty,g=A.totalPrice,i=Object(t.useRef)();Object(t.useEffect)((function(){return document.addEventListener("mousedown",n),function(){document.removeEventListener("mousedown",n)}}),[]);var n=function(A){i.current.contains(A.target)||document.querySelector(".cartDisplay").classList.remove("active")};return Object(w.jsxs)("div",{className:"cartDisplay",ref:i,children:[Object(w.jsx)("div",{className:"cartHeader",children:Object(w.jsx)(o.b,{to:"/shop",children:Object(w.jsx)("button",{className:"cartButton",onClick:function(){document.querySelector(".cartDisplay").classList.remove("active")},children:"Close"})})}),Object(w.jsx)("h1",{children:"Cart"}),Object(w.jsx)("div",{className:"cartItemDiv",children:e.map((function(A){return Object(w.jsx)(m,{itemName:A.name,itemQty:A.qty,handleInputChange:function(e){return c(e,A)}},A.id)}))}),Object(w.jsxs)("div",{className:"orderSummaryDiv",children:[Object(w.jsx)("h2",{children:"Order Summary"}),Object(w.jsxs)("div",{children:["Items: ",s]}),Object(w.jsxs)("div",{children:["Total: $",g]})]}),Object(w.jsx)("button",{children:"Checkout"})]})}),f=(c(37),function(){return Object(w.jsx)("footer",{children:Object(w.jsxs)("ul",{className:"footerList",children:[Object(w.jsx)("li",{className:"footerText",children:"\xa9 2021 Tiny Friends Woodshop"}),Object(w.jsxs)("li",{className:"footerLinks",children:[Object(w.jsx)("div",{className:"footerIcon",children:Object(w.jsx)("a",{href:"#",children:Object(w.jsx)("img",{src:"data:image/png;base64,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",alt:"twitter",width:"20px"})})}),Object(w.jsx)("div",{className:"footerIcon",children:Object(w.jsx)("a",{href:"#",children:Object(w.jsx)("img",{src:"data:image/png;base64,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",alt:"instagram",width:"20px"})})}),Object(w.jsx)("div",{className:"footerIcon",children:Object(w.jsx)("a",{href:"#",children:Object(w.jsx)("img",{src:"data:image/png;base64,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",alt:"facebook",width:"20px"})})})]})]})})}),E=function(){var A=Object(t.useState)(0),e=Object(r.a)(A,2),c=e[0],s=e[1],g=Object(t.useState)([]),i=Object(r.a)(g,2),B=i[0],C=i[1],d=Object(t.useState)(0),j=Object(r.a)(d,2),m=j[0],E=j[1];Object(t.useEffect)((function(){O(),v()}));var O=function(){var A=B.map((function(A){return A.qty})).reduce((function(A,e){return parseInt(A)+parseInt(e)}),0);s(A)},v=function(){var A=B.map((function(A){return A.qty*A.price})).reduce((function(A,e){return A+e}),0);E(A)};return Object(w.jsx)(o.a,{children:Object(w.jsxs)("div",{children:[Object(w.jsx)(l,{cartQty:c}),Object(w.jsxs)(Q.c,{children:[Object(w.jsx)(Q.a,{exact:!0,path:"/",component:b}),Object(w.jsx)(Q.a,{exact:!0,path:"/shop",children:Object(w.jsx)(u,{})}),Object(w.jsx)(Q.a,{exact:!0,path:"/shop/:id",children:Object(w.jsx)(D,{handleAdd:function(A){var e=A.id;s(c+1),B.map((function(A){return A.id})).includes(e)?C(B.map((function(A){return A.id===e?Object(a.a)(Object(a.a)({},A),{},{qty:A.qty+1}):A}))):C([].concat(Object(n.a)(B),[Object(a.a)(Object(a.a)({},A),{},{qty:1})]))}})}),Object(w.jsx)(Q.a,{exact:!0,path:"/about",component:h})]}),Object(w.jsx)(x,{cartItems:B,handleQtyChange:function(A,e){var c=A.target.value,t=e.id;C(B.map((function(A){return A.id===t?Object(a.a)(Object(a.a)({},A),{},{qty:parseInt(c)}):A})))},totalQty:c,totalPrice:m}),Object(w.jsx)(f,{})]})})};i.a.render(Object(w.jsx)(s.a.StrictMode,{children:Object(w.jsx)(E,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.3b580c4f.chunk.js.map