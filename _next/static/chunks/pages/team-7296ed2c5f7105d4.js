(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [38], {
        2268: function(e, n, a) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/team", function() {
                return a(1303)
            }])
        },
        9581: function(e, n, a) {
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
                        children: (0, i.jsx)(s(), {
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
        765: function(e, n, a) {
            "use strict";
            a.d(n, {
                Z: function() {
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
                path: "/about"
            }, {
                name: "Timeline",
                path: "/timeline.html"
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
                                children: (0, i.jsx)(p(), {
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
        7441: function(e, n) {
            "use strict";
            n.Z = [{
                personImage: "/SVaitheeswaran.jpg",
                personName: "Mr. S. Vaitheeswaran",
                personPosition: "CHIEF PATRON",
                personOrganization: "CHAIRPERSON, MUJ",
                personLinkedIn: "https://www.linkedin.com/in/pujan-modha/"
            }, {
                personImage: "/NNSharma.png",
                personName: "Dr. N N Sharma",
                personPosition: "PATRON",
                personOrganization: "PRESIDENT, MUJ",
                personLinkedIn: "https://www.linkedin.com/in/arunabha-mukhopadhyay/"
            }, {
                personImage: "/Jawarjangir.jpg",
                personName: "Dr. Jawar N Jangir",
                personPosition: "CO PATRON",
                personOrganization: "PRO PRESIDENT, MUJ",
                personLinkedIn: "https://www.linkedin.com/in/arunabha-mukhopadhyay/"
            }, {
                personImage: "/ThammaiahCS.jpg",
                personName: "Dr. Thammaiah CS",
                personPosition: "CO-PATRON",
                personOrganization: "PRO PRESIDENT, MUJ",
                personLinkedIn: "https://www.linkedin.com/in/dev-agrawal28/"
            }, {
                personImage: "/NeetuBhatnagar.jpg",
                personName: "Dr. Nitu Bhatnagar",
                personPosition: "CO-PATRON",
                personOrganization: "REGISTRAR, MUJ",
                personLinkedIn: "https://www.linkedin.com/in/vikramadityahiran/"
            }, {
                personImage: "/ArunShanbhag.jpg",
                personName: "Dr. Arun Shanbhag",
                personPosition: "CO-PATRON",
                personOrganization: "DEAN FOE,MUJ",
                personLinkedIn: "https://www.linkedin.com/in/pujan-modha/"
            }, {
                personImage: "/SandeepChaurasia.webp",
                personName: "Dr. Sandeep Chaurasia",
                personPosition: "GENERAL CHAIR",
                personOrganization: "DIRECTOR SCSE,MUJ",
                personLinkedIn: "https://www.linkedin.com/in/pujan-modha/"
            }, {
                personImage: "/AmitSoni.jpg",
                personName: "Dr. Amit Soni",
                personPosition: "CEO AIC",
                personOrganization: "MUJ",
                personLinkedIn: "https://www.linkedin.com/in/pujan-modha/"
            }, {
                personImage: "/AmitSoni.jpg",
                personName: "Dr.Amit Soni",
                personPosition: "DEAN FOE,MUJ",
                personOrganization: "MUJ",
                personLinkedIn: "https://www.linkedin.com/in/pujan-modha/"
            }, {
                personImage: "/SandeepJoshi.jpg",
                personName: "Dr. Sandeep Joshi",
                personPosition: "CEO AIC",
                personOrganization: "MUJ",
                personLinkedIn: "https://www.linkedin.com/in/pujan-modha/"
            }, {
                personImage: "/DineshSaini.jpg",
                personName: "Dr. Dinesh Saini",
                personPosition: "DIRECTOR, ECELL",
                personOrganization: "MUJ",
                personLinkedIn: "https://www.linkedin.com/in/pujan-modha/"
            }, {
                personImage: "/NehaChaudhary.jpg",
                personName: "Dr. Neha Chaudhary",
                personPosition: "PROGRAM CHAIR",
                personOrganization: "HOD CSE,MUJ",
                personLinkedIn: "https://www.linkedin.com/in/pujan-modha/"
            }, {
                personImage: "/SantoshKumarVishwakarma.jpg",
                personName: "Dr. Santosh Kumar Vishwakarma",
                personPosition: "PROGRAM CHAIR",
                personOrganization: "HOD AI-ML,MUJ",
                personLinkedIn: "https://www.linkedin.com/in/pujan-modha/"
            }, {
                personImage: "/JuhiSingh.jpg",
                personName: "Dr. Juhi Singh",
                personPosition: "Convener",
                personOrganization: "MUJ",
                personLinkedIn: "https://www.linkedin.com/in/pujan-modha/"
            }, {
                personImage: "/ShishirSinghChauhan.jpg",
                personName: "Mr. Shishir Singh",
                personPosition: "Convener",
                personOrganization: "MUJ",
                personLinkedIn: "https://www.linkedin.com/in/pujan-modha/"
            }, {
                personImage: "/SamvrantSamantaray.png",
                personName: "Samvrant Samantaray",
                personPosition: "Advisor",
                personOrganization: "MUJ",
                personLinkedIn: "https://www.linkedin.com/in/pujan-modha/"
            }, {
                personImage: "/Manya.jpg",
                personName: "Manya Goel",
                personPosition: "Advisor",
                personOrganization: "MUJ",
                personLinkedIn: "https://www.linkedin.com/in/pujan-modha/"
            }, {
                personImage: "/AeshnaKala.png",
                personName: "Aeshna Kala",
                personPosition: "Advisor",
                personOrganization: "MUJ",
                personLinkedIn: "https://www.linkedin.com/in/pujan-modha/"
            }]
        },
        1303: function(e, n, a) {
            "use strict";
            a.r(n);
            var i = a(5893),
                r = a(7294),
                s = a(7441),
                t = a(9581),
                o = a(765);
            let m = () => {
                let [e, n] = (0, r.useState)(2024), a = {
                    "Mr. S. Vaitheeswaran": "https://www.linkedin.com/in/vaitheeswaran/",
                    "Dr. N N Sharma": "https://www.linkedin.com/in/sharma-nn-7988182/",
                    "Dr. Nitu Bhatnagar": "https://www.linkedin.com/in/nitu-bhatnagar-496980172/",
                    "Dr. Thammaiah CS": "https://www.linkedin.com/in/dr-thammaiah-chekkera-6014184/",
                    "Dr. Jawar N Jangir": "https://www.linkedin.com/in/commodore-dr-jawaharjangir/",
                    "Dr. Arun Shanbhag": "https://www.linkedin.com/in/arunshanbhag/",
                    "Dr. Amit Soni": "https://www.linkedin.com/in/dr-amit-soni-9b810812/",
                    "Dr. Sandeep Chaurasia": "https://www.linkedin.com/in/sandeep-chaurasia-0457568a/",
                    "Dr. Sandeep Joshi": "https://www.linkedin.com/in/dr-sandeep-joshi-7319a138/",
                    "Dr. Dinesh Saini": "https://www.linkedin.com/in/dinesh-saini-4354028/",
                    "Dr. Neha Chaudhary": "https://www.linkedin.com/in/dr-neha-chaudhary-2b02bb31/",
                    "Dr. Santosh Kumar Vishwakarma": "https://www.linkedin.com/in/santosh-kumar-vishwakarma-68005a66/",
                    "Dr. Juhi Singh": "https://www.linkedin.com/in/dr-juhi-singh-171a4873/",
                    "Mr. Shishir Singh": "https://www.linkedin.com/in/shishir-chauhan-b888b2129/",
                    Preet: "https://www.linkedin.com/in/preet-kalani/",
                    "Dev Shalinkumar Agrawal": "https://www.linkedin.com/in/dev-agrawal28/",
                    "Ayush Poddar": "https://www.linkedin.com/in/ayush-poddar-324909245/",
                    "Aneerban Saha": "https://www.linkedin.com/in/aneerban-saha/",
                    "Lakshya Goel": "https://www.linkedin.com/in/ilakshya1/",
                    "Manya Goel": "https://www.linkedin.com/in/manya-goel-8a6335222/",
                    "Naad Dantale": "https://www.linkedin.com/in/naad/",
                    "Rishi Joshi": "https://www.linkedin.com/in/rishijoshi1410/",
                    "Srishti Krishna": "https://www.linkedin.com/in/shristikrishna/",
                    "Pulkit Gupta": "https://www.linkedin.com/in/pulkit-gupta-abb638249/",
                    "Roshmeet Chakraborty": "https://www.linkedin.com/in/roshmeet/",
                    "Abhijeet Anand Jha": "https://www.linkedin.com/in/abhijeet-anand-jha-b517b7249/",
                    "Samvrant Samantaray": "https://www.linkedin.com/in/samvrant-samanataray/",
                    "Aeshna Kala": "https://www.linkedin.com/in/aeshna-kala-929191233/"
                }, m = e => e.map(e => ({
                    ...e,
                    icon: a[e.personName] || ""
                })), l = m(s.Z.filter(e => "CHIEF PATRON" === e.personPosition))[0], p = m(s.Z.filter(e => "PATRON" === e.personPosition))[0], h = m(s.Z.filter(e => "CO-PATRON" === e.personPosition)), c = m(h.map(e => "Dr. Thammaiah CS" === e.personName ? {
                    ...e,
                    personName: "Dr. Jawar N Jangir",
                    personImage: "/JawarJangir.jpg"
                } : "Dr. Arun Shanbhag" === e.personName ? {
                    ...e,
                    personName: "Dr. Amit Soni",
                    personImage: "/AmitSoni.jpg"
                } : e)), d = m(s.Z.filter(e => "Dr. Sandeep Chaurasia" === e.personName || "Dr. Amit Soni" === e.personName || "Dr. Dinesh Saini" === e.personName)), g = m([{
                    personName: "Dr. Sandeep Chaurasia",
                    personImage: "/SandeepChaurasia.webp",
                    personPosition: "Chair",
                    personOrganization: ""
                }, {
                    personName: "Dr. Sandeep Joshi",
                    personImage: "/SandeepJoshi.jpeg",
                    personPosition: "CEO AIC",
                    personOrganization: ""
                }]), w = m(s.Z.filter(e => "Dr. Neha Chaudhary" === e.personName || "Dr. Santosh Kumar Vishwakarma" === e.personName)), x = m([{
                    personName: "Dr. Neha Chaudhary",
                    personImage: "/NehaChaudhary.jpg",
                    personPosition: "Program Chair",
                    personOrganization: ""
                }]), N = m(s.Z.filter(e => "Manya Goel" === e.personName || "Samvrant Samantaray" === e.personName || "Aeshna Kala" === e.personName)), u = m(s.Z.filter(e => "Dr. Juhi Singh" === e.personName || "Mr. Shishir Singh" === e.personName)), j = m([{
                    personImage: "/preet.jpg",
                    personName: "Preet"
                }, {
                    personImage: "/Dev.jpg",
                    personName: "Dev Shalinkumar Agrawal"
                }, {
                    personImage: "/Ayush.jpg",
                    personName: "Ayush Poddar"
                }]), k = m([{
                    personImage: "/Aneerban.jpg",
                    personName: "Aneerban Saha"
                }, {
                    personImage: "/Lakshay.png",
                    personName: "Lakshya Goel"
                }, {
                    personImage: "/Manya.jpg",
                    personName: "Manya Goel"
                }]), f = m([{
                    personImage: "/naad.png",
                    personName: "Naad Dantale"
                }, {
                    personImage: "/rishi.png",
                    personName: "Rishi Joshi"
                }, {
                    personImage: "/krishna.png",
                    personName: "Srishti Krishna"
                }, {
                    personImage: "/pulkit.png",
                    personName: "Pulkit Gupta"
                }, {
                    personImage: "/roshmeet.png",
                    personName: "Roshmeet Chakraborty"
                }, {
                    personImage: "/image 1.png",
                    personName: "Abhijeet Anand Jha"
                }]);
                return (0, i.jsx)("div", {
                    className: "bg-primary flex items-center justify-center  relative z-10",
                    children: (0, i.jsxs)("div", {
                        className: "w-full md:w-[80%]",
                        children: [(0, i.jsx)("h2", {
                            className: "h2 text-center mb-12 text-accent pt-[20vh] font-bold bg-gradient-to-r ease-in-out via-purple-500 bg-clip-text text-transparent from-indigo-300 to-indigo-300 animate-text",
                            children: 2023 === e ? "Team HackX 2023" : "Team HackX 2024"
                        }), (0, i.jsxs)("div", {
                            className: "flex items-center w-[70%] md:w-[50%] text-xl h-16 mt-8 md:mt-16 mx-auto",
                            children: [(0, i.jsx)("button", {
                                className: "w-[50%] m-4 md:m-0 p-4 rounded ".concat(2024 === e ? "bg-gradient-to-r from-cyan-500 to-purple-500" : ""),
                                onClick: () => n(2024),
                                children: "2024"
                            }), (0, i.jsx)("button", {
                                className: "w-[50%] m-4 md:m-0 p-4 rounded ".concat(2023 === e ? "bg-gradient-to-r from-cyan-500 to-purple-500" : ""),
                                onClick: () => n(2023),
                                children: "2023"
                            })]
                        }), (0, i.jsxs)("div", {
                            className: "flex flex-col align-middle bg-primary",
                            children: [(0, i.jsx)("h2", {
                                className: "text-center text-4xl text-white font-bold my-4",
                                children: "Patron"
                            }), (0, i.jsx)("hr", {
                                className: "mb-4"
                            }), (0, i.jsxs)("div", {
                                className: "flex flex-col md:flex-row justify-center items-center",
                                children: [(0, i.jsx)(t.Z, {
                                    name: l.personName,
                                    image: l.personImage,
                                    line1: l.personPosition,
                                    line2: l.personOrganization,
                                    count: 2,
                                    icon: l.icon
                                }), (0, i.jsx)(t.Z, {
                                    name: p.personName,
                                    image: p.personImage,
                                    line1: p.personPosition,
                                    line2: p.personOrganization,
                                    count: 2,
                                    icon: p.icon
                                })]
                            })]
                        }), (0, i.jsx)("h2", {
                            className: "text-center text-4xl font-bold my-4 text-white bg-primary",
                            children: "Co-Patrons"
                        }), (0, i.jsx)("hr", {
                            className: "mb-4"
                        }), (0, i.jsx)("div", {
                            className: "flex flex-col lg:flex-row items-center",
                            children: (2023 === e ? h : c).map((e, n) => (0, i.jsx)(t.Z, {
                                name: e.personName,
                                image: e.personImage,
                                line1: e.personPosition,
                                line2: e.personOrganization,
                                count: h.length,
                                icon: e.icon
                            }, n))
                        }), (0, i.jsx)("h2", {
                            className: "text-center text-4xl font-bold my-4 text-white bg-primary",
                            children: "Chair"
                        }), (0, i.jsx)("hr", {
                            className: "mb-4"
                        }), (0, i.jsx)("div", {
                            className: "flex flex-col lg:flex-row items-center",
                            children: (2023 === e ? d : g).map((e, n) => (0, i.jsx)(t.Z, {
                                name: e.personName,
                                image: e.personImage,
                                line1: e.personPosition,
                                line2: e.personOrganization,
                                count: g.length,
                                icon: e.icon
                            }, n))
                        }), (0, i.jsx)("h2", {
                            className: "text-center text-4xl font-bold my-4 text-white bg-primary",
                            children: "Program Chair"
                        }), (0, i.jsx)("hr", {
                            className: "mb-4"
                        }), (0, i.jsx)("div", {
                            className: "flex flex-col md:flex-row items-center",
                            children: (2023 === e ? w : x).map((e, n) => (0, i.jsx)(t.Z, {
                                name: e.personName,
                                image: e.personImage,
                                line1: e.personPosition,
                                line2: e.personOrganization,
                                count: x.length,
                                icon: e.icon
                            }, n))
                        }), (0, i.jsx)("h2", {
                            className: "text-center text-4xl font-bold my-4 text-white bg-primary",
                            children: "Convener"
                        }), (0, i.jsx)("hr", {
                            className: "mb-4"
                        }), (0, i.jsx)("div", {
                            className: "flex flex-wrap justify-center md:justify-around bg-primary ",
                            children: u.map((e, n) => (0, i.jsx)(t.Z, {
                                name: e.personName,
                                image: e.personImage,
                                line1: e.personPosition,
                                line2: e.personOrganization,
                                count: u.length,
                                icon: e.icon
                            }, n))
                        }), 2023 === e ? (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)("h2", {
                                className: "text-center text-2xl md:text-4xl font-bold my-4 text-white bg-primary",
                                children: "Student Convener 2023-24"
                            }), (0, i.jsx)("hr", {
                                className: "mb-4"
                            }), (0, i.jsx)("div", {
                                className: "flex flex-col lg:flex-row items-center",
                                children: j.map((e, n) => (0, i.jsx)(t.Z, {
                                    name: e.personName,
                                    image: e.personImage,
                                    line1: "Student Convener",
                                    line2: "",
                                    count: j.length,
                                    icon: e.icon
                                }, n))
                            }), (0, i.jsx)("div", {
                                className: "flex flex-col lg:flex-row items-center",
                                children: k.map((e, n) => (0, i.jsx)(t.Z, {
                                    name: e.personName,
                                    image: e.personImage,
                                    line1: "Student Convener",
                                    line2: "",
                                    count: k.length,
                                    icon: e.icon
                                }, n))
                            })]
                        }) : (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)("h2", {
                                className: "text-center text-4xl font-bold my-4 text-white bg-primary",
                                children: "MUJ HackX 2.0 Advisories"
                            }), (0, i.jsx)("hr", {
                                className: "mb-4"
                            }), (0, i.jsx)("div", {
                                className: "flex flex-col md:flex-row items-center",
                                children: N.map((e, n) => (0, i.jsx)(t.Z, {
                                    name: e.personName,
                                    image: e.personImage,
                                    line1: e.personPosition,
                                    line2: e.personOrganization,
                                    count: N.length,
                                    icon: e.icon
                                }, n))
                            }), (0, i.jsx)("h2", {
                                className: "text-center text-2xl md:text-4xl font-bold my-4 text-white bg-primary",
                                children: "Student Convener 2024-25"
                            }), (0, i.jsx)("hr", {
                                className: "mb-4"
                            }), (0, i.jsx)("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center bg-primary",
                                children: f.map((e, n) => (0, i.jsx)("div", {
                                    className: "flex flex-col items-center",
                                    children: (0, i.jsx)(t.Z, {
                                        name: e.personName,
                                        image: e.personImage,
                                        line1: "Student Convener",
                                        line2: "",
                                        count: f.length,
                                        icon: e.icon
                                    })
                                }, n))
                            })]
                        }), (0, i.jsx)(o.Z, {})]
                    })
                })
            };
            n.default = m
        }
    },
    function(e) {
        e.O(0, [260, 774, 888, 179], function() {
            return e(e.s = 2268)
        }), _N_E = e.O()
    }
]);