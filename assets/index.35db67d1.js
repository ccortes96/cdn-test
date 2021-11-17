var e=Object.defineProperty,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,o=(t,r,n)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n,s=(e,s)=>{for(var a in s||(s={}))r.call(s,a)&&o(e,a,s[a]);if(t)for(var a of t(s))n.call(s,a)&&o(e,a,s[a]);return e};import{R as a,P as i,r as c,i as l,F as d,a as u,b as p}from"./vendor.d30c2f04.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const m={icon:"",assetsUrl:"",auth0Domain:"",auth0Tenant:"",clientConfigurationBaseUrl:"",callbackOnLocationHash:!1,callbackURL:"",cdn:"",clientID:"",dict:{signin:{title:""}},extraParams:{protocol:"",audience:"",onRedirectCallback:"",scope:"",response_type:"",response_mode:"",nonce:"",code_challenge:"",code_challenge_method:"",auth0Client:"",_csrf:"",_intstate:"",state:""},internalOptions:{protocol:"",audience:"",onRedirectCallback:"",scope:"",response_type:"",response_mode:"",nonce:"",code_challenge:"",code_challenge_method:"",auth0Client:"",_csrf:"",_intstate:"",state:""},widgetUrl:"",isThirdPartyClient:!1,authorizationServer:{url:"",issuer:""},colors:{page_background:"",primary:""}},h=[{id:"merchant",databaseConnection:"Username-Password-Authentication"},{id:"hugo-fun-merchant",databaseConnection:"Username-Password-Authentication"}],_=e=>{const t=h.find((t=>t.id===e));return(null==t?void 0:t.databaseConnection)?t.databaseConnection:"Username-Password-Authentication"},f=a.createContext(m),g=({children:e})=>{const[t,r]=c.exports.useState(m),[n,o]=c.exports.useState(null),[i,d]=c.exports.useState({code:null,description:null});c.exports.useEffect((()=>{r((e=>s(s({},e),auth0Application)))}),[document.readyState]),c.exports.useEffect((()=>{if(t.clientID){const t=(e=auth0Application,s({domain:e.auth0Domain,clientID:e.clientID,redirectUri:e.callbackURL,responseType:e.extraParams.response_type,scope:e.extraParams.scope,overrides:{__tenant:e.auth0Tenant,__token_issuer:e.extraParams.audience}},e.internalOptions));o(new l.WebAuth(s({},t)))}var e}),[t.clientID]);const u=e=>{switch(e.code){case"access_denied":case"invalid_user_password":d({code:e.code,description:"Correo o contraseña incorrecta."});break;case"invalid_signup":d({code:e.code,description:"Registro inválido."});break;case"invalid_password":"PasswordStrengthError"===e.name&&d({code:e.code,description:"Asegurate de llenar los requisitos de contraseña."});break;case"empty_fields":d({code:e.code,description:"Correo y contraseña requeridos."});break;case"empty_email":d({code:e.code,description:"Correo requerido."});break;case"password_mismatch":d({code:e.code,description:"Las contraseñas no coinciden."});break;default:d({code:"unexpected_error",description:"ocurrió un error."})}};return a.createElement(f.Provider,{value:{state:t,login:(e,r)=>{n.login({realm:_(t.dict.signin.title),username:e,password:r},((e,t)=>{e&&u(e),console.log("{err, authResult}",{err:e,authResult:t})}))},loginWithGoogle:()=>{n.authorize({connection:"google-oauth2"},((e,t)=>{e&&u(e),console.log("{err, authResult}",{err:e,authResult:t})}))},loginError:i}},e)};g.propTypes={children:i.elementType.isRequired};const y=({Component:e})=>a.createElement(c.exports.Suspense,{fallback:a.createElement(d,null)},e?a.createElement(e,null):null);y.propTypes={Component:i.elementType.isRequired};const b={},E=function(e,t){return t&&0!==t.length?Promise.all(t.map((e=>{if((e=`https://cdn.jsdelivr.net/gh/ccortes96/cdn-test@v0.0.10.1/${e}`)in b)return;b[e]=!0;const t=e.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${r}`))return;const n=document.createElement("link");return n.rel=t?"stylesheet":"modulepreload",t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t?new Promise(((e,t)=>{n.addEventListener("load",e),n.addEventListener("error",t)})):void 0}))).then((()=>e())):e()},v=new Map,x=e=>{if(v.has(e))return v.get(e);let t=null;switch(e){case"hugo-fun-merchant":t=c.exports.lazy((()=>E((()=>import("./index.f2e4b366.js")),["assets/index.f2e4b366.js","assets/index.2eb3ccbd.css","assets/vendor.d30c2f04.js","assets/vendor.7e30b6a2.css"])));break;case"merchant":t=c.exports.lazy((()=>E((()=>import("./index.71006730.js")),["assets/index.71006730.js","assets/index.8417bfca.css","assets/vendor.d30c2f04.js","assets/vendor.7e30b6a2.css"])));break;default:t=c.exports.lazy((()=>E((()=>import("./index.705d11ed.js")),["assets/index.705d11ed.js","assets/index.0f77893e.css","assets/vendor.d30c2f04.js","assets/vendor.7e30b6a2.css"])))}return v.set(e,t),t},C=()=>{const[e,t]=c.exports.useState(!1),r=c.exports.useContext(f);if(c.exports.useEffect((()=>{window.unhandledrejection||(window.unhandledrejection=e=>{console.error(`UNHANDLED PROMISE REJECTION: ${JSON.stringify(e.reason)}`,e),t(!0)})}),[e]),e)return a.createElement(y,{Component:x("serverError")});const n=x(r.state.dict.signin.title);return a.createElement(y,{Component:n})},w=()=>a.createElement(g,null,a.createElement(C,null));u({environment:"production",dsn:{H4B_CDN_URL_BASE:"https://cdn.jsdelivr.net/gh/ccortes96/cdn-test@",H4B_CDN_VERSION:"v0.0.10.1"}.H4B_SENTRY_DSN});const P=document.getElementById("root");p.render(a.createElement(w,null),P);export{f as A};
