"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[72644],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,p=e.originalType,i=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),f=u(r),m=s,d=f["".concat(i,".").concat(m)]||f[m]||c[m]||p;return r?n.createElement(d,a(a({ref:t},l),{},{components:r})):n.createElement(d,a({ref:t},l))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var p=r.length,a=new Array(p);a[0]=f;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:s,a[1]=o;for(var u=2;u<p;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},38817:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>c,frontMatter:()=>p,metadata:()=>o,toc:()=>u});var n=r(87462),s=(r(67294),r(3905));const p={sidebar_label:"HTTPResponse.statusText"},a="HTTPResponse.statusText() method",o={unversionedId:"api/puppeteer.httpresponse.statustext",id:"version-15.3.0/api/puppeteer.httpresponse.statustext",title:"HTTPResponse.statusText() method",description:"Signature:",source:"@site/versioned_docs/version-15.3.0/api/puppeteer.httpresponse.statustext.md",sourceDirName:"api",slug:"/api/puppeteer.httpresponse.statustext",permalink:"/15.3.0/api/puppeteer.httpresponse.statustext",draft:!1,tags:[],version:"15.3.0",frontMatter:{sidebar_label:"HTTPResponse.statusText"},sidebar:"sidebar",previous:{title:"HTTPResponse.status",permalink:"/15.3.0/api/puppeteer.httpresponse.status"},next:{title:"HTTPResponse.text",permalink:"/15.3.0/api/puppeteer.httpresponse.text"}},i={},u=[],l={toc:u};function c(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"httpresponsestatustext-method"},"HTTPResponse.statusText() method"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Signature:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"class HTTPResponse {\n  statusText(): string;\n}\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")),(0,s.kt)("p",null,"string"),(0,s.kt)("p",null,'The status text of the response (e.g. usually an "OK" for a success).'))}c.isMDXComponent=!0}}]);