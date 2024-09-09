(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [38], {
        2268: function (e, n, a) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/team", function () {
                return a(1303)
            }])
        },
        9581: function (e, n, a) {
            "use strict";
            var i = a(5893),
                r = a(5675),
                s = a.n(r),
                t = a(9583);
            let o = e => {
                let {
                    name: n,
                    image: a,
                    line1: r,
                    line2: o,
                    count: m,
                    icon: l
                } = e;
                return (0, i.jsxs)("div", {
                    className: "flex flex-col items-center w-full md:w-[".concat((100 / m).toFixed(0), "%]"),
                    children: [(0, i.jsx)("div", {
                        className: "transition duration-300 transform rounded-lg shadow-2xl hover:scale-105 hover:shadow-3xl",
                        children: (0, i.jsx)("img", {
                            className: "object-cover rounded-lg",
                            src: a,
                            width: 250,
                            height: 250,
                            alt: n,
                            quality: 80
                        })
                    }), (0, i.jsxs)("div", {
                        className: "px-5 py-4 text-white text-center flex-grow",
                        children: [(0, i.jsx)("h1", {
                            className: "mb-4 text-xl 2xl:text-3xl font-bold text-white",
                            children: n
                        }), (0, i.jsx)("h2", {
                            className: "mb-2 md:text-lg lg:text-base text-white",
                            children: r
                        }), (0, i.jsx)("h3", {
                            className: "mb-4 md:text-lg lg:text-base text-white",
                            children: o
                        })]
                    }), (0, i.jsx)("div", {
                        className: "flex justify-center mb-3 cursor-pointer",
                        children: (0, i.jsx)("a", {
                            href: l,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: (0, i.jsx)(t.ltd, {
                                size: "1.5em",
                                className: "ml-2 hover:text-blue-500"
                            })
                        })
                    })]
                })
            };
            n.Z = o
        },
        765: function (e, n, a) {
            "use strict";
            a.d(n, {
                Z: function () {
                    return c
                }
            });
            var i = a(5893),
                r = a(7294),
                s = a(155),
                t = a(9583),
                o = a(1664),
                m = a.n(o),
                l = a(5675),
                p = a.n(l);
            let h = [{
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
           
             {
                name: "Faqs",
                path: "/contact.html"
            }];

            function c() {
                let [e, n] = (0, r.useState)(0);
                return (0, r.useEffect)(() => {
                    let e = async () => {
                        let e = await new Promise(e => setTimeout(() => e(1165), 1e3));
                        n(e)
                    };
                    e()
                }, []), (0, i.jsxs)("div", {
                    children: [(0, i.jsx)("hr", {
                        className: "border-0 h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent mt-10 "
                    }), (0, i.jsxs)("div", {
                        className: "flex items-center flex-col w-full h-full bg-hack footer-list p-16 lg:p-10 lg:pt-16 lg:pb-8",
                        children: [(0, i.jsx)("ul", {
                            className: "hidden items-center gap-5 xl:gap-10 text-base-1xl flex-col lg:flex-row footer-list lg:flex mb-4 space-x-5",
                            children: h.map((e, n) => (0, i.jsx)("li", {
                                children: (0, i.jsx)(m(), {
                                    href: e.path,
                                    children: (0, i.jsx)("div", {
                                        className: "flex flex-col items-center justify-center mx-1",
                                        children: (0, i.jsx)("div", {
                                            className: "text-lg font-thin",
                                            children: e.name
                                        })
                                    })
                                })
                            }, n))
                        }), (0, i.jsx)("div", {
                            children: (0, i.jsx)(m(), {
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
                            children: [(0, i.jsx)(m(), {
                                href: "https://www.instagram.com/csi_svvv/",
                                legacyBehavior: !0,
                                children: (0, i.jsx)("a", {
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: (0, i.jsx)(s.GDB, {
                                        className: "cursor-pointer"
                                    })
                                })
                            }), (0, i.jsx)(m(), {
                                href: "https://www.instagram.com/csi_svvv/",
                                legacyBehavior: !0,
                                children: (0, i.jsx)("a", {
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: (0, i.jsx)(t.Zf_, {
                                        className: "cursor-pointer"
                                    })
                                })
                            }), (0, i.jsx)(m(), {
                                href: "https://www.linkedin.com/in/csi-svvv-indore-7449561b7/",
                                legacyBehavior: !0,
                                children: (0, i.jsx)("a", {
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: (0, i.jsx)(t.ltd, {
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
        7441: function (e, n) {
            "use strict";
            n.Z = []
        },
        1303: function (e, n, a) {
            "use strict";
            a.r(n);
            var i = a(5893),
                r = a(7294),
                s = a(7441),
                t = a(9581),
                o = a(765);
            let m = () => {
                let [e, n] = (0, r.useState)(2024), a = {

                }, m = e => e.map(e => ({
                    ...e,
                    icon: a[e.personName] || ""
                })), l = m(s.Z.filter(e => "CORE MEMBER" === e.personPosition))[0], p = m(s.Z.filter(e => "MEMBER" === e.personPosition))[0], h = m(s.Z.filter(e => "CO-PATRON" === e.personPosition)), c = m(h.map(e => "" === e.personName ? {
                    ...e,

                } : "" === e.personName ? {
                    ...e,

                } : e));
                return (0, i.jsx)("div", {
                    className: "bg-primary flex items-center justify-center  relative z-10",
                    children: (0, i.jsxs)("div", {
                        className: "w-full md:w-[80%]",
                        children: [(0, i.jsx)("h2", {
                            className: "h2 text-center mb-12 text-accent pt-[20vh] font-bold bg-gradient-to-r ease-in-out via-purple-500 bg-clip-text text-transparent from-indigo-300 to-indigo-300 animate-text",
                            children: "Team Kaushal 2024"
                        }), (0, i.jsxs)("div", {
                            className: "flex justify-center items-center w-[70%] md:w-[50%] text-xl h-16 mt-8 md:mt-16 mx-auto",
                            children: [(0, i.jsx)("button", {
                                className: "w-[50%] m-4 md:m-0 p-4 rounded ".concat(2024 === e ? "bg-gradient-to-r from-cyan-500 to-purple-500" : ""),
                                onClick: () => n(2024),
                                children: "2024"
                            })]
                        }), (0, i.jsx)("h2", {
                            className: "text-center text-4xl font-bold my-4 text-white bg-primary",
                            children: "Patrons"
                        }), (0, i.jsx)("hr", {
                            className: "mb-4"
                        }), (0, i.jsx)("div", {
                            className: "flex flex-col lg:flex-row items-center",
                            children: [(0, i.jsx)(t.Z, {
                                name: "Dr. Rupali Bhartiya",
                                image: "/_next/ruplaibharitya.png",
                                line1: "",
                                line2: "",
                                count: h.length,
                                icon: "https://www.linkedin.com/in/dr-rupali-bhartiya-5268415/"
                            },)]
                        }), (0, i.jsxs)("div", {
                            className: "flex flex-col align-middle  bg-primary",
                            children: [(0, i.jsx)("h2", {
                                className: "text-center text-4xl text-white font-bold my-4",
                                children: "Design & Developed By"
                            }), (0, i.jsx)("hr", {
                                className: "mb-4"
                            }), (0, i.jsxs)("div", {
                                className: "flex flex-col md:flex-row justify-center  items-center",
                                children: [(0, i.jsx)(t.Z, {
                                    name: "Pratham Rathore",
                                    image: "/_next/prathamrathor (2).JPG",
                                    line1: "TECHNICAL HEAD",
                                    line2: "CORE MEMBER",
                                    count: 2,
                                    icon: "https://www.linkedin.com/in/pratham-rathore-32074a250/"
                                }), (0, i.jsx)(t.Z, {
                                    name: "Sohel Shaikh",
                                    image: "/_next/sohelshaikh.png",
                                    line1: "VICE PRESIDENT",
                                    line2: "CORE MEMBER",
                                    count: 2,
                                    icon: "https://www.linkedin.com/in/sohelxshaikh/"
                                }), (0, i.jsx)(t.Z, {
                                    name: "Harshit Nagar",
                                    image: "/_next/harshitnagar.jpg",
                                    line1: "TECHNICAL MEMBER",
                                    line2: "MEMBER",
                                    count: 2,
                                    icon: "https://www.linkedin.com/in/harshit-nagar-7aa701251/"
                                })]
                            })]
                        }), (0, i.jsx)("h2", {
                            className: "text-center text-4xl font-bold my-4 text-white bg-primary",
                            children: "Core Team"
                        }), (0, i.jsx)("hr", {
                            className: "mb-4"
                        }), (0, i.jsx)("div", {
                            className: "flex flex-col lg:flex-row items-center",
                            children: [(0, i.jsx)(t.Z, {
                                name: "Anshul Bajpai",
                                image: "/_next/presodent.jpeg",
                                line1: "PRESIDENT",
                                line2: "CORE MEMBER",
                                icon: "https://www.linkedin.com/in/anshul-bajpai-53b489246/"
                            }), (0, i.jsx)(t.Z, {
                                name: "Shantanu Shewale",
                                image: "/_next/general secretary.jpeg",
                                line1: "GENERAL SECRETARY",
                                line2: "CORE MEMBER",
                                icon: "https://www.linkedin.com/in/shantanu-shewale-04b96125b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
                            })]
                        }), (0, i.jsx)("h2", {
                            className: "text-center text-4xl font-bold my-4 text-white bg-primary",
                            children: "Creative & Communication Team"
                        }), (0, i.jsx)("hr", {
                            className: "mb-4"
                        }), (0, i.jsx)("div", {
                            className: "flex flex-col md:flex-row items-center",
                            children: [(0, i.jsx)(t.Z, {
                                name: "Suraj Shriwas",
                                image: "/_next/media.JPG",
                                line1: "MEDIA HEAD",
                                line2: "CORE MEMBER",
                                icon: "https://www.linkedin.com/in/suraj-shriwas-056537308?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
                            }), (0, i.jsx)(t.Z, {
                                name: "Vaishnavi Upadhyay",
                                image: "/_next/content.jpg",
                                line1: "CONTENT HEAD",
                                line2: "CORE MEMBER",
                                icon: ""
                            }), (0, i.jsx)(t.Z, {
                                name: "Prateek Jain",
                                image: "/_next/promotional incharge.jpeg",
                                line1: "PROMOTIONAL HEAD",
                                line2: "CORE MEMBER",
                                icon: ""
                            }), (0, i.jsx)(t.Z, {
                                name: "Sarthak Shahane",
                                image: "/_next/graphics.jpeg",
                                line1: "GRAPHICS HEAD",
                                line2: "CORE MEMBER",
                                icon: ""
                            })]
                        }), (0, i.jsx)("h2", {
                            className: "text-center text-4xl font-bold my-4 text-white bg-primary",
                            children: "Execution Committee"
                        }), (0, i.jsx)("hr", {
                            className: "mb-4"
                        }), (0, i.jsx)("div", {
                            className: "flex flex-col md:flex-row items-center",
                            children: [(0, i.jsx)(t.Z, {
                                name: "Yash Yadav",
                                image: "/_next/branch rep.JPG",
                                line1: "BRANCH REPRESENTATIVE",
                                line2: "CORE MEMBER",
                                icon: ""
                            }), (0, i.jsx)(t.Z, {
                                name: "Krutika Nikhade",
                                image: "/_next/program executive.JPG",
                                line1: "PROGRAM EXECUTIVE",
                                line2: "CORE MEMBER",
                                icon: "https://www.linkedin.com/in/krutika-nikhade?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
                            }), (0, i.jsx)(t.Z, {
                                name: "Rajveer Singh Dharival",
                                image: "/_next/logistic.jpg",
                                line1: "LOGISTIC HEAD",
                                line2: "CORE MEMBER",
                                icon: ""
                            }), (0, i.jsx)(t.Z, {
                                name: "Aayush Sanodiya",
                                image: "/_next/treasurer.JPG",
                                line1: "TREASURER",
                                line2: "CORE MEMBER",
                                icon: ""
                            })]
                        }), 
                        (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)("h2", {
                                className: "text-center text-4xl font-bold my-4 text-white bg-primary",
                                children: "Team Members"
                            }),
                            
                            , (0, i.jsx)("h2", {
                                className: "text-center text-2xl md:text-4xl font-bold my-4 text-white bg-primary",
                            }), (0, i.jsx)("hr", {
                                className: "mb-4"
                            }), (0, i.jsx)("div", {
                                className: " gap-4 justify-center  bg-primary",
                                children: [(0, i.jsx)("div", {
                                    className: "flex flex-col  items-center",
                                    children: (0, i.jsx)("img", {
                                        src: "/_next/csimembers (2).jpg",
                                    })
                                })]
                            })]
                        }), (0, i.jsx)(o.Z, {})]
                    })
                })
            };
            n.default = m
        }
    },
    function (e) {
        e.O(0, [260, 774, 888, 179], function () {
            return e(e.s = 2268)
        }), _N_E = e.O()
    }
]);