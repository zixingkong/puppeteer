"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[46227],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),m=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=m(n),d=r,g=c["".concat(i,".").concat(d)]||c[d]||s[d]||l;return n?a.createElement(g,p(p({ref:t},u),{},{components:n})):a.createElement(g,p({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=c;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var m=2;m<l;m++)p[m]=n[m];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},31721:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const l={sidebar_label:"ElementHandle.$eval"},p="ElementHandle.$eval() method",o={unversionedId:"api/puppeteer.elementhandle._eval",id:"version-15.3.0/api/puppeteer.elementhandle._eval",title:"ElementHandle.$eval() method",description:"This method runs document.querySelector within the element and passes it as the first argument to pageFunction. If there's no element matching selector, the method throws an error.",source:"@site/versioned_docs/version-15.3.0/api/puppeteer.elementhandle._eval.md",sourceDirName:"api",slug:"/api/puppeteer.elementhandle._eval",permalink:"/15.3.0/api/puppeteer.elementhandle._eval",draft:!1,tags:[],version:"15.3.0",frontMatter:{sidebar_label:"ElementHandle.$eval"},sidebar:"sidebar",previous:{title:"ElementHandle.$_1",permalink:"/15.3.0/api/puppeteer.elementhandle.__1"},next:{title:"ElementHandle.$eval_1",permalink:"/15.3.0/api/puppeteer.elementhandle._eval_1"}},i={},m=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}],u={toc:m};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"elementhandleeval-method"},"ElementHandle.$eval() method"),(0,r.kt)("p",null,"This method runs ",(0,r.kt)("inlineCode",{parentName:"p"},"document.querySelector")," within the element and passes it as the first argument to ",(0,r.kt)("inlineCode",{parentName:"p"},"pageFunction"),". If there's no element matching ",(0,r.kt)("inlineCode",{parentName:"p"},"selector"),", the method throws an error."),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"pageFunction")," returns a Promise, then ",(0,r.kt)("inlineCode",{parentName:"p"},"frame.$eval")," would wait for the promise to resolve and return its value."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Signature:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"class ElementHandle {\n  $eval<\n    Selector extends keyof HTMLElementTagNameMap,\n    Params extends unknown[],\n    Func extends EvaluateFunc<\n      [HTMLElementTagNameMap[Selector], ...Params]\n    > = EvaluateFunc<[HTMLElementTagNameMap[Selector], ...Params]>\n  >(\n    selector: Selector,\n    pageFunction: Func | string,\n    ...args: Params\n  ): Promise<Awaited<ReturnType<Func>>>;\n}\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"selector"),(0,r.kt)("td",{parentName:"tr",align:null},"Selector"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pageFunction"),(0,r.kt)("td",{parentName:"tr",align:null},"Func ","|"," string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"args"),(0,r.kt)("td",{parentName:"tr",align:null},"Params"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")),(0,r.kt)("p",null,"Promise","<","Awaited","<","ReturnType","<","Func",">",">",">"),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const tweetHandle = await page.$('.tweet');\nexpect(await tweetHandle.$eval('.like', node => node.innerText)).toBe('100');\nexpect(await tweetHandle.$eval('.retweets', node => node.innerText)).toBe('10');\n")))}s.isMDXComponent=!0}}]);