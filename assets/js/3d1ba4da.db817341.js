"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[22716],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=u(r),k=a,m=d["".concat(i,".").concat(k)]||d[k]||c[k]||o;return r?n.createElement(m,l(l({ref:t},s),{},{components:r})):n.createElement(m,l({ref:t},s))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},51065:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_label:"WebWorker"},l="WebWorker class",p={unversionedId:"api/puppeteer.webworker",id:"api/puppeteer.webworker",title:"WebWorker class",description:"The WebWorker class represents a WebWorker.",source:"@site/../docs/api/puppeteer.webworker.md",sourceDirName:"api",slug:"/api/puppeteer.webworker",permalink:"/next/api/puppeteer.webworker",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"WebWorker"},sidebar:"sidebar",previous:{title:"WaitTimeoutOptions.timeout",permalink:"/next/api/puppeteer.waittimeoutoptions.timeout"},next:{title:"WebWorker.evaluate",permalink:"/next/api/puppeteer.webworker.evaluate"}},i={},u=[{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2},{value:"Methods",id:"methods",level:2}],s={toc:u};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"webworker-class"},"WebWorker class"),(0,a.kt)("p",null,"The WebWorker class represents a ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API"},"WebWorker"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class WebWorker extends EventEmitter\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Extends:")," ",(0,a.kt)("a",{parentName:"p",href:"/next/api/puppeteer.eventemitter"},"EventEmitter")),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"The events ",(0,a.kt)("inlineCode",{parentName:"p"},"workercreated")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"workerdestroyed")," are emitted on the page object to signal the worker lifecycle."),(0,a.kt)("p",null,"The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,a.kt)("inlineCode",{parentName:"p"},"WebWorker")," class."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"page.on('workercreated', worker =>\n  console.log('Worker created: ' + worker.url())\n);\npage.on('workerdestroyed', worker =>\n  console.log('Worker destroyed: ' + worker.url())\n);\n\nconsole.log('Current workers:');\nfor (const worker of page.workers()) {\n  console.log('  ' + worker.url());\n}\n")),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Method"),(0,a.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/next/api/puppeteer.webworker.evaluate"},"evaluate(pageFunction, args)")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"If the function passed to the ",(0,a.kt)("code",null,"worker.evaluate")," returns a Promise, then ",(0,a.kt)("code",null,"worker.evaluate")," would wait for the promise to resolve and return its value. If the function passed to the ",(0,a.kt)("code",null,"worker.evaluate")," returns a non-serializable value, then ",(0,a.kt)("code",null,"worker.evaluate")," resolves to ",(0,a.kt)("code",null,"undefined"),". DevTools Protocol also supports transferring some additional values that are not serializable by ",(0,a.kt)("code",null,"JSON"),": ",(0,a.kt)("code",null,"-0"),", ",(0,a.kt)("code",null,"NaN"),", ",(0,a.kt)("code",null,"Infinity"),", ",(0,a.kt)("code",null,"-Infinity"),", and bigint literals. Shortcut for ",(0,a.kt)("code",null,"await worker.executionContext()).evaluate(pageFunction, ...args)"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/next/api/puppeteer.webworker.evaluatehandle"},"evaluateHandle(pageFunction, args)")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"The only difference between ",(0,a.kt)("code",null,"worker.evaluate")," and ",(0,a.kt)("code",null,"worker.evaluateHandle")," is that ",(0,a.kt)("code",null,"worker.evaluateHandle")," returns in-page object (JSHandle). If the function passed to the ",(0,a.kt)("code",null,"worker.evaluateHandle")," returns a ",(0,a.kt)("code",null,"Promise"),", then ",(0,a.kt)("code",null,"worker.evaluateHandle")," would wait for the promise to resolve and return its value. Shortcut for ",(0,a.kt)("code",null,"await worker.executionContext()).evaluateHandle(pageFunction, ...args)"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/next/api/puppeteer.webworker.executioncontext"},"executionContext()")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Returns the ExecutionContext the WebWorker runs in")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/next/api/puppeteer.webworker.url"},"url()")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})))))}c.isMDXComponent=!0}}]);