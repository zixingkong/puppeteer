"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[52022],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),u=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(i.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(t),f=a,g=m["".concat(i,".").concat(f)]||m[f]||s[f]||p;return t?n.createElement(g,o(o({ref:r},c),{},{components:t})):n.createElement(g,o({ref:r},c))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var p=t.length,o=new Array(p);o[0]=m;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<p;u++)o[u]=t[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},78471:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>s,frontMatter:()=>p,metadata:()=>l,toc:()=>u});var n=t(87462),a=(t(67294),t(3905));const p={sidebar_label:"Page.url"},o="Page.url() method",l={unversionedId:"api/puppeteer.page.url",id:"api/puppeteer.page.url",title:"Page.url() method",description:"Signature:",source:"@site/../docs/api/puppeteer.page.url.md",sourceDirName:"api",slug:"/api/puppeteer.page.url",permalink:"/next/api/puppeteer.page.url",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Page.url"},sidebar:"sidebar",previous:{title:"Page.type",permalink:"/next/api/puppeteer.page.type"},next:{title:"Page.viewport",permalink:"/next/api/puppeteer.page.viewport"}},i={},u=[{value:"Remarks",id:"remarks",level:2}],c={toc:u};function s(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pageurl-method"},"Page.url() method"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class Page {\n  url(): string;\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"string"),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"Shortcut for ",(0,a.kt)("a",{parentName:"p",href:"/next/api/puppeteer.frame.url"},"page.mainFrame().url()"),"."))}s.isMDXComponent=!0}}]);