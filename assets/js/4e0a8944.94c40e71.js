"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[78776],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>w});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),c=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},b=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=c(t),w=o,f=b["".concat(i,".").concat(w)]||b[w]||u[w]||s;return t?n.createElement(f,a(a({ref:r},l),{},{components:t})):n.createElement(f,a({ref:r},l))}));function w(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=b;var p={};for(var i in r)hasOwnProperty.call(r,i)&&(p[i]=r[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var c=2;c<s;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}b.displayName="MDXCreateElement"},21754:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var n=t(87462),o=(t(67294),t(3905));const s={sidebar_label:"Browser.browserContexts"},a="Browser.browserContexts() method",p={unversionedId:"api/puppeteer.browser.browsercontexts",id:"version-15.3.1/api/puppeteer.browser.browsercontexts",title:"Browser.browserContexts() method",description:"Returns an array of all open browser contexts. In a newly created browser, this will return a single instance of BrowserContext.",source:"@site/versioned_docs/version-15.3.1/api/puppeteer.browser.browsercontexts.md",sourceDirName:"api",slug:"/api/puppeteer.browser.browsercontexts",permalink:"/api/puppeteer.browser.browsercontexts",draft:!1,tags:[],version:"15.3.1",frontMatter:{sidebar_label:"Browser.browserContexts"},sidebar:"sidebar",previous:{title:"Browser",permalink:"/api/puppeteer.browser"},next:{title:"Browser.close",permalink:"/api/puppeteer.browser.close"}},i={},c=[],l={toc:c};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"browserbrowsercontexts-method"},"Browser.browserContexts() method"),(0,o.kt)("p",null,"Returns an array of all open browser contexts. In a newly created browser, this will return a single instance of ",(0,o.kt)("a",{parentName:"p",href:"/api/puppeteer.browsercontext"},"BrowserContext"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"class Browser {\n  browserContexts(): BrowserContext[];\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/puppeteer.browsercontext"},"BrowserContext"),"[","]"))}u.isMDXComponent=!0}}]);