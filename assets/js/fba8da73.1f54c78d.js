"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[28205],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),m=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=m(r),f=n,d=c["".concat(l,".").concat(f)]||c[f]||s[f]||i;return r?a.createElement(d,o(o({ref:t},u),{},{components:r})):a.createElement(d,o({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var m=2;m<i;m++)o[m]=r[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},6305:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var a=r(87462),n=(r(67294),r(3905));const i={sidebar_label:"Page.waitForFrame"},o="Page.waitForFrame() method",p={unversionedId:"api/puppeteer.page.waitforframe",id:"version-15.3.1/api/puppeteer.page.waitforframe",title:"Page.waitForFrame() method",description:"Signature:",source:"@site/versioned_docs/version-15.3.1/api/puppeteer.page.waitforframe.md",sourceDirName:"api",slug:"/api/puppeteer.page.waitforframe",permalink:"/api/puppeteer.page.waitforframe",draft:!1,tags:[],version:"15.3.1",frontMatter:{sidebar_label:"Page.waitForFrame"},sidebar:"sidebar",previous:{title:"Page.waitForFileChooser",permalink:"/api/puppeteer.page.waitforfilechooser"},next:{title:"Page.waitForFunction",permalink:"/api/puppeteer.page.waitforfunction"}},l={},m=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}],u={toc:m};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"pagewaitforframe-method"},"Page.waitForFrame() method"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"class Page {\n  waitForFrame(\n    urlOrPredicate: string | ((frame: Frame) => boolean | Promise<boolean>),\n    options?: {\n      timeout?: number;\n    }\n  ): Promise<Frame>;\n}\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"urlOrPredicate"),(0,n.kt)("td",{parentName:"tr",align:null},"string ","|"," ((frame: ",(0,n.kt)("a",{parentName:"td",href:"/api/puppeteer.frame"},"Frame"),") =",">"," boolean ","|"," Promise","<","boolean",">",")"),(0,n.kt)("td",{parentName:"tr",align:null},"A URL or predicate to wait for.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"options"),(0,n.kt)("td",{parentName:"tr",align:null},"{ timeout?: number; }"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("i",null,"(Optional)")," Optional waiting parameters")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"Promise","<",(0,n.kt)("a",{parentName:"p",href:"/api/puppeteer.frame"},"Frame"),">"),(0,n.kt)("p",null,"Promise which resolves to the matched frame."),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("p",null,"Optional Parameter have:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"timeout"),": Maximum wait time in milliseconds, defaults to ",(0,n.kt)("inlineCode",{parentName:"li"},"30")," seconds, pass ",(0,n.kt)("inlineCode",{parentName:"li"},"0")," to disable the timeout. The default value can be changed by using the ",(0,n.kt)("a",{parentName:"li",href:"/api/puppeteer.page.setdefaulttimeout"},"Page.setDefaultTimeout()")," method.")),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"const frame = await page.waitForFrame(async frame => {\n  return frame.name() === 'Test';\n});\n")))}s.isMDXComponent=!0}}]);