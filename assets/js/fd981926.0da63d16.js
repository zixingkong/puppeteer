"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[80878],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,b=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(b,p(p({ref:t},c),{},{components:r})):n.createElement(b,p({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var s=2;s<o;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},10580:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_label:"BrowserContextEmittedEvents"},p="BrowserContextEmittedEvents enum",i={unversionedId:"api/puppeteer.browsercontextemittedevents",id:"version-15.3.0/api/puppeteer.browsercontextemittedevents",title:"BrowserContextEmittedEvents enum",description:"Signature:",source:"@site/versioned_docs/version-15.3.0/api/puppeteer.browsercontextemittedevents.md",sourceDirName:"api",slug:"/api/puppeteer.browsercontextemittedevents",permalink:"/15.3.0/api/puppeteer.browsercontextemittedevents",draft:!1,tags:[],version:"15.3.0",frontMatter:{sidebar_label:"BrowserContextEmittedEvents"},sidebar:"sidebar",previous:{title:"BrowserContext.waitForTarget",permalink:"/15.3.0/api/puppeteer.browsercontext.waitfortarget"},next:{title:"BrowserContextOptions",permalink:"/15.3.0/api/puppeteer.browsercontextoptions"}},l={},s=[{value:"Enumeration Members",id:"enumeration-members",level:2}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"browsercontextemittedevents-enum"},"BrowserContextEmittedEvents enum"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare const enum BrowserContextEmittedEvents\n")),(0,a.kt)("h2",{id:"enumeration-members"},"Enumeration Members"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Member"),(0,a.kt)("th",{parentName:"tr",align:null},"Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TargetChanged"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,'"',"targetchanged",'"')),(0,a.kt)("td",{parentName:"tr",align:null},"Emitted when the url of a target inside the browser context changes. Contains a ",(0,a.kt)("a",{parentName:"td",href:"/15.3.0/api/puppeteer.target"},"Target")," instance.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TargetCreated"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,'"',"targetcreated",'"')),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,"Emitted when a target is created within the browser context, for example when a new page is opened by ",(0,a.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/open"},"window.open")," or by ",(0,a.kt)("a",{parentName:"td",href:"/15.3.0/api/puppeteer.browsercontext.newpage"},"browserContext.newPage")),(0,a.kt)("p",null,"Contains a ",(0,a.kt)("a",{parentName:"td",href:"/15.3.0/api/puppeteer.target"},"Target")," instance."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TargetDestroyed"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,'"',"targetdestroyed",'"')),(0,a.kt)("td",{parentName:"tr",align:null},"Emitted when a target is destroyed within the browser context, for example when a page is closed. Contains a ",(0,a.kt)("a",{parentName:"td",href:"/15.3.0/api/puppeteer.target"},"Target")," instance.")))))}u.isMDXComponent=!0}}]);