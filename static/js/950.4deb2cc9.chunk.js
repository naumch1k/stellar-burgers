"use strict";(self.webpackChunkstellar_burgers=self.webpackChunkstellar_burgers||[]).push([[950],{2263:(e,t,r)=>{r.d(t,{B:()=>c});const s="ErrorMessage_root__kSKWw";var n=r(184);const c=e=>{let{children:t}=e;return(0,n.jsx)("p",{className:"".concat(s," text text_type_main-large"),children:t})}},2181:(e,t,r)=>{r.d(t,{Z:()=>s});const s=function(e){let{ingredients:t,ingredientId:r}=e;return t.reduce(((e,t)=>(null===t||void 0===t?void 0:t._id)===r?e+1:e),0)}},4587:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Ce});var s=r(9434),n=r(5287),c=r(6401),a=r(7963),i=r(335),l=r(2791),o=r(1067),d=r(6814),m=r(1987),u=r(7021),p=r(6916);const x=(0,p.P1)((e=>e.burgerConstructor.fillings),(e=>Object.values(e))),_=e=>e.burgerConstructor.bun,g=(0,p.P1)(_,x,((e,t)=>[e,...t]));var j=r(4236),h=r(2181);const v="Ingredient_root__Zh74E",b="Ingredient_beingDragged__pJKPQ",y="Ingredient_name__bUorL",f="Ingredient_price__CIEQs";var N=r(184);const k=e=>{let{id:t}=e;const r=(0,m.TL)(),n=(0,s.v9)(g),c=(0,s.v9)((e=>(0,u.Vt)(e,t))),{name:a,image:i,price:l}=c,p=(0,h.Z)({ingredients:n,ingredientId:t}),[{beingDragged:x},_]=(0,o.c)({type:"ingredient",item:c,collect:e=>({beingDragged:e.isDragging()})});return(0,N.jsx)(N.Fragment,{children:(0,N.jsxs)("li",{ref:_,className:"".concat(v," ").concat(x?"".concat(b):""),onClick:()=>(e=>r((0,j.Up)(e)))(t),children:[(0,N.jsx)("img",{className:"mr-4 ml-4",src:i,alt:a}),(0,N.jsxs)("div",{className:"pt-2",children:[(0,N.jsxs)("p",{className:"".concat(f," text text_type_digits-default"),children:[(0,N.jsx)("span",{className:"mr-2",children:l}),(0,N.jsx)(d.rm,{type:"primary"})]}),(0,N.jsx)("p",{className:"".concat(y," text text_type_main-default mt-2"),children:a})]}),p>0&&(0,N.jsx)(d.AT,{count:p,size:"default"})]})})},C="IngredientList_root__1m0nr",I=e=>{let{ingredientIds:t}=e;return(0,N.jsx)("ul",{className:"".concat(C," pr-4 pb-10 pl-4"),children:t.map((e=>(0,N.jsx)(k,{id:e},e)))})},B=(0,l.forwardRef)(((e,t)=>{let{type:r,label:n}=e;const c=(0,s.v9)(u.pT),i=(0,s.v9)((e=>(0,u.e2)(e,r)));return c?(0,N.jsx)(a.a,{}):(0,N.jsxs)("li",{children:[(0,N.jsx)("h2",{ref:t,className:"text text_type_main-medium mb-6",children:n}),(0,N.jsx)(I,{ingredientIds:i})]})}));var M=r(4164);const E="Modal_root__z7+I3",T="Modal_isOpen__zYv3o",L="Modal_container__Ha+Ky",O="Modal_closeButton__Ya+Ev",w=e=>{let{isOpen:t,onClose:r,onBackdropClick:s,children:n}=e;return(0,M.createPortal)((0,N.jsx)("div",{className:"".concat(E," ").concat(t?"".concat(T):""),onClick:s,children:(0,N.jsxs)("div",{className:"".concat(L," pt-25 pr-10 pb-25 pl-10"),children:[n,(0,N.jsx)("button",{className:O,type:"button","aria-label":"Close modal",onClick:r,children:(0,N.jsx)(d.Tw,{type:"primary"})})]})}),document.querySelector(".portal"))},F="NutritionFacts_root__RjsFs",S="NutritionFacts_image__p-fix",R="NutritionFacts_list__on7pF",P="NutritionFacts_listItem__ffIlj",D=e=>{let{ingredientId:t}=e;const r=(0,s.v9)((e=>(0,u.Vt)(e,t))),{name:n,calories:c,carbohydrates:a,fat:i,proteins:l,image_large:o}=r,d="mb-2 text text_type_main-default text_color_inactive",m="mb-2 text text_type_digits-default text_color_inactive";return(0,N.jsxs)("div",{className:F,children:[(0,N.jsx)("h2",{className:"text text_type_main-large",children:"Nutrition Facts"}),(0,N.jsx)("img",{className:"".concat(S," mt-4"),src:o,alt:n}),(0,N.jsx)("p",{className:"mt-4 text text_type_main-medium",children:n}),(0,N.jsxs)("dl",{className:R,children:[(0,N.jsxs)("div",{className:P,children:[(0,N.jsx)("dt",{className:d,children:"Calories"}),(0,N.jsx)("dd",{className:m,children:c})]}),(0,N.jsxs)("div",{className:P,children:[(0,N.jsx)("dt",{className:d,children:"Total Carb."}),(0,N.jsx)("dd",{className:m,children:a})]}),(0,N.jsxs)("div",{className:P,children:[(0,N.jsx)("dt",{className:d,children:"Total Fat"}),(0,N.jsx)("dd",{className:m,children:i})]}),(0,N.jsxs)("div",{className:P,children:[(0,N.jsx)("dt",{className:d,children:"Protein"}),(0,N.jsx)("dd",{className:m,children:l})]})]})]})},H=()=>{const{isModalOpen:e,previewedIngredientId:t,closeModal:r,closeByBackdropClick:n}=(()=>{const e=(0,m.TL)(),[t,r]=(0,l.useState)(!1),n=(0,s.v9)(u.Ec),c=(0,l.useCallback)((()=>{r(!0)}),[]),a=(0,l.useCallback)((()=>{e((0,j.ni)()),r(!1)}),[e]),i=(0,l.useCallback)((e=>{e instanceof KeyboardEvent&&"Escape"===e.code&&a()}),[a]);return(0,l.useEffect)((()=>{n&&c()}),[n,c]),(0,l.useEffect)((()=>(t&&document.addEventListener("keydown",i),()=>document.removeEventListener("keydown",i))),[i,t]),{isModalOpen:t,previewedIngredientId:n,openModal:c,closeModal:a,closeByBackdropClick:e=>{e.target===e.currentTarget&&a()}}})();return t?(0,N.jsx)(w,{isOpen:e,onClose:r,onBackdropClick:n,children:(0,N.jsx)(D,{ingredientId:t})}):null},K=[{type:"bun",label:"Buns"},{type:"burger",label:"Burgers"},{type:"topping",label:"Toppings"}];const Y=function(){const[e,t]=(0,l.useState)(K[0].type),r=(0,l.useRef)(null),s={};return K.forEach((e=>s[e.type]=(0,l.createRef)())),{currentTab:e,handleTabClick:e=>{const t=K.find((t=>t.type===e));if(t){const{type:e}=t;(r=s[e]).current&&r.current.scrollIntoView({behavior:"smooth"})}var r},handleIngredientsScroll:()=>{var e;const n=null===(e=r.current)||void 0===e?void 0:e.getBoundingClientRect().y,c=K.map((e=>Math.abs(s[e.type].current.getBoundingClientRect().y-n))),a=c.indexOf(Math.min(...c));t(K[a].type)},ingredientsRef:r,ingredientGroupRefs:s}},z="BurgerIngredients_tabBar__jn4fI",V="BurgerIngredients_menu__X3WWl",W=()=>{const{currentTab:e,handleTabClick:t,handleIngredientsScroll:r,ingredientsRef:s,ingredientGroupRefs:n}=Y();return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)("section",{className:"mt-10",children:[(0,N.jsx)("h1",{className:"text text_type_main-large",children:"Build Your Own Burger"}),(0,N.jsx)("ul",{className:"".concat(z," mt-5"),children:K.map((r=>{let{type:s,label:n}=r;return(0,N.jsx)("li",{children:(0,N.jsx)(i.Tab,{active:e===s,value:s,onClick:t,children:n})},s)}))}),(0,N.jsx)("ul",{className:"".concat(V," custom-scroll"),ref:s,onScroll:r,children:K.map((e=>{let{type:t,label:r}=e;return(0,N.jsx)(B,{type:t,label:r,ref:n[t]},t)}))})]}),(0,N.jsx)(H,{})]})};var U=r(8422);const G="BunElement_root__P2lJ4",Z=e=>{let{type:t}=e;const r=(0,s.v9)(_);return(0,N.jsx)("div",{className:"".concat(G," ml-8 pr-4"),children:(0,N.jsx)(d.DY,{type:t,text:r?"".concat(r.name," ").concat("top"===t?"(top)":"(bottom)"):"Choose your bun",price:r?r.price:0,thumbnail:r?r.image:"https://stellarburgers.nomoreparties.site/static/media/loading.89540200.svg",isLocked:!0})})};var q=r(2942),A=r(3052);const J="FillingListItem_root__Kz4P+",Q="FillingListItem_isHovered__6iFKh",X=e=>{let{index:t,ingredient:r}=e;const s=(0,m.TL)(),{name:n,price:c,image:a}=r,[,i]=(0,o.c)({type:"addedIngredient",item:()=>({index:t})}),[{isHovered:u},p]=(0,U.L)({accept:"addedIngredient",collect:e=>({isHovered:e.isOver()}),drop:e=>{e.index!==t&&s((0,A.CI)({fromIndex:e.index,toIndex:t}))}}),x=(0,l.useRef)(null);return i(p(x)),(0,N.jsxs)("li",{ref:x,className:"".concat(J," ").concat(u?"".concat(Q):""," mt-4 mb-4"),children:[(0,N.jsx)(q.DragIcon,{type:"primary"}),(0,N.jsx)(d.DY,{text:n,thumbnail:a,price:c,handleClose:()=>s((0,A.HF)(t))})]})},$="FillingList_root__CWjeS",ee=()=>{const e=(0,s.v9)(x);return(0,N.jsx)("ul",{className:"".concat($," custom-scroll"),children:e.map(((e,t)=>(0,N.jsx)(X,{index:t,ingredient:e},t)))})};var te=r(4865);const re=r.p+"static/media/success.ffd5c56d9db3cece5522.png",se="OrderConfirmation_root__Y5Pjh",ne="OrderConfirmation_orderNumber__F7HYV",ce=e=>{let{orderNumber:t}=e;return(0,N.jsxs)("div",{className:se,children:[(0,N.jsx)("span",{className:"mb-8 text text_type_main-medium",children:"Your order number is"}),(0,N.jsx)("h2",{className:"".concat(ne," text text_type_digits-large"),children:t}),(0,N.jsx)("img",{className:"mt-15 mb-15",src:re,alt:"Success icon"}),(0,N.jsx)("p",{className:"mb-2 text text_type_main-default",children:"your order is being prepared"}),(0,N.jsx)("p",{className:"text text_type_main-default text_color_inactive",children:"be ready to pick it up at the orbital station"})]})},ae=e=>e.order,ie=e=>e.order.number;var le=r(1042);const oe=()=>{const{isModalOpen:e,closeModal:t,closeByBackdropClick:r,orderNumber:n}=(()=>{const e=(0,m.TL)(),[t,r]=(0,l.useState)(!1),n=(0,s.v9)(ie),c=(0,l.useCallback)((()=>{r(!0)}),[]),a=(0,l.useCallback)((()=>{e((0,le.qm)()),e((0,A.VS)()),r(!1)}),[e]),i=(0,l.useCallback)((e=>{e instanceof KeyboardEvent&&"Escape"===e.code&&a()}),[a]);return(0,l.useEffect)((()=>{n&&c()}),[n,c]),(0,l.useEffect)((()=>(t&&document.addEventListener("keydown",i),()=>document.removeEventListener("keydown",i))),[i,t]),{isModalOpen:t,orderNumber:n,openModal:c,closeModal:a,closeByBackdropClick:e=>{e.target===e.currentTarget&&a()}}})();return n?(0,N.jsx)(w,{isOpen:e,onClose:t,onBackdropClick:r,children:(0,N.jsx)(ce,{orderNumber:n})}):null};var de=r(2263);const me=()=>{const e=(0,m.TL)(),[t,r]=(0,l.useState)(!1),s=(0,l.useCallback)((()=>{r(!0)}),[]),n=(0,l.useCallback)((()=>{e((0,le.fw)()),r(!1)}),[e]),c=(0,l.useCallback)((e=>{e instanceof KeyboardEvent&&"Escape"===e.code&&n()}),[n]);return(0,l.useEffect)((()=>(t&&document.addEventListener("keydown",c),()=>document.removeEventListener("keydown",c))),[c,t]),{isModalOpen:t,openModal:s,closeModal:n,closeByBackdropClick:e=>{e.target===e.currentTarget&&n()}}},ue="ErrorModal_content__fCl0B",pe="ErrorModal_errorSign__vWha6",xe=e=>{let{isOpen:t,errorText:r}=e;const{closeModal:s,closeByBackdropClick:n}=me();return(0,N.jsx)(w,{isOpen:t,onClose:s,onBackdropClick:n,children:(0,N.jsxs)("div",{className:ue,children:[(0,N.jsx)("div",{className:pe,children:(0,N.jsx)(d.Tw,{type:"primary"})}),(0,N.jsx)(de.B,{children:r})]})})};const _e=function(){const e=(0,s.v9)(_),t=(0,s.v9)(x);return(0,l.useMemo)((()=>e?e.price:0),[e])+(0,l.useMemo)((()=>t.reduce(((e,t)=>e+t.price),0)),[t])};var ge=r(609);const je="SubmitGroup_root__OQ4Lo",he="SubmitGroup_button__68UXa",ve=()=>{const e=(0,m.TL)(),{isFetching:t,error:r}=(0,s.v9)(ae),n=(0,s.v9)(_),c=(0,s.v9)(x),i=_e(),{isModalOpen:l,openModal:o}=me();return(0,N.jsx)(N.Fragment,{children:(0,N.jsxs)("div",{className:"".concat(je," mt-10 pr-4 pl-4"),children:[(0,N.jsxs)("span",{className:"text text_type_digits-medium mr-10",children:[i," ",(0,N.jsx)(d.rm,{type:"primary"})]}),(0,N.jsxs)("div",{className:he,children:[(0,N.jsx)(te.z,{type:"button",view:"primary",size:"large",onClick:()=>{if(n&&c.length){const t=[n,...c].map((e=>e._id));e((0,ge.D)({ingredients:t})).then((()=>o()))}},disabled:!n||!c.length,children:"Place an order"}),t&&(0,N.jsx)(a.a,{})]}),(0,N.jsx)(oe,{}),r&&(0,N.jsx)(xe,{isOpen:l,errorText:r})]})})},be="BurgerConstructor_root__fVIgZ",ye="BurgerConstructor_isHovered__i8Ijv",fe=()=>{const e=(0,m.TL)(),[{isHovered:t},r]=(0,U.L)({accept:"ingredient",collect:e=>({isHovered:e.isOver()}),drop:e=>{s(e)}}),s=t=>{"bun"===t.type?e((0,A.Xq)(t)):e((0,A.Ee)(t))};return(0,N.jsxs)("section",{className:"".concat(be," pt-25 pb-10"),children:[(0,N.jsxs)("div",{ref:r,className:t?"".concat(ye):"",children:[(0,N.jsx)(Z,{type:"top"}),(0,N.jsx)(ee,{}),(0,N.jsx)(Z,{type:"bottom"})]}),(0,N.jsx)(ve,{})]})};var Ne=r(5995);const ke="BurgerBuilder_root__M-A1J",Ce=()=>{const{isCheckingUserAccess:e,isUpdatingToken:t}=(0,s.v9)(Ne._9);return e||t?(0,N.jsx)(a.a,{}):(0,N.jsx)("div",{className:ke,children:(0,N.jsxs)(n.W,{backend:c.PD,children:[(0,N.jsx)(W,{}),(0,N.jsx)(fe,{})]})})}}}]);
//# sourceMappingURL=950.4deb2cc9.chunk.js.map