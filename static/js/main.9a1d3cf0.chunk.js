(this["webpackJsonpburger-app"]=this["webpackJsonpburger-app"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(8),a=n.n(s),i=(n(14),n(2)),l=n(3),d=n(5),o=n(4),u=function(e){return e.children},j=(n(15),n.p+"static/media/burger-logo.ec69c7f6.png"),b=(n(16),n(0)),h=function(e){return Object(b.jsx)("div",{className:"Logo",children:Object(b.jsx)("img",{src:j,alt:"Myburger"})})},O=function(e){return Object(b.jsxs)("header",{className:"Toolbar",children:[Object(b.jsx)("div",{children:"Menu"}),Object(b.jsx)(h,{}),Object(b.jsx)("nav",{children:"...."})]})},p=function(e){return Object(b.jsxs)(u,{children:[Object(b.jsx)(O,{}),Object(b.jsx)("main",{children:e.children})]})},x=n(7),f=n(9),g=(n(18),n(19),function(e){Object(d.a)(n,e);var t=Object(o.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=Object(b.jsx)("div",{className:"BreadBottom"});break;case"bread-top":e=Object(b.jsxs)("div",{className:"BreadTop",children:[Object(b.jsx)("div",{className:"Seeds1"}),Object(b.jsx)("div",{className:"Seeds2"})]});break;case"meat":e=Object(b.jsx)("div",{className:"Meat"});break;case"cheese":e=Object(b.jsx)("div",{className:"Cheese"});break;case"salad":e=Object(b.jsx)("div",{className:"Salad"});break;case"bacon":e=Object(b.jsx)("div",{className:"Bacon"});break;default:e=null}return e}}]),n}(c.Component)),m=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(f.a)(Array(e.ingredients[t])).map((function(e,n){return Object(b.jsx)(g,{type:t},t+n)}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=Object(b.jsx)("p",{children:"please start adding ingredient ! "})),console.log(t),Object(b.jsxs)("div",{className:"Burger",children:[Object(b.jsx)(g,{type:"bread-top"}),t,Object(b.jsx)(g,{type:"bread-bottom"})]})},v=(n(20),n(21),function(e){return e.show?Object(b.jsx)("div",{className:"Backdrop",onClick:e.clicked}):null}),y=function(e){return Object(b.jsxs)(u,{children:[Object(b.jsx)(v,{show:e.show,clicked:e.modelClosed}),Object(b.jsx)("div",{className:"Model",style:{transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?"1":"0"},children:e.children})]})},C=(n(22),function(e){return Object(b.jsx)("button",{className:["Button",[e.btnType]].join(" "),onClick:e.clicked,children:e.children})}),k=function(e){var t=Object.keys(e.ingredients).map((function(t,n){return Object(b.jsxs)("li",{children:[Object(b.jsxs)("span",{style:{textTransform:"capitalize"},children:[t," : "]}),e.ingredients[t]]},n)}));return Object(b.jsxs)(u,{children:[Object(b.jsx)("h3",{children:"Your Order"}),Object(b.jsx)("p",{children:"A delicies burger with following ingredients:"}),Object(b.jsx)("ul",{children:t}),Object(b.jsx)("p",{children:Object(b.jsxs)("strong",{children:["Total Price = $",e.TotalPrice]})}),Object(b.jsx)("p",{children:"Continue to checkout page ?"}),Object(b.jsx)(C,{btnType:"Danger",clicked:e.ModelCancel,children:"Cancel"}),Object(b.jsx)(C,{btnType:"Success",clicked:e.purchaseContinue,children:"Continue"})]})},P=(n(23),n(24),function(e){return Object(b.jsxs)("div",{className:"BuildControl",children:[Object(b.jsx)("div",{className:"Label",children:e.label}),Object(b.jsx)("button",{className:"Less",onClick:e.removed,children:"Less"}),Object(b.jsx)("button",{className:"More",onClick:e.clicked,children:"More"})]})}),N=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],S=function(e){return Object(b.jsxs)("div",{className:"BuildControls",children:[Object(b.jsx)("p",{children:Object(b.jsxs)("strong",{children:["Current Price =  $",e.price.toFixed(2)]})}),N.map((function(t){return Object(b.jsx)(P,{label:t.label,clicked:function(){return e.ingredientsAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)}},t.type)})),Object(b.jsx)("button",{className:"OrderButton",disabled:!e.purchasable,onClick:e.ordered,children:"Order Now"})]})},w={salad:.5,cheese:.4,meat:1.3,bacon:.7},B=function(e){Object(d.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(i.a)(this,n);for(var c=arguments.length,r=new Array(c),s=0;s<c;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={ingredients:{salad:0,cheese:0,bacon:0,meat:0},totalPrice:4,purchasable:!1,purchasing:!1},e.addIngredientPriceHandler=function(t){var n=e.state.ingredients[t]+1,c=Object(x.a)({},e.state.ingredients);c[t]=n;var r=w[t],s=e.state.totalPrice+r;e.setState({totalPrice:s,ingredients:c}),e.updatePurchaseState(c)},e.RemoveIngredientPriceHandler=function(t){var n=e.state.ingredients[t];if(!(n<=0)){var c=n-1,r=Object(x.a)({},e.state.ingredients);r[t]=c;var s=w[t],a=e.state.totalPrice-s;e.setState({totalPrice:a,ingredients:r}),e.updatePurchaseState(r)}},e.purchaseHandler=function(){e.setState({purchasing:!0})},e.PurchaseCloseHandler=function(){e.setState({purchasing:!1})},e.purchaseContinueHandler=function(){e.setState({purchasing:!1}),alert("You  are continued.....")},e}return Object(l.a)(n,[{key:"updatePurchaseState",value:function(e){var t=Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0);this.setState({purchasable:t>0})}},{key:"render",value:function(){return Object(b.jsxs)(u,{children:[Object(b.jsx)(y,{show:this.state.purchasing,modelClosed:this.PurchaseCloseHandler,children:Object(b.jsx)(k,{ingredients:this.state.ingredients,ModelCancel:this.PurchaseCloseHandler,purchaseContinue:this.purchaseContinueHandler,TotalPrice:this.state.totalPrice.toFixed(2)})}),Object(b.jsx)(m,{ingredients:this.state.ingredients}),Object(b.jsx)(S,{ingredientsAdded:this.addIngredientPriceHandler,ingredientRemoved:this.RemoveIngredientPriceHandler,price:this.state.totalPrice,purchasable:this.state.purchasable,ordered:this.purchaseHandler})]})}}]),n}(c.Component),H=function(e){Object(d.a)(n,e);var t=Object(o.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsx)(p,{children:Object(b.jsx)(B,{})})})}}]),n}(c.Component),T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};a.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(H,{})}),document.getElementById("root")),T()}],[[25,1,2]]]);
//# sourceMappingURL=main.9a1d3cf0.chunk.js.map