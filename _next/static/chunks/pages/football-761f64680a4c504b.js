(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[732],{3508:function(e,t,r){"use strict";var n=r(4836);t.Z=void 0;var i=n(r(4938)),o=r(5893),a=(0,i.default)((0,o.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");t.Z=a},3454:function(e,t,r){"use strict";var n,i;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(i=r.g.process)?void 0:i.env)?r.g.process:r(7663)},8175:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/football",function(){return r(2016)}])},475:function(e,t,r){"use strict";r.d(t,{Z:function(){return b}});var n=r(5893),i=r(261),o=r(6914),a=r(5542),s=r(4161),l=r(1718),c=r(1277);let d={apps:[{id:"news",href:"/news",title:"news",icon:(0,n.jsx)(l.Z,{})},{id:"forex",href:"/forex",title:"forex",icon:(0,n.jsx)(a.Z,{})},{id:"weather",href:"/weather",title:"weather",icon:(0,n.jsx)(o.Z,{})},{id:"football",href:"/football",title:"football",icon:(0,n.jsx)(c.Z,{})},{id:"stock",href:"/stock",title:"stock",icon:(0,n.jsx)(i.Z,{})},{id:"maps",href:"/maps",title:"maps",icon:(0,n.jsx)(s.Z,{})}]};var u=r(326),p=r(3321),h=r(9520),f=r(2297),A=r(5819),m=r(1664),x=r.n(m),g=r(7294);let v=e=>{let{icon:t=(0,n.jsx)(n.Fragment,{}),appName:r=""}=e,[i,o]=(0,g.useState)(null),a=Boolean(i),s=e=>{o(e.currentTarget)},l=()=>{o(null)};return(0,n.jsx)("nav",{className:"py-8",children:(0,n.jsx)(h.Z,{children:(0,n.jsxs)("div",{className:"flex justify-between text-white",children:[(0,n.jsx)("h1",{className:"text-2xl uppercase",children:(0,n.jsx)(x(),{href:"/",children:(0,n.jsxs)("div",{className:"flex items-center gap-2",children:[t,r]})})}),(0,n.jsxs)("div",{children:[(0,n.jsx)(p.Z,{onClick:s,className:"p-0 text-white",children:(0,n.jsx)(u.Z,{fontSize:"large"})}),(0,n.jsx)(f.Z,{id:"basic-menu",anchorEl:i,open:a,onClose:l,anchorOrigin:{vertical:"top",horizontal:"left"},MenuListProps:{"aria-labelledby":"basic-button"},children:d.apps.map(e=>{let{id:t,href:r,title:i,icon:o}=e;return(0,n.jsx)(A.Z,{children:(0,n.jsx)(x(),{href:r,className:"capitalize",children:(0,n.jsxs)("div",{className:"flex items-center gap-2",children:[o,i]})})},t)})})]})]})})})};var b=v},1272:function(e,t,r){"use strict";r.d(t,{_:function(){return i}});var n=r(3454);let i=n.env.BASE_URL||"http://localhost:8080/api"},6684:function(e,t,r){"use strict";var n=r(8433),i=r(7294);t.Z=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},[{loading:r,error:o,data:a},s]=(0,i.useState)({loading:!1,error:null,data:null}),[l,c]=(0,i.useState)(0),d=(0,i.useCallback)(()=>c(e=>e+1),[]);return(0,i.useEffect)(()=>{let r=async(e,t)=>{s({loading:!0,error:null,data:null});try{let r=await n.Z.get(e,t),{data:i}=r;s({loading:!1,error:null,data:i})}catch(e){s({loading:!1,error:e,data:null})}};r(e,t)},[l]),{loading:r,error:o,data:a,refetch:d}}},2016:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return ei}});var n=r(5893),i={src:"/apps//_next/static/media/football.7a136e5f.jpeg",height:2448,width:2448,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABAEBAAAAAAAAAAAAAAAAAAAABP/aAAwDAQACEAMQAAAAlB3f/8QAHBAAAQMFAAAAAAAAAAAAAAAAAwECBAAFERIx/9oACAEBAAE/AJ96EGM7BX78VBmfX//EABoRAAICAwAAAAAAAAAAAAAAAAECAAMSMXH/2gAIAQIBAT8ArQY7Y9M//8QAGREBAQADAQAAAAAAAAAAAAAAAQIAAxFB/9oACAEDAQE/ALp10wByfUFc/9k=",blurWidth:8,blurHeight:8},o=r(475),a=r(1272),s=r(6684),l=r(3508),c=r(1277),d=r(3366),u=r(7462),p=r(7294);r(9864);var h=r(6010),f=r(4780),A=r(948),m=r(1657),x=r(8662),g=r(6067),v=r(577),b=r(2734),Z=r(1705),j=r(1588),y=r(4867);function w(e){return(0,y.Z)("MuiCollapse",e)}(0,j.Z)("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);let E=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],N=e=>{let{orientation:t,classes:r}=e,n={root:["root",`${t}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${t}`],wrapperInner:["wrapperInner",`${t}`]};return(0,f.Z)(n,w,r)},C=(0,A.ZP)("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[r.orientation],"entered"===r.state&&t.entered,"exited"===r.state&&!r.in&&"0px"===r.collapsedSize&&t.hidden]}})(({theme:e,ownerState:t})=>(0,u.Z)({height:0,overflow:"hidden",transition:e.transitions.create("height")},"horizontal"===t.orientation&&{height:"auto",width:0,transition:e.transitions.create("width")},"entered"===t.state&&(0,u.Z)({height:"auto",overflow:"visible"},"horizontal"===t.orientation&&{width:"auto"}),"exited"===t.state&&!t.in&&"0px"===t.collapsedSize&&{visibility:"hidden"})),R=(0,A.ZP)("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(e,t)=>t.wrapper})(({ownerState:e})=>(0,u.Z)({display:"flex",width:"100%"},"horizontal"===e.orientation&&{width:"auto",height:"100%"})),T=(0,A.ZP)("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(e,t)=>t.wrapperInner})(({ownerState:e})=>(0,u.Z)({width:"100%"},"horizontal"===e.orientation&&{width:"auto",height:"100%"})),M=p.forwardRef(function(e,t){let r=(0,m.Z)({props:e,name:"MuiCollapse"}),{addEndListener:i,children:o,className:a,collapsedSize:s="0px",component:l,easing:c,in:f,onEnter:A,onEntered:j,onEntering:y,onExit:w,onExited:M,onExiting:S,orientation:I="vertical",style:B,timeout:k=g.x9.standard,TransitionComponent:D=x.ZP}=r,Q=(0,d.Z)(r,E),P=(0,u.Z)({},r,{orientation:I,collapsedSize:s}),$=N(P),L=(0,b.Z)(),z=p.useRef(),_=p.useRef(null),F=p.useRef(),G="number"==typeof s?`${s}px`:s,W="horizontal"===I,V=W?"width":"height";p.useEffect(()=>()=>{clearTimeout(z.current)},[]);let H=p.useRef(null),U=(0,Z.Z)(t,H),O=e=>t=>{if(e){let r=H.current;void 0===t?e(r):e(r,t)}},X=()=>_.current?_.current[W?"clientWidth":"clientHeight"]:0,Y=O((e,t)=>{_.current&&W&&(_.current.style.position="absolute"),e.style[V]=G,A&&A(e,t)}),K=O((e,t)=>{let r=X();_.current&&W&&(_.current.style.position="");let{duration:n,easing:i}=(0,v.C)({style:B,timeout:k,easing:c},{mode:"enter"});if("auto"===k){let t=L.transitions.getAutoHeightDuration(r);e.style.transitionDuration=`${t}ms`,F.current=t}else e.style.transitionDuration="string"==typeof n?n:`${n}ms`;e.style[V]=`${r}px`,e.style.transitionTimingFunction=i,y&&y(e,t)}),q=O((e,t)=>{e.style[V]="auto",j&&j(e,t)}),J=O(e=>{e.style[V]=`${X()}px`,w&&w(e)}),ee=O(M),et=O(e=>{let t=X(),{duration:r,easing:n}=(0,v.C)({style:B,timeout:k,easing:c},{mode:"exit"});if("auto"===k){let r=L.transitions.getAutoHeightDuration(t);e.style.transitionDuration=`${r}ms`,F.current=r}else e.style.transitionDuration="string"==typeof r?r:`${r}ms`;e.style[V]=G,e.style.transitionTimingFunction=n,S&&S(e)}),er=e=>{"auto"===k&&(z.current=setTimeout(e,F.current||0)),i&&i(H.current,e)};return(0,n.jsx)(D,(0,u.Z)({in:f,onEnter:Y,onEntered:q,onEntering:K,onExit:J,onExited:ee,onExiting:et,addEndListener:er,nodeRef:H,timeout:"auto"===k?null:k},Q,{children:(e,t)=>(0,n.jsx)(C,(0,u.Z)({as:l,className:(0,h.Z)($.root,a,{entered:$.entered,exited:!f&&"0px"===G&&$.hidden}[e]),style:(0,u.Z)({[W?"minWidth":"minHeight"]:G},B),ownerState:(0,u.Z)({},P,{state:e}),ref:U},t,{children:(0,n.jsx)(R,{ownerState:(0,u.Z)({},P,{state:e}),className:$.wrapper,ref:_,children:(0,n.jsx)(T,{ownerState:(0,u.Z)({},P,{state:e}),className:$.wrapperInner,children:o})})}))}))});M.muiSupportAuto=!0;var S=r(629);let I=p.createContext({});var B=r(2627);function k(e){return(0,y.Z)("MuiAccordion",e)}let D=(0,j.Z)("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]),Q=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","TransitionComponent","TransitionProps"],P=e=>{let{classes:t,square:r,expanded:n,disabled:i,disableGutters:o}=e;return(0,f.Z)({root:["root",!r&&"rounded",n&&"expanded",i&&"disabled",!o&&"gutters"],region:["region"]},k,t)},$=(0,A.ZP)(S.Z,{name:"MuiAccordion",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[{[`& .${D.region}`]:t.region},t.root,!r.square&&t.rounded,!r.disableGutters&&t.gutters]}})(({theme:e})=>{let t={duration:e.transitions.duration.shortest};return{position:"relative",transition:e.transitions.create(["margin"],t),overflowAnchor:"none","&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(e.vars||e).palette.divider,transition:e.transitions.create(["opacity","background-color"],t)},"&:first-of-type":{"&:before":{display:"none"}},[`&.${D.expanded}`]:{"&:before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&:before":{display:"none"}}},[`&.${D.disabled}`]:{backgroundColor:(e.vars||e).palette.action.disabledBackground}}},({theme:e,ownerState:t})=>(0,u.Z)({},!t.square&&{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(e.vars||e).shape.borderRadius,borderTopRightRadius:(e.vars||e).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(e.vars||e).shape.borderRadius,borderBottomRightRadius:(e.vars||e).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},!t.disableGutters&&{[`&.${D.expanded}`]:{margin:"16px 0"}})),L=p.forwardRef(function(e,t){let r=(0,m.Z)({props:e,name:"MuiAccordion"}),{children:i,className:o,defaultExpanded:a=!1,disabled:s=!1,disableGutters:l=!1,expanded:c,onChange:f,square:A=!1,TransitionComponent:x=M,TransitionProps:g}=r,v=(0,d.Z)(r,Q),[b,Z]=(0,B.Z)({controlled:c,default:a,name:"Accordion",state:"expanded"}),j=p.useCallback(e=>{Z(!b),f&&f(e,!b)},[b,f,Z]),[y,...w]=p.Children.toArray(i),E=p.useMemo(()=>({expanded:b,disabled:s,disableGutters:l,toggle:j}),[b,s,l,j]),N=(0,u.Z)({},r,{square:A,disabled:s,disableGutters:l,expanded:b}),C=P(N);return(0,n.jsxs)($,(0,u.Z)({className:(0,h.Z)(C.root,o),ref:t,ownerState:N,square:A},v,{children:[(0,n.jsx)(I.Provider,{value:E,children:y}),(0,n.jsx)(x,(0,u.Z)({in:b,timeout:"auto"},g,{children:(0,n.jsx)("div",{"aria-labelledby":y.props.id,id:y.props["aria-controls"],role:"region",className:C.region,children:w})}))]}))});function z(e){return(0,y.Z)("MuiAccordionDetails",e)}(0,j.Z)("MuiAccordionDetails",["root"]);let _=["className"],F=e=>{let{classes:t}=e;return(0,f.Z)({root:["root"]},z,t)},G=(0,A.ZP)("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>({padding:e.spacing(1,2,2)})),W=p.forwardRef(function(e,t){let r=(0,m.Z)({props:e,name:"MuiAccordionDetails"}),{className:i}=r,o=(0,d.Z)(r,_),a=F(r);return(0,n.jsx)(G,(0,u.Z)({className:(0,h.Z)(a.root,i),ref:t,ownerState:r},o))});var V=r(7739);function H(e){return(0,y.Z)("MuiAccordionSummary",e)}let U=(0,j.Z)("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),O=["children","className","expandIcon","focusVisibleClassName","onClick"],X=e=>{let{classes:t,expanded:r,disabled:n,disableGutters:i}=e;return(0,f.Z)({root:["root",r&&"expanded",n&&"disabled",!i&&"gutters"],focusVisible:["focusVisible"],content:["content",r&&"expanded",!i&&"contentGutters"],expandIconWrapper:["expandIconWrapper",r&&"expanded"]},H,t)},Y=(0,A.ZP)(V.Z,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e,ownerState:t})=>{let r={duration:e.transitions.duration.shortest};return(0,u.Z)({display:"flex",minHeight:48,padding:e.spacing(0,2),transition:e.transitions.create(["min-height","background-color"],r),[`&.${U.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${U.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`&:hover:not(.${U.disabled})`]:{cursor:"pointer"}},!t.disableGutters&&{[`&.${U.expanded}`]:{minHeight:64}})}),K=(0,A.ZP)("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(e,t)=>t.content})(({theme:e,ownerState:t})=>(0,u.Z)({display:"flex",flexGrow:1,margin:"12px 0"},!t.disableGutters&&{transition:e.transitions.create(["margin"],{duration:e.transitions.duration.shortest}),[`&.${U.expanded}`]:{margin:"20px 0"}})),q=(0,A.ZP)("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(e,t)=>t.expandIconWrapper})(({theme:e})=>({display:"flex",color:(e.vars||e).palette.action.active,transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),[`&.${U.expanded}`]:{transform:"rotate(180deg)"}})),J=p.forwardRef(function(e,t){let r=(0,m.Z)({props:e,name:"MuiAccordionSummary"}),{children:i,className:o,expandIcon:a,focusVisibleClassName:s,onClick:l}=r,c=(0,d.Z)(r,O),{disabled:f=!1,disableGutters:A,expanded:x,toggle:g}=p.useContext(I),v=e=>{g&&g(e),l&&l(e)},b=(0,u.Z)({},r,{expanded:x,disabled:f,disableGutters:A}),Z=X(b);return(0,n.jsxs)(Y,(0,u.Z)({focusRipple:!1,disableRipple:!0,disabled:f,component:"div","aria-expanded":x,className:(0,h.Z)(Z.root,o),focusVisibleClassName:(0,h.Z)(Z.focusVisible,s),onClick:v,ref:t,ownerState:b},c,{children:[(0,n.jsx)(K,{className:Z.content,ownerState:b,children:i}),a&&(0,n.jsx)(q,{className:Z.expandIconWrapper,ownerState:b,children:a})]}))});var ee=r(9520);let et=()=>{let e="".concat(a._,"/football/teams/64/matches"),{loading:t,error:r,data:i}=(0,s.Z)(e);if(t)return(0,n.jsx)("div",{className:"border p-8 rounded",children:(0,n.jsx)("div",{className:"flex items-center justify-center",children:(0,n.jsx)("span",{className:"uppercase",children:"Loading"})})});if(r)return(0,n.jsx)("div",{className:"border p-8 rounded",children:(0,n.jsx)("div",{className:"flex items-center justify-center",children:(0,n.jsx)("span",{className:"uppercase",children:r.message||"Error"})})});if(!i)return(0,n.jsx)("div",{className:"border p-8 rounded",children:(0,n.jsx)("div",{className:"flex items-center justify-center",children:(0,n.jsx)("span",{className:"uppercase",children:"No Data"})})});let o=[...new Set(i.map(e=>e.status))].sort().reverse();return(0,n.jsx)(n.Fragment,{children:o.map(e=>(0,n.jsxs)(L,{children:[(0,n.jsx)(J,{expandIcon:(0,n.jsx)(l.Z,{}),children:(0,n.jsx)("h2",{children:e})}),(0,n.jsx)(W,{children:(0,n.jsx)("div",{className:"flex flex-col gap-4",children:i.filter(t=>t.status===e).map(e=>{let[t]=new Date(e.utcDate).toISOString().split("T");return(0,n.jsxs)("div",{className:"flex flex-col gap-2 border-t pt-4",children:[(0,n.jsxs)("div",{className:"flex justify-between items-center",children:[(0,n.jsx)("div",{className:"font-bold",children:e.competition.name}),(0,n.jsx)("div",{className:"font-medium",children:t})]}),(0,n.jsxs)("div",{className:"flex justify-between items-center",children:[(0,n.jsx)("div",{children:e.homeTeam.name}),(0,n.jsx)("div",{children:e.score.fullTime.home||"N/A"})]}),(0,n.jsxs)("div",{className:"flex justify-between items-center",children:[(0,n.jsx)("div",{children:e.awayTeam.name}),(0,n.jsx)("div",{children:e.score.fullTime.away||"N/A"})]})]},"match-".concat(e.id))})})})]},"status-".concat(e)))})},er=()=>(0,n.jsx)("div",{className:"bg-fixed bg-center bg-cover text-white",style:{backgroundImage:"url(".concat(i.src,")")},children:(0,n.jsxs)("div",{className:"min-h-screen bg-gray-900/75",children:[(0,n.jsx)(o.Z,{icon:(0,n.jsx)(c.Z,{}),appName:"football"}),(0,n.jsx)("main",{className:"pb-8",children:(0,n.jsx)(ee.Z,{children:(0,n.jsx)(et,{})})})]})}),en=()=>(0,n.jsx)(er,{});var ei=en},7663:function(e){!function(){var t={229:function(e){var t,r,n,i=e.exports={};function o(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var l=[],c=!1,d=-1;function u(){c&&n&&(c=!1,n.length?l=n.concat(l):d=-1,l.length&&p())}function p(){if(!c){var e=s(u);c=!0;for(var t=l.length;t;){for(n=l,l=[];++d<t;)n&&n[d].run();d=-1,t=l.length}n=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function f(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new h(e,t)),1!==l.length||c||s(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=f,i.addListener=f,i.once=f,i.off=f,i.removeListener=f,i.removeAllListeners=f,i.emit=f,i.prependListener=f,i.prependOnceListener=f,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var o=r[e]={exports:{}},a=!0;try{t[e](o,o.exports,n),a=!1}finally{a&&delete r[e]}return o.exports}n.ab="//";var i=n(229);e.exports=i}()}},function(e){e.O(0,[639,433,774,888,179],function(){return e(e.s=8175)}),_N_E=e.O()}]);