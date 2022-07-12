"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[38992],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(l,".").concat(d)]||m[d]||s[d]||i;return n?a.createElement(f,p(p({ref:t},u),{},{components:n})):a.createElement(f,p({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,p=new Array(i);p[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var c=2;c<i;c++)p[c]=n[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},14865:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_label:"Page.emulateVisionDeficiency"},p="Page.emulateVisionDeficiency() method",o={unversionedId:"api/puppeteer.page.emulatevisiondeficiency",id:"version-15.3.1/api/puppeteer.page.emulatevisiondeficiency",title:"Page.emulateVisionDeficiency() method",description:"Simulates the given vision deficiency on the page.",source:"@site/versioned_docs/version-15.3.1/api/puppeteer.page.emulatevisiondeficiency.md",sourceDirName:"api",slug:"/api/puppeteer.page.emulatevisiondeficiency",permalink:"/15.3.1/api/puppeteer.page.emulatevisiondeficiency",draft:!1,tags:[],version:"15.3.1",frontMatter:{sidebar_label:"Page.emulateVisionDeficiency"},sidebar:"sidebar",previous:{title:"Page.emulateTimezone",permalink:"/15.3.1/api/puppeteer.page.emulatetimezone"},next:{title:"Page.evaluate",permalink:"/15.3.1/api/puppeteer.page.evaluate"}},l={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}],u={toc:c};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pageemulatevisiondeficiency-method"},"Page.emulateVisionDeficiency() method"),(0,r.kt)("p",null,"Simulates the given vision deficiency on the page."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Signature:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"class Page {\n  emulateVisionDeficiency(\n    type?: Protocol.Emulation.SetEmulatedVisionDeficiencyRequest['type']\n  ): Promise<void>;\n}\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"Protocol.Emulation.SetEmulatedVisionDeficiencyRequest","[","'type'","]"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",null,"(Optional)")," the type of deficiency to simulate, or ",(0,r.kt)("code",null,"'none'")," to reset.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")),(0,r.kt)("p",null,"Promise","<","void",">"),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const puppeteer = require('puppeteer');\n\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  await page.goto('https://v8.dev/blog/10-years');\n\n  await page.emulateVisionDeficiency('achromatopsia');\n  await page.screenshot({path: 'achromatopsia.png'});\n\n  await page.emulateVisionDeficiency('deuteranopia');\n  await page.screenshot({path: 'deuteranopia.png'});\n\n  await page.emulateVisionDeficiency('blurredVision');\n  await page.screenshot({path: 'blurred-vision.png'});\n\n  await browser.close();\n})();\n")))}s.isMDXComponent=!0}}]);