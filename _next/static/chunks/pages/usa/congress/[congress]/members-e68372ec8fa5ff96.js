(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[14],{60566:function(e,s,r){"use strict";var a=r(64836);s.Z=void 0;var n=a(r(64938)),t=r(85893),l=(0,n.default)([(0,t.jsx)("path",{d:"m21 5-9-4-9 4v6c0 5.55 3.84 10.74 9 12 2.3-.56 4.33-1.9 5.88-3.71l-3.12-3.12c-1.94 1.29-4.58 1.07-6.29-.64-1.95-1.95-1.95-5.12 0-7.07 1.95-1.95 5.12-1.95 7.07 0 1.71 1.71 1.92 4.35.64 6.29l2.9 2.9C20.29 15.69 21 13.38 21 11V5z"},"0"),(0,t.jsx)("circle",{cx:"12",cy:"12",r:"3"},"1")],"Policy");s.Z=l},35884:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/usa/congress/[congress]/members",function(){return r(7576)}])},17600:function(e,s){"use strict";s.Z={src:"/apps//_next/static/media/congress.6d9e671f.jpeg",height:3818,width:5962,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAAAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAAoT//xAAcEAACAgIDAAAAAAAAAAAAAAABAgMSAAQRE2H/2gAIAQEAAT8A3OpowrxBnqeH9C2z/8QAGBEAAgMAAAAAAAAAAAAAAAAAAQMAAkL/2gAIAQIBAT8Aq1g2Z//EABcRAAMBAAAAAAAAAAAAAAAAAAABAlL/2gAIAQMBAT8AcTlH/9k=",blurWidth:8,blurHeight:5}},22086:function(e,s,r){"use strict";var a=r(85893),n=r(90629);let t=e=>{let{loading:s=!1,error:r=null,data:t=null,children:l=(0,a.jsx)(a.Fragment,{})}=e;return s?(0,a.jsx)(n.Z,{className:"p-8",children:(0,a.jsx)("div",{className:"flex items-center justify-center",children:(0,a.jsx)("span",{className:"uppercase",children:"Loading"})})}):r?(0,a.jsx)(n.Z,{className:"p-8",children:(0,a.jsx)("div",{className:"flex items-center justify-center",children:(0,a.jsx)("span",{className:"uppercase",children:r.message||"Error"})})}):t?(0,a.jsx)(a.Fragment,{children:l}):(0,a.jsx)(n.Z,{className:"p-8",children:(0,a.jsx)("div",{className:"flex items-center justify-center",children:(0,a.jsx)("span",{className:"uppercase",children:"No Data"})})})};s.Z=t},94953:function(e,s,r){"use strict";var a=r(85893),n=r(67294);let t=e=>{let{backgroundImage:s={src:""},children:r=(0,a.jsx)(a.Fragment,{})}=e,[t,l]=(0,n.useState)("rgba(22, 25, 32, 0.5)"),c=(0,n.useCallback)(()=>{let{pageYOffset:e,scrollY:s,innerHeight:r}=window,a=e||s||0,n=.5+parseFloat((.4*(a/r<1?a/r:1)).toFixed(2));l("rgba(22, 25, 32, ".concat(n,")"))},[]);return(0,n.useEffect)(()=>(window.addEventListener("scroll",c,{passive:!0}),()=>window.removeEventListener("scroll",c)),[c]),(0,a.jsx)("div",{className:"bg-fixed bg-center bg-cover text-white",style:{backgroundImage:"url(".concat(s.src,")")},children:(0,a.jsx)("div",{style:{backgroundColor:t},className:"transition-all",children:r})})};t.displayName="Background",t.defaultProps={backgroundImage:{src:""},children:(0,a.jsx)(a.Fragment,{})},s.Z=t},35604:function(e,s,r){"use strict";var a=r(85893),n=r(53156);let t=()=>(0,a.jsx)("footer",{children:(0,a.jsx)(n.Z,{children:(0,a.jsx)("div",{className:"py-8",children:"\xa9 2023 HOM"})})});s.Z=t},20475:function(e,s,r){"use strict";r.d(s,{Z:function(){return Z}});var a=r(85893),n=r(20261),t=r(6914),l=r(75542),c=r(14161),i=r(41718),A=r(71277);let o={apps:[{id:"news",href:"/news",title:"news",icon:(0,a.jsx)(i.Z,{})},{id:"forex",href:"/forex",title:"forex",icon:(0,a.jsx)(l.Z,{})},{id:"weather",href:"/weather",title:"weather",icon:(0,a.jsx)(t.Z,{})},{id:"football",href:"/football",title:"football",icon:(0,a.jsx)(A.Z,{})},{id:"stock",href:"/stock",title:"stock",icon:(0,a.jsx)(n.Z,{})},{id:"countries",href:"/countries",title:"countries",icon:(0,a.jsx)(c.Z,{})}]};var d=r(326),u=r(83321),h=r(53156),x=r(32959),j=r(23599),m=r(41664),g=r.n(m),f=r(67294);let p=e=>{let{icon:s=(0,a.jsx)(a.Fragment,{}),appName:r=""}=e,[n,t]=(0,f.useState)(null),l=Boolean(n),c=e=>{t(e.currentTarget)},i=()=>{t(null)};return(0,a.jsx)("nav",{className:"py-8",children:(0,a.jsx)(h.Z,{children:(0,a.jsxs)("div",{className:"flex justify-between text-white",children:[(0,a.jsx)("h1",{className:"text-2xl uppercase",children:(0,a.jsx)(g(),{href:"/",children:(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[s,r]})})}),(0,a.jsxs)("div",{children:[(0,a.jsx)(u.Z,{onClick:c,className:"p-0 text-white",children:(0,a.jsx)(d.Z,{fontSize:"large"})}),(0,a.jsx)(x.Z,{id:"basic-menu",anchorEl:n,open:l,onClose:i,anchorOrigin:{vertical:"top",horizontal:"left"},MenuListProps:{"aria-labelledby":"basic-button"},children:o.apps.map(e=>{let{id:s,href:r,title:n,icon:t}=e;return(0,a.jsx)(j.Z,{children:(0,a.jsx)(g(),{href:r,className:"capitalize",children:(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[t,n]})})},s)})})]})]})})})};var Z=p},31272:function(e,s,r){"use strict";r.d(s,{W:function(){return a}});let a="https://homapis.vercel.app/api"},56684:function(e,s,r){"use strict";var a=r(6154),n=r(67294);s.Z=function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},[{loading:r,error:t,data:l},c]=(0,n.useState)({loading:!1,error:null,data:null}),[i,A]=(0,n.useState)(0),o=(0,n.useCallback)(()=>A(e=>e+1),[]);return(0,n.useEffect)(()=>{let r=async(e,s)=>{c({loading:!0,error:null,data:null});try{let r=await a.Z.get(e,s),{data:n}=r;c({loading:!1,error:null,data:n})}catch(e){c({loading:!1,error:e,data:null})}};r(e,s)},[i]),{loading:r,error:t,data:l,refetch:o}}},7576:function(e,s,r){"use strict";r.r(s),r.d(s,{default:function(){return Q}});var a=r(85893),n=r(17600),t=r(22086),l=r(94953),c=r(35604),i=r(20475),A=r(31272),o=r(56684),d=r(60566),u=r(90629),h=r(72882),x=r(7906),j=r(53184),m=r(53816),g=r(53252),f=r(295),p=r(94054),Z=r(10315),N=r(23599),v=r(53156),b=r(11163),w=r(67294);let E=w.memo(e=>{let{chamber:s="house",congress:r=118}=e,n="".concat(A.W,"/usa/congress/members?congress=").concat(r,"&chamber=").concat(s),{loading:l,error:c,data:i,refetch:d}=(0,o.Z)(n);return(0,w.useEffect)(()=>{d()},[s,r,d]),(0,a.jsx)(t.Z,{loading:l,error:c,data:i,children:(0,a.jsx)(u.Z,{children:(i||[]).length>0?(0,a.jsx)(h.Z,{children:(0,a.jsxs)(x.Z,{children:[(0,a.jsx)(j.Z,{children:(0,a.jsxs)(m.Z,{children:[(0,a.jsx)(g.Z,{className:"font-bold",children:"Name"}),(0,a.jsx)(g.Z,{className:"font-bold",children:"Party"}),(0,a.jsx)(g.Z,{className:"font-bold",children:"State"}),(0,a.jsx)(g.Z,{className:"font-bold",children:"Leadership"})]})}),(0,a.jsx)(f.Z,{children:(i||[]).map(e=>(0,a.jsxs)(m.Z,{children:[(0,a.jsxs)(g.Z,{children:[e.first_name," ",e.last_name]}),(0,a.jsx)(g.Z,{children:e.party}),(0,a.jsx)(g.Z,{children:e.state}),(0,a.jsx)(g.Z,{children:e.leadership_role})]},e.id))})]})}):(0,a.jsx)("div",{className:"flex items-center justify-center py-8",children:(0,a.jsx)("span",{className:"uppercase",children:"No Data"})})})})});E.displayName="Members";let C=()=>{let e=(0,b.useRouter)(),s=parseInt(e.query.congress,10),[r,t]=(0,w.useState)("house");return(0,a.jsx)(l.Z,{backgroundImage:n.Z,children:(0,a.jsxs)("div",{className:"min-h-screen flex flex-col",children:[(0,a.jsx)(i.Z,{icon:(0,a.jsx)(d.Z,{}),appName:"congress"}),(0,a.jsx)("main",{className:"grow",children:(0,a.jsx)(v.Z,{children:(0,a.jsxs)("div",{className:"flex flex-col gap-4 md:gap-8",children:[(0,a.jsx)(p.Z,{fullWidth:!0,children:(0,a.jsxs)(Z.Z,{id:"chamber-select",value:r,className:"bg-white",onChange:e=>t(e.target.value),children:[(0,a.jsx)(N.Z,{value:"house",children:"House"}),(0,a.jsx)(N.Z,{value:"senate",children:"Senate"})]})}),(0,a.jsx)(E,{chamber:r,congress:s})]})})}),(0,a.jsx)(c.Z,{})]})})};C.displayName="CongressMembersTemplate";let y=()=>(0,a.jsx)(C,{});var Q=y},11163:function(e,s,r){e.exports=r(80880)}},function(e){e.O(0,[385,642,154,350,411,774,888,179],function(){return e(e.s=35884)}),_N_E=e.O()}]);