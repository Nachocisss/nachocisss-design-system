import ae, { useDebugValue as ut, createElement as rr, useRef as nr, useContext as or } from "react";
var Re = { exports: {} }, ge = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lt;
function ar() {
  if (lt) return ge;
  lt = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(n, o, a) {
    var i = null;
    if (a !== void 0 && (i = "" + a), o.key !== void 0 && (i = "" + o.key), "key" in o) {
      a = {};
      for (var u in o)
        u !== "key" && (a[u] = o[u]);
    } else a = o;
    return o = a.ref, {
      $$typeof: e,
      type: n,
      key: i,
      ref: o !== void 0 ? o : null,
      props: a
    };
  }
  return ge.Fragment = t, ge.jsx = r, ge.jsxs = r, ge;
}
var ye = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pt;
function sr() {
  return pt || (pt = 1, process.env.NODE_ENV !== "production" && function() {
    function e(s) {
      if (s == null) return null;
      if (typeof s == "function")
        return s.$$typeof === Be ? null : s.displayName || s.name || null;
      if (typeof s == "string") return s;
      switch (s) {
        case R:
          return "Fragment";
        case P:
          return "Profiler";
        case I:
          return "StrictMode";
        case A:
          return "Suspense";
        case h:
          return "SuspenseList";
        case G:
          return "Activity";
      }
      if (typeof s == "object")
        switch (typeof s.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), s.$$typeof) {
          case k:
            return "Portal";
          case S:
            return (s.displayName || "Context") + ".Provider";
          case _:
            return (s._context.displayName || "Context") + ".Consumer";
          case E:
            var l = s.render;
            return s = s.displayName, s || (s = l.displayName || l.name || "", s = s !== "" ? "ForwardRef(" + s + ")" : "ForwardRef"), s;
          case p:
            return l = s.displayName || null, l !== null ? l : e(s.type) || "Memo";
          case L:
            l = s._payload, s = s._init;
            try {
              return e(s(l));
            } catch {
            }
        }
      return null;
    }
    function t(s) {
      return "" + s;
    }
    function r(s) {
      try {
        t(s);
        var l = !1;
      } catch {
        l = !0;
      }
      if (l) {
        l = console;
        var f = l.error, C = typeof Symbol == "function" && Symbol.toStringTag && s[Symbol.toStringTag] || s.constructor.name || "Object";
        return f.call(
          l,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          C
        ), t(s);
      }
    }
    function n(s) {
      if (s === R) return "<>";
      if (typeof s == "object" && s !== null && s.$$typeof === L)
        return "<...>";
      try {
        var l = e(s);
        return l ? "<" + l + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var s = fe.A;
      return s === null ? null : s.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function i(s) {
      if (we.call(s, "key")) {
        var l = Object.getOwnPropertyDescriptor(s, "key").get;
        if (l && l.isReactWarning) return !1;
      }
      return s.key !== void 0;
    }
    function u(s, l) {
      function f() {
        Ee || (Ee = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          l
        ));
      }
      f.isReactWarning = !0, Object.defineProperty(s, "key", {
        get: f,
        configurable: !0
      });
    }
    function c() {
      var s = e(this.type);
      return ke[s] || (ke[s] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), s = this.props.ref, s !== void 0 ? s : null;
    }
    function b(s, l, f, C, z, j, B, U) {
      return f = j.ref, s = {
        $$typeof: y,
        type: s,
        key: l,
        props: j,
        _owner: z
      }, (f !== void 0 ? f : null) !== null ? Object.defineProperty(s, "ref", {
        enumerable: !1,
        get: c
      }) : Object.defineProperty(s, "ref", { enumerable: !1, value: null }), s._store = {}, Object.defineProperty(s._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(s, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(s, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: B
      }), Object.defineProperty(s, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: U
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    }
    function v(s, l, f, C, z, j, B, U) {
      var T = l.children;
      if (T !== void 0)
        if (C)
          if (Se(T)) {
            for (C = 0; C < T.length; C++)
              m(T[C]);
            Object.freeze && Object.freeze(T);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else m(T);
      if (we.call(l, "key")) {
        T = e(s);
        var D = Object.keys(l).filter(function(ne) {
          return ne !== "key";
        });
        C = 0 < D.length ? "{key: someKey, " + D.join(": ..., ") + ": ...}" : "{key: someKey}", M[T + C] || (D = 0 < D.length ? "{" + D.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          C,
          T,
          D,
          T
        ), M[T + C] = !0);
      }
      if (T = null, f !== void 0 && (r(f), T = "" + f), i(l) && (r(l.key), T = "" + l.key), "key" in l) {
        f = {};
        for (var X in l)
          X !== "key" && (f[X] = l[X]);
      } else f = l;
      return T && u(
        f,
        typeof s == "function" ? s.displayName || s.name || "Unknown" : s
      ), b(
        s,
        T,
        j,
        z,
        o(),
        f,
        B,
        U
      );
    }
    function m(s) {
      typeof s == "object" && s !== null && s.$$typeof === y && s._store && (s._store.validated = 1);
    }
    var g = ae, y = Symbol.for("react.transitional.element"), k = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), I = Symbol.for("react.strict_mode"), P = Symbol.for("react.profiler"), _ = Symbol.for("react.consumer"), S = Symbol.for("react.context"), E = Symbol.for("react.forward_ref"), A = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), L = Symbol.for("react.lazy"), G = Symbol.for("react.activity"), Be = Symbol.for("react.client.reference"), fe = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, we = Object.prototype.hasOwnProperty, Se = Array.isArray, he = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      "react-stack-bottom-frame": function(s) {
        return s();
      }
    };
    var Ee, ke = {}, re = g["react-stack-bottom-frame"].bind(
      g,
      a
    )(), me = he(n(a)), M = {};
    ye.Fragment = R, ye.jsx = function(s, l, f, C, z) {
      var j = 1e4 > fe.recentlyCreatedOwnerStacks++;
      return v(
        s,
        l,
        f,
        !1,
        C,
        z,
        j ? Error("react-stack-top-frame") : re,
        j ? he(n(s)) : me
      );
    }, ye.jsxs = function(s, l, f, C, z) {
      var j = 1e4 > fe.recentlyCreatedOwnerStacks++;
      return v(
        s,
        l,
        f,
        !0,
        C,
        z,
        j ? Error("react-stack-top-frame") : re,
        j ? he(n(s)) : me
      );
    };
  }()), ye;
}
var dt;
function ir() {
  return dt || (dt = 1, process.env.NODE_ENV === "production" ? Re.exports = ar() : Re.exports = sr()), Re.exports;
}
var cr = ir(), $ = function() {
  return $ = Object.assign || function(t) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
    }
    return t;
  }, $.apply(this, arguments);
};
function ee(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, o = t.length, a; n < o; n++)
    (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function ur(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var lr = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, pr = /* @__PURE__ */ ur(
  function(e) {
    return lr.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), x = "-ms-", be = "-moz-", w = "-webkit-", Pt = "comm", Me = "rule", ot = "decl", dr = "@import", Ct = "@keyframes", fr = "@layer", Nt = Math.abs, at = String.fromCharCode, He = Object.assign;
function hr(e, t) {
  return O(e, 0) ^ 45 ? (((t << 2 ^ O(e, 0)) << 2 ^ O(e, 1)) << 2 ^ O(e, 2)) << 2 ^ O(e, 3) : 0;
}
function Ot(e) {
  return e.trim();
}
function W(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function d(e, t, r) {
  return e.replace(t, r);
}
function Pe(e, t, r) {
  return e.indexOf(t, r);
}
function O(e, t) {
  return e.charCodeAt(t) | 0;
}
function se(e, t, r) {
  return e.slice(t, r);
}
function V(e) {
  return e.length;
}
function It(e) {
  return e.length;
}
function ve(e, t) {
  return t.push(e), e;
}
function mr(e, t) {
  return e.map(t).join("");
}
function ft(e, t) {
  return e.filter(function(r) {
    return !W(r, t);
  });
}
var ze = 1, ie = 1, jt = 0, F = 0, N = 0, pe = "";
function Fe(e, t, r, n, o, a, i, u) {
  return { value: e, root: t, parent: r, type: n, props: o, children: a, line: ze, column: ie, length: i, return: "", siblings: u };
}
function H(e, t) {
  return He(Fe("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function oe(e) {
  for (; e.root; )
    e = H(e.root, { children: [e] });
  ve(e, e.siblings);
}
function gr() {
  return N;
}
function yr() {
  return N = F > 0 ? O(pe, --F) : 0, ie--, N === 10 && (ie = 1, ze--), N;
}
function Y() {
  return N = F < jt ? O(pe, F++) : 0, ie++, N === 10 && (ie = 1, ze++), N;
}
function K() {
  return O(pe, F);
}
function Ce() {
  return F;
}
function Le(e, t) {
  return se(pe, e, t);
}
function Xe(e) {
  switch (e) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function vr(e) {
  return ze = ie = 1, jt = V(pe = e), F = 0, [];
}
function br(e) {
  return pe = "", e;
}
function We(e) {
  return Ot(Le(F - 1, Je(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function wr(e) {
  for (; (N = K()) && N < 33; )
    Y();
  return Xe(e) > 2 || Xe(N) > 3 ? "" : " ";
}
function Sr(e, t) {
  for (; --t && Y() && !(N < 48 || N > 102 || N > 57 && N < 65 || N > 70 && N < 97); )
    ;
  return Le(e, Ce() + (t < 6 && K() == 32 && Y() == 32));
}
function Je(e) {
  for (; Y(); )
    switch (N) {
      // ] ) " '
      case e:
        return F;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && Je(N);
        break;
      // (
      case 40:
        e === 41 && Je(e);
        break;
      // \
      case 92:
        Y();
        break;
    }
  return F;
}
function Er(e, t) {
  for (; Y() && e + N !== 57; )
    if (e + N === 84 && K() === 47)
      break;
  return "/*" + Le(t, F - 1) + "*" + at(e === 47 ? e : Y());
}
function kr(e) {
  for (; !Xe(K()); )
    Y();
  return Le(e, F);
}
function Rr(e) {
  return br(Ne("", null, null, null, [""], e = vr(e), 0, [0], e));
}
function Ne(e, t, r, n, o, a, i, u, c) {
  for (var b = 0, v = 0, m = i, g = 0, y = 0, k = 0, R = 1, I = 1, P = 1, _ = 0, S = "", E = o, A = a, h = n, p = S; I; )
    switch (k = _, _ = Y()) {
      // (
      case 40:
        if (k != 108 && O(p, m - 1) == 58) {
          Pe(p += d(We(_), "&", "&\f"), "&\f", Nt(b ? u[b - 1] : 0)) != -1 && (P = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        p += We(_);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        p += wr(k);
        break;
      // \
      case 92:
        p += Sr(Ce() - 1, 7);
        continue;
      // /
      case 47:
        switch (K()) {
          case 42:
          case 47:
            ve(xr(Er(Y(), Ce()), t, r, c), c);
            break;
          default:
            p += "/";
        }
        break;
      // {
      case 123 * R:
        u[b++] = V(p) * P;
      // } ; \0
      case 125 * R:
      case 59:
      case 0:
        switch (_) {
          // \0 }
          case 0:
          case 125:
            I = 0;
          // ;
          case 59 + v:
            P == -1 && (p = d(p, /\f/g, "")), y > 0 && V(p) - m && ve(y > 32 ? mt(p + ";", n, r, m - 1, c) : mt(d(p, " ", "") + ";", n, r, m - 2, c), c);
            break;
          // @ ;
          case 59:
            p += ";";
          // { rule/at-rule
          default:
            if (ve(h = ht(p, t, r, b, v, o, u, S, E = [], A = [], m, a), a), _ === 123)
              if (v === 0)
                Ne(p, t, h, h, E, a, m, u, A);
              else
                switch (g === 99 && O(p, 3) === 110 ? 100 : g) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ne(e, h, h, n && ve(ht(e, h, h, 0, 0, o, u, S, o, E = [], m, A), A), o, A, m, u, n ? E : A);
                    break;
                  default:
                    Ne(p, h, h, h, [""], A, 0, u, A);
                }
        }
        b = v = y = 0, R = P = 1, S = p = "", m = i;
        break;
      // :
      case 58:
        m = 1 + V(p), y = k;
      default:
        if (R < 1) {
          if (_ == 123)
            --R;
          else if (_ == 125 && R++ == 0 && yr() == 125)
            continue;
        }
        switch (p += at(_), _ * R) {
          // &
          case 38:
            P = v > 0 ? 1 : (p += "\f", -1);
            break;
          // ,
          case 44:
            u[b++] = (V(p) - 1) * P, P = 1;
            break;
          // @
          case 64:
            K() === 45 && (p += We(Y())), g = K(), v = m = V(S = p += kr(Ce())), _++;
            break;
          // -
          case 45:
            k === 45 && V(p) == 2 && (R = 0);
        }
    }
  return a;
}
function ht(e, t, r, n, o, a, i, u, c, b, v, m) {
  for (var g = o - 1, y = o === 0 ? a : [""], k = It(y), R = 0, I = 0, P = 0; R < n; ++R)
    for (var _ = 0, S = se(e, g + 1, g = Nt(I = i[R])), E = e; _ < k; ++_)
      (E = Ot(I > 0 ? y[_] + " " + S : d(S, /&\f/g, y[_]))) && (c[P++] = E);
  return Fe(e, t, r, o === 0 ? Me : u, c, b, v, m);
}
function xr(e, t, r, n) {
  return Fe(e, t, r, Pt, at(gr()), se(e, 2, -2), 0, n);
}
function mt(e, t, r, n, o) {
  return Fe(e, t, r, ot, se(e, 0, n), se(e, n + 1, -1), n, o);
}
function Dt(e, t, r) {
  switch (hr(e, t)) {
    // color-adjust
    case 5103:
      return w + "print-" + e + e;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return w + e + e;
    // tab-size
    case 4789:
      return be + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return w + e + be + e + x + e + e;
    // writing-mode
    case 5936:
      switch (O(e, t + 11)) {
        // vertical-l(r)
        case 114:
          return w + e + x + d(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return w + e + x + d(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return w + e + x + d(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return w + e + x + e + e;
    // order
    case 6165:
      return w + e + x + "flex-" + e + e;
    // align-items
    case 5187:
      return w + e + d(e, /(\w+).+(:[^]+)/, w + "box-$1$2" + x + "flex-$1$2") + e;
    // align-self
    case 5443:
      return w + e + x + "flex-item-" + d(e, /flex-|-self/g, "") + (W(e, /flex-|baseline/) ? "" : x + "grid-row-" + d(e, /flex-|-self/g, "")) + e;
    // align-content
    case 4675:
      return w + e + x + "flex-line-pack" + d(e, /align-content|flex-|-self/g, "") + e;
    // flex-shrink
    case 5548:
      return w + e + x + d(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return w + e + x + d(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return w + "box-" + d(e, "-grow", "") + w + e + x + d(e, "grow", "positive") + e;
    // transition
    case 4554:
      return w + d(e, /([^-])(transform)/g, "$1" + w + "$2") + e;
    // cursor
    case 6187:
      return d(d(d(e, /(zoom-|grab)/, w + "$1"), /(image-set)/, w + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return d(e, /(image-set\([^]*)/, w + "$1$`$1");
    // justify-content
    case 4968:
      return d(d(e, /(.+:)(flex-)?(.*)/, w + "box-pack:$3" + x + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + w + e + e;
    // justify-self
    case 4200:
      if (!W(e, /flex-|baseline/)) return x + "grid-column-align" + se(e, t) + e;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return x + d(e, "template-", "") + e;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return r && r.some(function(n, o) {
        return t = o, W(n.props, /grid-\w+-end/);
      }) ? ~Pe(e + (r = r[t].value), "span", 0) ? e : x + d(e, "-start", "") + e + x + "grid-row-span:" + (~Pe(r, "span", 0) ? W(r, /\d+/) : +W(r, /\d+/) - +W(e, /\d+/)) + ";" : x + d(e, "-start", "") + e;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return r && r.some(function(n) {
        return W(n.props, /grid-\w+-start/);
      }) ? e : x + d(d(e, "-end", "-span"), "span ", "") + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return d(e, /(.+)-inline(.+)/, w + "$1$2") + e;
    // (min|max)?(width|height|inline-size|block-size)
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (V(e) - 1 - t > 6)
        switch (O(e, t + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (O(e, t + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return d(e, /(.+:)(.+)-([^]+)/, "$1" + w + "$2-$3$1" + be + (O(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          // (s)tretch
          case 115:
            return ~Pe(e, "stretch", 0) ? Dt(d(e, "stretch", "fill-available"), t, r) + e : e;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return d(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(n, o, a, i, u, c, b) {
        return x + o + ":" + a + b + (i ? x + o + "-span:" + (u ? c : +c - +a) + b : "") + e;
      });
    // position: sticky
    case 4949:
      if (O(e, t + 6) === 121)
        return d(e, ":", ":" + w) + e;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (O(e, O(e, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return d(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + w + (O(e, 14) === 45 ? "inline-" : "") + "box$3$1" + w + "$2$3$1" + x + "$2box$3") + e;
        // (inline-)?gri(d)
        case 100:
          return d(e, ":", ":" + x) + e;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return d(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function je(e, t) {
  for (var r = "", n = 0; n < e.length; n++)
    r += t(e[n], n, e, t) || "";
  return r;
}
function _r(e, t, r, n) {
  switch (e.type) {
    case fr:
      if (e.children.length) break;
    case dr:
    case ot:
      return e.return = e.return || e.value;
    case Pt:
      return "";
    case Ct:
      return e.return = e.value + "{" + je(e.children, n) + "}";
    case Me:
      if (!V(e.value = e.props.join(","))) return "";
  }
  return V(r = je(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function Ar(e) {
  var t = It(e);
  return function(r, n, o, a) {
    for (var i = "", u = 0; u < t; u++)
      i += e[u](r, n, o, a) || "";
    return i;
  };
}
function Tr(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Pr(e, t, r, n) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case ot:
        e.return = Dt(e.value, e.length, r);
        return;
      case Ct:
        return je([H(e, { value: d(e.value, "@", "@" + w) })], n);
      case Me:
        if (e.length)
          return mr(r = e.props, function(o) {
            switch (W(o, n = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                oe(H(e, { props: [d(o, /:(read-\w+)/, ":" + be + "$1")] })), oe(H(e, { props: [o] })), He(e, { props: ft(r, n) });
                break;
              // :placeholder
              case "::placeholder":
                oe(H(e, { props: [d(o, /:(plac\w+)/, ":" + w + "input-$1")] })), oe(H(e, { props: [d(o, /:(plac\w+)/, ":" + be + "$1")] })), oe(H(e, { props: [d(o, /:(plac\w+)/, x + "input-$1")] })), oe(H(e, { props: [o] })), He(e, { props: ft(r, n) });
                break;
            }
            return "";
          });
    }
}
var Cr = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, te = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", $t = "active", Mt = "data-styled-version", Ye = "6.1.17", st = `/*!sc*/
`, De = typeof window < "u" && "HTMLElement" in window, Nr = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), gt = /invalid hook call/i, xe = /* @__PURE__ */ new Set(), Or = function(e, t) {
  if (process.env.NODE_ENV !== "production") {
    var r = t ? ' with the id of "'.concat(t, '"') : "", n = "The component ".concat(e).concat(r, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, o = console.error;
    try {
      var a = !0;
      console.error = function(i) {
        for (var u = [], c = 1; c < arguments.length; c++) u[c - 1] = arguments[c];
        gt.test(i) ? (a = !1, xe.delete(n)) : o.apply(void 0, ee([i], u, !1));
      }, nr(), a && !xe.has(n) && (console.warn(n), xe.add(n));
    } catch (i) {
      gt.test(i.message) && xe.delete(n);
    } finally {
      console.error = o;
    }
  }
}, Ve = Object.freeze([]), ce = Object.freeze({});
function Ir(e, t, r) {
  return r === void 0 && (r = ce), e.theme !== r.theme && e.theme || t || r.theme;
}
var Ze = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), jr = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Dr = /(^-|-$)/g;
function yt(e) {
  return e.replace(jr, "-").replace(Dr, "");
}
var $r = /(a)(d)/gi, _e = 52, vt = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Ke(e) {
  var t, r = "";
  for (t = Math.abs(e); t > _e; t = t / _e | 0) r = vt(t % _e) + r;
  return (vt(t % _e) + r).replace($r, "$1-$2");
}
var Ge, zt = 5381, J = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, Ft = function(e) {
  return J(zt, e);
};
function Lt(e) {
  return Ke(Ft(e) >>> 0);
}
function Yt(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Ue(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Vt = typeof Symbol == "function" && Symbol.for, Bt = Vt ? Symbol.for("react.memo") : 60115, Mr = Vt ? Symbol.for("react.forward_ref") : 60112, zr = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, Fr = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Wt = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Lr = ((Ge = {})[Mr] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Ge[Bt] = Wt, Ge);
function bt(e) {
  return ("type" in (t = e) && t.type.$$typeof) === Bt ? Wt : "$$typeof" in e ? Lr[e.$$typeof] : zr;
  var t;
}
var Yr = Object.defineProperty, Vr = Object.getOwnPropertyNames, wt = Object.getOwnPropertySymbols, Br = Object.getOwnPropertyDescriptor, Wr = Object.getPrototypeOf, St = Object.prototype;
function Gt(e, t, r) {
  if (typeof t != "string") {
    if (St) {
      var n = Wr(t);
      n && n !== St && Gt(e, n, r);
    }
    var o = Vr(t);
    wt && (o = o.concat(wt(t)));
    for (var a = bt(e), i = bt(t), u = 0; u < o.length; ++u) {
      var c = o[u];
      if (!(c in Fr || r && r[c] || i && c in i || a && c in a)) {
        var b = Br(t, c);
        try {
          Yr(e, c, b);
        } catch {
        }
      }
    }
  }
  return e;
}
function ue(e) {
  return typeof e == "function";
}
function it(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function Z(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function Qe(e, t) {
  if (e.length === 0) return "";
  for (var r = e[0], n = 1; n < e.length; n++) r += e[n];
  return r;
}
function le(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function et(e, t, r) {
  if (r === void 0 && (r = !1), !r && !le(e) && !Array.isArray(e)) return t;
  if (Array.isArray(t)) for (var n = 0; n < t.length; n++) e[n] = et(e[n], t[n]);
  else if (le(t)) for (var n in t) e[n] = et(e[n], t[n]);
  return e;
}
function ct(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var Gr = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, 18: "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`" } : {};
function Ur() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  for (var r = e[0], n = [], o = 1, a = e.length; o < a; o += 1) n.push(e[o]);
  return n.forEach(function(i) {
    r = r.replace(/%[a-z]/, i);
  }), r;
}
function de(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(Ur.apply(void 0, ee([Gr[e]], t, !1)).trim());
}
var qr = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  return e.prototype.indexOfGroup = function(t) {
    for (var r = 0, n = 0; n < t; n++) r += this.groupSizes[n];
    return r;
  }, e.prototype.insertRules = function(t, r) {
    if (t >= this.groupSizes.length) {
      for (var n = this.groupSizes, o = n.length, a = o; t >= a; ) if ((a <<= 1) < 0) throw de(16, "".concat(t));
      this.groupSizes = new Uint32Array(a), this.groupSizes.set(n), this.length = a;
      for (var i = o; i < a; i++) this.groupSizes[i] = 0;
    }
    for (var u = this.indexOfGroup(t + 1), c = (i = 0, r.length); i < c; i++) this.tag.insertRule(u, r[i]) && (this.groupSizes[t]++, u++);
  }, e.prototype.clearGroup = function(t) {
    if (t < this.length) {
      var r = this.groupSizes[t], n = this.indexOfGroup(t), o = n + r;
      this.groupSizes[t] = 0;
      for (var a = n; a < o; a++) this.tag.deleteRule(n);
    }
  }, e.prototype.getGroup = function(t) {
    var r = "";
    if (t >= this.length || this.groupSizes[t] === 0) return r;
    for (var n = this.groupSizes[t], o = this.indexOfGroup(t), a = o + n, i = o; i < a; i++) r += "".concat(this.tag.getRule(i)).concat(st);
    return r;
  }, e;
}(), Hr = 1 << 30, Oe = /* @__PURE__ */ new Map(), $e = /* @__PURE__ */ new Map(), Ie = 1, Ae = function(e) {
  if (Oe.has(e)) return Oe.get(e);
  for (; $e.has(Ie); ) Ie++;
  var t = Ie++;
  if (process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > Hr)) throw de(16, "".concat(t));
  return Oe.set(e, t), $e.set(t, e), t;
}, Xr = function(e, t) {
  Ie = t + 1, Oe.set(e, t), $e.set(t, e);
}, Jr = "style[".concat(te, "][").concat(Mt, '="').concat(Ye, '"]'), Zr = new RegExp("^".concat(te, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Kr = function(e, t, r) {
  for (var n, o = r.split(","), a = 0, i = o.length; a < i; a++) (n = o[a]) && e.registerName(t, n);
}, Qr = function(e, t) {
  for (var r, n = ((r = t.textContent) !== null && r !== void 0 ? r : "").split(st), o = [], a = 0, i = n.length; a < i; a++) {
    var u = n[a].trim();
    if (u) {
      var c = u.match(Zr);
      if (c) {
        var b = 0 | parseInt(c[1], 10), v = c[2];
        b !== 0 && (Xr(v, b), Kr(e, v, c[3]), e.getTag().insertRules(b, o)), o.length = 0;
      } else o.push(u);
    }
  }
}, Et = function(e) {
  for (var t = document.querySelectorAll(Jr), r = 0, n = t.length; r < n; r++) {
    var o = t[r];
    o && o.getAttribute(te) !== $t && (Qr(e, o), o.parentNode && o.parentNode.removeChild(o));
  }
};
function en() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Ut = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), o = function(u) {
    var c = Array.from(u.querySelectorAll("style[".concat(te, "]")));
    return c[c.length - 1];
  }(r), a = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(te, $t), n.setAttribute(Mt, Ye);
  var i = en();
  return i && n.setAttribute("nonce", i), r.insertBefore(n, a), n;
}, tn = function() {
  function e(t) {
    this.element = Ut(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(r) {
      if (r.sheet) return r.sheet;
      for (var n = document.styleSheets, o = 0, a = n.length; o < a; o++) {
        var i = n[o];
        if (i.ownerNode === r) return i;
      }
      throw de(17);
    }(this.element), this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    try {
      return this.sheet.insertRule(r, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, e.prototype.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, e.prototype.getRule = function(t) {
    var r = this.sheet.cssRules[t];
    return r && r.cssText ? r.cssText : "";
  }, e;
}(), rn = function() {
  function e(t) {
    this.element = Ut(t), this.nodes = this.element.childNodes, this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    if (t <= this.length && t >= 0) {
      var n = document.createTextNode(r);
      return this.element.insertBefore(n, this.nodes[t] || null), this.length++, !0;
    }
    return !1;
  }, e.prototype.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), nn = function() {
  function e(t) {
    this.rules = [], this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    return t <= this.length && (this.rules.splice(t, 0, r), this.length++, !0);
  }, e.prototype.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, e;
}(), kt = De, on = { isServer: !De, useCSSOMInjection: !Nr }, qt = function() {
  function e(t, r, n) {
    t === void 0 && (t = ce), r === void 0 && (r = {});
    var o = this;
    this.options = $($({}, on), t), this.gs = r, this.names = new Map(n), this.server = !!t.isServer, !this.server && De && kt && (kt = !1, Et(this)), ct(this, function() {
      return function(a) {
        for (var i = a.getTag(), u = i.length, c = "", b = function(m) {
          var g = function(P) {
            return $e.get(P);
          }(m);
          if (g === void 0) return "continue";
          var y = a.names.get(g), k = i.getGroup(m);
          if (y === void 0 || !y.size || k.length === 0) return "continue";
          var R = "".concat(te, ".g").concat(m, '[id="').concat(g, '"]'), I = "";
          y !== void 0 && y.forEach(function(P) {
            P.length > 0 && (I += "".concat(P, ","));
          }), c += "".concat(k).concat(R, '{content:"').concat(I, '"}').concat(st);
        }, v = 0; v < u; v++) b(v);
        return c;
      }(o);
    });
  }
  return e.registerId = function(t) {
    return Ae(t);
  }, e.prototype.rehydrate = function() {
    !this.server && De && Et(this);
  }, e.prototype.reconstructWithOptions = function(t, r) {
    return r === void 0 && (r = !0), new e($($({}, this.options), t), this.gs, r && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(r) {
      var n = r.useCSSOMInjection, o = r.target;
      return r.isServer ? new nn(o) : n ? new tn(o) : new rn(o);
    }(this.options), new qr(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, r) {
    return this.names.has(t) && this.names.get(t).has(r);
  }, e.prototype.registerName = function(t, r) {
    if (Ae(t), this.names.has(t)) this.names.get(t).add(r);
    else {
      var n = /* @__PURE__ */ new Set();
      n.add(r), this.names.set(t, n);
    }
  }, e.prototype.insertRules = function(t, r, n) {
    this.registerName(t, r), this.getTag().insertRules(Ae(t), n);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(Ae(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), an = /&/g, sn = /^\s*\/\/.*$/gm;
function Ht(e, t) {
  return e.map(function(r) {
    return r.type === "rule" && (r.value = "".concat(t, " ").concat(r.value), r.value = r.value.replaceAll(",", ",".concat(t, " ")), r.props = r.props.map(function(n) {
      return "".concat(t, " ").concat(n);
    })), Array.isArray(r.children) && r.type !== "@keyframes" && (r.children = Ht(r.children, t)), r;
  });
}
function cn(e) {
  var t, r, n, o = ce, a = o.options, i = a === void 0 ? ce : a, u = o.plugins, c = u === void 0 ? Ve : u, b = function(g, y, k) {
    return k.startsWith(r) && k.endsWith(r) && k.replaceAll(r, "").length > 0 ? ".".concat(t) : g;
  }, v = c.slice();
  v.push(function(g) {
    g.type === Me && g.value.includes("&") && (g.props[0] = g.props[0].replace(an, r).replace(n, b));
  }), i.prefix && v.push(Pr), v.push(_r);
  var m = function(g, y, k, R) {
    y === void 0 && (y = ""), k === void 0 && (k = ""), R === void 0 && (R = "&"), t = R, r = y, n = new RegExp("\\".concat(r, "\\b"), "g");
    var I = g.replace(sn, ""), P = Rr(k || y ? "".concat(k, " ").concat(y, " { ").concat(I, " }") : I);
    i.namespace && (P = Ht(P, i.namespace));
    var _ = [];
    return je(P, Ar(v.concat(Tr(function(S) {
      return _.push(S);
    })))), _;
  };
  return m.hash = c.length ? c.reduce(function(g, y) {
    return y.name || de(15), J(g, y.name);
  }, zt).toString() : "", m;
}
var un = new qt(), tt = cn(), Xt = ae.createContext({ shouldForwardProp: void 0, styleSheet: un, stylis: tt });
Xt.Consumer;
ae.createContext(void 0);
function Rt() {
  return or(Xt);
}
var rt = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(o, a) {
      a === void 0 && (a = tt);
      var i = n.name + a.hash;
      o.hasNameForId(n.id, i) || o.insertRules(n.id, i, a(n.rules, i, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = r, ct(this, function() {
      throw de(12, String(n.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = tt), this.name + t.hash;
  }, e;
}(), ln = function(e) {
  return e >= "A" && e <= "Z";
};
function xt(e) {
  for (var t = "", r = 0; r < e.length; r++) {
    var n = e[r];
    if (r === 1 && n === "-" && e[0] === "-") return e;
    ln(n) ? t += "-" + n.toLowerCase() : t += n;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var Jt = function(e) {
  return e == null || e === !1 || e === "";
}, Zt = function(e) {
  var t, r, n = [];
  for (var o in e) {
    var a = e[o];
    e.hasOwnProperty(o) && !Jt(a) && (Array.isArray(a) && a.isCss || ue(a) ? n.push("".concat(xt(o), ":"), a, ";") : le(a) ? n.push.apply(n, ee(ee(["".concat(o, " {")], Zt(a), !1), ["}"], !1)) : n.push("".concat(xt(o), ": ").concat((t = o, (r = a) == null || typeof r == "boolean" || r === "" ? "" : typeof r != "number" || r === 0 || t in Cr || t.startsWith("--") ? String(r).trim() : "".concat(r, "px")), ";")));
  }
  return n;
};
function Q(e, t, r, n) {
  if (Jt(e)) return [];
  if (it(e)) return [".".concat(e.styledComponentId)];
  if (ue(e)) {
    if (!ue(a = e) || a.prototype && a.prototype.isReactComponent || !t) return [e];
    var o = e(t);
    return process.env.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof rt || le(o) || o === null || console.error("".concat(Yt(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), Q(o, t, r, n);
  }
  var a;
  return e instanceof rt ? r ? (e.inject(r, n), [e.getName(n)]) : [e] : le(e) ? Zt(e) : Array.isArray(e) ? Array.prototype.concat.apply(Ve, e.map(function(i) {
    return Q(i, t, r, n);
  })) : [e.toString()];
}
function pn(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (ue(r) && !it(r)) return !1;
  }
  return !0;
}
var dn = Ft(Ye), fn = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && pn(t), this.componentId = r, this.baseHash = J(dn, r), this.baseStyle = n, qt.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, r, n) : "";
    if (this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(this.componentId, this.staticRulesId)) o = Z(o, this.staticRulesId);
    else {
      var a = Qe(Q(this.rules, t, r, n)), i = Ke(J(this.baseHash, a) >>> 0);
      if (!r.hasNameForId(this.componentId, i)) {
        var u = n(a, ".".concat(i), void 0, this.componentId);
        r.insertRules(this.componentId, i, u);
      }
      o = Z(o, i), this.staticRulesId = i;
    }
    else {
      for (var c = J(this.baseHash, n.hash), b = "", v = 0; v < this.rules.length; v++) {
        var m = this.rules[v];
        if (typeof m == "string") b += m, process.env.NODE_ENV !== "production" && (c = J(c, m));
        else if (m) {
          var g = Qe(Q(m, t, r, n));
          c = J(c, g + v), b += g;
        }
      }
      if (b) {
        var y = Ke(c >>> 0);
        r.hasNameForId(this.componentId, y) || r.insertRules(this.componentId, y, n(b, ".".concat(y), void 0, this.componentId)), o = Z(o, y);
      }
    }
    return o;
  }, e;
}(), Kt = ae.createContext(void 0);
Kt.Consumer;
var qe = {}, _t = /* @__PURE__ */ new Set();
function hn(e, t, r) {
  var n = it(e), o = e, a = !Ue(e), i = t.attrs, u = i === void 0 ? Ve : i, c = t.componentId, b = c === void 0 ? function(E, A) {
    var h = typeof E != "string" ? "sc" : yt(E);
    qe[h] = (qe[h] || 0) + 1;
    var p = "".concat(h, "-").concat(Lt(Ye + h + qe[h]));
    return A ? "".concat(A, "-").concat(p) : p;
  }(t.displayName, t.parentComponentId) : c, v = t.displayName, m = v === void 0 ? function(E) {
    return Ue(E) ? "styled.".concat(E) : "Styled(".concat(Yt(E), ")");
  }(e) : v, g = t.displayName && t.componentId ? "".concat(yt(t.displayName), "-").concat(t.componentId) : t.componentId || b, y = n && o.attrs ? o.attrs.concat(u).filter(Boolean) : u, k = t.shouldForwardProp;
  if (n && o.shouldForwardProp) {
    var R = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var I = t.shouldForwardProp;
      k = function(E, A) {
        return R(E, A) && I(E, A);
      };
    } else k = R;
  }
  var P = new fn(r, g, n ? o.componentStyle : void 0);
  function _(E, A) {
    return function(h, p, L) {
      var G = h.attrs, Be = h.componentStyle, fe = h.defaultProps, we = h.foldedComponentIds, Se = h.styledComponentId, he = h.target, Ee = ae.useContext(Kt), ke = Rt(), re = h.shouldForwardProp || ke.shouldForwardProp;
      process.env.NODE_ENV !== "production" && ut(Se);
      var me = Ir(p, Ee, fe) || ce, M = function(j, B, U) {
        for (var T, D = $($({}, B), { className: void 0, theme: U }), X = 0; X < j.length; X += 1) {
          var ne = ue(T = j[X]) ? T(D) : T;
          for (var q in ne) D[q] = q === "className" ? Z(D[q], ne[q]) : q === "style" ? $($({}, D[q]), ne[q]) : ne[q];
        }
        return B.className && (D.className = Z(D.className, B.className)), D;
      }(G, p, me), s = M.as || he, l = {};
      for (var f in M) M[f] === void 0 || f[0] === "$" || f === "as" || f === "theme" && M.theme === me || (f === "forwardedAs" ? l.as = M.forwardedAs : re && !re(f, s) || (l[f] = M[f], re || process.env.NODE_ENV !== "development" || pr(f) || _t.has(f) || !Ze.has(s) || (_t.add(f), console.warn('styled-components: it looks like an unknown prop "'.concat(f, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var C = function(j, B) {
        var U = Rt(), T = j.generateAndInjectStyles(B, U.styleSheet, U.stylis);
        return process.env.NODE_ENV !== "production" && ut(T), T;
      }(Be, M);
      process.env.NODE_ENV !== "production" && h.warnTooManyClasses && h.warnTooManyClasses(C);
      var z = Z(we, Se);
      return C && (z += " " + C), M.className && (z += " " + M.className), l[Ue(s) && !Ze.has(s) ? "class" : "className"] = z, L && (l.ref = L), rr(s, l);
    }(S, E, A);
  }
  _.displayName = m;
  var S = ae.forwardRef(_);
  return S.attrs = y, S.componentStyle = P, S.displayName = m, S.shouldForwardProp = k, S.foldedComponentIds = n ? Z(o.foldedComponentIds, o.styledComponentId) : "", S.styledComponentId = g, S.target = n ? o.target : e, Object.defineProperty(S, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(E) {
    this._foldedDefaultProps = n ? function(A) {
      for (var h = [], p = 1; p < arguments.length; p++) h[p - 1] = arguments[p];
      for (var L = 0, G = h; L < G.length; L++) et(A, G[L], !0);
      return A;
    }({}, o.defaultProps, E) : E;
  } }), process.env.NODE_ENV !== "production" && (Or(m, g), S.warnTooManyClasses = /* @__PURE__ */ function(E, A) {
    var h = {}, p = !1;
    return function(L) {
      if (!p && (h[L] = !0, Object.keys(h).length >= 200)) {
        var G = A ? ' with the id of "'.concat(A, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(E).concat(G, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), p = !0, h = {};
      }
    };
  }(m, g)), ct(S, function() {
    return ".".concat(S.styledComponentId);
  }), a && Gt(S, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), S;
}
function At(e, t) {
  for (var r = [e[0]], n = 0, o = t.length; n < o; n += 1) r.push(t[n], e[n + 1]);
  return r;
}
var Tt = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function Qt(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  if (ue(e) || le(e)) return Tt(Q(At(Ve, ee([e], t, !0))));
  var n = e;
  return t.length === 0 && n.length === 1 && typeof n[0] == "string" ? Q(n) : Tt(Q(At(n, t)));
}
function nt(e, t, r) {
  if (r === void 0 && (r = ce), !t) throw de(1, t);
  var n = function(o) {
    for (var a = [], i = 1; i < arguments.length; i++) a[i - 1] = arguments[i];
    return e(t, r, Qt.apply(void 0, ee([o], a, !1)));
  };
  return n.attrs = function(o) {
    return nt(e, t, $($({}, r), { attrs: Array.prototype.concat(r.attrs, o).filter(Boolean) }));
  }, n.withConfig = function(o) {
    return nt(e, t, $($({}, r), o));
  }, n;
}
var er = function(e) {
  return nt(hn, e);
}, tr = er;
Ze.forEach(function(e) {
  tr[e] = er(e);
});
function mn(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  var n = Qe(Qt.apply(void 0, ee([e], t, !1))), o = Lt(n);
  return new rt(o, n);
}
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Te = "__sc-".concat(te, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[Te] || (window[Te] = 0), window[Te] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Te] += 1);
const gn = mn`
  0% {
    box-shadow: 0 0 0 0 rgba(205, 163, 79, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(205, 163, 79, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(205, 163, 79, 0);
  }
`, yn = tr.button`
  background: ${(e) => e.variant === "secondary" ? "#4b4b4b" : "#cda34f"};
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  position: relative;

  &:hover {
    transform: scale(1.05);
    background: ${(e) => e.variant === "secondary" ? "#3a3a3a" : "#b48d3d"};
  }

  &:active {
    animation: ${gn} 0.75s;
  }
`, bn = ({
  children: e,
  variant: t = "primary",
  ...r
}) => /* @__PURE__ */ cr.jsx(yn, { variant: t, ...r, children: e });
export {
  bn as Button
};
