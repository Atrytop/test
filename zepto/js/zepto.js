/* Zepto v1.0-236-g91869d7 - zepto ie event ajax detect fx touch - zeptojs.com/license */
var Zepto = function() {
    function F(a) {
        return a == null  ? String(a) : y[z.call(a)] || "object"
    }
    function G(a) {
        return F(a) == "function"
    }
    function H(a) {
        return a != null  && a == a.window
    }
    function I(a) {
        return a != null  && a.nodeType == a.DOCUMENT_NODE
    }
    function J(a) {
        return F(a) == "object"
    }
    function K(a) {
        return J(a) && !H(a) && Object.getPrototypeOf(a) == Object.prototype
    }
    function L(a) {
        return a instanceof Array
    }
    function M(a) {
        return typeof a.length == "number"
    }
    function N(a) {
        return g.call(a, function(a) {
            return a != null 
        }
        )
    }
    function O(a) {
        return a.length > 0 ? c.fn.concat.apply([], a) : a
    }
    function P(a) {
        return a.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
    }
    function Q(a) {
        return a in j ? j[a] : j[a] = new RegExp("(^|\\s)" + a + "(\\s|$)")
    }
    function R(a, b) {
        return typeof b == "number" && !k[P(a)] ? b + "px" : b
    }
    function S(a) {
        var b, c;
        return i[a] || (b = h.createElement(a),
        h.body.appendChild(b),
        c = getComputedStyle(b, "").getPropertyValue("display"),
        b.parentNode.removeChild(b),
        c == "none" && (c = "block"),
        i[a] = c),
        i[a]
    }
    function T(a) {
        return "children" in a ? f.call(a.children) : c.map(a.childNodes, function(a) {
            if (a.nodeType == 1)
                return a
        }
        )
    }
    function U(c, d, e) {
        for (b in d)
            e && (K(d[b]) || L(d[b])) ? (K(d[b]) && !K(c[b]) && (c[b] = {}),
            L(d[b]) && !L(c[b]) && (c[b] = []),
            U(c[b], d[b], e)) : d[b] !== a && (c[b] = d[b])
    }
    function V(a, b) {
        return b == null  ? c(a) : c(a).filter(b)
    }
    function W(a, b, c, d) {
        return G(b) ? b.call(a, c, d) : b
    }
    function X(a, b, c) {
        c == null  ? a.removeAttribute(b) : a.setAttribute(b, c)
    }
    function Y(b, c) {
        var d = b.className
          , e = d && d.baseVal !== a;
        if (c === a)
            return e ? d.baseVal : d;
        e ? d.baseVal = c : b.className = c
    }
    function Z(a) {
        var b;
        try {
            return a ? a == "true" || (a == "false" ? !1 : a == "null" ? null  : !/^0/.test(a) && !isNaN(b = Number(a)) ? b : /^[\[\{]/.test(a) ? c.parseJSON(a) : a) : a
        } catch (d) {
            return a
        }
    }
    function $(a, b) {
        b(a);
        for (var c in a.childNodes)
            $(a.childNodes[c], b)
    }
    var a, b, c, d, e = [], f = e.slice, g = e.filter, h = window.document, i = {}, j = {}, k = {
        "column-count": 1,
        columns: 1,
        "font-weight": 1,
        "line-height": 1,
        opacity: 1,
        "z-index": 1,
        zoom: 1
    }, l = /^\s*<(\w+|!)[^>]*>/, m = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, n = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig, o = /^(?:body|html)$/i, p = ["val", "css", "html", "text", "data", "width", "height", "offset"], q = ["after", "prepend", "before", "append"], r = h.createElement("table"), s = h.createElement("tr"), t = {
        tr: h.createElement("tbody"),
        tbody: r,
        thead: r,
        tfoot: r,
        td: s,
        th: s,
        "*": h.createElement("div")
    }, u = /complete|loaded|interactive/, v = /^\.([\w-]+)$/, w = /^#([\w-]*)$/, x = /^[\w-]*$/, y = {}, z = y.toString, A = {}, B, C, D = h.createElement("div"), E = {
        tabindex: "tabIndex",
        readonly: "readOnly",
        "for": "htmlFor",
        "class": "className",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        cellpadding: "cellPadding",
        rowspan: "rowSpan",
        colspan: "colSpan",
        usemap: "useMap",
        frameborder: "frameBorder",
        contenteditable: "contentEditable"
    };
    return A.matches = function(a, b) {
        if (!b || !a || a.nodeType !== 1)
            return !1;
        var c = a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.matchesSelector;
        if (c)
            return c.call(a, b);
        var d, e = a.parentNode, f = !e;
        return f && (e = D).appendChild(a),
        d = ~A.qsa(e, b).indexOf(a),
        f && D.removeChild(a),
        d
    }
    ,
    B = function(a) {
        return a.replace(/-+(.)?/g, function(a, b) {
            return b ? b.toUpperCase() : ""
        }
        )
    }
    ,
    C = function(a) {
        return g.call(a, function(b, c) {
            return a.indexOf(b) == c
        }
        )
    }
    ,
    A.fragment = function(b, d, e) {
        var g, i, j;
        return m.test(b) && (g = c(h.createElement(RegExp.$1))),
        g || (b.replace && (b = b.replace(n, "<$1></$2>")),
        d === a && (d = l.test(b) && RegExp.$1),
        d in t || (d = "*"),
        j = t[d],
        j.innerHTML = "" + b,
        g = c.each(f.call(j.childNodes), function() {
            j.removeChild(this)
        }
        )),
        K(e) && (i = c(g),
        c.each(e, function(a, b) {
            p.indexOf(a) > -1 ? i[a](b) : i.attr(a, b)
        }
        )),
        g
    }
    ,
    A.Z = function(a, b) {
        return a = a || [],
        a.__proto__ = c.fn,
        a.selector = b || "",
        a
    }
    ,
    A.isZ = function(a) {
        return a instanceof A.Z
    }
    ,
    A.init = function(b, d) {
        var e;
        if (!b)
            return A.Z();
        if (typeof b == "string") {
            b = b.trim();
            if (b[0] == "<" && l.test(b))
                e = A.fragment(b, RegExp.$1, d),
                b = null ;
            else {
                if (d !== a)
                    return c(d).find(b);
                e = A.qsa(h, b)
            }
        } else {
            if (G(b))
                return c(h).ready(b);
            if (A.isZ(b))
                return b;
            if (L(b))
                e = N(b);
            else if (J(b))
                e = [b],
                b = null ;
            else if (l.test(b))
                e = A.fragment(b.trim(), RegExp.$1, d),
                b = null ;
            else {
                if (d !== a)
                    return c(d).find(b);
                e = A.qsa(h, b)
            }
        }
        return A.Z(e, b)
    }
    ,
    c = function(a, b) {
        return A.init(a, b)
    }
    ,
    c.extend = function(a) {
        var b, c = f.call(arguments, 1);
        return typeof a == "boolean" && (b = a,
        a = c.shift()),
        c.forEach(function(c) {
            U(a, c, b)
        }
        ),
        a
    }
    ,
    A.qsa = function(a, b) {
        var c, d = b[0] == "#", e = !d && b[0] == ".", g = d || e ? b.slice(1) : b, h = x.test(g);
        return I(a) && h && d ? (c = a.getElementById(g)) ? [c] : [] : a.nodeType !== 1 && a.nodeType !== 9 ? [] : f.call(h && !d ? e ? a.getElementsByClassName(g) : a.getElementsByTagName(b) : a.querySelectorAll(b))
    }
    ,
    c.contains = function(a, b) {
        return a !== b && a.contains(b)
    }
    ,
    c.type = F,
    c.isFunction = G,
    c.isWindow = H,
    c.isArray = L,
    c.isPlainObject = K,
    c.isEmptyObject = function(a) {
        var b;
        for (b in a)
            return !1;
        return !0
    }
    ,
    c.inArray = function(a, b, c) {
        return e.indexOf.call(b, a, c)
    }
    ,
    c.camelCase = B,
    c.trim = function(a) {
        return a == null  ? "" : String.prototype.trim.call(a)
    }
    ,
    c.uuid = 0,
    c.support = {},
    c.expr = {},
    c.map = function(a, b) {
        var c, d = [], e, f;
        if (M(a))
            for (e = 0; e < a.length; e++)
                c = b(a[e], e),
                c != null  && d.push(c);
        else
            for (f in a)
                c = b(a[f], f),
                c != null  && d.push(c);
        return O(d)
    }
    ,
    c.each = function(a, b) {
        var c, d;
        if (M(a)) {
            for (c = 0; c < a.length; c++)
                if (b.call(a[c], c, a[c]) === !1)
                    return a
        } else
            for (d in a)
                if (b.call(a[d], d, a[d]) === !1)
                    return a;
        return a
    }
    ,
    c.grep = function(a, b) {
        return g.call(a, b)
    }
    ,
    window.JSON && (c.parseJSON = JSON.parse),
    c.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        y["[object " + b + "]"] = b.toLowerCase()
    }
    ),
    c.fn = {
        forEach: e.forEach,
        reduce: e.reduce,
        push: e.push,
        sort: e.sort,
        indexOf: e.indexOf,
        concat: e.concat,
        map: function(a) {
            return c(c.map(this, function(b, c) {
                return a.call(b, c, b)
            }
            ))
        },
        slice: function() {
            return c(f.apply(this, arguments))
        },
        ready: function(a) {
            return u.test(h.readyState) && h.body ? a(c) : h.addEventListener("DOMContentLoaded", function() {
                a(c)
            }
            , !1),
            this
        },
        get: function(b) {
            return b === a ? f.call(this) : this[b >= 0 ? b : b + this.length]
        },
        toArray: function() {
            return this.get()
        },
        size: function() {
            return this.length
        },
        remove: function() {
            return this.each(function() {
                this.parentNode != null  && this.parentNode.removeChild(this)
            }
            )
        },
        each: function(a) {
            return e.every.call(this, function(b, c) {
                return a.call(b, c, b) !== !1
            }
            ),
            this
        },
        filter: function(a) {
            return G(a) ? this.not(this.not(a)) : c(g.call(this, function(b) {
                return A.matches(b, a)
            }
            ))
        },
        add: function(a, b) {
            return c(C(this.concat(c(a, b))))
        },
        is: function(a) {
            return this.length > 0 && A.matches(this[0], a)
        },
        not: function(b) {
            var d = [];
            if (G(b) && b.call !== a)
                this.each(function(a) {
                    b.call(this, a) || d.push(this)
                }
                );
            else {
                var e = typeof b == "string" ? this.filter(b) : M(b) && G(b.item) ? f.call(b) : c(b);
                this.forEach(function(a) {
                    e.indexOf(a) < 0 && d.push(a)
                }
                )
            }
            return c(d)
        },
        has: function(a) {
            return this.filter(function() {
                return J(a) ? c.contains(this, a) : c(this).find(a).size()
            }
            )
        },
        eq: function(a) {
            return a === -1 ? this.slice(a) : this.slice(a, +a + 1)
        },
        first: function() {
            var a = this[0];
            return a && !J(a) ? a : c(a)
        },
        last: function() {
            var a = this[this.length - 1];
            return a && !J(a) ? a : c(a)
        },
        find: function(a) {
            var b, d = this;
            return typeof a == "object" ? b = c(a).filter(function() {
                var a = this;
                return e.some.call(d, function(b) {
                    return c.contains(b, a)
                }
                )
            }
            ) : this.length == 1 ? b = c(A.qsa(this[0], a)) : b = this.map(function() {
                return A.qsa(this, a)
            }
            ),
            b
        },
        closest: function(a, b) {
            var d = this[0]
              , e = !1;
            typeof a == "object" && (e = c(a));
            while (d && !(e ? e.indexOf(d) >= 0 : A.matches(d, a)))
                d = d !== b && !I(d) && d.parentNode;
            return c(d)
        },
        parents: function(a) {
            var b = []
              , d = this;
            while (d.length > 0)
                d = c.map(d, function(a) {
                    if ((a = a.parentNode) && !I(a) && b.indexOf(a) < 0)
                        return b.push(a),
                        a
                }
                );
            return V(b, a)
        },
        parent: function(a) {
            return V(C(this.pluck("parentNode")), a)
        },
        children: function(a) {
            return V(this.map(function() {
                return T(this)
            }
            ), a)
        },
        contents: function() {
            return this.map(function() {
                return f.call(this.childNodes)
            }
            )
        },
        siblings: function(a) {
            return V(this.map(function(a, b) {
                return g.call(T(b.parentNode), function(a) {
                    return a !== b
                }
                )
            }
            ), a)
        },
        empty: function() {
            return this.each(function() {
                this.innerHTML = ""
            }
            )
        },
        pluck: function(a) {
            return c.map(this, function(b) {
                return b[a]
            }
            )
        },
        show: function() {
            return this.each(function() {
                this.style.display == "none" && (this.style.display = ""),
                getComputedStyle(this, "").getPropertyValue("display") == "none" && (this.style.display = S(this.nodeName))
            }
            )
        },
        replaceWith: function(a) {
            return this.before(a).remove()
        },
        wrap: function(a) {
            var b = G(a);
            if (this[0] && !b)
                var d = c(a).get(0)
                  , e = d.parentNode || this.length > 1;
            return this.each(function(f) {
                c(this).wrapAll(b ? a.call(this, f) : e ? d.cloneNode(!0) : d)
            }
            )
        },
        wrapAll: function(a) {
            if (this[0]) {
                c(this[0]).before(a = c(a));
                var b;
                while ((b = a.children()).length)
                    a = b.first();
                c(a).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            var b = G(a);
            return this.each(function(d) {
                var e = c(this)
                  , f = e.contents()
                  , g = b ? a.call(this, d) : a;
                f.length ? f.wrapAll(g) : e.append(g)
            }
            )
        },
        unwrap: function() {
            return this.parent().each(function() {
                c(this).replaceWith(c(this).children())
            }
            ),
            this
        },
        clone: function() {
            return this.map(function() {
                return this.cloneNode(!0)
            }
            )
        },
        hide: function() {
            return this.css("display", "none")
        },
        toggle: function(b) {
            return this.each(function() {
                var d = c(this);
                (b === a ? d.css("display") == "none" : b) ? d.show() : d.hide()
            }
            )
        },
        prev: function(a) {
            return c(this.pluck("previousElementSibling")).filter(a || "*")
        },
        next: function(a) {
            return c(this.pluck("nextElementSibling")).filter(a || "*")
        },
        html: function(a) {
            return arguments.length === 0 ? this.length > 0 ? this[0].innerHTML : null  : this.each(function(b) {
                var d = this.innerHTML;
                c(this).empty().append(W(this, a, b, d))
            }
            )
        },
        text: function(b) {
            return arguments.length === 0 ? this.length > 0 ? this[0].textContent : null  : this.each(function() {
                this.textContent = b === a ? "" : "" + b
            }
            )
        },
        attr: function(c, d) {
            var e;
            return typeof c == "string" && d === a ? this.length == 0 || this[0].nodeType !== 1 ? a : c == "value" && this[0].nodeName == "INPUT" ? this.val() : !(e = this[0].getAttribute(c)) && c in this[0] ? this[0][c] : e : this.each(function(a) {
                if (this.nodeType !== 1)
                    return;
                if (J(c))
                    for (b in c)
                        X(this, b, c[b]);
                else
                    X(this, c, W(this, d, a, this.getAttribute(c)))
            }
            )
        },
        removeAttr: function(a) {
            return this.each(function() {
                this.nodeType === 1 && X(this, a)
            }
            )
        },
        prop: function(b, c) {
            return b = E[b] || b,
            c === a ? this[0] && this[0][b] : this.each(function(a) {
                this[b] = W(this, c, a, this[b])
            }
            )
        },
        data: function(b, c) {
            var d = this.attr("data-" + P(b), c);
            return d !== null  ? Z(d) : a
        },
        val: function(a) {
            return arguments.length === 0 ? this[0] && (this[0].multiple ? c(this[0]).find("option").filter(function() {
                return this.selected
            }
            ).pluck("value") : this[0].value) : this.each(function(b) {
                this.value = W(this, a, b, this.value)
            }
            )
        },
        offset: function(a) {
            if (a)
                return this.each(function(b) {
                    var d = c(this)
                      , e = W(this, a, b, d.offset())
                      , f = d.offsetParent().offset()
                      , g = {
                        top: e.top - f.top,
                        left: e.left - f.left
                    };
                    d.css("position") == "static" && (g.position = "relative"),
                    d.css(g)
                }
                );
            if (this.length == 0)
                return null ;
            var b = this[0].getBoundingClientRect();
            return {
                left: b.left + window.pageXOffset,
                top: b.top + window.pageYOffset,
                width: Math.round(b.width),
                height: Math.round(b.height)
            }
        },
        css: function(a, d) {
            if (arguments.length < 2) {
                var e = this[0]
                  , f = getComputedStyle(e, "");
                if (!e)
                    return;
                if (typeof a == "string")
                    return e.style[B(a)] || f.getPropertyValue(a);
                if (L(a)) {
                    var g = {};
                    return c.each(L(a) ? a : [a], function(a, b) {
                        g[b] = e.style[B(b)] || f.getPropertyValue(b)
                    }
                    ),
                    g
                }
            }
            var h = "";
            if (F(a) == "string")
                !d && d !== 0 ? this.each(function() {
                    this.style.removeProperty(P(a))
                }
                ) : h = P(a) + ":" + R(a, d);
            else
                for (b in a)
                    !a[b] && a[b] !== 0 ? this.each(function() {
                        this.style.removeProperty(P(b))
                    }
                    ) : h += P(b) + ":" + R(b, a[b]) + ";";
            return this.each(function() {
                this.style.cssText += ";" + h
            }
            )
        },
        index: function(a) {
            return a ? this.indexOf(c(a)[0]) : this.parent().children().indexOf(this[0])
        },
        hasClass: function(a) {
            return a ? e.some.call(this, function(a) {
                return this.test(Y(a))
            }
            , Q(a)) : !1
        },
        addClass: function(a) {
            return a ? this.each(function(b) {
                d = [];
                var e = Y(this)
                  , f = W(this, a, b, e);
                f.split(/\s+/g).forEach(function(a) {
                    c(this).hasClass(a) || d.push(a)
                }
                , this),
                d.length && Y(this, e + (e ? " " : "") + d.join(" "))
            }
            ) : this
        },
        removeClass: function(b) {
            return this.each(function(c) {
                if (b === a)
                    return Y(this, "");
                d = Y(this),
                W(this, b, c, d).split(/\s+/g).forEach(function(a) {
                    d = d.replace(Q(a), " ")
                }
                ),
                Y(this, d.trim())
            }
            )
        },
        toggleClass: function(b, d) {
            return b ? this.each(function(e) {
                var f = c(this)
                  , g = W(this, b, e, Y(this));
                g.split(/\s+/g).forEach(function(b) {
                    (d === a ? !f.hasClass(b) : d) ? f.addClass(b) : f.removeClass(b)
                }
                )
            }
            ) : this
        },
        scrollTop: function(b) {
            if (!this.length)
                return;
            var c = "scrollTop" in this[0];
            return b === a ? c ? this[0].scrollTop : this[0].pageYOffset : this.each(c ? function() {
                this.scrollTop = b
            }
             : function() {
                this.scrollTo(this.scrollX, b)
            }
            )
        },
        scrollLeft: function(b) {
            if (!this.length)
                return;
            var c = "scrollLeft" in this[0];
            return b === a ? c ? this[0].scrollLeft : this[0].pageXOffset : this.each(c ? function() {
                this.scrollLeft = b
            }
             : function() {
                this.scrollTo(b, this.scrollY)
            }
            )
        },
        position: function() {
            if (!this.length)
                return;
            var a = this[0]
              , b = this.offsetParent()
              , d = this.offset()
              , e = o.test(b[0].nodeName) ? {
                top: 0,
                left: 0
            } : b.offset();
            return d.top -= parseFloat(c(a).css("margin-top")) || 0,
            d.left -= parseFloat(c(a).css("margin-left")) || 0,
            e.top += parseFloat(c(b[0]).css("border-top-width")) || 0,
            e.left += parseFloat(c(b[0]).css("border-left-width")) || 0,
            {
                top: d.top - e.top,
                left: d.left - e.left
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent || h.body;
                while (a && !o.test(a.nodeName) && c(a).css("position") == "static")
                    a = a.offsetParent;
                return a
            }
            )
        }
    },
    c.fn.detach = c.fn.remove,
    ["width", "height"].forEach(function(b) {
        var d = b.replace(/./, function(a) {
            return a[0].toUpperCase()
        }
        );
        c.fn[b] = function(e) {
            var f, g = this[0];
            return e === a ? H(g) ? g["inner" + d] : I(g) ? g.documentElement["scroll" + d] : (f = this.offset()) && f[b] : this.each(function(a) {
                g = c(this),
                g.css(b, W(this, e, a, g[b]()))
            }
            )
        }
    }
    ),
    q.forEach(function(a, b) {
        var d = b % 2;
        c.fn[a] = function() {
            var a, e = c.map(arguments, function(b) {
                return a = F(b),
                a == "object" || a == "array" || b == null  ? b : A.fragment(b)
            }
            ), f, g = this.length > 1;
            return e.length < 1 ? this : this.each(function(a, h) {
                f = d ? h : h.parentNode,
                h = b == 0 ? h.nextSibling : b == 1 ? h.firstChild : b == 2 ? h : null ,
                e.forEach(function(a) {
                    if (g)
                        a = a.cloneNode(!0);
                    else if (!f)
                        return c(a).remove();
                    $(f.insertBefore(a, h), function(a) {
                        a.nodeName != null  && a.nodeName.toUpperCase() === "SCRIPT" && (!a.type || a.type === "text/javascript") && !a.src && window.eval.call(window, a.innerHTML)
                    }
                    )
                }
                )
            }
            )
        }
        ,
        c.fn[d ? a + "To" : "insert" + (b ? "Before" : "After")] = function(b) {
            return c(b)[a](this),
            this
        }
    }
    ),
    A.Z.prototype = c.fn,
    A.uniq = C,
    A.deserializeValue = Z,
    c.zepto = A,
    c
}
();
window.Zepto = Zepto,
window.$ === undefined && (window.$ = Zepto),
function() {
    "__proto__" in {} || $.extend($.zepto, {
        Z: function(a, b) {
            return a = a || [],
            $.extend(a, $.fn),
            a.selector = b || "",
            a.__Z = !0,
            a
        },
        isZ: function(a) {
            return $.type(a) === "array" && "__Z" in a
        }
    });
    try {
        getComputedStyle(undefined)
    } catch (a) {
        var b = getComputedStyle;
        window.getComputedStyle = function(a) {
            try {
                return b(a)
            } catch (c) {
                return null 
            }
        }
    }
}
(),
function(a) {
    function k(a) {
        return a._zid || (a._zid = c++)
    }
    function l(a, b, c, d) {
        b = m(b);
        if (b.ns)
            var e = n(b.ns);
        return (h[k(a)] || []).filter(function(a) {
            return a && (!b.e || a.e == b.e) && (!b.ns || e.test(a.ns)) && (!c || k(a.fn) === k(c)) && (!d || a.sel == d)
        }
        )
    }
    function m(a) {
        var b = ("" + a).split(".");
        return {
            e: b[0],
            ns: b.slice(1).sort().join(" ")
        }
    }
    function n(a) {
        return new RegExp("(?:^| )" + a.replace(" ", " .* ?") + "(?: |$)")
    }
    function o(a, b) {
        return a.del && (a.e == "focus" || a.e == "blur") || !!b
    }
    function p(a) {
        return j[a] || a
    }
    function q(b, c, e, f, g, i, l) {
        var n = k(b)
          , q = h[n] || (h[n] = []);
        c.split(/\s/).forEach(function(c) {
            if (c == "ready")
                return a(document).ready(e);
            var h = m(c);
            h.fn = e,
            h.sel = g,
            h.e in j && (e = function(b) {
                var c = b.relatedTarget;
                if (!c || c !== this && !a.contains(this, c))
                    return h.fn.apply(this, arguments)
            }
            ),
            h.del = i;
            var k = i || e;
            h.proxy = function(a) {
                a = w(a);
                if (a.isImmediatePropagationStopped())
                    return;
                a.data = f;
                var c = k.apply(b, a._args == d ? [a] : [a].concat(a._args));
                return c === !1 && (a.preventDefault(),
                a.stopPropagation()),
                c
            }
            ,
            h.i = q.length,
            q.push(h),
            "addEventListener" in b && b.addEventListener(p(h.e), h.proxy, o(h, l))
        }
        )
    }
    function r(a, b, c, d, e) {
        var f = k(a);
        (b || "").split(/\s/).forEach(function(b) {
            l(a, b, c, d).forEach(function(b) {
                delete h[f][b.i],
                "removeEventListener" in a && a.removeEventListener(p(b.e), b.proxy, o(b, e))
            }
            )
        }
        )
    }
    function w(b, c) {
        if (c || !b.isDefaultPrevented) {
            c || (c = b),
            a.each(v, function(a, d) {
                var e = c[a];
                b[a] = function() {
                    return this[d] = s,
                    e && e.apply(c, arguments)
                }
                ,
                b[d] = t
            }
            );
            if (c.defaultPrevented !== d ? c.defaultPrevented : c.getPreventDefault && c.getPreventDefault())
                b.isDefaultPrevented = s
        }
        return b
    }
    function x(a) {
        var b, c = {
            originalEvent: a
        };
        for (b in a)
            !u.test(b) && a[b] !== d && (c[b] = a[b]);
        return w(c, a)
    }
    var b = a.zepto.qsa, c = 1, d, e = Array.prototype.slice, f = a.isFunction, g = function(a) {
        return typeof a == "string"
    }
    , h = {}, i = {}, j = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    };
    i.click = i.mousedown = i.mouseup = i.mousemove = "MouseEvents",
    a.event = {
        add: q,
        remove: r
    },
    a.proxy = function(b, c) {
        if (f(b)) {
            var d = function() {
                return b.apply(c, arguments)
            }
            ;
            return d._zid = k(b),
            d
        }
        if (g(c))
            return a.proxy(b[c], b);
        throw new TypeError("expected function")
    }
    ,
    a.fn.bind = function(a, b, c) {
        return this.on(a, b, c)
    }
    ,
    a.fn.unbind = function(a, b) {
        return this.off(a, b)
    }
    ,
    a.fn.one = function(a, b, c, d) {
        return this.on(a, b, c, d, 1)
    }
    ;
    var s = function() {
        return !0
    }
      , t = function() {
        return !1
    }
      , u = /^([A-Z]|returnValue$|layer[XY]$)/
      , v = {
        preventDefault: "isDefaultPrevented",
        stopImmediatePropagation: "isImmediatePropagationStopped",
        stopPropagation: "isPropagationStopped"
    };
    a.fn.delegate = function(a, b, c) {
        return this.on(b, a, c)
    }
    ,
    a.fn.undelegate = function(a, b, c) {
        return this.off(b, a, c)
    }
    ,
    a.fn.live = function(b, c) {
        return a(document.body).delegate(this.selector, b, c),
        this
    }
    ,
    a.fn.die = function(b, c) {
        return a(document.body).undelegate(this.selector, b, c),
        this
    }
    ,
    a.fn.on = function(b, c, h, i, j) {
        var k, l, m = this;
        return b && !g(b) ? (a.each(b, function(a, b) {
            m.on(a, c, h, b, j)
        }
        ),
        m) : (!g(c) && !f(i) && (i = h,
        h = c,
        c = d),
        f(h) && (i = h,
        h = d),
        m.each(function(d, f) {
            j && (k = function(a) {
                return r(f, a.type, i),
                i.apply(this, arguments)
            }
            ),
            c && (l = function(b) {
                var d, g = a(b.target).closest(c, f).get(0);
                if (g)
                    return d = a.extend(x(b), {
                        currentTarget: g,
                        liveFired: f
                    }),
                    (k || i).apply(g, [d].concat(e.call(arguments, 1)))
            }
            ),
            q(f, b, i, h, c, l || k)
        }
        ))
    }
    ,
    a.fn.off = function(b, c, e) {
        var h = this;
        return b && !g(b) ? (a.each(b, function(a, b) {
            h.off(a, c, b)
        }
        ),
        h) : (!g(c) && !f(e) && (e = c,
        c = d),
        h.each(function() {
            r(this, b, e, c)
        }
        ))
    }
    ,
    a.fn.trigger = function(b, c) {
        return b = g(b) || a.isPlainObject(b) ? a.Event(b) : w(b),
        b._args = c,
        this.each(function() {
            "dispatchEvent" in this ? this.dispatchEvent(b) : a(this).triggerHandler(b, c)
        }
        )
    }
    ,
    a.fn.triggerHandler = function(b, c) {
        var d, e;
        return this.each(function(f, h) {
            d = x(g(b) ? a.Event(b) : b),
            d._args = c,
            d.target = h,
            a.each(l(h, b.type || b), function(a, b) {
                e = b.proxy(d);
                if (d.isImmediatePropagationStopped())
                    return !1
            }
            )
        }
        ),
        e
    }
    ,
    "focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(b) {
        a.fn[b] = function(a) {
            return a ? this.bind(b, a) : this.trigger(b)
        }
    }
    ),
    ["focus", "blur"].forEach(function(b) {
        a.fn[b] = function(a) {
            return a ? this.bind(b, a) : this.each(function() {
                try {
                    this[b]()
                } catch (a) {}
            }
            ),
            this
        }
    }
    ),
    a.Event = function(a, b) {
        g(a) || (b = a,
        a = b.type);
        var c = document.createEvent(i[a] || "Events")
          , d = !0;
        if (b)
            for (var e in b)
                e == "bubbles" ? d = !!b[e] : c[e] = b[e];
        return c.initEvent(a, d, !0),
        w(c)
    }
}
(Zepto),
function($) {
    function triggerAndReturn(a, b, c) {
        var d = $.Event(b);
        return $(a).trigger(d, c),
        !d.isDefaultPrevented()
    }
    function triggerGlobal(a, b, c, d) {
        if (a.global)
            return triggerAndReturn(b || document, c, d)
    }
    function ajaxStart(a) {
        a.global && $.active++ === 0 && triggerGlobal(a, null , "ajaxStart")
    }
    function ajaxStop(a) {
        a.global && !--$.active && triggerGlobal(a, null , "ajaxStop")
    }
    function ajaxBeforeSend(a, b) {
        var c = b.context;
        if (b.beforeSend.call(c, a, b) === !1 || triggerGlobal(b, c, "ajaxBeforeSend", [a, b]) === !1)
            return !1;
        triggerGlobal(b, c, "ajaxSend", [a, b])
    }
    function ajaxSuccess(a, b, c) {
        var d = c.context
          , e = "success";
        c.success.call(d, a, e, b),
        triggerGlobal(c, d, "ajaxSuccess", [b, c, a]),
        ajaxComplete(e, b, c)
    }
    function ajaxError(a, b, c, d) {
        var e = d.context;
        d.error.call(e, c, b, a),
        triggerGlobal(d, e, "ajaxError", [c, d, a || b]),
        ajaxComplete(b, c, d)
    }
    function ajaxComplete(a, b, c) {
        var d = c.context;
        c.complete.call(d, b, a),
        triggerGlobal(c, d, "ajaxComplete", [b, c]),
        ajaxStop(c)
    }
    function empty() {}
    function mimeToDataType(a) {
        return a && (a = a.split(";", 2)[0]),
        a && (a == htmlType ? "html" : a == jsonType ? "json" : scriptTypeRE.test(a) ? "script" : xmlTypeRE.test(a) && "xml") || "text"
    }
    function appendQuery(a, b) {
        return b == "" ? a : (a + "&" + b).replace(/[&?]{1,2}/, "?")
    }
    function serializeData(a) {
        a.processData && a.data && $.type(a.data) != "string" && (a.data = $.param(a.data, a.traditional)),
        a.data && (!a.type || a.type.toUpperCase() == "GET") && (a.url = appendQuery(a.url, a.data),
        a.data = null )
    }
    function parseArguments(a, b, c, d) {
        var e = !$.isFunction(b);
        return {
            url: a,
            data: e ? b : undefined,
            success: e ? $.isFunction(c) ? c : undefined : b,
            dataType: e ? d || c : c
        }
    }
    function serialize(a, b, c, d) {
        var e, f = $.isArray(b), g = $.isPlainObject(b);
        $.each(b, function(b, h) {
            e = $.type(h),
            d && (b = c ? d : d + "[" + (g || e == "object" || e == "array" ? b : "") + "]"),
            !d && f ? a.add(h.name, h.value) : e == "array" || !c && e == "object" ? serialize(a, h, c, b) : a.add(b, h)
        }
        )
    }
    var jsonpID = 0, document = window.document, key, name, rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, scriptTypeRE = /^(?:text|application)\/javascript/i, xmlTypeRE = /^(?:text|application)\/xml/i, jsonType = "application/json", htmlType = "text/html", blankRE = /^\s*$/;
    $.active = 0,
    $.ajaxJSONP = function(a) {
        if ("type" in a) {
            var b = a.jsonpCallback, c = ($.isFunction(b) ? b() : b) || "jsonp" + ++jsonpID, d = document.createElement("script"), e = window[c], f, g = function(a) {
                $(d).triggerHandler("error", a || "abort")
            }
            , h = {
                abort: g
            }, i;
            return $(d).on("load error", function(b, g) {
                clearTimeout(i),
                $(d).off().remove(),
                b.type == "error" || !f ? ajaxError(null , g || "error", h, a) : ajaxSuccess(f[0], h, a),
                window[c] = e,
                f && $.isFunction(e) && e(f[0]),
                e = f = undefined
            }
            ),
            ajaxBeforeSend(h, a) === !1 ? (g("abort"),
            !1) : (window[c] = function() {
                f = arguments
            }
            ,
            d.src = a.url.replace(/=\?/, "=" + c),
            document.head.appendChild(d),
            a.timeout > 0 && (i = setTimeout(function() {
                g("timeout")
            }
            , a.timeout)),
            h)
        }
        return $.ajax(a)
    }
    ,
    $.ajaxSettings = {
        type: "GET",
        beforeSend: empty,
        success: empty,
        error: empty,
        complete: empty,
        context: null ,
        global: !0,
        xhr: function() {
            return new window.XMLHttpRequest
        },
        accepts: {
            script: "text/javascript, application/javascript, application/x-javascript",
            json: jsonType,
            xml: "application/xml, text/xml",
            html: htmlType,
            text: "text/plain"
        },
        crossDomain: !1,
        timeout: 0,
        processData: !0,
        cache: !0
    },
    $.ajax = function(options) {
        var settings = $.extend({}, options || {});
        for (key in $.ajaxSettings)
            settings[key] === undefined && (settings[key] = $.ajaxSettings[key]);
        ajaxStart(settings),
        settings.crossDomain || (settings.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(settings.url) && RegExp.$2 != window.location.host),
        settings.url || (settings.url = window.location.toString()),
        serializeData(settings),
        settings.cache === !1 && (settings.url = appendQuery(settings.url, "_=" + Date.now()));
        var dataType = settings.dataType
          , hasPlaceholder = /=\?/.test(settings.url);
        if (dataType == "jsonp" || hasPlaceholder)
            return hasPlaceholder || (settings.url = appendQuery(settings.url, settings.jsonp ? settings.jsonp + "=?" : settings.jsonp === !1 ? "" : "callback=?")),
            $.ajaxJSONP(settings);
        var mime = settings.accepts[dataType], baseHeaders = {}, protocol = /^([\w-]+:)\/\//.test(settings.url) ? RegExp.$1 : window.location.protocol, xhr = settings.xhr(), abortTimeout;
        settings.crossDomain || (baseHeaders["X-Requested-With"] = "XMLHttpRequest"),
        baseHeaders.Accept = mime || "*/*";
        if (mime = settings.mimeType || mime)
            mime.indexOf(",") > -1 && (mime = mime.split(",", 2)[0]),
            xhr.overrideMimeType && xhr.overrideMimeType(mime);
        if (settings.contentType || settings.contentType !== !1 && settings.data && settings.type.toUpperCase() != "GET")
            baseHeaders["Content-Type"] = settings.contentType || "application/x-www-form-urlencoded";
        settings.headers = $.extend(baseHeaders, settings.headers || {}),
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                xhr.onreadystatechange = empty,
                clearTimeout(abortTimeout);
                var result, error = !1;
                if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304 || xhr.status == 0 && protocol == "file:") {
                    dataType = dataType || mimeToDataType(settings.mimeType || xhr.getResponseHeader("content-type")),
                    result = xhr.responseText;
                    try {
                        dataType == "script" ? (1,
                        eval)(result) : dataType == "xml" ? result = xhr.responseXML : dataType == "json" && (result = blankRE.test(result) ? null  : $.parseJSON(result))
                    } catch (e) {
                        error = e
                    }
                    error ? ajaxError(error, "parsererror", xhr, settings) : ajaxSuccess(result, xhr, settings)
                } else
                    ajaxError(xhr.statusText || null , xhr.status ? "error" : "abort", xhr, settings)
            }
        }
        ;
        if (ajaxBeforeSend(xhr, settings) === !1)
            return xhr.abort(),
            !1;
        if (settings.xhrFields)
            for (name in settings.xhrFields)
                xhr[name] = settings.xhrFields[name];
        var async = "async" in settings ? settings.async : !0;
        xhr.open(settings.type, settings.url, async);
        for (name in settings.headers)
            xhr.setRequestHeader(name, settings.headers[name]);
        return settings.timeout > 0 && (abortTimeout = setTimeout(function() {
            xhr.onreadystatechange = empty,
            xhr.abort(),
            ajaxError(null , "timeout", xhr, settings)
        }
        , settings.timeout)),
        xhr.send(settings.data ? settings.data : null ),
        xhr
    }
    ,
    $.get = function(a, b, c, d) {
        return $.ajax(parseArguments.apply(null , arguments))
    }
    ,
    $.post = function(a, b, c, d) {
        var e = parseArguments.apply(null , arguments);
        return e.type = "POST",
        $.ajax(e)
    }
    ,
    $.getJSON = function(a, b, c) {
        var d = parseArguments.apply(null , arguments);
        return d.dataType = "json",
        $.ajax(d)
    }
    ,
    $.fn.load = function(a, b, c) {
        if (!this.length)
            return this;
        var d = this, e = a.split(/\s/), f, g = parseArguments(a, b, c), h = g.success;
        return e.length > 1 && (g.url = e[0],
        f = e[1]),
        g.success = function(a) {
            d.html(f ? $("<div>").html(a.replace(rscript, "")).find(f) : a),
            h && h.apply(d, arguments)
        }
        ,
        $.ajax(g),
        this
    }
    ;
    var escape = encodeURIComponent;
    $.param = function(a, b) {
        var c = [];
        return c.add = function(a, b) {
            this.push(escape(a) + "=" + escape(b))
        }
        ,
        serialize(c, a, b),
        c.join("&").replace(/%20/g, "+")
    }
}
(Zepto),
function(a) {
    function b(a) {
        var b = this.os = {}
          , c = this.browser = {}
          , d = a.match(/Web[kK]it[\/]{0,1}([\d.]+)/)
          , e = a.match(/(Android);?[\s\/]+([\d.]+)?/)
          , f = a.match(/(iPad).*OS\s([\d_]+)/)
          , g = a.match(/(iPod)(.*OS\s([\d_]+))?/)
          , h = !f && a.match(/(iPhone\sOS)\s([\d_]+)/)
          , i = a.match(/(webOS|hpwOS)[\s\/]([\d.]+)/)
          , j = i && a.match(/TouchPad/)
          , k = a.match(/Kindle\/([\d.]+)/)
          , l = a.match(/Silk\/([\d._]+)/)
          , m = a.match(/(BlackBerry).*Version\/([\d.]+)/)
          , n = a.match(/(BB10).*Version\/([\d.]+)/)
          , o = a.match(/(RIM\sTablet\sOS)\s([\d.]+)/)
          , p = a.match(/PlayBook/)
          , q = a.match(/Chrome\/([\d.]+)/) || a.match(/CriOS\/([\d.]+)/)
          , r = a.match(/Firefox\/([\d.]+)/)
          , s = a.match(/MSIE ([\d.]+)/)
          , t = d && a.match(/Mobile\//) && !q
          , u = a.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/) && !q
          , s = a.match(/MSIE\s([\d.]+)/);
        if (c.webkit = !!d)
            c.version = d[1];
        e && (b.android = !0,
        b.version = e[2]),
        h && !g && (b.ios = b.iphone = !0,
        b.version = h[2].replace(/_/g, ".")),
        f && (b.ios = b.ipad = !0,
        b.version = f[2].replace(/_/g, ".")),
        g && (b.ios = b.ipod = !0,
        b.version = g[3] ? g[3].replace(/_/g, ".") : null ),
        i && (b.webos = !0,
        b.version = i[2]),
        j && (b.touchpad = !0),
        m && (b.blackberry = !0,
        b.version = m[2]),
        n && (b.bb10 = !0,
        b.version = n[2]),
        o && (b.rimtabletos = !0,
        b.version = o[2]),
        p && (c.playbook = !0),
        k && (b.kindle = !0,
        b.version = k[1]),
        l && (c.silk = !0,
        c.version = l[1]),
        !l && b.android && a.match(/Kindle Fire/) && (c.silk = !0),
        q && (c.chrome = !0,
        c.version = q[1]),
        r && (c.firefox = !0,
        c.version = r[1]),
        s && (c.ie = !0,
        c.version = s[1]),
        t && (a.match(/Safari/) || !!b.ios) && (c.safari = !0),
        u && (c.webview = !0),
        s && (c.ie = !0,
        c.version = s[1]),
        b.tablet = !!(f || p || e && !a.match(/Mobile/) || r && a.match(/Tablet/) || s && !a.match(/Phone/) && a.match(/Touch/)),
        b.phone = !!(!b.tablet && !b.ipod && (e || h || i || m || n || q && a.match(/Android/) || q && a.match(/CriOS\/([\d.]+)/) || r && a.match(/Mobile/) || s && a.match(/Touch/)))
    }
    b.call(a, navigator.userAgent),
    a.__detect = b
}
(Zepto),
function(a, b) {
    function u(a) {
        return a.replace(/([a-z])([A-Z])/, "$1-$2").toLowerCase()
    }
    function v(a) {
        return d ? d + a : a.toLowerCase()
    }
    var c = "", d, e, f, g = {
        Webkit: "webkit",
        Moz: "",
        O: "o"
    }, h = window.document, i = h.createElement("div"), j = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i, k, l, m, n, o, p, q, r, s, t = {};
    a.each(g, function(a, e) {
        if (i.style[a + "TransitionProperty"] !== b)
            return c = "-" + a.toLowerCase() + "-",
            d = e,
            !1
    }
    ),
    k = c + "transform",
    t[l = c + "transition-property"] = t[m = c + "transition-duration"] = t[o = c + "transition-delay"] = t[n = c + "transition-timing-function"] = t[p = c + "animation-name"] = t[q = c + "animation-duration"] = t[s = c + "animation-delay"] = t[r = c + "animation-timing-function"] = "",
    a.fx = {
        off: d === b && i.style.transitionProperty === b,
        speeds: {
            _default: 400,
            fast: 200,
            slow: 600
        },
        cssPrefix: c,
        transitionEnd: v("TransitionEnd"),
        animationEnd: v("AnimationEnd")
    },
    a.fn.animate = function(c, d, e, f, g) {
        return a.isFunction(d) && (f = d,
        e = b,
        d = b),
        a.isFunction(e) && (f = e,
        e = b),
        a.isPlainObject(d) && (e = d.easing,
        f = d.complete,
        g = d.delay,
        d = d.duration),
        d && (d = (typeof d == "number" ? d : a.fx.speeds[d] || a.fx.speeds._default) / 1e3),
        g && (g = parseFloat(g) / 1e3),
        this.anim(c, d, e, f, g)
    }
    ,
    a.fn.anim = function(c, d, e, f, g) {
        var h, i = {}, v, w = "", x = this, y, z = a.fx.transitionEnd, A = !1;
        d === b && (d = a.fx.speeds._default / 1e3),
        g === b && (g = 0),
        a.fx.off && (d = 0);
        if (typeof c == "string")
            i[p] = c,
            i[q] = d + "s",
            i[s] = g + "s",
            i[r] = e || "linear",
            z = a.fx.animationEnd;
        else {
            v = [];
            for (h in c)
                j.test(h) ? w += h + "(" + c[h] + ") " : (i[h] = c[h],
                v.push(u(h)));
            w && (i[k] = w,
            v.push(k)),
            d > 0 && typeof c == "object" && (i[l] = v.join(", "),
            i[m] = d + "s",
            i[o] = g + "s",
            i[n] = e || "linear")
        }
        return y = function(b) {
            if (typeof b != "undefined") {
                if (b.target !== b.currentTarget)
                    return;
                a(b.target).unbind(z, y)
            } else
                a(this).unbind(z, y);
            A = !0,
            a(this).css(t),
            f && f.call(this)
        }
        ,
        d > 0 && (this.bind(z, y),
        setTimeout(function() {
            if (A)
                return;
            y.call(x)
        }
        , d * 1e3 + 25)),
        this.size() && this.get(0).clientLeft,
        this.css(i),
        d <= 0 && setTimeout(function() {
            x.each(function() {
                y.call(this)
            }
            )
        }
        , 0),
        this
    }
    ,
    i = null 
}
(Zepto),
function(a) {
    function i(a, b, c, d) {
        return Math.abs(a - b) >= Math.abs(c - d) ? a - b > 0 ? "Left" : "Right" : c - d > 0 ? "Up" : "Down"
    }
    function j() {
        f = null ,
        b.last && (b.el.trigger("longTap"),
        b = {})
    }
    function k() {
        f && clearTimeout(f),
        f = null 
    }
    function l() {
        c && clearTimeout(c),
        d && clearTimeout(d),
        e && clearTimeout(e),
        f && clearTimeout(f),
        c = d = e = f = null ,
        b = {}
    }
    function m(a) {
        return (a.pointerType == "touch" || a.pointerType == a.MSPOINTER_TYPE_TOUCH) && a.isPrimary
    }
    function n(a, b) {
        return a.type == "pointer" + b || a.type.toLowerCase() == "mspointer" + b
    }
    var b = {}, c, d, e, f, g = 750, h;
    a(document).ready(function() {
        var o, p, q = 0, r = 0, s, t;
        "MSGesture" in window && (h = new MSGesture,
        h.target = document.body),
        a(document).bind("MSGestureEnd", function(a) {
            var c = a.velocityX > 1 ? "Right" : a.velocityX < -1 ? "Left" : a.velocityY > 1 ? "Down" : a.velocityY < -1 ? "Up" : null ;
            c && (b.el.trigger("swipe"),
            b.el.trigger("swipe" + c))
        }
        ).on("touchstart MSPointerDown pointerdown", function(d) {
            if ((t = n(d, "down")) && !m(d))
                return;
            s = t ? d : d.touches[0],
            d.touches && d.touches.length === 1 && b.x2 && (b.x2 = undefined,
            b.y2 = undefined),
            o = Date.now(),
            p = o - (b.last || o),
            b.el = a("tagName" in s.target ? s.target : s.target.parentNode),
            c && clearTimeout(c),
            b.x1 = s.pageX,
            b.y1 = s.pageY,
            p > 0 && p <= 250 && (b.isDoubleTap = !0),
            b.last = o,
            f = setTimeout(j, g),
            h && t && h.addPointer(d.pointerId)
        }
        ).on("touchmove MSPointerMove pointermove", function(a) {
            if ((t = n(a, "move")) && !m(a))
                return;
            s = t ? a : a.touches[0],
            k(),
            b.x2 = s.pageX,
            b.y2 = s.pageY,
            q += Math.abs(b.x1 - b.x2),
            r += Math.abs(b.y1 - b.y2)
        }
        ).on("touchend MSPointerUp pointerup", function(f) {
            if ((t = n(f, "up")) && !m(f))
                return;
            k(),
            b.x2 && Math.abs(b.x1 - b.x2) > 30 || b.y2 && Math.abs(b.y1 - b.y2) > 30 ? e = setTimeout(function() {
                b.el.trigger("swipe"),
                b.el.trigger("swipe" + i(b.x1, b.x2, b.y1, b.y2)),
                b = {}
            }
            , 0) : "last" in b && (q < 30 && r < 30 ? d = setTimeout(function() {
                var d = a.Event("tap");
                d.cancelTouch = l,
                b.el.trigger(d),
                b.isDoubleTap ? (b.el && b.el.trigger("doubleTap"),
                b = {}) : c = setTimeout(function() {
                    c = null ,
                    b.el && b.el.trigger("singleTap"),
                    b = {}
                }
                , 250)
            }
            , 0) : b = {}),
            q = r = 0
        }
        ).on("touchcancel MSPointerCancel pointercancel", l),
        a(window).on("scroll", l)
    }
    ),
    ["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"].forEach(function(b) {
        a[b] = function(a) {
            return this.on(b, a)
        }
    }
    )
}
(Zepto)
