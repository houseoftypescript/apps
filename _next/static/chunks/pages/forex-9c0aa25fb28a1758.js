(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[203],{3134:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forex",function(){return t(791)}])},475:function(e,r,t){"use strict";t.d(r,{Z:function(){return v}});var s=t(5893),n=t(261),A=t(6914),l=t(5542),a=t(4161),i=t(1718),c=t(1277);let o={apps:[{id:"news",href:"/news",title:"news",icon:(0,s.jsx)(i.Z,{})},{id:"forex",href:"/forex",title:"forex",icon:(0,s.jsx)(l.Z,{})},{id:"weather",href:"/weather",title:"weather",icon:(0,s.jsx)(A.Z,{})},{id:"football",href:"/football",title:"football",icon:(0,s.jsx)(c.Z,{})},{id:"stock",href:"/stock",title:"stock",icon:(0,s.jsx)(n.Z,{})},{id:"maps",href:"/maps",title:"maps",icon:(0,s.jsx)(a.Z,{})}]};var d=t(326),u=t(3321),h=t(9520),x=t(2297),f=t(5819),j=t(1664),p=t.n(j),g=t(7294);let m=e=>{let{icon:r=(0,s.jsx)(s.Fragment,{}),appName:t=""}=e,[n,A]=(0,g.useState)(null),l=Boolean(n),a=e=>{A(e.currentTarget)},i=()=>{A(null)};return(0,s.jsx)("nav",{className:"py-8",children:(0,s.jsx)(h.Z,{children:(0,s.jsxs)("div",{className:"flex justify-between text-white",children:[(0,s.jsx)("h1",{className:"text-2xl uppercase",children:(0,s.jsx)(p(),{href:"/",children:(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[r,t]})})}),(0,s.jsxs)("div",{children:[(0,s.jsx)(u.Z,{onClick:a,className:"p-0 text-white",children:(0,s.jsx)(d.Z,{fontSize:"large"})}),(0,s.jsx)(x.Z,{id:"basic-menu",anchorEl:n,open:l,onClose:i,anchorOrigin:{vertical:"top",horizontal:"left"},MenuListProps:{"aria-labelledby":"basic-button"},children:o.apps.map(e=>{let{id:r,href:t,title:n,icon:A}=e;return(0,s.jsx)(f.Z,{children:(0,s.jsx)(p(),{href:t,className:"capitalize",children:(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[A,n]})})},r)})})]})]})})})};var v=m},1272:function(e,r,t){"use strict";t.d(r,{_:function(){return n}});var s=t(3454);let n=s.env.BASE_URL||"http://localhost:8080/api"},6684:function(e,r,t){"use strict";var s=t(8433),n=t(7294);r.Z=function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},[{loading:t,error:A,data:l},a]=(0,n.useState)({loading:!1,error:null,data:null}),[i,c]=(0,n.useState)(0),o=(0,n.useCallback)(()=>c(e=>e+1),[]);return(0,n.useEffect)(()=>{let t=async(e,r)=>{a({loading:!0,error:null,data:null});try{let t=await s.Z.get(e,r),{data:n}=t;a({loading:!1,error:null,data:n})}catch(e){a({loading:!1,error:e,data:null})}};t(e,r)},[i]),{loading:t,error:A,data:l,refetch:o}}},791:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return f}});var s=t(5893),n={src:"/apps//_next/static/media/forex.247992b5.jpeg",height:3456,width:5184,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAABAX/2gAMAwEAAhADEAAAAJ0HTP/EABoQAAICAwAAAAAAAAAAAAAAAAECABEDBDH/2gAIAQEAAT8A2Mxd+VZn/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAERIf/aAAgBAgEBPwBbT//EABcRAQADAAAAAAAAAAAAAAAAAAIAETL/2gAIAQMBAT8AyTU//9k=",blurWidth:8,blurHeight:5};let A=e=>{let{loading:r=!1,error:t=null,children:n=(0,s.jsx)(s.Fragment,{})}=e;return r?(0,s.jsx)("div",{className:"border p-8 rounded",children:(0,s.jsx)("div",{className:"flex items-center justify-center",children:(0,s.jsx)("span",{className:"uppercase",children:"Loading"})})}):t?(0,s.jsx)("div",{className:"border p-8 rounded",children:(0,s.jsx)("div",{className:"flex items-center justify-center",children:(0,s.jsx)("span",{className:"uppercase",children:t.message||"Error"})})}):(0,s.jsx)(s.Fragment,{children:n})};var l=t(475),a=t(1272),i=t(6684);let c=e=>{let r=new Intl.NumberFormat("vi",{style:"currency",currency:"VND"});return r.format(e)};var o=(0,t(8169).Z)((0,s.jsx)("path",{d:"M12.89 11.1c-1.78-.59-2.64-.96-2.64-1.9 0-1.02 1.11-1.39 1.81-1.39 1.31 0 1.79.99 1.9 1.34l1.58-.67c-.15-.45-.82-1.92-2.54-2.24V5h-2v1.26c-2.48.56-2.49 2.86-2.49 2.96 0 2.27 2.25 2.91 3.35 3.31 1.58.56 2.28 1.07 2.28 2.03 0 1.13-1.05 1.61-1.98 1.61-1.82 0-2.34-1.87-2.4-2.09l-1.66.67c.63 2.19 2.28 2.78 2.9 2.96V19h2v-1.24c.4-.09 2.9-.59 2.9-3.22 0-1.39-.61-2.61-3.01-3.44zM3 21H1v-6h6v2H4.52c1.61 2.41 4.36 4 7.48 4 4.97 0 9-4.03 9-9h2c0 6.08-4.92 11-11 11-3.72 0-7.01-1.85-9-4.67V21zm-2-9C1 5.92 5.92 1 12 1c3.72 0 7.01 1.85 9 4.67V3h2v6h-6V7h2.48C17.87 4.59 15.12 3 12 3c-4.97 0-9 4.03-9 9H1z"}),"CurrencyExchange"),d=t(9520);let u=()=>{var e,r;let{loading:t,error:n,data:l=[]}=(0,i.Z)("".concat(a._,"/forex/rates")),o=(null===(e=null==l?void 0:l.find(e=>{let{code:r}=e;return"VND"===r.toUpperCase()}))||void 0===e?void 0:e.rate)||0,d=(null===(r=null==l?void 0:l.find(e=>{let{code:r}=e;return"EUR"===r.toUpperCase()}))||void 0===r?void 0:r.rate)||0;return(0,s.jsx)(A,{loading:t,error:n,children:(0,s.jsxs)("div",{className:"rounded border",children:[(0,s.jsxs)("div",{className:"p-4 border-t flex items-center justify-between",children:[(0,s.jsx)("p",{className:"font-bold cursor-pointer",children:"Code"}),(0,s.jsx)("p",{className:"font-bold cursor-pointer",children:"Rate"})]}),(l||[]).map(e=>{let{code:r,rate:t}=e,s=parseFloat((d/t*o).toFixed(2));return{code:r,rate:s}}).sort((e,r)=>e.rate<r.rate?1:-1).map(e=>{let{code:r,rate:t}=e;return(0,s.jsxs)("div",{className:"p-4 border-t flex items-center justify-between",children:[(0,s.jsx)("div",{children:r}),(0,s.jsx)("div",{children:c(t)})]},r)})]})})},h=()=>(0,s.jsx)("div",{className:"bg-fixed bg-center bg-cover text-white",style:{backgroundImage:"url(".concat(n.src,")")},children:(0,s.jsxs)("div",{className:"min-h-screen bg-gray-900/75",children:[(0,s.jsx)(l.Z,{icon:(0,s.jsx)(o,{}),appName:"forex"}),(0,s.jsx)("main",{className:"pb-8",children:(0,s.jsx)(d.Z,{children:(0,s.jsx)(u,{})})})]})}),x=()=>(0,s.jsx)(h,{});var f=x}},function(e){e.O(0,[639,20,774,888,179],function(){return e(e.s=3134)}),_N_E=e.O()}]);