"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[60849],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=u(r),f=o,d=m["".concat(c,".").concat(f)]||m[f]||s[f]||a;return r?n.createElement(d,p(p({ref:t},l),{},{components:r})):n.createElement(d,p({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var u=2;u<a;u++)p[u]=r[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},46047:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const a={sidebar_label:"Frame.executionContext"},p="Frame.executionContext() method",i={unversionedId:"api/puppeteer.frame.executioncontext",id:"version-15.3.1/api/puppeteer.frame.executioncontext",title:"Frame.executionContext() method",description:"Signature:",source:"@site/versioned_docs/version-15.3.1/api/puppeteer.frame.executioncontext.md",sourceDirName:"api",slug:"/api/puppeteer.frame.executioncontext",permalink:"/15.3.1/api/puppeteer.frame.executioncontext",draft:!1,tags:[],version:"15.3.1",frontMatter:{sidebar_label:"Frame.executionContext"},sidebar:"sidebar",previous:{title:"Frame.evaluateHandle",permalink:"/15.3.1/api/puppeteer.frame.evaluatehandle"},next:{title:"Frame.focus",permalink:"/15.3.1/api/puppeteer.frame.focus"}},c={},u=[],l={toc:u};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"frameexecutioncontext-method"},"Frame.executionContext() method"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"class Frame {\n  executionContext(): Promise<ExecutionContext>;\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")),(0,o.kt)("p",null,"Promise","<",(0,o.kt)("a",{parentName:"p",href:"/15.3.1/api/puppeteer.executioncontext"},"ExecutionContext"),">"),(0,o.kt)("p",null,"a promise that resolves to the frame's default execution context."))}s.isMDXComponent=!0}}]);