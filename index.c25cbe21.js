var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,o=(t,n,a)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a;import{R as r,r as d,i as m,a as i}from"./vendor.89c16b6f.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const c={locale:"",application:{id:"",name:"",logo_url:"",metadata:{}},branding:{logo_url:"",colors:{primary:"",page_background:""}},tenant:{friendly_name:"",support_email:"",support_url:""},organization:{id:"",display_name:"",name:"",metadata:{},branding:{logo_url:"",colors:{primary:"",page_background:""}}},prompt:{name:"",screen:{name:"",texts:""}},user:{user_id:"",picture:"",email:"",email_verified:!0,app_metadata:{},user_metadata:{},family_name:"",given_name:"",name:"",nickname:"",username:""}},s=r.createContext(c),p=({children:e})=>{const[m,i]=d.exports.useState(c);return d.exports.useEffect((()=>{i((e=>{var r,d,m,i,c,s,p,g,v,y,E,h,f,I,B,b,_,k,O,x,j,P,S,w,N,L,z,A,C,D,H,R,q;return R=((e,t)=>{for(var n in t||(t={}))l.call(t,n)&&o(e,n,t[n]);if(a)for(var n of a(t))u.call(t,n)&&o(e,n,t[n]);return e})({},e),q={application:{name:null==(r=document.getElementById("auth0-app-name"))?void 0:r.value,id:null==(d=document.getElementById("auth0-app-id"))?void 0:d.value,logo_url:null==(m=document.getElementById("auth0-app-logo-url"))?void 0:m.value,metadata:null==(i=document.getElementById("auth0-app-metadata"))?void 0:i.value},branding:{logo_url:null==(c=document.getElementById("auth0-brand-logo-url"))?void 0:c.value,colors:{primary:null==(s=document.getElementById("auth0-brand-colors-primary"))?void 0:s.value,page_background:null==(p=document.getElementById("auth0-brand-colors-p-background"))?void 0:p.value}},tenant:{friendly_name:null==(g=document.getElementById("auth0-tenat-name"))?void 0:g.value,support_email:null==(v=document.getElementById("auth0-tenat-support-email"))?void 0:v.value,support_url:null==(y=document.getElementById("auth0-tenat-support-url"))?void 0:y.value},organization:{id:null==(E=document.getElementById("auth0-org-id"))?void 0:E.value,display_name:null==(h=document.getElementById("auth0-org-display-name"))?void 0:h.value,name:null==(f=document.getElementById("auth0-org-name"))?void 0:f.value,metadata:null==(I=document.getElementById("auth0-org-metadata"))?void 0:I.value,branding:{logo_url:null==(B=document.getElementById("auth0-org-brand-logo-url"))?void 0:B.value,colors:{primary:null==(b=document.getElementById("auth0-org-brand-colors-primary"))?void 0:b.value,page_background:null==(_=document.getElementById("auth0-org-brand-colors-p-background"))?void 0:_.value}}},prompt:{name:null==(k=document.getElementById("auth0-prompt-name"))?void 0:k.value,screen:{name:null==(O=document.getElementById("auth0-prompt-screen-name"))?void 0:O.value,texts:null==(x=document.getElementById("auth0-prompt-screen-texts"))?void 0:x.value}},user:{user_id:null==(j=document.getElementById("auth0-user-user-id"))?void 0:j.value,picture:null==(P=document.getElementById("auth0-user-picture"))?void 0:P.value,email:null==(S=document.getElementById("auth0-user-email"))?void 0:S.value,email_verified:null==(w=document.getElementById("auth0-user-email-verified"))?void 0:w.value,metadata:null==(N=document.getElementById("auth0-user-app-metadata"))?void 0:N.value,user_metadata:null==(L=document.getElementById("auth0-user-user-metadata"))?void 0:L.value,family_name:null==(z=document.getElementById("auth0-user-family-name"))?void 0:z.value,given_name:null==(A=document.getElementById("auth0-user-given-name"))?void 0:A.value,name:null==(C=document.getElementById("auth0-user-name"))?void 0:C.value,nickname:null==(D=document.getElementById("auth0-user-nickname"))?void 0:D.value,username:null==(H=document.getElementById("auth0-user-username"))?void 0:H.value}},t(R,n(q))}))}),[document.readyState]),console.log("applicationState",m),r.createElement(s.Provider,{value:m},e)},g=()=>{const e=d.exports.useContext(s);return console.log("auth0Application",e),r.createElement("div",null,r.createElement("h1",null,"Hello ",e.application.name))},v=()=>r.createElement(r.Fragment,null,null,r.createElement(p,null,r.createElement(g,null)));m({environment:"production",dsn:{}.H4B_SENTRY_DSN});const y=document.getElementById("root");i.render(r.createElement(v,null),y);
