(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[672],{244:function(e,t,r){"use strict";var i=r(4836);t.Z=void 0;var a=i(r(4938)),n=r(5893),s=(0,a.default)([(0,n.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"},"0"),(0,n.jsx)("path",{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"},"1")],"AccessTime");t.Z=s},5510:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/clock",function(){return r(2190)}])},2086:function(e,t,r){"use strict";var i=r(5893),a=r(629);let n=e=>{let{loading:t=!1,error:r=null,data:n=null,children:s=(0,i.jsx)(i.Fragment,{})}=e;return t?(0,i.jsx)(a.Z,{className:"p-8",children:(0,i.jsx)("div",{className:"flex items-center justify-center",children:(0,i.jsx)("span",{className:"uppercase",children:"Loading"})})}):r?(0,i.jsx)(a.Z,{className:"p-8",children:(0,i.jsx)("div",{className:"flex items-center justify-center",children:(0,i.jsx)("span",{className:"uppercase",children:r.message||"Error"})})}):n?(0,i.jsx)(i.Fragment,{children:s}):(0,i.jsx)(a.Z,{className:"p-8",children:(0,i.jsx)("div",{className:"flex items-center justify-center",children:(0,i.jsx)("span",{className:"uppercase",children:"No Data"})})})};t.Z=n},4953:function(e,t,r){"use strict";var i=r(5893),a=r(7294);let n=e=>{let{backgroundImage:t={src:""},children:r=(0,i.jsx)(i.Fragment,{})}=e,[n,s]=(0,a.useState)("rgba(22, 25, 32, 0.5)"),l=(0,a.useCallback)(()=>{let{pageYOffset:e,scrollY:t,innerHeight:r}=window,i=e||t||0,a=.5+parseFloat((.4*(i/r<1?i/r:1)).toFixed(2));s("rgba(22, 25, 32, ".concat(a,")"))},[]);return(0,a.useEffect)(()=>(window.addEventListener("scroll",l,{passive:!0}),()=>window.removeEventListener("scroll",l)),[l]),(0,i.jsx)("div",{className:"bg-fixed bg-center bg-cover text-white",style:{backgroundImage:"url(".concat(t.src,")")},children:(0,i.jsx)("div",{style:{backgroundColor:n},className:"transition-all",children:r})})};n.displayName="Background",n.defaultProps={backgroundImage:{src:""},children:(0,i.jsx)(i.Fragment,{})},t.Z=n},5604:function(e,t,r){"use strict";var i=r(5893),a=r(9520);let n=()=>(0,i.jsx)("footer",{children:(0,i.jsx)(a.Z,{children:(0,i.jsx)("div",{className:"py-8",children:"\xa9 2023 HOM"})})});t.Z=n},475:function(e,t,r){"use strict";r.d(t,{Z:function(){return b}});var i=r(5893),a=r(261),n=r(6914),s=r(5542),l=r(4161),o=r(1718),c=r(1277);let d={apps:[{id:"news",href:"/news",title:"news",icon:(0,i.jsx)(o.Z,{})},{id:"forex",href:"/forex",title:"forex",icon:(0,i.jsx)(s.Z,{})},{id:"weather",href:"/weather",title:"weather",icon:(0,i.jsx)(n.Z,{})},{id:"football",href:"/football",title:"football",icon:(0,i.jsx)(c.Z,{})},{id:"stock",href:"/stock",title:"stock",icon:(0,i.jsx)(a.Z,{})},{id:"countries",href:"/countries",title:"countries",icon:(0,i.jsx)(l.Z,{})}]};var u=r(326),p=r(3321),A=r(9520),h=r(2959),m=r(3599),g=r(1664),f=r.n(g),x=r(7294);let v=e=>{let{icon:t=(0,i.jsx)(i.Fragment,{}),appName:r=""}=e,[a,n]=(0,x.useState)(null),s=Boolean(a),l=e=>{n(e.currentTarget)},o=()=>{n(null)};return(0,i.jsx)("nav",{className:"py-8",children:(0,i.jsx)(A.Z,{children:(0,i.jsxs)("div",{className:"flex justify-between text-white",children:[(0,i.jsx)("h1",{className:"text-2xl uppercase",children:(0,i.jsx)(f(),{href:"/",children:(0,i.jsxs)("div",{className:"flex items-center gap-2",children:[t,r]})})}),(0,i.jsxs)("div",{children:[(0,i.jsx)(p.Z,{onClick:l,className:"p-0 text-white",children:(0,i.jsx)(u.Z,{fontSize:"large"})}),(0,i.jsx)(h.Z,{id:"basic-menu",anchorEl:a,open:s,onClose:o,anchorOrigin:{vertical:"top",horizontal:"left"},MenuListProps:{"aria-labelledby":"basic-button"},children:d.apps.map(e=>{let{id:t,href:r,title:a,icon:n}=e;return(0,i.jsx)(m.Z,{children:(0,i.jsx)(f(),{href:r,className:"capitalize",children:(0,i.jsxs)("div",{className:"flex items-center gap-2",children:[n,a]})})},t)})})]})]})})})};var b=v},1272:function(e,t,r){"use strict";r.d(t,{W:function(){return i}});let i="https://homapis.vercel.app/api"},6684:function(e,t,r){"use strict";var i=r(8433),a=r(7294);t.Z=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},[{loading:r,error:n,data:s},l]=(0,a.useState)({loading:!1,error:null,data:null}),[o,c]=(0,a.useState)(0),d=(0,a.useCallback)(()=>c(e=>e+1),[]);return(0,a.useEffect)(()=>{let r=async(e,t)=>{l({loading:!0,error:null,data:null});try{let r=await i.Z.get(e,t),{data:a}=r;l({loading:!1,error:null,data:a})}catch(e){l({loading:!1,error:e,data:null})}};r(e,t)},[o]),{loading:r,error:n,data:s,refetch:d}}},2190:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return ei}});var i=r(5893),a={src:"/apps//_next/static/media/clock.4b2fe3db.jpeg",height:4160,width:5824,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABQEBAAAAAAAAAAAAAAAAAAAABf/aAAwDAQACEAMQAAAAkgtD/8QAHBAAAQMFAAAAAAAAAAAAAAAAAQACBAMFMUFS/9oACAEBAAE/AIVyEQMEZrqfONr/xAAXEQADAQAAAAAAAAAAAAAAAAAAASFR/9oACAECAQE/ANrP/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=",blurWidth:8,blurHeight:6},n=r(2086),s=r(4953),l=r(5604),o=r(475),c=r(1272),d=r(6684);let u=e=>e>9?"".concat(e):"0".concat(e);var p=r(244),A=r(629),h=r(8462),m=r(3366),g=r(7462),f=r(7294),x=r(6010),v=r(4780),b=r(8442),Z=r(1796),j=r(948),w=r(1657),y=r(7739),C=r(1579),N=r(8974),S=r(1705),I=r(9773),k=r(1588),E=r(4867);function M(e){return(0,E.Z)("MuiListItem",e)}let F=(0,k.Z)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]),B=(0,k.Z)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);function L(e){return(0,E.Z)("MuiListItemSecondaryAction",e)}(0,k.Z)("MuiListItemSecondaryAction",["root","disableGutters"]);let P=["className"],R=e=>{let{disableGutters:t,classes:r}=e;return(0,v.Z)({root:["root",t&&"disableGutters"]},L,r)},$=(0,j.ZP)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,r.disableGutters&&t.disableGutters]}})(({ownerState:e})=>(0,g.Z)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},e.disableGutters&&{right:0})),D=f.forwardRef(function(e,t){let r=(0,w.Z)({props:e,name:"MuiListItemSecondaryAction"}),{className:a}=r,n=(0,m.Z)(r,P),s=f.useContext(I.Z),l=(0,g.Z)({},r,{disableGutters:s.disableGutters}),o=R(l);return(0,i.jsx)($,(0,g.Z)({className:(0,x.Z)(o.root,a),ownerState:l,ref:t},n))});D.muiName="ListItemSecondaryAction";let O=["className"],Q=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],z=(e,t)=>{let{ownerState:r}=e;return[t.root,r.dense&&t.dense,"flex-start"===r.alignItems&&t.alignItemsFlexStart,r.divider&&t.divider,!r.disableGutters&&t.gutters,!r.disablePadding&&t.padding,r.button&&t.button,r.hasSecondaryAction&&t.secondaryAction]},_=e=>{let{alignItems:t,button:r,classes:i,dense:a,disabled:n,disableGutters:s,disablePadding:l,divider:o,hasSecondaryAction:c,selected:d}=e;return(0,v.Z)({root:["root",a&&"dense",!s&&"gutters",!l&&"padding",o&&"divider",n&&"disabled",r&&"button","flex-start"===t&&"alignItemsFlexStart",c&&"secondaryAction",d&&"selected"],container:["container"]},M,i)},T=(0,j.ZP)("div",{name:"MuiListItem",slot:"Root",overridesResolver:z})(({theme:e,ownerState:t})=>(0,g.Z)({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!t.disablePadding&&(0,g.Z)({paddingTop:8,paddingBottom:8},t.dense&&{paddingTop:4,paddingBottom:4},!t.disableGutters&&{paddingLeft:16,paddingRight:16},!!t.secondaryAction&&{paddingRight:48}),!!t.secondaryAction&&{[`& > .${B.root}`]:{paddingRight:48}},{[`&.${F.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${F.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,Z.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${F.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,Z.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${F.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},"flex-start"===t.alignItems&&{alignItems:"flex-start"},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},t.button&&{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${F.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,Z.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,Z.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity)}}},t.hasSecondaryAction&&{paddingRight:48})),V=(0,j.ZP)("li",{name:"MuiListItem",slot:"Container",overridesResolver:(e,t)=>t.container})({position:"relative"}),G=f.forwardRef(function(e,t){let r=(0,w.Z)({props:e,name:"MuiListItem"}),{alignItems:a="center",autoFocus:n=!1,button:s=!1,children:l,className:o,component:c,components:d={},componentsProps:u={},ContainerComponent:p="li",ContainerProps:{className:A}={},dense:h=!1,disabled:v=!1,disableGutters:Z=!1,disablePadding:j=!1,divider:k=!1,focusVisibleClassName:E,secondaryAction:M,selected:B=!1,slotProps:L={},slots:P={}}=r,R=(0,m.Z)(r.ContainerProps,O),$=(0,m.Z)(r,Q),z=f.useContext(I.Z),G=f.useMemo(()=>({dense:h||z.dense||!1,alignItems:a,disableGutters:Z}),[a,z.dense,h,Z]),W=f.useRef(null);(0,N.Z)(()=>{n&&W.current&&W.current.focus()},[n]);let H=f.Children.toArray(l),Y=H.length&&(0,C.Z)(H[H.length-1],["ListItemSecondaryAction"]),U=(0,g.Z)({},r,{alignItems:a,autoFocus:n,button:s,dense:G.dense,disabled:v,disableGutters:Z,disablePadding:j,divider:k,hasSecondaryAction:Y,selected:B}),q=_(U),X=(0,S.Z)(W,t),K=P.root||d.Root||T,J=L.root||u.root||{},ee=(0,g.Z)({className:(0,x.Z)(q.root,J.className,o),disabled:v},$),et=c||"li";return(s&&(ee.component=c||"div",ee.focusVisibleClassName=(0,x.Z)(F.focusVisible,E),et=y.Z),Y)?(et=ee.component||c?et:"div","li"===p&&("li"===et?et="div":"li"===ee.component&&(ee.component="div")),(0,i.jsx)(I.Z.Provider,{value:G,children:(0,i.jsxs)(V,(0,g.Z)({as:p,className:(0,x.Z)(q.container,A),ref:X,ownerState:U},R,{children:[(0,i.jsx)(K,(0,g.Z)({},J,!(0,b.Z)(K)&&{as:et,ownerState:(0,g.Z)({},U,J.ownerState)},ee,{children:H})),H.pop()]}))})):(0,i.jsx)(I.Z.Provider,{value:G,children:(0,i.jsxs)(K,(0,g.Z)({},J,{as:et,ref:X},!(0,b.Z)(K)&&{ownerState:(0,g.Z)({},U,J.ownerState)},ee,{children:[H,M&&(0,i.jsx)(D,{children:M})]}))})});var W=r(5097);let H=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],Y=e=>{let{absolute:t,children:r,classes:i,flexItem:a,light:n,orientation:s,textAlign:l,variant:o}=e;return(0,v.Z)({root:["root",t&&"absolute",o,n&&"light","vertical"===s&&"vertical",a&&"flexItem",r&&"withChildren",r&&"vertical"===s&&"withChildrenVertical","right"===l&&"vertical"!==s&&"textAlignRight","left"===l&&"vertical"!==s&&"textAlignLeft"],wrapper:["wrapper","vertical"===s&&"wrapperVertical"]},W.V,i)},U=(0,j.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,r.absolute&&t.absolute,t[r.variant],r.light&&t.light,"vertical"===r.orientation&&t.vertical,r.flexItem&&t.flexItem,r.children&&t.withChildren,r.children&&"vertical"===r.orientation&&t.withChildrenVertical,"right"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignRight,"left"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignLeft]}})(({theme:e,ownerState:t})=>(0,g.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(e.vars||e).palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:e.vars?`rgba(${e.vars.palette.dividerChannel} / 0.08)`:(0,Z.Fq)(e.palette.divider,.08)},"inset"===t.variant&&{marginLeft:72},"middle"===t.variant&&"horizontal"===t.orientation&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},"middle"===t.variant&&"vertical"===t.orientation&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"vertical"===t.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"}),({theme:e,ownerState:t})=>(0,g.Z)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${(e.vars||e).palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}}),({theme:e,ownerState:t})=>(0,g.Z)({},t.children&&"vertical"===t.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${(e.vars||e).palette.divider}`,transform:"translateX(0%)"}}),({ownerState:e})=>(0,g.Z)({},"right"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),q=(0,j.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.wrapper,"vertical"===r.orientation&&t.wrapperVertical]}})(({theme:e,ownerState:t})=>(0,g.Z)({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},"vertical"===t.orientation&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`})),X=f.forwardRef(function(e,t){let r=(0,w.Z)({props:e,name:"MuiDivider"}),{absolute:a=!1,children:n,className:s,component:l=n?"div":"hr",flexItem:o=!1,light:c=!1,orientation:d="horizontal",role:u="hr"!==l?"separator":void 0,textAlign:p="center",variant:A="fullWidth"}=r,h=(0,m.Z)(r,H),f=(0,g.Z)({},r,{absolute:a,component:l,flexItem:o,light:c,orientation:d,role:u,textAlign:p,variant:A}),v=Y(f);return(0,i.jsx)(U,(0,g.Z)({as:l,className:(0,x.Z)(v.root,s),role:u,ref:t,ownerState:f},h,{children:n?(0,i.jsx)(q,{className:v.wrapper,ownerState:f,children:n}):null}))});var K=r(9520);let J=e=>{let{name:t,timezone:r}=e,a=-(new Date().getTimezoneOffset()/60),n=a-r,[s,l]=(0,f.useState)(new Date);(0,f.useEffect)(()=>{let e=setInterval(()=>{let e=Date.now();l(new Date(e-36e5*n))},1e3);return()=>clearInterval(e)},[]);let o=u(s.getHours()),c=u(s.getMinutes()),d=u(s.getSeconds());return(0,i.jsxs)("div",{className:"w-full flex justify-between items-center",children:[(0,i.jsxs)("div",{children:[(0,i.jsxs)("p",{className:"text-gray-700",children:[s.getFullYear(),"-",u(s.getMonth()+1),"-",u(s.getDate()),", ",-1*n,"HRS"]}),(0,i.jsx)("h2",{className:"text-xl",children:t})]}),(0,i.jsxs)("div",{className:"text-3xl",children:[o,":",c,":",d]})]})},ee=f.memo(()=>{let e="".concat(c.W,"/time-zones"),{loading:t,error:r,data:a}=(0,d.Z)(e),s=["America/Los_Angeles","America/New_York","Asia/Ho_Chi_Minh","Asia/Seoul","Australia/Melbourne","Australia/Sydney","Europe/Berlin","Europe/Helsinki","Europe/London"];return(0,i.jsx)(n.Z,{loading:t,error:r,data:a,children:(0,i.jsx)(A.Z,{children:(0,i.jsx)(h.Z,{children:(a||[]).filter(e=>s.includes(e.timezone)).sort((e,t)=>e.rawOffset>t.rawOffset?1:-1).map((e,t,r)=>{let a=e.rawOffset/3600;return(0,i.jsxs)(f.Fragment,{children:[(0,i.jsx)(G,{children:(0,i.jsx)(J,{timezone:a,name:e.timezone})}),t!==r.length-1?(0,i.jsx)(X,{}):(0,i.jsx)(i.Fragment,{})]},e.timezone)})})})})});ee.displayName="TimeZones";let et=()=>(0,i.jsx)(s.Z,{backgroundImage:a,children:(0,i.jsxs)("div",{className:"min-h-screen flex flex-col",children:[(0,i.jsx)(o.Z,{icon:(0,i.jsx)(p.Z,{}),appName:"world clock"}),(0,i.jsx)("main",{className:"grow",children:(0,i.jsx)(K.Z,{children:(0,i.jsx)(ee,{})})}),(0,i.jsx)(l.Z,{})]})});et.displayName="ClockTemplate";let er=()=>(0,i.jsx)(et,{});var ei=er}},function(e){e.O(0,[525,433,774,888,179],function(){return e(e.s=5510)}),_N_E=e.O()}]);