(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [335], {
        6405: function(e, t, a) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/contact", function() {
                return a(8151)
            }])
        },
        765: function(e, t, a) {
            "use strict";
            a.d(t, {
                Z: function() {
                    return m
                }
            });
            var n = a(5893),
                s = a(7294),
                i = a(155),
                l = a(9583),
                r = a(1664),
                o = a.n(r),
                c = a(5675),
                d = a.n(c);
            let x = [{
                name: "Home",
                path: "/"
            }, {
                name: "About",
                path: "/about"
            }, {
                name: "Timeline",
                path: "/timeline"
            }, {
                name: "Ambassador",
                path: "/campus"
            }, {
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
                let [e, t] = (0, s.useState)(0);
                return (0, s.useEffect)(() => {
                    let e = async () => {
                        let e = await new Promise(e => setTimeout(() => e(1165), 1e3));
                        t(e)
                    };
                    e()
                }, []), (0, n.jsxs)("div", {
                    children: [(0, n.jsx)("hr", {
                        className: "border-0 h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent mt-10 "
                    }), (0, n.jsxs)("div", {
                        className: "flex items-center flex-col w-full h-full bg-hack footer-list p-16 lg:p-10 lg:pt-16 lg:pb-8",
                        children: [(0, n.jsx)("ul", {
                            className: "hidden items-center gap-5 xl:gap-10 text-base-1xl flex-col lg:flex-row footer-list lg:flex mb-4 space-x-5",
                            children: x.map((e, t) => (0, n.jsx)("li", {
                                children: (0, n.jsx)(o(), {
                                    href: e.path,
                                    children: (0, n.jsx)("div", {
                                        className: "flex flex-col items-center justify-center mx-1",
                                        children: (0, n.jsx)("div", {
                                            className: "text-lg font-thin",
                                            children: e.name
                                        })
                                    })
                                })
                            }, t))
                        }), (0, n.jsx)("div", {
                            children: (0, n.jsx)(o(), {
                                href: "/",
                                children: (0, n.jsx)(d(), {
                                    src: "/Kaushallogo.jpg",
                                    width: 288,
                                    height: 64,
                                    alt: "",
                                    priority: !0
                                })
                            })
                        }), (0, n.jsx)("div", {
                            className: "text-center mb-4",
                            children: (0, n.jsxs)("p", {
                                className: "text-sm text-gray-500",
                                children: ["Visitor Count: ", (0, n.jsx)("span", {
                                    className: "font-bold text-gray-700",
                                    children: e
                                })]
                            })
                        }), (0, n.jsxs)("div", {
                            className: "flex items-center gap-6 mb-4 footer-list text-2xl",
                            children: [(0, n.jsx)(o(), {
                                href: "",
                                legacyBehavior: !0,
                                children: (0, n.jsx)("a", {
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: (0, n.jsx)(i.GDB, {
                                        className: "cursor-pointer"
                                    })
                                })
                            }), (0, n.jsx)(o(), {
                                href: "https://www.instagram.com/csi_svvv/",
                                legacyBehavior: !0,
                                children: (0, n.jsx)("a", {
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: (0, n.jsx)(l.Zf_, {
                                        className: "cursor-pointer"
                                    })
                                })
                            }), (0, n.jsx)(o(), {
                                href: "https://www.linkedin.com/in/csi-svvv-indore-7449561b7/",
                                legacyBehavior: !0,
                                children: (0, n.jsx)("a", {
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: (0, n.jsx)(l.ltd, {
                                        className: "cursor-pointer"
                                    })
                                })
                            })]
                        }), (0, n.jsx)("p", {
                            className: "flex footer-list mb-4 text-center pt-8 gap-1",
                            children: "\xa92024 Kaushal, All rights reserved."
                        })]
                    })]
                })
            }
        },
        1368: function(e, t, a) {
            "use strict";
            a.d(t, {
                UQ: function() {
                    return x
                },
                vF: function() {
                    return h
                },
                Qd: function() {
                    return m
                },
                o4: function() {
                    return p
                }
            });
            var n = a(5893),
                s = a(7294),
                i = a(7184),
                l = a(2469),
                r = a(512),
                o = a(8388);

            function c() {
                for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                return (0, o.m6)((0, r.W)(t))
            }
            var d = a(1550);
            let x = i.fC,
                m = s.forwardRef((e, t) => {
                    let {
                        className: a,
                        ...s
                    } = e;
                    return (0, n.jsx)(n.Fragment, {
                        children: (0, n.jsx)(d.E.div, {
                            whileHover: {
                                scale: 1.02,
                                transition: {
                                    duration: .6,
                                    repeat: 1 / 0,
                                    repeatType: "reverse"
                                }
                            },
                            children: (0, n.jsx)(i.ck, {
                                ref: t,
                                className: c(" data-[state=open]:bg-[]", a),
                                ...s
                            })
                        })
                    })
                });
            m.displayName = "AccordionItem";
            let p = s.forwardRef((e, t) => {
                let {
                    className: a,
                    children: s,
                    ...r
                } = e;
                return (0, n.jsx)(i.h4, {
                    className: "flex",
                    children: (0, n.jsxs)(i.xz, {
                        ref: t,
                        className: c("flex flex-1 justify-between items-center gap-2 text-left text-xl pb-4 font-medium transition-all hover:underline [&[data-state=open]>span]:hidden [&[data-state=closed]>svg]:hidden", a),
                        ...r,
                        children: [s, (0, n.jsx)("span", {
                            children: (0, n.jsx)(l.SPS, {
                                className: "h-6 w-6 text-gray-400 shrink-0 transition-transform duration-200 "
                            })
                        }), (0, n.jsx)(l.SYN, {
                            className: "h-6 w-6 text-gray-400 shrink-0 transition-transform duration-200 "
                        })]
                    })
                })
            });
            p.displayName = i.xz.displayName;
            let h = s.forwardRef((e, t) => {
                let {
                    className: a,
                    children: s,
                    ...l
                } = e;
                return (0, n.jsx)(i.VY, {
                    ref: t,
                    className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
                    ...l,
                    children: (0, n.jsx)("div", {
                        className: c("pt-0", a),
                        children: s
                    })
                })
            });
            h.displayName = i.VY.displayName
        },
        8151: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return j
                }
            });
            var n = a(5893),
                s = a(7294),
                i = a(5487),
                l = a(4330),
                r = a(6912);

            function o() {
                let e = !1,
                    t = new Set,
                    a = {
                        subscribe: e => (t.add(e), () => void t.delete(e)),
                        start(a, n) {
                            (0, i.k)(e, "controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");
                            let s = [];
                            return t.forEach(e => {
                                s.push((0, r.d)(e, a, {
                                    transitionOverride: n
                                }))
                            }), Promise.all(s)
                        },
                        set: a => ((0, i.k)(e, "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."), t.forEach(e => {
                            (0, l.gg)(e, a)
                        })),
                        stop() {
                            t.forEach(e => {
                                ! function(e) {
                                    e.values.forEach(e => e.stop())
                                }(e)
                            })
                        },
                        mount: () => (e = !0, () => {
                            e = !1, a.stop()
                        })
                    };
                return a
            }
            var c = a(6681),
                d = a(8868);
            let x = function() {
                let e = (0, c.h)(o);
                return (0, d.L)(e.mount, []), e
            };
            var m = a(1550),
                p = a(1368),
                h = a(155),
                f = a(9554),
                u = a(765);
            let g = () => {
                let e = x();
                return (0, s.useEffect)(() => {
                    e.start({
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: .5,
                            delay: .2
                        }
                    })
                }, [e]), (0, n.jsxs)("div", {
                    className: "bg-primary flex flex-col min-h-screen p-4  lg:px-0 md:pt-24 pt-[150px] ",
                    children: [(0, n.jsxs)("div", {
                        className: "w-full h-full flex flex-col gap-24 px-4 pt-20 md:px-8 xl:px-20 2xl:px-40",
                        children: [(0, n.jsxs)("div", {
                            className: "flex flex-col items-center justify-center  gap-8",
                            children: [(0, n.jsx)(m.E.div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: e,
                                className: " font-bold text-[1.8rem] md:text-[2.5rem] lg:text-[3.3rem] bg-gradient-to-r ease-in-out via-purple-500 bg-clip-text text-transparent from-indigo-300 to-indigo-300 animate-text",
                                children: "EVERYTHING YOU NEED TO KNOW"
                            }), (0, n.jsx)(m.E.p, {
                                className: "flex items-center justify-center md:text-[1.25rem] ",
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: .5,
                                    delay: .4
                                },
                                children: "Have questions, need assistance, or just want to connect? Feel free to reach out!"
                            })]
                        }), (0, n.jsxs)("div", {
                            className: "flex flex-col lg:justify-around justify-center lg:items-start items-center  lg:flex-row gap-5 lg:gap-32",
                            children: [(0, n.jsxs)("div", {
                                className: "",
                                children: [(0, n.jsxs)("div", {
                                    className: "flex flex-col max-w-[448px]",
                                    children: [(0, n.jsx)("div", {
                                        className: " text-3xl md:text-4xl pb-4 xl:pb-6 font-medium leading-[44px] bg-gradient-to-r ease-in-out from-indigo-500 via-purple-500 to-pink-500   text-transparent bg-clip-text",
                                        children: "FAQs"
                                    }), (0, n.jsxs)("div", {
                                        className: "flex flex-col justify-center items-center",
                                        children: [(0, n.jsx)("span", {
                                            className: "text-gray-200 text-lg font-normal leading-7",
                                            children: "Have questions about the hackathon? Explore our FAQ below!\xa0"
                                        }), (0, n.jsx)("span", {
                                            className: "text-gray-200 text-lg font-normal leading-7",
                                            children: "Need further assistance? Don't hesitate to reach out to our team."
                                        })]
                                    })]
                                }), (0, n.jsx)("div", {
                                    className: "max-w-[700px] pt-8",
                                    children: [{
                                        title: "How do I register ?",
                                        content: "Click on the register now button on the nav menu of the website."
                                    }, {
                                        title: "How many team members do I need ?",
                                        content: "You can participate individually or in teams of 2 to 4 members."
                                    }, {
                                        title: "How much are the participation fees?",
                                        content: "Rs 699 for each participating team, be it 2 or 4 members."
                                    }, {
                                        title: "Will the Hackathon be in person or online ?",
                                        content: "MUJHackX 2.0 will be conducted in complete offline/in-person mode at Manipal University Jaipur"
                                    }, {
                                        title: "What is the venue for MUJHackX 2.0 ?",
                                        content: "Manipal University Jaipur, Dahmi Kalan, Bagru P.O, Jaipur Ajmer Road 303007, Rajasthan, India"
                                    }, {
                                        title: "What are the prerequisites to participate in this hackathon ?",
                                        content: "No prerequisites are required to participate in this hackathon. This event is open to participants of all skill levels."
                                    }, {
                                        title: "Can my friend join our team after we have already submitted the application for review ?",
                                        content: "Yes, your friend can join the team by submitting an individual application. Once both your friend's individual application and your team's application are accepted, you will be able to add your friend to the team."
                                    }].map((e, t) => (0, n.jsx)(p.UQ, {
                                        type: "single",
                                        collapsible: !0,
                                        children: (0, n.jsxs)(p.Qd, {
                                            value: "item-".concat(t),
                                            className: " py-4 md:py-8 !bg-primary",
                                            children: [(0, n.jsx)(p.o4, {
                                                className: "max-w-[592px] text-white text-2xl font-medium leading-7",
                                                children: e.title
                                            }), (0, n.jsx)(p.vF, {
                                                className: "max-w-[592px] text-gray-200 text-lg font-normal font-['Inter'] leading-7",
                                                children: e.content
                                            })]
                                        })
                                    }, t))
                                })]
                            }), (0, n.jsx)("div", {
                                className: "lg:pt-16",
                                children: (0, n.jsx)("iframe", {
                                    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.8772831810866!2d75.5652343!3d26.8438552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4850e05bee9b%3A0x1b8d67402d4eb863!2sManipal%20University%20Jaipur!5e0!3m2!1sen!2sin!4v1717828681903!5m2!1sen!2sin",
                                    width: "600",
                                    height: "450",
                                    className: "rounded-2xl xl:w-[600px] lg:w-[500px] sm:w-[600px] w-[350px] h-[500px] lg:h-[800px] xl:h-[900px]",
                                    allowfullscreen: "",
                                    loading: "lazy",
                                    referrerpolicy: "no-referrer-when-downgrade"
                                })
                            })]
                        }), (0, n.jsx)("hr", {
                            className: "border-0 h-1 bg-gradient-to-r from-transparent via-gray-500 to-transparent my-6"
                        }), "        ", (0, n.jsxs)("div", {
                            className: "w-full md:w-[90%] flex flex-col md:flex-row items-start md:items-center self-center gap-10",
                            children: [(0, n.jsxs)("div", {
                                className: "flex flex-col items-start w-[50%] md:w-[65%]",
                                children: [(0, n.jsxs)("div", {
                                    className: "text-3xl text-left p-4 font-bold inline-flex flex-row items-center gap-3",
                                    children: [" ", (0, n.jsx)(h.DsV, {}), " Call Us"]
                                }), (0, n.jsxs)("div", {
                                    className: "flex flex-col xl:flex-row px-4 gap-6",
                                    children: [(0, n.jsxs)("div", {
                                        className: "flex flex-col text-xl",
                                        children: [(0, n.jsx)("div", {
                                            children: "+91 95699 13103"
                                        }), (0, n.jsx)("div", {
                                            children: "Rishi Joshi"
                                        })]
                                    }), (0, n.jsxs)("div", {
                                        className: "flex flex-col text-xl",
                                        children: [(0, n.jsx)("div", {
                                            children: "+91 82404 73087"
                                        }), (0, n.jsx)("div", {
                                            children: "Shristi Krishna"
                                        })]
                                    }), (0, n.jsxs)("div", {
                                        className: "flex flex-col text-xl",
                                        children: [(0, n.jsx)("div", {
                                            children: "+91 95608 87855"
                                        }), (0, n.jsx)("div", {
                                            children: "Pulkit Gupta"
                                        })]
                                    })]
                                })]
                            }), (0, n.jsxs)("div", {
                                className: "flex flex-col items-start w-[50%] md:w-[35%]",
                                children: [(0, n.jsxs)("div", {
                                    className: "text-3xl text-left p-4 font-bold inline-flex flex-row items-center gap-3 ",
                                    children: [(0, n.jsx)(f.z6F, {}), " Address"]
                                }), (0, n.jsx)("div", {
                                    className: "flex flex-col px-4 gap-0.5 ",
                                    children: "Manipal University Jaipur, Jaipur-Ajmer Express Highway, Dehmi Kalan, Near GVK Toll Plaza, Jaipur, Rajasthan 303007"
                                })]
                            })]
                        })]
                    }), (0, n.jsx)(u.Z, {})]
                })
            };
            var j = g
        }
    },
    function(e) {
        e.O(0, [260, 409, 866, 788, 774, 888, 179], function() {
            return e(e.s = 6405)
        }), _N_E = e.O()
    }
]);