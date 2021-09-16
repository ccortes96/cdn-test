var e = Object.defineProperty,
  t = Object.defineProperties,
  a = Object.getOwnPropertyDescriptors,
  r = Object.getOwnPropertySymbols,
  n = Object.prototype.hasOwnProperty,
  o = Object.prototype.propertyIsEnumerable,
  i = (t, a, r) =>
    a in t
      ? e(t, a, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (t[a] = r),
  s = (e, t) => {
    for (var a in t || (t = {})) n.call(t, a) && i(e, a, t[a])
    if (r) for (var a of r(t)) o.call(t, a) && i(e, a, t[a])
    return e
  },
  l = (e, r) => t(e, a(r))
import {
  R as u,
  r as p,
  i as c,
  c as d,
  d as m,
  u as g,
  t as h,
  a as f,
  b as y,
  P as b,
  F as _,
  e as v,
  f as E
} from 'https://cdn.jsdelivr.net/gh/ccortes96/cdn-test@v0.0.2/assets/vendor.0046c8f2.js'
!(function () {
  const e = document.createElement('link').relList
  if (!(e && e.supports && e.supports('modulepreload'))) {
    for (const e of document.querySelectorAll('link[rel="modulepreload"]')) t(e)
    new MutationObserver((e) => {
      for (const a of e)
        if ('childList' === a.type)
          for (const e of a.addedNodes)
            'LINK' === e.tagName && 'modulepreload' === e.rel && t(e)
    }).observe(document, { childList: !0, subtree: !0 })
  }
  function t(e) {
    if (e.ep) return
    e.ep = !0
    const t = (function (e) {
      const t = {}
      return (
        e.integrity && (t.integrity = e.integrity),
        e.referrerpolicy && (t.referrerPolicy = e.referrerpolicy),
        'use-credentials' === e.crossorigin
          ? (t.credentials = 'include')
          : 'anonymous' === e.crossorigin
          ? (t.credentials = 'omit')
          : (t.credentials = 'same-origin'),
        t
      )
    })(e)
    fetch(e.href, t)
  }
})()
const x = {
    locale: '',
    application: { id: '', name: '', logo_url: '', metadata: {} },
    branding: { logo_url: '', colors: { primary: '', page_background: '' } },
    tenant: { friendly_name: '', support_email: '', support_url: '' },
    organization: {
      id: '',
      display_name: '',
      name: '',
      metadata: {},
      branding: { logo_url: '', colors: { primary: '', page_background: '' } }
    },
    prompt: { name: '', screen: { name: '', texts: '' } },
    user: {
      user_id: '',
      picture: '',
      email: '',
      email_verified: !0,
      app_metadata: {},
      user_metadata: {},
      family_name: '',
      given_name: '',
      name: '',
      nickname: '',
      username: ''
    }
  },
  k = [
    {
      id: 'merchant',
      domain: 'portalid.h4b.dev',
      redirectUri: 'https://portal.h4b.dev/authorize',
      scope: 'openid profile email',
      audience: 'https://portal.h4b.dev/',
      responseType: 'code',
      responseMode: 'query',
      databaseConnection: 'Username-Password-Authentication'
    },
    {
      id: 'hugo-fun-merchant',
      domain: 'portalid.h4b.dev',
      redirectUri: 'https://portal-fun.h4b.dev/authorize',
      scope: 'openid profile email',
      audience: 'https://hugo-fun-merchant',
      responseType: 'code',
      responseMode: 'query',
      databaseConnection: 'Username-Password-Authentication'
    }
  ],
  w = (e) => {
    var t
    return null == (t = document.getElementById(e)) ? void 0 : t.value
  },
  O = (e, t) => {
    const a = k.find((t) => t.id === e)
    return a
      ? {
          domain: a.domain,
          clientID: t,
          redirectUri: a.redirectUri,
          scope: a.scope,
          audience: a.audience,
          responseType: a.responseType,
          responseMode: a.responseMode
        }
      : null
  },
  P = (e) => {
    const t = k.find((t) => t.id === e)
    return (null == t ? void 0 : t.databaseConnection)
      ? t.databaseConnection
      : 'Username-Password-Authentication'
  },
  R = u.createContext(x),
  C = ({ children: e }) => {
    const [t, a] = p.exports.useState(x),
      [r, n] = p.exports.useState(null),
      [o, i] = p.exports.useState({})
    p.exports.useEffect(() => {
      a((e) =>
        l(s({}, e), {
          application: {
            name: w('auth0-app-name'),
            id: w('auth0-app-id'),
            logo_url: w('auth0-app-logo-url'),
            metadata: w('auth0-app-metadata')
          },
          branding: {
            logo_url: w('auth0-brand-logo-url'),
            colors: {
              primary: w('auth0-brand-colors-primary'),
              page_background: w('auth0-brand-colors-p-background')
            }
          },
          tenant: {
            friendly_name: w('auth0-tenat-name'),
            support_email: w('auth0-tenat-support-email'),
            support_url: w('auth0-tenat-support-url')
          },
          organization: {
            id: w('auth0-org-id'),
            display_name: w('auth0-org-display-name'),
            name: w('auth0-org-name'),
            metadata: w('auth0-org-metadata'),
            branding: {
              logo_url: w('auth0-org-brand-logo-url'),
              colors: {
                primary: w('auth0-org-brand-colors-primary'),
                page_background: w('auth0-org-brand-colors-p-background')
              }
            }
          },
          prompt: {
            name: w('auth0-prompt-name'),
            screen: {
              name: w('auth0-prompt-screen-name'),
              texts: w('auth0-prompt-screen-texts')
            }
          },
          user: {
            user_id: w('auth0-user-user-id'),
            picture: w('auth0-user-picture'),
            email: w('auth0-user-email'),
            email_verified: w('auth0-user-email-verified'),
            metadata: w('auth0-user-app-metadata'),
            user_metadata: w('auth0-user-user-metadata'),
            family_name: w('auth0-user-family-name'),
            given_name: w('auth0-user-given-name'),
            name: w('auth0-user-name'),
            nickname: w('auth0-user-nickname'),
            username: w('auth0-user-username')
          }
        })
      )
    }, [document.readyState]),
      p.exports.useEffect(() => {
        t.application.id &&
          (console.log('app info', O(t.application.name, t.application.id)),
          n(new c.WebAuth(O(t.application.name, t.application.id))))
      }, [t.application.id])
    return (
      console.log('state', t),
      u.createElement(
        R.Provider,
        {
          value: {
            state: t,
            login: (e, a) => {
              r.login(
                { realm: P(t.application.name), username: e, password: a },
                (e, t) => {
                  e && i(e),
                    console.log('{err, authResult}', { err: e, authResult: t })
                }
              )
            },
            loginError: o
          }
        },
        e
      )
    )
  }
var j = d([
  ['/', () => ({ page: 'home', title: 'Inicio', menuActive: 'home' })],
  [
    '/logout',
    () => ({ page: 'logout', title: 'Logout', menuActive: '', layout: 'empty' })
  ],
  [
    '/authorize',
    () => ({
      page: 'authorization',
      title: 'authorization',
      menuActive: '',
      layout: 'empty'
    })
  ],
  ['/configuration', () => ({ page: 'configuration', title: 'Configuración' })],
  [
    '/configuration/*',
    (e) => ({
      page: 'configuration',
      title: 'Configuración',
      props: { sectionId: e }
    })
  ],
  [
    '/configuration/*/*',
    (e, t) => ({
      page: 'configuration',
      title: 'Configuración',
      props: { sectionId: e, tabIndex: t }
    })
  ],
  [
    '/support',
    () => ({ page: 'support', title: 'Soporte', menuActive: 'support' })
  ],
  ['/terms-and-conditions', () => ({ page: 'terms' })]
])
m.extend(g), m.extend(h), m.locale('es-us')
const A = f([
    j,
    (e) => {
      e.on('@init', () => ({ modal: { callbackData: {} } })),
        e.on(
          'modal/callback',
          ({ modal: e }, { callbackKey: t, callbackData: a }) => ({
            modal: l(s({}, e), {
              callbackData: l(s({}, e.callbackData), { [t]: a })
            })
          })
        )
    },
    !1
  ]),
  I = (e) => A.dispatch(y, e)
b.elementType.isRequired,
  b.object.isRequired,
  b.shape({ picture: b.string, name: b.string }).isRequired,
  b.bool,
  b.bool
const S = ({ Component: e }) =>
  u.createElement(
    p.exports.Suspense,
    { fallback: u.createElement(_, null) },
    e ? u.createElement(e, null) : null
  )
;(S.propTypes = { Component: b.elementType.isRequired }),
  b.elementType.isRequired,
  b.string.isRequired,
  b.string.isRequired,
  b.object,
  b.elementType.isRequired
const T = {},
  q = function (e, t) {
    return t && 0 !== t.length
      ? Promise.all(
          t.map((e) => {
            if ((e = `/${e}`) in T) return
            T[e] = !0
            const t = e.endsWith('.css'),
              a = t ? '[rel="stylesheet"]' : ''
            if (document.querySelector(`link[href="${e}"]${a}`)) return
            const r = document.createElement('link')
            return (
              (r.rel = t ? 'stylesheet' : 'modulepreload'),
              t || ((r.as = 'script'), (r.crossOrigin = '')),
              (r.href = e),
              document.head.appendChild(r),
              t
                ? new Promise((e, t) => {
                    r.addEventListener('load', e),
                      r.addEventListener('error', t)
                  })
                : void 0
            )
          })
        ).then(() => e())
      : e()
  },
  D = new Map(),
  L = (e) => {
    if (D.has(e)) return D.get(e)
    let t = null
    switch (e) {
      case 'hugo-fun-merchant':
        t = p.exports.lazy(() =>
          q(
            () =>
              import(
                'https://cdn.jsdelivr.net/gh/ccortes96/cdn-test@v0.0.2/assets/index.58e222f8.js'
              ),
            [
              'https://cdn.jsdelivr.net/gh/ccortes96/cdn-test@v0.0.2/assets/index.58e222f8.js',
              'https://cdn.jsdelivr.net/gh/ccortes96/cdn-test@v0.0.2/assets/vendor.0046c8f2.js',
              'https://cdn.jsdelivr.net/gh/ccortes96/cdn-test@v0.0.2/assets/vendor.7e30b6a2.css'
            ]
          )
        )
        break
      case 'merchant':
        t = p.exports.lazy(() =>
          q(
            () =>
              import(
                'https://cdn.jsdelivr.net/gh/ccortes96/cdn-test@v0.0.2/assets/index.63d36aab.js'
              ),
            [
              'https://cdn.jsdelivr.net/gh/ccortes96/cdn-test@v0.0.2/assets/index.63d36aab.js',
              'https://cdn.jsdelivr.net/gh/ccortes96/cdn-test@v0.0.2/assets/index.d83f309d.css',
              'https://cdn.jsdelivr.net/gh/ccortes96/cdn-test@v0.0.2/assets/vendor.0046c8f2.js',
              'https://cdn.jsdelivr.net/gh/ccortes96/cdn-test@v0.0.2/assets/vendor.7e30b6a2.css'
            ]
          )
        )
        break
      default:
        t = p.exports.lazy(() =>
          q(
            () =>
              import(
                'https://cdn.jsdelivr.net/gh/ccortes96/cdn-test@v0.0.2/assets/index.a15a1918.js'
              ),
            [
              'https://cdn.jsdelivr.net/gh/ccortes96/cdn-test@v0.0.2/assets/index.a15a1918.js',
              'https://cdn.jsdelivr.net/gh/ccortes96/cdn-test@v0.0.2/assets/index.0f77893e.css',
              'https://cdn.jsdelivr.net/gh/ccortes96/cdn-test@v0.0.2/assets/vendor.0046c8f2.js',
              'https://cdn.jsdelivr.net/gh/ccortes96/cdn-test@v0.0.2/assets/vendor.7e30b6a2.css'
            ]
          )
        )
    }
    return D.set(e, t), t
  },
  z = () => {
    var e
    const [t, a] = p.exports.useState(!1),
      r = p.exports.useContext(R)
    if (
      (p.exports.useEffect(() => {
        window.unhandledrejection ||
          (window.unhandledrejection = (e) => {
            console.error(
              `UNHANDLED PROMISE REJECTION: ${JSON.stringify(e.reason)}`,
              e
            ),
              a(!0)
          })
      }, [t]),
      t)
    )
      return u.createElement(S, { Component: L('serverError') })
    const n = L(null == (e = r.state.application) ? void 0 : e.name)
    return u.createElement(S, { Component: n })
  },
  N = () =>
    u.createElement(
      u.Fragment,
      null,
      null,
      u.createElement(C, null, u.createElement(z, null))
    )
v({ environment: 'production', dsn: {}.H4B_SENTRY_DSN })
const U = document.getElementById('root')
E.render(u.createElement(N, null), U)
export { R as A, I as n }
