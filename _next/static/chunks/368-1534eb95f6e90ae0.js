(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [368], {
        2466: function(e, t, n) {
            "use strict";
            let r, l, a;
            n.d(t, {
                A: function() {
                    return ef
                },
                B: function() {
                    return R
                },
                C: function() {
                    return ed
                },
                E: function() {
                    return I
                },
                a: function() {
                    return L
                },
                b: function() {
                    return eE
                },
                c: function() {
                    return ee
                },
                d: function() {
                    return ex
                },
                e: function() {
                    return C
                },
                i: function() {
                    return N
                },
                u: function() {
                    return M
                }
            });
            var i, o, u = n(9477),
                s = n(7294),
                c = n(2576);
            let f = "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
                d = f ? s.useEffect : s.useLayoutEffect;
            var p = n(6525),
                h = n.n(p),
                m = n(5431);
            let v = e => "object" == typeof e && "function" == typeof e.then,
                g = [];

            function y(e, t, n = (e, t) => e === t) {
                if (e === t) return !0;
                if (!e || !t) return !1;
                let r = e.length;
                if (t.length !== r) return !1;
                for (let l = 0; l < r; l++)
                    if (!n(e[l], t[l])) return !1;
                return !0
            }

            function b(e, t = null, n = !1, r = {}) {
                for (let l of (null === t && (t = [e]), g))
                    if (y(t, l.keys, l.equal)) {
                        if (n) return;
                        if (Object.prototype.hasOwnProperty.call(l, "error")) throw l.error;
                        if (Object.prototype.hasOwnProperty.call(l, "response")) return r.lifespan && r.lifespan > 0 && (l.timeout && clearTimeout(l.timeout), l.timeout = setTimeout(l.remove, r.lifespan)), l.response;
                        if (!n) throw l.promise
                    } let l = {
                    keys: t,
                    equal: r.equal,
                    remove: () => {
                        let e = g.indexOf(l); - 1 !== e && g.splice(e, 1)
                    },
                    promise: (v(e) ? e : e(...t)).then(e => {
                        l.response = e, r.lifespan && r.lifespan > 0 && (l.timeout = setTimeout(l.remove, r.lifespan))
                    }).catch(e => l.error = e)
                };
                if (g.push(l), !n) throw l.promise
            }
            let w = (e, t, n) => b(e, t, !1, n),
                S = (e, t, n) => void b(e, t, !0, n),
                k = e => {
                    if (void 0 === e || 0 === e.length) g.splice(0, g.length);
                    else {
                        let t = g.find(t => y(e, t.keys, t.equal));
                        t && t.remove()
                    }
                };
            var E = n(5893),
                _ = n(3454);
            let x = {},
                C = e => void Object.assign(x, e),
                P = e => "colorSpace" in e || "outputColorSpace" in e,
                T = () => {
                    var e;
                    return null != (e = x.ColorManagement) ? e : null
                },
                z = e => e && e.isOrthographicCamera,
                N = e => e && e.hasOwnProperty("current"),
                L = "undefined" != typeof window && (null != (i = window.document) && i.createElement || (null == (o = window.navigator) ? void 0 : o.product) === "ReactNative") ? s.useLayoutEffect : s.useEffect;

            function M(e) {
                let t = s.useRef(e);
                return L(() => void(t.current = e), [e]), t
            }

            function R({
                set: e
            }) {
                return L(() => (e(new Promise(() => null)), () => e(!1)), [e]), null
            }
            class I extends s.Component {
                constructor(...e) {
                    super(...e), this.state = {
                        error: !1
                    }
                }
                componentDidCatch(e) {
                    this.props.set(e)
                }
                render() {
                    return this.state.error ? null : this.props.children
                }
            }
            I.getDerivedStateFromError = () => ({
                error: !0
            });
            let j = "__default",
                O = new Map,
                A = e => e && !!e.memoized && !!e.changes;

            function D(e) {
                var t;
                let n = "undefined" != typeof window ? null != (t = window.devicePixelRatio) ? t : 2 : 1;
                return Array.isArray(e) ? Math.min(Math.max(e[0], n), e[1]) : e
            }
            let F = e => {
                var t;
                return null == (t = e.__r3f) ? void 0 : t.root.getState()
            };

            function U(e) {
                let t = e.__r3f.root;
                for (; t.getState().previousRoot;) t = t.getState().previousRoot;
                return t
            }
            let H = {
                obj: e => e === Object(e) && !H.arr(e) && "function" != typeof e,
                fun: e => "function" == typeof e,
                str: e => "string" == typeof e,
                num: e => "number" == typeof e,
                boo: e => "boolean" == typeof e,
                und: e => void 0 === e,
                arr: e => Array.isArray(e),
                equ(e, t, {
                    arrays: n = "shallow",
                    objects: r = "reference",
                    strict: l = !0
                } = {}) {
                    let a;
                    if (typeof e != typeof t || !!e != !!t) return !1;
                    if (H.str(e) || H.num(e) || H.boo(e)) return e === t;
                    let i = H.obj(e);
                    if (i && "reference" === r) return e === t;
                    let o = H.arr(e);
                    if (o && "reference" === n) return e === t;
                    if ((o || i) && e === t) return !0;
                    for (a in e)
                        if (!(a in t)) return !1;
                    if (i && "shallow" === n && "shallow" === r) {
                        for (a in l ? t : e)
                            if (!H.equ(e[a], t[a], {
                                    strict: l,
                                    objects: "reference"
                                })) return !1
                    } else
                        for (a in l ? t : e)
                            if (e[a] !== t[a]) return !1;
                    if (H.und(a)) {
                        if (o && 0 === e.length && 0 === t.length || i && 0 === Object.keys(e).length && 0 === Object.keys(t).length) return !0;
                        if (e !== t) return !1
                    }
                    return !0
                }
            };

            function Q(e, t) {
                let n = e;
                return n.__r3f = {
                    type: "",
                    root: null,
                    previousAttach: null,
                    memoizedProps: {},
                    eventCount: 0,
                    handlers: {},
                    objects: [],
                    parent: null,
                    ...t
                }, e
            }

            function B(e, t) {
                let n = e;
                if (!t.includes("-")) return {
                    target: n,
                    key: t
                };
                {
                    let r = t.split("-"),
                        l = r.pop();
                    return {
                        target: n = r.reduce((e, t) => e[t], e),
                        key: l
                    }
                }
            }
            let W = /-\d+$/;

            function $(e, t, n) {
                if (H.str(n)) {
                    if (W.test(n)) {
                        let t = n.replace(W, ""),
                            {
                                target: r,
                                key: l
                            } = B(e, t);
                        Array.isArray(r[l]) || (r[l] = [])
                    }
                    let {
                        target: r,
                        key: l
                    } = B(e, n);
                    t.__r3f.previousAttach = r[l], r[l] = t
                } else t.__r3f.previousAttach = n(e, t)
            }

            function q(e, t, n) {
                var r, l;
                if (H.str(n)) {
                    let {
                        target: r,
                        key: l
                    } = B(e, n), a = t.__r3f.previousAttach;
                    void 0 === a ? delete r[l] : r[l] = a
                } else null == (r = t.__r3f) || null == r.previousAttach || r.previousAttach(e, t);
                null == (l = t.__r3f) || delete l.previousAttach
            }

            function V(e, {
                children: t,
                key: n,
                ref: r,
                ...l
            }, {
                children: a,
                key: i,
                ref: o,
                ...u
            } = {}, s = !1) {
                let c = e.__r3f,
                    f = Object.entries(l),
                    d = [];
                if (s) {
                    let e = Object.keys(u);
                    for (let t = 0; t < e.length; t++) l.hasOwnProperty(e[t]) || f.unshift([e[t], j + "remove"])
                }
                f.forEach(([t, n]) => {
                    var r;
                    if (null != (r = e.__r3f) && r.primitive && "object" === t || H.equ(n, u[t])) return;
                    if (/^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/.test(t)) return d.push([t, n, !0, []]);
                    let a = [];
                    for (let e in t.includes("-") && (a = t.split("-")), d.push([t, n, !1, a]), l) {
                        let n = l[e];
                        e.startsWith(`${t}-`) && d.push([e, n, !1, e.split("-")])
                    }
                });
                let p = {
                    ...l
                };
                return null != c && c.memoizedProps && null != c && c.memoizedProps.args && (p.args = c.memoizedProps.args), null != c && c.memoizedProps && null != c && c.memoizedProps.attach && (p.attach = c.memoizedProps.attach), {
                    memoized: p,
                    changes: d
                }
            }
            let Y = void 0 !== _ && !1;

            function G(e, t) {
                var n;
                let r = e.__r3f,
                    l = null == r ? void 0 : r.root,
                    a = null == l ? void 0 : null == l.getState ? void 0 : l.getState(),
                    {
                        memoized: i,
                        changes: o
                    } = A(t) ? t : V(e, t),
                    s = null == r ? void 0 : r.eventCount;
                e.__r3f && (e.__r3f.memoizedProps = i);
                for (let t = 0; t < o.length; t++) {
                    let [n, l, i, s] = o[t];
                    if (P(e)) {
                        let e = "srgb",
                            t = "srgb-linear";
                        "encoding" === n ? (n = "colorSpace", l = 3001 === l ? e : t) : "outputEncoding" === n && (n = "outputColorSpace", l = 3001 === l ? e : t)
                    }
                    let c = e,
                        f = c[n];
                    if (s.length && !((f = s.reduce((e, t) => e[t], e)) && f.set)) {
                        let [t, ...r] = s.reverse();
                        c = r.reverse().reduce((e, t) => e[t], e), n = t
                    }
                    if (l === j + "remove") {
                        if (c.constructor) {
                            let e = O.get(c.constructor);
                            e || (e = new c.constructor, O.set(c.constructor, e)), l = e[n]
                        } else l = 0
                    }
                    if (i && r) l ? r.handlers[n] = l : delete r.handlers[n], r.eventCount = Object.keys(r.handlers).length;
                    else if (f && f.set && (f.copy || f instanceof u.Layers)) {
                        if (Array.isArray(l)) f.fromArray ? f.fromArray(l) : f.set(...l);
                        else if (f.copy && l && l.constructor && (Y ? f.constructor.name === l.constructor.name : f.constructor === l.constructor)) f.copy(l);
                        else if (void 0 !== l) {
                            let e = f instanceof u.Color;
                            !e && f.setScalar ? f.setScalar(l) : f instanceof u.Layers && l instanceof u.Layers ? f.mask = l.mask : f.set(l), !T() && a && !a.linear && e && f.convertSRGBToLinear()
                        }
                    } else if (c[n] = l, c[n] instanceof u.Texture && c[n].format === u.RGBAFormat && c[n].type === u.UnsignedByteType && a) {
                        let e = c[n];
                        P(e) && P(a.gl) ? e.colorSpace = a.gl.outputColorSpace : e.encoding = a.gl.outputEncoding
                    }
                    X(e)
                }
                if (r && r.parent && e.raycast && s !== r.eventCount) {
                    let t = U(e).getState().internal,
                        n = t.interaction.indexOf(e);
                    n > -1 && t.interaction.splice(n, 1), r.eventCount && t.interaction.push(e)
                }
                let c = 1 === o.length && "onUpdate" === o[0][0];
                return !c && o.length && null != (n = e.__r3f) && n.parent && J(e), e
            }

            function X(e) {
                var t, n;
                let r = null == (t = e.__r3f) ? void 0 : null == (n = t.root) ? void 0 : null == n.getState ? void 0 : n.getState();
                r && 0 === r.internal.frames && r.invalidate()
            }

            function J(e) {
                null == e.onUpdate || e.onUpdate(e)
            }

            function K(e) {
                return (e.eventObject || e.object).uuid + "/" + e.index + e.instanceId
            }

            function Z(e, t, n, r) {
                let l = n.get(t);
                l && (n.delete(t), 0 === n.size && (e.delete(r), l.target.releasePointerCapture(r)))
            }

            function ee(e) {
                function t(e) {
                    return e.filter(e => ["Move", "Over", "Enter", "Out", "Leave"].some(t => {
                        var n;
                        return null == (n = e.__r3f) ? void 0 : n.handlers["onPointer" + t]
                    }))
                }

                function n(t) {
                    let {
                        internal: n
                    } = e.getState();
                    for (let e of n.hovered.values())
                        if (!t.length || !t.find(t => t.object === e.object && t.index === e.index && t.instanceId === e.instanceId)) {
                            let r = e.eventObject,
                                l = r.__r3f,
                                a = null == l ? void 0 : l.handlers;
                            if (n.hovered.delete(K(e)), null != l && l.eventCount) {
                                let n = {
                                    ...e,
                                    intersections: t
                                };
                                null == a.onPointerOut || a.onPointerOut(n), null == a.onPointerLeave || a.onPointerLeave(n)
                            }
                        }
                }

                function r(e, t) {
                    for (let n = 0; n < t.length; n++) {
                        let r = t[n].__r3f;
                        null == r || null == r.handlers.onPointerMissed || r.handlers.onPointerMissed(e)
                    }
                }
                return {
                    handlePointer: function(l) {
                        switch (l) {
                            case "onPointerLeave":
                            case "onPointerCancel":
                                return () => n([]);
                            case "onLostPointerCapture":
                                return t => {
                                    let {
                                        internal: r
                                    } = e.getState();
                                    "pointerId" in t && r.capturedMap.has(t.pointerId) && requestAnimationFrame(() => {
                                        r.capturedMap.has(t.pointerId) && (r.capturedMap.delete(t.pointerId), n([]))
                                    })
                                }
                        }
                        return function(a) {
                            let {
                                onPointerMissed: i,
                                internal: o
                            } = e.getState();
                            o.lastEvent.current = a;
                            let s = "onPointerMove" === l,
                                c = "onClick" === l || "onContextMenu" === l || "onDoubleClick" === l,
                                f = function(t, n) {
                                    let r = e.getState(),
                                        l = new Set,
                                        a = [],
                                        i = n ? n(r.internal.interaction) : r.internal.interaction;
                                    for (let e = 0; e < i.length; e++) {
                                        let t = F(i[e]);
                                        t && (t.raycaster.camera = void 0)
                                    }
                                    r.previousRoot || null == r.events.compute || r.events.compute(t, r);
                                    let o = i.flatMap(function(e) {
                                        let n = F(e);
                                        if (!n || !n.events.enabled || null === n.raycaster.camera) return [];
                                        if (void 0 === n.raycaster.camera) {
                                            var r;
                                            null == n.events.compute || n.events.compute(t, n, null == (r = n.previousRoot) ? void 0 : r.getState()), void 0 === n.raycaster.camera && (n.raycaster.camera = null)
                                        }
                                        return n.raycaster.camera ? n.raycaster.intersectObject(e, !0) : []
                                    }).sort((e, t) => {
                                        let n = F(e.object),
                                            r = F(t.object);
                                        return n && r && r.events.priority - n.events.priority || e.distance - t.distance
                                    }).filter(e => {
                                        let t = K(e);
                                        return !l.has(t) && (l.add(t), !0)
                                    });
                                    for (let e of (r.events.filter && (o = r.events.filter(o, r)), o)) {
                                        let t = e.object;
                                        for (; t;) {
                                            var u;
                                            null != (u = t.__r3f) && u.eventCount && a.push({
                                                ...e,
                                                eventObject: t
                                            }), t = t.parent
                                        }
                                    }
                                    if ("pointerId" in t && r.internal.capturedMap.has(t.pointerId))
                                        for (let e of r.internal.capturedMap.get(t.pointerId).values()) l.has(K(e.intersection)) || a.push(e.intersection);
                                    return a
                                }(a, s ? t : void 0),
                                d = c ? function(t) {
                                    let {
                                        internal: n
                                    } = e.getState(), r = t.offsetX - n.initialClick[0], l = t.offsetY - n.initialClick[1];
                                    return Math.round(Math.sqrt(r * r + l * l))
                                }(a) : 0;
                            "onPointerDown" === l && (o.initialClick = [a.offsetX, a.offsetY], o.initialHits = f.map(e => e.eventObject)), c && !f.length && d <= 2 && (r(a, o.interaction), i && i(a)), s && n(f),
                                function(t, r, l, a) {
                                    let i = e.getState();
                                    if (t.length) {
                                        let e = {
                                            stopped: !1
                                        };
                                        for (let o of t) {
                                            let s = F(o.object) || i,
                                                {
                                                    raycaster: c,
                                                    pointer: f,
                                                    camera: d,
                                                    internal: p
                                                } = s,
                                                h = new u.Vector3(f.x, f.y, 0).unproject(d),
                                                m = e => {
                                                    var t, n;
                                                    return null != (t = null == (n = p.capturedMap.get(e)) ? void 0 : n.has(o.eventObject)) && t
                                                },
                                                v = e => {
                                                    let t = {
                                                        intersection: o,
                                                        target: r.target
                                                    };
                                                    p.capturedMap.has(e) ? p.capturedMap.get(e).set(o.eventObject, t) : p.capturedMap.set(e, new Map([
                                                        [o.eventObject, t]
                                                    ])), r.target.setPointerCapture(e)
                                                },
                                                g = e => {
                                                    let t = p.capturedMap.get(e);
                                                    t && Z(p.capturedMap, o.eventObject, t, e)
                                                },
                                                y = {};
                                            for (let e in r) {
                                                let t = r[e];
                                                "function" != typeof t && (y[e] = t)
                                            }
                                            let b = {
                                                ...o,
                                                ...y,
                                                pointer: f,
                                                intersections: t,
                                                stopped: e.stopped,
                                                delta: l,
                                                unprojectedPoint: h,
                                                ray: c.ray,
                                                camera: d,
                                                stopPropagation() {
                                                    let l = "pointerId" in r && p.capturedMap.get(r.pointerId);
                                                    if ((!l || l.has(o.eventObject)) && (b.stopped = e.stopped = !0, p.hovered.size && Array.from(p.hovered.values()).find(e => e.eventObject === o.eventObject))) {
                                                        let e = t.slice(0, t.indexOf(o));
                                                        n([...e, o])
                                                    }
                                                },
                                                target: {
                                                    hasPointerCapture: m,
                                                    setPointerCapture: v,
                                                    releasePointerCapture: g
                                                },
                                                currentTarget: {
                                                    hasPointerCapture: m,
                                                    setPointerCapture: v,
                                                    releasePointerCapture: g
                                                },
                                                nativeEvent: r
                                            };
                                            if (a(b), !0 === e.stopped) break
                                        }
                                    }
                                }(f, a, d, function(e) {
                                    let t = e.eventObject,
                                        n = t.__r3f,
                                        i = null == n ? void 0 : n.handlers;
                                    if (null != n && n.eventCount) {
                                        if (s) {
                                            if (i.onPointerOver || i.onPointerEnter || i.onPointerOut || i.onPointerLeave) {
                                                let t = K(e),
                                                    n = o.hovered.get(t);
                                                n ? n.stopped && e.stopPropagation() : (o.hovered.set(t, e), null == i.onPointerOver || i.onPointerOver(e), null == i.onPointerEnter || i.onPointerEnter(e))
                                            }
                                            null == i.onPointerMove || i.onPointerMove(e)
                                        } else {
                                            let n = i[l];
                                            n ? (!c || o.initialHits.includes(t)) && (r(a, o.interaction.filter(e => !o.initialHits.includes(e))), n(e)) : c && o.initialHits.includes(t) && r(a, o.interaction.filter(e => !o.initialHits.includes(e)))
                                        }
                                    }
                                })
                        }
                    }
                }
            }
            let et = e => !!(null != e && e.render),
                en = s.createContext(null),
                er = (e, t) => {
                    let n = function(e) {
                            let t = "function" == typeof e ? function(e) {
                                    let t;
                                    let n = new Set,
                                        r = (e, r) => {
                                            let l = "function" == typeof e ? e(t) : e;
                                            if (l !== t) {
                                                let e = t;
                                                t = r ? l : Object.assign({}, t, l), n.forEach(n => n(t, e))
                                            }
                                        },
                                        l = () => t,
                                        a = (e, r = l, a = Object.is) => {
                                            console.warn("[DEPRECATED] Please use `subscribeWithSelector` middleware");
                                            let i = r(t);

                                            function o() {
                                                let n = r(t);
                                                if (!a(i, n)) {
                                                    let t = i;
                                                    e(i = n, t)
                                                }
                                            }
                                            return n.add(o), () => n.delete(o)
                                        },
                                        i = (e, t, r) => t || r ? a(e, t, r) : (n.add(e), () => n.delete(e)),
                                        o = () => n.clear(),
                                        u = {
                                            setState: r,
                                            getState: l,
                                            subscribe: i,
                                            destroy: o
                                        };
                                    return t = e(r, l, u), u
                                }(e) : e,
                                n = (e = t.getState, n = Object.is) => {
                                    let r;
                                    let [, l] = (0, s.useReducer)(e => e + 1, 0), a = t.getState(), i = (0, s.useRef)(a), o = (0, s.useRef)(e), u = (0, s.useRef)(n), c = (0, s.useRef)(!1), f = (0, s.useRef)();
                                    void 0 === f.current && (f.current = e(a));
                                    let p = !1;
                                    (i.current !== a || o.current !== e || u.current !== n || c.current) && (r = e(a), p = !n(f.current, r)), d(() => {
                                        p && (f.current = r), i.current = a, o.current = e, u.current = n, c.current = !1
                                    });
                                    let h = (0, s.useRef)(a);
                                    d(() => {
                                        let e = () => {
                                                try {
                                                    let e = t.getState(),
                                                        n = o.current(e);
                                                    u.current(f.current, n) || (i.current = e, f.current = n, l())
                                                } catch (e) {
                                                    c.current = !0, l()
                                                }
                                            },
                                            n = t.subscribe(e);
                                        return t.getState() !== h.current && e(), n
                                    }, []);
                                    let m = p ? r : f.current;
                                    return (0, s.useDebugValue)(m), m
                                };
                            return Object.assign(n, t), n[Symbol.iterator] = function() {
                                console.warn("[useStore, api] = create() is deprecated and will be removed in v4");
                                let e = [n, t];
                                return {
                                    next() {
                                        let t = e.length <= 0;
                                        return {
                                            value: e.shift(),
                                            done: t
                                        }
                                    }
                                }
                            }, n
                        }((n, r) => {
                            let l;
                            let a = new u.Vector3,
                                i = new u.Vector3,
                                o = new u.Vector3;

                            function c(e = r().camera, t = i, n = r().size) {
                                let {
                                    width: l,
                                    height: s,
                                    top: c,
                                    left: f
                                } = n, d = l / s;
                                t instanceof u.Vector3 ? o.copy(t) : o.set(...t);
                                let p = e.getWorldPosition(a).distanceTo(o);
                                if (z(e)) return {
                                    width: l / e.zoom,
                                    height: s / e.zoom,
                                    top: c,
                                    left: f,
                                    factor: 1,
                                    distance: p,
                                    aspect: d
                                };
                                {
                                    let t = e.fov * Math.PI / 180,
                                        n = 2 * Math.tan(t / 2) * p,
                                        r = n * (l / s);
                                    return {
                                        width: r,
                                        height: n,
                                        top: c,
                                        left: f,
                                        factor: l / r,
                                        distance: p,
                                        aspect: d
                                    }
                                }
                            }
                            let f = e => n(t => ({
                                    performance: {
                                        ...t.performance,
                                        current: e
                                    }
                                })),
                                d = new u.Vector2,
                                p = {
                                    set: n,
                                    get: r,
                                    gl: null,
                                    camera: null,
                                    raycaster: null,
                                    events: {
                                        priority: 1,
                                        enabled: !0,
                                        connected: !1
                                    },
                                    xr: null,
                                    scene: null,
                                    invalidate: (t = 1) => e(r(), t),
                                    advance: (e, n) => t(e, n, r()),
                                    legacy: !1,
                                    linear: !1,
                                    flat: !1,
                                    controls: null,
                                    clock: new u.Clock,
                                    pointer: d,
                                    mouse: d,
                                    frameloop: "always",
                                    onPointerMissed: void 0,
                                    performance: {
                                        current: 1,
                                        min: .5,
                                        max: 1,
                                        debounce: 200,
                                        regress: () => {
                                            let e = r();
                                            l && clearTimeout(l), e.performance.current !== e.performance.min && f(e.performance.min), l = setTimeout(() => f(r().performance.max), e.performance.debounce)
                                        }
                                    },
                                    size: {
                                        width: 0,
                                        height: 0,
                                        top: 0,
                                        left: 0,
                                        updateStyle: !1
                                    },
                                    viewport: {
                                        initialDpr: 0,
                                        dpr: 0,
                                        width: 0,
                                        height: 0,
                                        top: 0,
                                        left: 0,
                                        aspect: 0,
                                        distance: 0,
                                        factor: 0,
                                        getCurrentViewport: c
                                    },
                                    setEvents: e => n(t => ({
                                        ...t,
                                        events: {
                                            ...t.events,
                                            ...e
                                        }
                                    })),
                                    setSize: (e, t, l, a, o) => {
                                        let u = r().camera,
                                            s = {
                                                width: e,
                                                height: t,
                                                top: a || 0,
                                                left: o || 0,
                                                updateStyle: l
                                            };
                                        n(e => ({
                                            size: s,
                                            viewport: {
                                                ...e.viewport,
                                                ...c(u, i, s)
                                            }
                                        }))
                                    },
                                    setDpr: e => n(t => {
                                        let n = D(e);
                                        return {
                                            viewport: {
                                                ...t.viewport,
                                                dpr: n,
                                                initialDpr: t.viewport.initialDpr || n
                                            }
                                        }
                                    }),
                                    setFrameloop: (e = "always") => {
                                        let t = r().clock;
                                        t.stop(), t.elapsedTime = 0, "never" !== e && (t.start(), t.elapsedTime = 0), n(() => ({
                                            frameloop: e
                                        }))
                                    },
                                    previousRoot: void 0,
                                    internal: {
                                        active: !1,
                                        priority: 0,
                                        frames: 0,
                                        lastEvent: s.createRef(),
                                        interaction: [],
                                        hovered: new Map,
                                        subscribers: [],
                                        initialClick: [0, 0],
                                        initialHits: [],
                                        capturedMap: new Map,
                                        subscribe: (e, t, n) => {
                                            let l = r().internal;
                                            return l.priority = l.priority + (t > 0 ? 1 : 0), l.subscribers.push({
                                                ref: e,
                                                priority: t,
                                                store: n
                                            }), l.subscribers = l.subscribers.sort((e, t) => e.priority - t.priority), () => {
                                                let n = r().internal;
                                                null != n && n.subscribers && (n.priority = n.priority - (t > 0 ? 1 : 0), n.subscribers = n.subscribers.filter(t => t.ref !== e))
                                            }
                                        }
                                    }
                                };
                            return p
                        }),
                        r = n.getState(),
                        l = r.size,
                        a = r.viewport.dpr,
                        i = r.camera;
                    return n.subscribe(() => {
                        let {
                            camera: e,
                            size: t,
                            viewport: r,
                            gl: o,
                            set: u
                        } = n.getState();
                        if (t.width !== l.width || t.height !== l.height || r.dpr !== a) {
                            var s, c;
                            l = t, a = r.dpr, (c = e).manual || (z(c) ? (c.left = -(t.width / 2), c.right = t.width / 2, c.top = t.height / 2, c.bottom = -(t.height / 2)) : c.aspect = t.width / t.height, c.updateProjectionMatrix(), c.updateMatrixWorld()), o.setPixelRatio(r.dpr);
                            let n = null != (s = t.updateStyle) ? s : "undefined" != typeof HTMLCanvasElement && o.domElement instanceof HTMLCanvasElement;
                            o.setSize(t.width, t.height, n)
                        }
                        e !== i && (i = e, u(t => ({
                            viewport: {
                                ...t.viewport,
                                ...t.viewport.getCurrentViewport(e)
                            }
                        })))
                    }), n.subscribe(t => e(t)), n
                },
                el = new Set,
                ea = new Set,
                ei = new Set;

            function eo(e, t) {
                if (e.size)
                    for (let {
                            callback: n
                        }
                        of e.values()) n(t)
            }

            function eu(e, t) {
                switch (e) {
                    case "before":
                        return eo(el, t);
                    case "after":
                        return eo(ea, t);
                    case "tail":
                        return eo(ei, t)
                }
            }

            function es(e, t, n) {
                let i = t.clock.getDelta();
                for ("never" === t.frameloop && "number" == typeof e && (i = e - t.clock.elapsedTime, t.clock.oldTime = t.clock.elapsedTime, t.clock.elapsedTime = e), l = t.internal.subscribers, r = 0; r < l.length; r++)(a = l[r]).ref.current(a.store.getState(), i, n);
                return !t.internal.priority && t.gl.render && t.gl.render(t.scene, t.camera), t.internal.frames = Math.max(0, t.internal.frames - 1), "always" === t.frameloop ? 1 : t.internal.frames
            }

            function ec() {
                let e = s.useContext(en);
                if (!e) throw Error("R3F: Hooks can only be used within the Canvas component!");
                return e
            }

            function ef(e = e => e, t) {
                return ec()(e, t)
            }

            function ed(e, t = 0) {
                let n = ec(),
                    r = n.getState().internal.subscribe,
                    l = M(e);
                return L(() => r(l, t, n), [t, r, n]), null
            }
            let ep = new WeakMap;

            function eh(e, t) {
                return function(n, ...r) {
                    let l = ep.get(n);
                    return l || (l = new n, ep.set(n, l)), e && e(l), Promise.all(r.map(e => new Promise((n, r) => l.load(e, e => {
                        e.scene && Object.assign(e, function(e) {
                            let t = {
                                nodes: {},
                                materials: {}
                            };
                            return e && e.traverse(e => {
                                e.name && (t.nodes[e.name] = e), e.material && !t.materials[e.material.name] && (t.materials[e.material.name] = e.material)
                            }), t
                        }(e.scene)), n(e)
                    }, t, t => r(Error(`Could not load ${e}: ${null==t?void 0:t.message}`))))))
                }
            }

            function em(e, t, n, r) {
                let l = Array.isArray(t) ? t : [t],
                    a = w(eh(n, r), [e, ...l], {
                        equal: H.equ
                    });
                return Array.isArray(t) ? a : a[0]
            }
            em.preload = function(e, t, n) {
                let r = Array.isArray(t) ? t : [t];
                return S(eh(n), [e, ...r])
            }, em.clear = function(e, t) {
                let n = Array.isArray(t) ? t : [t];
                return k([e, ...n])
            };
            let ev = new Map,
                {
                    invalidate: eg,
                    advance: ey
                } = function(e) {
                    let t, n, r, l = !1,
                        a = !1;

                    function i(o) {
                        for (let s of (n = requestAnimationFrame(i), l = !0, t = 0, eu("before", o), a = !0, e.values())) {
                            var u;
                            (r = s.store.getState()).internal.active && ("always" === r.frameloop || r.internal.frames > 0) && !(null != (u = r.gl.xr) && u.isPresenting) && (t += es(o, r))
                        }
                        if (a = !1, eu("after", o), 0 === t) return eu("tail", o), l = !1, cancelAnimationFrame(n)
                    }
                    return {
                        loop: i,
                        invalidate: function t(n, r = 1) {
                            var o;
                            if (!n) return e.forEach(e => t(e.store.getState(), r));
                            null != (o = n.gl.xr) && o.isPresenting || !n.internal.active || "never" === n.frameloop || (r > 1 ? n.internal.frames = Math.min(60, n.internal.frames + r) : a ? n.internal.frames = 2 : n.internal.frames = 1, l || (l = !0, requestAnimationFrame(i)))
                        },
                        advance: function(t, n = !0, r, l) {
                            if (n && eu("before", t), r) es(t, r, l);
                            else
                                for (let n of e.values()) es(t, n.store.getState());
                            n && eu("after", t)
                        }
                    }
                }(ev),
                {
                    reconciler: eb,
                    applyProps: ew
                } = function(e, t) {
                    function n(e, {
                        args: t = [],
                        attach: n,
                        ...r
                    }, l) {
                        let a, i = `${e[0].toUpperCase()}${e.slice(1)}`;
                        if ("primitive" === e) {
                            if (void 0 === r.object) throw Error("R3F: Primitives without 'object' are invalid!");
                            let t = r.object;
                            a = Q(t, {
                                type: e,
                                root: l,
                                attach: n,
                                primitive: !0
                            })
                        } else {
                            let r = x[i];
                            if (!r) throw Error(`R3F: ${i} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);
                            if (!Array.isArray(t)) throw Error("R3F: The args prop must be an array!");
                            a = Q(new r(...t), {
                                type: e,
                                root: l,
                                attach: n,
                                memoizedProps: {
                                    args: t
                                }
                            })
                        }
                        return void 0 === a.__r3f.attach && (a instanceof u.BufferGeometry ? a.__r3f.attach = "geometry" : a instanceof u.Material && (a.__r3f.attach = "material")), "inject" !== i && G(a, r), a
                    }

                    function r(e, t) {
                        let n = !1;
                        if (t) {
                            var r, l;
                            null != (r = t.__r3f) && r.attach ? $(e, t, t.__r3f.attach) : t.isObject3D && e.isObject3D && (e.add(t), n = !0), n || null == (l = e.__r3f) || l.objects.push(t), t.__r3f || Q(t, {}), t.__r3f.parent = e, J(t), X(t)
                        }
                    }

                    function l(e, t, n) {
                        let r = !1;
                        if (t) {
                            var l, a;
                            if (null != (l = t.__r3f) && l.attach) $(e, t, t.__r3f.attach);
                            else if (t.isObject3D && e.isObject3D) {
                                t.parent = e, t.dispatchEvent({
                                    type: "added"
                                }), e.dispatchEvent({
                                    type: "childadded",
                                    child: t
                                });
                                let l = e.children.filter(e => e !== t),
                                    a = l.indexOf(n);
                                e.children = [...l.slice(0, a), t, ...l.slice(a)], r = !0
                            }
                            r || null == (a = e.__r3f) || a.objects.push(t), t.__r3f || Q(t, {}), t.__r3f.parent = e, J(t), X(t)
                        }
                    }

                    function a(e, t, n = !1) {
                        e && [...e].forEach(e => i(t, e, n))
                    }

                    function i(e, t, n) {
                        if (t) {
                            var r, l, i, o, u;
                            t.__r3f && (t.__r3f.parent = null), null != (r = e.__r3f) && r.objects && (e.__r3f.objects = e.__r3f.objects.filter(e => e !== t)), null != (l = t.__r3f) && l.attach ? q(e, t, t.__r3f.attach) : t.isObject3D && e.isObject3D && (e.remove(t), null != (o = t.__r3f) && o.root && function(e, t) {
                                let {
                                    internal: n
                                } = e.getState();
                                n.interaction = n.interaction.filter(e => e !== t), n.initialHits = n.initialHits.filter(e => e !== t), n.hovered.forEach((e, r) => {
                                    (e.eventObject === t || e.object === t) && n.hovered.delete(r)
                                }), n.capturedMap.forEach((e, r) => {
                                    Z(n.capturedMap, t, e, r)
                                })
                            }(U(t), t));
                            let s = null == (i = t.__r3f) ? void 0 : i.primitive,
                                c = !s && (void 0 === n ? null !== t.dispose : n);
                            if (s || (a(null == (u = t.__r3f) ? void 0 : u.objects, t, c), a(t.children, t, c)), delete t.__r3f, c && t.dispose && "Scene" !== t.type) {
                                let e = () => {
                                    try {
                                        t.dispose()
                                    } catch (e) {}
                                };
                                "undefined" == typeof IS_REACT_ACT_ENVIRONMENT ? (0, m.unstable_scheduleCallback)(m.unstable_IdlePriority, e) : e()
                            }
                            X(e)
                        }
                    }
                    let o = () => console.warn("Text is not allowed in the R3F tree! This could be stray whitespace or characters."),
                        s = h()({
                            createInstance: n,
                            removeChild: i,
                            appendChild: r,
                            appendInitialChild: r,
                            insertBefore: l,
                            supportsMutation: !0,
                            isPrimaryRenderer: !1,
                            supportsPersistence: !1,
                            supportsHydration: !1,
                            noTimeout: -1,
                            appendChildToContainer: (e, t) => {
                                if (!t) return;
                                let n = e.getState().scene;
                                n.__r3f && (n.__r3f.root = e, r(n, t))
                            },
                            removeChildFromContainer: (e, t) => {
                                t && i(e.getState().scene, t)
                            },
                            insertInContainerBefore: (e, t, n) => {
                                if (!t || !n) return;
                                let r = e.getState().scene;
                                r.__r3f && l(r, t, n)
                            },
                            getRootHostContext: () => null,
                            getChildHostContext: e => e,
                            finalizeInitialChildren(e) {
                                var t;
                                let n = null != (t = null == e ? void 0 : e.__r3f) ? t : {};
                                return !!n.handlers
                            },
                            prepareUpdate(e, t, n, r) {
                                var l;
                                let a = null != (l = null == e ? void 0 : e.__r3f) ? l : {};
                                if (a.primitive && r.object && r.object !== e) return [!0];
                                {
                                    let {
                                        args: t = [],
                                        children: l,
                                        ...a
                                    } = r, {
                                        args: i = [],
                                        children: o,
                                        ...u
                                    } = n;
                                    if (!Array.isArray(t)) throw Error("R3F: the args prop must be an array!");
                                    if (t.some((e, t) => e !== i[t])) return [!0];
                                    let s = V(e, a, u, !0);
                                    return s.changes.length ? [!1, s] : null
                                }
                            },
                            commitUpdate(e, [t, l], a, o, u, s) {
                                t ? function(e, t, l, a) {
                                    var o;
                                    let u = null == (o = e.__r3f) ? void 0 : o.parent;
                                    if (!u) return;
                                    let s = n(t, l, e.__r3f.root);
                                    if (e.children) {
                                        for (let t of e.children) t.__r3f && r(s, t);
                                        e.children = e.children.filter(e => !e.__r3f)
                                    }
                                    if (e.__r3f.objects.forEach(e => r(s, e)), e.__r3f.objects = [], e.__r3f.autoRemovedBeforeAppend || i(u, e), s.parent && (s.__r3f.autoRemovedBeforeAppend = !0), r(u, s), s.raycast && s.__r3f.eventCount) {
                                        let e = U(s).getState();
                                        e.internal.interaction.push(s)
                                    } [a, a.alternate].forEach(e => {
                                        null !== e && (e.stateNode = s, e.ref && ("function" == typeof e.ref ? e.ref(s) : e.ref.current = s))
                                    })
                                }(e, a, u, s) : G(e, l)
                            },
                            commitMount(e, t, n, r) {
                                var l;
                                let a = null != (l = e.__r3f) ? l : {};
                                e.raycast && a.handlers && a.eventCount && U(e).getState().internal.interaction.push(e)
                            },
                            getPublicInstance: e => e,
                            prepareForCommit: () => null,
                            preparePortalMount: e => Q(e.getState().scene),
                            resetAfterCommit: () => {},
                            shouldSetTextContent: () => !1,
                            clearContainer: () => !1,
                            hideInstance(e) {
                                var t;
                                let {
                                    attach: n,
                                    parent: r
                                } = null != (t = e.__r3f) ? t : {};
                                n && r && q(r, e, n), e.isObject3D && (e.visible = !1), X(e)
                            },
                            unhideInstance(e, t) {
                                var n;
                                let {
                                    attach: r,
                                    parent: l
                                } = null != (n = e.__r3f) ? n : {};
                                r && l && $(l, e, r), (e.isObject3D && null == t.visible || t.visible) && (e.visible = !0), X(e)
                            },
                            createTextInstance: o,
                            hideTextInstance: o,
                            unhideTextInstance: o,
                            getCurrentEventPriority: () => t ? t() : c.DefaultEventPriority,
                            beforeActiveInstanceBlur: () => {},
                            afterActiveInstanceBlur: () => {},
                            detachDeletedInstance: () => {},
                            now: "undefined" != typeof performance && H.fun(performance.now) ? performance.now : H.fun(Date.now) ? Date.now : () => 0,
                            scheduleTimeout: H.fun(setTimeout) ? setTimeout : void 0,
                            cancelTimeout: H.fun(clearTimeout) ? clearTimeout : void 0
                        });
                    return {
                        reconciler: s,
                        applyProps: G
                    }
                }(0, function() {
                    var e;
                    let t = "undefined" != typeof self && self || "undefined" != typeof window && window;
                    if (!t) return c.DefaultEventPriority;
                    let n = null == (e = t.event) ? void 0 : e.type;
                    switch (n) {
                        case "click":
                        case "contextmenu":
                        case "dblclick":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointerup":
                            return c.DiscreteEventPriority;
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerenter":
                        case "pointerleave":
                        case "wheel":
                            return c.ContinuousEventPriority;
                        default:
                            return c.DefaultEventPriority
                    }
                }),
                eS = {
                    objects: "shallow",
                    strict: !1
                },
                ek = (e, t) => {
                    let n = "function" == typeof e ? e(t) : e;
                    return et(n) ? n : new u.WebGLRenderer({
                        powerPreference: "high-performance",
                        canvas: t,
                        antialias: !0,
                        alpha: !0,
                        ...e
                    })
                };

            function eE(e) {
                let t, n;
                let r = ev.get(e),
                    l = null == r ? void 0 : r.fiber,
                    a = null == r ? void 0 : r.store;
                r && console.warn("R3F.createRoot should only be called once!");
                let i = "function" == typeof reportError ? reportError : console.error,
                    o = a || er(eg, ey),
                    s = l || eb.createContainer(o, c.ConcurrentRoot, null, !1, null, "", i, null);
                r || ev.set(e, {
                    fiber: s,
                    store: o
                });
                let f = !1;
                return {
                    configure(r = {}) {
                        var l, a;
                        let {
                            gl: i,
                            size: s,
                            scene: c,
                            events: d,
                            onCreated: p,
                            shadows: h = !1,
                            linear: m = !1,
                            flat: v = !1,
                            legacy: g = !1,
                            orthographic: y = !1,
                            frameloop: b = "always",
                            dpr: w = [1, 2],
                            performance: S,
                            raycaster: k,
                            camera: E,
                            onPointerMissed: _
                        } = r, x = o.getState(), C = x.gl;
                        x.gl || x.set({
                            gl: C = ek(i, e)
                        });
                        let P = x.raycaster;
                        P || x.set({
                            raycaster: P = new u.Raycaster
                        });
                        let {
                            params: z,
                            ...N
                        } = k || {};
                        if (H.equ(N, P, eS) || ew(P, {
                                ...N
                            }), H.equ(z, P.params, eS) || ew(P, {
                                params: {
                                    ...P.params,
                                    ...z
                                }
                            }), !x.camera || x.camera === n && !H.equ(n, E, eS)) {
                            n = E;
                            let e = E instanceof u.Camera,
                                t = e ? E : y ? new u.OrthographicCamera(0, 0, 0, 0, .1, 1e3) : new u.PerspectiveCamera(75, 0, .1, 1e3);
                            e || (t.position.z = 5, E && (ew(t, E), ("aspect" in E || "left" in E || "right" in E || "bottom" in E || "top" in E) && (t.manual = !0, t.updateProjectionMatrix())), x.camera || null != E && E.rotation || t.lookAt(0, 0, 0)), x.set({
                                camera: t
                            }), P.camera = t
                        }
                        if (!x.scene) {
                            let e;
                            c instanceof u.Scene ? e = c : (e = new u.Scene, c && ew(e, c)), x.set({
                                scene: Q(e)
                            })
                        }
                        if (!x.xr) {
                            let e = (e, t) => {
                                    let n = o.getState();
                                    "never" !== n.frameloop && ey(e, !0, n, t)
                                },
                                t = () => {
                                    let t = o.getState();
                                    t.gl.xr.enabled = t.gl.xr.isPresenting, t.gl.xr.setAnimationLoop(t.gl.xr.isPresenting ? e : null), t.gl.xr.isPresenting || eg(t)
                                },
                                n = {
                                    connect() {
                                        let e = o.getState().gl;
                                        e.xr.addEventListener("sessionstart", t), e.xr.addEventListener("sessionend", t)
                                    },
                                    disconnect() {
                                        let e = o.getState().gl;
                                        e.xr.removeEventListener("sessionstart", t), e.xr.removeEventListener("sessionend", t)
                                    }
                                };
                            "function" == typeof(null == (l = C.xr) ? void 0 : l.addEventListener) && n.connect(), x.set({
                                xr: n
                            })
                        }
                        if (C.shadowMap) {
                            let e = C.shadowMap.enabled,
                                t = C.shadowMap.type;
                            if (C.shadowMap.enabled = !!h, H.boo(h)) C.shadowMap.type = u.PCFSoftShadowMap;
                            else if (H.str(h)) {
                                let e = {
                                    basic: u.BasicShadowMap,
                                    percentage: u.PCFShadowMap,
                                    soft: u.PCFSoftShadowMap,
                                    variance: u.VSMShadowMap
                                };
                                C.shadowMap.type = null != (a = e[h]) ? a : u.PCFSoftShadowMap
                            } else H.obj(h) && Object.assign(C.shadowMap, h);
                            (e !== C.shadowMap.enabled || t !== C.shadowMap.type) && (C.shadowMap.needsUpdate = !0)
                        }
                        let L = T();
                        L && ("enabled" in L ? L.enabled = !g : "legacyMode" in L && (L.legacyMode = g)), f || ew(C, {
                            outputEncoding: m ? 3e3 : 3001,
                            toneMapping: v ? u.NoToneMapping : u.ACESFilmicToneMapping
                        }), x.legacy !== g && x.set(() => ({
                            legacy: g
                        })), x.linear !== m && x.set(() => ({
                            linear: m
                        })), x.flat !== v && x.set(() => ({
                            flat: v
                        })), !i || H.fun(i) || et(i) || H.equ(i, C, eS) || ew(C, i), d && !x.events.handlers && x.set({
                            events: d(o)
                        });
                        let M = function(e, t) {
                            let n = "undefined" != typeof HTMLCanvasElement && e instanceof HTMLCanvasElement;
                            if (t) {
                                let {
                                    width: e,
                                    height: r,
                                    top: l,
                                    left: a,
                                    updateStyle: i = n
                                } = t;
                                return {
                                    width: e,
                                    height: r,
                                    top: l,
                                    left: a,
                                    updateStyle: i
                                }
                            }
                            if ("undefined" != typeof HTMLCanvasElement && e instanceof HTMLCanvasElement && e.parentElement) {
                                let {
                                    width: t,
                                    height: r,
                                    top: l,
                                    left: a
                                } = e.parentElement.getBoundingClientRect();
                                return {
                                    width: t,
                                    height: r,
                                    top: l,
                                    left: a,
                                    updateStyle: n
                                }
                            }
                            return "undefined" != typeof OffscreenCanvas && e instanceof OffscreenCanvas ? {
                                width: e.width,
                                height: e.height,
                                top: 0,
                                left: 0,
                                updateStyle: n
                            } : {
                                width: 0,
                                height: 0,
                                top: 0,
                                left: 0
                            }
                        }(e, s);
                        return H.equ(M, x.size, eS) || x.setSize(M.width, M.height, M.updateStyle, M.top, M.left), w && x.viewport.dpr !== D(w) && x.setDpr(w), x.frameloop !== b && x.setFrameloop(b), x.onPointerMissed || x.set({
                            onPointerMissed: _
                        }), S && !H.equ(S, x.performance, eS) && x.set(e => ({
                            performance: {
                                ...e.performance,
                                ...S
                            }
                        })), t = p, f = !0, this
                    },
                    render(n) {
                        return f || this.configure(), eb.updateContainer((0, E.jsx)(e_, {
                            store: o,
                            children: n,
                            onCreated: t,
                            rootElement: e
                        }), s, null, () => void 0), o
                    },
                    unmount() {
                        ex(e)
                    }
                }
            }

            function e_({
                store: e,
                children: t,
                onCreated: n,
                rootElement: r
            }) {
                return L(() => {
                    let t = e.getState();
                    t.set(e => ({
                        internal: {
                            ...e.internal,
                            active: !0
                        }
                    })), n && n(t), e.getState().events.connected || null == t.events.connect || t.events.connect(r)
                }, []), (0, E.jsx)(en.Provider, {
                    value: e,
                    children: t
                })
            }

            function ex(e, t) {
                let n = ev.get(e),
                    r = null == n ? void 0 : n.fiber;
                if (r) {
                    let l = null == n ? void 0 : n.store.getState();
                    l && (l.internal.active = !1), eb.updateContainer(null, r, null, () => {
                        l && setTimeout(() => {
                            try {
                                var n, r, a, i;
                                null == l.events.disconnect || l.events.disconnect(), null == (n = l.gl) || null == (r = n.renderLists) || null == r.dispose || r.dispose(), null == (a = l.gl) || null == a.forceContextLoss || a.forceContextLoss(), null != (i = l.gl) && i.xr && l.xr.disconnect(),
                                    function(e) {
                                        for (let t in e.dispose && "Scene" !== e.type && e.dispose(), e) null == t.dispose || t.dispose(), delete e[t]
                                    }(l), ev.delete(e), t && t(e)
                            } catch (e) {}
                        }, 500)
                    })
                }
            }
            eb.injectIntoDevTools({
                bundleType: 0,
                rendererPackageName: "@react-three/fiber",
                version: s.version
            }), s.unstable_act
        },
        5029: function(e, t, n) {
            "use strict";
            n.d(t, {
                Xz: function() {
                    return z
                }
            });
            var r, l, a = n(2466),
                i = n(7294),
                o = n(9477),
                u = n(296),
                s = n.n(u);
            let c = ["x", "y", "top", "bottom", "left", "right", "width", "height"],
                f = (e, t) => c.every(n => e[n] === t[n]);
            var d = Object.defineProperty,
                p = Object.defineProperties,
                h = Object.getOwnPropertyDescriptors,
                m = Object.getOwnPropertySymbols,
                v = Object.prototype.hasOwnProperty,
                g = Object.prototype.propertyIsEnumerable,
                y = (e, t, n) => t in e ? d(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                b = (e, t) => {
                    for (var n in t || (t = {})) v.call(t, n) && y(e, n, t[n]);
                    if (m)
                        for (var n of m(t)) g.call(t, n) && y(e, n, t[n]);
                    return e
                },
                w = (e, t) => p(e, h(t));

            function S(e) {
                try {
                    return Object.defineProperties(e, {
                        _currentRenderer: {
                            get: () => null,
                            set() {}
                        },
                        _currentRenderer2: {
                            get: () => null,
                            set() {}
                        }
                    })
                } catch (t) {
                    return e
                }
            }
            "undefined" != typeof window && ((null == (r = window.document) ? void 0 : r.createElement) || (null == (l = window.navigator) ? void 0 : l.product) === "ReactNative") ? i.useLayoutEffect : i.useEffect;
            let k = console.error;
            console.error = function() {
                let e = [...arguments].join("");
                if ((null == e ? void 0 : e.startsWith("Warning:")) && e.includes("useContext")) {
                    console.error = k;
                    return
                }
                return k.apply(this, arguments)
            };
            let E = S(i.createContext(null));
            class _ extends i.Component {
                render() {
                    return i.createElement(E.Provider, {
                        value: this._reactInternals
                    }, this.props.children)
                }
            }
            var x = n(5893);
            n(2576), n(6525), n(5431);
            let C = {
                onClick: ["click", !1],
                onContextMenu: ["contextmenu", !1],
                onDoubleClick: ["dblclick", !1],
                onWheel: ["wheel", !0],
                onPointerDown: ["pointerdown", !0],
                onPointerUp: ["pointerup", !0],
                onPointerLeave: ["pointerleave", !0],
                onPointerMove: ["pointermove", !0],
                onPointerCancel: ["pointercancel", !0],
                onLostPointerCapture: ["lostpointercapture", !0]
            };

            function P(e) {
                let {
                    handlePointer: t
                } = (0, a.c)(e);
                return {
                    priority: 1,
                    enabled: !0,
                    compute(e, t, n) {
                        t.pointer.set(e.offsetX / t.size.width * 2 - 1, -(2 * (e.offsetY / t.size.height)) + 1), t.raycaster.setFromCamera(t.pointer, t.camera)
                    },
                    connected: void 0,
                    handlers: Object.keys(C).reduce((e, n) => ({
                        ...e,
                        [n]: t(n)
                    }), {}),
                    update: () => {
                        var t;
                        let {
                            events: n,
                            internal: r
                        } = e.getState();
                        null != (t = r.lastEvent) && t.current && n.handlers && n.handlers.onPointerMove(r.lastEvent.current)
                    },
                    connect: t => {
                        var n;
                        let {
                            set: r,
                            events: l
                        } = e.getState();
                        null == l.disconnect || l.disconnect(), r(e => ({
                            events: {
                                ...e.events,
                                connected: t
                            }
                        })), Object.entries(null != (n = l.handlers) ? n : []).forEach(([e, n]) => {
                            let [r, l] = C[e];
                            t.addEventListener(r, n, {
                                passive: l
                            })
                        })
                    },
                    disconnect: () => {
                        let {
                            set: t,
                            events: n
                        } = e.getState();
                        if (n.connected) {
                            var r;
                            Object.entries(null != (r = n.handlers) ? r : []).forEach(([e, t]) => {
                                if (n && n.connected instanceof HTMLElement) {
                                    let [r] = C[e];
                                    n.connected.removeEventListener(r, t)
                                }
                            }), t(e => ({
                                events: {
                                    ...e.events,
                                    connected: void 0
                                }
                            }))
                        }
                    }
                }
            }
            let T = i.forwardRef(function({
                    children: e,
                    fallback: t,
                    resize: n,
                    style: r,
                    gl: l,
                    events: u = P,
                    eventSource: c,
                    eventPrefix: d,
                    shadows: p,
                    linear: h,
                    flat: m,
                    legacy: v,
                    orthographic: g,
                    frameloop: y,
                    dpr: k,
                    performance: C,
                    raycaster: T,
                    camera: z,
                    scene: N,
                    onPointerMissed: L,
                    onCreated: M,
                    ...R
                }, I) {
                    i.useMemo(() => (0, a.e)(o), []);
                    let j = function() {
                            let e = function() {
                                let e = function() {
                                        let e = i.useContext(E);
                                        if (null === e) throw Error("its-fine: useFiber must be called within a <FiberProvider />!");
                                        let t = i.useId(),
                                            n = i.useMemo(() => {
                                                for (let n of [e, null == e ? void 0 : e.alternate]) {
                                                    if (!n) continue;
                                                    let e = function e(t, n, r) {
                                                        if (!t) return;
                                                        if (!0 === r(t)) return t;
                                                        let l = n ? t.return : t.child;
                                                        for (; l;) {
                                                            let t = e(l, n, r);
                                                            if (t) return t;
                                                            l = n ? null : l.sibling
                                                        }
                                                    }(n, !1, e => {
                                                        let n = e.memoizedState;
                                                        for (; n;) {
                                                            if (n.memoizedState === t) return !0;
                                                            n = n.next
                                                        }
                                                    });
                                                    if (e) return e
                                                }
                                            }, [e, t]);
                                        return n
                                    }(),
                                    [t] = i.useState(() => new Map);
                                t.clear();
                                let n = e;
                                for (; n;) {
                                    if (n.type && "object" == typeof n.type) {
                                        let e = void 0 === n.type._context && n.type.Provider === n.type,
                                            r = e ? n.type : n.type._context;
                                        r && r !== E && !t.has(r) && t.set(r, i.useContext(S(r)))
                                    }
                                    n = n.return
                                }
                                return t
                            }();
                            return i.useMemo(() => Array.from(e.keys()).reduce((t, n) => r => i.createElement(t, null, i.createElement(n.Provider, w(b({}, r), {
                                value: e.get(n)
                            }))), e => i.createElement(_, b({}, e))), [e])
                        }(),
                        [O, A] = function(e) {
                            var t;
                            let {
                                debounce: n,
                                scroll: r,
                                polyfill: l,
                                offsetSize: a
                            } = void 0 === e ? {
                                debounce: 0,
                                scroll: !1,
                                offsetSize: !1
                            } : e, o = l || ("undefined" == typeof window ? class {} : window.ResizeObserver);
                            if (!o) throw Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");
                            let [u, c] = (0, i.useState)({
                                left: 0,
                                top: 0,
                                width: 0,
                                height: 0,
                                bottom: 0,
                                right: 0,
                                x: 0,
                                y: 0
                            }), d = (0, i.useRef)({
                                element: null,
                                scrollContainers: null,
                                resizeObserver: null,
                                lastBounds: u
                            }), p = n ? "number" == typeof n ? n : n.scroll : null, h = n ? "number" == typeof n ? n : n.resize : null, m = (0, i.useRef)(!1);
                            (0, i.useEffect)(() => (m.current = !0, () => void(m.current = !1)));
                            let [v, g, y] = (0, i.useMemo)(() => {
                                let e = () => {
                                    if (!d.current.element) return;
                                    let {
                                        left: e,
                                        top: t,
                                        width: n,
                                        height: r,
                                        bottom: l,
                                        right: i,
                                        x: o,
                                        y: u
                                    } = d.current.element.getBoundingClientRect(), s = {
                                        left: e,
                                        top: t,
                                        width: n,
                                        height: r,
                                        bottom: l,
                                        right: i,
                                        x: o,
                                        y: u
                                    };
                                    d.current.element instanceof HTMLElement && a && (s.height = d.current.element.offsetHeight, s.width = d.current.element.offsetWidth), Object.freeze(s), m.current && !f(d.current.lastBounds, s) && c(d.current.lastBounds = s)
                                };
                                return [e, h ? s()(e, h) : e, p ? s()(e, p) : e]
                            }, [c, a, p, h]);

                            function b() {
                                d.current.scrollContainers && (d.current.scrollContainers.forEach(e => e.removeEventListener("scroll", y, !0)), d.current.scrollContainers = null), d.current.resizeObserver && (d.current.resizeObserver.disconnect(), d.current.resizeObserver = null)
                            }

                            function w() {
                                d.current.element && (d.current.resizeObserver = new o(y), d.current.resizeObserver.observe(d.current.element), r && d.current.scrollContainers && d.current.scrollContainers.forEach(e => e.addEventListener("scroll", y, {
                                    capture: !0,
                                    passive: !0
                                })))
                            }
                            let S = e => {
                                e && e !== d.current.element && (b(), d.current.element = e, d.current.scrollContainers = function e(t) {
                                    let n = [];
                                    if (!t || t === document.body) return n;
                                    let {
                                        overflow: r,
                                        overflowX: l,
                                        overflowY: a
                                    } = window.getComputedStyle(t);
                                    return [r, l, a].some(e => "auto" === e || "scroll" === e) && n.push(t), [...n, ...e(t.parentElement)]
                                }(e), w())
                            };
                            return t = !!r, (0, i.useEffect)(() => {
                                if (t) return window.addEventListener("scroll", y, {
                                    capture: !0,
                                    passive: !0
                                }), () => void window.removeEventListener("scroll", y, !0)
                            }, [y, t]), (0, i.useEffect)(() => (window.addEventListener("resize", g), () => void window.removeEventListener("resize", g)), [g]), (0, i.useEffect)(() => {
                                b(), w()
                            }, [r, y, g]), (0, i.useEffect)(() => b, []), [S, u, v]
                        }({
                            scroll: !0,
                            debounce: {
                                scroll: 50,
                                resize: 0
                            },
                            ...n
                        }),
                        D = i.useRef(null),
                        F = i.useRef(null);
                    i.useImperativeHandle(I, () => D.current);
                    let U = (0, a.u)(L),
                        [H, Q] = i.useState(!1),
                        [B, W] = i.useState(!1);
                    if (H) throw H;
                    if (B) throw B;
                    let $ = i.useRef(null);
                    return (0, a.a)(() => {
                        let t = D.current;
                        A.width > 0 && A.height > 0 && t && ($.current || ($.current = (0, a.b)(t)), $.current.configure({
                            gl: l,
                            events: u,
                            shadows: p,
                            linear: h,
                            flat: m,
                            legacy: v,
                            orthographic: g,
                            frameloop: y,
                            dpr: k,
                            performance: C,
                            raycaster: T,
                            camera: z,
                            scene: N,
                            size: A,
                            onPointerMissed: (...e) => null == U.current ? void 0 : U.current(...e),
                            onCreated: e => {
                                null == e.events.connect || e.events.connect(c ? (0, a.i)(c) ? c.current : c : F.current), d && e.setEvents({
                                    compute: (e, t) => {
                                        let n = e[d + "X"],
                                            r = e[d + "Y"];
                                        t.pointer.set(n / t.size.width * 2 - 1, -(2 * (r / t.size.height)) + 1), t.raycaster.setFromCamera(t.pointer, t.camera)
                                    }
                                }), null == M || M(e)
                            }
                        }), $.current.render((0, x.jsx)(j, {
                            children: (0, x.jsx)(a.E, {
                                set: W,
                                children: (0, x.jsx)(i.Suspense, {
                                    fallback: (0, x.jsx)(a.B, {
                                        set: Q
                                    }),
                                    children: e
                                })
                            })
                        })))
                    }), i.useEffect(() => {
                        let e = D.current;
                        if (e) return () => (0, a.d)(e)
                    }, []), (0, x.jsx)("div", {
                        ref: F,
                        style: {
                            position: "relative",
                            width: "100%",
                            height: "100%",
                            overflow: "hidden",
                            pointerEvents: c ? "none" : "auto",
                            ...r
                        },
                        ...R,
                        children: (0, x.jsx)("div", {
                            ref: O,
                            style: {
                                width: "100%",
                                height: "100%"
                            },
                            children: (0, x.jsx)("canvas", {
                                ref: D,
                                style: {
                                    display: "block"
                                },
                                children: t
                            })
                        })
                    })
                }),
                z = i.forwardRef(function(e, t) {
                    return (0, x.jsx)(_, {
                        children: (0, x.jsx)(T, {
                            ...e,
                            ref: t
                        })
                    })
                })
        },
        1906: function(e, t) {
            "use strict";
            /**
             * @license React
             * scheduler.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            function n(e, t) {
                var n = e.length;
                e.push(t);
                e: for (; 0 < n;) {
                    var r = n - 1 >>> 1,
                        l = e[r];
                    if (0 < a(l, t)) e[r] = t, e[n] = l, n = r;
                    else break e
                }
            }

            function r(e) {
                return 0 === e.length ? null : e[0]
            }

            function l(e) {
                if (0 === e.length) return null;
                var t = e[0],
                    n = e.pop();
                if (n !== t) {
                    e[0] = n;
                    e: for (var r = 0, l = e.length, i = l >>> 1; r < i;) {
                        var o = 2 * (r + 1) - 1,
                            u = e[o],
                            s = o + 1,
                            c = e[s];
                        if (0 > a(u, n)) s < l && 0 > a(c, u) ? (e[r] = c, e[s] = n, r = s) : (e[r] = u, e[o] = n, r = o);
                        else if (s < l && 0 > a(c, n)) e[r] = c, e[s] = n, r = s;
                        else break e
                    }
                }
                return t
            }

            function a(e, t) {
                var n = e.sortIndex - t.sortIndex;
                return 0 !== n ? n : e.id - t.id
            }
            if ("object" == typeof performance && "function" == typeof performance.now) {
                var i, o = performance;
                t.unstable_now = function() {
                    return o.now()
                }
            } else {
                var u = Date,
                    s = u.now();
                t.unstable_now = function() {
                    return u.now() - s
                }
            }
            var c = [],
                f = [],
                d = 1,
                p = null,
                h = 3,
                m = !1,
                v = !1,
                g = !1,
                y = "function" == typeof setTimeout ? setTimeout : null,
                b = "function" == typeof clearTimeout ? clearTimeout : null,
                w = "undefined" != typeof setImmediate ? setImmediate : null;

            function S(e) {
                for (var t = r(f); null !== t;) {
                    if (null === t.callback) l(f);
                    else if (t.startTime <= e) l(f), t.sortIndex = t.expirationTime, n(c, t);
                    else break;
                    t = r(f)
                }
            }

            function k(e) {
                if (g = !1, S(e), !v) {
                    if (null !== r(c)) v = !0, R(E);
                    else {
                        var t = r(f);
                        null !== t && I(k, t.startTime - e)
                    }
                }
            }

            function E(e, n) {
                v = !1, g && (g = !1, b(C), C = -1), m = !0;
                var a = h;
                try {
                    for (S(n), p = r(c); null !== p && (!(p.expirationTime > n) || e && !z());) {
                        var i = p.callback;
                        if ("function" == typeof i) {
                            p.callback = null, h = p.priorityLevel;
                            var o = i(p.expirationTime <= n);
                            n = t.unstable_now(), "function" == typeof o ? p.callback = o : p === r(c) && l(c), S(n)
                        } else l(c);
                        p = r(c)
                    }
                    if (null !== p) var u = !0;
                    else {
                        var s = r(f);
                        null !== s && I(k, s.startTime - n), u = !1
                    }
                    return u
                } finally {
                    p = null, h = a, m = !1
                }
            }
            "undefined" != typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
            var _ = !1,
                x = null,
                C = -1,
                P = 5,
                T = -1;

            function z() {
                return !(t.unstable_now() - T < P)
            }

            function N() {
                if (null !== x) {
                    var e = t.unstable_now();
                    T = e;
                    var n = !0;
                    try {
                        n = x(!0, e)
                    } finally {
                        n ? i() : (_ = !1, x = null)
                    }
                } else _ = !1
            }
            if ("function" == typeof w) i = function() {
                w(N)
            };
            else if ("undefined" != typeof MessageChannel) {
                var L = new MessageChannel,
                    M = L.port2;
                L.port1.onmessage = N, i = function() {
                    M.postMessage(null)
                }
            } else i = function() {
                y(N, 0)
            };

            function R(e) {
                x = e, _ || (_ = !0, i())
            }

            function I(e, n) {
                C = y(function() {
                    e(t.unstable_now())
                }, n)
            }
            t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(e) {
                e.callback = null
            }, t.unstable_continueExecution = function() {
                v || m || (v = !0, R(E))
            }, t.unstable_forceFrameRate = function(e) {
                0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < e ? Math.floor(1e3 / e) : 5
            }, t.unstable_getCurrentPriorityLevel = function() {
                return h
            }, t.unstable_getFirstCallbackNode = function() {
                return r(c)
            }, t.unstable_next = function(e) {
                switch (h) {
                    case 1:
                    case 2:
                    case 3:
                        var t = 3;
                        break;
                    default:
                        t = h
                }
                var n = h;
                h = t;
                try {
                    return e()
                } finally {
                    h = n
                }
            }, t.unstable_pauseExecution = function() {}, t.unstable_requestPaint = function() {}, t.unstable_runWithPriority = function(e, t) {
                switch (e) {
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        break;
                    default:
                        e = 3
                }
                var n = h;
                h = e;
                try {
                    return t()
                } finally {
                    h = n
                }
            }, t.unstable_scheduleCallback = function(e, l, a) {
                var i = t.unstable_now();
                switch (a = "object" == typeof a && null !== a && "number" == typeof(a = a.delay) && 0 < a ? i + a : i, e) {
                    case 1:
                        var o = -1;
                        break;
                    case 2:
                        o = 250;
                        break;
                    case 5:
                        o = 1073741823;
                        break;
                    case 4:
                        o = 1e4;
                        break;
                    default:
                        o = 5e3
                }
                return o = a + o, e = {
                    id: d++,
                    callback: l,
                    priorityLevel: e,
                    startTime: a,
                    expirationTime: o,
                    sortIndex: -1
                }, a > i ? (e.sortIndex = a, n(f, e), null === r(c) && e === r(f) && (g ? (b(C), C = -1) : g = !0, I(k, a - i))) : (e.sortIndex = o, n(c, e), v || m || (v = !0, R(E))), e
            }, t.unstable_shouldYield = z, t.unstable_wrapCallback = function(e) {
                var t = h;
                return function() {
                    var n = h;
                    h = t;
                    try {
                        return e.apply(this, arguments)
                    } finally {
                        h = n
                    }
                }
            }
        },
        5431: function(e, t, n) {
            "use strict";
            e.exports = n(1906)
        },
        296: function(e) {
            function t(e, t, n) {
                function r() {
                    var s = Date.now() - o;
                    s < t && s >= 0 ? l = setTimeout(r, t - s) : (l = null, n || (u = e.apply(i, a), i = a = null))
                }
                null == t && (t = 100);
                var l, a, i, o, u, s = function() {
                    i = this, a = arguments, o = Date.now();
                    var s = n && !l;
                    return l || (l = setTimeout(r, t)), s && (u = e.apply(i, a), i = a = null), u
                };
                return s.clear = function() {
                    l && (clearTimeout(l), l = null)
                }, s.flush = function() {
                    l && (u = e.apply(i, a), i = a = null, clearTimeout(l), l = null)
                }, s
            }
            t.debounce = t, e.exports = t
        },
        3454: function(e, t, n) {
            "use strict";
            var r, l;
            e.exports = (null == (r = n.g.process) ? void 0 : r.env) && "object" == typeof(null == (l = n.g.process) ? void 0 : l.env) ? n.g.process : n(7663)
        },
        7663: function(e) {
            ! function() {
                var t = {
                        229: function(e) {
                            var t, n, r, l = e.exports = {};

                            function a() {
                                throw Error("setTimeout has not been defined")
                            }

                            function i() {
                                throw Error("clearTimeout has not been defined")
                            }

                            function o(e) {
                                if (t === setTimeout) return setTimeout(e, 0);
                                if ((t === a || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
                                try {
                                    return t(e, 0)
                                } catch (n) {
                                    try {
                                        return t.call(null, e, 0)
                                    } catch (n) {
                                        return t.call(this, e, 0)
                                    }
                                }
                            }! function() {
                                try {
                                    t = "function" == typeof setTimeout ? setTimeout : a
                                } catch (e) {
                                    t = a
                                }
                                try {
                                    n = "function" == typeof clearTimeout ? clearTimeout : i
                                } catch (e) {
                                    n = i
                                }
                            }();
                            var u = [],
                                s = !1,
                                c = -1;

                            function f() {
                                s && r && (s = !1, r.length ? u = r.concat(u) : c = -1, u.length && d())
                            }

                            function d() {
                                if (!s) {
                                    var e = o(f);
                                    s = !0;
                                    for (var t = u.length; t;) {
                                        for (r = u, u = []; ++c < t;) r && r[c].run();
                                        c = -1, t = u.length
                                    }
                                    r = null, s = !1,
                                        function(e) {
                                            if (n === clearTimeout) return clearTimeout(e);
                                            if ((n === i || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
                                            try {
                                                n(e)
                                            } catch (t) {
                                                try {
                                                    return n.call(null, e)
                                                } catch (t) {
                                                    return n.call(this, e)
                                                }
                                            }
                                        }(e)
                                }
                            }

                            function p(e, t) {
                                this.fun = e, this.array = t
                            }

                            function h() {}
                            l.nextTick = function(e) {
                                var t = Array(arguments.length - 1);
                                if (arguments.length > 1)
                                    for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                                u.push(new p(e, t)), 1 !== u.length || s || o(d)
                            }, p.prototype.run = function() {
                                this.fun.apply(null, this.array)
                            }, l.title = "browser", l.browser = !0, l.env = {}, l.argv = [], l.version = "", l.versions = {}, l.on = h, l.addListener = h, l.once = h, l.off = h, l.removeListener = h, l.removeAllListeners = h, l.emit = h, l.prependListener = h, l.prependOnceListener = h, l.listeners = function(e) {
                                return []
                            }, l.binding = function(e) {
                                throw Error("process.binding is not supported")
                            }, l.cwd = function() {
                                return "/"
                            }, l.chdir = function(e) {
                                throw Error("process.chdir is not supported")
                            }, l.umask = function() {
                                return 0
                            }
                        }
                    },
                    n = {};

                function r(e) {
                    var l = n[e];
                    if (void 0 !== l) return l.exports;
                    var a = n[e] = {
                            exports: {}
                        },
                        i = !0;
                    try {
                        t[e](a, a.exports, r), i = !1
                    } finally {
                        i && delete n[e]
                    }
                    return a.exports
                }
                r.ab = "//";
                var l = r(229);
                e.exports = l
            }()
        },
        6511: function(e, t) {
            "use strict";
            /**
             * @license React
             * react-reconciler-constants.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            t.ConcurrentRoot = 1, t.ContinuousEventPriority = 4, t.DefaultEventPriority = 16, t.DiscreteEventPriority = 1
        },
        7287: function(e, t, n) {
            /**
             * @license React
             * react-reconciler.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            e.exports = function(e) {
                "use strict";
                var t, r, l, a, i, o = {},
                    u = n(7294),
                    s = n(373),
                    c = Object.assign;

                function f(e) {
                    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
                    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
                }
                var d = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
                    p = Symbol.for("react.element"),
                    h = Symbol.for("react.portal"),
                    m = Symbol.for("react.fragment"),
                    v = Symbol.for("react.strict_mode"),
                    g = Symbol.for("react.profiler"),
                    y = Symbol.for("react.provider"),
                    b = Symbol.for("react.context"),
                    w = Symbol.for("react.forward_ref"),
                    S = Symbol.for("react.suspense"),
                    k = Symbol.for("react.suspense_list"),
                    E = Symbol.for("react.memo"),
                    _ = Symbol.for("react.lazy");
                Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
                var x = Symbol.for("react.offscreen");
                Symbol.for("react.legacy_hidden"), Symbol.for("react.cache"), Symbol.for("react.tracing_marker");
                var C = Symbol.iterator;

                function P(e) {
                    return null === e || "object" != typeof e ? null : "function" == typeof(e = C && e[C] || e["@@iterator"]) ? e : null
                }

                function T(e) {
                    if (null == e) return null;
                    if ("function" == typeof e) return e.displayName || e.name || null;
                    if ("string" == typeof e) return e;
                    switch (e) {
                        case m:
                            return "Fragment";
                        case h:
                            return "Portal";
                        case g:
                            return "Profiler";
                        case v:
                            return "StrictMode";
                        case S:
                            return "Suspense";
                        case k:
                            return "SuspenseList"
                    }
                    if ("object" == typeof e) switch (e.$$typeof) {
                        case b:
                            return (e.displayName || "Context") + ".Consumer";
                        case y:
                            return (e._context.displayName || "Context") + ".Provider";
                        case w:
                            var t = e.render;
                            return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
                        case E:
                            return null !== (t = e.displayName || null) ? t : T(e.type) || "Memo";
                        case _:
                            t = e._payload, e = e._init;
                            try {
                                return T(e(t))
                            } catch (e) {}
                    }
                    return null
                }

                function z(e) {
                    var t = e,
                        n = e;
                    if (e.alternate)
                        for (; t.return;) t = t.return;
                    else {
                        e = t;
                        do 0 != (4098 & (t = e).flags) && (n = t.return), e = t.return; while (e)
                    }
                    return 3 === t.tag ? n : null
                }

                function N(e) {
                    if (z(e) !== e) throw Error(f(188))
                }

                function L(e) {
                    var t = e.alternate;
                    if (!t) {
                        if (null === (t = z(e))) throw Error(f(188));
                        return t !== e ? null : e
                    }
                    for (var n = e, r = t;;) {
                        var l = n.return;
                        if (null === l) break;
                        var a = l.alternate;
                        if (null === a) {
                            if (null !== (r = l.return)) {
                                n = r;
                                continue
                            }
                            break
                        }
                        if (l.child === a.child) {
                            for (a = l.child; a;) {
                                if (a === n) return N(l), e;
                                if (a === r) return N(l), t;
                                a = a.sibling
                            }
                            throw Error(f(188))
                        }
                        if (n.return !== r.return) n = l, r = a;
                        else {
                            for (var i = !1, o = l.child; o;) {
                                if (o === n) {
                                    i = !0, n = l, r = a;
                                    break
                                }
                                if (o === r) {
                                    i = !0, r = l, n = a;
                                    break
                                }
                                o = o.sibling
                            }
                            if (!i) {
                                for (o = a.child; o;) {
                                    if (o === n) {
                                        i = !0, n = a, r = l;
                                        break
                                    }
                                    if (o === r) {
                                        i = !0, r = a, n = l;
                                        break
                                    }
                                    o = o.sibling
                                }
                                if (!i) throw Error(f(189))
                            }
                        }
                        if (n.alternate !== r) throw Error(f(190))
                    }
                    if (3 !== n.tag) throw Error(f(188));
                    return n.stateNode.current === n ? e : t
                }

                function M(e) {
                    return null !== (e = L(e)) ? function e(t) {
                        if (5 === t.tag || 6 === t.tag) return t;
                        for (t = t.child; null !== t;) {
                            var n = e(t);
                            if (null !== n) return n;
                            t = t.sibling
                        }
                        return null
                    }(e) : null
                }
                var R, I = Array.isArray,
                    j = e.getPublicInstance,
                    O = e.getRootHostContext,
                    A = e.getChildHostContext,
                    D = e.prepareForCommit,
                    F = e.resetAfterCommit,
                    U = e.createInstance,
                    H = e.appendInitialChild,
                    Q = e.finalizeInitialChildren,
                    B = e.prepareUpdate,
                    W = e.shouldSetTextContent,
                    $ = e.createTextInstance,
                    q = e.scheduleTimeout,
                    V = e.cancelTimeout,
                    Y = e.noTimeout,
                    G = e.isPrimaryRenderer,
                    X = e.supportsMutation,
                    J = e.supportsPersistence,
                    K = e.supportsHydration,
                    Z = e.getInstanceFromNode,
                    ee = e.preparePortalMount,
                    et = e.getCurrentEventPriority,
                    en = e.detachDeletedInstance,
                    er = e.supportsMicrotasks,
                    el = e.scheduleMicrotask,
                    ea = e.supportsTestSelectors,
                    ei = e.findFiberRoot,
                    eo = e.getBoundingRect,
                    eu = e.getTextContent,
                    es = e.isHiddenSubtree,
                    ec = e.matchAccessibilityRole,
                    ef = e.setFocusIfFocusable,
                    ed = e.setupIntersectionObserver,
                    ep = e.appendChild,
                    eh = e.appendChildToContainer,
                    em = e.commitTextUpdate,
                    ev = e.commitMount,
                    eg = e.commitUpdate,
                    ey = e.insertBefore,
                    eb = e.insertInContainerBefore,
                    ew = e.removeChild,
                    eS = e.removeChildFromContainer,
                    ek = e.resetTextContent,
                    eE = e.hideInstance,
                    e_ = e.hideTextInstance,
                    ex = e.unhideInstance,
                    eC = e.unhideTextInstance,
                    eP = e.clearContainer,
                    eT = e.cloneInstance,
                    ez = e.createContainerChildSet,
                    eN = e.appendChildToContainerChildSet,
                    eL = e.finalizeContainerChildren,
                    eM = e.replaceContainerChildren,
                    eR = e.cloneHiddenInstance,
                    eI = e.cloneHiddenTextInstance,
                    ej = e.canHydrateInstance,
                    eO = e.canHydrateTextInstance,
                    eA = e.canHydrateSuspenseInstance,
                    eD = e.isSuspenseInstancePending,
                    eF = e.isSuspenseInstanceFallback,
                    eU = e.registerSuspenseInstanceRetry,
                    eH = e.getNextHydratableSibling,
                    eQ = e.getFirstHydratableChild,
                    eB = e.getFirstHydratableChildWithinContainer,
                    eW = e.getFirstHydratableChildWithinSuspenseInstance,
                    e$ = e.hydrateInstance,
                    eq = e.hydrateTextInstance,
                    eV = e.hydrateSuspenseInstance,
                    eY = e.getNextHydratableInstanceAfterSuspenseInstance,
                    eG = e.commitHydratedContainer,
                    eX = e.commitHydratedSuspenseInstance,
                    eJ = e.clearSuspenseBoundary,
                    eK = e.clearSuspenseBoundaryFromContainer,
                    eZ = e.shouldDeleteUnhydratedTailInstances,
                    e0 = e.didNotMatchHydratedContainerTextInstance,
                    e1 = e.didNotMatchHydratedTextInstance;

                function e2(e) {
                    if (void 0 === R) try {
                        throw Error()
                    } catch (e) {
                        var t = e.stack.trim().match(/\n( *(at )?)/);
                        R = t && t[1] || ""
                    }
                    return "\n" + R + e
                }
                var e3 = !1;

                function e4(e, t) {
                    if (!e || e3) return "";
                    e3 = !0;
                    var n = Error.prepareStackTrace;
                    Error.prepareStackTrace = void 0;
                    try {
                        if (t) {
                            if (t = function() {
                                    throw Error()
                                }, Object.defineProperty(t.prototype, "props", {
                                    set: function() {
                                        throw Error()
                                    }
                                }), "object" == typeof Reflect && Reflect.construct) {
                                try {
                                    Reflect.construct(t, [])
                                } catch (e) {
                                    var r = e
                                }
                                Reflect.construct(e, [], t)
                            } else {
                                try {
                                    t.call()
                                } catch (e) {
                                    r = e
                                }
                                e.call(t.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (e) {
                                r = e
                            }
                            e()
                        }
                    } catch (t) {
                        if (t && r && "string" == typeof t.stack) {
                            for (var l = t.stack.split("\n"), a = r.stack.split("\n"), i = l.length - 1, o = a.length - 1; 1 <= i && 0 <= o && l[i] !== a[o];) o--;
                            for (; 1 <= i && 0 <= o; i--, o--)
                                if (l[i] !== a[o]) {
                                    if (1 !== i || 1 !== o)
                                        do
                                            if (i--, 0 > --o || l[i] !== a[o]) {
                                                var u = "\n" + l[i].replace(" at new ", " at ");
                                                return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u
                                            } while (1 <= i && 0 <= o);
                                    break
                                }
                        }
                    } finally {
                        e3 = !1, Error.prepareStackTrace = n
                    }
                    return (e = e ? e.displayName || e.name : "") ? e2(e) : ""
                }
                var e6 = Object.prototype.hasOwnProperty,
                    e5 = [],
                    e8 = -1;

                function e7(e) {
                    return {
                        current: e
                    }
                }

                function e9(e) {
                    0 > e8 || (e.current = e5[e8], e5[e8] = null, e8--)
                }

                function te(e, t) {
                    e5[++e8] = e.current, e.current = t
                }
                var tt = {},
                    tn = e7(tt),
                    tr = e7(!1),
                    tl = tt;

                function ta(e, t) {
                    var n = e.type.contextTypes;
                    if (!n) return tt;
                    var r = e.stateNode;
                    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
                    var l, a = {};
                    for (l in n) a[l] = t[l];
                    return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a
                }

                function ti(e) {
                    return null != (e = e.childContextTypes)
                }

                function to() {
                    e9(tr), e9(tn)
                }

                function tu(e, t, n) {
                    if (tn.current !== tt) throw Error(f(168));
                    te(tn, t), te(tr, n)
                }

                function ts(e, t, n) {
                    var r = e.stateNode;
                    if (t = t.childContextTypes, "function" != typeof r.getChildContext) return n;
                    for (var l in r = r.getChildContext())
                        if (!(l in t)) throw Error(f(108, function(e) {
                            var t = e.type;
                            switch (e.tag) {
                                case 24:
                                    return "Cache";
                                case 9:
                                    return (t.displayName || "Context") + ".Consumer";
                                case 10:
                                    return (t._context.displayName || "Context") + ".Provider";
                                case 18:
                                    return "DehydratedFragment";
                                case 11:
                                    return e = (e = t.render).displayName || e.name || "", t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
                                case 7:
                                    return "Fragment";
                                case 5:
                                    return t;
                                case 4:
                                    return "Portal";
                                case 3:
                                    return "Root";
                                case 6:
                                    return "Text";
                                case 16:
                                    return T(t);
                                case 8:
                                    return t === v ? "StrictMode" : "Mode";
                                case 22:
                                    return "Offscreen";
                                case 12:
                                    return "Profiler";
                                case 21:
                                    return "Scope";
                                case 13:
                                    return "Suspense";
                                case 19:
                                    return "SuspenseList";
                                case 25:
                                    return "TracingMarker";
                                case 1:
                                case 0:
                                case 17:
                                case 2:
                                case 14:
                                case 15:
                                    if ("function" == typeof t) return t.displayName || t.name || null;
                                    if ("string" == typeof t) return t
                            }
                            return null
                        }(e) || "Unknown", l));
                    return c({}, n, r)
                }

                function tc(e) {
                    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || tt, tl = tn.current, te(tn, e), te(tr, tr.current), !0
                }

                function tf(e, t, n) {
                    var r = e.stateNode;
                    if (!r) throw Error(f(169));
                    n ? (e = ts(e, t, tl), r.__reactInternalMemoizedMergedChildContext = e, e9(tr), e9(tn), te(tn, e)) : e9(tr), te(tr, n)
                }
                var td = Math.clz32 ? Math.clz32 : function(e) {
                        return 0 == (e >>>= 0) ? 32 : 31 - (tp(e) / th | 0) | 0
                    },
                    tp = Math.log,
                    th = Math.LN2,
                    tm = 64,
                    tv = 4194304;

                function tg(e) {
                    switch (e & -e) {
                        case 1:
                            return 1;
                        case 2:
                            return 2;
                        case 4:
                            return 4;
                        case 8:
                            return 8;
                        case 16:
                            return 16;
                        case 32:
                            return 32;
                        case 64:
                        case 128:
                        case 256:
                        case 512:
                        case 1024:
                        case 2048:
                        case 4096:
                        case 8192:
                        case 16384:
                        case 32768:
                        case 65536:
                        case 131072:
                        case 262144:
                        case 524288:
                        case 1048576:
                        case 2097152:
                            return 4194240 & e;
                        case 4194304:
                        case 8388608:
                        case 16777216:
                        case 33554432:
                        case 67108864:
                            return 130023424 & e;
                        case 134217728:
                            return 134217728;
                        case 268435456:
                            return 268435456;
                        case 536870912:
                            return 536870912;
                        case 1073741824:
                            return 1073741824;
                        default:
                            return e
                    }
                }

                function ty(e, t) {
                    var n = e.pendingLanes;
                    if (0 === n) return 0;
                    var r = 0,
                        l = e.suspendedLanes,
                        a = e.pingedLanes,
                        i = 268435455 & n;
                    if (0 !== i) {
                        var o = i & ~l;
                        0 !== o ? r = tg(o) : 0 != (a &= i) && (r = tg(a))
                    } else 0 != (i = n & ~l) ? r = tg(i) : 0 !== a && (r = tg(a));
                    if (0 === r) return 0;
                    if (0 !== t && t !== r && 0 == (t & l) && ((l = r & -r) >= (a = t & -t) || 16 === l && 0 != (4194240 & a))) return t;
                    if (0 != (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes))
                        for (e = e.entanglements, t &= r; 0 < t;) l = 1 << (n = 31 - td(t)), r |= e[n], t &= ~l;
                    return r
                }

                function tb(e) {
                    return 0 != (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0
                }

                function tw(e) {
                    for (var t = [], n = 0; 31 > n; n++) t.push(e);
                    return t
                }

                function tS(e, t, n) {
                    e.pendingLanes |= t, 536870912 !== t && (e.suspendedLanes = 0, e.pingedLanes = 0), (e = e.eventTimes)[t = 31 - td(t)] = n
                }

                function tk(e, t) {
                    var n = e.entangledLanes |= t;
                    for (e = e.entanglements; n;) {
                        var r = 31 - td(n),
                            l = 1 << r;
                        l & t | e[r] & t && (e[r] |= t), n &= ~l
                    }
                }
                var tE = 0;

                function t_(e) {
                    return 1 < (e &= -e) ? 4 < e ? 0 != (268435455 & e) ? 16 : 536870912 : 4 : 1
                }
                var tx = s.unstable_scheduleCallback,
                    tC = s.unstable_cancelCallback,
                    tP = s.unstable_shouldYield,
                    tT = s.unstable_requestPaint,
                    tz = s.unstable_now,
                    tN = s.unstable_ImmediatePriority,
                    tL = s.unstable_UserBlockingPriority,
                    tM = s.unstable_NormalPriority,
                    tR = s.unstable_IdlePriority,
                    tI = null,
                    tj = null,
                    tO = "function" == typeof Object.is ? Object.is : function(e, t) {
                        return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
                    },
                    tA = null,
                    tD = !1,
                    tF = !1;

                function tU() {
                    if (!tF && null !== tA) {
                        tF = !0;
                        var e = 0,
                            t = tE;
                        try {
                            var n = tA;
                            for (tE = 1; e < n.length; e++) {
                                var r = n[e];
                                do r = r(!0); while (null !== r)
                            }
                            tA = null, tD = !1
                        } catch (t) {
                            throw null !== tA && (tA = tA.slice(e + 1)), tx(tN, tU), t
                        } finally {
                            tE = t, tF = !1
                        }
                    }
                    return null
                }
                var tH = d.ReactCurrentBatchConfig;

                function tQ(e, t) {
                    if (tO(e, t)) return !0;
                    if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
                    var n = Object.keys(e),
                        r = Object.keys(t);
                    if (n.length !== r.length) return !1;
                    for (r = 0; r < n.length; r++) {
                        var l = n[r];
                        if (!e6.call(t, l) || !tO(e[l], t[l])) return !1
                    }
                    return !0
                }

                function tB(e, t) {
                    if (e && e.defaultProps)
                        for (var n in t = c({}, t), e = e.defaultProps) void 0 === t[n] && (t[n] = e[n]);
                    return t
                }
                var tW = e7(null),
                    t$ = null,
                    tq = null,
                    tV = null;

                function tY() {
                    tV = tq = t$ = null
                }

                function tG(e, t, n) {
                    G ? (te(tW, t._currentValue), t._currentValue = n) : (te(tW, t._currentValue2), t._currentValue2 = n)
                }

                function tX(e) {
                    var t = tW.current;
                    e9(tW), G ? e._currentValue = t : e._currentValue2 = t
                }

                function tJ(e, t, n) {
                    for (; null !== e;) {
                        var r = e.alternate;
                        if ((e.childLanes & t) !== t ? (e.childLanes |= t, null !== r && (r.childLanes |= t)) : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
                        e = e.return
                    }
                }

                function tK(e, t) {
                    t$ = e, tV = tq = null, null !== (e = e.dependencies) && null !== e.firstContext && (0 != (e.lanes & t) && (rZ = !0), e.firstContext = null)
                }

                function tZ(e) {
                    var t = G ? e._currentValue : e._currentValue2;
                    if (tV !== e) {
                        if (e = {
                                context: e,
                                memoizedValue: t,
                                next: null
                            }, null === tq) {
                            if (null === t$) throw Error(f(308));
                            tq = e, t$.dependencies = {
                                lanes: 0,
                                firstContext: e
                            }
                        } else tq = tq.next = e
                    }
                    return t
                }
                var t0 = null,
                    t1 = !1;

                function t2(e) {
                    e.updateQueue = {
                        baseState: e.memoizedState,
                        firstBaseUpdate: null,
                        lastBaseUpdate: null,
                        shared: {
                            pending: null,
                            interleaved: null,
                            lanes: 0
                        },
                        effects: null
                    }
                }

                function t3(e, t) {
                    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
                        baseState: e.baseState,
                        firstBaseUpdate: e.firstBaseUpdate,
                        lastBaseUpdate: e.lastBaseUpdate,
                        shared: e.shared,
                        effects: e.effects
                    })
                }

                function t4(e, t) {
                    return {
                        eventTime: e,
                        lane: t,
                        tag: 0,
                        payload: null,
                        callback: null,
                        next: null
                    }
                }

                function t6(e, t) {
                    var n = e.updateQueue;
                    null !== n && (n = n.shared, null !== lV && 0 != (1 & e.mode) && 0 == (2 & lq) ? (null === (e = n.interleaved) ? (t.next = t, null === t0 ? t0 = [n] : t0.push(n)) : (t.next = e.next, e.next = t), n.interleaved = t) : (null === (e = n.pending) ? t.next = t : (t.next = e.next, e.next = t), n.pending = t))
                }

                function t5(e, t, n) {
                    if (null !== (t = t.updateQueue) && (t = t.shared, 0 != (4194240 & n))) {
                        var r = t.lanes;
                        r &= e.pendingLanes, n |= r, t.lanes = n, tk(e, n)
                    }
                }

                function t8(e, t) {
                    var n = e.updateQueue,
                        r = e.alternate;
                    if (null !== r && n === (r = r.updateQueue)) {
                        var l = null,
                            a = null;
                        if (null !== (n = n.firstBaseUpdate)) {
                            do {
                                var i = {
                                    eventTime: n.eventTime,
                                    lane: n.lane,
                                    tag: n.tag,
                                    payload: n.payload,
                                    callback: n.callback,
                                    next: null
                                };
                                null === a ? l = a = i : a = a.next = i, n = n.next
                            } while (null !== n);
                            null === a ? l = a = t : a = a.next = t
                        } else l = a = t;
                        n = {
                            baseState: r.baseState,
                            firstBaseUpdate: l,
                            lastBaseUpdate: a,
                            shared: r.shared,
                            effects: r.effects
                        }, e.updateQueue = n;
                        return
                    }
                    null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
                }

                function t7(e, t, n, r) {
                    var l = e.updateQueue;
                    t1 = !1;
                    var a = l.firstBaseUpdate,
                        i = l.lastBaseUpdate,
                        o = l.shared.pending;
                    if (null !== o) {
                        l.shared.pending = null;
                        var u = o,
                            s = u.next;
                        u.next = null, null === i ? a = s : i.next = s, i = u;
                        var f = e.alternate;
                        null !== f && (o = (f = f.updateQueue).lastBaseUpdate) !== i && (null === o ? f.firstBaseUpdate = s : o.next = s, f.lastBaseUpdate = u)
                    }
                    if (null !== a) {
                        var d = l.baseState;
                        for (i = 0, f = s = u = null, o = a;;) {
                            var p = o.lane,
                                h = o.eventTime;
                            if ((r & p) === p) {
                                null !== f && (f = f.next = {
                                    eventTime: h,
                                    lane: 0,
                                    tag: o.tag,
                                    payload: o.payload,
                                    callback: o.callback,
                                    next: null
                                });
                                e: {
                                    var m = e,
                                        v = o;
                                    switch (p = t, h = n, v.tag) {
                                        case 1:
                                            if ("function" == typeof(m = v.payload)) {
                                                d = m.call(h, d, p);
                                                break e
                                            }
                                            d = m;
                                            break e;
                                        case 3:
                                            m.flags = -65537 & m.flags | 128;
                                        case 0:
                                            if (null == (p = "function" == typeof(m = v.payload) ? m.call(h, d, p) : m)) break e;
                                            d = c({}, d, p);
                                            break e;
                                        case 2:
                                            t1 = !0
                                    }
                                }
                                null !== o.callback && 0 !== o.lane && (e.flags |= 64, null === (p = l.effects) ? l.effects = [o] : p.push(o))
                            } else h = {
                                eventTime: h,
                                lane: p,
                                tag: o.tag,
                                payload: o.payload,
                                callback: o.callback,
                                next: null
                            }, null === f ? (s = f = h, u = d) : f = f.next = h, i |= p;
                            if (null === (o = o.next)) {
                                if (null === (o = l.shared.pending)) break;
                                o = (p = o).next, p.next = null, l.lastBaseUpdate = p, l.shared.pending = null
                            }
                        }
                        if (null === f && (u = d), l.baseState = u, l.firstBaseUpdate = s, l.lastBaseUpdate = f, null !== (t = l.shared.interleaved)) {
                            l = t;
                            do i |= l.lane, l = l.next; while (l !== t)
                        } else null === a && (l.shared.lanes = 0);
                        l0 |= i, e.lanes = i, e.memoizedState = d
                    }
                }

                function t9(e, t, n) {
                    if (e = t.effects, t.effects = null, null !== e)
                        for (t = 0; t < e.length; t++) {
                            var r = e[t],
                                l = r.callback;
                            if (null !== l) {
                                if (r.callback = null, r = n, "function" != typeof l) throw Error(f(191, l));
                                l.call(r)
                            }
                        }
                }
                var ne = (new u.Component).refs;

                function nt(e, t, n, r) {
                    t = e.memoizedState, n = null == (n = n(r, t)) ? t : c({}, t, n), e.memoizedState = n, 0 === e.lanes && (e.updateQueue.baseState = n)
                }
                var nn = {
                    isMounted: function(e) {
                        return !!(e = e._reactInternals) && z(e) === e
                    },
                    enqueueSetState: function(e, t, n) {
                        e = e._reactInternals;
                        var r = au(),
                            l = as(e),
                            a = t4(r, l);
                        a.payload = t, null != n && (a.callback = n), t6(e, a), null !== (t = ac(e, l, r)) && t5(t, e, l)
                    },
                    enqueueReplaceState: function(e, t, n) {
                        e = e._reactInternals;
                        var r = au(),
                            l = as(e),
                            a = t4(r, l);
                        a.tag = 1, a.payload = t, null != n && (a.callback = n), t6(e, a), null !== (t = ac(e, l, r)) && t5(t, e, l)
                    },
                    enqueueForceUpdate: function(e, t) {
                        e = e._reactInternals;
                        var n = au(),
                            r = as(e),
                            l = t4(n, r);
                        l.tag = 2, null != t && (l.callback = t), t6(e, l), null !== (t = ac(e, r, n)) && t5(t, e, r)
                    }
                };

                function nr(e, t, n, r, l, a, i) {
                    return "function" == typeof(e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, a, i) : !t.prototype || !t.prototype.isPureReactComponent || !tQ(n, r) || !tQ(l, a)
                }

                function nl(e, t, n) {
                    var r = !1,
                        l = tt,
                        a = t.contextType;
                    return "object" == typeof a && null !== a ? a = tZ(a) : (l = ti(t) ? tl : tn.current, a = (r = null != (r = t.contextTypes)) ? ta(e, l) : tt), t = new t(n, a), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = nn, e.stateNode = t, t._reactInternals = e, r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = a), t
                }

                function na(e, t, n, r) {
                    e = t.state, "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && nn.enqueueReplaceState(t, t.state, null)
                }

                function ni(e, t, n, r) {
                    var l = e.stateNode;
                    l.props = n, l.state = e.memoizedState, l.refs = ne, t2(e);
                    var a = t.contextType;
                    "object" == typeof a && null !== a ? l.context = tZ(a) : (a = ti(t) ? tl : tn.current, l.context = ta(e, a)), l.state = e.memoizedState, "function" == typeof(a = t.getDerivedStateFromProps) && (nt(e, t, a, n), l.state = e.memoizedState), "function" == typeof t.getDerivedStateFromProps || "function" == typeof l.getSnapshotBeforeUpdate || "function" != typeof l.UNSAFE_componentWillMount && "function" != typeof l.componentWillMount || (t = l.state, "function" == typeof l.componentWillMount && l.componentWillMount(), "function" == typeof l.UNSAFE_componentWillMount && l.UNSAFE_componentWillMount(), t !== l.state && nn.enqueueReplaceState(l, l.state, null), t7(e, n, l, r), l.state = e.memoizedState), "function" == typeof l.componentDidMount && (e.flags |= 4194308)
                }
                var no = [],
                    nu = 0,
                    ns = null,
                    nc = 0,
                    nf = [],
                    nd = 0,
                    np = null,
                    nh = 1,
                    nm = "";

                function nv(e, t) {
                    no[nu++] = nc, no[nu++] = ns, ns = e, nc = t
                }

                function ng(e, t, n) {
                    nf[nd++] = nh, nf[nd++] = nm, nf[nd++] = np, np = e;
                    var r = nh;
                    e = nm;
                    var l = 32 - td(r) - 1;
                    r &= ~(1 << l), n += 1;
                    var a = 32 - td(t) + l;
                    if (30 < a) {
                        var i = l - l % 5;
                        a = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, nh = 1 << 32 - td(t) + l | n << l | r, nm = a + e
                    } else nh = 1 << a | n << l | r, nm = e
                }

                function ny(e) {
                    null !== e.return && (nv(e, 1), ng(e, 1, 0))
                }

                function nb(e) {
                    for (; e === ns;) ns = no[--nu], no[nu] = null, nc = no[--nu], no[nu] = null;
                    for (; e === np;) np = nf[--nd], nf[nd] = null, nm = nf[--nd], nf[nd] = null, nh = nf[--nd], nf[nd] = null
                }
                var nw = null,
                    nS = null,
                    nk = !1,
                    nE = !1,
                    n_ = null;

                function nx(e, t) {
                    var n = aO(5, null, null, 0);
                    n.elementType = "DELETED", n.stateNode = t, n.return = e, null === (t = e.deletions) ? (e.deletions = [n], e.flags |= 16) : t.push(n)
                }

                function nC(e, t) {
                    switch (e.tag) {
                        case 5:
                            return null !== (t = ej(t, e.type, e.pendingProps)) && (e.stateNode = t, nw = e, nS = eQ(t), !0);
                        case 6:
                            return null !== (t = eO(t, e.pendingProps)) && (e.stateNode = t, nw = e, nS = null, !0);
                        case 13:
                            if (null !== (t = eA(t))) {
                                var n = null !== np ? {
                                    id: nh,
                                    overflow: nm
                                } : null;
                                return e.memoizedState = {
                                    dehydrated: t,
                                    treeContext: n,
                                    retryLane: 1073741824
                                }, (n = aO(18, null, null, 0)).stateNode = t, n.return = e, e.child = n, nw = e, nS = null, !0
                            }
                            return !1;
                        default:
                            return !1
                    }
                }

                function nP(e) {
                    return 0 != (1 & e.mode) && 0 == (128 & e.flags)
                }

                function nT(e) {
                    if (nk) {
                        var t = nS;
                        if (t) {
                            var n = t;
                            if (!nC(e, t)) {
                                if (nP(e)) throw Error(f(418));
                                t = eH(n);
                                var r = nw;
                                t && nC(e, t) ? nx(r, n) : (e.flags = -4097 & e.flags | 2, nk = !1, nw = e)
                            }
                        } else {
                            if (nP(e)) throw Error(f(418));
                            e.flags = -4097 & e.flags | 2, nk = !1, nw = e
                        }
                    }
                }

                function nz(e) {
                    for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;) e = e.return;
                    nw = e
                }

                function nN(e) {
                    if (!K || e !== nw) return !1;
                    if (!nk) return nz(e), nk = !0, !1;
                    if (3 !== e.tag && (5 !== e.tag || eZ(e.type) && !W(e.type, e.memoizedProps))) {
                        var t = nS;
                        if (t) {
                            if (nP(e)) {
                                for (e = nS; e;) e = eH(e);
                                throw Error(f(418))
                            }
                            for (; t;) nx(e, t), t = eH(t)
                        }
                    }
                    if (nz(e), 13 === e.tag) {
                        if (!K) throw Error(f(316));
                        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(f(317));
                        nS = eY(e)
                    } else nS = nw ? eH(e.stateNode) : null;
                    return !0
                }

                function nL() {
                    K && (nS = nw = null, nE = nk = !1)
                }

                function nM(e) {
                    null === n_ ? n_ = [e] : n_.push(e)
                }

                function nR(e, t, n) {
                    if (null !== (e = n.ref) && "function" != typeof e && "object" != typeof e) {
                        if (n._owner) {
                            if (n = n._owner) {
                                if (1 !== n.tag) throw Error(f(309));
                                var r = n.stateNode
                            }
                            if (!r) throw Error(f(147, e));
                            var l = r,
                                a = "" + e;
                            return null !== t && null !== t.ref && "function" == typeof t.ref && t.ref._stringRef === a ? t.ref : ((t = function(e) {
                                var t = l.refs;
                                t === ne && (t = l.refs = {}), null === e ? delete t[a] : t[a] = e
                            })._stringRef = a, t)
                        }
                        if ("string" != typeof e) throw Error(f(284));
                        if (!n._owner) throw Error(f(290, e))
                    }
                    return e
                }

                function nI(e, t) {
                    throw Error(f(31, "[object Object]" === (e = Object.prototype.toString.call(t)) ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
                }

                function nj(e) {
                    return (0, e._init)(e._payload)
                }

                function nO(e) {
                    function t(t, n) {
                        if (e) {
                            var r = t.deletions;
                            null === r ? (t.deletions = [n], t.flags |= 16) : r.push(n)
                        }
                    }

                    function n(n, r) {
                        if (!e) return null;
                        for (; null !== r;) t(n, r), r = r.sibling;
                        return null
                    }

                    function r(e, t) {
                        for (e = new Map; null !== t;) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling;
                        return e
                    }

                    function l(e, t) {
                        return (e = aD(e, t)).index = 0, e.sibling = null, e
                    }

                    function a(t, n, r) {
                        return (t.index = r, e) ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags |= 2, n) : r : (t.flags |= 2, n) : (t.flags |= 1048576, n)
                    }

                    function i(t) {
                        return e && null === t.alternate && (t.flags |= 2), t
                    }

                    function o(e, t, n, r) {
                        return null === t || 6 !== t.tag ? ((t = aQ(n, e.mode, r)).return = e, t) : ((t = l(t, n)).return = e, t)
                    }

                    function u(e, t, n, r) {
                        var a = n.type;
                        return a === m ? c(e, t, n.props.children, r, n.key) : null !== t && (t.elementType === a || "object" == typeof a && null !== a && a.$$typeof === _ && nj(a) === t.type) ? ((r = l(t, n.props)).ref = nR(e, t, n), r.return = e, r) : ((r = aF(n.type, n.key, n.props, null, e.mode, r)).ref = nR(e, t, n), r.return = e, r)
                    }

                    function s(e, t, n, r) {
                        return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = aB(n, e.mode, r)).return = e, t) : ((t = l(t, n.children || [])).return = e, t)
                    }

                    function c(e, t, n, r, a) {
                        return null === t || 7 !== t.tag ? ((t = aU(n, e.mode, r, a)).return = e, t) : ((t = l(t, n)).return = e, t)
                    }

                    function d(e, t, n) {
                        if ("string" == typeof t && "" !== t || "number" == typeof t) return (t = aQ("" + t, e.mode, n)).return = e, t;
                        if ("object" == typeof t && null !== t) {
                            switch (t.$$typeof) {
                                case p:
                                    return (n = aF(t.type, t.key, t.props, null, e.mode, n)).ref = nR(e, null, t), n.return = e, n;
                                case h:
                                    return (t = aB(t, e.mode, n)).return = e, t;
                                case _:
                                    var r = t._init;
                                    return d(e, r(t._payload), n)
                            }
                            if (I(t) || P(t)) return (t = aU(t, e.mode, n, null)).return = e, t;
                            nI(e, t)
                        }
                        return null
                    }

                    function v(e, t, n, r) {
                        var l = null !== t ? t.key : null;
                        if ("string" == typeof n && "" !== n || "number" == typeof n) return null !== l ? null : o(e, t, "" + n, r);
                        if ("object" == typeof n && null !== n) {
                            switch (n.$$typeof) {
                                case p:
                                    return n.key === l ? u(e, t, n, r) : null;
                                case h:
                                    return n.key === l ? s(e, t, n, r) : null;
                                case _:
                                    return v(e, t, (l = n._init)(n._payload), r)
                            }
                            if (I(n) || P(n)) return null !== l ? null : c(e, t, n, r, null);
                            nI(e, n)
                        }
                        return null
                    }

                    function g(e, t, n, r, l) {
                        if ("string" == typeof r && "" !== r || "number" == typeof r) return o(t, e = e.get(n) || null, "" + r, l);
                        if ("object" == typeof r && null !== r) {
                            switch (r.$$typeof) {
                                case p:
                                    return u(t, e = e.get(null === r.key ? n : r.key) || null, r, l);
                                case h:
                                    return s(t, e = e.get(null === r.key ? n : r.key) || null, r, l);
                                case _:
                                    return g(e, t, n, (0, r._init)(r._payload), l)
                            }
                            if (I(r) || P(r)) return c(t, e = e.get(n) || null, r, l, null);
                            nI(t, r)
                        }
                        return null
                    }
                    return function o(u, s, c, y) {
                        if ("object" == typeof c && null !== c && c.type === m && null === c.key && (c = c.props.children), "object" == typeof c && null !== c) {
                            switch (c.$$typeof) {
                                case p:
                                    e: {
                                        for (var b = c.key, w = s; null !== w;) {
                                            if (w.key === b) {
                                                if ((b = c.type) === m) {
                                                    if (7 === w.tag) {
                                                        n(u, w.sibling), (s = l(w, c.props.children)).return = u, u = s;
                                                        break e
                                                    }
                                                } else if (w.elementType === b || "object" == typeof b && null !== b && b.$$typeof === _ && nj(b) === w.type) {
                                                    n(u, w.sibling), (s = l(w, c.props)).ref = nR(u, w, c), s.return = u, u = s;
                                                    break e
                                                }
                                                n(u, w);
                                                break
                                            }
                                            t(u, w), w = w.sibling
                                        }
                                        c.type === m ? ((s = aU(c.props.children, u.mode, y, c.key)).return = u, u = s) : ((y = aF(c.type, c.key, c.props, null, u.mode, y)).ref = nR(u, s, c), y.return = u, u = y)
                                    }
                                    return i(u);
                                case h:
                                    e: {
                                        for (w = c.key; null !== s;) {
                                            if (s.key === w) {
                                                if (4 === s.tag && s.stateNode.containerInfo === c.containerInfo && s.stateNode.implementation === c.implementation) {
                                                    n(u, s.sibling), (s = l(s, c.children || [])).return = u, u = s;
                                                    break e
                                                }
                                                n(u, s);
                                                break
                                            }
                                            t(u, s), s = s.sibling
                                        }(s = aB(c, u.mode, y)).return = u,
                                        u = s
                                    }
                                    return i(u);
                                case _:
                                    return o(u, s, (w = c._init)(c._payload), y)
                            }
                            if (I(c)) return function(l, i, o, u) {
                                for (var s = null, c = null, f = i, p = i = 0, h = null; null !== f && p < o.length; p++) {
                                    f.index > p ? (h = f, f = null) : h = f.sibling;
                                    var m = v(l, f, o[p], u);
                                    if (null === m) {
                                        null === f && (f = h);
                                        break
                                    }
                                    e && f && null === m.alternate && t(l, f), i = a(m, i, p), null === c ? s = m : c.sibling = m, c = m, f = h
                                }
                                if (p === o.length) return n(l, f), nk && nv(l, p), s;
                                if (null === f) {
                                    for (; p < o.length; p++) null !== (f = d(l, o[p], u)) && (i = a(f, i, p), null === c ? s = f : c.sibling = f, c = f);
                                    return nk && nv(l, p), s
                                }
                                for (f = r(l, f); p < o.length; p++) null !== (h = g(f, l, p, o[p], u)) && (e && null !== h.alternate && f.delete(null === h.key ? p : h.key), i = a(h, i, p), null === c ? s = h : c.sibling = h, c = h);
                                return e && f.forEach(function(e) {
                                    return t(l, e)
                                }), nk && nv(l, p), s
                            }(u, s, c, y);
                            if (P(c)) return function(l, i, o, u) {
                                var s = P(o);
                                if ("function" != typeof s) throw Error(f(150));
                                if (null == (o = s.call(o))) throw Error(f(151));
                                for (var c = s = null, p = i, h = i = 0, m = null, y = o.next(); null !== p && !y.done; h++, y = o.next()) {
                                    p.index > h ? (m = p, p = null) : m = p.sibling;
                                    var b = v(l, p, y.value, u);
                                    if (null === b) {
                                        null === p && (p = m);
                                        break
                                    }
                                    e && p && null === b.alternate && t(l, p), i = a(b, i, h), null === c ? s = b : c.sibling = b, c = b, p = m
                                }
                                if (y.done) return n(l, p), nk && nv(l, h), s;
                                if (null === p) {
                                    for (; !y.done; h++, y = o.next()) null !== (y = d(l, y.value, u)) && (i = a(y, i, h), null === c ? s = y : c.sibling = y, c = y);
                                    return nk && nv(l, h), s
                                }
                                for (p = r(l, p); !y.done; h++, y = o.next()) null !== (y = g(p, l, h, y.value, u)) && (e && null !== y.alternate && p.delete(null === y.key ? h : y.key), i = a(y, i, h), null === c ? s = y : c.sibling = y, c = y);
                                return e && p.forEach(function(e) {
                                    return t(l, e)
                                }), nk && nv(l, h), s
                            }(u, s, c, y);
                            nI(u, c)
                        }
                        return "string" == typeof c && "" !== c || "number" == typeof c ? (c = "" + c, null !== s && 6 === s.tag ? (n(u, s.sibling), (s = l(s, c)).return = u, u = s) : (n(u, s), (s = aQ(c, u.mode, y)).return = u, u = s), i(u)) : n(u, s)
                    }
                }
                var nA = nO(!0),
                    nD = nO(!1),
                    nF = {},
                    nU = e7(nF),
                    nH = e7(nF),
                    nQ = e7(nF);

                function nB(e) {
                    if (e === nF) throw Error(f(174));
                    return e
                }

                function nW(e, t) {
                    te(nQ, t), te(nH, e), te(nU, nF), e = O(t), e9(nU), te(nU, e)
                }

                function n$() {
                    e9(nU), e9(nH), e9(nQ)
                }

                function nq(e) {
                    var t = nB(nQ.current),
                        n = nB(nU.current);
                    t = A(n, e.type, t), n !== t && (te(nH, e), te(nU, t))
                }

                function nV(e) {
                    nH.current === e && (e9(nU), e9(nH))
                }
                var nY = e7(0);

                function nG(e) {
                    for (var t = e; null !== t;) {
                        if (13 === t.tag) {
                            var n = t.memoizedState;
                            if (null !== n && (null === (n = n.dehydrated) || eD(n) || eF(n))) return t
                        } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                            if (0 != (128 & t.flags)) return t
                        } else if (null !== t.child) {
                            t.child.return = t, t = t.child;
                            continue
                        }
                        if (t === e) break;
                        for (; null === t.sibling;) {
                            if (null === t.return || t.return === e) return null;
                            t = t.return
                        }
                        t.sibling.return = t.return, t = t.sibling
                    }
                    return null
                }
                var nX = [];

                function nJ() {
                    for (var e = 0; e < nX.length; e++) {
                        var t = nX[e];
                        G ? t._workInProgressVersionPrimary = null : t._workInProgressVersionSecondary = null
                    }
                    nX.length = 0
                }
                var nK = d.ReactCurrentDispatcher,
                    nZ = d.ReactCurrentBatchConfig,
                    n0 = 0,
                    n1 = null,
                    n2 = null,
                    n3 = null,
                    n4 = !1,
                    n6 = !1,
                    n5 = 0,
                    n8 = 0;

                function n7() {
                    throw Error(f(321))
                }

                function n9(e, t) {
                    if (null === t) return !1;
                    for (var n = 0; n < t.length && n < e.length; n++)
                        if (!tO(e[n], t[n])) return !1;
                    return !0
                }

                function re(e, t, n, r, l, a) {
                    if (n0 = a, n1 = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, nK.current = null === e || null === e.memoizedState ? rO : rA, e = n(r, l), n6) {
                        a = 0;
                        do {
                            if (n6 = !1, n5 = 0, 25 <= a) throw Error(f(301));
                            a += 1, n3 = n2 = null, t.updateQueue = null, nK.current = rD, e = n(r, l)
                        } while (n6)
                    }
                    if (nK.current = rj, t = null !== n2 && null !== n2.next, n0 = 0, n3 = n2 = n1 = null, n4 = !1, t) throw Error(f(300));
                    return e
                }

                function rt() {
                    var e = 0 !== n5;
                    return n5 = 0, e
                }

                function rn() {
                    var e = {
                        memoizedState: null,
                        baseState: null,
                        baseQueue: null,
                        queue: null,
                        next: null
                    };
                    return null === n3 ? n1.memoizedState = n3 = e : n3 = n3.next = e, n3
                }

                function rr() {
                    if (null === n2) {
                        var e = n1.alternate;
                        e = null !== e ? e.memoizedState : null
                    } else e = n2.next;
                    var t = null === n3 ? n1.memoizedState : n3.next;
                    if (null !== t) n3 = t, n2 = e;
                    else {
                        if (null === e) throw Error(f(310));
                        e = {
                            memoizedState: (n2 = e).memoizedState,
                            baseState: n2.baseState,
                            baseQueue: n2.baseQueue,
                            queue: n2.queue,
                            next: null
                        }, null === n3 ? n1.memoizedState = n3 = e : n3 = n3.next = e
                    }
                    return n3
                }

                function rl(e, t) {
                    return "function" == typeof t ? t(e) : t
                }

                function ra(e) {
                    var t = rr(),
                        n = t.queue;
                    if (null === n) throw Error(f(311));
                    n.lastRenderedReducer = e;
                    var r = n2,
                        l = r.baseQueue,
                        a = n.pending;
                    if (null !== a) {
                        if (null !== l) {
                            var i = l.next;
                            l.next = a.next, a.next = i
                        }
                        r.baseQueue = l = a, n.pending = null
                    }
                    if (null !== l) {
                        a = l.next, r = r.baseState;
                        var o = i = null,
                            u = null,
                            s = a;
                        do {
                            var c = s.lane;
                            if ((n0 & c) === c) null !== u && (u = u.next = {
                                lane: 0,
                                action: s.action,
                                hasEagerState: s.hasEagerState,
                                eagerState: s.eagerState,
                                next: null
                            }), r = s.hasEagerState ? s.eagerState : e(r, s.action);
                            else {
                                var d = {
                                    lane: c,
                                    action: s.action,
                                    hasEagerState: s.hasEagerState,
                                    eagerState: s.eagerState,
                                    next: null
                                };
                                null === u ? (o = u = d, i = r) : u = u.next = d, n1.lanes |= c, l0 |= c
                            }
                            s = s.next
                        } while (null !== s && s !== a);
                        null === u ? i = r : u.next = o, tO(r, t.memoizedState) || (rZ = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = u, n.lastRenderedState = r
                    }
                    if (null !== (e = n.interleaved)) {
                        l = e;
                        do a = l.lane, n1.lanes |= a, l0 |= a, l = l.next; while (l !== e)
                    } else null === l && (n.lanes = 0);
                    return [t.memoizedState, n.dispatch]
                }

                function ri(e) {
                    var t = rr(),
                        n = t.queue;
                    if (null === n) throw Error(f(311));
                    n.lastRenderedReducer = e;
                    var r = n.dispatch,
                        l = n.pending,
                        a = t.memoizedState;
                    if (null !== l) {
                        n.pending = null;
                        var i = l = l.next;
                        do a = e(a, i.action), i = i.next; while (i !== l);
                        tO(a, t.memoizedState) || (rZ = !0), t.memoizedState = a, null === t.baseQueue && (t.baseState = a), n.lastRenderedState = a
                    }
                    return [a, r]
                }

                function ro() {}

                function ru(e, t) {
                    var n = n1,
                        r = rr(),
                        l = t(),
                        a = !tO(r.memoizedState, l);
                    if (a && (r.memoizedState = l, rZ = !0), r = r.queue, rb(rf.bind(null, n, r, e), [e]), r.getSnapshot !== t || a || null !== n3 && 1 & n3.memoizedState.tag) {
                        if (n.flags |= 2048, rh(9, rc.bind(null, n, r, l, t), void 0, null), null === lV) throw Error(f(349));
                        0 != (30 & n0) || rs(n, t, l)
                    }
                    return l
                }

                function rs(e, t, n) {
                    e.flags |= 16384, e = {
                        getSnapshot: t,
                        value: n
                    }, null === (t = n1.updateQueue) ? (t = {
                        lastEffect: null,
                        stores: null
                    }, n1.updateQueue = t, t.stores = [e]) : null === (n = t.stores) ? t.stores = [e] : n.push(e)
                }

                function rc(e, t, n, r) {
                    t.value = n, t.getSnapshot = r, rd(t) && ac(e, 1, -1)
                }

                function rf(e, t, n) {
                    return n(function() {
                        rd(t) && ac(e, 1, -1)
                    })
                }

                function rd(e) {
                    var t = e.getSnapshot;
                    e = e.value;
                    try {
                        var n = t();
                        return !tO(e, n)
                    } catch (e) {
                        return !0
                    }
                }

                function rp(e) {
                    var t = rn();
                    return "function" == typeof e && (e = e()), t.memoizedState = t.baseState = e, e = {
                        pending: null,
                        interleaved: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: rl,
                        lastRenderedState: e
                    }, t.queue = e, e = e.dispatch = rN.bind(null, n1, e), [t.memoizedState, e]
                }

                function rh(e, t, n, r) {
                    return e = {
                        tag: e,
                        create: t,
                        destroy: n,
                        deps: r,
                        next: null
                    }, null === (t = n1.updateQueue) ? (t = {
                        lastEffect: null,
                        stores: null
                    }, n1.updateQueue = t, t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e
                }

                function rm() {
                    return rr().memoizedState
                }

                function rv(e, t, n, r) {
                    var l = rn();
                    n1.flags |= e, l.memoizedState = rh(1 | t, n, void 0, void 0 === r ? null : r)
                }

                function rg(e, t, n, r) {
                    var l = rr();
                    r = void 0 === r ? null : r;
                    var a = void 0;
                    if (null !== n2) {
                        var i = n2.memoizedState;
                        if (a = i.destroy, null !== r && n9(r, i.deps)) {
                            l.memoizedState = rh(t, n, a, r);
                            return
                        }
                    }
                    n1.flags |= e, l.memoizedState = rh(1 | t, n, a, r)
                }

                function ry(e, t) {
                    return rv(8390656, 8, e, t)
                }

                function rb(e, t) {
                    return rg(2048, 8, e, t)
                }

                function rw(e, t) {
                    return rg(4, 2, e, t)
                }

                function rS(e, t) {
                    return rg(4, 4, e, t)
                }

                function rk(e, t) {
                    return "function" == typeof t ? (t(e = e()), function() {
                        t(null)
                    }) : null != t ? (e = e(), t.current = e, function() {
                        t.current = null
                    }) : void 0
                }

                function rE(e, t, n) {
                    return n = null != n ? n.concat([e]) : null, rg(4, 4, rk.bind(null, t, e), n)
                }

                function r_() {}

                function rx(e, t) {
                    var n = rr();
                    t = void 0 === t ? null : t;
                    var r = n.memoizedState;
                    return null !== r && null !== t && n9(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
                }

                function rC(e, t) {
                    var n = rr();
                    t = void 0 === t ? null : t;
                    var r = n.memoizedState;
                    return null !== r && null !== t && n9(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
                }

                function rP(e, t) {
                    var n = tE;
                    tE = 0 !== n && 4 > n ? n : 4, e(!0);
                    var r = nZ.transition;
                    nZ.transition = {};
                    try {
                        e(!1), t()
                    } finally {
                        tE = n, nZ.transition = r
                    }
                }

                function rT() {
                    return rr().memoizedState
                }

                function rz(e, t, n) {
                    var r = as(e);
                    n = {
                        lane: r,
                        action: n,
                        hasEagerState: !1,
                        eagerState: null,
                        next: null
                    }, rL(e) ? rM(t, n) : (rR(e, t, n), null !== (e = ac(e, r, n = au())) && rI(e, t, r))
                }

                function rN(e, t, n) {
                    var r = as(e),
                        l = {
                            lane: r,
                            action: n,
                            hasEagerState: !1,
                            eagerState: null,
                            next: null
                        };
                    if (rL(e)) rM(t, l);
                    else {
                        rR(e, t, l);
                        var a = e.alternate;
                        if (0 === e.lanes && (null === a || 0 === a.lanes) && null !== (a = t.lastRenderedReducer)) try {
                            var i = t.lastRenderedState,
                                o = a(i, n);
                            if (l.hasEagerState = !0, l.eagerState = o, tO(o, i)) return
                        } catch (e) {} finally {}
                        null !== (e = ac(e, r, n = au())) && rI(e, t, r)
                    }
                }

                function rL(e) {
                    var t = e.alternate;
                    return e === n1 || null !== t && t === n1
                }

                function rM(e, t) {
                    n6 = n4 = !0;
                    var n = e.pending;
                    null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
                }

                function rR(e, t, n) {
                    null !== lV && 0 != (1 & e.mode) && 0 == (2 & lq) ? (null === (e = t.interleaved) ? (n.next = n, null === t0 ? t0 = [t] : t0.push(t)) : (n.next = e.next, e.next = n), t.interleaved = n) : (null === (e = t.pending) ? n.next = n : (n.next = e.next, e.next = n), t.pending = n)
                }

                function rI(e, t, n) {
                    if (0 != (4194240 & n)) {
                        var r = t.lanes;
                        r &= e.pendingLanes, n |= r, t.lanes = n, tk(e, n)
                    }
                }
                var rj = {
                        readContext: tZ,
                        useCallback: n7,
                        useContext: n7,
                        useEffect: n7,
                        useImperativeHandle: n7,
                        useInsertionEffect: n7,
                        useLayoutEffect: n7,
                        useMemo: n7,
                        useReducer: n7,
                        useRef: n7,
                        useState: n7,
                        useDebugValue: n7,
                        useDeferredValue: n7,
                        useTransition: n7,
                        useMutableSource: n7,
                        useSyncExternalStore: n7,
                        useId: n7,
                        unstable_isNewReconciler: !1
                    },
                    rO = {
                        readContext: tZ,
                        useCallback: function(e, t) {
                            return rn().memoizedState = [e, void 0 === t ? null : t], e
                        },
                        useContext: tZ,
                        useEffect: ry,
                        useImperativeHandle: function(e, t, n) {
                            return n = null != n ? n.concat([e]) : null, rv(4194308, 4, rk.bind(null, t, e), n)
                        },
                        useLayoutEffect: function(e, t) {
                            return rv(4194308, 4, e, t)
                        },
                        useInsertionEffect: function(e, t) {
                            return rv(4, 2, e, t)
                        },
                        useMemo: function(e, t) {
                            var n = rn();
                            return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e
                        },
                        useReducer: function(e, t, n) {
                            var r = rn();
                            return t = void 0 !== n ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                                pending: null,
                                interleaved: null,
                                lanes: 0,
                                dispatch: null,
                                lastRenderedReducer: e,
                                lastRenderedState: t
                            }, r.queue = e, e = e.dispatch = rz.bind(null, n1, e), [r.memoizedState, e]
                        },
                        useRef: function(e) {
                            return e = {
                                current: e
                            }, rn().memoizedState = e
                        },
                        useState: rp,
                        useDebugValue: r_,
                        useDeferredValue: function(e) {
                            var t = rp(e),
                                n = t[0],
                                r = t[1];
                            return ry(function() {
                                var t = nZ.transition;
                                nZ.transition = {};
                                try {
                                    r(e)
                                } finally {
                                    nZ.transition = t
                                }
                            }, [e]), n
                        },
                        useTransition: function() {
                            var e = rp(!1),
                                t = e[0];
                            return e = rP.bind(null, e[1]), rn().memoizedState = e, [t, e]
                        },
                        useMutableSource: function() {},
                        useSyncExternalStore: function(e, t, n) {
                            var r = n1,
                                l = rn();
                            if (nk) {
                                if (void 0 === n) throw Error(f(407));
                                n = n()
                            } else {
                                if (n = t(), null === lV) throw Error(f(349));
                                0 != (30 & n0) || rs(r, t, n)
                            }
                            l.memoizedState = n;
                            var a = {
                                value: n,
                                getSnapshot: t
                            };
                            return l.queue = a, ry(rf.bind(null, r, a, e), [e]), r.flags |= 2048, rh(9, rc.bind(null, r, a, n, t), void 0, null), n
                        },
                        useId: function() {
                            var e = rn(),
                                t = lV.identifierPrefix;
                            if (nk) {
                                var n = nm,
                                    r = nh;
                                t = ":" + t + "R" + (n = (r & ~(1 << 32 - td(r) - 1)).toString(32) + n), 0 < (n = n5++) && (t += "H" + n.toString(32)), t += ":"
                            } else t = ":" + t + "r" + (n = n8++).toString(32) + ":";
                            return e.memoizedState = t
                        },
                        unstable_isNewReconciler: !1
                    },
                    rA = {
                        readContext: tZ,
                        useCallback: rx,
                        useContext: tZ,
                        useEffect: rb,
                        useImperativeHandle: rE,
                        useInsertionEffect: rw,
                        useLayoutEffect: rS,
                        useMemo: rC,
                        useReducer: ra,
                        useRef: rm,
                        useState: function() {
                            return ra(rl)
                        },
                        useDebugValue: r_,
                        useDeferredValue: function(e) {
                            var t = ra(rl),
                                n = t[0],
                                r = t[1];
                            return rb(function() {
                                var t = nZ.transition;
                                nZ.transition = {};
                                try {
                                    r(e)
                                } finally {
                                    nZ.transition = t
                                }
                            }, [e]), n
                        },
                        useTransition: function() {
                            return [ra(rl)[0], rr().memoizedState]
                        },
                        useMutableSource: ro,
                        useSyncExternalStore: ru,
                        useId: rT,
                        unstable_isNewReconciler: !1
                    },
                    rD = {
                        readContext: tZ,
                        useCallback: rx,
                        useContext: tZ,
                        useEffect: rb,
                        useImperativeHandle: rE,
                        useInsertionEffect: rw,
                        useLayoutEffect: rS,
                        useMemo: rC,
                        useReducer: ri,
                        useRef: rm,
                        useState: function() {
                            return ri(rl)
                        },
                        useDebugValue: r_,
                        useDeferredValue: function(e) {
                            var t = ri(rl),
                                n = t[0],
                                r = t[1];
                            return rb(function() {
                                var t = nZ.transition;
                                nZ.transition = {};
                                try {
                                    r(e)
                                } finally {
                                    nZ.transition = t
                                }
                            }, [e]), n
                        },
                        useTransition: function() {
                            return [ri(rl)[0], rr().memoizedState]
                        },
                        useMutableSource: ro,
                        useSyncExternalStore: ru,
                        useId: rT,
                        unstable_isNewReconciler: !1
                    };

                function rF(e, t) {
                    try {
                        var n = "",
                            r = t;
                        do n += function(e) {
                            switch (e.tag) {
                                case 5:
                                    return e2(e.type);
                                case 16:
                                    return e2("Lazy");
                                case 13:
                                    return e2("Suspense");
                                case 19:
                                    return e2("SuspenseList");
                                case 0:
                                case 2:
                                case 15:
                                    return e = e4(e.type, !1);
                                case 11:
                                    return e = e4(e.type.render, !1);
                                case 1:
                                    return e = e4(e.type, !0);
                                default:
                                    return ""
                            }
                        }(r), r = r.return; while (r);
                        var l = n
                    } catch (e) {
                        l = "\nError generating stack: " + e.message + "\n" + e.stack
                    }
                    return {
                        value: e,
                        source: t,
                        stack: l
                    }
                }

                function rU(e, t) {
                    try {
                        console.error(t.value)
                    } catch (e) {
                        setTimeout(function() {
                            throw e
                        })
                    }
                }
                var rH = "function" == typeof WeakMap ? WeakMap : Map;

                function rQ(e, t, n) {
                    (n = t4(-1, n)).tag = 3, n.payload = {
                        element: null
                    };
                    var r = t.value;
                    return n.callback = function() {
                        l7 || (l7 = !0, l9 = r), rU(e, t)
                    }, n
                }

                function rB(e, t, n) {
                    (n = t4(-1, n)).tag = 3;
                    var r = e.type.getDerivedStateFromError;
                    if ("function" == typeof r) {
                        var l = t.value;
                        n.payload = function() {
                            return r(l)
                        }, n.callback = function() {
                            rU(e, t)
                        }
                    }
                    var a = e.stateNode;
                    return null !== a && "function" == typeof a.componentDidCatch && (n.callback = function() {
                        rU(e, t), "function" != typeof r && (null === ae ? ae = new Set([this]) : ae.add(this));
                        var n = t.stack;
                        this.componentDidCatch(t.value, {
                            componentStack: null !== n ? n : ""
                        })
                    }), n
                }

                function rW(e, t, n) {
                    var r = e.pingCache;
                    if (null === r) {
                        r = e.pingCache = new rH;
                        var l = new Set;
                        r.set(t, l)
                    } else void 0 === (l = r.get(t)) && (l = new Set, r.set(t, l));
                    l.has(n) || (l.add(n), e = aL.bind(null, e, t, n), t.then(e, e))
                }

                function r$(e) {
                    do {
                        var t;
                        if ((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t) return e;
                        e = e.return
                    } while (null !== e);
                    return null
                }

                function rq(e, t, n, r, l) {
                    return 0 == (1 & e.mode) ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, 1 === n.tag && (null === n.alternate ? n.tag = 17 : ((t = t4(-1, 1)).tag = 2, t6(n, t))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = l, e)
                }

                function rV(e) {
                    e.flags |= 4
                }

                function rY(e, t) {
                    if (null !== e && e.child === t.child) return !0;
                    if (0 != (16 & t.flags)) return !1;
                    for (e = t.child; null !== e;) {
                        if (0 != (12854 & e.flags) || 0 != (12854 & e.subtreeFlags)) return !1;
                        e = e.sibling
                    }
                    return !0
                }
                if (X) t = function(e, t) {
                    for (var n = t.child; null !== n;) {
                        if (5 === n.tag || 6 === n.tag) H(e, n.stateNode);
                        else if (4 !== n.tag && null !== n.child) {
                            n.child.return = n, n = n.child;
                            continue
                        }
                        if (n === t) break;
                        for (; null === n.sibling;) {
                            if (null === n.return || n.return === t) return;
                            n = n.return
                        }
                        n.sibling.return = n.return, n = n.sibling
                    }
                }, r = function() {}, l = function(e, t, n, r, l) {
                    (e = e.memoizedProps) !== r && (n = B(t.stateNode, n, e, r, l, nB(nU.current)), (t.updateQueue = n) && rV(t))
                }, a = function(e, t, n, r) {
                    n !== r && rV(t)
                };
                else if (J) {
                    t = function(e, n, r, l) {
                        for (var a = n.child; null !== a;) {
                            if (5 === a.tag) {
                                var i = a.stateNode;
                                r && l && (i = eR(i, a.type, a.memoizedProps, a)), H(e, i)
                            } else if (6 === a.tag) i = a.stateNode, r && l && (i = eI(i, a.memoizedProps, a)), H(e, i);
                            else if (4 !== a.tag) {
                                if (22 === a.tag && null !== a.memoizedState) null !== (i = a.child) && (i.return = a), t(e, a, !0, !0);
                                else if (null !== a.child) {
                                    a.child.return = a, a = a.child;
                                    continue
                                }
                            }
                            if (a === n) break;
                            for (; null === a.sibling;) {
                                if (null === a.return || a.return === n) return;
                                a = a.return
                            }
                            a.sibling.return = a.return, a = a.sibling
                        }
                    };
                    var rG = function(e, t, n, r) {
                        for (var l = t.child; null !== l;) {
                            if (5 === l.tag) {
                                var a = l.stateNode;
                                n && r && (a = eR(a, l.type, l.memoizedProps, l)), eN(e, a)
                            } else if (6 === l.tag) a = l.stateNode, n && r && (a = eI(a, l.memoizedProps, l)), eN(e, a);
                            else if (4 !== l.tag) {
                                if (22 === l.tag && null !== l.memoizedState) null !== (a = l.child) && (a.return = l), rG(e, l, !0, !0);
                                else if (null !== l.child) {
                                    l.child.return = l, l = l.child;
                                    continue
                                }
                            }
                            if (l === t) break;
                            for (; null === l.sibling;) {
                                if (null === l.return || l.return === t) return;
                                l = l.return
                            }
                            l.sibling.return = l.return, l = l.sibling
                        }
                    };
                    r = function(e, t) {
                        var n = t.stateNode;
                        if (!rY(e, t)) {
                            var r = ez(e = n.containerInfo);
                            rG(r, t, !1, !1), n.pendingChildren = r, rV(t), eL(e, r)
                        }
                    }, l = function(e, n, r, l, a) {
                        var i = e.stateNode,
                            o = e.memoizedProps;
                        if ((e = rY(e, n)) && o === l) n.stateNode = i;
                        else {
                            var u = n.stateNode,
                                s = nB(nU.current),
                                c = null;
                            o !== l && (c = B(u, r, o, l, a, s)), e && null === c ? n.stateNode = i : (Q(i = eT(i, c, r, o, l, n, e, u), r, l, a, s) && rV(n), n.stateNode = i, e ? rV(n) : t(i, n, !1, !1))
                        }
                    }, a = function(e, t, n, r) {
                        n !== r ? (e = nB(nQ.current), n = nB(nU.current), t.stateNode = $(r, e, n, t), rV(t)) : t.stateNode = e.stateNode
                    }
                } else r = function() {}, l = function() {}, a = function() {};

                function rX(e, t) {
                    if (!nk) switch (e.tailMode) {
                        case "hidden":
                            t = e.tail;
                            for (var n = null; null !== t;) null !== t.alternate && (n = t), t = t.sibling;
                            null === n ? e.tail = null : n.sibling = null;
                            break;
                        case "collapsed":
                            n = e.tail;
                            for (var r = null; null !== n;) null !== n.alternate && (r = n), n = n.sibling;
                            null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null
                    }
                }

                function rJ(e) {
                    var t = null !== e.alternate && e.alternate.child === e.child,
                        n = 0,
                        r = 0;
                    if (t)
                        for (var l = e.child; null !== l;) n |= l.lanes | l.childLanes, r |= 14680064 & l.subtreeFlags, r |= 14680064 & l.flags, l.return = e, l = l.sibling;
                    else
                        for (l = e.child; null !== l;) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
                    return e.subtreeFlags |= r, e.childLanes = n, t
                }
                var rK = d.ReactCurrentOwner,
                    rZ = !1;

                function r0(e, t, n, r) {
                    t.child = null === e ? nD(t, null, n, r) : nA(t, e.child, n, r)
                }

                function r1(e, t, n, r, l) {
                    n = n.render;
                    var a = t.ref;
                    return (tK(t, l), r = re(e, t, n, r, a, l), n = rt(), null === e || rZ) ? (nk && n && ny(t), t.flags |= 1, r0(e, t, r, l), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, ls(e, t, l))
                }

                function r2(e, t, n, r, l) {
                    if (null === e) {
                        var a = n.type;
                        return "function" != typeof a || aA(a) || void 0 !== a.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = aF(n.type, null, r, t, t.mode, l)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = a, r3(e, t, a, r, l))
                    }
                    if (a = e.child, 0 == (e.lanes & l)) {
                        var i = a.memoizedProps;
                        if ((n = null !== (n = n.compare) ? n : tQ)(i, r) && e.ref === t.ref) return ls(e, t, l)
                    }
                    return t.flags |= 1, (e = aD(a, r)).ref = t.ref, e.return = t, t.child = e
                }

                function r3(e, t, n, r, l) {
                    if (null !== e && tQ(e.memoizedProps, r) && e.ref === t.ref) {
                        if (rZ = !1, 0 == (e.lanes & l)) return t.lanes = e.lanes, ls(e, t, l);
                        0 != (131072 & e.flags) && (rZ = !0)
                    }
                    return r5(e, t, n, r, l)
                }

                function r4(e, t, n) {
                    var r = t.pendingProps,
                        l = r.children,
                        a = null !== e ? e.memoizedState : null;
                    if ("hidden" === r.mode) {
                        if (0 == (1 & t.mode)) t.memoizedState = {
                            baseLanes: 0,
                            cachePool: null
                        }, te(lJ, lX), lX |= n;
                        else {
                            if (0 == (1073741824 & n)) return e = null !== a ? a.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                                baseLanes: e,
                                cachePool: null
                            }, t.updateQueue = null, te(lJ, lX), lX |= e, null;
                            t.memoizedState = {
                                baseLanes: 0,
                                cachePool: null
                            }, r = null !== a ? a.baseLanes : n, te(lJ, lX), lX |= r
                        }
                    } else null !== a ? (r = a.baseLanes | n, t.memoizedState = null) : r = n, te(lJ, lX), lX |= r;
                    return r0(e, t, l, n), t.child
                }

                function r6(e, t) {
                    var n = t.ref;
                    (null === e && null !== n || null !== e && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
                }

                function r5(e, t, n, r, l) {
                    var a = ti(n) ? tl : tn.current;
                    return (a = ta(t, a), tK(t, l), n = re(e, t, n, r, a, l), r = rt(), null === e || rZ) ? (nk && r && ny(t), t.flags |= 1, r0(e, t, n, l), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, ls(e, t, l))
                }

                function r8(e, t, n, r, l) {
                    if (ti(n)) {
                        var a = !0;
                        tc(t)
                    } else a = !1;
                    if (tK(t, l), null === t.stateNode) null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2), nl(t, n, r), ni(t, n, r, l), r = !0;
                    else if (null === e) {
                        var i = t.stateNode,
                            o = t.memoizedProps;
                        i.props = o;
                        var u = i.context,
                            s = n.contextType;
                        s = "object" == typeof s && null !== s ? tZ(s) : ta(t, s = ti(n) ? tl : tn.current);
                        var c = n.getDerivedStateFromProps,
                            f = "function" == typeof c || "function" == typeof i.getSnapshotBeforeUpdate;
                        f || "function" != typeof i.UNSAFE_componentWillReceiveProps && "function" != typeof i.componentWillReceiveProps || (o !== r || u !== s) && na(t, i, r, s), t1 = !1;
                        var d = t.memoizedState;
                        i.state = d, t7(t, r, i, l), u = t.memoizedState, o !== r || d !== u || tr.current || t1 ? ("function" == typeof c && (nt(t, n, c, r), u = t.memoizedState), (o = t1 || nr(t, n, o, r, d, u, s)) ? (f || "function" != typeof i.UNSAFE_componentWillMount && "function" != typeof i.componentWillMount || ("function" == typeof i.componentWillMount && i.componentWillMount(), "function" == typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount()), "function" == typeof i.componentDidMount && (t.flags |= 4194308)) : ("function" == typeof i.componentDidMount && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), i.props = r, i.state = u, i.context = s, r = o) : ("function" == typeof i.componentDidMount && (t.flags |= 4194308), r = !1)
                    } else {
                        i = t.stateNode, t3(e, t), o = t.memoizedProps, s = t.type === t.elementType ? o : tB(t.type, o), i.props = s, f = t.pendingProps, d = i.context, u = "object" == typeof(u = n.contextType) && null !== u ? tZ(u) : ta(t, u = ti(n) ? tl : tn.current);
                        var p = n.getDerivedStateFromProps;
                        (c = "function" == typeof p || "function" == typeof i.getSnapshotBeforeUpdate) || "function" != typeof i.UNSAFE_componentWillReceiveProps && "function" != typeof i.componentWillReceiveProps || (o !== f || d !== u) && na(t, i, r, u), t1 = !1, d = t.memoizedState, i.state = d, t7(t, r, i, l);
                        var h = t.memoizedState;
                        o !== f || d !== h || tr.current || t1 ? ("function" == typeof p && (nt(t, n, p, r), h = t.memoizedState), (s = t1 || nr(t, n, s, r, d, h, u) || !1) ? (c || "function" != typeof i.UNSAFE_componentWillUpdate && "function" != typeof i.componentWillUpdate || ("function" == typeof i.componentWillUpdate && i.componentWillUpdate(r, h, u), "function" == typeof i.UNSAFE_componentWillUpdate && i.UNSAFE_componentWillUpdate(r, h, u)), "function" == typeof i.componentDidUpdate && (t.flags |= 4), "function" == typeof i.getSnapshotBeforeUpdate && (t.flags |= 1024)) : ("function" != typeof i.componentDidUpdate || o === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), "function" != typeof i.getSnapshotBeforeUpdate || o === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = h), i.props = r, i.state = h, i.context = u, r = s) : ("function" != typeof i.componentDidUpdate || o === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), "function" != typeof i.getSnapshotBeforeUpdate || o === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), r = !1)
                    }
                    return r7(e, t, n, r, a, l)
                }

                function r7(e, t, n, r, l, a) {
                    r6(e, t);
                    var i = 0 != (128 & t.flags);
                    if (!r && !i) return l && tf(t, n, !1), ls(e, t, a);
                    r = t.stateNode, rK.current = t;
                    var o = i && "function" != typeof n.getDerivedStateFromError ? null : r.render();
                    return t.flags |= 1, null !== e && i ? (t.child = nA(t, e.child, null, a), t.child = nA(t, null, o, a)) : r0(e, t, o, a), t.memoizedState = r.state, l && tf(t, n, !0), t.child
                }

                function r9(e) {
                    var t = e.stateNode;
                    t.pendingContext ? tu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && tu(e, t.context, !1), nW(e, t.containerInfo)
                }

                function le(e, t, n, r, l) {
                    return nL(), nM(l), t.flags |= 256, r0(e, t, n, r), t.child
                }
                var lt = {
                    dehydrated: null,
                    treeContext: null,
                    retryLane: 0
                };

                function ln(e) {
                    return {
                        baseLanes: e,
                        cachePool: null
                    }
                }

                function lr(e, t, n) {
                    var r, l, a, i, o, u, s, c, d, p, h, m, v, g, y = t.pendingProps,
                        b = nY.current,
                        w = !1,
                        S = 0 != (128 & t.flags);
                    if ((g = S) || (g = (null === e || null !== e.memoizedState) && 0 != (2 & b)), g ? (w = !0, t.flags &= -129) : (null === e || null !== e.memoizedState) && (b |= 1), te(nY, 1 & b), null === e) return (nT(t), null !== (e = t.memoizedState) && null !== (e = e.dehydrated)) ? (0 == (1 & t.mode) ? t.lanes = 1 : eF(e) ? t.lanes = 8 : t.lanes = 1073741824, null) : (b = y.children, e = y.fallback, w ? (y = t.mode, w = t.child, b = {
                        mode: "hidden",
                        children: b
                    }, 0 == (1 & y) && null !== w ? (w.childLanes = 0, w.pendingProps = b) : w = aH(b, y, 0, null), e = aU(e, y, n, null), w.return = t, e.return = t, w.sibling = e, t.child = w, t.child.memoizedState = ln(n), t.memoizedState = lt, e) : ll(t, b));
                    if (null !== (b = e.memoizedState) && null !== (g = b.dehydrated)) {
                        if (S) return 256 & t.flags ? (t.flags &= -257, la(e, t, n, Error(f(422)))) : null !== t.memoizedState ? (t.child = e.child, t.flags |= 128, null) : (w = y.fallback, b = t.mode, y = aH({
                            mode: "visible",
                            children: y.children
                        }, b, 0, null), w = aU(w, b, n, null), w.flags |= 2, y.return = t, w.return = t, y.sibling = w, t.child = y, 0 != (1 & t.mode) && nA(t, e.child, null, n), t.child.memoizedState = ln(n), t.memoizedState = lt, w);
                        if (0 == (1 & t.mode)) t = la(e, t, n, null);
                        else if (eF(g)) t = la(e, t, n, Error(f(419)));
                        else if (y = 0 != (n & e.childLanes), rZ || y) {
                            if (null !== (y = lV)) {
                                switch (n & -n) {
                                    case 4:
                                        w = 2;
                                        break;
                                    case 16:
                                        w = 8;
                                        break;
                                    case 64:
                                    case 128:
                                    case 256:
                                    case 512:
                                    case 1024:
                                    case 2048:
                                    case 4096:
                                    case 8192:
                                    case 16384:
                                    case 32768:
                                    case 65536:
                                    case 131072:
                                    case 262144:
                                    case 524288:
                                    case 1048576:
                                    case 2097152:
                                    case 4194304:
                                    case 8388608:
                                    case 16777216:
                                    case 33554432:
                                    case 67108864:
                                        w = 32;
                                        break;
                                    case 536870912:
                                        w = 268435456;
                                        break;
                                    default:
                                        w = 0
                                }
                                0 !== (y = 0 != (w & (y.suspendedLanes | n)) ? 0 : w) && y !== b.retryLane && (b.retryLane = y, ac(e, y, -1))
                            }
                            aE(), t = la(e, t, n, Error(f(421)))
                        } else eD(g) ? (t.flags |= 128, t.child = e.child, eU(g, t = aR.bind(null, e)), t = null) : (n = b.treeContext, K && (nS = eW(g), nw = t, nk = !0, n_ = null, nE = !1, null !== n && (nf[nd++] = nh, nf[nd++] = nm, nf[nd++] = np, nh = n.id, nm = n.overflow, np = t)), t = ll(t, t.pendingProps.children), t.flags |= 4096);
                        return t
                    }
                    return w ? (r = e, l = t, a = y.children, i = y.fallback, o = n, u = l.mode, s = (r = r.child).sibling, c = {
                        mode: "hidden",
                        children: a
                    }, 0 == (1 & u) && l.child !== r ? ((a = l.child).childLanes = 0, a.pendingProps = c, l.deletions = null) : (a = aD(r, c)).subtreeFlags = 14680064 & r.subtreeFlags, null !== s ? i = aD(s, i) : (i = aU(i, u, o, null), i.flags |= 2), i.return = l, a.return = l, a.sibling = i, l.child = a, y = i, w = t.child, b = e.child.memoizedState, w.memoizedState = null === b ? ln(n) : {
                        baseLanes: b.baseLanes | n,
                        cachePool: null
                    }, w.childLanes = e.childLanes & ~n, t.memoizedState = lt, y) : (d = e, p = t, h = y.children, m = n, v = d.child, d = v.sibling, h = aD(v, {
                        mode: "visible",
                        children: h
                    }), 0 == (1 & p.mode) && (h.lanes = m), h.return = p, h.sibling = null, null !== d && (null === (m = p.deletions) ? (p.deletions = [d], p.flags |= 16) : m.push(d)), n = p.child = h, t.memoizedState = null, n)
                }

                function ll(e, t) {
                    return (t = aH({
                        mode: "visible",
                        children: t
                    }, e.mode, 0, null)).return = e, e.child = t
                }

                function la(e, t, n, r) {
                    return null !== r && nM(r), nA(t, e.child, null, n), e = ll(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
                }

                function li(e, t, n) {
                    e.lanes |= t;
                    var r = e.alternate;
                    null !== r && (r.lanes |= t), tJ(e.return, t, n)
                }

                function lo(e, t, n, r, l) {
                    var a = e.memoizedState;
                    null === a ? e.memoizedState = {
                        isBackwards: t,
                        rendering: null,
                        renderingStartTime: 0,
                        last: r,
                        tail: n,
                        tailMode: l
                    } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = n, a.tailMode = l)
                }

                function lu(e, t, n) {
                    var r = t.pendingProps,
                        l = r.revealOrder,
                        a = r.tail;
                    if (r0(e, t, r.children, n), 0 != (2 & (r = nY.current))) r = 1 & r | 2, t.flags |= 128;
                    else {
                        if (null !== e && 0 != (128 & e.flags)) e: for (e = t.child; null !== e;) {
                            if (13 === e.tag) null !== e.memoizedState && li(e, n, t);
                            else if (19 === e.tag) li(e, n, t);
                            else if (null !== e.child) {
                                e.child.return = e, e = e.child;
                                continue
                            }
                            if (e === t) break e;
                            for (; null === e.sibling;) {
                                if (null === e.return || e.return === t) break e;
                                e = e.return
                            }
                            e.sibling.return = e.return, e = e.sibling
                        }
                        r &= 1
                    }
                    if (te(nY, r), 0 == (1 & t.mode)) t.memoizedState = null;
                    else switch (l) {
                        case "forwards":
                            for (l = null, n = t.child; null !== n;) null !== (e = n.alternate) && null === nG(e) && (l = n), n = n.sibling;
                            null === (n = l) ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), lo(t, !1, l, n, a);
                            break;
                        case "backwards":
                            for (n = null, l = t.child, t.child = null; null !== l;) {
                                if (null !== (e = l.alternate) && null === nG(e)) {
                                    t.child = l;
                                    break
                                }
                                e = l.sibling, l.sibling = n, n = l, l = e
                            }
                            lo(t, !0, n, null, a);
                            break;
                        case "together":
                            lo(t, !1, null, null, void 0);
                            break;
                        default:
                            t.memoizedState = null
                    }
                    return t.child
                }

                function ls(e, t, n) {
                    if (null !== e && (t.dependencies = e.dependencies), l0 |= t.lanes, 0 == (n & t.childLanes)) return null;
                    if (null !== e && t.child !== e.child) throw Error(f(153));
                    if (null !== t.child) {
                        for (n = aD(e = t.child, e.pendingProps), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = aD(e, e.pendingProps)).return = t;
                        n.sibling = null
                    }
                    return t.child
                }
                var lc = !1,
                    lf = !1,
                    ld = "function" == typeof WeakSet ? WeakSet : Set,
                    lp = null;

                function lh(e, t) {
                    var n = e.ref;
                    if (null !== n) {
                        if ("function" == typeof n) try {
                            n(null)
                        } catch (n) {
                            aN(e, t, n)
                        } else n.current = null
                    }
                }

                function lm(e, t, n) {
                    try {
                        n()
                    } catch (n) {
                        aN(e, t, n)
                    }
                }
                var lv = !1;

                function lg(e, t, n) {
                    var r = t.updateQueue;
                    if (null !== (r = null !== r ? r.lastEffect : null)) {
                        var l = r = r.next;
                        do {
                            if ((l.tag & e) === e) {
                                var a = l.destroy;
                                l.destroy = void 0, void 0 !== a && lm(t, n, a)
                            }
                            l = l.next
                        } while (l !== r)
                    }
                }

                function ly(e, t) {
                    if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
                        var n = t = t.next;
                        do {
                            if ((n.tag & e) === e) {
                                var r = n.create;
                                n.destroy = r()
                            }
                            n = n.next
                        } while (n !== t)
                    }
                }

                function lb(e) {
                    var t = e.ref;
                    if (null !== t) {
                        var n = e.stateNode;
                        e = 5 === e.tag ? j(n) : n, "function" == typeof t ? t(e) : t.current = e
                    }
                }

                function lw(e, t, n) {
                    if (tj && "function" == typeof tj.onCommitFiberUnmount) try {
                        tj.onCommitFiberUnmount(tI, t)
                    } catch (e) {}
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
                                var r = e = e.next;
                                do {
                                    var l = r,
                                        a = l.destroy;
                                    l = l.tag, void 0 !== a && (0 != (2 & l) ? lm(t, n, a) : 0 != (4 & l) && lm(t, n, a)), r = r.next
                                } while (r !== e)
                            }
                            break;
                        case 1:
                            if (lh(t, n), "function" == typeof(e = t.stateNode).componentWillUnmount) try {
                                e.props = t.memoizedProps, e.state = t.memoizedState, e.componentWillUnmount()
                            } catch (e) {
                                aN(t, n, e)
                            }
                            break;
                        case 5:
                            lh(t, n);
                            break;
                        case 4:
                            X ? lx(e, t, n) : J && J && (n = ez(t = t.stateNode.containerInfo), eM(t, n))
                    }
                }

                function lS(e, t, n) {
                    for (var r = t;;)
                        if (lw(e, r, n), null === r.child || X && 4 === r.tag) {
                            if (r === t) break;
                            for (; null === r.sibling;) {
                                if (null === r.return || r.return === t) return;
                                r = r.return
                            }
                            r.sibling.return = r.return, r = r.sibling
                        } else r.child.return = r, r = r.child
                }

                function lk(e) {
                    return 5 === e.tag || 3 === e.tag || 4 === e.tag
                }

                function lE(e) {
                    e: for (;;) {
                        for (; null === e.sibling;) {
                            if (null === e.return || lk(e.return)) return null;
                            e = e.return
                        }
                        for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag;) {
                            if (2 & e.flags || null === e.child || 4 === e.tag) continue e;
                            e.child.return = e, e = e.child
                        }
                        if (!(2 & e.flags)) return e.stateNode
                    }
                }

                function l_(e) {
                    if (X) {
                        e: {
                            for (var t = e.return; null !== t;) {
                                if (lk(t)) break e;
                                t = t.return
                            }
                            throw Error(f(160))
                        }
                        var n = t;
                        switch (n.tag) {
                            case 5:
                                t = n.stateNode, 32 & n.flags && (ek(t), n.flags &= -33), n = lE(e),
                                    function e(t, n, r) {
                                        var l = t.tag;
                                        if (5 === l || 6 === l) t = t.stateNode, n ? ey(r, t, n) : ep(r, t);
                                        else if (4 !== l && null !== (t = t.child))
                                            for (e(t, n, r), t = t.sibling; null !== t;) e(t, n, r), t = t.sibling
                                    }(e, n, t);
                                break;
                            case 3:
                            case 4:
                                t = n.stateNode.containerInfo, n = lE(e),
                                    function e(t, n, r) {
                                        var l = t.tag;
                                        if (5 === l || 6 === l) t = t.stateNode, n ? eb(r, t, n) : eh(r, t);
                                        else if (4 !== l && null !== (t = t.child))
                                            for (e(t, n, r), t = t.sibling; null !== t;) e(t, n, r), t = t.sibling
                                    }(e, n, t);
                                break;
                            default:
                                throw Error(f(161))
                        }
                    }
                }

                function lx(e, t, n) {
                    for (var r, l, a = t, i = !1;;) {
                        if (!i) {
                            i = a.return;
                            e: for (;;) {
                                if (null === i) throw Error(f(160));
                                switch (r = i.stateNode, i.tag) {
                                    case 5:
                                        l = !1;
                                        break e;
                                    case 3:
                                    case 4:
                                        r = r.containerInfo, l = !0;
                                        break e
                                }
                                i = i.return
                            }
                            i = !0
                        }
                        if (5 === a.tag || 6 === a.tag) lS(e, a, n), l ? eS(r, a.stateNode) : ew(r, a.stateNode);
                        else if (18 === a.tag) l ? eK(r, a.stateNode) : eJ(r, a.stateNode);
                        else if (4 === a.tag) {
                            if (null !== a.child) {
                                r = a.stateNode.containerInfo, l = !0, a.child.return = a, a = a.child;
                                continue
                            }
                        } else if (lw(e, a, n), null !== a.child) {
                            a.child.return = a, a = a.child;
                            continue
                        }
                        if (a === t) break;
                        for (; null === a.sibling;) {
                            if (null === a.return || a.return === t) return;
                            4 === (a = a.return).tag && (i = !1)
                        }
                        a.sibling.return = a.return, a = a.sibling
                    }
                }

                function lC(e, t) {
                    if (X) {
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 14:
                            case 15:
                                lg(3, t, t.return), ly(3, t), lg(5, t, t.return);
                                return;
                            case 1:
                            case 12:
                            case 17:
                                return;
                            case 5:
                                var n = t.stateNode;
                                if (null != n) {
                                    var r = t.memoizedProps;
                                    e = null !== e ? e.memoizedProps : r;
                                    var l = t.type,
                                        a = t.updateQueue;
                                    t.updateQueue = null, null !== a && eg(n, a, l, e, r, t)
                                }
                                return;
                            case 6:
                                if (null === t.stateNode) throw Error(f(162));
                                n = t.memoizedProps, em(t.stateNode, null !== e ? e.memoizedProps : n, n);
                                return;
                            case 3:
                                K && null !== e && e.memoizedState.isDehydrated && eG(t.stateNode.containerInfo);
                                return;
                            case 13:
                            case 19:
                                lP(t);
                                return
                        }
                        throw Error(f(163))
                    }
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            lg(3, t, t.return), ly(3, t), lg(5, t, t.return);
                            return;
                        case 12:
                        case 22:
                        case 23:
                            return;
                        case 13:
                        case 19:
                            lP(t);
                            return;
                        case 3:
                            K && null !== e && e.memoizedState.isDehydrated && eG(t.stateNode.containerInfo)
                    }
                    e: if (J) {
                        switch (t.tag) {
                            case 1:
                            case 5:
                            case 6:
                                break e;
                            case 3:
                            case 4:
                                eM((t = t.stateNode).containerInfo, t.pendingChildren);
                                break e
                        }
                        throw Error(f(163))
                    }
                }

                function lP(e) {
                    var t = e.updateQueue;
                    if (null !== t) {
                        e.updateQueue = null;
                        var n = e.stateNode;
                        null === n && (n = e.stateNode = new ld), t.forEach(function(t) {
                            var r = aI.bind(null, e, t);
                            n.has(t) || (n.add(t), t.then(r, r))
                        })
                    }
                }

                function lT(e) {
                    for (; null !== lp;) {
                        var t = lp;
                        if (0 != (8772 & t.flags)) {
                            var n = t.alternate;
                            try {
                                if (0 != (8772 & t.flags)) switch (t.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        lf || ly(5, t);
                                        break;
                                    case 1:
                                        var r = t.stateNode;
                                        if (4 & t.flags && !lf) {
                                            if (null === n) r.componentDidMount();
                                            else {
                                                var l = t.elementType === t.type ? n.memoizedProps : tB(t.type, n.memoizedProps);
                                                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                                            }
                                        }
                                        var a = t.updateQueue;
                                        null !== a && t9(t, a, r);
                                        break;
                                    case 3:
                                        var i = t.updateQueue;
                                        if (null !== i) {
                                            if (n = null, null !== t.child) switch (t.child.tag) {
                                                case 5:
                                                    n = j(t.child.stateNode);
                                                    break;
                                                case 1:
                                                    n = t.child.stateNode
                                            }
                                            t9(t, i, n)
                                        }
                                        break;
                                    case 5:
                                        var o = t.stateNode;
                                        null === n && 4 & t.flags && ev(o, t.type, t.memoizedProps, t);
                                        break;
                                    case 6:
                                    case 4:
                                    case 12:
                                    case 19:
                                    case 17:
                                    case 21:
                                    case 22:
                                    case 23:
                                        break;
                                    case 13:
                                        if (K && null === t.memoizedState) {
                                            var u = t.alternate;
                                            if (null !== u) {
                                                var s = u.memoizedState;
                                                if (null !== s) {
                                                    var c = s.dehydrated;
                                                    null !== c && eX(c)
                                                }
                                            }
                                        }
                                        break;
                                    default:
                                        throw Error(f(163))
                                }
                                lf || 512 & t.flags && lb(t)
                            } catch (e) {
                                aN(t, t.return, e)
                            }
                        }
                        if (t === e) {
                            lp = null;
                            break
                        }
                        if (null !== (n = t.sibling)) {
                            n.return = t.return, lp = n;
                            break
                        }
                        lp = t.return
                    }
                }

                function lz(e) {
                    for (; null !== lp;) {
                        var t = lp;
                        if (t === e) {
                            lp = null;
                            break
                        }
                        var n = t.sibling;
                        if (null !== n) {
                            n.return = t.return, lp = n;
                            break
                        }
                        lp = t.return
                    }
                }

                function lN(e) {
                    for (; null !== lp;) {
                        var t = lp;
                        try {
                            switch (t.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    var n = t.return;
                                    try {
                                        ly(4, t)
                                    } catch (e) {
                                        aN(t, n, e)
                                    }
                                    break;
                                case 1:
                                    var r = t.stateNode;
                                    if ("function" == typeof r.componentDidMount) {
                                        var l = t.return;
                                        try {
                                            r.componentDidMount()
                                        } catch (e) {
                                            aN(t, l, e)
                                        }
                                    }
                                    var a = t.return;
                                    try {
                                        lb(t)
                                    } catch (e) {
                                        aN(t, a, e)
                                    }
                                    break;
                                case 5:
                                    var i = t.return;
                                    try {
                                        lb(t)
                                    } catch (e) {
                                        aN(t, i, e)
                                    }
                            }
                        } catch (e) {
                            aN(t, t.return, e)
                        }
                        if (t === e) {
                            lp = null;
                            break
                        }
                        var o = t.sibling;
                        if (null !== o) {
                            o.return = t.return, lp = o;
                            break
                        }
                        lp = t.return
                    }
                }
                var lL = 0,
                    lM = 1,
                    lR = 2,
                    lI = 3,
                    lj = 4;
                if ("function" == typeof Symbol && Symbol.for) {
                    var lO = Symbol.for;
                    lL = lO("selector.component"), lM = lO("selector.has_pseudo_class"), lR = lO("selector.role"), lI = lO("selector.test_id"), lj = lO("selector.text")
                }

                function lA(e) {
                    var t = Z(e);
                    if (null != t) {
                        if ("string" != typeof t.memoizedProps["data-testname"]) throw Error(f(364));
                        return t
                    }
                    if (null === (e = ei(e))) throw Error(f(362));
                    return e.stateNode.current
                }

                function lD(e, t) {
                    switch (t.$$typeof) {
                        case lL:
                            if (e.type === t.value) return !0;
                            break;
                        case lM:
                            e: {
                                t = t.value,
                                e = [e, 0];
                                for (var n = 0; n < e.length;) {
                                    var r = e[n++],
                                        l = e[n++],
                                        a = t[l];
                                    if (5 !== r.tag || !es(r)) {
                                        for (; null != a && lD(r, a);) a = t[++l];
                                        if (l === t.length) {
                                            t = !0;
                                            break e
                                        }
                                        for (r = r.child; null !== r;) e.push(r, l), r = r.sibling
                                    }
                                }
                                t = !1
                            }
                            return t;
                        case lR:
                            if (5 === e.tag && ec(e.stateNode, t.value)) return !0;
                            break;
                        case lj:
                            if ((5 === e.tag || 6 === e.tag) && null !== (e = eu(e)) && 0 <= e.indexOf(t.value)) return !0;
                            break;
                        case lI:
                            if (5 === e.tag && "string" == typeof(e = e.memoizedProps["data-testname"]) && e.toLowerCase() === t.value.toLowerCase()) return !0;
                            break;
                        default:
                            throw Error(f(365))
                    }
                    return !1
                }

                function lF(e) {
                    switch (e.$$typeof) {
                        case lL:
                            return "<" + (T(e.value) || "Unknown") + ">";
                        case lM:
                            return ":has(" + (lF(e) || "") + ")";
                        case lR:
                            return '[role="' + e.value + '"]';
                        case lj:
                            return '"' + e.value + '"';
                        case lI:
                            return '[data-testname="' + e.value + '"]';
                        default:
                            throw Error(f(365))
                    }
                }

                function lU(e, t) {
                    var n = [];
                    e = [e, 0];
                    for (var r = 0; r < e.length;) {
                        var l = e[r++],
                            a = e[r++],
                            i = t[a];
                        if (5 !== l.tag || !es(l)) {
                            for (; null != i && lD(l, i);) i = t[++a];
                            if (a === t.length) n.push(l);
                            else
                                for (l = l.child; null !== l;) e.push(l, a), l = l.sibling
                        }
                    }
                    return n
                }

                function lH(e, t) {
                    if (!ea) throw Error(f(363));
                    e = lU(e = lA(e), t), t = [], e = Array.from(e);
                    for (var n = 0; n < e.length;) {
                        var r = e[n++];
                        if (5 === r.tag) es(r) || t.push(r.stateNode);
                        else
                            for (r = r.child; null !== r;) e.push(r), r = r.sibling
                    }
                    return t
                }
                var lQ = Math.ceil,
                    lB = d.ReactCurrentDispatcher,
                    lW = d.ReactCurrentOwner,
                    l$ = d.ReactCurrentBatchConfig,
                    lq = 0,
                    lV = null,
                    lY = null,
                    lG = 0,
                    lX = 0,
                    lJ = e7(0),
                    lK = 0,
                    lZ = null,
                    l0 = 0,
                    l1 = 0,
                    l2 = 0,
                    l3 = null,
                    l4 = null,
                    l6 = 0,
                    l5 = 1 / 0;

                function l8() {
                    l5 = tz() + 500
                }
                var l7 = !1,
                    l9 = null,
                    ae = null,
                    at = !1,
                    an = null,
                    ar = 0,
                    al = 0,
                    aa = null,
                    ai = -1,
                    ao = 0;

                function au() {
                    return 0 != (6 & lq) ? tz() : -1 !== ai ? ai : ai = tz()
                }

                function as(e) {
                    return 0 == (1 & e.mode) ? 1 : 0 != (2 & lq) && 0 !== lG ? lG & -lG : null !== tH.transition ? (0 === ao && (e = tm, 0 == (4194240 & (tm <<= 1)) && (tm = 64), ao = e), ao) : 0 !== (e = tE) ? e : et()
                }

                function ac(e, t, n) {
                    if (50 < al) throw al = 0, aa = null, Error(f(185));
                    var r = af(e, t);
                    return null === r ? null : (tS(r, t, n), (0 == (2 & lq) || r !== lV) && (r === lV && (0 == (2 & lq) && (l1 |= t), 4 === lK && av(r, lG)), ad(r, n), 1 === t && 0 === lq && 0 == (1 & e.mode) && (l8(), tD && tU())), r)
                }

                function af(e, t) {
                    e.lanes |= t;
                    var n = e.alternate;
                    for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e;) e.childLanes |= t, null !== (n = e.alternate) && (n.childLanes |= t), n = e, e = e.return;
                    return 3 === n.tag ? n.stateNode : null
                }

                function ad(e, t) {
                    var n, r, l, a = e.callbackNode;
                    ! function(e, t) {
                        for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, a = e.pendingLanes; 0 < a;) {
                            var i = 31 - td(a),
                                o = 1 << i,
                                u = l[i]; - 1 === u ? (0 == (o & n) || 0 != (o & r)) && (l[i] = function(e, t) {
                                switch (e) {
                                    case 1:
                                    case 2:
                                    case 4:
                                        return t + 250;
                                    case 8:
                                    case 16:
                                    case 32:
                                    case 64:
                                    case 128:
                                    case 256:
                                    case 512:
                                    case 1024:
                                    case 2048:
                                    case 4096:
                                    case 8192:
                                    case 16384:
                                    case 32768:
                                    case 65536:
                                    case 131072:
                                    case 262144:
                                    case 524288:
                                    case 1048576:
                                    case 2097152:
                                        return t + 5e3;
                                    default:
                                        return -1
                                }
                            }(o, t)) : u <= t && (e.expiredLanes |= o), a &= ~o
                        }
                    }(e, t);
                    var i = ty(e, e === lV ? lG : 0);
                    if (0 === i) null !== a && tC(a), e.callbackNode = null, e.callbackPriority = 0;
                    else if (t = i & -i, e.callbackPriority !== t) {
                        if (null != a && tC(a), 1 === t) {
                            0 === e.tag && (tD = !0), n = ag.bind(null, e), null === tA ? tA = [n] : tA.push(n), er ? el(function() {
                                0 === lq && tU()
                            }) : tx(tN, tU), a = null
                        } else {
                            switch (t_(i)) {
                                case 1:
                                    a = tN;
                                    break;
                                case 4:
                                    a = tL;
                                    break;
                                case 16:
                                default:
                                    a = tM;
                                    break;
                                case 536870912:
                                    a = tR
                            }
                            r = a, l = ap.bind(null, e), a = tx(r, l)
                        }
                        e.callbackPriority = t, e.callbackNode = a
                    }
                }

                function ap(e, t) {
                    if (ai = -1, ao = 0, 0 != (6 & lq)) throw Error(f(327));
                    var n = e.callbackNode;
                    if (aT() && e.callbackNode !== n) return null;
                    var r = ty(e, e === lV ? lG : 0);
                    if (0 === r) return null;
                    if (0 != (30 & r) || 0 != (r & e.expiredLanes) || t) t = a_(e, r);
                    else {
                        t = r;
                        var l = lq;
                        lq |= 2;
                        var a = ak();
                        for ((lV !== e || lG !== t) && (l8(), aw(e, t));;) try {
                            ! function() {
                                for (; null !== lY && !tP();) ax(lY)
                            }();
                            break
                        } catch (t) {
                            aS(e, t)
                        }
                        tY(), lB.current = a, lq = l, null !== lY ? t = 0 : (lV = null, lG = 0, t = lK)
                    }
                    if (0 !== t) {
                        if (2 === t && 0 !== (l = tb(e)) && (r = l, t = ah(e, l)), 1 === t) throw n = lZ, aw(e, 0), av(e, r), ad(e, tz()), n;
                        if (6 === t) av(e, r);
                        else {
                            if (l = e.current.alternate, 0 == (30 & r) && ! function(e) {
                                    for (var t = e;;) {
                                        if (16384 & t.flags) {
                                            var n = t.updateQueue;
                                            if (null !== n && null !== (n = n.stores))
                                                for (var r = 0; r < n.length; r++) {
                                                    var l = n[r],
                                                        a = l.getSnapshot;
                                                    l = l.value;
                                                    try {
                                                        if (!tO(a(), l)) return !1
                                                    } catch (e) {
                                                        return !1
                                                    }
                                                }
                                        }
                                        if (n = t.child, 16384 & t.subtreeFlags && null !== n) n.return = t, t = n;
                                        else {
                                            if (t === e) break;
                                            for (; null === t.sibling;) {
                                                if (null === t.return || t.return === e) return !0;
                                                t = t.return
                                            }
                                            t.sibling.return = t.return, t = t.sibling
                                        }
                                    }
                                    return !0
                                }(l) && (2 === (t = a_(e, r)) && 0 !== (a = tb(e)) && (r = a, t = ah(e, a)), 1 === t)) throw n = lZ, aw(e, 0), av(e, r), ad(e, tz()), n;
                            switch (e.finishedWork = l, e.finishedLanes = r, t) {
                                case 0:
                                case 1:
                                    throw Error(f(345));
                                case 2:
                                case 5:
                                    aP(e, l4);
                                    break;
                                case 3:
                                    if (av(e, r), (130023424 & r) === r && 10 < (t = l6 + 500 - tz())) {
                                        if (0 !== ty(e, 0)) break;
                                        if (((l = e.suspendedLanes) & r) !== r) {
                                            au(), e.pingedLanes |= e.suspendedLanes & l;
                                            break
                                        }
                                        e.timeoutHandle = q(aP.bind(null, e, l4), t);
                                        break
                                    }
                                    aP(e, l4);
                                    break;
                                case 4:
                                    if (av(e, r), (4194240 & r) === r) break;
                                    for (l = -1, t = e.eventTimes; 0 < r;) {
                                        var i = 31 - td(r);
                                        a = 1 << i, (i = t[i]) > l && (l = i), r &= ~a
                                    }
                                    if (r = l, 10 < (r = (120 > (r = tz() - r) ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * lQ(r / 1960)) - r)) {
                                        e.timeoutHandle = q(aP.bind(null, e, l4), r);
                                        break
                                    }
                                    aP(e, l4);
                                    break;
                                default:
                                    throw Error(f(329))
                            }
                        }
                    }
                    return ad(e, tz()), e.callbackNode === n ? ap.bind(null, e) : null
                }

                function ah(e, t) {
                    var n = l3;
                    return e.current.memoizedState.isDehydrated && (aw(e, t).flags |= 256), 2 !== (e = a_(e, t)) && (t = l4, l4 = n, null !== t && am(t)), e
                }

                function am(e) {
                    null === l4 ? l4 = e : l4.push.apply(l4, e)
                }

                function av(e, t) {
                    for (t &= ~l2, t &= ~l1, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
                        var n = 31 - td(t),
                            r = 1 << n;
                        e[n] = -1, t &= ~r
                    }
                }

                function ag(e) {
                    if (0 != (6 & lq)) throw Error(f(327));
                    aT();
                    var t = ty(e, 0);
                    if (0 == (1 & t)) return ad(e, tz()), null;
                    var n = a_(e, t);
                    if (0 !== e.tag && 2 === n) {
                        var r = tb(e);
                        0 !== r && (t = r, n = ah(e, r))
                    }
                    if (1 === n) throw n = lZ, aw(e, 0), av(e, t), ad(e, tz()), n;
                    if (6 === n) throw Error(f(345));
                    return e.finishedWork = e.current.alternate, e.finishedLanes = t, aP(e, l4), ad(e, tz()), null
                }

                function ay(e) {
                    null !== an && 0 === an.tag && 0 == (6 & lq) && aT();
                    var t = lq;
                    lq |= 1;
                    var n = l$.transition,
                        r = tE;
                    try {
                        if (l$.transition = null, tE = 1, e) return e()
                    } finally {
                        tE = r, l$.transition = n, 0 == (6 & (lq = t)) && tU()
                    }
                }

                function ab() {
                    lX = lJ.current, e9(lJ)
                }

                function aw(e, t) {
                    e.finishedWork = null, e.finishedLanes = 0;
                    var n = e.timeoutHandle;
                    if (n !== Y && (e.timeoutHandle = Y, V(n)), null !== lY)
                        for (n = lY.return; null !== n;) {
                            var r = n;
                            switch (nb(r), r.tag) {
                                case 1:
                                    null != (r = r.type.childContextTypes) && to();
                                    break;
                                case 3:
                                    n$(), e9(tr), e9(tn), nJ();
                                    break;
                                case 5:
                                    nV(r);
                                    break;
                                case 4:
                                    n$();
                                    break;
                                case 13:
                                case 19:
                                    e9(nY);
                                    break;
                                case 10:
                                    tX(r.type._context);
                                    break;
                                case 22:
                                case 23:
                                    ab()
                            }
                            n = n.return
                        }
                    if (lV = e, lY = e = aD(e.current, null), lG = lX = t, lK = 0, lZ = null, l2 = l1 = l0 = 0, l4 = l3 = null, null !== t0) {
                        for (t = 0; t < t0.length; t++)
                            if (null !== (r = (n = t0[t]).interleaved)) {
                                n.interleaved = null;
                                var l = r.next,
                                    a = n.pending;
                                if (null !== a) {
                                    var i = a.next;
                                    a.next = l, r.next = i
                                }
                                n.pending = r
                            } t0 = null
                    }
                    return e
                }

                function aS(e, t) {
                    for (;;) {
                        var n = lY;
                        try {
                            if (tY(), nK.current = rj, n4) {
                                for (var r = n1.memoizedState; null !== r;) {
                                    var l = r.queue;
                                    null !== l && (l.pending = null), r = r.next
                                }
                                n4 = !1
                            }
                            if (n0 = 0, n3 = n2 = n1 = null, n6 = !1, n5 = 0, lW.current = null, null === n || null === n.return) {
                                lK = 1, lZ = t, lY = null;
                                break
                            }
                            e: {
                                var a = e,
                                    i = n.return,
                                    o = n,
                                    u = t;
                                if (t = lG, o.flags |= 32768, null !== u && "object" == typeof u && "function" == typeof u.then) {
                                    var s = u,
                                        c = o,
                                        d = c.tag;
                                    if (0 == (1 & c.mode) && (0 === d || 11 === d || 15 === d)) {
                                        var p = c.alternate;
                                        p ? (c.updateQueue = p.updateQueue, c.memoizedState = p.memoizedState, c.lanes = p.lanes) : (c.updateQueue = null, c.memoizedState = null)
                                    }
                                    var h = r$(i);
                                    if (null !== h) {
                                        h.flags &= -257, rq(h, i, o, a, t), 1 & h.mode && rW(a, s, t), t = h, u = s;
                                        var m = t.updateQueue;
                                        if (null === m) {
                                            var v = new Set;
                                            v.add(u), t.updateQueue = v
                                        } else m.add(u);
                                        break e
                                    }
                                    if (0 == (1 & t)) {
                                        rW(a, s, t), aE();
                                        break e
                                    }
                                    u = Error(f(426))
                                } else if (nk && 1 & o.mode) {
                                    var g = r$(i);
                                    if (null !== g) {
                                        0 == (65536 & g.flags) && (g.flags |= 256), rq(g, i, o, a, t), nM(u);
                                        break e
                                    }
                                }
                                a = u,
                                4 !== lK && (lK = 2),
                                null === l3 ? l3 = [a] : l3.push(a),
                                u = rF(u, o),
                                o = i;do {
                                    switch (o.tag) {
                                        case 3:
                                            o.flags |= 65536, t &= -t, o.lanes |= t;
                                            var y = rQ(o, u, t);
                                            t8(o, y);
                                            break e;
                                        case 1:
                                            a = u;
                                            var b = o.type,
                                                w = o.stateNode;
                                            if (0 == (128 & o.flags) && ("function" == typeof b.getDerivedStateFromError || null !== w && "function" == typeof w.componentDidCatch && (null === ae || !ae.has(w)))) {
                                                o.flags |= 65536, t &= -t, o.lanes |= t;
                                                var S = rB(o, a, t);
                                                t8(o, S);
                                                break e
                                            }
                                    }
                                    o = o.return
                                } while (null !== o)
                            }
                            aC(n)
                        } catch (e) {
                            t = e, lY === n && null !== n && (lY = n = n.return);
                            continue
                        }
                        break
                    }
                }

                function ak() {
                    var e = lB.current;
                    return lB.current = rj, null === e ? rj : e
                }

                function aE() {
                    (0 === lK || 3 === lK || 2 === lK) && (lK = 4), null === lV || 0 == (268435455 & l0) && 0 == (268435455 & l1) || av(lV, lG)
                }

                function a_(e, t) {
                    var n = lq;
                    lq |= 2;
                    var r = ak();
                    for (lV === e && lG === t || aw(e, t);;) try {
                        ! function() {
                            for (; null !== lY;) ax(lY)
                        }();
                        break
                    } catch (t) {
                        aS(e, t)
                    }
                    if (tY(), lq = n, lB.current = r, null !== lY) throw Error(f(261));
                    return lV = null, lG = 0, lK
                }

                function ax(e) {
                    var t = i(e.alternate, e, lX);
                    e.memoizedProps = e.pendingProps, null === t ? aC(e) : lY = t, lW.current = null
                }

                function aC(e) {
                    var n = e;
                    do {
                        var i = n.alternate;
                        if (e = n.return, 0 == (32768 & n.flags)) {
                            if (null !== (i = function(e, n, i) {
                                    var o = n.pendingProps;
                                    switch (nb(n), n.tag) {
                                        case 2:
                                        case 16:
                                        case 15:
                                        case 0:
                                        case 11:
                                        case 7:
                                        case 8:
                                        case 12:
                                        case 9:
                                        case 14:
                                            return rJ(n), null;
                                        case 1:
                                        case 17:
                                            return ti(n.type) && to(), rJ(n), null;
                                        case 3:
                                            return o = n.stateNode, n$(), e9(tr), e9(tn), nJ(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (null === e || null === e.child) && (nN(n) ? rV(n) : null === e || e.memoizedState.isDehydrated && 0 == (256 & n.flags) || (n.flags |= 1024, null !== n_ && (am(n_), n_ = null))), r(e, n), rJ(n), null;
                                        case 5:
                                            nV(n), i = nB(nQ.current);
                                            var u = n.type;
                                            if (null !== e && null != n.stateNode) l(e, n, u, o, i), e.ref !== n.ref && (n.flags |= 512, n.flags |= 2097152);
                                            else {
                                                if (!o) {
                                                    if (null === n.stateNode) throw Error(f(166));
                                                    return rJ(n), null
                                                }
                                                if (e = nB(nU.current), nN(n)) {
                                                    if (!K) throw Error(f(175));
                                                    e = e$(n.stateNode, n.type, n.memoizedProps, i, e, n, !nE), n.updateQueue = e, null !== e && rV(n)
                                                } else {
                                                    var s = U(u, o, i, e, n);
                                                    t(s, n, !1, !1), n.stateNode = s, Q(s, u, o, i, e) && rV(n)
                                                }
                                                null !== n.ref && (n.flags |= 512, n.flags |= 2097152)
                                            }
                                            return rJ(n), null;
                                        case 6:
                                            if (e && null != n.stateNode) a(e, n, e.memoizedProps, o);
                                            else {
                                                if ("string" != typeof o && null === n.stateNode) throw Error(f(166));
                                                if (e = nB(nQ.current), i = nB(nU.current), nN(n)) {
                                                    if (!K) throw Error(f(176));
                                                    if (e = n.stateNode, o = n.memoizedProps, (i = eq(e, o, n, !nE)) && null !== (u = nw)) switch (s = 0 != (1 & u.mode), u.tag) {
                                                        case 3:
                                                            e0(u.stateNode.containerInfo, e, o, s);
                                                            break;
                                                        case 5:
                                                            e1(u.type, u.memoizedProps, u.stateNode, e, o, s)
                                                    }
                                                    i && rV(n)
                                                } else n.stateNode = $(o, e, i, n)
                                            }
                                            return rJ(n), null;
                                        case 13:
                                            if (e9(nY), o = n.memoizedState, nk && null !== nS && 0 != (1 & n.mode) && 0 == (128 & n.flags)) {
                                                for (e = nS; e;) e = eH(e);
                                                return nL(), n.flags |= 98560, n
                                            }
                                            if (null !== o && null !== o.dehydrated) {
                                                if (o = nN(n), null === e) {
                                                    if (!o) throw Error(f(318));
                                                    if (!K) throw Error(f(344));
                                                    if (!(e = null !== (e = n.memoizedState) ? e.dehydrated : null)) throw Error(f(317));
                                                    eV(e, n)
                                                } else nL(), 0 == (128 & n.flags) && (n.memoizedState = null), n.flags |= 4;
                                                return rJ(n), null
                                            }
                                            if (null !== n_ && (am(n_), n_ = null), 0 != (128 & n.flags)) return n.lanes = i, n;
                                            return o = null !== o, i = !1, null === e ? nN(n) : i = null !== e.memoizedState, o && !i && (n.child.flags |= 8192, 0 != (1 & n.mode) && (null === e || 0 != (1 & nY.current) ? 0 === lK && (lK = 3) : aE())), null !== n.updateQueue && (n.flags |= 4), rJ(n), null;
                                        case 4:
                                            return n$(), r(e, n), null === e && ee(n.stateNode.containerInfo), rJ(n), null;
                                        case 10:
                                            return tX(n.type._context), rJ(n), null;
                                        case 19:
                                            if (e9(nY), null === (u = n.memoizedState)) return rJ(n), null;
                                            if (o = 0 != (128 & n.flags), null === (s = u.rendering)) {
                                                if (o) rX(u, !1);
                                                else {
                                                    if (0 !== lK || null !== e && 0 != (128 & e.flags))
                                                        for (e = n.child; null !== e;) {
                                                            if (null !== (s = nG(e))) {
                                                                for (n.flags |= 128, rX(u, !1), null !== (e = s.updateQueue) && (n.updateQueue = e, n.flags |= 4), n.subtreeFlags = 0, e = i, o = n.child; null !== o;) i = o, u = e, i.flags &= 14680066, null === (s = i.alternate) ? (i.childLanes = 0, i.lanes = u, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, u = s.dependencies, i.dependencies = null === u ? null : {
                                                                    lanes: u.lanes,
                                                                    firstContext: u.firstContext
                                                                }), o = o.sibling;
                                                                return te(nY, 1 & nY.current | 2), n.child
                                                            }
                                                            e = e.sibling
                                                        }
                                                    null !== u.tail && tz() > l5 && (n.flags |= 128, o = !0, rX(u, !1), n.lanes = 4194304)
                                                }
                                            } else {
                                                if (!o) {
                                                    if (null !== (e = nG(s))) {
                                                        if (n.flags |= 128, o = !0, null !== (e = e.updateQueue) && (n.updateQueue = e, n.flags |= 4), rX(u, !0), null === u.tail && "hidden" === u.tailMode && !s.alternate && !nk) return rJ(n), null
                                                    } else 2 * tz() - u.renderingStartTime > l5 && 1073741824 !== i && (n.flags |= 128, o = !0, rX(u, !1), n.lanes = 4194304)
                                                }
                                                u.isBackwards ? (s.sibling = n.child, n.child = s) : (null !== (e = u.last) ? e.sibling = s : n.child = s, u.last = s)
                                            }
                                            if (null !== u.tail) return n = u.tail, u.rendering = n, u.tail = n.sibling, u.renderingStartTime = tz(), n.sibling = null, e = nY.current, te(nY, o ? 1 & e | 2 : 1 & e), n;
                                            return rJ(n), null;
                                        case 22:
                                        case 23:
                                            return ab(), o = null !== n.memoizedState, null !== e && null !== e.memoizedState !== o && (n.flags |= 8192), o && 0 != (1 & n.mode) ? 0 != (1073741824 & lX) && (rJ(n), X && 6 & n.subtreeFlags && (n.flags |= 8192)) : rJ(n), null;
                                        case 24:
                                        case 25:
                                            return null
                                    }
                                    throw Error(f(156, n.tag))
                                }(i, n, lX))) {
                                lY = i;
                                return
                            }
                        } else {
                            if (null !== (i = function(e, t) {
                                    switch (nb(t), t.tag) {
                                        case 1:
                                            return ti(t.type) && to(), 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                                        case 3:
                                            return n$(), e9(tr), e9(tn), nJ(), 0 != (65536 & (e = t.flags)) && 0 == (128 & e) ? (t.flags = -65537 & e | 128, t) : null;
                                        case 5:
                                            return nV(t), null;
                                        case 13:
                                            if (e9(nY), null !== (e = t.memoizedState) && null !== e.dehydrated) {
                                                if (null === t.alternate) throw Error(f(340));
                                                nL()
                                            }
                                            return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                                        case 19:
                                            return e9(nY), null;
                                        case 4:
                                            return n$(), null;
                                        case 10:
                                            return tX(t.type._context), null;
                                        case 22:
                                        case 23:
                                            return ab(), null;
                                        default:
                                            return null
                                    }
                                }(i, n))) {
                                i.flags &= 32767, lY = i;
                                return
                            }
                            if (null !== e) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
                            else {
                                lK = 6, lY = null;
                                return
                            }
                        }
                        if (null !== (n = n.sibling)) {
                            lY = n;
                            return
                        }
                        lY = n = e
                    } while (null !== n);
                    0 === lK && (lK = 5)
                }

                function aP(e, t) {
                    var n = tE,
                        r = l$.transition;
                    try {
                        l$.transition = null, tE = 1,
                            function(e, t, n) {
                                do aT(); while (null !== an);
                                if (0 != (6 & lq)) throw Error(f(327));
                                var r = e.finishedWork,
                                    l = e.finishedLanes;
                                if (null !== r) {
                                    if (e.finishedWork = null, e.finishedLanes = 0, r === e.current) throw Error(f(177));
                                    e.callbackNode = null, e.callbackPriority = 0;
                                    var a = r.lanes | r.childLanes;
                                    if (function(e, t) {
                                            var n = e.pendingLanes & ~t;
                                            e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
                                            var r = e.eventTimes;
                                            for (e = e.expirationTimes; 0 < n;) {
                                                var l = 31 - td(n),
                                                    a = 1 << l;
                                                t[l] = 0, r[l] = -1, e[l] = -1, n &= ~a
                                            }
                                        }(e, a), e === lV && (lY = lV = null, lG = 0), 0 == (2064 & r.subtreeFlags) && 0 == (2064 & r.flags) || at || (at = !0, i = tM, o = function() {
                                            return aT(), null
                                        }, tx(i, o)), a = 0 != (15990 & r.flags), 0 != (15990 & r.subtreeFlags) || a) {
                                        a = l$.transition, l$.transition = null;
                                        var i, o, u, s, c = tE;
                                        tE = 1;
                                        var d = lq;
                                        lq |= 4, lW.current = null,
                                            function(e, t) {
                                                for (D(e.containerInfo), lp = t; null !== lp;)
                                                    if (t = (e = lp).child, 0 != (1028 & e.subtreeFlags) && null !== t) t.return = e, lp = t;
                                                    else
                                                        for (; null !== lp;) {
                                                            e = lp;
                                                            try {
                                                                var n = e.alternate;
                                                                if (0 != (1024 & e.flags)) switch (e.tag) {
                                                                    case 0:
                                                                    case 11:
                                                                    case 15:
                                                                    case 5:
                                                                    case 6:
                                                                    case 4:
                                                                    case 17:
                                                                        break;
                                                                    case 1:
                                                                        if (null !== n) {
                                                                            var r = n.memoizedProps,
                                                                                l = n.memoizedState,
                                                                                a = e.stateNode,
                                                                                i = a.getSnapshotBeforeUpdate(e.elementType === e.type ? r : tB(e.type, r), l);
                                                                            a.__reactInternalSnapshotBeforeUpdate = i
                                                                        }
                                                                        break;
                                                                    case 3:
                                                                        X && eP(e.stateNode.containerInfo);
                                                                        break;
                                                                    default:
                                                                        throw Error(f(163))
                                                                }
                                                            } catch (t) {
                                                                aN(e, e.return, t)
                                                            }
                                                            if (null !== (t = e.sibling)) {
                                                                t.return = e.return, lp = t;
                                                                break
                                                            }
                                                            lp = e.return
                                                        }
                                                n = lv, lv = !1
                                            }(e, r),
                                            function(e, t) {
                                                for (lp = t; null !== lp;) {
                                                    var n = (t = lp).deletions;
                                                    if (null !== n)
                                                        for (var r = 0; r < n.length; r++) {
                                                            var l = n[r];
                                                            try {
                                                                var a = e;
                                                                X ? lx(a, l, t) : lS(a, l, t);
                                                                var i = l.alternate;
                                                                null !== i && (i.return = null), l.return = null
                                                            } catch (e) {
                                                                aN(l, t, e)
                                                            }
                                                        }
                                                    if (n = t.child, 0 != (12854 & t.subtreeFlags) && null !== n) n.return = t, lp = n;
                                                    else
                                                        for (; null !== lp;) {
                                                            t = lp;
                                                            try {
                                                                var o = t.flags;
                                                                if (32 & o && X && ek(t.stateNode), 512 & o) {
                                                                    var u = t.alternate;
                                                                    if (null !== u) {
                                                                        var s = u.ref;
                                                                        null !== s && ("function" == typeof s ? s(null) : s.current = null)
                                                                    }
                                                                }
                                                                if (8192 & o) switch (t.tag) {
                                                                    case 13:
                                                                        if (null !== t.memoizedState) {
                                                                            var c = t.alternate;
                                                                            (null === c || null === c.memoizedState) && (l6 = tz())
                                                                        }
                                                                        break;
                                                                    case 22:
                                                                        var f = null !== t.memoizedState,
                                                                            d = t.alternate,
                                                                            p = null !== d && null !== d.memoizedState;
                                                                        if (n = t, X) {
                                                                            e: if (r = n, l = f, a = null, X)
                                                                                for (var h = r;;) {
                                                                                    if (5 === h.tag) {
                                                                                        if (null === a) {
                                                                                            a = h;
                                                                                            var m = h.stateNode;
                                                                                            l ? eE(m) : ex(h.stateNode, h.memoizedProps)
                                                                                        }
                                                                                    } else if (6 === h.tag) {
                                                                                        if (null === a) {
                                                                                            var v = h.stateNode;
                                                                                            l ? e_(v) : eC(v, h.memoizedProps)
                                                                                        }
                                                                                    } else if ((22 !== h.tag && 23 !== h.tag || null === h.memoizedState || h === r) && null !== h.child) {
                                                                                        h.child.return = h, h = h.child;
                                                                                        continue
                                                                                    }
                                                                                    if (h === r) break;
                                                                                    for (; null === h.sibling;) {
                                                                                        if (null === h.return || h.return === r) break e;
                                                                                        a === h && (a = null), h = h.return
                                                                                    }
                                                                                    a === h && (a = null), h.sibling.return = h.return, h = h.sibling
                                                                                }
                                                                        }
                                                                        if (f && !p && 0 != (1 & n.mode)) {
                                                                            lp = n;
                                                                            for (var g = n.child; null !== g;) {
                                                                                for (n = lp = g; null !== lp;) {
                                                                                    var y = (r = lp).child;
                                                                                    switch (r.tag) {
                                                                                        case 0:
                                                                                        case 11:
                                                                                        case 14:
                                                                                        case 15:
                                                                                            lg(4, r, r.return);
                                                                                            break;
                                                                                        case 1:
                                                                                            lh(r, r.return);
                                                                                            var b = r.stateNode;
                                                                                            if ("function" == typeof b.componentWillUnmount) {
                                                                                                var w = r.return;
                                                                                                try {
                                                                                                    b.props = r.memoizedProps, b.state = r.memoizedState, b.componentWillUnmount()
                                                                                                } catch (e) {
                                                                                                    aN(r, w, e)
                                                                                                }
                                                                                            }
                                                                                            break;
                                                                                        case 5:
                                                                                            lh(r, r.return);
                                                                                            break;
                                                                                        case 22:
                                                                                            if (null !== r.memoizedState) {
                                                                                                lz(n);
                                                                                                continue
                                                                                            }
                                                                                    }
                                                                                    null !== y ? (y.return = r, lp = y) : lz(n)
                                                                                }
                                                                                g = g.sibling
                                                                            }
                                                                        }
                                                                }
                                                                switch (4102 & o) {
                                                                    case 2:
                                                                        l_(t), t.flags &= -3;
                                                                        break;
                                                                    case 6:
                                                                        l_(t), t.flags &= -3, lC(t.alternate, t);
                                                                        break;
                                                                    case 4096:
                                                                        t.flags &= -4097;
                                                                        break;
                                                                    case 4100:
                                                                        t.flags &= -4097, lC(t.alternate, t);
                                                                        break;
                                                                    case 4:
                                                                        lC(t.alternate, t)
                                                                }
                                                            } catch (e) {
                                                                aN(t, t.return, e)
                                                            }
                                                            if (null !== (n = t.sibling)) {
                                                                n.return = t.return, lp = n;
                                                                break
                                                            }
                                                            lp = t.return
                                                        }
                                                }
                                            }(e, r, l), F(e.containerInfo), e.current = r, u = r, s = e, lp = u,
                                            function e(t, n, r) {
                                                for (var l = 0 != (1 & t.mode); null !== lp;) {
                                                    var a = lp,
                                                        i = a.child;
                                                    if (22 === a.tag && l) {
                                                        var o = null !== a.memoizedState || lc;
                                                        if (!o) {
                                                            var u = a.alternate,
                                                                s = null !== u && null !== u.memoizedState || lf;
                                                            u = lc;
                                                            var c = lf;
                                                            if (lc = o, (lf = s) && !c)
                                                                for (lp = a; null !== lp;) s = (o = lp).child, 22 === o.tag && null !== o.memoizedState ? lN(a) : null !== s ? (s.return = o, lp = s) : lN(a);
                                                            for (; null !== i;) lp = i, e(i, n, r), i = i.sibling;
                                                            lp = a, lc = u, lf = c
                                                        }
                                                        lT(t, n, r)
                                                    } else 0 != (8772 & a.subtreeFlags) && null !== i ? (i.return = a, lp = i) : lT(t, n, r)
                                                }
                                            }(u, s, l), tT(), lq = d, tE = c, l$.transition = a
                                    } else e.current = r;
                                    if (at && (at = !1, an = e, ar = l), 0 === (a = e.pendingLanes) && (ae = null), function(e) {
                                            if (tj && "function" == typeof tj.onCommitFiberRoot) try {
                                                tj.onCommitFiberRoot(tI, e, void 0, 128 == (128 & e.current.flags))
                                            } catch (e) {}
                                        }(r.stateNode, n), ad(e, tz()), null !== t)
                                        for (n = e.onRecoverableError, r = 0; r < t.length; r++) n(t[r]);
                                    if (l7) throw l7 = !1, e = l9, l9 = null, e;
                                    0 != (1 & ar) && 0 !== e.tag && aT(), 0 != (1 & (a = e.pendingLanes)) ? e === aa ? al++ : (al = 0, aa = e) : al = 0, tU()
                                }
                            }(e, t, n)
                    } finally {
                        l$.transition = r, tE = n
                    }
                    return null
                }

                function aT() {
                    if (null !== an) {
                        var e = t_(ar),
                            t = l$.transition,
                            n = tE;
                        try {
                            if (l$.transition = null, tE = 16 > e ? 16 : e, null === an) var r = !1;
                            else {
                                if (e = an, an = null, ar = 0, 0 != (6 & lq)) throw Error(f(331));
                                var l = lq;
                                for (lq |= 4, lp = e.current; null !== lp;) {
                                    var a = lp,
                                        i = a.child;
                                    if (0 != (16 & lp.flags)) {
                                        var o = a.deletions;
                                        if (null !== o) {
                                            for (var u = 0; u < o.length; u++) {
                                                var s = o[u];
                                                for (lp = s; null !== lp;) {
                                                    var c = lp;
                                                    switch (c.tag) {
                                                        case 0:
                                                        case 11:
                                                        case 15:
                                                            lg(8, c, a)
                                                    }
                                                    var d = c.child;
                                                    if (null !== d) d.return = c, lp = d;
                                                    else
                                                        for (; null !== lp;) {
                                                            var p = (c = lp).sibling,
                                                                h = c.return;
                                                            if (! function e(t) {
                                                                    var n = t.alternate;
                                                                    null !== n && (t.alternate = null, e(n)), t.child = null, t.deletions = null, t.sibling = null, 5 === t.tag && null !== (n = t.stateNode) && en(n), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null
                                                                }(c), c === s) {
                                                                lp = null;
                                                                break
                                                            }
                                                            if (null !== p) {
                                                                p.return = h, lp = p;
                                                                break
                                                            }
                                                            lp = h
                                                        }
                                                }
                                            }
                                            var m = a.alternate;
                                            if (null !== m) {
                                                var v = m.child;
                                                if (null !== v) {
                                                    m.child = null;
                                                    do {
                                                        var g = v.sibling;
                                                        v.sibling = null, v = g
                                                    } while (null !== v)
                                                }
                                            }
                                            lp = a
                                        }
                                    }
                                    if (0 != (2064 & a.subtreeFlags) && null !== i) i.return = a, lp = i;
                                    else t: for (; null !== lp;) {
                                        if (a = lp, 0 != (2048 & a.flags)) switch (a.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                lg(9, a, a.return)
                                        }
                                        var y = a.sibling;
                                        if (null !== y) {
                                            y.return = a.return, lp = y;
                                            break t
                                        }
                                        lp = a.return
                                    }
                                }
                                var b = e.current;
                                for (lp = b; null !== lp;) {
                                    var w = (i = lp).child;
                                    if (0 != (2064 & i.subtreeFlags) && null !== w) w.return = i, lp = w;
                                    else t: for (i = b; null !== lp;) {
                                        if (o = lp, 0 != (2048 & o.flags)) try {
                                            switch (o.tag) {
                                                case 0:
                                                case 11:
                                                case 15:
                                                    ly(9, o)
                                            }
                                        } catch (e) {
                                            aN(o, o.return, e)
                                        }
                                        if (o === i) {
                                            lp = null;
                                            break t
                                        }
                                        var S = o.sibling;
                                        if (null !== S) {
                                            S.return = o.return, lp = S;
                                            break t
                                        }
                                        lp = o.return
                                    }
                                }
                                if (lq = l, tU(), tj && "function" == typeof tj.onPostCommitFiberRoot) try {
                                    tj.onPostCommitFiberRoot(tI, e)
                                } catch (e) {}
                                r = !0
                            }
                            return r
                        } finally {
                            tE = n, l$.transition = t
                        }
                    }
                    return !1
                }

                function az(e, t, n) {
                    t = rF(n, t), t = rQ(e, t, 1), t6(e, t), t = au(), null !== (e = af(e, 1)) && (tS(e, 1, t), ad(e, t))
                }

                function aN(e, t, n) {
                    if (3 === e.tag) az(e, e, n);
                    else
                        for (; null !== t;) {
                            if (3 === t.tag) {
                                az(t, e, n);
                                break
                            }
                            if (1 === t.tag) {
                                var r = t.stateNode;
                                if ("function" == typeof t.type.getDerivedStateFromError || "function" == typeof r.componentDidCatch && (null === ae || !ae.has(r))) {
                                    e = rF(n, e), e = rB(t, e, 1), t6(t, e), e = au(), null !== (t = af(t, 1)) && (tS(t, 1, e), ad(t, e));
                                    break
                                }
                            }
                            t = t.return
                        }
                }

                function aL(e, t, n) {
                    var r = e.pingCache;
                    null !== r && r.delete(t), t = au(), e.pingedLanes |= e.suspendedLanes & n, lV === e && (lG & n) === n && (4 === lK || 3 === lK && (130023424 & lG) === lG && 500 > tz() - l6 ? aw(e, 0) : l2 |= n), ad(e, t)
                }

                function aM(e, t) {
                    0 === t && (0 == (1 & e.mode) ? t = 1 : (t = tv, 0 == (130023424 & (tv <<= 1)) && (tv = 4194304)));
                    var n = au();
                    null !== (e = af(e, t)) && (tS(e, t, n), ad(e, n))
                }

                function aR(e) {
                    var t = e.memoizedState,
                        n = 0;
                    null !== t && (n = t.retryLane), aM(e, n)
                }

                function aI(e, t) {
                    var n = 0;
                    switch (e.tag) {
                        case 13:
                            var r = e.stateNode,
                                l = e.memoizedState;
                            null !== l && (n = l.retryLane);
                            break;
                        case 19:
                            r = e.stateNode;
                            break;
                        default:
                            throw Error(f(314))
                    }
                    null !== r && r.delete(t), aM(e, n)
                }

                function aj(e, t, n, r) {
                    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
                }

                function aO(e, t, n, r) {
                    return new aj(e, t, n, r)
                }

                function aA(e) {
                    return !(!(e = e.prototype) || !e.isReactComponent)
                }

                function aD(e, t) {
                    var n = e.alternate;
                    return null === n ? ((n = aO(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = 14680064 & e.flags, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : {
                        lanes: t.lanes,
                        firstContext: t.firstContext
                    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
                }

                function aF(e, t, n, r, l, a) {
                    var i = 2;
                    if (r = e, "function" == typeof e) aA(e) && (i = 1);
                    else if ("string" == typeof e) i = 5;
                    else e: switch (e) {
                        case m:
                            return aU(n.children, l, a, t);
                        case v:
                            i = 8, l |= 8;
                            break;
                        case g:
                            return (e = aO(12, n, t, 2 | l)).elementType = g, e.lanes = a, e;
                        case S:
                            return (e = aO(13, n, t, l)).elementType = S, e.lanes = a, e;
                        case k:
                            return (e = aO(19, n, t, l)).elementType = k, e.lanes = a, e;
                        case x:
                            return aH(n, l, a, t);
                        default:
                            if ("object" == typeof e && null !== e) switch (e.$$typeof) {
                                case y:
                                    i = 10;
                                    break e;
                                case b:
                                    i = 9;
                                    break e;
                                case w:
                                    i = 11;
                                    break e;
                                case E:
                                    i = 14;
                                    break e;
                                case _:
                                    i = 16, r = null;
                                    break e
                            }
                            throw Error(f(130, null == e ? e : typeof e, ""))
                    }
                    return (t = aO(i, n, t, l)).elementType = e, t.type = r, t.lanes = a, t
                }

                function aU(e, t, n, r) {
                    return (e = aO(7, e, r, t)).lanes = n, e
                }

                function aH(e, t, n, r) {
                    return (e = aO(22, e, r, t)).elementType = x, e.lanes = n, e.stateNode = {}, e
                }

                function aQ(e, t, n) {
                    return (e = aO(6, e, null, t)).lanes = n, e
                }

                function aB(e, t, n) {
                    return (t = aO(4, null !== e.children ? e.children : [], e.key, t)).lanes = n, t.stateNode = {
                        containerInfo: e.containerInfo,
                        pendingChildren: null,
                        implementation: e.implementation
                    }, t
                }

                function aW(e, t, n, r, l) {
                    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = Y, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = tw(0), this.expirationTimes = tw(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = tw(0), this.identifierPrefix = r, this.onRecoverableError = l, K && (this.mutableSourceEagerHydrationData = null)
                }

                function a$(e, t, n, r, l, a, i, o, u) {
                    return e = new aW(e, t, n, o, u), 1 === t ? (t = 1, !0 === a && (t |= 8)) : t = 0, a = aO(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = {
                        element: r,
                        isDehydrated: n,
                        cache: null,
                        transitions: null
                    }, t2(a), e
                }

                function aq(e) {
                    if (!e) return tt;
                    e = e._reactInternals;
                    e: {
                        if (z(e) !== e || 1 !== e.tag) throw Error(f(170));
                        var t = e;do {
                            switch (t.tag) {
                                case 3:
                                    t = t.stateNode.context;
                                    break e;
                                case 1:
                                    if (ti(t.type)) {
                                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                                        break e
                                    }
                            }
                            t = t.return
                        } while (null !== t);
                        throw Error(f(171))
                    }
                    if (1 === e.tag) {
                        var n = e.type;
                        if (ti(n)) return ts(e, n, t)
                    }
                    return t
                }

                function aV(e) {
                    var t = e._reactInternals;
                    if (void 0 === t) {
                        if ("function" == typeof e.render) throw Error(f(188));
                        throw Error(f(268, e = Object.keys(e).join(",")))
                    }
                    return null === (e = M(t)) ? null : e.stateNode
                }

                function aY(e, t) {
                    if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
                        var n = e.retryLane;
                        e.retryLane = 0 !== n && n < t ? n : t
                    }
                }

                function aG(e, t) {
                    aY(e, t), (e = e.alternate) && aY(e, t)
                }

                function aX(e) {
                    return null === (e = M(e)) ? null : e.stateNode
                }

                function aJ() {
                    return null
                }
                return i = function(e, t, n) {
                    if (null !== e) {
                        if (e.memoizedProps !== t.pendingProps || tr.current) rZ = !0;
                        else {
                            if (0 == (e.lanes & n) && 0 == (128 & t.flags)) return rZ = !1,
                                function(e, t, n) {
                                    switch (t.tag) {
                                        case 3:
                                            r9(t), nL();
                                            break;
                                        case 5:
                                            nq(t);
                                            break;
                                        case 1:
                                            ti(t.type) && tc(t);
                                            break;
                                        case 4:
                                            nW(t, t.stateNode.containerInfo);
                                            break;
                                        case 10:
                                            tG(t, t.type._context, t.memoizedProps.value);
                                            break;
                                        case 13:
                                            var r = t.memoizedState;
                                            if (null !== r) {
                                                if (null !== r.dehydrated) return te(nY, 1 & nY.current), t.flags |= 128, null;
                                                if (0 != (n & t.child.childLanes)) return lr(e, t, n);
                                                return te(nY, 1 & nY.current), null !== (e = ls(e, t, n)) ? e.sibling : null
                                            }
                                            te(nY, 1 & nY.current);
                                            break;
                                        case 19:
                                            if (r = 0 != (n & t.childLanes), 0 != (128 & e.flags)) {
                                                if (r) return lu(e, t, n);
                                                t.flags |= 128
                                            }
                                            var l = t.memoizedState;
                                            if (null !== l && (l.rendering = null, l.tail = null, l.lastEffect = null), te(nY, nY.current), !r) return null;
                                            break;
                                        case 22:
                                        case 23:
                                            return t.lanes = 0, r4(e, t, n)
                                    }
                                    return ls(e, t, n)
                                }(e, t, n);
                            rZ = 0 != (131072 & e.flags)
                        }
                    } else rZ = !1, nk && 0 != (1048576 & t.flags) && ng(t, nc, t.index);
                    switch (t.lanes = 0, t.tag) {
                        case 2:
                            var r = t.type;
                            null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2), e = t.pendingProps;
                            var l = ta(t, tn.current);
                            tK(t, n), l = re(null, t, r, e, l, n);
                            var a = rt();
                            return t.flags |= 1, "object" == typeof l && null !== l && "function" == typeof l.render && void 0 === l.$$typeof ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ti(r) ? (a = !0, tc(t)) : a = !1, t.memoizedState = null !== l.state && void 0 !== l.state ? l.state : null, t2(t), l.updater = nn, t.stateNode = l, l._reactInternals = t, ni(t, r, e, n), t = r7(null, t, r, !0, a, n)) : (t.tag = 0, nk && a && ny(t), r0(null, t, l, n), t = t.child), t;
                        case 16:
                            r = t.elementType;
                            e: {
                                switch (null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2), e = t.pendingProps, r = (l = r._init)(r._payload), t.type = r, l = t.tag = function(e) {
                                        if ("function" == typeof e) return aA(e) ? 1 : 0;
                                        if (null != e) {
                                            if ((e = e.$$typeof) === w) return 11;
                                            if (e === E) return 14
                                        }
                                        return 2
                                    }(r), e = tB(r, e), l) {
                                    case 0:
                                        t = r5(null, t, r, e, n);
                                        break e;
                                    case 1:
                                        t = r8(null, t, r, e, n);
                                        break e;
                                    case 11:
                                        t = r1(null, t, r, e, n);
                                        break e;
                                    case 14:
                                        t = r2(null, t, r, tB(r.type, e), n);
                                        break e
                                }
                                throw Error(f(306, r, ""))
                            }
                            return t;
                        case 0:
                            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : tB(r, l), r5(e, t, r, l, n);
                        case 1:
                            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : tB(r, l), r8(e, t, r, l, n);
                        case 3:
                            e: {
                                if (r9(t), null === e) throw Error(f(387));r = t.pendingProps,
                                l = (a = t.memoizedState).element,
                                t3(e, t),
                                t7(t, r, null, n);
                                var i = t.memoizedState;
                                if (r = i.element, K && a.isDehydrated) {
                                    if (a = {
                                            element: r,
                                            isDehydrated: !1,
                                            cache: i.cache,
                                            transitions: i.transitions
                                        }, t.updateQueue.baseState = a, t.memoizedState = a, 256 & t.flags) {
                                        t = le(e, t, r, n, l = Error(f(423)));
                                        break e
                                    }
                                    if (r !== l) {
                                        t = le(e, t, r, n, l = Error(f(424)));
                                        break e
                                    }
                                    for (K && (nS = eB(t.stateNode.containerInfo), nw = t, nk = !0, n_ = null, nE = !1), n = nD(t, null, r, n), t.child = n; n;) n.flags = -3 & n.flags | 4096, n = n.sibling
                                } else {
                                    if (nL(), r === l) {
                                        t = ls(e, t, n);
                                        break e
                                    }
                                    r0(e, t, r, n)
                                }
                                t = t.child
                            }
                            return t;
                        case 5:
                            return nq(t), null === e && nT(t), r = t.type, l = t.pendingProps, a = null !== e ? e.memoizedProps : null, i = l.children, W(r, l) ? i = null : null !== a && W(r, a) && (t.flags |= 32), r6(e, t), r0(e, t, i, n), t.child;
                        case 6:
                            return null === e && nT(t), null;
                        case 13:
                            return lr(e, t, n);
                        case 4:
                            return nW(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = nA(t, null, r, n) : r0(e, t, r, n), t.child;
                        case 11:
                            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : tB(r, l), r1(e, t, r, l, n);
                        case 7:
                            return r0(e, t, t.pendingProps, n), t.child;
                        case 8:
                        case 12:
                            return r0(e, t, t.pendingProps.children, n), t.child;
                        case 10:
                            e: {
                                if (r = t.type._context, l = t.pendingProps, a = t.memoizedProps, i = l.value, tG(t, r, i), null !== a) {
                                    if (tO(a.value, i)) {
                                        if (a.children === l.children && !tr.current) {
                                            t = ls(e, t, n);
                                            break e
                                        }
                                    } else
                                        for (null !== (a = t.child) && (a.return = t); null !== a;) {
                                            var o = a.dependencies;
                                            if (null !== o) {
                                                i = a.child;
                                                for (var u = o.firstContext; null !== u;) {
                                                    if (u.context === r) {
                                                        if (1 === a.tag) {
                                                            (u = t4(-1, n & -n)).tag = 2;
                                                            var s = a.updateQueue;
                                                            if (null !== s) {
                                                                var c = (s = s.shared).pending;
                                                                null === c ? u.next = u : (u.next = c.next, c.next = u), s.pending = u
                                                            }
                                                        }
                                                        a.lanes |= n, null !== (u = a.alternate) && (u.lanes |= n), tJ(a.return, n, t), o.lanes |= n;
                                                        break
                                                    }
                                                    u = u.next
                                                }
                                            } else if (10 === a.tag) i = a.type === t.type ? null : a.child;
                                            else if (18 === a.tag) {
                                                if (null === (i = a.return)) throw Error(f(341));
                                                i.lanes |= n, null !== (o = i.alternate) && (o.lanes |= n), tJ(i, n, t), i = a.sibling
                                            } else i = a.child;
                                            if (null !== i) i.return = a;
                                            else
                                                for (i = a; null !== i;) {
                                                    if (i === t) {
                                                        i = null;
                                                        break
                                                    }
                                                    if (null !== (a = i.sibling)) {
                                                        a.return = i.return, i = a;
                                                        break
                                                    }
                                                    i = i.return
                                                }
                                            a = i
                                        }
                                }
                                r0(e, t, l.children, n),
                                t = t.child
                            }
                            return t;
                        case 9:
                            return l = t.type, r = t.pendingProps.children, tK(t, n), l = tZ(l), r = r(l), t.flags |= 1, r0(e, t, r, n), t.child;
                        case 14:
                            return l = tB(r = t.type, t.pendingProps), l = tB(r.type, l), r2(e, t, r, l, n);
                        case 15:
                            return r3(e, t, t.type, t.pendingProps, n);
                        case 17:
                            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : tB(r, l), null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2), t.tag = 1, ti(r) ? (e = !0, tc(t)) : e = !1, tK(t, n), nl(t, r, l), ni(t, r, l, n), r7(null, t, r, !0, e, n);
                        case 19:
                            return lu(e, t, n);
                        case 22:
                            return r4(e, t, n)
                    }
                    throw Error(f(156, t.tag))
                }, o.attemptContinuousHydration = function(e) {
                    13 === e.tag && (ac(e, 134217728, au()), aG(e, 134217728))
                }, o.attemptHydrationAtCurrentPriority = function(e) {
                    if (13 === e.tag) {
                        var t = au(),
                            n = as(e);
                        ac(e, n, t), aG(e, n)
                    }
                }, o.attemptSynchronousHydration = function(e) {
                    switch (e.tag) {
                        case 3:
                            var t = e.stateNode;
                            if (t.current.memoizedState.isDehydrated) {
                                var n = tg(t.pendingLanes);
                                0 !== n && (tk(t, 1 | n), ad(t, tz()), 0 == (6 & lq) && (l8(), tU()))
                            }
                            break;
                        case 13:
                            var r = au();
                            ay(function() {
                                return ac(e, 1, r)
                            }), aG(e, 1)
                    }
                }, o.batchedUpdates = function(e, t) {
                    var n = lq;
                    lq |= 1;
                    try {
                        return e(t)
                    } finally {
                        0 === (lq = n) && (l8(), tD && tU())
                    }
                }, o.createComponentSelector = function(e) {
                    return {
                        $$typeof: lL,
                        value: e
                    }
                }, o.createContainer = function(e, t, n, r, l, a, i) {
                    return a$(e, t, !1, null, n, r, l, a, i)
                }, o.createHasPseudoClassSelector = function(e) {
                    return {
                        $$typeof: lM,
                        value: e
                    }
                }, o.createHydrationContainer = function(e, t, n, r, l, a, i, o, u) {
                    return (e = a$(n, r, !0, e, l, a, i, o, u)).context = aq(null), n = e.current, (a = t4(r = au(), l = as(n))).callback = null != t ? t : null, t6(n, a), e.current.lanes = l, tS(e, l, r), ad(e, r), e
                }, o.createPortal = function(e, t, n) {
                    var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                    return {
                        $$typeof: h,
                        key: null == r ? null : "" + r,
                        children: e,
                        containerInfo: t,
                        implementation: n
                    }
                }, o.createRoleSelector = function(e) {
                    return {
                        $$typeof: lR,
                        value: e
                    }
                }, o.createTestNameSelector = function(e) {
                    return {
                        $$typeof: lI,
                        value: e
                    }
                }, o.createTextSelector = function(e) {
                    return {
                        $$typeof: lj,
                        value: e
                    }
                }, o.deferredUpdates = function(e) {
                    var t = tE,
                        n = l$.transition;
                    try {
                        return l$.transition = null, tE = 16, e()
                    } finally {
                        tE = t, l$.transition = n
                    }
                }, o.discreteUpdates = function(e, t, n, r, l) {
                    var a = tE,
                        i = l$.transition;
                    try {
                        return l$.transition = null, tE = 1, e(t, n, r, l)
                    } finally {
                        tE = a, l$.transition = i, 0 === lq && l8()
                    }
                }, o.findAllNodes = lH, o.findBoundingRects = function(e, t) {
                    if (!ea) throw Error(f(363));
                    t = lH(e, t), e = [];
                    for (var n = 0; n < t.length; n++) e.push(eo(t[n]));
                    for (t = e.length - 1; 0 < t; t--) {
                        n = e[t];
                        for (var r = n.x, l = r + n.width, a = n.y, i = a + n.height, o = t - 1; 0 <= o; o--)
                            if (t !== o) {
                                var u = e[o],
                                    s = u.x,
                                    c = s + u.width,
                                    d = u.y,
                                    p = d + u.height;
                                if (r >= s && a >= d && l <= c && i <= p) {
                                    e.splice(t, 1);
                                    break
                                }
                                if (r !== s || n.width !== u.width || p < a || d > i) {
                                    if (!(a !== d || n.height !== u.height || c < r || s > l)) {
                                        s > r && (u.width += s - r, u.x = r), c < l && (u.width = l - s), e.splice(t, 1);
                                        break
                                    }
                                } else {
                                    d > a && (u.height += d - a, u.y = a), p < i && (u.height = i - d), e.splice(t, 1);
                                    break
                                }
                            }
                    }
                    return e
                }, o.findHostInstance = aV, o.findHostInstanceWithNoPortals = function(e) {
                    return null === (e = null !== (e = L(e)) ? function e(t) {
                        if (5 === t.tag || 6 === t.tag) return t;
                        for (t = t.child; null !== t;) {
                            if (4 !== t.tag) {
                                var n = e(t);
                                if (null !== n) return n
                            }
                            t = t.sibling
                        }
                        return null
                    }(e) : null) ? null : e.stateNode
                }, o.findHostInstanceWithWarning = function(e) {
                    return aV(e)
                }, o.flushControlled = function(e) {
                    var t = lq;
                    lq |= 1;
                    var n = l$.transition,
                        r = tE;
                    try {
                        l$.transition = null, tE = 1, e()
                    } finally {
                        tE = r, l$.transition = n, 0 === (lq = t) && (l8(), tU())
                    }
                }, o.flushPassiveEffects = aT, o.flushSync = ay, o.focusWithin = function(e, t) {
                    if (!ea) throw Error(f(363));
                    for (t = Array.from(t = lU(e = lA(e), t)), e = 0; e < t.length;) {
                        var n = t[e++];
                        if (!es(n)) {
                            if (5 === n.tag && ef(n.stateNode)) return !0;
                            for (n = n.child; null !== n;) t.push(n), n = n.sibling
                        }
                    }
                    return !1
                }, o.getCurrentUpdatePriority = function() {
                    return tE
                }, o.getFindAllNodesFailureDescription = function(e, t) {
                    if (!ea) throw Error(f(363));
                    var n = 0,
                        r = [];
                    e = [lA(e), 0];
                    for (var l = 0; l < e.length;) {
                        var a = e[l++],
                            i = e[l++],
                            o = t[i];
                        if ((5 !== a.tag || !es(a)) && (lD(a, o) && (r.push(lF(o)), ++i > n && (n = i)), i < t.length))
                            for (a = a.child; null !== a;) e.push(a, i), a = a.sibling
                    }
                    if (n < t.length) {
                        for (e = []; n < t.length; n++) e.push(lF(t[n]));
                        return "findAllNodes was able to match part of the selector:\n  " + r.join(" > ") + "\n\nNo matching component was found for:\n  " + e.join(" > ")
                    }
                    return null
                }, o.getPublicRootInstance = function(e) {
                    return (e = e.current).child ? 5 === e.child.tag ? j(e.child.stateNode) : e.child.stateNode : null
                }, o.injectIntoDevTools = function(e) {
                    if (e = {
                            bundleType: e.bundleType,
                            version: e.version,
                            rendererPackageName: e.rendererPackageName,
                            rendererConfig: e.rendererConfig,
                            overrideHookState: null,
                            overrideHookStateDeletePath: null,
                            overrideHookStateRenamePath: null,
                            overrideProps: null,
                            overridePropsDeletePath: null,
                            overridePropsRenamePath: null,
                            setErrorHandler: null,
                            setSuspenseHandler: null,
                            scheduleUpdate: null,
                            currentDispatcherRef: d.ReactCurrentDispatcher,
                            findHostInstanceByFiber: aX,
                            findFiberByHostInstance: e.findFiberByHostInstance || aJ,
                            findHostInstancesForRefresh: null,
                            scheduleRefresh: null,
                            scheduleRoot: null,
                            setRefreshHandler: null,
                            getCurrentFiber: null,
                            reconcilerVersion: "18.0.0-fc46dba67-20220329"
                        }, "undefined" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) e = !1;
                    else {
                        var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                        if (t.isDisabled || !t.supportsFiber) e = !0;
                        else {
                            try {
                                tI = t.inject(e), tj = t
                            } catch (e) {}
                            e = !!t.checkDCE
                        }
                    }
                    return e
                }, o.isAlreadyRendering = function() {
                    return !1
                }, o.observeVisibleRects = function(e, t, n, r) {
                    if (!ea) throw Error(f(363));
                    var l = ed(e = lH(e, t), n, r).disconnect;
                    return {
                        disconnect: function() {
                            l()
                        }
                    }
                }, o.registerMutableSourceForHydration = function(e, t) {
                    var n = t._getVersion;
                    n = n(t._source), null == e.mutableSourceEagerHydrationData ? e.mutableSourceEagerHydrationData = [t, n] : e.mutableSourceEagerHydrationData.push(t, n)
                }, o.runWithPriority = function(e, t) {
                    var n = tE;
                    try {
                        return tE = e, t()
                    } finally {
                        tE = n
                    }
                }, o.shouldError = function() {
                    return null
                }, o.shouldSuspend = function() {
                    return !1
                }, o.updateContainer = function(e, t, n, r) {
                    var l = t.current,
                        a = au(),
                        i = as(l);
                    return n = aq(n), null === t.context ? t.context = n : t.pendingContext = n, (t = t4(a, i)).payload = {
                        element: e
                    }, null !== (r = void 0 === r ? null : r) && (t.callback = r), t6(l, t), null !== (e = ac(l, i, a)) && t5(e, l, i), i
                }, o
            }
        },
        2576: function(e, t, n) {
            "use strict";
            e.exports = n(6511)
        },
        6525: function(e, t, n) {
            "use strict";
            e.exports = n(7287)
        },
        2546: function(e, t) {
            "use strict";
            /**
             * @license React
             * scheduler.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            function n(e, t) {
                var n = e.length;
                e.push(t);
                e: for (; 0 < n;) {
                    var r = n - 1 >>> 1,
                        l = e[r];
                    if (0 < a(l, t)) e[r] = t, e[n] = l, n = r;
                    else break e
                }
            }

            function r(e) {
                return 0 === e.length ? null : e[0]
            }

            function l(e) {
                if (0 === e.length) return null;
                var t = e[0],
                    n = e.pop();
                if (n !== t) {
                    e[0] = n;
                    e: for (var r = 0, l = e.length, i = l >>> 1; r < i;) {
                        var o = 2 * (r + 1) - 1,
                            u = e[o],
                            s = o + 1,
                            c = e[s];
                        if (0 > a(u, n)) s < l && 0 > a(c, u) ? (e[r] = c, e[s] = n, r = s) : (e[r] = u, e[o] = n, r = o);
                        else if (s < l && 0 > a(c, n)) e[r] = c, e[s] = n, r = s;
                        else break e
                    }
                }
                return t
            }

            function a(e, t) {
                var n = e.sortIndex - t.sortIndex;
                return 0 !== n ? n : e.id - t.id
            }
            if ("object" == typeof performance && "function" == typeof performance.now) {
                var i, o = performance;
                t.unstable_now = function() {
                    return o.now()
                }
            } else {
                var u = Date,
                    s = u.now();
                t.unstable_now = function() {
                    return u.now() - s
                }
            }
            var c = [],
                f = [],
                d = 1,
                p = null,
                h = 3,
                m = !1,
                v = !1,
                g = !1,
                y = "function" == typeof setTimeout ? setTimeout : null,
                b = "function" == typeof clearTimeout ? clearTimeout : null,
                w = "undefined" != typeof setImmediate ? setImmediate : null;

            function S(e) {
                for (var t = r(f); null !== t;) {
                    if (null === t.callback) l(f);
                    else if (t.startTime <= e) l(f), t.sortIndex = t.expirationTime, n(c, t);
                    else break;
                    t = r(f)
                }
            }

            function k(e) {
                if (g = !1, S(e), !v) {
                    if (null !== r(c)) v = !0, R(E);
                    else {
                        var t = r(f);
                        null !== t && I(k, t.startTime - e)
                    }
                }
            }

            function E(e, n) {
                v = !1, g && (g = !1, b(C), C = -1), m = !0;
                var a = h;
                try {
                    for (S(n), p = r(c); null !== p && (!(p.expirationTime > n) || e && !z());) {
                        var i = p.callback;
                        if ("function" == typeof i) {
                            p.callback = null, h = p.priorityLevel;
                            var o = i(p.expirationTime <= n);
                            n = t.unstable_now(), "function" == typeof o ? p.callback = o : p === r(c) && l(c), S(n)
                        } else l(c);
                        p = r(c)
                    }
                    if (null !== p) var u = !0;
                    else {
                        var s = r(f);
                        null !== s && I(k, s.startTime - n), u = !1
                    }
                    return u
                } finally {
                    p = null, h = a, m = !1
                }
            }
            "undefined" != typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
            var _ = !1,
                x = null,
                C = -1,
                P = 5,
                T = -1;

            function z() {
                return !(t.unstable_now() - T < P)
            }

            function N() {
                if (null !== x) {
                    var e = t.unstable_now();
                    T = e;
                    var n = !0;
                    try {
                        n = x(!0, e)
                    } finally {
                        n ? i() : (_ = !1, x = null)
                    }
                } else _ = !1
            }
            if ("function" == typeof w) i = function() {
                w(N)
            };
            else if ("undefined" != typeof MessageChannel) {
                var L = new MessageChannel,
                    M = L.port2;
                L.port1.onmessage = N, i = function() {
                    M.postMessage(null)
                }
            } else i = function() {
                y(N, 0)
            };

            function R(e) {
                x = e, _ || (_ = !0, i())
            }

            function I(e, n) {
                C = y(function() {
                    e(t.unstable_now())
                }, n)
            }
            t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(e) {
                e.callback = null
            }, t.unstable_continueExecution = function() {
                v || m || (v = !0, R(E))
            }, t.unstable_forceFrameRate = function(e) {
                0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < e ? Math.floor(1e3 / e) : 5
            }, t.unstable_getCurrentPriorityLevel = function() {
                return h
            }, t.unstable_getFirstCallbackNode = function() {
                return r(c)
            }, t.unstable_next = function(e) {
                switch (h) {
                    case 1:
                    case 2:
                    case 3:
                        var t = 3;
                        break;
                    default:
                        t = h
                }
                var n = h;
                h = t;
                try {
                    return e()
                } finally {
                    h = n
                }
            }, t.unstable_pauseExecution = function() {}, t.unstable_requestPaint = function() {}, t.unstable_runWithPriority = function(e, t) {
                switch (e) {
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        break;
                    default:
                        e = 3
                }
                var n = h;
                h = e;
                try {
                    return t()
                } finally {
                    h = n
                }
            }, t.unstable_scheduleCallback = function(e, l, a) {
                var i = t.unstable_now();
                switch (a = "object" == typeof a && null !== a && "number" == typeof(a = a.delay) && 0 < a ? i + a : i, e) {
                    case 1:
                        var o = -1;
                        break;
                    case 2:
                        o = 250;
                        break;
                    case 5:
                        o = 1073741823;
                        break;
                    case 4:
                        o = 1e4;
                        break;
                    default:
                        o = 5e3
                }
                return o = a + o, e = {
                    id: d++,
                    callback: l,
                    priorityLevel: e,
                    startTime: a,
                    expirationTime: o,
                    sortIndex: -1
                }, a > i ? (e.sortIndex = a, n(f, e), null === r(c) && e === r(f) && (g ? (b(C), C = -1) : g = !0, I(k, a - i))) : (e.sortIndex = o, n(c, e), v || m || (v = !0, R(E))), e
            }, t.unstable_shouldYield = z, t.unstable_wrapCallback = function(e) {
                var t = h;
                return function() {
                    var n = h;
                    h = t;
                    try {
                        return e.apply(this, arguments)
                    } finally {
                        h = n
                    }
                }
            }
        },
        373: function(e, t, n) {
            "use strict";
            e.exports = n(2546)
        },
        8192: function(e, t, n) {
            var r = n(3454);
            "undefined" != typeof self && self, e.exports = (() => {
                var e = {
                        75: function(e) {
                            (function() {
                                var t, n, l, a;
                                "undefined" != typeof performance && null !== performance && performance.now ? e.exports = function() {
                                    return performance.now()
                                } : null != r && r.hrtime ? (e.exports = function() {
                                    return (t() - a) / 1e6
                                }, n = r.hrtime, a = (t = function() {
                                    var e;
                                    return 1e9 * (e = n())[0] + e[1]
                                })() - 1e9 * r.uptime()) : Date.now ? (e.exports = function() {
                                    return Date.now() - l
                                }, l = Date.now()) : (e.exports = function() {
                                    return (new Date).getTime() - l
                                }, l = (new Date).getTime())
                            }).call(this)
                        },
                        4087: (e, t, n) => {
                            for (var r = n(75), l = "undefined" == typeof window ? n.g : window, a = ["moz", "webkit"], i = "AnimationFrame", o = l["request" + i], u = l["cancel" + i] || l["cancelRequest" + i], s = 0; !o && s < a.length; s++) o = l[a[s] + "Request" + i], u = l[a[s] + "Cancel" + i] || l[a[s] + "CancelRequest" + i];
                            if (!o || !u) {
                                var c = 0,
                                    f = 0,
                                    d = [];
                                o = function(e) {
                                    if (0 === d.length) {
                                        var t = r(),
                                            n = Math.max(0, 16.666666666666668 - (t - c));
                                        c = n + t, setTimeout(function() {
                                            var e = d.slice(0);
                                            d.length = 0;
                                            for (var t = 0; t < e.length; t++)
                                                if (!e[t].cancelled) try {
                                                    e[t].callback(c)
                                                } catch (e) {
                                                    setTimeout(function() {
                                                        throw e
                                                    }, 0)
                                                }
                                        }, Math.round(n))
                                    }
                                    return d.push({
                                        handle: ++f,
                                        callback: e,
                                        cancelled: !1
                                    }), f
                                }, u = function(e) {
                                    for (var t = 0; t < d.length; t++) d[t].handle === e && (d[t].cancelled = !0)
                                }
                            }
                            e.exports = function(e) {
                                return o.call(l, e)
                            }, e.exports.cancel = function() {
                                u.apply(l, arguments)
                            }, e.exports.polyfill = function(e) {
                                e || (e = l), e.requestAnimationFrame = o, e.cancelAnimationFrame = u
                            }
                        }
                    },
                    t = {};

                function n(r) {
                    var l = t[r];
                    if (void 0 !== l) return l.exports;
                    var a = t[r] = {
                        exports: {}
                    };
                    return e[r].call(a.exports, a, a.exports, n), a.exports
                }
                n.n = e => {
                    var t = e && e.__esModule ? () => e.default : () => e;
                    return n.d(t, {
                        a: t
                    }), t
                }, n.d = (e, t) => {
                    for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r]
                    })
                }, n.g = function() {
                    if ("object" == typeof globalThis) return globalThis;
                    try {
                        return this || Function("return this")()
                    } catch (e) {
                        if ("object" == typeof window) return window
                    }
                }(), n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
                var l = {};
                return (() => {
                    "use strict";
                    n.d(l, {
                        default: () => x
                    });
                    var e = n(4087),
                        t = n.n(e);
                    let r = function(e) {
                            return new RegExp(/<[a-z][\s\S]*>/i).test(e)
                        },
                        a = function(e, t) {
                            return Math.floor(Math.random() * (t - e + 1)) + e
                        };
                    var i = "TYPE_CHARACTER",
                        o = "REMOVE_CHARACTER",
                        u = "REMOVE_ALL",
                        s = "REMOVE_LAST_VISIBLE_NODE",
                        c = "PAUSE_FOR",
                        f = "CALL_FUNCTION",
                        d = "ADD_HTML_TAG_ELEMENT",
                        p = "CHANGE_DELETE_SPEED",
                        h = "CHANGE_DELAY",
                        m = "CHANGE_CURSOR",
                        v = "PASTE_STRING",
                        g = "HTML_TAG";

                    function y(e) {
                        return (y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        })(e)
                    }

                    function b(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            t && (r = r.filter(function(t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable
                            })), n.push.apply(n, r)
                        }
                        return n
                    }

                    function w(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? b(Object(n), !0).forEach(function(t) {
                                E(e, t, n[t])
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : b(Object(n)).forEach(function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            })
                        }
                        return e
                    }

                    function S(e) {
                        return function(e) {
                            if (Array.isArray(e)) return k(e)
                        }(e) || function(e) {
                            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                        }(e) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return k(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? k(e, t) : void 0
                            }
                        }(e) || function() {
                            throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }

                    function k(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                        return r
                    }

                    function E(e, t, n) {
                        return (t = _(t)) in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n, e
                    }

                    function _(e) {
                        var t = function(e, t) {
                            if ("object" !== y(e) || null === e) return e;
                            var n = e[Symbol.toPrimitive];
                            if (void 0 !== n) {
                                var r = n.call(e, "string");
                                if ("object" !== y(r)) return r;
                                throw TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return String(e)
                        }(e);
                        return "symbol" === y(t) ? t : String(t)
                    }
                    let x = function() {
                        var n;

                        function l(n, y) {
                            var b = this;
                            if (function(e, t) {
                                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                                }(this, l), E(this, "state", {
                                    cursorAnimation: null,
                                    lastFrameTime: null,
                                    pauseUntil: null,
                                    eventQueue: [],
                                    eventLoop: null,
                                    eventLoopPaused: !1,
                                    reverseCalledEvents: [],
                                    calledEvents: [],
                                    visibleNodes: [],
                                    initialOptions: null,
                                    elements: {
                                        container: null,
                                        wrapper: document.createElement("span"),
                                        cursor: document.createElement("span")
                                    }
                                }), E(this, "options", {
                                    strings: null,
                                    cursor: "|",
                                    delay: "natural",
                                    pauseFor: 1500,
                                    deleteSpeed: "natural",
                                    loop: !1,
                                    autoStart: !1,
                                    devMode: !1,
                                    skipAddStyles: !1,
                                    wrapperClassName: "Typewriter__wrapper",
                                    cursorClassName: "Typewriter__cursor",
                                    stringSplitter: null,
                                    onCreateTextNode: null,
                                    onRemoveNode: null
                                }), E(this, "setupWrapperElement", function() {
                                    b.state.elements.container && (b.state.elements.wrapper.className = b.options.wrapperClassName, b.state.elements.cursor.className = b.options.cursorClassName, b.state.elements.cursor.innerHTML = b.options.cursor, b.state.elements.container.innerHTML = "", b.state.elements.container.appendChild(b.state.elements.wrapper), b.state.elements.container.appendChild(b.state.elements.cursor))
                                }), E(this, "start", function() {
                                    return b.state.eventLoopPaused = !1, b.runEventLoop(), b
                                }), E(this, "pause", function() {
                                    return b.state.eventLoopPaused = !0, b
                                }), E(this, "stop", function() {
                                    return b.state.eventLoop && ((0, e.cancel)(b.state.eventLoop), b.state.eventLoop = null), b
                                }), E(this, "pauseFor", function(e) {
                                    return b.addEventToQueue(c, {
                                        ms: e
                                    }), b
                                }), E(this, "typeOutAllStrings", function() {
                                    return "string" == typeof b.options.strings ? (b.typeString(b.options.strings).pauseFor(b.options.pauseFor), b) : (b.options.strings.forEach(function(e) {
                                        b.typeString(e).pauseFor(b.options.pauseFor).deleteAll(b.options.deleteSpeed)
                                    }), b)
                                }), E(this, "typeString", function(e) {
                                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                                    if (r(e)) return b.typeOutHTMLString(e, t);
                                    if (e) {
                                        var n = (b.options || {}).stringSplitter,
                                            l = "function" == typeof n ? n(e) : e.split("");
                                        b.typeCharacters(l, t)
                                    }
                                    return b
                                }), E(this, "pasteString", function(e) {
                                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                                    return r(e) ? b.typeOutHTMLString(e, t, !0) : (e && b.addEventToQueue(v, {
                                        character: e,
                                        node: t
                                    }), b)
                                }), E(this, "typeOutHTMLString", function(e) {
                                    var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                        r = arguments.length > 2 ? arguments[2] : void 0,
                                        l = ((t = document.createElement("div")).innerHTML = e, t.childNodes);
                                    if (l.length > 0)
                                        for (var a = 0; a < l.length; a++) {
                                            var i = l[a],
                                                o = i.innerHTML;
                                            i && 3 !== i.nodeType ? (i.innerHTML = "", b.addEventToQueue(d, {
                                                node: i,
                                                parentNode: n
                                            }), r ? b.pasteString(o, i) : b.typeString(o, i)) : i.textContent && (r ? b.pasteString(i.textContent, n) : b.typeString(i.textContent, n))
                                        }
                                    return b
                                }), E(this, "deleteAll", function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "natural";
                                    return b.addEventToQueue(u, {
                                        speed: e
                                    }), b
                                }), E(this, "changeDeleteSpeed", function(e) {
                                    if (!e) throw Error("Must provide new delete speed");
                                    return b.addEventToQueue(p, {
                                        speed: e
                                    }), b
                                }), E(this, "changeDelay", function(e) {
                                    if (!e) throw Error("Must provide new delay");
                                    return b.addEventToQueue(h, {
                                        delay: e
                                    }), b
                                }), E(this, "changeCursor", function(e) {
                                    if (!e) throw Error("Must provide new cursor");
                                    return b.addEventToQueue(m, {
                                        cursor: e
                                    }), b
                                }), E(this, "deleteChars", function(e) {
                                    if (!e) throw Error("Must provide amount of characters to delete");
                                    for (var t = 0; t < e; t++) b.addEventToQueue(o);
                                    return b
                                }), E(this, "callFunction", function(e, t) {
                                    if (!e || "function" != typeof e) throw Error("Callback must be a function");
                                    return b.addEventToQueue(f, {
                                        cb: e,
                                        thisArg: t
                                    }), b
                                }), E(this, "typeCharacters", function(e) {
                                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                                    if (!e || !Array.isArray(e)) throw Error("Characters must be an array");
                                    return e.forEach(function(e) {
                                        b.addEventToQueue(i, {
                                            character: e,
                                            node: t
                                        })
                                    }), b
                                }), E(this, "removeCharacters", function(e) {
                                    if (!e || !Array.isArray(e)) throw Error("Characters must be an array");
                                    return e.forEach(function() {
                                        b.addEventToQueue(o)
                                    }), b
                                }), E(this, "addEventToQueue", function(e, t) {
                                    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                    return b.addEventToStateProperty(e, t, n, "eventQueue")
                                }), E(this, "addReverseCalledEvent", function(e, t) {
                                    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                    return b.options.loop ? b.addEventToStateProperty(e, t, n, "reverseCalledEvents") : b
                                }), E(this, "addEventToStateProperty", function(e, t) {
                                    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                                        r = arguments.length > 3 ? arguments[3] : void 0,
                                        l = {
                                            eventName: e,
                                            eventArgs: t || {}
                                        };
                                    return b.state[r] = n ? [l].concat(S(b.state[r])) : [].concat(S(b.state[r]), [l]), b
                                }), E(this, "runEventLoop", function() {
                                    b.state.lastFrameTime || (b.state.lastFrameTime = Date.now());
                                    var e = Date.now(),
                                        n = e - b.state.lastFrameTime;
                                    if (!b.state.eventQueue.length) {
                                        if (!b.options.loop) return;
                                        b.state.eventQueue = S(b.state.calledEvents), b.state.calledEvents = [], b.options = w({}, b.state.initialOptions)
                                    }
                                    if (b.state.eventLoop = t()(b.runEventLoop), !b.state.eventLoopPaused) {
                                        if (b.state.pauseUntil) {
                                            if (e < b.state.pauseUntil) return;
                                            b.state.pauseUntil = null
                                        }
                                        var r, l = S(b.state.eventQueue),
                                            y = l.shift();
                                        if (!(n <= (r = y.eventName === s || y.eventName === o ? "natural" === b.options.deleteSpeed ? a(40, 80) : b.options.deleteSpeed : "natural" === b.options.delay ? a(120, 160) : b.options.delay))) {
                                            var k = y.eventName,
                                                E = y.eventArgs;
                                            switch (b.logInDevMode({
                                                    currentEvent: y,
                                                    state: b.state,
                                                    delay: r
                                                }), k) {
                                                case v:
                                                case i:
                                                    var _ = E.character,
                                                        x = E.node,
                                                        C = document.createTextNode(_),
                                                        P = C;
                                                    b.options.onCreateTextNode && "function" == typeof b.options.onCreateTextNode && (P = b.options.onCreateTextNode(_, C)), P && (x ? x.appendChild(P) : b.state.elements.wrapper.appendChild(P)), b.state.visibleNodes = [].concat(S(b.state.visibleNodes), [{
                                                        type: "TEXT_NODE",
                                                        character: _,
                                                        node: P
                                                    }]);
                                                    break;
                                                case o:
                                                    l.unshift({
                                                        eventName: s,
                                                        eventArgs: {
                                                            removingCharacterNode: !0
                                                        }
                                                    });
                                                    break;
                                                case c:
                                                    var T = y.eventArgs.ms;
                                                    b.state.pauseUntil = Date.now() + parseInt(T);
                                                    break;
                                                case f:
                                                    var z = y.eventArgs,
                                                        N = z.cb,
                                                        L = z.thisArg;
                                                    N.call(L, {
                                                        elements: b.state.elements
                                                    });
                                                    break;
                                                case d:
                                                    var M = y.eventArgs,
                                                        R = M.node,
                                                        I = M.parentNode;
                                                    I ? I.appendChild(R) : b.state.elements.wrapper.appendChild(R), b.state.visibleNodes = [].concat(S(b.state.visibleNodes), [{
                                                        type: g,
                                                        node: R,
                                                        parentNode: I || b.state.elements.wrapper
                                                    }]);
                                                    break;
                                                case u:
                                                    var j = b.state.visibleNodes,
                                                        O = E.speed,
                                                        A = [];
                                                    O && A.push({
                                                        eventName: p,
                                                        eventArgs: {
                                                            speed: O,
                                                            temp: !0
                                                        }
                                                    });
                                                    for (var D = 0, F = j.length; D < F; D++) A.push({
                                                        eventName: s,
                                                        eventArgs: {
                                                            removingCharacterNode: !1
                                                        }
                                                    });
                                                    O && A.push({
                                                        eventName: p,
                                                        eventArgs: {
                                                            speed: b.options.deleteSpeed,
                                                            temp: !0
                                                        }
                                                    }), l.unshift.apply(l, A);
                                                    break;
                                                case s:
                                                    var U = y.eventArgs.removingCharacterNode;
                                                    if (b.state.visibleNodes.length) {
                                                        var H = b.state.visibleNodes.pop(),
                                                            Q = H.type,
                                                            B = H.node,
                                                            W = H.character;
                                                        b.options.onRemoveNode && "function" == typeof b.options.onRemoveNode && b.options.onRemoveNode({
                                                            node: B,
                                                            character: W
                                                        }), B && B.parentNode.removeChild(B), Q === g && U && l.unshift({
                                                            eventName: s,
                                                            eventArgs: {}
                                                        })
                                                    }
                                                    break;
                                                case p:
                                                    b.options.deleteSpeed = y.eventArgs.speed;
                                                    break;
                                                case h:
                                                    b.options.delay = y.eventArgs.delay;
                                                    break;
                                                case m:
                                                    b.options.cursor = y.eventArgs.cursor, b.state.elements.cursor.innerHTML = y.eventArgs.cursor
                                            }
                                            b.options.loop && (y.eventName === s || y.eventArgs && y.eventArgs.temp || (b.state.calledEvents = [].concat(S(b.state.calledEvents), [y]))), b.state.eventQueue = l, b.state.lastFrameTime = e
                                        }
                                    }
                                }), n) {
                                if ("string" == typeof n) {
                                    var k = document.querySelector(n);
                                    if (!k) throw Error("Could not find container element");
                                    this.state.elements.container = k
                                } else this.state.elements.container = n
                            }
                            y && (this.options = w(w({}, this.options), y)), this.state.initialOptions = w({}, this.options), this.init()
                        }
                        return n = [{
                                key: "init",
                                value: function() {
                                    var e;
                                    this.setupWrapperElement(), this.addEventToQueue(m, {
                                        cursor: this.options.cursor
                                    }, !0), this.addEventToQueue(u, null, !0), !window || window.___TYPEWRITER_JS_STYLES_ADDED___ || this.options.skipAddStyles || ((e = document.createElement("style")).appendChild(document.createTextNode(".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}")), document.head.appendChild(e), window.___TYPEWRITER_JS_STYLES_ADDED___ = !0), !0 === this.options.autoStart && this.options.strings && this.typeOutAllStrings().start()
                                }
                            }, {
                                key: "logInDevMode",
                                value: function(e) {
                                    this.options.devMode && console.log(e)
                                }
                            }],
                            function(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var r = t[n];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, _(r.key), r)
                                }
                            }(l.prototype, n), Object.defineProperty(l, "prototype", {
                                writable: !1
                            }), l
                    }()
                })(), l.default
            })()
        }
    }
]);