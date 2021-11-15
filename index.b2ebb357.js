var e = Object.defineProperty,
  t = Object.getOwnPropertySymbols,
  n = Object.prototype.hasOwnProperty,
  r = Object.prototype.propertyIsEnumerable,
  o = (t, n, r) =>
    n in t
      ? e(t, n, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (t[n] = r),
  s = (e, s) => {
    for (var a in s || (s = {})) n.call(s, a) && o(e, a, s[a]);
    if (t) for (var a of t(s)) r.call(s, a) && o(e, a, s[a]);
    return e;
  };
import {
  R as a,
  P as i,
  r as l,
  i as c,
  F as d,
  a as u,
  b as p,
} from "./vendor.d30c2f04.js";
!(function () {
  const e = document.createElement("link").relList;
  if (!(e && e.supports && e.supports("modulepreload"))) {
    for (const e of document.querySelectorAll('link[rel="modulepreload"]'))
      t(e);
    new MutationObserver((e) => {
      for (const n of e)
        if ("childList" === n.type)
          for (const e of n.addedNodes)
            "LINK" === e.tagName && "modulepreload" === e.rel && t(e);
    }).observe(document, { childList: !0, subtree: !0 });
  }
  function t(e) {
    if (e.ep) return;
    e.ep = !0;
    const t = (function (e) {
      const t = {};
      return (
        e.integrity && (t.integrity = e.integrity),
        e.referrerpolicy && (t.referrerPolicy = e.referrerpolicy),
        "use-credentials" === e.crossorigin
          ? (t.credentials = "include")
          : "anonymous" === e.crossorigin
          ? (t.credentials = "omit")
          : (t.credentials = "same-origin"),
        t
      );
    })(e);
    fetch(e.href, t);
  }
})();
const h = {
    icon: "",
    assetsUrl: "",
    auth0Domain: "",
    auth0Tenant: "",
    clientConfigurationBaseUrl: "",
    callbackOnLocationHash: !1,
    callbackURL: "",
    cdn: "",
    clientID: "",
    dict: { signin: { title: "" } },
    extraParams: {
      protocol: "",
      audience: "",
      onRedirectCallback: "",
      scope: "",
      response_type: "",
      response_mode: "",
      nonce: "",
      code_challenge: "",
      code_challenge_method: "",
      auth0Client: "",
      _csrf: "",
      _intstate: "",
      state: "",
    },
    internalOptions: {
      protocol: "",
      audience: "",
      onRedirectCallback: "",
      scope: "",
      response_type: "",
      response_mode: "",
      nonce: "",
      code_challenge: "",
      code_challenge_method: "",
      auth0Client: "",
      _csrf: "",
      _intstate: "",
      state: "",
    },
    widgetUrl: "",
    isThirdPartyClient: !1,
    authorizationServer: { url: "", issuer: "" },
    colors: { page_background: "", primary: "" },
  },
  m = [
    {
      id: "merchant",
      domain: "portalid.h4b.dev",
      redirectUri: "https://portal.h4b.dev/authorize",
      scope: "openid profile email",
      audience: "https://portal.h4b.dev/",
      responseType: "code",
      responseMode: "query",
      databaseConnection: "Username-Password-Authentication",
    },
    {
      id: "hugo-fun-merchant",
      domain: "portalid.h4b.dev",
      redirectUri: "https://portal-fun.h4b.dev/authorize",
      scope: "openid profile email",
      audience: "https://hugo-fun-merchant",
      responseType: "code",
      responseMode: "query",
      databaseConnection: "Username-Password-Authentication",
    },
  ],
  f = (e) => {
    const t = m.find((t) => t.id === e);
    return (null == t ? void 0 : t.databaseConnection)
      ? t.databaseConnection
      : "Username-Password-Authentication";
  },
  g = a.createContext(h),
  y = ({ children: e }) => {
    const [t, n] = l.exports.useState(h),
      [r, o] = l.exports.useState(null),
      [i, d] = l.exports.useState({});
    l.exports.useEffect(() => {
      n((e) => s(s({}, e), auth0Application));
    }, [document.readyState]),
      l.exports.useEffect(() => {
        if (t.clientID) {
          const t =
            ((e = auth0Application),
            s(
              {
                domain: e.auth0Domain,
                clientID: e.clientID,
                redirectUri: e.callbackURL,
                responseType: "code",
                scope: "openid profile email",
                overrides: {
                  __tenant: "h4b-dev-merchant",
                  __token_issuer: "https://portalid.h4b.dev/",
                },
              },
              e.internalOptions
            ));
          o(new c.WebAuth(s({}, t)));
        }
        var e;
      }, [t.clientID]);
    return a.createElement(
      g.Provider,
      {
        value: {
          state: t,
          login: (e, n) => {
            r.login(
              { realm: f(t.dict.signin.title), username: e, password: n },
              (e, t) => {
                e && d(e),
                  console.log("{err, authResult}", { err: e, authResult: t });
              }
            );
          },
          loginWithGoogle: () => {
            r.authorize({ connection: "google-oauth2" }, (e, t) => {
              e && d(e),
                console.log("{err, authResult}", { err: e, authResult: t });
            });
          },
          loginError: i,
        },
      },
      e
    );
  };
y.propTypes = { children: i.elementType.isRequired };
const _ = ({ Component: e }) =>
  a.createElement(
    l.exports.Suspense,
    { fallback: a.createElement(d, null) },
    e ? a.createElement(e, null) : null
  );
_.propTypes = { Component: i.elementType.isRequired };
const b = {},
  E = function (e, t) {
    return t && 0 !== t.length
      ? Promise.all(
          t.map((e) => {
            if (
              (e = `https://cdn.jsdelivr.net/gh/ccortes96/cdn-test@v0.0.9/${e}`) in
              b
            )
              return;
            b[e] = !0;
            const t = e.endsWith(".css"),
              n = t ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${e}"]${n}`)) return;
            const r = document.createElement("link");
            return (
              (r.rel = t ? "stylesheet" : "modulepreload"),
              t || ((r.as = "script"), (r.crossOrigin = "")),
              (r.href = e),
              document.head.appendChild(r),
              t
                ? new Promise((e, t) => {
                    r.addEventListener("load", e),
                      r.addEventListener("error", t);
                  })
                : void 0
            );
          })
        ).then(() => e())
      : e();
  },
  v = new Map(),
  x = (e) => {
    if (v.has(e)) return v.get(e);
    let t = null;
    switch (e) {
      case "hugo-fun-merchant":
        t = l.exports.lazy(() =>
          E(
            () => import("./index.a4510e55.js"),
            [
              "assets/index.a4510e55.js",
              "assets/vendor.d30c2f04.js",
              "assets/vendor.7e30b6a2.css",
            ]
          )
        );
        break;
      case "merchant":
        t = l.exports.lazy(() =>
          E(
            () => import("./index.be0a5f5e.js"),
            [
              "assets/index.be0a5f5e.js",
              "assets/index.d83f309d.css",
              "assets/vendor.d30c2f04.js",
              "assets/vendor.7e30b6a2.css",
            ]
          )
        );
        break;
      default:
        t = l.exports.lazy(() =>
          E(
            () => import("./index.705d11ed.js"),
            [
              "assets/index.705d11ed.js",
              "assets/index.0f77893e.css",
              "assets/vendor.d30c2f04.js",
              "assets/vendor.7e30b6a2.css",
            ]
          )
        );
    }
    return v.set(e, t), t;
  },
  C = () => {
    const [e, t] = l.exports.useState(!1),
      n = l.exports.useContext(g);
    if (
      (l.exports.useEffect(() => {
        window.unhandledrejection ||
          (window.unhandledrejection = (e) => {
            console.error(
              `UNHANDLED PROMISE REJECTION: ${JSON.stringify(e.reason)}`,
              e
            ),
              t(!0);
          });
      }, [e]),
      e)
    )
      return a.createElement(_, { Component: x("serverError") });
    const r = x(n.state.dict.signin.title);
    return a.createElement(_, { Component: r });
  },
  w = () => a.createElement(y, null, a.createElement(C, null));
u({ environment: "production", dsn: {}.H4B_SENTRY_DSN });
const O = document.getElementById("root");
p.render(a.createElement(w, null), O);
export { g as A };
