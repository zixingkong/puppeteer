"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[77768],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=m(n),u=a,f=c["".concat(p,".").concat(u)]||c[u]||d[u]||l;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var m=2;m<l;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},27402:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var r=n(87462),a=(n(67294),n(3905));const l={sidebar_label:"ElementHandle.waitForSelector"},o="ElementHandle.waitForSelector() method",i={unversionedId:"api/puppeteer.elementhandle.waitforselector",id:"version-15.3.0/api/puppeteer.elementhandle.waitforselector",title:"ElementHandle.waitForSelector() method",description:"Wait for the selector to appear within the element. If at the moment of calling the method the selector already exists, the method will return immediately. If the selector doesn't appear after the timeout milliseconds of waiting, the function will throw.",source:"@site/versioned_docs/version-15.3.0/api/puppeteer.elementhandle.waitforselector.md",sourceDirName:"api",slug:"/api/puppeteer.elementhandle.waitforselector",permalink:"/15.3.0/api/puppeteer.elementhandle.waitforselector",draft:!1,tags:[],version:"15.3.0",frontMatter:{sidebar_label:"ElementHandle.waitForSelector"},sidebar:"sidebar",previous:{title:"ElementHandle.uploadFile",permalink:"/15.3.0/api/puppeteer.elementhandle.uploadfile"},next:{title:"ElementHandle.waitForSelector_1",permalink:"/15.3.0/api/puppeteer.elementhandle.waitforselector_1"}},p={},m=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],s={toc:m};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"elementhandlewaitforselector-method"},"ElementHandle.waitForSelector() method"),(0,a.kt)("p",null,"Wait for the ",(0,a.kt)("inlineCode",{parentName:"p"},"selector")," to appear within the element. If at the moment of calling the method the ",(0,a.kt)("inlineCode",{parentName:"p"},"selector")," already exists, the method will return immediately. If the ",(0,a.kt)("inlineCode",{parentName:"p"},"selector")," doesn't appear after the ",(0,a.kt)("inlineCode",{parentName:"p"},"timeout")," milliseconds of waiting, the function will throw."),(0,a.kt)("p",null,"This method does not work across navigations or if the element is detached from DOM."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class ElementHandle {\n  waitForSelector<Selector extends keyof HTMLElementTagNameMap>(\n    selector: Selector,\n    options?: Exclude<WaitForSelectorOptions, 'root'>\n  ): Promise<ElementHandle<HTMLElementTagNameMap[Selector]> | null>;\n}\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"selector"),(0,a.kt)("td",{parentName:"tr",align:null},"Selector"),(0,a.kt)("td",{parentName:"tr",align:null},"A ",(0,a.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors"},"selector")," of an element to wait for")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"options"),(0,a.kt)("td",{parentName:"tr",align:null},"Exclude","<",(0,a.kt)("a",{parentName:"td",href:"/15.3.0/api/puppeteer.waitforselectoroptions"},"WaitForSelectorOptions"),", 'root'",">"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("i",null,"(Optional)")," Optional waiting parameters")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"Promise","<",(0,a.kt)("a",{parentName:"p",href:"/15.3.0/api/puppeteer.elementhandle"},"ElementHandle"),"<","HTMLElementTagNameMap","[","Selector","]",">"," ","|"," null",">"),(0,a.kt)("p",null,"Promise which resolves when element specified by selector string is added to DOM. Resolves to ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," if waiting for hidden: ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," and selector is not found in DOM."),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"The optional parameters in ",(0,a.kt)("inlineCode",{parentName:"p"},"options")," are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"visible"),": wait for the selected element to be present in DOM and to be visible, i.e. to not have ",(0,a.kt)("inlineCode",{parentName:"p"},"display: none")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"visibility: hidden")," CSS properties. Defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"hidden"),": wait for the selected element to not be found in the DOM or to be hidden, i.e. have ",(0,a.kt)("inlineCode",{parentName:"p"},"display: none")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"visibility: hidden")," CSS properties. Defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"timeout"),": maximum time to wait in milliseconds. Defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"30000")," (30 seconds). Pass ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," to disable timeout. The default value can be changed by using the ",(0,a.kt)("a",{parentName:"p",href:"/15.3.0/api/puppeteer.page.setdefaulttimeout"},"Page.setDefaultTimeout()")," method."))))}d.isMDXComponent=!0}}]);