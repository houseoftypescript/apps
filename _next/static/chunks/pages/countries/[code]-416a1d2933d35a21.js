(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[86],{43953:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/countries/[code]",function(){return t(82452)}])},45819:function(e,s){"use strict";s.Z={src:"/apps//_next/static/media/maps.c4d60fdc.jpeg",height:3648,width:5472,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABAEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAAAiAX/xAAdEAAABQUAAAAAAAAAAAAAAAAAAQMEEQIFEiEi/9oACAEBAAE/AHtvaJMeEqSPOJjY/8QAFhEAAwAAAAAAAAAAAAAAAAAAAAIx/9oACAECAQE/AGp//8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQMBAT8Aj//Z",blurWidth:8,blurHeight:5}},22086:function(e,s,t){"use strict";var n=t(85893),r=t(90629);let a=e=>{let{loading:s=!1,error:t=null,data:a=null,children:l=(0,n.jsx)(n.Fragment,{})}=e;return s?(0,n.jsx)(r.Z,{className:"p-8",children:(0,n.jsx)("div",{className:"flex items-center justify-center",children:(0,n.jsx)("span",{className:"uppercase",children:"Loading"})})}):t?(0,n.jsx)(r.Z,{className:"p-8",children:(0,n.jsx)("div",{className:"flex items-center justify-center",children:(0,n.jsx)("span",{className:"uppercase",children:t.message||"Error"})})}):a?(0,n.jsx)(n.Fragment,{children:l}):(0,n.jsx)(r.Z,{className:"p-8",children:(0,n.jsx)("div",{className:"flex items-center justify-center",children:(0,n.jsx)("span",{className:"uppercase",children:"No Data"})})})};s.Z=a},94953:function(e,s,t){"use strict";var n=t(85893),r=t(67294);let a=e=>{let{backgroundImage:s={src:""},children:t=(0,n.jsx)(n.Fragment,{})}=e,[a,l]=(0,r.useState)("rgba(22, 25, 32, 0.5)"),c=(0,r.useCallback)(()=>{let{pageYOffset:e,scrollY:s,innerHeight:t}=window,n=e||s||0,r=.5+parseFloat((.4*(n/t<1?n/t:1)).toFixed(2));l("rgba(22, 25, 32, ".concat(r,")"))},[]);return(0,r.useEffect)(()=>(window.addEventListener("scroll",c,{passive:!0}),()=>window.removeEventListener("scroll",c)),[c]),(0,n.jsx)("div",{className:"bg-fixed bg-center bg-cover text-white",style:{backgroundImage:"url(".concat(s.src,")")},children:(0,n.jsx)("div",{style:{backgroundColor:a},className:"transition-all",children:t})})};a.displayName="Background",a.defaultProps={backgroundImage:{src:""},children:(0,n.jsx)(n.Fragment,{})},s.Z=a},35604:function(e,s,t){"use strict";var n=t(85893),r=t(53156);let a=()=>(0,n.jsx)("footer",{children:(0,n.jsx)(r.Z,{children:(0,n.jsx)("div",{className:"py-8",children:"\xa9 2023 HOM"})})});s.Z=a},20475:function(e,s,t){"use strict";t.d(s,{Z:function(){return v}});var n=t(85893),r=t(20261),a=t(6914),l=t(75542),c=t(14161),i=t(41718),A=t(71277);let o={apps:[{id:"news",href:"/news",title:"news",icon:(0,n.jsx)(i.Z,{})},{id:"forex",href:"/forex",title:"forex",icon:(0,n.jsx)(l.Z,{})},{id:"weather",href:"/weather",title:"weather",icon:(0,n.jsx)(a.Z,{})},{id:"football",href:"/football",title:"football",icon:(0,n.jsx)(A.Z,{})},{id:"stock",href:"/stock",title:"stock",icon:(0,n.jsx)(r.Z,{})},{id:"countries",href:"/countries",title:"countries",icon:(0,n.jsx)(c.Z,{})}]};var d=t(326),u=t(83321),x=t(53156),h=t(32959),j=t(23599),f=t(41664),m=t.n(f),p=t(67294);let g=e=>{let{icon:s=(0,n.jsx)(n.Fragment,{}),appName:t=""}=e,[r,a]=(0,p.useState)(null),l=Boolean(r),c=e=>{a(e.currentTarget)},i=()=>{a(null)};return(0,n.jsx)("nav",{className:"py-8",children:(0,n.jsx)(x.Z,{children:(0,n.jsxs)("div",{className:"flex justify-between text-white",children:[(0,n.jsx)("h1",{className:"text-2xl uppercase",children:(0,n.jsx)(m(),{href:"/",children:(0,n.jsxs)("div",{className:"flex items-center gap-2",children:[s,t]})})}),(0,n.jsxs)("div",{children:[(0,n.jsx)(u.Z,{onClick:c,className:"p-0 text-white",children:(0,n.jsx)(d.Z,{fontSize:"large"})}),(0,n.jsx)(h.Z,{id:"basic-menu",anchorEl:r,open:l,onClose:i,anchorOrigin:{vertical:"top",horizontal:"left"},MenuListProps:{"aria-labelledby":"basic-button"},children:o.apps.map(e=>{let{id:s,href:t,title:r,icon:a}=e;return(0,n.jsx)(j.Z,{children:(0,n.jsx)(m(),{href:t,className:"capitalize",children:(0,n.jsxs)("div",{className:"flex items-center gap-2",children:[a,r]})})},s)})})]})]})})})};var v=g},31272:function(e,s,t){"use strict";t.d(s,{W:function(){return n}});let n="https://homapis.vercel.app/api"},56684:function(e,s,t){"use strict";var n=t(8433),r=t(67294);s.Z=function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},[{loading:t,error:a,data:l},c]=(0,r.useState)({loading:!1,error:null,data:null}),[i,A]=(0,r.useState)(0),o=(0,r.useCallback)(()=>A(e=>e+1),[]);return(0,r.useEffect)(()=>{let t=async(e,s)=>{c({loading:!0,error:null,data:null});try{let t=await n.Z.get(e,s),{data:r}=t;c({loading:!1,error:null,data:r})}catch(e){c({loading:!1,error:e,data:null})}};t(e,s)},[i]),{loading:t,error:a,data:l,refetch:o}}},82452:function(e,s,t){"use strict";t.r(s),t.d(s,{CountryPage:function(){return p},default:function(){return g}});var n=t(85893),r=t(45819),a=t(22086),l=t(94953),c=t(35604),i=t(20475),A=t(31272),o=t(56684),d=t(14161),u=t(53156),x=t(90629),h=t(11163),j=t(67294);let f=j.memo(e=>{var s;let{code:t}=e,r="".concat(A.W,"/countries"),{loading:l,error:c,data:i}=(0,o.Z)(r),d=(i||[]).find(e=>e.cca2.toLowerCase()===t.toLowerCase()||e.cca3.toLowerCase()===t.toLowerCase())||{};return(0,n.jsx)(a.Z,{loading:l,error:c,data:i,children:(0,n.jsx)(x.Z,{children:(0,n.jsxs)("div",{className:"p-8",children:[(null===(s=d.name)||void 0===s?void 0:s.common)||""," (",d.cca2||""," -"," ",d.cca3||"",")"]})})})});f.displayName="CountryInfo";let m=()=>{let e=(0,h.useRouter)(),s=e.query.code;return(0,n.jsx)(l.Z,{backgroundImage:r.Z,children:(0,n.jsxs)("div",{className:"min-h-screen flex flex-col",children:[(0,n.jsx)(i.Z,{icon:(0,n.jsx)(d.Z,{}),appName:s}),(0,n.jsx)("main",{className:"grow",children:(0,n.jsx)("div",{className:"h-full",children:(0,n.jsx)(u.Z,{children:(0,n.jsx)(f,{code:s})})})}),(0,n.jsx)(c.Z,{})]})})};m.displayName="CountryTemplate";let p=()=>(0,n.jsx)(m,{});var g=p},11163:function(e,s,t){e.exports=t(80880)}},function(e){e.O(0,[525,433,774,888,179],function(){return e(e.s=43953)}),_N_E=e.O()}]);