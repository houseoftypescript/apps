(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[348],{2153:function(e,s,t){"use strict";var n=t(4836);s.Z=void 0;var r=n(t(4938)),a=t(5893),l=(0,r.default)([(0,a.jsx)("path",{d:"m21 5-9-4-9 4v6c0 5.55 3.84 10.74 9 12 2.3-.56 4.33-1.9 5.88-3.71l-3.12-3.12c-1.94 1.29-4.58 1.07-6.29-.64-1.95-1.95-1.95-5.12 0-7.07 1.95-1.95 5.12-1.95 7.07 0 1.71 1.71 1.92 4.35.64 6.29l2.9 2.9C20.29 15.69 21 13.38 21 11V5z"},"0"),(0,a.jsx)("circle",{cx:"12",cy:"12",r:"3"},"1")],"Policy");s.Z=l},5908:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/usa/congress/[congress]/committees",function(){return t(5544)}])},7219:function(e,s){"use strict";s.Z={src:"/apps//_next/static/media/congress.6d9e671f.jpeg",height:3818,width:5962,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAAAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAAoT//xAAcEAACAgIDAAAAAAAAAAAAAAABAgMSAAQRE2H/2gAIAQEAAT8A3OpowrxBnqeH9C2z/8QAGBEAAgMAAAAAAAAAAAAAAAAAAQMAAkL/2gAIAQIBAT8Aq1g2Z//EABcRAAMBAAAAAAAAAAAAAAAAAAABAlL/2gAIAQMBAT8AcTlH/9k=",blurWidth:8,blurHeight:5}},2086:function(e,s,t){"use strict";var n=t(5893),r=t(629);let a=e=>{let{loading:s=!1,error:t=null,data:a=null,children:l=(0,n.jsx)(n.Fragment,{})}=e;return s?(0,n.jsx)(r.Z,{className:"p-8",children:(0,n.jsx)("div",{className:"flex items-center justify-center",children:(0,n.jsx)("span",{className:"uppercase",children:"Loading"})})}):t?(0,n.jsx)(r.Z,{className:"p-8",children:(0,n.jsx)("div",{className:"flex items-center justify-center",children:(0,n.jsx)("span",{className:"uppercase",children:t.message||"Error"})})}):a?(0,n.jsx)(n.Fragment,{children:l}):(0,n.jsx)(r.Z,{className:"p-8",children:(0,n.jsx)("div",{className:"flex items-center justify-center",children:(0,n.jsx)("span",{className:"uppercase",children:"No Data"})})})};s.Z=a},4953:function(e,s,t){"use strict";var n=t(5893),r=t(7294);let a=e=>{let{backgroundImage:s={src:""},children:t=(0,n.jsx)(n.Fragment,{})}=e,[a,l]=(0,r.useState)("rgba(22, 25, 32, 0.5)"),c=(0,r.useCallback)(()=>{let{pageYOffset:e,scrollY:s,innerHeight:t}=window,n=e||s||0,r=.5+parseFloat((.4*(n/t<1?n/t:1)).toFixed(2));l("rgba(22, 25, 32, ".concat(r,")"))},[]);return(0,r.useEffect)(()=>(window.addEventListener("scroll",c,{passive:!0}),()=>window.removeEventListener("scroll",c)),[c]),(0,n.jsx)("div",{className:"bg-fixed bg-center bg-cover text-white",style:{backgroundImage:"url(".concat(s.src,")")},children:(0,n.jsx)("div",{style:{backgroundColor:a},className:"transition-all",children:t})})};a.displayName="Background",a.defaultProps={backgroundImage:{src:""},children:(0,n.jsx)(n.Fragment,{})},s.Z=a},5604:function(e,s,t){"use strict";var n=t(5893),r=t(9520);let a=()=>(0,n.jsx)("footer",{children:(0,n.jsx)(r.Z,{children:(0,n.jsx)("div",{className:"py-8",children:"\xa9 2023 HOM"})})});s.Z=a},475:function(e,s,t){"use strict";t.d(s,{Z:function(){return Z}});var n=t(5893),r=t(261),a=t(6914),l=t(5542),c=t(4161),i=t(1718),A=t(1277);let o={apps:[{id:"news",href:"/news",title:"news",icon:(0,n.jsx)(i.Z,{})},{id:"forex",href:"/forex",title:"forex",icon:(0,n.jsx)(l.Z,{})},{id:"weather",href:"/weather",title:"weather",icon:(0,n.jsx)(a.Z,{})},{id:"football",href:"/football",title:"football",icon:(0,n.jsx)(A.Z,{})},{id:"stock",href:"/stock",title:"stock",icon:(0,n.jsx)(r.Z,{})},{id:"countries",href:"/countries",title:"countries",icon:(0,n.jsx)(c.Z,{})}]};var d=t(326),u=t(3321),h=t(9520),x=t(2959),j=t(3599),m=t(1664),g=t.n(m),f=t(7294);let p=e=>{let{icon:s=(0,n.jsx)(n.Fragment,{}),appName:t=""}=e,[r,a]=(0,f.useState)(null),l=Boolean(r),c=e=>{a(e.currentTarget)},i=()=>{a(null)};return(0,n.jsx)("nav",{className:"py-8",children:(0,n.jsx)(h.Z,{children:(0,n.jsxs)("div",{className:"flex justify-between text-white",children:[(0,n.jsx)("h1",{className:"text-2xl uppercase",children:(0,n.jsx)(g(),{href:"/",children:(0,n.jsxs)("div",{className:"flex items-center gap-2",children:[s,t]})})}),(0,n.jsxs)("div",{children:[(0,n.jsx)(u.Z,{onClick:c,className:"p-0 text-white",children:(0,n.jsx)(d.Z,{fontSize:"large"})}),(0,n.jsx)(x.Z,{id:"basic-menu",anchorEl:r,open:l,onClose:i,anchorOrigin:{vertical:"top",horizontal:"left"},MenuListProps:{"aria-labelledby":"basic-button"},children:o.apps.map(e=>{let{id:s,href:t,title:r,icon:a}=e;return(0,n.jsx)(j.Z,{children:(0,n.jsx)(g(),{href:t,className:"capitalize",children:(0,n.jsxs)("div",{className:"flex items-center gap-2",children:[a,r]})})},s)})})]})]})})})};var Z=p},1272:function(e,s,t){"use strict";t.d(s,{W:function(){return n}});let n="https://homapis.vercel.app/api"},6684:function(e,s,t){"use strict";var n=t(8433),r=t(7294);s.Z=function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},[{loading:t,error:a,data:l},c]=(0,r.useState)({loading:!1,error:null,data:null}),[i,A]=(0,r.useState)(0),o=(0,r.useCallback)(()=>A(e=>e+1),[]);return(0,r.useEffect)(()=>{let t=async(e,s)=>{c({loading:!0,error:null,data:null});try{let t=await n.Z.get(e,s),{data:r}=t;c({loading:!1,error:null,data:r})}catch(e){c({loading:!1,error:e,data:null})}};t(e,s)},[i]),{loading:t,error:a,data:l,refetch:o}}},5544:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return I}});var n=t(5893),r=t(7219),a=t(2086),l=t(4953),c=t(5604),i=t(475),A=t(1272),o=t(6684),d=t(2153),u=t(9520),h=t(4054),x=t(3599),j=t(629),m=t(315),g=t(7906),f=t(295),p=t(3252),Z=t(2882),N=t(3184),v=t(3816),w=t(1163),b=t(7294);let C=b.memo(e=>{let{chamber:s="house",congress:t=118}=e,r="".concat(A.W,"/usa/congress/committees?congress=").concat(t,"&chamber=").concat(s),{loading:l,error:c,data:i,refetch:d}=(0,o.Z)(r);return(0,b.useEffect)(()=>{d()},[s,t,d]),(0,n.jsx)(a.Z,{loading:l,error:c,data:i,children:(0,n.jsx)(j.Z,{children:(i||[]).length>0?(0,n.jsx)(Z.Z,{children:(0,n.jsxs)(g.Z,{children:[(0,n.jsx)(N.Z,{children:(0,n.jsxs)(v.Z,{children:[(0,n.jsx)(p.Z,{className:"font-bold",children:"ID"}),(0,n.jsx)(p.Z,{className:"font-bold",children:"Name"})]})}),(0,n.jsx)(f.Z,{children:(i||[]).map(e=>(0,n.jsxs)(v.Z,{children:[(0,n.jsx)(p.Z,{children:e.id}),(0,n.jsx)(p.Z,{children:e.name})]},e.id))})]})}):(0,n.jsx)("div",{className:"flex items-center justify-center py-8",children:(0,n.jsx)("span",{className:"uppercase",children:"No Data"})})})})});C.displayName="Committees";let E=()=>{let e=(0,w.useRouter)(),s=parseInt(e.query.congress,10),[t,a]=(0,b.useState)("house");return(0,n.jsx)(l.Z,{backgroundImage:r.Z,children:(0,n.jsxs)("div",{className:"min-h-screen flex flex-col",children:[(0,n.jsx)(i.Z,{icon:(0,n.jsx)(d.Z,{}),appName:"congress"}),(0,n.jsx)("main",{className:"grow",children:(0,n.jsx)(u.Z,{children:(0,n.jsxs)("div",{className:"flex flex-col gap-4 md:gap-8",children:[(0,n.jsx)(h.Z,{fullWidth:!0,children:(0,n.jsxs)(m.Z,{id:"chamber-select",value:t,className:"bg-white",onChange:e=>a(e.target.value),children:[(0,n.jsx)(x.Z,{value:"house",children:"House"}),(0,n.jsx)(x.Z,{value:"senate",children:"Senate"})]})}),(0,n.jsx)(C,{chamber:t,congress:s})]})})}),(0,n.jsx)(c.Z,{})]})})};E.displayName="CongressCommitteesTemplate";let y=()=>(0,n.jsx)(E,{});var I=y},1163:function(e,s,t){e.exports=t(880)}},function(e){e.O(0,[525,433,350,411,774,888,179],function(){return e(e.s=5908)}),_N_E=e.O()}]);