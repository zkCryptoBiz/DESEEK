(function() {
    const i = document.createElement("link").relList;
    if (i && i.supports && i.supports("modulepreload")) return;
    for (const c of document.querySelectorAll('link[rel="modulepreload"]')) l(c);
    new MutationObserver(c => {
        for (const d of c)
            if (d.type === "childList")
                for (const f of d.addedNodes) f.tagName === "LINK" && f.rel === "modulepreload" && l(f)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function s(c) {
        const d = {};
        return c.integrity && (d.integrity = c.integrity), c.referrerPolicy && (d.referrerPolicy = c.referrerPolicy), c.crossOrigin === "use-credentials" ? d.credentials = "include" : c.crossOrigin === "anonymous" ? d.credentials = "omit" : d.credentials = "same-origin", d
    }

    function l(c) {
        if (c.ep) return;
        c.ep = !0;
        const d = s(c);
        fetch(c.href, d)
    }
})();

function ey(r) {
    return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r
}
var Gl = {
        exports: {}
    },
    ri = {},
    Xl = {
        exports: {}
    },
    se = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var td;

function ty() {
    if (td) return se;
    td = 1;
    var r = Symbol.for("react.element"),
        i = Symbol.for("react.portal"),
        s = Symbol.for("react.fragment"),
        l = Symbol.for("react.strict_mode"),
        c = Symbol.for("react.profiler"),
        d = Symbol.for("react.provider"),
        f = Symbol.for("react.context"),
        p = Symbol.for("react.forward_ref"),
        m = Symbol.for("react.suspense"),
        g = Symbol.for("react.memo"),
        v = Symbol.for("react.lazy"),
        x = Symbol.iterator;

    function P(T) {
        return T === null || typeof T != "object" ? null : (T = x && T[x] || T["@@iterator"], typeof T == "function" ? T : null)
    }
    var A = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        },
        _ = Object.assign,
        R = {};

    function V(T, M, re) {
        this.props = T, this.context = M, this.refs = R, this.updater = re || A
    }
    V.prototype.isReactComponent = {}, V.prototype.setState = function(T, M) {
        if (typeof T != "object" && typeof T != "function" && T != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, T, M, "setState")
    }, V.prototype.forceUpdate = function(T) {
        this.updater.enqueueForceUpdate(this, T, "forceUpdate")
    };

    function I() {}
    I.prototype = V.prototype;

    function W(T, M, re) {
        this.props = T, this.context = M, this.refs = R, this.updater = re || A
    }
    var K = W.prototype = new I;
    K.constructor = W, _(K, V.prototype), K.isPureReactComponent = !0;
    var ee = Array.isArray,
        X = Object.prototype.hasOwnProperty,
        ne = {
            current: null
        },
        ae = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };

    function Z(T, M, re) {
        var oe, ue = {},
            ce = null,
            pe = null;
        if (M != null)
            for (oe in M.ref !== void 0 && (pe = M.ref), M.key !== void 0 && (ce = "" + M.key), M) X.call(M, oe) && !ae.hasOwnProperty(oe) && (ue[oe] = M[oe]);
        var de = arguments.length - 2;
        if (de === 1) ue.children = re;
        else if (1 < de) {
            for (var xe = Array(de), st = 0; st < de; st++) xe[st] = arguments[st + 2];
            ue.children = xe
        }
        if (T && T.defaultProps)
            for (oe in de = T.defaultProps, de) ue[oe] === void 0 && (ue[oe] = de[oe]);
        return {
            $$typeof: r,
            type: T,
            key: ce,
            ref: pe,
            props: ue,
            _owner: ne.current
        }
    }

    function Se(T, M) {
        return {
            $$typeof: r,
            type: T.type,
            key: M,
            ref: T.ref,
            props: T.props,
            _owner: T._owner
        }
    }

    function Ce(T) {
        return typeof T == "object" && T !== null && T.$$typeof === r
    }

    function qe(T) {
        var M = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + T.replace(/[=:]/g, function(re) {
            return M[re]
        })
    }
    var it = /\/+/g;

    function Ge(T, M) {
        return typeof T == "object" && T !== null && T.key != null ? qe("" + T.key) : M.toString(36)
    }

    function Ze(T, M, re, oe, ue) {
        var ce = typeof T;
        (ce === "undefined" || ce === "boolean") && (T = null);
        var pe = !1;
        if (T === null) pe = !0;
        else switch (ce) {
            case "string":
            case "number":
                pe = !0;
                break;
            case "object":
                switch (T.$$typeof) {
                    case r:
                    case i:
                        pe = !0
                }
        }
        if (pe) return pe = T, ue = ue(pe), T = oe === "" ? "." + Ge(pe, 0) : oe, ee(ue) ? (re = "", T != null && (re = T.replace(it, "$&/") + "/"), Ze(ue, M, re, "", function(st) {
            return st
        })) : ue != null && (Ce(ue) && (ue = Se(ue, re + (!ue.key || pe && pe.key === ue.key ? "" : ("" + ue.key).replace(it, "$&/") + "/") + T)), M.push(ue)), 1;
        if (pe = 0, oe = oe === "" ? "." : oe + ":", ee(T))
            for (var de = 0; de < T.length; de++) {
                ce = T[de];
                var xe = oe + Ge(ce, de);
                pe += Ze(ce, M, re, xe, ue)
            } else if (xe = P(T), typeof xe == "function")
                for (T = xe.call(T), de = 0; !(ce = T.next()).done;) ce = ce.value, xe = oe + Ge(ce, de++), pe += Ze(ce, M, re, xe, ue);
            else if (ce === "object") throw M = String(T), Error("Objects are not valid as a React child (found: " + (M === "[object Object]" ? "object with keys {" + Object.keys(T).join(", ") + "}" : M) + "). If you meant to render a collection of children, use an array instead.");
        return pe
    }

    function wt(T, M, re) {
        if (T == null) return T;
        var oe = [],
            ue = 0;
        return Ze(T, oe, "", "", function(ce) {
            return M.call(re, ce, ue++)
        }), oe
    }

    function Xe(T) {
        if (T._status === -1) {
            var M = T._result;
            M = M(), M.then(function(re) {
                (T._status === 0 || T._status === -1) && (T._status = 1, T._result = re)
            }, function(re) {
                (T._status === 0 || T._status === -1) && (T._status = 2, T._result = re)
            }), T._status === -1 && (T._status = 0, T._result = M)
        }
        if (T._status === 1) return T._result.default;
        throw T._result
    }
    var ie = {
            current: null
        },
        F = {
            transition: null
        },
        Q = {
            ReactCurrentDispatcher: ie,
            ReactCurrentBatchConfig: F,
            ReactCurrentOwner: ne
        };

    function B() {
        throw Error("act(...) is not supported in production builds of React.")
    }
    return se.Children = {
        map: wt,
        forEach: function(T, M, re) {
            wt(T, function() {
                M.apply(this, arguments)
            }, re)
        },
        count: function(T) {
            var M = 0;
            return wt(T, function() {
                M++
            }), M
        },
        toArray: function(T) {
            return wt(T, function(M) {
                return M
            }) || []
        },
        only: function(T) {
            if (!Ce(T)) throw Error("React.Children.only expected to receive a single React element child.");
            return T
        }
    }, se.Component = V, se.Fragment = s, se.Profiler = c, se.PureComponent = W, se.StrictMode = l, se.Suspense = m, se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Q, se.act = B, se.cloneElement = function(T, M, re) {
        if (T == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + T + ".");
        var oe = _({}, T.props),
            ue = T.key,
            ce = T.ref,
            pe = T._owner;
        if (M != null) {
            if (M.ref !== void 0 && (ce = M.ref, pe = ne.current), M.key !== void 0 && (ue = "" + M.key), T.type && T.type.defaultProps) var de = T.type.defaultProps;
            for (xe in M) X.call(M, xe) && !ae.hasOwnProperty(xe) && (oe[xe] = M[xe] === void 0 && de !== void 0 ? de[xe] : M[xe])
        }
        var xe = arguments.length - 2;
        if (xe === 1) oe.children = re;
        else if (1 < xe) {
            de = Array(xe);
            for (var st = 0; st < xe; st++) de[st] = arguments[st + 2];
            oe.children = de
        }
        return {
            $$typeof: r,
            type: T.type,
            key: ue,
            ref: ce,
            props: oe,
            _owner: pe
        }
    }, se.createContext = function(T) {
        return T = {
            $$typeof: f,
            _currentValue: T,
            _currentValue2: T,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        }, T.Provider = {
            $$typeof: d,
            _context: T
        }, T.Consumer = T
    }, se.createElement = Z, se.createFactory = function(T) {
        var M = Z.bind(null, T);
        return M.type = T, M
    }, se.createRef = function() {
        return {
            current: null
        }
    }, se.forwardRef = function(T) {
        return {
            $$typeof: p,
            render: T
        }
    }, se.isValidElement = Ce, se.lazy = function(T) {
        return {
            $$typeof: v,
            _payload: {
                _status: -1,
                _result: T
            },
            _init: Xe
        }
    }, se.memo = function(T, M) {
        return {
            $$typeof: g,
            type: T,
            compare: M === void 0 ? null : M
        }
    }, se.startTransition = function(T) {
        var M = F.transition;
        F.transition = {};
        try {
            T()
        } finally {
            F.transition = M
        }
    }, se.unstable_act = B, se.useCallback = function(T, M) {
        return ie.current.useCallback(T, M)
    }, se.useContext = function(T) {
        return ie.current.useContext(T)
    }, se.useDebugValue = function() {}, se.useDeferredValue = function(T) {
        return ie.current.useDeferredValue(T)
    }, se.useEffect = function(T, M) {
        return ie.current.useEffect(T, M)
    }, se.useId = function() {
        return ie.current.useId()
    }, se.useImperativeHandle = function(T, M, re) {
        return ie.current.useImperativeHandle(T, M, re)
    }, se.useInsertionEffect = function(T, M) {
        return ie.current.useInsertionEffect(T, M)
    }, se.useLayoutEffect = function(T, M) {
        return ie.current.useLayoutEffect(T, M)
    }, se.useMemo = function(T, M) {
        return ie.current.useMemo(T, M)
    }, se.useReducer = function(T, M, re) {
        return ie.current.useReducer(T, M, re)
    }, se.useRef = function(T) {
        return ie.current.useRef(T)
    }, se.useState = function(T) {
        return ie.current.useState(T)
    }, se.useSyncExternalStore = function(T, M, re) {
        return ie.current.useSyncExternalStore(T, M, re)
    }, se.useTransition = function() {
        return ie.current.useTransition()
    }, se.version = "18.3.1", se
}
var nd;

function Aa() {
    return nd || (nd = 1, Xl.exports = ty()), Xl.exports
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rd;

function ny() {
    if (rd) return ri;
    rd = 1;
    var r = Aa(),
        i = Symbol.for("react.element"),
        s = Symbol.for("react.fragment"),
        l = Object.prototype.hasOwnProperty,
        c = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        d = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };

    function f(p, m, g) {
        var v, x = {},
            P = null,
            A = null;
        g !== void 0 && (P = "" + g), m.key !== void 0 && (P = "" + m.key), m.ref !== void 0 && (A = m.ref);
        for (v in m) l.call(m, v) && !d.hasOwnProperty(v) && (x[v] = m[v]);
        if (p && p.defaultProps)
            for (v in m = p.defaultProps, m) x[v] === void 0 && (x[v] = m[v]);
        return {
            $$typeof: i,
            type: p,
            key: P,
            ref: A,
            props: x,
            _owner: c.current
        }
    }
    return ri.Fragment = s, ri.jsx = f, ri.jsxs = f, ri
}
var id;

function ry() {
    return id || (id = 1, Gl.exports = ny()), Gl.exports
}
var j = ry(),
    te = Aa();
const _n = ey(te);
var Ns = {},
    Ql = {
        exports: {}
    },
    rt = {},
    Yl = {
        exports: {}
    },
    ql = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sd;

function iy() {
    return sd || (sd = 1, function(r) {
        function i(F, Q) {
            var B = F.length;
            F.push(Q);
            e: for (; 0 < B;) {
                var T = B - 1 >>> 1,
                    M = F[T];
                if (0 < c(M, Q)) F[T] = Q, F[B] = M, B = T;
                else break e
            }
        }

        function s(F) {
            return F.length === 0 ? null : F[0]
        }

        function l(F) {
            if (F.length === 0) return null;
            var Q = F[0],
                B = F.pop();
            if (B !== Q) {
                F[0] = B;
                e: for (var T = 0, M = F.length, re = M >>> 1; T < re;) {
                    var oe = 2 * (T + 1) - 1,
                        ue = F[oe],
                        ce = oe + 1,
                        pe = F[ce];
                    if (0 > c(ue, B)) ce < M && 0 > c(pe, ue) ? (F[T] = pe, F[ce] = B, T = ce) : (F[T] = ue, F[oe] = B, T = oe);
                    else if (ce < M && 0 > c(pe, B)) F[T] = pe, F[ce] = B, T = ce;
                    else break e
                }
            }
            return Q
        }

        function c(F, Q) {
            var B = F.sortIndex - Q.sortIndex;
            return B !== 0 ? B : F.id - Q.id
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
            var d = performance;
            r.unstable_now = function() {
                return d.now()
            }
        } else {
            var f = Date,
                p = f.now();
            r.unstable_now = function() {
                return f.now() - p
            }
        }
        var m = [],
            g = [],
            v = 1,
            x = null,
            P = 3,
            A = !1,
            _ = !1,
            R = !1,
            V = typeof setTimeout == "function" ? setTimeout : null,
            I = typeof clearTimeout == "function" ? clearTimeout : null,
            W = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

        function K(F) {
            for (var Q = s(g); Q !== null;) {
                if (Q.callback === null) l(g);
                else if (Q.startTime <= F) l(g), Q.sortIndex = Q.expirationTime, i(m, Q);
                else break;
                Q = s(g)
            }
        }

        function ee(F) {
            if (R = !1, K(F), !_)
                if (s(m) !== null) _ = !0, Xe(X);
                else {
                    var Q = s(g);
                    Q !== null && ie(ee, Q.startTime - F)
                }
        }

        function X(F, Q) {
            _ = !1, R && (R = !1, I(Z), Z = -1), A = !0;
            var B = P;
            try {
                for (K(Q), x = s(m); x !== null && (!(x.expirationTime > Q) || F && !qe());) {
                    var T = x.callback;
                    if (typeof T == "function") {
                        x.callback = null, P = x.priorityLevel;
                        var M = T(x.expirationTime <= Q);
                        Q = r.unstable_now(), typeof M == "function" ? x.callback = M : x === s(m) && l(m), K(Q)
                    } else l(m);
                    x = s(m)
                }
                if (x !== null) var re = !0;
                else {
                    var oe = s(g);
                    oe !== null && ie(ee, oe.startTime - Q), re = !1
                }
                return re
            } finally {
                x = null, P = B, A = !1
            }
        }
        var ne = !1,
            ae = null,
            Z = -1,
            Se = 5,
            Ce = -1;

        function qe() {
            return !(r.unstable_now() - Ce < Se)
        }

        function it() {
            if (ae !== null) {
                var F = r.unstable_now();
                Ce = F;
                var Q = !0;
                try {
                    Q = ae(!0, F)
                } finally {
                    Q ? Ge() : (ne = !1, ae = null)
                }
            } else ne = !1
        }
        var Ge;
        if (typeof W == "function") Ge = function() {
            W(it)
        };
        else if (typeof MessageChannel < "u") {
            var Ze = new MessageChannel,
                wt = Ze.port2;
            Ze.port1.onmessage = it, Ge = function() {
                wt.postMessage(null)
            }
        } else Ge = function() {
            V(it, 0)
        };

        function Xe(F) {
            ae = F, ne || (ne = !0, Ge())
        }

        function ie(F, Q) {
            Z = V(function() {
                F(r.unstable_now())
            }, Q)
        }
        r.unstable_IdlePriority = 5, r.unstable_ImmediatePriority = 1, r.unstable_LowPriority = 4, r.unstable_NormalPriority = 3, r.unstable_Profiling = null, r.unstable_UserBlockingPriority = 2, r.unstable_cancelCallback = function(F) {
            F.callback = null
        }, r.unstable_continueExecution = function() {
            _ || A || (_ = !0, Xe(X))
        }, r.unstable_forceFrameRate = function(F) {
            0 > F || 125 < F ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Se = 0 < F ? Math.floor(1e3 / F) : 5
        }, r.unstable_getCurrentPriorityLevel = function() {
            return P
        }, r.unstable_getFirstCallbackNode = function() {
            return s(m)
        }, r.unstable_next = function(F) {
            switch (P) {
                case 1:
                case 2:
                case 3:
                    var Q = 3;
                    break;
                default:
                    Q = P
            }
            var B = P;
            P = Q;
            try {
                return F()
            } finally {
                P = B
            }
        }, r.unstable_pauseExecution = function() {}, r.unstable_requestPaint = function() {}, r.unstable_runWithPriority = function(F, Q) {
            switch (F) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    F = 3
            }
            var B = P;
            P = F;
            try {
                return Q()
            } finally {
                P = B
            }
        }, r.unstable_scheduleCallback = function(F, Q, B) {
            var T = r.unstable_now();
            switch (typeof B == "object" && B !== null ? (B = B.delay, B = typeof B == "number" && 0 < B ? T + B : T) : B = T, F) {
                case 1:
                    var M = -1;
                    break;
                case 2:
                    M = 250;
                    break;
                case 5:
                    M = 1073741823;
                    break;
                case 4:
                    M = 1e4;
                    break;
                default:
                    M = 5e3
            }
            return M = B + M, F = {
                id: v++,
                callback: Q,
                priorityLevel: F,
                startTime: B,
                expirationTime: M,
                sortIndex: -1
            }, B > T ? (F.sortIndex = B, i(g, F), s(m) === null && F === s(g) && (R ? (I(Z), Z = -1) : R = !0, ie(ee, B - T))) : (F.sortIndex = M, i(m, F), _ || A || (_ = !0, Xe(X))), F
        }, r.unstable_shouldYield = qe, r.unstable_wrapCallback = function(F) {
            var Q = P;
            return function() {
                var B = P;
                P = Q;
                try {
                    return F.apply(this, arguments)
                } finally {
                    P = B
                }
            }
        }
    }(ql)), ql
}
var od;

function sy() {
    return od || (od = 1, Yl.exports = iy()), Yl.exports
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ld;

function oy() {
    if (ld) return rt;
    ld = 1;
    var r = Aa(),
        i = sy();

    function s(e) {
        for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    var l = new Set,
        c = {};

    function d(e, t) {
        f(e, t), f(e + "Capture", t)
    }

    function f(e, t) {
        for (c[e] = t, e = 0; e < t.length; e++) l.add(t[e])
    }
    var p = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
        m = Object.prototype.hasOwnProperty,
        g = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        v = {},
        x = {};

    function P(e) {
        return m.call(x, e) ? !0 : m.call(v, e) ? !1 : g.test(e) ? x[e] = !0 : (v[e] = !0, !1)
    }

    function A(e, t, n, o) {
        if (n !== null && n.type === 0) return !1;
        switch (typeof t) {
            case "function":
            case "symbol":
                return !0;
            case "boolean":
                return o ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
            default:
                return !1
        }
    }

    function _(e, t, n, o) {
        if (t === null || typeof t > "u" || A(e, t, n, o)) return !0;
        if (o) return !1;
        if (n !== null) switch (n.type) {
            case 3:
                return !t;
            case 4:
                return t === !1;
            case 5:
                return isNaN(t);
            case 6:
                return isNaN(t) || 1 > t
        }
        return !1
    }

    function R(e, t, n, o, a, u, h) {
        this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = o, this.attributeNamespace = a, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = u, this.removeEmptyString = h
    }
    var V = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
        V[e] = new R(e, 0, !1, e, null, !1, !1)
    }), [
        ["acceptCharset", "accept-charset"],
        ["className", "class"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"]
    ].forEach(function(e) {
        var t = e[0];
        V[t] = new R(t, 1, !1, e[1], null, !1, !1)
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
        V[e] = new R(e, 2, !1, e.toLowerCase(), null, !1, !1)
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
        V[e] = new R(e, 2, !1, e, null, !1, !1)
    }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
        V[e] = new R(e, 3, !1, e.toLowerCase(), null, !1, !1)
    }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
        V[e] = new R(e, 3, !0, e, null, !1, !1)
    }), ["capture", "download"].forEach(function(e) {
        V[e] = new R(e, 4, !1, e, null, !1, !1)
    }), ["cols", "rows", "size", "span"].forEach(function(e) {
        V[e] = new R(e, 6, !1, e, null, !1, !1)
    }), ["rowSpan", "start"].forEach(function(e) {
        V[e] = new R(e, 5, !1, e.toLowerCase(), null, !1, !1)
    });
    var I = /[\-:]([a-z])/g;

    function W(e) {
        return e[1].toUpperCase()
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
        var t = e.replace(I, W);
        V[t] = new R(t, 1, !1, e, null, !1, !1)
    }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
        var t = e.replace(I, W);
        V[t] = new R(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
    }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
        var t = e.replace(I, W);
        V[t] = new R(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
        V[e] = new R(e, 1, !1, e.toLowerCase(), null, !1, !1)
    }), V.xlinkHref = new R("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
        V[e] = new R(e, 1, !1, e.toLowerCase(), null, !0, !0)
    });

    function K(e, t, n, o) {
        var a = V.hasOwnProperty(t) ? V[t] : null;
        (a !== null ? a.type !== 0 : o || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (_(t, n, a, o) && (n = null), o || a === null ? P(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = n === null ? a.type === 3 ? !1 : "" : n : (t = a.attributeName, o = a.attributeNamespace, n === null ? e.removeAttribute(t) : (a = a.type, n = a === 3 || a === 4 && n === !0 ? "" : "" + n, o ? e.setAttributeNS(o, t, n) : e.setAttribute(t, n))))
    }
    var ee = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
        X = Symbol.for("react.element"),
        ne = Symbol.for("react.portal"),
        ae = Symbol.for("react.fragment"),
        Z = Symbol.for("react.strict_mode"),
        Se = Symbol.for("react.profiler"),
        Ce = Symbol.for("react.provider"),
        qe = Symbol.for("react.context"),
        it = Symbol.for("react.forward_ref"),
        Ge = Symbol.for("react.suspense"),
        Ze = Symbol.for("react.suspense_list"),
        wt = Symbol.for("react.memo"),
        Xe = Symbol.for("react.lazy"),
        ie = Symbol.for("react.offscreen"),
        F = Symbol.iterator;

    function Q(e) {
        return e === null || typeof e != "object" ? null : (e = F && e[F] || e["@@iterator"], typeof e == "function" ? e : null)
    }
    var B = Object.assign,
        T;

    function M(e) {
        if (T === void 0) try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            T = t && t[1] || ""
        }
        return `
` + T + e
    }
    var re = !1;

    function oe(e, t) {
        if (!e || re) return "";
        re = !0;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            if (t)
                if (t = function() {
                        throw Error()
                    }, Object.defineProperty(t.prototype, "props", {
                        set: function() {
                            throw Error()
                        }
                    }), typeof Reflect == "object" && Reflect.construct) {
                    try {
                        Reflect.construct(t, [])
                    } catch (E) {
                        var o = E
                    }
                    Reflect.construct(e, [], t)
                } else {
                    try {
                        t.call()
                    } catch (E) {
                        o = E
                    }
                    e.call(t.prototype)
                }
            else {
                try {
                    throw Error()
                } catch (E) {
                    o = E
                }
                e()
            }
        } catch (E) {
            if (E && o && typeof E.stack == "string") {
                for (var a = E.stack.split(`
`), u = o.stack.split(`
`), h = a.length - 1, y = u.length - 1; 1 <= h && 0 <= y && a[h] !== u[y];) y--;
                for (; 1 <= h && 0 <= y; h--, y--)
                    if (a[h] !== u[y]) {
                        if (h !== 1 || y !== 1)
                            do
                                if (h--, y--, 0 > y || a[h] !== u[y]) {
                                    var w = `
` + a[h].replace(" at new ", " at ");
                                    return e.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", e.displayName)), w
                                }
                        while (1 <= h && 0 <= y);
                        break
                    }
            }
        } finally {
            re = !1, Error.prepareStackTrace = n
        }
        return (e = e ? e.displayName || e.name : "") ? M(e) : ""
    }

    function ue(e) {
        switch (e.tag) {
            case 5:
                return M(e.type);
            case 16:
                return M("Lazy");
            case 13:
                return M("Suspense");
            case 19:
                return M("SuspenseList");
            case 0:
            case 2:
            case 15:
                return e = oe(e.type, !1), e;
            case 11:
                return e = oe(e.type.render, !1), e;
            case 1:
                return e = oe(e.type, !0), e;
            default:
                return ""
        }
    }

    function ce(e) {
        if (e == null) return null;
        if (typeof e == "function") return e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch (e) {
            case ae:
                return "Fragment";
            case ne:
                return "Portal";
            case Se:
                return "Profiler";
            case Z:
                return "StrictMode";
            case Ge:
                return "Suspense";
            case Ze:
                return "SuspenseList"
        }
        if (typeof e == "object") switch (e.$$typeof) {
            case qe:
                return (e.displayName || "Context") + ".Consumer";
            case Ce:
                return (e._context.displayName || "Context") + ".Provider";
            case it:
                var t = e.render;
                return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case wt:
                return t = e.displayName || null, t !== null ? t : ce(e.type) || "Memo";
            case Xe:
                t = e._payload, e = e._init;
                try {
                    return ce(e(t))
                } catch {}
        }
        return null
    }

    function pe(e) {
        var t = e.type;
        switch (e.tag) {
            case 24:
                return "Cache";
            case 9:
                return (t.displayName || "Context") + ".Consumer";
            case 10:
                return (t._context.displayName || "Context") + ".Provider";
            case 18:
                return "DehydratedFragment";
            case 11:
                return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
            case 7:
                return "Fragment";
            case 5:
                return t;
            case 4:
                return "Portal";
            case 3:
                return "Root";
            case 6:
                return "Text";
            case 16:
                return ce(t);
            case 8:
                return t === Z ? "StrictMode" : "Mode";
            case 22:
                return "Offscreen";
            case 12:
                return "Profiler";
            case 21:
                return "Scope";
            case 13:
                return "Suspense";
            case 19:
                return "SuspenseList";
            case 25:
                return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
                if (typeof t == "function") return t.displayName || t.name || null;
                if (typeof t == "string") return t
        }
        return null
    }

    function de(e) {
        switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return e;
            case "object":
                return e;
            default:
                return ""
        }
    }

    function xe(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }

    function st(e) {
        var t = xe(e) ? "checked" : "value",
            n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
            o = "" + e[t];
        if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
            var a = n.get,
                u = n.set;
            return Object.defineProperty(e, t, {
                configurable: !0,
                get: function() {
                    return a.call(this)
                },
                set: function(h) {
                    o = "" + h, u.call(this, h)
                }
            }), Object.defineProperty(e, t, {
                enumerable: n.enumerable
            }), {
                getValue: function() {
                    return o
                },
                setValue: function(h) {
                    o = "" + h
                },
                stopTracking: function() {
                    e._valueTracker = null, delete e[t]
                }
            }
        }
    }

    function Si(e) {
        e._valueTracker || (e._valueTracker = st(e))
    }

    function ou(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(),
            o = "";
        return e && (o = xe(e) ? e.checked ? "true" : "false" : e.value), e = o, e !== n ? (t.setValue(e), !0) : !1
    }

    function Pi(e) {
        if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
        try {
            return e.activeElement || e.body
        } catch {
            return e.body
        }
    }

    function Js(e, t) {
        var n = t.checked;
        return B({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: n ? ? e._wrapperState.initialChecked
        })
    }

    function lu(e, t) {
        var n = t.defaultValue == null ? "" : t.defaultValue,
            o = t.checked != null ? t.checked : t.defaultChecked;
        n = de(t.value != null ? t.value : n), e._wrapperState = {
            initialChecked: o,
            initialValue: n,
            controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
        }
    }

    function au(e, t) {
        t = t.checked, t != null && K(e, "checked", t, !1)
    }

    function bs(e, t) {
        au(e, t);
        var n = de(t.value),
            o = t.type;
        if (n != null) o === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
        else if (o === "submit" || o === "reset") {
            e.removeAttribute("value");
            return
        }
        t.hasOwnProperty("value") ? eo(e, t.type, n) : t.hasOwnProperty("defaultValue") && eo(e, t.type, de(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
    }

    function uu(e, t, n) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var o = t.type;
            if (!(o !== "submit" && o !== "reset" || t.value !== void 0 && t.value !== null)) return;
            t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
        }
        n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
    }

    function eo(e, t, n) {
        (t !== "number" || Pi(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
    }
    var vr = Array.isArray;

    function Fn(e, t, n, o) {
        if (e = e.options, t) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++) a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && o && (e[n].defaultSelected = !0)
        } else {
            for (n = "" + de(n), t = null, a = 0; a < e.length; a++) {
                if (e[a].value === n) {
                    e[a].selected = !0, o && (e[a].defaultSelected = !0);
                    return
                }
                t !== null || e[a].disabled || (t = e[a])
            }
            t !== null && (t.selected = !0)
        }
    }

    function to(e, t) {
        if (t.dangerouslySetInnerHTML != null) throw Error(s(91));
        return B({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue
        })
    }

    function cu(e, t) {
        var n = t.value;
        if (n == null) {
            if (n = t.children, t = t.defaultValue, n != null) {
                if (t != null) throw Error(s(92));
                if (vr(n)) {
                    if (1 < n.length) throw Error(s(93));
                    n = n[0]
                }
                t = n
            }
            t == null && (t = ""), n = t
        }
        e._wrapperState = {
            initialValue: de(n)
        }
    }

    function fu(e, t) {
        var n = de(t.value),
            o = de(t.defaultValue);
        n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), o != null && (e.defaultValue = "" + o)
    }

    function du(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
    }

    function hu(e) {
        switch (e) {
            case "svg":
                return "http://www.w3.org/2000/svg";
            case "math":
                return "http://www.w3.org/1998/Math/MathML";
            default:
                return "http://www.w3.org/1999/xhtml"
        }
    }

    function no(e, t) {
        return e == null || e === "http://www.w3.org/1999/xhtml" ? hu(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
    }
    var Ti, pu = function(e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, o, a) {
            MSApp.execUnsafeLocalFunction(function() {
                return e(t, n, o, a)
            })
        } : e
    }(function(e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
        else {
            for (Ti = Ti || document.createElement("div"), Ti.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Ti.firstChild; e.firstChild;) e.removeChild(e.firstChild);
            for (; t.firstChild;) e.appendChild(t.firstChild)
        }
    });

    function xr(e, t) {
        if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && n.nodeType === 3) {
                n.nodeValue = t;
                return
            }
        }
        e.textContent = t
    }
    var wr = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0
        },
        sm = ["Webkit", "ms", "Moz", "O"];
    Object.keys(wr).forEach(function(e) {
        sm.forEach(function(t) {
            t = t + e.charAt(0).toUpperCase() + e.substring(1), wr[t] = wr[e]
        })
    });

    function mu(e, t, n) {
        return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || wr.hasOwnProperty(e) && wr[e] ? ("" + t).trim() : t + "px"
    }

    function gu(e, t) {
        e = e.style;
        for (var n in t)
            if (t.hasOwnProperty(n)) {
                var o = n.indexOf("--") === 0,
                    a = mu(n, t[n], o);
                n === "float" && (n = "cssFloat"), o ? e.setProperty(n, a) : e[n] = a
            }
    }
    var om = B({
        menuitem: !0
    }, {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    });

    function ro(e, t) {
        if (t) {
            if (om[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(s(137, e));
            if (t.dangerouslySetInnerHTML != null) {
                if (t.children != null) throw Error(s(60));
                if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(s(61))
            }
            if (t.style != null && typeof t.style != "object") throw Error(s(62))
        }
    }

    function io(e, t) {
        if (e.indexOf("-") === -1) return typeof t.is == "string";
        switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0
        }
    }
    var so = null;

    function oo(e) {
        return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
    }
    var lo = null,
        In = null,
        zn = null;

    function yu(e) {
        if (e = Wr(e)) {
            if (typeof lo != "function") throw Error(s(280));
            var t = e.stateNode;
            t && (t = Gi(t), lo(e.stateNode, e.type, t))
        }
    }

    function vu(e) {
        In ? zn ? zn.push(e) : zn = [e] : In = e
    }

    function xu() {
        if (In) {
            var e = In,
                t = zn;
            if (zn = In = null, yu(e), t)
                for (e = 0; e < t.length; e++) yu(t[e])
        }
    }

    function wu(e, t) {
        return e(t)
    }

    function Su() {}
    var ao = !1;

    function Pu(e, t, n) {
        if (ao) return e(t, n);
        ao = !0;
        try {
            return wu(e, t, n)
        } finally {
            ao = !1, (In !== null || zn !== null) && (Su(), xu())
        }
    }

    function Sr(e, t) {
        var n = e.stateNode;
        if (n === null) return null;
        var o = Gi(n);
        if (o === null) return null;
        n = o[t];
        e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (o = !o.disabled) || (e = e.type, o = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !o;
                break e;
            default:
                e = !1
        }
        if (e) return null;
        if (n && typeof n != "function") throw Error(s(231, t, typeof n));
        return n
    }
    var uo = !1;
    if (p) try {
        var Pr = {};
        Object.defineProperty(Pr, "passive", {
            get: function() {
                uo = !0
            }
        }), window.addEventListener("test", Pr, Pr), window.removeEventListener("test", Pr, Pr)
    } catch {
        uo = !1
    }

    function lm(e, t, n, o, a, u, h, y, w) {
        var E = Array.prototype.slice.call(arguments, 3);
        try {
            t.apply(n, E)
        } catch (N) {
            this.onError(N)
        }
    }
    var Tr = !1,
        ki = null,
        Ci = !1,
        co = null,
        am = {
            onError: function(e) {
                Tr = !0, ki = e
            }
        };

    function um(e, t, n, o, a, u, h, y, w) {
        Tr = !1, ki = null, lm.apply(am, arguments)
    }

    function cm(e, t, n, o, a, u, h, y, w) {
        if (um.apply(this, arguments), Tr) {
            if (Tr) {
                var E = ki;
                Tr = !1, ki = null
            } else throw Error(s(198));
            Ci || (Ci = !0, co = E)
        }
    }

    function yn(e) {
        var t = e,
            n = e;
        if (e.alternate)
            for (; t.return;) t = t.return;
        else {
            e = t;
            do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
        }
        return t.tag === 3 ? n : null
    }

    function Tu(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
        }
        return null
    }

    function ku(e) {
        if (yn(e) !== e) throw Error(s(188))
    }

    function fm(e) {
        var t = e.alternate;
        if (!t) {
            if (t = yn(e), t === null) throw Error(s(188));
            return t !== e ? null : e
        }
        for (var n = e, o = t;;) {
            var a = n.return;
            if (a === null) break;
            var u = a.alternate;
            if (u === null) {
                if (o = a.return, o !== null) {
                    n = o;
                    continue
                }
                break
            }
            if (a.child === u.child) {
                for (u = a.child; u;) {
                    if (u === n) return ku(a), e;
                    if (u === o) return ku(a), t;
                    u = u.sibling
                }
                throw Error(s(188))
            }
            if (n.return !== o.return) n = a, o = u;
            else {
                for (var h = !1, y = a.child; y;) {
                    if (y === n) {
                        h = !0, n = a, o = u;
                        break
                    }
                    if (y === o) {
                        h = !0, o = a, n = u;
                        break
                    }
                    y = y.sibling
                }
                if (!h) {
                    for (y = u.child; y;) {
                        if (y === n) {
                            h = !0, n = u, o = a;
                            break
                        }
                        if (y === o) {
                            h = !0, o = u, n = a;
                            break
                        }
                        y = y.sibling
                    }
                    if (!h) throw Error(s(189))
                }
            }
            if (n.alternate !== o) throw Error(s(190))
        }
        if (n.tag !== 3) throw Error(s(188));
        return n.stateNode.current === n ? e : t
    }

    function Cu(e) {
        return e = fm(e), e !== null ? Eu(e) : null
    }

    function Eu(e) {
        if (e.tag === 5 || e.tag === 6) return e;
        for (e = e.child; e !== null;) {
            var t = Eu(e);
            if (t !== null) return t;
            e = e.sibling
        }
        return null
    }
    var Au = i.unstable_scheduleCallback,
        Du = i.unstable_cancelCallback,
        dm = i.unstable_shouldYield,
        hm = i.unstable_requestPaint,
        De = i.unstable_now,
        pm = i.unstable_getCurrentPriorityLevel,
        fo = i.unstable_ImmediatePriority,
        Ru = i.unstable_UserBlockingPriority,
        Ei = i.unstable_NormalPriority,
        mm = i.unstable_LowPriority,
        Mu = i.unstable_IdlePriority,
        Ai = null,
        Rt = null;

    function gm(e) {
        if (Rt && typeof Rt.onCommitFiberRoot == "function") try {
            Rt.onCommitFiberRoot(Ai, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
    }
    var St = Math.clz32 ? Math.clz32 : xm,
        ym = Math.log,
        vm = Math.LN2;

    function xm(e) {
        return e >>>= 0, e === 0 ? 32 : 31 - (ym(e) / vm | 0) | 0
    }
    var Di = 64,
        Ri = 4194304;

    function kr(e) {
        switch (e & -e) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 4:
                return 4;
            case 8:
                return 8;
            case 16:
                return 16;
            case 32:
                return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return e & 4194240;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                return e & 130023424;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 1073741824;
            default:
                return e
        }
    }

    function Mi(e, t) {
        var n = e.pendingLanes;
        if (n === 0) return 0;
        var o = 0,
            a = e.suspendedLanes,
            u = e.pingedLanes,
            h = n & 268435455;
        if (h !== 0) {
            var y = h & ~a;
            y !== 0 ? o = kr(y) : (u &= h, u !== 0 && (o = kr(u)))
        } else h = n & ~a, h !== 0 ? o = kr(h) : u !== 0 && (o = kr(u));
        if (o === 0) return 0;
        if (t !== 0 && t !== o && !(t & a) && (a = o & -o, u = t & -t, a >= u || a === 16 && (u & 4194240) !== 0)) return t;
        if (o & 4 && (o |= n & 16), t = e.entangledLanes, t !== 0)
            for (e = e.entanglements, t &= o; 0 < t;) n = 31 - St(t), a = 1 << n, o |= e[n], t &= ~a;
        return o
    }

    function wm(e, t) {
        switch (e) {
            case 1:
            case 2:
            case 4:
                return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return t + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                return -1;
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1;
            default:
                return -1
        }
    }

    function Sm(e, t) {
        for (var n = e.suspendedLanes, o = e.pingedLanes, a = e.expirationTimes, u = e.pendingLanes; 0 < u;) {
            var h = 31 - St(u),
                y = 1 << h,
                w = a[h];
            w === -1 ? (!(y & n) || y & o) && (a[h] = wm(y, t)) : w <= t && (e.expiredLanes |= y), u &= ~y
        }
    }

    function ho(e) {
        return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    }

    function Nu() {
        var e = Di;
        return Di <<= 1, !(Di & 4194240) && (Di = 64), e
    }

    function po(e) {
        for (var t = [], n = 0; 31 > n; n++) t.push(e);
        return t
    }

    function Cr(e, t, n) {
        e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - St(t), e[t] = n
    }

    function Pm(e, t) {
        var n = e.pendingLanes & ~t;
        e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
        var o = e.eventTimes;
        for (e = e.expirationTimes; 0 < n;) {
            var a = 31 - St(n),
                u = 1 << a;
            t[a] = 0, o[a] = -1, e[a] = -1, n &= ~u
        }
    }

    function mo(e, t) {
        var n = e.entangledLanes |= t;
        for (e = e.entanglements; n;) {
            var o = 31 - St(n),
                a = 1 << o;
            a & t | e[o] & t && (e[o] |= t), n &= ~a
        }
    }
    var he = 0;

    function Lu(e) {
        return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
    }
    var ju, go, _u, Vu, Ou, yo = !1,
        Ni = [],
        Xt = null,
        Qt = null,
        Yt = null,
        Er = new Map,
        Ar = new Map,
        qt = [],
        Tm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

    function Fu(e, t) {
        switch (e) {
            case "focusin":
            case "focusout":
                Xt = null;
                break;
            case "dragenter":
            case "dragleave":
                Qt = null;
                break;
            case "mouseover":
            case "mouseout":
                Yt = null;
                break;
            case "pointerover":
            case "pointerout":
                Er.delete(t.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                Ar.delete(t.pointerId)
        }
    }

    function Dr(e, t, n, o, a, u) {
        return e === null || e.nativeEvent !== u ? (e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: o,
            nativeEvent: u,
            targetContainers: [a]
        }, t !== null && (t = Wr(t), t !== null && go(t)), e) : (e.eventSystemFlags |= o, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e)
    }

    function km(e, t, n, o, a) {
        switch (t) {
            case "focusin":
                return Xt = Dr(Xt, e, t, n, o, a), !0;
            case "dragenter":
                return Qt = Dr(Qt, e, t, n, o, a), !0;
            case "mouseover":
                return Yt = Dr(Yt, e, t, n, o, a), !0;
            case "pointerover":
                var u = a.pointerId;
                return Er.set(u, Dr(Er.get(u) || null, e, t, n, o, a)), !0;
            case "gotpointercapture":
                return u = a.pointerId, Ar.set(u, Dr(Ar.get(u) || null, e, t, n, o, a)), !0
        }
        return !1
    }

    function Iu(e) {
        var t = vn(e.target);
        if (t !== null) {
            var n = yn(t);
            if (n !== null) {
                if (t = n.tag, t === 13) {
                    if (t = Tu(n), t !== null) {
                        e.blockedOn = t, Ou(e.priority, function() {
                            _u(n)
                        });
                        return
                    }
                } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                    return
                }
            }
        }
        e.blockedOn = null
    }

    function Li(e) {
        if (e.blockedOn !== null) return !1;
        for (var t = e.targetContainers; 0 < t.length;) {
            var n = xo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (n === null) {
                n = e.nativeEvent;
                var o = new n.constructor(n.type, n);
                so = o, n.target.dispatchEvent(o), so = null
            } else return t = Wr(n), t !== null && go(t), e.blockedOn = n, !1;
            t.shift()
        }
        return !0
    }

    function zu(e, t, n) {
        Li(e) && n.delete(t)
    }

    function Cm() {
        yo = !1, Xt !== null && Li(Xt) && (Xt = null), Qt !== null && Li(Qt) && (Qt = null), Yt !== null && Li(Yt) && (Yt = null), Er.forEach(zu), Ar.forEach(zu)
    }

    function Rr(e, t) {
        e.blockedOn === t && (e.blockedOn = null, yo || (yo = !0, i.unstable_scheduleCallback(i.unstable_NormalPriority, Cm)))
    }

    function Mr(e) {
        function t(a) {
            return Rr(a, e)
        }
        if (0 < Ni.length) {
            Rr(Ni[0], e);
            for (var n = 1; n < Ni.length; n++) {
                var o = Ni[n];
                o.blockedOn === e && (o.blockedOn = null)
            }
        }
        for (Xt !== null && Rr(Xt, e), Qt !== null && Rr(Qt, e), Yt !== null && Rr(Yt, e), Er.forEach(t), Ar.forEach(t), n = 0; n < qt.length; n++) o = qt[n], o.blockedOn === e && (o.blockedOn = null);
        for (; 0 < qt.length && (n = qt[0], n.blockedOn === null);) Iu(n), n.blockedOn === null && qt.shift()
    }
    var Bn = ee.ReactCurrentBatchConfig,
        ji = !0;

    function Em(e, t, n, o) {
        var a = he,
            u = Bn.transition;
        Bn.transition = null;
        try {
            he = 1, vo(e, t, n, o)
        } finally {
            he = a, Bn.transition = u
        }
    }

    function Am(e, t, n, o) {
        var a = he,
            u = Bn.transition;
        Bn.transition = null;
        try {
            he = 4, vo(e, t, n, o)
        } finally {
            he = a, Bn.transition = u
        }
    }

    function vo(e, t, n, o) {
        if (ji) {
            var a = xo(e, t, n, o);
            if (a === null) Oo(e, t, o, _i, n), Fu(e, o);
            else if (km(a, e, t, n, o)) o.stopPropagation();
            else if (Fu(e, o), t & 4 && -1 < Tm.indexOf(e)) {
                for (; a !== null;) {
                    var u = Wr(a);
                    if (u !== null && ju(u), u = xo(e, t, n, o), u === null && Oo(e, t, o, _i, n), u === a) break;
                    a = u
                }
                a !== null && o.stopPropagation()
            } else Oo(e, t, o, null, n)
        }
    }
    var _i = null;

    function xo(e, t, n, o) {
        if (_i = null, e = oo(o), e = vn(e), e !== null)
            if (t = yn(e), t === null) e = null;
            else if (n = t.tag, n === 13) {
            if (e = Tu(t), e !== null) return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else t !== e && (e = null);
        return _i = e, null
    }

    function Bu(e) {
        switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
                return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
                return 4;
            case "message":
                switch (pm()) {
                    case fo:
                        return 1;
                    case Ru:
                        return 4;
                    case Ei:
                    case mm:
                        return 16;
                    case Mu:
                        return 536870912;
                    default:
                        return 16
                }
            default:
                return 16
        }
    }
    var Zt = null,
        wo = null,
        Vi = null;

    function Uu() {
        if (Vi) return Vi;
        var e, t = wo,
            n = t.length,
            o, a = "value" in Zt ? Zt.value : Zt.textContent,
            u = a.length;
        for (e = 0; e < n && t[e] === a[e]; e++);
        var h = n - e;
        for (o = 1; o <= h && t[n - o] === a[u - o]; o++);
        return Vi = a.slice(e, 1 < o ? 1 - o : void 0)
    }

    function Oi(e) {
        var t = e.keyCode;
        return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
    }

    function Fi() {
        return !0
    }

    function Wu() {
        return !1
    }

    function ot(e) {
        function t(n, o, a, u, h) {
            this._reactName = n, this._targetInst = a, this.type = o, this.nativeEvent = u, this.target = h, this.currentTarget = null;
            for (var y in e) e.hasOwnProperty(y) && (n = e[y], this[y] = n ? n(u) : u[y]);
            return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Fi : Wu, this.isPropagationStopped = Wu, this
        }
        return B(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Fi)
            },
            stopPropagation: function() {
                var n = this.nativeEvent;
                n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Fi)
            },
            persist: function() {},
            isPersistent: Fi
        }), t
    }
    var Un = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function(e) {
                return e.timeStamp || Date.now()
            },
            defaultPrevented: 0,
            isTrusted: 0
        },
        So = ot(Un),
        Nr = B({}, Un, {
            view: 0,
            detail: 0
        }),
        Dm = ot(Nr),
        Po, To, Lr, Ii = B({}, Nr, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Co,
            button: 0,
            buttons: 0,
            relatedTarget: function(e) {
                return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
            },
            movementX: function(e) {
                return "movementX" in e ? e.movementX : (e !== Lr && (Lr && e.type === "mousemove" ? (Po = e.screenX - Lr.screenX, To = e.screenY - Lr.screenY) : To = Po = 0, Lr = e), Po)
            },
            movementY: function(e) {
                return "movementY" in e ? e.movementY : To
            }
        }),
        $u = ot(Ii),
        Rm = B({}, Ii, {
            dataTransfer: 0
        }),
        Mm = ot(Rm),
        Nm = B({}, Nr, {
            relatedTarget: 0
        }),
        ko = ot(Nm),
        Lm = B({}, Un, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        jm = ot(Lm),
        _m = B({}, Un, {
            clipboardData: function(e) {
                return "clipboardData" in e ? e.clipboardData : window.clipboardData
            }
        }),
        Vm = ot(_m),
        Om = B({}, Un, {
            data: 0
        }),
        Hu = ot(Om),
        Fm = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        },
        Im = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        },
        zm = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };

    function Bm(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = zm[e]) ? !!t[e] : !1
    }

    function Co() {
        return Bm
    }
    var Um = B({}, Nr, {
            key: function(e) {
                if (e.key) {
                    var t = Fm[e.key] || e.key;
                    if (t !== "Unidentified") return t
                }
                return e.type === "keypress" ? (e = Oi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Im[e.keyCode] || "Unidentified" : ""
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Co,
            charCode: function(e) {
                return e.type === "keypress" ? Oi(e) : 0
            },
            keyCode: function(e) {
                return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
            },
            which: function(e) {
                return e.type === "keypress" ? Oi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
            }
        }),
        Wm = ot(Um),
        $m = B({}, Ii, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0
        }),
        Ku = ot($m),
        Hm = B({}, Nr, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: Co
        }),
        Km = ot(Hm),
        Gm = B({}, Un, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        Xm = ot(Gm),
        Qm = B({}, Ii, {
            deltaX: function(e) {
                return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
            },
            deltaY: function(e) {
                return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
            },
            deltaZ: 0,
            deltaMode: 0
        }),
        Ym = ot(Qm),
        qm = [9, 13, 27, 32],
        Eo = p && "CompositionEvent" in window,
        jr = null;
    p && "documentMode" in document && (jr = document.documentMode);
    var Zm = p && "TextEvent" in window && !jr,
        Gu = p && (!Eo || jr && 8 < jr && 11 >= jr),
        Xu = " ",
        Qu = !1;

    function Yu(e, t) {
        switch (e) {
            case "keyup":
                return qm.indexOf(t.keyCode) !== -1;
            case "keydown":
                return t.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0;
            default:
                return !1
        }
    }

    function qu(e) {
        return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
    }
    var Wn = !1;

    function Jm(e, t) {
        switch (e) {
            case "compositionend":
                return qu(t);
            case "keypress":
                return t.which !== 32 ? null : (Qu = !0, Xu);
            case "textInput":
                return e = t.data, e === Xu && Qu ? null : e;
            default:
                return null
        }
    }

    function bm(e, t) {
        if (Wn) return e === "compositionend" || !Eo && Yu(e, t) ? (e = Uu(), Vi = wo = Zt = null, Wn = !1, e) : null;
        switch (e) {
            case "paste":
                return null;
            case "keypress":
                if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                    if (t.char && 1 < t.char.length) return t.char;
                    if (t.which) return String.fromCharCode(t.which)
                }
                return null;
            case "compositionend":
                return Gu && t.locale !== "ko" ? null : t.data;
            default:
                return null
        }
    }
    var eg = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };

    function Zu(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!eg[e.type] : t === "textarea"
    }

    function Ju(e, t, n, o) {
        vu(o), t = $i(t, "onChange"), 0 < t.length && (n = new So("onChange", "change", null, n, o), e.push({
            event: n,
            listeners: t
        }))
    }
    var _r = null,
        Vr = null;

    function tg(e) {
        gc(e, 0)
    }

    function zi(e) {
        var t = Xn(e);
        if (ou(t)) return e
    }

    function ng(e, t) {
        if (e === "change") return t
    }
    var bu = !1;
    if (p) {
        var Ao;
        if (p) {
            var Do = "oninput" in document;
            if (!Do) {
                var ec = document.createElement("div");
                ec.setAttribute("oninput", "return;"), Do = typeof ec.oninput == "function"
            }
            Ao = Do
        } else Ao = !1;
        bu = Ao && (!document.documentMode || 9 < document.documentMode)
    }

    function tc() {
        _r && (_r.detachEvent("onpropertychange", nc), Vr = _r = null)
    }

    function nc(e) {
        if (e.propertyName === "value" && zi(Vr)) {
            var t = [];
            Ju(t, Vr, e, oo(e)), Pu(tg, t)
        }
    }

    function rg(e, t, n) {
        e === "focusin" ? (tc(), _r = t, Vr = n, _r.attachEvent("onpropertychange", nc)) : e === "focusout" && tc()
    }

    function ig(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown") return zi(Vr)
    }

    function sg(e, t) {
        if (e === "click") return zi(t)
    }

    function og(e, t) {
        if (e === "input" || e === "change") return zi(t)
    }

    function lg(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }
    var Pt = typeof Object.is == "function" ? Object.is : lg;

    function Or(e, t) {
        if (Pt(e, t)) return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
        var n = Object.keys(e),
            o = Object.keys(t);
        if (n.length !== o.length) return !1;
        for (o = 0; o < n.length; o++) {
            var a = n[o];
            if (!m.call(t, a) || !Pt(e[a], t[a])) return !1
        }
        return !0
    }

    function rc(e) {
        for (; e && e.firstChild;) e = e.firstChild;
        return e
    }

    function ic(e, t) {
        var n = rc(e);
        e = 0;
        for (var o; n;) {
            if (n.nodeType === 3) {
                if (o = e + n.textContent.length, e <= t && o >= t) return {
                    node: n,
                    offset: t - e
                };
                e = o
            }
            e: {
                for (; n;) {
                    if (n.nextSibling) {
                        n = n.nextSibling;
                        break e
                    }
                    n = n.parentNode
                }
                n = void 0
            }
            n = rc(n)
        }
    }

    function sc(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? sc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
    }

    function oc() {
        for (var e = window, t = Pi(); t instanceof e.HTMLIFrameElement;) {
            try {
                var n = typeof t.contentWindow.location.href == "string"
            } catch {
                n = !1
            }
            if (n) e = t.contentWindow;
            else break;
            t = Pi(e.document)
        }
        return t
    }

    function Ro(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
    }

    function ag(e) {
        var t = oc(),
            n = e.focusedElem,
            o = e.selectionRange;
        if (t !== n && n && n.ownerDocument && sc(n.ownerDocument.documentElement, n)) {
            if (o !== null && Ro(n)) {
                if (t = o.start, e = o.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
                else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                    e = e.getSelection();
                    var a = n.textContent.length,
                        u = Math.min(o.start, a);
                    o = o.end === void 0 ? u : Math.min(o.end, a), !e.extend && u > o && (a = o, o = u, u = a), a = ic(n, u);
                    var h = ic(n, o);
                    a && h && (e.rangeCount !== 1 || e.anchorNode !== a.node || e.anchorOffset !== a.offset || e.focusNode !== h.node || e.focusOffset !== h.offset) && (t = t.createRange(), t.setStart(a.node, a.offset), e.removeAllRanges(), u > o ? (e.addRange(t), e.extend(h.node, h.offset)) : (t.setEnd(h.node, h.offset), e.addRange(t)))
                }
            }
            for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
            for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
        }
    }
    var ug = p && "documentMode" in document && 11 >= document.documentMode,
        $n = null,
        Mo = null,
        Fr = null,
        No = !1;

    function lc(e, t, n) {
        var o = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
        No || $n == null || $n !== Pi(o) || (o = $n, "selectionStart" in o && Ro(o) ? o = {
            start: o.selectionStart,
            end: o.selectionEnd
        } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = {
            anchorNode: o.anchorNode,
            anchorOffset: o.anchorOffset,
            focusNode: o.focusNode,
            focusOffset: o.focusOffset
        }), Fr && Or(Fr, o) || (Fr = o, o = $i(Mo, "onSelect"), 0 < o.length && (t = new So("onSelect", "select", null, t, n), e.push({
            event: t,
            listeners: o
        }), t.target = $n)))
    }

    function Bi(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
    }
    var Hn = {
            animationend: Bi("Animation", "AnimationEnd"),
            animationiteration: Bi("Animation", "AnimationIteration"),
            animationstart: Bi("Animation", "AnimationStart"),
            transitionend: Bi("Transition", "TransitionEnd")
        },
        Lo = {},
        ac = {};
    p && (ac = document.createElement("div").style, "AnimationEvent" in window || (delete Hn.animationend.animation, delete Hn.animationiteration.animation, delete Hn.animationstart.animation), "TransitionEvent" in window || delete Hn.transitionend.transition);

    function Ui(e) {
        if (Lo[e]) return Lo[e];
        if (!Hn[e]) return e;
        var t = Hn[e],
            n;
        for (n in t)
            if (t.hasOwnProperty(n) && n in ac) return Lo[e] = t[n];
        return e
    }
    var uc = Ui("animationend"),
        cc = Ui("animationiteration"),
        fc = Ui("animationstart"),
        dc = Ui("transitionend"),
        hc = new Map,
        pc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

    function Jt(e, t) {
        hc.set(e, t), d(t, [e])
    }
    for (var jo = 0; jo < pc.length; jo++) {
        var _o = pc[jo],
            cg = _o.toLowerCase(),
            fg = _o[0].toUpperCase() + _o.slice(1);
        Jt(cg, "on" + fg)
    }
    Jt(uc, "onAnimationEnd"), Jt(cc, "onAnimationIteration"), Jt(fc, "onAnimationStart"), Jt("dblclick", "onDoubleClick"), Jt("focusin", "onFocus"), Jt("focusout", "onBlur"), Jt(dc, "onTransitionEnd"), f("onMouseEnter", ["mouseout", "mouseover"]), f("onMouseLeave", ["mouseout", "mouseover"]), f("onPointerEnter", ["pointerout", "pointerover"]), f("onPointerLeave", ["pointerout", "pointerover"]), d("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), d("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), d("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), d("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), d("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), d("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Ir = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        dg = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ir));

    function mc(e, t, n) {
        var o = e.type || "unknown-event";
        e.currentTarget = n, cm(o, t, void 0, e), e.currentTarget = null
    }

    function gc(e, t) {
        t = (t & 4) !== 0;
        for (var n = 0; n < e.length; n++) {
            var o = e[n],
                a = o.event;
            o = o.listeners;
            e: {
                var u = void 0;
                if (t)
                    for (var h = o.length - 1; 0 <= h; h--) {
                        var y = o[h],
                            w = y.instance,
                            E = y.currentTarget;
                        if (y = y.listener, w !== u && a.isPropagationStopped()) break e;
                        mc(a, y, E), u = w
                    } else
                        for (h = 0; h < o.length; h++) {
                            if (y = o[h], w = y.instance, E = y.currentTarget, y = y.listener, w !== u && a.isPropagationStopped()) break e;
                            mc(a, y, E), u = w
                        }
            }
        }
        if (Ci) throw e = co, Ci = !1, co = null, e
    }

    function ge(e, t) {
        var n = t[Wo];
        n === void 0 && (n = t[Wo] = new Set);
        var o = e + "__bubble";
        n.has(o) || (yc(t, e, 2, !1), n.add(o))
    }

    function Vo(e, t, n) {
        var o = 0;
        t && (o |= 4), yc(n, e, o, t)
    }
    var Wi = "_reactListening" + Math.random().toString(36).slice(2);

    function zr(e) {
        if (!e[Wi]) {
            e[Wi] = !0, l.forEach(function(n) {
                n !== "selectionchange" && (dg.has(n) || Vo(n, !1, e), Vo(n, !0, e))
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[Wi] || (t[Wi] = !0, Vo("selectionchange", !1, t))
        }
    }

    function yc(e, t, n, o) {
        switch (Bu(t)) {
            case 1:
                var a = Em;
                break;
            case 4:
                a = Am;
                break;
            default:
                a = vo
        }
        n = a.bind(null, t, n, e), a = void 0, !uo || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), o ? a !== void 0 ? e.addEventListener(t, n, {
            capture: !0,
            passive: a
        }) : e.addEventListener(t, n, !0) : a !== void 0 ? e.addEventListener(t, n, {
            passive: a
        }) : e.addEventListener(t, n, !1)
    }

    function Oo(e, t, n, o, a) {
        var u = o;
        if (!(t & 1) && !(t & 2) && o !== null) e: for (;;) {
            if (o === null) return;
            var h = o.tag;
            if (h === 3 || h === 4) {
                var y = o.stateNode.containerInfo;
                if (y === a || y.nodeType === 8 && y.parentNode === a) break;
                if (h === 4)
                    for (h = o.return; h !== null;) {
                        var w = h.tag;
                        if ((w === 3 || w === 4) && (w = h.stateNode.containerInfo, w === a || w.nodeType === 8 && w.parentNode === a)) return;
                        h = h.return
                    }
                for (; y !== null;) {
                    if (h = vn(y), h === null) return;
                    if (w = h.tag, w === 5 || w === 6) {
                        o = u = h;
                        continue e
                    }
                    y = y.parentNode
                }
            }
            o = o.return
        }
        Pu(function() {
            var E = u,
                N = oo(n),
                L = [];
            e: {
                var D = hc.get(e);
                if (D !== void 0) {
                    var z = So,
                        $ = e;
                    switch (e) {
                        case "keypress":
                            if (Oi(n) === 0) break e;
                        case "keydown":
                        case "keyup":
                            z = Wm;
                            break;
                        case "focusin":
                            $ = "focus", z = ko;
                            break;
                        case "focusout":
                            $ = "blur", z = ko;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            z = ko;
                            break;
                        case "click":
                            if (n.button === 2) break e;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            z = $u;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            z = Mm;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            z = Km;
                            break;
                        case uc:
                        case cc:
                        case fc:
                            z = jm;
                            break;
                        case dc:
                            z = Xm;
                            break;
                        case "scroll":
                            z = Dm;
                            break;
                        case "wheel":
                            z = Ym;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            z = Vm;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            z = Ku
                    }
                    var H = (t & 4) !== 0,
                        Re = !H && e === "scroll",
                        k = H ? D !== null ? D + "Capture" : null : D;
                    H = [];
                    for (var S = E, C; S !== null;) {
                        C = S;
                        var O = C.stateNode;
                        if (C.tag === 5 && O !== null && (C = O, k !== null && (O = Sr(S, k), O != null && H.push(Br(S, O, C)))), Re) break;
                        S = S.return
                    }
                    0 < H.length && (D = new z(D, $, null, n, N), L.push({
                        event: D,
                        listeners: H
                    }))
                }
            }
            if (!(t & 7)) {
                e: {
                    if (D = e === "mouseover" || e === "pointerover", z = e === "mouseout" || e === "pointerout", D && n !== so && ($ = n.relatedTarget || n.fromElement) && (vn($) || $[Ot])) break e;
                    if ((z || D) && (D = N.window === N ? N : (D = N.ownerDocument) ? D.defaultView || D.parentWindow : window, z ? ($ = n.relatedTarget || n.toElement, z = E, $ = $ ? vn($) : null, $ !== null && (Re = yn($), $ !== Re || $.tag !== 5 && $.tag !== 6) && ($ = null)) : (z = null, $ = E), z !== $)) {
                        if (H = $u, O = "onMouseLeave", k = "onMouseEnter", S = "mouse", (e === "pointerout" || e === "pointerover") && (H = Ku, O = "onPointerLeave", k = "onPointerEnter", S = "pointer"), Re = z == null ? D : Xn(z), C = $ == null ? D : Xn($), D = new H(O, S + "leave", z, n, N), D.target = Re, D.relatedTarget = C, O = null, vn(N) === E && (H = new H(k, S + "enter", $, n, N), H.target = C, H.relatedTarget = Re, O = H), Re = O, z && $) t: {
                            for (H = z, k = $, S = 0, C = H; C; C = Kn(C)) S++;
                            for (C = 0, O = k; O; O = Kn(O)) C++;
                            for (; 0 < S - C;) H = Kn(H),
                            S--;
                            for (; 0 < C - S;) k = Kn(k),
                            C--;
                            for (; S--;) {
                                if (H === k || k !== null && H === k.alternate) break t;
                                H = Kn(H), k = Kn(k)
                            }
                            H = null
                        }
                        else H = null;
                        z !== null && vc(L, D, z, H, !1), $ !== null && Re !== null && vc(L, Re, $, H, !0)
                    }
                }
                e: {
                    if (D = E ? Xn(E) : window, z = D.nodeName && D.nodeName.toLowerCase(), z === "select" || z === "input" && D.type === "file") var G = ng;
                    else if (Zu(D))
                        if (bu) G = og;
                        else {
                            G = ig;
                            var Y = rg
                        }
                    else(z = D.nodeName) && z.toLowerCase() === "input" && (D.type === "checkbox" || D.type === "radio") && (G = sg);
                    if (G && (G = G(e, E))) {
                        Ju(L, G, n, N);
                        break e
                    }
                    Y && Y(e, D, E),
                    e === "focusout" && (Y = D._wrapperState) && Y.controlled && D.type === "number" && eo(D, "number", D.value)
                }
                switch (Y = E ? Xn(E) : window, e) {
                    case "focusin":
                        (Zu(Y) || Y.contentEditable === "true") && ($n = Y, Mo = E, Fr = null);
                        break;
                    case "focusout":
                        Fr = Mo = $n = null;
                        break;
                    case "mousedown":
                        No = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        No = !1, lc(L, n, N);
                        break;
                    case "selectionchange":
                        if (ug) break;
                    case "keydown":
                    case "keyup":
                        lc(L, n, N)
                }
                var q;
                if (Eo) e: {
                    switch (e) {
                        case "compositionstart":
                            var b = "onCompositionStart";
                            break e;
                        case "compositionend":
                            b = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            b = "onCompositionUpdate";
                            break e
                    }
                    b = void 0
                }
                else Wn ? Yu(e, n) && (b = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (b = "onCompositionStart");b && (Gu && n.locale !== "ko" && (Wn || b !== "onCompositionStart" ? b === "onCompositionEnd" && Wn && (q = Uu()) : (Zt = N, wo = "value" in Zt ? Zt.value : Zt.textContent, Wn = !0)), Y = $i(E, b), 0 < Y.length && (b = new Hu(b, e, null, n, N), L.push({
                    event: b,
                    listeners: Y
                }), q ? b.data = q : (q = qu(n), q !== null && (b.data = q)))),
                (q = Zm ? Jm(e, n) : bm(e, n)) && (E = $i(E, "onBeforeInput"), 0 < E.length && (N = new Hu("onBeforeInput", "beforeinput", null, n, N), L.push({
                    event: N,
                    listeners: E
                }), N.data = q))
            }
            gc(L, t)
        })
    }

    function Br(e, t, n) {
        return {
            instance: e,
            listener: t,
            currentTarget: n
        }
    }

    function $i(e, t) {
        for (var n = t + "Capture", o = []; e !== null;) {
            var a = e,
                u = a.stateNode;
            a.tag === 5 && u !== null && (a = u, u = Sr(e, n), u != null && o.unshift(Br(e, u, a)), u = Sr(e, t), u != null && o.push(Br(e, u, a))), e = e.return
        }
        return o
    }

    function Kn(e) {
        if (e === null) return null;
        do e = e.return; while (e && e.tag !== 5);
        return e || null
    }

    function vc(e, t, n, o, a) {
        for (var u = t._reactName, h = []; n !== null && n !== o;) {
            var y = n,
                w = y.alternate,
                E = y.stateNode;
            if (w !== null && w === o) break;
            y.tag === 5 && E !== null && (y = E, a ? (w = Sr(n, u), w != null && h.unshift(Br(n, w, y))) : a || (w = Sr(n, u), w != null && h.push(Br(n, w, y)))), n = n.return
        }
        h.length !== 0 && e.push({
            event: t,
            listeners: h
        })
    }
    var hg = /\r\n?/g,
        pg = /\u0000|\uFFFD/g;

    function xc(e) {
        return (typeof e == "string" ? e : "" + e).replace(hg, `
`).replace(pg, "")
    }

    function Hi(e, t, n) {
        if (t = xc(t), xc(e) !== t && n) throw Error(s(425))
    }

    function Ki() {}
    var Fo = null,
        Io = null;

    function zo(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }
    var Bo = typeof setTimeout == "function" ? setTimeout : void 0,
        mg = typeof clearTimeout == "function" ? clearTimeout : void 0,
        wc = typeof Promise == "function" ? Promise : void 0,
        gg = typeof queueMicrotask == "function" ? queueMicrotask : typeof wc < "u" ? function(e) {
            return wc.resolve(null).then(e).catch(yg)
        } : Bo;

    function yg(e) {
        setTimeout(function() {
            throw e
        })
    }

    function Uo(e, t) {
        var n = t,
            o = 0;
        do {
            var a = n.nextSibling;
            if (e.removeChild(n), a && a.nodeType === 8)
                if (n = a.data, n === "/$") {
                    if (o === 0) {
                        e.removeChild(a), Mr(t);
                        return
                    }
                    o--
                } else n !== "$" && n !== "$?" && n !== "$!" || o++;
            n = a
        } while (n);
        Mr(t)
    }

    function bt(e) {
        for (; e != null; e = e.nextSibling) {
            var t = e.nodeType;
            if (t === 1 || t === 3) break;
            if (t === 8) {
                if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
                if (t === "/$") return null
            }
        }
        return e
    }

    function Sc(e) {
        e = e.previousSibling;
        for (var t = 0; e;) {
            if (e.nodeType === 8) {
                var n = e.data;
                if (n === "$" || n === "$!" || n === "$?") {
                    if (t === 0) return e;
                    t--
                } else n === "/$" && t++
            }
            e = e.previousSibling
        }
        return null
    }
    var Gn = Math.random().toString(36).slice(2),
        Mt = "__reactFiber$" + Gn,
        Ur = "__reactProps$" + Gn,
        Ot = "__reactContainer$" + Gn,
        Wo = "__reactEvents$" + Gn,
        vg = "__reactListeners$" + Gn,
        xg = "__reactHandles$" + Gn;

    function vn(e) {
        var t = e[Mt];
        if (t) return t;
        for (var n = e.parentNode; n;) {
            if (t = n[Ot] || n[Mt]) {
                if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                    for (e = Sc(e); e !== null;) {
                        if (n = e[Mt]) return n;
                        e = Sc(e)
                    }
                return t
            }
            e = n, n = e.parentNode
        }
        return null
    }

    function Wr(e) {
        return e = e[Mt] || e[Ot], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
    }

    function Xn(e) {
        if (e.tag === 5 || e.tag === 6) return e.stateNode;
        throw Error(s(33))
    }

    function Gi(e) {
        return e[Ur] || null
    }
    var $o = [],
        Qn = -1;

    function en(e) {
        return {
            current: e
        }
    }

    function ye(e) {
        0 > Qn || (e.current = $o[Qn], $o[Qn] = null, Qn--)
    }

    function me(e, t) {
        Qn++, $o[Qn] = e.current, e.current = t
    }
    var tn = {},
        Be = en(tn),
        Je = en(!1),
        xn = tn;

    function Yn(e, t) {
        var n = e.type.contextTypes;
        if (!n) return tn;
        var o = e.stateNode;
        if (o && o.__reactInternalMemoizedUnmaskedChildContext === t) return o.__reactInternalMemoizedMaskedChildContext;
        var a = {},
            u;
        for (u in n) a[u] = t[u];
        return o && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a
    }

    function be(e) {
        return e = e.childContextTypes, e != null
    }

    function Xi() {
        ye(Je), ye(Be)
    }

    function Pc(e, t, n) {
        if (Be.current !== tn) throw Error(s(168));
        me(Be, t), me(Je, n)
    }

    function Tc(e, t, n) {
        var o = e.stateNode;
        if (t = t.childContextTypes, typeof o.getChildContext != "function") return n;
        o = o.getChildContext();
        for (var a in o)
            if (!(a in t)) throw Error(s(108, pe(e) || "Unknown", a));
        return B({}, n, o)
    }

    function Qi(e) {
        return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || tn, xn = Be.current, me(Be, e), me(Je, Je.current), !0
    }

    function kc(e, t, n) {
        var o = e.stateNode;
        if (!o) throw Error(s(169));
        n ? (e = Tc(e, t, xn), o.__reactInternalMemoizedMergedChildContext = e, ye(Je), ye(Be), me(Be, e)) : ye(Je), me(Je, n)
    }
    var Ft = null,
        Yi = !1,
        Ho = !1;

    function Cc(e) {
        Ft === null ? Ft = [e] : Ft.push(e)
    }

    function wg(e) {
        Yi = !0, Cc(e)
    }

    function nn() {
        if (!Ho && Ft !== null) {
            Ho = !0;
            var e = 0,
                t = he;
            try {
                var n = Ft;
                for (he = 1; e < n.length; e++) {
                    var o = n[e];
                    do o = o(!0); while (o !== null)
                }
                Ft = null, Yi = !1
            } catch (a) {
                throw Ft !== null && (Ft = Ft.slice(e + 1)), Au(fo, nn), a
            } finally {
                he = t, Ho = !1
            }
        }
        return null
    }
    var qn = [],
        Zn = 0,
        qi = null,
        Zi = 0,
        dt = [],
        ht = 0,
        wn = null,
        It = 1,
        zt = "";

    function Sn(e, t) {
        qn[Zn++] = Zi, qn[Zn++] = qi, qi = e, Zi = t
    }

    function Ec(e, t, n) {
        dt[ht++] = It, dt[ht++] = zt, dt[ht++] = wn, wn = e;
        var o = It;
        e = zt;
        var a = 32 - St(o) - 1;
        o &= ~(1 << a), n += 1;
        var u = 32 - St(t) + a;
        if (30 < u) {
            var h = a - a % 5;
            u = (o & (1 << h) - 1).toString(32), o >>= h, a -= h, It = 1 << 32 - St(t) + a | n << a | o, zt = u + e
        } else It = 1 << u | n << a | o, zt = e
    }

    function Ko(e) {
        e.return !== null && (Sn(e, 1), Ec(e, 1, 0))
    }

    function Go(e) {
        for (; e === qi;) qi = qn[--Zn], qn[Zn] = null, Zi = qn[--Zn], qn[Zn] = null;
        for (; e === wn;) wn = dt[--ht], dt[ht] = null, zt = dt[--ht], dt[ht] = null, It = dt[--ht], dt[ht] = null
    }
    var lt = null,
        at = null,
        we = !1,
        Tt = null;

    function Ac(e, t) {
        var n = yt(5, null, null, 0);
        n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
    }

    function Dc(e, t) {
        switch (e.tag) {
            case 5:
                var n = e.type;
                return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, lt = e, at = bt(t.firstChild), !0) : !1;
            case 6:
                return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, lt = e, at = null, !0) : !1;
            case 13:
                return t = t.nodeType !== 8 ? null : t, t !== null ? (n = wn !== null ? {
                    id: It,
                    overflow: zt
                } : null, e.memoizedState = {
                    dehydrated: t,
                    treeContext: n,
                    retryLane: 1073741824
                }, n = yt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, lt = e, at = null, !0) : !1;
            default:
                return !1
        }
    }

    function Xo(e) {
        return (e.mode & 1) !== 0 && (e.flags & 128) === 0
    }

    function Qo(e) {
        if (we) {
            var t = at;
            if (t) {
                var n = t;
                if (!Dc(e, t)) {
                    if (Xo(e)) throw Error(s(418));
                    t = bt(n.nextSibling);
                    var o = lt;
                    t && Dc(e, t) ? Ac(o, n) : (e.flags = e.flags & -4097 | 2, we = !1, lt = e)
                }
            } else {
                if (Xo(e)) throw Error(s(418));
                e.flags = e.flags & -4097 | 2, we = !1, lt = e
            }
        }
    }

    function Rc(e) {
        for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
        lt = e
    }

    function Ji(e) {
        if (e !== lt) return !1;
        if (!we) return Rc(e), we = !0, !1;
        var t;
        if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !zo(e.type, e.memoizedProps)), t && (t = at)) {
            if (Xo(e)) throw Mc(), Error(s(418));
            for (; t;) Ac(e, t), t = bt(t.nextSibling)
        }
        if (Rc(e), e.tag === 13) {
            if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
            e: {
                for (e = e.nextSibling, t = 0; e;) {
                    if (e.nodeType === 8) {
                        var n = e.data;
                        if (n === "/$") {
                            if (t === 0) {
                                at = bt(e.nextSibling);
                                break e
                            }
                            t--
                        } else n !== "$" && n !== "$!" && n !== "$?" || t++
                    }
                    e = e.nextSibling
                }
                at = null
            }
        } else at = lt ? bt(e.stateNode.nextSibling) : null;
        return !0
    }

    function Mc() {
        for (var e = at; e;) e = bt(e.nextSibling)
    }

    function Jn() {
        at = lt = null, we = !1
    }

    function Yo(e) {
        Tt === null ? Tt = [e] : Tt.push(e)
    }
    var Sg = ee.ReactCurrentBatchConfig;

    function $r(e, t, n) {
        if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
            if (n._owner) {
                if (n = n._owner, n) {
                    if (n.tag !== 1) throw Error(s(309));
                    var o = n.stateNode
                }
                if (!o) throw Error(s(147, e));
                var a = o,
                    u = "" + e;
                return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === u ? t.ref : (t = function(h) {
                    var y = a.refs;
                    h === null ? delete y[u] : y[u] = h
                }, t._stringRef = u, t)
            }
            if (typeof e != "string") throw Error(s(284));
            if (!n._owner) throw Error(s(290, e))
        }
        return e
    }

    function bi(e, t) {
        throw e = Object.prototype.toString.call(t), Error(s(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
    }

    function Nc(e) {
        var t = e._init;
        return t(e._payload)
    }

    function Lc(e) {
        function t(k, S) {
            if (e) {
                var C = k.deletions;
                C === null ? (k.deletions = [S], k.flags |= 16) : C.push(S)
            }
        }

        function n(k, S) {
            if (!e) return null;
            for (; S !== null;) t(k, S), S = S.sibling;
            return null
        }

        function o(k, S) {
            for (k = new Map; S !== null;) S.key !== null ? k.set(S.key, S) : k.set(S.index, S), S = S.sibling;
            return k
        }

        function a(k, S) {
            return k = fn(k, S), k.index = 0, k.sibling = null, k
        }

        function u(k, S, C) {
            return k.index = C, e ? (C = k.alternate, C !== null ? (C = C.index, C < S ? (k.flags |= 2, S) : C) : (k.flags |= 2, S)) : (k.flags |= 1048576, S)
        }

        function h(k) {
            return e && k.alternate === null && (k.flags |= 2), k
        }

        function y(k, S, C, O) {
            return S === null || S.tag !== 6 ? (S = Bl(C, k.mode, O), S.return = k, S) : (S = a(S, C), S.return = k, S)
        }

        function w(k, S, C, O) {
            var G = C.type;
            return G === ae ? N(k, S, C.props.children, O, C.key) : S !== null && (S.elementType === G || typeof G == "object" && G !== null && G.$$typeof === Xe && Nc(G) === S.type) ? (O = a(S, C.props), O.ref = $r(k, S, C), O.return = k, O) : (O = Ts(C.type, C.key, C.props, null, k.mode, O), O.ref = $r(k, S, C), O.return = k, O)
        }

        function E(k, S, C, O) {
            return S === null || S.tag !== 4 || S.stateNode.containerInfo !== C.containerInfo || S.stateNode.implementation !== C.implementation ? (S = Ul(C, k.mode, O), S.return = k, S) : (S = a(S, C.children || []), S.return = k, S)
        }

        function N(k, S, C, O, G) {
            return S === null || S.tag !== 7 ? (S = Rn(C, k.mode, O, G), S.return = k, S) : (S = a(S, C), S.return = k, S)
        }

        function L(k, S, C) {
            if (typeof S == "string" && S !== "" || typeof S == "number") return S = Bl("" + S, k.mode, C), S.return = k, S;
            if (typeof S == "object" && S !== null) {
                switch (S.$$typeof) {
                    case X:
                        return C = Ts(S.type, S.key, S.props, null, k.mode, C), C.ref = $r(k, null, S), C.return = k, C;
                    case ne:
                        return S = Ul(S, k.mode, C), S.return = k, S;
                    case Xe:
                        var O = S._init;
                        return L(k, O(S._payload), C)
                }
                if (vr(S) || Q(S)) return S = Rn(S, k.mode, C, null), S.return = k, S;
                bi(k, S)
            }
            return null
        }

        function D(k, S, C, O) {
            var G = S !== null ? S.key : null;
            if (typeof C == "string" && C !== "" || typeof C == "number") return G !== null ? null : y(k, S, "" + C, O);
            if (typeof C == "object" && C !== null) {
                switch (C.$$typeof) {
                    case X:
                        return C.key === G ? w(k, S, C, O) : null;
                    case ne:
                        return C.key === G ? E(k, S, C, O) : null;
                    case Xe:
                        return G = C._init, D(k, S, G(C._payload), O)
                }
                if (vr(C) || Q(C)) return G !== null ? null : N(k, S, C, O, null);
                bi(k, C)
            }
            return null
        }

        function z(k, S, C, O, G) {
            if (typeof O == "string" && O !== "" || typeof O == "number") return k = k.get(C) || null, y(S, k, "" + O, G);
            if (typeof O == "object" && O !== null) {
                switch (O.$$typeof) {
                    case X:
                        return k = k.get(O.key === null ? C : O.key) || null, w(S, k, O, G);
                    case ne:
                        return k = k.get(O.key === null ? C : O.key) || null, E(S, k, O, G);
                    case Xe:
                        var Y = O._init;
                        return z(k, S, C, Y(O._payload), G)
                }
                if (vr(O) || Q(O)) return k = k.get(C) || null, N(S, k, O, G, null);
                bi(S, O)
            }
            return null
        }

        function $(k, S, C, O) {
            for (var G = null, Y = null, q = S, b = S = 0, Oe = null; q !== null && b < C.length; b++) {
                q.index > b ? (Oe = q, q = null) : Oe = q.sibling;
                var fe = D(k, q, C[b], O);
                if (fe === null) {
                    q === null && (q = Oe);
                    break
                }
                e && q && fe.alternate === null && t(k, q), S = u(fe, S, b), Y === null ? G = fe : Y.sibling = fe, Y = fe, q = Oe
            }
            if (b === C.length) return n(k, q), we && Sn(k, b), G;
            if (q === null) {
                for (; b < C.length; b++) q = L(k, C[b], O), q !== null && (S = u(q, S, b), Y === null ? G = q : Y.sibling = q, Y = q);
                return we && Sn(k, b), G
            }
            for (q = o(k, q); b < C.length; b++) Oe = z(q, k, b, C[b], O), Oe !== null && (e && Oe.alternate !== null && q.delete(Oe.key === null ? b : Oe.key), S = u(Oe, S, b), Y === null ? G = Oe : Y.sibling = Oe, Y = Oe);
            return e && q.forEach(function(dn) {
                return t(k, dn)
            }), we && Sn(k, b), G
        }

        function H(k, S, C, O) {
            var G = Q(C);
            if (typeof G != "function") throw Error(s(150));
            if (C = G.call(C), C == null) throw Error(s(151));
            for (var Y = G = null, q = S, b = S = 0, Oe = null, fe = C.next(); q !== null && !fe.done; b++, fe = C.next()) {
                q.index > b ? (Oe = q, q = null) : Oe = q.sibling;
                var dn = D(k, q, fe.value, O);
                if (dn === null) {
                    q === null && (q = Oe);
                    break
                }
                e && q && dn.alternate === null && t(k, q), S = u(dn, S, b), Y === null ? G = dn : Y.sibling = dn, Y = dn, q = Oe
            }
            if (fe.done) return n(k, q), we && Sn(k, b), G;
            if (q === null) {
                for (; !fe.done; b++, fe = C.next()) fe = L(k, fe.value, O), fe !== null && (S = u(fe, S, b), Y === null ? G = fe : Y.sibling = fe, Y = fe);
                return we && Sn(k, b), G
            }
            for (q = o(k, q); !fe.done; b++, fe = C.next()) fe = z(q, k, b, fe.value, O), fe !== null && (e && fe.alternate !== null && q.delete(fe.key === null ? b : fe.key), S = u(fe, S, b), Y === null ? G = fe : Y.sibling = fe, Y = fe);
            return e && q.forEach(function(bg) {
                return t(k, bg)
            }), we && Sn(k, b), G
        }

        function Re(k, S, C, O) {
            if (typeof C == "object" && C !== null && C.type === ae && C.key === null && (C = C.props.children), typeof C == "object" && C !== null) {
                switch (C.$$typeof) {
                    case X:
                        e: {
                            for (var G = C.key, Y = S; Y !== null;) {
                                if (Y.key === G) {
                                    if (G = C.type, G === ae) {
                                        if (Y.tag === 7) {
                                            n(k, Y.sibling), S = a(Y, C.props.children), S.return = k, k = S;
                                            break e
                                        }
                                    } else if (Y.elementType === G || typeof G == "object" && G !== null && G.$$typeof === Xe && Nc(G) === Y.type) {
                                        n(k, Y.sibling), S = a(Y, C.props), S.ref = $r(k, Y, C), S.return = k, k = S;
                                        break e
                                    }
                                    n(k, Y);
                                    break
                                } else t(k, Y);
                                Y = Y.sibling
                            }
                            C.type === ae ? (S = Rn(C.props.children, k.mode, O, C.key), S.return = k, k = S) : (O = Ts(C.type, C.key, C.props, null, k.mode, O), O.ref = $r(k, S, C), O.return = k, k = O)
                        }
                        return h(k);
                    case ne:
                        e: {
                            for (Y = C.key; S !== null;) {
                                if (S.key === Y)
                                    if (S.tag === 4 && S.stateNode.containerInfo === C.containerInfo && S.stateNode.implementation === C.implementation) {
                                        n(k, S.sibling), S = a(S, C.children || []), S.return = k, k = S;
                                        break e
                                    } else {
                                        n(k, S);
                                        break
                                    }
                                else t(k, S);
                                S = S.sibling
                            }
                            S = Ul(C, k.mode, O),
                            S.return = k,
                            k = S
                        }
                        return h(k);
                    case Xe:
                        return Y = C._init, Re(k, S, Y(C._payload), O)
                }
                if (vr(C)) return $(k, S, C, O);
                if (Q(C)) return H(k, S, C, O);
                bi(k, C)
            }
            return typeof C == "string" && C !== "" || typeof C == "number" ? (C = "" + C, S !== null && S.tag === 6 ? (n(k, S.sibling), S = a(S, C), S.return = k, k = S) : (n(k, S), S = Bl(C, k.mode, O), S.return = k, k = S), h(k)) : n(k, S)
        }
        return Re
    }
    var bn = Lc(!0),
        jc = Lc(!1),
        es = en(null),
        ts = null,
        er = null,
        qo = null;

    function Zo() {
        qo = er = ts = null
    }

    function Jo(e) {
        var t = es.current;
        ye(es), e._currentValue = t
    }

    function bo(e, t, n) {
        for (; e !== null;) {
            var o = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t, o !== null && (o.childLanes |= t)) : o !== null && (o.childLanes & t) !== t && (o.childLanes |= t), e === n) break;
            e = e.return
        }
    }

    function tr(e, t) {
        ts = e, qo = er = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (et = !0), e.firstContext = null)
    }

    function pt(e) {
        var t = e._currentValue;
        if (qo !== e)
            if (e = {
                    context: e,
                    memoizedValue: t,
                    next: null
                }, er === null) {
                if (ts === null) throw Error(s(308));
                er = e, ts.dependencies = {
                    lanes: 0,
                    firstContext: e
                }
            } else er = er.next = e;
        return t
    }
    var Pn = null;

    function el(e) {
        Pn === null ? Pn = [e] : Pn.push(e)
    }

    function _c(e, t, n, o) {
        var a = t.interleaved;
        return a === null ? (n.next = n, el(t)) : (n.next = a.next, a.next = n), t.interleaved = n, Bt(e, o)
    }

    function Bt(e, t) {
        e.lanes |= t;
        var n = e.alternate;
        for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
        return n.tag === 3 ? n.stateNode : null
    }
    var rn = !1;

    function tl(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                interleaved: null,
                lanes: 0
            },
            effects: null
        }
    }

    function Vc(e, t) {
        e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects
        })
    }

    function Ut(e, t) {
        return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }

    function sn(e, t, n) {
        var o = e.updateQueue;
        if (o === null) return null;
        if (o = o.shared, le & 2) {
            var a = o.pending;
            return a === null ? t.next = t : (t.next = a.next, a.next = t), o.pending = t, Bt(e, n)
        }
        return a = o.interleaved, a === null ? (t.next = t, el(o)) : (t.next = a.next, a.next = t), o.interleaved = t, Bt(e, n)
    }

    function ns(e, t, n) {
        if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
            var o = t.lanes;
            o &= e.pendingLanes, n |= o, t.lanes = n, mo(e, n)
        }
    }

    function Oc(e, t) {
        var n = e.updateQueue,
            o = e.alternate;
        if (o !== null && (o = o.updateQueue, n === o)) {
            var a = null,
                u = null;
            if (n = n.firstBaseUpdate, n !== null) {
                do {
                    var h = {
                        eventTime: n.eventTime,
                        lane: n.lane,
                        tag: n.tag,
                        payload: n.payload,
                        callback: n.callback,
                        next: null
                    };
                    u === null ? a = u = h : u = u.next = h, n = n.next
                } while (n !== null);
                u === null ? a = u = t : u = u.next = t
            } else a = u = t;
            n = {
                baseState: o.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: u,
                shared: o.shared,
                effects: o.effects
            }, e.updateQueue = n;
            return
        }
        e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
    }

    function rs(e, t, n, o) {
        var a = e.updateQueue;
        rn = !1;
        var u = a.firstBaseUpdate,
            h = a.lastBaseUpdate,
            y = a.shared.pending;
        if (y !== null) {
            a.shared.pending = null;
            var w = y,
                E = w.next;
            w.next = null, h === null ? u = E : h.next = E, h = w;
            var N = e.alternate;
            N !== null && (N = N.updateQueue, y = N.lastBaseUpdate, y !== h && (y === null ? N.firstBaseUpdate = E : y.next = E, N.lastBaseUpdate = w))
        }
        if (u !== null) {
            var L = a.baseState;
            h = 0, N = E = w = null, y = u;
            do {
                var D = y.lane,
                    z = y.eventTime;
                if ((o & D) === D) {
                    N !== null && (N = N.next = {
                        eventTime: z,
                        lane: 0,
                        tag: y.tag,
                        payload: y.payload,
                        callback: y.callback,
                        next: null
                    });
                    e: {
                        var $ = e,
                            H = y;
                        switch (D = t, z = n, H.tag) {
                            case 1:
                                if ($ = H.payload, typeof $ == "function") {
                                    L = $.call(z, L, D);
                                    break e
                                }
                                L = $;
                                break e;
                            case 3:
                                $.flags = $.flags & -65537 | 128;
                            case 0:
                                if ($ = H.payload, D = typeof $ == "function" ? $.call(z, L, D) : $, D == null) break e;
                                L = B({}, L, D);
                                break e;
                            case 2:
                                rn = !0
                        }
                    }
                    y.callback !== null && y.lane !== 0 && (e.flags |= 64, D = a.effects, D === null ? a.effects = [y] : D.push(y))
                } else z = {
                    eventTime: z,
                    lane: D,
                    tag: y.tag,
                    payload: y.payload,
                    callback: y.callback,
                    next: null
                }, N === null ? (E = N = z, w = L) : N = N.next = z, h |= D;
                if (y = y.next, y === null) {
                    if (y = a.shared.pending, y === null) break;
                    D = y, y = D.next, D.next = null, a.lastBaseUpdate = D, a.shared.pending = null
                }
            } while (!0);
            if (N === null && (w = L), a.baseState = w, a.firstBaseUpdate = E, a.lastBaseUpdate = N, t = a.shared.interleaved, t !== null) {
                a = t;
                do h |= a.lane, a = a.next; while (a !== t)
            } else u === null && (a.shared.lanes = 0);
            Cn |= h, e.lanes = h, e.memoizedState = L
        }
    }

    function Fc(e, t, n) {
        if (e = t.effects, t.effects = null, e !== null)
            for (t = 0; t < e.length; t++) {
                var o = e[t],
                    a = o.callback;
                if (a !== null) {
                    if (o.callback = null, o = n, typeof a != "function") throw Error(s(191, a));
                    a.call(o)
                }
            }
    }
    var Hr = {},
        Nt = en(Hr),
        Kr = en(Hr),
        Gr = en(Hr);

    function Tn(e) {
        if (e === Hr) throw Error(s(174));
        return e
    }

    function nl(e, t) {
        switch (me(Gr, t), me(Kr, e), me(Nt, Hr), e = t.nodeType, e) {
            case 9:
            case 11:
                t = (t = t.documentElement) ? t.namespaceURI : no(null, "");
                break;
            default:
                e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = no(t, e)
        }
        ye(Nt), me(Nt, t)
    }

    function nr() {
        ye(Nt), ye(Kr), ye(Gr)
    }

    function Ic(e) {
        Tn(Gr.current);
        var t = Tn(Nt.current),
            n = no(t, e.type);
        t !== n && (me(Kr, e), me(Nt, n))
    }

    function rl(e) {
        Kr.current === e && (ye(Nt), ye(Kr))
    }
    var Pe = en(0);

    function is(e) {
        for (var t = e; t !== null;) {
            if (t.tag === 13) {
                var n = t.memoizedState;
                if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
            } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
                if (t.flags & 128) return t
            } else if (t.child !== null) {
                t.child.return = t, t = t.child;
                continue
            }
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return null;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
        return null
    }
    var il = [];

    function sl() {
        for (var e = 0; e < il.length; e++) il[e]._workInProgressVersionPrimary = null;
        il.length = 0
    }
    var ss = ee.ReactCurrentDispatcher,
        ol = ee.ReactCurrentBatchConfig,
        kn = 0,
        Te = null,
        Le = null,
        _e = null,
        os = !1,
        Xr = !1,
        Qr = 0,
        Pg = 0;

    function Ue() {
        throw Error(s(321))
    }

    function ll(e, t) {
        if (t === null) return !1;
        for (var n = 0; n < t.length && n < e.length; n++)
            if (!Pt(e[n], t[n])) return !1;
        return !0
    }

    function al(e, t, n, o, a, u) {
        if (kn = u, Te = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ss.current = e === null || e.memoizedState === null ? Eg : Ag, e = n(o, a), Xr) {
            u = 0;
            do {
                if (Xr = !1, Qr = 0, 25 <= u) throw Error(s(301));
                u += 1, _e = Le = null, t.updateQueue = null, ss.current = Dg, e = n(o, a)
            } while (Xr)
        }
        if (ss.current = us, t = Le !== null && Le.next !== null, kn = 0, _e = Le = Te = null, os = !1, t) throw Error(s(300));
        return e
    }

    function ul() {
        var e = Qr !== 0;
        return Qr = 0, e
    }

    function Lt() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return _e === null ? Te.memoizedState = _e = e : _e = _e.next = e, _e
    }

    function mt() {
        if (Le === null) {
            var e = Te.alternate;
            e = e !== null ? e.memoizedState : null
        } else e = Le.next;
        var t = _e === null ? Te.memoizedState : _e.next;
        if (t !== null) _e = t, Le = e;
        else {
            if (e === null) throw Error(s(310));
            Le = e, e = {
                memoizedState: Le.memoizedState,
                baseState: Le.baseState,
                baseQueue: Le.baseQueue,
                queue: Le.queue,
                next: null
            }, _e === null ? Te.memoizedState = _e = e : _e = _e.next = e
        }
        return _e
    }

    function Yr(e, t) {
        return typeof t == "function" ? t(e) : t
    }

    function cl(e) {
        var t = mt(),
            n = t.queue;
        if (n === null) throw Error(s(311));
        n.lastRenderedReducer = e;
        var o = Le,
            a = o.baseQueue,
            u = n.pending;
        if (u !== null) {
            if (a !== null) {
                var h = a.next;
                a.next = u.next, u.next = h
            }
            o.baseQueue = a = u, n.pending = null
        }
        if (a !== null) {
            u = a.next, o = o.baseState;
            var y = h = null,
                w = null,
                E = u;
            do {
                var N = E.lane;
                if ((kn & N) === N) w !== null && (w = w.next = {
                    lane: 0,
                    action: E.action,
                    hasEagerState: E.hasEagerState,
                    eagerState: E.eagerState,
                    next: null
                }), o = E.hasEagerState ? E.eagerState : e(o, E.action);
                else {
                    var L = {
                        lane: N,
                        action: E.action,
                        hasEagerState: E.hasEagerState,
                        eagerState: E.eagerState,
                        next: null
                    };
                    w === null ? (y = w = L, h = o) : w = w.next = L, Te.lanes |= N, Cn |= N
                }
                E = E.next
            } while (E !== null && E !== u);
            w === null ? h = o : w.next = y, Pt(o, t.memoizedState) || (et = !0), t.memoizedState = o, t.baseState = h, t.baseQueue = w, n.lastRenderedState = o
        }
        if (e = n.interleaved, e !== null) {
            a = e;
            do u = a.lane, Te.lanes |= u, Cn |= u, a = a.next; while (a !== e)
        } else a === null && (n.lanes = 0);
        return [t.memoizedState, n.dispatch]
    }

    function fl(e) {
        var t = mt(),
            n = t.queue;
        if (n === null) throw Error(s(311));
        n.lastRenderedReducer = e;
        var o = n.dispatch,
            a = n.pending,
            u = t.memoizedState;
        if (a !== null) {
            n.pending = null;
            var h = a = a.next;
            do u = e(u, h.action), h = h.next; while (h !== a);
            Pt(u, t.memoizedState) || (et = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), n.lastRenderedState = u
        }
        return [u, o]
    }

    function zc() {}

    function Bc(e, t) {
        var n = Te,
            o = mt(),
            a = t(),
            u = !Pt(o.memoizedState, a);
        if (u && (o.memoizedState = a, et = !0), o = o.queue, dl($c.bind(null, n, o, e), [e]), o.getSnapshot !== t || u || _e !== null && _e.memoizedState.tag & 1) {
            if (n.flags |= 2048, qr(9, Wc.bind(null, n, o, a, t), void 0, null), Ve === null) throw Error(s(349));
            kn & 30 || Uc(n, t, a)
        }
        return a
    }

    function Uc(e, t, n) {
        e.flags |= 16384, e = {
            getSnapshot: t,
            value: n
        }, t = Te.updateQueue, t === null ? (t = {
            lastEffect: null,
            stores: null
        }, Te.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
    }

    function Wc(e, t, n, o) {
        t.value = n, t.getSnapshot = o, Hc(t) && Kc(e)
    }

    function $c(e, t, n) {
        return n(function() {
            Hc(t) && Kc(e)
        })
    }

    function Hc(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var n = t();
            return !Pt(e, n)
        } catch {
            return !0
        }
    }

    function Kc(e) {
        var t = Bt(e, 1);
        t !== null && At(t, e, 1, -1)
    }

    function Gc(e) {
        var t = Lt();
        return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Yr,
            lastRenderedState: e
        }, t.queue = e, e = e.dispatch = Cg.bind(null, Te, e), [t.memoizedState, e]
    }

    function qr(e, t, n, o) {
        return e = {
            tag: e,
            create: t,
            destroy: n,
            deps: o,
            next: null
        }, t = Te.updateQueue, t === null ? (t = {
            lastEffect: null,
            stores: null
        }, Te.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (o = n.next, n.next = e, e.next = o, t.lastEffect = e)), e
    }

    function Xc() {
        return mt().memoizedState
    }

    function ls(e, t, n, o) {
        var a = Lt();
        Te.flags |= e, a.memoizedState = qr(1 | t, n, void 0, o === void 0 ? null : o)
    }

    function as(e, t, n, o) {
        var a = mt();
        o = o === void 0 ? null : o;
        var u = void 0;
        if (Le !== null) {
            var h = Le.memoizedState;
            if (u = h.destroy, o !== null && ll(o, h.deps)) {
                a.memoizedState = qr(t, n, u, o);
                return
            }
        }
        Te.flags |= e, a.memoizedState = qr(1 | t, n, u, o)
    }

    function Qc(e, t) {
        return ls(8390656, 8, e, t)
    }

    function dl(e, t) {
        return as(2048, 8, e, t)
    }

    function Yc(e, t) {
        return as(4, 2, e, t)
    }

    function qc(e, t) {
        return as(4, 4, e, t)
    }

    function Zc(e, t) {
        if (typeof t == "function") return e = e(), t(e),
            function() {
                t(null)
            };
        if (t != null) return e = e(), t.current = e,
            function() {
                t.current = null
            }
    }

    function Jc(e, t, n) {
        return n = n != null ? n.concat([e]) : null, as(4, 4, Zc.bind(null, t, e), n)
    }

    function hl() {}

    function bc(e, t) {
        var n = mt();
        t = t === void 0 ? null : t;
        var o = n.memoizedState;
        return o !== null && t !== null && ll(t, o[1]) ? o[0] : (n.memoizedState = [e, t], e)
    }

    function ef(e, t) {
        var n = mt();
        t = t === void 0 ? null : t;
        var o = n.memoizedState;
        return o !== null && t !== null && ll(t, o[1]) ? o[0] : (e = e(), n.memoizedState = [e, t], e)
    }

    function tf(e, t, n) {
        return kn & 21 ? (Pt(n, t) || (n = Nu(), Te.lanes |= n, Cn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, et = !0), e.memoizedState = n)
    }

    function Tg(e, t) {
        var n = he;
        he = n !== 0 && 4 > n ? n : 4, e(!0);
        var o = ol.transition;
        ol.transition = {};
        try {
            e(!1), t()
        } finally {
            he = n, ol.transition = o
        }
    }

    function nf() {
        return mt().memoizedState
    }

    function kg(e, t, n) {
        var o = un(e);
        if (n = {
                lane: o,
                action: n,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, rf(e)) sf(t, n);
        else if (n = _c(e, t, n, o), n !== null) {
            var a = Ye();
            At(n, e, o, a), of (n, t, o)
        }
    }

    function Cg(e, t, n) {
        var o = un(e),
            a = {
                lane: o,
                action: n,
                hasEagerState: !1,
                eagerState: null,
                next: null
            };
        if (rf(e)) sf(t, a);
        else {
            var u = e.alternate;
            if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null)) try {
                var h = t.lastRenderedState,
                    y = u(h, n);
                if (a.hasEagerState = !0, a.eagerState = y, Pt(y, h)) {
                    var w = t.interleaved;
                    w === null ? (a.next = a, el(t)) : (a.next = w.next, w.next = a), t.interleaved = a;
                    return
                }
            } catch {} finally {}
            n = _c(e, t, a, o), n !== null && (a = Ye(), At(n, e, o, a), of (n, t, o))
        }
    }

    function rf(e) {
        var t = e.alternate;
        return e === Te || t !== null && t === Te
    }

    function sf(e, t) {
        Xr = os = !0;
        var n = e.pending;
        n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
    }

    function of (e, t, n) {
        if (n & 4194240) {
            var o = t.lanes;
            o &= e.pendingLanes, n |= o, t.lanes = n, mo(e, n)
        }
    }
    var us = {
            readContext: pt,
            useCallback: Ue,
            useContext: Ue,
            useEffect: Ue,
            useImperativeHandle: Ue,
            useInsertionEffect: Ue,
            useLayoutEffect: Ue,
            useMemo: Ue,
            useReducer: Ue,
            useRef: Ue,
            useState: Ue,
            useDebugValue: Ue,
            useDeferredValue: Ue,
            useTransition: Ue,
            useMutableSource: Ue,
            useSyncExternalStore: Ue,
            useId: Ue,
            unstable_isNewReconciler: !1
        },
        Eg = {
            readContext: pt,
            useCallback: function(e, t) {
                return Lt().memoizedState = [e, t === void 0 ? null : t], e
            },
            useContext: pt,
            useEffect: Qc,
            useImperativeHandle: function(e, t, n) {
                return n = n != null ? n.concat([e]) : null, ls(4194308, 4, Zc.bind(null, t, e), n)
            },
            useLayoutEffect: function(e, t) {
                return ls(4194308, 4, e, t)
            },
            useInsertionEffect: function(e, t) {
                return ls(4, 2, e, t)
            },
            useMemo: function(e, t) {
                var n = Lt();
                return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
            },
            useReducer: function(e, t, n) {
                var o = Lt();
                return t = n !== void 0 ? n(t) : t, o.memoizedState = o.baseState = t, e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t
                }, o.queue = e, e = e.dispatch = kg.bind(null, Te, e), [o.memoizedState, e]
            },
            useRef: function(e) {
                var t = Lt();
                return e = {
                    current: e
                }, t.memoizedState = e
            },
            useState: Gc,
            useDebugValue: hl,
            useDeferredValue: function(e) {
                return Lt().memoizedState = e
            },
            useTransition: function() {
                var e = Gc(!1),
                    t = e[0];
                return e = Tg.bind(null, e[1]), Lt().memoizedState = e, [t, e]
            },
            useMutableSource: function() {},
            useSyncExternalStore: function(e, t, n) {
                var o = Te,
                    a = Lt();
                if (we) {
                    if (n === void 0) throw Error(s(407));
                    n = n()
                } else {
                    if (n = t(), Ve === null) throw Error(s(349));
                    kn & 30 || Uc(o, t, n)
                }
                a.memoizedState = n;
                var u = {
                    value: n,
                    getSnapshot: t
                };
                return a.queue = u, Qc($c.bind(null, o, u, e), [e]), o.flags |= 2048, qr(9, Wc.bind(null, o, u, n, t), void 0, null), n
            },
            useId: function() {
                var e = Lt(),
                    t = Ve.identifierPrefix;
                if (we) {
                    var n = zt,
                        o = It;
                    n = (o & ~(1 << 32 - St(o) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Qr++, 0 < n && (t += "H" + n.toString(32)), t += ":"
                } else n = Pg++, t = ":" + t + "r" + n.toString(32) + ":";
                return e.memoizedState = t
            },
            unstable_isNewReconciler: !1
        },
        Ag = {
            readContext: pt,
            useCallback: bc,
            useContext: pt,
            useEffect: dl,
            useImperativeHandle: Jc,
            useInsertionEffect: Yc,
            useLayoutEffect: qc,
            useMemo: ef,
            useReducer: cl,
            useRef: Xc,
            useState: function() {
                return cl(Yr)
            },
            useDebugValue: hl,
            useDeferredValue: function(e) {
                var t = mt();
                return tf(t, Le.memoizedState, e)
            },
            useTransition: function() {
                var e = cl(Yr)[0],
                    t = mt().memoizedState;
                return [e, t]
            },
            useMutableSource: zc,
            useSyncExternalStore: Bc,
            useId: nf,
            unstable_isNewReconciler: !1
        },
        Dg = {
            readContext: pt,
            useCallback: bc,
            useContext: pt,
            useEffect: dl,
            useImperativeHandle: Jc,
            useInsertionEffect: Yc,
            useLayoutEffect: qc,
            useMemo: ef,
            useReducer: fl,
            useRef: Xc,
            useState: function() {
                return fl(Yr)
            },
            useDebugValue: hl,
            useDeferredValue: function(e) {
                var t = mt();
                return Le === null ? t.memoizedState = e : tf(t, Le.memoizedState, e)
            },
            useTransition: function() {
                var e = fl(Yr)[0],
                    t = mt().memoizedState;
                return [e, t]
            },
            useMutableSource: zc,
            useSyncExternalStore: Bc,
            useId: nf,
            unstable_isNewReconciler: !1
        };

    function kt(e, t) {
        if (e && e.defaultProps) {
            t = B({}, t), e = e.defaultProps;
            for (var n in e) t[n] === void 0 && (t[n] = e[n]);
            return t
        }
        return t
    }

    function pl(e, t, n, o) {
        t = e.memoizedState, n = n(o, t), n = n == null ? t : B({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
    }
    var cs = {
        isMounted: function(e) {
            return (e = e._reactInternals) ? yn(e) === e : !1
        },
        enqueueSetState: function(e, t, n) {
            e = e._reactInternals;
            var o = Ye(),
                a = un(e),
                u = Ut(o, a);
            u.payload = t, n != null && (u.callback = n), t = sn(e, u, a), t !== null && (At(t, e, a, o), ns(t, e, a))
        },
        enqueueReplaceState: function(e, t, n) {
            e = e._reactInternals;
            var o = Ye(),
                a = un(e),
                u = Ut(o, a);
            u.tag = 1, u.payload = t, n != null && (u.callback = n), t = sn(e, u, a), t !== null && (At(t, e, a, o), ns(t, e, a))
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var n = Ye(),
                o = un(e),
                a = Ut(n, o);
            a.tag = 2, t != null && (a.callback = t), t = sn(e, a, o), t !== null && (At(t, e, o, n), ns(t, e, o))
        }
    };

    function lf(e, t, n, o, a, u, h) {
        return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(o, u, h) : t.prototype && t.prototype.isPureReactComponent ? !Or(n, o) || !Or(a, u) : !0
    }

    function af(e, t, n) {
        var o = !1,
            a = tn,
            u = t.contextType;
        return typeof u == "object" && u !== null ? u = pt(u) : (a = be(t) ? xn : Be.current, o = t.contextTypes, u = (o = o != null) ? Yn(e, a) : tn), t = new t(n, u), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = cs, e.stateNode = t, t._reactInternals = e, o && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = u), t
    }

    function uf(e, t, n, o) {
        e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, o), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, o), t.state !== e && cs.enqueueReplaceState(t, t.state, null)
    }

    function ml(e, t, n, o) {
        var a = e.stateNode;
        a.props = n, a.state = e.memoizedState, a.refs = {}, tl(e);
        var u = t.contextType;
        typeof u == "object" && u !== null ? a.context = pt(u) : (u = be(t) ? xn : Be.current, a.context = Yn(e, u)), a.state = e.memoizedState, u = t.getDerivedStateFromProps, typeof u == "function" && (pl(e, t, u, n), a.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (t = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), t !== a.state && cs.enqueueReplaceState(a, a.state, null), rs(e, n, a, o), a.state = e.memoizedState), typeof a.componentDidMount == "function" && (e.flags |= 4194308)
    }

    function rr(e, t) {
        try {
            var n = "",
                o = t;
            do n += ue(o), o = o.return; while (o);
            var a = n
        } catch (u) {
            a = `
Error generating stack: ` + u.message + `
` + u.stack
        }
        return {
            value: e,
            source: t,
            stack: a,
            digest: null
        }
    }

    function gl(e, t, n) {
        return {
            value: e,
            source: null,
            stack: n ? ? null,
            digest: t ? ? null
        }
    }

    function yl(e, t) {
        try {
            console.error(t.value)
        } catch (n) {
            setTimeout(function() {
                throw n
            })
        }
    }
    var Rg = typeof WeakMap == "function" ? WeakMap : Map;

    function cf(e, t, n) {
        n = Ut(-1, n), n.tag = 3, n.payload = {
            element: null
        };
        var o = t.value;
        return n.callback = function() {
            ys || (ys = !0, Ll = o), yl(e, t)
        }, n
    }

    function ff(e, t, n) {
        n = Ut(-1, n), n.tag = 3;
        var o = e.type.getDerivedStateFromError;
        if (typeof o == "function") {
            var a = t.value;
            n.payload = function() {
                return o(a)
            }, n.callback = function() {
                yl(e, t)
            }
        }
        var u = e.stateNode;
        return u !== null && typeof u.componentDidCatch == "function" && (n.callback = function() {
            yl(e, t), typeof o != "function" && (ln === null ? ln = new Set([this]) : ln.add(this));
            var h = t.stack;
            this.componentDidCatch(t.value, {
                componentStack: h !== null ? h : ""
            })
        }), n
    }

    function df(e, t, n) {
        var o = e.pingCache;
        if (o === null) {
            o = e.pingCache = new Rg;
            var a = new Set;
            o.set(t, a)
        } else a = o.get(t), a === void 0 && (a = new Set, o.set(t, a));
        a.has(n) || (a.add(n), e = $g.bind(null, e, t, n), t.then(e, e))
    }

    function hf(e) {
        do {
            var t;
            if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
            e = e.return
        } while (e !== null);
        return null
    }

    function pf(e, t, n, o, a) {
        return e.mode & 1 ? (e.flags |= 65536, e.lanes = a, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ut(-1, 1), t.tag = 2, sn(n, t, 1))), n.lanes |= 1), e)
    }
    var Mg = ee.ReactCurrentOwner,
        et = !1;

    function Qe(e, t, n, o) {
        t.child = e === null ? jc(t, null, n, o) : bn(t, e.child, n, o)
    }

    function mf(e, t, n, o, a) {
        n = n.render;
        var u = t.ref;
        return tr(t, a), o = al(e, t, n, o, u, a), n = ul(), e !== null && !et ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Wt(e, t, a)) : (we && n && Ko(t), t.flags |= 1, Qe(e, t, o, a), t.child)
    }

    function gf(e, t, n, o, a) {
        if (e === null) {
            var u = n.type;
            return typeof u == "function" && !zl(u) && u.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = u, yf(e, t, u, o, a)) : (e = Ts(n.type, null, o, t, t.mode, a), e.ref = t.ref, e.return = t, t.child = e)
        }
        if (u = e.child, !(e.lanes & a)) {
            var h = u.memoizedProps;
            if (n = n.compare, n = n !== null ? n : Or, n(h, o) && e.ref === t.ref) return Wt(e, t, a)
        }
        return t.flags |= 1, e = fn(u, o), e.ref = t.ref, e.return = t, t.child = e
    }

    function yf(e, t, n, o, a) {
        if (e !== null) {
            var u = e.memoizedProps;
            if (Or(u, o) && e.ref === t.ref)
                if (et = !1, t.pendingProps = o = u, (e.lanes & a) !== 0) e.flags & 131072 && (et = !0);
                else return t.lanes = e.lanes, Wt(e, t, a)
        }
        return vl(e, t, n, o, a)
    }

    function vf(e, t, n) {
        var o = t.pendingProps,
            a = o.children,
            u = e !== null ? e.memoizedState : null;
        if (o.mode === "hidden")
            if (!(t.mode & 1)) t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, me(sr, ut), ut |= n;
            else {
                if (!(n & 1073741824)) return e = u !== null ? u.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                }, t.updateQueue = null, me(sr, ut), ut |= e, null;
                t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                }, o = u !== null ? u.baseLanes : n, me(sr, ut), ut |= o
            }
        else u !== null ? (o = u.baseLanes | n, t.memoizedState = null) : o = n, me(sr, ut), ut |= o;
        return Qe(e, t, a, n), t.child
    }

    function xf(e, t) {
        var n = t.ref;
        (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
    }

    function vl(e, t, n, o, a) {
        var u = be(n) ? xn : Be.current;
        return u = Yn(t, u), tr(t, a), n = al(e, t, n, o, u, a), o = ul(), e !== null && !et ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Wt(e, t, a)) : (we && o && Ko(t), t.flags |= 1, Qe(e, t, n, a), t.child)
    }

    function wf(e, t, n, o, a) {
        if (be(n)) {
            var u = !0;
            Qi(t)
        } else u = !1;
        if (tr(t, a), t.stateNode === null) ds(e, t), af(t, n, o), ml(t, n, o, a), o = !0;
        else if (e === null) {
            var h = t.stateNode,
                y = t.memoizedProps;
            h.props = y;
            var w = h.context,
                E = n.contextType;
            typeof E == "object" && E !== null ? E = pt(E) : (E = be(n) ? xn : Be.current, E = Yn(t, E));
            var N = n.getDerivedStateFromProps,
                L = typeof N == "function" || typeof h.getSnapshotBeforeUpdate == "function";
            L || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (y !== o || w !== E) && uf(t, h, o, E), rn = !1;
            var D = t.memoizedState;
            h.state = D, rs(t, o, h, a), w = t.memoizedState, y !== o || D !== w || Je.current || rn ? (typeof N == "function" && (pl(t, n, N, o), w = t.memoizedState), (y = rn || lf(t, n, y, o, D, w, E)) ? (L || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount()), typeof h.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof h.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = o, t.memoizedState = w), h.props = o, h.state = w, h.context = E, o = y) : (typeof h.componentDidMount == "function" && (t.flags |= 4194308), o = !1)
        } else {
            h = t.stateNode, Vc(e, t), y = t.memoizedProps, E = t.type === t.elementType ? y : kt(t.type, y), h.props = E, L = t.pendingProps, D = h.context, w = n.contextType, typeof w == "object" && w !== null ? w = pt(w) : (w = be(n) ? xn : Be.current, w = Yn(t, w));
            var z = n.getDerivedStateFromProps;
            (N = typeof z == "function" || typeof h.getSnapshotBeforeUpdate == "function") || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (y !== L || D !== w) && uf(t, h, o, w), rn = !1, D = t.memoizedState, h.state = D, rs(t, o, h, a);
            var $ = t.memoizedState;
            y !== L || D !== $ || Je.current || rn ? (typeof z == "function" && (pl(t, n, z, o), $ = t.memoizedState), (E = rn || lf(t, n, E, o, D, $, w) || !1) ? (N || typeof h.UNSAFE_componentWillUpdate != "function" && typeof h.componentWillUpdate != "function" || (typeof h.componentWillUpdate == "function" && h.componentWillUpdate(o, $, w), typeof h.UNSAFE_componentWillUpdate == "function" && h.UNSAFE_componentWillUpdate(o, $, w)), typeof h.componentDidUpdate == "function" && (t.flags |= 4), typeof h.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof h.componentDidUpdate != "function" || y === e.memoizedProps && D === e.memoizedState || (t.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || y === e.memoizedProps && D === e.memoizedState || (t.flags |= 1024), t.memoizedProps = o, t.memoizedState = $), h.props = o, h.state = $, h.context = w, o = E) : (typeof h.componentDidUpdate != "function" || y === e.memoizedProps && D === e.memoizedState || (t.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || y === e.memoizedProps && D === e.memoizedState || (t.flags |= 1024), o = !1)
        }
        return xl(e, t, n, o, u, a)
    }

    function xl(e, t, n, o, a, u) {
        xf(e, t);
        var h = (t.flags & 128) !== 0;
        if (!o && !h) return a && kc(t, n, !1), Wt(e, t, u);
        o = t.stateNode, Mg.current = t;
        var y = h && typeof n.getDerivedStateFromError != "function" ? null : o.render();
        return t.flags |= 1, e !== null && h ? (t.child = bn(t, e.child, null, u), t.child = bn(t, null, y, u)) : Qe(e, t, y, u), t.memoizedState = o.state, a && kc(t, n, !0), t.child
    }

    function Sf(e) {
        var t = e.stateNode;
        t.pendingContext ? Pc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Pc(e, t.context, !1), nl(e, t.containerInfo)
    }

    function Pf(e, t, n, o, a) {
        return Jn(), Yo(a), t.flags |= 256, Qe(e, t, n, o), t.child
    }
    var wl = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
    };

    function Sl(e) {
        return {
            baseLanes: e,
            cachePool: null,
            transitions: null
        }
    }

    function Tf(e, t, n) {
        var o = t.pendingProps,
            a = Pe.current,
            u = !1,
            h = (t.flags & 128) !== 0,
            y;
        if ((y = h) || (y = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0), y ? (u = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (a |= 1), me(Pe, a & 1), e === null) return Qo(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (h = o.children, e = o.fallback, u ? (o = t.mode, u = t.child, h = {
            mode: "hidden",
            children: h
        }, !(o & 1) && u !== null ? (u.childLanes = 0, u.pendingProps = h) : u = ks(h, o, 0, null), e = Rn(e, o, n, null), u.return = t, e.return = t, u.sibling = e, t.child = u, t.child.memoizedState = Sl(n), t.memoizedState = wl, e) : Pl(t, h));
        if (a = e.memoizedState, a !== null && (y = a.dehydrated, y !== null)) return Ng(e, t, h, o, y, a, n);
        if (u) {
            u = o.fallback, h = t.mode, a = e.child, y = a.sibling;
            var w = {
                mode: "hidden",
                children: o.children
            };
            return !(h & 1) && t.child !== a ? (o = t.child, o.childLanes = 0, o.pendingProps = w, t.deletions = null) : (o = fn(a, w), o.subtreeFlags = a.subtreeFlags & 14680064), y !== null ? u = fn(y, u) : (u = Rn(u, h, n, null), u.flags |= 2), u.return = t, o.return = t, o.sibling = u, t.child = o, o = u, u = t.child, h = e.child.memoizedState, h = h === null ? Sl(n) : {
                baseLanes: h.baseLanes | n,
                cachePool: null,
                transitions: h.transitions
            }, u.memoizedState = h, u.childLanes = e.childLanes & ~n, t.memoizedState = wl, o
        }
        return u = e.child, e = u.sibling, o = fn(u, {
            mode: "visible",
            children: o.children
        }), !(t.mode & 1) && (o.lanes = n), o.return = t, o.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = o, t.memoizedState = null, o
    }

    function Pl(e, t) {
        return t = ks({
            mode: "visible",
            children: t
        }, e.mode, 0, null), t.return = e, e.child = t
    }

    function fs(e, t, n, o) {
        return o !== null && Yo(o), bn(t, e.child, null, n), e = Pl(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
    }

    function Ng(e, t, n, o, a, u, h) {
        if (n) return t.flags & 256 ? (t.flags &= -257, o = gl(Error(s(422))), fs(e, t, h, o)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (u = o.fallback, a = t.mode, o = ks({
            mode: "visible",
            children: o.children
        }, a, 0, null), u = Rn(u, a, h, null), u.flags |= 2, o.return = t, u.return = t, o.sibling = u, t.child = o, t.mode & 1 && bn(t, e.child, null, h), t.child.memoizedState = Sl(h), t.memoizedState = wl, u);
        if (!(t.mode & 1)) return fs(e, t, h, null);
        if (a.data === "$!") {
            if (o = a.nextSibling && a.nextSibling.dataset, o) var y = o.dgst;
            return o = y, u = Error(s(419)), o = gl(u, o, void 0), fs(e, t, h, o)
        }
        if (y = (h & e.childLanes) !== 0, et || y) {
            if (o = Ve, o !== null) {
                switch (h & -h) {
                    case 4:
                        a = 2;
                        break;
                    case 16:
                        a = 8;
                        break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                        a = 32;
                        break;
                    case 536870912:
                        a = 268435456;
                        break;
                    default:
                        a = 0
                }
                a = a & (o.suspendedLanes | h) ? 0 : a, a !== 0 && a !== u.retryLane && (u.retryLane = a, Bt(e, a), At(o, e, a, -1))
            }
            return Il(), o = gl(Error(s(421))), fs(e, t, h, o)
        }
        return a.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Hg.bind(null, e), a._reactRetry = t, null) : (e = u.treeContext, at = bt(a.nextSibling), lt = t, we = !0, Tt = null, e !== null && (dt[ht++] = It, dt[ht++] = zt, dt[ht++] = wn, It = e.id, zt = e.overflow, wn = t), t = Pl(t, o.children), t.flags |= 4096, t)
    }

    function kf(e, t, n) {
        e.lanes |= t;
        var o = e.alternate;
        o !== null && (o.lanes |= t), bo(e.return, t, n)
    }

    function Tl(e, t, n, o, a) {
        var u = e.memoizedState;
        u === null ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: o,
            tail: n,
            tailMode: a
        } : (u.isBackwards = t, u.rendering = null, u.renderingStartTime = 0, u.last = o, u.tail = n, u.tailMode = a)
    }

    function Cf(e, t, n) {
        var o = t.pendingProps,
            a = o.revealOrder,
            u = o.tail;
        if (Qe(e, t, o.children, n), o = Pe.current, o & 2) o = o & 1 | 2, t.flags |= 128;
        else {
            if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
                if (e.tag === 13) e.memoizedState !== null && kf(e, n, t);
                else if (e.tag === 19) kf(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e, e = e.child;
                    continue
                }
                if (e === t) break e;
                for (; e.sibling === null;) {
                    if (e.return === null || e.return === t) break e;
                    e = e.return
                }
                e.sibling.return = e.return, e = e.sibling
            }
            o &= 1
        }
        if (me(Pe, o), !(t.mode & 1)) t.memoizedState = null;
        else switch (a) {
            case "forwards":
                for (n = t.child, a = null; n !== null;) e = n.alternate, e !== null && is(e) === null && (a = n), n = n.sibling;
                n = a, n === null ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), Tl(t, !1, a, n, u);
                break;
            case "backwards":
                for (n = null, a = t.child, t.child = null; a !== null;) {
                    if (e = a.alternate, e !== null && is(e) === null) {
                        t.child = a;
                        break
                    }
                    e = a.sibling, a.sibling = n, n = a, a = e
                }
                Tl(t, !0, n, null, u);
                break;
            case "together":
                Tl(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null
        }
        return t.child
    }

    function ds(e, t) {
        !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
    }

    function Wt(e, t, n) {
        if (e !== null && (t.dependencies = e.dependencies), Cn |= t.lanes, !(n & t.childLanes)) return null;
        if (e !== null && t.child !== e.child) throw Error(s(153));
        if (t.child !== null) {
            for (e = t.child, n = fn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = fn(e, e.pendingProps), n.return = t;
            n.sibling = null
        }
        return t.child
    }

    function Lg(e, t, n) {
        switch (t.tag) {
            case 3:
                Sf(t), Jn();
                break;
            case 5:
                Ic(t);
                break;
            case 1:
                be(t.type) && Qi(t);
                break;
            case 4:
                nl(t, t.stateNode.containerInfo);
                break;
            case 10:
                var o = t.type._context,
                    a = t.memoizedProps.value;
                me(es, o._currentValue), o._currentValue = a;
                break;
            case 13:
                if (o = t.memoizedState, o !== null) return o.dehydrated !== null ? (me(Pe, Pe.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Tf(e, t, n) : (me(Pe, Pe.current & 1), e = Wt(e, t, n), e !== null ? e.sibling : null);
                me(Pe, Pe.current & 1);
                break;
            case 19:
                if (o = (n & t.childLanes) !== 0, e.flags & 128) {
                    if (o) return Cf(e, t, n);
                    t.flags |= 128
                }
                if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), me(Pe, Pe.current), o) break;
                return null;
            case 22:
            case 23:
                return t.lanes = 0, vf(e, t, n)
        }
        return Wt(e, t, n)
    }
    var Ef, kl, Af, Df;
    Ef = function(e, t) {
        for (var n = t.child; n !== null;) {
            if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
            else if (n.tag !== 4 && n.child !== null) {
                n.child.return = n, n = n.child;
                continue
            }
            if (n === t) break;
            for (; n.sibling === null;) {
                if (n.return === null || n.return === t) return;
                n = n.return
            }
            n.sibling.return = n.return, n = n.sibling
        }
    }, kl = function() {}, Af = function(e, t, n, o) {
        var a = e.memoizedProps;
        if (a !== o) {
            e = t.stateNode, Tn(Nt.current);
            var u = null;
            switch (n) {
                case "input":
                    a = Js(e, a), o = Js(e, o), u = [];
                    break;
                case "select":
                    a = B({}, a, {
                        value: void 0
                    }), o = B({}, o, {
                        value: void 0
                    }), u = [];
                    break;
                case "textarea":
                    a = to(e, a), o = to(e, o), u = [];
                    break;
                default:
                    typeof a.onClick != "function" && typeof o.onClick == "function" && (e.onclick = Ki)
            }
            ro(n, o);
            var h;
            n = null;
            for (E in a)
                if (!o.hasOwnProperty(E) && a.hasOwnProperty(E) && a[E] != null)
                    if (E === "style") {
                        var y = a[E];
                        for (h in y) y.hasOwnProperty(h) && (n || (n = {}), n[h] = "")
                    } else E !== "dangerouslySetInnerHTML" && E !== "children" && E !== "suppressContentEditableWarning" && E !== "suppressHydrationWarning" && E !== "autoFocus" && (c.hasOwnProperty(E) ? u || (u = []) : (u = u || []).push(E, null));
            for (E in o) {
                var w = o[E];
                if (y = a != null ? a[E] : void 0, o.hasOwnProperty(E) && w !== y && (w != null || y != null))
                    if (E === "style")
                        if (y) {
                            for (h in y) !y.hasOwnProperty(h) || w && w.hasOwnProperty(h) || (n || (n = {}), n[h] = "");
                            for (h in w) w.hasOwnProperty(h) && y[h] !== w[h] && (n || (n = {}), n[h] = w[h])
                        } else n || (u || (u = []), u.push(E, n)), n = w;
                else E === "dangerouslySetInnerHTML" ? (w = w ? w.__html : void 0, y = y ? y.__html : void 0, w != null && y !== w && (u = u || []).push(E, w)) : E === "children" ? typeof w != "string" && typeof w != "number" || (u = u || []).push(E, "" + w) : E !== "suppressContentEditableWarning" && E !== "suppressHydrationWarning" && (c.hasOwnProperty(E) ? (w != null && E === "onScroll" && ge("scroll", e), u || y === w || (u = [])) : (u = u || []).push(E, w))
            }
            n && (u = u || []).push("style", n);
            var E = u;
            (t.updateQueue = E) && (t.flags |= 4)
        }
    }, Df = function(e, t, n, o) {
        n !== o && (t.flags |= 4)
    };

    function Zr(e, t) {
        if (!we) switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
                n === null ? e.tail = null : n.sibling = null;
                break;
            case "collapsed":
                n = e.tail;
                for (var o = null; n !== null;) n.alternate !== null && (o = n), n = n.sibling;
                o === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : o.sibling = null
        }
    }

    function We(e) {
        var t = e.alternate !== null && e.alternate.child === e.child,
            n = 0,
            o = 0;
        if (t)
            for (var a = e.child; a !== null;) n |= a.lanes | a.childLanes, o |= a.subtreeFlags & 14680064, o |= a.flags & 14680064, a.return = e, a = a.sibling;
        else
            for (a = e.child; a !== null;) n |= a.lanes | a.childLanes, o |= a.subtreeFlags, o |= a.flags, a.return = e, a = a.sibling;
        return e.subtreeFlags |= o, e.childLanes = n, t
    }

    function jg(e, t, n) {
        var o = t.pendingProps;
        switch (Go(t), t.tag) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return We(t), null;
            case 1:
                return be(t.type) && Xi(), We(t), null;
            case 3:
                return o = t.stateNode, nr(), ye(Je), ye(Be), sl(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (e === null || e.child === null) && (Ji(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Tt !== null && (Vl(Tt), Tt = null))), kl(e, t), We(t), null;
            case 5:
                rl(t);
                var a = Tn(Gr.current);
                if (n = t.type, e !== null && t.stateNode != null) Af(e, t, n, o, a), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
                else {
                    if (!o) {
                        if (t.stateNode === null) throw Error(s(166));
                        return We(t), null
                    }
                    if (e = Tn(Nt.current), Ji(t)) {
                        o = t.stateNode, n = t.type;
                        var u = t.memoizedProps;
                        switch (o[Mt] = t, o[Ur] = u, e = (t.mode & 1) !== 0, n) {
                            case "dialog":
                                ge("cancel", o), ge("close", o);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                ge("load", o);
                                break;
                            case "video":
                            case "audio":
                                for (a = 0; a < Ir.length; a++) ge(Ir[a], o);
                                break;
                            case "source":
                                ge("error", o);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                ge("error", o), ge("load", o);
                                break;
                            case "details":
                                ge("toggle", o);
                                break;
                            case "input":
                                lu(o, u), ge("invalid", o);
                                break;
                            case "select":
                                o._wrapperState = {
                                    wasMultiple: !!u.multiple
                                }, ge("invalid", o);
                                break;
                            case "textarea":
                                cu(o, u), ge("invalid", o)
                        }
                        ro(n, u), a = null;
                        for (var h in u)
                            if (u.hasOwnProperty(h)) {
                                var y = u[h];
                                h === "children" ? typeof y == "string" ? o.textContent !== y && (u.suppressHydrationWarning !== !0 && Hi(o.textContent, y, e), a = ["children", y]) : typeof y == "number" && o.textContent !== "" + y && (u.suppressHydrationWarning !== !0 && Hi(o.textContent, y, e), a = ["children", "" + y]) : c.hasOwnProperty(h) && y != null && h === "onScroll" && ge("scroll", o)
                            }
                        switch (n) {
                            case "input":
                                Si(o), uu(o, u, !0);
                                break;
                            case "textarea":
                                Si(o), du(o);
                                break;
                            case "select":
                            case "option":
                                break;
                            default:
                                typeof u.onClick == "function" && (o.onclick = Ki)
                        }
                        o = a, t.updateQueue = o, o !== null && (t.flags |= 4)
                    } else {
                        h = a.nodeType === 9 ? a : a.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = hu(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = h.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof o.is == "string" ? e = h.createElement(n, {
                            is: o.is
                        }) : (e = h.createElement(n), n === "select" && (h = e, o.multiple ? h.multiple = !0 : o.size && (h.size = o.size))) : e = h.createElementNS(e, n), e[Mt] = t, e[Ur] = o, Ef(e, t, !1, !1), t.stateNode = e;
                        e: {
                            switch (h = io(n, o), n) {
                                case "dialog":
                                    ge("cancel", e), ge("close", e), a = o;
                                    break;
                                case "iframe":
                                case "object":
                                case "embed":
                                    ge("load", e), a = o;
                                    break;
                                case "video":
                                case "audio":
                                    for (a = 0; a < Ir.length; a++) ge(Ir[a], e);
                                    a = o;
                                    break;
                                case "source":
                                    ge("error", e), a = o;
                                    break;
                                case "img":
                                case "image":
                                case "link":
                                    ge("error", e), ge("load", e), a = o;
                                    break;
                                case "details":
                                    ge("toggle", e), a = o;
                                    break;
                                case "input":
                                    lu(e, o), a = Js(e, o), ge("invalid", e);
                                    break;
                                case "option":
                                    a = o;
                                    break;
                                case "select":
                                    e._wrapperState = {
                                        wasMultiple: !!o.multiple
                                    }, a = B({}, o, {
                                        value: void 0
                                    }), ge("invalid", e);
                                    break;
                                case "textarea":
                                    cu(e, o), a = to(e, o), ge("invalid", e);
                                    break;
                                default:
                                    a = o
                            }
                            ro(n, a),
                            y = a;
                            for (u in y)
                                if (y.hasOwnProperty(u)) {
                                    var w = y[u];
                                    u === "style" ? gu(e, w) : u === "dangerouslySetInnerHTML" ? (w = w ? w.__html : void 0, w != null && pu(e, w)) : u === "children" ? typeof w == "string" ? (n !== "textarea" || w !== "") && xr(e, w) : typeof w == "number" && xr(e, "" + w) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (c.hasOwnProperty(u) ? w != null && u === "onScroll" && ge("scroll", e) : w != null && K(e, u, w, h))
                                }
                            switch (n) {
                                case "input":
                                    Si(e), uu(e, o, !1);
                                    break;
                                case "textarea":
                                    Si(e), du(e);
                                    break;
                                case "option":
                                    o.value != null && e.setAttribute("value", "" + de(o.value));
                                    break;
                                case "select":
                                    e.multiple = !!o.multiple, u = o.value, u != null ? Fn(e, !!o.multiple, u, !1) : o.defaultValue != null && Fn(e, !!o.multiple, o.defaultValue, !0);
                                    break;
                                default:
                                    typeof a.onClick == "function" && (e.onclick = Ki)
                            }
                            switch (n) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    o = !!o.autoFocus;
                                    break e;
                                case "img":
                                    o = !0;
                                    break e;
                                default:
                                    o = !1
                            }
                        }
                        o && (t.flags |= 4)
                    }
                    t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
                }
                return We(t), null;
            case 6:
                if (e && t.stateNode != null) Df(e, t, e.memoizedProps, o);
                else {
                    if (typeof o != "string" && t.stateNode === null) throw Error(s(166));
                    if (n = Tn(Gr.current), Tn(Nt.current), Ji(t)) {
                        if (o = t.stateNode, n = t.memoizedProps, o[Mt] = t, (u = o.nodeValue !== n) && (e = lt, e !== null)) switch (e.tag) {
                            case 3:
                                Hi(o.nodeValue, n, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !== !0 && Hi(o.nodeValue, n, (e.mode & 1) !== 0)
                        }
                        u && (t.flags |= 4)
                    } else o = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(o), o[Mt] = t, t.stateNode = o
                }
                return We(t), null;
            case 13:
                if (ye(Pe), o = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                    if (we && at !== null && t.mode & 1 && !(t.flags & 128)) Mc(), Jn(), t.flags |= 98560, u = !1;
                    else if (u = Ji(t), o !== null && o.dehydrated !== null) {
                        if (e === null) {
                            if (!u) throw Error(s(318));
                            if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(s(317));
                            u[Mt] = t
                        } else Jn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                        We(t), u = !1
                    } else Tt !== null && (Vl(Tt), Tt = null), u = !0;
                    if (!u) return t.flags & 65536 ? t : null
                }
                return t.flags & 128 ? (t.lanes = n, t) : (o = o !== null, o !== (e !== null && e.memoizedState !== null) && o && (t.child.flags |= 8192, t.mode & 1 && (e === null || Pe.current & 1 ? je === 0 && (je = 3) : Il())), t.updateQueue !== null && (t.flags |= 4), We(t), null);
            case 4:
                return nr(), kl(e, t), e === null && zr(t.stateNode.containerInfo), We(t), null;
            case 10:
                return Jo(t.type._context), We(t), null;
            case 17:
                return be(t.type) && Xi(), We(t), null;
            case 19:
                if (ye(Pe), u = t.memoizedState, u === null) return We(t), null;
                if (o = (t.flags & 128) !== 0, h = u.rendering, h === null)
                    if (o) Zr(u, !1);
                    else {
                        if (je !== 0 || e !== null && e.flags & 128)
                            for (e = t.child; e !== null;) {
                                if (h = is(e), h !== null) {
                                    for (t.flags |= 128, Zr(u, !1), o = h.updateQueue, o !== null && (t.updateQueue = o, t.flags |= 4), t.subtreeFlags = 0, o = n, n = t.child; n !== null;) u = n, e = o, u.flags &= 14680066, h = u.alternate, h === null ? (u.childLanes = 0, u.lanes = e, u.child = null, u.subtreeFlags = 0, u.memoizedProps = null, u.memoizedState = null, u.updateQueue = null, u.dependencies = null, u.stateNode = null) : (u.childLanes = h.childLanes, u.lanes = h.lanes, u.child = h.child, u.subtreeFlags = 0, u.deletions = null, u.memoizedProps = h.memoizedProps, u.memoizedState = h.memoizedState, u.updateQueue = h.updateQueue, u.type = h.type, e = h.dependencies, u.dependencies = e === null ? null : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext
                                    }), n = n.sibling;
                                    return me(Pe, Pe.current & 1 | 2), t.child
                                }
                                e = e.sibling
                            }
                        u.tail !== null && De() > or && (t.flags |= 128, o = !0, Zr(u, !1), t.lanes = 4194304)
                    }
                else {
                    if (!o)
                        if (e = is(h), e !== null) {
                            if (t.flags |= 128, o = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Zr(u, !0), u.tail === null && u.tailMode === "hidden" && !h.alternate && !we) return We(t), null
                        } else 2 * De() - u.renderingStartTime > or && n !== 1073741824 && (t.flags |= 128, o = !0, Zr(u, !1), t.lanes = 4194304);
                    u.isBackwards ? (h.sibling = t.child, t.child = h) : (n = u.last, n !== null ? n.sibling = h : t.child = h, u.last = h)
                }
                return u.tail !== null ? (t = u.tail, u.rendering = t, u.tail = t.sibling, u.renderingStartTime = De(), t.sibling = null, n = Pe.current, me(Pe, o ? n & 1 | 2 : n & 1), t) : (We(t), null);
            case 22:
            case 23:
                return Fl(), o = t.memoizedState !== null, e !== null && e.memoizedState !== null !== o && (t.flags |= 8192), o && t.mode & 1 ? ut & 1073741824 && (We(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : We(t), null;
            case 24:
                return null;
            case 25:
                return null
        }
        throw Error(s(156, t.tag))
    }

    function _g(e, t) {
        switch (Go(t), t.tag) {
            case 1:
                return be(t.type) && Xi(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 3:
                return nr(), ye(Je), ye(Be), sl(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
            case 5:
                return rl(t), null;
            case 13:
                if (ye(Pe), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                    if (t.alternate === null) throw Error(s(340));
                    Jn()
                }
                return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 19:
                return ye(Pe), null;
            case 4:
                return nr(), null;
            case 10:
                return Jo(t.type._context), null;
            case 22:
            case 23:
                return Fl(), null;
            case 24:
                return null;
            default:
                return null
        }
    }
    var hs = !1,
        $e = !1,
        Vg = typeof WeakSet == "function" ? WeakSet : Set,
        U = null;

    function ir(e, t) {
        var n = e.ref;
        if (n !== null)
            if (typeof n == "function") try {
                n(null)
            } catch (o) {
                Ee(e, t, o)
            } else n.current = null
    }

    function Cl(e, t, n) {
        try {
            n()
        } catch (o) {
            Ee(e, t, o)
        }
    }
    var Rf = !1;

    function Og(e, t) {
        if (Fo = ji, e = oc(), Ro(e)) {
            if ("selectionStart" in e) var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
            else e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var o = n.getSelection && n.getSelection();
                if (o && o.rangeCount !== 0) {
                    n = o.anchorNode;
                    var a = o.anchorOffset,
                        u = o.focusNode;
                    o = o.focusOffset;
                    try {
                        n.nodeType, u.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var h = 0,
                        y = -1,
                        w = -1,
                        E = 0,
                        N = 0,
                        L = e,
                        D = null;
                    t: for (;;) {
                        for (var z; L !== n || a !== 0 && L.nodeType !== 3 || (y = h + a), L !== u || o !== 0 && L.nodeType !== 3 || (w = h + o), L.nodeType === 3 && (h += L.nodeValue.length), (z = L.firstChild) !== null;) D = L, L = z;
                        for (;;) {
                            if (L === e) break t;
                            if (D === n && ++E === a && (y = h), D === u && ++N === o && (w = h), (z = L.nextSibling) !== null) break;
                            L = D, D = L.parentNode
                        }
                        L = z
                    }
                    n = y === -1 || w === -1 ? null : {
                        start: y,
                        end: w
                    }
                } else n = null
            }
            n = n || {
                start: 0,
                end: 0
            }
        } else n = null;
        for (Io = {
                focusedElem: e,
                selectionRange: n
            }, ji = !1, U = t; U !== null;)
            if (t = U, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, U = e;
            else
                for (; U !== null;) {
                    t = U;
                    try {
                        var $ = t.alternate;
                        if (t.flags & 1024) switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if ($ !== null) {
                                    var H = $.memoizedProps,
                                        Re = $.memoizedState,
                                        k = t.stateNode,
                                        S = k.getSnapshotBeforeUpdate(t.elementType === t.type ? H : kt(t.type, H), Re);
                                    k.__reactInternalSnapshotBeforeUpdate = S
                                }
                                break;
                            case 3:
                                var C = t.stateNode.containerInfo;
                                C.nodeType === 1 ? C.textContent = "" : C.nodeType === 9 && C.documentElement && C.removeChild(C.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(s(163))
                        }
                    } catch (O) {
                        Ee(t, t.return, O)
                    }
                    if (e = t.sibling, e !== null) {
                        e.return = t.return, U = e;
                        break
                    }
                    U = t.return
                }
        return $ = Rf, Rf = !1, $
    }

    function Jr(e, t, n) {
        var o = t.updateQueue;
        if (o = o !== null ? o.lastEffect : null, o !== null) {
            var a = o = o.next;
            do {
                if ((a.tag & e) === e) {
                    var u = a.destroy;
                    a.destroy = void 0, u !== void 0 && Cl(t, n, u)
                }
                a = a.next
            } while (a !== o)
        }
    }

    function ps(e, t) {
        if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
            var n = t = t.next;
            do {
                if ((n.tag & e) === e) {
                    var o = n.create;
                    n.destroy = o()
                }
                n = n.next
            } while (n !== t)
        }
    }

    function El(e) {
        var t = e.ref;
        if (t !== null) {
            var n = e.stateNode;
            switch (e.tag) {
                case 5:
                    e = n;
                    break;
                default:
                    e = n
            }
            typeof t == "function" ? t(e) : t.current = e
        }
    }

    function Mf(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null, Mf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Mt], delete t[Ur], delete t[Wo], delete t[vg], delete t[xg])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
    }

    function Nf(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 4
    }

    function Lf(e) {
        e: for (;;) {
            for (; e.sibling === null;) {
                if (e.return === null || Nf(e.return)) return null;
                e = e.return
            }
            for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
                if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
                e.child.return = e, e = e.child
            }
            if (!(e.flags & 2)) return e.stateNode
        }
    }

    function Al(e, t, n) {
        var o = e.tag;
        if (o === 5 || o === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ki));
        else if (o !== 4 && (e = e.child, e !== null))
            for (Al(e, t, n), e = e.sibling; e !== null;) Al(e, t, n), e = e.sibling
    }

    function Dl(e, t, n) {
        var o = e.tag;
        if (o === 5 || o === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (o !== 4 && (e = e.child, e !== null))
            for (Dl(e, t, n), e = e.sibling; e !== null;) Dl(e, t, n), e = e.sibling
    }
    var Fe = null,
        Ct = !1;

    function on(e, t, n) {
        for (n = n.child; n !== null;) jf(e, t, n), n = n.sibling
    }

    function jf(e, t, n) {
        if (Rt && typeof Rt.onCommitFiberUnmount == "function") try {
            Rt.onCommitFiberUnmount(Ai, n)
        } catch {}
        switch (n.tag) {
            case 5:
                $e || ir(n, t);
            case 6:
                var o = Fe,
                    a = Ct;
                Fe = null, on(e, t, n), Fe = o, Ct = a, Fe !== null && (Ct ? (e = Fe, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Fe.removeChild(n.stateNode));
                break;
            case 18:
                Fe !== null && (Ct ? (e = Fe, n = n.stateNode, e.nodeType === 8 ? Uo(e.parentNode, n) : e.nodeType === 1 && Uo(e, n), Mr(e)) : Uo(Fe, n.stateNode));
                break;
            case 4:
                o = Fe, a = Ct, Fe = n.stateNode.containerInfo, Ct = !0, on(e, t, n), Fe = o, Ct = a;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                if (!$e && (o = n.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
                    a = o = o.next;
                    do {
                        var u = a,
                            h = u.destroy;
                        u = u.tag, h !== void 0 && (u & 2 || u & 4) && Cl(n, t, h), a = a.next
                    } while (a !== o)
                }
                on(e, t, n);
                break;
            case 1:
                if (!$e && (ir(n, t), o = n.stateNode, typeof o.componentWillUnmount == "function")) try {
                    o.props = n.memoizedProps, o.state = n.memoizedState, o.componentWillUnmount()
                } catch (y) {
                    Ee(n, t, y)
                }
                on(e, t, n);
                break;
            case 21:
                on(e, t, n);
                break;
            case 22:
                n.mode & 1 ? ($e = (o = $e) || n.memoizedState !== null, on(e, t, n), $e = o) : on(e, t, n);
                break;
            default:
                on(e, t, n)
        }
    }

    function _f(e) {
        var t = e.updateQueue;
        if (t !== null) {
            e.updateQueue = null;
            var n = e.stateNode;
            n === null && (n = e.stateNode = new Vg), t.forEach(function(o) {
                var a = Kg.bind(null, e, o);
                n.has(o) || (n.add(o), o.then(a, a))
            })
        }
    }

    function Et(e, t) {
        var n = t.deletions;
        if (n !== null)
            for (var o = 0; o < n.length; o++) {
                var a = n[o];
                try {
                    var u = e,
                        h = t,
                        y = h;
                    e: for (; y !== null;) {
                        switch (y.tag) {
                            case 5:
                                Fe = y.stateNode, Ct = !1;
                                break e;
                            case 3:
                                Fe = y.stateNode.containerInfo, Ct = !0;
                                break e;
                            case 4:
                                Fe = y.stateNode.containerInfo, Ct = !0;
                                break e
                        }
                        y = y.return
                    }
                    if (Fe === null) throw Error(s(160));
                    jf(u, h, a), Fe = null, Ct = !1;
                    var w = a.alternate;
                    w !== null && (w.return = null), a.return = null
                } catch (E) {
                    Ee(a, t, E)
                }
            }
        if (t.subtreeFlags & 12854)
            for (t = t.child; t !== null;) Vf(t, e), t = t.sibling
    }

    function Vf(e, t) {
        var n = e.alternate,
            o = e.flags;
        switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                if (Et(t, e), jt(e), o & 4) {
                    try {
                        Jr(3, e, e.return), ps(3, e)
                    } catch (H) {
                        Ee(e, e.return, H)
                    }
                    try {
                        Jr(5, e, e.return)
                    } catch (H) {
                        Ee(e, e.return, H)
                    }
                }
                break;
            case 1:
                Et(t, e), jt(e), o & 512 && n !== null && ir(n, n.return);
                break;
            case 5:
                if (Et(t, e), jt(e), o & 512 && n !== null && ir(n, n.return), e.flags & 32) {
                    var a = e.stateNode;
                    try {
                        xr(a, "")
                    } catch (H) {
                        Ee(e, e.return, H)
                    }
                }
                if (o & 4 && (a = e.stateNode, a != null)) {
                    var u = e.memoizedProps,
                        h = n !== null ? n.memoizedProps : u,
                        y = e.type,
                        w = e.updateQueue;
                    if (e.updateQueue = null, w !== null) try {
                        y === "input" && u.type === "radio" && u.name != null && au(a, u), io(y, h);
                        var E = io(y, u);
                        for (h = 0; h < w.length; h += 2) {
                            var N = w[h],
                                L = w[h + 1];
                            N === "style" ? gu(a, L) : N === "dangerouslySetInnerHTML" ? pu(a, L) : N === "children" ? xr(a, L) : K(a, N, L, E)
                        }
                        switch (y) {
                            case "input":
                                bs(a, u);
                                break;
                            case "textarea":
                                fu(a, u);
                                break;
                            case "select":
                                var D = a._wrapperState.wasMultiple;
                                a._wrapperState.wasMultiple = !!u.multiple;
                                var z = u.value;
                                z != null ? Fn(a, !!u.multiple, z, !1) : D !== !!u.multiple && (u.defaultValue != null ? Fn(a, !!u.multiple, u.defaultValue, !0) : Fn(a, !!u.multiple, u.multiple ? [] : "", !1))
                        }
                        a[Ur] = u
                    } catch (H) {
                        Ee(e, e.return, H)
                    }
                }
                break;
            case 6:
                if (Et(t, e), jt(e), o & 4) {
                    if (e.stateNode === null) throw Error(s(162));
                    a = e.stateNode, u = e.memoizedProps;
                    try {
                        a.nodeValue = u
                    } catch (H) {
                        Ee(e, e.return, H)
                    }
                }
                break;
            case 3:
                if (Et(t, e), jt(e), o & 4 && n !== null && n.memoizedState.isDehydrated) try {
                    Mr(t.containerInfo)
                } catch (H) {
                    Ee(e, e.return, H)
                }
                break;
            case 4:
                Et(t, e), jt(e);
                break;
            case 13:
                Et(t, e), jt(e), a = e.child, a.flags & 8192 && (u = a.memoizedState !== null, a.stateNode.isHidden = u, !u || a.alternate !== null && a.alternate.memoizedState !== null || (Nl = De())), o & 4 && _f(e);
                break;
            case 22:
                if (N = n !== null && n.memoizedState !== null, e.mode & 1 ? ($e = (E = $e) || N, Et(t, e), $e = E) : Et(t, e), jt(e), o & 8192) {
                    if (E = e.memoizedState !== null, (e.stateNode.isHidden = E) && !N && e.mode & 1)
                        for (U = e, N = e.child; N !== null;) {
                            for (L = U = N; U !== null;) {
                                switch (D = U, z = D.child, D.tag) {
                                    case 0:
                                    case 11:
                                    case 14:
                                    case 15:
                                        Jr(4, D, D.return);
                                        break;
                                    case 1:
                                        ir(D, D.return);
                                        var $ = D.stateNode;
                                        if (typeof $.componentWillUnmount == "function") {
                                            o = D, n = D.return;
                                            try {
                                                t = o, $.props = t.memoizedProps, $.state = t.memoizedState, $.componentWillUnmount()
                                            } catch (H) {
                                                Ee(o, n, H)
                                            }
                                        }
                                        break;
                                    case 5:
                                        ir(D, D.return);
                                        break;
                                    case 22:
                                        if (D.memoizedState !== null) {
                                            If(L);
                                            continue
                                        }
                                }
                                z !== null ? (z.return = D, U = z) : If(L)
                            }
                            N = N.sibling
                        }
                    e: for (N = null, L = e;;) {
                        if (L.tag === 5) {
                            if (N === null) {
                                N = L;
                                try {
                                    a = L.stateNode, E ? (u = a.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none") : (y = L.stateNode, w = L.memoizedProps.style, h = w != null && w.hasOwnProperty("display") ? w.display : null, y.style.display = mu("display", h))
                                } catch (H) {
                                    Ee(e, e.return, H)
                                }
                            }
                        } else if (L.tag === 6) {
                            if (N === null) try {
                                L.stateNode.nodeValue = E ? "" : L.memoizedProps
                            } catch (H) {
                                Ee(e, e.return, H)
                            }
                        } else if ((L.tag !== 22 && L.tag !== 23 || L.memoizedState === null || L === e) && L.child !== null) {
                            L.child.return = L, L = L.child;
                            continue
                        }
                        if (L === e) break e;
                        for (; L.sibling === null;) {
                            if (L.return === null || L.return === e) break e;
                            N === L && (N = null), L = L.return
                        }
                        N === L && (N = null), L.sibling.return = L.return, L = L.sibling
                    }
                }
                break;
            case 19:
                Et(t, e), jt(e), o & 4 && _f(e);
                break;
            case 21:
                break;
            default:
                Et(t, e), jt(e)
        }
    }

    function jt(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                e: {
                    for (var n = e.return; n !== null;) {
                        if (Nf(n)) {
                            var o = n;
                            break e
                        }
                        n = n.return
                    }
                    throw Error(s(160))
                }
                switch (o.tag) {
                    case 5:
                        var a = o.stateNode;
                        o.flags & 32 && (xr(a, ""), o.flags &= -33);
                        var u = Lf(e);
                        Dl(e, u, a);
                        break;
                    case 3:
                    case 4:
                        var h = o.stateNode.containerInfo,
                            y = Lf(e);
                        Al(e, y, h);
                        break;
                    default:
                        throw Error(s(161))
                }
            }
            catch (w) {
                Ee(e, e.return, w)
            }
            e.flags &= -3
        }
        t & 4096 && (e.flags &= -4097)
    }

    function Fg(e, t, n) {
        U = e, Of(e)
    }

    function Of(e, t, n) {
        for (var o = (e.mode & 1) !== 0; U !== null;) {
            var a = U,
                u = a.child;
            if (a.tag === 22 && o) {
                var h = a.memoizedState !== null || hs;
                if (!h) {
                    var y = a.alternate,
                        w = y !== null && y.memoizedState !== null || $e;
                    y = hs;
                    var E = $e;
                    if (hs = h, ($e = w) && !E)
                        for (U = a; U !== null;) h = U, w = h.child, h.tag === 22 && h.memoizedState !== null ? zf(a) : w !== null ? (w.return = h, U = w) : zf(a);
                    for (; u !== null;) U = u, Of(u), u = u.sibling;
                    U = a, hs = y, $e = E
                }
                Ff(e)
            } else a.subtreeFlags & 8772 && u !== null ? (u.return = a, U = u) : Ff(e)
        }
    }

    function Ff(e) {
        for (; U !== null;) {
            var t = U;
            if (t.flags & 8772) {
                var n = t.alternate;
                try {
                    if (t.flags & 8772) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            $e || ps(5, t);
                            break;
                        case 1:
                            var o = t.stateNode;
                            if (t.flags & 4 && !$e)
                                if (n === null) o.componentDidMount();
                                else {
                                    var a = t.elementType === t.type ? n.memoizedProps : kt(t.type, n.memoizedProps);
                                    o.componentDidUpdate(a, n.memoizedState, o.__reactInternalSnapshotBeforeUpdate)
                                }
                            var u = t.updateQueue;
                            u !== null && Fc(t, u, o);
                            break;
                        case 3:
                            var h = t.updateQueue;
                            if (h !== null) {
                                if (n = null, t.child !== null) switch (t.child.tag) {
                                    case 5:
                                        n = t.child.stateNode;
                                        break;
                                    case 1:
                                        n = t.child.stateNode
                                }
                                Fc(t, h, n)
                            }
                            break;
                        case 5:
                            var y = t.stateNode;
                            if (n === null && t.flags & 4) {
                                n = y;
                                var w = t.memoizedProps;
                                switch (t.type) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        w.autoFocus && n.focus();
                                        break;
                                    case "img":
                                        w.src && (n.src = w.src)
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (t.memoizedState === null) {
                                var E = t.alternate;
                                if (E !== null) {
                                    var N = E.memoizedState;
                                    if (N !== null) {
                                        var L = N.dehydrated;
                                        L !== null && Mr(L)
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(s(163))
                    }
                    $e || t.flags & 512 && El(t)
                } catch (D) {
                    Ee(t, t.return, D)
                }
            }
            if (t === e) {
                U = null;
                break
            }
            if (n = t.sibling, n !== null) {
                n.return = t.return, U = n;
                break
            }
            U = t.return
        }
    }

    function If(e) {
        for (; U !== null;) {
            var t = U;
            if (t === e) {
                U = null;
                break
            }
            var n = t.sibling;
            if (n !== null) {
                n.return = t.return, U = n;
                break
            }
            U = t.return
        }
    }

    function zf(e) {
        for (; U !== null;) {
            var t = U;
            try {
                switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        var n = t.return;
                        try {
                            ps(4, t)
                        } catch (w) {
                            Ee(t, n, w)
                        }
                        break;
                    case 1:
                        var o = t.stateNode;
                        if (typeof o.componentDidMount == "function") {
                            var a = t.return;
                            try {
                                o.componentDidMount()
                            } catch (w) {
                                Ee(t, a, w)
                            }
                        }
                        var u = t.return;
                        try {
                            El(t)
                        } catch (w) {
                            Ee(t, u, w)
                        }
                        break;
                    case 5:
                        var h = t.return;
                        try {
                            El(t)
                        } catch (w) {
                            Ee(t, h, w)
                        }
                }
            } catch (w) {
                Ee(t, t.return, w)
            }
            if (t === e) {
                U = null;
                break
            }
            var y = t.sibling;
            if (y !== null) {
                y.return = t.return, U = y;
                break
            }
            U = t.return
        }
    }
    var Ig = Math.ceil,
        ms = ee.ReactCurrentDispatcher,
        Rl = ee.ReactCurrentOwner,
        gt = ee.ReactCurrentBatchConfig,
        le = 0,
        Ve = null,
        Ne = null,
        Ie = 0,
        ut = 0,
        sr = en(0),
        je = 0,
        br = null,
        Cn = 0,
        gs = 0,
        Ml = 0,
        ei = null,
        tt = null,
        Nl = 0,
        or = 1 / 0,
        $t = null,
        ys = !1,
        Ll = null,
        ln = null,
        vs = !1,
        an = null,
        xs = 0,
        ti = 0,
        jl = null,
        ws = -1,
        Ss = 0;

    function Ye() {
        return le & 6 ? De() : ws !== -1 ? ws : ws = De()
    }

    function un(e) {
        return e.mode & 1 ? le & 2 && Ie !== 0 ? Ie & -Ie : Sg.transition !== null ? (Ss === 0 && (Ss = Nu()), Ss) : (e = he, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Bu(e.type)), e) : 1
    }

    function At(e, t, n, o) {
        if (50 < ti) throw ti = 0, jl = null, Error(s(185));
        Cr(e, n, o), (!(le & 2) || e !== Ve) && (e === Ve && (!(le & 2) && (gs |= n), je === 4 && cn(e, Ie)), nt(e, o), n === 1 && le === 0 && !(t.mode & 1) && (or = De() + 500, Yi && nn()))
    }

    function nt(e, t) {
        var n = e.callbackNode;
        Sm(e, t);
        var o = Mi(e, e === Ve ? Ie : 0);
        if (o === 0) n !== null && Du(n), e.callbackNode = null, e.callbackPriority = 0;
        else if (t = o & -o, e.callbackPriority !== t) {
            if (n != null && Du(n), t === 1) e.tag === 0 ? wg(Uf.bind(null, e)) : Cc(Uf.bind(null, e)), gg(function() {
                !(le & 6) && nn()
            }), n = null;
            else {
                switch (Lu(o)) {
                    case 1:
                        n = fo;
                        break;
                    case 4:
                        n = Ru;
                        break;
                    case 16:
                        n = Ei;
                        break;
                    case 536870912:
                        n = Mu;
                        break;
                    default:
                        n = Ei
                }
                n = Yf(n, Bf.bind(null, e))
            }
            e.callbackPriority = t, e.callbackNode = n
        }
    }

    function Bf(e, t) {
        if (ws = -1, Ss = 0, le & 6) throw Error(s(327));
        var n = e.callbackNode;
        if (lr() && e.callbackNode !== n) return null;
        var o = Mi(e, e === Ve ? Ie : 0);
        if (o === 0) return null;
        if (o & 30 || o & e.expiredLanes || t) t = Ps(e, o);
        else {
            t = o;
            var a = le;
            le |= 2;
            var u = $f();
            (Ve !== e || Ie !== t) && ($t = null, or = De() + 500, An(e, t));
            do try {
                Ug();
                break
            } catch (y) {
                Wf(e, y)
            }
            while (!0);
            Zo(), ms.current = u, le = a, Ne !== null ? t = 0 : (Ve = null, Ie = 0, t = je)
        }
        if (t !== 0) {
            if (t === 2 && (a = ho(e), a !== 0 && (o = a, t = _l(e, a))), t === 1) throw n = br, An(e, 0), cn(e, o), nt(e, De()), n;
            if (t === 6) cn(e, o);
            else {
                if (a = e.current.alternate, !(o & 30) && !zg(a) && (t = Ps(e, o), t === 2 && (u = ho(e), u !== 0 && (o = u, t = _l(e, u))), t === 1)) throw n = br, An(e, 0), cn(e, o), nt(e, De()), n;
                switch (e.finishedWork = a, e.finishedLanes = o, t) {
                    case 0:
                    case 1:
                        throw Error(s(345));
                    case 2:
                        Dn(e, tt, $t);
                        break;
                    case 3:
                        if (cn(e, o), (o & 130023424) === o && (t = Nl + 500 - De(), 10 < t)) {
                            if (Mi(e, 0) !== 0) break;
                            if (a = e.suspendedLanes, (a & o) !== o) {
                                Ye(), e.pingedLanes |= e.suspendedLanes & a;
                                break
                            }
                            e.timeoutHandle = Bo(Dn.bind(null, e, tt, $t), t);
                            break
                        }
                        Dn(e, tt, $t);
                        break;
                    case 4:
                        if (cn(e, o), (o & 4194240) === o) break;
                        for (t = e.eventTimes, a = -1; 0 < o;) {
                            var h = 31 - St(o);
                            u = 1 << h, h = t[h], h > a && (a = h), o &= ~u
                        }
                        if (o = a, o = De() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * Ig(o / 1960)) - o, 10 < o) {
                            e.timeoutHandle = Bo(Dn.bind(null, e, tt, $t), o);
                            break
                        }
                        Dn(e, tt, $t);
                        break;
                    case 5:
                        Dn(e, tt, $t);
                        break;
                    default:
                        throw Error(s(329))
                }
            }
        }
        return nt(e, De()), e.callbackNode === n ? Bf.bind(null, e) : null
    }

    function _l(e, t) {
        var n = ei;
        return e.current.memoizedState.isDehydrated && (An(e, t).flags |= 256), e = Ps(e, t), e !== 2 && (t = tt, tt = n, t !== null && Vl(t)), e
    }

    function Vl(e) {
        tt === null ? tt = e : tt.push.apply(tt, e)
    }

    function zg(e) {
        for (var t = e;;) {
            if (t.flags & 16384) {
                var n = t.updateQueue;
                if (n !== null && (n = n.stores, n !== null))
                    for (var o = 0; o < n.length; o++) {
                        var a = n[o],
                            u = a.getSnapshot;
                        a = a.value;
                        try {
                            if (!Pt(u(), a)) return !1
                        } catch {
                            return !1
                        }
                    }
            }
            if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
            else {
                if (t === e) break;
                for (; t.sibling === null;) {
                    if (t.return === null || t.return === e) return !0;
                    t = t.return
                }
                t.sibling.return = t.return, t = t.sibling
            }
        }
        return !0
    }

    function cn(e, t) {
        for (t &= ~Ml, t &= ~gs, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
            var n = 31 - St(t),
                o = 1 << n;
            e[n] = -1, t &= ~o
        }
    }

    function Uf(e) {
        if (le & 6) throw Error(s(327));
        lr();
        var t = Mi(e, 0);
        if (!(t & 1)) return nt(e, De()), null;
        var n = Ps(e, t);
        if (e.tag !== 0 && n === 2) {
            var o = ho(e);
            o !== 0 && (t = o, n = _l(e, o))
        }
        if (n === 1) throw n = br, An(e, 0), cn(e, t), nt(e, De()), n;
        if (n === 6) throw Error(s(345));
        return e.finishedWork = e.current.alternate, e.finishedLanes = t, Dn(e, tt, $t), nt(e, De()), null
    }

    function Ol(e, t) {
        var n = le;
        le |= 1;
        try {
            return e(t)
        } finally {
            le = n, le === 0 && (or = De() + 500, Yi && nn())
        }
    }

    function En(e) {
        an !== null && an.tag === 0 && !(le & 6) && lr();
        var t = le;
        le |= 1;
        var n = gt.transition,
            o = he;
        try {
            if (gt.transition = null, he = 1, e) return e()
        } finally {
            he = o, gt.transition = n, le = t, !(le & 6) && nn()
        }
    }

    function Fl() {
        ut = sr.current, ye(sr)
    }

    function An(e, t) {
        e.finishedWork = null, e.finishedLanes = 0;
        var n = e.timeoutHandle;
        if (n !== -1 && (e.timeoutHandle = -1, mg(n)), Ne !== null)
            for (n = Ne.return; n !== null;) {
                var o = n;
                switch (Go(o), o.tag) {
                    case 1:
                        o = o.type.childContextTypes, o != null && Xi();
                        break;
                    case 3:
                        nr(), ye(Je), ye(Be), sl();
                        break;
                    case 5:
                        rl(o);
                        break;
                    case 4:
                        nr();
                        break;
                    case 13:
                        ye(Pe);
                        break;
                    case 19:
                        ye(Pe);
                        break;
                    case 10:
                        Jo(o.type._context);
                        break;
                    case 22:
                    case 23:
                        Fl()
                }
                n = n.return
            }
        if (Ve = e, Ne = e = fn(e.current, null), Ie = ut = t, je = 0, br = null, Ml = gs = Cn = 0, tt = ei = null, Pn !== null) {
            for (t = 0; t < Pn.length; t++)
                if (n = Pn[t], o = n.interleaved, o !== null) {
                    n.interleaved = null;
                    var a = o.next,
                        u = n.pending;
                    if (u !== null) {
                        var h = u.next;
                        u.next = a, o.next = h
                    }
                    n.pending = o
                }
            Pn = null
        }
        return e
    }

    function Wf(e, t) {
        do {
            var n = Ne;
            try {
                if (Zo(), ss.current = us, os) {
                    for (var o = Te.memoizedState; o !== null;) {
                        var a = o.queue;
                        a !== null && (a.pending = null), o = o.next
                    }
                    os = !1
                }
                if (kn = 0, _e = Le = Te = null, Xr = !1, Qr = 0, Rl.current = null, n === null || n.return === null) {
                    je = 1, br = t, Ne = null;
                    break
                }
                e: {
                    var u = e,
                        h = n.return,
                        y = n,
                        w = t;
                    if (t = Ie, y.flags |= 32768, w !== null && typeof w == "object" && typeof w.then == "function") {
                        var E = w,
                            N = y,
                            L = N.tag;
                        if (!(N.mode & 1) && (L === 0 || L === 11 || L === 15)) {
                            var D = N.alternate;
                            D ? (N.updateQueue = D.updateQueue, N.memoizedState = D.memoizedState, N.lanes = D.lanes) : (N.updateQueue = null, N.memoizedState = null)
                        }
                        var z = hf(h);
                        if (z !== null) {
                            z.flags &= -257, pf(z, h, y, u, t), z.mode & 1 && df(u, E, t), t = z, w = E;
                            var $ = t.updateQueue;
                            if ($ === null) {
                                var H = new Set;
                                H.add(w), t.updateQueue = H
                            } else $.add(w);
                            break e
                        } else {
                            if (!(t & 1)) {
                                df(u, E, t), Il();
                                break e
                            }
                            w = Error(s(426))
                        }
                    } else if (we && y.mode & 1) {
                        var Re = hf(h);
                        if (Re !== null) {
                            !(Re.flags & 65536) && (Re.flags |= 256), pf(Re, h, y, u, t), Yo(rr(w, y));
                            break e
                        }
                    }
                    u = w = rr(w, y),
                    je !== 4 && (je = 2),
                    ei === null ? ei = [u] : ei.push(u),
                    u = h;do {
                        switch (u.tag) {
                            case 3:
                                u.flags |= 65536, t &= -t, u.lanes |= t;
                                var k = cf(u, w, t);
                                Oc(u, k);
                                break e;
                            case 1:
                                y = w;
                                var S = u.type,
                                    C = u.stateNode;
                                if (!(u.flags & 128) && (typeof S.getDerivedStateFromError == "function" || C !== null && typeof C.componentDidCatch == "function" && (ln === null || !ln.has(C)))) {
                                    u.flags |= 65536, t &= -t, u.lanes |= t;
                                    var O = ff(u, y, t);
                                    Oc(u, O);
                                    break e
                                }
                        }
                        u = u.return
                    } while (u !== null)
                }
                Kf(n)
            } catch (G) {
                t = G, Ne === n && n !== null && (Ne = n = n.return);
                continue
            }
            break
        } while (!0)
    }

    function $f() {
        var e = ms.current;
        return ms.current = us, e === null ? us : e
    }

    function Il() {
        (je === 0 || je === 3 || je === 2) && (je = 4), Ve === null || !(Cn & 268435455) && !(gs & 268435455) || cn(Ve, Ie)
    }

    function Ps(e, t) {
        var n = le;
        le |= 2;
        var o = $f();
        (Ve !== e || Ie !== t) && ($t = null, An(e, t));
        do try {
            Bg();
            break
        } catch (a) {
            Wf(e, a)
        }
        while (!0);
        if (Zo(), le = n, ms.current = o, Ne !== null) throw Error(s(261));
        return Ve = null, Ie = 0, je
    }

    function Bg() {
        for (; Ne !== null;) Hf(Ne)
    }

    function Ug() {
        for (; Ne !== null && !dm();) Hf(Ne)
    }

    function Hf(e) {
        var t = Qf(e.alternate, e, ut);
        e.memoizedProps = e.pendingProps, t === null ? Kf(e) : Ne = t, Rl.current = null
    }

    function Kf(e) {
        var t = e;
        do {
            var n = t.alternate;
            if (e = t.return, t.flags & 32768) {
                if (n = _g(n, t), n !== null) {
                    n.flags &= 32767, Ne = n;
                    return
                }
                if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
                else {
                    je = 6, Ne = null;
                    return
                }
            } else if (n = jg(n, t, ut), n !== null) {
                Ne = n;
                return
            }
            if (t = t.sibling, t !== null) {
                Ne = t;
                return
            }
            Ne = t = e
        } while (t !== null);
        je === 0 && (je = 5)
    }

    function Dn(e, t, n) {
        var o = he,
            a = gt.transition;
        try {
            gt.transition = null, he = 1, Wg(e, t, n, o)
        } finally {
            gt.transition = a, he = o
        }
        return null
    }

    function Wg(e, t, n, o) {
        do lr(); while (an !== null);
        if (le & 6) throw Error(s(327));
        n = e.finishedWork;
        var a = e.finishedLanes;
        if (n === null) return null;
        if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(s(177));
        e.callbackNode = null, e.callbackPriority = 0;
        var u = n.lanes | n.childLanes;
        if (Pm(e, u), e === Ve && (Ne = Ve = null, Ie = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || vs || (vs = !0, Yf(Ei, function() {
                return lr(), null
            })), u = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || u) {
            u = gt.transition, gt.transition = null;
            var h = he;
            he = 1;
            var y = le;
            le |= 4, Rl.current = null, Og(e, n), Vf(n, e), ag(Io), ji = !!Fo, Io = Fo = null, e.current = n, Fg(n), hm(), le = y, he = h, gt.transition = u
        } else e.current = n;
        if (vs && (vs = !1, an = e, xs = a), u = e.pendingLanes, u === 0 && (ln = null), gm(n.stateNode), nt(e, De()), t !== null)
            for (o = e.onRecoverableError, n = 0; n < t.length; n++) a = t[n], o(a.value, {
                componentStack: a.stack,
                digest: a.digest
            });
        if (ys) throw ys = !1, e = Ll, Ll = null, e;
        return xs & 1 && e.tag !== 0 && lr(), u = e.pendingLanes, u & 1 ? e === jl ? ti++ : (ti = 0, jl = e) : ti = 0, nn(), null
    }

    function lr() {
        if (an !== null) {
            var e = Lu(xs),
                t = gt.transition,
                n = he;
            try {
                if (gt.transition = null, he = 16 > e ? 16 : e, an === null) var o = !1;
                else {
                    if (e = an, an = null, xs = 0, le & 6) throw Error(s(331));
                    var a = le;
                    for (le |= 4, U = e.current; U !== null;) {
                        var u = U,
                            h = u.child;
                        if (U.flags & 16) {
                            var y = u.deletions;
                            if (y !== null) {
                                for (var w = 0; w < y.length; w++) {
                                    var E = y[w];
                                    for (U = E; U !== null;) {
                                        var N = U;
                                        switch (N.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                Jr(8, N, u)
                                        }
                                        var L = N.child;
                                        if (L !== null) L.return = N, U = L;
                                        else
                                            for (; U !== null;) {
                                                N = U;
                                                var D = N.sibling,
                                                    z = N.return;
                                                if (Mf(N), N === E) {
                                                    U = null;
                                                    break
                                                }
                                                if (D !== null) {
                                                    D.return = z, U = D;
                                                    break
                                                }
                                                U = z
                                            }
                                    }
                                }
                                var $ = u.alternate;
                                if ($ !== null) {
                                    var H = $.child;
                                    if (H !== null) {
                                        $.child = null;
                                        do {
                                            var Re = H.sibling;
                                            H.sibling = null, H = Re
                                        } while (H !== null)
                                    }
                                }
                                U = u
                            }
                        }
                        if (u.subtreeFlags & 2064 && h !== null) h.return = u, U = h;
                        else e: for (; U !== null;) {
                            if (u = U, u.flags & 2048) switch (u.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Jr(9, u, u.return)
                            }
                            var k = u.sibling;
                            if (k !== null) {
                                k.return = u.return, U = k;
                                break e
                            }
                            U = u.return
                        }
                    }
                    var S = e.current;
                    for (U = S; U !== null;) {
                        h = U;
                        var C = h.child;
                        if (h.subtreeFlags & 2064 && C !== null) C.return = h, U = C;
                        else e: for (h = S; U !== null;) {
                            if (y = U, y.flags & 2048) try {
                                switch (y.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        ps(9, y)
                                }
                            } catch (G) {
                                Ee(y, y.return, G)
                            }
                            if (y === h) {
                                U = null;
                                break e
                            }
                            var O = y.sibling;
                            if (O !== null) {
                                O.return = y.return, U = O;
                                break e
                            }
                            U = y.return
                        }
                    }
                    if (le = a, nn(), Rt && typeof Rt.onPostCommitFiberRoot == "function") try {
                        Rt.onPostCommitFiberRoot(Ai, e)
                    } catch {}
                    o = !0
                }
                return o
            } finally {
                he = n, gt.transition = t
            }
        }
        return !1
    }

    function Gf(e, t, n) {
        t = rr(n, t), t = cf(e, t, 1), e = sn(e, t, 1), t = Ye(), e !== null && (Cr(e, 1, t), nt(e, t))
    }

    function Ee(e, t, n) {
        if (e.tag === 3) Gf(e, e, n);
        else
            for (; t !== null;) {
                if (t.tag === 3) {
                    Gf(t, e, n);
                    break
                } else if (t.tag === 1) {
                    var o = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (ln === null || !ln.has(o))) {
                        e = rr(n, e), e = ff(t, e, 1), t = sn(t, e, 1), e = Ye(), t !== null && (Cr(t, 1, e), nt(t, e));
                        break
                    }
                }
                t = t.return
            }
    }

    function $g(e, t, n) {
        var o = e.pingCache;
        o !== null && o.delete(t), t = Ye(), e.pingedLanes |= e.suspendedLanes & n, Ve === e && (Ie & n) === n && (je === 4 || je === 3 && (Ie & 130023424) === Ie && 500 > De() - Nl ? An(e, 0) : Ml |= n), nt(e, t)
    }

    function Xf(e, t) {
        t === 0 && (e.mode & 1 ? (t = Ri, Ri <<= 1, !(Ri & 130023424) && (Ri = 4194304)) : t = 1);
        var n = Ye();
        e = Bt(e, t), e !== null && (Cr(e, t, n), nt(e, n))
    }

    function Hg(e) {
        var t = e.memoizedState,
            n = 0;
        t !== null && (n = t.retryLane), Xf(e, n)
    }

    function Kg(e, t) {
        var n = 0;
        switch (e.tag) {
            case 13:
                var o = e.stateNode,
                    a = e.memoizedState;
                a !== null && (n = a.retryLane);
                break;
            case 19:
                o = e.stateNode;
                break;
            default:
                throw Error(s(314))
        }
        o !== null && o.delete(t), Xf(e, n)
    }
    var Qf;
    Qf = function(e, t, n) {
        if (e !== null)
            if (e.memoizedProps !== t.pendingProps || Je.current) et = !0;
            else {
                if (!(e.lanes & n) && !(t.flags & 128)) return et = !1, Lg(e, t, n);
                et = !!(e.flags & 131072)
            }
        else et = !1, we && t.flags & 1048576 && Ec(t, Zi, t.index);
        switch (t.lanes = 0, t.tag) {
            case 2:
                var o = t.type;
                ds(e, t), e = t.pendingProps;
                var a = Yn(t, Be.current);
                tr(t, n), a = al(null, t, o, e, a, n);
                var u = ul();
                return t.flags |= 1, typeof a == "object" && a !== null && typeof a.render == "function" && a.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, be(o) ? (u = !0, Qi(t)) : u = !1, t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, tl(t), a.updater = cs, t.stateNode = a, a._reactInternals = t, ml(t, o, e, n), t = xl(null, t, o, !0, u, n)) : (t.tag = 0, we && u && Ko(t), Qe(null, t, a, n), t = t.child), t;
            case 16:
                o = t.elementType;
                e: {
                    switch (ds(e, t), e = t.pendingProps, a = o._init, o = a(o._payload), t.type = o, a = t.tag = Xg(o), e = kt(o, e), a) {
                        case 0:
                            t = vl(null, t, o, e, n);
                            break e;
                        case 1:
                            t = wf(null, t, o, e, n);
                            break e;
                        case 11:
                            t = mf(null, t, o, e, n);
                            break e;
                        case 14:
                            t = gf(null, t, o, kt(o.type, e), n);
                            break e
                    }
                    throw Error(s(306, o, ""))
                }
                return t;
            case 0:
                return o = t.type, a = t.pendingProps, a = t.elementType === o ? a : kt(o, a), vl(e, t, o, a, n);
            case 1:
                return o = t.type, a = t.pendingProps, a = t.elementType === o ? a : kt(o, a), wf(e, t, o, a, n);
            case 3:
                e: {
                    if (Sf(t), e === null) throw Error(s(387));o = t.pendingProps,
                    u = t.memoizedState,
                    a = u.element,
                    Vc(e, t),
                    rs(t, o, null, n);
                    var h = t.memoizedState;
                    if (o = h.element, u.isDehydrated)
                        if (u = {
                                element: o,
                                isDehydrated: !1,
                                cache: h.cache,
                                pendingSuspenseBoundaries: h.pendingSuspenseBoundaries,
                                transitions: h.transitions
                            }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
                            a = rr(Error(s(423)), t), t = Pf(e, t, o, n, a);
                            break e
                        } else if (o !== a) {
                        a = rr(Error(s(424)), t), t = Pf(e, t, o, n, a);
                        break e
                    } else
                        for (at = bt(t.stateNode.containerInfo.firstChild), lt = t, we = !0, Tt = null, n = jc(t, null, o, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                    else {
                        if (Jn(), o === a) {
                            t = Wt(e, t, n);
                            break e
                        }
                        Qe(e, t, o, n)
                    }
                    t = t.child
                }
                return t;
            case 5:
                return Ic(t), e === null && Qo(t), o = t.type, a = t.pendingProps, u = e !== null ? e.memoizedProps : null, h = a.children, zo(o, a) ? h = null : u !== null && zo(o, u) && (t.flags |= 32), xf(e, t), Qe(e, t, h, n), t.child;
            case 6:
                return e === null && Qo(t), null;
            case 13:
                return Tf(e, t, n);
            case 4:
                return nl(t, t.stateNode.containerInfo), o = t.pendingProps, e === null ? t.child = bn(t, null, o, n) : Qe(e, t, o, n), t.child;
            case 11:
                return o = t.type, a = t.pendingProps, a = t.elementType === o ? a : kt(o, a), mf(e, t, o, a, n);
            case 7:
                return Qe(e, t, t.pendingProps, n), t.child;
            case 8:
                return Qe(e, t, t.pendingProps.children, n), t.child;
            case 12:
                return Qe(e, t, t.pendingProps.children, n), t.child;
            case 10:
                e: {
                    if (o = t.type._context, a = t.pendingProps, u = t.memoizedProps, h = a.value, me(es, o._currentValue), o._currentValue = h, u !== null)
                        if (Pt(u.value, h)) {
                            if (u.children === a.children && !Je.current) {
                                t = Wt(e, t, n);
                                break e
                            }
                        } else
                            for (u = t.child, u !== null && (u.return = t); u !== null;) {
                                var y = u.dependencies;
                                if (y !== null) {
                                    h = u.child;
                                    for (var w = y.firstContext; w !== null;) {
                                        if (w.context === o) {
                                            if (u.tag === 1) {
                                                w = Ut(-1, n & -n), w.tag = 2;
                                                var E = u.updateQueue;
                                                if (E !== null) {
                                                    E = E.shared;
                                                    var N = E.pending;
                                                    N === null ? w.next = w : (w.next = N.next, N.next = w), E.pending = w
                                                }
                                            }
                                            u.lanes |= n, w = u.alternate, w !== null && (w.lanes |= n), bo(u.return, n, t), y.lanes |= n;
                                            break
                                        }
                                        w = w.next
                                    }
                                } else if (u.tag === 10) h = u.type === t.type ? null : u.child;
                                else if (u.tag === 18) {
                                    if (h = u.return, h === null) throw Error(s(341));
                                    h.lanes |= n, y = h.alternate, y !== null && (y.lanes |= n), bo(h, n, t), h = u.sibling
                                } else h = u.child;
                                if (h !== null) h.return = u;
                                else
                                    for (h = u; h !== null;) {
                                        if (h === t) {
                                            h = null;
                                            break
                                        }
                                        if (u = h.sibling, u !== null) {
                                            u.return = h.return, h = u;
                                            break
                                        }
                                        h = h.return
                                    }
                                u = h
                            }
                    Qe(e, t, a.children, n),
                    t = t.child
                }
                return t;
            case 9:
                return a = t.type, o = t.pendingProps.children, tr(t, n), a = pt(a), o = o(a), t.flags |= 1, Qe(e, t, o, n), t.child;
            case 14:
                return o = t.type, a = kt(o, t.pendingProps), a = kt(o.type, a), gf(e, t, o, a, n);
            case 15:
                return yf(e, t, t.type, t.pendingProps, n);
            case 17:
                return o = t.type, a = t.pendingProps, a = t.elementType === o ? a : kt(o, a), ds(e, t), t.tag = 1, be(o) ? (e = !0, Qi(t)) : e = !1, tr(t, n), af(t, o, a), ml(t, o, a, n), xl(null, t, o, !0, e, n);
            case 19:
                return Cf(e, t, n);
            case 22:
                return vf(e, t, n)
        }
        throw Error(s(156, t.tag))
    };

    function Yf(e, t) {
        return Au(e, t)
    }

    function Gg(e, t, n, o) {
        this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
    }

    function yt(e, t, n, o) {
        return new Gg(e, t, n, o)
    }

    function zl(e) {
        return e = e.prototype, !(!e || !e.isReactComponent)
    }

    function Xg(e) {
        if (typeof e == "function") return zl(e) ? 1 : 0;
        if (e != null) {
            if (e = e.$$typeof, e === it) return 11;
            if (e === wt) return 14
        }
        return 2
    }

    function fn(e, t) {
        var n = e.alternate;
        return n === null ? (n = yt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
    }

    function Ts(e, t, n, o, a, u) {
        var h = 2;
        if (o = e, typeof e == "function") zl(e) && (h = 1);
        else if (typeof e == "string") h = 5;
        else e: switch (e) {
            case ae:
                return Rn(n.children, a, u, t);
            case Z:
                h = 8, a |= 8;
                break;
            case Se:
                return e = yt(12, n, t, a | 2), e.elementType = Se, e.lanes = u, e;
            case Ge:
                return e = yt(13, n, t, a), e.elementType = Ge, e.lanes = u, e;
            case Ze:
                return e = yt(19, n, t, a), e.elementType = Ze, e.lanes = u, e;
            case ie:
                return ks(n, a, u, t);
            default:
                if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                    case Ce:
                        h = 10;
                        break e;
                    case qe:
                        h = 9;
                        break e;
                    case it:
                        h = 11;
                        break e;
                    case wt:
                        h = 14;
                        break e;
                    case Xe:
                        h = 16, o = null;
                        break e
                }
                throw Error(s(130, e == null ? e : typeof e, ""))
        }
        return t = yt(h, n, t, a), t.elementType = e, t.type = o, t.lanes = u, t
    }

    function Rn(e, t, n, o) {
        return e = yt(7, e, o, t), e.lanes = n, e
    }

    function ks(e, t, n, o) {
        return e = yt(22, e, o, t), e.elementType = ie, e.lanes = n, e.stateNode = {
            isHidden: !1
        }, e
    }

    function Bl(e, t, n) {
        return e = yt(6, e, null, t), e.lanes = n, e
    }

    function Ul(e, t, n) {
        return t = yt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        }, t
    }

    function Qg(e, t, n, o, a) {
        this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = po(0), this.expirationTimes = po(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = po(0), this.identifierPrefix = o, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null
    }

    function Wl(e, t, n, o, a, u, h, y, w) {
        return e = new Qg(e, t, n, y, w), t === 1 ? (t = 1, u === !0 && (t |= 8)) : t = 0, u = yt(3, null, null, t), e.current = u, u.stateNode = e, u.memoizedState = {
            element: o,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        }, tl(u), e
    }

    function Yg(e, t, n) {
        var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: ne,
            key: o == null ? null : "" + o,
            children: e,
            containerInfo: t,
            implementation: n
        }
    }

    function qf(e) {
        if (!e) return tn;
        e = e._reactInternals;
        e: {
            if (yn(e) !== e || e.tag !== 1) throw Error(s(170));
            var t = e;do {
                switch (t.tag) {
                    case 3:
                        t = t.stateNode.context;
                        break e;
                    case 1:
                        if (be(t.type)) {
                            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                            break e
                        }
                }
                t = t.return
            } while (t !== null);
            throw Error(s(171))
        }
        if (e.tag === 1) {
            var n = e.type;
            if (be(n)) return Tc(e, n, t)
        }
        return t
    }

    function Zf(e, t, n, o, a, u, h, y, w) {
        return e = Wl(n, o, !0, e, a, u, h, y, w), e.context = qf(null), n = e.current, o = Ye(), a = un(n), u = Ut(o, a), u.callback = t ? ? null, sn(n, u, a), e.current.lanes = a, Cr(e, a, o), nt(e, o), e
    }

    function Cs(e, t, n, o) {
        var a = t.current,
            u = Ye(),
            h = un(a);
        return n = qf(n), t.context === null ? t.context = n : t.pendingContext = n, t = Ut(u, h), t.payload = {
            element: e
        }, o = o === void 0 ? null : o, o !== null && (t.callback = o), e = sn(a, t, h), e !== null && (At(e, a, h, u), ns(e, a, h)), h
    }

    function Es(e) {
        if (e = e.current, !e.child) return null;
        switch (e.child.tag) {
            case 5:
                return e.child.stateNode;
            default:
                return e.child.stateNode
        }
    }

    function Jf(e, t) {
        if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
            var n = e.retryLane;
            e.retryLane = n !== 0 && n < t ? n : t
        }
    }

    function $l(e, t) {
        Jf(e, t), (e = e.alternate) && Jf(e, t)
    }
    var bf = typeof reportError == "function" ? reportError : function(e) {
        console.error(e)
    };

    function Hl(e) {
        this._internalRoot = e
    }
    As.prototype.render = Hl.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null) throw Error(s(409));
        Cs(e, t, null, null)
    }, As.prototype.unmount = Hl.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            En(function() {
                Cs(null, e, null, null)
            }), t[Ot] = null
        }
    };

    function As(e) {
        this._internalRoot = e
    }
    As.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = Vu();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for (var n = 0; n < qt.length && t !== 0 && t < qt[n].priority; n++);
            qt.splice(n, 0, e), n === 0 && Iu(e)
        }
    };

    function Kl(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
    }

    function Ds(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    }

    function ed() {}

    function qg(e, t, n, o, a) {
        if (a) {
            if (typeof o == "function") {
                var u = o;
                o = function() {
                    var E = Es(h);
                    u.call(E)
                }
            }
            var h = Zf(t, o, e, 0, null, !1, !1, "", ed);
            return e._reactRootContainer = h, e[Ot] = h.current, zr(e.nodeType === 8 ? e.parentNode : e), En(), h
        }
        for (; a = e.lastChild;) e.removeChild(a);
        if (typeof o == "function") {
            var y = o;
            o = function() {
                var E = Es(w);
                y.call(E)
            }
        }
        var w = Wl(e, 0, !1, null, null, !1, !1, "", ed);
        return e._reactRootContainer = w, e[Ot] = w.current, zr(e.nodeType === 8 ? e.parentNode : e), En(function() {
            Cs(t, w, n, o)
        }), w
    }

    function Rs(e, t, n, o, a) {
        var u = n._reactRootContainer;
        if (u) {
            var h = u;
            if (typeof a == "function") {
                var y = a;
                a = function() {
                    var w = Es(h);
                    y.call(w)
                }
            }
            Cs(t, h, e, a)
        } else h = qg(n, t, e, a, o);
        return Es(h)
    }
    ju = function(e) {
        switch (e.tag) {
            case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                    var n = kr(t.pendingLanes);
                    n !== 0 && (mo(t, n | 1), nt(t, De()), !(le & 6) && (or = De() + 500, nn()))
                }
                break;
            case 13:
                En(function() {
                    var o = Bt(e, 1);
                    if (o !== null) {
                        var a = Ye();
                        At(o, e, 1, a)
                    }
                }), $l(e, 1)
        }
    }, go = function(e) {
        if (e.tag === 13) {
            var t = Bt(e, 134217728);
            if (t !== null) {
                var n = Ye();
                At(t, e, 134217728, n)
            }
            $l(e, 134217728)
        }
    }, _u = function(e) {
        if (e.tag === 13) {
            var t = un(e),
                n = Bt(e, t);
            if (n !== null) {
                var o = Ye();
                At(n, e, t, o)
            }
            $l(e, t)
        }
    }, Vu = function() {
        return he
    }, Ou = function(e, t) {
        var n = he;
        try {
            return he = e, t()
        } finally {
            he = n
        }
    }, lo = function(e, t, n) {
        switch (t) {
            case "input":
                if (bs(e, n), t = n.name, n.type === "radio" && t != null) {
                    for (n = e; n.parentNode;) n = n.parentNode;
                    for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                        var o = n[t];
                        if (o !== e && o.form === e.form) {
                            var a = Gi(o);
                            if (!a) throw Error(s(90));
                            ou(o), bs(o, a)
                        }
                    }
                }
                break;
            case "textarea":
                fu(e, n);
                break;
            case "select":
                t = n.value, t != null && Fn(e, !!n.multiple, t, !1)
        }
    }, wu = Ol, Su = En;
    var Zg = {
            usingClientEntryPoint: !1,
            Events: [Wr, Xn, Gi, vu, xu, Ol]
        },
        ni = {
            findFiberByHostInstance: vn,
            bundleType: 0,
            version: "18.3.1",
            rendererPackageName: "react-dom"
        },
        Jg = {
            bundleType: ni.bundleType,
            version: ni.version,
            rendererPackageName: ni.rendererPackageName,
            rendererConfig: ni.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: ee.ReactCurrentDispatcher,
            findHostInstanceByFiber: function(e) {
                return e = Cu(e), e === null ? null : e.stateNode
            },
            findFiberByHostInstance: ni.findFiberByHostInstance,
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
        };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Ms = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Ms.isDisabled && Ms.supportsFiber) try {
            Ai = Ms.inject(Jg), Rt = Ms
        } catch {}
    }
    return rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Zg, rt.createPortal = function(e, t) {
        var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!Kl(t)) throw Error(s(200));
        return Yg(e, t, null, n)
    }, rt.createRoot = function(e, t) {
        if (!Kl(e)) throw Error(s(299));
        var n = !1,
            o = "",
            a = bf;
        return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onRecoverableError !== void 0 && (a = t.onRecoverableError)), t = Wl(e, 1, !1, null, null, n, !1, o, a), e[Ot] = t.current, zr(e.nodeType === 8 ? e.parentNode : e), new Hl(t)
    }, rt.findDOMNode = function(e) {
        if (e == null) return null;
        if (e.nodeType === 1) return e;
        var t = e._reactInternals;
        if (t === void 0) throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
        return e = Cu(t), e = e === null ? null : e.stateNode, e
    }, rt.flushSync = function(e) {
        return En(e)
    }, rt.hydrate = function(e, t, n) {
        if (!Ds(t)) throw Error(s(200));
        return Rs(null, e, t, !0, n)
    }, rt.hydrateRoot = function(e, t, n) {
        if (!Kl(e)) throw Error(s(405));
        var o = n != null && n.hydratedSources || null,
            a = !1,
            u = "",
            h = bf;
        if (n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (u = n.identifierPrefix), n.onRecoverableError !== void 0 && (h = n.onRecoverableError)), t = Zf(t, null, e, 1, n ? ? null, a, !1, u, h), e[Ot] = t.current, zr(e), o)
            for (e = 0; e < o.length; e++) n = o[e], a = n._getVersion, a = a(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(n, a);
        return new As(t)
    }, rt.render = function(e, t, n) {
        if (!Ds(t)) throw Error(s(200));
        return Rs(null, e, t, !1, n)
    }, rt.unmountComponentAtNode = function(e) {
        if (!Ds(e)) throw Error(s(40));
        return e._reactRootContainer ? (En(function() {
            Rs(null, null, e, !1, function() {
                e._reactRootContainer = null, e[Ot] = null
            })
        }), !0) : !1
    }, rt.unstable_batchedUpdates = Ol, rt.unstable_renderSubtreeIntoContainer = function(e, t, n, o) {
        if (!Ds(n)) throw Error(s(200));
        if (e == null || e._reactInternals === void 0) throw Error(s(38));
        return Rs(e, t, n, !1, o)
    }, rt.version = "18.3.1-next-f1338f8080-20240426", rt
}
var ad;

function ly() {
    if (ad) return Ql.exports;
    ad = 1;

    function r() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)
        } catch (i) {
            console.error(i)
        }
    }
    return r(), Ql.exports = oy(), Ql.exports
}
var ud;

function ay() {
    if (ud) return Ns;
    ud = 1;
    var r = ly();
    return Ns.createRoot = r.createRoot, Ns.hydrateRoot = r.hydrateRoot, Ns
}
var uy = ay();
const Dh = te.createContext({});

function cy(r) {
    const i = te.useRef(null);
    return i.current === null && (i.current = r()), i.current
}
const Da = te.createContext(null),
    Rh = te.createContext({
        transformPagePoint: r => r,
        isStatic: !1,
        reducedMotion: "never"
    });

function fy(r = !0) {
    const i = te.useContext(Da);
    if (i === null) return [!0, null];
    const {
        isPresent: s,
        onExitComplete: l,
        register: c
    } = i, d = te.useId();
    te.useEffect(() => {
        r && c(d)
    }, [r]);
    const f = te.useCallback(() => r && l && l(d), [d, l, r]);
    return !s && l ? [!1, f] : [!0]
}
const Ra = typeof window < "u",
    dy = Ra ? te.useLayoutEffect : te.useEffect,
    ct = r => r;
let ca = ct;

function Ma(r) {
    let i;
    return () => (i === void 0 && (i = r()), i)
}
const hr = (r, i, s) => {
        const l = i - r;
        return l === 0 ? 1 : (s - r) / l
    },
    Ht = r => r * 1e3,
    Kt = r => r / 1e3,
    hy = {
        skipAnimations: !1,
        useManualTiming: !1
    };

function py(r) {
    let i = new Set,
        s = new Set,
        l = !1,
        c = !1;
    const d = new WeakSet;
    let f = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    };

    function p(g) {
        d.has(g) && (m.schedule(g), r()), g(f)
    }
    const m = {
        schedule: (g, v = !1, x = !1) => {
            const A = x && l ? i : s;
            return v && d.add(g), A.has(g) || A.add(g), g
        },
        cancel: g => {
            s.delete(g), d.delete(g)
        },
        process: g => {
            if (f = g, l) {
                c = !0;
                return
            }
            l = !0, [i, s] = [s, i], i.forEach(p), i.clear(), l = !1, c && (c = !1, m.process(g))
        }
    };
    return m
}
const Ls = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"],
    my = 40;

function Mh(r, i) {
    let s = !1,
        l = !0;
    const c = {
            delta: 0,
            timestamp: 0,
            isProcessing: !1
        },
        d = () => s = !0,
        f = Ls.reduce((I, W) => (I[W] = py(d), I), {}),
        {
            read: p,
            resolveKeyframes: m,
            update: g,
            preRender: v,
            render: x,
            postRender: P
        } = f,
        A = () => {
            const I = performance.now();
            s = !1, c.delta = l ? 1e3 / 60 : Math.max(Math.min(I - c.timestamp, my), 1), c.timestamp = I, c.isProcessing = !0, p.process(c), m.process(c), g.process(c), v.process(c), x.process(c), P.process(c), c.isProcessing = !1, s && i && (l = !1, r(A))
        },
        _ = () => {
            s = !0, l = !0, c.isProcessing || r(A)
        };
    return {
        schedule: Ls.reduce((I, W) => {
            const K = f[W];
            return I[W] = (ee, X = !1, ne = !1) => (s || _(), K.schedule(ee, X, ne)), I
        }, {}),
        cancel: I => {
            for (let W = 0; W < Ls.length; W++) f[Ls[W]].cancel(I)
        },
        state: c,
        steps: f
    }
}
const {
    schedule: ve,
    cancel: pn,
    state: ze,
    steps: Zl
} = Mh(typeof requestAnimationFrame < "u" ? requestAnimationFrame : ct, !0), Nh = te.createContext({
    strict: !1
}), cd = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
}, pr = {};
for (const r in cd) pr[r] = {
    isEnabled: i => cd[r].some(s => !!i[s])
};

function gy(r) {
    for (const i in r) pr[i] = { ...pr[i],
        ...r[i]
    }
}
const yy = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

function Is(r) {
    return r.startsWith("while") || r.startsWith("drag") && r !== "draggable" || r.startsWith("layout") || r.startsWith("onTap") || r.startsWith("onPan") || r.startsWith("onLayout") || yy.has(r)
}
let Lh = r => !Is(r);

function vy(r) {
    r && (Lh = i => i.startsWith("on") ? !Is(i) : r(i))
}
try {
    vy(require("@emotion/is-prop-valid").default)
} catch {}

function xy(r, i, s) {
    const l = {};
    for (const c in r) c === "values" && typeof r.values == "object" || (Lh(c) || s === !0 && Is(c) || !i && !Is(c) || r.draggable && c.startsWith("onDrag")) && (l[c] = r[c]);
    return l
}

function wy(r) {
    if (typeof Proxy > "u") return r;
    const i = new Map,
        s = (...l) => r(...l);
    return new Proxy(s, {
        get: (l, c) => c === "create" ? r : (i.has(c) || i.set(c, r(c)), i.get(c))
    })
}
const Xs = te.createContext({});

function di(r) {
    return typeof r == "string" || Array.isArray(r)
}

function Qs(r) {
    return r !== null && typeof r == "object" && typeof r.start == "function"
}
const Na = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
    La = ["initial", ...Na];

function Ys(r) {
    return Qs(r.animate) || La.some(i => di(r[i]))
}

function jh(r) {
    return !!(Ys(r) || r.variants)
}

function Sy(r, i) {
    if (Ys(r)) {
        const {
            initial: s,
            animate: l
        } = r;
        return {
            initial: s === !1 || di(s) ? s : void 0,
            animate: di(l) ? l : void 0
        }
    }
    return r.inherit !== !1 ? i : {}
}

function Py(r) {
    const {
        initial: i,
        animate: s
    } = Sy(r, te.useContext(Xs));
    return te.useMemo(() => ({
        initial: i,
        animate: s
    }), [fd(i), fd(s)])
}

function fd(r) {
    return Array.isArray(r) ? r.join(" ") : r
}
const Ty = Symbol.for("motionComponentSymbol");

function ar(r) {
    return r && typeof r == "object" && Object.prototype.hasOwnProperty.call(r, "current")
}

function ky(r, i, s) {
    return te.useCallback(l => {
        l && r.onMount && r.onMount(l), i && (l ? i.mount(l) : i.unmount()), s && (typeof s == "function" ? s(l) : ar(s) && (s.current = l))
    }, [i])
}
const ja = r => r.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
    Cy = "framerAppearId",
    _h = "data-" + ja(Cy),
    {
        schedule: _a,
        cancel: Hx
    } = Mh(queueMicrotask, !1),
    Vh = te.createContext({});

function Ey(r, i, s, l, c) {
    var d, f;
    const {
        visualElement: p
    } = te.useContext(Xs), m = te.useContext(Nh), g = te.useContext(Da), v = te.useContext(Rh).reducedMotion, x = te.useRef(null);
    l = l || m.renderer, !x.current && l && (x.current = l(r, {
        visualState: i,
        parent: p,
        props: s,
        presenceContext: g,
        blockInitialAnimation: g ? g.initial === !1 : !1,
        reducedMotionConfig: v
    }));
    const P = x.current,
        A = te.useContext(Vh);
    P && !P.projection && c && (P.type === "html" || P.type === "svg") && Ay(x.current, s, c, A);
    const _ = te.useRef(!1);
    te.useInsertionEffect(() => {
        P && _.current && P.update(s, g)
    });
    const R = s[_h],
        V = te.useRef(!!R && !(!((d = window.MotionHandoffIsComplete) === null || d === void 0) && d.call(window, R)) && ((f = window.MotionHasOptimisedAnimation) === null || f === void 0 ? void 0 : f.call(window, R)));
    return dy(() => {
        P && (_.current = !0, window.MotionIsMounted = !0, P.updateFeatures(), _a.render(P.render), V.current && P.animationState && P.animationState.animateChanges())
    }), te.useEffect(() => {
        P && (!V.current && P.animationState && P.animationState.animateChanges(), V.current && (queueMicrotask(() => {
            var I;
            (I = window.MotionHandoffMarkAsComplete) === null || I === void 0 || I.call(window, R)
        }), V.current = !1))
    }), P
}

function Ay(r, i, s, l) {
    const {
        layoutId: c,
        layout: d,
        drag: f,
        dragConstraints: p,
        layoutScroll: m,
        layoutRoot: g
    } = i;
    r.projection = new s(r.latestValues, i["data-framer-portal-id"] ? void 0 : Oh(r.parent)), r.projection.setOptions({
        layoutId: c,
        layout: d,
        alwaysMeasureLayout: !!f || p && ar(p),
        visualElement: r,
        animationType: typeof d == "string" ? d : "both",
        initialPromotionConfig: l,
        layoutScroll: m,
        layoutRoot: g
    })
}

function Oh(r) {
    if (r) return r.options.allowProjection !== !1 ? r.projection : Oh(r.parent)
}

function Dy({
    preloadedFeatures: r,
    createVisualElement: i,
    useRender: s,
    useVisualState: l,
    Component: c
}) {
    var d, f;
    r && gy(r);

    function p(g, v) {
        let x;
        const P = { ...te.useContext(Rh),
                ...g,
                layoutId: Ry(g)
            },
            {
                isStatic: A
            } = P,
            _ = Py(g),
            R = l(g, A);
        if (!A && Ra) {
            My();
            const V = Ny(P);
            x = V.MeasureLayout, _.visualElement = Ey(c, R, P, i, V.ProjectionNode)
        }
        return j.jsxs(Xs.Provider, {
            value: _,
            children: [x && _.visualElement ? j.jsx(x, {
                visualElement: _.visualElement,
                ...P
            }) : null, s(c, g, ky(R, _.visualElement, v), R, A, _.visualElement)]
        })
    }
    p.displayName = `motion.${typeof c=="string"?c:`create(${(f=(d=c.displayName)!==null&&d!==void 0?d:c.name)!==null&&f!==void 0?f:""})`}`;
    const m = te.forwardRef(p);
    return m[Ty] = c, m
}

function Ry({
    layoutId: r
}) {
    const i = te.useContext(Dh).id;
    return i && r !== void 0 ? i + "-" + r : r
}

function My(r, i) {
    te.useContext(Nh).strict
}

function Ny(r) {
    const {
        drag: i,
        layout: s
    } = pr;
    if (!i && !s) return {};
    const l = { ...i,
        ...s
    };
    return {
        MeasureLayout: i != null && i.isEnabled(r) || s != null && s.isEnabled(r) ? l.MeasureLayout : void 0,
        ProjectionNode: l.ProjectionNode
    }
}
const Ly = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

function Va(r) {
    return typeof r != "string" || r.includes("-") ? !1 : !!(Ly.indexOf(r) > -1 || /[A-Z]/u.test(r))
}

function dd(r) {
    const i = [{}, {}];
    return r == null || r.values.forEach((s, l) => {
        i[0][l] = s.get(), i[1][l] = s.getVelocity()
    }), i
}

function Oa(r, i, s, l) {
    if (typeof i == "function") {
        const [c, d] = dd(l);
        i = i(s !== void 0 ? s : r.custom, c, d)
    }
    if (typeof i == "string" && (i = r.variants && r.variants[i]), typeof i == "function") {
        const [c, d] = dd(l);
        i = i(s !== void 0 ? s : r.custom, c, d)
    }
    return i
}
const fa = r => Array.isArray(r),
    jy = r => !!(r && typeof r == "object" && r.mix && r.toValue),
    _y = r => fa(r) ? r[r.length - 1] || 0 : r,
    Ke = r => !!(r && r.getVelocity);

function Vs(r) {
    const i = Ke(r) ? r.get() : r;
    return jy(i) ? i.toValue() : i
}

function Vy({
    scrapeMotionValuesFromProps: r,
    createRenderState: i,
    onUpdate: s
}, l, c, d) {
    const f = {
        latestValues: Oy(l, c, d, r),
        renderState: i()
    };
    return s && (f.onMount = p => s({
        props: l,
        current: p,
        ...f
    }), f.onUpdate = p => s(p)), f
}
const Fh = r => (i, s) => {
    const l = te.useContext(Xs),
        c = te.useContext(Da),
        d = () => Vy(r, i, l, c);
    return s ? d() : cy(d)
};

function Oy(r, i, s, l) {
    const c = {},
        d = l(r, {});
    for (const P in d) c[P] = Vs(d[P]);
    let {
        initial: f,
        animate: p
    } = r;
    const m = Ys(r),
        g = jh(r);
    i && g && !m && r.inherit !== !1 && (f === void 0 && (f = i.initial), p === void 0 && (p = i.animate));
    let v = s ? s.initial === !1 : !1;
    v = v || f === !1;
    const x = v ? p : f;
    if (x && typeof x != "boolean" && !Qs(x)) {
        const P = Array.isArray(x) ? x : [x];
        for (let A = 0; A < P.length; A++) {
            const _ = Oa(r, P[A]);
            if (_) {
                const {
                    transitionEnd: R,
                    transition: V,
                    ...I
                } = _;
                for (const W in I) {
                    let K = I[W];
                    if (Array.isArray(K)) {
                        const ee = v ? K.length - 1 : 0;
                        K = K[ee]
                    }
                    K !== null && (c[W] = K)
                }
                for (const W in R) c[W] = R[W]
            }
        }
    }
    return c
}
const gr = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
    On = new Set(gr),
    Ih = r => i => typeof i == "string" && i.startsWith(r),
    zh = Ih("--"),
    Fy = Ih("var(--"),
    Fa = r => Fy(r) ? Iy.test(r.split("/*")[0].trim()) : !1,
    Iy = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
    Bh = (r, i) => i && typeof r == "number" ? i.transform(r) : r,
    Gt = (r, i, s) => s > i ? i : s < r ? r : s,
    yr = {
        test: r => typeof r == "number",
        parse: parseFloat,
        transform: r => r
    },
    hi = { ...yr,
        transform: r => Gt(0, 1, r)
    },
    js = { ...yr,
        default: 1
    },
    yi = r => ({
        test: i => typeof i == "string" && i.endsWith(r) && i.split(" ").length === 1,
        parse: parseFloat,
        transform: i => `${i}${r}`
    }),
    hn = yi("deg"),
    _t = yi("%"),
    J = yi("px"),
    zy = yi("vh"),
    By = yi("vw"),
    hd = { ..._t,
        parse: r => _t.parse(r) / 100,
        transform: r => _t.transform(r * 100)
    },
    Uy = {
        borderWidth: J,
        borderTopWidth: J,
        borderRightWidth: J,
        borderBottomWidth: J,
        borderLeftWidth: J,
        borderRadius: J,
        radius: J,
        borderTopLeftRadius: J,
        borderTopRightRadius: J,
        borderBottomRightRadius: J,
        borderBottomLeftRadius: J,
        width: J,
        maxWidth: J,
        height: J,
        maxHeight: J,
        top: J,
        right: J,
        bottom: J,
        left: J,
        padding: J,
        paddingTop: J,
        paddingRight: J,
        paddingBottom: J,
        paddingLeft: J,
        margin: J,
        marginTop: J,
        marginRight: J,
        marginBottom: J,
        marginLeft: J,
        backgroundPositionX: J,
        backgroundPositionY: J
    },
    Wy = {
        rotate: hn,
        rotateX: hn,
        rotateY: hn,
        rotateZ: hn,
        scale: js,
        scaleX: js,
        scaleY: js,
        scaleZ: js,
        skew: hn,
        skewX: hn,
        skewY: hn,
        distance: J,
        translateX: J,
        translateY: J,
        translateZ: J,
        x: J,
        y: J,
        z: J,
        perspective: J,
        transformPerspective: J,
        opacity: hi,
        originX: hd,
        originY: hd,
        originZ: J
    },
    pd = { ...yr,
        transform: Math.round
    },
    Ia = { ...Uy,
        ...Wy,
        zIndex: pd,
        size: J,
        fillOpacity: hi,
        strokeOpacity: hi,
        numOctaves: pd
    },
    $y = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective"
    },
    Hy = gr.length;

function Ky(r, i, s) {
    let l = "",
        c = !0;
    for (let d = 0; d < Hy; d++) {
        const f = gr[d],
            p = r[f];
        if (p === void 0) continue;
        let m = !0;
        if (typeof p == "number" ? m = p === (f.startsWith("scale") ? 1 : 0) : m = parseFloat(p) === 0, !m || s) {
            const g = Bh(p, Ia[f]);
            if (!m) {
                c = !1;
                const v = $y[f] || f;
                l += `${v}(${g}) `
            }
            s && (i[f] = g)
        }
    }
    return l = l.trim(), s ? l = s(i, c ? "" : l) : c && (l = "none"), l
}

function za(r, i, s) {
    const {
        style: l,
        vars: c,
        transformOrigin: d
    } = r;
    let f = !1,
        p = !1;
    for (const m in i) {
        const g = i[m];
        if (On.has(m)) {
            f = !0;
            continue
        } else if (zh(m)) {
            c[m] = g;
            continue
        } else {
            const v = Bh(g, Ia[m]);
            m.startsWith("origin") ? (p = !0, d[m] = v) : l[m] = v
        }
    }
    if (i.transform || (f || s ? l.transform = Ky(i, r.transform, s) : l.transform && (l.transform = "none")), p) {
        const {
            originX: m = "50%",
            originY: g = "50%",
            originZ: v = 0
        } = d;
        l.transformOrigin = `${m} ${g} ${v}`
    }
}
const Gy = {
        offset: "stroke-dashoffset",
        array: "stroke-dasharray"
    },
    Xy = {
        offset: "strokeDashoffset",
        array: "strokeDasharray"
    };

function Qy(r, i, s = 1, l = 0, c = !0) {
    r.pathLength = 1;
    const d = c ? Gy : Xy;
    r[d.offset] = J.transform(-l);
    const f = J.transform(i),
        p = J.transform(s);
    r[d.array] = `${f} ${p}`
}

function md(r, i, s) {
    return typeof r == "string" ? r : J.transform(i + s * r)
}

function Yy(r, i, s) {
    const l = md(i, r.x, r.width),
        c = md(s, r.y, r.height);
    return `${l} ${c}`
}

function Ba(r, {
    attrX: i,
    attrY: s,
    attrScale: l,
    originX: c,
    originY: d,
    pathLength: f,
    pathSpacing: p = 1,
    pathOffset: m = 0,
    ...g
}, v, x) {
    if (za(r, g, x), v) {
        r.style.viewBox && (r.attrs.viewBox = r.style.viewBox);
        return
    }
    r.attrs = r.style, r.style = {};
    const {
        attrs: P,
        style: A,
        dimensions: _
    } = r;
    P.transform && (_ && (A.transform = P.transform), delete P.transform), _ && (c !== void 0 || d !== void 0 || A.transform) && (A.transformOrigin = Yy(_, c !== void 0 ? c : .5, d !== void 0 ? d : .5)), i !== void 0 && (P.x = i), s !== void 0 && (P.y = s), l !== void 0 && (P.scale = l), f !== void 0 && Qy(P, f, p, m, !1)
}
const Ua = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {}
    }),
    Uh = () => ({ ...Ua(),
        attrs: {}
    }),
    Wa = r => typeof r == "string" && r.toLowerCase() === "svg";

function Wh(r, {
    style: i,
    vars: s
}, l, c) {
    Object.assign(r.style, i, c && c.getProjectionStyles(l));
    for (const d in s) r.style.setProperty(d, s[d])
}
const $h = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

function Hh(r, i, s, l) {
    Wh(r, i, void 0, l);
    for (const c in i.attrs) r.setAttribute($h.has(c) ? c : ja(c), i.attrs[c])
}
const zs = {};

function qy(r) {
    Object.assign(zs, r)
}

function Kh(r, {
    layout: i,
    layoutId: s
}) {
    return On.has(r) || r.startsWith("origin") || (i || s !== void 0) && (!!zs[r] || r === "opacity")
}

function $a(r, i, s) {
    var l;
    const {
        style: c
    } = r, d = {};
    for (const f in c)(Ke(c[f]) || i.style && Ke(i.style[f]) || Kh(f, r) || ((l = s == null ? void 0 : s.getValue(f)) === null || l === void 0 ? void 0 : l.liveStyle) !== void 0) && (d[f] = c[f]);
    return d
}

function Gh(r, i, s) {
    const l = $a(r, i, s);
    for (const c in r)
        if (Ke(r[c]) || Ke(i[c])) {
            const d = gr.indexOf(c) !== -1 ? "attr" + c.charAt(0).toUpperCase() + c.substring(1) : c;
            l[d] = r[c]
        }
    return l
}

function Zy(r, i) {
    try {
        i.dimensions = typeof r.getBBox == "function" ? r.getBBox() : r.getBoundingClientRect()
    } catch {
        i.dimensions = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        }
    }
}
const gd = ["x", "y", "width", "height", "cx", "cy", "r"],
    Jy = {
        useVisualState: Fh({
            scrapeMotionValuesFromProps: Gh,
            createRenderState: Uh,
            onUpdate: ({
                props: r,
                prevProps: i,
                current: s,
                renderState: l,
                latestValues: c
            }) => {
                if (!s) return;
                let d = !!r.drag;
                if (!d) {
                    for (const p in c)
                        if (On.has(p)) {
                            d = !0;
                            break
                        }
                }
                if (!d) return;
                let f = !i;
                if (i)
                    for (let p = 0; p < gd.length; p++) {
                        const m = gd[p];
                        r[m] !== i[m] && (f = !0)
                    }
                f && ve.read(() => {
                    Zy(s, l), ve.render(() => {
                        Ba(l, c, Wa(s.tagName), r.transformTemplate), Hh(s, l)
                    })
                })
            }
        })
    },
    by = {
        useVisualState: Fh({
            scrapeMotionValuesFromProps: $a,
            createRenderState: Ua
        })
    };

function Xh(r, i, s) {
    for (const l in i) !Ke(i[l]) && !Kh(l, s) && (r[l] = i[l])
}

function ev({
    transformTemplate: r
}, i) {
    return te.useMemo(() => {
        const s = Ua();
        return za(s, i, r), Object.assign({}, s.vars, s.style)
    }, [i])
}

function tv(r, i) {
    const s = r.style || {},
        l = {};
    return Xh(l, s, r), Object.assign(l, ev(r, i)), l
}

function nv(r, i) {
    const s = {},
        l = tv(r, i);
    return r.drag && r.dragListener !== !1 && (s.draggable = !1, l.userSelect = l.WebkitUserSelect = l.WebkitTouchCallout = "none", l.touchAction = r.drag === !0 ? "none" : `pan-${r.drag==="x"?"y":"x"}`), r.tabIndex === void 0 && (r.onTap || r.onTapStart || r.whileTap) && (s.tabIndex = 0), s.style = l, s
}

function rv(r, i, s, l) {
    const c = te.useMemo(() => {
        const d = Uh();
        return Ba(d, i, Wa(l), r.transformTemplate), { ...d.attrs,
            style: { ...d.style
            }
        }
    }, [i]);
    if (r.style) {
        const d = {};
        Xh(d, r.style, r), c.style = { ...d,
            ...c.style
        }
    }
    return c
}

function iv(r = !1) {
    return (s, l, c, {
        latestValues: d
    }, f) => {
        const m = (Va(s) ? rv : nv)(l, d, f, s),
            g = xy(l, typeof s == "string", r),
            v = s !== te.Fragment ? { ...g,
                ...m,
                ref: c
            } : {},
            {
                children: x
            } = l,
            P = te.useMemo(() => Ke(x) ? x.get() : x, [x]);
        return te.createElement(s, { ...v,
            children: P
        })
    }
}

function sv(r, i) {
    return function(l, {
        forwardMotionProps: c
    } = {
        forwardMotionProps: !1
    }) {
        const f = { ...Va(l) ? Jy : by,
            preloadedFeatures: r,
            useRender: iv(c),
            createVisualElement: i,
            Component: l
        };
        return Dy(f)
    }
}

function Qh(r, i) {
    if (!Array.isArray(i)) return !1;
    const s = i.length;
    if (s !== r.length) return !1;
    for (let l = 0; l < s; l++)
        if (i[l] !== r[l]) return !1;
    return !0
}

function qs(r, i, s) {
    const l = r.getProps();
    return Oa(l, i, s !== void 0 ? s : l.custom, r)
}
const ov = Ma(() => window.ScrollTimeline !== void 0);
class lv {
    constructor(i) {
        this.stop = () => this.runAll("stop"), this.animations = i.filter(Boolean)
    }
    get finished() {
        return Promise.all(this.animations.map(i => "finished" in i ? i.finished : i))
    }
    getAll(i) {
        return this.animations[0][i]
    }
    setAll(i, s) {
        for (let l = 0; l < this.animations.length; l++) this.animations[l][i] = s
    }
    attachTimeline(i, s) {
        const l = this.animations.map(c => {
            if (ov() && c.attachTimeline) return c.attachTimeline(i);
            if (typeof s == "function") return s(c)
        });
        return () => {
            l.forEach((c, d) => {
                c && c(), this.animations[d].stop()
            })
        }
    }
    get time() {
        return this.getAll("time")
    }
    set time(i) {
        this.setAll("time", i)
    }
    get speed() {
        return this.getAll("speed")
    }
    set speed(i) {
        this.setAll("speed", i)
    }
    get startTime() {
        return this.getAll("startTime")
    }
    get duration() {
        let i = 0;
        for (let s = 0; s < this.animations.length; s++) i = Math.max(i, this.animations[s].duration);
        return i
    }
    runAll(i) {
        this.animations.forEach(s => s[i]())
    }
    flatten() {
        this.runAll("flatten")
    }
    play() {
        this.runAll("play")
    }
    pause() {
        this.runAll("pause")
    }
    cancel() {
        this.runAll("cancel")
    }
    complete() {
        this.runAll("complete")
    }
}
class av extends lv {
    then(i, s) {
        return Promise.all(this.animations).then(i).catch(s)
    }
}

function Ha(r, i) {
    return r ? r[i] || r.default || r : void 0
}
const da = 2e4;

function Yh(r) {
    let i = 0;
    const s = 50;
    let l = r.next(i);
    for (; !l.done && i < da;) i += s, l = r.next(i);
    return i >= da ? 1 / 0 : i
}

function Ka(r) {
    return typeof r == "function"
}

function yd(r, i) {
    r.timeline = i, r.onfinish = null
}
const Ga = r => Array.isArray(r) && typeof r[0] == "number",
    uv = {
        linearEasing: void 0
    };

function cv(r, i) {
    const s = Ma(r);
    return () => {
        var l;
        return (l = uv[i]) !== null && l !== void 0 ? l : s()
    }
}
const Bs = cv(() => {
        try {
            document.createElement("div").animate({
                opacity: 0
            }, {
                easing: "linear(0, 1)"
            })
        } catch {
            return !1
        }
        return !0
    }, "linearEasing"),
    qh = (r, i, s = 10) => {
        let l = "";
        const c = Math.max(Math.round(i / s), 2);
        for (let d = 0; d < c; d++) l += r(hr(0, c - 1, d)) + ", ";
        return `linear(${l.substring(0,l.length-2)})`
    };

function Zh(r) {
    return !!(typeof r == "function" && Bs() || !r || typeof r == "string" && (r in ha || Bs()) || Ga(r) || Array.isArray(r) && r.every(Zh))
}
const si = ([r, i, s, l]) => `cubic-bezier(${r}, ${i}, ${s}, ${l})`,
    ha = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: si([0, .65, .55, 1]),
        circOut: si([.55, 0, 1, .45]),
        backIn: si([.31, .01, .66, -.59]),
        backOut: si([.33, 1.53, .69, .99])
    };

function Jh(r, i) {
    if (r) return typeof r == "function" && Bs() ? qh(r, i) : Ga(r) ? si(r) : Array.isArray(r) ? r.map(s => Jh(s, i) || ha.easeOut) : ha[r]
}
const Dt = {
    x: !1,
    y: !1
};

function bh() {
    return Dt.x || Dt.y
}

function fv(r, i, s) {
    var l;
    if (r instanceof Element) return [r];
    if (typeof r == "string") {
        let c = document;
        const d = (l = void 0) !== null && l !== void 0 ? l : c.querySelectorAll(r);
        return d ? Array.from(d) : []
    }
    return Array.from(r)
}

function ep(r, i) {
    const s = fv(r),
        l = new AbortController,
        c = {
            passive: !0,
            ...i,
            signal: l.signal
        };
    return [s, c, () => l.abort()]
}

function vd(r) {
    return !(r.pointerType === "touch" || bh())
}

function dv(r, i, s = {}) {
    const [l, c, d] = ep(r, s), f = p => {
        if (!vd(p)) return;
        const {
            target: m
        } = p, g = i(m, p);
        if (typeof g != "function" || !m) return;
        const v = x => {
            vd(x) && (g(x), m.removeEventListener("pointerleave", v))
        };
        m.addEventListener("pointerleave", v, c)
    };
    return l.forEach(p => {
        p.addEventListener("pointerenter", f, c)
    }), d
}
const tp = (r, i) => i ? r === i ? !0 : tp(r, i.parentElement) : !1,
    Xa = r => r.pointerType === "mouse" ? typeof r.button != "number" || r.button <= 0 : r.isPrimary !== !1,
    hv = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);

function pv(r) {
    return hv.has(r.tagName) || r.tabIndex !== -1
}
const oi = new WeakSet;

function xd(r) {
    return i => {
        i.key === "Enter" && r(i)
    }
}

function Jl(r, i) {
    r.dispatchEvent(new PointerEvent("pointer" + i, {
        isPrimary: !0,
        bubbles: !0
    }))
}
const mv = (r, i) => {
    const s = r.currentTarget;
    if (!s) return;
    const l = xd(() => {
        if (oi.has(s)) return;
        Jl(s, "down");
        const c = xd(() => {
                Jl(s, "up")
            }),
            d = () => Jl(s, "cancel");
        s.addEventListener("keyup", c, i), s.addEventListener("blur", d, i)
    });
    s.addEventListener("keydown", l, i), s.addEventListener("blur", () => s.removeEventListener("keydown", l), i)
};

function wd(r) {
    return Xa(r) && !bh()
}

function gv(r, i, s = {}) {
    const [l, c, d] = ep(r, s), f = p => {
        const m = p.currentTarget;
        if (!wd(p) || oi.has(m)) return;
        oi.add(m);
        const g = i(m, p),
            v = (A, _) => {
                window.removeEventListener("pointerup", x), window.removeEventListener("pointercancel", P), !(!wd(A) || !oi.has(m)) && (oi.delete(m), typeof g == "function" && g(A, {
                    success: _
                }))
            },
            x = A => {
                v(A, s.useGlobalTarget || tp(m, A.target))
            },
            P = A => {
                v(A, !1)
            };
        window.addEventListener("pointerup", x, c), window.addEventListener("pointercancel", P, c)
    };
    return l.forEach(p => {
        !pv(p) && p.getAttribute("tabindex") === null && (p.tabIndex = 0), (s.useGlobalTarget ? window : p).addEventListener("pointerdown", f, c), p.addEventListener("focus", g => mv(g, c), c)
    }), d
}

function yv(r) {
    return r === "x" || r === "y" ? Dt[r] ? null : (Dt[r] = !0, () => {
        Dt[r] = !1
    }) : Dt.x || Dt.y ? null : (Dt.x = Dt.y = !0, () => {
        Dt.x = Dt.y = !1
    })
}
const np = new Set(["width", "height", "top", "left", "right", "bottom", ...gr]);
let Os;

function vv() {
    Os = void 0
}
const Vt = {
    now: () => (Os === void 0 && Vt.set(ze.isProcessing || hy.useManualTiming ? ze.timestamp : performance.now()), Os),
    set: r => {
        Os = r, queueMicrotask(vv)
    }
};

function Qa(r, i) {
    r.indexOf(i) === -1 && r.push(i)
}

function Ya(r, i) {
    const s = r.indexOf(i);
    s > -1 && r.splice(s, 1)
}
class qa {
    constructor() {
        this.subscriptions = []
    }
    add(i) {
        return Qa(this.subscriptions, i), () => Ya(this.subscriptions, i)
    }
    notify(i, s, l) {
        const c = this.subscriptions.length;
        if (c)
            if (c === 1) this.subscriptions[0](i, s, l);
            else
                for (let d = 0; d < c; d++) {
                    const f = this.subscriptions[d];
                    f && f(i, s, l)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}

function rp(r, i) {
    return i ? r * (1e3 / i) : 0
}
const Sd = 30,
    xv = r => !isNaN(parseFloat(r));
class wv {
    constructor(i, s = {}) {
        this.version = "12.0.3", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (l, c = !0) => {
            const d = Vt.now();
            this.updatedAt !== d && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(l), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), c && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }, this.hasAnimated = !1, this.setCurrent(i), this.owner = s.owner
    }
    setCurrent(i) {
        this.current = i, this.updatedAt = Vt.now(), this.canTrackVelocity === null && i !== void 0 && (this.canTrackVelocity = xv(this.current))
    }
    setPrevFrameValue(i = this.current) {
        this.prevFrameValue = i, this.prevUpdatedAt = this.updatedAt
    }
    onChange(i) {
        return this.on("change", i)
    }
    on(i, s) {
        this.events[i] || (this.events[i] = new qa);
        const l = this.events[i].add(s);
        return i === "change" ? () => {
            l(), ve.read(() => {
                this.events.change.getSize() || this.stop()
            })
        } : l
    }
    clearListeners() {
        for (const i in this.events) this.events[i].clear()
    }
    attach(i, s) {
        this.passiveEffect = i, this.stopPassiveEffect = s
    }
    set(i, s = !0) {
        !s || !this.passiveEffect ? this.updateAndNotify(i, s) : this.passiveEffect(i, this.updateAndNotify)
    }
    setWithVelocity(i, s, l) {
        this.set(s), this.prev = void 0, this.prevFrameValue = i, this.prevUpdatedAt = this.updatedAt - l
    }
    jump(i, s = !0) {
        this.updateAndNotify(i), this.prev = i, this.prevUpdatedAt = this.prevFrameValue = void 0, s && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const i = Vt.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || i - this.updatedAt > Sd) return 0;
        const s = Math.min(this.updatedAt - this.prevUpdatedAt, Sd);
        return rp(parseFloat(this.current) - parseFloat(this.prevFrameValue), s)
    }
    start(i) {
        return this.stop(), new Promise(s => {
            this.hasAnimated = !0, this.animation = i(s), this.events.animationStart && this.events.animationStart.notify()
        }).then(() => {
            this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
        })
    }
    stop() {
        this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
}

function pi(r, i) {
    return new wv(r, i)
}

function Sv(r, i, s) {
    r.hasValue(i) ? r.getValue(i).set(s) : r.addValue(i, pi(s))
}

function Pv(r, i) {
    const s = qs(r, i);
    let {
        transitionEnd: l = {},
        transition: c = {},
        ...d
    } = s || {};
    d = { ...d,
        ...l
    };
    for (const f in d) {
        const p = _y(d[f]);
        Sv(r, f, p)
    }
}

function Tv(r) {
    return !!(Ke(r) && r.add)
}

function pa(r, i) {
    const s = r.getValue("willChange");
    if (Tv(s)) return s.add(i)
}

function ip(r) {
    return r.props[_h]
}
const sp = (r, i, s) => (((1 - 3 * s + 3 * i) * r + (3 * s - 6 * i)) * r + 3 * i) * r,
    kv = 1e-7,
    Cv = 12;

function Ev(r, i, s, l, c) {
    let d, f, p = 0;
    do f = i + (s - i) / 2, d = sp(f, l, c) - r, d > 0 ? s = f : i = f; while (Math.abs(d) > kv && ++p < Cv);
    return f
}

function vi(r, i, s, l) {
    if (r === i && s === l) return ct;
    const c = d => Ev(d, 0, 1, r, s);
    return d => d === 0 || d === 1 ? d : sp(c(d), i, l)
}
const op = r => i => i <= .5 ? r(2 * i) / 2 : (2 - r(2 * (1 - i))) / 2,
    lp = r => i => 1 - r(1 - i),
    ap = vi(.33, 1.53, .69, .99),
    Za = lp(ap),
    up = op(Za),
    cp = r => (r *= 2) < 1 ? .5 * Za(r) : .5 * (2 - Math.pow(2, -10 * (r - 1))),
    Ja = r => 1 - Math.sin(Math.acos(r)),
    fp = lp(Ja),
    dp = op(Ja),
    hp = r => /^0[^.\s]+$/u.test(r);

function Av(r) {
    return typeof r == "number" ? r === 0 : r !== null ? r === "none" || r === "0" || hp(r) : !0
}
const ai = r => Math.round(r * 1e5) / 1e5,
    ba = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;

function Dv(r) {
    return r == null
}
const Rv = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
    eu = (r, i) => s => !!(typeof s == "string" && Rv.test(s) && s.startsWith(r) || i && !Dv(s) && Object.prototype.hasOwnProperty.call(s, i)),
    pp = (r, i, s) => l => {
        if (typeof l != "string") return l;
        const [c, d, f, p] = l.match(ba);
        return {
            [r]: parseFloat(c),
            [i]: parseFloat(d),
            [s]: parseFloat(f),
            alpha: p !== void 0 ? parseFloat(p) : 1
        }
    },
    Mv = r => Gt(0, 255, r),
    bl = { ...yr,
        transform: r => Math.round(Mv(r))
    },
    jn = {
        test: eu("rgb", "red"),
        parse: pp("red", "green", "blue"),
        transform: ({
            red: r,
            green: i,
            blue: s,
            alpha: l = 1
        }) => "rgba(" + bl.transform(r) + ", " + bl.transform(i) + ", " + bl.transform(s) + ", " + ai(hi.transform(l)) + ")"
    };

function Nv(r) {
    let i = "",
        s = "",
        l = "",
        c = "";
    return r.length > 5 ? (i = r.substring(1, 3), s = r.substring(3, 5), l = r.substring(5, 7), c = r.substring(7, 9)) : (i = r.substring(1, 2), s = r.substring(2, 3), l = r.substring(3, 4), c = r.substring(4, 5), i += i, s += s, l += l, c += c), {
        red: parseInt(i, 16),
        green: parseInt(s, 16),
        blue: parseInt(l, 16),
        alpha: c ? parseInt(c, 16) / 255 : 1
    }
}
const ma = {
        test: eu("#"),
        parse: Nv,
        transform: jn.transform
    },
    ur = {
        test: eu("hsl", "hue"),
        parse: pp("hue", "saturation", "lightness"),
        transform: ({
            hue: r,
            saturation: i,
            lightness: s,
            alpha: l = 1
        }) => "hsla(" + Math.round(r) + ", " + _t.transform(ai(i)) + ", " + _t.transform(ai(s)) + ", " + ai(hi.transform(l)) + ")"
    },
    He = {
        test: r => jn.test(r) || ma.test(r) || ur.test(r),
        parse: r => jn.test(r) ? jn.parse(r) : ur.test(r) ? ur.parse(r) : ma.parse(r),
        transform: r => typeof r == "string" ? r : r.hasOwnProperty("red") ? jn.transform(r) : ur.transform(r)
    },
    Lv = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;

function jv(r) {
    var i, s;
    return isNaN(r) && typeof r == "string" && (((i = r.match(ba)) === null || i === void 0 ? void 0 : i.length) || 0) + (((s = r.match(Lv)) === null || s === void 0 ? void 0 : s.length) || 0) > 0
}
const mp = "number",
    gp = "color",
    _v = "var",
    Vv = "var(",
    Pd = "${}",
    Ov = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

function mi(r) {
    const i = r.toString(),
        s = [],
        l = {
            color: [],
            number: [],
            var: []
        },
        c = [];
    let d = 0;
    const p = i.replace(Ov, m => (He.test(m) ? (l.color.push(d), c.push(gp), s.push(He.parse(m))) : m.startsWith(Vv) ? (l.var.push(d), c.push(_v), s.push(m)) : (l.number.push(d), c.push(mp), s.push(parseFloat(m))), ++d, Pd)).split(Pd);
    return {
        values: s,
        split: p,
        indexes: l,
        types: c
    }
}

function yp(r) {
    return mi(r).values
}

function vp(r) {
    const {
        split: i,
        types: s
    } = mi(r), l = i.length;
    return c => {
        let d = "";
        for (let f = 0; f < l; f++)
            if (d += i[f], c[f] !== void 0) {
                const p = s[f];
                p === mp ? d += ai(c[f]) : p === gp ? d += He.transform(c[f]) : d += c[f]
            }
        return d
    }
}
const Fv = r => typeof r == "number" ? 0 : r;

function Iv(r) {
    const i = yp(r);
    return vp(r)(i.map(Fv))
}
const mn = {
        test: jv,
        parse: yp,
        createTransformer: vp,
        getAnimatableNone: Iv
    },
    zv = new Set(["brightness", "contrast", "saturate", "opacity"]);

function Bv(r) {
    const [i, s] = r.slice(0, -1).split("(");
    if (i === "drop-shadow") return r;
    const [l] = s.match(ba) || [];
    if (!l) return r;
    const c = s.replace(l, "");
    let d = zv.has(i) ? 1 : 0;
    return l !== s && (d *= 100), i + "(" + d + c + ")"
}
const Uv = /\b([a-z-]*)\(.*?\)/gu,
    ga = { ...mn,
        getAnimatableNone: r => {
            const i = r.match(Uv);
            return i ? i.map(Bv).join(" ") : r
        }
    },
    Wv = { ...Ia,
        color: He,
        backgroundColor: He,
        outlineColor: He,
        fill: He,
        stroke: He,
        borderColor: He,
        borderTopColor: He,
        borderRightColor: He,
        borderBottomColor: He,
        borderLeftColor: He,
        filter: ga,
        WebkitFilter: ga
    },
    tu = r => Wv[r];

function xp(r, i) {
    let s = tu(r);
    return s !== ga && (s = mn), s.getAnimatableNone ? s.getAnimatableNone(i) : void 0
}
const $v = new Set(["auto", "none", "0"]);

function Hv(r, i, s) {
    let l = 0,
        c;
    for (; l < r.length && !c;) {
        const d = r[l];
        typeof d == "string" && !$v.has(d) && mi(d).values.length && (c = r[l]), l++
    }
    if (c && s)
        for (const d of i) r[d] = xp(s, c)
}
const Td = r => r === yr || r === J,
    kd = (r, i) => parseFloat(r.split(", ")[i]),
    Cd = (r, i) => (s, {
        transform: l
    }) => {
        if (l === "none" || !l) return 0;
        const c = l.match(/^matrix3d\((.+)\)$/u);
        if (c) return kd(c[1], i); {
            const d = l.match(/^matrix\((.+)\)$/u);
            return d ? kd(d[1], r) : 0
        }
    },
    Kv = new Set(["x", "y", "z"]),
    Gv = gr.filter(r => !Kv.has(r));

function Xv(r) {
    const i = [];
    return Gv.forEach(s => {
        const l = r.getValue(s);
        l !== void 0 && (i.push([s, l.get()]), l.set(s.startsWith("scale") ? 1 : 0))
    }), i
}
const mr = {
    width: ({
        x: r
    }, {
        paddingLeft: i = "0",
        paddingRight: s = "0"
    }) => r.max - r.min - parseFloat(i) - parseFloat(s),
    height: ({
        y: r
    }, {
        paddingTop: i = "0",
        paddingBottom: s = "0"
    }) => r.max - r.min - parseFloat(i) - parseFloat(s),
    top: (r, {
        top: i
    }) => parseFloat(i),
    left: (r, {
        left: i
    }) => parseFloat(i),
    bottom: ({
        y: r
    }, {
        top: i
    }) => parseFloat(i) + (r.max - r.min),
    right: ({
        x: r
    }, {
        left: i
    }) => parseFloat(i) + (r.max - r.min),
    x: Cd(4, 13),
    y: Cd(5, 14)
};
mr.translateX = mr.x;
mr.translateY = mr.y;
const Vn = new Set;
let ya = !1,
    va = !1;

function wp() {
    if (va) {
        const r = Array.from(Vn).filter(l => l.needsMeasurement),
            i = new Set(r.map(l => l.element)),
            s = new Map;
        i.forEach(l => {
            const c = Xv(l);
            c.length && (s.set(l, c), l.render())
        }), r.forEach(l => l.measureInitialState()), i.forEach(l => {
            l.render();
            const c = s.get(l);
            c && c.forEach(([d, f]) => {
                var p;
                (p = l.getValue(d)) === null || p === void 0 || p.set(f)
            })
        }), r.forEach(l => l.measureEndState()), r.forEach(l => {
            l.suspendedScrollY !== void 0 && window.scrollTo(0, l.suspendedScrollY)
        })
    }
    va = !1, ya = !1, Vn.forEach(r => r.complete()), Vn.clear()
}

function Sp() {
    Vn.forEach(r => {
        r.readKeyframes(), r.needsMeasurement && (va = !0)
    })
}

function Qv() {
    Sp(), wp()
}
class nu {
    constructor(i, s, l, c, d, f = !1) {
        this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...i], this.onComplete = s, this.name = l, this.motionValue = c, this.element = d, this.isAsync = f
    }
    scheduleResolve() {
        this.isScheduled = !0, this.isAsync ? (Vn.add(this), ya || (ya = !0, ve.read(Sp), ve.resolveKeyframes(wp))) : (this.readKeyframes(), this.complete())
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: i,
            name: s,
            element: l,
            motionValue: c
        } = this;
        for (let d = 0; d < i.length; d++)
            if (i[d] === null)
                if (d === 0) {
                    const f = c == null ? void 0 : c.get(),
                        p = i[i.length - 1];
                    if (f !== void 0) i[0] = f;
                    else if (l && s) {
                        const m = l.readValue(s, p);
                        m != null && (i[0] = m)
                    }
                    i[0] === void 0 && (i[0] = p), c && f === void 0 && c.set(i[0])
                } else i[d] = i[d - 1]
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
        this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), Vn.delete(this)
    }
    cancel() {
        this.isComplete || (this.isScheduled = !1, Vn.delete(this))
    }
    resume() {
        this.isComplete || this.scheduleResolve()
    }
}
const Pp = r => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(r),
    Yv = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;

function qv(r) {
    const i = Yv.exec(r);
    if (!i) return [, ];
    const [, s, l, c] = i;
    return [`--${s??l}`, c]
}

function Tp(r, i, s = 1) {
    const [l, c] = qv(r);
    if (!l) return;
    const d = window.getComputedStyle(i).getPropertyValue(l);
    if (d) {
        const f = d.trim();
        return Pp(f) ? parseFloat(f) : f
    }
    return Fa(c) ? Tp(c, i, s + 1) : c
}
const kp = r => i => i.test(r),
    Zv = {
        test: r => r === "auto",
        parse: r => r
    },
    Cp = [yr, J, _t, hn, By, zy, Zv],
    Ed = r => Cp.find(kp(r));
class Ep extends nu {
    constructor(i, s, l, c, d) {
        super(i, s, l, c, d, !0)
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: i,
            element: s,
            name: l
        } = this;
        if (!s || !s.current) return;
        super.readKeyframes();
        for (let m = 0; m < i.length; m++) {
            let g = i[m];
            if (typeof g == "string" && (g = g.trim(), Fa(g))) {
                const v = Tp(g, s.current);
                v !== void 0 && (i[m] = v), m === i.length - 1 && (this.finalKeyframe = g)
            }
        }
        if (this.resolveNoneKeyframes(), !np.has(l) || i.length !== 2) return;
        const [c, d] = i, f = Ed(c), p = Ed(d);
        if (f !== p)
            if (Td(f) && Td(p))
                for (let m = 0; m < i.length; m++) {
                    const g = i[m];
                    typeof g == "string" && (i[m] = parseFloat(g))
                } else this.needsMeasurement = !0
    }
    resolveNoneKeyframes() {
        const {
            unresolvedKeyframes: i,
            name: s
        } = this, l = [];
        for (let c = 0; c < i.length; c++) Av(i[c]) && l.push(c);
        l.length && Hv(i, l, s)
    }
    measureInitialState() {
        const {
            element: i,
            unresolvedKeyframes: s,
            name: l
        } = this;
        if (!i || !i.current) return;
        l === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = mr[l](i.measureViewportBox(), window.getComputedStyle(i.current)), s[0] = this.measuredOrigin;
        const c = s[s.length - 1];
        c !== void 0 && i.getValue(l, c).jump(c, !1)
    }
    measureEndState() {
        var i;
        const {
            element: s,
            name: l,
            unresolvedKeyframes: c
        } = this;
        if (!s || !s.current) return;
        const d = s.getValue(l);
        d && d.jump(this.measuredOrigin, !1);
        const f = c.length - 1,
            p = c[f];
        c[f] = mr[l](s.measureViewportBox(), window.getComputedStyle(s.current)), p !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = p), !((i = this.removedTransforms) === null || i === void 0) && i.length && this.removedTransforms.forEach(([m, g]) => {
            s.getValue(m).set(g)
        }), this.resolveNoneKeyframes()
    }
}
const Ad = (r, i) => i === "zIndex" ? !1 : !!(typeof r == "number" || Array.isArray(r) || typeof r == "string" && (mn.test(r) || r === "0") && !r.startsWith("url("));

function Jv(r) {
    const i = r[0];
    if (r.length === 1) return !0;
    for (let s = 0; s < r.length; s++)
        if (r[s] !== i) return !0
}

function bv(r, i, s, l) {
    const c = r[0];
    if (c === null) return !1;
    if (i === "display" || i === "visibility") return !0;
    const d = r[r.length - 1],
        f = Ad(c, i),
        p = Ad(d, i);
    return !f || !p ? !1 : Jv(r) || (s === "spring" || Ka(s)) && l
}
const e0 = r => r !== null;

function Zs(r, {
    repeat: i,
    repeatType: s = "loop"
}, l) {
    const c = r.filter(e0),
        d = i && s !== "loop" && i % 2 === 1 ? 0 : c.length - 1;
    return !d || l === void 0 ? c[d] : l
}
const t0 = 40;
class Ap {
    constructor({
        autoplay: i = !0,
        delay: s = 0,
        type: l = "keyframes",
        repeat: c = 0,
        repeatDelay: d = 0,
        repeatType: f = "loop",
        ...p
    }) {
        this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = Vt.now(), this.options = {
            autoplay: i,
            delay: s,
            type: l,
            repeat: c,
            repeatDelay: d,
            repeatType: f,
            ...p
        }, this.updateFinishedPromise()
    }
    calcStartTime() {
        return this.resolvedAt ? this.resolvedAt - this.createdAt > t0 ? this.resolvedAt : this.createdAt : this.createdAt
    }
    get resolved() {
        return !this._resolved && !this.hasAttemptedResolve && Qv(), this._resolved
    }
    onKeyframesResolved(i, s) {
        this.resolvedAt = Vt.now(), this.hasAttemptedResolve = !0;
        const {
            name: l,
            type: c,
            velocity: d,
            delay: f,
            onComplete: p,
            onUpdate: m,
            isGenerator: g
        } = this.options;
        if (!g && !bv(i, l, c, d))
            if (f) this.options.duration = 0;
            else {
                m && m(Zs(i, this.options, s)), p && p(), this.resolveFinishedPromise();
                return
            }
        const v = this.initPlayback(i, s);
        v !== !1 && (this._resolved = {
            keyframes: i,
            finalKeyframe: s,
            ...v
        }, this.onPostResolved())
    }
    onPostResolved() {}
    then(i, s) {
        return this.currentFinishedPromise.then(i, s)
    }
    flatten() {
        this.options.type = "keyframes", this.options.ease = "linear"
    }
    updateFinishedPromise() {
        this.currentFinishedPromise = new Promise(i => {
            this.resolveFinishedPromise = i
        })
    }
}
const ke = (r, i, s) => r + (i - r) * s;

function ea(r, i, s) {
    return s < 0 && (s += 1), s > 1 && (s -= 1), s < 1 / 6 ? r + (i - r) * 6 * s : s < 1 / 2 ? i : s < 2 / 3 ? r + (i - r) * (2 / 3 - s) * 6 : r
}

function n0({
    hue: r,
    saturation: i,
    lightness: s,
    alpha: l
}) {
    r /= 360, i /= 100, s /= 100;
    let c = 0,
        d = 0,
        f = 0;
    if (!i) c = d = f = s;
    else {
        const p = s < .5 ? s * (1 + i) : s + i - s * i,
            m = 2 * s - p;
        c = ea(m, p, r + 1 / 3), d = ea(m, p, r), f = ea(m, p, r - 1 / 3)
    }
    return {
        red: Math.round(c * 255),
        green: Math.round(d * 255),
        blue: Math.round(f * 255),
        alpha: l
    }
}

function Us(r, i) {
    return s => s > 0 ? i : r
}
const ta = (r, i, s) => {
        const l = r * r,
            c = s * (i * i - l) + l;
        return c < 0 ? 0 : Math.sqrt(c)
    },
    r0 = [ma, jn, ur],
    i0 = r => r0.find(i => i.test(r));

function Dd(r) {
    const i = i0(r);
    if (!i) return !1;
    let s = i.parse(r);
    return i === ur && (s = n0(s)), s
}
const Rd = (r, i) => {
        const s = Dd(r),
            l = Dd(i);
        if (!s || !l) return Us(r, i);
        const c = { ...s
        };
        return d => (c.red = ta(s.red, l.red, d), c.green = ta(s.green, l.green, d), c.blue = ta(s.blue, l.blue, d), c.alpha = ke(s.alpha, l.alpha, d), jn.transform(c))
    },
    s0 = (r, i) => s => i(r(s)),
    xi = (...r) => r.reduce(s0),
    xa = new Set(["none", "hidden"]);

function o0(r, i) {
    return xa.has(r) ? s => s <= 0 ? r : i : s => s >= 1 ? i : r
}

function l0(r, i) {
    return s => ke(r, i, s)
}

function ru(r) {
    return typeof r == "number" ? l0 : typeof r == "string" ? Fa(r) ? Us : He.test(r) ? Rd : c0 : Array.isArray(r) ? Dp : typeof r == "object" ? He.test(r) ? Rd : a0 : Us
}

function Dp(r, i) {
    const s = [...r],
        l = s.length,
        c = r.map((d, f) => ru(d)(d, i[f]));
    return d => {
        for (let f = 0; f < l; f++) s[f] = c[f](d);
        return s
    }
}

function a0(r, i) {
    const s = { ...r,
            ...i
        },
        l = {};
    for (const c in s) r[c] !== void 0 && i[c] !== void 0 && (l[c] = ru(r[c])(r[c], i[c]));
    return c => {
        for (const d in l) s[d] = l[d](c);
        return s
    }
}

function u0(r, i) {
    var s;
    const l = [],
        c = {
            color: 0,
            var: 0,
            number: 0
        };
    for (let d = 0; d < i.values.length; d++) {
        const f = i.types[d],
            p = r.indexes[f][c[f]],
            m = (s = r.values[p]) !== null && s !== void 0 ? s : 0;
        l[d] = m, c[f]++
    }
    return l
}
const c0 = (r, i) => {
    const s = mn.createTransformer(i),
        l = mi(r),
        c = mi(i);
    return l.indexes.var.length === c.indexes.var.length && l.indexes.color.length === c.indexes.color.length && l.indexes.number.length >= c.indexes.number.length ? xa.has(r) && !c.values.length || xa.has(i) && !l.values.length ? o0(r, i) : xi(Dp(u0(l, c), c.values), s) : Us(r, i)
};

function Rp(r, i, s) {
    return typeof r == "number" && typeof i == "number" && typeof s == "number" ? ke(r, i, s) : ru(r)(r, i)
}
const f0 = 5;

function Mp(r, i, s) {
    const l = Math.max(i - f0, 0);
    return rp(s - r(l), i - l)
}
const Ae = {
        stiffness: 100,
        damping: 10,
        mass: 1,
        velocity: 0,
        duration: 800,
        bounce: .3,
        visualDuration: .3,
        restSpeed: {
            granular: .01,
            default: 2
        },
        restDelta: {
            granular: .005,
            default: .5
        },
        minDuration: .01,
        maxDuration: 10,
        minDamping: .05,
        maxDamping: 1
    },
    Md = .001;

function d0({
    duration: r = Ae.duration,
    bounce: i = Ae.bounce,
    velocity: s = Ae.velocity,
    mass: l = Ae.mass
}) {
    let c, d, f = 1 - i;
    f = Gt(Ae.minDamping, Ae.maxDamping, f), r = Gt(Ae.minDuration, Ae.maxDuration, Kt(r)), f < 1 ? (c = g => {
        const v = g * f,
            x = v * r,
            P = v - s,
            A = wa(g, f),
            _ = Math.exp(-x);
        return Md - P / A * _
    }, d = g => {
        const x = g * f * r,
            P = x * s + s,
            A = Math.pow(f, 2) * Math.pow(g, 2) * r,
            _ = Math.exp(-x),
            R = wa(Math.pow(g, 2), f);
        return (-c(g) + Md > 0 ? -1 : 1) * ((P - A) * _) / R
    }) : (c = g => {
        const v = Math.exp(-g * r),
            x = (g - s) * r + 1;
        return -.001 + v * x
    }, d = g => {
        const v = Math.exp(-g * r),
            x = (s - g) * (r * r);
        return v * x
    });
    const p = 5 / r,
        m = p0(c, d, p);
    if (r = Ht(r), isNaN(m)) return {
        stiffness: Ae.stiffness,
        damping: Ae.damping,
        duration: r
    }; {
        const g = Math.pow(m, 2) * l;
        return {
            stiffness: g,
            damping: f * 2 * Math.sqrt(l * g),
            duration: r
        }
    }
}
const h0 = 12;

function p0(r, i, s) {
    let l = s;
    for (let c = 1; c < h0; c++) l = l - r(l) / i(l);
    return l
}

function wa(r, i) {
    return r * Math.sqrt(1 - i * i)
}
const m0 = ["duration", "bounce"],
    g0 = ["stiffness", "damping", "mass"];

function Nd(r, i) {
    return i.some(s => r[s] !== void 0)
}

function y0(r) {
    let i = {
        velocity: Ae.velocity,
        stiffness: Ae.stiffness,
        damping: Ae.damping,
        mass: Ae.mass,
        isResolvedFromDuration: !1,
        ...r
    };
    if (!Nd(r, g0) && Nd(r, m0))
        if (r.visualDuration) {
            const s = r.visualDuration,
                l = 2 * Math.PI / (s * 1.2),
                c = l * l,
                d = 2 * Gt(.05, 1, 1 - (r.bounce || 0)) * Math.sqrt(c);
            i = { ...i,
                mass: Ae.mass,
                stiffness: c,
                damping: d
            }
        } else {
            const s = d0(r);
            i = { ...i,
                ...s,
                mass: Ae.mass
            }, i.isResolvedFromDuration = !0
        }
    return i
}

function Np(r = Ae.visualDuration, i = Ae.bounce) {
    const s = typeof r != "object" ? {
        visualDuration: r,
        keyframes: [0, 1],
        bounce: i
    } : r;
    let {
        restSpeed: l,
        restDelta: c
    } = s;
    const d = s.keyframes[0],
        f = s.keyframes[s.keyframes.length - 1],
        p = {
            done: !1,
            value: d
        },
        {
            stiffness: m,
            damping: g,
            mass: v,
            duration: x,
            velocity: P,
            isResolvedFromDuration: A
        } = y0({ ...s,
            velocity: -Kt(s.velocity || 0)
        }),
        _ = P || 0,
        R = g / (2 * Math.sqrt(m * v)),
        V = f - d,
        I = Kt(Math.sqrt(m / v)),
        W = Math.abs(V) < 5;
    l || (l = W ? Ae.restSpeed.granular : Ae.restSpeed.default), c || (c = W ? Ae.restDelta.granular : Ae.restDelta.default);
    let K;
    if (R < 1) {
        const X = wa(I, R);
        K = ne => {
            const ae = Math.exp(-R * I * ne);
            return f - ae * ((_ + R * I * V) / X * Math.sin(X * ne) + V * Math.cos(X * ne))
        }
    } else if (R === 1) K = X => f - Math.exp(-I * X) * (V + (_ + I * V) * X);
    else {
        const X = I * Math.sqrt(R * R - 1);
        K = ne => {
            const ae = Math.exp(-R * I * ne),
                Z = Math.min(X * ne, 300);
            return f - ae * ((_ + R * I * V) * Math.sinh(Z) + X * V * Math.cosh(Z)) / X
        }
    }
    const ee = {
        calculatedDuration: A && x || null,
        next: X => {
            const ne = K(X);
            if (A) p.done = X >= x;
            else {
                let ae = 0;
                R < 1 && (ae = X === 0 ? Ht(_) : Mp(K, X, ne));
                const Z = Math.abs(ae) <= l,
                    Se = Math.abs(f - ne) <= c;
                p.done = Z && Se
            }
            return p.value = p.done ? f : ne, p
        },
        toString: () => {
            const X = Math.min(Yh(ee), da),
                ne = qh(ae => ee.next(X * ae).value, X, 30);
            return X + "ms " + ne
        }
    };
    return ee
}

function Ld({
    keyframes: r,
    velocity: i = 0,
    power: s = .8,
    timeConstant: l = 325,
    bounceDamping: c = 10,
    bounceStiffness: d = 500,
    modifyTarget: f,
    min: p,
    max: m,
    restDelta: g = .5,
    restSpeed: v
}) {
    const x = r[0],
        P = {
            done: !1,
            value: x
        },
        A = Z => p !== void 0 && Z < p || m !== void 0 && Z > m,
        _ = Z => p === void 0 ? m : m === void 0 || Math.abs(p - Z) < Math.abs(m - Z) ? p : m;
    let R = s * i;
    const V = x + R,
        I = f === void 0 ? V : f(V);
    I !== V && (R = I - x);
    const W = Z => -R * Math.exp(-Z / l),
        K = Z => I + W(Z),
        ee = Z => {
            const Se = W(Z),
                Ce = K(Z);
            P.done = Math.abs(Se) <= g, P.value = P.done ? I : Ce
        };
    let X, ne;
    const ae = Z => {
        A(P.value) && (X = Z, ne = Np({
            keyframes: [P.value, _(P.value)],
            velocity: Mp(K, Z, P.value),
            damping: c,
            stiffness: d,
            restDelta: g,
            restSpeed: v
        }))
    };
    return ae(0), {
        calculatedDuration: null,
        next: Z => {
            let Se = !1;
            return !ne && X === void 0 && (Se = !0, ee(Z), ae(Z)), X !== void 0 && Z >= X ? ne.next(Z - X) : (!Se && ee(Z), P)
        }
    }
}
const v0 = vi(.42, 0, 1, 1),
    x0 = vi(0, 0, .58, 1),
    Lp = vi(.42, 0, .58, 1),
    w0 = r => Array.isArray(r) && typeof r[0] != "number",
    jd = {
        linear: ct,
        easeIn: v0,
        easeInOut: Lp,
        easeOut: x0,
        circIn: Ja,
        circInOut: dp,
        circOut: fp,
        backIn: Za,
        backInOut: up,
        backOut: ap,
        anticipate: cp
    },
    _d = r => {
        if (Ga(r)) {
            ca(r.length === 4);
            const [i, s, l, c] = r;
            return vi(i, s, l, c)
        } else if (typeof r == "string") return ca(jd[r] !== void 0), jd[r];
        return r
    };

function S0(r, i, s) {
    const l = [],
        c = s || Rp,
        d = r.length - 1;
    for (let f = 0; f < d; f++) {
        let p = c(r[f], r[f + 1]);
        if (i) {
            const m = Array.isArray(i) ? i[f] || ct : i;
            p = xi(m, p)
        }
        l.push(p)
    }
    return l
}

function P0(r, i, {
    clamp: s = !0,
    ease: l,
    mixer: c
} = {}) {
    const d = r.length;
    if (ca(d === i.length), d === 1) return () => i[0];
    if (d === 2 && i[0] === i[1]) return () => i[1];
    const f = r[0] === r[1];
    r[0] > r[d - 1] && (r = [...r].reverse(), i = [...i].reverse());
    const p = S0(i, l, c),
        m = p.length,
        g = v => {
            if (f && v < r[0]) return i[0];
            let x = 0;
            if (m > 1)
                for (; x < r.length - 2 && !(v < r[x + 1]); x++);
            const P = hr(r[x], r[x + 1], v);
            return p[x](P)
        };
    return s ? v => g(Gt(r[0], r[d - 1], v)) : g
}

function T0(r, i) {
    const s = r[r.length - 1];
    for (let l = 1; l <= i; l++) {
        const c = hr(0, i, l);
        r.push(ke(s, 1, c))
    }
}

function k0(r) {
    const i = [0];
    return T0(i, r.length - 1), i
}

function C0(r, i) {
    return r.map(s => s * i)
}

function E0(r, i) {
    return r.map(() => i || Lp).splice(0, r.length - 1)
}

function Ws({
    duration: r = 300,
    keyframes: i,
    times: s,
    ease: l = "easeInOut"
}) {
    const c = w0(l) ? l.map(_d) : _d(l),
        d = {
            done: !1,
            value: i[0]
        },
        f = C0(s && s.length === i.length ? s : k0(i), r),
        p = P0(f, i, {
            ease: Array.isArray(c) ? c : E0(i, c)
        });
    return {
        calculatedDuration: r,
        next: m => (d.value = p(m), d.done = m >= r, d)
    }
}
const A0 = r => {
        const i = ({
            timestamp: s
        }) => r(s);
        return {
            start: () => ve.update(i, !0),
            stop: () => pn(i),
            now: () => ze.isProcessing ? ze.timestamp : Vt.now()
        }
    },
    D0 = {
        decay: Ld,
        inertia: Ld,
        tween: Ws,
        keyframes: Ws,
        spring: Np
    },
    R0 = r => r / 100;
class iu extends Ap {
    constructor(i) {
        super(i), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
            if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
            this.teardown();
            const {
                onStop: m
            } = this.options;
            m && m()
        };
        const {
            name: s,
            motionValue: l,
            element: c,
            keyframes: d
        } = this.options, f = (c == null ? void 0 : c.KeyframeResolver) || nu, p = (m, g) => this.onKeyframesResolved(m, g);
        this.resolver = new f(d, p, s, l, c), this.resolver.scheduleResolve()
    }
    flatten() {
        super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes))
    }
    initPlayback(i) {
        const {
            type: s = "keyframes",
            repeat: l = 0,
            repeatDelay: c = 0,
            repeatType: d,
            velocity: f = 0
        } = this.options, p = Ka(s) ? s : D0[s] || Ws;
        let m, g;
        p !== Ws && typeof i[0] != "number" && (m = xi(R0, Rp(i[0], i[1])), i = [0, 100]);
        const v = p({ ...this.options,
            keyframes: i
        });
        d === "mirror" && (g = p({ ...this.options,
            keyframes: [...i].reverse(),
            velocity: -f
        })), v.calculatedDuration === null && (v.calculatedDuration = Yh(v));
        const {
            calculatedDuration: x
        } = v, P = x + c, A = P * (l + 1) - c;
        return {
            generator: v,
            mirroredGenerator: g,
            mapPercentToKeyframes: m,
            calculatedDuration: x,
            resolvedDuration: P,
            totalDuration: A
        }
    }
    onPostResolved() {
        const {
            autoplay: i = !0
        } = this.options;
        this.play(), this.pendingPlayState === "paused" || !i ? this.pause() : this.state = this.pendingPlayState
    }
    tick(i, s = !1) {
        const {
            resolved: l
        } = this;
        if (!l) {
            const {
                keyframes: Z
            } = this.options;
            return {
                done: !0,
                value: Z[Z.length - 1]
            }
        }
        const {
            finalKeyframe: c,
            generator: d,
            mirroredGenerator: f,
            mapPercentToKeyframes: p,
            keyframes: m,
            calculatedDuration: g,
            totalDuration: v,
            resolvedDuration: x
        } = l;
        if (this.startTime === null) return d.next(0);
        const {
            delay: P,
            repeat: A,
            repeatType: _,
            repeatDelay: R,
            onUpdate: V
        } = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, i) : this.speed < 0 && (this.startTime = Math.min(i - v / this.speed, this.startTime)), s ? this.currentTime = i : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(i - this.startTime) * this.speed;
        const I = this.currentTime - P * (this.speed >= 0 ? 1 : -1),
            W = this.speed >= 0 ? I < 0 : I > v;
        this.currentTime = Math.max(I, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = v);
        let K = this.currentTime,
            ee = d;
        if (A) {
            const Z = Math.min(this.currentTime, v) / x;
            let Se = Math.floor(Z),
                Ce = Z % 1;
            !Ce && Z >= 1 && (Ce = 1), Ce === 1 && Se--, Se = Math.min(Se, A + 1), !!(Se % 2) && (_ === "reverse" ? (Ce = 1 - Ce, R && (Ce -= R / x)) : _ === "mirror" && (ee = f)), K = Gt(0, 1, Ce) * x
        }
        const X = W ? {
            done: !1,
            value: m[0]
        } : ee.next(K);
        p && (X.value = p(X.value));
        let {
            done: ne
        } = X;
        !W && g !== null && (ne = this.speed >= 0 ? this.currentTime >= v : this.currentTime <= 0);
        const ae = this.holdTime === null && (this.state === "finished" || this.state === "running" && ne);
        return ae && c !== void 0 && (X.value = Zs(m, this.options, c)), V && V(X.value), ae && this.finish(), X
    }
    get duration() {
        const {
            resolved: i
        } = this;
        return i ? Kt(i.calculatedDuration) : 0
    }
    get time() {
        return Kt(this.currentTime)
    }
    set time(i) {
        i = Ht(i), this.currentTime = i, this.holdTime !== null || this.speed === 0 ? this.holdTime = i : this.driver && (this.startTime = this.driver.now() - i / this.speed)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(i) {
        const s = this.playbackSpeed !== i;
        this.playbackSpeed = i, s && (this.time = Kt(this.currentTime))
    }
    play() {
        if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
            this.pendingPlayState = "running";
            return
        }
        if (this.isStopped) return;
        const {
            driver: i = A0,
            onPlay: s,
            startTime: l
        } = this.options;
        this.driver || (this.driver = i(d => this.tick(d))), s && s();
        const c = this.driver.now();
        this.holdTime !== null ? this.startTime = c - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = c) : this.startTime = l ? ? this.calcStartTime(), this.state === "finished" && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start()
    }
    pause() {
        var i;
        if (!this._resolved) {
            this.pendingPlayState = "paused";
            return
        }
        this.state = "paused", this.holdTime = (i = this.currentTime) !== null && i !== void 0 ? i : 0
    }
    complete() {
        this.state !== "running" && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null
    }
    finish() {
        this.teardown(), this.state = "finished";
        const {
            onComplete: i
        } = this.options;
        i && i()
    }
    cancel() {
        this.cancelTime !== null && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise()
    }
    teardown() {
        this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel()
    }
    stopDriver() {
        this.driver && (this.driver.stop(), this.driver = void 0)
    }
    sample(i) {
        return this.startTime = 0, this.tick(i, !0)
    }
}
const M0 = new Set(["opacity", "clipPath", "filter", "transform"]);

function N0(r, i, s, {
    delay: l = 0,
    duration: c = 300,
    repeat: d = 0,
    repeatType: f = "loop",
    ease: p = "easeInOut",
    times: m
} = {}) {
    const g = {
        [i]: s
    };
    m && (g.offset = m);
    const v = Jh(p, c);
    return Array.isArray(v) && (g.easing = v), r.animate(g, {
        delay: l,
        duration: c,
        easing: Array.isArray(v) ? "linear" : v,
        fill: "both",
        iterations: d + 1,
        direction: f === "reverse" ? "alternate" : "normal"
    })
}
const L0 = Ma(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
    $s = 10,
    j0 = 2e4;

function _0(r) {
    return Ka(r.type) || r.type === "spring" || !Zh(r.ease)
}

function V0(r, i) {
    const s = new iu({ ...i,
        keyframes: r,
        repeat: 0,
        delay: 0,
        isGenerator: !0
    });
    let l = {
        done: !1,
        value: r[0]
    };
    const c = [];
    let d = 0;
    for (; !l.done && d < j0;) l = s.sample(d), c.push(l.value), d += $s;
    return {
        times: void 0,
        keyframes: c,
        duration: d - $s,
        ease: "linear"
    }
}
const jp = {
    anticipate: cp,
    backInOut: up,
    circInOut: dp
};

function O0(r) {
    return r in jp
}
class Vd extends Ap {
    constructor(i) {
        super(i);
        const {
            name: s,
            motionValue: l,
            element: c,
            keyframes: d
        } = this.options;
        this.resolver = new Ep(d, (f, p) => this.onKeyframesResolved(f, p), s, l, c), this.resolver.scheduleResolve()
    }
    initPlayback(i, s) {
        let {
            duration: l = 300,
            times: c,
            ease: d,
            type: f,
            motionValue: p,
            name: m,
            startTime: g
        } = this.options;
        if (!p.owner || !p.owner.current) return !1;
        if (typeof d == "string" && Bs() && O0(d) && (d = jp[d]), _0(this.options)) {
            const {
                onComplete: x,
                onUpdate: P,
                motionValue: A,
                element: _,
                ...R
            } = this.options, V = V0(i, R);
            i = V.keyframes, i.length === 1 && (i[1] = i[0]), l = V.duration, c = V.times, d = V.ease, f = "keyframes"
        }
        const v = N0(p.owner.current, m, i, { ...this.options,
            duration: l,
            times: c,
            ease: d
        });
        return v.startTime = g ? ? this.calcStartTime(), this.pendingTimeline ? (yd(v, this.pendingTimeline), this.pendingTimeline = void 0) : v.onfinish = () => {
            const {
                onComplete: x
            } = this.options;
            p.set(Zs(i, this.options, s)), x && x(), this.cancel(), this.resolveFinishedPromise()
        }, {
            animation: v,
            duration: l,
            times: c,
            type: f,
            ease: d,
            keyframes: i
        }
    }
    get duration() {
        const {
            resolved: i
        } = this;
        if (!i) return 0;
        const {
            duration: s
        } = i;
        return Kt(s)
    }
    get time() {
        const {
            resolved: i
        } = this;
        if (!i) return 0;
        const {
            animation: s
        } = i;
        return Kt(s.currentTime || 0)
    }
    set time(i) {
        const {
            resolved: s
        } = this;
        if (!s) return;
        const {
            animation: l
        } = s;
        l.currentTime = Ht(i)
    }
    get speed() {
        const {
            resolved: i
        } = this;
        if (!i) return 1;
        const {
            animation: s
        } = i;
        return s.playbackRate
    }
    set speed(i) {
        const {
            resolved: s
        } = this;
        if (!s) return;
        const {
            animation: l
        } = s;
        l.playbackRate = i
    }
    get state() {
        const {
            resolved: i
        } = this;
        if (!i) return "idle";
        const {
            animation: s
        } = i;
        return s.playState
    }
    get startTime() {
        const {
            resolved: i
        } = this;
        if (!i) return null;
        const {
            animation: s
        } = i;
        return s.startTime
    }
    attachTimeline(i) {
        if (!this._resolved) this.pendingTimeline = i;
        else {
            const {
                resolved: s
            } = this;
            if (!s) return ct;
            const {
                animation: l
            } = s;
            yd(l, i)
        }
        return ct
    }
    play() {
        if (this.isStopped) return;
        const {
            resolved: i
        } = this;
        if (!i) return;
        const {
            animation: s
        } = i;
        s.playState === "finished" && this.updateFinishedPromise(), s.play()
    }
    pause() {
        const {
            resolved: i
        } = this;
        if (!i) return;
        const {
            animation: s
        } = i;
        s.pause()
    }
    stop() {
        if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
        this.resolveFinishedPromise(), this.updateFinishedPromise();
        const {
            resolved: i
        } = this;
        if (!i) return;
        const {
            animation: s,
            keyframes: l,
            duration: c,
            type: d,
            ease: f,
            times: p
        } = i;
        if (s.playState === "idle" || s.playState === "finished") return;
        if (this.time) {
            const {
                motionValue: g,
                onUpdate: v,
                onComplete: x,
                element: P,
                ...A
            } = this.options, _ = new iu({ ...A,
                keyframes: l,
                duration: c,
                type: d,
                ease: f,
                times: p,
                isGenerator: !0
            }), R = Ht(this.time);
            g.setWithVelocity(_.sample(R - $s).value, _.sample(R).value, $s)
        }
        const {
            onStop: m
        } = this.options;
        m && m(), this.cancel()
    }
    complete() {
        const {
            resolved: i
        } = this;
        i && i.animation.finish()
    }
    cancel() {
        const {
            resolved: i
        } = this;
        i && i.animation.cancel()
    }
    static supports(i) {
        const {
            motionValue: s,
            name: l,
            repeatDelay: c,
            repeatType: d,
            damping: f,
            type: p
        } = i;
        if (!s || !s.owner || !(s.owner.current instanceof HTMLElement)) return !1;
        const {
            onUpdate: m,
            transformTemplate: g
        } = s.owner.getProps();
        return L0() && l && M0.has(l) && !m && !g && !c && d !== "mirror" && f !== 0 && p !== "inertia"
    }
}
const F0 = {
        type: "spring",
        stiffness: 500,
        damping: 25,
        restSpeed: 10
    },
    I0 = r => ({
        type: "spring",
        stiffness: 550,
        damping: r === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10
    }),
    z0 = {
        type: "keyframes",
        duration: .8
    },
    B0 = {
        type: "keyframes",
        ease: [.25, .1, .35, 1],
        duration: .3
    },
    U0 = (r, {
        keyframes: i
    }) => i.length > 2 ? z0 : On.has(r) ? r.startsWith("scale") ? I0(i[1]) : F0 : B0;

function W0({
    when: r,
    delay: i,
    delayChildren: s,
    staggerChildren: l,
    staggerDirection: c,
    repeat: d,
    repeatType: f,
    repeatDelay: p,
    from: m,
    elapsed: g,
    ...v
}) {
    return !!Object.keys(v).length
}
const su = (r, i, s, l = {}, c, d) => f => {
    const p = Ha(l, r) || {},
        m = p.delay || l.delay || 0;
    let {
        elapsed: g = 0
    } = l;
    g = g - Ht(m);
    let v = {
        keyframes: Array.isArray(s) ? s : [null, s],
        ease: "easeOut",
        velocity: i.getVelocity(),
        ...p,
        delay: -g,
        onUpdate: P => {
            i.set(P), p.onUpdate && p.onUpdate(P)
        },
        onComplete: () => {
            f(), p.onComplete && p.onComplete()
        },
        name: r,
        motionValue: i,
        element: d ? void 0 : c
    };
    W0(p) || (v = { ...v,
        ...U0(r, v)
    }), v.duration && (v.duration = Ht(v.duration)), v.repeatDelay && (v.repeatDelay = Ht(v.repeatDelay)), v.from !== void 0 && (v.keyframes[0] = v.from);
    let x = !1;
    if ((v.type === !1 || v.duration === 0 && !v.repeatDelay) && (v.duration = 0, v.delay === 0 && (x = !0)), x && !d && i.get() !== void 0) {
        const P = Zs(v.keyframes, p);
        if (P !== void 0) return ve.update(() => {
            v.onUpdate(P), v.onComplete()
        }), new av([])
    }
    return !d && Vd.supports(v) ? new Vd(v) : new iu(v)
};

function $0({
    protectedKeys: r,
    needsAnimating: i
}, s) {
    const l = r.hasOwnProperty(s) && i[s] !== !0;
    return i[s] = !1, l
}

function _p(r, i, {
    delay: s = 0,
    transitionOverride: l,
    type: c
} = {}) {
    var d;
    let {
        transition: f = r.getDefaultTransition(),
        transitionEnd: p,
        ...m
    } = i;
    l && (f = l);
    const g = [],
        v = c && r.animationState && r.animationState.getState()[c];
    for (const x in m) {
        const P = r.getValue(x, (d = r.latestValues[x]) !== null && d !== void 0 ? d : null),
            A = m[x];
        if (A === void 0 || v && $0(v, x)) continue;
        const _ = {
            delay: s,
            ...Ha(f || {}, x)
        };
        let R = !1;
        if (window.MotionHandoffAnimation) {
            const I = ip(r);
            if (I) {
                const W = window.MotionHandoffAnimation(I, x, ve);
                W !== null && (_.startTime = W, R = !0)
            }
        }
        pa(r, x), P.start(su(x, P, A, r.shouldReduceMotion && np.has(x) ? {
            type: !1
        } : _, r, R));
        const V = P.animation;
        V && g.push(V)
    }
    return p && Promise.all(g).then(() => {
        ve.update(() => {
            p && Pv(r, p)
        })
    }), g
}

function Sa(r, i, s = {}) {
    var l;
    const c = qs(r, i, s.type === "exit" ? (l = r.presenceContext) === null || l === void 0 ? void 0 : l.custom : void 0);
    let {
        transition: d = r.getDefaultTransition() || {}
    } = c || {};
    s.transitionOverride && (d = s.transitionOverride);
    const f = c ? () => Promise.all(_p(r, c, s)) : () => Promise.resolve(),
        p = r.variantChildren && r.variantChildren.size ? (g = 0) => {
            const {
                delayChildren: v = 0,
                staggerChildren: x,
                staggerDirection: P
            } = d;
            return H0(r, i, v + g, x, P, s)
        } : () => Promise.resolve(),
        {
            when: m
        } = d;
    if (m) {
        const [g, v] = m === "beforeChildren" ? [f, p] : [p, f];
        return g().then(() => v())
    } else return Promise.all([f(), p(s.delay)])
}

function H0(r, i, s = 0, l = 0, c = 1, d) {
    const f = [],
        p = (r.variantChildren.size - 1) * l,
        m = c === 1 ? (g = 0) => g * l : (g = 0) => p - g * l;
    return Array.from(r.variantChildren).sort(K0).forEach((g, v) => {
        g.notify("AnimationStart", i), f.push(Sa(g, i, { ...d,
            delay: s + m(v)
        }).then(() => g.notify("AnimationComplete", i)))
    }), Promise.all(f)
}

function K0(r, i) {
    return r.sortNodePosition(i)
}

function G0(r, i, s = {}) {
    r.notify("AnimationStart", i);
    let l;
    if (Array.isArray(i)) {
        const c = i.map(d => Sa(r, d, s));
        l = Promise.all(c)
    } else if (typeof i == "string") l = Sa(r, i, s);
    else {
        const c = typeof i == "function" ? qs(r, i, s.custom) : i;
        l = Promise.all(_p(r, c, s))
    }
    return l.then(() => {
        r.notify("AnimationComplete", i)
    })
}
const X0 = La.length;

function Vp(r) {
    if (!r) return;
    if (!r.isControllingVariants) {
        const s = r.parent ? Vp(r.parent) || {} : {};
        return r.props.initial !== void 0 && (s.initial = r.props.initial), s
    }
    const i = {};
    for (let s = 0; s < X0; s++) {
        const l = La[s],
            c = r.props[l];
        (di(c) || c === !1) && (i[l] = c)
    }
    return i
}
const Q0 = [...Na].reverse(),
    Y0 = Na.length;

function q0(r) {
    return i => Promise.all(i.map(({
        animation: s,
        options: l
    }) => G0(r, s, l)))
}

function Z0(r) {
    let i = q0(r),
        s = Od(),
        l = !0;
    const c = m => (g, v) => {
        var x;
        const P = qs(r, v, m === "exit" ? (x = r.presenceContext) === null || x === void 0 ? void 0 : x.custom : void 0);
        if (P) {
            const {
                transition: A,
                transitionEnd: _,
                ...R
            } = P;
            g = { ...g,
                ...R,
                ..._
            }
        }
        return g
    };

    function d(m) {
        i = m(r)
    }

    function f(m) {
        const {
            props: g
        } = r, v = Vp(r.parent) || {}, x = [], P = new Set;
        let A = {},
            _ = 1 / 0;
        for (let V = 0; V < Y0; V++) {
            const I = Q0[V],
                W = s[I],
                K = g[I] !== void 0 ? g[I] : v[I],
                ee = di(K),
                X = I === m ? W.isActive : null;
            X === !1 && (_ = V);
            let ne = K === v[I] && K !== g[I] && ee;
            if (ne && l && r.manuallyAnimateOnMount && (ne = !1), W.protectedKeys = { ...A
                }, !W.isActive && X === null || !K && !W.prevProp || Qs(K) || typeof K == "boolean") continue;
            const ae = J0(W.prevProp, K);
            let Z = ae || I === m && W.isActive && !ne && ee || V > _ && ee,
                Se = !1;
            const Ce = Array.isArray(K) ? K : [K];
            let qe = Ce.reduce(c(I), {});
            X === !1 && (qe = {});
            const {
                prevResolvedValues: it = {}
            } = W, Ge = { ...it,
                ...qe
            }, Ze = ie => {
                Z = !0, P.has(ie) && (Se = !0, P.delete(ie)), W.needsAnimating[ie] = !0;
                const F = r.getValue(ie);
                F && (F.liveStyle = !1)
            };
            for (const ie in Ge) {
                const F = qe[ie],
                    Q = it[ie];
                if (A.hasOwnProperty(ie)) continue;
                let B = !1;
                fa(F) && fa(Q) ? B = !Qh(F, Q) : B = F !== Q, B ? F != null ? Ze(ie) : P.add(ie) : F !== void 0 && P.has(ie) ? Ze(ie) : W.protectedKeys[ie] = !0
            }
            W.prevProp = K, W.prevResolvedValues = qe, W.isActive && (A = { ...A,
                ...qe
            }), l && r.blockInitialAnimation && (Z = !1), Z && (!(ne && ae) || Se) && x.push(...Ce.map(ie => ({
                animation: ie,
                options: {
                    type: I
                }
            })))
        }
        if (P.size) {
            const V = {};
            P.forEach(I => {
                const W = r.getBaseTarget(I),
                    K = r.getValue(I);
                K && (K.liveStyle = !0), V[I] = W ? ? null
            }), x.push({
                animation: V
            })
        }
        let R = !!x.length;
        return l && (g.initial === !1 || g.initial === g.animate) && !r.manuallyAnimateOnMount && (R = !1), l = !1, R ? i(x) : Promise.resolve()
    }

    function p(m, g) {
        var v;
        if (s[m].isActive === g) return Promise.resolve();
        (v = r.variantChildren) === null || v === void 0 || v.forEach(P => {
            var A;
            return (A = P.animationState) === null || A === void 0 ? void 0 : A.setActive(m, g)
        }), s[m].isActive = g;
        const x = f(m);
        for (const P in s) s[P].protectedKeys = {};
        return x
    }
    return {
        animateChanges: f,
        setActive: p,
        setAnimateFunction: d,
        getState: () => s,
        reset: () => {
            s = Od(), l = !0
        }
    }
}

function J0(r, i) {
    return typeof i == "string" ? i !== r : Array.isArray(i) ? !Qh(i, r) : !1
}

function Mn(r = !1) {
    return {
        isActive: r,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}

function Od() {
    return {
        animate: Mn(!0),
        whileInView: Mn(),
        whileHover: Mn(),
        whileTap: Mn(),
        whileDrag: Mn(),
        whileFocus: Mn(),
        exit: Mn()
    }
}
class gn {
    constructor(i) {
        this.isMounted = !1, this.node = i
    }
    update() {}
}
class b0 extends gn {
    constructor(i) {
        super(i), i.animationState || (i.animationState = Z0(i))
    }
    updateAnimationControlsSubscription() {
        const {
            animate: i
        } = this.node.getProps();
        Qs(i) && (this.unmountControls = i.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {
            animate: i
        } = this.node.getProps(), {
            animate: s
        } = this.node.prevProps || {};
        i !== s && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var i;
        this.node.animationState.reset(), (i = this.unmountControls) === null || i === void 0 || i.call(this)
    }
}
let e1 = 0;
class t1 extends gn {
    constructor() {
        super(...arguments), this.id = e1++
    }
    update() {
        if (!this.node.presenceContext) return;
        const {
            isPresent: i,
            onExitComplete: s
        } = this.node.presenceContext, {
            isPresent: l
        } = this.node.prevPresenceContext || {};
        if (!this.node.animationState || i === l) return;
        const c = this.node.animationState.setActive("exit", !i);
        s && !i && c.then(() => s(this.id))
    }
    mount() {
        const {
            register: i
        } = this.node.presenceContext || {};
        i && (this.unmount = i(this.id))
    }
    unmount() {}
}
const n1 = {
    animation: {
        Feature: b0
    },
    exit: {
        Feature: t1
    }
};

function gi(r, i, s, l = {
    passive: !0
}) {
    return r.addEventListener(i, s, l), () => r.removeEventListener(i, s)
}

function wi(r) {
    return {
        point: {
            x: r.pageX,
            y: r.pageY
        }
    }
}
const r1 = r => i => Xa(i) && r(i, wi(i));

function ui(r, i, s, l) {
    return gi(r, i, r1(s), l)
}
const Fd = (r, i) => Math.abs(r - i);

function i1(r, i) {
    const s = Fd(r.x, i.x),
        l = Fd(r.y, i.y);
    return Math.sqrt(s ** 2 + l ** 2)
}
class Op {
    constructor(i, s, {
        transformPagePoint: l,
        contextWindow: c,
        dragSnapToOrigin: d = !1
    } = {}) {
        if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
                if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const x = ra(this.lastMoveEventInfo, this.history),
                    P = this.startEvent !== null,
                    A = i1(x.offset, {
                        x: 0,
                        y: 0
                    }) >= 3;
                if (!P && !A) return;
                const {
                    point: _
                } = x, {
                    timestamp: R
                } = ze;
                this.history.push({ ..._,
                    timestamp: R
                });
                const {
                    onStart: V,
                    onMove: I
                } = this.handlers;
                P || (V && V(this.lastMoveEvent, x), this.startEvent = this.lastMoveEvent), I && I(this.lastMoveEvent, x)
            }, this.handlePointerMove = (x, P) => {
                this.lastMoveEvent = x, this.lastMoveEventInfo = na(P, this.transformPagePoint), ve.update(this.updatePoint, !0)
            }, this.handlePointerUp = (x, P) => {
                this.end();
                const {
                    onEnd: A,
                    onSessionEnd: _,
                    resumeAnimation: R
                } = this.handlers;
                if (this.dragSnapToOrigin && R && R(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const V = ra(x.type === "pointercancel" ? this.lastMoveEventInfo : na(P, this.transformPagePoint), this.history);
                this.startEvent && A && A(x, V), _ && _(x, V)
            }, !Xa(i)) return;
        this.dragSnapToOrigin = d, this.handlers = s, this.transformPagePoint = l, this.contextWindow = c || window;
        const f = wi(i),
            p = na(f, this.transformPagePoint),
            {
                point: m
            } = p,
            {
                timestamp: g
            } = ze;
        this.history = [{ ...m,
            timestamp: g
        }];
        const {
            onSessionStart: v
        } = s;
        v && v(i, ra(p, this.history)), this.removeListeners = xi(ui(this.contextWindow, "pointermove", this.handlePointerMove), ui(this.contextWindow, "pointerup", this.handlePointerUp), ui(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(i) {
        this.handlers = i
    }
    end() {
        this.removeListeners && this.removeListeners(), pn(this.updatePoint)
    }
}

function na(r, i) {
    return i ? {
        point: i(r.point)
    } : r
}

function Id(r, i) {
    return {
        x: r.x - i.x,
        y: r.y - i.y
    }
}

function ra({
    point: r
}, i) {
    return {
        point: r,
        delta: Id(r, Fp(i)),
        offset: Id(r, s1(i)),
        velocity: o1(i, .1)
    }
}

function s1(r) {
    return r[0]
}

function Fp(r) {
    return r[r.length - 1]
}

function o1(r, i) {
    if (r.length < 2) return {
        x: 0,
        y: 0
    };
    let s = r.length - 1,
        l = null;
    const c = Fp(r);
    for (; s >= 0 && (l = r[s], !(c.timestamp - l.timestamp > Ht(i)));) s--;
    if (!l) return {
        x: 0,
        y: 0
    };
    const d = Kt(c.timestamp - l.timestamp);
    if (d === 0) return {
        x: 0,
        y: 0
    };
    const f = {
        x: (c.x - l.x) / d,
        y: (c.y - l.y) / d
    };
    return f.x === 1 / 0 && (f.x = 0), f.y === 1 / 0 && (f.y = 0), f
}
const Ip = 1e-4,
    l1 = 1 - Ip,
    a1 = 1 + Ip,
    zp = .01,
    u1 = 0 - zp,
    c1 = 0 + zp;

function ft(r) {
    return r.max - r.min
}

function f1(r, i, s) {
    return Math.abs(r - i) <= s
}

function zd(r, i, s, l = .5) {
    r.origin = l, r.originPoint = ke(i.min, i.max, r.origin), r.scale = ft(s) / ft(i), r.translate = ke(s.min, s.max, r.origin) - r.originPoint, (r.scale >= l1 && r.scale <= a1 || isNaN(r.scale)) && (r.scale = 1), (r.translate >= u1 && r.translate <= c1 || isNaN(r.translate)) && (r.translate = 0)
}

function ci(r, i, s, l) {
    zd(r.x, i.x, s.x, l ? l.originX : void 0), zd(r.y, i.y, s.y, l ? l.originY : void 0)
}

function Bd(r, i, s) {
    r.min = s.min + i.min, r.max = r.min + ft(i)
}

function d1(r, i, s) {
    Bd(r.x, i.x, s.x), Bd(r.y, i.y, s.y)
}

function Ud(r, i, s) {
    r.min = i.min - s.min, r.max = r.min + ft(i)
}

function fi(r, i, s) {
    Ud(r.x, i.x, s.x), Ud(r.y, i.y, s.y)
}

function h1(r, {
    min: i,
    max: s
}, l) {
    return i !== void 0 && r < i ? r = l ? ke(i, r, l.min) : Math.max(r, i) : s !== void 0 && r > s && (r = l ? ke(s, r, l.max) : Math.min(r, s)), r
}

function Wd(r, i, s) {
    return {
        min: i !== void 0 ? r.min + i : void 0,
        max: s !== void 0 ? r.max + s - (r.max - r.min) : void 0
    }
}

function p1(r, {
    top: i,
    left: s,
    bottom: l,
    right: c
}) {
    return {
        x: Wd(r.x, s, c),
        y: Wd(r.y, i, l)
    }
}

function $d(r, i) {
    let s = i.min - r.min,
        l = i.max - r.max;
    return i.max - i.min < r.max - r.min && ([s, l] = [l, s]), {
        min: s,
        max: l
    }
}

function m1(r, i) {
    return {
        x: $d(r.x, i.x),
        y: $d(r.y, i.y)
    }
}

function g1(r, i) {
    let s = .5;
    const l = ft(r),
        c = ft(i);
    return c > l ? s = hr(i.min, i.max - l, r.min) : l > c && (s = hr(r.min, r.max - c, i.min)), Gt(0, 1, s)
}

function y1(r, i) {
    const s = {};
    return i.min !== void 0 && (s.min = i.min - r.min), i.max !== void 0 && (s.max = i.max - r.min), s
}
const Pa = .35;

function v1(r = Pa) {
    return r === !1 ? r = 0 : r === !0 && (r = Pa), {
        x: Hd(r, "left", "right"),
        y: Hd(r, "top", "bottom")
    }
}

function Hd(r, i, s) {
    return {
        min: Kd(r, i),
        max: Kd(r, s)
    }
}

function Kd(r, i) {
    return typeof r == "number" ? r : r[i] || 0
}
const Gd = () => ({
        translate: 0,
        scale: 1,
        origin: 0,
        originPoint: 0
    }),
    cr = () => ({
        x: Gd(),
        y: Gd()
    }),
    Xd = () => ({
        min: 0,
        max: 0
    }),
    Me = () => ({
        x: Xd(),
        y: Xd()
    });

function xt(r) {
    return [r("x"), r("y")]
}

function Bp({
    top: r,
    left: i,
    right: s,
    bottom: l
}) {
    return {
        x: {
            min: i,
            max: s
        },
        y: {
            min: r,
            max: l
        }
    }
}

function x1({
    x: r,
    y: i
}) {
    return {
        top: i.min,
        right: r.max,
        bottom: i.max,
        left: r.min
    }
}

function w1(r, i) {
    if (!i) return r;
    const s = i({
            x: r.left,
            y: r.top
        }),
        l = i({
            x: r.right,
            y: r.bottom
        });
    return {
        top: s.y,
        left: s.x,
        bottom: l.y,
        right: l.x
    }
}

function ia(r) {
    return r === void 0 || r === 1
}

function Ta({
    scale: r,
    scaleX: i,
    scaleY: s
}) {
    return !ia(r) || !ia(i) || !ia(s)
}

function Nn(r) {
    return Ta(r) || Up(r) || r.z || r.rotate || r.rotateX || r.rotateY || r.skewX || r.skewY
}

function Up(r) {
    return Qd(r.x) || Qd(r.y)
}

function Qd(r) {
    return r && r !== "0%"
}

function Hs(r, i, s) {
    const l = r - s,
        c = i * l;
    return s + c
}

function Yd(r, i, s, l, c) {
    return c !== void 0 && (r = Hs(r, c, l)), Hs(r, s, l) + i
}

function ka(r, i = 0, s = 1, l, c) {
    r.min = Yd(r.min, i, s, l, c), r.max = Yd(r.max, i, s, l, c)
}

function Wp(r, {
    x: i,
    y: s
}) {
    ka(r.x, i.translate, i.scale, i.originPoint), ka(r.y, s.translate, s.scale, s.originPoint)
}
const qd = .999999999999,
    Zd = 1.0000000000001;

function S1(r, i, s, l = !1) {
    const c = s.length;
    if (!c) return;
    i.x = i.y = 1;
    let d, f;
    for (let p = 0; p < c; p++) {
        d = s[p], f = d.projectionDelta;
        const {
            visualElement: m
        } = d.options;
        m && m.props.style && m.props.style.display === "contents" || (l && d.options.layoutScroll && d.scroll && d !== d.root && dr(r, {
            x: -d.scroll.offset.x,
            y: -d.scroll.offset.y
        }), f && (i.x *= f.x.scale, i.y *= f.y.scale, Wp(r, f)), l && Nn(d.latestValues) && dr(r, d.latestValues))
    }
    i.x < Zd && i.x > qd && (i.x = 1), i.y < Zd && i.y > qd && (i.y = 1)
}

function fr(r, i) {
    r.min = r.min + i, r.max = r.max + i
}

function Jd(r, i, s, l, c = .5) {
    const d = ke(r.min, r.max, c);
    ka(r, i, s, d, l)
}

function dr(r, i) {
    Jd(r.x, i.x, i.scaleX, i.scale, i.originX), Jd(r.y, i.y, i.scaleY, i.scale, i.originY)
}

function $p(r, i) {
    return Bp(w1(r.getBoundingClientRect(), i))
}

function P1(r, i, s) {
    const l = $p(r, s),
        {
            scroll: c
        } = i;
    return c && (fr(l.x, c.offset.x), fr(l.y, c.offset.y)), l
}
const Hp = ({
        current: r
    }) => r ? r.ownerDocument.defaultView : null,
    T1 = new WeakMap;
class k1 {
    constructor(i) {
        this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
        }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Me(), this.visualElement = i
    }
    start(i, {
        snapToCursor: s = !1
    } = {}) {
        const {
            presenceContext: l
        } = this.visualElement;
        if (l && l.isPresent === !1) return;
        const c = v => {
                const {
                    dragSnapToOrigin: x
                } = this.getProps();
                x ? this.pauseAnimation() : this.stopAnimation(), s && this.snapToCursor(wi(v).point)
            },
            d = (v, x) => {
                const {
                    drag: P,
                    dragPropagation: A,
                    onDragStart: _
                } = this.getProps();
                if (P && !A && (this.openDragLock && this.openDragLock(), this.openDragLock = yv(P), !this.openDragLock)) return;
                this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), xt(V => {
                    let I = this.getAxisMotionValue(V).get() || 0;
                    if (_t.test(I)) {
                        const {
                            projection: W
                        } = this.visualElement;
                        if (W && W.layout) {
                            const K = W.layout.layoutBox[V];
                            K && (I = ft(K) * (parseFloat(I) / 100))
                        }
                    }
                    this.originPoint[V] = I
                }), _ && ve.postRender(() => _(v, x)), pa(this.visualElement, "transform");
                const {
                    animationState: R
                } = this.visualElement;
                R && R.setActive("whileDrag", !0)
            },
            f = (v, x) => {
                const {
                    dragPropagation: P,
                    dragDirectionLock: A,
                    onDirectionLock: _,
                    onDrag: R
                } = this.getProps();
                if (!P && !this.openDragLock) return;
                const {
                    offset: V
                } = x;
                if (A && this.currentDirection === null) {
                    this.currentDirection = C1(V), this.currentDirection !== null && _ && _(this.currentDirection);
                    return
                }
                this.updateAxis("x", x.point, V), this.updateAxis("y", x.point, V), this.visualElement.render(), R && R(v, x)
            },
            p = (v, x) => this.stop(v, x),
            m = () => xt(v => {
                var x;
                return this.getAnimationState(v) === "paused" && ((x = this.getAxisMotionValue(v).animation) === null || x === void 0 ? void 0 : x.play())
            }),
            {
                dragSnapToOrigin: g
            } = this.getProps();
        this.panSession = new Op(i, {
            onSessionStart: c,
            onStart: d,
            onMove: f,
            onSessionEnd: p,
            resumeAnimation: m
        }, {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: g,
            contextWindow: Hp(this.visualElement)
        })
    }
    stop(i, s) {
        const l = this.isDragging;
        if (this.cancel(), !l) return;
        const {
            velocity: c
        } = s;
        this.startAnimation(c);
        const {
            onDragEnd: d
        } = this.getProps();
        d && ve.postRender(() => d(i, s))
    }
    cancel() {
        this.isDragging = !1;
        const {
            projection: i,
            animationState: s
        } = this.visualElement;
        i && (i.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
        const {
            dragPropagation: l
        } = this.getProps();
        !l && this.openDragLock && (this.openDragLock(), this.openDragLock = null), s && s.setActive("whileDrag", !1)
    }
    updateAxis(i, s, l) {
        const {
            drag: c
        } = this.getProps();
        if (!l || !_s(i, c, this.currentDirection)) return;
        const d = this.getAxisMotionValue(i);
        let f = this.originPoint[i] + l[i];
        this.constraints && this.constraints[i] && (f = h1(f, this.constraints[i], this.elastic[i])), d.set(f)
    }
    resolveConstraints() {
        var i;
        const {
            dragConstraints: s,
            dragElastic: l
        } = this.getProps(), c = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (i = this.visualElement.projection) === null || i === void 0 ? void 0 : i.layout, d = this.constraints;
        s && ar(s) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : s && c ? this.constraints = p1(c.layoutBox, s) : this.constraints = !1, this.elastic = v1(l), d !== this.constraints && c && this.constraints && !this.hasMutatedConstraints && xt(f => {
            this.constraints !== !1 && this.getAxisMotionValue(f) && (this.constraints[f] = y1(c.layoutBox[f], this.constraints[f]))
        })
    }
    resolveRefConstraints() {
        const {
            dragConstraints: i,
            onMeasureDragConstraints: s
        } = this.getProps();
        if (!i || !ar(i)) return !1;
        const l = i.current,
            {
                projection: c
            } = this.visualElement;
        if (!c || !c.layout) return !1;
        const d = P1(l, c.root, this.visualElement.getTransformPagePoint());
        let f = m1(c.layout.layoutBox, d);
        if (s) {
            const p = s(x1(f));
            this.hasMutatedConstraints = !!p, p && (f = Bp(p))
        }
        return f
    }
    startAnimation(i) {
        const {
            drag: s,
            dragMomentum: l,
            dragElastic: c,
            dragTransition: d,
            dragSnapToOrigin: f,
            onDragTransitionEnd: p
        } = this.getProps(), m = this.constraints || {}, g = xt(v => {
            if (!_s(v, s, this.currentDirection)) return;
            let x = m[v] || {};
            f && (x = {
                min: 0,
                max: 0
            });
            const P = c ? 200 : 1e6,
                A = c ? 40 : 1e7,
                _ = {
                    type: "inertia",
                    velocity: l ? i[v] : 0,
                    bounceStiffness: P,
                    bounceDamping: A,
                    timeConstant: 750,
                    restDelta: 1,
                    restSpeed: 10,
                    ...d,
                    ...x
                };
            return this.startAxisValueAnimation(v, _)
        });
        return Promise.all(g).then(p)
    }
    startAxisValueAnimation(i, s) {
        const l = this.getAxisMotionValue(i);
        return pa(this.visualElement, i), l.start(su(i, l, 0, s, this.visualElement, !1))
    }
    stopAnimation() {
        xt(i => this.getAxisMotionValue(i).stop())
    }
    pauseAnimation() {
        xt(i => {
            var s;
            return (s = this.getAxisMotionValue(i).animation) === null || s === void 0 ? void 0 : s.pause()
        })
    }
    getAnimationState(i) {
        var s;
        return (s = this.getAxisMotionValue(i).animation) === null || s === void 0 ? void 0 : s.state
    }
    getAxisMotionValue(i) {
        const s = `_drag${i.toUpperCase()}`,
            l = this.visualElement.getProps(),
            c = l[s];
        return c || this.visualElement.getValue(i, (l.initial ? l.initial[i] : void 0) || 0)
    }
    snapToCursor(i) {
        xt(s => {
            const {
                drag: l
            } = this.getProps();
            if (!_s(s, l, this.currentDirection)) return;
            const {
                projection: c
            } = this.visualElement, d = this.getAxisMotionValue(s);
            if (c && c.layout) {
                const {
                    min: f,
                    max: p
                } = c.layout.layoutBox[s];
                d.set(i[s] - ke(f, p, .5))
            }
        })
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current) return;
        const {
            drag: i,
            dragConstraints: s
        } = this.getProps(), {
            projection: l
        } = this.visualElement;
        if (!ar(s) || !l || !this.constraints) return;
        this.stopAnimation();
        const c = {
            x: 0,
            y: 0
        };
        xt(f => {
            const p = this.getAxisMotionValue(f);
            if (p && this.constraints !== !1) {
                const m = p.get();
                c[f] = g1({
                    min: m,
                    max: m
                }, this.constraints[f])
            }
        });
        const {
            transformTemplate: d
        } = this.visualElement.getProps();
        this.visualElement.current.style.transform = d ? d({}, "") : "none", l.root && l.root.updateScroll(), l.updateLayout(), this.resolveConstraints(), xt(f => {
            if (!_s(f, i, null)) return;
            const p = this.getAxisMotionValue(f),
                {
                    min: m,
                    max: g
                } = this.constraints[f];
            p.set(ke(m, g, c[f]))
        })
    }
    addListeners() {
        if (!this.visualElement.current) return;
        T1.set(this.visualElement, this);
        const i = this.visualElement.current,
            s = ui(i, "pointerdown", m => {
                const {
                    drag: g,
                    dragListener: v = !0
                } = this.getProps();
                g && v && this.start(m)
            }),
            l = () => {
                const {
                    dragConstraints: m
                } = this.getProps();
                ar(m) && m.current && (this.constraints = this.resolveRefConstraints())
            },
            {
                projection: c
            } = this.visualElement,
            d = c.addEventListener("measure", l);
        c && !c.layout && (c.root && c.root.updateScroll(), c.updateLayout()), ve.read(l);
        const f = gi(window, "resize", () => this.scalePositionWithinConstraints()),
            p = c.addEventListener("didUpdate", ({
                delta: m,
                hasLayoutChanged: g
            }) => {
                this.isDragging && g && (xt(v => {
                    const x = this.getAxisMotionValue(v);
                    x && (this.originPoint[v] += m[v].translate, x.set(x.get() + m[v].translate))
                }), this.visualElement.render())
            });
        return () => {
            f(), s(), d(), p && p()
        }
    }
    getProps() {
        const i = this.visualElement.getProps(),
            {
                drag: s = !1,
                dragDirectionLock: l = !1,
                dragPropagation: c = !1,
                dragConstraints: d = !1,
                dragElastic: f = Pa,
                dragMomentum: p = !0
            } = i;
        return { ...i,
            drag: s,
            dragDirectionLock: l,
            dragPropagation: c,
            dragConstraints: d,
            dragElastic: f,
            dragMomentum: p
        }
    }
}

function _s(r, i, s) {
    return (i === !0 || i === r) && (s === null || s === r)
}

function C1(r, i = 10) {
    let s = null;
    return Math.abs(r.y) > i ? s = "y" : Math.abs(r.x) > i && (s = "x"), s
}
class E1 extends gn {
    constructor(i) {
        super(i), this.removeGroupControls = ct, this.removeListeners = ct, this.controls = new k1(i)
    }
    mount() {
        const {
            dragControls: i
        } = this.node.getProps();
        i && (this.removeGroupControls = i.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || ct
    }
    unmount() {
        this.removeGroupControls(), this.removeListeners()
    }
}
const bd = r => (i, s) => {
    r && ve.postRender(() => r(i, s))
};
class A1 extends gn {
    constructor() {
        super(...arguments), this.removePointerDownListener = ct
    }
    onPointerDown(i) {
        this.session = new Op(i, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: Hp(this.node)
        })
    }
    createPanHandlers() {
        const {
            onPanSessionStart: i,
            onPanStart: s,
            onPan: l,
            onPanEnd: c
        } = this.node.getProps();
        return {
            onSessionStart: bd(i),
            onStart: bd(s),
            onMove: l,
            onEnd: (d, f) => {
                delete this.session, c && ve.postRender(() => c(d, f))
            }
        }
    }
    mount() {
        this.removePointerDownListener = ui(this.node.current, "pointerdown", i => this.onPointerDown(i))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(), this.session && this.session.end()
    }
}
const Fs = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};

function eh(r, i) {
    return i.max === i.min ? 0 : r / (i.max - i.min) * 100
}
const ii = {
        correct: (r, i) => {
            if (!i.target) return r;
            if (typeof r == "string")
                if (J.test(r)) r = parseFloat(r);
                else return r;
            const s = eh(r, i.target.x),
                l = eh(r, i.target.y);
            return `${s}% ${l}%`
        }
    },
    D1 = {
        correct: (r, {
            treeScale: i,
            projectionDelta: s
        }) => {
            const l = r,
                c = mn.parse(r);
            if (c.length > 5) return l;
            const d = mn.createTransformer(r),
                f = typeof c[0] != "number" ? 1 : 0,
                p = s.x.scale * i.x,
                m = s.y.scale * i.y;
            c[0 + f] /= p, c[1 + f] /= m;
            const g = ke(p, m, .5);
            return typeof c[2 + f] == "number" && (c[2 + f] /= g), typeof c[3 + f] == "number" && (c[3 + f] /= g), d(c)
        }
    };
class R1 extends te.Component {
    componentDidMount() {
        const {
            visualElement: i,
            layoutGroup: s,
            switchLayoutGroup: l,
            layoutId: c
        } = this.props, {
            projection: d
        } = i;
        qy(M1), d && (s.group && s.group.add(d), l && l.register && c && l.register(d), d.root.didUpdate(), d.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }), d.setOptions({ ...d.options,
            onExitComplete: () => this.safeToRemove()
        })), Fs.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(i) {
        const {
            layoutDependency: s,
            visualElement: l,
            drag: c,
            isPresent: d
        } = this.props, f = l.projection;
        return f && (f.isPresent = d, c || i.layoutDependency !== s || s === void 0 ? f.willUpdate() : this.safeToRemove(), i.isPresent !== d && (d ? f.promote() : f.relegate() || ve.postRender(() => {
            const p = f.getStack();
            (!p || !p.members.length) && this.safeToRemove()
        }))), null
    }
    componentDidUpdate() {
        const {
            projection: i
        } = this.props.visualElement;
        i && (i.root.didUpdate(), _a.postRender(() => {
            !i.currentAnimation && i.isLead() && this.safeToRemove()
        }))
    }
    componentWillUnmount() {
        const {
            visualElement: i,
            layoutGroup: s,
            switchLayoutGroup: l
        } = this.props, {
            projection: c
        } = i;
        c && (c.scheduleCheckAfterUnmount(), s && s.group && s.group.remove(c), l && l.deregister && l.deregister(c))
    }
    safeToRemove() {
        const {
            safeToRemove: i
        } = this.props;
        i && i()
    }
    render() {
        return null
    }
}

function Kp(r) {
    const [i, s] = fy(), l = te.useContext(Dh);
    return j.jsx(R1, { ...r,
        layoutGroup: l,
        switchLayoutGroup: te.useContext(Vh),
        isPresent: i,
        safeToRemove: s
    })
}
const M1 = {
    borderRadius: { ...ii,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: ii,
    borderTopRightRadius: ii,
    borderBottomLeftRadius: ii,
    borderBottomRightRadius: ii,
    boxShadow: D1
};

function N1(r, i, s) {
    const l = Ke(r) ? r : pi(r);
    return l.start(su("", l, i, s)), l.animation
}

function L1(r) {
    return r instanceof SVGElement && r.tagName !== "svg"
}
const j1 = (r, i) => r.depth - i.depth;
class _1 {
    constructor() {
        this.children = [], this.isDirty = !1
    }
    add(i) {
        Qa(this.children, i), this.isDirty = !0
    }
    remove(i) {
        Ya(this.children, i), this.isDirty = !0
    }
    forEach(i) {
        this.isDirty && this.children.sort(j1), this.isDirty = !1, this.children.forEach(i)
    }
}

function V1(r, i) {
    const s = Vt.now(),
        l = ({
            timestamp: c
        }) => {
            const d = c - s;
            d >= i && (pn(l), r(d - i))
        };
    return ve.read(l, !0), () => pn(l)
}
const Gp = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
    O1 = Gp.length,
    th = r => typeof r == "string" ? parseFloat(r) : r,
    nh = r => typeof r == "number" || J.test(r);

function F1(r, i, s, l, c, d) {
    c ? (r.opacity = ke(0, s.opacity !== void 0 ? s.opacity : 1, I1(l)), r.opacityExit = ke(i.opacity !== void 0 ? i.opacity : 1, 0, z1(l))) : d && (r.opacity = ke(i.opacity !== void 0 ? i.opacity : 1, s.opacity !== void 0 ? s.opacity : 1, l));
    for (let f = 0; f < O1; f++) {
        const p = `border${Gp[f]}Radius`;
        let m = rh(i, p),
            g = rh(s, p);
        if (m === void 0 && g === void 0) continue;
        m || (m = 0), g || (g = 0), m === 0 || g === 0 || nh(m) === nh(g) ? (r[p] = Math.max(ke(th(m), th(g), l), 0), (_t.test(g) || _t.test(m)) && (r[p] += "%")) : r[p] = g
    }(i.rotate || s.rotate) && (r.rotate = ke(i.rotate || 0, s.rotate || 0, l))
}

function rh(r, i) {
    return r[i] !== void 0 ? r[i] : r.borderRadius
}
const I1 = Xp(0, .5, fp),
    z1 = Xp(.5, .95, ct);

function Xp(r, i, s) {
    return l => l < r ? 0 : l > i ? 1 : s(hr(r, i, l))
}

function ih(r, i) {
    r.min = i.min, r.max = i.max
}

function vt(r, i) {
    ih(r.x, i.x), ih(r.y, i.y)
}

function sh(r, i) {
    r.translate = i.translate, r.scale = i.scale, r.originPoint = i.originPoint, r.origin = i.origin
}

function oh(r, i, s, l, c) {
    return r -= i, r = Hs(r, 1 / s, l), c !== void 0 && (r = Hs(r, 1 / c, l)), r
}

function B1(r, i = 0, s = 1, l = .5, c, d = r, f = r) {
    if (_t.test(i) && (i = parseFloat(i), i = ke(f.min, f.max, i / 100) - f.min), typeof i != "number") return;
    let p = ke(d.min, d.max, l);
    r === d && (p -= i), r.min = oh(r.min, i, s, p, c), r.max = oh(r.max, i, s, p, c)
}

function lh(r, i, [s, l, c], d, f) {
    B1(r, i[s], i[l], i[c], i.scale, d, f)
}
const U1 = ["x", "scaleX", "originX"],
    W1 = ["y", "scaleY", "originY"];

function ah(r, i, s, l) {
    lh(r.x, i, U1, s ? s.x : void 0, l ? l.x : void 0), lh(r.y, i, W1, s ? s.y : void 0, l ? l.y : void 0)
}

function uh(r) {
    return r.translate === 0 && r.scale === 1
}

function Qp(r) {
    return uh(r.x) && uh(r.y)
}

function ch(r, i) {
    return r.min === i.min && r.max === i.max
}

function $1(r, i) {
    return ch(r.x, i.x) && ch(r.y, i.y)
}

function fh(r, i) {
    return Math.round(r.min) === Math.round(i.min) && Math.round(r.max) === Math.round(i.max)
}

function Yp(r, i) {
    return fh(r.x, i.x) && fh(r.y, i.y)
}

function dh(r) {
    return ft(r.x) / ft(r.y)
}

function hh(r, i) {
    return r.translate === i.translate && r.scale === i.scale && r.originPoint === i.originPoint
}
class H1 {
    constructor() {
        this.members = []
    }
    add(i) {
        Qa(this.members, i), i.scheduleRender()
    }
    remove(i) {
        if (Ya(this.members, i), i === this.prevLead && (this.prevLead = void 0), i === this.lead) {
            const s = this.members[this.members.length - 1];
            s && this.promote(s)
        }
    }
    relegate(i) {
        const s = this.members.findIndex(c => i === c);
        if (s === 0) return !1;
        let l;
        for (let c = s; c >= 0; c--) {
            const d = this.members[c];
            if (d.isPresent !== !1) {
                l = d;
                break
            }
        }
        return l ? (this.promote(l), !0) : !1
    }
    promote(i, s) {
        const l = this.lead;
        if (i !== l && (this.prevLead = l, this.lead = i, i.show(), l)) {
            l.instance && l.scheduleRender(), i.scheduleRender(), i.resumeFrom = l, s && (i.resumeFrom.preserveOpacity = !0), l.snapshot && (i.snapshot = l.snapshot, i.snapshot.latestValues = l.animationValues || l.latestValues), i.root && i.root.isUpdating && (i.isLayoutDirty = !0);
            const {
                crossfade: c
            } = i.options;
            c === !1 && l.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(i => {
            const {
                options: s,
                resumingFrom: l
            } = i;
            s.onExitComplete && s.onExitComplete(), l && l.options.onExitComplete && l.options.onExitComplete()
        })
    }
    scheduleRender() {
        this.members.forEach(i => {
            i.instance && i.scheduleRender(!1)
        })
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}

function K1(r, i, s) {
    let l = "";
    const c = r.x.translate / i.x,
        d = r.y.translate / i.y,
        f = (s == null ? void 0 : s.z) || 0;
    if ((c || d || f) && (l = `translate3d(${c}px, ${d}px, ${f}px) `), (i.x !== 1 || i.y !== 1) && (l += `scale(${1/i.x}, ${1/i.y}) `), s) {
        const {
            transformPerspective: g,
            rotate: v,
            rotateX: x,
            rotateY: P,
            skewX: A,
            skewY: _
        } = s;
        g && (l = `perspective(${g}px) ${l}`), v && (l += `rotate(${v}deg) `), x && (l += `rotateX(${x}deg) `), P && (l += `rotateY(${P}deg) `), A && (l += `skewX(${A}deg) `), _ && (l += `skewY(${_}deg) `)
    }
    const p = r.x.scale * i.x,
        m = r.y.scale * i.y;
    return (p !== 1 || m !== 1) && (l += `scale(${p}, ${m})`), l || "none"
}
const Ln = {
        type: "projectionFrame",
        totalNodes: 0,
        resolvedTargetDeltas: 0,
        recalculatedProjection: 0
    },
    li = typeof window < "u" && window.MotionDebug !== void 0,
    sa = ["", "X", "Y", "Z"],
    G1 = {
        visibility: "hidden"
    },
    ph = 1e3;
let X1 = 0;

function oa(r, i, s, l) {
    const {
        latestValues: c
    } = i;
    c[r] && (s[r] = c[r], i.setStaticValue(r, 0), l && (l[r] = 0))
}

function qp(r) {
    if (r.hasCheckedOptimisedAppear = !0, r.root === r) return;
    const {
        visualElement: i
    } = r.options;
    if (!i) return;
    const s = ip(i);
    if (window.MotionHasOptimisedAnimation(s, "transform")) {
        const {
            layout: c,
            layoutId: d
        } = r.options;
        window.MotionCancelOptimisedAnimation(s, "transform", ve, !(c || d))
    }
    const {
        parent: l
    } = r;
    l && !l.hasCheckedOptimisedAppear && qp(l)
}

function Zp({
    attachResizeListener: r,
    defaultParent: i,
    measureScroll: s,
    checkIsScrollRoot: l,
    resetTransform: c
}) {
    return class {
        constructor(f = {}, p = i == null ? void 0 : i()) {
            this.id = X1++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
                x: 1,
                y: 1
            }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
                this.projectionUpdateScheduled = !1, li && (Ln.totalNodes = Ln.resolvedTargetDeltas = Ln.recalculatedProjection = 0), this.nodes.forEach(q1), this.nodes.forEach(tx), this.nodes.forEach(nx), this.nodes.forEach(Z1), li && window.MotionDebug.record(Ln)
            }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = f, this.root = p ? p.root || p : this, this.path = p ? [...p.path, p] : [], this.parent = p, this.depth = p ? p.depth + 1 : 0;
            for (let m = 0; m < this.path.length; m++) this.path[m].shouldResetTransform = !0;
            this.root === this && (this.nodes = new _1)
        }
        addEventListener(f, p) {
            return this.eventHandlers.has(f) || this.eventHandlers.set(f, new qa), this.eventHandlers.get(f).add(p)
        }
        notifyListeners(f, ...p) {
            const m = this.eventHandlers.get(f);
            m && m.notify(...p)
        }
        hasListeners(f) {
            return this.eventHandlers.has(f)
        }
        mount(f, p = this.root.hasTreeAnimated) {
            if (this.instance) return;
            this.isSVG = L1(f), this.instance = f;
            const {
                layoutId: m,
                layout: g,
                visualElement: v
            } = this.options;
            if (v && !v.current && v.mount(f), this.root.nodes.add(this), this.parent && this.parent.children.add(this), p && (g || m) && (this.isLayoutDirty = !0), r) {
                let x;
                const P = () => this.root.updateBlockedByResize = !1;
                r(f, () => {
                    this.root.updateBlockedByResize = !0, x && x(), x = V1(P, 250), Fs.hasAnimatedSinceResize && (Fs.hasAnimatedSinceResize = !1, this.nodes.forEach(gh))
                })
            }
            m && this.root.registerSharedNode(m, this), this.options.animate !== !1 && v && (m || g) && this.addEventListener("didUpdate", ({
                delta: x,
                hasLayoutChanged: P,
                hasRelativeLayoutChanged: A,
                layout: _
            }) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0, this.relativeTarget = void 0;
                    return
                }
                const R = this.options.transition || v.getDefaultTransition() || lx,
                    {
                        onLayoutAnimationStart: V,
                        onLayoutAnimationComplete: I
                    } = v.getProps(),
                    W = !this.targetLayout || !Yp(this.targetLayout, _),
                    K = !P && A;
                if (this.options.layoutRoot || this.resumeFrom || K || P && (W || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(x, K);
                    const ee = { ...Ha(R, "layout"),
                        onPlay: V,
                        onComplete: I
                    };
                    (v.shouldReduceMotion || this.options.layoutRoot) && (ee.delay = 0, ee.type = !1), this.startAnimation(ee)
                } else P || gh(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = _
            })
        }
        unmount() {
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
            const f = this.getStack();
            f && f.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, pn(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(rx), this.animationId++)
        }
        getTransformTemplate() {
            const {
                visualElement: f
            } = this.options;
            return f && f.getProps().transformTemplate
        }
        willUpdate(f = !0) {
            if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && qp(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
            this.isLayoutDirty = !0;
            for (let v = 0; v < this.path.length; v++) {
                const x = this.path[v];
                x.shouldResetTransform = !0, x.updateScroll("snapshot"), x.options.layoutRoot && x.willUpdate(!1)
            }
            const {
                layoutId: p,
                layout: m
            } = this.options;
            if (p === void 0 && !m) return;
            const g = this.getTransformTemplate();
            this.prevTransformTemplateValue = g ? g(this.latestValues, "") : void 0, this.updateSnapshot(), f && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(mh);
                return
            }
            this.isUpdating || this.nodes.forEach(b1), this.isUpdating = !1, this.nodes.forEach(ex), this.nodes.forEach(Q1), this.nodes.forEach(Y1), this.clearAllSnapshots();
            const p = Vt.now();
            ze.delta = Gt(0, 1e3 / 60, p - ze.timestamp), ze.timestamp = p, ze.isProcessing = !0, Zl.update.process(ze), Zl.preRender.process(ze), Zl.render.process(ze), ze.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0, _a.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(J1), this.sharedNodes.forEach(ix)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, ve.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            ve.postRender(() => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            })
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let m = 0; m < this.path.length; m++) this.path[m].updateScroll();
            const f = this.layout;
            this.layout = this.measure(!1), this.layoutCorrected = Me(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
            const {
                visualElement: p
            } = this.options;
            p && p.notify("LayoutMeasure", this.layout.layoutBox, f ? f.layoutBox : void 0)
        }
        updateScroll(f = "measure") {
            let p = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === f && (p = !1), p) {
                const m = l(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: f,
                    isRoot: m,
                    offset: s(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : m
                }
            }
        }
        resetTransform() {
            if (!c) return;
            const f = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
                p = this.projectionDelta && !Qp(this.projectionDelta),
                m = this.getTransformTemplate(),
                g = m ? m(this.latestValues, "") : void 0,
                v = g !== this.prevTransformTemplateValue;
            f && (p || Nn(this.latestValues) || v) && (c(this.instance, g), this.shouldResetTransform = !1, this.scheduleRender())
        }
        measure(f = !0) {
            const p = this.measurePageBox();
            let m = this.removeElementScroll(p);
            return f && (m = this.removeTransform(m)), ax(m), {
                animationId: this.root.animationId,
                measuredBox: p,
                layoutBox: m,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var f;
            const {
                visualElement: p
            } = this.options;
            if (!p) return Me();
            const m = p.measureViewportBox();
            if (!(((f = this.scroll) === null || f === void 0 ? void 0 : f.wasRoot) || this.path.some(ux))) {
                const {
                    scroll: v
                } = this.root;
                v && (fr(m.x, v.offset.x), fr(m.y, v.offset.y))
            }
            return m
        }
        removeElementScroll(f) {
            var p;
            const m = Me();
            if (vt(m, f), !((p = this.scroll) === null || p === void 0) && p.wasRoot) return m;
            for (let g = 0; g < this.path.length; g++) {
                const v = this.path[g],
                    {
                        scroll: x,
                        options: P
                    } = v;
                v !== this.root && x && P.layoutScroll && (x.wasRoot && vt(m, f), fr(m.x, x.offset.x), fr(m.y, x.offset.y))
            }
            return m
        }
        applyTransform(f, p = !1) {
            const m = Me();
            vt(m, f);
            for (let g = 0; g < this.path.length; g++) {
                const v = this.path[g];
                !p && v.options.layoutScroll && v.scroll && v !== v.root && dr(m, {
                    x: -v.scroll.offset.x,
                    y: -v.scroll.offset.y
                }), Nn(v.latestValues) && dr(m, v.latestValues)
            }
            return Nn(this.latestValues) && dr(m, this.latestValues), m
        }
        removeTransform(f) {
            const p = Me();
            vt(p, f);
            for (let m = 0; m < this.path.length; m++) {
                const g = this.path[m];
                if (!g.instance || !Nn(g.latestValues)) continue;
                Ta(g.latestValues) && g.updateSnapshot();
                const v = Me(),
                    x = g.measurePageBox();
                vt(v, x), ah(p, g.latestValues, g.snapshot ? g.snapshot.layoutBox : void 0, v)
            }
            return Nn(this.latestValues) && ah(p, this.latestValues), p
        }
        setTargetDelta(f) {
            this.targetDelta = f, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
        }
        setOptions(f) {
            this.options = { ...this.options,
                ...f,
                crossfade: f.crossfade !== void 0 ? f.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ze.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(f = !1) {
            var p;
            const m = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = m.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = m.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = m.isSharedProjectionDirty);
            const g = !!this.resumingFrom || this !== m;
            if (!(f || g && this.isSharedProjectionDirty || this.isProjectionDirty || !((p = this.parent) === null || p === void 0) && p.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
            const {
                layout: x,
                layoutId: P
            } = this.options;
            if (!(!this.layout || !(x || P))) {
                if (this.resolvedRelativeTargetAt = ze.timestamp, !this.targetDelta && !this.relativeTarget) {
                    const A = this.getClosestProjectingParent();
                    A && A.layout && this.animationProgress !== 1 ? (this.relativeParent = A, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Me(), this.relativeTargetOrigin = Me(), fi(this.relativeTargetOrigin, this.layout.layoutBox, A.layout.layoutBox), vt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = Me(), this.targetWithTransforms = Me()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), d1(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : vt(this.target, this.layout.layoutBox), Wp(this.target, this.targetDelta)) : vt(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        const A = this.getClosestProjectingParent();
                        A && !!A.resumingFrom == !!this.resumingFrom && !A.options.layoutScroll && A.target && this.animationProgress !== 1 ? (this.relativeParent = A, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Me(), this.relativeTargetOrigin = Me(), fi(this.relativeTargetOrigin, this.target, A.target), vt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    li && Ln.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || Ta(this.parent.latestValues) || Up(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var f;
            const p = this.getLead(),
                m = !!this.resumingFrom || this !== p;
            let g = !0;
            if ((this.isProjectionDirty || !((f = this.parent) === null || f === void 0) && f.isProjectionDirty) && (g = !1), m && (this.isSharedProjectionDirty || this.isTransformDirty) && (g = !1), this.resolvedRelativeTargetAt === ze.timestamp && (g = !1), g) return;
            const {
                layout: v,
                layoutId: x
            } = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(v || x)) return;
            vt(this.layoutCorrected, this.layout.layoutBox);
            const P = this.treeScale.x,
                A = this.treeScale.y;
            S1(this.layoutCorrected, this.treeScale, this.path, m), p.layout && !p.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (p.target = p.layout.layoutBox, p.targetWithTransforms = Me());
            const {
                target: _
            } = p;
            if (!_) {
                this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
                return
            }!this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (sh(this.prevProjectionDelta.x, this.projectionDelta.x), sh(this.prevProjectionDelta.y, this.projectionDelta.y)), ci(this.projectionDelta, this.layoutCorrected, _, this.latestValues), (this.treeScale.x !== P || this.treeScale.y !== A || !hh(this.projectionDelta.x, this.prevProjectionDelta.x) || !hh(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", _)), li && Ln.recalculatedProjection++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(f = !0) {
            var p;
            if ((p = this.options.visualElement) === null || p === void 0 || p.scheduleRender(), f) {
                const m = this.getStack();
                m && m.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = cr(), this.projectionDelta = cr(), this.projectionDeltaWithTransform = cr()
        }
        setAnimationOrigin(f, p = !1) {
            const m = this.snapshot,
                g = m ? m.latestValues : {},
                v = { ...this.latestValues
                },
                x = cr();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !p;
            const P = Me(),
                A = m ? m.source : void 0,
                _ = this.layout ? this.layout.source : void 0,
                R = A !== _,
                V = this.getStack(),
                I = !V || V.members.length <= 1,
                W = !!(R && !I && this.options.crossfade === !0 && !this.path.some(ox));
            this.animationProgress = 0;
            let K;
            this.mixTargetDelta = ee => {
                const X = ee / 1e3;
                yh(x.x, f.x, X), yh(x.y, f.y, X), this.setTargetDelta(x), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (fi(P, this.layout.layoutBox, this.relativeParent.layout.layoutBox), sx(this.relativeTarget, this.relativeTargetOrigin, P, X), K && $1(this.relativeTarget, K) && (this.isProjectionDirty = !1), K || (K = Me()), vt(K, this.relativeTarget)), R && (this.animationValues = v, F1(v, g, this.latestValues, X, W, I)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = X
            }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(f) {
            this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (pn(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = ve.update(() => {
                Fs.hasAnimatedSinceResize = !0, this.currentAnimation = N1(0, ph, { ...f,
                    onUpdate: p => {
                        this.mixTargetDelta(p), f.onUpdate && f.onUpdate(p)
                    },
                    onComplete: () => {
                        f.onComplete && f.onComplete(), this.completeAnimation()
                    }
                }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
            })
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
            const f = this.getStack();
            f && f.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(ph), this.currentAnimation.stop()), this.completeAnimation()
        }
        applyTransformsToTarget() {
            const f = this.getLead();
            let {
                targetWithTransforms: p,
                target: m,
                layout: g,
                latestValues: v
            } = f;
            if (!(!p || !m || !g)) {
                if (this !== f && this.layout && g && Jp(this.options.animationType, this.layout.layoutBox, g.layoutBox)) {
                    m = this.target || Me();
                    const x = ft(this.layout.layoutBox.x);
                    m.x.min = f.target.x.min, m.x.max = m.x.min + x;
                    const P = ft(this.layout.layoutBox.y);
                    m.y.min = f.target.y.min, m.y.max = m.y.min + P
                }
                vt(p, m), dr(p, v), ci(this.projectionDeltaWithTransform, this.layoutCorrected, p, v)
            }
        }
        registerSharedNode(f, p) {
            this.sharedNodes.has(f) || this.sharedNodes.set(f, new H1), this.sharedNodes.get(f).add(p);
            const g = p.options.initialPromotionConfig;
            p.promote({
                transition: g ? g.transition : void 0,
                preserveFollowOpacity: g && g.shouldPreserveFollowOpacity ? g.shouldPreserveFollowOpacity(p) : void 0
            })
        }
        isLead() {
            const f = this.getStack();
            return f ? f.lead === this : !0
        }
        getLead() {
            var f;
            const {
                layoutId: p
            } = this.options;
            return p ? ((f = this.getStack()) === null || f === void 0 ? void 0 : f.lead) || this : this
        }
        getPrevLead() {
            var f;
            const {
                layoutId: p
            } = this.options;
            return p ? (f = this.getStack()) === null || f === void 0 ? void 0 : f.prevLead : void 0
        }
        getStack() {
            const {
                layoutId: f
            } = this.options;
            if (f) return this.root.sharedNodes.get(f)
        }
        promote({
            needsReset: f,
            transition: p,
            preserveFollowOpacity: m
        } = {}) {
            const g = this.getStack();
            g && g.promote(this, m), f && (this.projectionDelta = void 0, this.needsReset = !0), p && this.setOptions({
                transition: p
            })
        }
        relegate() {
            const f = this.getStack();
            return f ? f.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {
                visualElement: f
            } = this.options;
            if (!f) return;
            let p = !1;
            const {
                latestValues: m
            } = f;
            if ((m.z || m.rotate || m.rotateX || m.rotateY || m.rotateZ || m.skewX || m.skewY) && (p = !0), !p) return;
            const g = {};
            m.z && oa("z", f, g, this.animationValues);
            for (let v = 0; v < sa.length; v++) oa(`rotate${sa[v]}`, f, g, this.animationValues), oa(`skew${sa[v]}`, f, g, this.animationValues);
            f.render();
            for (const v in g) f.setStaticValue(v, g[v]), this.animationValues && (this.animationValues[v] = g[v]);
            f.scheduleRender()
        }
        getProjectionStyles(f) {
            var p, m;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return G1;
            const g = {
                    visibility: ""
                },
                v = this.getTransformTemplate();
            if (this.needsReset) return this.needsReset = !1, g.opacity = "", g.pointerEvents = Vs(f == null ? void 0 : f.pointerEvents) || "", g.transform = v ? v(this.latestValues, "") : "none", g;
            const x = this.getLead();
            if (!this.projectionDelta || !this.layout || !x.target) {
                const R = {};
                return this.options.layoutId && (R.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, R.pointerEvents = Vs(f == null ? void 0 : f.pointerEvents) || ""), this.hasProjected && !Nn(this.latestValues) && (R.transform = v ? v({}, "") : "none", this.hasProjected = !1), R
            }
            const P = x.animationValues || x.latestValues;
            this.applyTransformsToTarget(), g.transform = K1(this.projectionDeltaWithTransform, this.treeScale, P), v && (g.transform = v(P, g.transform));
            const {
                x: A,
                y: _
            } = this.projectionDelta;
            g.transformOrigin = `${A.origin*100}% ${_.origin*100}% 0`, x.animationValues ? g.opacity = x === this ? (m = (p = P.opacity) !== null && p !== void 0 ? p : this.latestValues.opacity) !== null && m !== void 0 ? m : 1 : this.preserveOpacity ? this.latestValues.opacity : P.opacityExit : g.opacity = x === this ? P.opacity !== void 0 ? P.opacity : "" : P.opacityExit !== void 0 ? P.opacityExit : 0;
            for (const R in zs) {
                if (P[R] === void 0) continue;
                const {
                    correct: V,
                    applyTo: I
                } = zs[R], W = g.transform === "none" ? P[R] : V(P[R], x);
                if (I) {
                    const K = I.length;
                    for (let ee = 0; ee < K; ee++) g[I[ee]] = W
                } else g[R] = W
            }
            return this.options.layoutId && (g.pointerEvents = x === this ? Vs(f == null ? void 0 : f.pointerEvents) || "" : "none"), g
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(f => {
                var p;
                return (p = f.currentAnimation) === null || p === void 0 ? void 0 : p.stop()
            }), this.root.nodes.forEach(mh), this.root.sharedNodes.clear()
        }
    }
}

function Q1(r) {
    r.updateLayout()
}

function Y1(r) {
    var i;
    const s = ((i = r.resumeFrom) === null || i === void 0 ? void 0 : i.snapshot) || r.snapshot;
    if (r.isLead() && r.layout && s && r.hasListeners("didUpdate")) {
        const {
            layoutBox: l,
            measuredBox: c
        } = r.layout, {
            animationType: d
        } = r.options, f = s.source !== r.layout.source;
        d === "size" ? xt(x => {
            const P = f ? s.measuredBox[x] : s.layoutBox[x],
                A = ft(P);
            P.min = l[x].min, P.max = P.min + A
        }) : Jp(d, s.layoutBox, l) && xt(x => {
            const P = f ? s.measuredBox[x] : s.layoutBox[x],
                A = ft(l[x]);
            P.max = P.min + A, r.relativeTarget && !r.currentAnimation && (r.isProjectionDirty = !0, r.relativeTarget[x].max = r.relativeTarget[x].min + A)
        });
        const p = cr();
        ci(p, l, s.layoutBox);
        const m = cr();
        f ? ci(m, r.applyTransform(c, !0), s.measuredBox) : ci(m, l, s.layoutBox);
        const g = !Qp(p);
        let v = !1;
        if (!r.resumeFrom) {
            const x = r.getClosestProjectingParent();
            if (x && !x.resumeFrom) {
                const {
                    snapshot: P,
                    layout: A
                } = x;
                if (P && A) {
                    const _ = Me();
                    fi(_, s.layoutBox, P.layoutBox);
                    const R = Me();
                    fi(R, l, A.layoutBox), Yp(_, R) || (v = !0), x.options.layoutRoot && (r.relativeTarget = R, r.relativeTargetOrigin = _, r.relativeParent = x)
                }
            }
        }
        r.notifyListeners("didUpdate", {
            layout: l,
            snapshot: s,
            delta: m,
            layoutDelta: p,
            hasLayoutChanged: g,
            hasRelativeLayoutChanged: v
        })
    } else if (r.isLead()) {
        const {
            onExitComplete: l
        } = r.options;
        l && l()
    }
    r.options.transition = void 0
}

function q1(r) {
    li && Ln.totalNodes++, r.parent && (r.isProjecting() || (r.isProjectionDirty = r.parent.isProjectionDirty), r.isSharedProjectionDirty || (r.isSharedProjectionDirty = !!(r.isProjectionDirty || r.parent.isProjectionDirty || r.parent.isSharedProjectionDirty)), r.isTransformDirty || (r.isTransformDirty = r.parent.isTransformDirty))
}

function Z1(r) {
    r.isProjectionDirty = r.isSharedProjectionDirty = r.isTransformDirty = !1
}

function J1(r) {
    r.clearSnapshot()
}

function mh(r) {
    r.clearMeasurements()
}

function b1(r) {
    r.isLayoutDirty = !1
}

function ex(r) {
    const {
        visualElement: i
    } = r.options;
    i && i.getProps().onBeforeLayoutMeasure && i.notify("BeforeLayoutMeasure"), r.resetTransform()
}

function gh(r) {
    r.finishAnimation(), r.targetDelta = r.relativeTarget = r.target = void 0, r.isProjectionDirty = !0
}

function tx(r) {
    r.resolveTargetDelta()
}

function nx(r) {
    r.calcProjection()
}

function rx(r) {
    r.resetSkewAndRotation()
}

function ix(r) {
    r.removeLeadSnapshot()
}

function yh(r, i, s) {
    r.translate = ke(i.translate, 0, s), r.scale = ke(i.scale, 1, s), r.origin = i.origin, r.originPoint = i.originPoint
}

function vh(r, i, s, l) {
    r.min = ke(i.min, s.min, l), r.max = ke(i.max, s.max, l)
}

function sx(r, i, s, l) {
    vh(r.x, i.x, s.x, l), vh(r.y, i.y, s.y, l)
}

function ox(r) {
    return r.animationValues && r.animationValues.opacityExit !== void 0
}
const lx = {
        duration: .45,
        ease: [.4, 0, .1, 1]
    },
    xh = r => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(r),
    wh = xh("applewebkit/") && !xh("chrome/") ? Math.round : ct;

function Sh(r) {
    r.min = wh(r.min), r.max = wh(r.max)
}

function ax(r) {
    Sh(r.x), Sh(r.y)
}

function Jp(r, i, s) {
    return r === "position" || r === "preserve-aspect" && !f1(dh(i), dh(s), .2)
}

function ux(r) {
    var i;
    return r !== r.root && ((i = r.scroll) === null || i === void 0 ? void 0 : i.wasRoot)
}
const cx = Zp({
        attachResizeListener: (r, i) => gi(r, "resize", i),
        measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
        }),
        checkIsScrollRoot: () => !0
    }),
    la = {
        current: void 0
    },
    bp = Zp({
        measureScroll: r => ({
            x: r.scrollLeft,
            y: r.scrollTop
        }),
        defaultParent: () => {
            if (!la.current) {
                const r = new cx({});
                r.mount(window), r.setOptions({
                    layoutScroll: !0
                }), la.current = r
            }
            return la.current
        },
        resetTransform: (r, i) => {
            r.style.transform = i !== void 0 ? i : "none"
        },
        checkIsScrollRoot: r => window.getComputedStyle(r).position === "fixed"
    }),
    fx = {
        pan: {
            Feature: A1
        },
        drag: {
            Feature: E1,
            ProjectionNode: bp,
            MeasureLayout: Kp
        }
    };

function Ph(r, i, s) {
    const {
        props: l
    } = r;
    r.animationState && l.whileHover && r.animationState.setActive("whileHover", s === "Start");
    const c = "onHover" + s,
        d = l[c];
    d && ve.postRender(() => d(i, wi(i)))
}
class dx extends gn {
    mount() {
        const {
            current: i
        } = this.node;
        i && (this.unmount = dv(i, (s, l) => (Ph(this.node, l, "Start"), c => Ph(this.node, c, "End"))))
    }
    unmount() {}
}
class hx extends gn {
    constructor() {
        super(...arguments), this.isActive = !1
    }
    onFocus() {
        let i = !1;
        try {
            i = this.node.current.matches(":focus-visible")
        } catch {
            i = !0
        }!i || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
    }
    mount() {
        this.unmount = xi(gi(this.node.current, "focus", () => this.onFocus()), gi(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}

function Th(r, i, s) {
    const {
        props: l
    } = r;
    r.animationState && l.whileTap && r.animationState.setActive("whileTap", s === "Start");
    const c = "onTap" + (s === "End" ? "" : s),
        d = l[c];
    d && ve.postRender(() => d(i, wi(i)))
}
class px extends gn {
    mount() {
        const {
            current: i
        } = this.node;
        i && (this.unmount = gv(i, (s, l) => (Th(this.node, l, "Start"), (c, {
            success: d
        }) => Th(this.node, c, d ? "End" : "Cancel")), {
            useGlobalTarget: this.node.props.globalTapTarget
        }))
    }
    unmount() {}
}
const Ca = new WeakMap,
    aa = new WeakMap,
    mx = r => {
        const i = Ca.get(r.target);
        i && i(r)
    },
    gx = r => {
        r.forEach(mx)
    };

function yx({
    root: r,
    ...i
}) {
    const s = r || document;
    aa.has(s) || aa.set(s, {});
    const l = aa.get(s),
        c = JSON.stringify(i);
    return l[c] || (l[c] = new IntersectionObserver(gx, {
        root: r,
        ...i
    })), l[c]
}

function vx(r, i, s) {
    const l = yx(i);
    return Ca.set(r, s), l.observe(r), () => {
        Ca.delete(r), l.unobserve(r)
    }
}
const xx = {
    some: 0,
    all: 1
};
class wx extends gn {
    constructor() {
        super(...arguments), this.hasEnteredView = !1, this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {
            viewport: i = {}
        } = this.node.getProps(), {
            root: s,
            margin: l,
            amount: c = "some",
            once: d
        } = i, f = {
            root: s ? s.current : void 0,
            rootMargin: l,
            threshold: typeof c == "number" ? c : xx[c]
        }, p = m => {
            const {
                isIntersecting: g
            } = m;
            if (this.isInView === g || (this.isInView = g, d && !g && this.hasEnteredView)) return;
            g && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", g);
            const {
                onViewportEnter: v,
                onViewportLeave: x
            } = this.node.getProps(), P = g ? v : x;
            P && P(m)
        };
        return vx(this.node.current, f, p)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u") return;
        const {
            props: i,
            prevProps: s
        } = this.node;
        ["amount", "margin", "root"].some(Sx(i, s)) && this.startObserver()
    }
    unmount() {}
}

function Sx({
    viewport: r = {}
}, {
    viewport: i = {}
} = {}) {
    return s => r[s] !== i[s]
}
const Px = {
        inView: {
            Feature: wx
        },
        tap: {
            Feature: px
        },
        focus: {
            Feature: hx
        },
        hover: {
            Feature: dx
        }
    },
    Tx = {
        layout: {
            ProjectionNode: bp,
            MeasureLayout: Kp
        }
    },
    Ea = {
        current: null
    },
    em = {
        current: !1
    };

function kx() {
    if (em.current = !0, !!Ra)
        if (window.matchMedia) {
            const r = window.matchMedia("(prefers-reduced-motion)"),
                i = () => Ea.current = r.matches;
            r.addListener(i), i()
        } else Ea.current = !1
}
const Cx = [...Cp, He, mn],
    Ex = r => Cx.find(kp(r)),
    kh = new WeakMap;

function Ax(r, i, s) {
    for (const l in i) {
        const c = i[l],
            d = s[l];
        if (Ke(c)) r.addValue(l, c);
        else if (Ke(d)) r.addValue(l, pi(c, {
            owner: r
        }));
        else if (d !== c)
            if (r.hasValue(l)) {
                const f = r.getValue(l);
                f.liveStyle === !0 ? f.jump(c) : f.hasAnimated || f.set(c)
            } else {
                const f = r.getStaticValue(l);
                r.addValue(l, pi(f !== void 0 ? f : c, {
                    owner: r
                }))
            }
    }
    for (const l in s) i[l] === void 0 && r.removeValue(l);
    return i
}
const Ch = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class Dx {
    scrapeMotionValuesFromProps(i, s, l) {
        return {}
    }
    constructor({
        parent: i,
        props: s,
        presenceContext: l,
        reducedMotionConfig: c,
        blockInitialAnimation: d,
        visualState: f
    }, p = {}) {
        this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.KeyframeResolver = nu, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }, this.renderScheduledAt = 0, this.scheduleRender = () => {
            const A = Vt.now();
            this.renderScheduledAt < A && (this.renderScheduledAt = A, ve.render(this.render, !1, !0))
        };
        const {
            latestValues: m,
            renderState: g,
            onUpdate: v
        } = f;
        this.onUpdate = v, this.latestValues = m, this.baseTarget = { ...m
        }, this.initialValues = s.initial ? { ...m
        } : {}, this.renderState = g, this.parent = i, this.props = s, this.presenceContext = l, this.depth = i ? i.depth + 1 : 0, this.reducedMotionConfig = c, this.options = p, this.blockInitialAnimation = !!d, this.isControllingVariants = Ys(s), this.isVariantNode = jh(s), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(i && i.current);
        const {
            willChange: x,
            ...P
        } = this.scrapeMotionValuesFromProps(s, {}, this);
        for (const A in P) {
            const _ = P[A];
            m[A] !== void 0 && Ke(_) && _.set(m[A], !1)
        }
    }
    mount(i) {
        this.current = i, kh.set(i, this), this.projection && !this.projection.instance && this.projection.mount(i), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((s, l) => this.bindToMotionValue(l, s)), em.current || kx(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Ea.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
    }
    unmount() {
        kh.delete(this.current), this.projection && this.projection.unmount(), pn(this.notifyUpdate), pn(this.render), this.valueSubscriptions.forEach(i => i()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
        for (const i in this.events) this.events[i].clear();
        for (const i in this.features) {
            const s = this.features[i];
            s && (s.unmount(), s.isMounted = !1)
        }
        this.current = null
    }
    bindToMotionValue(i, s) {
        this.valueSubscriptions.has(i) && this.valueSubscriptions.get(i)();
        const l = On.has(i),
            c = s.on("change", p => {
                this.latestValues[i] = p, this.props.onUpdate && ve.preRender(this.notifyUpdate), l && this.projection && (this.projection.isTransformDirty = !0)
            }),
            d = s.on("renderRequest", this.scheduleRender);
        let f;
        window.MotionCheckAppearSync && (f = window.MotionCheckAppearSync(this, i, s)), this.valueSubscriptions.set(i, () => {
            c(), d(), f && f(), s.owner && s.stop()
        })
    }
    sortNodePosition(i) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== i.type ? 0 : this.sortInstanceNodePosition(this.current, i.current)
    }
    updateFeatures() {
        let i = "animation";
        for (i in pr) {
            const s = pr[i];
            if (!s) continue;
            const {
                isEnabled: l,
                Feature: c
            } = s;
            if (!this.features[i] && c && l(this.props) && (this.features[i] = new c(this)), this.features[i]) {
                const d = this.features[i];
                d.isMounted ? d.update() : (d.mount(), d.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Me()
    }
    getStaticValue(i) {
        return this.latestValues[i]
    }
    setStaticValue(i, s) {
        this.latestValues[i] = s
    }
    update(i, s) {
        (i.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = i, this.prevPresenceContext = this.presenceContext, this.presenceContext = s;
        for (let l = 0; l < Ch.length; l++) {
            const c = Ch[l];
            this.propEventSubscriptions[c] && (this.propEventSubscriptions[c](), delete this.propEventSubscriptions[c]);
            const d = "on" + c,
                f = i[d];
            f && (this.propEventSubscriptions[c] = this.on(c, f))
        }
        this.prevMotionValues = Ax(this, this.scrapeMotionValuesFromProps(i, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue(), this.onUpdate && this.onUpdate(this)
    }
    getProps() {
        return this.props
    }
    getVariant(i) {
        return this.props.variants ? this.props.variants[i] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(i) {
        const s = this.getClosestVariantNode();
        if (s) return s.variantChildren && s.variantChildren.add(i), () => s.variantChildren.delete(i)
    }
    addValue(i, s) {
        const l = this.values.get(i);
        s !== l && (l && this.removeValue(i), this.bindToMotionValue(i, s), this.values.set(i, s), this.latestValues[i] = s.get())
    }
    removeValue(i) {
        this.values.delete(i);
        const s = this.valueSubscriptions.get(i);
        s && (s(), this.valueSubscriptions.delete(i)), delete this.latestValues[i], this.removeValueFromRenderState(i, this.renderState)
    }
    hasValue(i) {
        return this.values.has(i)
    }
    getValue(i, s) {
        if (this.props.values && this.props.values[i]) return this.props.values[i];
        let l = this.values.get(i);
        return l === void 0 && s !== void 0 && (l = pi(s === null ? void 0 : s, {
            owner: this
        }), this.addValue(i, l)), l
    }
    readValue(i, s) {
        var l;
        let c = this.latestValues[i] !== void 0 || !this.current ? this.latestValues[i] : (l = this.getBaseTargetFromProps(this.props, i)) !== null && l !== void 0 ? l : this.readValueFromInstance(this.current, i, this.options);
        return c != null && (typeof c == "string" && (Pp(c) || hp(c)) ? c = parseFloat(c) : !Ex(c) && mn.test(s) && (c = xp(i, s)), this.setBaseTarget(i, Ke(c) ? c.get() : c)), Ke(c) ? c.get() : c
    }
    setBaseTarget(i, s) {
        this.baseTarget[i] = s
    }
    getBaseTarget(i) {
        var s;
        const {
            initial: l
        } = this.props;
        let c;
        if (typeof l == "string" || typeof l == "object") {
            const f = Oa(this.props, l, (s = this.presenceContext) === null || s === void 0 ? void 0 : s.custom);
            f && (c = f[i])
        }
        if (l && c !== void 0) return c;
        const d = this.getBaseTargetFromProps(this.props, i);
        return d !== void 0 && !Ke(d) ? d : this.initialValues[i] !== void 0 && c === void 0 ? void 0 : this.baseTarget[i]
    }
    on(i, s) {
        return this.events[i] || (this.events[i] = new qa), this.events[i].add(s)
    }
    notify(i, ...s) {
        this.events[i] && this.events[i].notify(...s)
    }
}
class tm extends Dx {
    constructor() {
        super(...arguments), this.KeyframeResolver = Ep
    }
    sortInstanceNodePosition(i, s) {
        return i.compareDocumentPosition(s) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(i, s) {
        return i.style ? i.style[s] : void 0
    }
    removeValueFromRenderState(i, {
        vars: s,
        style: l
    }) {
        delete s[i], delete l[i]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(), delete this.childSubscription);
        const {
            children: i
        } = this.props;
        Ke(i) && (this.childSubscription = i.on("change", s => {
            this.current && (this.current.textContent = `${s}`)
        }))
    }
}

function Rx(r) {
    return window.getComputedStyle(r)
}
class Mx extends tm {
    constructor() {
        super(...arguments), this.type = "html", this.renderInstance = Wh
    }
    readValueFromInstance(i, s) {
        if (On.has(s)) {
            const l = tu(s);
            return l && l.default || 0
        } else {
            const l = Rx(i),
                c = (zh(s) ? l.getPropertyValue(s) : l[s]) || 0;
            return typeof c == "string" ? c.trim() : c
        }
    }
    measureInstanceViewportBox(i, {
        transformPagePoint: s
    }) {
        return $p(i, s)
    }
    build(i, s, l) {
        za(i, s, l.transformTemplate)
    }
    scrapeMotionValuesFromProps(i, s, l) {
        return $a(i, s, l)
    }
}
class Nx extends tm {
    constructor() {
        super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Me
    }
    getBaseTargetFromProps(i, s) {
        return i[s]
    }
    readValueFromInstance(i, s) {
        if (On.has(s)) {
            const l = tu(s);
            return l && l.default || 0
        }
        return s = $h.has(s) ? s : ja(s), i.getAttribute(s)
    }
    scrapeMotionValuesFromProps(i, s, l) {
        return Gh(i, s, l)
    }
    build(i, s, l) {
        Ba(i, s, this.isSVGTag, l.transformTemplate)
    }
    renderInstance(i, s, l, c) {
        Hh(i, s, l, c)
    }
    mount(i) {
        this.isSVGTag = Wa(i.tagName), super.mount(i)
    }
}
const Lx = (r, i) => Va(r) ? new Nx(i) : new Mx(i, {
        allowProjection: r !== te.Fragment
    }),
    jx = sv({ ...n1,
        ...Px,
        ...fx,
        ...Tx
    }, Lx),
    ua = wy(jx);
var nm = {
        color: void 0,
        size: void 0,
        className: void 0,
        style: void 0,
        attr: void 0
    },
    Eh = _n.createContext && _n.createContext(nm),
    _x = ["attr", "size", "title"];

function Vx(r, i) {
    if (r == null) return {};
    var s = Ox(r, i),
        l, c;
    if (Object.getOwnPropertySymbols) {
        var d = Object.getOwnPropertySymbols(r);
        for (c = 0; c < d.length; c++) l = d[c], !(i.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(r, l) && (s[l] = r[l])
    }
    return s
}

function Ox(r, i) {
    if (r == null) return {};
    var s = {};
    for (var l in r)
        if (Object.prototype.hasOwnProperty.call(r, l)) {
            if (i.indexOf(l) >= 0) continue;
            s[l] = r[l]
        }
    return s
}

function Ks() {
    return Ks = Object.assign ? Object.assign.bind() : function(r) {
        for (var i = 1; i < arguments.length; i++) {
            var s = arguments[i];
            for (var l in s) Object.prototype.hasOwnProperty.call(s, l) && (r[l] = s[l])
        }
        return r
    }, Ks.apply(this, arguments)
}

function Ah(r, i) {
    var s = Object.keys(r);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(r);
        i && (l = l.filter(function(c) {
            return Object.getOwnPropertyDescriptor(r, c).enumerable
        })), s.push.apply(s, l)
    }
    return s
}

function Gs(r) {
    for (var i = 1; i < arguments.length; i++) {
        var s = arguments[i] != null ? arguments[i] : {};
        i % 2 ? Ah(Object(s), !0).forEach(function(l) {
            Fx(r, l, s[l])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(s)) : Ah(Object(s)).forEach(function(l) {
            Object.defineProperty(r, l, Object.getOwnPropertyDescriptor(s, l))
        })
    }
    return r
}

function Fx(r, i, s) {
    return i = Ix(i), i in r ? Object.defineProperty(r, i, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[i] = s, r
}

function Ix(r) {
    var i = zx(r, "string");
    return typeof i == "symbol" ? i : i + ""
}

function zx(r, i) {
    if (typeof r != "object" || !r) return r;
    var s = r[Symbol.toPrimitive];
    if (s !== void 0) {
        var l = s.call(r, i || "default");
        if (typeof l != "object") return l;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (i === "string" ? String : Number)(r)
}

function rm(r) {
    return r && r.map((i, s) => _n.createElement(i.tag, Gs({
        key: s
    }, i.attr), rm(i.child)))
}

function im(r) {
    return i => _n.createElement(Bx, Ks({
        attr: Gs({}, r.attr)
    }, i), rm(r.child))
}

function Bx(r) {
    var i = s => {
        var {
            attr: l,
            size: c,
            title: d
        } = r, f = Vx(r, _x), p = c || s.size || "1em", m;
        return s.className && (m = s.className), r.className && (m = (m ? m + " " : "") + r.className), _n.createElement("svg", Ks({
            stroke: "currentColor",
            fill: "currentColor",
            strokeWidth: "0"
        }, s.attr, l, f, {
            className: m,
            style: Gs(Gs({
                color: r.color || s.color
            }, s.style), r.style),
            height: p,
            width: p,
            xmlns: "http://www.w3.org/2000/svg"
        }), d && _n.createElement("title", null, d), r.children)
    };
    return Eh !== void 0 ? _n.createElement(Eh.Consumer, null, s => i(s)) : i(nm)
}

function Ux(r) {
    return im({
        tag: "svg",
        attr: {
            viewBox: "0 0 448 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
            },
            child: []
        }]
    })(r)
}

function Wx(r) {
    return im({
        tag: "svg",
        attr: {
            viewBox: "0 0 352 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
            },
            child: []
        }]
    })(r)
}

function $x() {
    const [r, i] = te.useState(!1), s = () => {
        i(!r)
    };
    return j.jsxs("div", {
        className: "bg-[#3BAAFC] min-h-screen",
        children: [j.jsxs("header", {
            className: "fixed top-0 w-full bg-white bg-opacity-60 text-black py-4 z-10 logo",
            children: [j.jsxs("nav", {
                className: "mx-auto px-4 lg:px-[100px] flex justify-between items-center",
                children: [j.jsx("p", {
                    className: "logo text-2xl sm:text-3xl lg:text-[60px]",
                    children: "WHALE"
                }), j.jsx("div", {
                    className: "lg:hidden",
                    children: j.jsx("button", {
                        onClick: s,
                        "aria-label": "Toggle Menu",
                        className: "text-black text-2xl",
                        children: r ? j.jsx(Wx, {}) : j.jsx(Ux, {})
                    })
                }), j.jsxs("ul", {
                    className: "hidden lg:flex items-center space-x-4 sm:space-x-6 text-sm sm:text-lg lg:text-[30px]",
                    children: [j.jsx("li", {
                        children: j.jsx("a", {
                            href: "https://t.me/whaleonxrp",
                            className: "hover:underline",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: "TELEGRAM"
                        })
                    }), j.jsx("li", {
                        children: j.jsx("a", {
                            href: "https://x.com/whaleonxrp",
                            className: "hover:underline",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: "X"
                        })
                    }), j.jsx("li", {
                        children: j.jsx("a", {
                            href: "https://dexscreener.com/xrpl/5748414c45000000000000000000000000000000.rh2aarcxtxzebf6dprzz2pygqjjancnkyy_xrp",
                            className: "hover:underline",
                            children: "DEXSCREENER"
                        })
                    })]
                }), j.jsx("a", {
                    href: "https://firstledger.net/token/rH2AarcXtxzEbf6DprZz2PYGQJjANcnkYy/5748414C45000000000000000000000000000000",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: j.jsx("button", {
                        className: "primaryBG rounded-full cursor-pointer px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-lg text-white hidden lg:block",
                        children: j.jsx("p", {
                            className: "logo",
                            children: "BUY ON"
                        })
                    })
                })]
            }), r && j.jsx(ua.div, {
                initial: {
                    opacity: 0,
                    y: -20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                exit: {
                    opacity: 0,
                    y: -20
                },
                transition: {
                    duration: .3
                },
                className: "lg:hidden absolute top-full left-0 w-full bg-white shadow-lg z-20",
                children: j.jsxs("ul", {
                    className: "flex flex-col items-center space-y-4 py-4 text-sm sm:text-lg lg:text-[30px]",
                    children: [j.jsx("li", {
                        children: j.jsx("a", {
                            href: "https://t.me/whaleonxrp",
                            className: "hover:underline",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            onClick: s,
                            children: "TELEGRAM"
                        })
                    }), j.jsx("li", {
                        children: j.jsx("a", {
                            href: "https://x.com/whaleonxrp",
                            className: "hover:underline",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            onClick: s,
                            children: "X"
                        })
                    }), j.jsx("li", {
                        children: j.jsx("a", {
                            href: "https://dexscreener.com/xrpl/5748414c45000000000000000000000000000000.rh2aarcxtxzebf6dprzz2pygqjjancnkyy_xrp",
                            className: "hover:underline",
                            onClick: s,
                            children: "DEXSCREENER"
                        })
                    }), j.jsx("li", {
                        children: j.jsx("a", {
                            href: "https://firstledger.net/token/rH2AarcXtxzEbf6DprZz2PYGQJjANcnkYy/5748414C45000000000000000000000000000000",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: j.jsx("button", {
                                className: "primaryBG rounded-full cursor-pointer px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-lg text-white",
                                onClick: s,
                                children: "BUY ON"
                            })
                        })
                    })]
                })
            })]
        }), j.jsxs("section", {
            id: "hero",
            className: "min-h-screen flex flex-col lg:flex-row items-center justify-between w-full px-4 lg:px-[80px] text-white",
            children: [j.jsxs(ua.div, {
                initial: {
                    opacity: 0,
                    scale: .8
                },
                animate: {
                    opacity: 1,
                    scale: 1
                },
                transition: {
                    duration: 1
                },
                className: "space-y-6 text-center lg:text-left",
                children: [j.jsx("h1", {
                    className: "text-4xl sm:text-5xl lg:text-7xl font-bold logo max-w-[600px] mx-auto lg:mx-0 mt-[100px] lg:mt-0",
                    children: "THE WHALE RISES AGAIN!"
                }), j.jsx("p", {
                    className: "text-base sm:text-lg lg:text-2xl montserrat max-w-[600px] mx-auto lg:mx-0",
                    children: "$WHALE is here to be the ultimate symbol of the resilience of XRP in the face of adversity."
                })]
            }), j.jsx("div", {
                className: "w-full lg:w-1/2 lg:mt-0 ",
                children: j.jsx("img", {
                    src: "/whale.jpg",
                    alt: "Whale",
                    className: "w-full rounded-lg -mt-[50px] lg:mt-0"
                })
            })]
        }), j.jsx("section", {
            className: "w-full overflow-hidden py-10 bg-white transform rotate-2",
            children: j.jsxs("div", {
                className: "flex animate-marquee space-x-8 lg:space-x-[100px]",
                children: [j.jsxs("div", {
                    className: "flex items-center space-x-2",
                    children: [j.jsx("img", {
                        src: "/coinmarket.png",
                        alt: "Image 1",
                        className: "w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-full"
                    }), j.jsx("p", {
                        className: "text-sm sm:text-lg",
                        children: "Coinmarketcap"
                    })]
                }), j.jsxs("div", {
                    className: "flex items-center space-x-2",
                    children: [j.jsx("img", {
                        src: "/dextools.png",
                        alt: "Image 2",
                        className: "w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-full"
                    }), j.jsx("p", {
                        className: "text-sm sm:text-lg",
                        children: "Dextools"
                    })]
                }), j.jsxs("div", {
                    className: "flex items-center space-x-2",
                    children: [j.jsx("img", {
                        src: "/dexscreener.png",
                        alt: "Image 3",
                        className: "w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-full"
                    }), j.jsx("p", {
                        className: "text-sm sm:text-lg",
                        children: "Dexscreener"
                    })]
                })]
            })
        }), j.jsx("style", {
            children: `
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 20s linear infinite;
        }
      `
        }), j.jsx("section", {
            id: "about",
            className: "min-h-screen flex items-center justify-center text-center text-white px-4 py-10 primaryBG",
            children: j.jsxs(ua.div, {
                initial: {
                    opacity: 0,
                    y: 50
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 1
                },
                className: "max-w-3xl space-y-6",
                children: [j.jsx("div", {
                    className: "relative group",
                    children: j.jsx("img", {
                        src: "/whale banner.jpg",
                        alt: "About Us",
                        className: "transition-transform duration-300 transform group-hover:scale-110 rounded-2xl shadow-lg"
                    })
                }), j.jsx("p", {
                    className: "text-sm lg:text-[30px] rounded-lg",
                    children: "Throughout its journey, XRP has conquered the tides of adversity, weathering challenges that many believed would sink it. The SEC lawsuit was just the latest storm in its path. For many, it seemed like the final wave—but they underestimated the power of resilience. Now, as XRP rises triumphantly, a new symbol emerges alongside it: $WHALE, the embodiment of dominance, strength, and unstoppable momentum in the crypto ocean. 🌊"
                })]
            })
        }), j.jsxs("section", {
            className: "w-full overflow-hidden py-10 primaryBG text-white",
            children: [j.jsx("h2", {
                className: "text-3xl lg:text-[80px] font-bold text-center mb-8 logo",
                children: "ENDLESS MEMES"
            }), j.jsxs("div", {
                className: "space-y-8",
                children: [j.jsxs("div", {
                    className: "flex animate-marquee-right space-x-8 lg:space-x-[100px]",
                    children: [j.jsx("img", {
                        src: "/whale 1.jpg",
                        alt: "Meme 1",
                        className: "w-32 h-32 lg:w-[300px] lg:h-[300px] object-cover rounded-[12px]"
                    }), j.jsx("img", {
                        src: "/whale 2.jpg",
                        alt: "Meme 2",
                        className: "w-32 h-32 lg:w-[300px] lg:h-[300px] object-cover rounded-[12px]"
                    }), j.jsx("img", {
                        src: "/whale 3.jpg",
                        alt: "Meme 3",
                        className: "w-32 h-32 lg:w-[300px] lg:h-[300px] object-cover rounded-[12px]"
                    }), j.jsx("img", {
                        src: "/whale 5.jpg",
                        alt: "Meme 5",
                        className: "w-32 h-32 lg:w-[300px] lg:h-[300px] object-cover rounded-[12px]"
                    }), j.jsx("img", {
                        src: "/whale 1.jpg",
                        alt: "Meme 6",
                        className: "w-32 h-32 lg:w-[300px] lg:h-[300px] object-cover rounded-[12px]"
                    })]
                }), j.jsxs("div", {
                    className: "flex animate-marquee-left space-x-8 lg:space-x-[100px]",
                    children: [j.jsx("img", {
                        src: "/whale 4.jpg",
                        alt: "Meme 4",
                        className: "w-32 h-32 lg:w-[300px] lg:h-[300px] object-cover rounded-[12px]"
                    }), j.jsx("img", {
                        src: "/whale 5.jpg",
                        alt: "Meme 5",
                        className: "w-32 h-32 lg:w-[300px] lg:h-[300px] object-cover rounded-[12px]"
                    }), j.jsx("img", {
                        src: "/whale 1.jpg",
                        alt: "Meme 6",
                        className: "w-32 h-32 lg:w-[300px] lg:h-[300px] object-cover rounded-[12px]"
                    }), j.jsx("img", {
                        src: "/whale 1.jpg",
                        alt: "Meme 1",
                        className: "w-32 h-32 lg:w-[300px] lg:h-[300px] object-cover rounded-[12px]"
                    }), j.jsx("img", {
                        src: "/whale 2.jpg",
                        alt: "Meme 2",
                        className: "w-32 h-32 lg:w-[300px] lg:h-[300px] object-cover rounded-[12px]"
                    })]
                })]
            })]
        }), j.jsx("style", {
            children: `
        @keyframes marquee-right {
          0% {
        transform: translateX(-100%);
          }
          100% {
        transform: translateX(100%);
          }
        }
        @keyframes marquee-left {
          0% {
        transform: translateX(100%);
          }
          100% {
        transform: translateX(-100%);
          }
        }
        .animate-marquee-right {
          display: flex;
          animation: marquee-right 12s linear infinite;
        }
        .animate-marquee-left {
          display: flex;
          animation: marquee-left 12s linear infinite;
        }
      `
        }), j.jsxs("section", {
            className: "w-full py-[150px] primaryBG text-black ",
            children: [j.jsx("h2", {
                className: "text-3xl lg:text-[80px] font-bold text-center mb-8 logo text-white",
                children: "HOW TO BUY"
            }), j.jsxs("div", {
                className: "flex flex-col lg:flex-row justify-around items-center space-y-8 lg:space-y-0 lg:space-x-8",
                children: [j.jsxs("div", {
                    className: "flex flex-col items-center space-y-4",
                    children: [j.jsx("div", {
                        className: "text-4xl lg:text-[60px] logo font-bold",
                        children: "1"
                    }), j.jsx("p", {
                        className: "text-center max-w-xs lg:text-[30px]",
                        children: "Buy XRP on CEX or bridge for XRP on changenow or similar"
                    }), j.jsx("button", {
                        className: "bg-[#fff] rounded-full cursor-pointer px-4 py-2 text-[#3BAAFC] logo",
                        children: "BRIDGE XRP"
                    })]
                }), j.jsxs("div", {
                    className: "flex flex-col items-center space-y-4",
                    children: [j.jsx("div", {
                        className: "text-4xl lg:text-[60px] logo font-bold",
                        children: "2"
                    }), j.jsx("p", {
                        className: "text-center max-w-xs lg:text-[30px]",
                        children: "Create your wallet on First Ledger, either the TG bot or the web version."
                    }), j.jsx("button", {
                        className: "bg-[#fff] rounded-full cursor-pointer px-4 py-2 text-[#3BAAFC] logo",
                        children: "CREATE WALLET"
                    })]
                }), j.jsxs("div", {
                    className: "flex flex-col items-center space-y-4",
                    children: [j.jsx("div", {
                        className: "text-4xl lg:text-[60px] logo font-bold",
                        children: "3"
                    }), j.jsxs("p", {
                        className: "text-center max-w-xs lg:text-[30px] w-[300px]",
                        children: ["Send your XRP to your new wallet and ape:", j.jsx("span", {
                            className: "text-[14px]",
                            children: "rH2AarcXtxzEbf6DprZz2PYGQJjANcnkYy"
                        })]
                    }), j.jsx("a", {
                        href: "https://firstledger.net/token/rH2AarcXtxzEbf6DprZz2PYGQJjANcnkYy/5748414C45000000000000000000000000000000",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: j.jsx("button", {
                            className: "bg-[#fff] rounded-full cursor-pointer px-4 py-2 text-[#3BAAFC] logo",
                            children: "BUY NOW!"
                        })
                    })]
                })]
            })]
        }), j.jsxs("footer", {
            className: "primaryBG text-white py-6 text-center text-sm sm:text-base",
            children: [j.jsx("div", {
                className: "flex justify-center items-center space-x-4 mb-[100px]",
                children: j.jsx("img", {
                    src: "/whale banner.jpg",
                    alt: "",
                    className: ""
                })
            }), j.jsx("p", {
                children: "© 2025 $WHALE. All rights reserved."
            })]
        })]
    })
}
uy.createRoot(document.getElementById("root")).render(j.jsx(te.StrictMode, {
    children: j.jsx($x, {})
}));