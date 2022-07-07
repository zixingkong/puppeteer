"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1690],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=c(n),d=a,v=s["".concat(o,".").concat(d)]||s[d]||u[d]||p;return n?r.createElement(v,l(l({ref:t},m),{},{components:n})):r.createElement(v,l({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,l=new Array(p);l[0]=s;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<p;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},69272:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>p,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const p={sidebar_label:"EventEmitter.once"},l="EventEmitter.once() method",i={unversionedId:"api/puppeteer.eventemitter.once",id:"api/puppeteer.eventemitter.once",title:"EventEmitter.once() method",description:"Like on but the listener will only be fired once and then it will be removed.",source:"@site/../docs/api/puppeteer.eventemitter.once.md",sourceDirName:"api",slug:"/api/puppeteer.eventemitter.once",permalink:"/next/api/puppeteer.eventemitter.once",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"EventEmitter.once"},sidebar:"sidebar",previous:{title:"EventEmitter.on",permalink:"/next/api/puppeteer.eventemitter.on"},next:{title:"EventEmitter.removeAllListeners",permalink:"/next/api/puppeteer.eventemitter.removealllisteners"}},o={},c=[{value:"Parameters",id:"parameters",level:2}],m={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"eventemitteronce-method"},"EventEmitter.once() method"),(0,a.kt)("p",null,"Like ",(0,a.kt)("inlineCode",{parentName:"p"},"on")," but the listener will only be fired once and then it will be removed."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class EventEmitter {\n  once(event: EventType, handler: Handler): EventEmitter;\n}\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"event"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/next/api/puppeteer.eventtype"},"EventType")),(0,a.kt)("td",{parentName:"tr",align:null},"the event you'd like to listen to")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"handler"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/next/api/puppeteer.handler"},"Handler")),(0,a.kt)("td",{parentName:"tr",align:null},"the handler function to run when the event occurs")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/next/api/puppeteer.eventemitter"},"EventEmitter")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"this")," to enable you to chain method calls."))}u.isMDXComponent=!0}}]);