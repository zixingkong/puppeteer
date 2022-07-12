"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9138],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>w});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,p=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(r),w=o,m=d["".concat(i,".").concat(w)]||d[w]||u[w]||p;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function w(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=r.length,a=new Array(p);a[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<p;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},48979:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>p,metadata:()=>s,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const p={sidebar_label:"Browser.wsEndpoint"},a="Browser.wsEndpoint() method",s={unversionedId:"api/puppeteer.browser.wsendpoint",id:"version-15.3.2/api/puppeteer.browser.wsendpoint",title:"Browser.wsEndpoint() method",description:"The browser websocket endpoint which can be used as an argument to Puppeteer.connect().",source:"@site/versioned_docs/version-15.3.2/api/puppeteer.browser.wsendpoint.md",sourceDirName:"api",slug:"/api/puppeteer.browser.wsendpoint",permalink:"/api/puppeteer.browser.wsendpoint",draft:!1,tags:[],version:"15.3.2",frontMatter:{sidebar_label:"Browser.wsEndpoint"},sidebar:"sidebar",previous:{title:"Browser.waitForTarget",permalink:"/api/puppeteer.browser.waitfortarget"},next:{title:"BrowserConnectOptions",permalink:"/api/puppeteer.browserconnectoptions"}},i={},c=[{value:"Remarks",id:"remarks",level:2}],l={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"browserwsendpoint-method"},"Browser.wsEndpoint() method"),(0,o.kt)("p",null,"The browser websocket endpoint which can be used as an argument to ",(0,o.kt)("a",{parentName:"p",href:"/api/puppeteer.puppeteer.connect"},"Puppeteer.connect()"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"class Browser {\n  wsEndpoint(): string;\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")),(0,o.kt)("p",null,"string"),(0,o.kt)("p",null,"The Browser websocket url."),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"The format is ",(0,o.kt)("inlineCode",{parentName:"p"},"ws://${host}:${port}/devtools/browser/<id>"),"."),(0,o.kt)("p",null,"You can find the ",(0,o.kt)("inlineCode",{parentName:"p"},"webSocketDebuggerUrl")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"http://${host}:${port}/json/version"),". Learn more about the ",(0,o.kt)("a",{parentName:"p",href:"https://chromedevtools.github.io/devtools-protocol"},"devtools protocol")," and the ",(0,o.kt)("a",{parentName:"p",href:"https://chromedevtools.github.io/devtools-protocol/#how-do-i-access-the-browser-target"},"browser endpoint"),"."))}u.isMDXComponent=!0}}]);