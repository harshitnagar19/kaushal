(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888], {
      1118: function(t, e, n) {
          (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
              return n(449)
          }])
      },
      3991: function(t, e) {
          "use strict";
          var n, i;
          Object.defineProperty(e, "__esModule", {
                  value: !0
              }),
              function(t, e) {
                  for (var n in e) Object.defineProperty(t, n, {
                      enumerable: !0,
                      get: e[n]
                  })
              }(e, {
                  PrefetchKind: function() {
                      return n
                  },
                  ACTION_REFRESH: function() {
                      return r
                  },
                  ACTION_NAVIGATE: function() {
                      return o
                  },
                  ACTION_RESTORE: function() {
                      return s
                  },
                  ACTION_SERVER_PATCH: function() {
                      return a
                  },
                  ACTION_PREFETCH: function() {
                      return l
                  },
                  ACTION_FAST_REFRESH: function() {
                      return u
                  },
                  ACTION_SERVER_ACTION: function() {
                      return c
                  }
              });
          let r = "refresh",
              o = "navigate",
              s = "restore",
              a = "server-patch",
              l = "prefetch",
              u = "fast-refresh",
              c = "server-action";
          (i = n || (n = {})).AUTO = "auto", i.FULL = "full", i.TEMPORARY = "temporary", ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
              value: !0
          }), Object.assign(e.default, e), t.exports = e.default)
      },
      1516: function(t, e) {
          "use strict";

          function n(t, e, n, i) {
              return !1
          }
          Object.defineProperty(e, "__esModule", {
              value: !0
          }), Object.defineProperty(e, "getDomainLocale", {
              enumerable: !0,
              get: function() {
                  return n
              }
          }), ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
              value: !0
          }), Object.assign(e.default, e), t.exports = e.default)
      },
      3740: function(t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", {
              value: !0
          }), Object.defineProperty(e, "default", {
              enumerable: !0,
              get: function() {
                  return y
              }
          });
          let i = n(8754),
              r = n(1757),
              o = r._(n(7294)),
              s = i._(n(2636)),
              a = n(7757),
              l = n(3735),
              u = n(3341);
          n(4210);
          let c = i._(n(7746)),
              h = {
                  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                  path: "/_next/image",
                  loader: "default",
                  dangerouslyAllowSVG: !1,
                  unoptimized: !1
              };

          function d(t) {
              return void 0 !== t.default
          }

          function p(t) {
              return void 0 === t ? t : "number" == typeof t ? Number.isFinite(t) ? t : NaN : "string" == typeof t && /^[0-9]+$/.test(t) ? parseInt(t, 10) : NaN
          }

          function f(t, e, n, i, r, o, s) {
              if (!t || t["data-loaded-src"] === e) return;
              t["data-loaded-src"] = e;
              let a = "decode" in t ? t.decode() : Promise.resolve();
              a.catch(() => {}).then(() => {
                  if (t.parentElement && t.isConnected) {
                      if ("blur" === n && o(!0), null == i ? void 0 : i.current) {
                          let e = new Event("load");
                          Object.defineProperty(e, "target", {
                              writable: !1,
                              value: t
                          });
                          let n = !1,
                              r = !1;
                          i.current({
                              ...e,
                              nativeEvent: e,
                              currentTarget: t,
                              target: t,
                              isDefaultPrevented: () => n,
                              isPropagationStopped: () => r,
                              persist: () => {},
                              preventDefault: () => {
                                  n = !0, e.preventDefault()
                              },
                              stopPropagation: () => {
                                  r = !0, e.stopPropagation()
                              }
                          })
                      }(null == r ? void 0 : r.current) && r.current(t)
                  }
              })
          }

          function m(t) {
              let [e, n] = o.version.split("."), i = parseInt(e, 10), r = parseInt(n, 10);
              return i > 18 || 18 === i && r >= 3 ? {
                  fetchPriority: t
              } : {
                  fetchpriority: t
              }
          }
          let g = (0, o.forwardRef)((t, e) => {
                  let {
                      imgAttributes: n,
                      heightInt: i,
                      widthInt: r,
                      qualityInt: s,
                      className: a,
                      imgStyle: l,
                      blurStyle: u,
                      isLazy: c,
                      fetchPriority: h,
                      fill: d,
                      placeholder: p,
                      loading: g,
                      srcString: v,
                      config: y,
                      unoptimized: x,
                      loader: w,
                      onLoadRef: b,
                      onLoadingCompleteRef: C,
                      setBlurComplete: P,
                      setShowAltText: E,
                      onLoad: k,
                      onError: A,
                      ...T
                  } = t;
                  return g = c ? "lazy" : g, o.default.createElement("img", {
                      ...T,
                      ...m(h),
                      loading: g,
                      width: r,
                      height: i,
                      decoding: "async",
                      "data-nimg": d ? "fill" : "1",
                      className: a,
                      style: {
                          ...l,
                          ...u
                      },
                      ...n,
                      ref: (0, o.useCallback)(t => {
                          e && ("function" == typeof e ? e(t) : "object" == typeof e && (e.current = t)), t && (A && (t.src = t.src), t.complete && f(t, v, p, b, C, P, x))
                      }, [v, p, b, C, P, A, x, e]),
                      onLoad: t => {
                          let e = t.currentTarget;
                          f(e, v, p, b, C, P, x)
                      },
                      onError: t => {
                          E(!0), "blur" === p && P(!0), A && A(t)
                      }
                  })
              }),
              v = (0, o.forwardRef)((t, e) => {
                  var n;
                  let i, r, {
                          src: f,
                          sizes: v,
                          unoptimized: y = !1,
                          priority: x = !1,
                          loading: w,
                          className: b,
                          quality: C,
                          width: P,
                          height: E,
                          fill: k,
                          style: A,
                          onLoad: T,
                          onLoadingComplete: j,
                          placeholder: S = "empty",
                          blurDataURL: M,
                          fetchPriority: V,
                          layout: R,
                          objectFit: O,
                          objectPosition: D,
                          lazyBoundary: L,
                          lazyRoot: F,
                          ...G
                      } = t,
                      B = (0, o.useContext)(u.ImageConfigContext),
                      N = (0, o.useMemo)(() => {
                          let t = h || B || l.imageConfigDefault,
                              e = [...t.deviceSizes, ...t.imageSizes].sort((t, e) => t - e),
                              n = t.deviceSizes.sort((t, e) => t - e);
                          return {
                              ...t,
                              allSizes: e,
                              deviceSizes: n
                          }
                      }, [B]),
                      I = G.loader || c.default;
                  delete G.loader;
                  let _ = "__next_img_default" in I;
                  if (_) {
                      if ("custom" === N.loader) throw Error('Image with src "' + f + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')
                  } else {
                      let t = I;
                      I = e => {
                          let {
                              config: n,
                              ...i
                          } = e;
                          return t(i)
                      }
                  }
                  if (R) {
                      "fill" === R && (k = !0);
                      let t = {
                          intrinsic: {
                              maxWidth: "100%",
                              height: "auto"
                          },
                          responsive: {
                              width: "100%",
                              height: "auto"
                          }
                      } [R];
                      t && (A = {
                          ...A,
                          ...t
                      });
                      let e = {
                          responsive: "100vw",
                          fill: "100vw"
                      } [R];
                      e && !v && (v = e)
                  }
                  let W = "",
                      z = p(P),
                      H = p(E);
                  if ("object" == typeof(n = f) && (d(n) || void 0 !== n.src)) {
                      let t = d(f) ? f.default : f;
                      if (!t.src) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(t));
                      if (!t.height || !t.width) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(t));
                      if (i = t.blurWidth, r = t.blurHeight, M = M || t.blurDataURL, W = t.src, !k) {
                          if (z || H) {
                              if (z && !H) {
                                  let e = z / t.width;
                                  H = Math.round(t.height * e)
                              } else if (!z && H) {
                                  let e = H / t.height;
                                  z = Math.round(t.width * e)
                              }
                          } else z = t.width, H = t.height
                      }
                  }
                  let U = !x && ("lazy" === w || void 0 === w);
                  (!(f = "string" == typeof f ? f : W) || f.startsWith("data:") || f.startsWith("blob:")) && (y = !0, U = !1), N.unoptimized && (y = !0), _ && f.endsWith(".svg") && !N.dangerouslyAllowSVG && (y = !0), x && (V = "high");
                  let [$, Z] = (0, o.useState)(!1), [X, Y] = (0, o.useState)(!1), q = p(C), K = Object.assign(k ? {
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      left: 0,
                      top: 0,
                      right: 0,
                      bottom: 0,
                      objectFit: O,
                      objectPosition: D
                  } : {}, X ? {} : {
                      color: "transparent"
                  }, A), J = "blur" === S && M && !$ ? {
                      backgroundSize: K.objectFit || "cover",
                      backgroundPosition: K.objectPosition || "50% 50%",
                      backgroundRepeat: "no-repeat",
                      backgroundImage: 'url("data:image/svg+xml;charset=utf-8,' + (0, a.getImageBlurSvg)({
                          widthInt: z,
                          heightInt: H,
                          blurWidth: i,
                          blurHeight: r,
                          blurDataURL: M,
                          objectFit: K.objectFit
                      }) + '")'
                  } : {}, Q = function(t) {
                      let {
                          config: e,
                          src: n,
                          unoptimized: i,
                          width: r,
                          quality: o,
                          sizes: s,
                          loader: a
                      } = t;
                      if (i) return {
                          src: n,
                          srcSet: void 0,
                          sizes: void 0
                      };
                      let {
                          widths: l,
                          kind: u
                      } = function(t, e, n) {
                          let {
                              deviceSizes: i,
                              allSizes: r
                          } = t;
                          if (n) {
                              let t = /(^|\s)(1?\d?\d)vw/g,
                                  e = [];
                              for (let i; i = t.exec(n); i) e.push(parseInt(i[2]));
                              if (e.length) {
                                  let t = .01 * Math.min(...e);
                                  return {
                                      widths: r.filter(e => e >= i[0] * t),
                                      kind: "w"
                                  }
                              }
                              return {
                                  widths: r,
                                  kind: "w"
                              }
                          }
                          if ("number" != typeof e) return {
                              widths: i,
                              kind: "w"
                          };
                          let o = [...new Set([e, 2 * e].map(t => r.find(e => e >= t) || r[r.length - 1]))];
                          return {
                              widths: o,
                              kind: "x"
                          }
                      }(e, r, s), c = l.length - 1;
                      return {
                          sizes: s || "w" !== u ? s : "100vw",
                          srcSet: l.map((t, i) => a({
                              config: e,
                              src: n,
                              quality: o,
                              width: t
                          }) + " " + ("w" === u ? t : i + 1) + u).join(", "),
                          src: a({
                              config: e,
                              src: n,
                              quality: o,
                              width: l[c]
                          })
                      }
                  }({
                      config: N,
                      src: f,
                      unoptimized: y,
                      width: z,
                      quality: q,
                      sizes: v,
                      loader: I
                  }), tt = f, te = (0, o.useRef)(T);
                  (0, o.useEffect)(() => {
                      te.current = T
                  }, [T]);
                  let tn = (0, o.useRef)(j);
                  (0, o.useEffect)(() => {
                      tn.current = j
                  }, [j]);
                  let ti = {
                      isLazy: U,
                      imgAttributes: Q,
                      heightInt: H,
                      widthInt: z,
                      qualityInt: q,
                      className: b,
                      imgStyle: K,
                      blurStyle: J,
                      loading: w,
                      config: N,
                      fetchPriority: V,
                      fill: k,
                      unoptimized: y,
                      placeholder: S,
                      loader: I,
                      srcString: tt,
                      onLoadRef: te,
                      onLoadingCompleteRef: tn,
                      setBlurComplete: Z,
                      setShowAltText: Y,
                      ...G
                  };
                  return o.default.createElement(o.default.Fragment, null, o.default.createElement(g, {
                      ...ti,
                      ref: e
                  }), x ? o.default.createElement(s.default, null, o.default.createElement("link", {
                      key: "__nimg-" + Q.src + Q.srcSet + Q.sizes,
                      rel: "preload",
                      as: "image",
                      href: Q.srcSet ? void 0 : Q.src,
                      imageSrcSet: Q.srcSet,
                      imageSizes: Q.sizes,
                      crossOrigin: G.crossOrigin,
                      referrerPolicy: G.referrerPolicy,
                      ...m(V)
                  })) : null)
              }),
              y = v;
          ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
              value: !0
          }), Object.assign(e.default, e), t.exports = e.default)
      },
      5569: function(t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", {
              value: !0
          }), Object.defineProperty(e, "default", {
              enumerable: !0,
              get: function() {
                  return w
              }
          });
          let i = n(8754),
              r = i._(n(7294)),
              o = n(4532),
              s = n(3353),
              a = n(1410),
              l = n(9064),
              u = n(370),
              c = n(9955),
              h = n(4224),
              d = n(508),
              p = n(1516),
              f = n(4266),
              m = n(3991),
              g = new Set;

          function v(t, e, n, i, r, o) {
              if (!o && !(0, s.isLocalURL)(e)) return;
              if (!i.bypassPrefetchedCheck) {
                  let r = void 0 !== i.locale ? i.locale : "locale" in t ? t.locale : void 0,
                      o = e + "%" + n + "%" + r;
                  if (g.has(o)) return;
                  g.add(o)
              }
              let a = o ? t.prefetch(e, r) : t.prefetch(e, n, i);
              Promise.resolve(a).catch(t => {})
          }

          function y(t) {
              return "string" == typeof t ? t : (0, a.formatUrl)(t)
          }
          let x = r.default.forwardRef(function(t, e) {
                  let n, i;
                  let {
                      href: a,
                      as: g,
                      children: x,
                      prefetch: w = null,
                      passHref: b,
                      replace: C,
                      shallow: P,
                      scroll: E,
                      locale: k,
                      onClick: A,
                      onMouseEnter: T,
                      onTouchStart: j,
                      legacyBehavior: S = !1,
                      ...M
                  } = t;
                  n = x, S && ("string" == typeof n || "number" == typeof n) && (n = r.default.createElement("a", null, n));
                  let V = !1 !== w,
                      R = null === w ? m.PrefetchKind.AUTO : m.PrefetchKind.FULL,
                      O = r.default.useContext(c.RouterContext),
                      D = r.default.useContext(h.AppRouterContext),
                      L = null != O ? O : D,
                      F = !O,
                      {
                          href: G,
                          as: B
                      } = r.default.useMemo(() => {
                          if (!O) {
                              let t = y(a);
                              return {
                                  href: t,
                                  as: g ? y(g) : t
                              }
                          }
                          let [t, e] = (0, o.resolveHref)(O, a, !0);
                          return {
                              href: t,
                              as: g ? (0, o.resolveHref)(O, g) : e || t
                          }
                      }, [O, a, g]),
                      N = r.default.useRef(G),
                      I = r.default.useRef(B);
                  S && (i = r.default.Children.only(n));
                  let _ = S ? i && "object" == typeof i && i.ref : e,
                      [W, z, H] = (0, d.useIntersection)({
                          rootMargin: "200px"
                      }),
                      U = r.default.useCallback(t => {
                          (I.current !== B || N.current !== G) && (H(), I.current = B, N.current = G), W(t), _ && ("function" == typeof _ ? _(t) : "object" == typeof _ && (_.current = t))
                      }, [B, _, G, H, W]);
                  r.default.useEffect(() => {
                      L && z && V && v(L, G, B, {
                          locale: k
                      }, {
                          kind: R
                      }, F)
                  }, [B, G, z, k, V, null == O ? void 0 : O.locale, L, F, R]);
                  let $ = {
                      ref: U,
                      onClick(t) {
                          S || "function" != typeof A || A(t), S && i.props && "function" == typeof i.props.onClick && i.props.onClick(t), L && !t.defaultPrevented && function(t, e, n, i, o, a, l, u, c, h) {
                              let {
                                  nodeName: d
                              } = t.currentTarget, p = "A" === d.toUpperCase();
                              if (p && (function(t) {
                                      let e = t.currentTarget,
                                          n = e.getAttribute("target");
                                      return n && "_self" !== n || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.nativeEvent && 2 === t.nativeEvent.which
                                  }(t) || !c && !(0, s.isLocalURL)(n))) return;
                              t.preventDefault();
                              let f = () => {
                                  "beforePopState" in e ? e[o ? "replace" : "push"](n, i, {
                                      shallow: a,
                                      locale: u,
                                      scroll: l
                                  }) : e[o ? "replace" : "push"](i || n, {
                                      forceOptimisticNavigation: !h
                                  })
                              };
                              c ? r.default.startTransition(f) : f()
                          }(t, L, G, B, C, P, E, k, F, V)
                      },
                      onMouseEnter(t) {
                          S || "function" != typeof T || T(t), S && i.props && "function" == typeof i.props.onMouseEnter && i.props.onMouseEnter(t), L && (V || !F) && v(L, G, B, {
                              locale: k,
                              priority: !0,
                              bypassPrefetchedCheck: !0
                          }, {
                              kind: R
                          }, F)
                      },
                      onTouchStart(t) {
                          S || "function" != typeof j || j(t), S && i.props && "function" == typeof i.props.onTouchStart && i.props.onTouchStart(t), L && (V || !F) && v(L, G, B, {
                              locale: k,
                              priority: !0,
                              bypassPrefetchedCheck: !0
                          }, {
                              kind: R
                          }, F)
                      }
                  };
                  if ((0, l.isAbsoluteUrl)(B)) $.href = B;
                  else if (!S || b || "a" === i.type && !("href" in i.props)) {
                      let t = void 0 !== k ? k : null == O ? void 0 : O.locale,
                          e = (null == O ? void 0 : O.isLocaleDomain) && (0, p.getDomainLocale)(B, t, null == O ? void 0 : O.locales, null == O ? void 0 : O.domainLocales);
                      $.href = e || (0, f.addBasePath)((0, u.addLocale)(B, t, null == O ? void 0 : O.defaultLocale))
                  }
                  return S ? r.default.cloneElement(i, $) : r.default.createElement("a", {
                      ...M,
                      ...$
                  }, n)
              }),
              w = x;
          ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
              value: !0
          }), Object.assign(e.default, e), t.exports = e.default)
      },
      508: function(t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", {
              value: !0
          }), Object.defineProperty(e, "useIntersection", {
              enumerable: !0,
              get: function() {
                  return l
              }
          });
          let i = n(7294),
              r = n(29),
              o = "function" == typeof IntersectionObserver,
              s = new Map,
              a = [];

          function l(t) {
              let {
                  rootRef: e,
                  rootMargin: n,
                  disabled: l
              } = t, u = l || !o, [c, h] = (0, i.useState)(!1), d = (0, i.useRef)(null), p = (0, i.useCallback)(t => {
                  d.current = t
              }, []);
              (0, i.useEffect)(() => {
                  if (o) {
                      if (u || c) return;
                      let t = d.current;
                      if (t && t.tagName) {
                          let i = function(t, e, n) {
                              let {
                                  id: i,
                                  observer: r,
                                  elements: o
                              } = function(t) {
                                  let e;
                                  let n = {
                                          root: t.root || null,
                                          margin: t.rootMargin || ""
                                      },
                                      i = a.find(t => t.root === n.root && t.margin === n.margin);
                                  if (i && (e = s.get(i))) return e;
                                  let r = new Map,
                                      o = new IntersectionObserver(t => {
                                          t.forEach(t => {
                                              let e = r.get(t.target),
                                                  n = t.isIntersecting || t.intersectionRatio > 0;
                                              e && n && e(n)
                                          })
                                      }, t);
                                  return e = {
                                      id: n,
                                      observer: o,
                                      elements: r
                                  }, a.push(n), s.set(n, e), e
                              }(n);
                              return o.set(t, e), r.observe(t),
                                  function() {
                                      if (o.delete(t), r.unobserve(t), 0 === o.size) {
                                          r.disconnect(), s.delete(i);
                                          let t = a.findIndex(t => t.root === i.root && t.margin === i.margin);
                                          t > -1 && a.splice(t, 1)
                                      }
                                  }
                          }(t, t => t && h(t), {
                              root: null == e ? void 0 : e.current,
                              rootMargin: n
                          });
                          return i
                      }
                  } else if (!c) {
                      let t = (0, r.requestIdleCallback)(() => h(!0));
                      return () => (0, r.cancelIdleCallback)(t)
                  }
              }, [u, n, e, c, d.current]);
              let f = (0, i.useCallback)(() => {
                  h(!1)
              }, []);
              return [p, c, f]
          }("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
              value: !0
          }), Object.assign(e.default, e), t.exports = e.default)
      },
      7757: function(t, e) {
          "use strict";

          function n(t) {
              let {
                  widthInt: e,
                  heightInt: n,
                  blurWidth: i,
                  blurHeight: r,
                  blurDataURL: o,
                  objectFit: s
              } = t, a = i || e, l = r || n, u = o.startsWith("data:image/jpeg") ? "%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%" : "";
              return a && l ? "%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 " + a + " " + l + "'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='" + (i && r ? "1" : "20") + "'/%3E" + u + "%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='" + o + "'/%3E%3C/svg%3E" : "%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='" + ("contain" === s ? "xMidYMid" : "cover" === s ? "xMidYMid slice" : "none") + "' x='0' y='0' height='100%25' width='100%25' href='" + o + "'/%3E%3C/svg%3E"
          }
          Object.defineProperty(e, "__esModule", {
              value: !0
          }), Object.defineProperty(e, "getImageBlurSvg", {
              enumerable: !0,
              get: function() {
                  return n
              }
          })
      },
      7746: function(t, e) {
          "use strict";

          function n(t) {
              let {
                  config: e,
                  src: n,
                  width: i,
                  quality: r
              } = t;
              return e.path + "?url=" + encodeURIComponent(n) + "&w=" + i + "&q=" + (r || 75)
          }
          Object.defineProperty(e, "__esModule", {
              value: !0
          }), Object.defineProperty(e, "default", {
              enumerable: !0,
              get: function() {
                  return i
              }
          }), n.__next_img_default = !0;
          let i = n
      },
      449: function(t, e, n) {
          "use strict";
          n.r(e), n.d(e, {
              default: function() {
                  return G
              }
          });
          var i = n(5893);
          n(3814);
          var r = n(7294),
              o = n(9008),
              s = n.n(o);

          function a() {
              return (a = Object.assign ? Object.assign.bind() : function(t) {
                  for (var e = 1; e < arguments.length; e++) {
                      var n = arguments[e];
                      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                  }
                  return t
              }).apply(this, arguments)
          }

          function l(t, e) {
              if (null == t) return {};
              var n, i, r = {},
                  o = Object.keys(t);
              for (i = 0; i < o.length; i++) n = o[i], e.indexOf(n) >= 0 || (r[n] = t[n]);
              return r
          }
          var u = ["keyOverride"],
              c = ["crossOrigin"],
              h = {
                  templateTitle: "",
                  noindex: !1,
                  nofollow: !1,
                  defaultOpenGraphImageWidth: 0,
                  defaultOpenGraphImageHeight: 0,
                  defaultOpenGraphVideoWidth: 0,
                  defaultOpenGraphVideoHeight: 0
              },
              d = function(t, e, n) {
                  void 0 === e && (e = []);
                  var i = void 0 === n ? {} : n,
                      o = i.defaultWidth,
                      s = i.defaultHeight;
                  return e.reduce(function(e, n, i) {
                      return e.push(r.createElement("meta", {
                          key: "og:" + t + ":0" + i,
                          property: "og:" + t,
                          content: n.url
                      })), n.alt && e.push(r.createElement("meta", {
                          key: "og:" + t + ":alt0" + i,
                          property: "og:" + t + ":alt",
                          content: n.alt
                      })), n.secureUrl && e.push(r.createElement("meta", {
                          key: "og:" + t + ":secure_url0" + i,
                          property: "og:" + t + ":secure_url",
                          content: n.secureUrl.toString()
                      })), n.type && e.push(r.createElement("meta", {
                          key: "og:" + t + ":type0" + i,
                          property: "og:" + t + ":type",
                          content: n.type.toString()
                      })), n.width ? e.push(r.createElement("meta", {
                          key: "og:" + t + ":width0" + i,
                          property: "og:" + t + ":width",
                          content: n.width.toString()
                      })) : o && e.push(r.createElement("meta", {
                          key: "og:" + t + ":width0" + i,
                          property: "og:" + t + ":width",
                          content: o.toString()
                      })), n.height ? e.push(r.createElement("meta", {
                          key: "og:" + t + ":height" + i,
                          property: "og:" + t + ":height",
                          content: n.height.toString()
                      })) : s && e.push(r.createElement("meta", {
                          key: "og:" + t + ":height" + i,
                          property: "og:" + t + ":height",
                          content: s.toString()
                      })), e
                  }, [])
              },
              p = function(t) {
                  var e, n, i, o, s, p = [];
                  t.titleTemplate && (h.templateTitle = t.titleTemplate);
                  var f = "";
                  t.title ? (f = t.title, h.templateTitle && (f = h.templateTitle.replace(/%s/g, function() {
                      return f
                  }))) : t.defaultTitle && (f = t.defaultTitle), f && p.push(r.createElement("title", {
                      key: "title"
                  }, f));
                  var m = void 0 === t.noindex ? h.noindex || t.dangerouslySetAllPagesToNoIndex : t.noindex,
                      g = void 0 === t.nofollow ? h.nofollow || t.dangerouslySetAllPagesToNoFollow : t.nofollow,
                      v = "";
                  if (t.robotsProps) {
                      var y = t.robotsProps,
                          x = y.nosnippet,
                          w = y.maxSnippet,
                          b = y.maxImagePreview,
                          C = y.maxVideoPreview,
                          P = y.noarchive,
                          E = y.noimageindex,
                          k = y.notranslate,
                          A = y.unavailableAfter;
                      v = (x ? ",nosnippet" : "") + (w ? ",max-snippet:" + w : "") + (b ? ",max-image-preview:" + b : "") + (P ? ",noarchive" : "") + (A ? ",unavailable_after:" + A : "") + (E ? ",noimageindex" : "") + (C ? ",max-video-preview:" + C : "") + (k ? ",notranslate" : "")
                  }
                  if (m || g ? (t.dangerouslySetAllPagesToNoIndex && (h.noindex = !0), t.dangerouslySetAllPagesToNoFollow && (h.nofollow = !0), p.push(r.createElement("meta", {
                          key: "robots",
                          name: "robots",
                          content: (m ? "noindex" : "index") + "," + (g ? "nofollow" : "follow") + v
                      }))) : p.push(r.createElement("meta", {
                          key: "robots",
                          name: "robots",
                          content: "index,follow" + v
                      })), t.description && p.push(r.createElement("meta", {
                          key: "description",
                          name: "description",
                          content: t.description
                      })), t.themeColor && p.push(r.createElement("meta", {
                          key: "theme-color",
                          name: "theme-color",
                          content: t.themeColor
                      })), t.mobileAlternate && p.push(r.createElement("link", {
                          rel: "alternate",
                          key: "mobileAlternate",
                          media: t.mobileAlternate.media,
                          href: t.mobileAlternate.href
                      })), t.languageAlternates && t.languageAlternates.length > 0 && t.languageAlternates.forEach(function(t) {
                          p.push(r.createElement("link", {
                              rel: "alternate",
                              key: "languageAlternate-" + t.hrefLang,
                              hrefLang: t.hrefLang,
                              href: t.href
                          }))
                      }), t.twitter && (t.twitter.cardType && p.push(r.createElement("meta", {
                          key: "twitter:card",
                          name: "twitter:card",
                          content: t.twitter.cardType
                      })), t.twitter.site && p.push(r.createElement("meta", {
                          key: "twitter:site",
                          name: "twitter:site",
                          content: t.twitter.site
                      })), t.twitter.handle && p.push(r.createElement("meta", {
                          key: "twitter:creator",
                          name: "twitter:creator",
                          content: t.twitter.handle
                      }))), t.facebook && t.facebook.appId && p.push(r.createElement("meta", {
                          key: "fb:app_id",
                          property: "fb:app_id",
                          content: t.facebook.appId
                      })), (null != (e = t.openGraph) && e.title || f) && p.push(r.createElement("meta", {
                          key: "og:title",
                          property: "og:title",
                          content: (null == (o = t.openGraph) ? void 0 : o.title) || f
                      })), (null != (n = t.openGraph) && n.description || t.description) && p.push(r.createElement("meta", {
                          key: "og:description",
                          property: "og:description",
                          content: (null == (s = t.openGraph) ? void 0 : s.description) || t.description
                      })), t.openGraph) {
                      if ((t.openGraph.url || t.canonical) && p.push(r.createElement("meta", {
                              key: "og:url",
                              property: "og:url",
                              content: t.openGraph.url || t.canonical
                          })), t.openGraph.type) {
                          var T = t.openGraph.type.toLowerCase();
                          p.push(r.createElement("meta", {
                              key: "og:type",
                              property: "og:type",
                              content: T
                          })), "profile" === T && t.openGraph.profile ? (t.openGraph.profile.firstName && p.push(r.createElement("meta", {
                              key: "profile:first_name",
                              property: "profile:first_name",
                              content: t.openGraph.profile.firstName
                          })), t.openGraph.profile.lastName && p.push(r.createElement("meta", {
                              key: "profile:last_name",
                              property: "profile:last_name",
                              content: t.openGraph.profile.lastName
                          })), t.openGraph.profile.username && p.push(r.createElement("meta", {
                              key: "profile:username",
                              property: "profile:username",
                              content: t.openGraph.profile.username
                          })), t.openGraph.profile.gender && p.push(r.createElement("meta", {
                              key: "profile:gender",
                              property: "profile:gender",
                              content: t.openGraph.profile.gender
                          }))) : "book" === T && t.openGraph.book ? (t.openGraph.book.authors && t.openGraph.book.authors.length && t.openGraph.book.authors.forEach(function(t, e) {
                              p.push(r.createElement("meta", {
                                  key: "book:author:0" + e,
                                  property: "book:author",
                                  content: t
                              }))
                          }), t.openGraph.book.isbn && p.push(r.createElement("meta", {
                              key: "book:isbn",
                              property: "book:isbn",
                              content: t.openGraph.book.isbn
                          })), t.openGraph.book.releaseDate && p.push(r.createElement("meta", {
                              key: "book:release_date",
                              property: "book:release_date",
                              content: t.openGraph.book.releaseDate
                          })), t.openGraph.book.tags && t.openGraph.book.tags.length && t.openGraph.book.tags.forEach(function(t, e) {
                              p.push(r.createElement("meta", {
                                  key: "book:tag:0" + e,
                                  property: "book:tag",
                                  content: t
                              }))
                          })) : "article" === T && t.openGraph.article ? (t.openGraph.article.publishedTime && p.push(r.createElement("meta", {
                              key: "article:published_time",
                              property: "article:published_time",
                              content: t.openGraph.article.publishedTime
                          })), t.openGraph.article.modifiedTime && p.push(r.createElement("meta", {
                              key: "article:modified_time",
                              property: "article:modified_time",
                              content: t.openGraph.article.modifiedTime
                          })), t.openGraph.article.expirationTime && p.push(r.createElement("meta", {
                              key: "article:expiration_time",
                              property: "article:expiration_time",
                              content: t.openGraph.article.expirationTime
                          })), t.openGraph.article.authors && t.openGraph.article.authors.length && t.openGraph.article.authors.forEach(function(t, e) {
                              p.push(r.createElement("meta", {
                                  key: "article:author:0" + e,
                                  property: "article:author",
                                  content: t
                              }))
                          }), t.openGraph.article.section && p.push(r.createElement("meta", {
                              key: "article:section",
                              property: "article:section",
                              content: t.openGraph.article.section
                          })), t.openGraph.article.tags && t.openGraph.article.tags.length && t.openGraph.article.tags.forEach(function(t, e) {
                              p.push(r.createElement("meta", {
                                  key: "article:tag:0" + e,
                                  property: "article:tag",
                                  content: t
                              }))
                          })) : ("video.movie" === T || "video.episode" === T || "video.tv_show" === T || "video.other" === T) && t.openGraph.video && (t.openGraph.video.actors && t.openGraph.video.actors.length && t.openGraph.video.actors.forEach(function(t, e) {
                              t.profile && p.push(r.createElement("meta", {
                                  key: "video:actor:0" + e,
                                  property: "video:actor",
                                  content: t.profile
                              })), t.role && p.push(r.createElement("meta", {
                                  key: "video:actor:role:0" + e,
                                  property: "video:actor:role",
                                  content: t.role
                              }))
                          }), t.openGraph.video.directors && t.openGraph.video.directors.length && t.openGraph.video.directors.forEach(function(t, e) {
                              p.push(r.createElement("meta", {
                                  key: "video:director:0" + e,
                                  property: "video:director",
                                  content: t
                              }))
                          }), t.openGraph.video.writers && t.openGraph.video.writers.length && t.openGraph.video.writers.forEach(function(t, e) {
                              p.push(r.createElement("meta", {
                                  key: "video:writer:0" + e,
                                  property: "video:writer",
                                  content: t
                              }))
                          }), t.openGraph.video.duration && p.push(r.createElement("meta", {
                              key: "video:duration",
                              property: "video:duration",
                              content: t.openGraph.video.duration.toString()
                          })), t.openGraph.video.releaseDate && p.push(r.createElement("meta", {
                              key: "video:release_date",
                              property: "video:release_date",
                              content: t.openGraph.video.releaseDate
                          })), t.openGraph.video.tags && t.openGraph.video.tags.length && t.openGraph.video.tags.forEach(function(t, e) {
                              p.push(r.createElement("meta", {
                                  key: "video:tag:0" + e,
                                  property: "video:tag",
                                  content: t
                              }))
                          }), t.openGraph.video.series && p.push(r.createElement("meta", {
                              key: "video:series",
                              property: "video:series",
                              content: t.openGraph.video.series
                          })))
                      }
                      t.defaultOpenGraphImageWidth && (h.defaultOpenGraphImageWidth = t.defaultOpenGraphImageWidth), t.defaultOpenGraphImageHeight && (h.defaultOpenGraphImageHeight = t.defaultOpenGraphImageHeight), t.openGraph.images && t.openGraph.images.length && p.push.apply(p, d("image", t.openGraph.images, {
                          defaultWidth: h.defaultOpenGraphImageWidth,
                          defaultHeight: h.defaultOpenGraphImageHeight
                      })), t.defaultOpenGraphVideoWidth && (h.defaultOpenGraphVideoWidth = t.defaultOpenGraphVideoWidth), t.defaultOpenGraphVideoHeight && (h.defaultOpenGraphVideoHeight = t.defaultOpenGraphVideoHeight), t.openGraph.videos && t.openGraph.videos.length && p.push.apply(p, d("video", t.openGraph.videos, {
                          defaultWidth: h.defaultOpenGraphVideoWidth,
                          defaultHeight: h.defaultOpenGraphVideoHeight
                      })), t.openGraph.audio && p.push.apply(p, d("audio", t.openGraph.audio)), t.openGraph.locale && p.push(r.createElement("meta", {
                          key: "og:locale",
                          property: "og:locale",
                          content: t.openGraph.locale
                      })), (t.openGraph.siteName || t.openGraph.site_name) && p.push(r.createElement("meta", {
                          key: "og:site_name",
                          property: "og:site_name",
                          content: t.openGraph.siteName || t.openGraph.site_name
                      }))
                  }
                  return t.canonical && p.push(r.createElement("link", {
                      rel: "canonical",
                      href: t.canonical,
                      key: "canonical"
                  })), t.additionalMetaTags && t.additionalMetaTags.length > 0 && t.additionalMetaTags.forEach(function(t) {
                      var e, n, i = t.keyOverride,
                          o = l(t, u);
                      p.push(r.createElement("meta", a({
                          key: "meta:" + (null != (e = null != (n = null != i ? i : o.name) ? n : o.property) ? e : o.httpEquiv)
                      }, o)))
                  }), null != (i = t.additionalLinkTags) && i.length && t.additionalLinkTags.forEach(function(t) {
                      var e, n = t.crossOrigin,
                          i = l(t, c);
                      p.push(r.createElement("link", a({
                          key: "link" + (null != (e = i.keyOverride) ? e : i.href) + i.rel
                      }, i, {
                          crossOrigin: "anonymous" === n || "use-credentials" === n || "" === n ? n : void 0
                      })))
                  }), p
              },
              f = function(t) {
                  return r.createElement(s(), null, p(t))
              },
              m = function(t) {
                  var e = t.title,
                      n = t.titleTemplate,
                      i = t.defaultTitle,
                      o = t.themeColor,
                      s = t.dangerouslySetAllPagesToNoIndex,
                      a = t.dangerouslySetAllPagesToNoFollow,
                      l = t.description,
                      u = t.canonical,
                      c = t.facebook,
                      h = t.openGraph,
                      d = t.additionalMetaTags,
                      p = t.twitter,
                      m = t.defaultOpenGraphImageWidth,
                      g = t.defaultOpenGraphImageHeight,
                      v = t.defaultOpenGraphVideoWidth,
                      y = t.defaultOpenGraphVideoHeight,
                      x = t.mobileAlternate,
                      w = t.languageAlternates,
                      b = t.additionalLinkTags,
                      C = t.robotsProps;
                  return r.createElement(f, {
                      title: e,
                      titleTemplate: n,
                      defaultTitle: i,
                      themeColor: o,
                      dangerouslySetAllPagesToNoIndex: void 0 !== s && s,
                      dangerouslySetAllPagesToNoFollow: void 0 !== a && a,
                      description: l,
                      canonical: u,
                      facebook: c,
                      openGraph: h,
                      additionalMetaTags: d,
                      twitter: p,
                      defaultOpenGraphImageWidth: m,
                      defaultOpenGraphImageHeight: g,
                      defaultOpenGraphVideoWidth: v,
                      defaultOpenGraphVideoHeight: y,
                      mobileAlternate: x,
                      languageAlternates: w,
                      additionalLinkTags: b,
                      robotsProps: C
                  })
              };
          RegExp("[" + Object.keys(Object.freeze({
              "&": "&amp;",
              "<": "&lt;",
              ">": "&gt;",
              '"': "&quot;",
              "'": "&apos;"
          })).join("") + "]", "g");
          var g = n(8357);

          function v(t) {
              return (0, g.w_)({
                  tag: "svg",
                  attr: {
                      viewBox: "0 0 1024 1024"
                  },
                  child: [{
                      tag: "path",
                      attr: {
                          d: "M824.2 699.9a301.55 301.55 0 0 0-86.4-60.4C783.1 602.8 812 546.8 812 484c0-110.8-92.4-201.7-203.2-200-109.1 1.7-197 90.6-197 200 0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 0 0-86.4 60.4C345 754.6 314 826.8 312 903.8a8 8 0 0 0 8 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5A226.62 226.62 0 0 1 612 684c60.9 0 118.2 23.7 161.3 66.8C814.5 792 838 846.3 840 904.3c.1 4.3 3.7 7.7 8 7.7h56a8 8 0 0 0 8-8.2c-2-77-33-149.2-87.8-203.9zM612 612c-34.2 0-66.4-13.3-90.5-37.5a126.86 126.86 0 0 1-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4 0 34.2-13.3 66.3-37.5 90.5A127.3 127.3 0 0 1 612 612zM361.5 510.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 0 1-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.9-1.7-203.3 89.2-203.3 199.9 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 0 0 8 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.9-1 6.5-4.7 6-8.7z"
                      }
                  }]
              })(t)
          }

          function y(t) {
              return (0, g.w_)({
                  tag: "svg",
                  attr: {
                      viewBox: "0 0 24 24"
                  },
                  child: [{
                      tag: "path",
                      attr: {
                          d: "M19.9887 11.5716C19.9029 9.94513 19.3313 8.44745 18.4163 7.22097C18.1749 7.48407 17.8785 7.7698 17.4957 8.09159C16.5881 8.85458 15.4887 9.54307 14.1834 10.101C14.3498 10.4506 14.5029 10.7899 14.6376 11.1098L14.6388 11.1125C14.6652 11.1742 14.6879 11.2306 14.7321 11.3418C14.7379 11.3562 14.7433 11.3697 14.7485 11.3825C16.2621 11.2122 17.8576 11.2749 19.4049 11.4845C19.6106 11.5123 19.805 11.5415 19.9887 11.5716ZM10.6044 4.1213C10.7783 4.36621 10.9602 4.62859 11.1803 4.95378C11.7929 5.8589 12.396 6.81391 12.9604 7.79507C13.0749 7.99416 13.187 8.19289 13.2964 8.39112C14.5193 7.90993 15.5296 7.30281 16.3438 6.62486C16.6731 6.35063 16.9383 6.093 17.1403 5.86972C15.7501 4.70277 13.9571 4 12 4C11.524 4 11.0576 4.04158 10.6044 4.1213ZM4.25266 9.99755C4.83145 9.98452 5.48467 9.94941 6.29303 9.87518C7.90024 9.72758 9.54141 9.46249 11.1549 9.05274C10.5719 8.03721 9.93888 7.02331 9.29452 6.05378C8.98479 5.58775 8.68357 5.14992 8.45484 4.82642C6.39541 5.84613 4.83794 7.72658 4.25266 9.99755ZM5.78366 17.036C6.17111 16.4693 6.68061 15.8314 7.35797 15.1374C8.81199 13.6478 10.5286 12.4878 12.5139 11.8473C12.5417 11.8391 12.5604 11.8336 12.576 11.829C12.411 11.4651 12.2562 11.1405 12.1003 10.8342C10.2643 11.3687 8.3303 11.703 6.40279 11.8762C5.46319 11.9606 4.62005 11.9981 4 12.0044C4.00102 13.9112 4.66915 15.662 5.78366 17.036ZM15.0045 19.4166C14.9001 18.8745 14.7669 18.2706 14.5899 17.574C14.2689 16.3112 13.8668 15.012 13.373 13.7078C11.3712 14.4343 9.77574 15.4974 8.54309 16.7649C7.94904 17.3757 7.51244 17.9537 7.22642 18.4203C8.55892 19.4127 10.2109 20 12 20C13.0626 20 14.0769 19.7928 15.0045 19.4166ZM16.8778 18.3414C18.4073 17.1632 19.4985 15.444 19.8652 13.4703C19.5253 13.3865 19.094 13.3005 18.6196 13.2346C17.5756 13.0897 16.5014 13.0655 15.4409 13.2018C15.8933 14.4764 16.2642 15.7332 16.5608 16.9361C16.6903 17.4614 16.7958 17.9358 16.8778 18.3414ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"
                      }
                  }]
              })(t)
          }

          function x(t) {
              return (0, g.w_)({
                  tag: "svg",
                  attr: {
                      viewBox: "0 0 24 24"
                  },
                  child: [{
                      tag: "path",
                      attr: {
                          d: "M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z"
                      }
                  }]
              })(t)
          }

          function w(t) {
              return (0, g.w_)({
                  tag: "svg",
                  attr: {
                      viewBox: "0 0 24 24"
                  },
                  child: [{
                      tag: "path",
                      attr: {
                          d: "M12.001 9.55005C12.9181 8.61327 14.1121 8 15.501 8C18.5385 8 21.001 10.4624 21.001 13.5V21H19.001V13.5C19.001 11.567 17.434 10 15.501 10C13.568 10 12.001 11.567 12.001 13.5V21H10.001V8.5H12.001V9.55005ZM5.00098 6.5C4.17255 6.5 3.50098 5.82843 3.50098 5C3.50098 4.17157 4.17255 3.5 5.00098 3.5C5.8294 3.5 6.50098 4.17157 6.50098 5C6.50098 5.82843 5.8294 6.5 5.00098 6.5ZM4.00098 8.5H6.00098V21H4.00098V8.5Z"
                      }
                  }]
              })(t)
          }
          var b = n(9583),
              C = n(1664),
              P = n.n(C),
              E = n(1163);
          let k = () => (0, i.jsxs)("div", {
              className: "flex items-center gap-x-5 mb-8 text-2xl",
              children: [(0, i.jsx)(P(), {
                  href: "https://www.linkedin.com/company/mujhackx",
                  target: "_blank",
                  className: "hover:text-accent translate-all duration 300",
                  children: (0, i.jsx)(w, {})
              }), (0, i.jsx)(P(), {
                  href: "https://instagram.com/muj.hackx?igshid=MzRlODBiNWFlZA==",
                  target: "_blank",
                  className: "hover:text-accent translate-all duration 300",
                  children: (0, i.jsx)(x, {})
              }), (0, i.jsx)(P(), {
                  href: "https://jaipur.manipal.edu/",
                  target: "_blank",
                  className: "hover:text-accent translate-all duration 300",
                  children: (0, i.jsx)(y, {})
              })]
          });
          var A = n(5675),
              T = n.n(A);
          let j = [{
                  name: "Home",
                  path: "/",
                  icon: (0, i.jsx)(function(t) {
                      return (0, g.w_)({
                          tag: "svg",
                          attr: {
                              viewBox: "0 0 24 24",
                              fill: "currentColor",
                              "aria-hidden": "true"
                          },
                          child: [{
                              tag: "path",
                              attr: {
                                  d: "M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"
                              }
                          }, {
                              tag: "path",
                              attr: {
                                  d: "M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"
                              }
                          }]
                      })(t)
                  }, {})
              }, {
                  name: "About",
                  path: "/about.html",
                  icon: (0, i.jsx)(function(t) {
                      return (0, g.w_)({
                          tag: "svg",
                          attr: {
                              viewBox: "0 0 24 24",
                              fill: "currentColor",
                              "aria-hidden": "true"
                          },
                          child: [{
                              tag: "path",
                              attr: {
                                  fillRule: "evenodd",
                                  d: "M1.5 7.125c0-1.036.84-1.875 1.875-1.875h6c1.036 0 1.875.84 1.875 1.875v3.75c0 1.036-.84 1.875-1.875 1.875h-6A1.875 1.875 0 011.5 10.875v-3.75zm12 1.5c0-1.036.84-1.875 1.875-1.875h5.25c1.035 0 1.875.84 1.875 1.875v8.25c0 1.035-.84 1.875-1.875 1.875h-5.25a1.875 1.875 0 01-1.875-1.875v-8.25zM3 16.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875v2.25c0 1.035-.84 1.875-1.875 1.875h-5.25A1.875 1.875 0 013 18.375v-2.25z",
                                  clipRule: "evenodd"
                              }
                          }]
                      })(t)
                  }, {})
              }, {
                  name: "Timeline",
                  path: "/timeline.html",
                  icon: (0, i.jsx)(function(t) {
                      return (0, g.w_)({
                          tag: "svg",
                          attr: {
                              viewBox: "0 0 24 24"
                          },
                          child: [{
                              tag: "path",
                              attr: {
                                  fill: "none",
                                  d: "M0 0h24v24H0z"
                              }
                          }, {
                              tag: "path",
                              attr: {
                                  d: "M23 8c0 1.1-.9 2-2 2a1.7 1.7 0 01-.51-.07l-3.56 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07l-4.55 4.56c.05.16.07.33.07.51 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.51.07l4.56-4.55C8.02 9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56A1.7 1.7 0 0119 8c0-1.1.9-2 2-2s2 .9 2 2z"
                              }
                          }]
                      })(t)
                  }, {})
              },{
                  name: "Team",
                  path: "/team.html",
                  icon: (0, i.jsx)(v, {})
              }, {
                  name: "Gallery",
                  path: "/gallery.html",
                  icon: (0, i.jsx)(function(t) {
                      return (0, g.w_)({
                          tag: "svg",
                          attr: {
                              viewBox: "0 0 24 24"
                          },
                          child: [{
                              tag: "path",
                              attr: {
                                  d: "M20 13C18.3221 13 16.7514 13.4592 15.4068 14.2587C16.5908 15.6438 17.5269 17.2471 18.1465 19H20V13ZM16.0037 19C14.0446 14.3021 9.4079 11 4 11V19H16.0037ZM4 9C7.82914 9 11.3232 10.4348 13.9738 12.7961C15.7047 11.6605 17.7752 11 20 11V3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934C2 3.44476 2.45531 3 2.9918 3H6V1H8V5H4V9ZM18 1V5H10V3H16V1H18ZM16.5 10C15.6716 10 15 9.32843 15 8.5C15 7.67157 15.6716 7 16.5 7C17.3284 7 18 7.67157 18 8.5C18 9.32843 17.3284 10 16.5 10Z"
                              }
                          }]
                      })(t)
                  }, {})
              }, {
                  name: "Faqs",
                  path: "/contact.html",
                  icon: (0, i.jsx)(b.MXt, {})
              }],
              S = () => {
                  let t = (0, E.useRouter)(),
                      e = t.pathname,
                      [n, o] = (0, r.useState)(!1),
                      [s, a] = (0, r.useState)(!0),
                      [l, u] = (0, r.useState)(0);

                  function c() {
                      o(t => !t)
                  }
                  return (0, r.useEffect)(() => {
                      let t = () => {
                          let t = window.pageYOffset;
                          a(l > t || t < 10), u(t)
                      };
                      return window.addEventListener("scroll", t), () => {
                          window.removeEventListener("scroll", t)
                      }
                  }, [l]), (0, r.useEffect)(() => {
                      n ? document.body.classList.add("overflow-hidden") : document.body.classList.remove("overflow-hidden")
                  }, [n]), (0, i.jsxs)("div", {
                      className: "z-50",
                      children: [(0, i.jsx)("nav", {
                          className: "flex h-[73px] fixed z-30 justify-center bg-[#050019]/30 backdrop-blur-md w-screen transition-transform duration-500 ease-in-out  ".concat(s ? "translate-y-0" : "-translate-y-full"),
                          children: (0, i.jsxs)("div", {
                              className: "flex items-center lg:justify-evenly justify-between w-full px-4 py-2",
                              children: [(0, i.jsx)("div", {
                                  children: (0, i.jsx)(P(), {
                                      href: "/",
                                      children: (0, i.jsx)("img", {
                                        className:"overflow-hidden",
                                          src:"kaushallogo.png",
                                          width: 180,
                                          height: 32,
                                          alt: "",
                                          priority: !0
                                      })
                                  })
                              }), (0, i.jsx)("div", {
                                  className: "hidden lg:flex",
                                  children: (0, i.jsx)("ul", {
                                      className: "flex items-center justify-center ",
                                      children: j.map((t, n) => (0, i.jsx)("li", {
                                          children: (0, i.jsx)(P(), {
                                              href: t.path,
                                              children: (0, i.jsx)("div", {
                                                  className: "flex flex-col items-center justify-center h-28 mx-3 text-[#F8F3FE] ".concat(e === t.path ? "text-accent" : ""),
                                                  style: {
                                                      fontFamily: "inter, sans-serif",
                                                      fontWeight: 100
                                                  },
                                                  children: (0, i.jsx)("div", {
                                                      className: "text-lg font-thin",
                                                      children: t.name
                                                  })
                                              })
                                          })
                                      }, n))
                                  })
                              }), (0, i.jsx)("div", {
                                  className: "lg:flex hidden",
                                  children: (0, i.jsx)(P(), {
                                      href: "https://forms.gle/EXaY1TBkDB2EHnpB6",
                                      target: "_blank",
                                      children: (0, i.jsx)("button", {
                                          className: "text-white px-3 py-1 rounded-xl font-bold bg-gradient-to-r ease-in-out hover:animate-text from-violet-600 to-indigo-600",
                                          children: "Register now"
                                      })
                                  })
                              }), (0, i.jsx)("div", {
                                  className: "flex lg:hidden",
                                  children: (0, i.jsxs)("svg", {
                                      onClick: c,
                                      width: "60",
                                      height: "49",
                                      viewBox: "0 0 60 49",
                                      fill: "none",
                                      xmlns: "http://www.w3.org/2000/svg",
                                      children: [(0, i.jsx)("path", {
                                          d: "M10 18H47.5",
                                          stroke: "white",
                                          strokeWidth: "4",
                                          strokeLinecap: "round"
                                      }), (0, i.jsx)("path", {
                                          d: "M10 31H47.5",
                                          stroke: "white",
                                          strokeWidth: "4",
                                          strokeLinecap: "round"
                                      })]
                                  })
                              })]
                          })
                      }), n ? (0, i.jsx)(M, {
                          toggleSideNav: c,
                          pathname: e
                      }) : null]
                  })
              },
              M = t => {
                  let {
                      toggleSideNav: e,
                      pathname: n
                  } = t;
                  return (0, i.jsxs)("div", {
                      className: "fixed inset-0 flex z-50 ",
                      children: [(0, i.jsx)("div", {
                          className: "flex-grow  backdrop-blur-sm transition-all duration-300",
                          onClick: e
                      }), (0, i.jsxs)("div", {
                          className: "flex flex-col bg-[#050019]/40 backdrop-blur-md w-72 h-full transition-all duration-300 transform translate-x-0",
                          children: [(0, i.jsx)("div", {
                              className: "flex justify-end p-11 pb-7",
                              children: (0, i.jsxs)("svg", {
                                  onClick: e,
                                  width: "31",
                                  height: "31",
                                  viewBox: "0 0 31 31",
                                  fill: "none",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  children: [(0, i.jsx)("path", {
                                      d: "M29 28.5165L2.4835 2.00001",
                                      stroke: "white",
                                      strokeWidth: "4",
                                      strokeLinecap: "round"
                                  }), (0, i.jsx)("path", {
                                      d: "M2.48352 28.5165L29 2.00001",
                                      stroke: "white",
                                      strokeWidth: "4",
                                      strokeLinecap: "round"
                                  })]
                              })
                          }), (0, i.jsx)("div", {
                              className: "",
                              children: (0, i.jsx)("ul", {
                                  className: "",
                                  children: j.map((t, r) => (0, i.jsx)("li", {
                                      children: (0, i.jsx)(P(), {
                                          onClick: e,
                                          href: t.path,
                                          children: (0, i.jsx)("div", {
                                              className: "flex flex-col justify-start  h-[18px] p-8 px-4  w-[68px] text-[#F8F3FE] ".concat(n === t.path ? "text-accent" : ""),
                                              style: {
                                                  fontFamily: "Space Grotesk, sans-serif"
                                              },
                                              children: (0, i.jsx)("div", {
                                                  className: "text-2xl font-bold",
                                                  children: t.name
                                              })
                                          })
                                      })
                                  }, r))
                              })
                          }), (0, i.jsx)("div", {
                              className: "flex p-4 pt-8",
                              children: (0, i.jsx)(P(), {
                                  href: "https://forms.gle/EXaY1TBkDB2EHnpB6",
                                  target: "_blank",
                                  children: (0, i.jsx)("button", {
                                      className: "text-white px-4 py-2 rounded-xl font-bold bg-gradient-to-r ease-in-out  hover:animate-text from-violet-600 to-indigo-600",
                                      children: "Register now"
                                  })
                              })
                          }), (0, i.jsx)("div", {
                              className: "p-4 pl-6",
                              children: (0, i.jsx)(k, {})
                          })]
                      })]
                  })
              },
              V = () => (0, i.jsx)(i.Fragment, {
                  children: (0, i.jsx)(s(), {
                      children: (0, i.jsx)("link", {
                          rel: "icon",
                          href: "/kaushalogo1.jpg"
                      })
                  })
              }),
              R = t => {
                  let {
                      children: e
                  } = t;
                  return (0, i.jsxs)("div", {
                      className: "page bg-site text-white bg-cover bg-no-repeat ${sora.variable}font-sora relative",
                      children: [(0, i.jsx)(S, {}), (0, i.jsx)(V, {}), e]
                  })
              };
          var O = n(1550);
          let D = {
                  initial: {
                      x: "100%",
                      width: "100%"
                  },
                  animate: {
                      x: "0%",
                      width: "0%"
                  },
                  exit: {
                      x: ["0%", "100%"],
                      width: ["0%", "100%"]
                  }
              },
              L = () => (0, i.jsxs)(i.Fragment, {
                  children: [(0, i.jsx)(O.E.div, {
                      className: "fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#0f101d]",
                      variants: D,
                      initial: "initial",
                      animate: "animate",
                      exit: "exit",
                      transition: {
                          delay: .2,
                          duration: .6,
                          ease: "easeInOut"
                      }
                  }), (0, i.jsx)(O.E.div, {
                      className: "fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-[#20223d]",
                      variants: D,
                      initial: "initial",
                      animate: "animate",
                      exit: "exit",
                      transition: {
                          delay: .4,
                          duration: .6,
                          ease: "easeInOut"
                      }
                  }), (0, i.jsx)(O.E.div, {
                      className: "fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-[#313463]",
                      variants: D,
                      initial: "initial",
                      animate: "animate",
                      exit: "exit",
                      transition: {
                          delay: .6,
                          duration: .6,
                          ease: "easeInOut"
                      }
                  })]
              });
          var F = n(1526),
              G = function(t) {
                  let {
                      Component: e,
                      pageProps: n
                  } = t, r = (0, E.useRouter)();
                  return (0, i.jsxs)(i.Fragment, {
                      children: [(0, i.jsxs)(s(), {
                          children: [(0, i.jsx)("meta", {
                              name: "viewport",
                              content: "width=device-width, initial-scale=1.0"
                          }), " "]
                      }), (0, i.jsxs)(R, {
                          children: [(0, i.jsx)(m, {
                              additionalMetaTags: [{
                                  name: "keywords",
                                  content: ""
                              }],
                              title: "Kaushal",
                              description: "Join Kaushal and let your world-changing ideas shine bright , compete at a National Student Convention with a prize pool of 50,000 rupees and 100,000+ vouchers .",
                              openGraph: {
                                  type: "website",
                                  locale: "en_IE",
                                  url: "https://mujhackx.com/",
                                  siteName: "Kaushal"
                              },
                              twitter: {
                                  handle: "@handle",
                                  site: "@site",
                                  cardType: "summary_large_image"
                              }
                          }), (0, i.jsx)(F.M, {
                              mode: "wait",
                              children: (0, i.jsxs)(O.E.div, {
                                  className: "h-full",
                                  children: [(0, i.jsx)(L, {}), (0, i.jsx)(e, {
                                      ...n
                                  })]
                              }, r.route)
                          })]
                      })]
                  })
              }
      },
      3814: function() {},
      9008: function(t, e, n) {
          t.exports = n(2636)
      },
      5675: function(t, e, n) {
          t.exports = n(3740)
      },
      1664: function(t, e, n) {
          t.exports = n(5569)
      },
      1163: function(t, e, n) {
          t.exports = n(6885)
      },
      9583: function(t, e, n) {
          "use strict";
          n.d(e, {
              MXt: function() {
                  return l
              },
              Zf_: function() {
                  return o
              },
              fWC: function() {
                  return a
              },
              hJX: function() {
                  return r
              },
              ltd: function() {
                  return s
              }
          });
          var i = n(8357);

          function r(t) {
              return (0, i.w_)({
                  tag: "svg",
                  attr: {
                      viewBox: "0 0 496 512"
                  },
                  child: [{
                      tag: "path",
                      attr: {
                          d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                      }
                  }]
              })(t)
          }

          function o(t) {
              return (0, i.w_)({
                  tag: "svg",
                  attr: {
                      viewBox: "0 0 448 512"
                  },
                  child: [{
                      tag: "path",
                      attr: {
                          d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                      }
                  }]
              })(t)
          }

          function s(t) {
              return (0, i.w_)({
                  tag: "svg",
                  attr: {
                      viewBox: "0 0 448 512"
                  },
                  child: [{
                      tag: "path",
                      attr: {
                          d: "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                      }
                  }]
              })(t)
          }

          function a(t) {
              return (0, i.w_)({
                  tag: "svg",
                  attr: {
                      viewBox: "0 0 512 512"
                  },
                  child: [{
                      tag: "path",
                      attr: {
                          d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                      }
                  }]
              })(t)
          }

          function l(t) {
              return (0, i.w_)({
                  tag: "svg",
                  attr: {
                      viewBox: "0 0 512 512"
                  },
                  child: [{
                      tag: "path",
                      attr: {
                          d: "M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"
                      }
                  }]
              })(t)
          }
      },
      8357: function(t, e, n) {
          "use strict";
          n.d(e, {
              w_: function() {
                  return l
              }
          });
          var i = n(7294),
              r = {
                  color: void 0,
                  size: void 0,
                  className: void 0,
                  style: void 0,
                  attr: void 0
              },
              o = i.createContext && i.createContext(r),
              s = function() {
                  return (s = Object.assign || function(t) {
                      for (var e, n = 1, i = arguments.length; n < i; n++)
                          for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                      return t
                  }).apply(this, arguments)
              },
              a = function(t, e) {
                  var n = {};
                  for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && 0 > e.indexOf(i) && (n[i] = t[i]);
                  if (null != t && "function" == typeof Object.getOwnPropertySymbols)
                      for (var r = 0, i = Object.getOwnPropertySymbols(t); r < i.length; r++) 0 > e.indexOf(i[r]) && Object.prototype.propertyIsEnumerable.call(t, i[r]) && (n[i[r]] = t[i[r]]);
                  return n
              };

          function l(t) {
              return function(e) {
                  return i.createElement(u, s({
                      attr: s({}, t.attr)
                  }, e), function t(e) {
                      return e && e.map(function(e, n) {
                          return i.createElement(e.tag, s({
                              key: n
                          }, e.attr), t(e.child))
                      })
                  }(t.child))
              }
          }

          function u(t) {
              var e = function(e) {
                  var n, r = t.attr,
                      o = t.size,
                      l = t.title,
                      u = a(t, ["attr", "size", "title"]),
                      c = o || e.size || "1em";
                  return e.className && (n = e.className), t.className && (n = (n ? n + " " : "") + t.className), i.createElement("svg", s({
                      stroke: "currentColor",
                      fill: "currentColor",
                      strokeWidth: "0"
                  }, e.attr, r, u, {
                      className: n,
                      style: s(s({
                          color: t.color || e.color
                      }, e.style), t.style),
                      height: c,
                      width: c,
                      xmlns: "http://www.w3.org/2000/svg"
                  }), l && i.createElement("title", null, l), t.children)
              };
              return void 0 !== o ? i.createElement(o.Consumer, null, function(t) {
                  return e(t)
              }) : e(r)
          }
      },
      5086: function(t, e, n) {
          "use strict";
          n.d(e, {
              S: function() {
                  return h
              }
          });
          var i = n(6917),
              r = n(5753),
              o = n(5487),
              s = n(4169);

          function a(t, e) {
              return t * Math.sqrt(1 - e * e)
          }
          let l = ["duration", "bounce"],
              u = ["stiffness", "damping", "mass"];

          function c(t, e) {
              return e.some(e => void 0 !== t[e])
          }

          function h({
              keyframes: t,
              restDelta: e,
              restSpeed: n,
              ...h
          }) {
              let d;
              let p = t[0],
                  f = t[t.length - 1],
                  m = {
                      done: !1,
                      value: p
                  },
                  {
                      stiffness: g,
                      damping: v,
                      mass: y,
                      duration: x,
                      velocity: w,
                      isResolvedFromDuration: b
                  } = function(t) {
                      let e = {
                          velocity: 0,
                          stiffness: 100,
                          damping: 10,
                          mass: 1,
                          isResolvedFromDuration: !1,
                          ...t
                      };
                      if (!c(t, u) && c(t, l)) {
                          let n = function({
                              duration: t = 800,
                              bounce: e = .25,
                              velocity: n = 0,
                              mass: r = 1
                          }) {
                              let l, u;
                              (0, o.K)(t <= (0, i.w)(10), "Spring duration must be 10 seconds or less");
                              let c = 1 - e;
                              c = (0, s.u)(.05, 1, c), t = (0, s.u)(.01, 10, (0, i.X)(t)), c < 1 ? (l = e => {
                                  let i = e * c,
                                      r = i * t,
                                      o = a(e, c);
                                  return .001 - (i - n) / o * Math.exp(-r)
                              }, u = e => {
                                  let i = e * c,
                                      r = i * t,
                                      o = Math.pow(c, 2) * Math.pow(e, 2) * t,
                                      s = a(Math.pow(e, 2), c),
                                      u = -l(e) + .001 > 0 ? -1 : 1;
                                  return u * ((r * n + n - o) * Math.exp(-r)) / s
                              }) : (l = e => {
                                  let i = Math.exp(-e * t),
                                      r = (e - n) * t + 1;
                                  return -.001 + i * r
                              }, u = e => {
                                  let i = Math.exp(-e * t),
                                      r = (n - e) * (t * t);
                                  return i * r
                              });
                              let h = 5 / t,
                                  d = function(t, e, n) {
                                      let i = n;
                                      for (let n = 1; n < 12; n++) i -= t(i) / e(i);
                                      return i
                                  }(l, u, h);
                              if (t = (0, i.w)(t), isNaN(d)) return {
                                  stiffness: 100,
                                  damping: 10,
                                  duration: t
                              };
                              {
                                  let e = Math.pow(d, 2) * r;
                                  return {
                                      stiffness: e,
                                      damping: 2 * c * Math.sqrt(r * e),
                                      duration: t
                                  }
                              }
                          }(t);
                          (e = {
                              ...e,
                              ...n,
                              mass: 1
                          }).isResolvedFromDuration = !0
                      }
                      return e
                  }({
                      ...h,
                      velocity: -(0, i.X)(h.velocity || 0)
                  }),
                  C = w || 0,
                  P = v / (2 * Math.sqrt(g * y)),
                  E = f - p,
                  k = (0, i.X)(Math.sqrt(g / y)),
                  A = 5 > Math.abs(E);
              if (n || (n = A ? .01 : 2), e || (e = A ? .005 : .5), P < 1) {
                  let t = a(k, P);
                  d = e => f - Math.exp(-P * k * e) * ((C + P * k * E) / t * Math.sin(t * e) + E * Math.cos(t * e))
              } else if (1 === P) d = t => f - Math.exp(-k * t) * (E + (C + k * E) * t);
              else {
                  let t = k * Math.sqrt(P * P - 1);
                  d = e => {
                      let n = Math.min(t * e, 300);
                      return f - Math.exp(-P * k * e) * ((C + P * k * E) * Math.sinh(n) + t * E * Math.cosh(n)) / t
                  }
              }
              return {
                  calculatedDuration: b && x || null,
                  next: t => {
                      let i = d(t);
                      if (b) m.done = t >= x;
                      else {
                          let o = C;
                          0 !== t && (o = P < 1 ? (0, r.P)(d, t, i) : 0);
                          let s = Math.abs(o) <= n,
                              a = Math.abs(f - i) <= e;
                          m.done = s && a
                      }
                      return m.value = m.done ? f : i, m
                  }
              }
          }
      },
      2284: function(t, e, n) {
          "use strict";
          n.d(e, {
              E: function() {
                  return i
              },
              i: function() {
                  return r
              }
          });
          let i = 2e4;

          function r(t) {
              let e = 0,
                  n = t.next(e);
              for (; !n.done && e < i;) e += 50, n = t.next(e);
              return e >= i ? 1 / 0 : e
          }
      },
      5753: function(t, e, n) {
          "use strict";
          n.d(e, {
              P: function() {
                  return r
              }
          });
          var i = n(3038);

          function r(t, e, n) {
              let r = Math.max(e - 5, 0);
              return (0, i.R)(n - t(r), e - r)
          }
      },
      6380: function(t, e, n) {
          "use strict";
          n.d(e, {
              v: function() {
                  return Q
              }
          });
          var i = n(5487),
              r = n(6917);
          let o = {
                  current: !1
              },
              s = t => Array.isArray(t) && "number" == typeof t[0],
              a = ([t, e, n, i]) => `cubic-bezier(${t}, ${e}, ${n}, ${i})`,
              l = {
                  linear: "linear",
                  ease: "ease",
                  easeIn: "ease-in",
                  easeOut: "ease-out",
                  easeInOut: "ease-in-out",
                  circIn: a([0, .65, .55, 1]),
                  circOut: a([.55, 0, 1, .45]),
                  backIn: a([.31, .01, .66, -.59]),
                  backOut: a([.33, 1.53, .69, .99])
              };
          var u = n(1662);
          let c = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t;

          function h(t, e, n, i) {
              if (t === e && n === i) return u.Z;
              let r = e => (function(t, e, n, i, r) {
                  let o, s;
                  let a = 0;
                  do(o = c(s = e + (n - e) / 2, i, r) - t) > 0 ? n = s : e = s; while (Math.abs(o) > 1e-7 && ++a < 12);
                  return s
              })(e, 0, 1, t, n);
              return t => 0 === t || 1 === t ? t : c(r(t), e, i)
          }
          let d = h(.42, 0, 1, 1),
              p = h(0, 0, .58, 1),
              f = h(.42, 0, .58, 1);
          var m = n(3338),
              g = n(7255),
              v = n(415),
              y = n(5129);
          let x = h(.33, 1.53, .69, .99),
              w = (0, y.M)(x),
              b = (0, v.o)(w),
              C = t => (t *= 2) < 1 ? .5 * w(t) : .5 * (2 - Math.pow(2, -10 * (t - 1))),
              P = {
                  linear: u.Z,
                  easeIn: d,
                  easeInOut: f,
                  easeOut: p,
                  circIn: g.Z7,
                  circInOut: g.X7,
                  circOut: g.Bn,
                  backIn: w,
                  backInOut: b,
                  backOut: x,
                  anticipate: C
              },
              E = t => {
                  if (Array.isArray(t)) {
                      (0, i.k)(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
                      let [e, n, r, o] = t;
                      return h(e, n, r, o)
                  }
                  return "string" == typeof t ? ((0, i.k)(void 0 !== P[t], `Invalid easing type '${t}'`), P[t]) : t
              };
          var k = n(4606),
              A = n(599);

          function T({
              duration: t = 300,
              keyframes: e,
              times: n,
              ease: i = "easeInOut"
          }) {
              let r = (0, m.N)(i) ? i.map(E) : E(i),
                  o = {
                      done: !1,
                      value: e[0]
                  },
                  s = (n && n.length === e.length ? n : (0, A.Y)(e)).map(e => e * t),
                  a = (0, k.s)(s, e, {
                      ease: Array.isArray(r) ? r : e.map(() => r || f).splice(0, e.length - 1)
                  });
              return {
                  calculatedDuration: t,
                  next: e => (o.value = a(e), o.done = e >= t, o)
              }
          }
          var j = n(5086),
              S = n(5753);

          function M({
              keyframes: t,
              velocity: e = 0,
              power: n = .8,
              timeConstant: i = 325,
              bounceDamping: r = 10,
              bounceStiffness: o = 500,
              modifyTarget: s,
              min: a,
              max: l,
              restDelta: u = .5,
              restSpeed: c
          }) {
              let h, d;
              let p = t[0],
                  f = {
                      done: !1,
                      value: p
                  },
                  m = t => void 0 !== a && t < a || void 0 !== l && t > l,
                  g = t => void 0 === a ? l : void 0 === l ? a : Math.abs(a - t) < Math.abs(l - t) ? a : l,
                  v = n * e,
                  y = p + v,
                  x = void 0 === s ? y : s(y);
              x !== y && (v = x - p);
              let w = t => -v * Math.exp(-t / i),
                  b = t => x + w(t),
                  C = t => {
                      let e = w(t),
                          n = b(t);
                      f.done = Math.abs(e) <= u, f.value = f.done ? x : n
                  },
                  P = t => {
                      m(f.value) && (h = t, d = (0, j.S)({
                          keyframes: [f.value, g(f.value)],
                          velocity: (0, S.P)(b, t, f.value),
                          damping: r,
                          stiffness: o,
                          restDelta: u,
                          restSpeed: c
                      }))
                  };
              return P(0), {
                  calculatedDuration: null,
                  next: t => {
                      let e = !1;
                      return (d || void 0 !== h || (e = !0, C(t), P(t)), void 0 !== h && t > h) ? d.next(t - h) : (e || C(t), f)
                  }
              }
          }
          var V = n(2074);
          let R = t => {
              let e = ({
                  timestamp: e
              }) => t(e);
              return {
                  start: () => V.Wi.update(e, !0),
                  stop: () => (0, V.Pn)(e),
                  now: () => V.w0.isProcessing ? V.w0.timestamp : performance.now()
              }
          };
          var O = n(4169),
              D = n(2284);
          let L = {
              decay: M,
              inertia: M,
              tween: T,
              keyframes: T,
              spring: j.S
          };

          function F({
              autoplay: t = !0,
              delay: e = 0,
              driver: n = R,
              keyframes: i,
              type: o = "keyframes",
              repeat: s = 0,
              repeatDelay: a = 0,
              repeatType: l = "loop",
              onPlay: u,
              onStop: c,
              onComplete: h,
              onUpdate: d,
              ...p
          }) {
              let f, m, g, v, y, x = 1,
                  w = !1,
                  b = () => {
                      m = new Promise(t => {
                          f = t
                      })
                  };
              b();
              let C = L[o] || T;
              C !== T && "number" != typeof i[0] && (v = (0, k.s)([0, 100], i, {
                  clamp: !1
              }), i = [0, 100]);
              let P = C({
                  ...p,
                  keyframes: i
              });
              "mirror" === l && (y = C({
                  ...p,
                  keyframes: [...i].reverse(),
                  velocity: -(p.velocity || 0)
              }));
              let E = "idle",
                  A = null,
                  j = null,
                  S = null;
              null === P.calculatedDuration && s && (P.calculatedDuration = (0, D.i)(P));
              let {
                  calculatedDuration: M
              } = P, V = 1 / 0, F = 1 / 0;
              null !== M && (F = (V = M + a) * (s + 1) - a);
              let G = 0,
                  B = t => {
                      if (null === j) return;
                      x > 0 && (j = Math.min(j, t)), x < 0 && (j = Math.min(t - F / x, j)), G = null !== A ? A : Math.round(t - j) * x;
                      let n = G - e * (x >= 0 ? 1 : -1),
                          r = x >= 0 ? n < 0 : n > F;
                      G = Math.max(n, 0), "finished" === E && null === A && (G = F);
                      let o = G,
                          u = P;
                      if (s) {
                          let t = Math.min(G, F) / V,
                              e = Math.floor(t),
                              n = t % 1;
                          !n && t >= 1 && (n = 1), 1 === n && e--, e = Math.min(e, s + 1);
                          let i = !!(e % 2);
                          i && ("reverse" === l ? (n = 1 - n, a && (n -= a / V)) : "mirror" === l && (u = y)), o = (0, O.u)(0, 1, n) * V
                      }
                      let c = r ? {
                          done: !1,
                          value: i[0]
                      } : u.next(o);
                      v && (c.value = v(c.value));
                      let {
                          done: h
                      } = c;
                      r || null === M || (h = x >= 0 ? G >= F : G <= 0);
                      let p = null === A && ("finished" === E || "running" === E && h);
                      return d && d(c.value), p && _(), c
                  },
                  N = () => {
                      g && g.stop(), g = void 0
                  },
                  I = () => {
                      E = "idle", N(), f(), b(), j = S = null
                  },
                  _ = () => {
                      E = "finished", h && h(), N(), f()
                  },
                  W = () => {
                      if (w) return;
                      g || (g = n(B));
                      let t = g.now();
                      u && u(), null !== A ? j = t - A : j && "finished" !== E || (j = t), "finished" === E && b(), S = j, A = null, E = "running", g.start()
                  };
              t && W();
              let z = {
                  then: (t, e) => m.then(t, e),
                  get time() {
                      return (0, r.X)(G)
                  },
                  set time(newTime) {
                      G = newTime = (0, r.w)(newTime), null === A && g && 0 !== x ? j = g.now() - newTime / x : A = newTime
                  },
                  get duration() {
                      let t = null === P.calculatedDuration ? (0, D.i)(P) : P.calculatedDuration;
                      return (0, r.X)(t)
                  },
                  get speed() {
                      return x
                  },
                  set speed(newSpeed) {
                      if (newSpeed === x || !g) return;
                      x = newSpeed, z.time = (0, r.X)(G)
                  },
                  get state() {
                      return E
                  },
                  play: W,
                  pause: () => {
                      E = "paused", A = G
                  },
                  stop: () => {
                      w = !0, "idle" !== E && (E = "idle", c && c(), I())
                  },
                  cancel: () => {
                      null !== S && B(S), I()
                  },
                  complete: () => {
                      E = "finished"
                  },
                  sample: t => (j = 0, B(t))
              };
              return z
          }
          var G = n(4522);
          let B = (0, G.X)(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
              N = new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"]),
              I = (t, e) => "spring" === e.type || "backgroundColor" === t || ! function t(e) {
                  return !!(!e || "string" == typeof e && l[e] || s(e) || Array.isArray(e) && e.every(t))
              }(e.ease);
          var _ = n(4714);
          let W = {
                  type: "spring",
                  stiffness: 500,
                  damping: 25,
                  restSpeed: 10
              },
              z = t => ({
                  type: "spring",
                  stiffness: 550,
                  damping: 0 === t ? 2 * Math.sqrt(550) : 30,
                  restSpeed: 10
              }),
              H = {
                  type: "keyframes",
                  duration: .8
              },
              U = {
                  type: "keyframes",
                  ease: [.25, .1, .35, 1],
                  duration: .3
              },
              $ = (t, {
                  keyframes: e
              }) => e.length > 2 ? H : _.G.has(t) ? t.startsWith("scale") ? z(e[1]) : W : U;
          var Z = n(9037);
          let X = (t, e) => "zIndex" !== t && !!("number" == typeof e || Array.isArray(e) || "string" == typeof e && (Z.P.test(e) || "0" === e) && !e.startsWith("url("));
          var Y = n(9135),
              q = n(681),
              K = n(1056);
          let J = {
                  skipAnimations: !1
              },
              Q = (t, e, n, c = {}) => h => {
                  let d = (0, K.e)(c, t) || {},
                      p = d.delay || c.delay || 0,
                      {
                          elapsed: f = 0
                      } = c;
                  f -= (0, r.w)(p);
                  let m = function(t, e, n, i) {
                          let r, o;
                          let s = X(e, n);
                          r = Array.isArray(n) ? [...n] : [null, n];
                          let a = void 0 !== i.from ? i.from : t.get(),
                              l = [];
                          for (let t = 0; t < r.length; t++) {
                              var u;
                              null === r[t] && (r[t] = 0 === t ? a : r[t - 1]), ("number" == typeof(u = r[t]) ? 0 === u : null !== u ? "none" === u || "0" === u || (0, q.W)(u) : void 0) && l.push(t), "string" == typeof r[t] && "none" !== r[t] && "0" !== r[t] && (o = r[t])
                          }
                          if (s && l.length && o)
                              for (let t = 0; t < l.length; t++) {
                                  let n = l[t];
                                  r[n] = (0, Y.T)(e, o)
                              }
                          return r
                      }(e, t, n, d),
                      g = m[0],
                      v = m[m.length - 1],
                      y = X(t, g),
                      x = X(t, v);
                  (0, i.K)(y === x, `You are trying to animate ${t} from "${g}" to "${v}". ${g} is not an animatable value - to enable this animation set ${g} to a value animatable to ${v} via the \`style\` property.`);
                  let w = {
                      keyframes: m,
                      velocity: e.getVelocity(),
                      ease: "easeOut",
                      ...d,
                      delay: -f,
                      onUpdate: t => {
                          e.set(t), d.onUpdate && d.onUpdate(t)
                      },
                      onComplete: () => {
                          h(), d.onComplete && d.onComplete()
                      }
                  };
                  if ((0, K.r)(d) || (w = {
                          ...w,
                          ...$(t, w)
                      }), w.duration && (w.duration = (0, r.w)(w.duration)), w.repeatDelay && (w.repeatDelay = (0, r.w)(w.repeatDelay)), !y || !x || o.current || !1 === d.type || J.skipAnimations) return function({
                      keyframes: t,
                      delay: e,
                      onUpdate: n,
                      onComplete: i
                  }) {
                      let r = () => (n && n(t[t.length - 1]), i && i(), {
                          time: 0,
                          speed: 1,
                          duration: 0,
                          play: u.Z,
                          pause: u.Z,
                          stop: u.Z,
                          then: t => (t(), Promise.resolve()),
                          cancel: u.Z,
                          complete: u.Z
                      });
                      return e ? F({
                          keyframes: [0, 1],
                          duration: 0,
                          delay: e,
                          onComplete: r
                      }) : r()
                  }(o.current ? {
                      ...w,
                      delay: 0
                  } : w);
                  if (!c.isHandoff && e.owner && e.owner.current instanceof HTMLElement && !e.owner.getProps().onUpdate) {
                      let n = function(t, e, {
                          onUpdate: n,
                          onComplete: i,
                          ...o
                      }) {
                          let c, h;
                          let d = B() && N.has(e) && !o.repeatDelay && "mirror" !== o.repeatType && 0 !== o.damping && "inertia" !== o.type;
                          if (!d) return !1;
                          let p = !1,
                              f = !1,
                              m = () => {
                                  h = new Promise(t => {
                                      c = t
                                  })
                              };
                          m();
                          let {
                              keyframes: g,
                              duration: v = 300,
                              ease: y,
                              times: x
                          } = o;
                          if (I(e, o)) {
                              let t = F({
                                      ...o,
                                      repeat: 0,
                                      delay: 0
                                  }),
                                  e = {
                                      done: !1,
                                      value: g[0]
                                  },
                                  n = [],
                                  i = 0;
                              for (; !e.done && i < 2e4;) n.push((e = t.sample(i)).value), i += 10;
                              x = void 0, g = n, v = i - 10, y = "linear"
                          }
                          let w = function(t, e, n, {
                                  delay: i = 0,
                                  duration: r,
                                  repeat: o = 0,
                                  repeatType: u = "loop",
                                  ease: c,
                                  times: h
                              } = {}) {
                                  let d = {
                                      [e]: n
                                  };
                                  h && (d.offset = h);
                                  let p = function t(e) {
                                      if (e) return s(e) ? a(e) : Array.isArray(e) ? e.map(t) : l[e]
                                  }(c);
                                  return Array.isArray(p) && (d.easing = p), t.animate(d, {
                                      delay: i,
                                      duration: r,
                                      easing: Array.isArray(p) ? "linear" : p,
                                      fill: "both",
                                      iterations: o + 1,
                                      direction: "reverse" === u ? "alternate" : "normal"
                                  })
                              }(t.owner.current, e, g, {
                                  ...o,
                                  duration: v,
                                  ease: y,
                                  times: x
                              }),
                              b = () => {
                                  f = !1, w.cancel()
                              },
                              C = () => {
                                  f = !0, V.Wi.update(b), c(), m()
                              };
                          w.onfinish = () => {
                              f || (t.set(function(t, {
                                  repeat: e,
                                  repeatType: n = "loop"
                              }) {
                                  let i = e && "loop" !== n && e % 2 == 1 ? 0 : t.length - 1;
                                  return t[i]
                              }(g, o)), i && i(), C())
                          };
                          let P = {
                              then: (t, e) => h.then(t, e),
                              attachTimeline: t => (w.timeline = t, w.onfinish = null, u.Z),
                              get time() {
                                  return (0, r.X)(w.currentTime || 0)
                              },
                              set time(newTime) {
                                  w.currentTime = (0, r.w)(newTime)
                              },
                              get speed() {
                                  return w.playbackRate
                              },
                              set speed(newSpeed) {
                                  w.playbackRate = newSpeed
                              },
                              get duration() {
                                  return (0, r.X)(v)
                              },
                              play: () => {
                                  p || (w.play(), (0, V.Pn)(b))
                              },
                              pause: () => w.pause(),
                              stop: () => {
                                  if (p = !0, "idle" === w.playState) return;
                                  let {
                                      currentTime: e
                                  } = w;
                                  if (e) {
                                      let n = F({
                                          ...o,
                                          autoplay: !1
                                      });
                                      t.setWithVelocity(n.sample(e - 10).value, n.sample(e).value, 10)
                                  }
                                  C()
                              },
                              complete: () => {
                                  f || w.finish()
                              },
                              cancel: C
                          };
                          return P
                      }(e, t, w);
                      if (n) return n
                  }
                  return F(w)
              }
      },
      1059: function(t, e, n) {
          "use strict";
          n.d(e, {
              D: function() {
                  return s
              }
          });
          var i = n(6380),
              r = n(3234),
              o = n(406);

          function s(t, e, n) {
              let s = (0, o.i)(t) ? t : (0, r.BX)(t);
              return s.start((0, i.v)("", s, e, n)), s.animation
          }
      },
      2711: function(t, e, n) {
          "use strict";
          n.d(e, {
              w: function() {
                  return c
              }
          });
          var i = n(4714),
              r = n(8588),
              o = n(6380),
              s = n(2490),
              a = n(4330),
              l = n(1056),
              u = n(2074);

          function c(t, e, {
              delay: n = 0,
              transitionOverride: c,
              type: h
          } = {}) {
              let {
                  transition: d = t.getDefaultTransition(),
                  transitionEnd: p,
                  ...f
              } = t.makeTargetAnimatable(e), m = t.getValue("willChange");
              c && (d = c);
              let g = [],
                  v = h && t.animationState && t.animationState.getState()[h];
              for (let e in f) {
                  let a = t.getValue(e),
                      c = f[e];
                  if (!a || void 0 === c || v && function({
                          protectedKeys: t,
                          needsAnimating: e
                      }, n) {
                          let i = t.hasOwnProperty(n) && !0 !== e[n];
                          return e[n] = !1, i
                      }(v, e)) continue;
                  let h = {
                      delay: n,
                      elapsed: 0,
                      ...(0, l.e)(d || {}, e)
                  };
                  if (window.HandoffAppearAnimations) {
                      let n = t.getProps()[r.M];
                      if (n) {
                          let t = window.HandoffAppearAnimations(n, e, a, u.Wi);
                          null !== t && (h.elapsed = t, h.isHandoff = !0)
                      }
                  }
                  let p = !h.isHandoff && ! function(t, e) {
                      let n = t.get();
                      if (!Array.isArray(e)) return n !== e;
                      for (let t = 0; t < e.length; t++)
                          if (e[t] !== n) return !0
                  }(a, c);
                  if ("spring" === h.type && (a.getVelocity() || h.velocity) && (p = !1), a.animation && (p = !1), p) continue;
                  a.start((0, o.v)(e, a, c, t.shouldReduceMotion && i.G.has(e) ? {
                      type: !1
                  } : h));
                  let y = a.animation;
                  (0, s.L)(m) && (m.add(e), y.then(() => m.remove(e))), g.push(y)
              }
              return p && Promise.all(g).then(() => {
                  p && (0, a.CD)(t, p)
              }), g
          }
      },
      6912: function(t, e, n) {
          "use strict";
          n.d(e, {
              d: function() {
                  return a
              }
          });
          var i = n(2248),
              r = n(2711);

          function o(t, e, n = {}) {
              let a = (0, i.x)(t, e, n.custom),
                  {
                      transition: l = t.getDefaultTransition() || {}
                  } = a || {};
              n.transitionOverride && (l = n.transitionOverride);
              let u = a ? () => Promise.all((0, r.w)(t, a, n)) : () => Promise.resolve(),
                  c = t.variantChildren && t.variantChildren.size ? (i = 0) => {
                      let {
                          delayChildren: r = 0,
                          staggerChildren: a,
                          staggerDirection: u
                      } = l;
                      return function(t, e, n = 0, i = 0, r = 1, a) {
                          let l = [],
                              u = (t.variantChildren.size - 1) * i,
                              c = 1 === r ? (t = 0) => t * i : (t = 0) => u - t * i;
                          return Array.from(t.variantChildren).sort(s).forEach((t, i) => {
                              t.notify("AnimationStart", e), l.push(o(t, e, {
                                  ...a,
                                  delay: n + c(i)
                              }).then(() => t.notify("AnimationComplete", e)))
                          }), Promise.all(l)
                      }(t, e, r + i, a, u, n)
                  } : () => Promise.resolve(),
                  {
                      when: h
                  } = l;
              if (!h) return Promise.all([u(), c(n.delay)]);
              {
                  let [t, e] = "beforeChildren" === h ? [u, c] : [c, u];
                  return t().then(() => e())
              }
          }

          function s(t, e) {
              return t.sortNodePosition(e)
          }

          function a(t, e, n = {}) {
              let s;
              if (t.notify("AnimationStart", e), Array.isArray(e)) {
                  let i = e.map(e => o(t, e, n));
                  s = Promise.all(i)
              } else if ("string" == typeof e) s = o(t, e, n);
              else {
                  let o = "function" == typeof e ? (0, i.x)(t, e, n.custom) : e;
                  s = Promise.all((0, r.w)(t, o, n))
              }
              return s.then(() => t.notify("AnimationComplete", e))
          }
      },
      8588: function(t, e, n) {
          "use strict";
          n.d(e, {
              M: function() {
                  return r
              }
          });
          var i = n(3193);
          let r = "data-" + (0, i.D)("framerAppearId")
      },
      2445: function(t, e, n) {
          "use strict";

          function i(t) {
              return null !== t && "object" == typeof t && "function" == typeof t.start
          }
          n.d(e, {
              H: function() {
                  return i
              }
          })
      },
      8488: function(t, e, n) {
          "use strict";
          n.d(e, {
              C: function() {
                  return i
              }
          });
          let i = t => Array.isArray(t)
      },
      1056: function(t, e, n) {
          "use strict";

          function i({
              when: t,
              delay: e,
              delayChildren: n,
              staggerChildren: i,
              staggerDirection: r,
              repeat: o,
              repeatType: s,
              repeatDelay: a,
              from: l,
              elapsed: u,
              ...c
          }) {
              return !!Object.keys(c).length
          }

          function r(t, e) {
              return t[e] || t.default || t
          }
          n.d(e, {
              e: function() {
                  return r
              },
              r: function() {
                  return i
              }
          })
      },
      1526: function(t, e, n) {
          "use strict";
          n.d(e, {
              M: function() {
                  return g
              }
          });
          var i = n(7294),
              r = n(8868);

          function o() {
              let t = (0, i.useRef)(!1);
              return (0, r.L)(() => (t.current = !0, () => {
                  t.current = !1
              }), []), t
          }
          var s = n(2074),
              a = n(240),
              l = n(6681);
          class u extends i.Component {
              getSnapshotBeforeUpdate(t) {
                  let e = this.props.childRef.current;
                  if (e && t.isPresent && !this.props.isPresent) {
                      let t = this.props.sizeRef.current;
                      t.height = e.offsetHeight || 0, t.width = e.offsetWidth || 0, t.top = e.offsetTop, t.left = e.offsetLeft
                  }
                  return null
              }
              componentDidUpdate() {}
              render() {
                  return this.props.children
              }
          }

          function c({
              children: t,
              isPresent: e
          }) {
              let n = (0, i.useId)(),
                  r = (0, i.useRef)(null),
                  o = (0, i.useRef)({
                      width: 0,
                      height: 0,
                      top: 0,
                      left: 0
                  });
              return (0, i.useInsertionEffect)(() => {
                  let {
                      width: t,
                      height: i,
                      top: s,
                      left: a
                  } = o.current;
                  if (e || !r.current || !t || !i) return;
                  r.current.dataset.motionPopId = n;
                  let l = document.createElement("style");
                  return document.head.appendChild(l), l.sheet && l.sheet.insertRule(`
        [data-motion-pop-id="${n}"] {
          position: absolute !important;
          width: ${t}px !important;
          height: ${i}px !important;
          top: ${s}px !important;
          left: ${a}px !important;
        }
      `), () => {
                      document.head.removeChild(l)
                  }
              }, [e]), i.createElement(u, {
                  isPresent: e,
                  childRef: r,
                  sizeRef: o
              }, i.cloneElement(t, {
                  ref: r
              }))
          }
          let h = ({
              children: t,
              initial: e,
              isPresent: n,
              onExitComplete: r,
              custom: o,
              presenceAffectsLayout: s,
              mode: u
          }) => {
              let h = (0, l.h)(d),
                  p = (0, i.useId)(),
                  f = (0, i.useMemo)(() => ({
                      id: p,
                      initial: e,
                      isPresent: n,
                      custom: o,
                      onExitComplete: t => {
                          for (let e of (h.set(t, !0), h.values()))
                              if (!e) return;
                          r && r()
                      },
                      register: t => (h.set(t, !1), () => h.delete(t))
                  }), s ? void 0 : [n]);
              return (0, i.useMemo)(() => {
                  h.forEach((t, e) => h.set(e, !1))
              }, [n]), i.useEffect(() => {
                  n || h.size || !r || r()
              }, [n]), "popLayout" === u && (t = i.createElement(c, {
                  isPresent: n
              }, t)), i.createElement(a.O.Provider, {
                  value: f
              }, t)
          };

          function d() {
              return new Map
          }
          var p = n(5364),
              f = n(5487);
          let m = t => t.key || "",
              g = ({
                  children: t,
                  custom: e,
                  initial: n = !0,
                  onExitComplete: a,
                  exitBeforeEnter: l,
                  presenceAffectsLayout: u = !0,
                  mode: c = "sync"
              }) => {
                  var d;
                  (0, f.k)(!l, "Replace exitBeforeEnter with mode='wait'");
                  let g = (0, i.useContext)(p.p).forceRender || function() {
                          let t = o(),
                              [e, n] = (0, i.useState)(0),
                              r = (0, i.useCallback)(() => {
                                  t.current && n(e + 1)
                              }, [e]),
                              a = (0, i.useCallback)(() => s.Wi.postRender(r), [r]);
                          return [a, e]
                      }()[0],
                      v = o(),
                      y = function(t) {
                          let e = [];
                          return i.Children.forEach(t, t => {
                              (0, i.isValidElement)(t) && e.push(t)
                          }), e
                      }(t),
                      x = y,
                      w = (0, i.useRef)(new Map).current,
                      b = (0, i.useRef)(x),
                      C = (0, i.useRef)(new Map).current,
                      P = (0, i.useRef)(!0);
                  if ((0, r.L)(() => {
                          P.current = !1,
                              function(t, e) {
                                  t.forEach(t => {
                                      let n = m(t);
                                      e.set(n, t)
                                  })
                              }(y, C), b.current = x
                      }), d = () => {
                          P.current = !0, C.clear(), w.clear()
                      }, (0, i.useEffect)(() => () => d(), []), P.current) return i.createElement(i.Fragment, null, x.map(t => i.createElement(h, {
                      key: m(t),
                      isPresent: !0,
                      initial: !!n && void 0,
                      presenceAffectsLayout: u,
                      mode: c
                  }, t)));
                  x = [...x];
                  let E = b.current.map(m),
                      k = y.map(m),
                      A = E.length;
                  for (let t = 0; t < A; t++) {
                      let e = E[t]; - 1 !== k.indexOf(e) || w.has(e) || w.set(e, void 0)
                  }
                  return "wait" === c && w.size && (x = []), w.forEach((t, n) => {
                      if (-1 !== k.indexOf(n)) return;
                      let r = C.get(n);
                      if (!r) return;
                      let o = E.indexOf(n),
                          s = t;
                      if (!s) {
                          let t = () => {
                              w.delete(n);
                              let t = Array.from(C.keys()).filter(t => !k.includes(t));
                              if (t.forEach(t => C.delete(t)), b.current = y.filter(e => {
                                      let i = m(e);
                                      return i === n || t.includes(i)
                                  }), !w.size) {
                                  if (!1 === v.current) return;
                                  g(), a && a()
                              }
                          };
                          s = i.createElement(h, {
                              key: m(r),
                              isPresent: !1,
                              onExitComplete: t,
                              custom: e,
                              presenceAffectsLayout: u,
                              mode: c
                          }, r), w.set(n, s)
                      }
                      x.splice(o, 0, s)
                  }), x = x.map(t => {
                      let e = t.key;
                      return w.has(e) ? t : i.createElement(h, {
                          key: m(t),
                          isPresent: !0,
                          presenceAffectsLayout: u,
                          mode: c
                      }, t)
                  }), i.createElement(i.Fragment, null, w.size ? x : x.map(t => (0, i.cloneElement)(t)))
              }
      },
      5364: function(t, e, n) {
          "use strict";
          n.d(e, {
              p: function() {
                  return r
              }
          });
          var i = n(7294);
          let r = (0, i.createContext)({})
      },
      6014: function(t, e, n) {
          "use strict";
          n.d(e, {
              _: function() {
                  return r
              }
          });
          var i = n(7294);
          let r = (0, i.createContext)({
              transformPagePoint: t => t,
              isStatic: !1,
              reducedMotion: "never"
          })
      },
      240: function(t, e, n) {
          "use strict";
          n.d(e, {
              O: function() {
                  return r
              }
          });
          var i = n(7294);
          let r = (0, i.createContext)(null)
      },
      7255: function(t, e, n) {
          "use strict";
          n.d(e, {
              Bn: function() {
                  return s
              },
              X7: function() {
                  return a
              },
              Z7: function() {
                  return o
              }
          });
          var i = n(415),
              r = n(5129);
          let o = t => 1 - Math.sin(Math.acos(t)),
              s = (0, r.M)(o),
              a = (0, i.o)(o)
      },
      415: function(t, e, n) {
          "use strict";
          n.d(e, {
              o: function() {
                  return i
              }
          });
          let i = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2
      },
      5129: function(t, e, n) {
          "use strict";
          n.d(e, {
              M: function() {
                  return i
              }
          });
          let i = t => e => 1 - t(1 - e)
      },
      3338: function(t, e, n) {
          "use strict";
          n.d(e, {
              N: function() {
                  return i
              }
          });
          let i = t => Array.isArray(t) && "number" != typeof t[0]
      },
      2074: function(t, e, n) {
          "use strict";
          n.d(e, {
              Pn: function() {
                  return a
              },
              Wi: function() {
                  return s
              },
              w0: function() {
                  return l
              },
              S6: function() {
                  return u
              }
          });
          var i = n(1662);
          class r {
              constructor() {
                  this.order = [], this.scheduled = new Set
              }
              add(t) {
                  if (!this.scheduled.has(t)) return this.scheduled.add(t), this.order.push(t), !0
              }
              remove(t) {
                  let e = this.order.indexOf(t); - 1 !== e && (this.order.splice(e, 1), this.scheduled.delete(t))
              }
              clear() {
                  this.order.length = 0, this.scheduled.clear()
              }
          }
          let o = ["prepare", "read", "update", "preRender", "render", "postRender"],
              {
                  schedule: s,
                  cancel: a,
                  state: l,
                  steps: u
              } = function(t, e) {
                  let n = !1,
                      i = !0,
                      s = {
                          delta: 0,
                          timestamp: 0,
                          isProcessing: !1
                      },
                      a = o.reduce((t, e) => (t[e] = function(t) {
                          let e = new r,
                              n = new r,
                              i = 0,
                              o = !1,
                              s = !1,
                              a = new WeakSet,
                              l = {
                                  schedule: (t, r = !1, s = !1) => {
                                      let l = s && o,
                                          u = l ? e : n;
                                      return r && a.add(t), u.add(t) && l && o && (i = e.order.length), t
                                  },
                                  cancel: t => {
                                      n.remove(t), a.delete(t)
                                  },
                                  process: r => {
                                      if (o) {
                                          s = !0;
                                          return
                                      }
                                      if (o = !0, [e, n] = [n, e], n.clear(), i = e.order.length)
                                          for (let n = 0; n < i; n++) {
                                              let i = e.order[n];
                                              i(r), a.has(i) && (l.schedule(i), t())
                                          }
                                      o = !1, s && (s = !1, l.process(r))
                                  }
                              };
                          return l
                      }(() => n = !0), t), {}),
                      l = t => a[t].process(s),
                      u = () => {
                          let r = performance.now();
                          n = !1, s.delta = i ? 1e3 / 60 : Math.max(Math.min(r - s.timestamp, 40), 1), s.timestamp = r, s.isProcessing = !0, o.forEach(l), s.isProcessing = !1, n && e && (i = !1, t(u))
                      },
                      c = () => {
                          n = !0, i = !0, s.isProcessing || t(u)
                      },
                      h = o.reduce((t, e) => {
                          let i = a[e];
                          return t[e] = (t, e = !1, r = !1) => (n || c(), i.schedule(t, e, r)), t
                      }, {}),
                      d = t => o.forEach(e => a[e].cancel(t));
                  return {
                      schedule: h,
                      cancel: d,
                      state: s,
                      steps: a
                  }
              }("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : i.Z, !0)
      },
      9442: function(t, e, n) {
          "use strict";
          n.d(e, {
              A: function() {
                  return r
              }
          });
          let i = {
                  animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
                  exit: ["exit"],
                  drag: ["drag", "dragControls"],
                  focus: ["whileFocus"],
                  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
                  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
                  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
                  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
                  layout: ["layout", "layoutId"]
              },
              r = {};
          for (let t in i) r[t] = {
              isEnabled: e => i[t].some(t => !!e[t])
          }
      },
      6816: function(t, e, n) {
          "use strict";
          n.d(e, {
              j: function() {
                  return o
              }
          });
          var i = n(4561),
              r = n(4714);

          function o(t, {
              layout: e,
              layoutId: n
          }) {
              return r.G.has(t) || t.startsWith("origin") || (e || void 0 !== n) && (!!i.P[t] || "opacity" === t)
          }
      },
      6117: function(t, e, n) {
          "use strict";

          function i({
              top: t,
              left: e,
              right: n,
              bottom: i
          }) {
              return {
                  x: {
                      min: e,
                      max: n
                  },
                  y: {
                      min: t,
                      max: i
                  }
              }
          }

          function r({
              x: t,
              y: e
          }) {
              return {
                  top: e.min,
                  right: t.max,
                  bottom: e.max,
                  left: t.min
              }
          }

          function o(t, e) {
              if (!e) return t;
              let n = e({
                      x: t.left,
                      y: t.top
                  }),
                  i = e({
                      x: t.right,
                      y: t.bottom
                  });
              return {
                  top: n.y,
                  left: n.x,
                  bottom: i.y,
                  right: i.x
              }
          }
          n.d(e, {
              d7: function() {
                  return o
              },
              i8: function() {
                  return i
              },
              z2: function() {
                  return r
              }
          })
      },
      6e3: function(t, e, n) {
          "use strict";
          n.d(e, {
              D2: function() {
                  return m
              },
              YY: function() {
                  return u
              },
              am: function() {
                  return h
              },
              o2: function() {
                  return l
              },
              q2: function() {
                  return o
              }
          });
          var i = n(22),
              r = n(9527);

          function o(t, e, n) {
              return n + e * (t - n)
          }

          function s(t, e, n, i, r) {
              return void 0 !== r && (t = i + r * (t - i)), i + n * (t - i) + e
          }

          function a(t, e = 0, n = 1, i, r) {
              t.min = s(t.min, e, n, i, r), t.max = s(t.max, e, n, i, r)
          }

          function l(t, {
              x: e,
              y: n
          }) {
              a(t.x, e.translate, e.scale, e.originPoint), a(t.y, n.translate, n.scale, n.originPoint)
          }

          function u(t, e, n, i = !1) {
              let o, s;
              let a = n.length;
              if (a) {
                  e.x = e.y = 1;
                  for (let u = 0; u < a; u++) {
                      s = (o = n[u]).projectionDelta;
                      let a = o.instance;
                      (!a || !a.style || "contents" !== a.style.display) && (i && o.options.layoutScroll && o.scroll && o !== o.root && m(t, {
                          x: -o.scroll.offset.x,
                          y: -o.scroll.offset.y
                      }), s && (e.x *= s.x.scale, e.y *= s.y.scale, l(t, s)), i && (0, r.ud)(o.latestValues) && m(t, o.latestValues))
                  }
                  e.x = c(e.x), e.y = c(e.y)
              }
          }

          function c(t) {
              return Number.isInteger(t) ? t : t > 1.0000000000001 || t < .999999999999 ? t : 1
          }

          function h(t, e) {
              t.min = t.min + e, t.max = t.max + e
          }

          function d(t, e, [n, r, o]) {
              let s = void 0 !== e[o] ? e[o] : .5,
                  l = (0, i.C)(t.min, t.max, s);
              a(t, e[n], e[r], l, e.scale)
          }
          let p = ["x", "scaleX", "originX"],
              f = ["y", "scaleY", "originY"];

          function m(t, e) {
              d(t.x, e, p), d(t.y, e, f)
          }
      },
      1512: function(t, e, n) {
          "use strict";
          n.d(e, {
              dO: function() {
                  return s
              },
              wc: function() {
                  return r
              }
          });
          let i = () => ({
                  translate: 0,
                  scale: 1,
                  origin: 0,
                  originPoint: 0
              }),
              r = () => ({
                  x: i(),
                  y: i()
              }),
              o = () => ({
                  min: 0,
                  max: 0
              }),
              s = () => ({
                  x: o(),
                  y: o()
              })
      },
      4561: function(t, e, n) {
          "use strict";
          n.d(e, {
              B: function() {
                  return r
              },
              P: function() {
                  return i
              }
          });
          let i = {};

          function r(t) {
              Object.assign(i, t)
          }
      },
      9527: function(t, e, n) {
          "use strict";

          function i(t) {
              return void 0 === t || 1 === t
          }

          function r({
              scale: t,
              scaleX: e,
              scaleY: n
          }) {
              return !i(t) || !i(e) || !i(n)
          }

          function o(t) {
              return r(t) || s(t) || t.z || t.rotate || t.rotateX || t.rotateY
          }

          function s(t) {
              var e, n;
              return (e = t.x) && "0%" !== e || (n = t.y) && "0%" !== n
          }
          n.d(e, {
              D_: function() {
                  return s
              },
              Lj: function() {
                  return r
              },
              ud: function() {
                  return o
              }
          })
      },
      6460: function(t, e, n) {
          "use strict";
          n.d(e, {
              J: function() {
                  return o
              },
              z: function() {
                  return s
              }
          });
          var i = n(6117),
              r = n(6e3);

          function o(t, e) {
              return (0, i.i8)((0, i.d7)(t.getBoundingClientRect(), e))
          }

          function s(t, e, n) {
              let i = o(t, n),
                  {
                      scroll: s
                  } = e;
              return s && ((0, r.am)(i.x, s.offset.x), (0, r.am)(i.y, s.offset.y)), i
          }
      },
      1760: function(t, e, n) {
          "use strict";
          n.d(e, {
              J: function() {
                  return Z
              }
          });
          var i = n(4330),
              r = n(5487),
              o = n(3441),
              s = n(7630);
          let a = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

          function l(t, e, n = 1) {
              (0, r.k)(n <= 4, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);
              let [i, u] = function(t) {
                  let e = a.exec(t);
                  if (!e) return [, ];
                  let [, n, i] = e;
                  return [n, i]
              }(t);
              if (!i) return;
              let c = window.getComputedStyle(e).getPropertyValue(i);
              if (c) {
                  let t = c.trim();
                  return (0, o.P)(t) ? parseFloat(t) : t
              }
              return (0, s.tm)(u) ? l(u, e, n + 1) : u
          }
          var u = n(8488),
              c = n(4714),
              h = n(6440),
              d = n(1741),
              p = n(1649),
              f = n(6190);
          let m = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"]),
              g = t => m.has(t),
              v = t => Object.keys(t).some(g),
              y = t => t === p.Rx || t === f.px,
              x = (t, e) => parseFloat(t.split(", ")[e]),
              w = (t, e) => (n, {
                  transform: i
              }) => {
                  if ("none" === i || !i) return 0;
                  let r = i.match(/^matrix3d\((.+)\)$/);
                  if (r) return x(r[1], e);
                  {
                      let e = i.match(/^matrix\((.+)\)$/);
                      return e ? x(e[1], t) : 0
                  }
              },
              b = new Set(["x", "y", "z"]),
              C = c._.filter(t => !b.has(t)),
              P = {
                  width: ({
                      x: t
                  }, {
                      paddingLeft: e = "0",
                      paddingRight: n = "0"
                  }) => t.max - t.min - parseFloat(e) - parseFloat(n),
                  height: ({
                      y: t
                  }, {
                      paddingTop: e = "0",
                      paddingBottom: n = "0"
                  }) => t.max - t.min - parseFloat(e) - parseFloat(n),
                  top: (t, {
                      top: e
                  }) => parseFloat(e),
                  left: (t, {
                      left: e
                  }) => parseFloat(e),
                  bottom: ({
                      y: t
                  }, {
                      top: e
                  }) => parseFloat(e) + (t.max - t.min),
                  right: ({
                      x: t
                  }, {
                      left: e
                  }) => parseFloat(e) + (t.max - t.min),
                  x: w(4, 13),
                  y: w(5, 14)
              };
          P.translateX = P.x, P.translateY = P.y;
          let E = (t, e, n) => {
                  let i = e.measureViewportBox(),
                      r = e.current,
                      o = getComputedStyle(r),
                      {
                          display: s
                      } = o,
                      a = {};
                  "none" === s && e.setStaticValue("display", t.display || "block"), n.forEach(t => {
                      a[t] = P[t](i, o)
                  }), e.render();
                  let l = e.measureViewportBox();
                  return n.forEach(n => {
                      let i = e.getValue(n);
                      i && i.jump(a[n]), t[n] = P[n](l, o)
                  }), t
              },
              k = (t, e, n = {}, i = {}) => {
                  e = {
                      ...e
                  }, i = {
                      ...i
                  };
                  let o = Object.keys(e).filter(g),
                      s = [],
                      a = !1,
                      l = [];
                  if (o.forEach(o => {
                          let c;
                          let d = t.getValue(o);
                          if (!t.hasValue(o)) return;
                          let p = n[o],
                              m = (0, h.C)(p),
                              g = e[o];
                          if ((0, u.C)(g)) {
                              let t = g.length,
                                  e = null === g[0] ? 1 : 0;
                              p = g[e], m = (0, h.C)(p);
                              for (let n = e; n < t && null !== g[n]; n++) c ? (0, r.k)((0, h.C)(g[n]) === c, "All keyframes must be of the same type") : (c = (0, h.C)(g[n]), (0, r.k)(c === m || y(m) && y(c), "Keyframes must be of the same dimension as the current value"))
                          } else c = (0, h.C)(g);
                          if (m !== c) {
                              if (y(m) && y(c)) {
                                  let t = d.get();
                                  "string" == typeof t && d.set(parseFloat(t)), "string" == typeof g ? e[o] = parseFloat(g) : Array.isArray(g) && c === f.px && (e[o] = g.map(parseFloat))
                              } else(null == m ? void 0 : m.transform) && (null == c ? void 0 : c.transform) && (0 === p || 0 === g) ? 0 === p ? d.set(c.transform(p)) : e[o] = m.transform(g) : (a || (s = function(t) {
                                  let e = [];
                                  return C.forEach(n => {
                                      let i = t.getValue(n);
                                      void 0 !== i && (e.push([n, i.get()]), i.set(n.startsWith("scale") ? 1 : 0))
                                  }), e.length && t.render(), e
                              }(t), a = !0), l.push(o), i[o] = void 0 !== i[o] ? i[o] : e[o], d.jump(g))
                          }
                      }), !l.length) return {
                      target: e,
                      transitionEnd: i
                  };
                  {
                      let n = l.indexOf("height") >= 0 ? window.pageYOffset : null,
                          r = E(e, t, l);
                      return s.length && s.forEach(([e, n]) => {
                          t.getValue(e).set(n)
                      }), t.render(), d.j && null !== n && window.scrollTo({
                          top: n
                      }), {
                          target: r,
                          transitionEnd: i
                      }
                  }
              },
              A = (t, e, n, i) => {
                  var r, o;
                  let a = function(t, {
                      ...e
                  }, n) {
                      let i = t.current;
                      if (!(i instanceof Element)) return {
                          target: e,
                          transitionEnd: n
                      };
                      for (let r in n && (n = {
                              ...n
                          }), t.values.forEach(t => {
                              let e = t.get();
                              if (!(0, s.tm)(e)) return;
                              let n = l(e, i);
                              n && t.set(n)
                          }), e) {
                          let t = e[r];
                          if (!(0, s.tm)(t)) continue;
                          let o = l(t, i);
                          o && (e[r] = o, n || (n = {}), void 0 === n[r] && (n[r] = t))
                      }
                      return {
                          target: e,
                          transitionEnd: n
                      }
                  }(t, e, i);
                  return e = a.target, i = a.transitionEnd, r = e, o = i, v(r) ? k(t, r, n, o) : {
                      target: r,
                      transitionEnd: o
                  }
              };
          var T = n(1512),
              j = n(1804);
          let S = {
                  current: null
              },
              M = {
                  current: !1
              };
          var V = n(1560),
              R = n(3234),
              O = n(2490),
              D = n(406),
              L = n(7504),
              F = n(7732),
              G = n(9432),
              B = n(9442),
              N = n(2963),
              I = n(6955),
              _ = n(2074);
          let W = Object.keys(B.A),
              z = W.length,
              H = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"],
              U = N.V.length;
          class $ {
              constructor({
                  parent: t,
                  props: e,
                  presenceContext: n,
                  reducedMotionConfig: i,
                  visualState: r
              }, o = {}) {
                  this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
                      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
                  }, this.scheduleRender = () => _.Wi.render(this.render, !1, !0);
                  let {
                      latestValues: s,
                      renderState: a
                  } = r;
                  this.latestValues = s, this.baseTarget = {
                      ...s
                  }, this.initialValues = e.initial ? {
                      ...s
                  } : {}, this.renderState = a, this.parent = t, this.props = e, this.presenceContext = n, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = i, this.options = o, this.isControllingVariants = (0, L.G)(e), this.isVariantNode = (0, L.M)(e), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(t && t.current);
                  let {
                      willChange: l,
                      ...u
                  } = this.scrapeMotionValuesFromProps(e, {});
                  for (let t in u) {
                      let e = u[t];
                      void 0 !== s[t] && (0, D.i)(e) && (e.set(s[t], !1), (0, O.L)(l) && l.add(t))
                  }
              }
              scrapeMotionValuesFromProps(t, e) {
                  return {}
              }
              mount(t) {
                  this.current = t, I.R.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((t, e) => this.bindToMotionValue(e, t)), M.current || function() {
                      if (M.current = !0, d.j) {
                          if (window.matchMedia) {
                              let t = window.matchMedia("(prefers-reduced-motion)"),
                                  e = () => S.current = t.matches;
                              t.addListener(e), e()
                          } else S.current = !1
                      }
                  }(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || S.current), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
              }
              unmount() {
                  for (let t in I.R.delete(this.current), this.projection && this.projection.unmount(), (0, _.Pn)(this.notifyUpdate), (0, _.Pn)(this.render), this.valueSubscriptions.forEach(t => t()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this), this.events) this.events[t].clear();
                  for (let t in this.features) this.features[t].unmount();
                  this.current = null
              }
              bindToMotionValue(t, e) {
                  let n = c.G.has(t),
                      i = e.on("change", e => {
                          this.latestValues[t] = e, this.props.onUpdate && _.Wi.update(this.notifyUpdate, !1, !0), n && this.projection && (this.projection.isTransformDirty = !0)
                      }),
                      r = e.on("renderRequest", this.scheduleRender);
                  this.valueSubscriptions.set(t, () => {
                      i(), r()
                  })
              }
              sortNodePosition(t) {
                  return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
              }
              loadFeatures({
                  children: t,
                  ...e
              }, n, i, r) {
                  let o, s;
                  for (let t = 0; t < z; t++) {
                      let n = W[t],
                          {
                              isEnabled: i,
                              Feature: r,
                              ProjectionNode: a,
                              MeasureLayout: l
                          } = B.A[n];
                      a && (o = a), i(e) && (!this.features[n] && r && (this.features[n] = new r(this)), l && (s = l))
                  }
                  if (("html" === this.type || "svg" === this.type) && !this.projection && o) {
                      this.projection = new o(this.latestValues, this.parent && this.parent.projection);
                      let {
                          layoutId: t,
                          layout: n,
                          drag: i,
                          dragConstraints: s,
                          layoutScroll: a,
                          layoutRoot: l
                      } = e;
                      this.projection.setOptions({
                          layoutId: t,
                          layout: n,
                          alwaysMeasureLayout: !!i || s && (0, j.I)(s),
                          visualElement: this,
                          scheduleRender: () => this.scheduleRender(),
                          animationType: "string" == typeof n ? n : "both",
                          initialPromotionConfig: r,
                          layoutScroll: a,
                          layoutRoot: l
                      })
                  }
                  return s
              }
              updateFeatures() {
                  for (let t in this.features) {
                      let e = this.features[t];
                      e.isMounted ? e.update() : (e.mount(), e.isMounted = !0)
                  }
              }
              triggerBuild() {
                  this.build(this.renderState, this.latestValues, this.options, this.props)
              }
              measureViewportBox() {
                  return this.current ? this.measureInstanceViewportBox(this.current, this.props) : (0, T.dO)()
              }
              getStaticValue(t) {
                  return this.latestValues[t]
              }
              setStaticValue(t, e) {
                  this.latestValues[t] = e
              }
              makeTargetAnimatable(t, e = !0) {
                  return this.makeTargetAnimatableFromInstance(t, this.props, e)
              }
              update(t, e) {
                  (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = e;
                  for (let e = 0; e < H.length; e++) {
                      let n = H[e];
                      this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
                      let i = t["on" + n];
                      i && (this.propEventSubscriptions[n] = this.on(n, i))
                  }
                  this.prevMotionValues = function(t, e, n) {
                      let {
                          willChange: i
                      } = e;
                      for (let r in e) {
                          let o = e[r],
                              s = n[r];
                          if ((0, D.i)(o)) t.addValue(r, o), (0, O.L)(i) && i.add(r);
                          else if ((0, D.i)(s)) t.addValue(r, (0, R.BX)(o, {
                              owner: t
                          })), (0, O.L)(i) && i.remove(r);
                          else if (s !== o) {
                              if (t.hasValue(r)) {
                                  let e = t.getValue(r);
                                  e.hasAnimated || e.set(o)
                              } else {
                                  let e = t.getStaticValue(r);
                                  t.addValue(r, (0, R.BX)(void 0 !== e ? e : o, {
                                      owner: t
                                  }))
                              }
                          }
                      }
                      for (let i in n) void 0 === e[i] && t.removeValue(i);
                      return e
                  }(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
              }
              getProps() {
                  return this.props
              }
              getVariant(t) {
                  return this.props.variants ? this.props.variants[t] : void 0
              }
              getDefaultTransition() {
                  return this.props.transition
              }
              getTransformPagePoint() {
                  return this.props.transformPagePoint
              }
              getClosestVariantNode() {
                  return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
              }
              getVariantContext(t = !1) {
                  if (t) return this.parent ? this.parent.getVariantContext() : void 0;
                  if (!this.isControllingVariants) {
                      let t = this.parent && this.parent.getVariantContext() || {};
                      return void 0 !== this.props.initial && (t.initial = this.props.initial), t
                  }
                  let e = {};
                  for (let t = 0; t < U; t++) {
                      let n = N.V[t],
                          i = this.props[n];
                      ((0, F.$)(i) || !1 === i) && (e[n] = i)
                  }
                  return e
              }
              addVariantChild(t) {
                  let e = this.getClosestVariantNode();
                  if (e) return e.variantChildren && e.variantChildren.add(t), () => e.variantChildren.delete(t)
              }
              addValue(t, e) {
                  e !== this.values.get(t) && (this.removeValue(t), this.bindToMotionValue(t, e)), this.values.set(t, e), this.latestValues[t] = e.get()
              }
              removeValue(t) {
                  this.values.delete(t);
                  let e = this.valueSubscriptions.get(t);
                  e && (e(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
              }
              hasValue(t) {
                  return this.values.has(t)
              }
              getValue(t, e) {
                  if (this.props.values && this.props.values[t]) return this.props.values[t];
                  let n = this.values.get(t);
                  return void 0 === n && void 0 !== e && (n = (0, R.BX)(e, {
                      owner: this
                  }), this.addValue(t, n)), n
              }
              readValue(t) {
                  var e;
                  return void 0 === this.latestValues[t] && this.current ? null !== (e = this.getBaseTargetFromProps(this.props, t)) && void 0 !== e ? e : this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t]
              }
              setBaseTarget(t, e) {
                  this.baseTarget[t] = e
              }
              getBaseTarget(t) {
                  var e;
                  let {
                      initial: n
                  } = this.props, i = "string" == typeof n || "object" == typeof n ? null === (e = (0, G.o)(this.props, n)) || void 0 === e ? void 0 : e[t] : void 0;
                  if (n && void 0 !== i) return i;
                  let r = this.getBaseTargetFromProps(this.props, t);
                  return void 0 === r || (0, D.i)(r) ? void 0 !== this.initialValues[t] && void 0 === i ? void 0 : this.baseTarget[t] : r
              }
              on(t, e) {
                  return this.events[t] || (this.events[t] = new V.L), this.events[t].add(e)
              }
              notify(t, ...e) {
                  this.events[t] && this.events[t].notify(...e)
              }
          }
          class Z extends $ {
              sortInstanceNodePosition(t, e) {
                  return 2 & t.compareDocumentPosition(e) ? 1 : -1
              }
              getBaseTargetFromProps(t, e) {
                  return t.style ? t.style[e] : void 0
              }
              removeValueFromRenderState(t, {
                  vars: e,
                  style: n
              }) {
                  delete e[t], delete n[t]
              }
              makeTargetAnimatableFromInstance({
                  transition: t,
                  transitionEnd: e,
                  ...n
              }, {
                  transformValues: r
              }, o) {
                  let s = (0, i.P$)(n, t || {}, this);
                  if (r && (e && (e = r(e)), n && (n = r(n)), s && (s = r(s))), o) {
                      (0, i.GJ)(this, n, s);
                      let t = A(this, n, s, e);
                      e = t.transitionEnd, n = t.target
                  }
                  return {
                      transition: t,
                      transitionEnd: e,
                      ...n
                  }
              }
          }
      },
      1550: function(t, e, n) {
          "use strict";
          n.d(e, {
              E: function() {
                  return nt
              }
          });
          var i, r = n(7294),
              o = n(6014);
          let s = (0, r.createContext)({});
          var a = n(240),
              l = n(8868);
          let u = (0, r.createContext)({
              strict: !1
          });
          var c = n(8588),
              h = n(1804),
              d = n(7732),
              p = n(7504);

          function f(t) {
              return Array.isArray(t) ? t.join(" ") : t
          }
          var m = n(9442),
              g = n(1741),
              v = n(5364);
          let y = (0, r.createContext)({}),
              x = Symbol.for("motionComponentSymbol"),
              w = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

          function b(t) {
              if ("string" != typeof t || t.includes("-"));
              else if (w.indexOf(t) > -1 || /[A-Z]/.test(t)) return !0;
              return !1
          }
          var C = n(6816),
              P = n(406),
              E = n(8057);
          let k = () => ({
              style: {},
              transform: {},
              transformOrigin: {},
              vars: {}
          });

          function A(t, e, n) {
              for (let i in e)(0, P.i)(e[i]) || (0, C.j)(i, n) || (t[i] = e[i])
          }

          function T(t, e, n) {
              let i = {},
                  o = function(t, e, n) {
                      let i = t.style || {},
                          o = {};
                      return A(o, i, t), Object.assign(o, function({
                          transformTemplate: t
                      }, e, n) {
                          return (0, r.useMemo)(() => {
                              let i = k();
                              return (0, E.r)(i, e, {
                                  enableHardwareAcceleration: !n
                              }, t), Object.assign({}, i.vars, i.style)
                          }, [e])
                      }(t, e, n)), t.transformValues ? t.transformValues(o) : o
                  }(t, e, n);
              return t.drag && !1 !== t.dragListener && (i.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = !0 === t.drag ? "none" : `pan-${"x" === t.drag ? "y" : "x"}`), void 0 === t.tabIndex && (t.onTap || t.onTapStart || t.whileTap) && (i.tabIndex = 0), i.style = o, i
          }
          let j = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

          function S(t) {
              return t.startsWith("while") || t.startsWith("drag") && "draggable" !== t || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || j.has(t)
          }
          let M = t => !S(t);
          try {
              (i = require("@emotion/is-prop-valid").default) && (M = t => t.startsWith("on") ? !S(t) : i(t))
          } catch (t) {}
          var V = n(5415);
          let R = () => ({
              ...k(),
              attrs: {}
          });
          var O = n(9854);

          function D(t, e, n, i) {
              let o = (0, r.useMemo)(() => {
                  let n = R();
                  return (0, V.i)(n, e, {
                      enableHardwareAcceleration: !1
                  }, (0, O.a)(i), t.transformTemplate), {
                      ...n.attrs,
                      style: {
                          ...n.style
                      }
                  }
              }, [e]);
              if (t.style) {
                  let e = {};
                  A(e, t.style, t), o.style = {
                      ...e,
                      ...o.style
                  }
              }
              return o
          }
          var L = n(8504),
              F = n(6832),
              G = n(2445),
              B = n(9432),
              N = n(6681),
              I = n(8715);

          function _(t) {
              let e = (0, P.i)(t) ? t.get() : t;
              return (0, I.p)(e) ? e.toValue() : e
          }
          let W = t => (e, n) => {
              let i = (0, r.useContext)(s),
                  o = (0, r.useContext)(a.O),
                  l = () => (function({
                      scrapeMotionValuesFromProps: t,
                      createRenderState: e,
                      onMount: n
                  }, i, r, o) {
                      let s = {
                          latestValues: function(t, e, n, i) {
                              let r = {},
                                  o = i(t, {});
                              for (let t in o) r[t] = _(o[t]);
                              let {
                                  initial: s,
                                  animate: a
                              } = t, l = (0, p.G)(t), u = (0, p.M)(t);
                              e && u && !l && !1 !== t.inherit && (void 0 === s && (s = e.initial), void 0 === a && (a = e.animate));
                              let c = !!n && !1 === n.initial;
                              c = c || !1 === s;
                              let h = c ? a : s;
                              if (h && "boolean" != typeof h && !(0, G.H)(h)) {
                                  let e = Array.isArray(h) ? h : [h];
                                  e.forEach(e => {
                                      let n = (0, B.o)(t, e);
                                      if (!n) return;
                                      let {
                                          transitionEnd: i,
                                          transition: o,
                                          ...s
                                      } = n;
                                      for (let t in s) {
                                          let e = s[t];
                                          if (Array.isArray(e)) {
                                              let t = c ? e.length - 1 : 0;
                                              e = e[t]
                                          }
                                          null !== e && (r[t] = e)
                                      }
                                      for (let t in i) r[t] = i[t]
                                  })
                              }
                              return r
                          }(i, r, o, t),
                          renderState: e()
                      };
                      return n && (s.mount = t => n(i, t, s)), s
                  })(t, e, i, o);
              return n ? l() : (0, N.h)(l)
          };
          var z = n(2074);
          let H = {
              useVisualState: W({
                  scrapeMotionValuesFromProps: F.U,
                  createRenderState: R,
                  onMount: (t, e, {
                      renderState: n,
                      latestValues: i
                  }) => {
                      z.Wi.read(() => {
                          try {
                              n.dimensions = "function" == typeof e.getBBox ? e.getBBox() : e.getBoundingClientRect()
                          } catch (t) {
                              n.dimensions = {
                                  x: 0,
                                  y: 0,
                                  width: 0,
                                  height: 0
                              }
                          }
                      }), z.Wi.render(() => {
                          (0, V.i)(n, i, {
                              enableHardwareAcceleration: !1
                          }, (0, O.a)(e.tagName), t.transformTemplate), (0, L.K)(e, n)
                      })
                  }
              })
          };
          var U = n(189);
          let $ = {
              useVisualState: W({
                  scrapeMotionValuesFromProps: U.U,
                  createRenderState: k
              })
          };

          function Z(t, e, n, i = {
              passive: !0
          }) {
              return t.addEventListener(e, n, i), () => t.removeEventListener(e, n)
          }
          let X = t => "mouse" === t.pointerType ? "number" != typeof t.button || t.button <= 0 : !1 !== t.isPrimary;

          function Y(t, e = "page") {
              return {
                  point: {
                      x: t[e + "X"],
                      y: t[e + "Y"]
                  }
              }
          }
          let q = t => e => X(e) && t(e, Y(e));

          function K(t, e, n, i) {
              return Z(t, e, q(n), i)
          }
          var J = n(3624);

          function Q(t) {
              let e = null;
              return () => {
                  let n = () => {
                      e = null
                  };
                  return null === e && (e = t, n)
              }
          }
          let tt = Q("dragHorizontal"),
              te = Q("dragVertical");

          function tn(t) {
              let e = !1;
              if ("y" === t) e = te();
              else if ("x" === t) e = tt();
              else {
                  let t = tt(),
                      n = te();
                  t && n ? e = () => {
                      t(), n()
                  } : (t && t(), n && n())
              }
              return e
          }

          function ti() {
              let t = tn(!0);
              return !t || (t(), !1)
          }
          class tr {
              constructor(t) {
                  this.isMounted = !1, this.node = t
              }
              update() {}
          }

          function to(t, e) {
              let n = "onHover" + (e ? "Start" : "End"),
                  i = (i, r) => {
                      if ("touch" === i.pointerType || ti()) return;
                      let o = t.getProps();
                      t.animationState && o.whileHover && t.animationState.setActive("whileHover", e), o[n] && z.Wi.update(() => o[n](i, r))
                  };
              return K(t.current, "pointer" + (e ? "enter" : "leave"), i, {
                  passive: !t.getProps()[n]
              })
          }
          let ts = (t, e) => !!e && (t === e || ts(t, e.parentElement));
          var ta = n(1662);

          function tl(t, e) {
              if (!e) return;
              let n = new PointerEvent("pointer" + t);
              e(n, Y(n))
          }
          let tu = new WeakMap,
              tc = new WeakMap,
              th = t => {
                  let e = tu.get(t.target);
                  e && e(t)
              },
              td = t => {
                  t.forEach(th)
              },
              tp = {
                  some: 0,
                  all: 1
              };
          var tf = n(8488);

          function tm(t, e) {
              if (!Array.isArray(e)) return !1;
              let n = e.length;
              if (n !== t.length) return !1;
              for (let i = 0; i < n; i++)
                  if (e[i] !== t[i]) return !1;
              return !0
          }
          var tg = n(2248),
              tv = n(2963),
              ty = n(6912);
          let tx = [...tv.e].reverse(),
              tw = tv.e.length;

          function tb(t = !1) {
              return {
                  isActive: t,
                  protectedKeys: {},
                  needsAnimating: {},
                  prevResolvedValues: {}
              }
          }
          let tC = 0;
          var tP = n(5487),
              tE = n(6917);
          let tk = (t, e) => Math.abs(t - e);
          class tA {
              constructor(t, e, {
                  transformPagePoint: n,
                  contextWindow: i,
                  dragSnapToOrigin: r = !1
              } = {}) {
                  if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
                          if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                          let t = tS(this.lastMoveEventInfo, this.history),
                              e = null !== this.startEvent,
                              n = function(t, e) {
                                  let n = tk(t.x, e.x),
                                      i = tk(t.y, e.y);
                                  return Math.sqrt(n ** 2 + i ** 2)
                              }(t.offset, {
                                  x: 0,
                                  y: 0
                              }) >= 3;
                          if (!e && !n) return;
                          let {
                              point: i
                          } = t, {
                              timestamp: r
                          } = z.w0;
                          this.history.push({
                              ...i,
                              timestamp: r
                          });
                          let {
                              onStart: o,
                              onMove: s
                          } = this.handlers;
                          e || (o && o(this.lastMoveEvent, t), this.startEvent = this.lastMoveEvent), s && s(this.lastMoveEvent, t)
                      }, this.handlePointerMove = (t, e) => {
                          this.lastMoveEvent = t, this.lastMoveEventInfo = tT(e, this.transformPagePoint), z.Wi.update(this.updatePoint, !0)
                      }, this.handlePointerUp = (t, e) => {
                          this.end();
                          let {
                              onEnd: n,
                              onSessionEnd: i,
                              resumeAnimation: r
                          } = this.handlers;
                          if (this.dragSnapToOrigin && r && r(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                          let o = tS("pointercancel" === t.type ? this.lastMoveEventInfo : tT(e, this.transformPagePoint), this.history);
                          this.startEvent && n && n(t, o), i && i(t, o)
                      }, !X(t)) return;
                  this.dragSnapToOrigin = r, this.handlers = e, this.transformPagePoint = n, this.contextWindow = i || window;
                  let o = Y(t),
                      s = tT(o, this.transformPagePoint),
                      {
                          point: a
                      } = s,
                      {
                          timestamp: l
                      } = z.w0;
                  this.history = [{
                      ...a,
                      timestamp: l
                  }];
                  let {
                      onSessionStart: u
                  } = e;
                  u && u(t, tS(s, this.history)), this.removeListeners = (0, J.z)(K(this.contextWindow, "pointermove", this.handlePointerMove), K(this.contextWindow, "pointerup", this.handlePointerUp), K(this.contextWindow, "pointercancel", this.handlePointerUp))
              }
              updateHandlers(t) {
                  this.handlers = t
              }
              end() {
                  this.removeListeners && this.removeListeners(), (0, z.Pn)(this.updatePoint)
              }
          }

          function tT(t, e) {
              return e ? {
                  point: e(t.point)
              } : t
          }

          function tj(t, e) {
              return {
                  x: t.x - e.x,
                  y: t.y - e.y
              }
          }

          function tS({
              point: t
          }, e) {
              return {
                  point: t,
                  delta: tj(t, tM(e)),
                  offset: tj(t, e[0]),
                  velocity: function(t, e) {
                      if (t.length < 2) return {
                          x: 0,
                          y: 0
                      };
                      let n = t.length - 1,
                          i = null,
                          r = tM(t);
                      for (; n >= 0 && (i = t[n], !(r.timestamp - i.timestamp > (0, tE.w)(.1)));) n--;
                      if (!i) return {
                          x: 0,
                          y: 0
                      };
                      let o = (0, tE.X)(r.timestamp - i.timestamp);
                      if (0 === o) return {
                          x: 0,
                          y: 0
                      };
                      let s = {
                          x: (r.x - i.x) / o,
                          y: (r.y - i.y) / o
                      };
                      return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s
                  }(e, 0)
              }
          }

          function tM(t) {
              return t[t.length - 1]
          }
          var tV = n(3967),
              tR = n(22);

          function tO(t) {
              return t.max - t.min
          }

          function tD(t, e = 0, n = .01) {
              return Math.abs(t - e) <= n
          }

          function tL(t, e, n, i = .5) {
              t.origin = i, t.originPoint = (0, tR.C)(e.min, e.max, t.origin), t.scale = tO(n) / tO(e), (tD(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1), t.translate = (0, tR.C)(n.min, n.max, t.origin) - t.originPoint, (tD(t.translate) || isNaN(t.translate)) && (t.translate = 0)
          }

          function tF(t, e, n, i) {
              tL(t.x, e.x, n.x, i ? i.originX : void 0), tL(t.y, e.y, n.y, i ? i.originY : void 0)
          }

          function tG(t, e, n) {
              t.min = n.min + e.min, t.max = t.min + tO(e)
          }

          function tB(t, e, n) {
              t.min = e.min - n.min, t.max = t.min + tO(e)
          }

          function tN(t, e, n) {
              tB(t.x, e.x, n.x), tB(t.y, e.y, n.y)
          }
          var tI = n(4169);

          function t_(t, e, n) {
              return {
                  min: void 0 !== e ? t.min + e : void 0,
                  max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0
              }
          }

          function tW(t, e) {
              let n = e.min - t.min,
                  i = e.max - t.max;
              return e.max - e.min < t.max - t.min && ([n, i] = [i, n]), {
                  min: n,
                  max: i
              }
          }

          function tz(t, e, n) {
              return {
                  min: tH(t, e),
                  max: tH(t, n)
              }
          }

          function tH(t, e) {
              return "number" == typeof t ? t : t[e] || 0
          }
          var tU = n(1512);

          function t$(t) {
              return [t("x"), t("y")]
          }
          var tZ = n(6460),
              tX = n(6117),
              tY = n(6190),
              tq = n(6380);
          let tK = ({
                  current: t
              }) => t ? t.ownerDocument.defaultView : null,
              tJ = new WeakMap;
          class tQ {
              constructor(t) {
                  this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
                      x: 0,
                      y: 0
                  }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = (0, tU.dO)(), this.visualElement = t
              }
              start(t, {
                  snapToCursor: e = !1
              } = {}) {
                  let {
                      presenceContext: n
                  } = this.visualElement;
                  if (n && !1 === n.isPresent) return;
                  let i = t => {
                          let {
                              dragSnapToOrigin: n
                          } = this.getProps();
                          n ? this.pauseAnimation() : this.stopAnimation(), e && this.snapToCursor(Y(t, "page").point)
                      },
                      r = (t, e) => {
                          let {
                              drag: n,
                              dragPropagation: i,
                              onDragStart: r
                          } = this.getProps();
                          if (n && !i && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = tn(n), !this.openGlobalLock)) return;
                          this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), t$(t => {
                              let e = this.getAxisMotionValue(t).get() || 0;
                              if (tY.aQ.test(e)) {
                                  let {
                                      projection: n
                                  } = this.visualElement;
                                  if (n && n.layout) {
                                      let i = n.layout.layoutBox[t];
                                      if (i) {
                                          let t = tO(i);
                                          e = t * (parseFloat(e) / 100)
                                      }
                                  }
                              }
                              this.originPoint[t] = e
                          }), r && z.Wi.update(() => r(t, e), !1, !0);
                          let {
                              animationState: o
                          } = this.visualElement;
                          o && o.setActive("whileDrag", !0)
                      },
                      o = (t, e) => {
                          let {
                              dragPropagation: n,
                              dragDirectionLock: i,
                              onDirectionLock: r,
                              onDrag: o
                          } = this.getProps();
                          if (!n && !this.openGlobalLock) return;
                          let {
                              offset: s
                          } = e;
                          if (i && null === this.currentDirection) {
                              this.currentDirection = function(t, e = 10) {
                                  let n = null;
                                  return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"), n
                              }(s), null !== this.currentDirection && r && r(this.currentDirection);
                              return
                          }
                          this.updateAxis("x", e.point, s), this.updateAxis("y", e.point, s), this.visualElement.render(), o && o(t, e)
                      },
                      s = (t, e) => this.stop(t, e),
                      a = () => t$(t => {
                          var e;
                          return "paused" === this.getAnimationState(t) && (null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.play())
                      }),
                      {
                          dragSnapToOrigin: l
                      } = this.getProps();
                  this.panSession = new tA(t, {
                      onSessionStart: i,
                      onStart: r,
                      onMove: o,
                      onSessionEnd: s,
                      resumeAnimation: a
                  }, {
                      transformPagePoint: this.visualElement.getTransformPagePoint(),
                      dragSnapToOrigin: l,
                      contextWindow: tK(this.visualElement)
                  })
              }
              stop(t, e) {
                  let n = this.isDragging;
                  if (this.cancel(), !n) return;
                  let {
                      velocity: i
                  } = e;
                  this.startAnimation(i);
                  let {
                      onDragEnd: r
                  } = this.getProps();
                  r && z.Wi.update(() => r(t, e))
              }
              cancel() {
                  this.isDragging = !1;
                  let {
                      projection: t,
                      animationState: e
                  } = this.visualElement;
                  t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
                  let {
                      dragPropagation: n
                  } = this.getProps();
                  !n && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), e && e.setActive("whileDrag", !1)
              }
              updateAxis(t, e, n) {
                  let {
                      drag: i
                  } = this.getProps();
                  if (!n || !t0(t, i, this.currentDirection)) return;
                  let r = this.getAxisMotionValue(t),
                      o = this.originPoint[t] + n[t];
                  this.constraints && this.constraints[t] && (o = function(t, {
                      min: e,
                      max: n
                  }, i) {
                      return void 0 !== e && t < e ? t = i ? (0, tR.C)(e, t, i.min) : Math.max(t, e) : void 0 !== n && t > n && (t = i ? (0, tR.C)(n, t, i.max) : Math.min(t, n)), t
                  }(o, this.constraints[t], this.elastic[t])), r.set(o)
              }
              resolveConstraints() {
                  var t;
                  let {
                      dragConstraints: e,
                      dragElastic: n
                  } = this.getProps(), i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : null === (t = this.visualElement.projection) || void 0 === t ? void 0 : t.layout, r = this.constraints;
                  e && (0, h.I)(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && i ? this.constraints = function(t, {
                      top: e,
                      left: n,
                      bottom: i,
                      right: r
                  }) {
                      return {
                          x: t_(t.x, n, r),
                          y: t_(t.y, e, i)
                      }
                  }(i.layoutBox, e) : this.constraints = !1, this.elastic = function(t = .35) {
                      return !1 === t ? t = 0 : !0 === t && (t = .35), {
                          x: tz(t, "left", "right"),
                          y: tz(t, "top", "bottom")
                      }
                  }(n), r !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && t$(t => {
                      this.getAxisMotionValue(t) && (this.constraints[t] = function(t, e) {
                          let n = {};
                          return void 0 !== e.min && (n.min = e.min - t.min), void 0 !== e.max && (n.max = e.max - t.min), n
                      }(i.layoutBox[t], this.constraints[t]))
                  })
              }
              resolveRefConstraints() {
                  var t;
                  let {
                      dragConstraints: e,
                      onMeasureDragConstraints: n
                  } = this.getProps();
                  if (!e || !(0, h.I)(e)) return !1;
                  let i = e.current;
                  (0, tP.k)(null !== i, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                  let {
                      projection: r
                  } = this.visualElement;
                  if (!r || !r.layout) return !1;
                  let o = (0, tZ.z)(i, r.root, this.visualElement.getTransformPagePoint()),
                      s = {
                          x: tW((t = r.layout.layoutBox).x, o.x),
                          y: tW(t.y, o.y)
                      };
                  if (n) {
                      let t = n((0, tX.z2)(s));
                      this.hasMutatedConstraints = !!t, t && (s = (0, tX.i8)(t))
                  }
                  return s
              }
              startAnimation(t) {
                  let {
                      drag: e,
                      dragMomentum: n,
                      dragElastic: i,
                      dragTransition: r,
                      dragSnapToOrigin: o,
                      onDragTransitionEnd: s
                  } = this.getProps(), a = this.constraints || {}, l = t$(s => {
                      if (!t0(s, e, this.currentDirection)) return;
                      let l = a && a[s] || {};
                      o && (l = {
                          min: 0,
                          max: 0
                      });
                      let u = {
                          type: "inertia",
                          velocity: n ? t[s] : 0,
                          bounceStiffness: i ? 200 : 1e6,
                          bounceDamping: i ? 40 : 1e7,
                          timeConstant: 750,
                          restDelta: 1,
                          restSpeed: 10,
                          ...r,
                          ...l
                      };
                      return this.startAxisValueAnimation(s, u)
                  });
                  return Promise.all(l).then(s)
              }
              startAxisValueAnimation(t, e) {
                  let n = this.getAxisMotionValue(t);
                  return n.start((0, tq.v)(t, n, 0, e))
              }
              stopAnimation() {
                  t$(t => this.getAxisMotionValue(t).stop())
              }
              pauseAnimation() {
                  t$(t => {
                      var e;
                      return null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.pause()
                  })
              }
              getAnimationState(t) {
                  var e;
                  return null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.state
              }
              getAxisMotionValue(t) {
                  let e = "_drag" + t.toUpperCase(),
                      n = this.visualElement.getProps(),
                      i = n[e];
                  return i || this.visualElement.getValue(t, (n.initial ? n.initial[t] : void 0) || 0)
              }
              snapToCursor(t) {
                  t$(e => {
                      let {
                          drag: n
                      } = this.getProps();
                      if (!t0(e, n, this.currentDirection)) return;
                      let {
                          projection: i
                      } = this.visualElement, r = this.getAxisMotionValue(e);
                      if (i && i.layout) {
                          let {
                              min: n,
                              max: o
                          } = i.layout.layoutBox[e];
                          r.set(t[e] - (0, tR.C)(n, o, .5))
                      }
                  })
              }
              scalePositionWithinConstraints() {
                  if (!this.visualElement.current) return;
                  let {
                      drag: t,
                      dragConstraints: e
                  } = this.getProps(), {
                      projection: n
                  } = this.visualElement;
                  if (!(0, h.I)(e) || !n || !this.constraints) return;
                  this.stopAnimation();
                  let i = {
                      x: 0,
                      y: 0
                  };
                  t$(t => {
                      let e = this.getAxisMotionValue(t);
                      if (e) {
                          let n = e.get();
                          i[t] = function(t, e) {
                              let n = .5,
                                  i = tO(t),
                                  r = tO(e);
                              return r > i ? n = (0, tV.Y)(e.min, e.max - i, t.min) : i > r && (n = (0, tV.Y)(t.min, t.max - r, e.min)), (0, tI.u)(0, 1, n)
                          }({
                              min: n,
                              max: n
                          }, this.constraints[t])
                      }
                  });
                  let {
                      transformTemplate: r
                  } = this.visualElement.getProps();
                  this.visualElement.current.style.transform = r ? r({}, "") : "none", n.root && n.root.updateScroll(), n.updateLayout(), this.resolveConstraints(), t$(e => {
                      if (!t0(e, t, null)) return;
                      let n = this.getAxisMotionValue(e),
                          {
                              min: r,
                              max: o
                          } = this.constraints[e];
                      n.set((0, tR.C)(r, o, i[e]))
                  })
              }
              addListeners() {
                  if (!this.visualElement.current) return;
                  tJ.set(this.visualElement, this);
                  let t = this.visualElement.current,
                      e = K(t, "pointerdown", t => {
                          let {
                              drag: e,
                              dragListener: n = !0
                          } = this.getProps();
                          e && n && this.start(t)
                      }),
                      n = () => {
                          let {
                              dragConstraints: t
                          } = this.getProps();
                          (0, h.I)(t) && (this.constraints = this.resolveRefConstraints())
                      },
                      {
                          projection: i
                      } = this.visualElement,
                      r = i.addEventListener("measure", n);
                  i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), n();
                  let o = Z(window, "resize", () => this.scalePositionWithinConstraints()),
                      s = i.addEventListener("didUpdate", ({
                          delta: t,
                          hasLayoutChanged: e
                      }) => {
                          this.isDragging && e && (t$(e => {
                              let n = this.getAxisMotionValue(e);
                              n && (this.originPoint[e] += t[e].translate, n.set(n.get() + t[e].translate))
                          }), this.visualElement.render())
                      });
                  return () => {
                      o(), e(), r(), s && s()
                  }
              }
              getProps() {
                  let t = this.visualElement.getProps(),
                      {
                          drag: e = !1,
                          dragDirectionLock: n = !1,
                          dragPropagation: i = !1,
                          dragConstraints: r = !1,
                          dragElastic: o = .35,
                          dragMomentum: s = !0
                      } = t;
                  return {
                      ...t,
                      drag: e,
                      dragDirectionLock: n,
                      dragPropagation: i,
                      dragConstraints: r,
                      dragElastic: o,
                      dragMomentum: s
                  }
              }
          }

          function t0(t, e, n) {
              return (!0 === e || e === t) && (null === n || n === t)
          }
          let t1 = t => (e, n) => {
                  t && z.Wi.update(() => t(e, n))
              },
              t2 = {
                  hasAnimatedSinceResize: !0,
                  hasEverUpdated: !1
              };

          function t5(t, e) {
              return e.max === e.min ? 0 : t / (e.max - e.min) * 100
          }
          let t4 = {
              correct: (t, e) => {
                  if (!e.target) return t;
                  if ("string" == typeof t) {
                      if (!tY.px.test(t)) return t;
                      t = parseFloat(t)
                  }
                  let n = t5(t, e.target.x),
                      i = t5(t, e.target.y);
                  return `${n}% ${i}%`
              }
          };
          var t3 = n(9037),
              t6 = n(4561);
          class t7 extends r.Component {
              componentDidMount() {
                  let {
                      visualElement: t,
                      layoutGroup: e,
                      switchLayoutGroup: n,
                      layoutId: i
                  } = this.props, {
                      projection: r
                  } = t;
                  (0, t6.B)(t8), r && (e.group && e.group.add(r), n && n.register && i && n.register(r), r.root.didUpdate(), r.addEventListener("animationComplete", () => {
                      this.safeToRemove()
                  }), r.setOptions({
                      ...r.options,
                      onExitComplete: () => this.safeToRemove()
                  })), t2.hasEverUpdated = !0
              }
              getSnapshotBeforeUpdate(t) {
                  let {
                      layoutDependency: e,
                      visualElement: n,
                      drag: i,
                      isPresent: r
                  } = this.props, o = n.projection;
                  return o && (o.isPresent = r, i || t.layoutDependency !== e || void 0 === e ? o.willUpdate() : this.safeToRemove(), t.isPresent === r || (r ? o.promote() : o.relegate() || z.Wi.postRender(() => {
                      let t = o.getStack();
                      t && t.members.length || this.safeToRemove()
                  }))), null
              }
              componentDidUpdate() {
                  let {
                      projection: t
                  } = this.props.visualElement;
                  t && (t.root.didUpdate(), queueMicrotask(() => {
                      !t.currentAnimation && t.isLead() && this.safeToRemove()
                  }))
              }
              componentWillUnmount() {
                  let {
                      visualElement: t,
                      layoutGroup: e,
                      switchLayoutGroup: n
                  } = this.props, {
                      projection: i
                  } = t;
                  i && (i.scheduleCheckAfterUnmount(), e && e.group && e.group.remove(i), n && n.deregister && n.deregister(i))
              }
              safeToRemove() {
                  let {
                      safeToRemove: t
                  } = this.props;
                  t && t()
              }
              render() {
                  return null
              }
          }

          function t9(t) {
              let [e, n] = function() {
                  let t = (0, r.useContext)(a.O);
                  if (null === t) return [!0, null];
                  let {
                      isPresent: e,
                      onExitComplete: n,
                      register: i
                  } = t, o = (0, r.useId)();
                  (0, r.useEffect)(() => i(o), []);
                  let s = () => n && n(o);
                  return !e && n ? [!1, s] : [!0]
              }(), i = (0, r.useContext)(v.p);
              return r.createElement(t7, {
                  ...t,
                  layoutGroup: i,
                  switchLayoutGroup: (0, r.useContext)(y),
                  isPresent: e,
                  safeToRemove: n
              })
          }
          let t8 = {
              borderRadius: {
                  ...t4,
                  applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
              },
              borderTopLeftRadius: t4,
              borderTopRightRadius: t4,
              borderBottomLeftRadius: t4,
              borderBottomRightRadius: t4,
              boxShadow: {
                  correct: (t, {
                      treeScale: e,
                      projectionDelta: n
                  }) => {
                      let i = t3.P.parse(t);
                      if (i.length > 5) return t;
                      let r = t3.P.createTransformer(t),
                          o = "number" != typeof i[0] ? 1 : 0,
                          s = n.x.scale * e.x,
                          a = n.y.scale * e.y;
                      i[0 + o] /= s, i[1 + o] /= a;
                      let l = (0, tR.C)(s, a, .5);
                      return "number" == typeof i[2 + o] && (i[2 + o] /= l), "number" == typeof i[3 + o] && (i[3 + o] /= l), r(i)
                  }
              }
          };
          var et = n(1560),
              ee = n(7255);
          let en = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
              ei = en.length,
              er = t => "string" == typeof t ? parseFloat(t) : t,
              eo = t => "number" == typeof t || tY.px.test(t);

          function es(t, e) {
              return void 0 !== t[e] ? t[e] : t.borderRadius
          }
          let ea = eu(0, .5, ee.Bn),
              el = eu(.5, .95, ta.Z);

          function eu(t, e, n) {
              return i => i < t ? 0 : i > e ? 1 : n((0, tV.Y)(t, e, i))
          }

          function ec(t, e) {
              t.min = e.min, t.max = e.max
          }

          function eh(t, e) {
              ec(t.x, e.x), ec(t.y, e.y)
          }
          var ed = n(6e3);

          function ep(t, e, n, i, r) {
              return t -= e, t = (0, ed.q2)(t, 1 / n, i), void 0 !== r && (t = (0, ed.q2)(t, 1 / r, i)), t
          }

          function ef(t, e, [n, i, r], o, s) {
              ! function(t, e = 0, n = 1, i = .5, r, o = t, s = t) {
                  if (tY.aQ.test(e)) {
                      e = parseFloat(e);
                      let t = (0, tR.C)(s.min, s.max, e / 100);
                      e = t - s.min
                  }
                  if ("number" != typeof e) return;
                  let a = (0, tR.C)(o.min, o.max, i);
                  t === o && (a -= e), t.min = ep(t.min, e, n, a, r), t.max = ep(t.max, e, n, a, r)
              }(t, e[n], e[i], e[r], e.scale, o, s)
          }
          let em = ["x", "scaleX", "originX"],
              eg = ["y", "scaleY", "originY"];

          function ev(t, e, n, i) {
              ef(t.x, e, em, n ? n.x : void 0, i ? i.x : void 0), ef(t.y, e, eg, n ? n.y : void 0, i ? i.y : void 0)
          }
          var ey = n(1056);

          function ex(t) {
              return 0 === t.translate && 1 === t.scale
          }

          function ew(t) {
              return ex(t.x) && ex(t.y)
          }

          function eb(t, e) {
              return Math.round(t.x.min) === Math.round(e.x.min) && Math.round(t.x.max) === Math.round(e.x.max) && Math.round(t.y.min) === Math.round(e.y.min) && Math.round(t.y.max) === Math.round(e.y.max)
          }

          function eC(t) {
              return tO(t.x) / tO(t.y)
          }
          var eP = n(10);
          class eE {
              constructor() {
                  this.members = []
              }
              add(t) {
                  (0, eP.y4)(this.members, t), t.scheduleRender()
              }
              remove(t) {
                  if ((0, eP.cl)(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
                      let t = this.members[this.members.length - 1];
                      t && this.promote(t)
                  }
              }
              relegate(t) {
                  let e;
                  let n = this.members.findIndex(e => t === e);
                  if (0 === n) return !1;
                  for (let t = n; t >= 0; t--) {
                      let n = this.members[t];
                      if (!1 !== n.isPresent) {
                          e = n;
                          break
                      }
                  }
                  return !!e && (this.promote(e), !0)
              }
              promote(t, e) {
                  let n = this.lead;
                  if (t !== n && (this.prevLead = n, this.lead = t, t.show(), n)) {
                      n.instance && n.scheduleRender(), t.scheduleRender(), t.resumeFrom = n, e && (t.resumeFrom.preserveOpacity = !0), n.snapshot && (t.snapshot = n.snapshot, t.snapshot.latestValues = n.animationValues || n.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
                      let {
                          crossfade: i
                      } = t.options;
                      !1 === i && n.hide()
                  }
              }
              exitAnimationComplete() {
                  this.members.forEach(t => {
                      let {
                          options: e,
                          resumingFrom: n
                      } = t;
                      e.onExitComplete && e.onExitComplete(), n && n.options.onExitComplete && n.options.onExitComplete()
                  })
              }
              scheduleRender() {
                  this.members.forEach(t => {
                      t.instance && t.scheduleRender(!1)
                  })
              }
              removeLeadSnapshot() {
                  this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
              }
          }

          function ek(t, e, n) {
              let i = "",
                  r = t.x.translate / e.x,
                  o = t.y.translate / e.y;
              if ((r || o) && (i = `translate3d(${r}px, ${o}px, 0) `), (1 !== e.x || 1 !== e.y) && (i += `scale(${1 / e.x}, ${1 / e.y}) `), n) {
                  let {
                      rotate: t,
                      rotateX: e,
                      rotateY: r
                  } = n;
                  t && (i += `rotate(${t}deg) `), e && (i += `rotateX(${e}deg) `), r && (i += `rotateY(${r}deg) `)
              }
              let s = t.x.scale * e.x,
                  a = t.y.scale * e.y;
              return (1 !== s || 1 !== a) && (i += `scale(${s}, ${a})`), i || "none"
          }
          var eA = n(9527);
          let eT = (t, e) => t.depth - e.depth;
          class ej {
              constructor() {
                  this.children = [], this.isDirty = !1
              }
              add(t) {
                  (0, eP.y4)(this.children, t), this.isDirty = !0
              }
              remove(t) {
                  (0, eP.cl)(this.children, t), this.isDirty = !0
              }
              forEach(t) {
                  this.isDirty && this.children.sort(eT), this.isDirty = !1, this.children.forEach(t)
              }
          }
          var eS = n(5194),
              eM = n(1059);
          let eV = ["", "X", "Y", "Z"],
              eR = {
                  visibility: "hidden"
              },
              eO = 0,
              eD = {
                  type: "projectionFrame",
                  totalNodes: 0,
                  resolvedTargetDeltas: 0,
                  recalculatedProjection: 0
              };

          function eL({
              attachResizeListener: t,
              defaultParent: e,
              measureScroll: n,
              checkIsScrollRoot: i,
              resetTransform: r
          }) {
              return class {
                  constructor(t = {}, n = null == e ? void 0 : e()) {
                      this.id = eO++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
                          x: 1,
                          y: 1
                      }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                          this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
                      }, this.updateProjection = () => {
                          this.projectionUpdateScheduled = !1, eD.totalNodes = eD.resolvedTargetDeltas = eD.recalculatedProjection = 0, this.nodes.forEach(eB), this.nodes.forEach(eU), this.nodes.forEach(e$), this.nodes.forEach(eN), window.MotionDebug && window.MotionDebug.record(eD)
                      }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = t, this.root = n ? n.root || n : this, this.path = n ? [...n.path, n] : [], this.parent = n, this.depth = n ? n.depth + 1 : 0;
                      for (let t = 0; t < this.path.length; t++) this.path[t].shouldResetTransform = !0;
                      this.root === this && (this.nodes = new ej)
                  }
                  addEventListener(t, e) {
                      return this.eventHandlers.has(t) || this.eventHandlers.set(t, new et.L), this.eventHandlers.get(t).add(e)
                  }
                  notifyListeners(t, ...e) {
                      let n = this.eventHandlers.get(t);
                      n && n.notify(...e)
                  }
                  hasListeners(t) {
                      return this.eventHandlers.has(t)
                  }
                  mount(e, n = this.root.hasTreeAnimated) {
                      if (this.instance) return;
                      this.isSVG = (0, eS.v)(e), this.instance = e;
                      let {
                          layoutId: i,
                          layout: r,
                          visualElement: o
                      } = this.options;
                      if (o && !o.current && o.mount(e), this.root.nodes.add(this), this.parent && this.parent.children.add(this), n && (r || i) && (this.isLayoutDirty = !0), t) {
                          let n;
                          let i = () => this.root.updateBlockedByResize = !1;
                          t(e, () => {
                              this.root.updateBlockedByResize = !0, n && n(), n = function(t, e) {
                                  let n = performance.now(),
                                      i = ({
                                          timestamp: r
                                      }) => {
                                          let o = r - n;
                                          o >= e && ((0, z.Pn)(i), t(o - e))
                                      };
                                  return z.Wi.read(i, !0), () => (0, z.Pn)(i)
                              }(i, 250), t2.hasAnimatedSinceResize && (t2.hasAnimatedSinceResize = !1, this.nodes.forEach(eH))
                          })
                      }
                      i && this.root.registerSharedNode(i, this), !1 !== this.options.animate && o && (i || r) && this.addEventListener("didUpdate", ({
                          delta: t,
                          hasLayoutChanged: e,
                          hasRelativeTargetChanged: n,
                          layout: i
                      }) => {
                          if (this.isTreeAnimationBlocked()) {
                              this.target = void 0, this.relativeTarget = void 0;
                              return
                          }
                          let r = this.options.transition || o.getDefaultTransition() || eJ,
                              {
                                  onLayoutAnimationStart: s,
                                  onLayoutAnimationComplete: a
                              } = o.getProps(),
                              l = !this.targetLayout || !eb(this.targetLayout, i) || n,
                              u = !e && n;
                          if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || u || e && (l || !this.currentAnimation)) {
                              this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(t, u);
                              let e = {
                                  ...(0, ey.e)(r, "layout"),
                                  onPlay: s,
                                  onComplete: a
                              };
                              (o.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0, e.type = !1), this.startAnimation(e)
                          } else e || eH(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                          this.targetLayout = i
                      })
                  }
                  unmount() {
                      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
                      let t = this.getStack();
                      t && t.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, (0, z.Pn)(this.updateProjection)
                  }
                  blockUpdate() {
                      this.updateManuallyBlocked = !0
                  }
                  unblockUpdate() {
                      this.updateManuallyBlocked = !1
                  }
                  isUpdateBlocked() {
                      return this.updateManuallyBlocked || this.updateBlockedByResize
                  }
                  isTreeAnimationBlocked() {
                      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
                  }
                  startUpdate() {
                      !this.isUpdateBlocked() && (this.isUpdating = !0, this.nodes && this.nodes.forEach(eZ), this.animationId++)
                  }
                  getTransformTemplate() {
                      let {
                          visualElement: t
                      } = this.options;
                      return t && t.getProps().transformTemplate
                  }
                  willUpdate(t = !0) {
                      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                          this.options.onExitComplete && this.options.onExitComplete();
                          return
                      }
                      if (this.root.isUpdating || this.root.startUpdate(), this.isLayoutDirty) return;
                      this.isLayoutDirty = !0;
                      for (let t = 0; t < this.path.length; t++) {
                          let e = this.path[t];
                          e.shouldResetTransform = !0, e.updateScroll("snapshot"), e.options.layoutRoot && e.willUpdate(!1)
                      }
                      let {
                          layoutId: e,
                          layout: n
                      } = this.options;
                      if (void 0 === e && !n) return;
                      let i = this.getTransformTemplate();
                      this.prevTransformTemplateValue = i ? i(this.latestValues, "") : void 0, this.updateSnapshot(), t && this.notifyListeners("willUpdate")
                  }
                  update() {
                      this.updateScheduled = !1;
                      let t = this.isUpdateBlocked();
                      if (t) {
                          this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(e_);
                          return
                      }
                      this.isUpdating || this.nodes.forEach(eW), this.isUpdating = !1, this.nodes.forEach(ez), this.nodes.forEach(eF), this.nodes.forEach(eG), this.clearAllSnapshots();
                      let e = performance.now();
                      z.w0.delta = (0, tI.u)(0, 1e3 / 60, e - z.w0.timestamp), z.w0.timestamp = e, z.w0.isProcessing = !0, z.S6.update.process(z.w0), z.S6.preRender.process(z.w0), z.S6.render.process(z.w0), z.w0.isProcessing = !1
                  }
                  didUpdate() {
                      this.updateScheduled || (this.updateScheduled = !0, queueMicrotask(() => this.update()))
                  }
                  clearAllSnapshots() {
                      this.nodes.forEach(eI), this.sharedNodes.forEach(eX)
                  }
                  scheduleUpdateProjection() {
                      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, z.Wi.preRender(this.updateProjection, !1, !0))
                  }
                  scheduleCheckAfterUnmount() {
                      z.Wi.postRender(() => {
                          this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                      })
                  }
                  updateSnapshot() {
                      !this.snapshot && this.instance && (this.snapshot = this.measure())
                  }
                  updateLayout() {
                      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
                      if (this.resumeFrom && !this.resumeFrom.instance)
                          for (let t = 0; t < this.path.length; t++) {
                              let e = this.path[t];
                              e.updateScroll()
                          }
                      let t = this.layout;
                      this.layout = this.measure(!1), this.layoutCorrected = (0, tU.dO)(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
                      let {
                          visualElement: e
                      } = this.options;
                      e && e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : void 0)
                  }
                  updateScroll(t = "measure") {
                      let e = !!(this.options.layoutScroll && this.instance);
                      this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1), e && (this.scroll = {
                          animationId: this.root.animationId,
                          phase: t,
                          isRoot: i(this.instance),
                          offset: n(this.instance)
                      })
                  }
                  resetTransform() {
                      if (!r) return;
                      let t = this.isLayoutDirty || this.shouldResetTransform,
                          e = this.projectionDelta && !ew(this.projectionDelta),
                          n = this.getTransformTemplate(),
                          i = n ? n(this.latestValues, "") : void 0,
                          o = i !== this.prevTransformTemplateValue;
                      t && (e || (0, eA.ud)(this.latestValues) || o) && (r(this.instance, i), this.shouldResetTransform = !1, this.scheduleRender())
                  }
                  measure(t = !0) {
                      var e;
                      let n = this.measurePageBox(),
                          i = this.removeElementScroll(n);
                      return t && (i = this.removeTransform(i)), e1((e = i).x), e1(e.y), {
                          animationId: this.root.animationId,
                          measuredBox: n,
                          layoutBox: i,
                          latestValues: {},
                          source: this.id
                      }
                  }
                  measurePageBox() {
                      let {
                          visualElement: t
                      } = this.options;
                      if (!t) return (0, tU.dO)();
                      let e = t.measureViewportBox(),
                          {
                              scroll: n
                          } = this.root;
                      return n && ((0, ed.am)(e.x, n.offset.x), (0, ed.am)(e.y, n.offset.y)), e
                  }
                  removeElementScroll(t) {
                      let e = (0, tU.dO)();
                      eh(e, t);
                      for (let n = 0; n < this.path.length; n++) {
                          let i = this.path[n],
                              {
                                  scroll: r,
                                  options: o
                              } = i;
                          if (i !== this.root && r && o.layoutScroll) {
                              if (r.isRoot) {
                                  eh(e, t);
                                  let {
                                      scroll: n
                                  } = this.root;
                                  n && ((0, ed.am)(e.x, -n.offset.x), (0, ed.am)(e.y, -n.offset.y))
                              }(0, ed.am)(e.x, r.offset.x), (0, ed.am)(e.y, r.offset.y)
                          }
                      }
                      return e
                  }
                  applyTransform(t, e = !1) {
                      let n = (0, tU.dO)();
                      eh(n, t);
                      for (let t = 0; t < this.path.length; t++) {
                          let i = this.path[t];
                          !e && i.options.layoutScroll && i.scroll && i !== i.root && (0, ed.D2)(n, {
                              x: -i.scroll.offset.x,
                              y: -i.scroll.offset.y
                          }), (0, eA.ud)(i.latestValues) && (0, ed.D2)(n, i.latestValues)
                      }
                      return (0, eA.ud)(this.latestValues) && (0, ed.D2)(n, this.latestValues), n
                  }
                  removeTransform(t) {
                      let e = (0, tU.dO)();
                      eh(e, t);
                      for (let t = 0; t < this.path.length; t++) {
                          let n = this.path[t];
                          if (!n.instance || !(0, eA.ud)(n.latestValues)) continue;
                          (0, eA.Lj)(n.latestValues) && n.updateSnapshot();
                          let i = (0, tU.dO)(),
                              r = n.measurePageBox();
                          eh(i, r), ev(e, n.latestValues, n.snapshot ? n.snapshot.layoutBox : void 0, i)
                      }
                      return (0, eA.ud)(this.latestValues) && ev(e, this.latestValues), e
                  }
                  setTargetDelta(t) {
                      this.targetDelta = t, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
                  }
                  setOptions(t) {
                      this.options = {
                          ...this.options,
                          ...t,
                          crossfade: void 0 === t.crossfade || t.crossfade
                      }
                  }
                  clearMeasurements() {
                      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
                  }
                  forceRelativeParentToResolveTarget() {
                      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== z.w0.timestamp && this.relativeParent.resolveTargetDelta(!0)
                  }
                  resolveTargetDelta(t = !1) {
                      var e, n, i, r;
                      let o = this.getLead();
                      this.isProjectionDirty || (this.isProjectionDirty = o.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = o.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = o.isSharedProjectionDirty);
                      let s = !!this.resumingFrom || this !== o,
                          a = !(t || s && this.isSharedProjectionDirty || this.isProjectionDirty || (null === (e = this.parent) || void 0 === e ? void 0 : e.isProjectionDirty) || this.attemptToResolveRelativeTarget);
                      if (a) return;
                      let {
                          layout: l,
                          layoutId: u
                      } = this.options;
                      if (this.layout && (l || u)) {
                          if (this.resolvedRelativeTargetAt = z.w0.timestamp, !this.targetDelta && !this.relativeTarget) {
                              let t = this.getClosestProjectingParent();
                              t && t.layout && 1 !== this.animationProgress ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = (0, tU.dO)(), this.relativeTargetOrigin = (0, tU.dO)(), tN(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox), eh(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                          }
                          if (this.relativeTarget || this.targetDelta) {
                              if ((this.target || (this.target = (0, tU.dO)(), this.targetWithTransforms = (0, tU.dO)()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) ? (this.forceRelativeParentToResolveTarget(), n = this.target, i = this.relativeTarget, r = this.relativeParent.target, tG(n.x, i.x, r.x), tG(n.y, i.y, r.y)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : eh(this.target, this.layout.layoutBox), (0, ed.o2)(this.target, this.targetDelta)) : eh(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                                  this.attemptToResolveRelativeTarget = !1;
                                  let t = this.getClosestProjectingParent();
                                  t && !!t.resumingFrom == !!this.resumingFrom && !t.options.layoutScroll && t.target && 1 !== this.animationProgress ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = (0, tU.dO)(), this.relativeTargetOrigin = (0, tU.dO)(), tN(this.relativeTargetOrigin, this.target, t.target), eh(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                              }
                              eD.resolvedTargetDeltas++
                          }
                      }
                  }
                  getClosestProjectingParent() {
                      return !this.parent || (0, eA.Lj)(this.parent.latestValues) || (0, eA.D_)(this.parent.latestValues) ? void 0 : this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
                  }
                  isProjecting() {
                      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
                  }
                  calcProjection() {
                      var t;
                      let e = this.getLead(),
                          n = !!this.resumingFrom || this !== e,
                          i = !0;
                      if ((this.isProjectionDirty || (null === (t = this.parent) || void 0 === t ? void 0 : t.isProjectionDirty)) && (i = !1), n && (this.isSharedProjectionDirty || this.isTransformDirty) && (i = !1), this.resolvedRelativeTargetAt === z.w0.timestamp && (i = !1), i) return;
                      let {
                          layout: r,
                          layoutId: o
                      } = this.options;
                      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(r || o)) return;
                      eh(this.layoutCorrected, this.layout.layoutBox);
                      let s = this.treeScale.x,
                          a = this.treeScale.y;
                      (0, ed.YY)(this.layoutCorrected, this.treeScale, this.path, n), e.layout && !e.target && (1 !== this.treeScale.x || 1 !== this.treeScale.y) && (e.target = e.layout.layoutBox);
                      let {
                          target: l
                      } = e;
                      if (!l) {
                          this.projectionTransform && (this.projectionDelta = (0, tU.wc)(), this.projectionTransform = "none", this.scheduleRender());
                          return
                      }
                      this.projectionDelta || (this.projectionDelta = (0, tU.wc)(), this.projectionDeltaWithTransform = (0, tU.wc)());
                      let u = this.projectionTransform;
                      tF(this.projectionDelta, this.layoutCorrected, l, this.latestValues), this.projectionTransform = ek(this.projectionDelta, this.treeScale), (this.projectionTransform !== u || this.treeScale.x !== s || this.treeScale.y !== a) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", l)), eD.recalculatedProjection++
                  }
                  hide() {
                      this.isVisible = !1
                  }
                  show() {
                      this.isVisible = !0
                  }
                  scheduleRender(t = !0) {
                      if (this.options.scheduleRender && this.options.scheduleRender(), t) {
                          let t = this.getStack();
                          t && t.scheduleRender()
                      }
                      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                  }
                  setAnimationOrigin(t, e = !1) {
                      let n;
                      let i = this.snapshot,
                          r = i ? i.latestValues : {},
                          o = {
                              ...this.latestValues
                          },
                          s = (0, tU.wc)();
                      this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !e;
                      let a = (0, tU.dO)(),
                          l = i ? i.source : void 0,
                          u = this.layout ? this.layout.source : void 0,
                          c = l !== u,
                          h = this.getStack(),
                          d = !h || h.members.length <= 1,
                          p = !!(c && !d && !0 === this.options.crossfade && !this.path.some(eK));
                      this.animationProgress = 0, this.mixTargetDelta = e => {
                          let i = e / 1e3;
                          if (eY(s.x, t.x, i), eY(s.y, t.y, i), this.setTargetDelta(s), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
                              var l, u, h, f;
                              tN(a, this.layout.layoutBox, this.relativeParent.layout.layoutBox), h = this.relativeTarget, f = this.relativeTargetOrigin, eq(h.x, f.x, a.x, i), eq(h.y, f.y, a.y, i), n && (l = this.relativeTarget, u = n, l.x.min === u.x.min && l.x.max === u.x.max && l.y.min === u.y.min && l.y.max === u.y.max) && (this.isProjectionDirty = !1), n || (n = (0, tU.dO)()), eh(n, this.relativeTarget)
                          }
                          c && (this.animationValues = o, function(t, e, n, i, r, o) {
                              r ? (t.opacity = (0, tR.C)(0, void 0 !== n.opacity ? n.opacity : 1, ea(i)), t.opacityExit = (0, tR.C)(void 0 !== e.opacity ? e.opacity : 1, 0, el(i))) : o && (t.opacity = (0, tR.C)(void 0 !== e.opacity ? e.opacity : 1, void 0 !== n.opacity ? n.opacity : 1, i));
                              for (let r = 0; r < ei; r++) {
                                  let o = `border${en[r]}Radius`,
                                      s = es(e, o),
                                      a = es(n, o);
                                  if (void 0 === s && void 0 === a) continue;
                                  s || (s = 0), a || (a = 0);
                                  let l = 0 === s || 0 === a || eo(s) === eo(a);
                                  l ? (t[o] = Math.max((0, tR.C)(er(s), er(a), i), 0), (tY.aQ.test(a) || tY.aQ.test(s)) && (t[o] += "%")) : t[o] = a
                              }(e.rotate || n.rotate) && (t.rotate = (0, tR.C)(e.rotate || 0, n.rotate || 0, i))
                          }(o, r, this.latestValues, i, p, d)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = i
                      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
                  }
                  startAnimation(t) {
                      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && ((0, z.Pn)(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = z.Wi.update(() => {
                          t2.hasAnimatedSinceResize = !0, this.currentAnimation = (0, eM.D)(0, 1e3, {
                              ...t,
                              onUpdate: e => {
                                  this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e)
                              },
                              onComplete: () => {
                                  t.onComplete && t.onComplete(), this.completeAnimation()
                              }
                          }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
                      })
                  }
                  completeAnimation() {
                      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
                      let t = this.getStack();
                      t && t.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
                  }
                  finishAnimation() {
                      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()), this.completeAnimation()
                  }
                  applyTransformsToTarget() {
                      let t = this.getLead(),
                          {
                              targetWithTransforms: e,
                              target: n,
                              layout: i,
                              latestValues: r
                          } = t;
                      if (e && n && i) {
                          if (this !== t && this.layout && i && e2(this.options.animationType, this.layout.layoutBox, i.layoutBox)) {
                              n = this.target || (0, tU.dO)();
                              let e = tO(this.layout.layoutBox.x);
                              n.x.min = t.target.x.min, n.x.max = n.x.min + e;
                              let i = tO(this.layout.layoutBox.y);
                              n.y.min = t.target.y.min, n.y.max = n.y.min + i
                          }
                          eh(e, n), (0, ed.D2)(e, r), tF(this.projectionDeltaWithTransform, this.layoutCorrected, e, r)
                      }
                  }
                  registerSharedNode(t, e) {
                      this.sharedNodes.has(t) || this.sharedNodes.set(t, new eE);
                      let n = this.sharedNodes.get(t);
                      n.add(e);
                      let i = e.options.initialPromotionConfig;
                      e.promote({
                          transition: i ? i.transition : void 0,
                          preserveFollowOpacity: i && i.shouldPreserveFollowOpacity ? i.shouldPreserveFollowOpacity(e) : void 0
                      })
                  }
                  isLead() {
                      let t = this.getStack();
                      return !t || t.lead === this
                  }
                  getLead() {
                      var t;
                      let {
                          layoutId: e
                      } = this.options;
                      return e && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead) || this
                  }
                  getPrevLead() {
                      var t;
                      let {
                          layoutId: e
                      } = this.options;
                      return e ? null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead : void 0
                  }
                  getStack() {
                      let {
                          layoutId: t
                      } = this.options;
                      if (t) return this.root.sharedNodes.get(t)
                  }
                  promote({
                      needsReset: t,
                      transition: e,
                      preserveFollowOpacity: n
                  } = {}) {
                      let i = this.getStack();
                      i && i.promote(this, n), t && (this.projectionDelta = void 0, this.needsReset = !0), e && this.setOptions({
                          transition: e
                      })
                  }
                  relegate() {
                      let t = this.getStack();
                      return !!t && t.relegate(this)
                  }
                  resetRotation() {
                      let {
                          visualElement: t
                      } = this.options;
                      if (!t) return;
                      let e = !1,
                          {
                              latestValues: n
                          } = t;
                      if ((n.rotate || n.rotateX || n.rotateY || n.rotateZ) && (e = !0), !e) return;
                      let i = {};
                      for (let e = 0; e < eV.length; e++) {
                          let r = "rotate" + eV[e];
                          n[r] && (i[r] = n[r], t.setStaticValue(r, 0))
                      }
                      for (let e in t.render(), i) t.setStaticValue(e, i[e]);
                      t.scheduleRender()
                  }
                  getProjectionStyles(t) {
                      var e, n;
                      if (!this.instance || this.isSVG) return;
                      if (!this.isVisible) return eR;
                      let i = {
                              visibility: ""
                          },
                          r = this.getTransformTemplate();
                      if (this.needsReset) return this.needsReset = !1, i.opacity = "", i.pointerEvents = _(null == t ? void 0 : t.pointerEvents) || "", i.transform = r ? r(this.latestValues, "") : "none", i;
                      let o = this.getLead();
                      if (!this.projectionDelta || !this.layout || !o.target) {
                          let e = {};
                          return this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, e.pointerEvents = _(null == t ? void 0 : t.pointerEvents) || ""), this.hasProjected && !(0, eA.ud)(this.latestValues) && (e.transform = r ? r({}, "") : "none", this.hasProjected = !1), e
                      }
                      let s = o.animationValues || o.latestValues;
                      this.applyTransformsToTarget(), i.transform = ek(this.projectionDeltaWithTransform, this.treeScale, s), r && (i.transform = r(s, i.transform));
                      let {
                          x: a,
                          y: l
                      } = this.projectionDelta;
                      for (let t in i.transformOrigin = `${100 * a.origin}% ${100 * l.origin}% 0`, o.animationValues ? i.opacity = o === this ? null !== (n = null !== (e = s.opacity) && void 0 !== e ? e : this.latestValues.opacity) && void 0 !== n ? n : 1 : this.preserveOpacity ? this.latestValues.opacity : s.opacityExit : i.opacity = o === this ? void 0 !== s.opacity ? s.opacity : "" : void 0 !== s.opacityExit ? s.opacityExit : 0, t6.P) {
                          if (void 0 === s[t]) continue;
                          let {
                              correct: e,
                              applyTo: n
                          } = t6.P[t], r = "none" === i.transform ? s[t] : e(s[t], o);
                          if (n) {
                              let t = n.length;
                              for (let e = 0; e < t; e++) i[n[e]] = r
                          } else i[t] = r
                      }
                      return this.options.layoutId && (i.pointerEvents = o === this ? _(null == t ? void 0 : t.pointerEvents) || "" : "none"), i
                  }
                  clearSnapshot() {
                      this.resumeFrom = this.snapshot = void 0
                  }
                  resetTree() {
                      this.root.nodes.forEach(t => {
                          var e;
                          return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
                      }), this.root.nodes.forEach(e_), this.root.sharedNodes.clear()
                  }
              }
          }

          function eF(t) {
              t.updateLayout()
          }

          function eG(t) {
              var e;
              let n = (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) || t.snapshot;
              if (t.isLead() && t.layout && n && t.hasListeners("didUpdate")) {
                  let {
                      layoutBox: e,
                      measuredBox: i
                  } = t.layout, {
                      animationType: r
                  } = t.options, o = n.source !== t.layout.source;
                  "size" === r ? t$(t => {
                      let i = o ? n.measuredBox[t] : n.layoutBox[t],
                          r = tO(i);
                      i.min = e[t].min, i.max = i.min + r
                  }) : e2(r, n.layoutBox, e) && t$(i => {
                      let r = o ? n.measuredBox[i] : n.layoutBox[i],
                          s = tO(e[i]);
                      r.max = r.min + s, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[i].max = t.relativeTarget[i].min + s)
                  });
                  let s = (0, tU.wc)();
                  tF(s, e, n.layoutBox);
                  let a = (0, tU.wc)();
                  o ? tF(a, t.applyTransform(i, !0), n.measuredBox) : tF(a, e, n.layoutBox);
                  let l = !ew(s),
                      u = !1;
                  if (!t.resumeFrom) {
                      let i = t.getClosestProjectingParent();
                      if (i && !i.resumeFrom) {
                          let {
                              snapshot: r,
                              layout: o
                          } = i;
                          if (r && o) {
                              let s = (0, tU.dO)();
                              tN(s, n.layoutBox, r.layoutBox);
                              let a = (0, tU.dO)();
                              tN(a, e, o.layoutBox), eb(s, a) || (u = !0), i.options.layoutRoot && (t.relativeTarget = a, t.relativeTargetOrigin = s, t.relativeParent = i)
                          }
                      }
                  }
                  t.notifyListeners("didUpdate", {
                      layout: e,
                      snapshot: n,
                      delta: a,
                      layoutDelta: s,
                      hasLayoutChanged: l,
                      hasRelativeTargetChanged: u
                  })
              } else if (t.isLead()) {
                  let {
                      onExitComplete: e
                  } = t.options;
                  e && e()
              }
              t.options.transition = void 0
          }

          function eB(t) {
              eD.totalNodes++, t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
          }

          function eN(t) {
              t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
          }

          function eI(t) {
              t.clearSnapshot()
          }

          function e_(t) {
              t.clearMeasurements()
          }

          function eW(t) {
              t.isLayoutDirty = !1
          }

          function ez(t) {
              let {
                  visualElement: e
              } = t.options;
              e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform()
          }

          function eH(t) {
              t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0
          }

          function eU(t) {
              t.resolveTargetDelta()
          }

          function e$(t) {
              t.calcProjection()
          }

          function eZ(t) {
              t.resetRotation()
          }

          function eX(t) {
              t.removeLeadSnapshot()
          }

          function eY(t, e, n) {
              t.translate = (0, tR.C)(e.translate, 0, n), t.scale = (0, tR.C)(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint
          }

          function eq(t, e, n, i) {
              t.min = (0, tR.C)(e.min, n.min, i), t.max = (0, tR.C)(e.max, n.max, i)
          }

          function eK(t) {
              return t.animationValues && void 0 !== t.animationValues.opacityExit
          }
          let eJ = {
                  duration: .45,
                  ease: [.4, 0, .1, 1]
              },
              eQ = t => "undefined" != typeof navigator && navigator.userAgent.toLowerCase().includes(t),
              e0 = eQ("applewebkit/") && !eQ("chrome/") ? Math.round : ta.Z;

          function e1(t) {
              t.min = e0(t.min), t.max = e0(t.max)
          }

          function e2(t, e, n) {
              return "position" === t || "preserve-aspect" === t && !tD(eC(e), eC(n), .2)
          }
          let e5 = eL({
                  attachResizeListener: (t, e) => Z(t, "resize", e),
                  measureScroll: () => ({
                      x: document.documentElement.scrollLeft || document.body.scrollLeft,
                      y: document.documentElement.scrollTop || document.body.scrollTop
                  }),
                  checkIsScrollRoot: () => !0
              }),
              e4 = {
                  current: void 0
              },
              e3 = eL({
                  measureScroll: t => ({
                      x: t.scrollLeft,
                      y: t.scrollTop
                  }),
                  defaultParent: () => {
                      if (!e4.current) {
                          let t = new e5({});
                          t.mount(window), t.setOptions({
                              layoutScroll: !0
                          }), e4.current = t
                      }
                      return e4.current
                  },
                  resetTransform: (t, e) => {
                      t.style.transform = void 0 !== e ? e : "none"
                  },
                  checkIsScrollRoot: t => "fixed" === window.getComputedStyle(t).position
              });
          var e6 = n(4547),
              e7 = n(5794);
          let e9 = (t, e) => b(t) ? new e7.e(e, {
                  enableHardwareAcceleration: !1
              }) : new e6.W(e, {
                  enableHardwareAcceleration: !0
              }),
              e8 = {
                  animation: {
                      Feature: class extends tr {
                          constructor(t) {
                              super(t), t.animationState || (t.animationState = function(t) {
                                  let e = e => Promise.all(e.map(({
                                          animation: e,
                                          options: n
                                      }) => (0, ty.d)(t, e, n))),
                                      n = {
                                          animate: tb(!0),
                                          whileInView: tb(),
                                          whileHover: tb(),
                                          whileTap: tb(),
                                          whileDrag: tb(),
                                          whileFocus: tb(),
                                          exit: tb()
                                      },
                                      i = !0,
                                      r = (e, n) => {
                                          let i = (0, tg.x)(t, n);
                                          if (i) {
                                              let {
                                                  transition: t,
                                                  transitionEnd: n,
                                                  ...r
                                              } = i;
                                              e = {
                                                  ...e,
                                                  ...r,
                                                  ...n
                                              }
                                          }
                                          return e
                                      };

                                  function o(o, s) {
                                      let a = t.getProps(),
                                          l = t.getVariantContext(!0) || {},
                                          u = [],
                                          c = new Set,
                                          h = {},
                                          p = 1 / 0;
                                      for (let e = 0; e < tw; e++) {
                                          var f;
                                          let m = tx[e],
                                              g = n[m],
                                              v = void 0 !== a[m] ? a[m] : l[m],
                                              y = (0, d.$)(v),
                                              x = m === s ? g.isActive : null;
                                          !1 === x && (p = e);
                                          let w = v === l[m] && v !== a[m] && y;
                                          if (w && i && t.manuallyAnimateOnMount && (w = !1), g.protectedKeys = {
                                                  ...h
                                              }, !g.isActive && null === x || !v && !g.prevProp || (0, G.H)(v) || "boolean" == typeof v) continue;
                                          let b = (f = g.prevProp, "string" == typeof v ? v !== f : !!Array.isArray(v) && !tm(v, f)),
                                              C = b || m === s && g.isActive && !w && y || e > p && y,
                                              P = !1,
                                              E = Array.isArray(v) ? v : [v],
                                              k = E.reduce(r, {});
                                          !1 === x && (k = {});
                                          let {
                                              prevResolvedValues: A = {}
                                          } = g, T = {
                                              ...A,
                                              ...k
                                          }, j = t => {
                                              C = !0, c.has(t) && (P = !0, c.delete(t)), g.needsAnimating[t] = !0
                                          };
                                          for (let t in T) {
                                              let e = k[t],
                                                  n = A[t];
                                              if (!h.hasOwnProperty(t))((0, tf.C)(e) && (0, tf.C)(n) ? tm(e, n) : e === n) ? void 0 !== e && c.has(t) ? j(t) : g.protectedKeys[t] = !0 : void 0 !== e ? j(t) : c.add(t)
                                          }
                                          g.prevProp = v, g.prevResolvedValues = k, g.isActive && (h = {
                                              ...h,
                                              ...k
                                          }), i && t.blockInitialAnimation && (C = !1), C && (!w || P) && u.push(...E.map(t => ({
                                              animation: t,
                                              options: {
                                                  type: m,
                                                  ...o
                                              }
                                          })))
                                      }
                                      if (c.size) {
                                          let e = {};
                                          c.forEach(n => {
                                              let i = t.getBaseTarget(n);
                                              void 0 !== i && (e[n] = i)
                                          }), u.push({
                                              animation: e
                                          })
                                      }
                                      let m = !!u.length;
                                      return i && (!1 === a.initial || a.initial === a.animate) && !t.manuallyAnimateOnMount && (m = !1), i = !1, m ? e(u) : Promise.resolve()
                                  }
                                  return {
                                      animateChanges: o,
                                      setActive: function(e, i, r) {
                                          var s;
                                          if (n[e].isActive === i) return Promise.resolve();
                                          null === (s = t.variantChildren) || void 0 === s || s.forEach(t => {
                                              var n;
                                              return null === (n = t.animationState) || void 0 === n ? void 0 : n.setActive(e, i)
                                          }), n[e].isActive = i;
                                          let a = o(r, e);
                                          for (let t in n) n[t].protectedKeys = {};
                                          return a
                                      },
                                      setAnimateFunction: function(n) {
                                          e = n(t)
                                      },
                                      getState: () => n
                                  }
                              }(t))
                          }
                          updateAnimationControlsSubscription() {
                              let {
                                  animate: t
                              } = this.node.getProps();
                              this.unmount(), (0, G.H)(t) && (this.unmount = t.subscribe(this.node))
                          }
                          mount() {
                              this.updateAnimationControlsSubscription()
                          }
                          update() {
                              let {
                                  animate: t
                              } = this.node.getProps(), {
                                  animate: e
                              } = this.node.prevProps || {};
                              t !== e && this.updateAnimationControlsSubscription()
                          }
                          unmount() {}
                      }
                  },
                  exit: {
                      Feature: class extends tr {
                          constructor() {
                              super(...arguments), this.id = tC++
                          }
                          update() {
                              if (!this.node.presenceContext) return;
                              let {
                                  isPresent: t,
                                  onExitComplete: e,
                                  custom: n
                              } = this.node.presenceContext, {
                                  isPresent: i
                              } = this.node.prevPresenceContext || {};
                              if (!this.node.animationState || t === i) return;
                              let r = this.node.animationState.setActive("exit", !t, {
                                  custom: null != n ? n : this.node.getProps().custom
                              });
                              e && !t && r.then(() => e(this.id))
                          }
                          mount() {
                              let {
                                  register: t
                              } = this.node.presenceContext || {};
                              t && (this.unmount = t(this.id))
                          }
                          unmount() {}
                      }
                  },
                  inView: {
                      Feature: class extends tr {
                          constructor() {
                              super(...arguments), this.hasEnteredView = !1, this.isInView = !1
                          }
                          startObserver() {
                              this.unmount();
                              let {
                                  viewport: t = {}
                              } = this.node.getProps(), {
                                  root: e,
                                  margin: n,
                                  amount: i = "some",
                                  once: r
                              } = t, o = {
                                  root: e ? e.current : void 0,
                                  rootMargin: n,
                                  threshold: "number" == typeof i ? i : tp[i]
                              }, s = t => {
                                  let {
                                      isIntersecting: e
                                  } = t;
                                  if (this.isInView === e || (this.isInView = e, r && !e && this.hasEnteredView)) return;
                                  e && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", e);
                                  let {
                                      onViewportEnter: n,
                                      onViewportLeave: i
                                  } = this.node.getProps(), o = e ? n : i;
                                  o && o(t)
                              };
                              return function(t, e, n) {
                                  let i = function({
                                      root: t,
                                      ...e
                                  }) {
                                      let n = t || document;
                                      tc.has(n) || tc.set(n, {});
                                      let i = tc.get(n),
                                          r = JSON.stringify(e);
                                      return i[r] || (i[r] = new IntersectionObserver(td, {
                                          root: t,
                                          ...e
                                      })), i[r]
                                  }(e);
                                  return tu.set(t, n), i.observe(t), () => {
                                      tu.delete(t), i.unobserve(t)
                                  }
                              }(this.node.current, o, s)
                          }
                          mount() {
                              this.startObserver()
                          }
                          update() {
                              if ("undefined" == typeof IntersectionObserver) return;
                              let {
                                  props: t,
                                  prevProps: e
                              } = this.node, n = ["amount", "margin", "root"].some(function({
                                  viewport: t = {}
                              }, {
                                  viewport: e = {}
                              } = {}) {
                                  return n => t[n] !== e[n]
                              }(t, e));
                              n && this.startObserver()
                          }
                          unmount() {}
                      }
                  },
                  tap: {
                      Feature: class extends tr {
                          constructor() {
                              super(...arguments), this.removeStartListeners = ta.Z, this.removeEndListeners = ta.Z, this.removeAccessibleListeners = ta.Z, this.startPointerPress = (t, e) => {
                                  if (this.isPressing) return;
                                  this.removeEndListeners();
                                  let n = this.node.getProps(),
                                      i = (t, e) => {
                                          if (!this.checkPressEnd()) return;
                                          let {
                                              onTap: n,
                                              onTapCancel: i,
                                              globalTapTarget: r
                                          } = this.node.getProps();
                                          z.Wi.update(() => {
                                              r || ts(this.node.current, t.target) ? n && n(t, e) : i && i(t, e)
                                          })
                                      },
                                      r = K(window, "pointerup", i, {
                                          passive: !(n.onTap || n.onPointerUp)
                                      }),
                                      o = K(window, "pointercancel", (t, e) => this.cancelPress(t, e), {
                                          passive: !(n.onTapCancel || n.onPointerCancel)
                                      });
                                  this.removeEndListeners = (0, J.z)(r, o), this.startPress(t, e)
                              }, this.startAccessiblePress = () => {
                                  let t = t => {
                                          if ("Enter" !== t.key || this.isPressing) return;
                                          let e = t => {
                                              "Enter" === t.key && this.checkPressEnd() && tl("up", (t, e) => {
                                                  let {
                                                      onTap: n
                                                  } = this.node.getProps();
                                                  n && z.Wi.update(() => n(t, e))
                                              })
                                          };
                                          this.removeEndListeners(), this.removeEndListeners = Z(this.node.current, "keyup", e), tl("down", (t, e) => {
                                              this.startPress(t, e)
                                          })
                                      },
                                      e = Z(this.node.current, "keydown", t),
                                      n = () => {
                                          this.isPressing && tl("cancel", (t, e) => this.cancelPress(t, e))
                                      },
                                      i = Z(this.node.current, "blur", n);
                                  this.removeAccessibleListeners = (0, J.z)(e, i)
                              }
                          }
                          startPress(t, e) {
                              this.isPressing = !0;
                              let {
                                  onTapStart: n,
                                  whileTap: i
                              } = this.node.getProps();
                              i && this.node.animationState && this.node.animationState.setActive("whileTap", !0), n && z.Wi.update(() => n(t, e))
                          }
                          checkPressEnd() {
                              this.removeEndListeners(), this.isPressing = !1;
                              let t = this.node.getProps();
                              return t.whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !ti()
                          }
                          cancelPress(t, e) {
                              if (!this.checkPressEnd()) return;
                              let {
                                  onTapCancel: n
                              } = this.node.getProps();
                              n && z.Wi.update(() => n(t, e))
                          }
                          mount() {
                              let t = this.node.getProps(),
                                  e = K(t.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
                                      passive: !(t.onTapStart || t.onPointerStart)
                                  }),
                                  n = Z(this.node.current, "focus", this.startAccessiblePress);
                              this.removeStartListeners = (0, J.z)(e, n)
                          }
                          unmount() {
                              this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners()
                          }
                      }
                  },
                  focus: {
                      Feature: class extends tr {
                          constructor() {
                              super(...arguments), this.isActive = !1
                          }
                          onFocus() {
                              let t = !1;
                              try {
                                  t = this.node.current.matches(":focus-visible")
                              } catch (e) {
                                  t = !0
                              }
                              t && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
                          }
                          onBlur() {
                              this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
                          }
                          mount() {
                              this.unmount = (0, J.z)(Z(this.node.current, "focus", () => this.onFocus()), Z(this.node.current, "blur", () => this.onBlur()))
                          }
                          unmount() {}
                      }
                  },
                  hover: {
                      Feature: class extends tr {
                          mount() {
                              this.unmount = (0, J.z)(to(this.node, !0), to(this.node, !1))
                          }
                          unmount() {}
                      }
                  },
                  pan: {
                      Feature: class extends tr {
                          constructor() {
                              super(...arguments), this.removePointerDownListener = ta.Z
                          }
                          onPointerDown(t) {
                              this.session = new tA(t, this.createPanHandlers(), {
                                  transformPagePoint: this.node.getTransformPagePoint(),
                                  contextWindow: tK(this.node)
                              })
                          }
                          createPanHandlers() {
                              let {
                                  onPanSessionStart: t,
                                  onPanStart: e,
                                  onPan: n,
                                  onPanEnd: i
                              } = this.node.getProps();
                              return {
                                  onSessionStart: t1(t),
                                  onStart: t1(e),
                                  onMove: n,
                                  onEnd: (t, e) => {
                                      delete this.session, i && z.Wi.update(() => i(t, e))
                                  }
                              }
                          }
                          mount() {
                              this.removePointerDownListener = K(this.node.current, "pointerdown", t => this.onPointerDown(t))
                          }
                          update() {
                              this.session && this.session.updateHandlers(this.createPanHandlers())
                          }
                          unmount() {
                              this.removePointerDownListener(), this.session && this.session.end()
                          }
                      }
                  },
                  drag: {
                      Feature: class extends tr {
                          constructor(t) {
                              super(t), this.removeGroupControls = ta.Z, this.removeListeners = ta.Z, this.controls = new tQ(t)
                          }
                          mount() {
                              let {
                                  dragControls: t
                              } = this.node.getProps();
                              t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || ta.Z
                          }
                          unmount() {
                              this.removeGroupControls(), this.removeListeners()
                          }
                      },
                      ProjectionNode: e3,
                      MeasureLayout: t9
                  },
                  layout: {
                      ProjectionNode: e3,
                      MeasureLayout: t9
                  }
              },
              nt = function(t) {
                  function e(e, n = {}) {
                      return function({
                          preloadedFeatures: t,
                          createVisualElement: e,
                          useRender: n,
                          useVisualState: i,
                          Component: w
                      }) {
                          t && function(t) {
                              for (let e in t) m.A[e] = {
                                  ...m.A[e],
                                  ...t[e]
                              }
                          }(t);
                          let b = (0, r.forwardRef)(function(m, x) {
                              var b, C;
                              let P;
                              let E = {
                                      ...(0, r.useContext)(o._),
                                      ...m,
                                      layoutId: function({
                                          layoutId: t
                                      }) {
                                          let e = (0, r.useContext)(v.p).id;
                                          return e && void 0 !== t ? e + "-" + t : t
                                      }(m)
                                  },
                                  {
                                      isStatic: k
                                  } = E,
                                  A = function(t) {
                                      let {
                                          initial: e,
                                          animate: n
                                      } = function(t, e) {
                                          if ((0, p.G)(t)) {
                                              let {
                                                  initial: e,
                                                  animate: n
                                              } = t;
                                              return {
                                                  initial: !1 === e || (0, d.$)(e) ? e : void 0,
                                                  animate: (0, d.$)(n) ? n : void 0
                                              }
                                          }
                                          return !1 !== t.inherit ? e : {}
                                      }(t, (0, r.useContext)(s));
                                      return (0, r.useMemo)(() => ({
                                          initial: e,
                                          animate: n
                                      }), [f(e), f(n)])
                                  }(m),
                                  T = i(m, k);
                              if (!k && g.j) {
                                  A.visualElement = function(t, e, n, i) {
                                      let {
                                          visualElement: h
                                      } = (0, r.useContext)(s), d = (0, r.useContext)(u), p = (0, r.useContext)(a.O), f = (0, r.useContext)(o._).reducedMotion, m = (0, r.useRef)();
                                      i = i || d.renderer, !m.current && i && (m.current = i(t, {
                                          visualState: e,
                                          parent: h,
                                          props: n,
                                          presenceContext: p,
                                          blockInitialAnimation: !!p && !1 === p.initial,
                                          reducedMotionConfig: f
                                      }));
                                      let g = m.current;
                                      (0, r.useInsertionEffect)(() => {
                                          g && g.update(n, p)
                                      });
                                      let v = (0, r.useRef)(!!(n[c.M] && !window.HandoffComplete));
                                      return (0, l.L)(() => {
                                          g && (g.render(), v.current && g.animationState && g.animationState.animateChanges())
                                      }), (0, r.useEffect)(() => {
                                          g && (g.updateFeatures(), !v.current && g.animationState && g.animationState.animateChanges(), v.current && (v.current = !1, window.HandoffComplete = !0))
                                      }), g
                                  }(w, T, E, e);
                                  let n = (0, r.useContext)(y),
                                      i = (0, r.useContext)(u).strict;
                                  A.visualElement && (P = A.visualElement.loadFeatures(E, i, t, n))
                              }
                              return r.createElement(s.Provider, {
                                  value: A
                              }, P && A.visualElement ? r.createElement(P, {
                                  visualElement: A.visualElement,
                                  ...E
                              }) : null, n(w, m, (b = A.visualElement, C = x, (0, r.useCallback)(t => {
                                  t && T.mount && T.mount(t), b && (t ? b.mount(t) : b.unmount()), C && ("function" == typeof C ? C(t) : (0, h.I)(C) && (C.current = t))
                              }, [b])), T, k, A.visualElement))
                          });
                          return b[x] = w, b
                      }(t(e, n))
                  }
                  if ("undefined" == typeof Proxy) return e;
                  let n = new Map;
                  return new Proxy(e, {
                      get: (t, i) => (n.has(i) || n.set(i, e(i)), n.get(i))
                  })
              }((t, e) => (function(t, {
                  forwardMotionProps: e = !1
              }, n, i) {
                  let o = b(t) ? H : $;
                  return {
                      ...o,
                      preloadedFeatures: n,
                      useRender: function(t = !1) {
                          let e = (e, n, i, {
                              latestValues: o
                          }, s) => {
                              let a = b(e) ? D : T,
                                  l = a(n, o, s, e),
                                  u = function(t, e, n) {
                                      let i = {};
                                      for (let r in t)("values" !== r || "object" != typeof t.values) && (M(r) || !0 === n && S(r) || !e && !S(r) || t.draggable && r.startsWith("onDrag")) && (i[r] = t[r]);
                                      return i
                                  }(n, "string" == typeof e, t),
                                  c = {
                                      ...u,
                                      ...l,
                                      ref: i
                                  },
                                  {
                                      children: h
                                  } = n,
                                  d = (0, r.useMemo)(() => (0, P.i)(h) ? h.get() : h, [h]);
                              return (0, r.createElement)(e, {
                                  ...c,
                                  children: d
                              })
                          };
                          return e
                      }(e),
                      createVisualElement: i,
                      Component: t
                  }
              })(t, e, e8, e9))
      },
      3193: function(t, e, n) {
          "use strict";
          n.d(e, {
              D: function() {
                  return i
              }
          });
          let i = t => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
      },
      7630: function(t, e, n) {
          "use strict";
          n.d(e, {
              Xp: function() {
                  return s
              },
              f9: function() {
                  return r
              },
              tm: function() {
                  return o
              }
          });
          let i = t => e => "string" == typeof e && e.startsWith(t),
              r = i("--"),
              o = i("var(--"),
              s = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g
      },
      5194: function(t, e, n) {
          "use strict";

          function i(t) {
              return t instanceof SVGElement && "svg" !== t.tagName
          }
          n.d(e, {
              v: function() {
                  return i
              }
          })
      },
      9135: function(t, e, n) {
          "use strict";
          n.d(e, {
              T: function() {
                  return s
              }
          });
          var i = n(9037),
              r = n(7197),
              o = n(2728);

          function s(t, e) {
              let n = (0, o.A)(t);
              return n !== r.h && (n = i.P), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0
          }
      },
      2728: function(t, e, n) {
          "use strict";
          n.d(e, {
              A: function() {
                  return a
              }
          });
          var i = n(5385),
              r = n(7197),
              o = n(6173);
          let s = {
                  ...o.j,
                  color: i.$,
                  backgroundColor: i.$,
                  outlineColor: i.$,
                  fill: i.$,
                  stroke: i.$,
                  borderColor: i.$,
                  borderTopColor: i.$,
                  borderRightColor: i.$,
                  borderBottomColor: i.$,
                  borderLeftColor: i.$,
                  filter: r.h,
                  WebkitFilter: r.h
              },
              a = t => s[t]
      },
      6440: function(t, e, n) {
          "use strict";
          n.d(e, {
              $: function() {
                  return s
              },
              C: function() {
                  return a
              }
          });
          var i = n(1649),
              r = n(6190),
              o = n(8340);
          let s = [i.Rx, r.px, r.aQ, r.RW, r.vw, r.vh, {
                  test: t => "auto" === t,
                  parse: t => t
              }],
              a = t => s.find((0, o.l)(t))
      },
      6173: function(t, e, n) {
          "use strict";
          n.d(e, {
              j: function() {
                  return s
              }
          });
          var i = n(1649),
              r = n(6190);
          let o = {
                  ...i.Rx,
                  transform: Math.round
              },
              s = {
                  borderWidth: r.px,
                  borderTopWidth: r.px,
                  borderRightWidth: r.px,
                  borderBottomWidth: r.px,
                  borderLeftWidth: r.px,
                  borderRadius: r.px,
                  radius: r.px,
                  borderTopLeftRadius: r.px,
                  borderTopRightRadius: r.px,
                  borderBottomRightRadius: r.px,
                  borderBottomLeftRadius: r.px,
                  width: r.px,
                  maxWidth: r.px,
                  height: r.px,
                  maxHeight: r.px,
                  size: r.px,
                  top: r.px,
                  right: r.px,
                  bottom: r.px,
                  left: r.px,
                  padding: r.px,
                  paddingTop: r.px,
                  paddingRight: r.px,
                  paddingBottom: r.px,
                  paddingLeft: r.px,
                  margin: r.px,
                  marginTop: r.px,
                  marginRight: r.px,
                  marginBottom: r.px,
                  marginLeft: r.px,
                  rotate: r.RW,
                  rotateX: r.RW,
                  rotateY: r.RW,
                  rotateZ: r.RW,
                  scale: i.bA,
                  scaleX: i.bA,
                  scaleY: i.bA,
                  scaleZ: i.bA,
                  skew: r.RW,
                  skewX: r.RW,
                  skewY: r.RW,
                  distance: r.px,
                  translateX: r.px,
                  translateY: r.px,
                  translateZ: r.px,
                  x: r.px,
                  y: r.px,
                  z: r.px,
                  perspective: r.px,
                  transformPerspective: r.px,
                  opacity: i.Fq,
                  originX: r.$C,
                  originY: r.$C,
                  originZ: r.px,
                  zIndex: o,
                  fillOpacity: i.Fq,
                  strokeOpacity: i.Fq,
                  numOctaves: o
              }
      },
      8340: function(t, e, n) {
          "use strict";
          n.d(e, {
              l: function() {
                  return i
              }
          });
          let i = t => e => e.test(t)
      },
      4547: function(t, e, n) {
          "use strict";
          n.d(e, {
              W: function() {
                  return d
              }
          });
          var i = n(8057),
              r = n(7630),
              o = n(4714),
              s = n(189),
              a = n(4242),
              l = n(2728),
              u = n(6460),
              c = n(1760),
              h = n(406);
          class d extends c.J {
              constructor() {
                  super(...arguments), this.type = "html"
              }
              readValueFromInstance(t, e) {
                  if (o.G.has(e)) {
                      let t = (0, l.A)(e);
                      return t && t.default || 0
                  } {
                      let n = window.getComputedStyle(t),
                          i = ((0, r.f9)(e) ? n.getPropertyValue(e) : n[e]) || 0;
                      return "string" == typeof i ? i.trim() : i
                  }
              }
              measureInstanceViewportBox(t, {
                  transformPagePoint: e
              }) {
                  return (0, u.J)(t, e)
              }
              build(t, e, n, r) {
                  (0, i.r)(t, e, n, r.transformTemplate)
              }
              scrapeMotionValuesFromProps(t, e) {
                  return (0, s.U)(t, e)
              }
              handleChildMotionValue() {
                  this.childSubscription && (this.childSubscription(), delete this.childSubscription);
                  let {
                      children: t
                  } = this.props;
                  (0, h.i)(t) && (this.childSubscription = t.on("change", t => {
                      this.current && (this.current.textContent = `${t}`)
                  }))
              }
              renderInstance(t, e, n, i) {
                  (0, a.N)(t, e, n, i)
              }
          }
      },
      8057: function(t, e, n) {
          "use strict";
          n.d(e, {
              r: function() {
                  return u
              }
          });
          var i = n(4714);
          let r = {
                  x: "translateX",
                  y: "translateY",
                  z: "translateZ",
                  transformPerspective: "perspective"
              },
              o = i._.length;
          var s = n(7630);
          let a = (t, e) => e && "number" == typeof t ? e.transform(t) : t;
          var l = n(6173);

          function u(t, e, n, u) {
              let {
                  style: c,
                  vars: h,
                  transform: d,
                  transformOrigin: p
              } = t, f = !1, m = !1, g = !0;
              for (let t in e) {
                  let n = e[t];
                  if ((0, s.f9)(t)) {
                      h[t] = n;
                      continue
                  }
                  let r = l.j[t],
                      o = a(n, r);
                  if (i.G.has(t)) {
                      if (f = !0, d[t] = o, !g) continue;
                      n !== (r.default || 0) && (g = !1)
                  } else t.startsWith("origin") ? (m = !0, p[t] = o) : c[t] = o
              }
              if (!e.transform && (f || u ? c.transform = function(t, {
                      enableHardwareAcceleration: e = !0,
                      allowTransformNone: n = !0
                  }, s, a) {
                      let l = "";
                      for (let e = 0; e < o; e++) {
                          let n = i._[e];
                          if (void 0 !== t[n]) {
                              let e = r[n] || n;
                              l += `${e}(${t[n]}) `
                          }
                      }
                      return e && !t.z && (l += "translateZ(0)"), l = l.trim(), a ? l = a(t, s ? "" : l) : n && s && (l = "none"), l
                  }(t.transform, n, g, u) : c.transform && (c.transform = "none")), m) {
                  let {
                      originX: t = "50%",
                      originY: e = "50%",
                      originZ: n = 0
                  } = p;
                  c.transformOrigin = `${t} ${e} ${n}`
              }
          }
      },
      4242: function(t, e, n) {
          "use strict";

          function i(t, {
              style: e,
              vars: n
          }, i, r) {
              for (let o in Object.assign(t.style, e, r && r.getProjectionStyles(i)), n) t.style.setProperty(o, n[o])
          }
          n.d(e, {
              N: function() {
                  return i
              }
          })
      },
      189: function(t, e, n) {
          "use strict";
          n.d(e, {
              U: function() {
                  return o
              }
          });
          var i = n(6816),
              r = n(406);

          function o(t, e) {
              let {
                  style: n
              } = t, o = {};
              for (let s in n)((0, r.i)(n[s]) || e.style && (0, r.i)(e.style[s]) || (0, i.j)(s, t)) && (o[s] = n[s]);
              return o
          }
      },
      4714: function(t, e, n) {
          "use strict";
          n.d(e, {
              G: function() {
                  return r
              },
              _: function() {
                  return i
              }
          });
          let i = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
              r = new Set(i)
      },
      6955: function(t, e, n) {
          "use strict";
          n.d(e, {
              R: function() {
                  return i
              }
          });
          let i = new WeakMap
      },
      5794: function(t, e, n) {
          "use strict";
          n.d(e, {
              e: function() {
                  return p
              }
          });
          var i = n(6832),
              r = n(1760),
              o = n(5415),
              s = n(3193),
              a = n(7302),
              l = n(4714),
              u = n(8504),
              c = n(2728),
              h = n(1512),
              d = n(9854);
          class p extends r.J {
              constructor() {
                  super(...arguments), this.type = "svg", this.isSVGTag = !1
              }
              getBaseTargetFromProps(t, e) {
                  return t[e]
              }
              readValueFromInstance(t, e) {
                  if (l.G.has(e)) {
                      let t = (0, c.A)(e);
                      return t && t.default || 0
                  }
                  return e = a.s.has(e) ? e : (0, s.D)(e), t.getAttribute(e)
              }
              measureInstanceViewportBox() {
                  return (0, h.dO)()
              }
              scrapeMotionValuesFromProps(t, e) {
                  return (0, i.U)(t, e)
              }
              build(t, e, n, i) {
                  (0, o.i)(t, e, n, this.isSVGTag, i.transformTemplate)
              }
              renderInstance(t, e, n, i) {
                  (0, u.K)(t, e, n, i)
              }
              mount(t) {
                  this.isSVGTag = (0, d.a)(t.tagName), super.mount(t)
              }
          }
      },
      5415: function(t, e, n) {
          "use strict";
          n.d(e, {
              i: function() {
                  return l
              }
          });
          var i = n(8057),
              r = n(6190);

          function o(t, e, n) {
              return "string" == typeof t ? t : r.px.transform(e + n * t)
          }
          let s = {
                  offset: "stroke-dashoffset",
                  array: "stroke-dasharray"
              },
              a = {
                  offset: "strokeDashoffset",
                  array: "strokeDasharray"
              };

          function l(t, {
              attrX: e,
              attrY: n,
              attrScale: l,
              originX: u,
              originY: c,
              pathLength: h,
              pathSpacing: d = 1,
              pathOffset: p = 0,
              ...f
          }, m, g, v) {
              if ((0, i.r)(t, f, m, v), g) {
                  t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
                  return
              }
              t.attrs = t.style, t.style = {};
              let {
                  attrs: y,
                  style: x,
                  dimensions: w
              } = t;
              y.transform && (w && (x.transform = y.transform), delete y.transform), w && (void 0 !== u || void 0 !== c || x.transform) && (x.transformOrigin = function(t, e, n) {
                  let i = o(e, t.x, t.width),
                      r = o(n, t.y, t.height);
                  return `${i} ${r}`
              }(w, void 0 !== u ? u : .5, void 0 !== c ? c : .5)), void 0 !== e && (y.x = e), void 0 !== n && (y.y = n), void 0 !== l && (y.scale = l), void 0 !== h && function(t, e, n = 1, i = 0, o = !0) {
                  t.pathLength = 1;
                  let l = o ? s : a;
                  t[l.offset] = r.px.transform(-i);
                  let u = r.px.transform(e),
                      c = r.px.transform(n);
                  t[l.array] = `${u} ${c}`
              }(y, h, d, p, !1)
          }
      },
      7302: function(t, e, n) {
          "use strict";
          n.d(e, {
              s: function() {
                  return i
              }
          });
          let i = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"])
      },
      9854: function(t, e, n) {
          "use strict";
          n.d(e, {
              a: function() {
                  return i
              }
          });
          let i = t => "string" == typeof t && "svg" === t.toLowerCase()
      },
      8504: function(t, e, n) {
          "use strict";
          n.d(e, {
              K: function() {
                  return s
              }
          });
          var i = n(3193),
              r = n(4242),
              o = n(7302);

          function s(t, e, n, s) {
              for (let n in (0, r.N)(t, e, void 0, s), e.attrs) t.setAttribute(o.s.has(n) ? n : (0, i.D)(n), e.attrs[n])
          }
      },
      6832: function(t, e, n) {
          "use strict";
          n.d(e, {
              U: function() {
                  return s
              }
          });
          var i = n(406),
              r = n(189),
              o = n(4714);

          function s(t, e) {
              let n = (0, r.U)(t, e);
              for (let r in t)
                  if ((0, i.i)(t[r]) || (0, i.i)(e[r])) {
                      let e = -1 !== o._.indexOf(r) ? "attr" + r.charAt(0).toUpperCase() + r.substring(1) : r;
                      n[e] = t[r]
                  } return n
          }
      },
      7504: function(t, e, n) {
          "use strict";
          n.d(e, {
              G: function() {
                  return s
              },
              M: function() {
                  return a
              }
          });
          var i = n(2445),
              r = n(7732),
              o = n(2963);

          function s(t) {
              return (0, i.H)(t.animate) || o.V.some(e => (0, r.$)(t[e]))
          }

          function a(t) {
              return !!(s(t) || t.variants)
          }
      },
      7732: function(t, e, n) {
          "use strict";

          function i(t) {
              return "string" == typeof t || Array.isArray(t)
          }
          n.d(e, {
              $: function() {
                  return i
              }
          })
      },
      2248: function(t, e, n) {
          "use strict";
          n.d(e, {
              x: function() {
                  return r
              }
          });
          var i = n(9432);

          function r(t, e, n) {
              let r = t.getProps();
              return (0, i.o)(r, e, void 0 !== n ? n : r.custom, function(t) {
                  let e = {};
                  return t.values.forEach((t, n) => e[n] = t.get()), e
              }(t), function(t) {
                  let e = {};
                  return t.values.forEach((t, n) => e[n] = t.getVelocity()), e
              }(t))
          }
      },
      9432: function(t, e, n) {
          "use strict";

          function i(t, e, n, i = {}, r = {}) {
              return "function" == typeof e && (e = e(void 0 !== n ? n : t.custom, i, r)), "string" == typeof e && (e = t.variants && t.variants[e]), "function" == typeof e && (e = e(void 0 !== n ? n : t.custom, i, r)), e
          }
          n.d(e, {
              o: function() {
                  return i
              }
          })
      },
      4330: function(t, e, n) {
          "use strict";
          n.d(e, {
              GJ: function() {
                  return y
              },
              P$: function() {
                  return x
              },
              CD: function() {
                  return m
              },
              gg: function() {
                  return v
              }
          });
          var i = n(3441),
              r = n(681),
              o = n(8715),
              s = n(3234),
              a = n(9037),
              l = n(9135),
              u = n(5385),
              c = n(6440),
              h = n(8340);
          let d = [...c.$, u.$, a.P],
              p = t => d.find((0, h.l)(t));
          var f = n(2248);

          function m(t, e) {
              let n = (0, f.x)(t, e),
                  {
                      transitionEnd: i = {},
                      transition: r = {},
                      ...a
                  } = n ? t.makeTargetAnimatable(n, !1) : {};
              for (let e in a = {
                      ...a,
                      ...i
                  }) {
                  var l;
                  let n = (0, o.Y)(a[e]);
                  l = e, t.hasValue(l) ? t.getValue(l).set(n) : t.addValue(l, (0, s.BX)(n))
              }
          }

          function g(t, e) {
              let n = [...e].reverse();
              n.forEach(n => {
                  let i = t.getVariant(n);
                  i && m(t, i), t.variantChildren && t.variantChildren.forEach(t => {
                      g(t, e)
                  })
              })
          }

          function v(t, e) {
              return Array.isArray(e) ? g(t, e) : "string" == typeof e ? g(t, [e]) : void m(t, e)
          }

          function y(t, e, n) {
              var o, u;
              let c = Object.keys(e).filter(e => !t.hasValue(e)),
                  h = c.length;
              if (h)
                  for (let d = 0; d < h; d++) {
                      let h = c[d],
                          f = e[h],
                          m = null;
                      Array.isArray(f) && (m = f[0]), null === m && (m = null !== (u = null !== (o = n[h]) && void 0 !== o ? o : t.readValue(h)) && void 0 !== u ? u : e[h]), null != m && ("string" == typeof m && ((0, i.P)(m) || (0, r.W)(m)) ? m = parseFloat(m) : !p(m) && a.P.test(f) && (m = (0, l.T)(h, f)), t.addValue(h, (0, s.BX)(m, {
                          owner: t
                      })), void 0 === n[h] && (n[h] = m), null !== m && t.setBaseTarget(h, m))
                  }
          }

          function x(t, e, n) {
              let i = {};
              for (let r in t) {
                  let t = function(t, e) {
                      if (!e) return;
                      let n = e[t] || e.default || e;
                      return n.from
                  }(r, e);
                  if (void 0 !== t) i[r] = t;
                  else {
                      let t = n.getValue(r);
                      t && (i[r] = t.get())
                  }
              }
              return i
          }
      },
      2963: function(t, e, n) {
          "use strict";
          n.d(e, {
              V: function() {
                  return r
              },
              e: function() {
                  return i
              }
          });
          let i = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
              r = ["initial", ...i]
      },
      10: function(t, e, n) {
          "use strict";

          function i(t, e) {
              -1 === t.indexOf(e) && t.push(e)
          }

          function r(t, e) {
              let n = t.indexOf(e);
              n > -1 && t.splice(n, 1)
          }
          n.d(e, {
              cl: function() {
                  return r
              },
              y4: function() {
                  return i
              }
          })
      },
      4169: function(t, e, n) {
          "use strict";
          n.d(e, {
              u: function() {
                  return i
              }
          });
          let i = (t, e, n) => Math.min(Math.max(n, t), e)
      },
      5487: function(t, e, n) {
          "use strict";
          n.d(e, {
              K: function() {
                  return r
              },
              k: function() {
                  return o
              }
          });
          var i = n(1662);
          let r = i.Z,
              o = i.Z
      },
      4606: function(t, e, n) {
          "use strict";
          n.d(e, {
              s: function() {
                  return A
              }
          });
          var i = n(5487),
              r = n(5385),
              o = n(4169),
              s = n(22);

          function a(t, e, n) {
              return (n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6) ? t + (e - t) * 6 * n : n < .5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
          }
          var l = n(6382),
              u = n(819),
              c = n(3184);
          let h = (t, e, n) => {
                  let i = t * t;
                  return Math.sqrt(Math.max(0, n * (e * e - i) + i))
              },
              d = [l.$, u.m, c.J],
              p = t => d.find(e => e.test(t));

          function f(t) {
              let e = p(t);
              (0, i.k)(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`);
              let n = e.parse(t);
              return e === c.J && (n = function({
                  hue: t,
                  saturation: e,
                  lightness: n,
                  alpha: i
              }) {
                  t /= 360, n /= 100;
                  let r = 0,
                      o = 0,
                      s = 0;
                  if (e /= 100) {
                      let i = n < .5 ? n * (1 + e) : n + e - n * e,
                          l = 2 * n - i;
                      r = a(l, i, t + 1 / 3), o = a(l, i, t), s = a(l, i, t - 1 / 3)
                  } else r = o = s = n;
                  return {
                      red: Math.round(255 * r),
                      green: Math.round(255 * o),
                      blue: Math.round(255 * s),
                      alpha: i
                  }
              }(n)), n
          }
          let m = (t, e) => {
              let n = f(t),
                  i = f(e),
                  r = {
                      ...n
                  };
              return t => (r.red = h(n.red, i.red, t), r.green = h(n.green, i.green, t), r.blue = h(n.blue, i.blue, t), r.alpha = (0, s.C)(n.alpha, i.alpha, t), u.m.transform(r))
          };
          var g = n(3624),
              v = n(9037);
          let y = (t, e) => n => `${n > 0 ? e : t}`;

          function x(t, e) {
              return "number" == typeof t ? n => (0, s.C)(t, e, n) : r.$.test(t) ? m(t, e) : t.startsWith("var(") ? y(t, e) : C(t, e)
          }
          let w = (t, e) => {
                  let n = [...t],
                      i = n.length,
                      r = t.map((t, n) => x(t, e[n]));
                  return t => {
                      for (let e = 0; e < i; e++) n[e] = r[e](t);
                      return n
                  }
              },
              b = (t, e) => {
                  let n = {
                          ...t,
                          ...e
                      },
                      i = {};
                  for (let r in n) void 0 !== t[r] && void 0 !== e[r] && (i[r] = x(t[r], e[r]));
                  return t => {
                      for (let e in i) n[e] = i[e](t);
                      return n
                  }
              },
              C = (t, e) => {
                  let n = v.P.createTransformer(e),
                      r = (0, v.V)(t),
                      o = (0, v.V)(e),
                      s = r.numVars === o.numVars && r.numColors === o.numColors && r.numNumbers >= o.numNumbers;
                  return s ? (0, g.z)(w(r.values, o.values), n) : ((0, i.K)(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), y(t, e))
              };
          var P = n(3967),
              E = n(1662);
          let k = (t, e) => n => (0, s.C)(t, e, n);

          function A(t, e, {
              clamp: n = !0,
              ease: s,
              mixer: a
          } = {}) {
              let l = t.length;
              if ((0, i.k)(l === e.length, "Both input and output ranges must be the same length"), 1 === l) return () => e[0];
              t[0] > t[l - 1] && (t = [...t].reverse(), e = [...e].reverse());
              let u = function(t, e, n) {
                      let i = [],
                          o = n || function(t) {
                              if ("number" == typeof t);
                              else if ("string" == typeof t) return r.$.test(t) ? m : C;
                              else if (Array.isArray(t)) return w;
                              else if ("object" == typeof t) return b;
                              return k
                          }(t[0]),
                          s = t.length - 1;
                      for (let n = 0; n < s; n++) {
                          let r = o(t[n], t[n + 1]);
                          if (e) {
                              let t = Array.isArray(e) ? e[n] || E.Z : e;
                              r = (0, g.z)(t, r)
                          }
                          i.push(r)
                      }
                      return i
                  }(e, s, a),
                  c = u.length,
                  h = e => {
                      let n = 0;
                      if (c > 1)
                          for (; n < t.length - 2 && !(e < t[n + 1]); n++);
                      let i = (0, P.Y)(t[n], t[n + 1], e);
                      return u[n](i)
                  };
              return n ? e => h((0, o.u)(t[0], t[l - 1], e)) : h
          }
      },
      1741: function(t, e, n) {
          "use strict";
          n.d(e, {
              j: function() {
                  return i
              }
          });
          let i = "undefined" != typeof document
      },
      3441: function(t, e, n) {
          "use strict";
          n.d(e, {
              P: function() {
                  return i
              }
          });
          let i = t => /^\-?\d*\.?\d+$/.test(t)
      },
      1804: function(t, e, n) {
          "use strict";

          function i(t) {
              return t && "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
          }
          n.d(e, {
              I: function() {
                  return i
              }
          })
      },
      681: function(t, e, n) {
          "use strict";
          n.d(e, {
              W: function() {
                  return i
              }
          });
          let i = t => /^0[^.\s]+$/.test(t)
      },
      4522: function(t, e, n) {
          "use strict";

          function i(t) {
              let e;
              return () => (void 0 === e && (e = t()), e)
          }
          n.d(e, {
              X: function() {
                  return i
              }
          })
      },
      22: function(t, e, n) {
          "use strict";
          n.d(e, {
              C: function() {
                  return i
              }
          });
          let i = (t, e, n) => -n * t + n * e + t
      },
      1662: function(t, e, n) {
          "use strict";
          n.d(e, {
              Z: function() {
                  return i
              }
          });
          let i = t => t
      },
      599: function(t, e, n) {
          "use strict";
          n.d(e, {
              Y: function() {
                  return r
              }
          });
          var i = n(6615);

          function r(t) {
              let e = [0];
              return (0, i.c)(e, t.length - 1), e
          }
      },
      6615: function(t, e, n) {
          "use strict";
          n.d(e, {
              c: function() {
                  return o
              }
          });
          var i = n(22),
              r = n(3967);

          function o(t, e) {
              let n = t[t.length - 1];
              for (let o = 1; o <= e; o++) {
                  let s = (0, r.Y)(0, e, o);
                  t.push((0, i.C)(n, 1, s))
              }
          }
      },
      3624: function(t, e, n) {
          "use strict";
          n.d(e, {
              z: function() {
                  return r
              }
          });
          let i = (t, e) => n => e(t(n)),
              r = (...t) => t.reduce(i)
      },
      3967: function(t, e, n) {
          "use strict";
          n.d(e, {
              Y: function() {
                  return i
              }
          });
          let i = (t, e, n) => {
              let i = e - t;
              return 0 === i ? 1 : (n - t) / i
          }
      },
      8715: function(t, e, n) {
          "use strict";
          n.d(e, {
              Y: function() {
                  return o
              },
              p: function() {
                  return r
              }
          });
          var i = n(8488);
          let r = t => !!(t && "object" == typeof t && t.mix && t.toValue),
              o = t => (0, i.C)(t) ? t[t.length - 1] || 0 : t
      },
      1560: function(t, e, n) {
          "use strict";
          n.d(e, {
              L: function() {
                  return r
              }
          });
          var i = n(10);
          class r {
              constructor() {
                  this.subscriptions = []
              }
              add(t) {
                  return (0, i.y4)(this.subscriptions, t), () => (0, i.cl)(this.subscriptions, t)
              }
              notify(t, e, n) {
                  let i = this.subscriptions.length;
                  if (i) {
                      if (1 === i) this.subscriptions[0](t, e, n);
                      else
                          for (let r = 0; r < i; r++) {
                              let i = this.subscriptions[r];
                              i && i(t, e, n)
                          }
                  }
              }
              getSize() {
                  return this.subscriptions.length
              }
              clear() {
                  this.subscriptions.length = 0
              }
          }
      },
      6917: function(t, e, n) {
          "use strict";
          n.d(e, {
              X: function() {
                  return r
              },
              w: function() {
                  return i
              }
          });
          let i = t => 1e3 * t,
              r = t => t / 1e3
      },
      6681: function(t, e, n) {
          "use strict";
          n.d(e, {
              h: function() {
                  return r
              }
          });
          var i = n(7294);

          function r(t) {
              let e = (0, i.useRef)(null);
              return null === e.current && (e.current = t()), e.current
          }
      },
      8868: function(t, e, n) {
          "use strict";
          n.d(e, {
              L: function() {
                  return o
              }
          });
          var i = n(7294),
              r = n(1741);
          let o = r.j ? i.useLayoutEffect : i.useEffect
      },
      3038: function(t, e, n) {
          "use strict";

          function i(t, e) {
              return e ? t * (1e3 / e) : 0
          }
          n.d(e, {
              R: function() {
                  return i
              }
          })
      },
      3234: function(t, e, n) {
          "use strict";
          n.d(e, {
              BX: function() {
                  return u
              },
              S1: function() {
                  return a
              }
          });
          var i = n(1560),
              r = n(3038),
              o = n(2074);
          let s = t => !isNaN(parseFloat(t)),
              a = {
                  current: void 0
              };
          class l {
              constructor(t, e = {}) {
                  this.version = "10.18.0", this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (t, e = !0) => {
                      this.prev = this.current, this.current = t;
                      let {
                          delta: n,
                          timestamp: i
                      } = o.w0;
                      this.lastUpdated !== i && (this.timeDelta = n, this.lastUpdated = i, o.Wi.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), e && this.events.renderRequest && this.events.renderRequest.notify(this.current)
                  }, this.scheduleVelocityCheck = () => o.Wi.postRender(this.velocityCheck), this.velocityCheck = ({
                      timestamp: t
                  }) => {
                      t !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
                  }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = s(this.current), this.owner = e.owner
              }
              onChange(t) {
                  return this.on("change", t)
              }
              on(t, e) {
                  this.events[t] || (this.events[t] = new i.L);
                  let n = this.events[t].add(e);
                  return "change" === t ? () => {
                      n(), o.Wi.read(() => {
                          this.events.change.getSize() || this.stop()
                      })
                  } : n
              }
              clearListeners() {
                  for (let t in this.events) this.events[t].clear()
              }
              attach(t, e) {
                  this.passiveEffect = t, this.stopPassiveEffect = e
              }
              set(t, e = !0) {
                  e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e)
              }
              setWithVelocity(t, e, n) {
                  this.set(e), this.prev = t, this.timeDelta = n
              }
              jump(t) {
                  this.updateAndNotify(t), this.prev = t, this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
              }
              get() {
                  return a.current && a.current.push(this), this.current
              }
              getPrevious() {
                  return this.prev
              }
              getVelocity() {
                  return this.canTrackVelocity ? (0, r.R)(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
              }
              start(t) {
                  return this.stop(), new Promise(e => {
                      this.hasAnimated = !0, this.animation = t(e), this.events.animationStart && this.events.animationStart.notify()
                  }).then(() => {
                      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
                  })
              }
              stop() {
                  this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
              }
              isAnimating() {
                  return !!this.animation
              }
              clearAnimation() {
                  delete this.animation
              }
              destroy() {
                  this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
              }
          }

          function u(t, e) {
              return new l(t, e)
          }
      },
      6382: function(t, e, n) {
          "use strict";
          n.d(e, {
              $: function() {
                  return o
              }
          });
          var i = n(819),
              r = n(8834);
          let o = {
              test: (0, r.i)("#"),
              parse: function(t) {
                  let e = "",
                      n = "",
                      i = "",
                      r = "";
                  return t.length > 5 ? (e = t.substring(1, 3), n = t.substring(3, 5), i = t.substring(5, 7), r = t.substring(7, 9)) : (e = t.substring(1, 2), n = t.substring(2, 3), i = t.substring(3, 4), r = t.substring(4, 5), e += e, n += n, i += i, r += r), {
                      red: parseInt(e, 16),
                      green: parseInt(n, 16),
                      blue: parseInt(i, 16),
                      alpha: r ? parseInt(r, 16) / 255 : 1
                  }
              },
              transform: i.m.transform
          }
      },
      3184: function(t, e, n) {
          "use strict";
          n.d(e, {
              J: function() {
                  return a
              }
          });
          var i = n(1649),
              r = n(6190),
              o = n(6430),
              s = n(8834);
          let a = {
              test: (0, s.i)("hsl", "hue"),
              parse: (0, s.d)("hue", "saturation", "lightness"),
              transform: ({
                  hue: t,
                  saturation: e,
                  lightness: n,
                  alpha: s = 1
              }) => "hsla(" + Math.round(t) + ", " + r.aQ.transform((0, o.Nw)(e)) + ", " + r.aQ.transform((0, o.Nw)(n)) + ", " + (0, o.Nw)(i.Fq.transform(s)) + ")"
          }
      },
      5385: function(t, e, n) {
          "use strict";
          n.d(e, {
              $: function() {
                  return a
              }
          });
          var i = n(6430),
              r = n(6382),
              o = n(3184),
              s = n(819);
          let a = {
              test: t => s.m.test(t) || r.$.test(t) || o.J.test(t),
              parse: t => s.m.test(t) ? s.m.parse(t) : o.J.test(t) ? o.J.parse(t) : r.$.parse(t),
              transform: t => (0, i.HD)(t) ? t : t.hasOwnProperty("red") ? s.m.transform(t) : o.J.transform(t)
          }
      },
      819: function(t, e, n) {
          "use strict";
          n.d(e, {
              m: function() {
                  return u
              }
          });
          var i = n(4169),
              r = n(1649),
              o = n(6430),
              s = n(8834);
          let a = t => (0, i.u)(0, 255, t),
              l = {
                  ...r.Rx,
                  transform: t => Math.round(a(t))
              },
              u = {
                  test: (0, s.i)("rgb", "red"),
                  parse: (0, s.d)("red", "green", "blue"),
                  transform: ({
                      red: t,
                      green: e,
                      blue: n,
                      alpha: i = 1
                  }) => "rgba(" + l.transform(t) + ", " + l.transform(e) + ", " + l.transform(n) + ", " + (0, o.Nw)(r.Fq.transform(i)) + ")"
              }
      },
      8834: function(t, e, n) {
          "use strict";
          n.d(e, {
              d: function() {
                  return o
              },
              i: function() {
                  return r
              }
          });
          var i = n(6430);
          let r = (t, e) => n => !!((0, i.HD)(n) && i.mj.test(n) && n.startsWith(t) || e && Object.prototype.hasOwnProperty.call(n, e)),
              o = (t, e, n) => r => {
                  if (!(0, i.HD)(r)) return r;
                  let [o, s, a, l] = r.match(i.KP);
                  return {
                      [t]: parseFloat(o),
                      [e]: parseFloat(s),
                      [n]: parseFloat(a),
                      alpha: void 0 !== l ? parseFloat(l) : 1
                  }
              }
      },
      7197: function(t, e, n) {
          "use strict";
          n.d(e, {
              h: function() {
                  return l
              }
          });
          var i = n(9037),
              r = n(6430);
          let o = new Set(["brightness", "contrast", "saturate", "opacity"]);

          function s(t) {
              let [e, n] = t.slice(0, -1).split("(");
              if ("drop-shadow" === e) return t;
              let [i] = n.match(r.KP) || [];
              if (!i) return t;
              let s = n.replace(i, ""),
                  a = o.has(e) ? 1 : 0;
              return i !== n && (a *= 100), e + "(" + a + s + ")"
          }
          let a = /([a-z-]*)\(.*?\)/g,
              l = {
                  ...i.P,
                  getAnimatableNone: t => {
                      let e = t.match(a);
                      return e ? e.map(s).join(" ") : t
                  }
              }
      },
      9037: function(t, e, n) {
          "use strict";
          n.d(e, {
              P: function() {
                  return g
              },
              V: function() {
                  return d
              }
          });
          var i = n(7630),
              r = n(1662),
              o = n(5385),
              s = n(1649),
              a = n(6430);
          let l = {
                  regex: i.Xp,
                  countKey: "Vars",
                  token: "${v}",
                  parse: r.Z
              },
              u = {
                  regex: a.dA,
                  countKey: "Colors",
                  token: "${c}",
                  parse: o.$.parse
              },
              c = {
                  regex: a.KP,
                  countKey: "Numbers",
                  token: "${n}",
                  parse: s.Rx.parse
              };

          function h(t, {
              regex: e,
              countKey: n,
              token: i,
              parse: r
          }) {
              let o = t.tokenised.match(e);
              o && (t["num" + n] = o.length, t.tokenised = t.tokenised.replace(e, i), t.values.push(...o.map(r)))
          }

          function d(t) {
              let e = t.toString(),
                  n = {
                      value: e,
                      tokenised: e,
                      values: [],
                      numVars: 0,
                      numColors: 0,
                      numNumbers: 0
                  };
              return n.value.includes("var(--") && h(n, l), h(n, u), h(n, c), n
          }

          function p(t) {
              return d(t).values
          }

          function f(t) {
              let {
                  values: e,
                  numColors: n,
                  numVars: i,
                  tokenised: r
              } = d(t), s = e.length;
              return t => {
                  let e = r;
                  for (let r = 0; r < s; r++) e = r < i ? e.replace(l.token, t[r]) : r < i + n ? e.replace(u.token, o.$.transform(t[r])) : e.replace(c.token, (0, a.Nw)(t[r]));
                  return e
              }
          }
          let m = t => "number" == typeof t ? 0 : t,
              g = {
                  test: function(t) {
                      var e, n;
                      return isNaN(t) && (0, a.HD)(t) && ((null === (e = t.match(a.KP)) || void 0 === e ? void 0 : e.length) || 0) + ((null === (n = t.match(a.dA)) || void 0 === n ? void 0 : n.length) || 0) > 0
                  },
                  parse: p,
                  createTransformer: f,
                  getAnimatableNone: function(t) {
                      let e = p(t),
                          n = f(t);
                      return n(e.map(m))
                  }
              }
      },
      1649: function(t, e, n) {
          "use strict";
          n.d(e, {
              Fq: function() {
                  return o
              },
              Rx: function() {
                  return r
              },
              bA: function() {
                  return s
              }
          });
          var i = n(4169);
          let r = {
                  test: t => "number" == typeof t,
                  parse: parseFloat,
                  transform: t => t
              },
              o = {
                  ...r,
                  transform: t => (0, i.u)(0, 1, t)
              },
              s = {
                  ...r,
                  default: 1
              }
      },
      6190: function(t, e, n) {
          "use strict";
          n.d(e, {
              $C: function() {
                  return c
              },
              RW: function() {
                  return o
              },
              aQ: function() {
                  return s
              },
              px: function() {
                  return a
              },
              vh: function() {
                  return l
              },
              vw: function() {
                  return u
              }
          });
          var i = n(6430);
          let r = t => ({
                  test: e => (0, i.HD)(e) && e.endsWith(t) && 1 === e.split(" ").length,
                  parse: parseFloat,
                  transform: e => `${e}${t}`
              }),
              o = r("deg"),
              s = r("%"),
              a = r("px"),
              l = r("vh"),
              u = r("vw"),
              c = {
                  ...s,
                  parse: t => s.parse(t) / 100,
                  transform: t => s.transform(100 * t)
              }
      },
      6430: function(t, e, n) {
          "use strict";
          n.d(e, {
              HD: function() {
                  return a
              },
              KP: function() {
                  return r
              },
              Nw: function() {
                  return i
              },
              dA: function() {
                  return o
              },
              mj: function() {
                  return s
              }
          });
          let i = t => Math.round(1e5 * t) / 1e5,
              r = /(-)?([\d]*\.?[\d])+/g,
              o = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
              s = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;

          function a(t) {
              return "string" == typeof t
          }
      },
      2490: function(t, e, n) {
          "use strict";
          n.d(e, {
              L: function() {
                  return r
              }
          });
          var i = n(406);

          function r(t) {
              return !!((0, i.i)(t) && t.add)
          }
      },
      406: function(t, e, n) {
          "use strict";
          n.d(e, {
              i: function() {
                  return i
              }
          });
          let i = t => !!(t && t.getVelocity)
      }
  },
  function(t) {
      var e = function(e) {
          return t(t.s = e)
      };
      t.O(0, [774, 179], function() {
          return e(1118), e(6885)
      }), _N_E = t.O()
  }
]);