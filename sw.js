if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,t)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let o={};const d=e=>n(e,r),f={module:{uri:r},exports:o,require:d};i[r]=Promise.all(s.map((e=>f[e]||d(e)))).then((e=>(t(...e),o)))}}define(["./workbox-9517df1b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-93455498.js",revision:null},{url:"index.html",revision:"b7ceec9562bd8c17dfc56f97066e22a9"},{url:"registerSW.js",revision:"5f081f2da882f5e44f5272984db4d416"},{url:"manifest.webmanifest",revision:"0588d06272991dfbd391c41e338c25af"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
