(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        5557: function (e, t, a) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function () {
                return a(461)
            }])
        },
        765: function (e, t, a) {
            "use strict";
            a.d(t, {
                Z: function () {
                    return m
                }
            });
            var s = a(5893),
                l = a(7294),
                r = a(155),
                n = a(9583),
                i = a(1664),
                c = a.n(i),
                o = a(5675),
                d = a.n(o);
            let x = [{
                name: "Home",
                path: "/"
            }, {
                name: "About",
                path: "/about.html"
            }, {
                name: "Timeline",
                path: "/timeline.html"
            }, {
                name: "Team",
                path: "/team.html"
            },
            //  {
            //     name: "Gallery",
            //     path: "/gallery.html"
            // }, 
            {
                name: "Faqs",
                path: "/contact.html"
            }];

            function m() {
                let [e, t] = (0, l.useState)(0);
                return (0, l.useEffect)(() => {
                    let e = async () => {
                        let e = await new Promise(e => setTimeout(() => e(1165), 1e3));
                        t(e)
                    };
                    e()
                }, []), (0, s.jsxs)("div", {
                    children: [(0, s.jsx)("hr", {
                        className: "border-0 h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent mt-10 "
                    }), (0, s.jsxs)("div", {
                        className: "flex items-center flex-col w-full h-full bg-hack footer-list p-16 lg:p-10 lg:pt-16 lg:pb-8",
                        children: [(0, s.jsx)("ul", {
                            className: "hidden items-center gap-5 xl:gap-10 text-base-1xl flex-col lg:flex-row footer-list lg:flex mb-4 space-x-5",
                            children: x.map((e, t) => (0, s.jsx)("li", {
                                children: (0, s.jsx)(c(), {
                                    href: e.path,
                                    children: (0, s.jsx)("div", {
                                        className: "flex flex-col items-center justify-center mx-1",
                                        children: (0, s.jsx)("div", {
                                            className: "text-lg font-thin",
                                            children: e.name
                                        })
                                    })
                                })
                            }, t))
                        }), (0, s.jsx)("div", {
                            children: (0, s.jsx)(c(), {
                                href: "/",
                                children: (0, s.jsx)("img", {
                                    src: "kaushallogo.png",
                                    width: 288,
                                    height: 64,
                                    alt: "",
                                })
                            })
                        }), (0, s.jsx)("div", {
                            className: "text-center mb-4",
                            children: (0, s.jsxs)("p", {
                                className: "text-sm text-gray-500",
                                children: ["Visitor Count: ", (0, s.jsx)("span", {
                                    className: "font-bold text-gray-700",
                                    children: e
                                })]
                            })
                        }), (0, s.jsxs)("div", {
                            className: "flex items-center gap-6 mb-4 footer-list text-2xl",
                            children: [(0, s.jsx)(c(), {
                                href: "https://www.instagram.com/csi_svvv/",
                                legacyBehavior: !0,
                                children: (0, s.jsx)("a", {
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: (0, s.jsx)(r.GDB, {
                                        className: "cursor-pointer"
                                    })
                                })
                            }), (0, s.jsx)(c(), {
                                href: "https://www.instagram.com/csi_svvv/",
                                legacyBehavior: !0,
                                children: (0, s.jsx)("a", {
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: (0, s.jsx)(n.Zf_, {
                                        className: "cursor-pointer"
                                    })
                                })
                            }), (0, s.jsx)(c(), {
                                href: "https://www.linkedin.com/in/csi-svvv-indore-7449561b7/",
                                legacyBehavior: !0,
                                children: (0, s.jsx)("a", {
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: (0, s.jsx)(n.ltd, {
                                        className: "cursor-pointer"
                                    })
                                })
                            })]
                        }), (0, s.jsx)("p", {
                            className: "flex footer-list mb-4 text-center pt-8 gap-1",
                            children: "\xa92024 Kaushal, All rights reserved."
                        })]
                    })]
                })
            }
        },
        1368: function (e, t, a) {
            "use strict";
            a.d(t, {
                UQ: function () {
                    return x
                },
                vF: function () {
                    return h
                },
                Qd: function () {
                    return m
                },
                o4: function () {
                    return u
                }
            });
            var s = a(5893),
                l = a(7294),
                r = a(7184),
                n = a(2469),
                i = a(512),
                c = a(8388);

            function o() {
                for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                return (0, c.m6)((0, i.W)(t))
            }
            var d = a(1550);
            let x = r.fC,
                m = l.forwardRef((e, t) => {
                    let {
                        className: a,
                        ...l
                    } = e;
                    return (0, s.jsx)(s.Fragment, {
                        children: (0, s.jsx)(d.E.div, {
                            whileHover: {
                                scale: 1.02,
                                transition: {
                                    duration: .6,
                                    repeat: 1 / 0,
                                    repeatType: "reverse"
                                }
                            },
                            children: (0, s.jsx)(r.ck, {
                                ref: t,
                                className: o(" data-[state=open]:bg-[]", a),
                                ...l
                            })
                        })
                    })
                });
            m.displayName = "AccordionItem";
            let u = l.forwardRef((e, t) => {
                let {
                    className: a,
                    children: l,
                    ...i
                } = e;
                return (0, s.jsx)(r.h4, {
                    className: "flex",
                    children: (0, s.jsxs)(r.xz, {
                        ref: t,
                        className: o("flex flex-1 justify-between items-center gap-2 text-left text-xl pb-4 font-medium transition-all hover:underline [&[data-state=open]>span]:hidden [&[data-state=closed]>svg]:hidden", a),
                        ...i,
                        children: [l, (0, s.jsx)("span", {
                            children: (0, s.jsx)(n.SPS, {
                                className: "h-6 w-6 text-gray-400 shrink-0 transition-transform duration-200 "
                            })
                        }), (0, s.jsx)(n.SYN, {
                            className: "h-6 w-6 text-gray-400 shrink-0 transition-transform duration-200 "
                        })]
                    })
                })
            });
            u.displayName = r.xz.displayName;
            let h = l.forwardRef((e, t) => {
                let {
                    className: a,
                    children: l,
                    ...n
                } = e;
                return (0, s.jsx)(r.VY, {
                    ref: t,
                    className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
                    ...n,
                    children: (0, s.jsx)("div", {
                        className: o("pt-0", a),
                        children: l
                    })
                })
            });
            h.displayName = r.VY.displayName
        },
        461: function (e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function () {
                    return S
                }
            });
            var s = a(5893);
            a(8192);
            var l = a(7294);
            let r = e => {
                let {
                    value: t,
                    heading: a
                } = e;
                return (0, s.jsxs)("div", {
                    className: "flex flex-col   justify-center items-center ",
                    children: [(0, s.jsxs)("div", {
                        className: "flex flex-row  items-center w-[85px]  lg:w-[14rem] ",
                        children: [(0, s.jsx)("div", {
                            className: "lg:ml-4 ml-1 flex flex-col w-3/4 items-center justify-center bg-[#1c153b] border-y-2 border-[#363151] rounded-xl text-center",
                            children: (0, s.jsx)("p", {
                                className: "font-medium text-[2rem] lg:text-[4rem] w-[40%]  text-white ",
                                children: Math.floor(t / 10)
                            })
                        }), (0, s.jsx)("div", {
                            className: "lg:mx-4 mx-1 w-3/4  bg-[#1c153b] flex flex-col  items-center  text-center justify-center border-y-2 border-[#363151] rounded-xl ",
                            children: (0, s.jsx)("p", {
                                className: "font-medium text-[2rem] lg:text-[4rem] w-[40%] text-white ",
                                children: t % 10
                            })
                        }), "Seconds" != a ? (0, s.jsx)("span", {
                            className: "text-4xl ",
                            children: ":"
                        }) : (0, s.jsx)("span", {})]
                    }), (0, s.jsx)("p", {
                        className: "lg:text-xl py-2 text-lg font-medium text-white",
                        children: a
                    })]
                })
            },
                n = e => {
                    let {
                        date: t
                    } = e, [a, n] = (0, l.useState)(0), [i, c] = (0, l.useState)(0), [o, d] = (0, l.useState)(0), [x, m] = (0, l.useState)(0);
                    return (0, l.useEffect)(() => {
                        let e = setInterval(() => {
                            let e = new Date().getTime(),
                                a = (t - e) / 1e3;
                            n(Math.floor(a / 86400)), c(Math.floor(a % 86400 / 3600)), d(Math.floor(a % 3600 / 60)), m(Math.floor(a % 60))
                        }, 1e3);
                        return () => clearInterval(e)
                    }, []), (0, s.jsxs)("div", {
                        className: "flex justify-center gap-2 text-white select-none cursor-default",
                        children: [(0, s.jsx)(r, {
                            value: a,
                            heading: "Days"
                        }), (0, s.jsx)(r, {
                            value: i,
                            heading: "Hours"
                        }), (0, s.jsx)(r, {
                            value: o,
                            heading: "Minutes"
                        }), (0, s.jsx)(r, {
                            value: x,
                            heading: "Seconds"
                        })]
                    })
                };
            var i = a(1664),
                c = a.n(i),
                o = a(2466),
                d = a(5029),
                x = a(9477),
                m = a(512),
                u = a(8388);
            let h = e => {
                let {
                    animationSpeed: t = .4,
                    opacities: a = [.3, .3, .3, .5, .5, .5, .8, .8, .8, 1],
                    colors: l = [
                        [0, 255, 255]
                    ],
                    containerClassName: r,
                    dotSize: n,
                    showGradient: i = !0
                } = e;
                return (0, s.jsxs)("div", {
                    className: function () {
                        for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                        return (0, u.m6)((0, m.W)(t))
                    }("h-full relative bg-white w-full ", r),
                    children: [(0, s.jsx)("div", {
                        className: "h-full w-full ",
                        children: (0, s.jsx)(f, {
                            colors: null != l ? l : [
                                [0, 255, 255]
                            ],
                            dotSize: null != n ? n : 3,
                            opacities: null != a ? a : [.3, .3, .3, .5, .5, .5, .8, .8, .8, 1],
                            shader: "\n              float animation_speed_factor = ".concat(t.toFixed(1), ";\n              float intro_offset = distance(u_resolution / 2.0 / u_total_size, st2) * 0.01 + (random(st2) * 0.15);\n              opacity *= step(intro_offset, u_time * animation_speed_factor);\n              opacity *= clamp((1.0 - step(intro_offset + 0.1, u_time * animation_speed_factor)) * 1.25, 1.0, 1.25);\n            "),
                            center: ["x", "y"]
                        })
                    }), i && (0, s.jsx)("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-gray-950 to-[84%]"
                    })]
                })
            },
                f = e => {
                    let {
                        colors: t = [
                            [0, 0, 0]
                        ],
                        opacities: a = [.04, .04, .04, .04, .04, .08, .08, .08, .08, .14],
                        totalSize: r = 4,
                        dotSize: n = 2,
                        shader: i = "",
                        center: c = ["x", "y"]
                    } = e, o = l.useMemo(() => {
                        let e = [t[0], t[0], t[0], t[0], t[0], t[0]];
                        return 2 === t.length ? e = [t[0], t[0], t[0], t[1], t[1], t[1]] : 3 === t.length && (e = [t[0], t[0], t[1], t[1], t[2], t[2]]), {
                            u_colors: {
                                value: e.map(e => [e[0] / 255, e[1] / 255, e[2] / 255]),
                                type: "uniform3fv"
                            },
                            u_opacities: {
                                value: a,
                                type: "uniform1fv"
                            },
                            u_total_size: {
                                value: r,
                                type: "uniform1f"
                            },
                            u_dot_size: {
                                value: n,
                                type: "uniform1f"
                            }
                        }
                    }, [t, a, r, n]);
                    return (0, s.jsx)(g, {
                        source: "\n        precision mediump float;\n        in vec2 fragCoord;\n\n        uniform float u_time;\n        uniform float u_opacities[10];\n        uniform vec3 u_colors[6];\n        uniform float u_total_size;\n        uniform float u_dot_size;\n        uniform vec2 u_resolution;\n        out vec4 fragColor;\n        float PHI = 1.61803398874989484820459;\n        float random(vec2 xy) {\n            return fract(tan(distance(xy * PHI, xy) * 0.5) * xy.x);\n        }\n        float map(float value, float min1, float max1, float min2, float max2) {\n            return min2 + (value - min1) * (max2 - min2) / (max1 - min1);\n        }\n        void main() {\n            vec2 st = fragCoord.xy;\n            ".concat(c.includes("x") ? "st.x -= abs(floor((mod(u_resolution.x, u_total_size) - u_dot_size) * 0.5));" : "", "\n            ").concat(c.includes("y") ? "st.y -= abs(floor((mod(u_resolution.y, u_total_size) - u_dot_size) * 0.5));" : "", "\n      float opacity = step(0.0, st.x);\n      opacity *= step(0.0, st.y);\n\n      vec2 st2 = vec2(int(st.x / u_total_size), int(st.y / u_total_size));\n\n      float frequency = 5.0;\n      float show_offset = random(st2);\n      float rand = random(st2 * floor((u_time / frequency) + show_offset + frequency) + 1.0);\n      opacity *= u_opacities[int(rand * 10.0)];\n      opacity *= 1.0 - step(u_dot_size / u_total_size, fract(st.x / u_total_size));\n      opacity *= 1.0 - step(u_dot_size / u_total_size, fract(st.y / u_total_size));\n\n      vec3 color = u_colors[int(show_offset * 6.0)];\n\n      ").concat(i, "\n\n      fragColor = vec4(color, opacity);\n      fragColor.rgb *= fragColor.a;\n        }"),
                        uniforms: o,
                        maxFps: 60
                    })
                },
                p = e => {
                    let {
                        source: t,
                        uniforms: a,
                        maxFps: r = 60
                    } = e, {
                        size: n
                    } = (0, o.A)(), i = (0, l.useRef)(), c = 0;
                    (0, o.C)(e => {
                        let {
                            clock: t
                        } = e;
                        if (!i.current) return;
                        let a = t.getElapsedTime();
                        if (a - c < 1 / r) return;
                        c = a;
                        let s = i.current.material,
                            l = s.uniforms.u_time;
                        l.value = a
                    });
                    let d = () => {
                        let e = {};
                        for (let t in a) {
                            let s = a[t];
                            switch (s.type) {
                                case "uniform1f":
                                    e[t] = {
                                        value: s.value,
                                        type: "1f"
                                    };
                                    break;
                                case "uniform3f":
                                    e[t] = {
                                        value: new x.Vector3().fromArray(s.value),
                                        type: "3f"
                                    };
                                    break;
                                case "uniform1fv":
                                    e[t] = {
                                        value: s.value,
                                        type: "1fv"
                                    };
                                    break;
                                case "uniform3fv":
                                    e[t] = {
                                        value: s.value.map(e => new x.Vector3().fromArray(e)),
                                        type: "3fv"
                                    };
                                    break;
                                case "uniform2f":
                                    e[t] = {
                                        value: new x.Vector2().fromArray(s.value),
                                        type: "2f"
                                    };
                                    break;
                                default:
                                    console.error("Invalid uniform type for '".concat(t, "'."))
                            }
                        }
                        return e.u_time = {
                            value: 0,
                            type: "1f"
                        }, e.u_resolution = {
                            value: new x.Vector2(2 * n.width, 2 * n.height)
                        }, e
                    },
                        m = (0, l.useMemo)(() => {
                            let e = new x.ShaderMaterial({
                                vertexShader: "\n      precision mediump float;\n      in vec2 coordinates;\n      uniform vec2 u_resolution;\n      out vec2 fragCoord;\n      void main(){\n        float x = position.x;\n        float y = position.y;\n        gl_Position = vec4(x, y, 0.0, 1.0);\n        fragCoord = (position.xy + vec2(1.0)) * 0.5 * u_resolution;\n        fragCoord.y = u_resolution.y - fragCoord.y;\n      }\n      ",
                                fragmentShader: t,
                                uniforms: d(),
                                glslVersion: x.GLSL3,
                                blending: x.CustomBlending,
                                blendSrc: x.SrcAlphaFactor,
                                blendDst: x.OneFactor
                            });
                            return e
                        }, [n.width, n.height, t]);
                    return (0, s.jsxs)("mesh", {
                        ref: i,
                        children: [(0, s.jsx)("planeGeometry", {
                            args: [2, 2]
                        }), (0, s.jsx)("primitive", {
                            object: m,
                            attach: "material"
                        })]
                    })
                },
                g = e => {
                    let {
                        source: t,
                        uniforms: a,
                        maxFps: l = 60
                    } = e;
                    return (0, s.jsx)(d.Xz, {
                        className: "absolute inset-0  h-full w-full",
                        children: (0, s.jsx)(p, {
                            source: t,
                            uniforms: a,
                            maxFps: l
                        })
                    })
                };
            var j = a(1526),
                v = a(1550);

            function b() {
                return (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsxs)("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg place-items-center   w-full gap-4 mx-auto",
                        children: [(0, s.jsx)("div", {
                            className: "w-[350px] bg-black ",
                            children: (0, s.jsx)(w, {
                                title: "Programming Contest",
                                icon: (0, s.jsx)(N, {}),
                                children: (0, s.jsx)(h, {
                                    animationSpeed: 5.1,
                                    containerClassName: "bg-emerald-900"
                                })
                            })
                        }), (0, s.jsx)("div", {
                            className: "w-[350px] bg-black ",
                            children: (0, s.jsxs)(w, {
                                title: "Web Development Competition",
                                icon: (0, s.jsx)(N, {}),
                                children: [(0, s.jsx)(h, {
                                    animationSpeed: 3,
                                    containerClassName: "bg-black",
                                    colors: [
                                        [236, 72, 153],
                                        [232, 121, 249]
                                    ],
                                    dotSize: 2
                                }), (0, s.jsx)("div", {
                                    className: "absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90"
                                })]
                            })
                        }), (0, s.jsx)("div", {
                            className: "w-[350px] bg-black ",
                            children: (0, s.jsx)(w, {
                                title: "Technical Quiz",
                                icon: (0, s.jsx)(N, {}),
                                children: (0, s.jsx)(h, {
                                    animationSpeed: 3,
                                    containerClassName: "bg-sky-600",
                                    colors: [
                                        [125, 211, 252]
                                    ]
                                })
                            })
                        }), (0, s.jsx)("div", {
                            className: "w-[350px] bg-black ",
                            children: (0, s.jsx)(w, {
                                title: "Project Presentation",
                                icon: (0, s.jsx)(N, {}),
                                children: (0, s.jsx)(h, {
                                    animationSpeed: 5.1,
                                    containerClassName: "bg-emerald-900"
                                })
                            })
                        }), (0, s.jsx)("div", {
                            className: "w-[350px] bg-black ",
                            children: (0, s.jsxs)(w, {
                                title: "Research Paper Presentation",
                                icon: (0, s.jsx)(N, {}),
                                children: [(0, s.jsx)(h, {
                                    animationSpeed: 3,
                                    containerClassName: "bg-black",
                                    colors: [
                                        [236, 72, 153],
                                        [232, 121, 249]
                                    ],
                                    dotSize: 2
                                }), (0, s.jsx)("div", {
                                    className: "absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90"
                                })]
                            })
                        })]
                    })
                })
            }
            let w = e => {
                let {
                    title: t,
                    icon: a,
                    children: r
                } = e, [n, i] = l.useState(!1);
                return (0, s.jsxs)("div", {
                    onMouseEnter: () => i(!0),
                    onMouseLeave: () => i(!1),
                    className: "border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[30rem] relative",
                    children: [(0, s.jsx)(y, {
                        className: "absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black"
                    }), (0, s.jsx)(y, {
                        className: "absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black"
                    }), (0, s.jsx)(y, {
                        className: "absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black"
                    }), (0, s.jsx)(y, {
                        className: "absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black"
                    }), (0, s.jsx)(j.M, {
                        children: n && (0, s.jsx)(v.E.div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            className: "h-full w-full absolute inset-0",
                            children: r
                        })
                    }), (0, s.jsxs)("div", {
                        className: "relative z-20",
                        children: [(0, s.jsx)("div", {
                            className: "text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center",
                            children: a
                        }), (0, s.jsx)("h2", {
                            className: "dark:text-white  text-center text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200",
                            children: t
                        })]
                    })]
                })
            },
                N = () => (0, s.jsx)("img", {
                    width: "150",
                    height: "165",
                    src: "/kaushallogo.png"
                }),
                y = e => {
                    let {
                        className: t,
                        ...a
                    } = e;
                    return (0, s.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        strokeWidth: "1.5",
                        stroke: "currentColor",
                        className: t,
                        ...a,
                        children: (0, s.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M12 6v12m6-6H6"
                        })
                    })
                };
            var _ = a(1368),
                k = a(765);
            let C = () => {
                let [e, t] = (0, l.useState)(1e3);
                return (0, l.useEffect)(() => {
                    t(window.innerHeight)
                }, []), (0, s.jsxs)("div", {
                    className: "bg-[#010223] w-full",
                    children: [(0, s.jsxs)("div", {
                        className: "h-screen flex flex-col items-center ",
                        style: {
                            backgroundImage: 'url("bg.png")',
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        },
                        children: [(0, s.jsxs)("div", {
                            className: "bg-[#766b62] mb-16 mt-40 lg:mt-28 flex text-[#f6d763] justify-center items-center rounded-xl lg:py-0 py-1 px-2",
                            children: [(0, s.jsx)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                className: "lg:w-6 w-4 lg:h-6 h-4 text-[#f6d763] mr-2",
                                children: (0, s.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM6 5.75A.75.75 0 0 1 6.75 5h6.5a.75.75 0 0 1 0 1.5h-2.127c.4.5.683 1.096.807 1.75h1.32a.75.75 0 0 1 0 1.5h-1.32a4.003 4.003 0 0 1-3.404 3.216l1.754 1.754a.75.75 0 0 1-1.06 1.06l-3-3a.75.75 0 0 1 .53-1.28H8c1.12 0 2.067-.736 2.386-1.75H6.75a.75.75 0 0 1 0-1.5h3.636A2.501 2.501 0 0 0 8 6.5H6.75A.75.75 0 0 1 6 5.75Z",
                                    clipRule: "evenodd"
                                })
                            }), (0, s.jsx)("div", {
                                className: "text-white lg:text-lg text-sm",
                                children: 'Compete for a Grand Prize Pool of ₹50,000 and 100,000+ worth vouchers!"'
                            })]
                        }), (0, s.jsx)("div", {
                            children: (0, s.jsxs)("h1", {
                                className: "text-white text-5xl sm:text-7xl lg:text-8xl mb-8",
                                style: {
                                    fontFamily: "Space Grotesk, sans-serif"
                                },
                                children: [(0, s.jsx)("span", {
                                    style: {
                                        textShadow: "0 0 3px rgba(255, 255, 255, 0.4), 0 0 6px rgba(255, 255, 255, 0.4)"
                                    },
                                    children: "Kaushal\xa0"
                                }), (0, s.jsx)("span", {
                                    className: "font-bold animate-blink",
                                    style: {
                                        textShadow: "0 0 5px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 255, 255, 0.5), 0 0 15px rgba(255, 255, 255, 0.5)"
                                    },
                                    children: "6.0\xa0"
                                })]
                            })
                        }), (0, s.jsx)("div", {
                            className: "text-center ",
                            children: (0, s.jsx)("div", {
                                className: "text-xl xl:text-2xl text-white mb-7",
                                children: "Join the ultimate tech showdown a National Student Convention where your ideas ignite, your code transforms, and your innovations shine!"
                            })
                        }), (0, s.jsx)("div", {
                            className: "flex pb-6",
                            children: (0, s.jsx)(c(), {
                                href: "https://forms.gle/EXaY1TBkDB2EHnpB6",
                                target: "_blank",
                                children: (0, s.jsx)("button", {
                                    className: "text-white px-4 py-2 rounded-lg font-bold sm:text-lg lg:text-xl text-base bg-gradient-to-r ease-in-out hover:animate-text from-[#ae40c0] via-violet-600 to-indigo-600",
                                    style: {
                                        fontFamily: "Epilogue, sans-serif"
                                    },
                                    children: "Register now"
                                })
                            })
                        }), (0, s.jsx)("div", {
                            className: "text-center pb-6",
                            children: (0, s.jsxs)("div", {
                                className: "text-sm sm:text-md lg:text-lg",
                                children: ["Registrations open till ", (0, s.jsx)("span", {
                                    className: "font-bold",
                                    children: "21th"
                                }), " ", "September, 2024 11:59 PM"]
                            })
                        }), (0, s.jsxs)("div", {
                            className: "flex items-center pb-10",
                            children: [(0, s.jsx)("span", {
                                className: "mr-4",
                                children: "powered by"
                            }), (0, s.jsx)("div", {
                                className: "bg-white rounded-lg flex justify-center items-center px-1",
                                children: (0, s.jsx)("div", {
                                    className: "py-4 px-11",
                                    style: {
                                        backgroundImage: 'url("/unstop2.png")',
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center"
                                    }
                                })
                            })]
                        }), (0, s.jsx)("div", {
                            className: "pb-10",
                            children: (0, s.jsx)("svg", {
                                width: "18",
                                height: "18",
                                viewBox: "0 0 18 18",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: (0, s.jsx)("path", {
                                    d: "M17.0391 1.17849C16.8637 1.00305 16.6574 0.915462 16.4204 0.915738C16.1834 0.915737 15.9772 1.00339 15.8019 1.17869L8.99598 7.9846L2.19008 1.17869C2.01477 1.00339 1.80853 0.915807 1.57136 0.915945C1.33404 0.915944 1.12774 1.0036 0.952433 1.1789C0.776991 1.35434 0.689409 1.56058 0.689684 1.79762C0.689684 2.03466 0.777336 2.24083 0.952639 2.41613L8.25042 9.71391C8.46161 9.9251 8.71013 10.0308 8.99598 10.0309C9.28183 10.0308 9.53035 9.9251 9.74153 9.71391L17.0393 2.41613C17.2146 2.24083 17.3022 2.03459 17.3021 1.79741C17.3021 1.5601 17.2144 1.35379 17.0391 1.17849ZM17.0469 8.59527C16.8715 8.41983 16.6653 8.33218 16.4284 8.33231C16.1914 8.33231 15.9852 8.41997 15.8099 8.59527L9.00382 15.4014L2.19791 8.59548C2.02261 8.42017 1.81637 8.33245 1.57919 8.33232C1.34202 8.33245 1.13571 8.42024 0.96027 8.59568C0.784966 8.77099 0.697314 8.97716 0.697314 9.2142C0.69759 9.45123 0.785379 9.6574 0.960683 9.83271L8.25826 17.1303C8.46959 17.3416 8.71811 17.4473 9.00382 17.4473C9.28966 17.4474 9.53825 17.3418 9.74958 17.1305L17.0474 9.83271C17.2227 9.6574 17.3102 9.45116 17.3101 9.21399C17.31 8.97681 17.2223 8.77057 17.0469 8.59527Z",
                                    fill: "#A684C1"
                                })
                            })
                        }), (0, s.jsx)("div", {
                            className: "text-center pb-7 ",
                            style: {
                                paddingTop: "80px"
                            },
                            children: (0, s.jsx)("div", {
                                className: "md:text-4xl text-3xl lg:text-5xl",
                                children: "Registration closed in "
                            })
                        }), (0, s.jsx)("div", {
                            className: "",
                            children: (0, s.jsx)(n, {
                                date: new Date("2024-09-21T00:00:00")
                            })
                        })]
                    }), (0, s.jsxs)("div", {
                        className: e < 800 ? e < 700 ? "pt-80" : "pt-56" : "pt-20",
                        children: [(0, s.jsx)("div", {
                            className: "pt-20"
                        }), (0, s.jsxs)("div", {
                            className: "lg:mx-10 mx-4 grid grid-cols-4 gap-3 sm:grid-cols-6 lg:grid-cols-7 xl:grid-cols-9",

                        })]
                    }), (0, s.jsx)("div", {
                        className: "pt-10 text-center ",
                        children: (0, s.jsx)("div", {
                            className: "lg:text-5xl md:text-4xl text-2xl ",
                            style: {
                                fontFamily: "Space Grotesk, sans-serif"
                            },
                            children: "Get ready for something big"
                        })
                    }), (0, s.jsx)("div", {
                        className: "pt-8 flex justify-center items-center md:mx-6 mx-3",
                        children: (0, s.jsxs)("video", {
                            className: "w-full",
                            style: {

                                height: "500px"
                            },
                            controls: !0,
                            muted: !0,
                            autoPlay: !0,
                            loop: !0,
                            children: [(0, s.jsx)("source", {
                                src: "/teaser.mp4",
                                type: "Video/mp4"
                            }), "Stop doing wrong to yourself!"]
                        })
                    }), (0, s.jsx)("div", {
                        className: "pt-12 text-center ",
                        children: (0, s.jsx)("div", {
                            className: "lg:text-5xl md:text-4xl text-3xl",
                            children: "COMPETITIONS"
                        })
                    }), (0, s.jsx)("div", {
                        className: "pt-12",
                        children: (0, s.jsx)(b, {})
                    }), (0, s.jsx)("div", {
                        children: (0, s.jsxs)("div", {
                            className: "flex flex-col jusitfy-center items-center pt-10",
                            children: [(0, s.jsx)("div", {
                                className: "flex flex-col ",
                                children: (0, s.jsx)("div", {
                                    className: "text-center font-bold text-2xl md:text-3xl lg:text-4xl ",
                                    children: "Frequently Asked Questions"
                                })
                            }), (0, s.jsx)("div", {
                                className: "max-w-[700px] pt-8",
                                children: [{
                                    title: "How do I register ?",
                                    content: "Click on the register now button on the nav menu of the website."
                                }, {
                                    title: "How many team members do I need ?",
                                    content: `You can participate individually . In web design contest there can be team of 2 member.
                                   And in technical quiz there can be team of 4 member.
                                    `
                                }, {
                                    title: "How much are the participation fees?",
                                    content: `• 150/- per event (per person). For multiple events, submit separate forms.
                                              • 100/- per person for team events (min team size: 2 & max team size : 4).`
                                }, {
                                    title: "Will the event be in person or online ?",
                                    content: "Kaushal 6.0 will be conducted in complete offline/in-person mode at Shri Vaishnav Vidyapeeth Vishwavidyalaya "
                                }, {
                                    title: "What is the venue for Kaushal 6.0 ?",
                                    content: "Shri Vaishnav Vidyapeeth Vishwavidyalaya Campus : Indore – Ujjain Road, Indore – 453111 ,"
                                }, {
                                    title: "What are the prerequisites to participate in this event ?",
                                    content: "No prerequisites are required to participate in this event. This event is open to participants of all skill levels."
                                }, {
                                    title: "Is there pre Kaushal Activites before the event?",
                                    content: `Yes ,We will be collaborating with variou cultural clubs of our college for a series of engaging pre-event activities.`
                                }].map((e, t) => (0, s.jsx)(_.UQ, {
                                    type: "single",
                                    collapsible: !0,
                                    children: (0, s.jsxs)(_.Qd, {
                                        value: "item-".concat(t),
                                        className: " py-4 md:py-8",
                                        children: [(0, s.jsx)(_.o4, {
                                            className: "max-w-[592px] text-white text-2xl font-medium leading-7",
                                            children: e.title
                                        }), (0, s.jsx)(_.vF, {
                                            className: "max-w-[592px] text-gray-200 text-lg font-normal font-['Inter'] leading-7",
                                            children: e.content
                                        })]
                                    })
                                }, t))
                            })]
                        })
                    }), (0, s.jsx)("div", {
                        children: (0, s.jsx)("div", {
                            className: "flex p-8  items-center justify-center",
                            children: (0, s.jsx)(c(), {
                                href: "/about.html",
                                children: (0, s.jsx)("button", {
                                    className: "text-white px-4 py-2 rounded-lg font-bold sm:text-lg lg:text-xl text-base bg-gradient-to-r ease-in-out hover:animate-text from-[#ae40c0] via-violet-600 to-indigo-600",
                                    style: {
                                        fontFamily: "Epilogue, sans-serif"
                                    },
                                    children: "Explore more about Kaushal 6.0"
                                })
                            })
                        })
                    }), (0, s.jsx)(k.Z, {})]
                })
            };
            var S = C
        }
    },
    function (e) {
        e.O(0, [260, 409, 737, 788, 368, 774, 888, 179], function () {
            return e(e.s = 5557)
        }), _N_E = e.O()
    }
]);