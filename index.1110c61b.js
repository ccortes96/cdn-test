var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,i=(t,r,n)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n;import{R as c,r as a,i as s,a as u}from"./vendor.89c16b6f.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const d=c.createContext({id:"",name:""}),p=({children:e})=>{const[s,u]=a.exports.useState({id:"",name:""});return a.exports.useEffect((()=>{u((e=>{var c,a,s,u;return s=((e,t)=>{for(var r in t||(t={}))o.call(t,r)&&i(e,r,t[r]);if(n)for(var r of n(t))l.call(t,r)&&i(e,r,t[r]);return e})({},e),u={name:null==(c=document.getElementById("auth0-app-name"))?void 0:c.value,id:null==(a=document.getElementById("auth0-app-id"))?void 0:a.value},t(s,r(u))}))}),[document.readyState]),console.log("applicationState",s),c.createElement(d.Provider,{value:s},e)},m=()=>{const e=a.exports.useContext(d);return console.log("auth0Application",e),a.exports.useEffect((()=>{window.addEventListener("load",(()=>{console.log("Auth0 Config",JSON.parse(decodeURIComponent(escape(window.atob("@@config@@")))))}))}),[window]),c.createElement("div",null,c.createElement("h1",null,"Hello ",e.name))},f=()=>c.createElement(c.Fragment,null,null,c.createElement(p,null,c.createElement(m,null)));s({environment:"production",dsn:{}.H4B_SENTRY_DSN});const y=document.getElementById("root");u.render(c.createElement(f,null),y);
