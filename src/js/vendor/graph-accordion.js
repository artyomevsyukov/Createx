class GraphAccordion {
    constructor(selector, options) {
        let defaultOptions = {
            isOpen: () => {},
            isClose: () => {},
            speed: 300,
        };

        this.options = Object.assign(defaultOptions, options);
        this.accordion = document.querySelector(selector);
        this.control = this.accordion.querySelector(".accordion__control");
        this.content = this.accordion.querySelector(".accordion__content");
        this.event();
        this.start();
    }

    start() {
        if (this.accordion) {
            if (this.accordion.classList.contains("is-open")) {
                this.open();
            }
        }
    }

    event() {
        console.log("event!");

        if (this.accordion) {
            this.accordion.addEventListener("click", (e) => {
                this.accordion.classList.toggle("open");

                if (this.accordion.classList.contains("open")) {
                    this.open();
                } else {
                    this.close();
                }
            });
        }
    }

    open() {
        this.accordion.style.setProperty(
            "--accordion-time",
            `${this.options.speed / 1000}s`
        );
        this.accordion.classList.add("is-open");
        this.control.setAttribute("aria-expanded", true);
        this.content.setAttribute("aria-hidden", false);
        this.content.style.maxHeight = this.content.scrollHeight + "px";
        this.options.isOpen(this);
    }

    close() {
        this.accordion.classList.remove("is-open");
        this.control.setAttribute("aria-expanded", false);
        this.content.setAttribute("aria-hidden", true);
        this.content.style.maxHeight = null;
        this.options.isClose(this);
    }
}

// components

if (document.querySelector(".we-offer")) {
    const accordion1 = new GraphAccordion(".accordion-1", {
        speed: 300,
    });

    const accordion2 = new GraphAccordion(".accordion-2", {
        speed: 300,
    });
}

// modals

!(function (t) {
    var e = {};
    function o(n) {
        if (e[n]) return e[n].exports;
        var i = (e[n] = { i: n, l: !1, exports: {} });
        return t[n].call(i.exports, i, i.exports, o), (i.l = !0), i.exports;
    }
    (o.m = t),
        (o.c = e),
        (o.d = function (t, e, n) {
            o.o(t, e) ||
                Object.defineProperty(t, e, { enumerable: !0, get: n });
        }),
        (o.r = function (t) {
            "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module",
                }),
                Object.defineProperty(t, "__esModule", { value: !0 });
        }),
        (o.t = function (t, e) {
            if ((1 & e && (t = o(t)), 8 & e)) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var n = Object.create(null);
            if (
                (o.r(n),
                Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: t,
                }),
                2 & e && "string" != typeof t)
            )
                for (var i in t)
                    o.d(
                        n,
                        i,
                        function (e) {
                            return t[e];
                        }.bind(null, i)
                    );
            return n;
        }),
        (o.n = function (t) {
            var e =
                t && t.__esModule
                    ? function () {
                          return t.default;
                      }
                    : function () {
                          return t;
                      };
            return o.d(e, "a", e), e;
        }),
        (o.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }),
        (o.p = ""),
        o((o.s = 1));
})([
    function (t, e, o) {
        "use strict";
        o.d(e, "a", function () {
            return n;
        });
        class n {
            constructor(t) {
                (this.options = Object.assign(
                    { isOpen: () => {}, isClose: () => {} },
                    t
                )),
                    (this.modal = document.querySelector(".graph-modal")),
                    (this.speed = 300),
                    (this.animation = "fade"),
                    (this._reOpen = !1),
                    (this._nextContainer = !1),
                    (this.modalContainer = !1),
                    (this.isOpen = !1),
                    (this.previousActiveElement = !1),
                    (this._focusElements = [
                        "a[href]",
                        "input",
                        "select",
                        "textarea",
                        "button",
                        "iframe",
                        "[contenteditable]",
                        '[tabindex]:not([tabindex^="-"])',
                    ]),
                    (this._fixBlocks = document.querySelectorAll(".fix-block")),
                    this.events();
            }
            events() {
                this.modal &&
                    (document.addEventListener(
                        "click",
                        function (t) {
                            const e = t.target.closest("[data-graph-path]");
                            if (e) {
                                let t = e.dataset.graphPath,
                                    o = e.dataset.graphAnimation,
                                    n = e.dataset.graphSpeed;
                                return (
                                    (this.animation = o || "fade"),
                                    (this.speed = n ? parseInt(n) : 300),
                                    (this._nextContainer =
                                        document.querySelector(
                                            `[data-graph-target="${t}"]`
                                        )),
                                    void this.open()
                                );
                            }
                            t.target.closest(".js-modal-close") && this.close();
                        }.bind(this)
                    ),
                    window.addEventListener(
                        "keydown",
                        function (t) {
                            27 == t.keyCode && this.isOpen && this.close(),
                                9 == t.which &&
                                    this.isOpen &&
                                    this.focusCatch(t);
                        }.bind(this)
                    ),
                    document.addEventListener(
                        "click",
                        function (t) {
                            t.target.classList.contains("graph-modal") &&
                                t.target.classList.contains("is-open") &&
                                this.close();
                        }.bind(this)
                    ));
            }
            open(t) {
                if (
                    ((this.previousActiveElement = document.activeElement),
                    this.isOpen)
                )
                    return (this.reOpen = !0), void this.close();
                (this.modalContainer = this._nextContainer),
                    t &&
                        (this.modalContainer = document.querySelector(
                            `[data-graph-target="${t}"]`
                        )),
                    this.modalContainer.scrollTo(0, 0),
                    this.modal.style.setProperty(
                        "--transition-time",
                        this.speed / 1e3 + "s"
                    ),
                    this.modal.classList.add("is-open"),
                    (document.body.style.scrollBehavior = "auto"),
                    (document.documentElement.style.scrollBehavior = "auto"),
                    this.disableScroll(),
                    this.modalContainer.classList.add("graph-modal-open"),
                    this.modalContainer.classList.add(this.animation),
                    setTimeout(() => {
                        this.options.isOpen(this),
                            this.modalContainer.classList.add("animate-open"),
                            (this.isOpen = !0),
                            this.focusTrap();
                    }, this.speed);
            }
            close() {
                this.modalContainer &&
                    (this.modalContainer.classList.remove("animate-open"),
                    this.modalContainer.classList.remove(this.animation),
                    this.modal.classList.remove("is-open"),
                    this.modalContainer.classList.remove("graph-modal-open"),
                    this.enableScroll(),
                    (document.body.style.scrollBehavior = "auto"),
                    (document.documentElement.style.scrollBehavior = "auto"),
                    this.options.isClose(this),
                    (this.isOpen = !1),
                    this.focusTrap(),
                    this.reOpen && ((this.reOpen = !1), this.open()));
            }
            focusCatch(t) {
                const e = this.modalContainer.querySelectorAll(
                        this._focusElements
                    ),
                    o = Array.prototype.slice.call(e),
                    n = o.indexOf(document.activeElement);
                t.shiftKey &&
                    0 === n &&
                    (o[o.length - 1].focus(), t.preventDefault()),
                    t.shiftKey ||
                        n !== o.length - 1 ||
                        (o[0].focus(), t.preventDefault());
            }
            focusTrap() {
                const t = this.modalContainer.querySelectorAll(
                    this._focusElements
                );
                this.isOpen
                    ? t.length && t[0].focus()
                    : this.previousActiveElement.focus();
            }
            disableScroll() {
                let t = window.scrollY;
                this.lockPadding(),
                    document.body.classList.add("disable-scroll"),
                    (document.body.dataset.position = t),
                    (document.body.style.top = -t + "px");
            }
            enableScroll() {
                let t = parseInt(document.body.dataset.position, 10);
                this.unlockPadding(),
                    (document.body.style.top = "auto"),
                    document.body.classList.remove("disable-scroll"),
                    window.scrollTo({ top: t, left: 0 }),
                    document.body.removeAttribute("data-position");
            }
            lockPadding() {
                let t = window.innerWidth - document.body.offsetWidth + "px";
                this._fixBlocks.forEach((e) => {
                    e.style.paddingRight = t;
                }),
                    (document.body.style.paddingRight = t);
            }
            unlockPadding() {
                this._fixBlocks.forEach((t) => {
                    t.style.paddingRight = "0px";
                }),
                    (document.body.style.paddingRight = "0px");
            }
        }
    },
    function (t, e, o) {
        "use strict";
        o.r(e),
            function (t) {
                var e = o(0);
                o(3), o(4);
                t.GraphModal = e.a;
            }.call(this, o(2));
    },
    function (t, e) {
        var o;
        o = (function () {
            return this;
        })();
        try {
            o = o || new Function("return this")();
        } catch (t) {
            "object" == typeof window && (o = window);
        }
        t.exports = o;
    },
    function (t, e) {
        "undefined" != typeof Element &&
            (Element.prototype.matches ||
                (Element.prototype.matches =
                    Element.prototype.msMatchesSelector ||
                    Element.prototype.webkitMatchesSelector),
            Element.prototype.closest ||
                (Element.prototype.closest = function (t) {
                    var e = this;
                    do {
                        if (e.matches(t)) return e;
                        e = e.parentElement || e.parentNode;
                    } while (null !== e && 1 === e.nodeType);
                    return null;
                }));
    },
    function (t, e, o) {},
]);
