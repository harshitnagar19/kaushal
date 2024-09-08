"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [603], {
        4037: function(t, e, n) {
            n.d(e, {
                j: function() {
                    return P
                }
            });
            var r, l = n(5487);

            function a(t, e, n) {
                var r;
                if ("string" == typeof t) {
                    let a = document;
                    e && ((0, l.k)(!!e.current, "Scope provided, but no element detected."), a = e.current), n ? (null !== (r = n[t]) && void 0 !== r || (n[t] = a.querySelectorAll(t)), t = n[t]) : t = a.querySelectorAll(t)
                } else t instanceof Element && (t = [t]);
                return Array.from(t || [])
            }
            var i = n(6955),
                u = n(2074),
                s = n(4522);
            let o = (0, s.X)(() => void 0 !== window.ScrollTimeline);
            class f {
                constructor(t) {
                    this.animations = t.filter(Boolean)
                }
                then(t, e) {
                    return Promise.all(this.animations).then(t).catch(e)
                }
                getAll(t) {
                    return this.animations[0][t]
                }
                setAll(t, e) {
                    for (let n = 0; n < this.animations.length; n++) this.animations[n][t] = e
                }
                attachTimeline(t) {
                    let e = this.animations.map(e => {
                        if (!o() || !e.attachTimeline) return e.pause(),
                            function(t, e) {
                                let n;
                                let r = () => {
                                    let {
                                        currentTime: r
                                    } = e, l = null === r ? 0 : r.value, a = l / 100;
                                    n !== a && t(a), n = a
                                };
                                return u.Wi.update(r, !0), () => (0, u.Pn)(r)
                            }(t => {
                                e.time = e.duration * t
                            }, t);
                        e.attachTimeline(t)
                    });
                    return () => {
                        e.forEach((t, e) => {
                            t && t(), this.animations[e].stop()
                        })
                    }
                }
                get time() {
                    return this.getAll("time")
                }
                set time(t) {
                    this.setAll("time", t)
                }
                get speed() {
                    return this.getAll("speed")
                }
                set speed(t) {
                    this.setAll("speed", t)
                }
                get duration() {
                    let t = 0;
                    for (let e = 0; e < this.animations.length; e++) t = Math.max(t, this.animations[e].duration);
                    return t
                }
                runAll(t) {
                    this.animations.forEach(e => e[t]())
                }
                play() {
                    this.runAll("play")
                }
                pause() {
                    this.runAll("pause")
                }
                stop() {
                    this.runAll("stop")
                }
                cancel() {
                    this.runAll("cancel")
                }
                complete() {
                    this.runAll("complete")
                }
            }
            var c = n(2711),
                h = n(5194),
                p = n(5794),
                m = n(4547),
                d = n(1059),
                y = n(5086),
                g = n(2284),
                v = n(6917),
                A = n(599),
                w = n(6615),
                k = n(3967),
                S = n(406);

            function b(t, e, n, r) {
                var l;
                return "number" == typeof e ? e : e.startsWith("-") || e.startsWith("+") ? Math.max(0, t + parseFloat(e)) : "<" === e ? n : null !== (l = r.get(e)) && void 0 !== l ? l : t
            }
            let x = (t, e, n) => {
                let r = e - t;
                return ((n - t) % r + r) % r + t
            };
            var E = n(3338),
                M = n(10),
                C = n(22);

            function W(t, e) {
                return t.at !== e.at ? t.at - e.at : null === t.value ? 1 : null === e.value ? -1 : 0
            }

            function _(t, e) {
                return e.has(t) || e.set(t, {}), e.get(t)
            }

            function N(t, e) {
                return e[t] || (e[t] = []), e[t]
            }
            let O = t => "number" == typeof t,
                T = t => t.every(O);

            function j(t, e, n, r) {
                let u = a(t, r),
                    s = u.length;
                (0, l.k)(!!s, "No valid element provided.");
                let o = [];
                for (let t = 0; t < s; t++) {
                    let r = u[t];
                    i.R.has(r) || function(t) {
                        let e = {
                                presenceContext: null,
                                props: {},
                                visualState: {
                                    renderState: {
                                        transform: {},
                                        transformOrigin: {},
                                        style: {},
                                        vars: {},
                                        attrs: {}
                                    },
                                    latestValues: {}
                                }
                            },
                            n = (0, h.v)(t) ? new p.e(e, {
                                enableHardwareAcceleration: !1
                            }) : new m.W(e, {
                                enableHardwareAcceleration: !0
                            });
                        n.mount(t), i.R.set(t, n)
                    }(r);
                    let l = i.R.get(r),
                        a = {
                            ...n
                        };
                    "function" == typeof a.delay && (a.delay = a.delay(t, s)), o.push(...(0, c.w)(l, {
                        ...e,
                        transition: a
                    }, {}))
                }
                return new f(o)
            }
            let H = t => Array.isArray(t) && Array.isArray(t[0]),
                P = function(t, e, n) {
                    let l;
                    return l = H(t) ? function(t, e, n) {
                        let r = [],
                            l = function(t, {
                                defaultTransition: e = {},
                                ...n
                            } = {}, r) {
                                let l = e.duration || .3,
                                    i = new Map,
                                    u = new Map,
                                    s = {},
                                    o = new Map,
                                    f = 0,
                                    c = 0,
                                    h = 0;
                                for (let n = 0; n < t.length; n++) {
                                    let i = t[n];
                                    if ("string" == typeof i) {
                                        o.set(i, c);
                                        continue
                                    }
                                    if (!Array.isArray(i)) {
                                        o.set(i.name, b(c, i.at, f, o));
                                        continue
                                    }
                                    let [m, d, k = {}] = i;
                                    void 0 !== k.at && (c = b(c, k.at, f, o));
                                    let W = 0,
                                        O = (t, n, r, a = 0, i = 0) => {
                                            let u = Array.isArray(t) ? t : [t],
                                                {
                                                    delay: s = 0,
                                                    times: o = (0, A.Y)(u),
                                                    type: f = "keyframes",
                                                    ...p
                                                } = n,
                                                {
                                                    ease: m = e.ease || "easeOut",
                                                    duration: d
                                                } = n,
                                                k = "function" == typeof s ? s(a, i) : s,
                                                S = u.length;
                                            if (S <= 2 && "spring" === f) {
                                                let t = 100;
                                                if (2 === S && T(u)) {
                                                    let e = u[1] - u[0];
                                                    t = Math.abs(e)
                                                }
                                                let e = {
                                                    ...p
                                                };
                                                void 0 !== d && (e.duration = (0, v.w)(d));
                                                let n = function(t, e = 100) {
                                                    let n = (0, y.S)({
                                                            keyframes: [0, e],
                                                            ...t
                                                        }),
                                                        r = Math.min((0, g.i)(n), g.E);
                                                    return {
                                                        type: "keyframes",
                                                        ease: t => n.next(r * t).value / e,
                                                        duration: (0, v.X)(r)
                                                    }
                                                }(e, t);
                                                m = n.ease, d = n.duration
                                            }
                                            null != d || (d = l);
                                            let b = c + k,
                                                _ = b + d;
                                            1 === o.length && 0 === o[0] && (o[1] = 1);
                                            let N = o.length - u.length;
                                            N > 0 && (0, w.c)(o, N), 1 === u.length && u.unshift(null),
                                                function(t, e, n, r, l, a) {
                                                    ! function(t, e, n) {
                                                        for (let r = 0; r < t.length; r++) {
                                                            let l = t[r];
                                                            l.at > e && l.at < n && ((0, M.cl)(t, l), r--)
                                                        }
                                                    }(t, l, a);
                                                    for (let u = 0; u < e.length; u++) {
                                                        var i;
                                                        t.push({
                                                            value: e[u],
                                                            at: (0, C.C)(l, a, r[u]),
                                                            easing: (i = u, (0, E.N)(n) ? n[x(0, n.length, i)] : n)
                                                        })
                                                    }
                                                }(r, u, m, o, b, _), W = Math.max(k + d, W), h = Math.max(_, h)
                                        };
                                    if ((0, S.i)(m)) {
                                        let t = _(m, u);
                                        O(d, k, N("default", t))
                                    } else {
                                        let t = a(m, r, s),
                                            e = t.length;
                                        for (let n = 0; n < e; n++) {
                                            let r = t[n],
                                                l = _(r, u);
                                            for (let t in d) {
                                                var p;
                                                O(d[t], k[p = t] ? {
                                                    ...k,
                                                    ...k[p]
                                                } : {
                                                    ...k
                                                }, N(t, l), n, e)
                                            }
                                        }
                                    }
                                    f = c, c += W
                                }
                                return u.forEach((t, r) => {
                                    for (let l in t) {
                                        let a = t[l];
                                        a.sort(W);
                                        let u = [],
                                            s = [],
                                            o = [];
                                        for (let t = 0; t < a.length; t++) {
                                            let {
                                                at: e,
                                                value: n,
                                                easing: r
                                            } = a[t];
                                            u.push(n), s.push((0, k.Y)(0, h, e)), o.push(r || "easeOut")
                                        }
                                        0 !== s[0] && (s.unshift(0), u.unshift(u[0]), o.unshift("easeInOut")), 1 !== s[s.length - 1] && (s.push(1), u.push(null)), i.has(r) || i.set(r, {
                                            keyframes: {},
                                            transition: {}
                                        });
                                        let f = i.get(r);
                                        f.keyframes[l] = u, f.transition[l] = {
                                            ...e,
                                            duration: h,
                                            ease: o,
                                            times: s,
                                            ...n
                                        }
                                    }
                                }), i
                            }(t, e, n);
                        return l.forEach(({
                            keyframes: t,
                            transition: e
                        }, n) => {
                            let l;
                            l = (0, S.i)(n) ? (0, d.D)(n, t.default, e.default) : j(n, t, e), r.push(l)
                        }), new f(r)
                    }(t, e, r) : "object" != typeof e || Array.isArray(e) ? (0, d.D)(t, e, n) : j(t, e, n, r), r && r.animations.push(l), l
                }
        },
        4960: function(t, e, n) {
            n.d(e, {
                c: function() {
                    return u
                }
            });
            var r = n(7294),
                l = n(3234),
                a = n(6014),
                i = n(6681);

            function u(t) {
                let e = (0, i.h)(() => (0, l.BX)(t)),
                    {
                        isStatic: n
                    } = (0, r.useContext)(a._);
                if (n) {
                    let [, n] = (0, r.useState)(t);
                    (0, r.useEffect)(() => e.on("change", n), [])
                }
                return e
            }
        },
        8828: function(t, e, n) {
            n.d(e, {
                H: function() {
                    return h
                }
            });
            var r = n(4606);
            let l = t => t && "object" == typeof t && t.mix,
                a = t => l(t) ? t.mix : void 0;
            var i = n(4960),
                u = n(8868),
                s = n(2074);

            function o(t, e) {
                let n = (0, i.c)(e()),
                    r = () => n.set(e());
                return r(), (0, u.L)(() => {
                    let e = () => s.Wi.update(r, !1, !0),
                        n = t.map(t => t.on("change", e));
                    return () => {
                        n.forEach(t => t()), (0, s.Pn)(r)
                    }
                }), n
            }
            var f = n(6681),
                c = n(3234);

            function h(t, e, n, l) {
                if ("function" == typeof t) return function(t) {
                    c.S1.current = [], t();
                    let e = o(c.S1.current, t);
                    return c.S1.current = void 0, e
                }(t);
                let i = "function" == typeof e ? e : function(...t) {
                    let e = !Array.isArray(t[0]),
                        n = e ? 0 : -1,
                        l = t[0 + n],
                        i = t[1 + n],
                        u = t[2 + n],
                        s = t[3 + n],
                        o = (0, r.s)(i, u, {
                            mixer: a(u[0]),
                            ...s
                        });
                    return e ? o(l) : o
                }(e, n, l);
                return Array.isArray(t) ? p(t, i) : p([t], ([t]) => i(t))
            }

            function p(t, e) {
                let n = (0, f.h)(() => []);
                return o(t, () => {
                    n.length = 0;
                    let r = t.length;
                    for (let e = 0; e < r; e++) n[e] = t[e].get();
                    return e(n)
                })
            }
        }
    }
]);