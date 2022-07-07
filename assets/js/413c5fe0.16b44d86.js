"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53578],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),u=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},m=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=u(r),d=n,f=s["".concat(o,".").concat(d)]||s[d]||c[d]||l;return r?a.createElement(f,p(p({ref:t},m),{},{components:r})):a.createElement(f,p({ref:t},m))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,p=new Array(l);p[0]=s;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var u=2;u<l;u++)p[u]=r[u];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},73132:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const l={sidebar_label:"Frame.evaluate"},p="Frame.evaluate() method",i={unversionedId:"api/puppeteer.frame.evaluate",id:"version-15.3.1/api/puppeteer.frame.evaluate",title:"Frame.evaluate() method",description:"Signature:",source:"@site/versioned_docs/version-15.3.1/api/puppeteer.frame.evaluate.md",sourceDirName:"api",slug:"/api/puppeteer.frame.evaluate",permalink:"/api/puppeteer.frame.evaluate",draft:!1,tags:[],version:"15.3.1",frontMatter:{sidebar_label:"Frame.evaluate"},sidebar:"sidebar",previous:{title:"Frame.content",permalink:"/api/puppeteer.frame.content"},next:{title:"Frame.evaluateHandle",permalink:"/api/puppeteer.frame.evaluatehandle"}},o={},u=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],m={toc:u};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"frameevaluate-method"},"Frame.evaluate() method"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"class Frame {\n  evaluate<\n    Params extends unknown[],\n    Func extends EvaluateFunc<Params> = EvaluateFunc<Params>\n  >(\n    pageFunction: Func | string,\n    ...args: Params\n  ): Promise<Awaited<ReturnType<Func>>>;\n}\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"pageFunction"),(0,n.kt)("td",{parentName:"tr",align:null},"Func ","|"," string"),(0,n.kt)("td",{parentName:"tr",align:null},"a function that is run within the frame")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"args"),(0,n.kt)("td",{parentName:"tr",align:null},"Params"),(0,n.kt)("td",{parentName:"tr",align:null},"arguments to be passed to the pageFunction")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"Promise","<","Awaited","<","ReturnType","<","Func",">",">",">"),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("p",null,"This method behaves identically to ",(0,n.kt)("a",{parentName:"p",href:"/api/puppeteer.page.evaluate"},"Page.evaluate()")," except it's run within the context of the ",(0,n.kt)("inlineCode",{parentName:"p"},"frame"),", rather than the entire page."))}c.isMDXComponent=!0}}]);