"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[67188],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},w=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),w=c(r),m=o,b=w["".concat(s,".").concat(m)]||w[m]||u[m]||a;return r?n.createElement(b,p(p({ref:t},l),{},{components:r})):n.createElement(b,p({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=w;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var c=2;c<a;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}w.displayName="MDXCreateElement"},41931:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={sidebar_label:"Browser.createIncognitoBrowserContext"},p="Browser.createIncognitoBrowserContext() method",i={unversionedId:"api/puppeteer.browser.createincognitobrowsercontext",id:"version-15.3.0/api/puppeteer.browser.createincognitobrowsercontext",title:"Browser.createIncognitoBrowserContext() method",description:"Creates a new incognito browser context. This won't share cookies/cache with other browser contexts.",source:"@site/versioned_docs/version-15.3.0/api/puppeteer.browser.createincognitobrowsercontext.md",sourceDirName:"api",slug:"/api/puppeteer.browser.createincognitobrowsercontext",permalink:"/15.3.0/api/puppeteer.browser.createincognitobrowsercontext",draft:!1,tags:[],version:"15.3.0",frontMatter:{sidebar_label:"Browser.createIncognitoBrowserContext"},sidebar:"sidebar",previous:{title:"Browser.close",permalink:"/15.3.0/api/puppeteer.browser.close"},next:{title:"Browser.defaultBrowserContext",permalink:"/15.3.0/api/puppeteer.browser.defaultbrowsercontext"}},s={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}],l={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"browsercreateincognitobrowsercontext-method"},"Browser.createIncognitoBrowserContext() method"),(0,o.kt)("p",null,"Creates a new incognito browser context. This won't share cookies/cache with other browser contexts."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"class Browser {\n  createIncognitoBrowserContext(\n    options?: BrowserContextOptions\n  ): Promise<BrowserContext>;\n}\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"options"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/15.3.0/api/puppeteer.browsercontextoptions"},"BrowserContextOptions")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("i",null,"(Optional)"))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")),(0,o.kt)("p",null,"Promise","<",(0,o.kt)("a",{parentName:"p",href:"/15.3.0/api/puppeteer.browsercontext"},"BrowserContext"),">"),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"(async () => {\n  const browser = await puppeteer.launch();\n  // Create a new incognito browser context.\n  const context = await browser.createIncognitoBrowserContext();\n  // Create a new page in a pristine context.\n  const page = await context.newPage();\n  // Do stuff\n  await page.goto('https://example.com');\n})();\n")))}u.isMDXComponent=!0}}]);