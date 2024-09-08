// (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
//     [214], {
//         3786: function(e, t, i) {
//             (window.__NEXT_P = window.__NEXT_P || []).push(["/gallery", function() {
//                 return i(6321)
//             }])
//         },
//         765: function(e, t, i) {
//             "use strict";
//             i.d(t, {
//                 Z: function() {
//                     return p
//                 }
//             });
//             var a = i(5893),
//                 l = i(7294),
//                 r = i(155),
//                 s = i(9583),
//                 n = i(1664),
//                 o = i.n(n),
//                 c = i(5675),
//                 d = i.n(c);
//             let m = [{
//                 name: "Home",
//                 path: "/"
//             }, {
//                 name: "About",
//                 path: "/about.html"
//             }, {
//                 name: "Timeline",
//                 path: "/timeline.html"
//             }, {
//                 name: "Team",
//                 path: "/team.html"
//             }, {
//                 name: "Gallery",
//                 path: "/gallery.html"
//             }, {
//                 name: "Faqs",
//                 path: "/contact.html"
//             }];

//             function p() {
//                 let [e, t] = (0, l.useState)(0);
//                 return (0, l.useEffect)(() => {
//                     let e = async () => {
//                         let e = await new Promise(e => setTimeout(() => e(1165), 1e3));
//                         t(e)
//                     };
//                     e()
//                 }, []), (0, a.jsxs)("div", {
//                     children: [(0, a.jsx)("hr", {
//                         className: "border-0 h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent mt-10 "
//                     }), (0, a.jsxs)("div", {
//                         className: "flex items-center flex-col w-full h-full bg-hack footer-list p-16 lg:p-10 lg:pt-16 lg:pb-8",
//                         children: [(0, a.jsx)("ul", {
//                             className: "hidden items-center gap-5 xl:gap-10 text-base-1xl flex-col lg:flex-row footer-list lg:flex mb-4 space-x-5",
//                             children: m.map((e, t) => (0, a.jsx)("li", {
//                                 children: (0, a.jsx)(o(), {
//                                     href: e.path,
//                                     children: (0, a.jsx)("div", {
//                                         className: "flex flex-col items-center justify-center mx-1",
//                                         children: (0, a.jsx)("div", {
//                                             className: "text-lg font-thin",
//                                             children: e.name
//                                         })
//                                     })
//                                 })
//                             }, t))
//                         }), (0, a.jsx)("div", {
//                             children: (0, a.jsx)(o(), {
//                                 href: "/",
//                                 children: (0, a.jsx)("img", {
//                                     src: "Kaushallogo.png",
//                                     width: 288,
//                                     height: 64,
//                                     alt: "",
//                                     priority: !0
//                                 })
//                             })
//                         }), (0, a.jsx)("div", {
//                             className: "text-center mb-4",
//                             children: (0, a.jsxs)("p", {
//                                 className: "text-sm text-gray-500",
//                                 children: ["Visitor Count: ", (0, a.jsx)("span", {
//                                     className: "font-bold text-gray-700",
//                                     children: e
//                                 })]
//                             })
//                         }), (0, a.jsxs)("div", {
//                             className: "flex items-center gap-6 mb-4 footer-list text-2xl",
//                             children: [(0, a.jsx)(o(), {
//                                 href: "https://www.instagram.com/csi_svvv/",
//                                 legacyBehavior: !0,
//                                 children: (0, a.jsx)("a", {
//                                     target: "_blank",
//                                     rel: "noopener noreferrer",
//                                     children: (0, a.jsx)(r.GDB, {
//                                         className: "cursor-pointer"
//                                     })
//                                 })
//                             }), (0, a.jsx)(o(), {
//                                 href: "https://www.instagram.com/csi_svvv/",
//                                 legacyBehavior: !0,
//                                 children: (0, a.jsx)("a", {
//                                     target: "_blank",
//                                     rel: "noopener noreferrer",
//                                     children: (0, a.jsx)(s.Zf_, {
//                                         className: "cursor-pointer"
//                                     })
//                                 })
//                             }), (0, a.jsx)(o(), {
//                                 href: "https://www.linkedin.com/in/csi-svvv-indore-7449561b7/",
//                                 legacyBehavior: !0,
//                                 children: (0, a.jsx)("a", {
//                                     target: "_blank",
//                                     rel: "noopener noreferrer",
//                                     children: (0, a.jsx)(s.ltd, {
//                                         className: "cursor-pointer"
//                                     })
//                                 })
//                             })]
//                         }), (0, a.jsx)("p", {
//                             className: "flex footer-list mb-4 text-center pt-8 gap-1",
//                             children: "\xa92024 Kaushal, All rights reserved."
//                         })]
//                     })]
//                 })
//             }
//         },
//         6321: function(e, t, i) {
//             "use strict";
//             i.r(t), i.d(t, {
//                 default: function() {
//                     return m
//                 }
//             });
//             var a = i(5893),
//                 l = i(5675),
//                 r = i.n(l);
//             let s = (e, t) => ({
//                 hidden: {
//                     y: "up" === e ? 80 : "down" === e ? -80 : 0,
//                     opacity: 0,
//                     x: "left" === e ? 80 : "right" === e ? -80 : 0,
//                     transition: {
//                         type: "tween",
//                         duration: 1.5,
//                         delay: t,
//                         ease: [.25, .6, .3, .8]
//                     }
//                 },
//                 show: {
//                     y: 0,
//                     x: 0,
//                     opacity: 1,
//                     transition: {
//                         type: "tween",
//                         duration: 1.4,
//                         delay: t,
//                         ease: [.25, .25, .25, .75]
//                     }
//                 }
//             });
//             var n = i(1550);
//             let o = e => {
//                 let {
//                     images: t,
//                     type: i
//                 } = e;
//                 return (0, a.jsxs)("div", {
//                     children: [(0, a.jsx)("div", {
//                         className: "flex mt-[100px] items-center justify-center",
//                         children: (0, a.jsx)("span", {
//                             className: "font-semibold  h3 uppercase bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500   text-transparent bg-clip-text",
//                             children: i
//                         })
//                     }), (0, a.jsx)("div", {
//                         className: "xl:columns-3 columns-2 gap-3 xl:w-[1150px] md:w-[750px] w-[400px] mx-auto space-y-3 pb-28",
//                         children: t.map(e => {
//                             let {
//                                 imageUrl: t,
//                                 id: i
//                             } = e;
//                             return (0, a.jsx)("div", {
//                                 className: "bg-gray-200 break-inside-avoid",
//                                 children: (0, a.jsx)("img", {
//                                     src: t
//                                 })
//                             }, i)
//                         })
//                     })]
//                 })
//             };
//             var c = i(765);
//             let d = () => (0, a.jsxs)("div", {
//                 className: "font bg-[#131424] h-auto ",
//                 children: [(0, a.jsx)("div", {
//                     className: "flex justify-center  ",
//                     children: (0, a.jsx)("h2", {
//                         className: "h1 text-center mb-12 text-accent pt-[20vh] sm:pb-[30px] font-bold bg-gradient-to-r ease-in-out via-purple-500 bg-clip-text text-transparent from-indigo-300 to-indigo-300 animate-text",
//                         children: "GALLERY"
//                     })
//                 }), (0, a.jsx)("div", {
//                     className: " flex items-center justify-center m-5  ",
//                     children: (0, a.jsx)(r(), {
//                         src: "/herogallery.jpeg",
//                         width: 1e3,
//                         height: 1e3,
//                         priority: "true",
//                         className: "  rounded-lg hover:shadow-xl"
//                     })
//                 }), (0, a.jsx)(n.E.h3, {
//                     variants: s("down", .4),
//                     initial: "hidden",
//                     animate: "show",
//                     exit: "hidden",
//                     className: "h3 text-center sm:mt-16 mt-12 text-accent ",
//                     children: "WINNERS"
//                 }), (0, a.jsx)("div", {
//                     className: " flex justify-center  items-center ap-10 m-16 mt-10",
//                     children: (0, a.jsx)("div", {
//                         className: "border p-1 bg-accent bg-opacity-10 border-accent font-mono rounded-xl",
//                         children: (0, a.jsxs)(n.E.div, {
//                             className: "relative overflow-hidden transition duration-300 transform rounded-lg shadow-2xl hover:scale-105 hover:shadow-3xl max-w-md",
//                             whileHover: {
//                                 scale: 1.05
//                             },
//                             children: [(0, a.jsx)(r(), {
//                                 className: "object-cover rounded-lg w-100 h-100",
//                                 src: "/winner.jpeg",
//                                 width: 1e3,
//                                 height: 1e3,
//                                 alt: ""
//                             }), (0, a.jsx)("div", {
//                                 className: "absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-accent bg-opacity-100 opacity-0 hover:opacity-100",
//                                 children: (0, a.jsx)("p", {
//                                     className: "mb-4 text-3xl font-bold text-primary",
//                                     children: "Winners"
//                                 })
//                             })]
//                         })
//                     }) 
//                 }), (0, a.jsxs)("div", {
//                     className: "  flex justify-center items-center flex-col md:justify-around  md:flex-row gap-10 m-16 ",
//                     children: [(0, a.jsx)("div", {
//                         className: "  border p-1 bg-accent bg-opacity-10 border-accent font-mono rounded-xl  ",
//                         children: (0, a.jsxs)(n.E.div, {
//                             className: "relative overflow-hidden transition duration-300 transform rounded-lg shadow-2xl hover:scale-105 hover:shadow-3xl max-w-md",
//                             whileHover: {
//                                 scale: 1.05
//                             },
//                             children: [(0, a.jsx)(r(), {
//                                 className: "object-cover rounded-lg w-100 h-100",
//                                 src: "/runnerup.jpeg",
//                                 width: 1e3,
//                                 height: 1e3,
//                                 alt: ""
//                             }), (0, a.jsx)("div", {
//                                 className: "absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-accent bg-opacity-100 opacity-0 hover:opacity-100",
//                                 children: (0, a.jsx)("p", {
//                                     className: "mb-4 text-3xl font-bold text-primary",
//                                     children: "Runner Ups"
//                                 })
//                             })]
//                         })
//                     }), (0, a.jsx)("div", {
//                         className: "mt-10 md:mt-0",
//                         children: (0, a.jsx)("div", {
//                             className: "  border p-1 bg-accent bg-opacity-10 border-accent font-mono rounded-xl",
//                             children: (0, a.jsxs)(n.E.div, {
//                                 className: "relative overflow-hidden transition duration-300 transform rounded-lg shadow-2xl hover:scale-105 hover:shadow-3xl max-w-md ",
//                                 whileHover: {
//                                     scale: 1.05
//                                 },
//                                 children: [(0, a.jsx)(r(), {
//                                     className: "object-cover rounded-lg w-100 h-100",
//                                     src: "/third.png",
//                                     width: 1e3,
//                                     height: 1e3,
//                                     alt: ""
//                                 }), (0, a.jsx)("div", {
//                                     className: "absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-accent bg-opacity-100 opacity-0 hover:opacity-100",
//                                     children: (0, a.jsx)("p", {
//                                         className: "mb-4 text-3xl font-bold text-primary",
//                                         children: "Third Place"
//                                     })
//                                 })]
//                             })
//                         })
//                     })]
//                 }), (0, a.jsx)(o, {
//                     type: "Promotion Highlights",
//                     images: [{
//                         imageUrl: "/promotion1.jpeg",
//                         title: "Title 1",
//                         id: 0
//                     }, {
//                         imageUrl: "/promotion2.jpeg",
//                         title: "Title 2",
//                         id: 1
//                     }, {
//                         imageUrl: "/promotion3.jpeg",
//                         title: "Title 3",
//                         id: 2
//                     }, {
//                         imageUrl: "/promotion4.jpeg",
//                         title: "Title 4",
//                         id: 3
//                     }, {
//                         imageUrl: "/promotion5.jpeg",
//                         title: "Title 5",
//                         id: 4
//                     }, {
//                         imageUrl: "/promotion6.jpeg",
//                         title: "Title 6",
//                         id: 5
//                     }]
//                 }), (0, a.jsx)(o, {
//                     type: "Glimpse Of Hackathon",
//                     images: [{
//                         imageUrl: "/glimpse1.JPG",
//                         title: "Title 1",
//                         id: 0
//                     }, {
//                         imageUrl: "/glimpse2.JPG",
//                         title: "Title 2",
//                         id: 1
//                     }, {
//                         imageUrl: "/glimpse3.jpeg",
//                         title: "Title 3",
//                         id: 2
//                     }, {
//                         imageUrl: "/glimpse4.jpeg",
//                         title: "Title 4",
//                         id: 3
//                     }, {
//                         imageUrl: "/glimpse5.jpeg",
//                         title: "Title 5",
//                         id: 4
//                     }, {
//                         imageUrl: "/glimpse6.jpeg",
//                         title: "Title 6",
//                         id: 5
//                     }, {
//                         imageUrl: "/glimpse7.jpeg",
//                         title: "Title 7",
//                         id: 6
//                     }]
//                 }), (0, a.jsx)(o, {
//                     type: "Official Awards",
//                     images: [{
//                         imageUrl: "/awards1.jpeg",
//                         title: "Title 1",
//                         id: 0
//                     }, {
//                         imageUrl: "/awards8.jpeg",
//                         title: "Title 2",
//                         id: 1
//                     }, {
//                         imageUrl: "/awards3.jpeg",
//                         title: "Title 3",
//                         id: 2
//                     }, {
//                         imageUrl: "/awards4.jpeg",
//                         title: "Title 4",
//                         id: 3
//                     }, {
//                         imageUrl: "/awards2.jpeg",
//                         title: "Title 5",
//                         id: 4
//                     }, {
//                         imageUrl: "/awards6.jpeg",
//                         title: "Title 6",
//                         id: 5
//                     }, {
//                         imageUrl: "/awards7.jpeg",
//                         title: "Title 7",
//                         id: 6
//                     }, {
//                         imageUrl: "/awards5.jpeg",
//                         title: "Title 8",
//                         id: 7
//                     }, {
//                         imageUrl: "/awards9.jpeg",
//                         title: "Title 9",
//                         id: 8
//                     }]
//                 }), (0, a.jsx)(o, {
//                     type: "Media Coverage",
//                     images: [{
//                         imageUrl: "/coverage1.png",
//                         title: "Title 1",
//                         id: 0
//                     }, {
//                         imageUrl: "/coverage6.png",
//                         title: "Title 2",
//                         id: 1
//                     }, {
//                         imageUrl: "/coverage3.png",
//                         title: "Title 3",
//                         id: 2
//                     }, {
//                         imageUrl: "/coverage4.png",
//                         title: "Title 4",
//                         id: 3
//                     }, {
//                         imageUrl: "/coverage2.png",
//                         title: "Title 6",
//                         id: 5
//                     }]
//                 }), (0, a.jsx)(c.Z, {})]
//             });
//             var m = d
//         }
//     },
//     function(e) {
//         e.O(0, [260, 774, 888, 179], function() {
//             return e(e.s = 3786)
//         }), _N_E = e.O()
//     }
// ]);