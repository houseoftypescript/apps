(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[983],{3896:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/trending/youtube",function(){return n(6434)}])},9749:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(6495).Z,i=n(2648).Z,r=n(1598).Z,l=n(7273).Z,s=r(n(7294)),o=i(n(3121)),c=n(2675),d=n(139),u=n(8730);n(7238);var g=i(n(9824));let h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/apps/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function f(e){return void 0!==e.default}function A(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function m(e,t,n,i,r,l,s){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let o="decode"in e?e.decode():Promise.resolve();o.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===n&&l(!0),null==i?void 0:i.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,r=!1;i.current(a({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>r,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{r=!0,t.stopPropagation()}}))}(null==r?void 0:r.current)&&r.current(e)}})}let p=s.forwardRef((e,t)=>{var{imgAttributes:n,heightInt:i,widthInt:r,qualityInt:o,className:c,imgStyle:d,blurStyle:u,isLazy:g,fill:h,placeholder:f,loading:A,srcString:p,config:x,unoptimized:j,loader:v,onLoadRef:w,onLoadingCompleteRef:b,setBlurComplete:y,setShowAltText:E,onLoad:C,onError:N}=e,S=l(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return A=g?"lazy":A,s.default.createElement(s.default.Fragment,null,s.default.createElement("img",Object.assign({},S,n,{width:r,height:i,decoding:"async","data-nimg":h?"fill":"1",className:c,loading:A,style:a({},d,u),ref:s.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(N&&(e.src=e.src),e.complete&&m(e,p,f,w,b,y,j))},[p,f,w,b,y,N,j,t]),onLoad:e=>{let t=e.currentTarget;m(t,p,f,w,b,y,j)},onError:e=>{E(!0),"blur"===f&&y(!0),N&&N(e)}})))}),x=s.forwardRef((e,t)=>{let n,i;var r,{src:m,sizes:x,unoptimized:j=!1,priority:v=!1,loading:w,className:b,quality:y,width:E,height:C,fill:N,style:S,onLoad:Z,onLoadingComplete:_,placeholder:I="empty",blurDataURL:k,layout:z,objectFit:T,objectPosition:P,lazyBoundary:B,lazyRoot:L}=e,R=l(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let Q=s.useContext(u.ImageConfigContext),D=s.useMemo(()=>{let e=h||Q||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return a({},e,{allSizes:t,deviceSizes:n})},[Q]),F=R,M=F.loader||g.default;delete F.loader;let O="__next_img_default"in M;if(O){if("custom"===D.loader)throw Error('Image with src "'.concat(m,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=M;M=t=>{let{config:n}=t,a=l(t,["config"]);return e(a)}}if(z){"fill"===z&&(N=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[z];e&&(S=a({},S,e));let t={responsive:"100vw",fill:"100vw"}[z];t&&!x&&(x=t)}let W="",U=A(E),Y=A(C);if("object"==typeof(r=m)&&(f(r)||void 0!==r.src)){let e=f(m)?m.default:m;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(n=e.blurWidth,i=e.blurHeight,k=k||e.blurDataURL,W=e.src,!N){if(U||Y){if(U&&!Y){let t=U/e.width;Y=Math.round(e.height*t)}else if(!U&&Y){let t=Y/e.height;U=Math.round(e.width*t)}}else U=e.width,Y=e.height}}let G=!v&&("lazy"===w||void 0===w);((m="string"==typeof m?m:W).startsWith("data:")||m.startsWith("blob:"))&&(j=!0,G=!1),D.unoptimized&&(j=!0),O&&m.endsWith(".svg")&&!D.dangerouslyAllowSVG&&(j=!0);let[J,K]=s.useState(!1),[V,X]=s.useState(!1),H=A(y),q=Object.assign(N?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:T,objectPosition:P}:{},V?{}:{color:"transparent"},S),$="blur"===I&&k&&!J?{backgroundSize:q.objectFit||"cover",backgroundPosition:q.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:U,heightInt:Y,blurWidth:n,blurHeight:i,blurDataURL:k}),'")')}:{},ee=function(e){let{config:t,src:n,unoptimized:a,width:i,quality:r,sizes:l,loader:s}=e;if(a)return{src:n,srcSet:void 0,sizes:void 0};let{widths:o,kind:c}=function(e,t,n){let{deviceSizes:a,allSizes:i}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let a;a=e.exec(n);a)t.push(parseInt(a[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=a[0]*e),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof t)return{widths:a,kind:"w"};let r=[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))];return{widths:r,kind:"x"}}(t,i,l),d=o.length-1;return{sizes:l||"w"!==c?l:"100vw",srcSet:o.map((e,a)=>"".concat(s({config:t,src:n,quality:r,width:e})," ").concat("w"===c?e:a+1).concat(c)).join(", "),src:s({config:t,src:n,quality:r,width:o[d]})}}({config:D,src:m,unoptimized:j,width:U,quality:H,sizes:x,loader:M}),et=m,en={imageSrcSet:ee.srcSet,imageSizes:ee.sizes,crossOrigin:F.crossOrigin},ea=s.useRef(Z);s.useEffect(()=>{ea.current=Z},[Z]);let ei=s.useRef(_);s.useEffect(()=>{ei.current=_},[_]);let er=a({isLazy:G,imgAttributes:ee,heightInt:Y,widthInt:U,qualityInt:H,className:b,imgStyle:q,blurStyle:$,loading:w,config:D,fill:N,unoptimized:j,placeholder:I,loader:M,srcString:et,onLoadRef:ea,onLoadingCompleteRef:ei,setBlurComplete:K,setShowAltText:X},F);return s.default.createElement(s.default.Fragment,null,s.default.createElement(p,Object.assign({},er,{ref:t})),v?s.default.createElement(o.default,null,s.default.createElement("link",Object.assign({key:"__nimg-"+ee.src+ee.srcSet+ee.sizes,rel:"preload",as:"image",href:ee.srcSet?void 0:ee.src},en))):null)});t.default=x,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:n,blurWidth:a,blurHeight:i,blurDataURL:r}=e,l=a||t,s=i||n,o=r.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return l&&s?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(l," ").concat(s,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(a&&i?"1":"20","'/%3E").concat(o,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(r,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(r,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function n(e){let{config:t,src:n,width:a,quality:i}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(n),"&w=").concat(a,"&q=").concat(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n.__next_img_default=!0,t.default=n},2086:function(e,t,n){"use strict";var a=n(5893),i=n(629);let r=e=>{let{loading:t=!1,error:n=null,data:r=null,children:l=(0,a.jsx)(a.Fragment,{})}=e;return t?(0,a.jsx)(i.Z,{className:"p-8",children:(0,a.jsx)("div",{className:"flex items-center justify-center",children:(0,a.jsx)("span",{className:"uppercase",children:"Loading"})})}):n?(0,a.jsx)(i.Z,{className:"p-8",children:(0,a.jsx)("div",{className:"flex items-center justify-center",children:(0,a.jsx)("span",{className:"uppercase",children:n.message||"Error"})})}):r?(0,a.jsx)(a.Fragment,{children:l}):(0,a.jsx)(i.Z,{className:"p-8",children:(0,a.jsx)("div",{className:"flex items-center justify-center",children:(0,a.jsx)("span",{className:"uppercase",children:"No Data"})})})};t.Z=r},4953:function(e,t,n){"use strict";var a=n(5893),i=n(7294);let r=e=>{let{backgroundImage:t={src:""},children:n=(0,a.jsx)(a.Fragment,{})}=e,[r,l]=(0,i.useState)("rgba(22, 25, 32, 0.5)"),s=(0,i.useCallback)(()=>{let{pageYOffset:e,scrollY:t,innerHeight:n}=window,a=e||t||0,i=.5+parseFloat((.4*(a/n<1?a/n:1)).toFixed(2));l("rgba(22, 25, 32, ".concat(i,")"))},[]);return(0,i.useEffect)(()=>(window.addEventListener("scroll",s,{passive:!0}),()=>window.removeEventListener("scroll",s)),[s]),(0,a.jsx)("div",{className:"bg-fixed bg-center bg-cover text-white",style:{backgroundImage:"url(".concat(t.src,")")},children:(0,a.jsx)("div",{style:{backgroundColor:r},className:"transition-all",children:n})})};r.displayName="Background",r.defaultProps={backgroundImage:{src:""},children:(0,a.jsx)(a.Fragment,{})},t.Z=r},5604:function(e,t,n){"use strict";var a=n(5893),i=n(9520);let r=()=>(0,a.jsx)("footer",{children:(0,a.jsx)(i.Z,{children:(0,a.jsx)("div",{className:"py-8",children:"\xa9 2023 HOM"})})});t.Z=r},475:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var a=n(5893),i=n(261),r=n(6914),l=n(5542),s=n(4161),o=n(1718),c=n(1277);let d={apps:[{id:"news",href:"/news",title:"news",icon:(0,a.jsx)(o.Z,{})},{id:"forex",href:"/forex",title:"forex",icon:(0,a.jsx)(l.Z,{})},{id:"weather",href:"/weather",title:"weather",icon:(0,a.jsx)(r.Z,{})},{id:"football",href:"/football",title:"football",icon:(0,a.jsx)(c.Z,{})},{id:"stock",href:"/stock",title:"stock",icon:(0,a.jsx)(i.Z,{})},{id:"countries",href:"/countries",title:"countries",icon:(0,a.jsx)(s.Z,{})}]};var u=n(326),g=n(3321),h=n(9520),f=n(2959),A=n(3599),m=n(1664),p=n.n(m),x=n(7294);let j=e=>{let{icon:t=(0,a.jsx)(a.Fragment,{}),appName:n=""}=e,[i,r]=(0,x.useState)(null),l=Boolean(i),s=e=>{r(e.currentTarget)},o=()=>{r(null)};return(0,a.jsx)("nav",{className:"py-8",children:(0,a.jsx)(h.Z,{children:(0,a.jsxs)("div",{className:"flex justify-between text-white",children:[(0,a.jsx)("h1",{className:"text-2xl uppercase",children:(0,a.jsx)(p(),{href:"/",children:(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[t,n]})})}),(0,a.jsxs)("div",{children:[(0,a.jsx)(g.Z,{onClick:s,className:"p-0 text-white",children:(0,a.jsx)(u.Z,{fontSize:"large"})}),(0,a.jsx)(f.Z,{id:"basic-menu",anchorEl:i,open:l,onClose:o,anchorOrigin:{vertical:"top",horizontal:"left"},MenuListProps:{"aria-labelledby":"basic-button"},children:d.apps.map(e=>{let{id:t,href:n,title:i,icon:r}=e;return(0,a.jsx)(A.Z,{children:(0,a.jsx)(p(),{href:n,className:"capitalize",children:(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[r,i]})})},t)})})]})]})})})};var v=j},1272:function(e,t,n){"use strict";n.d(t,{W:function(){return a}});let a="https://homapis.vercel.app/api"},6684:function(e,t,n){"use strict";var a=n(8433),i=n(7294);t.Z=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},[{loading:n,error:r,data:l},s]=(0,i.useState)({loading:!1,error:null,data:null}),[o,c]=(0,i.useState)(0),d=(0,i.useCallback)(()=>c(e=>e+1),[]);return(0,i.useEffect)(()=>{let n=async(e,t)=>{s({loading:!0,error:null,data:null});try{let n=await a.Z.get(e,t),{data:i}=n;s({loading:!1,error:null,data:i})}catch(e){s({loading:!1,error:e,data:null})}};n(e,t)},[o]),{loading:n,error:r,data:l,refetch:d}}},6434:function(e,t,n){"use strict";n.r(t),n.d(t,{YouTubeTrendingPage:function(){return C},default:function(){return N}});var a=n(5893),i={src:"/apps//_next/static/media/youtube.2388da31.jpeg",height:3112,width:4096,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAABQf/2gAMAwEAAhADEAAAAJATRv/EABoQAAICAwAAAAAAAAAAAAAAAAECABEDEiH/2gAIAQEAAT8AXIhQDU3wXP/EABURAQEAAAAAAAAAAAAAAAAAAAAC/9oACAECAQE/AKf/xAAWEQADAAAAAAAAAAAAAAAAAAAAAzL/2gAIAQMBAT8ARJ//2Q==",blurWidth:8,blurHeight:6},r=n(2086),l=n(4953),s=n(5604),o=n(475),c=n(1272),d=n(6684),u=n(7294),g=(0,n(8169).Z)((0,a.jsx)("path",{d:"M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"}),"YouTube"),h=n(4054),f=n(315),A=n(3599),m=n(9520),p=n(5675),x=n.n(p),j=n(1664),v=n.n(j);let w=u.memo(e=>{let{categoryId:t,changeCategoryId:n}=e,i="".concat(c.W,"/google/youtube/categories"),{loading:r,error:l,data:s}=(0,d.Z)(i);return r||l||!s?(0,a.jsx)(a.Fragment,{}):(0,a.jsx)(h.Z,{fullWidth:!0,children:(0,a.jsxs)(f.Z,{id:"category-select",value:t,className:"bg-white",onChange:e=>n(e.target.value),children:[(0,a.jsx)(A.Z,{value:"0",children:"Category"}),s.map(e=>(0,a.jsx)(A.Z,{value:e.id,children:e.snippet.title},e.id))]})})});w.displayName="CategorySelect";let b=u.memo(e=>{let{regionCode:t,changeRegionCode:n}=e,i="".concat(c.W,"/countries/codes"),{loading:r,error:l,data:s}=(0,d.Z)(i);return r||l||!s?(0,a.jsx)(a.Fragment,{}):(0,a.jsx)(h.Z,{fullWidth:!0,children:(0,a.jsx)(f.Z,{id:"country-select",value:t,className:"bg-white",onChange:e=>n(e.target.value),children:s.map(e=>(0,a.jsx)(A.Z,{value:e.cca2,children:e.name},e.cca2))})})});b.displayName="CountrySelect";let y=u.memo(e=>{let{regionCode:t,videoCategoryId:n}=e,i="".concat(c.W,"/google/youtube/trending?regionCode=").concat(t,"&videoCategoryId=").concat(n),{loading:l,error:s,data:o,refetch:g}=(0,d.Z)(i);return(0,u.useEffect)(()=>{g()},[t,n,g]),(0,a.jsx)(r.Z,{loading:l,error:s,data:o,children:(0,a.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-4 md:gap-8",children:(o||[]).map(e=>(0,a.jsxs)("div",{className:"w-full flex flex-col gap-2",children:[(0,a.jsx)("div",{className:"rounded-xl overflow-hidden",children:(0,a.jsx)(v(),{href:"https://www.youtube.com/watch?v=".concat(e.id,"&ab_channel=").concat(e.snippet.channelId),target:"_blank",children:(0,a.jsx)(x(),{src:e.snippet.thumbnails.high.url,alt:e.snippet.title,width:e.snippet.thumbnails.high.width,height:e.snippet.thumbnails.high.height})})}),(0,a.jsx)("h2",{className:"font-medium truncate",children:(0,a.jsx)(v(),{href:"https://www.youtube.com/watch?v=".concat(e.id,"&ab_channel=").concat(e.snippet.channelId),target:"_blank",children:e.snippet.title})}),(0,a.jsx)("p",{className:"text-gray-300 truncate",children:(0,a.jsx)(v(),{href:"https://www.youtube.com/channel/".concat(e.snippet.channelId),target:"_blank",children:e.snippet.channelTitle})})]},e.id))})})});y.displayName="YouTubeTrending";let E=()=>{let[e,t]=(0,u.useState)("US"),[n,r]=(0,u.useState)("0");return(0,a.jsx)(l.Z,{backgroundImage:i,children:(0,a.jsxs)("div",{className:"min-h-screen flex flex-col",children:[(0,a.jsx)(o.Z,{icon:(0,a.jsx)(g,{}),appName:"YouTube Trending"}),(0,a.jsx)("main",{className:"grow",children:(0,a.jsx)(m.Z,{children:(0,a.jsxs)("div",{className:"flex flex-col gap-4 md:gap-8",children:[(0,a.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8",children:[(0,a.jsx)(w,{categoryId:n,changeCategoryId:e=>r(e)}),(0,a.jsx)(b,{regionCode:e,changeRegionCode:e=>t(e)})]}),(0,a.jsx)(y,{videoCategoryId:n,regionCode:e})]})})}),(0,a.jsx)(s.Z,{})]})})};E.displayName="YouTubeTrendingTemplate";let C=()=>(0,a.jsx)(E,{});var N=C},5675:function(e,t,n){e.exports=n(9749)}},function(e){e.O(0,[525,433,350,774,888,179],function(){return e(e.s=3896)}),_N_E=e.O()}]);