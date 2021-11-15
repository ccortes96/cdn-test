import { r as e, R as t } from "./vendor.d30c2f04.js";
import { A as a } from "./index.b2ebb357.js";
var n = () => {
  const [n, i] = e.exports.useState(!1),
    [g, c] = e.exports.useState(""),
    [s, l] = e.exports.useState(""),
    o = e.exports.useContext(a);
  return t.createElement(
    "div",
    { className: "su2iaoy" },
    t.createElement(
      "div",
      { className: "content" },
      t.createElement("img", {
        id: "logo",
        src: "https://cdn.jsdelivr.net/gh/andreinhugo/hugo-login-assets/hugo-logo.svg",
      }),
      t.createElement(
        "form",
        { className: "form" },
        t.createElement(
          "h1",
          { id: "form-text" },
          "La forma más completa de hacer crecer tu negocio"
        ),
        t.createElement(
          "div",
          { className: "input-container" },
          t.createElement(
            "label",
            null,
            "Correo Electrónico",
            t.createElement(
              "div",
              null,
              t.createElement("input", {
                id: "email",
                type: "email",
                name: "email",
                defaultValue: g,
                onChange: (e) => c(e.target.value),
                tabIndex: "1",
              })
            )
          )
        ),
        t.createElement(
          "div",
          {
            id: "secret-container-1",
            className: "input-container pw-container",
          },
          t.createElement(
            "label",
            null,
            "Contraseña",
            t.createElement(
              "div",
              null,
              t.createElement("input", {
                id: "secret",
                type: n ? "text" : "password",
                name: "secret",
                defaultValue: s,
                onChange: (e) => l(e.target.value),
                tabIndex: "2",
              }),
              t.createElement(
                "span",
                { onClick: () => i((e) => !e) },
                t.createElement(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                    version: "1.1",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                  },
                  t.createElement("path", {
                    d: "M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z",
                  })
                )
              )
            )
          )
        ),
        t.createElement(
          "a",
          { id: "reset", tabIndex: "4" },
          "¿Olvidaste tu contraseña?"
        ),
        t.createElement(
          "button",
          {
            id: "form-btn",
            tabIndex: "5",
            type: "button",
            disabled: !g || !s,
            onClick: () => o.login(g, s),
          },
          "ingresar"
        ),
        t.createElement(
          "div",
          { className: "separator" },
          t.createElement("span", null, "O continuar con")
        ),
        t.createElement(
          "button",
          {
            className: "secondary",
            id: "google-login",
            tabIndex: "6",
            type: "button",
            onClick: () => o.loginWithGoogle(),
          },
          t.createElement("img", {
            src: "https://cdn.jsdelivr.net/gh/andreinhugo/hugo-login-assets/google.svg",
          }),
          "ingresar con google"
        )
      ),
      t.createElement("img", {
        className: "deco deco-1",
        src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMyIgaGVpZ2h0PSI5MSIgdmlld0JveD0iMCAwIDMzIDkxIj4KICAgIDxwYXRoIGZpbGw9IiNGRkRDNjciIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTS43NCA5MC4xNjJjNi44OTMtMi4zOCAxMy4wNjktNi4zIDE4LjExNi0xMS4zNDkgOC42MTgtOC42MTcgMTMuOTQ4LTIwLjUyMiAxMy45NDgtMzMuNjcyQzMyLjgwNCAyNC4zMzQgMTkuNDU5IDYuNjQ0Ljg2LjE2MmMtLjEyMiAxMC45NTUuMTk3IDc2LjY4LS4xMjIgOTB6Ii8+Cjwvc3ZnPgo=",
      }),
      t.createElement("img", {
        className: "deco deco-2",
        src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTciIGhlaWdodD0iMTEzIiB2aWV3Qm94PSIwIDAgMTE3IDExMyI+CiAgICA8cGF0aCBmaWxsPSIjM0ZFMUM3IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMTYuMDA3LTEuMjcybC4wNTMgMTAyLjQ0NmMuMDAzIDYuMDc1LTQuOTIgMTEuMDAzLTEwLjk5NSAxMS4wMDYtMi4xOTQuMDAxLTQuMzM4LS42NTQtNi4xNTctMS44OEw0Ljk4IDQ2Ljk0MmMtNS4wMzYtMy4zOTctNi4zNjUtMTAuMjM0LTIuOTY4LTE1LjI3TDI0LjEwNS0xLjA4M2w5MS45MDItLjE4OXoiLz4KPC9zdmc+Cg==",
      }),
      t.createElement("img", {
        className: "deco deco-3",
        src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTIyIiBoZWlnaHQ9IjEzMSIgdmlld0JveD0iMCAwIDEyMiAxMzEiPgogICAgPGRlZnM+CiAgICAgICAgPHBhdGggaWQ9InByZWZpeF9fYSIgZD0iTTAgMEgxMjJWMTMxSDB6Ii8+CiAgICA8L2RlZnM+CiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxtYXNrIGlkPSJwcmVmaXhfX2IiIGZpbGw9IiNmZmYiPgogICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwcmVmaXhfX2EiLz4KICAgICAgICA8L21hc2s+CiAgICAgICAgPHVzZSBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9Ii4wMSIgeGxpbms6aHJlZj0iI3ByZWZpeF9fYSIvPgogICAgICAgIDxjaXJjbGUgY3g9IjYxLjExMSIgY3k9IjYxLjExMSIgcj0iNTEuMTExIiBzdHJva2U9IiNmMjgzNWQiIHN0cm9rZS13aWR0aD0iMjAiIG1hc2s9InVybCgjcHJlZml4X19iKSIvPgogICAgPC9nPgo8L3N2Zz4K",
      })
    ),
    t.createElement(
      "aside",
      null,
      t.createElement(
        "picture",
        null,
        t.createElement("source", {
          media:
            "https://cdn.jsdelivr.net/gh/andreinhugo/hugo-login-assets/hugo-bg-800.png",
        }),
        t.createElement("source", {
          media: "(min-width: 1281px) and (max-width: 2500px)",
          srcSet:
            "\n              https://cdn.jsdelivr.net/gh/andreinhugo/hugo-login-assets/hugo-bg-1200.png\n            ",
        }),
        t.createElement("source", {
          media: "(min-width: 2501px)",
          srcSet:
            "\n              https://cdn.jsdelivr.net/gh/andreinhugo/hugo-login-assets/hugo-bg-2500.png\n            ",
        }),
        t.createElement("img", {
          src: "https://cdn.jsdelivr.net/gh/andreinhugo/hugo-login-assets/hugo-bg-800.png",
        })
      )
    )
  );
};
export { n as default };