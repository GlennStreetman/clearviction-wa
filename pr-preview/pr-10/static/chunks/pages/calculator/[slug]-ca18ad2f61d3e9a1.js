(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[719],{2457:function(e,t,n){"use strict";var r=n(4836);t.Z=void 0;var i=r(n(4938)),l=n(5893),o=(0,i.default)((0,l.jsx)("path",{d:"M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"}),"History");t.Z=o},7209:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/calculator/[slug]",function(){return n(8528)}])},1072:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(7294);function i(){(0,r.useEffect)(()=>{let e=document.links;for(var t=0,n=e.length;t<n;t++)e[t].hostname!=window.location.hostname&&(e[t].target="_blank")})}},8528:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return eL},default:function(){return e$}});var r=n(5944),i=n(2457),l=n(5582),o=n(9397),a=n(3219),s=n(7357),c=n(1233),u=n(7786),p=n(3972),d=n(3366),f=n(7462),h=n(7294),m=n(6010),x=n(4780),y=n(7579),k=n(8216),g=n(1710),v=n(6628),b=n(629),Z=n(1657),w=n(948),j=n(1588),_=n(4867);function S(e){return(0,_.Z)("MuiDialog",e)}let I=(0,j.Z)("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),D=h.createContext({});var W=n(4808),P=n(2734),M=n(5893);let C=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],T=(0,w.ZP)(W.Z,{name:"MuiDialog",slot:"Backdrop",overrides:(e,t)=>t.backdrop})({zIndex:-1}),A=e=>{let{classes:t,scroll:n,maxWidth:r,fullWidth:i,fullScreen:l}=e,o={root:["root"],container:["container",`scroll${(0,k.Z)(n)}`],paper:["paper",`paperScroll${(0,k.Z)(n)}`,`paperWidth${(0,k.Z)(String(r))}`,i&&"paperFullWidth",l&&"paperFullScreen"]};return(0,x.Z)(o,S,t)},O=(0,w.ZP)(g.Z,{name:"MuiDialog",slot:"Root",overridesResolver:(e,t)=>t.root})({"@media print":{position:"absolute !important"}}),B=(0,w.ZP)("div",{name:"MuiDialog",slot:"Container",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.container,t[`scroll${(0,k.Z)(n.scroll)}`]]}})(({ownerState:e})=>(0,f.Z)({height:"100%","@media print":{height:"auto"},outline:0},"paper"===e.scroll&&{display:"flex",justifyContent:"center",alignItems:"center"},"body"===e.scroll&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})),R=(0,w.ZP)(b.Z,{name:"MuiDialog",slot:"Paper",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.paper,t[`scrollPaper${(0,k.Z)(n.scroll)}`],t[`paperWidth${(0,k.Z)(String(n.maxWidth))}`],n.fullWidth&&t.paperFullWidth,n.fullScreen&&t.paperFullScreen]}})(({theme:e,ownerState:t})=>(0,f.Z)({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},"paper"===t.scroll&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},"body"===t.scroll&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!t.maxWidth&&{maxWidth:"calc(100% - 64px)"},"xs"===t.maxWidth&&{maxWidth:"px"===e.breakpoints.unit?Math.max(e.breakpoints.values.xs,444):`${e.breakpoints.values.xs}${e.breakpoints.unit}`,[`&.${I.paperScrollBody}`]:{[e.breakpoints.down(Math.max(e.breakpoints.values.xs,444)+64)]:{maxWidth:"calc(100% - 64px)"}}},t.maxWidth&&"xs"!==t.maxWidth&&{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`,[`&.${I.paperScrollBody}`]:{[e.breakpoints.down(e.breakpoints.values[t.maxWidth]+64)]:{maxWidth:"calc(100% - 64px)"}}},t.fullWidth&&{width:"calc(100% - 64px)"},t.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${I.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})),N=h.forwardRef(function(e,t){let n=(0,Z.Z)({props:e,name:"MuiDialog"}),r=(0,P.Z)(),i={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{"aria-describedby":l,"aria-labelledby":o,BackdropComponent:a,BackdropProps:s,children:c,className:u,disableEscapeKeyDown:p=!1,fullScreen:x=!1,fullWidth:k=!1,maxWidth:g="sm",onBackdropClick:w,onClose:j,open:_,PaperComponent:S=b.Z,PaperProps:I={},scroll:W="paper",TransitionComponent:N=v.Z,transitionDuration:L=i,TransitionProps:$}=n,E=(0,d.Z)(n,C),F=(0,f.Z)({},n,{disableEscapeKeyDown:p,fullScreen:x,fullWidth:k,maxWidth:g,scroll:W}),X=A(F),H=h.useRef(),U=e=>{H.current=e.target===e.currentTarget},Y=e=>{H.current&&(H.current=null,w&&w(e),j&&j(e,"backdropClick"))},z=(0,y.Z)(o),K=h.useMemo(()=>({titleId:z}),[z]);return(0,M.jsx)(O,(0,f.Z)({className:(0,m.Z)(X.root,u),closeAfterTransition:!0,components:{Backdrop:T},componentsProps:{backdrop:(0,f.Z)({transitionDuration:L,as:a},s)},disableEscapeKeyDown:p,onClose:j,open:_,ref:t,onClick:Y,ownerState:F},E,{children:(0,M.jsx)(N,(0,f.Z)({appear:!0,in:_,timeout:L,role:"presentation"},$,{children:(0,M.jsx)(B,{className:(0,m.Z)(X.container),onMouseDown:U,ownerState:F,children:(0,M.jsx)(R,(0,f.Z)({as:S,elevation:24,role:"dialog","aria-describedby":l,"aria-labelledby":z},I,{className:(0,m.Z)(X.paper,I.className),ownerState:F,children:(0,M.jsx)(D.Provider,{value:K,children:c})}))})}))}))});function L(e){return(0,_.Z)("MuiDialogTitle",e)}let $=(0,j.Z)("MuiDialogTitle",["root"]),E=["className","id"],F=e=>{let{classes:t}=e;return(0,x.Z)({root:["root"]},L,t)},X=(0,w.ZP)(p.Z,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(e,t)=>t.root})({padding:"16px 24px",flex:"0 0 auto"}),H=h.forwardRef(function(e,t){let n=(0,Z.Z)({props:e,name:"MuiDialogTitle"}),{className:r,id:i}=n,l=(0,d.Z)(n,E),o=F(n),{titleId:a=i}=h.useContext(D);return(0,M.jsx)(X,(0,f.Z)({component:"h2",className:(0,m.Z)(o.root,r),ownerState:n,ref:t,variant:"h6",id:null!=i?i:a},l))});function U(e){return(0,_.Z)("MuiDialogContent",e)}(0,j.Z)("MuiDialogContent",["root","dividers"]);let Y=["className","dividers"],z=e=>{let{classes:t,dividers:n}=e;return(0,x.Z)({root:["root",n&&"dividers"]},U,t)},K=(0,w.ZP)("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,n.dividers&&t.dividers]}})(({theme:e,ownerState:t})=>(0,f.Z)({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},t.dividers?{padding:"16px 24px",borderTop:`1px solid ${(e.vars||e).palette.divider}`,borderBottom:`1px solid ${(e.vars||e).palette.divider}`}:{[`.${$.root} + &`]:{paddingTop:0}})),q=h.forwardRef(function(e,t){let n=(0,Z.Z)({props:e,name:"MuiDialogContent"}),{className:r,dividers:i=!1}=n,l=(0,d.Z)(n,Y),o=(0,f.Z)({},n,{dividers:i}),a=z(o);return(0,M.jsx)(K,(0,f.Z)({className:(0,m.Z)(a.root,r),ownerState:o,ref:t},l))});function G(e){return(0,_.Z)("MuiDialogActions",e)}(0,j.Z)("MuiDialogActions",["root","spacing"]);let Q=["className","disableSpacing"],V=e=>{let{classes:t,disableSpacing:n}=e;return(0,x.Z)({root:["root",!n&&"spacing"]},G,t)},J=(0,w.ZP)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,!n.disableSpacing&&t.spacing]}})(({ownerState:e})=>(0,f.Z)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!e.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})),ee=h.forwardRef(function(e,t){let n=(0,Z.Z)({props:e,name:"MuiDialogActions"}),{className:r,disableSpacing:i=!1}=n,l=(0,d.Z)(n,Q),o=(0,f.Z)({},n,{disableSpacing:i}),a=V(o);return(0,M.jsx)(J,(0,f.Z)({className:(0,m.Z)(a.root,r),ownerState:o,ref:t},l))});function et(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function en(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?et(Object(n),!0).forEach(function(t){var r,i,l;r=e,i=t,l=n[t],(i=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(i))in r?Object.defineProperty(r,i,{value:l,enumerable:!0,configurable:!0,writable:!0}):r[i]=l}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):et(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function er(e){return"span"===e._type&&"text"in e&&"string"==typeof e.text&&(void 0===e.marks||Array.isArray(e.marks)&&e.marks.every(e=>"string"==typeof e))}function ei(e){return"string"==typeof e._type&&"@"!==e._type[0]&&(!("markDefs"in e)||Array.isArray(e.markDefs)&&e.markDefs.every(e=>"string"==typeof e._key))&&"children"in e&&Array.isArray(e.children)&&e.children.every(e=>"object"==typeof e&&"_type"in e)}function el(e){return ei(e)&&"listItem"in e&&"string"==typeof e.listItem&&(void 0===e.level||"number"==typeof e.level)}function eo(e){return"@list"===e._type}function ea(e){return"@span"===e._type}function es(e){return"@text"===e._type}let ec=["strong","em","code","underline","strike-through"];function eu(e,t,n){if(!er(e)||!e.marks||!e.marks.length)return[];let r=e.marks.slice(),i={};return r.forEach(e=>{i[e]=1;for(let r=t+1;r<n.length;r++){let t=n[r];if(t&&er(t)&&Array.isArray(t.marks)&&-1!==t.marks.indexOf(e))i[e]++;else break}}),r.sort((e,t)=>(function(e,t,n){let r=e[t],i=e[n];if(r!==i)return i-r;let l=ec.indexOf(t),o=ec.indexOf(n);return l!==o?l-o:t.localeCompare(n)})(i,e,t))}function ep(e,t,n){return{_type:"@list",_key:"".concat(e._key||"".concat(t),"-parent"),mode:n,level:e.level||1,listItem:e.listItem,children:[e]}}function ed(e,t){let n=t.level||1,r=t.listItem||"normal",i="string"==typeof t.listItem;if(eo(e)&&(e.level||1)===n&&i&&(e.listItem||"normal")===r)return e;if(!("children"in e))return;let l=e.children[e.children.length-1];return l&&!er(l)?ed(l,t):void 0}function ef(e,t,n){let r=t[n],i=e[n];return"function"==typeof r||r&&"function"==typeof i?r:r?{...i,...r}:i}let eh=e=>{let{children:t,value:n}=e;return(0,M.jsx)("a",{href:null==n?void 0:n.href,children:t})},em={textDecoration:"underline"},ex=e=>{let{children:t}=e;return(0,M.jsx)("li",{children:t})},ey=(e,t)=>"[@portabletext/react] Unknown ".concat(e,", specify a component for it in the `components.").concat(t,"` prop"),ek=e=>ey('block type "'.concat(e,'"'),"types"),eg=e=>ey('mark type "'.concat(e,'"'),"marks"),ev=e=>ey('block style "'.concat(e,'"'),"block"),eb=e=>ey('list style "'.concat(e,'"'),"list"),eZ=e=>ey('list item style "'.concat(e,'"'),"listItem");function ew(e){console.warn(e)}let ej={display:"none"},e_=e=>{let{value:t,isInline:n}=e,r=ek(t._type);return n?(0,M.jsx)("span",{style:ej,children:r}):(0,M.jsx)("div",{style:ej,children:r})},eS=e=>{let{markType:t,children:n}=e;return(0,M.jsx)("span",{className:"unknown__pt__mark__".concat(t),children:n})},eI=e=>{let{children:t}=e;return(0,M.jsx)("p",{children:t})},eD=e=>{let{children:t}=e;return(0,M.jsx)("ul",{children:t})},eW=e=>{let{children:t}=e;return(0,M.jsx)("li",{children:t})},eP=()=>(0,M.jsx)("br",{}),eM={types:{},block:{normal:e=>{let{children:t}=e;return(0,M.jsx)("p",{children:t})},blockquote:e=>{let{children:t}=e;return(0,M.jsx)("blockquote",{children:t})},h1:e=>{let{children:t}=e;return(0,M.jsx)("h1",{children:t})},h2:e=>{let{children:t}=e;return(0,M.jsx)("h2",{children:t})},h3:e=>{let{children:t}=e;return(0,M.jsx)("h3",{children:t})},h4:e=>{let{children:t}=e;return(0,M.jsx)("h4",{children:t})},h5:e=>{let{children:t}=e;return(0,M.jsx)("h5",{children:t})},h6:e=>{let{children:t}=e;return(0,M.jsx)("h6",{children:t})}},marks:{em:e=>{let{children:t}=e;return(0,M.jsx)("em",{children:t})},strong:e=>{let{children:t}=e;return(0,M.jsx)("strong",{children:t})},code:e=>{let{children:t}=e;return(0,M.jsx)("code",{children:t})},underline:e=>{let{children:t}=e;return(0,M.jsx)("span",{style:em,children:t})},"strike-through":e=>{let{children:t}=e;return(0,M.jsx)("del",{children:t})},link:eh},list:{number:e=>{let{children:t}=e;return(0,M.jsx)("ol",{children:t})},bullet:e=>{let{children:t}=e;return(0,M.jsx)("ul",{children:t})}},listItem:ex,hardBreak:eP,unknownType:e_,unknownMark:eS,unknownList:eD,unknownListItem:eW,unknownBlockStyle:eI};function eC(e){let{value:t,components:n,listNestingMode:r,onMissingComponent:i=ew}=e,l=i||eO,o=Array.isArray(t)?t:[t],a=function(e,t){let n;let r=[];for(let l=0;l<e.length;l++){let o=e[l];if(o){var i;if(!el(o)){r.push(o),n=void 0;continue}if(!n){n=ep(o,l,t),r.push(n);continue}if(i=n,(o.level||1)===i.level&&o.listItem===i.listItem){n.children.push(o);continue}if((o.level||1)>n.level){let e=ep(o,l,t);if("html"===t){let t=n.children[n.children.length-1],r=en(en({},t),{},{children:[...t.children,e]});n.children[n.children.length-1]=r}else n.children.push(e);n=e;continue}if((o.level||1)<n.level){let e=r[r.length-1],i=e&&ed(e,o);if(i){(n=i).children.push(o);continue}n=ep(o,l,t),r.push(n);continue}if(o.listItem!==n.listItem){let e=r[r.length-1],i=e&&ed(e,{level:o.level||1});if(i&&i.listItem===o.listItem){(n=i).children.push(o);continue}n=ep(o,l,t),r.push(n);continue}console.warn("Unknown state encountered for block",o),r.push(o)}}return r}(o,r||"html"),s=(0,h.useMemo)(()=>n?function(e,t){let{block:n,list:r,listItem:i,marks:l,types:o,...a}=t;return{...e,block:ef(e,t,"block"),list:ef(e,t,"list"),listItem:ef(e,t,"listItem"),marks:ef(e,t,"marks"),types:ef(e,t,"types"),...a}}(eM,n):eM,[n]),c=(0,h.useMemo)(()=>eT(s,l),[s,l]),u=a.map((e,t)=>c({node:e,index:t,isInline:!1,renderNode:c}));return(0,M.jsx)(M.Fragment,{children:u})}let eT=(e,t)=>function n(r){let{node:i,index:l,isInline:o}=r,a=i._key||"node-".concat(l);return eo(i)?function(r,i,l){let o=r.children.map((e,t)=>n({node:e._key?e:{...e,_key:"li-".concat(i,"-").concat(t)},index:i,isInline:!1,renderNode:n})),a=e.list,s="function"==typeof a?a:a[r.listItem],c=s||e.unknownList;if(c===e.unknownList){let e=r.listItem||"bullet";t(eb(e),{nodeType:"listStyle",type:e})}return(0,M.jsx)(c,{value:r,index:i,isInline:!1,renderNode:n,children:o},l)}(i,l,a):el(i)?function(r,i,l){let o=eA({node:r,index:i,isInline:!1,renderNode:n}),a=e.listItem,s="function"==typeof a?a:a[r.listItem],c=s||e.unknownListItem;if(c===e.unknownListItem){let e=r.listItem||"bullet";t(eZ(e),{type:e,nodeType:"listItemStyle"})}let u=o.children;if(r.style&&"normal"!==r.style){let{listItem:e,...t}=r;u=n({node:t,index:i,isInline:!1,renderNode:n})}return(0,M.jsx)(c,{value:r,index:i,isInline:!1,renderNode:n,children:u},l)}(i,l,a):ea(i)?function(r,i,l){let{markDef:o,markType:a,markKey:s}=r,c=e.marks[a]||e.unknownMark,u=r.children.map((e,t)=>n({node:e,index:t,isInline:!0,renderNode:n}));return c===e.unknownMark&&t(eg(a),{nodeType:"mark",type:a}),(0,M.jsx)(c,{text:function e(t){let n="";return t.children.forEach(t=>{es(t)?n+=t.text:ea(t)&&(n+=e(t))}),n}(r),value:o,markType:a,markKey:s,renderNode:n,children:u},l)}(i,0,a):ei(i)?function(r,i,l,o){let{_key:a,...s}=eA({node:r,index:i,isInline:o,renderNode:n}),c=s.node.style||"normal",u="function"==typeof e.block?e.block:e.block[c],p=u||e.unknownBlockStyle;return p===e.unknownBlockStyle&&t(ev(c),{nodeType:"blockStyle",type:c}),(0,M.jsx)(p,{...s,value:s.node,renderNode:n},l)}(i,l,a,o):es(i)?function(t,n){if("\n"===t.text){let t=e.hardBreak;return t?(0,M.jsx)(t,{},n):"\n"}return t.text}(i,a):function(r,i,l,o){let a=e.types[r._type],s={value:r,isInline:o,index:i,renderNode:n};if(a)return(0,M.jsx)(a,{...s},l);t(ek(r._type),{nodeType:"block",type:r._type});let c=e.unknownType;return(0,M.jsx)(c,{...s},l)}(i,l,a,o)};function eA(e){let{node:t,index:n,isInline:r,renderNode:i}=e,l=function(e){var t;let{children:n,markDefs:r=[]}=e;if(!n||!n.length)return[];let i=n.map(eu),l={_type:"@span",children:[],markType:"<unknown>"},o=[l];for(let e=0;e<n.length;e++){let l=n[e];if(!l)continue;let a=i[e]||[],s=1;if(o.length>1)for(;s<o.length;s++){let e=(null==(t=o[s])?void 0:t.markKey)||"",n=a.indexOf(e);if(-1===n)break;a.splice(n,1)}let c=(o=o.slice(0,s))[o.length-1];if(c){for(let e of a){let t=r.find(t=>t._key===e),n=t?t._type:e,i={_type:"@span",_key:l._key,children:[],markDef:t,markType:n,markKey:e};c.children.push(i),o.push(i),c=i}if(er(l)){let e=l.text.split("\n");for(let t=e.length;t-- >1;)e.splice(t,0,"\n");c.children=c.children.concat(e.map(e=>({_type:"@text",text:e})))}else c.children=c.children.concat(l)}}return l.children}(t),o=l.map((e,t)=>i({node:e,isInline:!0,index:t,renderNode:i}));return{_key:t._key||"block-".concat(n),children:o,index:n,isInline:r,node:t}}function eO(){}var eB=n(1163),eR=n(1072),eN={marks:{link:e=>{let{children:t,value:n}=e;return(0,r.tZ)(u.Z,{href:n.href,children:t})}}},eL=!0;function e$(e){let{page:t,calculatorConfig:n}=e,[d,f]=(0,h.useState)(!1),m=(0,eB.useRouter)();return(0,eR.Z)(),(0,r.BX)(r.HY,{children:[(0,r.BX)(l.Z,{maxWidth:"md",sx:{minHeight:"700px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},id:"calculator-container-outer",children:[(0,r.BX)(o.Z,{type:"button",onClick:()=>m.back(),sx:{marginLeft:0,fontWeight:"lighter",fontSize:"14px"},children:[(0,r.tZ)(a.Z,{sx:{marginRight:"10px"},xmlns:"http://www.w3.org/2000/svg",width:"12",height:"20",viewBox:"0 0 12 20",fill:"none",children:(0,r.tZ)("path",{d:"M11.8341 1.8701L10.0541 0.100098L0.164062 10.0001L10.0641 19.9001L11.8341 18.1301L3.70406 10.0001L11.8341 1.8701Z",fill:"#4e6c99"})}),"Previous"]}),(0,r.tZ)(s.Z,{mb:4,children:(0,r.tZ)(eC,{value:t.content,components:eN})}),(0,r.tZ)(l.Z,{maxWidth:"xs",sx:{mb:4},children:(0,r.BX)(c.Z,{gap:2,children:[t.choices&&t.choices.map(e=>{let t=e.linkTo?"/calculator/".concat(e.linkTo.slug.current):"#",n=e.isExternalLink?e.url:t;return(0,r.tZ)(o.Z,{variant:"contained",color:"primary",href:n,sx:{width:"100%"},children:e.label},e._key)}),t.isQuestion&&(0,r.tZ)(o.Z,{variant:"outlined",color:"primary",sx:{width:"100%"},onClick:()=>f(!0),children:n.notSureAnswer.promptText}),t.isFinalPage&&(0,r.BX)(r.HY,{children:[(0,r.tZ)(o.Z,{variant:"contained",color:"primary",href:t.isUndetermined?n.feedback.isUndeterminedUrl:n.feedback.allOtherFeedbackUrl,children:n.feedback.linkText}),(0,r.tZ)(u.Z,{sx:{textAlign:"center"},href:n.checkAnotherConviction.linkTo.slug.current,children:(0,r.BX)(s.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center",gap:1},children:[(0,r.tZ)(i.Z,{}),n.checkAnotherConviction.linkText]})})]})]})}),t.isFinalPage&&(0,r.tZ)(s.Z,{maxWidth:"60ch",textAlign:"center",children:(0,r.tZ)(p.Z,{variant:"caption",sx:{fontWeight:"light"},children:n.legalDisclaimer})})]}),(0,r.BX)(N,{open:d,onClose:()=>f(!1),"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[(0,r.tZ)(H,{id:"alert-dialog-title",children:n.notSureAnswer.header}),(0,r.tZ)(q,{children:(0,r.tZ)(eC,{value:n.notSureAnswer.content,components:eN})}),(0,r.tZ)(ee,{children:(0,r.tZ)(o.Z,{onClick:()=>f(!1),children:n.notSureAnswer.closeText})})]}),(0,r.tZ)(s.Z,{sx:{textAlign:"center",mb:"30px",color:"black",fontWeight:500,fontSize:"16px"},children:(0,r.BX)(u.Z,{href:n.errorReportingForm.errorReportingFormUrl,sx:{color:"text.primary",textDecoration:"none","&:hover":{color:"primary.main",textDecoration:"underline"}},children:[n.errorReportingForm.linkText," "]})})]})}},1163:function(e,t,n){e.exports=n(6885)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=7209)}),_N_E=e.O()}]);