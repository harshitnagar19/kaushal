(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [521], {
        1233: function(A, e, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/about", function() {
                return t(3040)
            }])
        },
        765: function(A, e, t) {
            "use strict";
            t.d(e, {
                Z: function() {
                    return d
                }
            });
            var s = t(5893),
                i = t(7294),
                a = t(155),
                r = t(9583),
                l = t(1664),
                n = t.n(l),
                c = t(5675),
                h = t.n(c);
            let g = [{
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

            function d() {
                let [A, e] = (0, i.useState)(0);
                return (0, i.useEffect)(() => {
                    let A = async () => {
                        let A = await new Promise(A => setTimeout(() => A(1165), 1e3));
                        e(A)
                    };
                    A()
                }, []), (0, s.jsxs)("div", {
                    children: [(0, s.jsx)("hr", {
                        className: "border-0 h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent mt-10 "
                    }), (0, s.jsxs)("div", {
                        className: "flex items-center flex-col w-full h-full bg-hack footer-list p-16 lg:p-10 lg:pt-16 lg:pb-8",
                        children: [(0, s.jsx)("ul", {
                            className: "hidden items-center gap-5 xl:gap-10 text-base-1xl flex-col lg:flex-row footer-list lg:flex mb-4 space-x-5",
                            children: g.map((A, e) => (0, s.jsx)("li", {
                                children: (0, s.jsx)(n(), {
                                    href: A.path,
                                    children: (0, s.jsx)("div", {
                                        className: "flex flex-col items-center justify-center mx-1",
                                        children: (0, s.jsx)("div", {
                                            className: "text-lg font-thin",
                                            children: A.name
                                        })
                                    })
                                })
                            }, e))
                        }), (0, s.jsx)("div", {
                            children: (0, s.jsx)(n(), {
                                href: "/",
                                children: (0, s.jsx)("img", {
                                    src: "kaushallogo.png",
                                    width: 288,
                                    height: 64,
                                    alt: "",
                                    priority: !0
                                })
                            })
                        }), (0, s.jsx)("div", {
                            className: "text-center mb-4",
                            children: (0, s.jsxs)("p", {
                                className: "text-sm text-gray-500",
                                children: ["Visitor Count: ", (0, s.jsx)("span", {
                                    className: "font-bold text-gray-700",
                                    children: A
                                })]
                            })
                        }), (0, s.jsxs)("div", {
                            className: "flex items-center gap-6 mb-4 footer-list text-2xl",
                            children: [(0, s.jsx)(n(), {
                                href: "https://www.instagram.com/csi_svvv/",
                                legacyBehavior: !0,
                                children: (0, s.jsx)("a", {
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: (0, s.jsx)(a.GDB, {
                                        className: "cursor-pointer"
                                    })
                                })
                            }), (0, s.jsx)(n(), {
                                href: "https://www.instagram.com/csi_svvv/",
                                legacyBehavior: !0,
                                children: (0, s.jsx)("a", {
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: (0, s.jsx)(r.Zf_, {
                                        className: "cursor-pointer"
                                    })
                                })
                            }), (0, s.jsx)(n(), {
                                href: "https://www.linkedin.com/in/csi-svvv-indore-7449561b7/",
                                legacyBehavior: !0,
                                children: (0, s.jsx)("a", {
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: (0, s.jsx)(r.ltd, {
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
        3040: function(A, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                default: function() {
                    return D
                }
            });
            var s = t(5893),
                i = t(7294),
                a = t(4960),
                r = t(8828),
                l = t(4037),
                n = t(1550);

            function c(A) {
                let {
                    targetValue: e
                } = A, t = (0, a.c)(0), c = (0, r.H)(t, Math.round), h = (0, i.useRef)();
                (0, i.useEffect)(() => {
                    let A = new IntersectionObserver(A => {
                        let [s] = A;
                        s.isIntersecting && (0, l.j)(t, e, {
                            duration: 4,
                            ease: "linear",
                            onUpdate: A => t.set(A)
                        })
                    }, {
                        root: null,
                        rootMargin: "0px",
                        threshold: 1
                    });
                    return h.current && A.observe(h.current), () => {
                        h.current && A.unobserve(h.current)
                    }
                }, []);
                let g = {
                    background: "linear-gradient(80deg, #d654ff 6.67%, #e787ff 28.13%, #9b65ff 64.87%, #a71bff 95.66%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                };
                return (0, s.jsxs)("div", {
                    ref: h,
                    className: "flex",
                    children: [(0, s.jsx)(n.E.p, {
                        className: "font-medium text-[2rem] md:text-[4rem]",
                        style: g,
                        children: c
                    }), (0, s.jsx)("p", {
                        className: "font-medium text-[2rem] md:text-[4rem]",
                        style: g,
                        children: "+"
                    })]
                })
            }
            let h = A => {
                let {
                    icon: e,
                    heading: t,
                    description: i
                } = A;
                return (0, s.jsx)("div", {
                    className: " w-[calc(50%%-2rem)] md:w-[calc(33%-2rem)] my-6 md:my-8 mx-4",
                    children: (0, s.jsxs)("div", {
                        className: "flex  flex-col items-center justify-center",
                        children: [(0, s.jsx)("div", {
                            className: "flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full",
                            children: (0, s.jsx)("img", {
                                src: e,
                                alt: "icon",
                                className: "w-10 h-10 md:w-12 md:h-12"
                            })
                        }), (0, s.jsx)("div", {
                            className: "text-xl md:text-2xl mt-4 text-slate-200 text-center",
                            children: t
                        }), (0, s.jsx)("div", {
                            className: "text-xs md:text-base mt-4 text-slate-200 text-center",
                            children: i
                        })]
                    })
                })
            };
            let harshit = A => {
                let {
                    icon: e,
                    heading: t,
                    description: i,
                    link:k
                } = A;
                return (0, s.jsx)("div", {
                    className: " w-full md:w-full my-6 md:my-8 mx-4",
                    children: (0, s.jsxs)("div", {
                        className: "flex  flex-col items-center justify-center",
                        children: [(0, s.jsx)("div", {
                            className: "flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full",
                            children: (0, s.jsx)("img", {
                                src: e,
                                alt: "icon",
                                className: "w-10 h-10 md:w-12 md:h-12"
                            })
                        }), (0, s.jsx)("div", {
                            className: "text-xl md:text-2xl mt-4 text-slate-200 text-center",
                            children: t
                        }), (0, s.jsx)("div", {
                            className: "text-xs md:text-base mt-4 text-slate-200 text-center",
                            children: i
                        }),(0, s.jsx)("a", {
                            className: "text-xs md:text-base mt-4 text-slate-200 text-center",
                            href:k,
                            children:`visit more about csi on  ${k}`,
                            target:"_blank"
                        })]
                    })
                })
            };
            var g = t(5675),
                d = t.n(g),
                z = t(765);
            let CSI = [{
                icon: "/CSIlogo.jpeg",
                heading: "COMPUTER SOCIETY OF INDIA , SVVV ,INDORE",
                description: "The Computer Society of India (CSI) is the oldest and largest organization of IT and allied professionals in India. As a non-profit professional society, CSI is dedicated to computing, facilitating the exchange of views and information, and fostering learning and idea-sharing. CSI Shri Vaishnav Vidyapeeth Vishwavidyalaya (SVVV) connects you with the broader CSI community, providing you with opportunities to engage with recent technological advancements and innovations. Through CSI-SVVV, you can stay informed about the latest developments in IT and enhance your skills in the ever-evolving field of technology.",
                link:"https://csi-dusky.vercel.app/"
            }]
            let C = [{
                    icon: "/img1.svg",
                    heading: "Boost Your Resume",
                    description: "Earn certificates and recognition that make you stand out !"
                }, {
                    icon: "/img2.svg",
                    heading: "Win exciting prizes",
                    description: "Cash rewards, gadgets, and tech goodies await the top performers.!"
                }, {
                    icon: "/img3.svg",
                    heading: "Hands-on Workshops",
                    description: "Access exclusive workshops and cutting-edge tech demos."
                }, {
                    icon: "/img4.svg",
                    heading: "Career Opportunities",
                    description: "Network with industry experts and grab potential internships or job offers."
                }, {
                    icon: "/img5.svg",
                    heading: "entertainment and refreshment to participent",
                    description: "you will get your best experience , and you can take benefit of different games and food coupens."
                }, {
                    icon: "/img6.svg",
                    heading: "Skill Development",
                    description: "Enhance your technical skills, creativity, and teamwork abilities."
                }],
                v = () => {
                    let [A, e] = (0, i.useState)(0);
                    return (0, s.jsxs)("div", {
                        className: "bg-primary bg-fixed",
                        children: [(0, s.jsxs)("div", {
                            className: "pb-[30%] md:pb-[10%] pt-[45%] xl:pt-[10%] lg:pt-[15%] md:pt-[20%] h-full bg-primary flex items-center flex-col",
                            children: [(0, s.jsxs)("div", {
                                className: "w-full md:w-auto flex flex-col items-center",
                                children: [(0, s.jsx)("div", {
                                    className: "text-4xl md:text-6xl text-center font-bold bg-gradient-to-r ease-in-out via-purple-500 bg-clip-text text-transparent from-indigo-300 to-indigo-300 animate-text",
                                    children: "WHY PARTICIPATE IN KAUSHAL ?"
                                }), (0, s.jsx)("div", {
                                    className: "flex  justify-center flex-wrap mt-12 items-center w-[90%] md:w-[85%] bg-gradient-to-r from-[#9d00ff1f] to-[#5600ff4d] rounded-2xl pt-4 md:pt-0",
                                    children: C.map((A, e) => (0, s.jsx)(h, {
                                        icon: A.icon,
                                        heading: A.heading,
                                        description: A.description
                                    }, e))
                                })]
                            }), (0, s.jsxs)("div", {
                                className: "w-full mt-32 flex flex-col items-center",
                                children: [(0, s.jsx)("div", {
                                    className: "text-4xl md:text-6xl text-center font-bold bg-gradient-to-r ease-in-out via-purple-500 bg-clip-text text-transparent from-indigo-300 to-indigo-300 animate-text",
                                    children: "LAST YEAR'S SUCCESS"
                                }), (0, s.jsxs)(n.E.div, {
                                    className: "flex flex-row mt-6 md:mt-8 items-center w-full md:w-[80%] flex-grow",
                                    children: [(0, s.jsxs)("div", {
                                        className: "flex flex-col flex-grow items-center",
                                        children: [(0, s.jsx)(c, {
                                            targetValue: 8
                                        }), (0, s.jsx)("div", {
                                            className: "md:text-3xl text-center text-slate-200",
                                            children: "Universities"
                                        })]
                                    }), (0, s.jsxs)("div", {
                                        className: "flex flex-col flex-grow items-center",
                                        children: [(0, s.jsx)(c, {
                                            targetValue: 560
                                        }), (0, s.jsx)("div", {
                                            className: "md:text-3xl text-center text-slate-200",
                                            children: "Participants"
                                        })]
                                    }), (0, s.jsxs)("div", {
                                        className: "flex flex-col flex-grow items-center",
                                        children: [(0, s.jsx)(c, {
                                            targetValue: 50
                                        }), (0, s.jsx)("div", {
                                            className: "md:text-3xl text-center text-slate-200",
                                            children: "Projects"
                                        })]
                                    })]
                                })]
                            }),(0, s.jsxs)("div", {
                                className: "w-full md:w-auto flex flex-col items-center mt-32",
                                children: [(0, s.jsx)("div", {
                                    className: "text-4xl md:text-6xl text-center font-bold bg-gradient-to-r ease-in-out via-purple-500 bg-clip-text text-transparent from-indigo-300 to-indigo-300 animate-text",
                                    children: "KAUSHAL IS PRESENT BY -"
                                }), (0, s.jsx)("div", {
                                    className: "flex  justify-center flex-wrap mt-12 items-center w-[90%] md:w-[85%] bg-gradient-to-r from-[#9d00ff1f] to-[#5600ff4d] rounded-2xl pt-4 md:pt-0",
                                    children:(0, s.jsx)(harshit, {
                                        icon: CSI[0].icon,
                                        heading: CSI[0].heading,
                                        description: CSI[0].description,
                                        link:CSI[0].link
                                    }, e),
                                    
                                })]
                            })]
                        }), (0, s.jsx)(z.Z, {})]
                    })
                };
            var D = v
        }
    },
    function(A) {
        A.O(0, [260, 603, 774, 888, 179], function() {
            return A(A.s = 1233)
        }), _N_E = A.O()
    }
]);