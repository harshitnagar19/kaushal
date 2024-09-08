"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [788], {
        7184: function(e, r, t) {
            function o() {
                return (o = Object.assign ? Object.assign.bind() : function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = arguments[r];
                        for (var o in t)({}).hasOwnProperty.call(t, o) && (e[o] = t[o])
                    }
                    return e
                }).apply(null, arguments)
            }
            t.d(r, {
                VY: function() {
                    return ef
                },
                h4: function() {
                    return eu
                },
                ck: function() {
                    return ed
                },
                fC: function() {
                    return ec
                },
                xz: function() {
                    return ep
                }
            });
            var n = t(7294),
                l = t.t(n, 2);

            function i(e, r = []) {
                let t = [],
                    o = () => {
                        let r = t.map(e => (0, n.createContext)(e));
                        return function(t) {
                            let o = (null == t ? void 0 : t[e]) || r;
                            return (0, n.useMemo)(() => ({
                                [`__scope${e}`]: {
                                    ...t,
                                    [e]: o
                                }
                            }), [t, o])
                        }
                    };
                return o.scopeName = e, [function(r, o) {
                    let l = (0, n.createContext)(o),
                        i = t.length;

                    function a(r) {
                        let {
                            scope: t,
                            children: o,
                            ...a
                        } = r, s = (null == t ? void 0 : t[e][i]) || l, c = (0, n.useMemo)(() => a, Object.values(a));
                        return (0, n.createElement)(s.Provider, {
                            value: c
                        }, o)
                    }
                    return t = [...t, o], a.displayName = r + "Provider", [a, function(t, a) {
                        let s = (null == a ? void 0 : a[e][i]) || l,
                            c = (0, n.useContext)(s);
                        if (c) return c;
                        if (void 0 !== o) return o;
                        throw Error(`\`${t}\` must be used within \`${r}\``)
                    }]
                }, function(...e) {
                    let r = e[0];
                    if (1 === e.length) return r;
                    let t = () => {
                        let t = e.map(e => ({
                            useScope: e(),
                            scopeName: e.scopeName
                        }));
                        return function(e) {
                            let o = t.reduce((r, {
                                useScope: t,
                                scopeName: o
                            }) => {
                                let n = t(e),
                                    l = n[`__scope${o}`];
                                return {
                                    ...r,
                                    ...l
                                }
                            }, {});
                            return (0, n.useMemo)(() => ({
                                [`__scope${r.scopeName}`]: o
                            }), [o])
                        }
                    };
                    return t.scopeName = r.scopeName, t
                }(o, ...r)]
            }

            function a(...e) {
                return r => e.forEach(e => {
                    var t;
                    "function" == typeof(t = e) ? t(r): null != t && (t.current = r)
                })
            }

            function s(...e) {
                return (0, n.useCallback)(a(...e), e)
            }
            let c = (0, n.forwardRef)((e, r) => {
                let {
                    children: t,
                    ...l
                } = e, i = n.Children.toArray(t), a = i.find(p);
                if (a) {
                    let e = a.props.children,
                        t = i.map(r => r !== a ? r : n.Children.count(e) > 1 ? n.Children.only(null) : (0, n.isValidElement)(e) ? e.props.children : null);
                    return (0, n.createElement)(d, o({}, l, {
                        ref: r
                    }), (0, n.isValidElement)(e) ? (0, n.cloneElement)(e, void 0, t) : null)
                }
                return (0, n.createElement)(d, o({}, l, {
                    ref: r
                }), t)
            });
            c.displayName = "Slot";
            let d = (0, n.forwardRef)((e, r) => {
                let {
                    children: t,
                    ...o
                } = e;
                return (0, n.isValidElement)(t) ? (0, n.cloneElement)(t, {
                    ... function(e, r) {
                        let t = {
                            ...r
                        };
                        for (let o in r) {
                            let n = e[o],
                                l = r[o],
                                i = /^on[A-Z]/.test(o);
                            i ? n && l ? t[o] = (...e) => {
                                l(...e), n(...e)
                            } : n && (t[o] = n) : "style" === o ? t[o] = {
                                ...n,
                                ...l
                            } : "className" === o && (t[o] = [n, l].filter(Boolean).join(" "))
                        }
                        return {
                            ...e,
                            ...t
                        }
                    }(o, t.props),
                    ref: r ? a(r, t.ref) : t.ref
                }) : n.Children.count(t) > 1 ? n.Children.only(null) : null
            });
            d.displayName = "SlotClone";
            let u = ({
                children: e
            }) => (0, n.createElement)(n.Fragment, null, e);

            function p(e) {
                return (0, n.isValidElement)(e) && e.type === u
            }

            function f(e, r, {
                checkForDefaultPrevented: t = !0
            } = {}) {
                return function(o) {
                    if (null == e || e(o), !1 === t || !o.defaultPrevented) return null == r ? void 0 : r(o)
                }
            }

            function m(e) {
                let r = (0, n.useRef)(e);
                return (0, n.useEffect)(() => {
                    r.current = e
                }), (0, n.useMemo)(() => (...e) => {
                    var t;
                    return null === (t = r.current) || void 0 === t ? void 0 : t.call(r, ...e)
                }, [])
            }

            function b({
                prop: e,
                defaultProp: r,
                onChange: t = () => {}
            }) {
                let [o, l] = function({
                    defaultProp: e,
                    onChange: r
                }) {
                    let t = (0, n.useState)(e),
                        [o] = t,
                        l = (0, n.useRef)(o),
                        i = m(r);
                    return (0, n.useEffect)(() => {
                        l.current !== o && (i(o), l.current = o)
                    }, [o, l, i]), t
                }({
                    defaultProp: r,
                    onChange: t
                }), i = void 0 !== e, a = m(t), s = (0, n.useCallback)(r => {
                    if (i) {
                        let t = "function" == typeof r ? r(e) : r;
                        t !== e && a(t)
                    } else l(r)
                }, [i, e, l, a]);
                return [i ? e : o, s]
            }
            var g = t(3935);
            let h = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce((e, r) => {
                    let t = (0, n.forwardRef)((e, t) => {
                        let {
                            asChild: l,
                            ...i
                        } = e, a = l ? c : r;
                        return (0, n.useEffect)(() => {
                            window[Symbol.for("radix-ui")] = !0
                        }, []), (0, n.createElement)(a, o({}, i, {
                            ref: t
                        }))
                    });
                    return t.displayName = `Primitive.${r}`, {
                        ...e,
                        [r]: t
                    }
                }, {}),
                v = (null == globalThis ? void 0 : globalThis.document) ? n.useLayoutEffect : () => {},
                y = e => {
                    let {
                        present: r,
                        children: t
                    } = e, o = function(e) {
                        var r;
                        let [t, o] = (0, n.useState)(), l = (0, n.useRef)({}), i = (0, n.useRef)(e), a = (0, n.useRef)("none"), [s, c] = (r = {
                            mounted: {
                                UNMOUNT: "unmounted",
                                ANIMATION_OUT: "unmountSuspended"
                            },
                            unmountSuspended: {
                                MOUNT: "mounted",
                                ANIMATION_END: "unmounted"
                            },
                            unmounted: {
                                MOUNT: "mounted"
                            }
                        }, (0, n.useReducer)((e, t) => {
                            let o = r[e][t];
                            return null != o ? o : e
                        }, e ? "mounted" : "unmounted"));
                        return (0, n.useEffect)(() => {
                            let e = w(l.current);
                            a.current = "mounted" === s ? e : "none"
                        }, [s]), v(() => {
                            let r = l.current,
                                t = i.current;
                            if (t !== e) {
                                let o = a.current,
                                    n = w(r);
                                e ? c("MOUNT") : "none" === n || (null == r ? void 0 : r.display) === "none" ? c("UNMOUNT") : t && o !== n ? c("ANIMATION_OUT") : c("UNMOUNT"), i.current = e
                            }
                        }, [e, c]), v(() => {
                            if (t) {
                                let e = e => {
                                        let r = w(l.current),
                                            o = r.includes(e.animationName);
                                        e.target === t && o && (0, g.flushSync)(() => c("ANIMATION_END"))
                                    },
                                    r = e => {
                                        e.target === t && (a.current = w(l.current))
                                    };
                                return t.addEventListener("animationstart", r), t.addEventListener("animationcancel", e), t.addEventListener("animationend", e), () => {
                                    t.removeEventListener("animationstart", r), t.removeEventListener("animationcancel", e), t.removeEventListener("animationend", e)
                                }
                            }
                            c("ANIMATION_END")
                        }, [t, c]), {
                            isPresent: ["mounted", "unmountSuspended"].includes(s),
                            ref: (0, n.useCallback)(e => {
                                e && (l.current = getComputedStyle(e)), o(e)
                            }, [])
                        }
                    }(r), l = "function" == typeof t ? t({
                        present: o.isPresent
                    }) : n.Children.only(t), i = s(o.ref, l.ref);
                    return "function" == typeof t || o.isPresent ? (0, n.cloneElement)(l, {
                        ref: i
                    }) : null
                };

            function w(e) {
                return (null == e ? void 0 : e.animationName) || "none"
            }
            y.displayName = "Presence";
            let x = l["useId".toString()] || (() => void 0),
                k = 0;

            function E(e) {
                let [r, t] = n.useState(x());
                return v(() => {
                    e || t(e => null != e ? e : String(k++))
                }, [e]), e || (r ? `radix-${r}` : "")
            }
            let C = "Collapsible",
                [N, A] = i(C),
                [z, _] = N(C),
                R = (0, n.forwardRef)((e, r) => {
                    let {
                        __scopeCollapsible: t,
                        open: l,
                        defaultOpen: i,
                        disabled: a,
                        onOpenChange: s,
                        ...c
                    } = e, [d = !1, u] = b({
                        prop: l,
                        defaultProp: i,
                        onChange: s
                    });
                    return (0, n.createElement)(z, {
                        scope: t,
                        disabled: a,
                        contentId: E(),
                        open: d,
                        onOpenToggle: (0, n.useCallback)(() => u(e => !e), [u])
                    }, (0, n.createElement)(h.div, o({
                        "data-state": P(d),
                        "data-disabled": a ? "" : void 0
                    }, c, {
                        ref: r
                    })))
                }),
                I = (0, n.forwardRef)((e, r) => {
                    let {
                        __scopeCollapsible: t,
                        ...l
                    } = e, i = _("CollapsibleTrigger", t);
                    return (0, n.createElement)(h.button, o({
                        type: "button",
                        "aria-controls": i.contentId,
                        "aria-expanded": i.open || !1,
                        "data-state": P(i.open),
                        "data-disabled": i.disabled ? "" : void 0,
                        disabled: i.disabled
                    }, l, {
                        ref: r,
                        onClick: f(e.onClick, i.onOpenToggle)
                    }))
                }),
                S = "CollapsibleContent",
                O = (0, n.forwardRef)((e, r) => {
                    let {
                        forceMount: t,
                        ...l
                    } = e, i = _(S, e.__scopeCollapsible);
                    return (0, n.createElement)(y, {
                        present: t || i.open
                    }, ({
                        present: e
                    }) => (0, n.createElement)(M, o({}, l, {
                        ref: r,
                        present: e
                    })))
                }),
                M = (0, n.forwardRef)((e, r) => {
                    let {
                        __scopeCollapsible: t,
                        present: l,
                        children: i,
                        ...a
                    } = e, c = _(S, t), [d, u] = (0, n.useState)(l), p = (0, n.useRef)(null), f = s(r, p), m = (0, n.useRef)(0), b = m.current, g = (0, n.useRef)(0), y = g.current, w = c.open || d, x = (0, n.useRef)(w), k = (0, n.useRef)();
                    return (0, n.useEffect)(() => {
                        let e = requestAnimationFrame(() => x.current = !1);
                        return () => cancelAnimationFrame(e)
                    }, []), v(() => {
                        let e = p.current;
                        if (e) {
                            k.current = k.current || {
                                transitionDuration: e.style.transitionDuration,
                                animationName: e.style.animationName
                            }, e.style.transitionDuration = "0s", e.style.animationName = "none";
                            let r = e.getBoundingClientRect();
                            m.current = r.height, g.current = r.width, x.current || (e.style.transitionDuration = k.current.transitionDuration, e.style.animationName = k.current.animationName), u(l)
                        }
                    }, [c.open, l]), (0, n.createElement)(h.div, o({
                        "data-state": P(c.open),
                        "data-disabled": c.disabled ? "" : void 0,
                        id: c.contentId,
                        hidden: !w
                    }, a, {
                        ref: f,
                        style: {
                            "--radix-collapsible-content-height": b ? `${b}px` : void 0,
                            "--radix-collapsible-content-width": y ? `${y}px` : void 0,
                            ...e.style
                        }
                    }), w && i)
                });

            function P(e) {
                return e ? "open" : "closed"
            }
            let j = (0, n.createContext)(void 0),
                T = "Accordion",
                $ = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
                [D, U, V] = function(e) {
                    let r = e + "CollectionProvider",
                        [t, o] = i(r),
                        [l, a] = t(r, {
                            collectionRef: {
                                current: null
                            },
                            itemMap: new Map
                        }),
                        d = e => {
                            let {
                                scope: r,
                                children: t
                            } = e, o = n.useRef(null), i = n.useRef(new Map).current;
                            return n.createElement(l, {
                                scope: r,
                                itemMap: i,
                                collectionRef: o
                            }, t)
                        },
                        u = e + "CollectionSlot",
                        p = n.forwardRef((e, r) => {
                            let {
                                scope: t,
                                children: o
                            } = e, l = a(u, t), i = s(r, l.collectionRef);
                            return n.createElement(c, {
                                ref: i
                            }, o)
                        }),
                        f = e + "CollectionItemSlot",
                        m = "data-radix-collection-item",
                        b = n.forwardRef((e, r) => {
                            let {
                                scope: t,
                                children: o,
                                ...l
                            } = e, i = n.useRef(null), d = s(r, i), u = a(f, t);
                            return n.useEffect(() => (u.itemMap.set(i, {
                                ref: i,
                                ...l
                            }), () => void u.itemMap.delete(i))), n.createElement(c, {
                                [m]: "",
                                ref: d
                            }, o)
                        });
                    return [{
                        Provider: d,
                        Slot: p,
                        ItemSlot: b
                    }, function(r) {
                        let t = a(e + "CollectionConsumer", r),
                            o = n.useCallback(() => {
                                let e = t.collectionRef.current;
                                if (!e) return [];
                                let r = Array.from(e.querySelectorAll(`[${m}]`)),
                                    o = Array.from(t.itemMap.values()),
                                    n = o.sort((e, t) => r.indexOf(e.ref.current) - r.indexOf(t.ref.current));
                                return n
                            }, [t.collectionRef, t.itemMap]);
                        return o
                    }, o]
                }(T),
                [G, L] = i(T, [V, A]),
                W = A(),
                q = n.forwardRef((e, r) => {
                    let {
                        type: t,
                        ...l
                    } = e;
                    return n.createElement(D.Provider, {
                        scope: e.__scopeAccordion
                    }, "multiple" === t ? n.createElement(Z, o({}, l, {
                        ref: r
                    })) : n.createElement(Y, o({}, l, {
                        ref: r
                    })))
                });
            q.propTypes = {
                type(e) {
                    let r = e.value || e.defaultValue;
                    return e.type && !["single", "multiple"].includes(e.type) ? Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`.") : "multiple" === e.type && "string" == typeof r ? Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`.") : "single" === e.type && Array.isArray(r) ? Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`.") : null
                }
            };
            let [F, H] = G(T), [B, K] = G(T, {
                collapsible: !1
            }), Y = n.forwardRef((e, r) => {
                let {
                    value: t,
                    defaultValue: l,
                    onValueChange: i = () => {},
                    collapsible: a = !1,
                    ...s
                } = e, [c, d] = b({
                    prop: t,
                    defaultProp: l,
                    onChange: i
                });
                return n.createElement(F, {
                    scope: e.__scopeAccordion,
                    value: c ? [c] : [],
                    onItemOpen: d,
                    onItemClose: n.useCallback(() => a && d(""), [a, d])
                }, n.createElement(B, {
                    scope: e.__scopeAccordion,
                    collapsible: a
                }, n.createElement(X, o({}, s, {
                    ref: r
                }))))
            }), Z = n.forwardRef((e, r) => {
                let {
                    value: t,
                    defaultValue: l,
                    onValueChange: i = () => {},
                    ...a
                } = e, [s = [], c] = b({
                    prop: t,
                    defaultProp: l,
                    onChange: i
                }), d = n.useCallback(e => c((r = []) => [...r, e]), [c]), u = n.useCallback(e => c((r = []) => r.filter(r => r !== e)), [c]);
                return n.createElement(F, {
                    scope: e.__scopeAccordion,
                    value: s,
                    onItemOpen: d,
                    onItemClose: u
                }, n.createElement(B, {
                    scope: e.__scopeAccordion,
                    collapsible: !0
                }, n.createElement(X, o({}, a, {
                    ref: r
                }))))
            }), [J, Q] = G(T), X = n.forwardRef((e, r) => {
                let {
                    __scopeAccordion: t,
                    disabled: l,
                    dir: i,
                    orientation: a = "vertical",
                    ...c
                } = e, d = n.useRef(null), u = s(d, r), p = U(t), m = function(e) {
                    let r = (0, n.useContext)(j);
                    return e || r || "ltr"
                }(i), b = "ltr" === m, g = f(e.onKeyDown, e => {
                    var r;
                    if (!$.includes(e.key)) return;
                    let t = e.target,
                        o = p().filter(e => {
                            var r;
                            return !(null !== (r = e.ref.current) && void 0 !== r && r.disabled)
                        }),
                        n = o.findIndex(e => e.ref.current === t),
                        l = o.length;
                    if (-1 === n) return;
                    e.preventDefault();
                    let i = n,
                        s = l - 1,
                        c = () => {
                            (i = n + 1) > s && (i = 0)
                        },
                        d = () => {
                            (i = n - 1) < 0 && (i = s)
                        };
                    switch (e.key) {
                        case "Home":
                            i = 0;
                            break;
                        case "End":
                            i = s;
                            break;
                        case "ArrowRight":
                            "horizontal" === a && (b ? c() : d());
                            break;
                        case "ArrowDown":
                            "vertical" === a && c();
                            break;
                        case "ArrowLeft":
                            "horizontal" === a && (b ? d() : c());
                            break;
                        case "ArrowUp":
                            "vertical" === a && d()
                    }
                    let u = i % l;
                    null === (r = o[u].ref.current) || void 0 === r || r.focus()
                });
                return n.createElement(J, {
                    scope: t,
                    disabled: l,
                    direction: i,
                    orientation: a
                }, n.createElement(D.Slot, {
                    scope: t
                }, n.createElement(h.div, o({}, c, {
                    "data-orientation": a,
                    ref: u,
                    onKeyDown: l ? void 0 : g
                }))))
            }), ee = "AccordionItem", [er, et] = G(ee), eo = n.forwardRef((e, r) => {
                let {
                    __scopeAccordion: t,
                    value: l,
                    ...i
                } = e, a = Q(ee, t), s = H(ee, t), c = W(t), d = E(), u = l && s.value.includes(l) || !1, p = a.disabled || e.disabled;
                return n.createElement(er, {
                    scope: t,
                    open: u,
                    disabled: p,
                    triggerId: d
                }, n.createElement(R, o({
                    "data-orientation": a.orientation,
                    "data-state": es(u)
                }, c, i, {
                    ref: r,
                    disabled: p,
                    open: u,
                    onOpenChange: e => {
                        e ? s.onItemOpen(l) : s.onItemClose(l)
                    }
                })))
            }), en = n.forwardRef((e, r) => {
                let {
                    __scopeAccordion: t,
                    ...l
                } = e, i = Q(T, t), a = et("AccordionHeader", t);
                return n.createElement(h.h3, o({
                    "data-orientation": i.orientation,
                    "data-state": es(a.open),
                    "data-disabled": a.disabled ? "" : void 0
                }, l, {
                    ref: r
                }))
            }), el = "AccordionTrigger", ei = n.forwardRef((e, r) => {
                let {
                    __scopeAccordion: t,
                    ...l
                } = e, i = Q(T, t), a = et(el, t), s = K(el, t), c = W(t);
                return n.createElement(D.ItemSlot, {
                    scope: t
                }, n.createElement(I, o({
                    "aria-disabled": a.open && !s.collapsible || void 0,
                    "data-orientation": i.orientation,
                    id: a.triggerId
                }, c, l, {
                    ref: r
                })))
            }), ea = n.forwardRef((e, r) => {
                let {
                    __scopeAccordion: t,
                    ...l
                } = e, i = Q(T, t), a = et("AccordionContent", t), s = W(t);
                return n.createElement(O, o({
                    role: "region",
                    "aria-labelledby": a.triggerId,
                    "data-orientation": i.orientation
                }, s, l, {
                    ref: r,
                    style: {
                        "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
                        "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
                        ...e.style
                    }
                }))
            });

            function es(e) {
                return e ? "open" : "closed"
            }
            let ec = q,
                ed = eo,
                eu = en,
                ep = ei,
                ef = ea
        },
        512: function(e, r, t) {
            t.d(r, {
                W: function() {
                    return o
                }
            });

            function o() {
                for (var e, r, t = 0, o = "", n = arguments.length; t < n; t++)(e = arguments[t]) && (r = function e(r) {
                    var t, o, n = "";
                    if ("string" == typeof r || "number" == typeof r) n += r;
                    else if ("object" == typeof r) {
                        if (Array.isArray(r)) {
                            var l = r.length;
                            for (t = 0; t < l; t++) r[t] && (o = e(r[t])) && (n && (n += " "), n += o)
                        } else
                            for (o in r) r[o] && (n && (n += " "), n += o)
                    }
                    return n
                }(e)) && (o && (o += " "), o += r);
                return o
            }
        },
        8388: function(e, r, t) {
            t.d(r, {
                m6: function() {
                    return T
                }
            });
            let o = /^\[(.+)\]$/;

            function n(e, r) {
                let t = e;
                return r.split("-").forEach(e => {
                    t.nextPart.has(e) || t.nextPart.set(e, {
                        nextPart: new Map,
                        validators: []
                    }), t = t.nextPart.get(e)
                }), t
            }
            let l = /\s+/;

            function i() {
                let e, r, t = 0,
                    o = "";
                for (; t < arguments.length;)(e = arguments[t++]) && (r = function e(r) {
                    let t;
                    if ("string" == typeof r) return r;
                    let o = "";
                    for (let n = 0; n < r.length; n++) r[n] && (t = e(r[n])) && (o && (o += " "), o += t);
                    return o
                }(e)) && (o && (o += " "), o += r);
                return o
            }

            function a(e) {
                let r = r => r[e] || [];
                return r.isThemeGetter = !0, r
            }
            let s = /^\[(?:([a-z-]+):)?(.+)\]$/i,
                c = /^\d+\/\d+$/,
                d = new Set(["px", "full", "screen"]),
                u = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
                p = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
                f = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
                m = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
                b = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;

            function g(e) {
                return v(e) || d.has(e) || c.test(e)
            }

            function h(e) {
                return S(e, "length", O)
            }

            function v(e) {
                return !!e && !Number.isNaN(Number(e))
            }

            function y(e) {
                return S(e, "number", v)
            }

            function w(e) {
                return !!e && Number.isInteger(Number(e))
            }

            function x(e) {
                return e.endsWith("%") && v(e.slice(0, -1))
            }

            function k(e) {
                return s.test(e)
            }

            function E(e) {
                return u.test(e)
            }
            let C = new Set(["length", "size", "percentage"]);

            function N(e) {
                return S(e, C, M)
            }

            function A(e) {
                return S(e, "position", M)
            }
            let z = new Set(["image", "url"]);

            function _(e) {
                return S(e, z, j)
            }

            function R(e) {
                return S(e, "", P)
            }

            function I() {
                return !0
            }

            function S(e, r, t) {
                let o = s.exec(e);
                return !!o && (o[1] ? "string" == typeof r ? o[1] === r : r.has(o[1]) : t(o[2]))
            }

            function O(e) {
                return p.test(e) && !f.test(e)
            }

            function M() {
                return !1
            }

            function P(e) {
                return m.test(e)
            }

            function j(e) {
                return b.test(e)
            }
            let T = function(e) {
                let r, t, a;
                let s = function(l) {
                    let i = [].reduce((e, r) => r(e), e());
                    return t = (r = {
                        cache: function(e) {
                            if (e < 1) return {
                                get: () => void 0,
                                set: () => {}
                            };
                            let r = 0,
                                t = new Map,
                                o = new Map;

                            function n(n, l) {
                                t.set(n, l), ++r > e && (r = 0, o = t, t = new Map)
                            }
                            return {
                                get(e) {
                                    let r = t.get(e);
                                    return void 0 !== r ? r : void 0 !== (r = o.get(e)) ? (n(e, r), r) : void 0
                                },
                                set(e, r) {
                                    t.has(e) ? t.set(e, r) : n(e, r)
                                }
                            }
                        }(i.cacheSize),
                        splitModifiers: function(e) {
                            let r = e.separator,
                                t = 1 === r.length,
                                o = r[0],
                                n = r.length;
                            return function(e) {
                                let l;
                                let i = [],
                                    a = 0,
                                    s = 0;
                                for (let c = 0; c < e.length; c++) {
                                    let d = e[c];
                                    if (0 === a) {
                                        if (d === o && (t || e.slice(c, c + n) === r)) {
                                            i.push(e.slice(s, c)), s = c + n;
                                            continue
                                        }
                                        if ("/" === d) {
                                            l = c;
                                            continue
                                        }
                                    }
                                    "[" === d ? a++ : "]" === d && a--
                                }
                                let c = 0 === i.length ? e : e.substring(s),
                                    d = c.startsWith("!"),
                                    u = d ? c.substring(1) : c,
                                    p = l && l > s ? l - s : void 0;
                                return {
                                    modifiers: i,
                                    hasImportantModifier: d,
                                    baseClassName: u,
                                    maybePostfixModifierPosition: p
                                }
                            }
                        }(i),
                        ... function(e) {
                            let r = function(e) {
                                    var r;
                                    let {
                                        theme: t,
                                        prefix: o
                                    } = e, l = {
                                        nextPart: new Map,
                                        validators: []
                                    }, i = (r = Object.entries(e.classGroups), o ? r.map(([e, r]) => {
                                        let t = r.map(e => "string" == typeof e ? o + e : "object" == typeof e ? Object.fromEntries(Object.entries(e).map(([e, r]) => [o + e, r])) : e);
                                        return [e, t]
                                    }) : r);
                                    return i.forEach(([e, r]) => {
                                        (function e(r, t, o, l) {
                                            r.forEach(r => {
                                                if ("string" == typeof r) {
                                                    let e = "" === r ? t : n(t, r);
                                                    e.classGroupId = o;
                                                    return
                                                }
                                                if ("function" == typeof r) {
                                                    if (r.isThemeGetter) {
                                                        e(r(l), t, o, l);
                                                        return
                                                    }
                                                    t.validators.push({
                                                        validator: r,
                                                        classGroupId: o
                                                    });
                                                    return
                                                }
                                                Object.entries(r).forEach(([r, i]) => {
                                                    e(i, n(t, r), o, l)
                                                })
                                            })
                                        })(r, l, e, t)
                                    }), l
                                }(e),
                                {
                                    conflictingClassGroups: t,
                                    conflictingClassGroupModifiers: l
                                } = e;
                            return {
                                getClassGroupId: function(e) {
                                    let t = e.split("-");
                                    return "" === t[0] && 1 !== t.length && t.shift(),
                                        function e(r, t) {
                                            if (0 === r.length) return t.classGroupId;
                                            let o = r[0],
                                                n = t.nextPart.get(o),
                                                l = n ? e(r.slice(1), n) : void 0;
                                            if (l) return l;
                                            if (0 === t.validators.length) return;
                                            let i = r.join("-");
                                            return t.validators.find(({
                                                validator: e
                                            }) => e(i))?.classGroupId
                                        }(t, r) || function(e) {
                                            if (o.test(e)) {
                                                let r = o.exec(e)[1],
                                                    t = r?.substring(0, r.indexOf(":"));
                                                if (t) return "arbitrary.." + t
                                            }
                                        }(e)
                                },
                                getConflictingClassGroupIds: function(e, r) {
                                    let o = t[e] || [];
                                    return r && l[e] ? [...o, ...l[e]] : o
                                }
                            }
                        }(i)
                    }).cache.get, a = r.cache.set, s = c, c(l)
                };

                function c(e) {
                    let o = t(e);
                    if (o) return o;
                    let n = function(e, r) {
                        let {
                            splitModifiers: t,
                            getClassGroupId: o,
                            getConflictingClassGroupIds: n
                        } = r, i = new Set;
                        return e.trim().split(l).map(e => {
                            let {
                                modifiers: r,
                                hasImportantModifier: n,
                                baseClassName: l,
                                maybePostfixModifierPosition: i
                            } = t(e), a = o(i ? l.substring(0, i) : l), s = !!i;
                            if (!a) {
                                if (!i || !(a = o(l))) return {
                                    isTailwindClass: !1,
                                    originalClassName: e
                                };
                                s = !1
                            }
                            let c = (function(e) {
                                if (e.length <= 1) return e;
                                let r = [],
                                    t = [];
                                return e.forEach(e => {
                                    let o = "[" === e[0];
                                    o ? (r.push(...t.sort(), e), t = []) : t.push(e)
                                }), r.push(...t.sort()), r
                            })(r).join(":");
                            return {
                                isTailwindClass: !0,
                                modifierId: n ? c + "!" : c,
                                classGroupId: a,
                                originalClassName: e,
                                hasPostfixModifier: s
                            }
                        }).reverse().filter(e => {
                            if (!e.isTailwindClass) return !0;
                            let {
                                modifierId: r,
                                classGroupId: t,
                                hasPostfixModifier: o
                            } = e, l = r + t;
                            return !i.has(l) && (i.add(l), n(t, o).forEach(e => i.add(r + e)), !0)
                        }).reverse().map(e => e.originalClassName).join(" ")
                    }(e, r);
                    return a(e, n), n
                }
                return function() {
                    return s(i.apply(null, arguments))
                }
            }(function() {
                let e = a("colors"),
                    r = a("spacing"),
                    t = a("blur"),
                    o = a("brightness"),
                    n = a("borderColor"),
                    l = a("borderRadius"),
                    i = a("borderSpacing"),
                    s = a("borderWidth"),
                    c = a("contrast"),
                    d = a("grayscale"),
                    u = a("hueRotate"),
                    p = a("invert"),
                    f = a("gap"),
                    m = a("gradientColorStops"),
                    b = a("gradientColorStopPositions"),
                    C = a("inset"),
                    z = a("margin"),
                    S = a("opacity"),
                    O = a("padding"),
                    M = a("saturate"),
                    P = a("scale"),
                    j = a("sepia"),
                    T = a("skew"),
                    $ = a("space"),
                    D = a("translate"),
                    U = () => ["auto", "contain", "none"],
                    V = () => ["auto", "hidden", "clip", "visible", "scroll"],
                    G = () => ["auto", k, r],
                    L = () => [k, r],
                    W = () => ["", g, h],
                    q = () => ["auto", v, k],
                    F = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"],
                    H = () => ["solid", "dashed", "dotted", "double", "none"],
                    B = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
                    K = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
                    Y = () => ["", "0", k],
                    Z = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
                    J = () => [v, y],
                    Q = () => [v, k];
                return {
                    cacheSize: 500,
                    separator: ":",
                    theme: {
                        colors: [I],
                        spacing: [g, h],
                        blur: ["none", "", E, k],
                        brightness: J(),
                        borderColor: [e],
                        borderRadius: ["none", "", "full", E, k],
                        borderSpacing: L(),
                        borderWidth: W(),
                        contrast: J(),
                        grayscale: Y(),
                        hueRotate: Q(),
                        invert: Y(),
                        gap: L(),
                        gradientColorStops: [e],
                        gradientColorStopPositions: [x, h],
                        inset: G(),
                        margin: G(),
                        opacity: J(),
                        padding: L(),
                        saturate: J(),
                        scale: J(),
                        sepia: Y(),
                        skew: Q(),
                        space: L(),
                        translate: L()
                    },
                    classGroups: {
                        aspect: [{
                            aspect: ["auto", "square", "video", k]
                        }],
                        container: ["container"],
                        columns: [{
                            columns: [E]
                        }],
                        "break-after": [{
                            "break-after": Z()
                        }],
                        "break-before": [{
                            "break-before": Z()
                        }],
                        "break-inside": [{
                            "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                        }],
                        "box-decoration": [{
                            "box-decoration": ["slice", "clone"]
                        }],
                        box: [{
                            box: ["border", "content"]
                        }],
                        display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                        float: [{
                            float: ["right", "left", "none", "start", "end"]
                        }],
                        clear: [{
                            clear: ["left", "right", "both", "none", "start", "end"]
                        }],
                        isolation: ["isolate", "isolation-auto"],
                        "object-fit": [{
                            object: ["contain", "cover", "fill", "none", "scale-down"]
                        }],
                        "object-position": [{
                            object: [...F(), k]
                        }],
                        overflow: [{
                            overflow: V()
                        }],
                        "overflow-x": [{
                            "overflow-x": V()
                        }],
                        "overflow-y": [{
                            "overflow-y": V()
                        }],
                        overscroll: [{
                            overscroll: U()
                        }],
                        "overscroll-x": [{
                            "overscroll-x": U()
                        }],
                        "overscroll-y": [{
                            "overscroll-y": U()
                        }],
                        position: ["static", "fixed", "absolute", "relative", "sticky"],
                        inset: [{
                            inset: [C]
                        }],
                        "inset-x": [{
                            "inset-x": [C]
                        }],
                        "inset-y": [{
                            "inset-y": [C]
                        }],
                        start: [{
                            start: [C]
                        }],
                        end: [{
                            end: [C]
                        }],
                        top: [{
                            top: [C]
                        }],
                        right: [{
                            right: [C]
                        }],
                        bottom: [{
                            bottom: [C]
                        }],
                        left: [{
                            left: [C]
                        }],
                        visibility: ["visible", "invisible", "collapse"],
                        z: [{
                            z: ["auto", w, k]
                        }],
                        basis: [{
                            basis: G()
                        }],
                        "flex-direction": [{
                            flex: ["row", "row-reverse", "col", "col-reverse"]
                        }],
                        "flex-wrap": [{
                            flex: ["wrap", "wrap-reverse", "nowrap"]
                        }],
                        flex: [{
                            flex: ["1", "auto", "initial", "none", k]
                        }],
                        grow: [{
                            grow: Y()
                        }],
                        shrink: [{
                            shrink: Y()
                        }],
                        order: [{
                            order: ["first", "last", "none", w, k]
                        }],
                        "grid-cols": [{
                            "grid-cols": [I]
                        }],
                        "col-start-end": [{
                            col: ["auto", {
                                span: ["full", w, k]
                            }, k]
                        }],
                        "col-start": [{
                            "col-start": q()
                        }],
                        "col-end": [{
                            "col-end": q()
                        }],
                        "grid-rows": [{
                            "grid-rows": [I]
                        }],
                        "row-start-end": [{
                            row: ["auto", {
                                span: [w, k]
                            }, k]
                        }],
                        "row-start": [{
                            "row-start": q()
                        }],
                        "row-end": [{
                            "row-end": q()
                        }],
                        "grid-flow": [{
                            "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                        }],
                        "auto-cols": [{
                            "auto-cols": ["auto", "min", "max", "fr", k]
                        }],
                        "auto-rows": [{
                            "auto-rows": ["auto", "min", "max", "fr", k]
                        }],
                        gap: [{
                            gap: [f]
                        }],
                        "gap-x": [{
                            "gap-x": [f]
                        }],
                        "gap-y": [{
                            "gap-y": [f]
                        }],
                        "justify-content": [{
                            justify: ["normal", ...K()]
                        }],
                        "justify-items": [{
                            "justify-items": ["start", "end", "center", "stretch"]
                        }],
                        "justify-self": [{
                            "justify-self": ["auto", "start", "end", "center", "stretch"]
                        }],
                        "align-content": [{
                            content: ["normal", ...K(), "baseline"]
                        }],
                        "align-items": [{
                            items: ["start", "end", "center", "baseline", "stretch"]
                        }],
                        "align-self": [{
                            self: ["auto", "start", "end", "center", "stretch", "baseline"]
                        }],
                        "place-content": [{
                            "place-content": [...K(), "baseline"]
                        }],
                        "place-items": [{
                            "place-items": ["start", "end", "center", "baseline", "stretch"]
                        }],
                        "place-self": [{
                            "place-self": ["auto", "start", "end", "center", "stretch"]
                        }],
                        p: [{
                            p: [O]
                        }],
                        px: [{
                            px: [O]
                        }],
                        py: [{
                            py: [O]
                        }],
                        ps: [{
                            ps: [O]
                        }],
                        pe: [{
                            pe: [O]
                        }],
                        pt: [{
                            pt: [O]
                        }],
                        pr: [{
                            pr: [O]
                        }],
                        pb: [{
                            pb: [O]
                        }],
                        pl: [{
                            pl: [O]
                        }],
                        m: [{
                            m: [z]
                        }],
                        mx: [{
                            mx: [z]
                        }],
                        my: [{
                            my: [z]
                        }],
                        ms: [{
                            ms: [z]
                        }],
                        me: [{
                            me: [z]
                        }],
                        mt: [{
                            mt: [z]
                        }],
                        mr: [{
                            mr: [z]
                        }],
                        mb: [{
                            mb: [z]
                        }],
                        ml: [{
                            ml: [z]
                        }],
                        "space-x": [{
                            "space-x": [$]
                        }],
                        "space-x-reverse": ["space-x-reverse"],
                        "space-y": [{
                            "space-y": [$]
                        }],
                        "space-y-reverse": ["space-y-reverse"],
                        w: [{
                            w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", k, r]
                        }],
                        "min-w": [{
                            "min-w": [k, r, "min", "max", "fit"]
                        }],
                        "max-w": [{
                            "max-w": [k, r, "none", "full", "min", "max", "fit", "prose", {
                                screen: [E]
                            }, E]
                        }],
                        h: [{
                            h: [k, r, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
                        }],
                        "min-h": [{
                            "min-h": [k, r, "min", "max", "fit", "svh", "lvh", "dvh"]
                        }],
                        "max-h": [{
                            "max-h": [k, r, "min", "max", "fit", "svh", "lvh", "dvh"]
                        }],
                        size: [{
                            size: [k, r, "auto", "min", "max", "fit"]
                        }],
                        "font-size": [{
                            text: ["base", E, h]
                        }],
                        "font-smoothing": ["antialiased", "subpixel-antialiased"],
                        "font-style": ["italic", "not-italic"],
                        "font-weight": [{
                            font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", y]
                        }],
                        "font-family": [{
                            font: [I]
                        }],
                        "fvn-normal": ["normal-nums"],
                        "fvn-ordinal": ["ordinal"],
                        "fvn-slashed-zero": ["slashed-zero"],
                        "fvn-figure": ["lining-nums", "oldstyle-nums"],
                        "fvn-spacing": ["proportional-nums", "tabular-nums"],
                        "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
                        tracking: [{
                            tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", k]
                        }],
                        "line-clamp": [{
                            "line-clamp": ["none", v, y]
                        }],
                        leading: [{
                            leading: ["none", "tight", "snug", "normal", "relaxed", "loose", g, k]
                        }],
                        "list-image": [{
                            "list-image": ["none", k]
                        }],
                        "list-style-type": [{
                            list: ["none", "disc", "decimal", k]
                        }],
                        "list-style-position": [{
                            list: ["inside", "outside"]
                        }],
                        "placeholder-color": [{
                            placeholder: [e]
                        }],
                        "placeholder-opacity": [{
                            "placeholder-opacity": [S]
                        }],
                        "text-alignment": [{
                            text: ["left", "center", "right", "justify", "start", "end"]
                        }],
                        "text-color": [{
                            text: [e]
                        }],
                        "text-opacity": [{
                            "text-opacity": [S]
                        }],
                        "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                        "text-decoration-style": [{
                            decoration: [...H(), "wavy"]
                        }],
                        "text-decoration-thickness": [{
                            decoration: ["auto", "from-font", g, h]
                        }],
                        "underline-offset": [{
                            "underline-offset": ["auto", g, k]
                        }],
                        "text-decoration-color": [{
                            decoration: [e]
                        }],
                        "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                        "text-wrap": [{
                            text: ["wrap", "nowrap", "balance", "pretty"]
                        }],
                        indent: [{
                            indent: L()
                        }],
                        "vertical-align": [{
                            align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", k]
                        }],
                        whitespace: [{
                            whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                        }],
                        break: [{
                            break: ["normal", "words", "all", "keep"]
                        }],
                        hyphens: [{
                            hyphens: ["none", "manual", "auto"]
                        }],
                        content: [{
                            content: ["none", k]
                        }],
                        "bg-attachment": [{
                            bg: ["fixed", "local", "scroll"]
                        }],
                        "bg-clip": [{
                            "bg-clip": ["border", "padding", "content", "text"]
                        }],
                        "bg-opacity": [{
                            "bg-opacity": [S]
                        }],
                        "bg-origin": [{
                            "bg-origin": ["border", "padding", "content"]
                        }],
                        "bg-position": [{
                            bg: [...F(), A]
                        }],
                        "bg-repeat": [{
                            bg: ["no-repeat", {
                                repeat: ["", "x", "y", "round", "space"]
                            }]
                        }],
                        "bg-size": [{
                            bg: ["auto", "cover", "contain", N]
                        }],
                        "bg-image": [{
                            bg: ["none", {
                                "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                            }, _]
                        }],
                        "bg-color": [{
                            bg: [e]
                        }],
                        "gradient-from-pos": [{
                            from: [b]
                        }],
                        "gradient-via-pos": [{
                            via: [b]
                        }],
                        "gradient-to-pos": [{
                            to: [b]
                        }],
                        "gradient-from": [{
                            from: [m]
                        }],
                        "gradient-via": [{
                            via: [m]
                        }],
                        "gradient-to": [{
                            to: [m]
                        }],
                        rounded: [{
                            rounded: [l]
                        }],
                        "rounded-s": [{
                            "rounded-s": [l]
                        }],
                        "rounded-e": [{
                            "rounded-e": [l]
                        }],
                        "rounded-t": [{
                            "rounded-t": [l]
                        }],
                        "rounded-r": [{
                            "rounded-r": [l]
                        }],
                        "rounded-b": [{
                            "rounded-b": [l]
                        }],
                        "rounded-l": [{
                            "rounded-l": [l]
                        }],
                        "rounded-ss": [{
                            "rounded-ss": [l]
                        }],
                        "rounded-se": [{
                            "rounded-se": [l]
                        }],
                        "rounded-ee": [{
                            "rounded-ee": [l]
                        }],
                        "rounded-es": [{
                            "rounded-es": [l]
                        }],
                        "rounded-tl": [{
                            "rounded-tl": [l]
                        }],
                        "rounded-tr": [{
                            "rounded-tr": [l]
                        }],
                        "rounded-br": [{
                            "rounded-br": [l]
                        }],
                        "rounded-bl": [{
                            "rounded-bl": [l]
                        }],
                        "border-w": [{
                            border: [s]
                        }],
                        "border-w-x": [{
                            "border-x": [s]
                        }],
                        "border-w-y": [{
                            "border-y": [s]
                        }],
                        "border-w-s": [{
                            "border-s": [s]
                        }],
                        "border-w-e": [{
                            "border-e": [s]
                        }],
                        "border-w-t": [{
                            "border-t": [s]
                        }],
                        "border-w-r": [{
                            "border-r": [s]
                        }],
                        "border-w-b": [{
                            "border-b": [s]
                        }],
                        "border-w-l": [{
                            "border-l": [s]
                        }],
                        "border-opacity": [{
                            "border-opacity": [S]
                        }],
                        "border-style": [{
                            border: [...H(), "hidden"]
                        }],
                        "divide-x": [{
                            "divide-x": [s]
                        }],
                        "divide-x-reverse": ["divide-x-reverse"],
                        "divide-y": [{
                            "divide-y": [s]
                        }],
                        "divide-y-reverse": ["divide-y-reverse"],
                        "divide-opacity": [{
                            "divide-opacity": [S]
                        }],
                        "divide-style": [{
                            divide: H()
                        }],
                        "border-color": [{
                            border: [n]
                        }],
                        "border-color-x": [{
                            "border-x": [n]
                        }],
                        "border-color-y": [{
                            "border-y": [n]
                        }],
                        "border-color-t": [{
                            "border-t": [n]
                        }],
                        "border-color-r": [{
                            "border-r": [n]
                        }],
                        "border-color-b": [{
                            "border-b": [n]
                        }],
                        "border-color-l": [{
                            "border-l": [n]
                        }],
                        "divide-color": [{
                            divide: [n]
                        }],
                        "outline-style": [{
                            outline: ["", ...H()]
                        }],
                        "outline-offset": [{
                            "outline-offset": [g, k]
                        }],
                        "outline-w": [{
                            outline: [g, h]
                        }],
                        "outline-color": [{
                            outline: [e]
                        }],
                        "ring-w": [{
                            ring: W()
                        }],
                        "ring-w-inset": ["ring-inset"],
                        "ring-color": [{
                            ring: [e]
                        }],
                        "ring-opacity": [{
                            "ring-opacity": [S]
                        }],
                        "ring-offset-w": [{
                            "ring-offset": [g, h]
                        }],
                        "ring-offset-color": [{
                            "ring-offset": [e]
                        }],
                        shadow: [{
                            shadow: ["", "inner", "none", E, R]
                        }],
                        "shadow-color": [{
                            shadow: [I]
                        }],
                        opacity: [{
                            opacity: [S]
                        }],
                        "mix-blend": [{
                            "mix-blend": [...B(), "plus-lighter", "plus-darker"]
                        }],
                        "bg-blend": [{
                            "bg-blend": B()
                        }],
                        filter: [{
                            filter: ["", "none"]
                        }],
                        blur: [{
                            blur: [t]
                        }],
                        brightness: [{
                            brightness: [o]
                        }],
                        contrast: [{
                            contrast: [c]
                        }],
                        "drop-shadow": [{
                            "drop-shadow": ["", "none", E, k]
                        }],
                        grayscale: [{
                            grayscale: [d]
                        }],
                        "hue-rotate": [{
                            "hue-rotate": [u]
                        }],
                        invert: [{
                            invert: [p]
                        }],
                        saturate: [{
                            saturate: [M]
                        }],
                        sepia: [{
                            sepia: [j]
                        }],
                        "backdrop-filter": [{
                            "backdrop-filter": ["", "none"]
                        }],
                        "backdrop-blur": [{
                            "backdrop-blur": [t]
                        }],
                        "backdrop-brightness": [{
                            "backdrop-brightness": [o]
                        }],
                        "backdrop-contrast": [{
                            "backdrop-contrast": [c]
                        }],
                        "backdrop-grayscale": [{
                            "backdrop-grayscale": [d]
                        }],
                        "backdrop-hue-rotate": [{
                            "backdrop-hue-rotate": [u]
                        }],
                        "backdrop-invert": [{
                            "backdrop-invert": [p]
                        }],
                        "backdrop-opacity": [{
                            "backdrop-opacity": [S]
                        }],
                        "backdrop-saturate": [{
                            "backdrop-saturate": [M]
                        }],
                        "backdrop-sepia": [{
                            "backdrop-sepia": [j]
                        }],
                        "border-collapse": [{
                            border: ["collapse", "separate"]
                        }],
                        "border-spacing": [{
                            "border-spacing": [i]
                        }],
                        "border-spacing-x": [{
                            "border-spacing-x": [i]
                        }],
                        "border-spacing-y": [{
                            "border-spacing-y": [i]
                        }],
                        "table-layout": [{
                            table: ["auto", "fixed"]
                        }],
                        caption: [{
                            caption: ["top", "bottom"]
                        }],
                        transition: [{
                            transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", k]
                        }],
                        duration: [{
                            duration: Q()
                        }],
                        ease: [{
                            ease: ["linear", "in", "out", "in-out", k]
                        }],
                        delay: [{
                            delay: Q()
                        }],
                        animate: [{
                            animate: ["none", "spin", "ping", "pulse", "bounce", k]
                        }],
                        transform: [{
                            transform: ["", "gpu", "none"]
                        }],
                        scale: [{
                            scale: [P]
                        }],
                        "scale-x": [{
                            "scale-x": [P]
                        }],
                        "scale-y": [{
                            "scale-y": [P]
                        }],
                        rotate: [{
                            rotate: [w, k]
                        }],
                        "translate-x": [{
                            "translate-x": [D]
                        }],
                        "translate-y": [{
                            "translate-y": [D]
                        }],
                        "skew-x": [{
                            "skew-x": [T]
                        }],
                        "skew-y": [{
                            "skew-y": [T]
                        }],
                        "transform-origin": [{
                            origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", k]
                        }],
                        accent: [{
                            accent: ["auto", e]
                        }],
                        appearance: [{
                            appearance: ["none", "auto"]
                        }],
                        cursor: [{
                            cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", k]
                        }],
                        "caret-color": [{
                            caret: [e]
                        }],
                        "pointer-events": [{
                            "pointer-events": ["none", "auto"]
                        }],
                        resize: [{
                            resize: ["none", "y", "x", ""]
                        }],
                        "scroll-behavior": [{
                            scroll: ["auto", "smooth"]
                        }],
                        "scroll-m": [{
                            "scroll-m": L()
                        }],
                        "scroll-mx": [{
                            "scroll-mx": L()
                        }],
                        "scroll-my": [{
                            "scroll-my": L()
                        }],
                        "scroll-ms": [{
                            "scroll-ms": L()
                        }],
                        "scroll-me": [{
                            "scroll-me": L()
                        }],
                        "scroll-mt": [{
                            "scroll-mt": L()
                        }],
                        "scroll-mr": [{
                            "scroll-mr": L()
                        }],
                        "scroll-mb": [{
                            "scroll-mb": L()
                        }],
                        "scroll-ml": [{
                            "scroll-ml": L()
                        }],
                        "scroll-p": [{
                            "scroll-p": L()
                        }],
                        "scroll-px": [{
                            "scroll-px": L()
                        }],
                        "scroll-py": [{
                            "scroll-py": L()
                        }],
                        "scroll-ps": [{
                            "scroll-ps": L()
                        }],
                        "scroll-pe": [{
                            "scroll-pe": L()
                        }],
                        "scroll-pt": [{
                            "scroll-pt": L()
                        }],
                        "scroll-pr": [{
                            "scroll-pr": L()
                        }],
                        "scroll-pb": [{
                            "scroll-pb": L()
                        }],
                        "scroll-pl": [{
                            "scroll-pl": L()
                        }],
                        "snap-align": [{
                            snap: ["start", "end", "center", "align-none"]
                        }],
                        "snap-stop": [{
                            snap: ["normal", "always"]
                        }],
                        "snap-type": [{
                            snap: ["none", "x", "y", "both"]
                        }],
                        "snap-strictness": [{
                            snap: ["mandatory", "proximity"]
                        }],
                        touch: [{
                            touch: ["auto", "none", "manipulation"]
                        }],
                        "touch-x": [{
                            "touch-pan": ["x", "left", "right"]
                        }],
                        "touch-y": [{
                            "touch-pan": ["y", "up", "down"]
                        }],
                        "touch-pz": ["touch-pinch-zoom"],
                        select: [{
                            select: ["none", "text", "all", "auto"]
                        }],
                        "will-change": [{
                            "will-change": ["auto", "scroll", "contents", "transform", k]
                        }],
                        fill: [{
                            fill: [e, "none"]
                        }],
                        "stroke-w": [{
                            stroke: [g, h, y]
                        }],
                        stroke: [{
                            stroke: [e, "none"]
                        }],
                        sr: ["sr-only", "not-sr-only"],
                        "forced-color-adjust": [{
                            "forced-color-adjust": ["auto", "none"]
                        }]
                    },
                    conflictingClassGroups: {
                        overflow: ["overflow-x", "overflow-y"],
                        overscroll: ["overscroll-x", "overscroll-y"],
                        inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                        "inset-x": ["right", "left"],
                        "inset-y": ["top", "bottom"],
                        flex: ["basis", "grow", "shrink"],
                        gap: ["gap-x", "gap-y"],
                        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                        px: ["pr", "pl"],
                        py: ["pt", "pb"],
                        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                        mx: ["mr", "ml"],
                        my: ["mt", "mb"],
                        size: ["w", "h"],
                        "font-size": ["leading"],
                        "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                        "fvn-ordinal": ["fvn-normal"],
                        "fvn-slashed-zero": ["fvn-normal"],
                        "fvn-figure": ["fvn-normal"],
                        "fvn-spacing": ["fvn-normal"],
                        "fvn-fraction": ["fvn-normal"],
                        "line-clamp": ["display", "overflow"],
                        rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                        "rounded-s": ["rounded-ss", "rounded-es"],
                        "rounded-e": ["rounded-se", "rounded-ee"],
                        "rounded-t": ["rounded-tl", "rounded-tr"],
                        "rounded-r": ["rounded-tr", "rounded-br"],
                        "rounded-b": ["rounded-br", "rounded-bl"],
                        "rounded-l": ["rounded-tl", "rounded-bl"],
                        "border-spacing": ["border-spacing-x", "border-spacing-y"],
                        "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                        "border-w-x": ["border-w-r", "border-w-l"],
                        "border-w-y": ["border-w-t", "border-w-b"],
                        "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                        "border-color-x": ["border-color-r", "border-color-l"],
                        "border-color-y": ["border-color-t", "border-color-b"],
                        "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                        "scroll-mx": ["scroll-mr", "scroll-ml"],
                        "scroll-my": ["scroll-mt", "scroll-mb"],
                        "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                        "scroll-px": ["scroll-pr", "scroll-pl"],
                        "scroll-py": ["scroll-pt", "scroll-pb"],
                        touch: ["touch-x", "touch-y", "touch-pz"],
                        "touch-x": ["touch"],
                        "touch-y": ["touch"],
                        "touch-pz": ["touch"]
                    },
                    conflictingClassGroupModifiers: {
                        "font-size": ["leading"]
                    }
                }
            })
        }
    }
]);