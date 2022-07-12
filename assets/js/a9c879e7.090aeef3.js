"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[90134],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),g=u(a),c=n,f=g["".concat(l,".").concat(c)]||g[c]||s[c]||p;return a?r.createElement(f,i(i({ref:t},m),{},{components:a})):r.createElement(f,i({ref:t},m))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,i=new Array(p);i[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var u=2;u<p;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},7263:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>p,metadata:()=>o,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const p={sidebar_label:"Page.setDefaultNavigationTimeout"},i="Page.setDefaultNavigationTimeout() method",o={unversionedId:"api/puppeteer.page.setdefaultnavigationtimeout",id:"version-15.3.2/api/puppeteer.page.setdefaultnavigationtimeout",title:"Page.setDefaultNavigationTimeout() method",description:"This setting will change the default maximum navigation time for the following methods and related shortcuts:",source:"@site/versioned_docs/version-15.3.2/api/puppeteer.page.setdefaultnavigationtimeout.md",sourceDirName:"api",slug:"/api/puppeteer.page.setdefaultnavigationtimeout",permalink:"/api/puppeteer.page.setdefaultnavigationtimeout",draft:!1,tags:[],version:"15.3.2",frontMatter:{sidebar_label:"Page.setDefaultNavigationTimeout"},sidebar:"sidebar",previous:{title:"Page.setCookie",permalink:"/api/puppeteer.page.setcookie"},next:{title:"Page.setDefaultTimeout",permalink:"/api/puppeteer.page.setdefaulttimeout"}},l={},u=[{value:"Parameters",id:"parameters",level:2}],m={toc:u};function s(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"pagesetdefaultnavigationtimeout-method"},"Page.setDefaultNavigationTimeout() method"),(0,n.kt)("p",null,"This setting will change the default maximum navigation time for the following methods and related shortcuts:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/api/puppeteer.page.goback"},"page.goBack(options)"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/api/puppeteer.page.goforward"},"page.goForward(options)"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/api/puppeteer.page.goto"},"page.goto(url,options)"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/api/puppeteer.page.reload"},"page.reload(options)"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/api/puppeteer.page.setcontent"},"page.setContent(html,options)"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/api/puppeteer.page.waitfornavigation"},"page.waitForNavigation(options)")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"class Page {\n  setDefaultNavigationTimeout(timeout: number): void;\n}\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"timeout"),(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"Maximum navigation time in milliseconds.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"void"))}s.isMDXComponent=!0}}]);