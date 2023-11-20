/*!
 * Viewer.js v1.11.3
 * https://fengyuanchen.github.io/viewerjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2023-03-05T07:01:17.741Z
 */
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : ((t = "undefined" != typeof globalThis ? globalThis : t || self).Viewer =
        e());
})(this, function () {
  "use strict";
  function s(e, t) {
    var i,
      n = Object.keys(e);
    return (
      Object.getOwnPropertySymbols &&
        ((i = Object.getOwnPropertySymbols(e)),
        t &&
          (i = i.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
        n.push.apply(n, i)),
      n
    );
  }
  function q(n) {
    for (var t = 1; t < arguments.length; t++) {
      var o = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? s(Object(o), !0).forEach(function (t) {
            var e, i;
            (e = n),
              (i = o[(t = t)]),
              (t = l(t)) in e
                ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = i);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o))
        : s(Object(o)).forEach(function (t) {
            Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(o, t));
          });
    }
    return n;
  }
  function n(t) {
    return (n =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              "function" == typeof Symbol &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          })(t);
  }
  function r(t, e) {
    for (var i = 0; i < e.length; i++) {
      var n = e[i];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(t, l(n.key), n);
    }
  }
  function l(t) {
    t = (function (t, e) {
      if ("object" != typeof t || null === t) return t;
      var i = t[Symbol.toPrimitive];
      if (void 0 === i) return ("string" === e ? String : Number)(t);
      if ("object" != typeof (i = i.call(t, e || "default"))) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    })(t, "string");
    return "symbol" == typeof t ? t : String(t);
  }
  var W = {
      backdrop: !0,
      button: !0,
      navbar: !0,
      title: !0,
      toolbar: !0,
      className: "",
      container: "body",
      filter: null,
      fullscreen: !0,
      inheritedAttributes: [
        "crossOrigin",
        "decoding",
        "isMap",
        "loading",
        "referrerPolicy",
        "sizes",
        "srcset",
        "useMap",
      ],
      initialCoverage: 0.9,
      initialViewIndex: 0,
      inline: !1,
      interval: 5e3,
      keyboard: !0,
      focus: !0,
      loading: !0,
      loop: !0,
      minWidth: 200,
      minHeight: 100,
      movable: !0,
      rotatable: !0,
      scalable: !0,
      zoomable: !0,
      zoomOnTouch: !0,
      zoomOnWheel: !0,
      slideOnTouch: !0,
      toggleOnDblclick: !0,
      tooltip: !0,
      transition: !0,
      zIndex: 2015,
      zIndexInline: 0,
      zoomRatio: 0.1,
      minZoomRatio: 0.01,
      maxZoomRatio: 100,
      url: "src",
      ready: null,
      show: null,
      shown: null,
      hide: null,
      hidden: null,
      view: null,
      viewed: null,
      move: null,
      moved: null,
      rotate: null,
      rotated: null,
      scale: null,
      scaled: null,
      zoom: null,
      zoomed: null,
      play: null,
      stop: null,
    },
    t = "undefined" != typeof window && void 0 !== window.document,
    e = t ? window : {},
    a =
      !(!t || !e.document.documentElement) &&
      "ontouchstart" in e.document.documentElement,
    i = t && "PointerEvent" in e,
    g = "viewer",
    h = "move",
    j = "switch",
    c = "zoom",
    f = "".concat(g, "-active"),
    H = "".concat(g, "-close"),
    B = "".concat(g, "-fade"),
    V = "".concat(g, "-fixed"),
    U = "".concat(g, "-fullscreen"),
    K = "".concat(g, "-fullscreen-exit"),
    v = "".concat(g, "-hide"),
    Z = "".concat(g, "-hide-md-down"),
    $ = "".concat(g, "-hide-sm-down"),
    _ = "".concat(g, "-hide-xs-down"),
    u = "".concat(g, "-in"),
    p = "".concat(g, "-invisible"),
    b = "".concat(g, "-loading"),
    G = "".concat(g, "-move"),
    J = "".concat(g, "-open"),
    d = "".concat(g, "-show"),
    m = "".concat(g, "-transition"),
    w = "click",
    Q = "dblclick",
    tt = "dragstart",
    et = "focusin",
    it = "keydown",
    y = "load",
    x = "error",
    nt = i ? "pointerdown" : a ? "touchstart" : "mousedown",
    ot = i ? "pointermove" : a ? "touchmove" : "mousemove",
    st = i ? "pointerup pointercancel" : a ? "touchend touchcancel" : "mouseup",
    at = "resize",
    k = "transitionend",
    rt = "wheel",
    z = "viewed",
    lt = "rotated",
    ht = "".concat(g, "Action"),
    ct = /\s\s*/,
    ut = [
      "zoom-in",
      "zoom-out",
      "one-to-one",
      "reset",
      "prev",
      "play",
      "next",
      "rotate-left",
      "rotate-right",
      "flip-horizontal",
      "flip-vertical",
    ];
  function T(t) {
    return "string" == typeof t;
  }
  var dt = Number.isNaN || e.isNaN;
  function E(t) {
    return "number" == typeof t && !dt(t);
  }
  function D(t) {
    return void 0 === t;
  }
  function o(t) {
    return "object" === n(t) && null !== t;
  }
  var mt = Object.prototype.hasOwnProperty;
  function S(t) {
    if (!o(t)) return !1;
    try {
      var e = t.constructor,
        i = e.prototype;
      return e && i && mt.call(i, "isPrototypeOf");
    } catch (t) {
      return !1;
    }
  }
  function I(t) {
    return "function" == typeof t;
  }
  function A(e, i) {
    if (e && I(i))
      if (Array.isArray(e) || E(e.length))
        for (
          var t = e.length, n = 0;
          n < t && !1 !== i.call(e, e[n], n, e);
          n += 1
        );
      else
        o(e) &&
          Object.keys(e).forEach(function (t) {
            i.call(e, e[t], t, e);
          });
  }
  var O =
      Object.assign ||
      function (i) {
        for (
          var t = arguments.length, e = new Array(1 < t ? t - 1 : 0), n = 1;
          n < t;
          n++
        )
          e[n - 1] = arguments[n];
        return (
          o(i) &&
            0 < e.length &&
            e.forEach(function (e) {
              o(e) &&
                Object.keys(e).forEach(function (t) {
                  i[t] = e[t];
                });
            }),
          i
        );
      },
    gt = /^(?:width|height|left|top|marginLeft|marginTop)$/;
  function C(t, e) {
    var i = t.style;
    A(e, function (t, e) {
      gt.test(e) && E(t) && (t += "px"), (i[e] = t);
    });
  }
  function L(t, e) {
    return (
      t &&
      e &&
      (t.classList ? t.classList.contains(e) : -1 < t.className.indexOf(e))
    );
  }
  function R(t, e) {
    var i;
    t &&
      e &&
      (E(t.length)
        ? A(t, function (t) {
            R(t, e);
          })
        : t.classList
        ? t.classList.add(e)
        : (i = t.className.trim())
        ? i.indexOf(e) < 0 && (t.className = "".concat(i, " ").concat(e))
        : (t.className = e));
  }
  function M(t, e) {
    t &&
      e &&
      (E(t.length)
        ? A(t, function (t) {
            M(t, e);
          })
        : t.classList
        ? t.classList.remove(e)
        : 0 <= t.className.indexOf(e) &&
          (t.className = t.className.replace(e, "")));
  }
  function F(t, e, i) {
    e &&
      (E(t.length)
        ? A(t, function (t) {
            F(t, e, i);
          })
        : (i ? R : M)(t, e));
  }
  var ft = /([a-z\d])([A-Z])/g;
  function vt(t) {
    return t.replace(ft, "$1-$2").toLowerCase();
  }
  function N(t, e) {
    return o(t[e])
      ? t[e]
      : t.dataset
      ? t.dataset[e]
      : t.getAttribute("data-".concat(vt(e)));
  }
  function pt(t, e, i) {
    o(i)
      ? (t[e] = i)
      : t.dataset
      ? (t.dataset[e] = i)
      : t.setAttribute("data-".concat(vt(e)), i);
  }
  (wt = !1),
    t &&
      ((bt = !1),
      (i = function () {}),
      (t = Object.defineProperty({}, "once", {
        get: function () {
          return (wt = !0), bt;
        },
        set: function (t) {
          bt = t;
        },
      })),
      e.addEventListener("test", i, t),
      e.removeEventListener("test", i, t));
  var bt,
    wt,
    yt = wt;
  function Y(i, t, n, e) {
    var o = 3 < arguments.length && void 0 !== e ? e : {},
      s = n;
    t.trim()
      .split(ct)
      .forEach(function (t) {
        var e;
        yt ||
          ((e = i.listeners) &&
            e[t] &&
            e[t][n] &&
            ((s = e[t][n]),
            delete e[t][n],
            0 === Object.keys(e[t]).length && delete e[t],
            0 === Object.keys(e).length) &&
            delete i.listeners),
          i.removeEventListener(t, s, o);
      });
  }
  function X(s, t, a, e) {
    var r = 3 < arguments.length && void 0 !== e ? e : {},
      l = a;
    t.trim()
      .split(ct)
      .forEach(function (n) {
        var t, o;
        r.once &&
          !yt &&
          ((t = s.listeners),
          (l = function () {
            delete o[n][a], s.removeEventListener(n, l, r);
            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
              e[i] = arguments[i];
            a.apply(s, e);
          }),
          (o = void 0 === t ? {} : t)[n] || (o[n] = {}),
          o[n][a] && s.removeEventListener(n, o[n][a], r),
          (o[n][a] = l),
          (s.listeners = o)),
          s.addEventListener(n, l, r);
      });
  }
  function P(t, e, i, n) {
    var o;
    return (
      I(Event) && I(CustomEvent)
        ? (o = new CustomEvent(
            e,
            q({ bubbles: !0, cancelable: !0, detail: i }, n)
          ))
        : (o = document.createEvent("CustomEvent")).initCustomEvent(
            e,
            !0,
            !0,
            i
          ),
      t.dispatchEvent(o)
    );
  }
  function xt(t) {
    var e = t.rotate,
      i = t.scaleX,
      n = t.scaleY,
      o = t.translateX,
      t = t.translateY,
      s = [],
      o =
        (E(o) && 0 !== o && s.push("translateX(".concat(o, "px)")),
        E(t) && 0 !== t && s.push("translateY(".concat(t, "px)")),
        E(e) && 0 !== e && s.push("rotate(".concat(e, "deg)")),
        E(i) && 1 !== i && s.push("scaleX(".concat(i, ")")),
        E(n) && 1 !== n && s.push("scaleY(".concat(n, ")")),
        s.length ? s.join(" ") : "none");
    return { WebkitTransform: o, msTransform: o, transform: o };
  }
  var kt =
    e.navigator &&
    /(Macintosh|iPhone|iPod|iPad).*AppleWebKit/i.test(e.navigator.userAgent);
  function zt(i, t, e) {
    var n,
      o = document.createElement("img");
    return (
      i.naturalWidth && !kt
        ? e(i.naturalWidth, i.naturalHeight)
        : ((n = document.body || document.documentElement),
          (o.onload = function () {
            e(o.width, o.height), kt || n.removeChild(o);
          }),
          A(t.inheritedAttributes, function (t) {
            var e = i.getAttribute(t);
            null !== e && o.setAttribute(t, e);
          }),
          (o.src = i.src),
          kt ||
            ((o.style.cssText =
              "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;"),
            n.appendChild(o))),
      o
    );
  }
  function Tt(t) {
    switch (t) {
      case 2:
        return _;
      case 3:
        return $;
      case 4:
        return Z;
      default:
        return "";
    }
  }
  function Et(t, e) {
    var i = t.pageX,
      t = t.pageY,
      n = { endX: i, endY: t };
    return e ? n : q({ timeStamp: Date.now(), startX: i, startY: t }, n);
  }
  var Dt,
    i = {
      render: function () {
        this.initContainer(),
          this.initViewer(),
          this.initList(),
          this.renderViewer();
      },
      initBody: function () {
        var t = this.element.ownerDocument,
          e = t.body || t.documentElement;
        (this.body = e),
          (this.scrollbarWidth =
            window.innerWidth - t.documentElement.clientWidth),
          (this.initialBodyPaddingRight = e.style.paddingRight),
          (this.initialBodyComputedPaddingRight =
            window.getComputedStyle(e).paddingRight);
      },
      initContainer: function () {
        this.containerData = {
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      initViewer: function () {
        var t,
          e = this.options,
          i = this.parent;
        e.inline &&
          ((t = {
            width: Math.max(i.offsetWidth, e.minWidth),
            height: Math.max(i.offsetHeight, e.minHeight),
          }),
          (this.parentData = t)),
          (!this.fulled && t) || (t = this.containerData),
          (this.viewerData = O({}, t));
      },
      renderViewer: function () {
        this.options.inline && !this.fulled && C(this.viewer, this.viewerData);
      },
      initList: function () {
        var r = this,
          t = this.element,
          l = this.options,
          h = this.list,
          c = [];
        (h.innerHTML = ""),
          A(this.images, function (i, t) {
            var e,
              n,
              o = i.src,
              s =
                i.alt ||
                (T((s = o))
                  ? decodeURIComponent(
                      s.replace(/^.*\//, "").replace(/[?&#].*$/, "")
                    )
                  : ""),
              a = r.getImageURL(i);
            (o || a) &&
              ((e = document.createElement("li")),
              (n = document.createElement("img")),
              A(l.inheritedAttributes, function (t) {
                var e = i.getAttribute(t);
                null !== e && n.setAttribute(t, e);
              }),
              l.navbar && (n.src = o || a),
              (n.alt = s),
              n.setAttribute("data-original-url", a || o),
              e.setAttribute("data-index", t),
              e.setAttribute("data-viewer-action", "view"),
              e.setAttribute("role", "button"),
              l.keyboard && e.setAttribute("tabindex", 0),
              e.appendChild(n),
              h.appendChild(e),
              c.push(e));
          }),
          A((this.items = c), function (e) {
            var t,
              i,
              n = e.firstElementChild;
            pt(n, "filled", !0),
              l.loading && R(e, b),
              X(
                n,
                y,
                (t = function (t) {
                  Y(n, x, i), l.loading && M(e, b), r.loadImage(t);
                }),
                { once: !0 }
              ),
              X(
                n,
                x,
                (i = function () {
                  Y(n, y, t), l.loading && M(e, b);
                }),
                { once: !0 }
              );
          }),
          l.transition &&
            X(
              t,
              z,
              function () {
                R(h, m);
              },
              { once: !0 }
            );
      },
      renderList: function () {
        var t,
          e,
          i = this.index,
          n = this.items[i];
        n &&
          ((t = n.nextElementSibling),
          (t = parseInt(window.getComputedStyle(t || n).marginLeft, 10)),
          (n = n.offsetWidth),
          C(
            this.list,
            O(
              { width: (e = n + t) * this.length - t },
              xt({ translateX: (this.viewerData.width - n) / 2 - e * i })
            )
          ));
      },
      resetList: function () {
        var t = this.list;
        (t.innerHTML = ""), M(t, m), C(t, xt({ translateX: 0 }));
      },
      initImage: function (r) {
        var t,
          l = this,
          h = this.options,
          e = this.image,
          i = this.viewerData,
          n = this.footer.offsetHeight,
          c = i.width,
          u = Math.max(i.height - n, n),
          d = this.imageData || {};
        (this.imageInitializing = {
          abort: function () {
            t.onload = null;
          },
        }),
          (t = zt(e, h, function (t, e) {
            var i = t / e,
              n = Math.max(0, Math.min(1, h.initialCoverage)),
              o = c,
              s = u,
              n =
                ((l.imageInitializing = !1),
                c < u * i ? (s = c / i) : (o = u * i),
                (n = E(n) ? n : 0.9),
                (o = Math.min(o * n, t)),
                (s = Math.min(s * n, e)),
                (c - o) / 2),
              a = (u - s) / 2,
              n = {
                left: n,
                top: a,
                x: n,
                y: a,
                width: o,
                height: s,
                oldRatio: 1,
                ratio: o / t,
                aspectRatio: i,
                naturalWidth: t,
                naturalHeight: e,
              },
              a = O({}, n);
            h.rotatable && ((n.rotate = d.rotate || 0), (a.rotate = 0)),
              h.scalable &&
                ((n.scaleX = d.scaleX || 1),
                (n.scaleY = d.scaleY || 1),
                (a.scaleX = 1),
                (a.scaleY = 1)),
              (l.imageData = n),
              (l.initialImageData = a),
              r && r();
          }));
      },
      renderImage: function (t) {
        var e,
          i = this,
          n = this.image,
          o = this.imageData;
        C(
          n,
          O(
            {
              width: o.width,
              height: o.height,
              marginLeft: o.x,
              marginTop: o.y,
            },
            xt(o)
          )
        ),
          t &&
            ((this.viewing ||
              this.moving ||
              this.rotating ||
              this.scaling ||
              this.zooming) &&
            this.options.transition &&
            L(n, m)
              ? ((e = function () {
                  (i.imageRendering = !1), t();
                }),
                (this.imageRendering = {
                  abort: function () {
                    Y(n, k, e);
                  },
                }),
                X(n, k, e, { once: !0 }))
              : t());
      },
      resetImage: function () {
        var t;
        (this.viewing || this.viewed) &&
          ((t = this.image),
          this.viewing && this.viewing.abort(),
          t.parentNode.removeChild(t),
          (this.image = null));
      },
    },
    t = {
      bind: function () {
        var t = this.options,
          e = this.viewer,
          i = this.canvas,
          n = this.element.ownerDocument;
        X(e, w, (this.onClick = this.click.bind(this))),
          X(e, tt, (this.onDragStart = this.dragstart.bind(this))),
          X(i, nt, (this.onPointerDown = this.pointerdown.bind(this))),
          X(n, ot, (this.onPointerMove = this.pointermove.bind(this))),
          X(n, st, (this.onPointerUp = this.pointerup.bind(this))),
          X(n, it, (this.onKeyDown = this.keydown.bind(this))),
          X(window, at, (this.onResize = this.resize.bind(this))),
          t.zoomable &&
            t.zoomOnWheel &&
            X(e, rt, (this.onWheel = this.wheel.bind(this)), {
              passive: !1,
              capture: !0,
            }),
          t.toggleOnDblclick &&
            X(i, Q, (this.onDblclick = this.dblclick.bind(this)));
      },
      unbind: function () {
        var t = this.options,
          e = this.viewer,
          i = this.canvas,
          n = this.element.ownerDocument;
        Y(e, w, this.onClick),
          Y(e, tt, this.onDragStart),
          Y(i, nt, this.onPointerDown),
          Y(n, ot, this.onPointerMove),
          Y(n, st, this.onPointerUp),
          Y(n, it, this.onKeyDown),
          Y(window, at, this.onResize),
          t.zoomable &&
            t.zoomOnWheel &&
            Y(e, rt, this.onWheel, { passive: !1, capture: !0 }),
          t.toggleOnDblclick && Y(i, Q, this.onDblclick);
      },
    },
    St = {
      click: function (t) {
        var e = this.options,
          i = this.imageData,
          n = t.target,
          o = N(n, ht);
        switch (
          (o ||
            "img" !== n.localName ||
            "li" !== n.parentElement.localName ||
            (o = N((n = n.parentElement), ht)),
          a &&
            t.isTrusted &&
            n === this.canvas &&
            clearTimeout(this.clickCanvasTimeout),
          o)
        ) {
          case "mix":
            this.played
              ? this.stop()
              : e.inline
              ? this.fulled
                ? this.exit()
                : this.full()
              : this.hide();
            break;
          case "hide":
            this.pointerMoved || this.hide();
            break;
          case "view":
            this.view(N(n, "index"));
            break;
          case "zoom-in":
            this.zoom(0.1, !0);
            break;
          case "zoom-out":
            this.zoom(-0.1, !0);
            break;
          case "one-to-one":
            this.toggle();
            break;
          case "reset":
            this.reset();
            break;
          case "prev":
            this.prev(e.loop);
            break;
          case "play":
            this.play(e.fullscreen);
            break;
          case "next":
            this.next(e.loop);
            break;
          case "rotate-left":
            this.rotate(-90);
            break;
          case "rotate-right":
            this.rotate(90);
            break;
          case "flip-horizontal":
            this.scaleX(-i.scaleX || -1);
            break;
          case "flip-vertical":
            this.scaleY(-i.scaleY || -1);
            break;
          default:
            this.played && this.stop();
        }
      },
      dblclick: function (t) {
        t.preventDefault(),
          this.viewed &&
            t.target === this.image &&
            (a && t.isTrusted && clearTimeout(this.doubleClickImageTimeout),
            this.toggle(t.isTrusted ? t : t.detail && t.detail.originalEvent));
      },
      load: function () {
        var t = this,
          e =
            (this.timeout && (clearTimeout(this.timeout), (this.timeout = !1)),
            this.element),
          i = this.options,
          n = this.image,
          o = this.index,
          s = this.viewerData;
        M(n, p),
          i.loading && M(this.canvas, b),
          (n.style.cssText =
            "height:0;" +
            "margin-left:".concat(s.width / 2, "px;") +
            "margin-top:".concat(s.height / 2, "px;") +
            "max-width:none!important;position:relative;width:0;"),
          this.initImage(function () {
            F(n, G, i.movable),
              F(n, m, i.transition),
              t.renderImage(function () {
                (t.viewed = !0),
                  (t.viewing = !1),
                  I(i.viewed) && X(e, z, i.viewed, { once: !0 }),
                  P(
                    e,
                    z,
                    { originalImage: t.images[o], index: o, image: n },
                    { cancelable: !1 }
                  );
              });
          });
      },
      loadImage: function (t) {
        var n = t.target,
          t = n.parentNode,
          o = t.offsetWidth || 30,
          s = t.offsetHeight || 50,
          a = !!N(n, "filled");
        zt(n, this.options, function (t, e) {
          var t = t / e,
            e = o,
            i = s;
          o < s * t
            ? a
              ? (e = s * t)
              : (i = o / t)
            : a
            ? (i = o / t)
            : (e = s * t),
            C(
              n,
              O(
                { width: e, height: i },
                xt({ translateX: (o - e) / 2, translateY: (s - i) / 2 })
              )
            );
        });
      },
      keydown: function (t) {
        var e = this.options;
        if (e.keyboard) {
          var i = t.keyCode || t.which || t.charCode;
          if (
            (13 === i && this.viewer.contains(t.target) && this.click(t),
            this.fulled)
          )
            switch (i) {
              case 27:
                this.played
                  ? this.stop()
                  : e.inline
                  ? this.fulled && this.exit()
                  : this.hide();
                break;
              case 32:
                this.played && this.stop();
                break;
              case 37:
                this.played && this.playing
                  ? this.playing.prev()
                  : this.prev(e.loop);
                break;
              case 38:
                t.preventDefault(), this.zoom(e.zoomRatio, !0);
                break;
              case 39:
                this.played && this.playing
                  ? this.playing.next()
                  : this.next(e.loop);
                break;
              case 40:
                t.preventDefault(), this.zoom(-e.zoomRatio, !0);
                break;
              case 48:
              case 49:
                t.ctrlKey && (t.preventDefault(), this.toggle());
            }
        }
      },
      dragstart: function (t) {
        "img" === t.target.localName && t.preventDefault();
      },
      pointerdown: function (t) {
        var e = this.options,
          i = this.pointers,
          n = t.buttons,
          o = t.button;
        (this.pointerMoved = !1),
          !this.viewed ||
            this.showing ||
            this.viewing ||
            this.hiding ||
            (("mousedown" === t.type ||
              ("pointerdown" === t.type && "mouse" === t.pointerType)) &&
              ((E(n) && 1 !== n) || (E(o) && 0 !== o) || t.ctrlKey)) ||
            (t.preventDefault(),
            t.changedTouches
              ? A(t.changedTouches, function (t) {
                  i[t.identifier] = Et(t);
                })
              : (i[t.pointerId || 0] = Et(t)),
            (n = !!e.movable && h),
            e.zoomOnTouch && e.zoomable && 1 < Object.keys(i).length
              ? (n = c)
              : e.slideOnTouch &&
                ("touch" === t.pointerType || "touchstart" === t.type) &&
                this.isSwitchable() &&
                (n = j),
            !e.transition || (n !== h && n !== c) || M(this.image, m),
            (this.action = n));
      },
      pointermove: function (t) {
        var e = this.pointers,
          i = this.action;
        this.viewed &&
          i &&
          (t.preventDefault(),
          t.changedTouches
            ? A(t.changedTouches, function (t) {
                O(e[t.identifier] || {}, Et(t, !0));
              })
            : O(e[t.pointerId || 0] || {}, Et(t, !0)),
          this.change(t));
      },
      pointerup: function (t) {
        var e,
          i = this,
          n = this.options,
          o = this.action,
          s = this.pointers;
        t.changedTouches
          ? A(t.changedTouches, function (t) {
              (e = s[t.identifier]), delete s[t.identifier];
            })
          : ((e = s[t.pointerId || 0]), delete s[t.pointerId || 0]),
          o &&
            (t.preventDefault(),
            !n.transition || (o !== h && o !== c) || R(this.image, m),
            (this.action = !1),
            a) &&
            o !== c &&
            e &&
            Date.now() - e.timeStamp < 500 &&
            (clearTimeout(this.clickCanvasTimeout),
            clearTimeout(this.doubleClickImageTimeout),
            n.toggleOnDblclick && this.viewed && t.target === this.image
              ? this.imageClicked
                ? ((this.imageClicked = !1),
                  (this.doubleClickImageTimeout = setTimeout(function () {
                    P(i.image, Q, { originalEvent: t });
                  }, 50)))
                : ((this.imageClicked = !0),
                  (this.doubleClickImageTimeout = setTimeout(function () {
                    i.imageClicked = !1;
                  }, 500)))
              : ((this.imageClicked = !1),
                n.backdrop &&
                  "static" !== n.backdrop &&
                  t.target === this.canvas &&
                  (this.clickCanvasTimeout = setTimeout(function () {
                    P(i.canvas, w, { originalEvent: t });
                  }, 50))));
      },
      resize: function () {
        var e = this;
        this.isShown &&
          !this.hiding &&
          (this.fulled && (this.close(), this.initBody(), this.open()),
          this.initContainer(),
          this.initViewer(),
          this.renderViewer(),
          this.renderList(),
          this.viewed &&
            this.initImage(function () {
              e.renderImage();
            }),
          this.played) &&
          (this.options.fullscreen &&
          this.fulled &&
          !(
            document.fullscreenElement ||
            document.webkitFullscreenElement ||
            document.mozFullScreenElement ||
            document.msFullscreenElement
          )
            ? this.stop()
            : A(this.player.getElementsByTagName("img"), function (t) {
                X(t, y, e.loadImage.bind(e), { once: !0 }), P(t, y);
              }));
      },
      wheel: function (t) {
        var e,
          i,
          n = this;
        this.viewed &&
          (t.preventDefault(),
          this.wheeling ||
            ((this.wheeling = !0),
            setTimeout(function () {
              n.wheeling = !1;
            }, 50),
            (e = Number(this.options.zoomRatio) || 0.1),
            (i = 1),
            t.deltaY
              ? (i = 0 < t.deltaY ? 1 : -1)
              : t.wheelDelta
              ? (i = -t.wheelDelta / 120)
              : t.detail && (i = 0 < t.detail ? 1 : -1),
            this.zoom(-i * e, !0, null, t)));
      },
    },
    It = {
      show: function () {
        var t,
          e,
          i = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
          n = this.element,
          o = this.options;
        return (
          o.inline ||
            this.showing ||
            this.isShown ||
            this.showing ||
            (this.ready
              ? (I(o.show) && X(n, "show", o.show, { once: !0 }),
                !1 !== P(n, "show") &&
                  this.ready &&
                  (this.hiding && this.transitioning.abort(),
                  (this.showing = !0),
                  this.open(),
                  M((t = this.viewer), v),
                  t.setAttribute("role", "dialog"),
                  t.setAttribute("aria-labelledby", this.title.id),
                  t.setAttribute("aria-modal", !0),
                  t.removeAttribute("aria-hidden"),
                  o.transition && !i
                    ? ((e = this.shown.bind(this)),
                      (this.transitioning = {
                        abort: function () {
                          Y(t, k, e), M(t, u);
                        },
                      }),
                      R(t, m),
                      (t.initialOffsetWidth = t.offsetWidth),
                      X(t, k, e, { once: !0 }),
                      R(t, u))
                    : (R(t, u), this.shown())))
              : (this.build(), this.ready && this.show(i))),
          this
        );
      },
      hide: function () {
        var i,
          t,
          e,
          n,
          o,
          s = this,
          a = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
          r = this.element,
          l = this.options;
        return (
          l.inline ||
            this.hiding ||
            (!this.isShown && !this.showing) ||
            (I(l.hide) && X(r, "hide", l.hide, { once: !0 }),
            !1 !== P(r, "hide") &&
              (this.showing && this.transitioning.abort(),
              (this.hiding = !0),
              this.played ? this.stop() : this.viewing && this.viewing.abort(),
              (i = this.viewer),
              (t = this.image),
              (e = function () {
                M(i, u), s.hidden();
              }),
              l.transition && !a
                ? ((n = function t(e) {
                    e && e.target === i && (Y(i, k, t), s.hidden());
                  }),
                  (o = function () {
                    L(i, m) ? (X(i, k, n), M(i, u)) : e();
                  }),
                  (this.transitioning = {
                    abort: function () {
                      s.viewed && L(t, m) ? Y(t, k, o) : L(i, m) && Y(i, k, n);
                    },
                  }),
                  this.viewed && L(t, m)
                    ? (X(t, k, o, { once: !0 }),
                      this.zoomTo(0, !1, null, null, !0))
                    : o())
                : e())),
          this
        );
      },
      view: function () {
        var i = this,
          t =
            0 < arguments.length && void 0 !== arguments[0]
              ? arguments[0]
              : this.options.initialViewIndex,
          t = Number(t) || 0;
        if (
          !(
            this.hiding ||
            this.played ||
            t < 0 ||
            t >= this.length ||
            (this.viewed && t === this.index)
          )
        ) {
          if (!this.isShown) return (this.index = t), this.show();
          this.viewing && this.viewing.abort();
          var e,
            n,
            o,
            s = this.element,
            a = this.options,
            r = this.title,
            l = this.canvas,
            h = this.items[t],
            c = h.querySelector("img"),
            u = N(c, "originalUrl"),
            d = c.getAttribute("alt"),
            m = document.createElement("img");
          A(a.inheritedAttributes, function (t) {
            var e = c.getAttribute(t);
            null !== e && m.setAttribute(t, e);
          }),
            (m.src = u),
            (m.alt = d),
            I(a.view) && X(s, "view", a.view, { once: !0 }),
            !1 ===
              P(s, "view", {
                originalImage: this.images[t],
                index: t,
                image: m,
              }) ||
              !this.isShown ||
              this.hiding ||
              this.played ||
              ((u = this.items[this.index]) &&
                (M(u, f), u.removeAttribute("aria-selected")),
              R(h, f),
              h.setAttribute("aria-selected", !0),
              a.focus && h.focus(),
              (this.image = m),
              (this.viewed = !1),
              (this.index = t),
              (this.imageData = {}),
              R(m, p),
              a.loading && R(l, b),
              (l.innerHTML = ""),
              l.appendChild(m),
              this.renderList(),
              (r.innerHTML = ""),
              X(
                s,
                z,
                (e = function () {
                  var t = i.imageData,
                    e = Array.isArray(a.title) ? a.title[1] : a.title;
                  r.innerHTML = T(
                    (e = I(e)
                      ? e.call(i, m, t)
                      : ""
                          .concat(d, " (")
                          .concat(t.naturalWidth, " × ")
                          .concat(t.naturalHeight, ")"))
                  )
                    ? e
                        .replace(/&(?!amp;|quot;|#39;|lt;|gt;)/g, "&amp;")
                        .replace(/"/g, "&quot;")
                        .replace(/'/g, "&#39;")
                        .replace(/</g, "&lt;")
                        .replace(/>/g, "&gt;")
                    : e;
                }),
                { once: !0 }
              ),
              (this.viewing = {
                abort: function () {
                  Y(s, z, e),
                    m.complete
                      ? i.imageRendering
                        ? i.imageRendering.abort()
                        : i.imageInitializing && i.imageInitializing.abort()
                      : ((m.src = ""),
                        Y(m, y, n),
                        i.timeout && clearTimeout(i.timeout));
                },
              }),
              m.complete
                ? this.load()
                : (X(
                    m,
                    y,
                    (n = function () {
                      Y(m, x, o), i.load();
                    }),
                    { once: !0 }
                  ),
                  X(
                    m,
                    x,
                    (o = function () {
                      Y(m, y, n),
                        i.timeout &&
                          (clearTimeout(i.timeout), (i.timeout = !1)),
                        M(m, p),
                        a.loading && M(i.canvas, b);
                    }),
                    { once: !0 }
                  ),
                  this.timeout && clearTimeout(this.timeout),
                  (this.timeout = setTimeout(function () {
                    M(m, p), (i.timeout = !1);
                  }, 1e3))));
        }
        return this;
      },
      prev: function () {
        var t = this.index - 1;
        return (
          t < 0 &&
            (t =
              0 < arguments.length && void 0 !== arguments[0] && arguments[0]
                ? this.length - 1
                : 0),
          this.view(t),
          this
        );
      },
      next: function () {
        var t = this.length - 1,
          e = this.index + 1;
        return (
          this.view(
            (e =
              t < e
                ? 0 < arguments.length &&
                  void 0 !== arguments[0] &&
                  arguments[0]
                  ? 0
                  : t
                : e)
          ),
          this
        );
      },
      move: function (t) {
        var e =
            1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : t,
          i = this.imageData;
        return (
          this.moveTo(D(t) ? t : i.x + Number(t), D(e) ? e : i.y + Number(e)),
          this
        );
      },
      moveTo: function (t) {
        var e = this,
          i =
            1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : t,
          n =
            2 < arguments.length && void 0 !== arguments[2]
              ? arguments[2]
              : null,
          o = this.element,
          s = this.options,
          a = this.imageData;
        if (
          ((t = Number(t)),
          (i = Number(i)),
          this.viewed && !this.played && s.movable)
        ) {
          var r = a.x,
            l = a.y,
            h = !1;
          if ((E(t) ? (h = !0) : (t = r), E(i) ? (h = !0) : (i = l), h)) {
            if (
              (I(s.move) && X(o, "move", s.move, { once: !0 }),
              !1 ===
                P(o, "move", {
                  x: t,
                  y: i,
                  oldX: r,
                  oldY: l,
                  originalEvent: n,
                }))
            )
              return this;
            (a.x = t),
              (a.y = i),
              (a.left = t),
              (a.top = i),
              (this.moving = !0),
              this.renderImage(function () {
                (e.moving = !1),
                  I(s.moved) && X(o, "moved", s.moved, { once: !0 }),
                  P(
                    o,
                    "moved",
                    { x: t, y: i, oldX: r, oldY: l, originalEvent: n },
                    { cancelable: !1 }
                  );
              });
          }
        }
        return this;
      },
      rotate: function (t) {
        return this.rotateTo((this.imageData.rotate || 0) + Number(t)), this;
      },
      rotateTo: function (t) {
        var e = this,
          i = this.element,
          n = this.options,
          o = this.imageData;
        if (E((t = Number(t))) && this.viewed && !this.played && n.rotatable) {
          var s = o.rotate;
          if (
            (I(n.rotate) && X(i, "rotate", n.rotate, { once: !0 }),
            !1 === P(i, "rotate", { degree: t, oldDegree: s }))
          )
            return this;
          (o.rotate = t),
            (this.rotating = !0),
            this.renderImage(function () {
              (e.rotating = !1),
                I(n.rotated) && X(i, lt, n.rotated, { once: !0 }),
                P(i, lt, { degree: t, oldDegree: s }, { cancelable: !1 });
            });
        }
        return this;
      },
      scaleX: function (t) {
        return this.scale(t, this.imageData.scaleY), this;
      },
      scaleY: function (t) {
        return this.scale(this.imageData.scaleX, t), this;
      },
      scale: function (t) {
        var e = this,
          i =
            1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : t,
          n = this.element,
          o = this.options,
          s = this.imageData;
        if (
          ((t = Number(t)),
          (i = Number(i)),
          this.viewed && !this.played && o.scalable)
        ) {
          var a = s.scaleX,
            r = s.scaleY,
            l = !1;
          if ((E(t) ? (l = !0) : (t = a), E(i) ? (l = !0) : (i = r), l)) {
            if (
              (I(o.scale) && X(n, "scale", o.scale, { once: !0 }),
              !1 ===
                P(n, "scale", {
                  scaleX: t,
                  scaleY: i,
                  oldScaleX: a,
                  oldScaleY: r,
                }))
            )
              return this;
            (s.scaleX = t),
              (s.scaleY = i),
              (this.scaling = !0),
              this.renderImage(function () {
                (e.scaling = !1),
                  I(o.scaled) && X(n, "scaled", o.scaled, { once: !0 }),
                  P(
                    n,
                    "scaled",
                    { scaleX: t, scaleY: i, oldScaleX: a, oldScaleY: r },
                    { cancelable: !1 }
                  );
              });
          }
        }
        return this;
      },
      zoom: function (t) {
        var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
          i =
            2 < arguments.length && void 0 !== arguments[2]
              ? arguments[2]
              : null,
          n =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : null,
          o = this.imageData;
        return (
          (t = Number(t)),
          this.zoomTo(
            (o.width * (t = t < 0 ? 1 / (1 - t) : 1 + t)) / o.naturalWidth,
            e,
            i,
            n
          ),
          this
        );
      },
      zoomTo: function (t) {
        var i,
          n,
          o,
          e = this,
          s = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
          a =
            2 < arguments.length && void 0 !== arguments[2]
              ? arguments[2]
              : null,
          r =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : null,
          l = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
          h = this.element,
          c = this.options,
          u = this.pointers,
          d = this.imageData,
          m = d.x,
          g = d.y,
          f = d.width,
          v = d.height,
          p = d.naturalWidth,
          b = d.naturalHeight;
        if (
          E((t = Math.max(0, t))) &&
          this.viewed &&
          !this.played &&
          (l || c.zoomable)
        ) {
          if (
            (l ||
              ((l = Math.max(0.01, c.minZoomRatio)),
              (y = Math.min(100, c.maxZoomRatio)),
              (t = Math.min(Math.max(t, l), y))),
            r)
          )
            switch (r.type) {
              case "wheel":
                0.055 <= c.zoomRatio && 0.95 < t && t < 1.05 && (t = 1);
                break;
              case "pointermove":
              case "touchmove":
              case "mousemove":
                0.99 < t && t < 1.01 && (t = 1);
            }
          var w,
            l = p * t,
            y = b * t,
            p = l - f,
            b = y - v,
            x = d.ratio;
          if (
            (I(c.zoom) && X(h, "zoom", c.zoom, { once: !0 }),
            !1 === P(h, "zoom", { ratio: t, oldRatio: x, originalEvent: r }))
          )
            return this;
          (this.zooming = !0),
            r
              ? ((w = {
                  left:
                    (w = (w = this.viewer).getBoundingClientRect()).left +
                    (window.pageXOffset - document.documentElement.clientLeft),
                  top:
                    w.top +
                    (window.pageYOffset - document.documentElement.clientTop),
                }),
                (u =
                  u && 0 < Object.keys(u).length
                    ? ((o = n = i = 0),
                      A(u, function (t) {
                        var e = t.startX,
                          t = t.startY;
                        (i += e), (n += t), (o += 1);
                      }),
                      { pageX: (i /= o), pageY: (n /= o) })
                    : { pageX: r.pageX, pageY: r.pageY }),
                (d.x -= ((u.pageX - w.left - m) / f) * p),
                (d.y -= ((u.pageY - w.top - g) / v) * b))
              : S(a) && E(a.x) && E(a.y)
              ? ((d.x -= p * ((a.x - m) / f)), (d.y -= b * ((a.y - g) / v)))
              : ((d.x -= p / 2), (d.y -= b / 2)),
            (d.left = d.x),
            (d.top = d.y),
            (d.width = l),
            (d.height = y),
            (d.oldRatio = x),
            (d.ratio = t),
            this.renderImage(function () {
              (e.zooming = !1),
                I(c.zoomed) && X(h, "zoomed", c.zoomed, { once: !0 }),
                P(
                  h,
                  "zoomed",
                  { ratio: t, oldRatio: x, originalEvent: r },
                  { cancelable: !1 }
                );
            }),
            s && this.tooltip();
        }
        return this;
      },
      play: function () {
        var t,
          o,
          s,
          a,
          r,
          l,
          h,
          e,
          i = this,
          n = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
        return (
          this.isShown &&
            !this.played &&
            ((t = this.element),
            I((o = this.options).play) && X(t, "play", o.play, { once: !0 }),
            !1 !== P(t, "play") &&
              ((s = this.player),
              (a = this.loadImage.bind(this)),
              (r = []),
              (h = l = 0),
              (this.played = !0),
              (this.onLoadWhenPlay = a),
              n && this.requestFullscreen(n),
              R(s, d),
              A(this.items, function (t, e) {
                var i = t.querySelector("img"),
                  n = document.createElement("img");
                (n.src = N(i, "originalUrl")),
                  (n.alt = i.getAttribute("alt")),
                  (n.referrerPolicy = i.referrerPolicy),
                  (l += 1),
                  R(n, B),
                  F(n, m, o.transition),
                  L(t, f) && (R(n, u), (h = e)),
                  r.push(n),
                  X(n, y, a, { once: !0 }),
                  s.appendChild(n);
              }),
              E(o.interval)) &&
              0 < o.interval &&
              ((e = function t() {
                clearTimeout(i.playing.timeout),
                  M(r[h], u),
                  R(r[(h = (h += 1) < l ? h : 0)], u),
                  (i.playing.timeout = setTimeout(t, o.interval));
              }),
              1 < l)) &&
            (this.playing = {
              prev: function t() {
                clearTimeout(i.playing.timeout),
                  M(r[h], u),
                  R(r[(h = 0 <= --h ? h : l - 1)], u),
                  (i.playing.timeout = setTimeout(t, o.interval));
              },
              next: e,
              timeout: setTimeout(e, o.interval),
            }),
          this
        );
      },
      stop: function () {
        var t,
          e,
          i = this;
        return (
          this.played &&
            ((t = this.element),
            I((e = this.options).stop) && X(t, "stop", e.stop, { once: !0 }),
            !1 !== P(t, "stop")) &&
            ((e = this.player),
            clearTimeout(this.playing.timeout),
            (this.playing = !1),
            (this.played = !1),
            A(e.getElementsByTagName("img"), function (t) {
              Y(t, y, i.onLoadWhenPlay);
            }),
            M(e, d),
            (e.innerHTML = ""),
            this.exitFullscreen()),
          this
        );
      },
      full: function () {
        var t = this,
          e = this.options,
          i = this.viewer,
          n = this.image,
          o = this.list;
        return (
          this.isShown &&
            !this.played &&
            !this.fulled &&
            e.inline &&
            ((this.fulled = !0),
            this.open(),
            R(this.button, K),
            e.transition && (M(o, m), this.viewed) && M(n, m),
            R(i, V),
            i.setAttribute("role", "dialog"),
            i.setAttribute("aria-labelledby", this.title.id),
            i.setAttribute("aria-modal", !0),
            i.removeAttribute("style"),
            C(i, { zIndex: e.zIndex }),
            e.focus && this.enforceFocus(),
            this.initContainer(),
            (this.viewerData = O({}, this.containerData)),
            this.renderList(),
            this.viewed) &&
            this.initImage(function () {
              t.renderImage(function () {
                e.transition &&
                  setTimeout(function () {
                    R(n, m), R(o, m);
                  }, 0);
              });
            }),
          this
        );
      },
      exit: function () {
        var t = this,
          e = this.options,
          i = this.viewer,
          n = this.image,
          o = this.list;
        return (
          this.isShown &&
            !this.played &&
            this.fulled &&
            e.inline &&
            ((this.fulled = !1),
            this.close(),
            M(this.button, K),
            e.transition && (M(o, m), this.viewed) && M(n, m),
            e.focus && this.clearEnforceFocus(),
            i.removeAttribute("role"),
            i.removeAttribute("aria-labelledby"),
            i.removeAttribute("aria-modal"),
            M(i, V),
            C(i, { zIndex: e.zIndexInline }),
            (this.viewerData = O({}, this.parentData)),
            this.renderViewer(),
            this.renderList(),
            this.viewed) &&
            this.initImage(function () {
              t.renderImage(function () {
                e.transition &&
                  setTimeout(function () {
                    R(n, m), R(o, m);
                  }, 0);
              });
            }),
          this
        );
      },
      tooltip: function () {
        var t = this,
          e = this.options,
          i = this.tooltipBox,
          n = this.imageData;
        return (
          this.viewed &&
            !this.played &&
            e.tooltip &&
            ((i.textContent = "".concat(Math.round(100 * n.ratio), "%")),
            this.tooltipping
              ? clearTimeout(this.tooltipping)
              : e.transition
              ? (this.fading && P(i, k),
                R(i, d),
                R(i, B),
                R(i, m),
                i.removeAttribute("aria-hidden"),
                (i.initialOffsetWidth = i.offsetWidth),
                R(i, u))
              : (R(i, d), i.removeAttribute("aria-hidden")),
            (this.tooltipping = setTimeout(function () {
              e.transition
                ? (X(
                    i,
                    k,
                    function () {
                      M(i, d),
                        M(i, B),
                        M(i, m),
                        i.setAttribute("aria-hidden", !0),
                        (t.fading = !1);
                    },
                    { once: !0 }
                  ),
                  M(i, u),
                  (t.fading = !0))
                : (M(i, d), i.setAttribute("aria-hidden", !0)),
                (t.tooltipping = !1);
            }, 1e3))),
          this
        );
      },
      toggle: function () {
        var t =
          0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
        return (
          1 === this.imageData.ratio
            ? this.zoomTo(this.imageData.oldRatio, !0, null, t)
            : this.zoomTo(1, !0, null, t),
          this
        );
      },
      reset: function () {
        return (
          this.viewed &&
            !this.played &&
            ((this.imageData = O({}, this.initialImageData)),
            this.renderImage()),
          this
        );
      },
      update: function () {
        var n,
          o,
          e = this,
          t = this.element,
          i = this.options,
          s = this.isImg;
        return s && !t.parentNode
          ? this.destroy()
          : ((n = []),
            A(s ? [t] : t.querySelectorAll("img"), function (t) {
              I(i.filter)
                ? i.filter.call(e, t) && n.push(t)
                : e.getImageURL(t) && n.push(t);
            }),
            n.length &&
              ((this.images = n),
              (this.length = n.length),
              this.ready
                ? ((o = []),
                  A(this.items, function (t, e) {
                    var t = t.querySelector("img"),
                      i = n[e];
                    (i && t && i.src === t.src && i.alt === t.alt) || o.push(e);
                  }),
                  C(this.list, { width: "auto" }),
                  this.initList(),
                  this.isShown &&
                    (this.length
                      ? this.viewed &&
                        (0 <= (s = o.indexOf(this.index))
                          ? ((this.viewed = !1),
                            this.view(
                              Math.max(
                                Math.min(this.index - s, this.length - 1),
                                0
                              )
                            ))
                          : (R((t = this.items[this.index]), f),
                            t.setAttribute("aria-selected", !0)))
                      : ((this.image = null),
                        (this.viewed = !1),
                        (this.index = 0),
                        (this.imageData = {}),
                        (this.canvas.innerHTML = ""),
                        (this.title.innerHTML = ""))))
                : this.build()),
            this);
      },
      destroy: function () {
        var t = this.element,
          e = this.options;
        return (
          t[g] &&
            ((this.destroyed = !0),
            this.ready
              ? (this.played && this.stop(),
                e.inline
                  ? (this.fulled && this.exit(), this.unbind())
                  : this.isShown
                  ? (this.viewing &&
                      (this.imageRendering
                        ? this.imageRendering.abort()
                        : this.imageInitializing &&
                          this.imageInitializing.abort()),
                    this.hiding && this.transitioning.abort(),
                    this.hidden())
                  : this.showing && (this.transitioning.abort(), this.hidden()),
                (this.ready = !1),
                this.viewer.parentNode.removeChild(this.viewer))
              : e.inline &&
                (this.delaying
                  ? this.delaying.abort()
                  : this.initializing && this.initializing.abort()),
            e.inline || Y(t, w, this.onStart),
            (t[g] = void 0)),
          this
        );
      },
    },
    At = {
      getImageURL: function (t) {
        var e = this.options.url;
        return (e = T(e) ? t.getAttribute(e) : I(e) ? e.call(this, t) : "");
      },
      enforceFocus: function () {
        var n = this;
        this.clearEnforceFocus(),
          X(
            document,
            et,
            (this.onFocusin = function (t) {
              var e = n.viewer,
                i = t.target;
              if (i !== document && i !== e && !e.contains(i)) {
                for (; i; ) {
                  if (
                    null !== i.getAttribute("tabindex") ||
                    "true" === i.getAttribute("aria-modal")
                  )
                    return;
                  i = i.parentElement;
                }
                e.focus();
              }
            })
          );
      },
      clearEnforceFocus: function () {
        this.onFocusin &&
          (Y(document, et, this.onFocusin), (this.onFocusin = null));
      },
      open: function () {
        var t = this.body;
        R(t, J),
          0 < this.scrollbarWidth &&
            (t.style.paddingRight = "".concat(
              this.scrollbarWidth +
                (parseFloat(this.initialBodyComputedPaddingRight) || 0),
              "px"
            ));
      },
      close: function () {
        var t = this.body;
        M(t, J),
          0 < this.scrollbarWidth &&
            (t.style.paddingRight = this.initialBodyPaddingRight);
      },
      shown: function () {
        var t = this.element,
          e = this.options,
          i = this.viewer;
        (this.fulled = !0),
          (this.isShown = !0),
          this.render(),
          this.bind(),
          (this.showing = !1),
          e.focus && (i.focus(), this.enforceFocus()),
          I(e.shown) && X(t, "shown", e.shown, { once: !0 }),
          !1 !== P(t, "shown") &&
            this.ready &&
            this.isShown &&
            !this.hiding &&
            this.view(this.index);
      },
      hidden: function () {
        var t = this.element,
          e = this.options,
          i = this.viewer;
        e.fucus && this.clearEnforceFocus(),
          (this.fulled = !1),
          (this.viewed = !1),
          (this.isShown = !1),
          this.close(),
          this.unbind(),
          R(i, v),
          i.removeAttribute("role"),
          i.removeAttribute("aria-labelledby"),
          i.removeAttribute("aria-modal"),
          i.setAttribute("aria-hidden", !0),
          this.resetList(),
          this.resetImage(),
          (this.hiding = !1),
          this.destroyed ||
            (I(e.hidden) && X(t, "hidden", e.hidden, { once: !0 }),
            P(t, "hidden", null, { cancelable: !1 }));
      },
      requestFullscreen: function (t) {
        var e = this.element.ownerDocument;
        this.fulled &&
          !(
            e.fullscreenElement ||
            e.webkitFullscreenElement ||
            e.mozFullScreenElement ||
            e.msFullscreenElement
          ) &&
          ((e = e.documentElement).requestFullscreen
            ? S(t)
              ? e.requestFullscreen(t)
              : e.requestFullscreen()
            : e.webkitRequestFullscreen
            ? e.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
            : e.mozRequestFullScreen
            ? e.mozRequestFullScreen()
            : e.msRequestFullscreen && e.msRequestFullscreen());
      },
      exitFullscreen: function () {
        var t = this.element.ownerDocument;
        this.fulled &&
          (t.fullscreenElement ||
            t.webkitFullscreenElement ||
            t.mozFullScreenElement ||
            t.msFullscreenElement) &&
          (t.exitFullscreen
            ? t.exitFullscreen()
            : t.webkitExitFullscreen
            ? t.webkitExitFullscreen()
            : t.mozCancelFullScreen
            ? t.mozCancelFullScreen()
            : t.msExitFullscreen && t.msExitFullscreen());
      },
      change: function (t) {
        var e = this.options,
          i = this.pointers,
          n = i[Object.keys(i)[0]];
        if (n) {
          var s,
            a,
            o = n.endX - n.startX,
            r = n.endY - n.startY;
          switch (this.action) {
            case h:
              (0 == o && 0 == r) ||
                ((this.pointerMoved = !0), this.move(o, r, t));
              break;
            case c:
              this.zoom(
                ((s = q({}, (l = i))),
                (a = []),
                A(l, function (o, t) {
                  delete s[t],
                    A(s, function (t) {
                      var e = Math.abs(o.startX - t.startX),
                        i = Math.abs(o.startY - t.startY),
                        n = Math.abs(o.endX - t.endX),
                        t = Math.abs(o.endY - t.endY),
                        e = Math.sqrt(e * e + i * i),
                        i = Math.sqrt(n * n + t * t);
                      a.push((i - e) / e);
                    });
                }),
                a.sort(function (t, e) {
                  return Math.abs(t) < Math.abs(e);
                }),
                a[0]),
                !1,
                null,
                t
              );
              break;
            case j:
              this.action = "switched";
              var l = Math.abs(o);
              1 < l &&
                l > Math.abs(r) &&
                ((this.pointers = {}),
                1 < o ? this.prev(e.loop) : o < -1 && this.next(e.loop));
          }
          A(i, function (t) {
            (t.startX = t.endX), (t.startY = t.endY);
          });
        }
      },
      isSwitchable: function () {
        var t = this.imageData,
          e = this.viewerData;
        return (
          1 < this.length &&
          0 <= t.x &&
          0 <= t.y &&
          t.width <= e.width &&
          t.height <= e.height
        );
      },
    },
    Ot = e.Viewer,
    Ct =
      ((Dt = -1),
      function () {
        return (Dt += 1);
      }),
    e = (function () {
      function o(t) {
        var e =
            1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
          i = this,
          n = o;
        if (!(i instanceof n))
          throw new TypeError("Cannot call a class as a function");
        if (!t || 1 !== t.nodeType)
          throw new Error(
            "The first argument is required and must be an element."
          );
        (this.element = t),
          (this.options = O({}, W, S(e) && e)),
          (this.action = !1),
          (this.fading = !1),
          (this.fulled = !1),
          (this.hiding = !1),
          (this.imageClicked = !1),
          (this.imageData = {}),
          (this.index = this.options.initialViewIndex),
          (this.isImg = !1),
          (this.isShown = !1),
          (this.length = 0),
          (this.moving = !1),
          (this.played = !1),
          (this.playing = !1),
          (this.pointers = {}),
          (this.ready = !1),
          (this.rotating = !1),
          (this.scaling = !1),
          (this.showing = !1),
          (this.timeout = !1),
          (this.tooltipping = !1),
          (this.viewed = !1),
          (this.viewing = !1),
          (this.wheeling = !1),
          (this.zooming = !1),
          (this.pointerMoved = !1),
          (this.id = Ct()),
          this.init();
      }
      var t, e, i;
      return (
        (t = o),
        (i = [
          {
            key: "noConflict",
            value: function () {
              return (window.Viewer = Ot), o;
            },
          },
          {
            key: "setDefaults",
            value: function (t) {
              O(W, S(t) && t);
            },
          },
        ]),
        (e = [
          {
            key: "init",
            value: function () {
              var t,
                e,
                i,
                n,
                o = this,
                s = this.element,
                a = this.options;
              s[g] ||
                ((s[g] = this),
                a.focus && !a.keyboard && (a.focus = !1),
                (t = "img" === s.localName),
                (e = []),
                A(t ? [s] : s.querySelectorAll("img"), function (t) {
                  I(a.filter)
                    ? a.filter.call(o, t) && e.push(t)
                    : o.getImageURL(t) && e.push(t);
                }),
                (this.isImg = t),
                (this.length = e.length),
                (this.images = e),
                this.initBody(),
                D(document.createElement(g).style.transition) &&
                  (a.transition = !1),
                a.inline
                  ? ((i = 0),
                    (n = function () {
                      var t;
                      (i += 1) === o.length &&
                        ((o.initializing = !1),
                        (o.delaying = {
                          abort: function () {
                            clearTimeout(t);
                          },
                        }),
                        (t = setTimeout(function () {
                          (o.delaying = !1), o.build();
                        }, 0)));
                    }),
                    (this.initializing = {
                      abort: function () {
                        A(e, function (t) {
                          t.complete || (Y(t, y, n), Y(t, x, n));
                        });
                      },
                    }),
                    A(e, function (t) {
                      var e, i;
                      t.complete
                        ? n()
                        : (X(
                            t,
                            y,
                            (e = function () {
                              Y(t, x, i), n();
                            }),
                            { once: !0 }
                          ),
                          X(
                            t,
                            x,
                            (i = function () {
                              Y(t, y, e), n();
                            }),
                            { once: !0 }
                          ));
                    }))
                  : X(
                      s,
                      w,
                      (this.onStart = function (t) {
                        t = t.target;
                        "img" !== t.localName ||
                          (I(a.filter) && !a.filter.call(o, t)) ||
                          o.view(o.images.indexOf(t));
                      })
                    ));
            },
          },
          {
            key: "build",
            value: function () {
              var t, s, e, i, n, o, a, r, l, h, c, u, d, m;
              this.ready ||
                ((t = this.element),
                (s = this.options),
                (e = t.parentNode),
                ((d = document.createElement("div")).innerHTML =
                  '<div class="viewer-container" tabindex="-1" touch-action="none"><div class="viewer-canvas"></div><div class="viewer-footer"><div class="viewer-title"></div><div class="viewer-toolbar"></div><div class="viewer-navbar"><ul class="viewer-list" role="navigation"></ul></div></div><div class="viewer-tooltip" role="alert" aria-hidden="true"></div><div class="viewer-button" data-viewer-action="mix" role="button"></div><div class="viewer-player"></div></div>'),
                (d = (i = d.querySelector(
                  ".".concat(g, "-container")
                )).querySelector(".".concat(g, "-title"))),
                (n = i.querySelector(".".concat(g, "-toolbar"))),
                (m = i.querySelector(".".concat(g, "-navbar"))),
                (o = i.querySelector(".".concat(g, "-button"))),
                (a = i.querySelector(".".concat(g, "-canvas"))),
                (this.parent = e),
                (this.viewer = i),
                (this.title = d),
                (this.toolbar = n),
                (this.navbar = m),
                (this.button = o),
                (this.canvas = a),
                (this.footer = i.querySelector(".".concat(g, "-footer"))),
                (this.tooltipBox = i.querySelector(".".concat(g, "-tooltip"))),
                (this.player = i.querySelector(".".concat(g, "-player"))),
                (this.list = i.querySelector(".".concat(g, "-list"))),
                (i.id = "".concat(g).concat(this.id)),
                (d.id = "".concat(g, "Title").concat(this.id)),
                R(
                  d,
                  s.title
                    ? Tt(Array.isArray(s.title) ? s.title[0] : s.title)
                    : v
                ),
                R(m, s.navbar ? Tt(s.navbar) : v),
                F(o, v, !s.button),
                s.keyboard && o.setAttribute("tabindex", 0),
                s.backdrop &&
                  (R(i, "".concat(g, "-backdrop")),
                  s.inline || "static" === s.backdrop || pt(a, ht, "hide")),
                T(s.className) &&
                  s.className &&
                  s.className.split(ct).forEach(function (t) {
                    R(i, t);
                  }),
                s.toolbar
                  ? ((r = document.createElement("ul")),
                    (l = S(s.toolbar)),
                    (h = ut.slice(0, 3)),
                    (c = ut.slice(7, 9)),
                    (u = ut.slice(9)),
                    l || R(n, Tt(s.toolbar)),
                    A(l ? s.toolbar : ut, function (t, e) {
                      var i,
                        n = l && S(t),
                        e = l ? vt(e) : t,
                        o = n && !D(t.show) ? t.show : t;
                      !o ||
                        (!s.zoomable && -1 !== h.indexOf(e)) ||
                        (!s.rotatable && -1 !== c.indexOf(e)) ||
                        (!s.scalable && -1 !== u.indexOf(e)) ||
                        ((i = n && !D(t.size) ? t.size : t),
                        (n = n && !D(t.click) ? t.click : t),
                        (t = document.createElement("li")),
                        s.keyboard && t.setAttribute("tabindex", 0),
                        t.setAttribute("role", "button"),
                        R(t, "".concat(g, "-").concat(e)),
                        I(n) || pt(t, ht, e),
                        E(o) && R(t, Tt(o)),
                        -1 !== ["small", "large"].indexOf(i)
                          ? R(t, "".concat(g, "-").concat(i))
                          : "play" === e && R(t, "".concat(g, "-large")),
                        I(n) && X(t, w, n),
                        r.appendChild(t));
                    }),
                    n.appendChild(r))
                  : R(n, v),
                s.rotatable ||
                  (R((d = n.querySelectorAll('li[class*="rotate"]')), p),
                  A(d, function (t) {
                    n.appendChild(t);
                  })),
                s.inline
                  ? (R(o, U),
                    C(i, { zIndex: s.zIndexInline }),
                    "static" === window.getComputedStyle(e).position &&
                      C(e, { position: "relative" }),
                    e.insertBefore(i, t.nextSibling))
                  : (R(o, H),
                    R(i, V),
                    R(i, B),
                    R(i, v),
                    C(i, { zIndex: s.zIndex }),
                    (m =
                      (m = T((m = s.container))
                        ? t.ownerDocument.querySelector(m)
                        : m) || this.body).appendChild(i)),
                s.inline && (this.render(), this.bind(), (this.isShown = !0)),
                (this.ready = !0),
                I(s.ready) && X(t, "ready", s.ready, { once: !0 }),
                !1 === P(t, "ready")
                  ? (this.ready = !1)
                  : this.ready && s.inline && this.view(this.index));
            },
          },
        ]) && r(t.prototype, e),
        i && r(t, i),
        Object.defineProperty(t, "prototype", { writable: !1 }),
        o
      );
    })();
  return O(e.prototype, i, t, St, It, At), e;
});

'use strict';

(function () {  

  const menu = document.querySelector('.main-navigation');
  const menuToggle = document.querySelector('.main-navigation__toggle'); 
  const submenus = document.querySelectorAll('.nav__section')

  if (menuToggle) {
    menuToggle.addEventListener('click', function (evt) {
      if (menu) {
        evt.currentTarget.classList.toggle('main-navigation__toggle--active');
        document.body.classList.toggle('nav--opened');

        if(submenus) {
          submenus.forEach(function(section) {
            section.classList.add('nav__accordeon-container--closed');
          })
        }
      }
    });
  }
  
  const submenuToggles = document.querySelectorAll('.nav__accordeon-container button');
  const submenuSections = document.querySelectorAll('.nav__section div');

    submenuToggles.forEach(function (toggle) {
      toggle.addEventListener('click', onToggleClicked);
    });
  
    function onToggleClicked(e) {
      const section = e.target.closest('.nav__accordeon-container').parentElement;
      const sectionText = section.querySelector('.nav__text');
      if (section.classList.contains('nav__accordeon-container--closed')) {
        section.classList.remove('nav__accordeon-container--closed');             
        sectionText.style.maxHeight = sectionText.scrollHeight + 'px'; 
      } else {
          submenuSections.forEach(function (section) {
              section.classList.remove('nav__accordeon-container--closed');
              if(section.querySelector('.nav__text')) {                    
                section.querySelector('.nav__text').style.maxHeight = null;
              }              
        });        
        section.classList.add('nav__accordeon-container--closed'); 
        sectionText.style.maxHeight = null;                
      }
    }  
  
  const gals = document.querySelectorAll(".article__doc");
    if (gals) {
      gals.forEach(function (elem) {
        let gallery1 = new Viewer(elem);
      });        
     
    }

    /*$(document).ready(function () {
      const offsetHeader = $(".header").outerHeight();
      var windowWidth = $(window).width();
    
      if (windowWidth > 1200) {
        $(window).scroll(function () {
          const top = $(this).scrollTop();
          console.log(windowWidth);
    
          if (offsetHeader < top - 200) {
            $(".header").css("position", "fixed");
            $(".header__bottom").hide();
            $("main").css("padding-top", offsetHeader);
          } else {
            $(".header").css("position", "static");
            $("main").css("padding-top", 0);
            $("main").css("margin-top", 0);
            $(".header__bottom").show();
          }
        });
      }
    })

    $(window).on('resize', function(){       
      windowWidth = $(window).width();
      console.log(windowWidth);
      if (windowWidth < 1200) {
        $(".header__bottom").show();     
      }  

    });*/
    $(document).ready(function () {
    
    function headerHandler(){
      const offsetHeader = $(".header").outerHeight();
      var windowWidth = $(window).width();

      if (windowWidth > 1200) {        
          const top = $(this).scrollTop();
    
          if (offsetHeader < top - 200) {
            $(".header").css("position", "fixed");
            $(".header__bottom").hide();
            $("main").css("padding-top", offsetHeader);
          } else {
            $(".header").css("position", "static");
            $("main").css("padding-top", 0);
            $(".header__bottom").show();
          }     
      } 

      if (windowWidth < 1200) {
        $(".header__bottom").show();
        $(".header").css("position", "fixed");
        $("main").css("padding-top", 0);
      }
    }

    
    $(window).scroll(headerHandler);
    $(window).resize(headerHandler);
    
  }); 
      
})();
