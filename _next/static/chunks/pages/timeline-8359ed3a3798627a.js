(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [463], {
        3340: function(e) {
            e.exports = function(e) {
                function t(i) {
                    if (n[i]) return n[i].exports;
                    var a = n[i] = {
                        exports: {},
                        id: i,
                        loaded: !1
                    };
                    return e[i].call(a.exports, a, a.exports, t), a.loaded = !0, a.exports
                }
                var n = {};
                return t.m = e, t.c = n, t.p = "dist/", t(0)
            }([function(e, t, n) {
                "use strict";

                function i(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                var a = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                        }
                        return e
                    },
                    o = (i(n(1)), n(6)),
                    r = i(o),
                    s = i(n(7)),
                    c = i(n(8)),
                    l = i(n(9)),
                    d = i(n(10)),
                    u = i(n(11)),
                    m = i(n(14)),
                    f = [],
                    A = !1,
                    g = {
                        offset: 120,
                        delay: 0,
                        easing: "ease",
                        duration: 400,
                        disable: !1,
                        once: !1,
                        startEvent: "DOMContentLoaded",
                        throttleDelay: 99,
                        debounceDelay: 50,
                        disableMutationObserver: !1
                    },
                    p = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        if (e && (A = !0), A) return f = (0, u.default)(f, g), (0, d.default)(f, g.once), f
                    },
                    h = function() {
                        f = (0, m.default)(), p()
                    },
                    b = function() {
                        f.forEach(function(e, t) {
                            e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay")
                        })
                    };
                e.exports = {
                    init: function(e) {
                        g = a(g, e), f = (0, m.default)();
                        var t, n = document.all && !window.atob;
                        return !0 === (t = g.disable) || "mobile" === t && l.default.mobile() || "phone" === t && l.default.phone() || "tablet" === t && l.default.tablet() || "function" == typeof t && !0 === t() || n ? b() : (g.disableMutationObserver || c.default.isSupported() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '), g.disableMutationObserver = !0), document.querySelector("body").setAttribute("data-aos-easing", g.easing), document.querySelector("body").setAttribute("data-aos-duration", g.duration), document.querySelector("body").setAttribute("data-aos-delay", g.delay), "DOMContentLoaded" === g.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? p(!0) : "load" === g.startEvent ? window.addEventListener(g.startEvent, function() {
                            p(!0)
                        }) : document.addEventListener(g.startEvent, function() {
                            p(!0)
                        }), window.addEventListener("resize", (0, s.default)(p, g.debounceDelay, !0)), window.addEventListener("orientationchange", (0, s.default)(p, g.debounceDelay, !0)), window.addEventListener("scroll", (0, r.default)(function() {
                            (0, d.default)(f, g.once)
                        }, g.throttleDelay)), g.disableMutationObserver || c.default.ready("[data-aos]", h), f)
                    },
                    refresh: p,
                    refreshHard: h
                }
            }, function(e, t) {}, , , , , function(e, t) {
                (function(t) {
                    "use strict";

                    function n(e) {
                        var t = void 0 === e ? "undefined" : a(e);
                        return !!e && ("object" == t || "function" == t)
                    }

                    function i(e) {
                        if ("number" == typeof e) return e;
                        if ("symbol" == (void 0 === (t = e) ? "undefined" : a(t)) || t && "object" == (void 0 === t ? "undefined" : a(t)) && p.call(t) == s) return r;
                        if (n(e)) {
                            var t, i = "function" == typeof e.valueOf ? e.valueOf() : e;
                            e = n(i) ? i + "" : i
                        }
                        if ("string" != typeof e) return 0 === e ? e : +e;
                        var o = d.test(e = e.replace(c, ""));
                        return o || u.test(e) ? m(e.slice(2), o ? 2 : 8) : l.test(e) ? r : +e
                    }
                    var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        },
                        o = "Expected a function",
                        r = NaN,
                        s = "[object Symbol]",
                        c = /^\s+|\s+$/g,
                        l = /^[-+]0x[0-9a-f]+$/i,
                        d = /^0b[01]+$/i,
                        u = /^0o[0-7]+$/i,
                        m = parseInt,
                        f = "object" == (void 0 === t ? "undefined" : a(t)) && t && t.Object === Object && t,
                        A = "object" == ("undefined" == typeof self ? "undefined" : a(self)) && self && self.Object === Object && self,
                        g = f || A || Function("return this")(),
                        p = Object.prototype.toString,
                        h = Math.max,
                        b = Math.min,
                        v = function() {
                            return g.Date.now()
                        };
                    e.exports = function(e, t, a) {
                        var r = !0,
                            s = !0;
                        if ("function" != typeof e) throw TypeError(o);
                        return n(a) && (r = "leading" in a ? !!a.leading : r, s = "trailing" in a ? !!a.trailing : s),
                            function(e, t, a) {
                                function r(t) {
                                    var n = u,
                                        i = m;
                                    return u = m = void 0, x = t, A = e.apply(i, n)
                                }

                                function s(e) {
                                    var n = e - p,
                                        i = e - x;
                                    return void 0 === p || n >= t || n < 0 || y && i >= f
                                }

                                function c() {
                                    var e, n, i, a = v();
                                    return s(a) ? l(a) : void(g = setTimeout(c, (e = a - p, n = a - x, i = t - e, y ? b(i, f - n) : i)))
                                }

                                function l(e) {
                                    return g = void 0, j && u ? r(e) : (u = m = void 0, A)
                                }

                                function d() {
                                    var e, n = v(),
                                        i = s(n);
                                    if (u = arguments, m = this, p = n, i) {
                                        if (void 0 === g) return x = e = p, g = setTimeout(c, t), w ? r(e) : A;
                                        if (y) return g = setTimeout(c, t), r(p)
                                    }
                                    return void 0 === g && (g = setTimeout(c, t)), A
                                }
                                var u, m, f, A, g, p, x = 0,
                                    w = !1,
                                    y = !1,
                                    j = !0;
                                if ("function" != typeof e) throw TypeError(o);
                                return t = i(t) || 0, n(a) && (w = !!a.leading, f = (y = "maxWait" in a) ? h(i(a.maxWait) || 0, t) : f, j = "trailing" in a ? !!a.trailing : j), d.cancel = function() {
                                    void 0 !== g && clearTimeout(g), x = 0, u = p = m = g = void 0
                                }, d.flush = function() {
                                    return void 0 === g ? A : l(v())
                                }, d
                            }(e, t, {
                                leading: r,
                                maxWait: t,
                                trailing: s
                            })
                    }
                }).call(t, function() {
                    return this
                }())
            }, function(e, t) {
                (function(t) {
                    "use strict";

                    function n(e) {
                        var t = void 0 === e ? "undefined" : a(e);
                        return !!e && ("object" == t || "function" == t)
                    }

                    function i(e) {
                        if ("number" == typeof e) return e;
                        if ("symbol" == (void 0 === (t = e) ? "undefined" : a(t)) || t && "object" == (void 0 === t ? "undefined" : a(t)) && g.call(t) == r) return o;
                        if (n(e)) {
                            var t, i = "function" == typeof e.valueOf ? e.valueOf() : e;
                            e = n(i) ? i + "" : i
                        }
                        if ("string" != typeof e) return 0 === e ? e : +e;
                        var m = l.test(e = e.replace(s, ""));
                        return m || d.test(e) ? u(e.slice(2), m ? 2 : 8) : c.test(e) ? o : +e
                    }
                    var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        },
                        o = NaN,
                        r = "[object Symbol]",
                        s = /^\s+|\s+$/g,
                        c = /^[-+]0x[0-9a-f]+$/i,
                        l = /^0b[01]+$/i,
                        d = /^0o[0-7]+$/i,
                        u = parseInt,
                        m = "object" == (void 0 === t ? "undefined" : a(t)) && t && t.Object === Object && t,
                        f = "object" == ("undefined" == typeof self ? "undefined" : a(self)) && self && self.Object === Object && self,
                        A = m || f || Function("return this")(),
                        g = Object.prototype.toString,
                        p = Math.max,
                        h = Math.min,
                        b = function() {
                            return A.Date.now()
                        };
                    e.exports = function(e, t, a) {
                        function o(t) {
                            var n = d,
                                i = u;
                            return d = u = void 0, v = t, f = e.apply(i, n)
                        }

                        function r(e) {
                            var n = e - g,
                                i = e - v;
                            return void 0 === g || n >= t || n < 0 || w && i >= m
                        }

                        function s() {
                            var e, n, i, a = b();
                            return r(a) ? c(a) : void(A = setTimeout(s, (e = a - g, n = a - v, i = t - e, w ? h(i, m - n) : i)))
                        }

                        function c(e) {
                            return A = void 0, y && d ? o(e) : (d = u = void 0, f)
                        }

                        function l() {
                            var e, n = b(),
                                i = r(n);
                            if (d = arguments, u = this, g = n, i) {
                                if (void 0 === A) return v = e = g, A = setTimeout(s, t), x ? o(e) : f;
                                if (w) return A = setTimeout(s, t), o(g)
                            }
                            return void 0 === A && (A = setTimeout(s, t)), f
                        }
                        var d, u, m, f, A, g, v = 0,
                            x = !1,
                            w = !1,
                            y = !0;
                        if ("function" != typeof e) throw TypeError("Expected a function");
                        return t = i(t) || 0, n(a) && (x = !!a.leading, m = (w = "maxWait" in a) ? p(i(a.maxWait) || 0, t) : m, y = "trailing" in a ? !!a.trailing : y), l.cancel = function() {
                            void 0 !== A && clearTimeout(A), v = 0, d = g = u = A = void 0
                        }, l.flush = function() {
                            return void 0 === A ? f : c(b())
                        }, l
                    }
                }).call(t, function() {
                    return this
                }())
            }, function(e, t) {
                "use strict";

                function n() {
                    return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
                }

                function i(e) {
                    e && e.forEach(function(e) {
                        var t = Array.prototype.slice.call(e.addedNodes),
                            n = Array.prototype.slice.call(e.removedNodes);
                        if (function e(t) {
                                var n = void 0,
                                    i = void 0;
                                for (n = 0; n < t.length; n += 1)
                                    if ((i = t[n]).dataset && i.dataset.aos || i.children && e(i.children)) return !0;
                                return !1
                            }(t.concat(n))) return a()
                    })
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var a = function() {};
                t.default = {
                    isSupported: function() {
                        return !!n()
                    },
                    ready: function(e, t) {
                        var o = window.document,
                            r = new(n())(i);
                        a = t, r.observe(o.documentElement, {
                            childList: !0,
                            subtree: !0,
                            removedNodes: !0
                        })
                    }
                }
            }, function(e, t) {
                "use strict";

                function n() {
                    return navigator.userAgent || navigator.vendor || window.opera || ""
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var i = t[n];
                                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                            }
                        }
                        return function(t, n, i) {
                            return n && e(t.prototype, n), i && e(t, i), t
                        }
                    }(),
                    a = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
                    o = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                    r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
                    s = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                    c = function() {
                        function e() {
                            ! function(e, t) {
                                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                            }(this, e)
                        }
                        return i(e, [{
                            key: "phone",
                            value: function() {
                                var e = n();
                                return !(!a.test(e) && !o.test(e.substr(0, 4)))
                            }
                        }, {
                            key: "mobile",
                            value: function() {
                                var e = n();
                                return !(!r.test(e) && !s.test(e.substr(0, 4)))
                            }
                        }, {
                            key: "tablet",
                            value: function() {
                                return this.mobile() && !this.phone()
                            }
                        }]), e
                    }();
                t.default = new c
            }, function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var n = function(e, t, n) {
                    var i = e.node.getAttribute("data-aos-once");
                    t > e.position ? e.node.classList.add("aos-animate") : void 0 === i || "false" !== i && (n || "true" === i) || e.node.classList.remove("aos-animate")
                };
                t.default = function(e, t) {
                    var i = window.pageYOffset,
                        a = window.innerHeight;
                    e.forEach(function(e, o) {
                        n(e, a + i, t)
                    })
                }
            }, function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i, a = (i = n(12)) && i.__esModule ? i : {
                    default: i
                };
                t.default = function(e, t) {
                    return e.forEach(function(e, n) {
                        e.node.classList.add("aos-init"), e.position = (0, a.default)(e.node, t.offset)
                    }), e
                }
            }, function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i, a = (i = n(13)) && i.__esModule ? i : {
                    default: i
                };
                t.default = function(e, t) {
                    var n = 0,
                        i = 0,
                        o = window.innerHeight,
                        r = {
                            offset: e.getAttribute("data-aos-offset"),
                            anchor: e.getAttribute("data-aos-anchor"),
                            anchorPlacement: e.getAttribute("data-aos-anchor-placement")
                        };
                    switch (r.offset && !isNaN(r.offset) && (i = parseInt(r.offset)), r.anchor && document.querySelectorAll(r.anchor) && (e = document.querySelectorAll(r.anchor)[0]), n = (0, a.default)(e).top, r.anchorPlacement) {
                        case "top-bottom":
                            break;
                        case "center-bottom":
                            n += e.offsetHeight / 2;
                            break;
                        case "bottom-bottom":
                            n += e.offsetHeight;
                            break;
                        case "top-center":
                            n += o / 2;
                            break;
                        case "bottom-center":
                            n += o / 2 + e.offsetHeight;
                            break;
                        case "center-center":
                            n += o / 2 + e.offsetHeight / 2;
                            break;
                        case "top-top":
                            n += o;
                            break;
                        case "bottom-top":
                            n += e.offsetHeight + o;
                            break;
                        case "center-top":
                            n += e.offsetHeight / 2 + o
                    }
                    return r.anchorPlacement || r.offset || isNaN(t) || (i = t), n + i
                }
            }, function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e) {
                    for (var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);) t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent;
                    return {
                        top: n,
                        left: t
                    }
                }
            }, function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e) {
                    return e = e || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(e, function(e) {
                        return {
                            node: e
                        }
                    })
                }
            }])
        },
        1624: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/timeline", function() {
                return n(1330)
            }])
        },
        765: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return m
                }
            });
            var i = n(5893),
                a = n(7294),
                o = n(155),
                r = n(9583),
                s = n(1664),
                c = n.n(s),
                l = n(5675),
                d = n.n(l);
            let u = [{
                name: "Home",
                path: "/"
            }, {
                name: "About",
                path: "/about.html"
            }, {
                name: "Timeline",
                path: "/timeline.html"
            },{
                name: "Team",
                path: "/team"
            }, {
                name: "Gallery",
                path: "/gallery"
            }, {
                name: "Faqs",
                path: "/contact"
            }];

            function m() {
                let [e, t] = (0, a.useState)(0);
                return (0, a.useEffect)(() => {
                    let e = async () => {
                        let e = await new Promise(e => setTimeout(() => e(1165), 1e3));
                        t(e)
                    };
                    e()
                }, []), (0, i.jsxs)("div", {
                    children: [(0, i.jsx)("hr", {
                        className: "border-0 h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent mt-10 "
                    }), (0, i.jsxs)("div", {
                        className: "flex items-center flex-col w-full h-full bg-hack footer-list p-16 lg:p-10 lg:pt-16 lg:pb-8",
                        children: [(0, i.jsx)("ul", {
                            className: "hidden items-center gap-5 xl:gap-10 text-base-1xl flex-col lg:flex-row footer-list lg:flex mb-4 space-x-5",
                            children: u.map((e, t) => (0, i.jsx)("li", {
                                children: (0, i.jsx)(c(), {
                                    href: e.path,
                                    children: (0, i.jsx)("div", {
                                        className: "flex flex-col items-center justify-center mx-1",
                                        children: (0, i.jsx)("div", {
                                            className: "text-lg font-thin",
                                            children: e.name
                                        })
                                    })
                                })
                            }, t))
                        }), (0, i.jsx)("div", {
                            children: (0, i.jsx)(c(), {
                                href: "/",
                                children: (0, i.jsx)("img", {
                                    src: "kaushallogo.png",
                                    width: 288,
                                    height: 64,
                                    alt: "",
                                    priority: !0
                                })
                            })
                        }), (0, i.jsx)("div", {
                            className: "text-center mb-4",
                            children: (0, i.jsxs)("p", {
                                className: "text-sm text-gray-500",
                                children: ["Visitor Count: ", (0, i.jsx)("span", {
                                    className: "font-bold text-gray-700",
                                    children: e
                                })]
                            })
                        }), (0, i.jsxs)("div", {
                            className: "flex items-center gap-6 mb-4 footer-list text-2xl",
                            children: [(0, i.jsx)(c(), {
                                href: "https://www.instagram.com/csi_svvv/",
                                legacyBehavior: !0,
                                children: (0, i.jsx)("a", {
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: (0, i.jsx)(o.GDB, {
                                        className: "cursor-pointer"
                                    })
                                })
                            }), (0, i.jsx)(c(), {
                                href: "https://www.instagram.com/csi_svvv/",
                                legacyBehavior: !0,
                                children: (0, i.jsx)("a", {
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: (0, i.jsx)(r.Zf_, {
                                        className: "cursor-pointer"
                                    })
                                })
                            }), (0, i.jsx)(c(), {
                                href: "https://www.linkedin.com/in/csi-svvv-indore-7449561b7/",
                                legacyBehavior: !0,
                                children: (0, i.jsx)("a", {
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: (0, i.jsx)(r.ltd, {
                                        className: "cursor-pointer"
                                    })
                                })
                            })]
                        }), (0, i.jsx)("p", {
                            className: "flex footer-list mb-4 text-center pt-8 gap-1",
                            children: "\xa92024 Kaushal, All rights reserved."
                        })]
                    })]
                })
            }
        },
        1330: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return y
                }
            });
            var i = n(5893),
                a = n(7294),
                o = n(3340),
                r = n.n(o),
                s = function(e) {
                    let {
                        size: t = 130,
                        progress: n = 0,
                        trackWidth: a = 14,
                        trackColor: o = "#ddd",
                        indicatorWidth: r = 16,
                        indicatorColor: s = "#663DFF",
                        indicatorCap: c = "square",
                        label: l = "",
                        labelColor: d = "#eee",
                        spinnerMode: u = !1,
                        spinnerSpeed: m = 1,
                        customStyles: f = ""
                    } = e, A = t / 2, g = A - (a > r ? a : r), p = 2 * Math.PI * g;
                    return (0, i.jsx)("div", {
                        className: f,
                        children: (0, i.jsxs)("div", {
                            className: "svg-pi-wrapper",
                            style: {
                                width: t,
                                height: t,
                                position: "relative"
                            },
                            children: [(0, i.jsxs)("svg", {
                                className: "svg-pi",
                                style: {
                                    width: t,
                                    height: t,
                                    transform: "rotate(-90deg)"
                                },
                                children: [(0, i.jsx)("circle", {
                                    className: "svg-pi-track",
                                    cx: A,
                                    cy: A,
                                    fill: "transparent",
                                    r: g,
                                    stroke: o,
                                    strokeWidth: a
                                }), (0, i.jsx)("circle", {
                                    className: "svg-pi-indicator ".concat(u ? "svg-pi-indicator--spinner" : ""),
                                    style: {
                                        animationDuration: 1e3 * m
                                    },
                                    cx: A,
                                    cy: A,
                                    fill: "transparent",
                                    r: g,
                                    stroke: s,
                                    strokeWidth: r,
                                    strokeDasharray: p,
                                    strokeDashoffset: p * (1 - n),
                                    strokeLinecap: c
                                })]
                            }), (0, i.jsx)("div", {
                                className: "svg-pi-label",
                                style: {
                                    color: d,
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    textAlign: "center",
                                    fontSize: "1.5rem",
                                    fontWeight: "bold"
                                },
                                children: (0, i.jsx)("span", {
                                    className: "svg-pi-label__loading",
                                    style: {
                                        display: "block"
                                    },
                                    children: l
                                })
                            })]
                        })
                    })
                },
                c = n(5675),
                l = n.n(c),
                d = {
                    src: "/_next/calendarc9b2.png",
                    height: 2e3,
                    width: 2e3,
                },
                u = function(e) {
                    let {
                        direction: t,
                        heading1: n,
                        heading2: a,
                        heading3: o,
                        progress: r,
                        label: c,
                        image: u,
                        topLine: m = !1,
                        bottomLine: f = !1
                    } = e, A = "left" === t;
                    return (0, i.jsxs)("div", {
                        className: "grid grid-cols-[1fr_15rem] md:grid-cols-9 grid-rows-[3rem_1fr_3rem] md:grid-rows-3 items-center",
                        children: [(0, i.jsx)(s, {
                            progress: r,
                            label: c,
                            customStyles: "row-start-2 md:col-start-5 md:col-end-6 md:mr-5 col-start-1 col-end-2 relative"
                        }), (0, i.jsx)("svg", {
                            viewBox: "0 0 100 100",
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "".concat(A ? "md:col-start-4 md:col-end-5" : "md:col-start-6 md:col-end-7", " md:block hidden col-start-2 col-end-3 row-start-2"),
                            children: (0, i.jsx)("line", {
                                x1: "10",
                                y1: "50",
                                x2: "90",
                                y2: "50",
                                stroke: "#ccc",
                                strokeDasharray: "7",
                                strokeWidth: 8
                            })
                        }), (0, i.jsx)("div", {
                            className: "".concat(A ? "md:col-start-1 md:col-end-4" : "md:col-start-7 md:col-end-10", " mr-2 row-start-1 row-end-4 col-start-2 col-end-5 md:ml-2 ml-10"),
                            children: (0, i.jsxs)("div", {
                                className: "flex flex-col justify-center ".concat(A ? "md:items-end" : "items-start", " items-start"),
                                children: [(0, i.jsx)("img", {
                                    src: u,
                                    alt: "image",
                                    quality: 80,
                                    className: "mb-4 mr-8 ml-8 hidden md:block",
                                    style: {
                                        width: "10rem",
                                        height: "auto"
                                    },
                                    sizes: "max-width(768px) 10vw"
                                }), (0, i.jsxs)("div", {
                                    className: "flex ".concat(A ? "md:flex-row" : "flex-row-reverse", " flex-row-reverse items-center justify-end"),
                                    children: [(0, i.jsx)("h3", {
                                        className: "font-semibold text-pracula md:text-3xl text-[1.25rem] mb-1 pl-3 pr-3",
                                        children: n
                                    }), (0, i.jsx)("img", {
                                        src: d.src,
                                        alt: "calendar",
                                        color: "#fff",
                                        quality: 100,
                                        className: "w-6"
                                    })]
                                }), (0, i.jsx)("h3", {
                                    className: "font-semibold text-pracula md:text-2xl mb-1",
                                    children: a
                                }), (0, i.jsx)("p", {
                                    className: "leading-tight md:mt-4 mt-2 ".concat(A ? "md:text-right" : ""),
                                    children: o
                                })]
                            })
                        }), m && (0, i.jsx)("svg", {
                            viewBox: "0 0 130 130",
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "row-start-1 md:col-start-5 md:col-end-6 col-start-1 col-end-2 h-12 md:h-[8.125rem] w-[8.125rem]",
                            children: (0, i.jsx)("line", {
                                x1: "65",
                                y1: "0",
                                x2: "65",
                                y2: "110",
                                stroke: "#ccc",
                                strokeWidth: 8
                            })
                        }), f && (0, i.jsx)("svg", {
                            viewBox: "0 0 130 130",
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "row-start-3 md:col-start-5 md:col-end-6 col-start-1 col-end-2 h-12 md:h-[8.125rem] w-[8.125rem]",
                            children: (0, i.jsx)("line", {
                                x1: "65",
                                y1: "20",
                                x2: "65",
                                y2: "130",
                                stroke: "#ccc",
                                strokeWidth: 8
                            })
                        })]
                    })
                };
            n(3497);
            var m = {
                    src: "/_next/registerc209.png",
                    height: 788,
                    width: 800,
                    
                },
                f = {
                    src: "/_next/opening2ac3.png",
                    height: 512,
                    width: 512,
                    
                },
                A = {
                    src: "/_next/round1bb1c.png",
                    height: 648,
                    width: 800,
                    
                },
                g = {
                    src: "/_next/round1resultsa211.png",
                    height: 750,
                    width: 750,
                    
                },
                p = {
                    src: "/_next/round29a40.png",
                    height: 404,
                    width: 496,
                   
                },
                h = {
                    src: "/_next/presentationb8d7.png",
                    height: 800,
                    width: 800,
                  
                },
                b = {
                    src: "/_next/trophy9256.png",
                    height: 800,
                    width: 798,
                  
                },
                v = {
                    2024: {
                        customText: null,
                        data: [{
                            direction: "right",
                            heading1: "Sept 4 - Sept 21 2024",
                            heading2: "Registration Begins",
                            heading3: "Registration is open.",
                            progress: 1 / 7,
                            label: "1/7",
                            image: m,
                            topLine: !1,
                            bottomLine: !0
                        }, {
                            direction: "left",
                            heading1: "Sept 24 2024 , 10:00AM-12-00pm",
                            heading2: "Programing Contest(round 1)",
                            heading3: "DAY-1",
                            progress: 2 / 7,
                            label: "2/7",
                            image: f,
                            topLine: !0,
                            bottomLine: !0
                        }, {
                            direction: "right",
                            heading1: "September 5 2024 12:00",
                            heading2: "Round 1",
                            heading3: "Participants work on initial hacking projects.",
                            progress: 3 / 7,
                            label: "3/7",
                            image: A,
                            topLine: !0,
                            bottomLine: !0
                        }, {
                            direction: "left",
                            heading1: "September 6 2024 05:00",
                            heading2: "Round 1 Results",
                            heading3: "Announce round 1 winners and achievements.",
                            progress: 4 / 7,
                            label: "4/7",
                            image: g,
                            topLine: !0,
                            bottomLine: !0
                        }, {
                            direction: "right",
                            heading1: "September 6 2024 08:00",
                            heading2: "Round 2",
                            heading3: "Participants advance to the next hacking phase.",
                            progress: 5 / 7,
                            label: "5/7",
                            image: p,
                            topLine: !0,
                            bottomLine: !0
                        }, {
                            direction: "left",
                            heading1: "September 6 2024 13:00",
                            heading2: "Presentation",
                            heading3: "Teams present their projects and innovations.",
                            progress: 6 / 7,
                            label: "6/7",
                            image: h,
                            topLine: !0,
                            bottomLine: !0
                        }, {
                            direction: "right",
                            heading1: "September 6 2024 18:00",
                            heading2: "Result Declared",
                            heading3: "Announce final winners and award prizes.",
                            progress: 1,
                            label: "7/7",
                            image: b,
                            topLine: !0,
                            bottomLine: !1
                        }]
                    },
                    2023: {
                        
                    }
                },
                x = n(765);
            let w = () => {
                (0, a.useEffect)(() => {
                    r().init({
                        startEvent: "DOMContentLoaded",
                        initClassName: "aos-init",
                        animatedClassName: "aos-animate",
                        debounceDelay: 50,
                        throttleDelay: 99,
                        offset: 120,
                        duration: 400,
                        easing: "ease",
                        anchorPlacement: "top-bottom"
                    })
                }, []);
                let [e, t] = a.useState(2024);
                return (0, i.jsxs)("div", {
                    className: "bg-primary bg-fixed",
                    children: [(0, i.jsxs)("div", {
                        className: "md:pb-[10%] pb-[30%] pt-[45%] md:pt-[10%] h-full bg-primary flex items-center flex-col",
                        children: [(0, i.jsx)("div", {
                            className: "text-4xl md:text-6xl text-center font-bold bg-gradient-to-r ease-in-out via-purple-500 bg-clip-text text-transparent from-indigo-300 to-indigo-300 animate-text",
                            children: "Timeline"
                        }), (0, i.jsxs)("div", {
                            className: "flex justify-center items-center w-[70%] md:w-[50%] text-xl h-16 mt-8 md:mt-16",
                            children: [(0, i.jsx)("button", {
                                className: "w-[50%] m-4 md:m-0 p-4 rounded ".concat(2024 === e ? "bg-gradient-to-r from-cyan-500 to-purple-500" : ""),
                                onClick: () => t(2024),
                                children: "2024"
                            })]
                        }), (0, i.jsx)("div", {
                            className: "justify-center flex",
                            "data-aos": "fade-up",
                            children: (0, i.jsx)("div", {
                                className: "bg-primary bg-fixed container justify-center items-center justify-items-center align-middle flex",
                                children: (0, i.jsxs)("div", {
                                    className: "bg-primary bg-fixed flex flex-col text-dracxt",
                                    children: [!v[e].customText && v[e].data.map((e, t) => (0, i.jsx)(u, {
                                        direction: e.direction,
                                        heading1: e.heading1,
                                        heading2: e.heading2,
                                        heading3: e.heading3,
                                        progress: e.progress,
                                        label: e.label,
                                        image: e.image.src,
                                        topLine: e.topLine,
                                        bottomLine: e.bottomLine
                                    }, t)), v[e].customText && (0, i.jsx)("h1", {
                                        className: "text-4xl font-bold text-center mt-20 h-[44vh]",
                                        children: v[e].customText
                                    })]
                                })
                            })
                        }), (0, i.jsx)("div", {
                            className: "bg-dracula text-dracxt font-mono",
                            children: (0, i.jsx)("div", {
                                className: "xl:mx-auto max-w-7xl lg:mx-[10vw] justify-items-center mx-[5vw]"
                            })
                        })]
                    }), (0, i.jsx)(x.Z, {})]
                })
            };
            var y = w
        },
        3497: function() {}
    },
    function(e) {
        e.O(0, [260, 306, 774, 888, 179], function() {
            return e(e.s = 1624)
        }), _N_E = e.O()
    }
]);