(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[14],{2153:function(e,s,a){"use strict";var r=a(4836);s.Z=void 0;var l=r(a(4938)),n=a(5893),t=(0,l.default)([(0,n.jsx)("path",{d:"m21 5-9-4-9 4v6c0 5.55 3.84 10.74 9 12 2.3-.56 4.33-1.9 5.88-3.71l-3.12-3.12c-1.94 1.29-4.58 1.07-6.29-.64-1.95-1.95-1.95-5.12 0-7.07 1.95-1.95 5.12-1.95 7.07 0 1.71 1.71 1.92 4.35.64 6.29l2.9 2.9C20.29 15.69 21 13.38 21 11V5z"},"0"),(0,n.jsx)("circle",{cx:"12",cy:"12",r:"3"},"1")],"Policy");s.Z=t},5884:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/usa/congress/[congress]/members",function(){return a(5175)}])},7219:function(e,s){"use strict";s.Z={src:"/apps//_next/static/media/congress.6d9e671f.jpeg",height:3818,width:5962,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAAAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAAoT//xAAcEAACAgIDAAAAAAAAAAAAAAABAgMSAAQRE2H/2gAIAQEAAT8A3OpowrxBnqeH9C2z/8QAGBEAAgMAAAAAAAAAAAAAAAAAAQMAAkL/2gAIAQIBAT8Aq1g2Z//EABcRAAMBAAAAAAAAAAAAAAAAAAABAlL/2gAIAQMBAT8AcTlH/9k=",blurWidth:8,blurHeight:5}},2086:function(e,s,a){"use strict";var r=a(5893),l=a(629);let n=e=>{let{loading:s=!1,error:a=null,data:n=null,children:t=(0,r.jsx)(r.Fragment,{})}=e;return s?(0,r.jsx)(l.Z,{className:"p-8",children:(0,r.jsx)("div",{className:"flex items-center justify-center",children:(0,r.jsx)("span",{className:"uppercase",children:"Loading"})})}):a?(0,r.jsx)(l.Z,{className:"p-8",children:(0,r.jsx)("div",{className:"flex items-center justify-center",children:(0,r.jsx)("span",{className:"uppercase",children:a.message||"Error"})})}):n?(0,r.jsx)(r.Fragment,{children:t}):(0,r.jsx)(l.Z,{className:"p-8",children:(0,r.jsx)("div",{className:"flex items-center justify-center",children:(0,r.jsx)("span",{className:"uppercase",children:"No Data"})})})};s.Z=n},4953:function(e,s,a){"use strict";var r=a(5893),l=a(7294);let n=e=>{let{backgroundImage:s={src:""},children:a=(0,r.jsx)(r.Fragment,{})}=e,[n,t]=(0,l.useState)("rgba(22, 25, 32, 0.5)"),c=(0,l.useCallback)(()=>{let{pageYOffset:e,scrollY:s,innerHeight:a}=window,r=e||s||0,l=.5+parseFloat((.4*(r/a<1?r/a:1)).toFixed(2));t("rgba(22, 25, 32, ".concat(l,")"))},[]);return(0,l.useEffect)(()=>(window.addEventListener("scroll",c,{passive:!0}),()=>window.removeEventListener("scroll",c)),[c]),(0,r.jsx)("div",{className:"bg-fixed bg-center bg-cover text-white",style:{backgroundImage:"url(".concat(s.src,")")},children:(0,r.jsx)("div",{style:{backgroundColor:n},className:"transition-all",children:a})})};n.displayName="Background",n.defaultProps={backgroundImage:{src:""},children:(0,r.jsx)(r.Fragment,{})},s.Z=n},5604:function(e,s,a){"use strict";var r=a(5893),l=a(9520);let n=()=>(0,r.jsx)("footer",{children:(0,r.jsx)(l.Z,{children:(0,r.jsx)("div",{className:"py-8",children:"\xa9 2023 HOM"})})});s.Z=n},475:function(e,s,a){"use strict";a.d(s,{Z:function(){return Z}});var r=a(5893),l=a(261),n=a(6914),t=a(5542),c=a(4161),i=a(1718),A=a(1277);let o={apps:[{id:"news",href:"/news",title:"news",icon:(0,r.jsx)(i.Z,{})},{id:"forex",href:"/forex",title:"forex",icon:(0,r.jsx)(t.Z,{})},{id:"weather",href:"/weather",title:"weather",icon:(0,r.jsx)(n.Z,{})},{id:"football",href:"/football",title:"football",icon:(0,r.jsx)(A.Z,{})},{id:"stock",href:"/stock",title:"stock",icon:(0,r.jsx)(l.Z,{})},{id:"maps",href:"/maps",title:"maps",icon:(0,r.jsx)(c.Z,{})}]};var d=a(326),h=a(3321),u=a(9520),x=a(2959),j=a(3599),m=a(1664),g=a.n(m),f=a(7294);let p=e=>{let{icon:s=(0,r.jsx)(r.Fragment,{}),appName:a=""}=e,[l,n]=(0,f.useState)(null),t=Boolean(l),c=e=>{n(e.currentTarget)},i=()=>{n(null)};return(0,r.jsx)("nav",{className:"py-8",children:(0,r.jsx)(u.Z,{children:(0,r.jsxs)("div",{className:"flex justify-between text-white",children:[(0,r.jsx)("h1",{className:"text-2xl uppercase",children:(0,r.jsx)(g(),{href:"/",children:(0,r.jsxs)("div",{className:"flex items-center gap-2",children:[s,a]})})}),(0,r.jsxs)("div",{children:[(0,r.jsx)(h.Z,{onClick:c,className:"p-0 text-white",children:(0,r.jsx)(d.Z,{fontSize:"large"})}),(0,r.jsx)(x.Z,{id:"basic-menu",anchorEl:l,open:t,onClose:i,anchorOrigin:{vertical:"top",horizontal:"left"},MenuListProps:{"aria-labelledby":"basic-button"},children:o.apps.map(e=>{let{id:s,href:a,title:l,icon:n}=e;return(0,r.jsx)(j.Z,{children:(0,r.jsx)(g(),{href:a,className:"capitalize",children:(0,r.jsxs)("div",{className:"flex items-center gap-2",children:[n,l]})})},s)})})]})]})})})};var Z=p},1272:function(e,s,a){"use strict";a.d(s,{W:function(){return r}});let r="https://homapis.vercel.app/api"},6684:function(e,s,a){"use strict";var r=a(8433),l=a(7294);s.Z=function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},[{loading:a,error:n,data:t},c]=(0,l.useState)({loading:!1,error:null,data:null}),[i,A]=(0,l.useState)(0),o=(0,l.useCallback)(()=>A(e=>e+1),[]);return(0,l.useEffect)(()=>{let a=async(e,s)=>{c({loading:!0,error:null,data:null});try{let a=await r.Z.get(e,s),{data:l}=a;c({loading:!1,error:null,data:l})}catch(e){c({loading:!1,error:e,data:null})}};a(e,s)},[i]),{loading:a,error:n,data:t,refetch:o}}},5175:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return Q}});var r=a(5893),l=a(7219),n=a(2086),t=a(4953),c=a(5604),i=a(475),A=a(1272),o=a(6684),d=a(2153),h=a(629),u=a(2882),x=a(7906),j=a(3184),m=a(3816),g=a(3252),f=a(295),p=a(4054),Z=a(315),N=a(3599),v=a(9520),b=a(1163),w=a(7294);let E=w.memo(e=>{let{chamber:s="house",congress:a=118}=e,l="".concat(A.W,"/usa/congress/members?congress=").concat(a,"&chamber=").concat(s),{loading:t,error:c,data:i,refetch:d}=(0,o.Z)(l);return(0,w.useEffect)(()=>{d()},[s,a,d]),(0,r.jsx)(n.Z,{loading:t,error:c,data:i,children:(0,r.jsx)(h.Z,{children:(i||[]).length>0?(0,r.jsx)(u.Z,{children:(0,r.jsxs)(x.Z,{children:[(0,r.jsx)(j.Z,{children:(0,r.jsxs)(m.Z,{children:[(0,r.jsx)(g.Z,{className:"font-bold",children:"Name"}),(0,r.jsx)(g.Z,{className:"font-bold",children:"Party"}),(0,r.jsx)(g.Z,{className:"font-bold",children:"State"}),(0,r.jsx)(g.Z,{className:"font-bold",children:"Leadership"})]})}),(0,r.jsx)(f.Z,{children:(i||[]).map(e=>(0,r.jsxs)(m.Z,{children:[(0,r.jsxs)(g.Z,{children:[e.first_name," ",e.last_name]}),(0,r.jsx)(g.Z,{children:e.party}),(0,r.jsx)(g.Z,{children:e.state}),(0,r.jsx)(g.Z,{children:e.leadership_role})]},e.id))})]})}):(0,r.jsx)("div",{className:"flex items-center justify-center py-8",children:(0,r.jsx)("span",{className:"uppercase",children:"No Data"})})})})});E.displayName="Members";let C=()=>{let e=(0,b.useRouter)(),s=parseInt(e.query.congress,10),[a,n]=(0,w.useState)("house");return(0,r.jsx)(t.Z,{backgroundImage:l.Z,children:(0,r.jsxs)("div",{className:"min-h-screen flex flex-col",children:[(0,r.jsx)(i.Z,{icon:(0,r.jsx)(d.Z,{}),appName:"congress"}),(0,r.jsx)("main",{className:"grow",children:(0,r.jsx)(v.Z,{children:(0,r.jsxs)("div",{className:"flex flex-col gap-4 md:gap-8",children:[(0,r.jsx)(p.Z,{fullWidth:!0,children:(0,r.jsxs)(Z.Z,{id:"chamber-select",value:a,className:"bg-white",onChange:e=>n(e.target.value),children:[(0,r.jsx)(N.Z,{value:"house",children:"House"}),(0,r.jsx)(N.Z,{value:"senate",children:"Senate"})]})}),(0,r.jsx)(E,{chamber:a,congress:s})]})})}),(0,r.jsx)(c.Z,{})]})})};C.displayName="CongressMembersTemplate";let y=()=>(0,r.jsx)(C,{});var Q=y},1163:function(e,s,a){e.exports=a(880)}},function(e){e.O(0,[525,433,350,411,774,888,179],function(){return e(e.s=5884)}),_N_E=e.O()}]);