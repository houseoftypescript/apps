(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[822],{19080:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/weather",function(){return a(35594)}])},97737:function(e,s,a){"use strict";var r=a(85893),n=a(67294);let l=e=>{let{backgroundImage:s={src:""},children:a=(0,r.jsx)(r.Fragment,{})}=e,[l,i]=(0,n.useState)("rgba(22, 25, 32, 0.5)"),c=(0,n.useCallback)(()=>{let{pageYOffset:e,scrollY:s,innerHeight:a}=window,r=e||s||0,n=.5+parseFloat((.4*(r/a<1?r/a:1)).toFixed(2));i("rgba(22, 25, 32, ".concat(n,")"))},[]);return(0,n.useEffect)(()=>(window.addEventListener("scroll",c,{passive:!0}),()=>window.removeEventListener("scroll",c)),[c]),(0,r.jsx)("div",{className:"bg-fixed bg-center bg-cover text-white",style:{backgroundImage:"url(".concat(s.src,")")},children:(0,r.jsx)("div",{style:{backgroundColor:l},className:"transition-all",children:a})})};l.displayName="Background",l.defaultProps={backgroundImage:{src:""},children:(0,r.jsx)(r.Fragment,{})},s.Z=l},39665:function(e,s,a){"use strict";var r=a(85893),n=a(25215);let l=()=>(0,r.jsx)("footer",{children:(0,r.jsx)(n.Z,{children:(0,r.jsx)("div",{className:"py-8",children:"\xa9 2023 HOM"})})});s.Z=l},70105:function(e,s,a){"use strict";a.d(s,{Z:function(){return N}});var r=a(85893),n=a(20261),l=a(6914),i=a(75542),c=a(14161),t=a(41718),A=a(71277);let d={apps:[{id:"news",href:"/news",title:"news",icon:(0,r.jsx)(t.Z,{})},{id:"forex",href:"/forex",title:"forex",icon:(0,r.jsx)(i.Z,{})},{id:"weather",href:"/weather",title:"weather",icon:(0,r.jsx)(l.Z,{})},{id:"football",href:"/football",title:"football",icon:(0,r.jsx)(A.Z,{})},{id:"stock",href:"/stock",title:"stock",icon:(0,r.jsx)(n.Z,{})},{id:"countries",href:"/countries",title:"countries",icon:(0,r.jsx)(c.Z,{})}]};var o=a(326),x=a(83321),h=a(25215),u=a(45773),j=a(23599),m=a(41664),p=a.n(m),f=a(67294);let g=e=>{let{icon:s=(0,r.jsx)(r.Fragment,{}),appName:a=""}=e,[n,l]=(0,f.useState)(null),i=Boolean(n),c=e=>{l(e.currentTarget)},t=()=>{l(null)};return(0,r.jsx)("nav",{className:"py-8",children:(0,r.jsx)(h.Z,{children:(0,r.jsxs)("div",{className:"flex justify-between text-white",children:[(0,r.jsx)("h1",{className:"text-2xl uppercase",children:(0,r.jsx)(p(),{href:"/",children:(0,r.jsxs)("div",{className:"flex items-center gap-2",children:[s,a]})})}),(0,r.jsxs)("div",{children:[(0,r.jsx)(x.Z,{onClick:c,className:"p-0 text-white",children:(0,r.jsx)(o.Z,{fontSize:"large"})}),(0,r.jsx)(u.Z,{id:"basic-menu",anchorEl:n,open:i,onClose:t,anchorOrigin:{vertical:"top",horizontal:"left"},MenuListProps:{"aria-labelledby":"basic-button"},children:d.apps.map(e=>{let{id:s,href:a,title:n,icon:l}=e;return(0,r.jsx)(j.Z,{children:(0,r.jsx)(p(),{href:a,className:"capitalize",children:(0,r.jsxs)("div",{className:"flex items-center gap-2",children:[l,n]})})},s)})})]})]})})})};var N=g},18870:function(e,s,a){"use strict";a.d(s,{W:function(){return r}});let r="https://homapis.vercel.app/api"},685:function(e,s,a){"use strict";var r=a(6154),n=a(67294);s.Z=function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},[{loading:a,error:l,data:i},c]=(0,n.useState)({loading:!1,error:null,data:null}),[t,A]=(0,n.useState)(0),d=(0,n.useCallback)(()=>A(e=>e+1),[]);return(0,n.useEffect)(()=>{let a=async(e,s)=>{c({loading:!0,error:null,data:null});try{let a=await r.Z.get(e,s),{data:n}=a;c({loading:!1,error:null,data:n})}catch(e){c({loading:!1,error:e,data:null})}};a(e,s)},[t]),{loading:a,error:l,data:i,refetch:d}}},35594:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return j}});var r=a(85893),n={src:"/apps//_next/static/media/weather.1d363289.jpeg",height:3309,width:5008,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAnwQf/8QAHBAAAgEFAQAAAAAAAAAAAAAAAQIRAAQSFSJh/9oACAEBAAE/ANzeFVKuR0ZGbFTHk1//xAAXEQADAQAAAAAAAAAAAAAAAAAAARFR/9oACAECAQE/AK9P/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=",blurWidth:8,blurHeight:5},l=a(97737),i=a(39665),c=a(70105),t=a(18870),A=a(685),d=(0,a(88169).Z)((0,r.jsx)("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"}),"Cloud"),o=a(25215);let x=e=>{let{query:s}=e,{loading:a,error:n,data:l}=(0,A.Z)("".concat(t.W,"/weather?query=").concat(encodeURIComponent(s)));return a?(0,r.jsx)("div",{className:"border p-8 rounded",children:(0,r.jsx)("div",{className:"flex items-center justify-center",children:(0,r.jsxs)("span",{className:"uppercase",children:[s," - Loading"]})})}):n?(0,r.jsx)("div",{className:"border p-8 rounded",children:(0,r.jsx)("div",{className:"flex items-center justify-center",children:(0,r.jsxs)("span",{className:"uppercase",children:[s," - ",n.message||"Error"]})})}):l?(0,r.jsx)("div",{className:"border border-gray-900 p-8 rounded bg-gray-900/75 text-gray-100",children:(0,r.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,r.jsxs)("div",{className:"flex justify-between items-center text-2xl",children:[(0,r.jsxs)("h2",{className:"font-medium",children:[l.name,", ",l.country]}),(0,r.jsxs)("h2",{className:"font-bold",children:[l.temperature,"\xb0C"]})]}),(0,r.jsxs)("div",{className:"flex justify-between items-center text-gray-300",children:[(0,r.jsx)("p",{children:l.main}),(0,r.jsxs)("p",{children:[l.minTemperature,"\xb0C"]})]}),(0,r.jsxs)("div",{className:"flex justify-between items-center text-gray-300",children:[(0,r.jsx)("p",{className:"capitalize",children:l.description}),(0,r.jsxs)("p",{children:[l.maxTemperature,"\xb0C"]})]})]})}):(0,r.jsx)("div",{className:"border p-8 rounded",children:(0,r.jsx)("div",{className:"flex items-center justify-center",children:(0,r.jsxs)("span",{className:"uppercase",children:[s," - No Data"]})})})},h=()=>(0,r.jsx)(l.Z,{backgroundImage:n,children:(0,r.jsxs)("div",{className:"min-h-screen flex flex-col",children:[(0,r.jsx)(c.Z,{icon:(0,r.jsx)(d,{}),appName:"weather"}),(0,r.jsx)("main",{className:"grow",children:(0,r.jsx)(o.Z,{children:(0,r.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[(0,r.jsx)("div",{className:"col-span-1",children:(0,r.jsx)(x,{query:"ho chi minh"})}),(0,r.jsx)("div",{className:"col-span-1",children:(0,r.jsx)(x,{query:"hanoi"})}),(0,r.jsx)("div",{className:"col-span-1",children:(0,r.jsx)(x,{query:"singapore"})}),(0,r.jsx)("div",{className:"col-span-1",children:(0,r.jsx)(x,{query:"seoul"})}),(0,r.jsx)("div",{className:"col-span-1",children:(0,r.jsx)(x,{query:"sydney"})}),(0,r.jsx)("div",{className:"col-span-1",children:(0,r.jsx)(x,{query:"boston"})}),(0,r.jsx)("div",{className:"col-span-1",children:(0,r.jsx)(x,{query:"new york"})}),(0,r.jsx)("div",{className:"col-span-1",children:(0,r.jsx)(x,{query:"london"})}),(0,r.jsx)("div",{className:"col-span-1",children:(0,r.jsx)(x,{query:"frankfurt am main"})}),(0,r.jsx)("div",{className:"col-span-1",children:(0,r.jsx)(x,{query:"helsinki"})})]})})}),(0,r.jsx)(i.Z,{})]})}),u=()=>(0,r.jsx)(h,{});var j=u}},function(e){e.O(0,[385,589,154,774,888,179],function(){return e(e.s=19080)}),_N_E=e.O()}]);