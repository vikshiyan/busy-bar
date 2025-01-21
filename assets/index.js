(function () {
  const H = document.createElement('link').relList;
  if (H && H.supports && H.supports('modulepreload')) return;
  for (const B of document.querySelectorAll('link[rel="modulepreload"]')) ge(B);
  new MutationObserver((B) => {
    for (const X of B)
      if (X.type === 'childList')
        for (const fe of X.addedNodes)
          fe.tagName === 'LINK' && fe.rel === 'modulepreload' && ge(fe);
  }).observe(document, {childList: !0, subtree: !0});
  function h(B) {
    const X = {};
    return (
      B.integrity && (X.integrity = B.integrity),
      B.referrerPolicy && (X.referrerPolicy = B.referrerPolicy),
      B.crossOrigin === 'use-credentials'
        ? (X.credentials = 'include')
        : B.crossOrigin === 'anonymous'
          ? (X.credentials = 'omit')
          : (X.credentials = 'same-origin'),
      X
    );
  }
  function ge(B) {
    if (B.ep) return;
    B.ep = !0;
    const X = h(B);
    fetch(B.href, X);
  }
})();
var Su = {exports: {}},
  yr = {},
  Nu = {exports: {}},
  O = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Na;
function Lf() {
  if (Na) return O;
  Na = 1;
  var L = Symbol.for('react.element'),
    H = Symbol.for('react.portal'),
    h = Symbol.for('react.fragment'),
    ge = Symbol.for('react.strict_mode'),
    B = Symbol.for('react.profiler'),
    X = Symbol.for('react.provider'),
    fe = Symbol.for('react.context'),
    de = Symbol.for('react.forward_ref'),
    W = Symbol.for('react.suspense'),
    Ee = Symbol.for('react.memo'),
    _e = Symbol.for('react.lazy'),
    te = Symbol.iterator;
  function J(c) {
    return c === null || typeof c != 'object'
      ? null
      : ((c = (te && c[te]) || c['@@iterator']),
        typeof c == 'function' ? c : null);
  }
  var Qe = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    We = Object.assign,
    q = {};
  function $(c, y, M) {
    (this.props = c),
      (this.context = y),
      (this.refs = q),
      (this.updater = M || Qe);
  }
  ($.prototype.isReactComponent = {}),
    ($.prototype.setState = function (c, y) {
      if (typeof c != 'object' && typeof c != 'function' && c != null)
        throw Error(
          'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
        );
      this.updater.enqueueSetState(this, c, y, 'setState');
    }),
    ($.prototype.forceUpdate = function (c) {
      this.updater.enqueueForceUpdate(this, c, 'forceUpdate');
    });
  function vt() {}
  vt.prototype = $.prototype;
  function st(c, y, M) {
    (this.props = c),
      (this.context = y),
      (this.refs = q),
      (this.updater = M || Qe);
  }
  var qe = (st.prototype = new vt());
  (qe.constructor = st), We(qe, $.prototype), (qe.isPureReactComponent = !0);
  var we = Array.isArray,
    be = Object.prototype.hasOwnProperty,
    Ce = {current: null},
    ze = {key: !0, ref: !0, __self: !0, __source: !0};
  function $e(c, y, M) {
    var D,
      I = {},
      U = null,
      K = null;
    if (y != null)
      for (D in (y.ref !== void 0 && (K = y.ref),
      y.key !== void 0 && (U = '' + y.key),
      y))
        be.call(y, D) && !ze.hasOwnProperty(D) && (I[D] = y[D]);
    var V = arguments.length - 2;
    if (V === 1) I.children = M;
    else if (1 < V) {
      for (var b = Array(V), Ue = 0; Ue < V; Ue++) b[Ue] = arguments[Ue + 2];
      I.children = b;
    }
    if (c && c.defaultProps)
      for (D in ((V = c.defaultProps), V)) I[D] === void 0 && (I[D] = V[D]);
    return {$$typeof: L, type: c, key: U, ref: K, props: I, _owner: Ce.current};
  }
  function Ct(c, y) {
    return {
      $$typeof: L,
      type: c.type,
      key: y,
      ref: c.ref,
      props: c.props,
      _owner: c._owner,
    };
  }
  function yt(c) {
    return typeof c == 'object' && c !== null && c.$$typeof === L;
  }
  function Kt(c) {
    var y = {'=': '=0', ':': '=2'};
    return (
      '$' +
      c.replace(/[=:]/g, function (M) {
        return y[M];
      })
    );
  }
  var at = /\/+/g;
  function Ie(c, y) {
    return typeof c == 'object' && c !== null && c.key != null
      ? Kt('' + c.key)
      : y.toString(36);
  }
  function et(c, y, M, D, I) {
    var U = typeof c;
    (U === 'undefined' || U === 'boolean') && (c = null);
    var K = !1;
    if (c === null) K = !0;
    else
      switch (U) {
        case 'string':
        case 'number':
          K = !0;
          break;
        case 'object':
          switch (c.$$typeof) {
            case L:
            case H:
              K = !0;
          }
      }
    if (K)
      return (
        (K = c),
        (I = I(K)),
        (c = D === '' ? '.' + Ie(K, 0) : D),
        we(I)
          ? ((M = ''),
            c != null && (M = c.replace(at, '$&/') + '/'),
            et(I, y, M, '', function (Ue) {
              return Ue;
            }))
          : I != null &&
            (yt(I) &&
              (I = Ct(
                I,
                M +
                  (!I.key || (K && K.key === I.key)
                    ? ''
                    : ('' + I.key).replace(at, '$&/') + '/') +
                  c,
              )),
            y.push(I)),
        1
      );
    if (((K = 0), (D = D === '' ? '.' : D + ':'), we(c)))
      for (var V = 0; V < c.length; V++) {
        U = c[V];
        var b = D + Ie(U, V);
        K += et(U, y, M, b, I);
      }
    else if (((b = J(c)), typeof b == 'function'))
      for (c = b.call(c), V = 0; !(U = c.next()).done; )
        (U = U.value), (b = D + Ie(U, V++)), (K += et(U, y, M, b, I));
    else if (U === 'object')
      throw (
        ((y = String(c)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (y === '[object Object]'
              ? 'object with keys {' + Object.keys(c).join(', ') + '}'
              : y) +
            '). If you meant to render a collection of children, use an array instead.',
        ))
      );
    return K;
  }
  function ct(c, y, M) {
    if (c == null) return c;
    var D = [],
      I = 0;
    return (
      et(c, D, '', '', function (U) {
        return y.call(M, U, I++);
      }),
      D
    );
  }
  function Te(c) {
    if (c._status === -1) {
      var y = c._result;
      (y = y()),
        y.then(
          function (M) {
            (c._status === 0 || c._status === -1) &&
              ((c._status = 1), (c._result = M));
          },
          function (M) {
            (c._status === 0 || c._status === -1) &&
              ((c._status = 2), (c._result = M));
          },
        ),
        c._status === -1 && ((c._status = 0), (c._result = y));
    }
    if (c._status === 1) return c._result.default;
    throw c._result;
  }
  var le = {current: null},
    x = {transition: null},
    T = {
      ReactCurrentDispatcher: le,
      ReactCurrentBatchConfig: x,
      ReactCurrentOwner: Ce,
    };
  function N() {
    throw Error('act(...) is not supported in production builds of React.');
  }
  return (
    (O.Children = {
      map: ct,
      forEach: function (c, y, M) {
        ct(
          c,
          function () {
            y.apply(this, arguments);
          },
          M,
        );
      },
      count: function (c) {
        var y = 0;
        return (
          ct(c, function () {
            y++;
          }),
          y
        );
      },
      toArray: function (c) {
        return (
          ct(c, function (y) {
            return y;
          }) || []
        );
      },
      only: function (c) {
        if (!yt(c))
          throw Error(
            'React.Children.only expected to receive a single React element child.',
          );
        return c;
      },
    }),
    (O.Component = $),
    (O.Fragment = h),
    (O.Profiler = B),
    (O.PureComponent = st),
    (O.StrictMode = ge),
    (O.Suspense = W),
    (O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T),
    (O.act = N),
    (O.cloneElement = function (c, y, M) {
      if (c == null)
        throw Error(
          'React.cloneElement(...): The argument must be a React element, but you passed ' +
            c +
            '.',
        );
      var D = We({}, c.props),
        I = c.key,
        U = c.ref,
        K = c._owner;
      if (y != null) {
        if (
          (y.ref !== void 0 && ((U = y.ref), (K = Ce.current)),
          y.key !== void 0 && (I = '' + y.key),
          c.type && c.type.defaultProps)
        )
          var V = c.type.defaultProps;
        for (b in y)
          be.call(y, b) &&
            !ze.hasOwnProperty(b) &&
            (D[b] = y[b] === void 0 && V !== void 0 ? V[b] : y[b]);
      }
      var b = arguments.length - 2;
      if (b === 1) D.children = M;
      else if (1 < b) {
        V = Array(b);
        for (var Ue = 0; Ue < b; Ue++) V[Ue] = arguments[Ue + 2];
        D.children = V;
      }
      return {$$typeof: L, type: c.type, key: I, ref: U, props: D, _owner: K};
    }),
    (O.createContext = function (c) {
      return (
        (c = {
          $$typeof: fe,
          _currentValue: c,
          _currentValue2: c,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (c.Provider = {$$typeof: X, _context: c}),
        (c.Consumer = c)
      );
    }),
    (O.createElement = $e),
    (O.createFactory = function (c) {
      var y = $e.bind(null, c);
      return (y.type = c), y;
    }),
    (O.createRef = function () {
      return {current: null};
    }),
    (O.forwardRef = function (c) {
      return {$$typeof: de, render: c};
    }),
    (O.isValidElement = yt),
    (O.lazy = function (c) {
      return {$$typeof: _e, _payload: {_status: -1, _result: c}, _init: Te};
    }),
    (O.memo = function (c, y) {
      return {$$typeof: Ee, type: c, compare: y === void 0 ? null : y};
    }),
    (O.startTransition = function (c) {
      var y = x.transition;
      x.transition = {};
      try {
        c();
      } finally {
        x.transition = y;
      }
    }),
    (O.unstable_act = N),
    (O.useCallback = function (c, y) {
      return le.current.useCallback(c, y);
    }),
    (O.useContext = function (c) {
      return le.current.useContext(c);
    }),
    (O.useDebugValue = function () {}),
    (O.useDeferredValue = function (c) {
      return le.current.useDeferredValue(c);
    }),
    (O.useEffect = function (c, y) {
      return le.current.useEffect(c, y);
    }),
    (O.useId = function () {
      return le.current.useId();
    }),
    (O.useImperativeHandle = function (c, y, M) {
      return le.current.useImperativeHandle(c, y, M);
    }),
    (O.useInsertionEffect = function (c, y) {
      return le.current.useInsertionEffect(c, y);
    }),
    (O.useLayoutEffect = function (c, y) {
      return le.current.useLayoutEffect(c, y);
    }),
    (O.useMemo = function (c, y) {
      return le.current.useMemo(c, y);
    }),
    (O.useReducer = function (c, y, M) {
      return le.current.useReducer(c, y, M);
    }),
    (O.useRef = function (c) {
      return le.current.useRef(c);
    }),
    (O.useState = function (c) {
      return le.current.useState(c);
    }),
    (O.useSyncExternalStore = function (c, y, M) {
      return le.current.useSyncExternalStore(c, y, M);
    }),
    (O.useTransition = function () {
      return le.current.useTransition();
    }),
    (O.version = '18.3.1'),
    O
  );
}
var Ea;
function Pu() {
  return Ea || ((Ea = 1), (Nu.exports = Lf())), Nu.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ca;
function Rf() {
  if (Ca) return yr;
  Ca = 1;
  var L = Pu(),
    H = Symbol.for('react.element'),
    h = Symbol.for('react.fragment'),
    ge = Object.prototype.hasOwnProperty,
    B = L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    X = {key: !0, ref: !0, __self: !0, __source: !0};
  function fe(de, W, Ee) {
    var _e,
      te = {},
      J = null,
      Qe = null;
    Ee !== void 0 && (J = '' + Ee),
      W.key !== void 0 && (J = '' + W.key),
      W.ref !== void 0 && (Qe = W.ref);
    for (_e in W) ge.call(W, _e) && !X.hasOwnProperty(_e) && (te[_e] = W[_e]);
    if (de && de.defaultProps)
      for (_e in ((W = de.defaultProps), W))
        te[_e] === void 0 && (te[_e] = W[_e]);
    return {
      $$typeof: H,
      type: de,
      key: J,
      ref: Qe,
      props: te,
      _owner: B.current,
    };
  }
  return (yr.Fragment = h), (yr.jsx = fe), (yr.jsxs = fe), yr;
}
var ja;
function Mf() {
  return ja || ((ja = 1), (Su.exports = Rf())), Su.exports;
}
var d = Mf(),
  Ma = Pu(),
  zl = {},
  Eu = {exports: {}},
  Fe = {},
  Cu = {exports: {}},
  ju = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pa;
function Of() {
  return (
    Pa ||
      ((Pa = 1),
      (function (L) {
        function H(x, T) {
          var N = x.length;
          x.push(T);
          e: for (; 0 < N; ) {
            var c = (N - 1) >>> 1,
              y = x[c];
            if (0 < B(y, T)) (x[c] = T), (x[N] = y), (N = c);
            else break e;
          }
        }
        function h(x) {
          return x.length === 0 ? null : x[0];
        }
        function ge(x) {
          if (x.length === 0) return null;
          var T = x[0],
            N = x.pop();
          if (N !== T) {
            x[0] = N;
            e: for (var c = 0, y = x.length, M = y >>> 1; c < M; ) {
              var D = 2 * (c + 1) - 1,
                I = x[D],
                U = D + 1,
                K = x[U];
              if (0 > B(I, N))
                U < y && 0 > B(K, I)
                  ? ((x[c] = K), (x[U] = N), (c = U))
                  : ((x[c] = I), (x[D] = N), (c = D));
              else if (U < y && 0 > B(K, N)) (x[c] = K), (x[U] = N), (c = U);
              else break e;
            }
          }
          return T;
        }
        function B(x, T) {
          var N = x.sortIndex - T.sortIndex;
          return N !== 0 ? N : x.id - T.id;
        }
        if (
          typeof performance == 'object' &&
          typeof performance.now == 'function'
        ) {
          var X = performance;
          L.unstable_now = function () {
            return X.now();
          };
        } else {
          var fe = Date,
            de = fe.now();
          L.unstable_now = function () {
            return fe.now() - de;
          };
        }
        var W = [],
          Ee = [],
          _e = 1,
          te = null,
          J = 3,
          Qe = !1,
          We = !1,
          q = !1,
          $ = typeof setTimeout == 'function' ? setTimeout : null,
          vt = typeof clearTimeout == 'function' ? clearTimeout : null,
          st = typeof setImmediate < 'u' ? setImmediate : null;
        typeof navigator < 'u' &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function qe(x) {
          for (var T = h(Ee); T !== null; ) {
            if (T.callback === null) ge(Ee);
            else if (T.startTime <= x)
              ge(Ee), (T.sortIndex = T.expirationTime), H(W, T);
            else break;
            T = h(Ee);
          }
        }
        function we(x) {
          if (((q = !1), qe(x), !We))
            if (h(W) !== null) (We = !0), Te(be);
            else {
              var T = h(Ee);
              T !== null && le(we, T.startTime - x);
            }
        }
        function be(x, T) {
          (We = !1), q && ((q = !1), vt($e), ($e = -1)), (Qe = !0);
          var N = J;
          try {
            for (
              qe(T), te = h(W);
              te !== null && (!(te.expirationTime > T) || (x && !Kt()));

            ) {
              var c = te.callback;
              if (typeof c == 'function') {
                (te.callback = null), (J = te.priorityLevel);
                var y = c(te.expirationTime <= T);
                (T = L.unstable_now()),
                  typeof y == 'function'
                    ? (te.callback = y)
                    : te === h(W) && ge(W),
                  qe(T);
              } else ge(W);
              te = h(W);
            }
            if (te !== null) var M = !0;
            else {
              var D = h(Ee);
              D !== null && le(we, D.startTime - T), (M = !1);
            }
            return M;
          } finally {
            (te = null), (J = N), (Qe = !1);
          }
        }
        var Ce = !1,
          ze = null,
          $e = -1,
          Ct = 5,
          yt = -1;
        function Kt() {
          return !(L.unstable_now() - yt < Ct);
        }
        function at() {
          if (ze !== null) {
            var x = L.unstable_now();
            yt = x;
            var T = !0;
            try {
              T = ze(!0, x);
            } finally {
              T ? Ie() : ((Ce = !1), (ze = null));
            }
          } else Ce = !1;
        }
        var Ie;
        if (typeof st == 'function')
          Ie = function () {
            st(at);
          };
        else if (typeof MessageChannel < 'u') {
          var et = new MessageChannel(),
            ct = et.port2;
          (et.port1.onmessage = at),
            (Ie = function () {
              ct.postMessage(null);
            });
        } else
          Ie = function () {
            $(at, 0);
          };
        function Te(x) {
          (ze = x), Ce || ((Ce = !0), Ie());
        }
        function le(x, T) {
          $e = $(function () {
            x(L.unstable_now());
          }, T);
        }
        (L.unstable_IdlePriority = 5),
          (L.unstable_ImmediatePriority = 1),
          (L.unstable_LowPriority = 4),
          (L.unstable_NormalPriority = 3),
          (L.unstable_Profiling = null),
          (L.unstable_UserBlockingPriority = 2),
          (L.unstable_cancelCallback = function (x) {
            x.callback = null;
          }),
          (L.unstable_continueExecution = function () {
            We || Qe || ((We = !0), Te(be));
          }),
          (L.unstable_forceFrameRate = function (x) {
            0 > x || 125 < x
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
                )
              : (Ct = 0 < x ? Math.floor(1e3 / x) : 5);
          }),
          (L.unstable_getCurrentPriorityLevel = function () {
            return J;
          }),
          (L.unstable_getFirstCallbackNode = function () {
            return h(W);
          }),
          (L.unstable_next = function (x) {
            switch (J) {
              case 1:
              case 2:
              case 3:
                var T = 3;
                break;
              default:
                T = J;
            }
            var N = J;
            J = T;
            try {
              return x();
            } finally {
              J = N;
            }
          }),
          (L.unstable_pauseExecution = function () {}),
          (L.unstable_requestPaint = function () {}),
          (L.unstable_runWithPriority = function (x, T) {
            switch (x) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                x = 3;
            }
            var N = J;
            J = x;
            try {
              return T();
            } finally {
              J = N;
            }
          }),
          (L.unstable_scheduleCallback = function (x, T, N) {
            var c = L.unstable_now();
            switch (
              (typeof N == 'object' && N !== null
                ? ((N = N.delay),
                  (N = typeof N == 'number' && 0 < N ? c + N : c))
                : (N = c),
              x)
            ) {
              case 1:
                var y = -1;
                break;
              case 2:
                y = 250;
                break;
              case 5:
                y = 1073741823;
                break;
              case 4:
                y = 1e4;
                break;
              default:
                y = 5e3;
            }
            return (
              (y = N + y),
              (x = {
                id: _e++,
                callback: T,
                priorityLevel: x,
                startTime: N,
                expirationTime: y,
                sortIndex: -1,
              }),
              N > c
                ? ((x.sortIndex = N),
                  H(Ee, x),
                  h(W) === null &&
                    x === h(Ee) &&
                    (q ? (vt($e), ($e = -1)) : (q = !0), le(we, N - c)))
                : ((x.sortIndex = y), H(W, x), We || Qe || ((We = !0), Te(be))),
              x
            );
          }),
          (L.unstable_shouldYield = Kt),
          (L.unstable_wrapCallback = function (x) {
            var T = J;
            return function () {
              var N = J;
              J = T;
              try {
                return x.apply(this, arguments);
              } finally {
                J = N;
              }
            };
          });
      })(ju)),
    ju
  );
}
var za;
function Df() {
  return za || ((za = 1), (Cu.exports = Of())), Cu.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ta;
function Ff() {
  if (Ta) return Fe;
  Ta = 1;
  var L = Pu(),
    H = Df();
  function h(e) {
    for (
      var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += '&args[]=' + encodeURIComponent(arguments[n]);
    return (
      'Minified React error #' +
      e +
      '; visit ' +
      t +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  var ge = new Set(),
    B = {};
  function X(e, t) {
    fe(e, t), fe(e + 'Capture', t);
  }
  function fe(e, t) {
    for (B[e] = t, e = 0; e < t.length; e++) ge.add(t[e]);
  }
  var de = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    W = Object.prototype.hasOwnProperty,
    Ee =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    _e = {},
    te = {};
  function J(e) {
    return W.call(te, e)
      ? !0
      : W.call(_e, e)
        ? !1
        : Ee.test(e)
          ? (te[e] = !0)
          : ((_e[e] = !0), !1);
  }
  function Qe(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case 'function':
      case 'symbol':
        return !0;
      case 'boolean':
        return r
          ? !1
          : n !== null
            ? !n.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)),
              e !== 'data-' && e !== 'aria-');
      default:
        return !1;
    }
  }
  function We(e, t, n, r) {
    if (t === null || typeof t > 'u' || Qe(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function q(e, t, n, r, l, i, u) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = i),
      (this.removeEmptyString = u);
  }
  var $ = {};
  'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
      $[e] = new q(e, 0, !1, e, null, !1, !1);
    }),
    [
      ['acceptCharset', 'accept-charset'],
      ['className', 'class'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
      var t = e[0];
      $[t] = new q(t, 1, !1, e[1], null, !1, !1);
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(
      function (e) {
        $[e] = new q(e, 2, !1, e.toLowerCase(), null, !1, !1);
      },
    ),
    [
      'autoReverse',
      'externalResourcesRequired',
      'focusable',
      'preserveAlpha',
    ].forEach(function (e) {
      $[e] = new q(e, 2, !1, e, null, !1, !1);
    }),
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
      .split(' ')
      .forEach(function (e) {
        $[e] = new q(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
      $[e] = new q(e, 3, !0, e, null, !1, !1);
    }),
    ['capture', 'download'].forEach(function (e) {
      $[e] = new q(e, 4, !1, e, null, !1, !1);
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (e) {
      $[e] = new q(e, 6, !1, e, null, !1, !1);
    }),
    ['rowSpan', 'start'].forEach(function (e) {
      $[e] = new q(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var vt = /[\-:]([a-z])/g;
  function st(e) {
    return e[1].toUpperCase();
  }
  'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (e) {
      var t = e.replace(vt, st);
      $[t] = new q(t, 1, !1, e, null, !1, !1);
    }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
      .split(' ')
      .forEach(function (e) {
        var t = e.replace(vt, st);
        $[t] = new q(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
      }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
      var t = e.replace(vt, st);
      $[t] = new q(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
      $[e] = new q(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    ($.xlinkHref = new q(
      'xlinkHref',
      1,
      !1,
      'xlink:href',
      'http://www.w3.org/1999/xlink',
      !0,
      !1,
    )),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
      $[e] = new q(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function qe(e, t, n, r) {
    var l = $.hasOwnProperty(t) ? $[t] : null;
    (l !== null
      ? l.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== 'o' && t[0] !== 'O') ||
        (t[1] !== 'n' && t[1] !== 'N')) &&
      (We(t, n, l, r) && (n = null),
      r || l === null
        ? J(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
        : l.mustUseProperty
          ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : '') : n)
          : ((t = l.attributeName),
            (r = l.attributeNamespace),
            n === null
              ? e.removeAttribute(t)
              : ((l = l.type),
                (n = l === 3 || (l === 4 && n === !0) ? '' : '' + n),
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var we = L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    be = Symbol.for('react.element'),
    Ce = Symbol.for('react.portal'),
    ze = Symbol.for('react.fragment'),
    $e = Symbol.for('react.strict_mode'),
    Ct = Symbol.for('react.profiler'),
    yt = Symbol.for('react.provider'),
    Kt = Symbol.for('react.context'),
    at = Symbol.for('react.forward_ref'),
    Ie = Symbol.for('react.suspense'),
    et = Symbol.for('react.suspense_list'),
    ct = Symbol.for('react.memo'),
    Te = Symbol.for('react.lazy'),
    le = Symbol.for('react.offscreen'),
    x = Symbol.iterator;
  function T(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (x && e[x]) || e['@@iterator']),
        typeof e == 'function' ? e : null);
  }
  var N = Object.assign,
    c;
  function y(e) {
    if (c === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        c = (t && t[1]) || '';
      }
    return (
      `
` +
      c +
      e
    );
  }
  var M = !1;
  function D(e, t) {
    if (!e || M) return '';
    M = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, 'props', {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == 'object' && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (m) {
            var r = m;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (m) {
            r = m;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (m) {
          r = m;
        }
        e();
      }
    } catch (m) {
      if (m && r && typeof m.stack == 'string') {
        for (
          var l = m.stack.split(`
`),
            i = r.stack.split(`
`),
            u = l.length - 1,
            o = i.length - 1;
          1 <= u && 0 <= o && l[u] !== i[o];

        )
          o--;
        for (; 1 <= u && 0 <= o; u--, o--)
          if (l[u] !== i[o]) {
            if (u !== 1 || o !== 1)
              do
                if ((u--, o--, 0 > o || l[u] !== i[o])) {
                  var s =
                    `
` + l[u].replace(' at new ', ' at ');
                  return (
                    e.displayName &&
                      s.includes('<anonymous>') &&
                      (s = s.replace('<anonymous>', e.displayName)),
                    s
                  );
                }
              while (1 <= u && 0 <= o);
            break;
          }
      }
    } finally {
      (M = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : '') ? y(e) : '';
  }
  function I(e) {
    switch (e.tag) {
      case 5:
        return y(e.type);
      case 16:
        return y('Lazy');
      case 13:
        return y('Suspense');
      case 19:
        return y('SuspenseList');
      case 0:
      case 2:
      case 15:
        return (e = D(e.type, !1)), e;
      case 11:
        return (e = D(e.type.render, !1)), e;
      case 1:
        return (e = D(e.type, !0)), e;
      default:
        return '';
    }
  }
  function U(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case ze:
        return 'Fragment';
      case Ce:
        return 'Portal';
      case Ct:
        return 'Profiler';
      case $e:
        return 'StrictMode';
      case Ie:
        return 'Suspense';
      case et:
        return 'SuspenseList';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case Kt:
          return (e.displayName || 'Context') + '.Consumer';
        case yt:
          return (e._context.displayName || 'Context') + '.Provider';
        case at:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case ct:
          return (
            (t = e.displayName || null), t !== null ? t : U(e.type) || 'Memo'
          );
        case Te:
          (t = e._payload), (e = e._init);
          try {
            return U(e(t));
          } catch {}
      }
    return null;
  }
  function K(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return 'Cache';
      case 9:
        return (t.displayName || 'Context') + '.Consumer';
      case 10:
        return (t._context.displayName || 'Context') + '.Provider';
      case 18:
        return 'DehydratedFragment';
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ''),
          t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
        );
      case 7:
        return 'Fragment';
      case 5:
        return t;
      case 4:
        return 'Portal';
      case 3:
        return 'Root';
      case 6:
        return 'Text';
      case 16:
        return U(t);
      case 8:
        return t === $e ? 'StrictMode' : 'Mode';
      case 22:
        return 'Offscreen';
      case 12:
        return 'Profiler';
      case 21:
        return 'Scope';
      case 13:
        return 'Suspense';
      case 19:
        return 'SuspenseList';
      case 25:
        return 'TracingMarker';
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == 'function') return t.displayName || t.name || null;
        if (typeof t == 'string') return t;
    }
    return null;
  }
  function V(e) {
    switch (typeof e) {
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
        return e;
      case 'object':
        return e;
      default:
        return '';
    }
  }
  function b(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === 'input' &&
      (t === 'checkbox' || t === 'radio')
    );
  }
  function Ue(e) {
    var t = b(e) ? 'checked' : 'value',
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = '' + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < 'u' &&
      typeof n.get == 'function' &&
      typeof n.set == 'function'
    ) {
      var l = n.get,
        i = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (u) {
            (r = '' + u), i.call(this, u);
          },
        }),
        Object.defineProperty(e, t, {enumerable: n.enumerable}),
        {
          getValue: function () {
            return r;
          },
          setValue: function (u) {
            r = '' + u;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function _r(e) {
    e._valueTracker || (e._valueTracker = Ue(e));
  }
  function zu(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = '';
    return (
      e && (r = b(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function wr(e) {
    if (
      ((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Tl(e, t) {
    var n = t.checked;
    return N({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function Tu(e, t) {
    var n = t.defaultValue == null ? '' : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    (n = V(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === 'checkbox' || t.type === 'radio'
            ? t.checked != null
            : t.value != null,
      });
  }
  function Lu(e, t) {
    (t = t.checked), t != null && qe(e, 'checked', t, !1);
  }
  function Ll(e, t) {
    Lu(e, t);
    var n = V(t.value),
      r = t.type;
    if (n != null)
      r === 'number'
        ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
        : e.value !== '' + n && (e.value = '' + n);
    else if (r === 'submit' || r === 'reset') {
      e.removeAttribute('value');
      return;
    }
    t.hasOwnProperty('value')
      ? Rl(e, t.type, n)
      : t.hasOwnProperty('defaultValue') && Rl(e, t.type, V(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function Ru(e, t, n) {
    if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
      var r = t.type;
      if (
        !(
          (r !== 'submit' && r !== 'reset') ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = '' + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (n = e.name),
      n !== '' && (e.name = ''),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== '' && (e.name = n);
  }
  function Rl(e, t, n) {
    (t !== 'number' || wr(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = '' + e._wrapperState.initialValue)
        : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
  }
  var Rn = Array.isArray;
  function on(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        (l = t.hasOwnProperty('$' + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0);
    } else {
      for (n = '' + V(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          (e[l].selected = !0), r && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Ml(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(h(91));
    return N({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: '' + e._wrapperState.initialValue,
    });
  }
  function Mu(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(h(92));
        if (Rn(n)) {
          if (1 < n.length) throw Error(h(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ''), (n = t);
    }
    e._wrapperState = {initialValue: V(n)};
  }
  function Ou(e, t) {
    var n = V(t.value),
      r = V(t.defaultValue);
    n != null &&
      ((n = '' + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = '' + r);
  }
  function Du(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== '' &&
      t !== null &&
      (e.value = t);
  }
  function Fu(e) {
    switch (e) {
      case 'svg':
        return 'http://www.w3.org/2000/svg';
      case 'math':
        return 'http://www.w3.org/1998/Math/MathML';
      default:
        return 'http://www.w3.org/1999/xhtml';
    }
  }
  function Ol(e, t) {
    return e == null || e === 'http://www.w3.org/1999/xhtml'
      ? Fu(t)
      : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
        ? 'http://www.w3.org/1999/xhtml'
        : e;
  }
  var xr,
    Iu = (function (e) {
      return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, l);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
        e.innerHTML = t;
      else {
        for (
          xr = xr || document.createElement('div'),
            xr.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
            t = xr.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Mn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var On = {
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
      strokeWidth: !0,
    },
    Da = ['Webkit', 'ms', 'Moz', 'O'];
  Object.keys(On).forEach(function (e) {
    Da.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (On[t] = On[e]);
    });
  });
  function Uu(e, t, n) {
    return t == null || typeof t == 'boolean' || t === ''
      ? ''
      : n || typeof t != 'number' || t === 0 || (On.hasOwnProperty(e) && On[e])
        ? ('' + t).trim()
        : t + 'px';
  }
  function Au(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf('--') === 0,
          l = Uu(n, t[n], r);
        n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l);
      }
  }
  var Fa = N(
    {menuitem: !0},
    {
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
      wbr: !0,
    },
  );
  function Dl(e, t) {
    if (t) {
      if (Fa[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(h(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(h(60));
        if (
          typeof t.dangerouslySetInnerHTML != 'object' ||
          !('__html' in t.dangerouslySetInnerHTML)
        )
          throw Error(h(61));
      }
      if (t.style != null && typeof t.style != 'object') throw Error(h(62));
    }
  }
  function Fl(e, t) {
    if (e.indexOf('-') === -1) return typeof t.is == 'string';
    switch (e) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return !1;
      default:
        return !0;
    }
  }
  var Il = null;
  function Ul(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Al = null,
    sn = null,
    an = null;
  function Bu(e) {
    if ((e = nr(e))) {
      if (typeof Al != 'function') throw Error(h(280));
      var t = e.stateNode;
      t && ((t = Wr(t)), Al(e.stateNode, e.type, t));
    }
  }
  function Hu(e) {
    sn ? (an ? an.push(e) : (an = [e])) : (sn = e);
  }
  function Vu() {
    if (sn) {
      var e = sn,
        t = an;
      if (((an = sn = null), Bu(e), t)) for (e = 0; e < t.length; e++) Bu(t[e]);
    }
  }
  function Qu(e, t) {
    return e(t);
  }
  function Wu() {}
  var Bl = !1;
  function $u(e, t, n) {
    if (Bl) return e(t, n);
    Bl = !0;
    try {
      return Qu(e, t, n);
    } finally {
      (Bl = !1), (sn !== null || an !== null) && (Wu(), Vu());
    }
  }
  function Dn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Wr(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case 'onClick':
      case 'onClickCapture':
      case 'onDoubleClick':
      case 'onDoubleClickCapture':
      case 'onMouseDown':
      case 'onMouseDownCapture':
      case 'onMouseMove':
      case 'onMouseMoveCapture':
      case 'onMouseUp':
      case 'onMouseUpCapture':
      case 'onMouseEnter':
        (r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === 'button' ||
            e === 'input' ||
            e === 'select' ||
            e === 'textarea'
          ))),
          (e = !r);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != 'function') throw Error(h(231, t, typeof n));
    return n;
  }
  var Hl = !1;
  if (de)
    try {
      var Fn = {};
      Object.defineProperty(Fn, 'passive', {
        get: function () {
          Hl = !0;
        },
      }),
        window.addEventListener('test', Fn, Fn),
        window.removeEventListener('test', Fn, Fn);
    } catch {
      Hl = !1;
    }
  function Ia(e, t, n, r, l, i, u, o, s) {
    var m = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, m);
    } catch (g) {
      this.onError(g);
    }
  }
  var In = !1,
    kr = null,
    Sr = !1,
    Vl = null,
    Ua = {
      onError: function (e) {
        (In = !0), (kr = e);
      },
    };
  function Aa(e, t, n, r, l, i, u, o, s) {
    (In = !1), (kr = null), Ia.apply(Ua, arguments);
  }
  function Ba(e, t, n, r, l, i, u, o, s) {
    if ((Aa.apply(this, arguments), In)) {
      if (In) {
        var m = kr;
        (In = !1), (kr = null);
      } else throw Error(h(198));
      Sr || ((Sr = !0), (Vl = m));
    }
  }
  function Yt(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function Ku(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function Yu(e) {
    if (Yt(e) !== e) throw Error(h(188));
  }
  function Ha(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Yt(e)), t === null)) throw Error(h(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var i = l.alternate;
      if (i === null) {
        if (((r = l.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === i.child) {
        for (i = l.child; i; ) {
          if (i === n) return Yu(l), e;
          if (i === r) return Yu(l), t;
          i = i.sibling;
        }
        throw Error(h(188));
      }
      if (n.return !== r.return) (n = l), (r = i);
      else {
        for (var u = !1, o = l.child; o; ) {
          if (o === n) {
            (u = !0), (n = l), (r = i);
            break;
          }
          if (o === r) {
            (u = !0), (r = l), (n = i);
            break;
          }
          o = o.sibling;
        }
        if (!u) {
          for (o = i.child; o; ) {
            if (o === n) {
              (u = !0), (n = i), (r = l);
              break;
            }
            if (o === r) {
              (u = !0), (r = i), (n = l);
              break;
            }
            o = o.sibling;
          }
          if (!u) throw Error(h(189));
        }
      }
      if (n.alternate !== r) throw Error(h(190));
    }
    if (n.tag !== 3) throw Error(h(188));
    return n.stateNode.current === n ? e : t;
  }
  function Xu(e) {
    return (e = Ha(e)), e !== null ? Gu(e) : null;
  }
  function Gu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Gu(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Zu = H.unstable_scheduleCallback,
    Ju = H.unstable_cancelCallback,
    Va = H.unstable_shouldYield,
    Qa = H.unstable_requestPaint,
    ue = H.unstable_now,
    Wa = H.unstable_getCurrentPriorityLevel,
    Ql = H.unstable_ImmediatePriority,
    qu = H.unstable_UserBlockingPriority,
    Nr = H.unstable_NormalPriority,
    $a = H.unstable_LowPriority,
    bu = H.unstable_IdlePriority,
    Er = null,
    ft = null;
  function Ka(e) {
    if (ft && typeof ft.onCommitFiberRoot == 'function')
      try {
        ft.onCommitFiberRoot(Er, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var tt = Math.clz32 ? Math.clz32 : Ga,
    Ya = Math.log,
    Xa = Math.LN2;
  function Ga(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Ya(e) / Xa) | 0)) | 0;
  }
  var Cr = 64,
    jr = 4194304;
  function Un(e) {
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
        return e;
    }
  }
  function Pr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      i = e.pingedLanes,
      u = n & 268435455;
    if (u !== 0) {
      var o = u & ~l;
      o !== 0 ? (r = Un(o)) : ((i &= u), i !== 0 && (r = Un(i)));
    } else (u = n & ~l), u !== 0 ? (r = Un(u)) : i !== 0 && (r = Un(i));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      !(t & l) &&
      ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
    )
      return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        (n = 31 - tt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
    return r;
  }
  function Za(e, t) {
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
        return -1;
    }
  }
  function Ja(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        l = e.expirationTimes,
        i = e.pendingLanes;
      0 < i;

    ) {
      var u = 31 - tt(i),
        o = 1 << u,
        s = l[u];
      s === -1
        ? (!(o & n) || o & r) && (l[u] = Za(o, t))
        : s <= t && (e.expiredLanes |= o),
        (i &= ~o);
    }
  }
  function Wl(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function eo() {
    var e = Cr;
    return (Cr <<= 1), !(Cr & 4194240) && (Cr = 64), e;
  }
  function $l(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function An(e, t, n) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - tt(t)),
      (e[t] = n);
  }
  function qa(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - tt(n),
        i = 1 << l;
      (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
    }
  }
  function Kl(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - tt(n),
        l = 1 << r;
      (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
    }
  }
  var Q = 0;
  function to(e) {
    return (
      (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var no,
    Yl,
    ro,
    lo,
    io,
    Xl = !1,
    zr = [],
    jt = null,
    Pt = null,
    zt = null,
    Bn = new Map(),
    Hn = new Map(),
    Tt = [],
    ba =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
        ' ',
      );
  function uo(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        jt = null;
        break;
      case 'dragenter':
      case 'dragleave':
        Pt = null;
        break;
      case 'mouseover':
      case 'mouseout':
        zt = null;
        break;
      case 'pointerover':
      case 'pointerout':
        Bn.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        Hn.delete(t.pointerId);
    }
  }
  function Vn(e, t, n, r, l, i) {
    return e === null || e.nativeEvent !== i
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: i,
          targetContainers: [l],
        }),
        t !== null && ((t = nr(t)), t !== null && Yl(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function ec(e, t, n, r, l) {
    switch (t) {
      case 'focusin':
        return (jt = Vn(jt, e, t, n, r, l)), !0;
      case 'dragenter':
        return (Pt = Vn(Pt, e, t, n, r, l)), !0;
      case 'mouseover':
        return (zt = Vn(zt, e, t, n, r, l)), !0;
      case 'pointerover':
        var i = l.pointerId;
        return Bn.set(i, Vn(Bn.get(i) || null, e, t, n, r, l)), !0;
      case 'gotpointercapture':
        return (
          (i = l.pointerId), Hn.set(i, Vn(Hn.get(i) || null, e, t, n, r, l)), !0
        );
    }
    return !1;
  }
  function oo(e) {
    var t = Xt(e.target);
    if (t !== null) {
      var n = Yt(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Ku(n)), t !== null)) {
            (e.blockedOn = t),
              io(e.priority, function () {
                ro(n);
              });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Tr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Zl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        (Il = r), n.target.dispatchEvent(r), (Il = null);
      } else return (t = nr(n)), t !== null && Yl(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function so(e, t, n) {
    Tr(e) && n.delete(t);
  }
  function tc() {
    (Xl = !1),
      jt !== null && Tr(jt) && (jt = null),
      Pt !== null && Tr(Pt) && (Pt = null),
      zt !== null && Tr(zt) && (zt = null),
      Bn.forEach(so),
      Hn.forEach(so);
  }
  function Qn(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Xl ||
        ((Xl = !0),
        H.unstable_scheduleCallback(H.unstable_NormalPriority, tc)));
  }
  function Wn(e) {
    function t(l) {
      return Qn(l, e);
    }
    if (0 < zr.length) {
      Qn(zr[0], e);
      for (var n = 1; n < zr.length; n++) {
        var r = zr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      jt !== null && Qn(jt, e),
        Pt !== null && Qn(Pt, e),
        zt !== null && Qn(zt, e),
        Bn.forEach(t),
        Hn.forEach(t),
        n = 0;
      n < Tt.length;
      n++
    )
      (r = Tt[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Tt.length && ((n = Tt[0]), n.blockedOn === null); )
      oo(n), n.blockedOn === null && Tt.shift();
  }
  var cn = we.ReactCurrentBatchConfig,
    Lr = !0;
  function nc(e, t, n, r) {
    var l = Q,
      i = cn.transition;
    cn.transition = null;
    try {
      (Q = 1), Gl(e, t, n, r);
    } finally {
      (Q = l), (cn.transition = i);
    }
  }
  function rc(e, t, n, r) {
    var l = Q,
      i = cn.transition;
    cn.transition = null;
    try {
      (Q = 4), Gl(e, t, n, r);
    } finally {
      (Q = l), (cn.transition = i);
    }
  }
  function Gl(e, t, n, r) {
    if (Lr) {
      var l = Zl(e, t, n, r);
      if (l === null) pi(e, t, r, Rr, n), uo(e, r);
      else if (ec(l, e, t, n, r)) r.stopPropagation();
      else if ((uo(e, r), t & 4 && -1 < ba.indexOf(e))) {
        for (; l !== null; ) {
          var i = nr(l);
          if (
            (i !== null && no(i),
            (i = Zl(e, t, n, r)),
            i === null && pi(e, t, r, Rr, n),
            i === l)
          )
            break;
          l = i;
        }
        l !== null && r.stopPropagation();
      } else pi(e, t, r, null, n);
    }
  }
  var Rr = null;
  function Zl(e, t, n, r) {
    if (((Rr = null), (e = Ul(r)), (e = Xt(e)), e !== null))
      if (((t = Yt(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = Ku(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (Rr = e), null;
  }
  function ao(e) {
    switch (e) {
      case 'cancel':
      case 'click':
      case 'close':
      case 'contextmenu':
      case 'copy':
      case 'cut':
      case 'auxclick':
      case 'dblclick':
      case 'dragend':
      case 'dragstart':
      case 'drop':
      case 'focusin':
      case 'focusout':
      case 'input':
      case 'invalid':
      case 'keydown':
      case 'keypress':
      case 'keyup':
      case 'mousedown':
      case 'mouseup':
      case 'paste':
      case 'pause':
      case 'play':
      case 'pointercancel':
      case 'pointerdown':
      case 'pointerup':
      case 'ratechange':
      case 'reset':
      case 'resize':
      case 'seeked':
      case 'submit':
      case 'touchcancel':
      case 'touchend':
      case 'touchstart':
      case 'volumechange':
      case 'change':
      case 'selectionchange':
      case 'textInput':
      case 'compositionstart':
      case 'compositionend':
      case 'compositionupdate':
      case 'beforeblur':
      case 'afterblur':
      case 'beforeinput':
      case 'blur':
      case 'fullscreenchange':
      case 'focus':
      case 'hashchange':
      case 'popstate':
      case 'select':
      case 'selectstart':
        return 1;
      case 'drag':
      case 'dragenter':
      case 'dragexit':
      case 'dragleave':
      case 'dragover':
      case 'mousemove':
      case 'mouseout':
      case 'mouseover':
      case 'pointermove':
      case 'pointerout':
      case 'pointerover':
      case 'scroll':
      case 'toggle':
      case 'touchmove':
      case 'wheel':
      case 'mouseenter':
      case 'mouseleave':
      case 'pointerenter':
      case 'pointerleave':
        return 4;
      case 'message':
        switch (Wa()) {
          case Ql:
            return 1;
          case qu:
            return 4;
          case Nr:
          case $a:
            return 16;
          case bu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Lt = null,
    Jl = null,
    Mr = null;
  function co() {
    if (Mr) return Mr;
    var e,
      t = Jl,
      n = t.length,
      r,
      l = 'value' in Lt ? Lt.value : Lt.textContent,
      i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var u = n - e;
    for (r = 1; r <= u && t[n - r] === l[i - r]; r++);
    return (Mr = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Or(e) {
    var t = e.keyCode;
    return (
      'charCode' in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Dr() {
    return !0;
  }
  function fo() {
    return !1;
  }
  function Ae(e) {
    function t(n, r, l, i, u) {
      (this._reactName = n),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = i),
        (this.target = u),
        (this.currentTarget = null);
      for (var o in e)
        e.hasOwnProperty(o) && ((n = e[o]), (this[o] = n ? n(i) : i[o]));
      return (
        (this.isDefaultPrevented = (
          i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
        )
          ? Dr
          : fo),
        (this.isPropagationStopped = fo),
        this
      );
    }
    return (
      N(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
            (this.isDefaultPrevented = Dr));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
            (this.isPropagationStopped = Dr));
        },
        persist: function () {},
        isPersistent: Dr,
      }),
      t
    );
  }
  var fn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ql = Ae(fn),
    $n = N({}, fn, {view: 0, detail: 0}),
    lc = Ae($n),
    bl,
    ei,
    Kn,
    Fr = N({}, $n, {
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
      getModifierState: ni,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return 'movementX' in e
          ? e.movementX
          : (e !== Kn &&
              (Kn && e.type === 'mousemove'
                ? ((bl = e.screenX - Kn.screenX), (ei = e.screenY - Kn.screenY))
                : (ei = bl = 0),
              (Kn = e)),
            bl);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : ei;
      },
    }),
    po = Ae(Fr),
    ic = N({}, Fr, {dataTransfer: 0}),
    uc = Ae(ic),
    oc = N({}, $n, {relatedTarget: 0}),
    ti = Ae(oc),
    sc = N({}, fn, {animationName: 0, elapsedTime: 0, pseudoElement: 0}),
    ac = Ae(sc),
    cc = N({}, fn, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    fc = Ae(cc),
    dc = N({}, fn, {data: 0}),
    mo = Ae(dc),
    pc = {
      Esc: 'Escape',
      Spacebar: ' ',
      Left: 'ArrowLeft',
      Up: 'ArrowUp',
      Right: 'ArrowRight',
      Down: 'ArrowDown',
      Del: 'Delete',
      Win: 'OS',
      Menu: 'ContextMenu',
      Apps: 'ContextMenu',
      Scroll: 'ScrollLock',
      MozPrintableKey: 'Unidentified',
    },
    mc = {
      8: 'Backspace',
      9: 'Tab',
      12: 'Clear',
      13: 'Enter',
      16: 'Shift',
      17: 'Control',
      18: 'Alt',
      19: 'Pause',
      20: 'CapsLock',
      27: 'Escape',
      32: ' ',
      33: 'PageUp',
      34: 'PageDown',
      35: 'End',
      36: 'Home',
      37: 'ArrowLeft',
      38: 'ArrowUp',
      39: 'ArrowRight',
      40: 'ArrowDown',
      45: 'Insert',
      46: 'Delete',
      112: 'F1',
      113: 'F2',
      114: 'F3',
      115: 'F4',
      116: 'F5',
      117: 'F6',
      118: 'F7',
      119: 'F8',
      120: 'F9',
      121: 'F10',
      122: 'F11',
      123: 'F12',
      144: 'NumLock',
      145: 'ScrollLock',
      224: 'Meta',
    },
    hc = {
      Alt: 'altKey',
      Control: 'ctrlKey',
      Meta: 'metaKey',
      Shift: 'shiftKey',
    };
  function vc(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = hc[e])
        ? !!t[e]
        : !1;
  }
  function ni() {
    return vc;
  }
  var yc = N({}, $n, {
      key: function (e) {
        if (e.key) {
          var t = pc[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = Or(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? mc[e.keyCode] || 'Unidentified'
            : '';
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: ni,
      charCode: function (e) {
        return e.type === 'keypress' ? Or(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress'
          ? Or(e)
          : e.type === 'keydown' || e.type === 'keyup'
            ? e.keyCode
            : 0;
      },
    }),
    gc = Ae(yc),
    _c = N({}, Fr, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    ho = Ae(_c),
    wc = N({}, $n, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ni,
    }),
    xc = Ae(wc),
    kc = N({}, fn, {propertyName: 0, elapsedTime: 0, pseudoElement: 0}),
    Sc = Ae(kc),
    Nc = N({}, Fr, {
      deltaX: function (e) {
        return 'deltaX' in e
          ? e.deltaX
          : 'wheelDeltaX' in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return 'deltaY' in e
          ? e.deltaY
          : 'wheelDeltaY' in e
            ? -e.wheelDeltaY
            : 'wheelDelta' in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Ec = Ae(Nc),
    Cc = [9, 13, 27, 32],
    ri = de && 'CompositionEvent' in window,
    Yn = null;
  de && 'documentMode' in document && (Yn = document.documentMode);
  var jc = de && 'TextEvent' in window && !Yn,
    vo = de && (!ri || (Yn && 8 < Yn && 11 >= Yn)),
    yo = ' ',
    go = !1;
  function _o(e, t) {
    switch (e) {
      case 'keyup':
        return Cc.indexOf(t.keyCode) !== -1;
      case 'keydown':
        return t.keyCode !== 229;
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0;
      default:
        return !1;
    }
  }
  function wo(e) {
    return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
  }
  var dn = !1;
  function Pc(e, t) {
    switch (e) {
      case 'compositionend':
        return wo(t);
      case 'keypress':
        return t.which !== 32 ? null : ((go = !0), yo);
      case 'textInput':
        return (e = t.data), e === yo && go ? null : e;
      default:
        return null;
    }
  }
  function zc(e, t) {
    if (dn)
      return e === 'compositionend' || (!ri && _o(e, t))
        ? ((e = co()), (Mr = Jl = Lt = null), (dn = !1), e)
        : null;
    switch (e) {
      case 'paste':
        return null;
      case 'keypress':
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case 'compositionend':
        return vo && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var Tc = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
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
    week: !0,
  };
  function xo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!Tc[e.type] : t === 'textarea';
  }
  function ko(e, t, n, r) {
    Hu(r),
      (t = Hr(t, 'onChange')),
      0 < t.length &&
        ((n = new ql('onChange', 'change', null, n, r)),
        e.push({event: n, listeners: t}));
  }
  var Xn = null,
    Gn = null;
  function Lc(e) {
    Bo(e, 0);
  }
  function Ir(e) {
    var t = yn(e);
    if (zu(t)) return e;
  }
  function Rc(e, t) {
    if (e === 'change') return t;
  }
  var So = !1;
  if (de) {
    var li;
    if (de) {
      var ii = 'oninput' in document;
      if (!ii) {
        var No = document.createElement('div');
        No.setAttribute('oninput', 'return;'),
          (ii = typeof No.oninput == 'function');
      }
      li = ii;
    } else li = !1;
    So = li && (!document.documentMode || 9 < document.documentMode);
  }
  function Eo() {
    Xn && (Xn.detachEvent('onpropertychange', Co), (Gn = Xn = null));
  }
  function Co(e) {
    if (e.propertyName === 'value' && Ir(Gn)) {
      var t = [];
      ko(t, Gn, e, Ul(e)), $u(Lc, t);
    }
  }
  function Mc(e, t, n) {
    e === 'focusin'
      ? (Eo(), (Xn = t), (Gn = n), Xn.attachEvent('onpropertychange', Co))
      : e === 'focusout' && Eo();
  }
  function Oc(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
      return Ir(Gn);
  }
  function Dc(e, t) {
    if (e === 'click') return Ir(t);
  }
  function Fc(e, t) {
    if (e === 'input' || e === 'change') return Ir(t);
  }
  function Ic(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var nt = typeof Object.is == 'function' ? Object.is : Ic;
  function Zn(e, t) {
    if (nt(e, t)) return !0;
    if (
      typeof e != 'object' ||
      e === null ||
      typeof t != 'object' ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!W.call(t, l) || !nt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function jo(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Po(e, t) {
    var n = jo(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return {node: n, offset: t - e};
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = jo(n);
    }
  }
  function zo(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? zo(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function To() {
    for (var e = window, t = wr(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == 'string';
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = wr(e.document);
    }
    return t;
  }
  function ui(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === 'input' &&
        (e.type === 'text' ||
          e.type === 'search' ||
          e.type === 'tel' ||
          e.type === 'url' ||
          e.type === 'password')) ||
        t === 'textarea' ||
        e.contentEditable === 'true')
    );
  }
  function Uc(e) {
    var t = To(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      zo(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && ui(n)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          'selectionStart' in n)
        )
          (n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var l = n.textContent.length,
            i = Math.min(r.start, l);
          (r = r.end === void 0 ? i : Math.min(r.end, l)),
            !e.extend && i > r && ((l = r), (r = i), (i = l)),
            (l = Po(n, i));
          var u = Po(n, r);
          l &&
            u &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== u.node ||
              e.focusOffset !== u.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
            e.removeAllRanges(),
            i > r
              ? (e.addRange(t), e.extend(u.node, u.offset))
              : (t.setEnd(u.node, u.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({element: e, left: e.scrollLeft, top: e.scrollTop});
      for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
        (e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var Ac = de && 'documentMode' in document && 11 >= document.documentMode,
    pn = null,
    oi = null,
    Jn = null,
    si = !1;
  function Lo(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    si ||
      pn == null ||
      pn !== wr(r) ||
      ((r = pn),
      'selectionStart' in r && ui(r)
        ? (r = {start: r.selectionStart, end: r.selectionEnd})
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (Jn && Zn(Jn, r)) ||
        ((Jn = r),
        (r = Hr(oi, 'onSelect')),
        0 < r.length &&
          ((t = new ql('onSelect', 'select', null, t, n)),
          e.push({event: t, listeners: r}),
          (t.target = pn))));
  }
  function Ur(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n['Webkit' + e] = 'webkit' + t),
      (n['Moz' + e] = 'moz' + t),
      n
    );
  }
  var mn = {
      animationend: Ur('Animation', 'AnimationEnd'),
      animationiteration: Ur('Animation', 'AnimationIteration'),
      animationstart: Ur('Animation', 'AnimationStart'),
      transitionend: Ur('Transition', 'TransitionEnd'),
    },
    ai = {},
    Ro = {};
  de &&
    ((Ro = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete mn.animationend.animation,
      delete mn.animationiteration.animation,
      delete mn.animationstart.animation),
    'TransitionEvent' in window || delete mn.transitionend.transition);
  function Ar(e) {
    if (ai[e]) return ai[e];
    if (!mn[e]) return e;
    var t = mn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Ro) return (ai[e] = t[n]);
    return e;
  }
  var Mo = Ar('animationend'),
    Oo = Ar('animationiteration'),
    Do = Ar('animationstart'),
    Fo = Ar('transitionend'),
    Io = new Map(),
    Uo =
      'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' ',
      );
  function Rt(e, t) {
    Io.set(e, t), X(t, [e]);
  }
  for (var ci = 0; ci < Uo.length; ci++) {
    var fi = Uo[ci],
      Bc = fi.toLowerCase(),
      Hc = fi[0].toUpperCase() + fi.slice(1);
    Rt(Bc, 'on' + Hc);
  }
  Rt(Mo, 'onAnimationEnd'),
    Rt(Oo, 'onAnimationIteration'),
    Rt(Do, 'onAnimationStart'),
    Rt('dblclick', 'onDoubleClick'),
    Rt('focusin', 'onFocus'),
    Rt('focusout', 'onBlur'),
    Rt(Fo, 'onTransitionEnd'),
    fe('onMouseEnter', ['mouseout', 'mouseover']),
    fe('onMouseLeave', ['mouseout', 'mouseover']),
    fe('onPointerEnter', ['pointerout', 'pointerover']),
    fe('onPointerLeave', ['pointerout', 'pointerover']),
    X(
      'onChange',
      'change click focusin focusout input keydown keyup selectionchange'.split(
        ' ',
      ),
    ),
    X(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' ',
      ),
    ),
    X('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    X(
      'onCompositionEnd',
      'compositionend focusout keydown keypress keyup mousedown'.split(' '),
    ),
    X(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
    ),
    X(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
    );
  var qn =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' ',
      ),
    Vc = new Set(
      'cancel close invalid load scroll toggle'.split(' ').concat(qn),
    );
  function Ao(e, t, n) {
    var r = e.type || 'unknown-event';
    (e.currentTarget = n), Ba(r, t, void 0, e), (e.currentTarget = null);
  }
  function Bo(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.event;
      r = r.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var u = r.length - 1; 0 <= u; u--) {
            var o = r[u],
              s = o.instance,
              m = o.currentTarget;
            if (((o = o.listener), s !== i && l.isPropagationStopped()))
              break e;
            Ao(l, o, m), (i = s);
          }
        else
          for (u = 0; u < r.length; u++) {
            if (
              ((o = r[u]),
              (s = o.instance),
              (m = o.currentTarget),
              (o = o.listener),
              s !== i && l.isPropagationStopped())
            )
              break e;
            Ao(l, o, m), (i = s);
          }
      }
    }
    if (Sr) throw ((e = Vl), (Sr = !1), (Vl = null), e);
  }
  function G(e, t) {
    var n = t[_i];
    n === void 0 && (n = t[_i] = new Set());
    var r = e + '__bubble';
    n.has(r) || (Ho(t, e, 2, !1), n.add(r));
  }
  function di(e, t, n) {
    var r = 0;
    t && (r |= 4), Ho(n, e, r, t);
  }
  var Br = '_reactListening' + Math.random().toString(36).slice(2);
  function bn(e) {
    if (!e[Br]) {
      (e[Br] = !0),
        ge.forEach(function (n) {
          n !== 'selectionchange' && (Vc.has(n) || di(n, !1, e), di(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Br] || ((t[Br] = !0), di('selectionchange', !1, t));
    }
  }
  function Ho(e, t, n, r) {
    switch (ao(t)) {
      case 1:
        var l = nc;
        break;
      case 4:
        l = rc;
        break;
      default:
        l = Gl;
    }
    (n = l.bind(null, t, n, e)),
      (l = void 0),
      !Hl ||
        (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
        (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(t, n, {capture: !0, passive: l})
          : e.addEventListener(t, n, !0)
        : l !== void 0
          ? e.addEventListener(t, n, {passive: l})
          : e.addEventListener(t, n, !1);
  }
  function pi(e, t, n, r, l) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null)
      e: for (;;) {
        if (r === null) return;
        var u = r.tag;
        if (u === 3 || u === 4) {
          var o = r.stateNode.containerInfo;
          if (o === l || (o.nodeType === 8 && o.parentNode === l)) break;
          if (u === 4)
            for (u = r.return; u !== null; ) {
              var s = u.tag;
              if (
                (s === 3 || s === 4) &&
                ((s = u.stateNode.containerInfo),
                s === l || (s.nodeType === 8 && s.parentNode === l))
              )
                return;
              u = u.return;
            }
          for (; o !== null; ) {
            if (((u = Xt(o)), u === null)) return;
            if (((s = u.tag), s === 5 || s === 6)) {
              r = i = u;
              continue e;
            }
            o = o.parentNode;
          }
        }
        r = r.return;
      }
    $u(function () {
      var m = i,
        g = Ul(n),
        _ = [];
      e: {
        var v = Io.get(e);
        if (v !== void 0) {
          var k = ql,
            E = e;
          switch (e) {
            case 'keypress':
              if (Or(n) === 0) break e;
            case 'keydown':
            case 'keyup':
              k = gc;
              break;
            case 'focusin':
              (E = 'focus'), (k = ti);
              break;
            case 'focusout':
              (E = 'blur'), (k = ti);
              break;
            case 'beforeblur':
            case 'afterblur':
              k = ti;
              break;
            case 'click':
              if (n.button === 2) break e;
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              k = po;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              k = uc;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              k = xc;
              break;
            case Mo:
            case Oo:
            case Do:
              k = ac;
              break;
            case Fo:
              k = Sc;
              break;
            case 'scroll':
              k = lc;
              break;
            case 'wheel':
              k = Ec;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              k = fc;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              k = ho;
          }
          var C = (t & 4) !== 0,
            oe = !C && e === 'scroll',
            f = C ? (v !== null ? v + 'Capture' : null) : v;
          C = [];
          for (var a = m, p; a !== null; ) {
            p = a;
            var w = p.stateNode;
            if (
              (p.tag === 5 &&
                w !== null &&
                ((p = w),
                f !== null &&
                  ((w = Dn(a, f)), w != null && C.push(er(a, w, p)))),
              oe)
            )
              break;
            a = a.return;
          }
          0 < C.length &&
            ((v = new k(v, E, null, n, g)), _.push({event: v, listeners: C}));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((v = e === 'mouseover' || e === 'pointerover'),
            (k = e === 'mouseout' || e === 'pointerout'),
            v &&
              n !== Il &&
              (E = n.relatedTarget || n.fromElement) &&
              (Xt(E) || E[gt]))
          )
            break e;
          if (
            (k || v) &&
            ((v =
              g.window === g
                ? g
                : (v = g.ownerDocument)
                  ? v.defaultView || v.parentWindow
                  : window),
            k
              ? ((E = n.relatedTarget || n.toElement),
                (k = m),
                (E = E ? Xt(E) : null),
                E !== null &&
                  ((oe = Yt(E)), E !== oe || (E.tag !== 5 && E.tag !== 6)) &&
                  (E = null))
              : ((k = null), (E = m)),
            k !== E)
          ) {
            if (
              ((C = po),
              (w = 'onMouseLeave'),
              (f = 'onMouseEnter'),
              (a = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((C = ho),
                (w = 'onPointerLeave'),
                (f = 'onPointerEnter'),
                (a = 'pointer')),
              (oe = k == null ? v : yn(k)),
              (p = E == null ? v : yn(E)),
              (v = new C(w, a + 'leave', k, n, g)),
              (v.target = oe),
              (v.relatedTarget = p),
              (w = null),
              Xt(g) === m &&
                ((C = new C(f, a + 'enter', E, n, g)),
                (C.target = p),
                (C.relatedTarget = oe),
                (w = C)),
              (oe = w),
              k && E)
            )
              t: {
                for (C = k, f = E, a = 0, p = C; p; p = hn(p)) a++;
                for (p = 0, w = f; w; w = hn(w)) p++;
                for (; 0 < a - p; ) (C = hn(C)), a--;
                for (; 0 < p - a; ) (f = hn(f)), p--;
                for (; a--; ) {
                  if (C === f || (f !== null && C === f.alternate)) break t;
                  (C = hn(C)), (f = hn(f));
                }
                C = null;
              }
            else C = null;
            k !== null && Vo(_, v, k, C, !1),
              E !== null && oe !== null && Vo(_, oe, E, C, !0);
          }
        }
        e: {
          if (
            ((v = m ? yn(m) : window),
            (k = v.nodeName && v.nodeName.toLowerCase()),
            k === 'select' || (k === 'input' && v.type === 'file'))
          )
            var j = Rc;
          else if (xo(v))
            if (So) j = Fc;
            else {
              j = Oc;
              var P = Mc;
            }
          else
            (k = v.nodeName) &&
              k.toLowerCase() === 'input' &&
              (v.type === 'checkbox' || v.type === 'radio') &&
              (j = Dc);
          if (j && (j = j(e, m))) {
            ko(_, j, n, g);
            break e;
          }
          P && P(e, v, m),
            e === 'focusout' &&
              (P = v._wrapperState) &&
              P.controlled &&
              v.type === 'number' &&
              Rl(v, 'number', v.value);
        }
        switch (((P = m ? yn(m) : window), e)) {
          case 'focusin':
            (xo(P) || P.contentEditable === 'true') &&
              ((pn = P), (oi = m), (Jn = null));
            break;
          case 'focusout':
            Jn = oi = pn = null;
            break;
          case 'mousedown':
            si = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            (si = !1), Lo(_, n, g);
            break;
          case 'selectionchange':
            if (Ac) break;
          case 'keydown':
          case 'keyup':
            Lo(_, n, g);
        }
        var z;
        if (ri)
          e: {
            switch (e) {
              case 'compositionstart':
                var R = 'onCompositionStart';
                break e;
              case 'compositionend':
                R = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                R = 'onCompositionUpdate';
                break e;
            }
            R = void 0;
          }
        else
          dn
            ? _o(e, n) && (R = 'onCompositionEnd')
            : e === 'keydown' &&
              n.keyCode === 229 &&
              (R = 'onCompositionStart');
        R &&
          (vo &&
            n.locale !== 'ko' &&
            (dn || R !== 'onCompositionStart'
              ? R === 'onCompositionEnd' && dn && (z = co())
              : ((Lt = g),
                (Jl = 'value' in Lt ? Lt.value : Lt.textContent),
                (dn = !0))),
          (P = Hr(m, R)),
          0 < P.length &&
            ((R = new mo(R, e, null, n, g)),
            _.push({event: R, listeners: P}),
            z ? (R.data = z) : ((z = wo(n)), z !== null && (R.data = z)))),
          (z = jc ? Pc(e, n) : zc(e, n)) &&
            ((m = Hr(m, 'onBeforeInput')),
            0 < m.length &&
              ((g = new mo('onBeforeInput', 'beforeinput', null, n, g)),
              _.push({event: g, listeners: m}),
              (g.data = z)));
      }
      Bo(_, t);
    });
  }
  function er(e, t, n) {
    return {instance: e, listener: t, currentTarget: n};
  }
  function Hr(e, t) {
    for (var n = t + 'Capture', r = []; e !== null; ) {
      var l = e,
        i = l.stateNode;
      l.tag === 5 &&
        i !== null &&
        ((l = i),
        (i = Dn(e, n)),
        i != null && r.unshift(er(e, i, l)),
        (i = Dn(e, t)),
        i != null && r.push(er(e, i, l))),
        (e = e.return);
    }
    return r;
  }
  function hn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Vo(e, t, n, r, l) {
    for (var i = t._reactName, u = []; n !== null && n !== r; ) {
      var o = n,
        s = o.alternate,
        m = o.stateNode;
      if (s !== null && s === r) break;
      o.tag === 5 &&
        m !== null &&
        ((o = m),
        l
          ? ((s = Dn(n, i)), s != null && u.unshift(er(n, s, o)))
          : l || ((s = Dn(n, i)), s != null && u.push(er(n, s, o)))),
        (n = n.return);
    }
    u.length !== 0 && e.push({event: t, listeners: u});
  }
  var Qc = /\r\n?/g,
    Wc = /\u0000|\uFFFD/g;
  function Qo(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        Qc,
        `
`,
      )
      .replace(Wc, '');
  }
  function Vr(e, t, n) {
    if (((t = Qo(t)), Qo(e) !== t && n)) throw Error(h(425));
  }
  function Qr() {}
  var mi = null,
    hi = null;
  function vi(e, t) {
    return (
      e === 'textarea' ||
      e === 'noscript' ||
      typeof t.children == 'string' ||
      typeof t.children == 'number' ||
      (typeof t.dangerouslySetInnerHTML == 'object' &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var yi = typeof setTimeout == 'function' ? setTimeout : void 0,
    $c = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    Wo = typeof Promise == 'function' ? Promise : void 0,
    Kc =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof Wo < 'u'
          ? function (e) {
              return Wo.resolve(null).then(e).catch(Yc);
            }
          : yi;
  function Yc(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function gi(e, t) {
    var n = t,
      r = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === '/$')) {
          if (r === 0) {
            e.removeChild(l), Wn(t);
            return;
          }
          r--;
        } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
      n = l;
    } while (n);
    Wn(t);
  }
  function Mt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
        if (t === '/$') return null;
      }
    }
    return e;
  }
  function $o(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === '$' || n === '$!' || n === '$?') {
          if (t === 0) return e;
          t--;
        } else n === '/$' && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var vn = Math.random().toString(36).slice(2),
    dt = '__reactFiber$' + vn,
    tr = '__reactProps$' + vn,
    gt = '__reactContainer$' + vn,
    _i = '__reactEvents$' + vn,
    Xc = '__reactListeners$' + vn,
    Gc = '__reactHandles$' + vn;
  function Xt(e) {
    var t = e[dt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[gt] || n[dt])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = $o(e); e !== null; ) {
            if ((n = e[dt])) return n;
            e = $o(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function nr(e) {
    return (
      (e = e[dt] || e[gt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function yn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(h(33));
  }
  function Wr(e) {
    return e[tr] || null;
  }
  var wi = [],
    gn = -1;
  function Ot(e) {
    return {current: e};
  }
  function Z(e) {
    0 > gn || ((e.current = wi[gn]), (wi[gn] = null), gn--);
  }
  function Y(e, t) {
    gn++, (wi[gn] = e.current), (e.current = t);
  }
  var Dt = {},
    xe = Ot(Dt),
    Le = Ot(!1),
    Gt = Dt;
  function _n(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Dt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      i;
    for (i in n) l[i] = t[i];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function Re(e) {
    return (e = e.childContextTypes), e != null;
  }
  function $r() {
    Z(Le), Z(xe);
  }
  function Ko(e, t, n) {
    if (xe.current !== Dt) throw Error(h(168));
    Y(xe, t), Y(Le, n);
  }
  function Yo(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
      return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(h(108, K(e) || 'Unknown', l));
    return N({}, n, r);
  }
  function Kr(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Dt),
      (Gt = xe.current),
      Y(xe, e),
      Y(Le, Le.current),
      !0
    );
  }
  function Xo(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(h(169));
    n
      ? ((e = Yo(e, t, Gt)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        Z(Le),
        Z(xe),
        Y(xe, e))
      : Z(Le),
      Y(Le, n);
  }
  var _t = null,
    Yr = !1,
    xi = !1;
  function Go(e) {
    _t === null ? (_t = [e]) : _t.push(e);
  }
  function Zc(e) {
    (Yr = !0), Go(e);
  }
  function Ft() {
    if (!xi && _t !== null) {
      xi = !0;
      var e = 0,
        t = Q;
      try {
        var n = _t;
        for (Q = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        (_t = null), (Yr = !1);
      } catch (l) {
        throw (_t !== null && (_t = _t.slice(e + 1)), Zu(Ql, Ft), l);
      } finally {
        (Q = t), (xi = !1);
      }
    }
    return null;
  }
  var wn = [],
    xn = 0,
    Xr = null,
    Gr = 0,
    Ke = [],
    Ye = 0,
    Zt = null,
    wt = 1,
    xt = '';
  function Jt(e, t) {
    (wn[xn++] = Gr), (wn[xn++] = Xr), (Xr = e), (Gr = t);
  }
  function Zo(e, t, n) {
    (Ke[Ye++] = wt), (Ke[Ye++] = xt), (Ke[Ye++] = Zt), (Zt = e);
    var r = wt;
    e = xt;
    var l = 32 - tt(r) - 1;
    (r &= ~(1 << l)), (n += 1);
    var i = 32 - tt(t) + l;
    if (30 < i) {
      var u = l - (l % 5);
      (i = (r & ((1 << u) - 1)).toString(32)),
        (r >>= u),
        (l -= u),
        (wt = (1 << (32 - tt(t) + l)) | (n << l) | r),
        (xt = i + e);
    } else (wt = (1 << i) | (n << l) | r), (xt = e);
  }
  function ki(e) {
    e.return !== null && (Jt(e, 1), Zo(e, 1, 0));
  }
  function Si(e) {
    for (; e === Xr; )
      (Xr = wn[--xn]), (wn[xn] = null), (Gr = wn[--xn]), (wn[xn] = null);
    for (; e === Zt; )
      (Zt = Ke[--Ye]),
        (Ke[Ye] = null),
        (xt = Ke[--Ye]),
        (Ke[Ye] = null),
        (wt = Ke[--Ye]),
        (Ke[Ye] = null);
  }
  var Be = null,
    He = null,
    ee = !1,
    rt = null;
  function Jo(e, t) {
    var n = Je(5, null, null, 0);
    (n.elementType = 'DELETED'),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
  }
  function qo(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (Be = e), (He = Mt(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (Be = e), (He = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = Zt !== null ? {id: wt, overflow: xt} : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = Je(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (Be = e),
              (He = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Ni(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Ei(e) {
    if (ee) {
      var t = He;
      if (t) {
        var n = t;
        if (!qo(e, t)) {
          if (Ni(e)) throw Error(h(418));
          t = Mt(n.nextSibling);
          var r = Be;
          t && qo(e, t)
            ? Jo(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (ee = !1), (Be = e));
        }
      } else {
        if (Ni(e)) throw Error(h(418));
        (e.flags = (e.flags & -4097) | 2), (ee = !1), (Be = e);
      }
    }
  }
  function bo(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    Be = e;
  }
  function Zr(e) {
    if (e !== Be) return !1;
    if (!ee) return bo(e), (ee = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== 'head' && t !== 'body' && !vi(e.type, e.memoizedProps))),
      t && (t = He))
    ) {
      if (Ni(e)) throw (es(), Error(h(418)));
      for (; t; ) Jo(e, t), (t = Mt(t.nextSibling));
    }
    if ((bo(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(h(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === '/$') {
              if (t === 0) {
                He = Mt(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
          }
          e = e.nextSibling;
        }
        He = null;
      }
    } else He = Be ? Mt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function es() {
    for (var e = He; e; ) e = Mt(e.nextSibling);
  }
  function kn() {
    (He = Be = null), (ee = !1);
  }
  function Ci(e) {
    rt === null ? (rt = [e]) : rt.push(e);
  }
  var Jc = we.ReactCurrentBatchConfig;
  function rr(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != 'function' && typeof e != 'object')
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(h(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(h(147, e));
        var l = r,
          i = '' + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == 'function' &&
          t.ref._stringRef === i
          ? t.ref
          : ((t = function (u) {
              var o = l.refs;
              u === null ? delete o[i] : (o[i] = u);
            }),
            (t._stringRef = i),
            t);
      }
      if (typeof e != 'string') throw Error(h(284));
      if (!n._owner) throw Error(h(290, e));
    }
    return e;
  }
  function Jr(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        h(
          31,
          e === '[object Object]'
            ? 'object with keys {' + Object.keys(t).join(', ') + '}'
            : e,
        ),
      ))
    );
  }
  function ts(e) {
    var t = e._init;
    return t(e._payload);
  }
  function ns(e) {
    function t(f, a) {
      if (e) {
        var p = f.deletions;
        p === null ? ((f.deletions = [a]), (f.flags |= 16)) : p.push(a);
      }
    }
    function n(f, a) {
      if (!e) return null;
      for (; a !== null; ) t(f, a), (a = a.sibling);
      return null;
    }
    function r(f, a) {
      for (f = new Map(); a !== null; )
        a.key !== null ? f.set(a.key, a) : f.set(a.index, a), (a = a.sibling);
      return f;
    }
    function l(f, a) {
      return (f = Wt(f, a)), (f.index = 0), (f.sibling = null), f;
    }
    function i(f, a, p) {
      return (
        (f.index = p),
        e
          ? ((p = f.alternate),
            p !== null
              ? ((p = p.index), p < a ? ((f.flags |= 2), a) : p)
              : ((f.flags |= 2), a))
          : ((f.flags |= 1048576), a)
      );
    }
    function u(f) {
      return e && f.alternate === null && (f.flags |= 2), f;
    }
    function o(f, a, p, w) {
      return a === null || a.tag !== 6
        ? ((a = yu(p, f.mode, w)), (a.return = f), a)
        : ((a = l(a, p)), (a.return = f), a);
    }
    function s(f, a, p, w) {
      var j = p.type;
      return j === ze
        ? g(f, a, p.props.children, w, p.key)
        : a !== null &&
            (a.elementType === j ||
              (typeof j == 'object' &&
                j !== null &&
                j.$$typeof === Te &&
                ts(j) === a.type))
          ? ((w = l(a, p.props)), (w.ref = rr(f, a, p)), (w.return = f), w)
          : ((w = xl(p.type, p.key, p.props, null, f.mode, w)),
            (w.ref = rr(f, a, p)),
            (w.return = f),
            w);
    }
    function m(f, a, p, w) {
      return a === null ||
        a.tag !== 4 ||
        a.stateNode.containerInfo !== p.containerInfo ||
        a.stateNode.implementation !== p.implementation
        ? ((a = gu(p, f.mode, w)), (a.return = f), a)
        : ((a = l(a, p.children || [])), (a.return = f), a);
    }
    function g(f, a, p, w, j) {
      return a === null || a.tag !== 7
        ? ((a = un(p, f.mode, w, j)), (a.return = f), a)
        : ((a = l(a, p)), (a.return = f), a);
    }
    function _(f, a, p) {
      if ((typeof a == 'string' && a !== '') || typeof a == 'number')
        return (a = yu('' + a, f.mode, p)), (a.return = f), a;
      if (typeof a == 'object' && a !== null) {
        switch (a.$$typeof) {
          case be:
            return (
              (p = xl(a.type, a.key, a.props, null, f.mode, p)),
              (p.ref = rr(f, null, a)),
              (p.return = f),
              p
            );
          case Ce:
            return (a = gu(a, f.mode, p)), (a.return = f), a;
          case Te:
            var w = a._init;
            return _(f, w(a._payload), p);
        }
        if (Rn(a) || T(a))
          return (a = un(a, f.mode, p, null)), (a.return = f), a;
        Jr(f, a);
      }
      return null;
    }
    function v(f, a, p, w) {
      var j = a !== null ? a.key : null;
      if ((typeof p == 'string' && p !== '') || typeof p == 'number')
        return j !== null ? null : o(f, a, '' + p, w);
      if (typeof p == 'object' && p !== null) {
        switch (p.$$typeof) {
          case be:
            return p.key === j ? s(f, a, p, w) : null;
          case Ce:
            return p.key === j ? m(f, a, p, w) : null;
          case Te:
            return (j = p._init), v(f, a, j(p._payload), w);
        }
        if (Rn(p) || T(p)) return j !== null ? null : g(f, a, p, w, null);
        Jr(f, p);
      }
      return null;
    }
    function k(f, a, p, w, j) {
      if ((typeof w == 'string' && w !== '') || typeof w == 'number')
        return (f = f.get(p) || null), o(a, f, '' + w, j);
      if (typeof w == 'object' && w !== null) {
        switch (w.$$typeof) {
          case be:
            return (
              (f = f.get(w.key === null ? p : w.key) || null), s(a, f, w, j)
            );
          case Ce:
            return (
              (f = f.get(w.key === null ? p : w.key) || null), m(a, f, w, j)
            );
          case Te:
            var P = w._init;
            return k(f, a, p, P(w._payload), j);
        }
        if (Rn(w) || T(w)) return (f = f.get(p) || null), g(a, f, w, j, null);
        Jr(a, w);
      }
      return null;
    }
    function E(f, a, p, w) {
      for (
        var j = null, P = null, z = a, R = (a = 0), he = null;
        z !== null && R < p.length;
        R++
      ) {
        z.index > R ? ((he = z), (z = null)) : (he = z.sibling);
        var A = v(f, z, p[R], w);
        if (A === null) {
          z === null && (z = he);
          break;
        }
        e && z && A.alternate === null && t(f, z),
          (a = i(A, a, R)),
          P === null ? (j = A) : (P.sibling = A),
          (P = A),
          (z = he);
      }
      if (R === p.length) return n(f, z), ee && Jt(f, R), j;
      if (z === null) {
        for (; R < p.length; R++)
          (z = _(f, p[R], w)),
            z !== null &&
              ((a = i(z, a, R)),
              P === null ? (j = z) : (P.sibling = z),
              (P = z));
        return ee && Jt(f, R), j;
      }
      for (z = r(f, z); R < p.length; R++)
        (he = k(z, f, R, p[R], w)),
          he !== null &&
            (e &&
              he.alternate !== null &&
              z.delete(he.key === null ? R : he.key),
            (a = i(he, a, R)),
            P === null ? (j = he) : (P.sibling = he),
            (P = he));
      return (
        e &&
          z.forEach(function ($t) {
            return t(f, $t);
          }),
        ee && Jt(f, R),
        j
      );
    }
    function C(f, a, p, w) {
      var j = T(p);
      if (typeof j != 'function') throw Error(h(150));
      if (((p = j.call(p)), p == null)) throw Error(h(151));
      for (
        var P = (j = null), z = a, R = (a = 0), he = null, A = p.next();
        z !== null && !A.done;
        R++, A = p.next()
      ) {
        z.index > R ? ((he = z), (z = null)) : (he = z.sibling);
        var $t = v(f, z, A.value, w);
        if ($t === null) {
          z === null && (z = he);
          break;
        }
        e && z && $t.alternate === null && t(f, z),
          (a = i($t, a, R)),
          P === null ? (j = $t) : (P.sibling = $t),
          (P = $t),
          (z = he);
      }
      if (A.done) return n(f, z), ee && Jt(f, R), j;
      if (z === null) {
        for (; !A.done; R++, A = p.next())
          (A = _(f, A.value, w)),
            A !== null &&
              ((a = i(A, a, R)),
              P === null ? (j = A) : (P.sibling = A),
              (P = A));
        return ee && Jt(f, R), j;
      }
      for (z = r(f, z); !A.done; R++, A = p.next())
        (A = k(z, f, R, A.value, w)),
          A !== null &&
            (e && A.alternate !== null && z.delete(A.key === null ? R : A.key),
            (a = i(A, a, R)),
            P === null ? (j = A) : (P.sibling = A),
            (P = A));
      return (
        e &&
          z.forEach(function (Tf) {
            return t(f, Tf);
          }),
        ee && Jt(f, R),
        j
      );
    }
    function oe(f, a, p, w) {
      if (
        (typeof p == 'object' &&
          p !== null &&
          p.type === ze &&
          p.key === null &&
          (p = p.props.children),
        typeof p == 'object' && p !== null)
      ) {
        switch (p.$$typeof) {
          case be:
            e: {
              for (var j = p.key, P = a; P !== null; ) {
                if (P.key === j) {
                  if (((j = p.type), j === ze)) {
                    if (P.tag === 7) {
                      n(f, P.sibling),
                        (a = l(P, p.props.children)),
                        (a.return = f),
                        (f = a);
                      break e;
                    }
                  } else if (
                    P.elementType === j ||
                    (typeof j == 'object' &&
                      j !== null &&
                      j.$$typeof === Te &&
                      ts(j) === P.type)
                  ) {
                    n(f, P.sibling),
                      (a = l(P, p.props)),
                      (a.ref = rr(f, P, p)),
                      (a.return = f),
                      (f = a);
                    break e;
                  }
                  n(f, P);
                  break;
                } else t(f, P);
                P = P.sibling;
              }
              p.type === ze
                ? ((a = un(p.props.children, f.mode, w, p.key)),
                  (a.return = f),
                  (f = a))
                : ((w = xl(p.type, p.key, p.props, null, f.mode, w)),
                  (w.ref = rr(f, a, p)),
                  (w.return = f),
                  (f = w));
            }
            return u(f);
          case Ce:
            e: {
              for (P = p.key; a !== null; ) {
                if (a.key === P)
                  if (
                    a.tag === 4 &&
                    a.stateNode.containerInfo === p.containerInfo &&
                    a.stateNode.implementation === p.implementation
                  ) {
                    n(f, a.sibling),
                      (a = l(a, p.children || [])),
                      (a.return = f),
                      (f = a);
                    break e;
                  } else {
                    n(f, a);
                    break;
                  }
                else t(f, a);
                a = a.sibling;
              }
              (a = gu(p, f.mode, w)), (a.return = f), (f = a);
            }
            return u(f);
          case Te:
            return (P = p._init), oe(f, a, P(p._payload), w);
        }
        if (Rn(p)) return E(f, a, p, w);
        if (T(p)) return C(f, a, p, w);
        Jr(f, p);
      }
      return (typeof p == 'string' && p !== '') || typeof p == 'number'
        ? ((p = '' + p),
          a !== null && a.tag === 6
            ? (n(f, a.sibling), (a = l(a, p)), (a.return = f), (f = a))
            : (n(f, a), (a = yu(p, f.mode, w)), (a.return = f), (f = a)),
          u(f))
        : n(f, a);
    }
    return oe;
  }
  var Sn = ns(!0),
    rs = ns(!1),
    qr = Ot(null),
    br = null,
    Nn = null,
    ji = null;
  function Pi() {
    ji = Nn = br = null;
  }
  function zi(e) {
    var t = qr.current;
    Z(qr), (e._currentValue = t);
  }
  function Ti(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function En(e, t) {
    (br = e),
      (ji = Nn = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & t && (Me = !0), (e.firstContext = null));
  }
  function Xe(e) {
    var t = e._currentValue;
    if (ji !== e)
      if (((e = {context: e, memoizedValue: t, next: null}), Nn === null)) {
        if (br === null) throw Error(h(308));
        (Nn = e), (br.dependencies = {lanes: 0, firstContext: e});
      } else Nn = Nn.next = e;
    return t;
  }
  var qt = null;
  function Li(e) {
    qt === null ? (qt = [e]) : qt.push(e);
  }
  function ls(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), Li(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      kt(e, r)
    );
  }
  function kt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
  }
  var It = !1;
  function Ri(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: {pending: null, interleaved: null, lanes: 0},
      effects: null,
    };
  }
  function is(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function St(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Ut(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), F & 2)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (r.pending = t),
        kt(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), Li(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      kt(e, n)
    );
  }
  function el(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), Kl(e, n);
    }
  }
  function us(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var l = null,
        i = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var u = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          i === null ? (l = i = u) : (i = i.next = u), (n = n.next);
        } while (n !== null);
        i === null ? (l = i = t) : (i = i.next = t);
      } else l = i = t;
      (n = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: i,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n);
      return;
    }
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  }
  function tl(e, t, n, r) {
    var l = e.updateQueue;
    It = !1;
    var i = l.firstBaseUpdate,
      u = l.lastBaseUpdate,
      o = l.shared.pending;
    if (o !== null) {
      l.shared.pending = null;
      var s = o,
        m = s.next;
      (s.next = null), u === null ? (i = m) : (u.next = m), (u = s);
      var g = e.alternate;
      g !== null &&
        ((g = g.updateQueue),
        (o = g.lastBaseUpdate),
        o !== u &&
          (o === null ? (g.firstBaseUpdate = m) : (o.next = m),
          (g.lastBaseUpdate = s)));
    }
    if (i !== null) {
      var _ = l.baseState;
      (u = 0), (g = m = s = null), (o = i);
      do {
        var v = o.lane,
          k = o.eventTime;
        if ((r & v) === v) {
          g !== null &&
            (g = g.next =
              {
                eventTime: k,
                lane: 0,
                tag: o.tag,
                payload: o.payload,
                callback: o.callback,
                next: null,
              });
          e: {
            var E = e,
              C = o;
            switch (((v = t), (k = n), C.tag)) {
              case 1:
                if (((E = C.payload), typeof E == 'function')) {
                  _ = E.call(k, _, v);
                  break e;
                }
                _ = E;
                break e;
              case 3:
                E.flags = (E.flags & -65537) | 128;
              case 0:
                if (
                  ((E = C.payload),
                  (v = typeof E == 'function' ? E.call(k, _, v) : E),
                  v == null)
                )
                  break e;
                _ = N({}, _, v);
                break e;
              case 2:
                It = !0;
            }
          }
          o.callback !== null &&
            o.lane !== 0 &&
            ((e.flags |= 64),
            (v = l.effects),
            v === null ? (l.effects = [o]) : v.push(o));
        } else
          (k = {
            eventTime: k,
            lane: v,
            tag: o.tag,
            payload: o.payload,
            callback: o.callback,
            next: null,
          }),
            g === null ? ((m = g = k), (s = _)) : (g = g.next = k),
            (u |= v);
        if (((o = o.next), o === null)) {
          if (((o = l.shared.pending), o === null)) break;
          (v = o),
            (o = v.next),
            (v.next = null),
            (l.lastBaseUpdate = v),
            (l.shared.pending = null);
        }
      } while (!0);
      if (
        (g === null && (s = _),
        (l.baseState = s),
        (l.firstBaseUpdate = m),
        (l.lastBaseUpdate = g),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do (u |= l.lane), (l = l.next);
        while (l !== t);
      } else i === null && (l.shared.lanes = 0);
      (tn |= u), (e.lanes = u), (e.memoizedState = _);
    }
  }
  function os(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          l = r.callback;
        if (l !== null) {
          if (((r.callback = null), (r = n), typeof l != 'function'))
            throw Error(h(191, l));
          l.call(r);
        }
      }
  }
  var lr = {},
    pt = Ot(lr),
    ir = Ot(lr),
    ur = Ot(lr);
  function bt(e) {
    if (e === lr) throw Error(h(174));
    return e;
  }
  function Mi(e, t) {
    switch ((Y(ur, t), Y(ir, e), Y(pt, lr), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Ol(null, '');
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Ol(t, e));
    }
    Z(pt), Y(pt, t);
  }
  function Cn() {
    Z(pt), Z(ir), Z(ur);
  }
  function ss(e) {
    bt(ur.current);
    var t = bt(pt.current),
      n = Ol(t, e.type);
    t !== n && (Y(ir, e), Y(pt, n));
  }
  function Oi(e) {
    ir.current === e && (Z(pt), Z(ir));
  }
  var ne = Ot(0);
  function nl(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var Di = [];
  function Fi() {
    for (var e = 0; e < Di.length; e++)
      Di[e]._workInProgressVersionPrimary = null;
    Di.length = 0;
  }
  var rl = we.ReactCurrentDispatcher,
    Ii = we.ReactCurrentBatchConfig,
    en = 0,
    re = null,
    ae = null,
    pe = null,
    ll = !1,
    or = !1,
    sr = 0,
    qc = 0;
  function ke() {
    throw Error(h(321));
  }
  function Ui(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!nt(e[n], t[n])) return !1;
    return !0;
  }
  function Ai(e, t, n, r, l, i) {
    if (
      ((en = i),
      (re = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (rl.current = e === null || e.memoizedState === null ? nf : rf),
      (e = n(r, l)),
      or)
    ) {
      i = 0;
      do {
        if (((or = !1), (sr = 0), 25 <= i)) throw Error(h(301));
        (i += 1),
          (pe = ae = null),
          (t.updateQueue = null),
          (rl.current = lf),
          (e = n(r, l));
      } while (or);
    }
    if (
      ((rl.current = ol),
      (t = ae !== null && ae.next !== null),
      (en = 0),
      (pe = ae = re = null),
      (ll = !1),
      t)
    )
      throw Error(h(300));
    return e;
  }
  function Bi() {
    var e = sr !== 0;
    return (sr = 0), e;
  }
  function mt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return pe === null ? (re.memoizedState = pe = e) : (pe = pe.next = e), pe;
  }
  function Ge() {
    if (ae === null) {
      var e = re.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = ae.next;
    var t = pe === null ? re.memoizedState : pe.next;
    if (t !== null) (pe = t), (ae = e);
    else {
      if (e === null) throw Error(h(310));
      (ae = e),
        (e = {
          memoizedState: ae.memoizedState,
          baseState: ae.baseState,
          baseQueue: ae.baseQueue,
          queue: ae.queue,
          next: null,
        }),
        pe === null ? (re.memoizedState = pe = e) : (pe = pe.next = e);
    }
    return pe;
  }
  function ar(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function Hi(e) {
    var t = Ge(),
      n = t.queue;
    if (n === null) throw Error(h(311));
    n.lastRenderedReducer = e;
    var r = ae,
      l = r.baseQueue,
      i = n.pending;
    if (i !== null) {
      if (l !== null) {
        var u = l.next;
        (l.next = i.next), (i.next = u);
      }
      (r.baseQueue = l = i), (n.pending = null);
    }
    if (l !== null) {
      (i = l.next), (r = r.baseState);
      var o = (u = null),
        s = null,
        m = i;
      do {
        var g = m.lane;
        if ((en & g) === g)
          s !== null &&
            (s = s.next =
              {
                lane: 0,
                action: m.action,
                hasEagerState: m.hasEagerState,
                eagerState: m.eagerState,
                next: null,
              }),
            (r = m.hasEagerState ? m.eagerState : e(r, m.action));
        else {
          var _ = {
            lane: g,
            action: m.action,
            hasEagerState: m.hasEagerState,
            eagerState: m.eagerState,
            next: null,
          };
          s === null ? ((o = s = _), (u = r)) : (s = s.next = _),
            (re.lanes |= g),
            (tn |= g);
        }
        m = m.next;
      } while (m !== null && m !== i);
      s === null ? (u = r) : (s.next = o),
        nt(r, t.memoizedState) || (Me = !0),
        (t.memoizedState = r),
        (t.baseState = u),
        (t.baseQueue = s),
        (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do (i = l.lane), (re.lanes |= i), (tn |= i), (l = l.next);
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Vi(e) {
    var t = Ge(),
      n = t.queue;
    if (n === null) throw Error(h(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      l = n.pending,
      i = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var u = (l = l.next);
      do (i = e(i, u.action)), (u = u.next);
      while (u !== l);
      nt(i, t.memoizedState) || (Me = !0),
        (t.memoizedState = i),
        t.baseQueue === null && (t.baseState = i),
        (n.lastRenderedState = i);
    }
    return [i, r];
  }
  function as() {}
  function cs(e, t) {
    var n = re,
      r = Ge(),
      l = t(),
      i = !nt(r.memoizedState, l);
    if (
      (i && ((r.memoizedState = l), (Me = !0)),
      (r = r.queue),
      Qi(ps.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || i || (pe !== null && pe.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        cr(9, ds.bind(null, n, r, l, t), void 0, null),
        me === null)
      )
        throw Error(h(349));
      en & 30 || fs(n, t, l);
    }
    return l;
  }
  function fs(e, t, n) {
    (e.flags |= 16384),
      (e = {getSnapshot: t, value: n}),
      (t = re.updateQueue),
      t === null
        ? ((t = {lastEffect: null, stores: null}),
          (re.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function ds(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), ms(t) && hs(e);
  }
  function ps(e, t, n) {
    return n(function () {
      ms(t) && hs(e);
    });
  }
  function ms(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !nt(e, n);
    } catch {
      return !0;
    }
  }
  function hs(e) {
    var t = kt(e, 1);
    t !== null && ot(t, e, 1, -1);
  }
  function vs(e) {
    var t = mt();
    return (
      typeof e == 'function' && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ar,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = tf.bind(null, re, e)),
      [t.memoizedState, e]
    );
  }
  function cr(e, t, n, r) {
    return (
      (e = {tag: e, create: t, destroy: n, deps: r, next: null}),
      (t = re.updateQueue),
      t === null
        ? ((t = {lastEffect: null, stores: null}),
          (re.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function ys() {
    return Ge().memoizedState;
  }
  function il(e, t, n, r) {
    var l = mt();
    (re.flags |= e),
      (l.memoizedState = cr(1 | t, n, void 0, r === void 0 ? null : r));
  }
  function ul(e, t, n, r) {
    var l = Ge();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (ae !== null) {
      var u = ae.memoizedState;
      if (((i = u.destroy), r !== null && Ui(r, u.deps))) {
        l.memoizedState = cr(t, n, i, r);
        return;
      }
    }
    (re.flags |= e), (l.memoizedState = cr(1 | t, n, i, r));
  }
  function gs(e, t) {
    return il(8390656, 8, e, t);
  }
  function Qi(e, t) {
    return ul(2048, 8, e, t);
  }
  function _s(e, t) {
    return ul(4, 2, e, t);
  }
  function ws(e, t) {
    return ul(4, 4, e, t);
  }
  function xs(e, t) {
    if (typeof t == 'function')
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function ks(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null), ul(4, 4, xs.bind(null, t, e), n)
    );
  }
  function Wi() {}
  function Ss(e, t) {
    var n = Ge();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ui(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function Ns(e, t) {
    var n = Ge();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ui(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function Es(e, t, n) {
    return en & 21
      ? (nt(n, t) ||
          ((n = eo()), (re.lanes |= n), (tn |= n), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), (Me = !0)), (e.memoizedState = n));
  }
  function bc(e, t) {
    var n = Q;
    (Q = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = Ii.transition;
    Ii.transition = {};
    try {
      e(!1), t();
    } finally {
      (Q = n), (Ii.transition = r);
    }
  }
  function Cs() {
    return Ge().memoizedState;
  }
  function ef(e, t, n) {
    var r = Vt(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      js(e))
    )
      Ps(t, n);
    else if (((n = ls(e, t, n, r)), n !== null)) {
      var l = Pe();
      ot(n, e, r, l), zs(n, t, r);
    }
  }
  function tf(e, t, n) {
    var r = Vt(e),
      l = {lane: r, action: n, hasEagerState: !1, eagerState: null, next: null};
    if (js(e)) Ps(t, l);
    else {
      var i = e.alternate;
      if (
        e.lanes === 0 &&
        (i === null || i.lanes === 0) &&
        ((i = t.lastRenderedReducer), i !== null)
      )
        try {
          var u = t.lastRenderedState,
            o = i(u, n);
          if (((l.hasEagerState = !0), (l.eagerState = o), nt(o, u))) {
            var s = t.interleaved;
            s === null
              ? ((l.next = l), Li(t))
              : ((l.next = s.next), (s.next = l)),
              (t.interleaved = l);
            return;
          }
        } catch {
        } finally {
        }
      (n = ls(e, t, l, r)),
        n !== null && ((l = Pe()), ot(n, e, r, l), zs(n, t, r));
    }
  }
  function js(e) {
    var t = e.alternate;
    return e === re || (t !== null && t === re);
  }
  function Ps(e, t) {
    or = ll = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function zs(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), Kl(e, n);
    }
  }
  var ol = {
      readContext: Xe,
      useCallback: ke,
      useContext: ke,
      useEffect: ke,
      useImperativeHandle: ke,
      useInsertionEffect: ke,
      useLayoutEffect: ke,
      useMemo: ke,
      useReducer: ke,
      useRef: ke,
      useState: ke,
      useDebugValue: ke,
      useDeferredValue: ke,
      useTransition: ke,
      useMutableSource: ke,
      useSyncExternalStore: ke,
      useId: ke,
      unstable_isNewReconciler: !1,
    },
    nf = {
      readContext: Xe,
      useCallback: function (e, t) {
        return (mt().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: Xe,
      useEffect: gs,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          il(4194308, 4, xs.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return il(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return il(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = mt();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = mt();
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = ef.bind(null, re, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = mt();
        return (e = {current: e}), (t.memoizedState = e);
      },
      useState: vs,
      useDebugValue: Wi,
      useDeferredValue: function (e) {
        return (mt().memoizedState = e);
      },
      useTransition: function () {
        var e = vs(!1),
          t = e[0];
        return (e = bc.bind(null, e[1])), (mt().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = re,
          l = mt();
        if (ee) {
          if (n === void 0) throw Error(h(407));
          n = n();
        } else {
          if (((n = t()), me === null)) throw Error(h(349));
          en & 30 || fs(r, t, n);
        }
        l.memoizedState = n;
        var i = {value: n, getSnapshot: t};
        return (
          (l.queue = i),
          gs(ps.bind(null, r, i, e), [e]),
          (r.flags |= 2048),
          cr(9, ds.bind(null, r, i, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = mt(),
          t = me.identifierPrefix;
        if (ee) {
          var n = xt,
            r = wt;
          (n = (r & ~(1 << (32 - tt(r) - 1))).toString(32) + n),
            (t = ':' + t + 'R' + n),
            (n = sr++),
            0 < n && (t += 'H' + n.toString(32)),
            (t += ':');
        } else (n = qc++), (t = ':' + t + 'r' + n.toString(32) + ':');
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    rf = {
      readContext: Xe,
      useCallback: Ss,
      useContext: Xe,
      useEffect: Qi,
      useImperativeHandle: ks,
      useInsertionEffect: _s,
      useLayoutEffect: ws,
      useMemo: Ns,
      useReducer: Hi,
      useRef: ys,
      useState: function () {
        return Hi(ar);
      },
      useDebugValue: Wi,
      useDeferredValue: function (e) {
        var t = Ge();
        return Es(t, ae.memoizedState, e);
      },
      useTransition: function () {
        var e = Hi(ar)[0],
          t = Ge().memoizedState;
        return [e, t];
      },
      useMutableSource: as,
      useSyncExternalStore: cs,
      useId: Cs,
      unstable_isNewReconciler: !1,
    },
    lf = {
      readContext: Xe,
      useCallback: Ss,
      useContext: Xe,
      useEffect: Qi,
      useImperativeHandle: ks,
      useInsertionEffect: _s,
      useLayoutEffect: ws,
      useMemo: Ns,
      useReducer: Vi,
      useRef: ys,
      useState: function () {
        return Vi(ar);
      },
      useDebugValue: Wi,
      useDeferredValue: function (e) {
        var t = Ge();
        return ae === null ? (t.memoizedState = e) : Es(t, ae.memoizedState, e);
      },
      useTransition: function () {
        var e = Vi(ar)[0],
          t = Ge().memoizedState;
        return [e, t];
      },
      useMutableSource: as,
      useSyncExternalStore: cs,
      useId: Cs,
      unstable_isNewReconciler: !1,
    };
  function lt(e, t) {
    if (e && e.defaultProps) {
      (t = N({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function $i(e, t, n, r) {
    (t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : N({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var sl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Yt(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Pe(),
        l = Vt(e),
        i = St(r, l);
      (i.payload = t),
        n != null && (i.callback = n),
        (t = Ut(e, i, l)),
        t !== null && (ot(t, e, l, r), el(t, e, l));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Pe(),
        l = Vt(e),
        i = St(r, l);
      (i.tag = 1),
        (i.payload = t),
        n != null && (i.callback = n),
        (t = Ut(e, i, l)),
        t !== null && (ot(t, e, l, r), el(t, e, l));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Pe(),
        r = Vt(e),
        l = St(n, r);
      (l.tag = 2),
        t != null && (l.callback = t),
        (t = Ut(e, l, r)),
        t !== null && (ot(t, e, r, n), el(t, e, r));
    },
  };
  function Ts(e, t, n, r, l, i, u) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(r, i, u)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Zn(n, r) || !Zn(l, i)
          : !0
    );
  }
  function Ls(e, t, n) {
    var r = !1,
      l = Dt,
      i = t.contextType;
    return (
      typeof i == 'object' && i !== null
        ? (i = Xe(i))
        : ((l = Re(t) ? Gt : xe.current),
          (r = t.contextTypes),
          (i = (r = r != null) ? _n(e, l) : Dt)),
      (t = new t(n, i)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = sl),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = i)),
      t
    );
  }
  function Rs(e, t, n, r) {
    (e = t.state),
      typeof t.componentWillReceiveProps == 'function' &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && sl.enqueueReplaceState(t, t.state, null);
  }
  function Ki(e, t, n, r) {
    var l = e.stateNode;
    (l.props = n), (l.state = e.memoizedState), (l.refs = {}), Ri(e);
    var i = t.contextType;
    typeof i == 'object' && i !== null
      ? (l.context = Xe(i))
      : ((i = Re(t) ? Gt : xe.current), (l.context = _n(e, i))),
      (l.state = e.memoizedState),
      (i = t.getDerivedStateFromProps),
      typeof i == 'function' && ($i(e, t, i, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == 'function' ||
        typeof l.getSnapshotBeforeUpdate == 'function' ||
        (typeof l.UNSAFE_componentWillMount != 'function' &&
          typeof l.componentWillMount != 'function') ||
        ((t = l.state),
        typeof l.componentWillMount == 'function' && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == 'function' &&
          l.UNSAFE_componentWillMount(),
        t !== l.state && sl.enqueueReplaceState(l, l.state, null),
        tl(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == 'function' && (e.flags |= 4194308);
  }
  function jn(e, t) {
    try {
      var n = '',
        r = t;
      do (n += I(r)), (r = r.return);
      while (r);
      var l = n;
    } catch (i) {
      l =
        `
Error generating stack: ` +
        i.message +
        `
` +
        i.stack;
    }
    return {value: e, source: t, stack: l, digest: null};
  }
  function Yi(e, t, n) {
    return {value: e, source: null, stack: n ?? null, digest: t ?? null};
  }
  function Xi(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var uf = typeof WeakMap == 'function' ? WeakMap : Map;
  function Ms(e, t, n) {
    (n = St(-1, n)), (n.tag = 3), (n.payload = {element: null});
    var r = t.value;
    return (
      (n.callback = function () {
        hl || ((hl = !0), (au = r)), Xi(e, t);
      }),
      n
    );
  }
  function Os(e, t, n) {
    (n = St(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == 'function') {
      var l = t.value;
      (n.payload = function () {
        return r(l);
      }),
        (n.callback = function () {
          Xi(e, t);
        });
    }
    var i = e.stateNode;
    return (
      i !== null &&
        typeof i.componentDidCatch == 'function' &&
        (n.callback = function () {
          Xi(e, t),
            typeof r != 'function' &&
              (Bt === null ? (Bt = new Set([this])) : Bt.add(this));
          var u = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: u !== null ? u : '',
          });
        }),
      n
    );
  }
  function Ds(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new uf();
      var l = new Set();
      r.set(t, l);
    } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
    l.has(n) || (l.add(n), (e = wf.bind(null, e, t, n)), t.then(e, e));
  }
  function Fs(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Is(e, t, n, r, l) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = l), e)
      : (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = St(-1, 1)), (t.tag = 2), Ut(n, t, 1))),
            (n.lanes |= 1)),
        e);
  }
  var of = we.ReactCurrentOwner,
    Me = !1;
  function je(e, t, n, r) {
    t.child = e === null ? rs(t, null, n, r) : Sn(t, e.child, n, r);
  }
  function Us(e, t, n, r, l) {
    n = n.render;
    var i = t.ref;
    return (
      En(t, l),
      (r = Ai(e, t, n, r, i, l)),
      (n = Bi()),
      e !== null && !Me
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          Nt(e, t, l))
        : (ee && n && ki(t), (t.flags |= 1), je(e, t, r, l), t.child)
    );
  }
  function As(e, t, n, r, l) {
    if (e === null) {
      var i = n.type;
      return typeof i == 'function' &&
        !vu(i) &&
        i.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = i), Bs(e, t, i, r, l))
        : ((e = xl(n.type, null, r, t, t.mode, l)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((i = e.child), !(e.lanes & l))) {
      var u = i.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : Zn), n(u, r) && e.ref === t.ref)
      )
        return Nt(e, t, l);
    }
    return (
      (t.flags |= 1),
      (e = Wt(i, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Bs(e, t, n, r, l) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (Zn(i, r) && e.ref === t.ref)
        if (((Me = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
          e.flags & 131072 && (Me = !0);
        else return (t.lanes = e.lanes), Nt(e, t, l);
    }
    return Gi(e, t, n, r, l);
  }
  function Hs(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      i = e !== null ? e.memoizedState : null;
    if (r.mode === 'hidden')
      if (!(t.mode & 1))
        (t.memoizedState = {baseLanes: 0, cachePool: null, transitions: null}),
          Y(zn, Ve),
          (Ve |= n);
      else {
        if (!(n & 1073741824))
          return (
            (e = i !== null ? i.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            Y(zn, Ve),
            (Ve |= e),
            null
          );
        (t.memoizedState = {baseLanes: 0, cachePool: null, transitions: null}),
          (r = i !== null ? i.baseLanes : n),
          Y(zn, Ve),
          (Ve |= r);
      }
    else
      i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
        Y(zn, Ve),
        (Ve |= r);
    return je(e, t, l, n), t.child;
  }
  function Vs(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Gi(e, t, n, r, l) {
    var i = Re(n) ? Gt : xe.current;
    return (
      (i = _n(t, i)),
      En(t, l),
      (n = Ai(e, t, n, r, i, l)),
      (r = Bi()),
      e !== null && !Me
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          Nt(e, t, l))
        : (ee && r && ki(t), (t.flags |= 1), je(e, t, n, l), t.child)
    );
  }
  function Qs(e, t, n, r, l) {
    if (Re(n)) {
      var i = !0;
      Kr(t);
    } else i = !1;
    if ((En(t, l), t.stateNode === null))
      cl(e, t), Ls(t, n, r), Ki(t, n, r, l), (r = !0);
    else if (e === null) {
      var u = t.stateNode,
        o = t.memoizedProps;
      u.props = o;
      var s = u.context,
        m = n.contextType;
      typeof m == 'object' && m !== null
        ? (m = Xe(m))
        : ((m = Re(n) ? Gt : xe.current), (m = _n(t, m)));
      var g = n.getDerivedStateFromProps,
        _ =
          typeof g == 'function' ||
          typeof u.getSnapshotBeforeUpdate == 'function';
      _ ||
        (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof u.componentWillReceiveProps != 'function') ||
        ((o !== r || s !== m) && Rs(t, u, r, m)),
        (It = !1);
      var v = t.memoizedState;
      (u.state = v),
        tl(t, r, u, l),
        (s = t.memoizedState),
        o !== r || v !== s || Le.current || It
          ? (typeof g == 'function' && ($i(t, n, g, r), (s = t.memoizedState)),
            (o = It || Ts(t, n, o, r, v, s, m))
              ? (_ ||
                  (typeof u.UNSAFE_componentWillMount != 'function' &&
                    typeof u.componentWillMount != 'function') ||
                  (typeof u.componentWillMount == 'function' &&
                    u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == 'function' &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == 'function' &&
                  (t.flags |= 4194308))
              : (typeof u.componentDidMount == 'function' &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = s)),
            (u.props = r),
            (u.state = s),
            (u.context = m),
            (r = o))
          : (typeof u.componentDidMount == 'function' && (t.flags |= 4194308),
            (r = !1));
    } else {
      (u = t.stateNode),
        is(e, t),
        (o = t.memoizedProps),
        (m = t.type === t.elementType ? o : lt(t.type, o)),
        (u.props = m),
        (_ = t.pendingProps),
        (v = u.context),
        (s = n.contextType),
        typeof s == 'object' && s !== null
          ? (s = Xe(s))
          : ((s = Re(n) ? Gt : xe.current), (s = _n(t, s)));
      var k = n.getDerivedStateFromProps;
      (g =
        typeof k == 'function' ||
        typeof u.getSnapshotBeforeUpdate == 'function') ||
        (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof u.componentWillReceiveProps != 'function') ||
        ((o !== _ || v !== s) && Rs(t, u, r, s)),
        (It = !1),
        (v = t.memoizedState),
        (u.state = v),
        tl(t, r, u, l);
      var E = t.memoizedState;
      o !== _ || v !== E || Le.current || It
        ? (typeof k == 'function' && ($i(t, n, k, r), (E = t.memoizedState)),
          (m = It || Ts(t, n, m, r, v, E, s) || !1)
            ? (g ||
                (typeof u.UNSAFE_componentWillUpdate != 'function' &&
                  typeof u.componentWillUpdate != 'function') ||
                (typeof u.componentWillUpdate == 'function' &&
                  u.componentWillUpdate(r, E, s),
                typeof u.UNSAFE_componentWillUpdate == 'function' &&
                  u.UNSAFE_componentWillUpdate(r, E, s)),
              typeof u.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == 'function' &&
                (t.flags |= 1024))
            : (typeof u.componentDidUpdate != 'function' ||
                (o === e.memoizedProps && v === e.memoizedState) ||
                (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != 'function' ||
                (o === e.memoizedProps && v === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = E)),
          (u.props = r),
          (u.state = E),
          (u.context = s),
          (r = m))
        : (typeof u.componentDidUpdate != 'function' ||
            (o === e.memoizedProps && v === e.memoizedState) ||
            (t.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != 'function' ||
            (o === e.memoizedProps && v === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return Zi(e, t, n, r, i, l);
  }
  function Zi(e, t, n, r, l, i) {
    Vs(e, t);
    var u = (t.flags & 128) !== 0;
    if (!r && !u) return l && Xo(t, n, !1), Nt(e, t, i);
    (r = t.stateNode), (of.current = t);
    var o =
      u && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && u
        ? ((t.child = Sn(t, e.child, null, i)), (t.child = Sn(t, null, o, i)))
        : je(e, t, o, i),
      (t.memoizedState = r.state),
      l && Xo(t, n, !0),
      t.child
    );
  }
  function Ws(e) {
    var t = e.stateNode;
    t.pendingContext
      ? Ko(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Ko(e, t.context, !1),
      Mi(e, t.containerInfo);
  }
  function $s(e, t, n, r, l) {
    return kn(), Ci(l), (t.flags |= 256), je(e, t, n, r), t.child;
  }
  var Ji = {dehydrated: null, treeContext: null, retryLane: 0};
  function qi(e) {
    return {baseLanes: e, cachePool: null, transitions: null};
  }
  function Ks(e, t, n) {
    var r = t.pendingProps,
      l = ne.current,
      i = !1,
      u = (t.flags & 128) !== 0,
      o;
    if (
      ((o = u) ||
        (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      o
        ? ((i = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (l |= 1),
      Y(ne, l & 1),
      e === null)
    )
      return (
        Ei(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (t.mode & 1
              ? e.data === '$!'
                ? (t.lanes = 8)
                : (t.lanes = 1073741824)
              : (t.lanes = 1),
            null)
          : ((u = r.children),
            (e = r.fallback),
            i
              ? ((r = t.mode),
                (i = t.child),
                (u = {mode: 'hidden', children: u}),
                !(r & 1) && i !== null
                  ? ((i.childLanes = 0), (i.pendingProps = u))
                  : (i = kl(u, r, 0, null)),
                (e = un(e, r, n, null)),
                (i.return = t),
                (e.return = t),
                (i.sibling = e),
                (t.child = i),
                (t.child.memoizedState = qi(n)),
                (t.memoizedState = Ji),
                e)
              : bi(t, u))
      );
    if (((l = e.memoizedState), l !== null && ((o = l.dehydrated), o !== null)))
      return sf(e, t, u, r, o, l, n);
    if (i) {
      (i = r.fallback), (u = t.mode), (l = e.child), (o = l.sibling);
      var s = {mode: 'hidden', children: r.children};
      return (
        !(u & 1) && t.child !== l
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = s),
            (t.deletions = null))
          : ((r = Wt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        o !== null ? (i = Wt(o, i)) : ((i = un(i, u, n, null)), (i.flags |= 2)),
        (i.return = t),
        (r.return = t),
        (r.sibling = i),
        (t.child = r),
        (r = i),
        (i = t.child),
        (u = e.child.memoizedState),
        (u =
          u === null
            ? qi(n)
            : {
                baseLanes: u.baseLanes | n,
                cachePool: null,
                transitions: u.transitions,
              }),
        (i.memoizedState = u),
        (i.childLanes = e.childLanes & ~n),
        (t.memoizedState = Ji),
        r
      );
    }
    return (
      (i = e.child),
      (e = i.sibling),
      (r = Wt(i, {mode: 'visible', children: r.children})),
      !(t.mode & 1) && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }
  function bi(e, t) {
    return (
      (t = kl({mode: 'visible', children: t}, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function al(e, t, n, r) {
    return (
      r !== null && Ci(r),
      Sn(t, e.child, null, n),
      (e = bi(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function sf(e, t, n, r, l, i, u) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = Yi(Error(h(422)))), al(e, t, u, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((i = r.fallback),
            (l = t.mode),
            (r = kl({mode: 'visible', children: r.children}, l, 0, null)),
            (i = un(i, l, u, null)),
            (i.flags |= 2),
            (r.return = t),
            (i.return = t),
            (r.sibling = i),
            (t.child = r),
            t.mode & 1 && Sn(t, e.child, null, u),
            (t.child.memoizedState = qi(u)),
            (t.memoizedState = Ji),
            i);
    if (!(t.mode & 1)) return al(e, t, u, null);
    if (l.data === '$!') {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var o = r.dgst;
      return (
        (r = o), (i = Error(h(419))), (r = Yi(i, r, void 0)), al(e, t, u, r)
      );
    }
    if (((o = (u & e.childLanes) !== 0), Me || o)) {
      if (((r = me), r !== null)) {
        switch (u & -u) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
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
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        (l = l & (r.suspendedLanes | u) ? 0 : l),
          l !== 0 &&
            l !== i.retryLane &&
            ((i.retryLane = l), kt(e, l), ot(r, e, l, -1));
      }
      return hu(), (r = Yi(Error(h(421)))), al(e, t, u, r);
    }
    return l.data === '$?'
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = xf.bind(null, e)),
        (l._reactRetry = t),
        null)
      : ((e = i.treeContext),
        (He = Mt(l.nextSibling)),
        (Be = t),
        (ee = !0),
        (rt = null),
        e !== null &&
          ((Ke[Ye++] = wt),
          (Ke[Ye++] = xt),
          (Ke[Ye++] = Zt),
          (wt = e.id),
          (xt = e.overflow),
          (Zt = t)),
        (t = bi(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function Ys(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Ti(e.return, t, n);
  }
  function eu(e, t, n, r, l) {
    var i = e.memoizedState;
    i === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: l,
        })
      : ((i.isBackwards = t),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = r),
        (i.tail = n),
        (i.tailMode = l));
  }
  function Xs(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      i = r.tail;
    if ((je(e, t, r.children, n), (r = ne.current), r & 2))
      (r = (r & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Ys(e, n, t);
          else if (e.tag === 19) Ys(e, n, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      r &= 1;
    }
    if ((Y(ne, r), !(t.mode & 1))) t.memoizedState = null;
    else
      switch (l) {
        case 'forwards':
          for (n = t.child, l = null; n !== null; )
            (e = n.alternate),
              e !== null && nl(e) === null && (l = n),
              (n = n.sibling);
          (n = l),
            n === null
              ? ((l = t.child), (t.child = null))
              : ((l = n.sibling), (n.sibling = null)),
            eu(t, !1, l, n, i);
          break;
        case 'backwards':
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && nl(e) === null)) {
              t.child = l;
              break;
            }
            (e = l.sibling), (l.sibling = n), (n = l), (l = e);
          }
          eu(t, !0, n, null, i);
          break;
        case 'together':
          eu(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function cl(e, t) {
    !(t.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Nt(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (tn |= t.lanes),
      !(n & t.childLanes))
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(h(153));
    if (t.child !== null) {
      for (
        e = t.child, n = Wt(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = Wt(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function af(e, t, n) {
    switch (t.tag) {
      case 3:
        Ws(t), kn();
        break;
      case 5:
        ss(t);
        break;
      case 1:
        Re(t.type) && Kr(t);
        break;
      case 4:
        Mi(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        Y(qr, r._currentValue), (r._currentValue = l);
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (Y(ne, ne.current & 1), (t.flags |= 128), null)
            : n & t.child.childLanes
              ? Ks(e, t, n)
              : (Y(ne, ne.current & 1),
                (e = Nt(e, t, n)),
                e !== null ? e.sibling : null);
        Y(ne, ne.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
          if (r) return Xs(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          Y(ne, ne.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), Hs(e, t, n);
    }
    return Nt(e, t, n);
  }
  var Gs, tu, Zs, Js;
  (Gs = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }),
    (tu = function () {}),
    (Zs = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        (e = t.stateNode), bt(pt.current);
        var i = null;
        switch (n) {
          case 'input':
            (l = Tl(e, l)), (r = Tl(e, r)), (i = []);
            break;
          case 'select':
            (l = N({}, l, {value: void 0})),
              (r = N({}, r, {value: void 0})),
              (i = []);
            break;
          case 'textarea':
            (l = Ml(e, l)), (r = Ml(e, r)), (i = []);
            break;
          default:
            typeof l.onClick != 'function' &&
              typeof r.onClick == 'function' &&
              (e.onclick = Qr);
        }
        Dl(n, r);
        var u;
        n = null;
        for (m in l)
          if (!r.hasOwnProperty(m) && l.hasOwnProperty(m) && l[m] != null)
            if (m === 'style') {
              var o = l[m];
              for (u in o) o.hasOwnProperty(u) && (n || (n = {}), (n[u] = ''));
            } else
              m !== 'dangerouslySetInnerHTML' &&
                m !== 'children' &&
                m !== 'suppressContentEditableWarning' &&
                m !== 'suppressHydrationWarning' &&
                m !== 'autoFocus' &&
                (B.hasOwnProperty(m)
                  ? i || (i = [])
                  : (i = i || []).push(m, null));
        for (m in r) {
          var s = r[m];
          if (
            ((o = l != null ? l[m] : void 0),
            r.hasOwnProperty(m) && s !== o && (s != null || o != null))
          )
            if (m === 'style')
              if (o) {
                for (u in o)
                  !o.hasOwnProperty(u) ||
                    (s && s.hasOwnProperty(u)) ||
                    (n || (n = {}), (n[u] = ''));
                for (u in s)
                  s.hasOwnProperty(u) &&
                    o[u] !== s[u] &&
                    (n || (n = {}), (n[u] = s[u]));
              } else n || (i || (i = []), i.push(m, n)), (n = s);
            else
              m === 'dangerouslySetInnerHTML'
                ? ((s = s ? s.__html : void 0),
                  (o = o ? o.__html : void 0),
                  s != null && o !== s && (i = i || []).push(m, s))
                : m === 'children'
                  ? (typeof s != 'string' && typeof s != 'number') ||
                    (i = i || []).push(m, '' + s)
                  : m !== 'suppressContentEditableWarning' &&
                    m !== 'suppressHydrationWarning' &&
                    (B.hasOwnProperty(m)
                      ? (s != null && m === 'onScroll' && G('scroll', e),
                        i || o === s || (i = []))
                      : (i = i || []).push(m, s));
        }
        n && (i = i || []).push('style', n);
        var m = i;
        (t.updateQueue = m) && (t.flags |= 4);
      }
    }),
    (Js = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    });
  function fr(e, t) {
    if (!ee)
      switch (e.tailMode) {
        case 'hidden':
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), (t = t.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case 'collapsed':
          n = e.tail;
          for (var r = null; n !== null; )
            n.alternate !== null && (r = n), (n = n.sibling);
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function Se(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var l = e.child; l !== null; )
        (n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags & 14680064),
          (r |= l.flags & 14680064),
          (l.return = e),
          (l = l.sibling);
    else
      for (l = e.child; l !== null; )
        (n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags),
          (r |= l.flags),
          (l.return = e),
          (l = l.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
  }
  function cf(e, t, n) {
    var r = t.pendingProps;
    switch ((Si(t), t.tag)) {
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
        return Se(t), null;
      case 1:
        return Re(t.type) && $r(), Se(t), null;
      case 3:
        return (
          (r = t.stateNode),
          Cn(),
          Z(Le),
          Z(xe),
          Fi(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (Zr(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), rt !== null && (du(rt), (rt = null)))),
          tu(e, t),
          Se(t),
          null
        );
      case 5:
        Oi(t);
        var l = bt(ur.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          Zs(e, t, n, r, l),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(h(166));
            return Se(t), null;
          }
          if (((e = bt(pt.current)), Zr(t))) {
            (r = t.stateNode), (n = t.type);
            var i = t.memoizedProps;
            switch (((r[dt] = t), (r[tr] = i), (e = (t.mode & 1) !== 0), n)) {
              case 'dialog':
                G('cancel', r), G('close', r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                G('load', r);
                break;
              case 'video':
              case 'audio':
                for (l = 0; l < qn.length; l++) G(qn[l], r);
                break;
              case 'source':
                G('error', r);
                break;
              case 'img':
              case 'image':
              case 'link':
                G('error', r), G('load', r);
                break;
              case 'details':
                G('toggle', r);
                break;
              case 'input':
                Tu(r, i), G('invalid', r);
                break;
              case 'select':
                (r._wrapperState = {wasMultiple: !!i.multiple}),
                  G('invalid', r);
                break;
              case 'textarea':
                Mu(r, i), G('invalid', r);
            }
            Dl(n, i), (l = null);
            for (var u in i)
              if (i.hasOwnProperty(u)) {
                var o = i[u];
                u === 'children'
                  ? typeof o == 'string'
                    ? r.textContent !== o &&
                      (i.suppressHydrationWarning !== !0 &&
                        Vr(r.textContent, o, e),
                      (l = ['children', o]))
                    : typeof o == 'number' &&
                      r.textContent !== '' + o &&
                      (i.suppressHydrationWarning !== !0 &&
                        Vr(r.textContent, o, e),
                      (l = ['children', '' + o]))
                  : B.hasOwnProperty(u) &&
                    o != null &&
                    u === 'onScroll' &&
                    G('scroll', r);
              }
            switch (n) {
              case 'input':
                _r(r), Ru(r, i, !0);
                break;
              case 'textarea':
                _r(r), Du(r);
                break;
              case 'select':
              case 'option':
                break;
              default:
                typeof i.onClick == 'function' && (r.onclick = Qr);
            }
            (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
          } else {
            (u = l.nodeType === 9 ? l : l.ownerDocument),
              e === 'http://www.w3.org/1999/xhtml' && (e = Fu(n)),
              e === 'http://www.w3.org/1999/xhtml'
                ? n === 'script'
                  ? ((e = u.createElement('div')),
                    (e.innerHTML = '<script><\/script>'),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == 'string'
                    ? (e = u.createElement(n, {is: r.is}))
                    : ((e = u.createElement(n)),
                      n === 'select' &&
                        ((u = e),
                        r.multiple
                          ? (u.multiple = !0)
                          : r.size && (u.size = r.size)))
                : (e = u.createElementNS(e, n)),
              (e[dt] = t),
              (e[tr] = r),
              Gs(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((u = Fl(n, r)), n)) {
                case 'dialog':
                  G('cancel', e), G('close', e), (l = r);
                  break;
                case 'iframe':
                case 'object':
                case 'embed':
                  G('load', e), (l = r);
                  break;
                case 'video':
                case 'audio':
                  for (l = 0; l < qn.length; l++) G(qn[l], e);
                  l = r;
                  break;
                case 'source':
                  G('error', e), (l = r);
                  break;
                case 'img':
                case 'image':
                case 'link':
                  G('error', e), G('load', e), (l = r);
                  break;
                case 'details':
                  G('toggle', e), (l = r);
                  break;
                case 'input':
                  Tu(e, r), (l = Tl(e, r)), G('invalid', e);
                  break;
                case 'option':
                  l = r;
                  break;
                case 'select':
                  (e._wrapperState = {wasMultiple: !!r.multiple}),
                    (l = N({}, r, {value: void 0})),
                    G('invalid', e);
                  break;
                case 'textarea':
                  Mu(e, r), (l = Ml(e, r)), G('invalid', e);
                  break;
                default:
                  l = r;
              }
              Dl(n, l), (o = l);
              for (i in o)
                if (o.hasOwnProperty(i)) {
                  var s = o[i];
                  i === 'style'
                    ? Au(e, s)
                    : i === 'dangerouslySetInnerHTML'
                      ? ((s = s ? s.__html : void 0), s != null && Iu(e, s))
                      : i === 'children'
                        ? typeof s == 'string'
                          ? (n !== 'textarea' || s !== '') && Mn(e, s)
                          : typeof s == 'number' && Mn(e, '' + s)
                        : i !== 'suppressContentEditableWarning' &&
                          i !== 'suppressHydrationWarning' &&
                          i !== 'autoFocus' &&
                          (B.hasOwnProperty(i)
                            ? s != null && i === 'onScroll' && G('scroll', e)
                            : s != null && qe(e, i, s, u));
                }
              switch (n) {
                case 'input':
                  _r(e), Ru(e, r, !1);
                  break;
                case 'textarea':
                  _r(e), Du(e);
                  break;
                case 'option':
                  r.value != null && e.setAttribute('value', '' + V(r.value));
                  break;
                case 'select':
                  (e.multiple = !!r.multiple),
                    (i = r.value),
                    i != null
                      ? on(e, !!r.multiple, i, !1)
                      : r.defaultValue != null &&
                        on(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof l.onClick == 'function' && (e.onclick = Qr);
              }
              switch (n) {
                case 'button':
                case 'input':
                case 'select':
                case 'textarea':
                  r = !!r.autoFocus;
                  break e;
                case 'img':
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return Se(t), null;
      case 6:
        if (e && t.stateNode != null) Js(e, t, e.memoizedProps, r);
        else {
          if (typeof r != 'string' && t.stateNode === null) throw Error(h(166));
          if (((n = bt(ur.current)), bt(pt.current), Zr(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[dt] = t),
              (i = r.nodeValue !== n) && ((e = Be), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Vr(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Vr(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            i && (t.flags |= 4);
          } else
            (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[dt] = t),
              (t.stateNode = r);
        }
        return Se(t), null;
      case 13:
        if (
          (Z(ne),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (ee && He !== null && t.mode & 1 && !(t.flags & 128))
            es(), kn(), (t.flags |= 98560), (i = !1);
          else if (((i = Zr(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!i) throw Error(h(318));
              if (
                ((i = t.memoizedState),
                (i = i !== null ? i.dehydrated : null),
                !i)
              )
                throw Error(h(317));
              i[dt] = t;
            } else
              kn(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4);
            Se(t), (i = !1);
          } else rt !== null && (du(rt), (rt = null)), (i = !0);
          if (!i) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              t.mode & 1 &&
                (e === null || ne.current & 1 ? ce === 0 && (ce = 3) : hu())),
            t.updateQueue !== null && (t.flags |= 4),
            Se(t),
            null);
      case 4:
        return (
          Cn(),
          tu(e, t),
          e === null && bn(t.stateNode.containerInfo),
          Se(t),
          null
        );
      case 10:
        return zi(t.type._context), Se(t), null;
      case 17:
        return Re(t.type) && $r(), Se(t), null;
      case 19:
        if ((Z(ne), (i = t.memoizedState), i === null)) return Se(t), null;
        if (((r = (t.flags & 128) !== 0), (u = i.rendering), u === null))
          if (r) fr(i, !1);
          else {
            if (ce !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((u = nl(e)), u !== null)) {
                  for (
                    t.flags |= 128,
                      fr(i, !1),
                      r = u.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;

                  )
                    (i = n),
                      (e = r),
                      (i.flags &= 14680066),
                      (u = i.alternate),
                      u === null
                        ? ((i.childLanes = 0),
                          (i.lanes = e),
                          (i.child = null),
                          (i.subtreeFlags = 0),
                          (i.memoizedProps = null),
                          (i.memoizedState = null),
                          (i.updateQueue = null),
                          (i.dependencies = null),
                          (i.stateNode = null))
                        : ((i.childLanes = u.childLanes),
                          (i.lanes = u.lanes),
                          (i.child = u.child),
                          (i.subtreeFlags = 0),
                          (i.deletions = null),
                          (i.memoizedProps = u.memoizedProps),
                          (i.memoizedState = u.memoizedState),
                          (i.updateQueue = u.updateQueue),
                          (i.type = u.type),
                          (e = u.dependencies),
                          (i.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling);
                  return Y(ne, (ne.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            i.tail !== null &&
              ue() > Tn &&
              ((t.flags |= 128), (r = !0), fr(i, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = nl(u)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                fr(i, !0),
                i.tail === null &&
                  i.tailMode === 'hidden' &&
                  !u.alternate &&
                  !ee)
              )
                return Se(t), null;
            } else
              2 * ue() - i.renderingStartTime > Tn &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), fr(i, !1), (t.lanes = 4194304));
          i.isBackwards
            ? ((u.sibling = t.child), (t.child = u))
            : ((n = i.last),
              n !== null ? (n.sibling = u) : (t.child = u),
              (i.last = u));
        }
        return i.tail !== null
          ? ((t = i.tail),
            (i.rendering = t),
            (i.tail = t.sibling),
            (i.renderingStartTime = ue()),
            (t.sibling = null),
            (n = ne.current),
            Y(ne, r ? (n & 1) | 2 : n & 1),
            t)
          : (Se(t), null);
      case 22:
      case 23:
        return (
          mu(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && t.mode & 1
            ? Ve & 1073741824 &&
              (Se(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Se(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(h(156, t.tag));
  }
  function ff(e, t) {
    switch ((Si(t), t.tag)) {
      case 1:
        return (
          Re(t.type) && $r(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Cn(),
          Z(Le),
          Z(xe),
          Fi(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return Oi(t), null;
      case 13:
        if (
          (Z(ne), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(h(340));
          kn();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return Z(ne), null;
      case 4:
        return Cn(), null;
      case 10:
        return zi(t.type._context), null;
      case 22:
      case 23:
        return mu(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var fl = !1,
    Ne = !1,
    df = typeof WeakSet == 'function' ? WeakSet : Set,
    S = null;
  function Pn(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == 'function')
        try {
          n(null);
        } catch (r) {
          ie(e, t, r);
        }
      else n.current = null;
  }
  function nu(e, t, n) {
    try {
      n();
    } catch (r) {
      ie(e, t, r);
    }
  }
  var qs = !1;
  function pf(e, t) {
    if (((mi = Lr), (e = To()), ui(e))) {
      if ('selectionStart' in e)
        var n = {start: e.selectionStart, end: e.selectionEnd};
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var l = r.anchorOffset,
              i = r.focusNode;
            r = r.focusOffset;
            try {
              n.nodeType, i.nodeType;
            } catch {
              n = null;
              break e;
            }
            var u = 0,
              o = -1,
              s = -1,
              m = 0,
              g = 0,
              _ = e,
              v = null;
            t: for (;;) {
              for (
                var k;
                _ !== n || (l !== 0 && _.nodeType !== 3) || (o = u + l),
                  _ !== i || (r !== 0 && _.nodeType !== 3) || (s = u + r),
                  _.nodeType === 3 && (u += _.nodeValue.length),
                  (k = _.firstChild) !== null;

              )
                (v = _), (_ = k);
              for (;;) {
                if (_ === e) break t;
                if (
                  (v === n && ++m === l && (o = u),
                  v === i && ++g === r && (s = u),
                  (k = _.nextSibling) !== null)
                )
                  break;
                (_ = v), (v = _.parentNode);
              }
              _ = k;
            }
            n = o === -1 || s === -1 ? null : {start: o, end: s};
          } else n = null;
        }
      n = n || {start: 0, end: 0};
    } else n = null;
    for (hi = {focusedElem: e, selectionRange: n}, Lr = !1, S = t; S !== null; )
      if (((t = S), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (S = e);
      else
        for (; S !== null; ) {
          t = S;
          try {
            var E = t.alternate;
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (E !== null) {
                    var C = E.memoizedProps,
                      oe = E.memoizedState,
                      f = t.stateNode,
                      a = f.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? C : lt(t.type, C),
                        oe,
                      );
                    f.__reactInternalSnapshotBeforeUpdate = a;
                  }
                  break;
                case 3:
                  var p = t.stateNode.containerInfo;
                  p.nodeType === 1
                    ? (p.textContent = '')
                    : p.nodeType === 9 &&
                      p.documentElement &&
                      p.removeChild(p.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(h(163));
              }
          } catch (w) {
            ie(t, t.return, w);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (S = e);
            break;
          }
          S = t.return;
        }
    return (E = qs), (qs = !1), E;
  }
  function dr(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var i = l.destroy;
          (l.destroy = void 0), i !== void 0 && nu(t, n, i);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function dl(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function ru(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == 'function' ? t(e) : (t.current = e);
    }
  }
  function bs(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), bs(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[dt],
          delete t[tr],
          delete t[_i],
          delete t[Xc],
          delete t[Gc])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function ea(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function ta(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || ea(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function lu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = Qr));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (lu(e, t, n), e = e.sibling; e !== null; )
        lu(e, t, n), (e = e.sibling);
  }
  function iu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
      for (iu(e, t, n), e = e.sibling; e !== null; )
        iu(e, t, n), (e = e.sibling);
  }
  var ve = null,
    it = !1;
  function At(e, t, n) {
    for (n = n.child; n !== null; ) na(e, t, n), (n = n.sibling);
  }
  function na(e, t, n) {
    if (ft && typeof ft.onCommitFiberUnmount == 'function')
      try {
        ft.onCommitFiberUnmount(Er, n);
      } catch {}
    switch (n.tag) {
      case 5:
        Ne || Pn(n, t);
      case 6:
        var r = ve,
          l = it;
        (ve = null),
          At(e, t, n),
          (ve = r),
          (it = l),
          ve !== null &&
            (it
              ? ((e = ve),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : ve.removeChild(n.stateNode));
        break;
      case 18:
        ve !== null &&
          (it
            ? ((e = ve),
              (n = n.stateNode),
              e.nodeType === 8
                ? gi(e.parentNode, n)
                : e.nodeType === 1 && gi(e, n),
              Wn(e))
            : gi(ve, n.stateNode));
        break;
      case 4:
        (r = ve),
          (l = it),
          (ve = n.stateNode.containerInfo),
          (it = !0),
          At(e, t, n),
          (ve = r),
          (it = l);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !Ne &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          l = r = r.next;
          do {
            var i = l,
              u = i.destroy;
            (i = i.tag),
              u !== void 0 && (i & 2 || i & 4) && nu(n, t, u),
              (l = l.next);
          } while (l !== r);
        }
        At(e, t, n);
        break;
      case 1:
        if (
          !Ne &&
          (Pn(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == 'function')
        )
          try {
            (r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount();
          } catch (o) {
            ie(n, t, o);
          }
        At(e, t, n);
        break;
      case 21:
        At(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((Ne = (r = Ne) || n.memoizedState !== null), At(e, t, n), (Ne = r))
          : At(e, t, n);
        break;
      default:
        At(e, t, n);
    }
  }
  function ra(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new df()),
        t.forEach(function (r) {
          var l = kf.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(l, l));
        });
    }
  }
  function ut(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        try {
          var i = e,
            u = t,
            o = u;
          e: for (; o !== null; ) {
            switch (o.tag) {
              case 5:
                (ve = o.stateNode), (it = !1);
                break e;
              case 3:
                (ve = o.stateNode.containerInfo), (it = !0);
                break e;
              case 4:
                (ve = o.stateNode.containerInfo), (it = !0);
                break e;
            }
            o = o.return;
          }
          if (ve === null) throw Error(h(160));
          na(i, u, l), (ve = null), (it = !1);
          var s = l.alternate;
          s !== null && (s.return = null), (l.return = null);
        } catch (m) {
          ie(l, t, m);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) la(t, e), (t = t.sibling);
  }
  function la(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((ut(t, e), ht(e), r & 4)) {
          try {
            dr(3, e, e.return), dl(3, e);
          } catch (C) {
            ie(e, e.return, C);
          }
          try {
            dr(5, e, e.return);
          } catch (C) {
            ie(e, e.return, C);
          }
        }
        break;
      case 1:
        ut(t, e), ht(e), r & 512 && n !== null && Pn(n, n.return);
        break;
      case 5:
        if (
          (ut(t, e),
          ht(e),
          r & 512 && n !== null && Pn(n, n.return),
          e.flags & 32)
        ) {
          var l = e.stateNode;
          try {
            Mn(l, '');
          } catch (C) {
            ie(e, e.return, C);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var i = e.memoizedProps,
            u = n !== null ? n.memoizedProps : i,
            o = e.type,
            s = e.updateQueue;
          if (((e.updateQueue = null), s !== null))
            try {
              o === 'input' && i.type === 'radio' && i.name != null && Lu(l, i),
                Fl(o, u);
              var m = Fl(o, i);
              for (u = 0; u < s.length; u += 2) {
                var g = s[u],
                  _ = s[u + 1];
                g === 'style'
                  ? Au(l, _)
                  : g === 'dangerouslySetInnerHTML'
                    ? Iu(l, _)
                    : g === 'children'
                      ? Mn(l, _)
                      : qe(l, g, _, m);
              }
              switch (o) {
                case 'input':
                  Ll(l, i);
                  break;
                case 'textarea':
                  Ou(l, i);
                  break;
                case 'select':
                  var v = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!i.multiple;
                  var k = i.value;
                  k != null
                    ? on(l, !!i.multiple, k, !1)
                    : v !== !!i.multiple &&
                      (i.defaultValue != null
                        ? on(l, !!i.multiple, i.defaultValue, !0)
                        : on(l, !!i.multiple, i.multiple ? [] : '', !1));
              }
              l[tr] = i;
            } catch (C) {
              ie(e, e.return, C);
            }
        }
        break;
      case 6:
        if ((ut(t, e), ht(e), r & 4)) {
          if (e.stateNode === null) throw Error(h(162));
          (l = e.stateNode), (i = e.memoizedProps);
          try {
            l.nodeValue = i;
          } catch (C) {
            ie(e, e.return, C);
          }
        }
        break;
      case 3:
        if (
          (ut(t, e), ht(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            Wn(t.containerInfo);
          } catch (C) {
            ie(e, e.return, C);
          }
        break;
      case 4:
        ut(t, e), ht(e);
        break;
      case 13:
        ut(t, e),
          ht(e),
          (l = e.child),
          l.flags & 8192 &&
            ((i = l.memoizedState !== null),
            (l.stateNode.isHidden = i),
            !i ||
              (l.alternate !== null && l.alternate.memoizedState !== null) ||
              (su = ue())),
          r & 4 && ra(e);
        break;
      case 22:
        if (
          ((g = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((Ne = (m = Ne) || g), ut(t, e), (Ne = m)) : ut(t, e),
          ht(e),
          r & 8192)
        ) {
          if (
            ((m = e.memoizedState !== null),
            (e.stateNode.isHidden = m) && !g && e.mode & 1)
          )
            for (S = e, g = e.child; g !== null; ) {
              for (_ = S = g; S !== null; ) {
                switch (((v = S), (k = v.child), v.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    dr(4, v, v.return);
                    break;
                  case 1:
                    Pn(v, v.return);
                    var E = v.stateNode;
                    if (typeof E.componentWillUnmount == 'function') {
                      (r = v), (n = v.return);
                      try {
                        (t = r),
                          (E.props = t.memoizedProps),
                          (E.state = t.memoizedState),
                          E.componentWillUnmount();
                      } catch (C) {
                        ie(r, n, C);
                      }
                    }
                    break;
                  case 5:
                    Pn(v, v.return);
                    break;
                  case 22:
                    if (v.memoizedState !== null) {
                      oa(_);
                      continue;
                    }
                }
                k !== null ? ((k.return = v), (S = k)) : oa(_);
              }
              g = g.sibling;
            }
          e: for (g = null, _ = e; ; ) {
            if (_.tag === 5) {
              if (g === null) {
                g = _;
                try {
                  (l = _.stateNode),
                    m
                      ? ((i = l.style),
                        typeof i.setProperty == 'function'
                          ? i.setProperty('display', 'none', 'important')
                          : (i.display = 'none'))
                      : ((o = _.stateNode),
                        (s = _.memoizedProps.style),
                        (u =
                          s != null && s.hasOwnProperty('display')
                            ? s.display
                            : null),
                        (o.style.display = Uu('display', u)));
                } catch (C) {
                  ie(e, e.return, C);
                }
              }
            } else if (_.tag === 6) {
              if (g === null)
                try {
                  _.stateNode.nodeValue = m ? '' : _.memoizedProps;
                } catch (C) {
                  ie(e, e.return, C);
                }
            } else if (
              ((_.tag !== 22 && _.tag !== 23) ||
                _.memoizedState === null ||
                _ === e) &&
              _.child !== null
            ) {
              (_.child.return = _), (_ = _.child);
              continue;
            }
            if (_ === e) break e;
            for (; _.sibling === null; ) {
              if (_.return === null || _.return === e) break e;
              g === _ && (g = null), (_ = _.return);
            }
            g === _ && (g = null),
              (_.sibling.return = _.return),
              (_ = _.sibling);
          }
        }
        break;
      case 19:
        ut(t, e), ht(e), r & 4 && ra(e);
        break;
      case 21:
        break;
      default:
        ut(t, e), ht(e);
    }
  }
  function ht(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (ea(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(h(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Mn(l, ''), (r.flags &= -33));
            var i = ta(e);
            iu(e, i, l);
            break;
          case 3:
          case 4:
            var u = r.stateNode.containerInfo,
              o = ta(e);
            lu(e, o, u);
            break;
          default:
            throw Error(h(161));
        }
      } catch (s) {
        ie(e, e.return, s);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function mf(e, t, n) {
    (S = e), ia(e);
  }
  function ia(e, t, n) {
    for (var r = (e.mode & 1) !== 0; S !== null; ) {
      var l = S,
        i = l.child;
      if (l.tag === 22 && r) {
        var u = l.memoizedState !== null || fl;
        if (!u) {
          var o = l.alternate,
            s = (o !== null && o.memoizedState !== null) || Ne;
          o = fl;
          var m = Ne;
          if (((fl = u), (Ne = s) && !m))
            for (S = l; S !== null; )
              (u = S),
                (s = u.child),
                u.tag === 22 && u.memoizedState !== null
                  ? sa(l)
                  : s !== null
                    ? ((s.return = u), (S = s))
                    : sa(l);
          for (; i !== null; ) (S = i), ia(i), (i = i.sibling);
          (S = l), (fl = o), (Ne = m);
        }
        ua(e);
      } else
        l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (S = i)) : ua(e);
    }
  }
  function ua(e) {
    for (; S !== null; ) {
      var t = S;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Ne || dl(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !Ne)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : lt(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      l,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate,
                    );
                  }
                var i = t.updateQueue;
                i !== null && os(t, i, r);
                break;
              case 3:
                var u = t.updateQueue;
                if (u !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  os(t, u, n);
                }
                break;
              case 5:
                var o = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = o;
                  var s = t.memoizedProps;
                  switch (t.type) {
                    case 'button':
                    case 'input':
                    case 'select':
                    case 'textarea':
                      s.autoFocus && n.focus();
                      break;
                    case 'img':
                      s.src && (n.src = s.src);
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
                  var m = t.alternate;
                  if (m !== null) {
                    var g = m.memoizedState;
                    if (g !== null) {
                      var _ = g.dehydrated;
                      _ !== null && Wn(_);
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
                throw Error(h(163));
            }
          Ne || (t.flags & 512 && ru(t));
        } catch (v) {
          ie(t, t.return, v);
        }
      }
      if (t === e) {
        S = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        (n.return = t.return), (S = n);
        break;
      }
      S = t.return;
    }
  }
  function oa(e) {
    for (; S !== null; ) {
      var t = S;
      if (t === e) {
        S = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        (n.return = t.return), (S = n);
        break;
      }
      S = t.return;
    }
  }
  function sa(e) {
    for (; S !== null; ) {
      var t = S;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              dl(4, t);
            } catch (s) {
              ie(t, n, s);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == 'function') {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (s) {
                ie(t, l, s);
              }
            }
            var i = t.return;
            try {
              ru(t);
            } catch (s) {
              ie(t, i, s);
            }
            break;
          case 5:
            var u = t.return;
            try {
              ru(t);
            } catch (s) {
              ie(t, u, s);
            }
        }
      } catch (s) {
        ie(t, t.return, s);
      }
      if (t === e) {
        S = null;
        break;
      }
      var o = t.sibling;
      if (o !== null) {
        (o.return = t.return), (S = o);
        break;
      }
      S = t.return;
    }
  }
  var hf = Math.ceil,
    pl = we.ReactCurrentDispatcher,
    uu = we.ReactCurrentOwner,
    Ze = we.ReactCurrentBatchConfig,
    F = 0,
    me = null,
    se = null,
    ye = 0,
    Ve = 0,
    zn = Ot(0),
    ce = 0,
    pr = null,
    tn = 0,
    ml = 0,
    ou = 0,
    mr = null,
    Oe = null,
    su = 0,
    Tn = 1 / 0,
    Et = null,
    hl = !1,
    au = null,
    Bt = null,
    vl = !1,
    Ht = null,
    yl = 0,
    hr = 0,
    cu = null,
    gl = -1,
    _l = 0;
  function Pe() {
    return F & 6 ? ue() : gl !== -1 ? gl : (gl = ue());
  }
  function Vt(e) {
    return e.mode & 1
      ? F & 2 && ye !== 0
        ? ye & -ye
        : Jc.transition !== null
          ? (_l === 0 && (_l = eo()), _l)
          : ((e = Q),
            e !== 0 ||
              ((e = window.event), (e = e === void 0 ? 16 : ao(e.type))),
            e)
      : 1;
  }
  function ot(e, t, n, r) {
    if (50 < hr) throw ((hr = 0), (cu = null), Error(h(185)));
    An(e, n, r),
      (!(F & 2) || e !== me) &&
        (e === me && (!(F & 2) && (ml |= n), ce === 4 && Qt(e, ye)),
        De(e, r),
        n === 1 && F === 0 && !(t.mode & 1) && ((Tn = ue() + 500), Yr && Ft()));
  }
  function De(e, t) {
    var n = e.callbackNode;
    Ja(e, t);
    var r = Pr(e, e === me ? ye : 0);
    if (r === 0)
      n !== null && Ju(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && Ju(n), t === 1))
        e.tag === 0 ? Zc(ca.bind(null, e)) : Go(ca.bind(null, e)),
          Kc(function () {
            !(F & 6) && Ft();
          }),
          (n = null);
      else {
        switch (to(r)) {
          case 1:
            n = Ql;
            break;
          case 4:
            n = qu;
            break;
          case 16:
            n = Nr;
            break;
          case 536870912:
            n = bu;
            break;
          default:
            n = Nr;
        }
        n = ga(n, aa.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function aa(e, t) {
    if (((gl = -1), (_l = 0), F & 6)) throw Error(h(327));
    var n = e.callbackNode;
    if (Ln() && e.callbackNode !== n) return null;
    var r = Pr(e, e === me ? ye : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = wl(e, r);
    else {
      t = r;
      var l = F;
      F |= 2;
      var i = da();
      (me !== e || ye !== t) && ((Et = null), (Tn = ue() + 500), rn(e, t));
      do
        try {
          gf();
          break;
        } catch (o) {
          fa(e, o);
        }
      while (!0);
      Pi(),
        (pl.current = i),
        (F = l),
        se !== null ? (t = 0) : ((me = null), (ye = 0), (t = ce));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((l = Wl(e)), l !== 0 && ((r = l), (t = fu(e, l)))),
        t === 1)
      )
        throw ((n = pr), rn(e, 0), Qt(e, r), De(e, ue()), n);
      if (t === 6) Qt(e, r);
      else {
        if (
          ((l = e.current.alternate),
          !(r & 30) &&
            !vf(l) &&
            ((t = wl(e, r)),
            t === 2 && ((i = Wl(e)), i !== 0 && ((r = i), (t = fu(e, i)))),
            t === 1))
        )
          throw ((n = pr), rn(e, 0), Qt(e, r), De(e, ue()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(h(345));
          case 2:
            ln(e, Oe, Et);
            break;
          case 3:
            if (
              (Qt(e, r),
              (r & 130023424) === r && ((t = su + 500 - ue()), 10 < t))
            ) {
              if (Pr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                Pe(), (e.pingedLanes |= e.suspendedLanes & l);
                break;
              }
              e.timeoutHandle = yi(ln.bind(null, e, Oe, Et), t);
              break;
            }
            ln(e, Oe, Et);
            break;
          case 4:
            if ((Qt(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var u = 31 - tt(r);
              (i = 1 << u), (u = t[u]), u > l && (l = u), (r &= ~i);
            }
            if (
              ((r = l),
              (r = ue() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                    ? 480
                    : 1080 > r
                      ? 1080
                      : 1920 > r
                        ? 1920
                        : 3e3 > r
                          ? 3e3
                          : 4320 > r
                            ? 4320
                            : 1960 * hf(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = yi(ln.bind(null, e, Oe, Et), r);
              break;
            }
            ln(e, Oe, Et);
            break;
          case 5:
            ln(e, Oe, Et);
            break;
          default:
            throw Error(h(329));
        }
      }
    }
    return De(e, ue()), e.callbackNode === n ? aa.bind(null, e) : null;
  }
  function fu(e, t) {
    var n = mr;
    return (
      e.current.memoizedState.isDehydrated && (rn(e, t).flags |= 256),
      (e = wl(e, t)),
      e !== 2 && ((t = Oe), (Oe = n), t !== null && du(t)),
      e
    );
  }
  function du(e) {
    Oe === null ? (Oe = e) : Oe.push.apply(Oe, e);
  }
  function vf(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              i = l.getSnapshot;
            l = l.value;
            try {
              if (!nt(i(), l)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        (n.return = t), (t = n);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function Qt(e, t) {
    for (
      t &= ~ou,
        t &= ~ml,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - tt(t),
        r = 1 << n;
      (e[n] = -1), (t &= ~r);
    }
  }
  function ca(e) {
    if (F & 6) throw Error(h(327));
    Ln();
    var t = Pr(e, 0);
    if (!(t & 1)) return De(e, ue()), null;
    var n = wl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Wl(e);
      r !== 0 && ((t = r), (n = fu(e, r)));
    }
    if (n === 1) throw ((n = pr), rn(e, 0), Qt(e, t), De(e, ue()), n);
    if (n === 6) throw Error(h(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      ln(e, Oe, Et),
      De(e, ue()),
      null
    );
  }
  function pu(e, t) {
    var n = F;
    F |= 1;
    try {
      return e(t);
    } finally {
      (F = n), F === 0 && ((Tn = ue() + 500), Yr && Ft());
    }
  }
  function nn(e) {
    Ht !== null && Ht.tag === 0 && !(F & 6) && Ln();
    var t = F;
    F |= 1;
    var n = Ze.transition,
      r = Q;
    try {
      if (((Ze.transition = null), (Q = 1), e)) return e();
    } finally {
      (Q = r), (Ze.transition = n), (F = t), !(F & 6) && Ft();
    }
  }
  function mu() {
    (Ve = zn.current), Z(zn);
  }
  function rn(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), $c(n)), se !== null))
      for (n = se.return; n !== null; ) {
        var r = n;
        switch ((Si(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && $r();
            break;
          case 3:
            Cn(), Z(Le), Z(xe), Fi();
            break;
          case 5:
            Oi(r);
            break;
          case 4:
            Cn();
            break;
          case 13:
            Z(ne);
            break;
          case 19:
            Z(ne);
            break;
          case 10:
            zi(r.type._context);
            break;
          case 22:
          case 23:
            mu();
        }
        n = n.return;
      }
    if (
      ((me = e),
      (se = e = Wt(e.current, null)),
      (ye = Ve = t),
      (ce = 0),
      (pr = null),
      (ou = ml = tn = 0),
      (Oe = mr = null),
      qt !== null)
    ) {
      for (t = 0; t < qt.length; t++)
        if (((n = qt[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var l = r.next,
            i = n.pending;
          if (i !== null) {
            var u = i.next;
            (i.next = l), (r.next = u);
          }
          n.pending = r;
        }
      qt = null;
    }
    return e;
  }
  function fa(e, t) {
    do {
      var n = se;
      try {
        if ((Pi(), (rl.current = ol), ll)) {
          for (var r = re.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), (r = r.next);
          }
          ll = !1;
        }
        if (
          ((en = 0),
          (pe = ae = re = null),
          (or = !1),
          (sr = 0),
          (uu.current = null),
          n === null || n.return === null)
        ) {
          (ce = 1), (pr = t), (se = null);
          break;
        }
        e: {
          var i = e,
            u = n.return,
            o = n,
            s = t;
          if (
            ((t = ye),
            (o.flags |= 32768),
            s !== null && typeof s == 'object' && typeof s.then == 'function')
          ) {
            var m = s,
              g = o,
              _ = g.tag;
            if (!(g.mode & 1) && (_ === 0 || _ === 11 || _ === 15)) {
              var v = g.alternate;
              v
                ? ((g.updateQueue = v.updateQueue),
                  (g.memoizedState = v.memoizedState),
                  (g.lanes = v.lanes))
                : ((g.updateQueue = null), (g.memoizedState = null));
            }
            var k = Fs(u);
            if (k !== null) {
              (k.flags &= -257),
                Is(k, u, o, i, t),
                k.mode & 1 && Ds(i, m, t),
                (t = k),
                (s = m);
              var E = t.updateQueue;
              if (E === null) {
                var C = new Set();
                C.add(s), (t.updateQueue = C);
              } else E.add(s);
              break e;
            } else {
              if (!(t & 1)) {
                Ds(i, m, t), hu();
                break e;
              }
              s = Error(h(426));
            }
          } else if (ee && o.mode & 1) {
            var oe = Fs(u);
            if (oe !== null) {
              !(oe.flags & 65536) && (oe.flags |= 256),
                Is(oe, u, o, i, t),
                Ci(jn(s, o));
              break e;
            }
          }
          (i = s = jn(s, o)),
            ce !== 4 && (ce = 2),
            mr === null ? (mr = [i]) : mr.push(i),
            (i = u);
          do {
            switch (i.tag) {
              case 3:
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var f = Ms(i, s, t);
                us(i, f);
                break e;
              case 1:
                o = s;
                var a = i.type,
                  p = i.stateNode;
                if (
                  !(i.flags & 128) &&
                  (typeof a.getDerivedStateFromError == 'function' ||
                    (p !== null &&
                      typeof p.componentDidCatch == 'function' &&
                      (Bt === null || !Bt.has(p))))
                ) {
                  (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                  var w = Os(i, o, t);
                  us(i, w);
                  break e;
                }
            }
            i = i.return;
          } while (i !== null);
        }
        ma(n);
      } catch (j) {
        (t = j), se === n && n !== null && (se = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function da() {
    var e = pl.current;
    return (pl.current = ol), e === null ? ol : e;
  }
  function hu() {
    (ce === 0 || ce === 3 || ce === 2) && (ce = 4),
      me === null || (!(tn & 268435455) && !(ml & 268435455)) || Qt(me, ye);
  }
  function wl(e, t) {
    var n = F;
    F |= 2;
    var r = da();
    (me !== e || ye !== t) && ((Et = null), rn(e, t));
    do
      try {
        yf();
        break;
      } catch (l) {
        fa(e, l);
      }
    while (!0);
    if ((Pi(), (F = n), (pl.current = r), se !== null)) throw Error(h(261));
    return (me = null), (ye = 0), ce;
  }
  function yf() {
    for (; se !== null; ) pa(se);
  }
  function gf() {
    for (; se !== null && !Va(); ) pa(se);
  }
  function pa(e) {
    var t = ya(e.alternate, e, Ve);
    (e.memoizedProps = e.pendingProps),
      t === null ? ma(e) : (se = t),
      (uu.current = null);
  }
  function ma(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), t.flags & 32768)) {
        if (((n = ff(n, t)), n !== null)) {
          (n.flags &= 32767), (se = n);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (ce = 6), (se = null);
          return;
        }
      } else if (((n = cf(n, t, Ve)), n !== null)) {
        se = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        se = t;
        return;
      }
      se = t = e;
    } while (t !== null);
    ce === 0 && (ce = 5);
  }
  function ln(e, t, n) {
    var r = Q,
      l = Ze.transition;
    try {
      (Ze.transition = null), (Q = 1), _f(e, t, n, r);
    } finally {
      (Ze.transition = l), (Q = r);
    }
    return null;
  }
  function _f(e, t, n, r) {
    do Ln();
    while (Ht !== null);
    if (F & 6) throw Error(h(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(h(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var i = n.lanes | n.childLanes;
    if (
      (qa(e, i),
      e === me && ((se = me = null), (ye = 0)),
      (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
        vl ||
        ((vl = !0),
        ga(Nr, function () {
          return Ln(), null;
        })),
      (i = (n.flags & 15990) !== 0),
      n.subtreeFlags & 15990 || i)
    ) {
      (i = Ze.transition), (Ze.transition = null);
      var u = Q;
      Q = 1;
      var o = F;
      (F |= 4),
        (uu.current = null),
        pf(e, n),
        la(n, e),
        Uc(hi),
        (Lr = !!mi),
        (hi = mi = null),
        (e.current = n),
        mf(n),
        Qa(),
        (F = o),
        (Q = u),
        (Ze.transition = i);
    } else e.current = n;
    if (
      (vl && ((vl = !1), (Ht = e), (yl = l)),
      (i = e.pendingLanes),
      i === 0 && (Bt = null),
      Ka(n.stateNode),
      De(e, ue()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        (l = t[n]), r(l.value, {componentStack: l.stack, digest: l.digest});
    if (hl) throw ((hl = !1), (e = au), (au = null), e);
    return (
      yl & 1 && e.tag !== 0 && Ln(),
      (i = e.pendingLanes),
      i & 1 ? (e === cu ? hr++ : ((hr = 0), (cu = e))) : (hr = 0),
      Ft(),
      null
    );
  }
  function Ln() {
    if (Ht !== null) {
      var e = to(yl),
        t = Ze.transition,
        n = Q;
      try {
        if (((Ze.transition = null), (Q = 16 > e ? 16 : e), Ht === null))
          var r = !1;
        else {
          if (((e = Ht), (Ht = null), (yl = 0), F & 6)) throw Error(h(331));
          var l = F;
          for (F |= 4, S = e.current; S !== null; ) {
            var i = S,
              u = i.child;
            if (S.flags & 16) {
              var o = i.deletions;
              if (o !== null) {
                for (var s = 0; s < o.length; s++) {
                  var m = o[s];
                  for (S = m; S !== null; ) {
                    var g = S;
                    switch (g.tag) {
                      case 0:
                      case 11:
                      case 15:
                        dr(8, g, i);
                    }
                    var _ = g.child;
                    if (_ !== null) (_.return = g), (S = _);
                    else
                      for (; S !== null; ) {
                        g = S;
                        var v = g.sibling,
                          k = g.return;
                        if ((bs(g), g === m)) {
                          S = null;
                          break;
                        }
                        if (v !== null) {
                          (v.return = k), (S = v);
                          break;
                        }
                        S = k;
                      }
                  }
                }
                var E = i.alternate;
                if (E !== null) {
                  var C = E.child;
                  if (C !== null) {
                    E.child = null;
                    do {
                      var oe = C.sibling;
                      (C.sibling = null), (C = oe);
                    } while (C !== null);
                  }
                }
                S = i;
              }
            }
            if (i.subtreeFlags & 2064 && u !== null) (u.return = i), (S = u);
            else
              e: for (; S !== null; ) {
                if (((i = S), i.flags & 2048))
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      dr(9, i, i.return);
                  }
                var f = i.sibling;
                if (f !== null) {
                  (f.return = i.return), (S = f);
                  break e;
                }
                S = i.return;
              }
          }
          var a = e.current;
          for (S = a; S !== null; ) {
            u = S;
            var p = u.child;
            if (u.subtreeFlags & 2064 && p !== null) (p.return = u), (S = p);
            else
              e: for (u = a; S !== null; ) {
                if (((o = S), o.flags & 2048))
                  try {
                    switch (o.tag) {
                      case 0:
                      case 11:
                      case 15:
                        dl(9, o);
                    }
                  } catch (j) {
                    ie(o, o.return, j);
                  }
                if (o === u) {
                  S = null;
                  break e;
                }
                var w = o.sibling;
                if (w !== null) {
                  (w.return = o.return), (S = w);
                  break e;
                }
                S = o.return;
              }
          }
          if (
            ((F = l), Ft(), ft && typeof ft.onPostCommitFiberRoot == 'function')
          )
            try {
              ft.onPostCommitFiberRoot(Er, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        (Q = n), (Ze.transition = t);
      }
    }
    return !1;
  }
  function ha(e, t, n) {
    (t = jn(n, t)),
      (t = Ms(e, t, 1)),
      (e = Ut(e, t, 1)),
      (t = Pe()),
      e !== null && (An(e, 1, t), De(e, t));
  }
  function ie(e, t, n) {
    if (e.tag === 3) ha(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          ha(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof r.componentDidCatch == 'function' &&
              (Bt === null || !Bt.has(r)))
          ) {
            (e = jn(n, e)),
              (e = Os(t, e, 1)),
              (t = Ut(t, e, 1)),
              (e = Pe()),
              t !== null && (An(t, 1, e), De(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function wf(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
      (t = Pe()),
      (e.pingedLanes |= e.suspendedLanes & n),
      me === e &&
        (ye & n) === n &&
        (ce === 4 || (ce === 3 && (ye & 130023424) === ye && 500 > ue() - su)
          ? rn(e, 0)
          : (ou |= n)),
      De(e, t);
  }
  function va(e, t) {
    t === 0 &&
      (e.mode & 1
        ? ((t = jr), (jr <<= 1), !(jr & 130023424) && (jr = 4194304))
        : (t = 1));
    var n = Pe();
    (e = kt(e, t)), e !== null && (An(e, t, n), De(e, n));
  }
  function xf(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), va(e, n);
  }
  function kf(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(h(314));
    }
    r !== null && r.delete(t), va(e, n);
  }
  var ya;
  ya = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Le.current) Me = !0;
      else {
        if (!(e.lanes & n) && !(t.flags & 128)) return (Me = !1), af(e, t, n);
        Me = !!(e.flags & 131072);
      }
    else (Me = !1), ee && t.flags & 1048576 && Zo(t, Gr, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        cl(e, t), (e = t.pendingProps);
        var l = _n(t, xe.current);
        En(t, n), (l = Ai(null, t, r, e, l, n));
        var i = Bi();
        return (
          (t.flags |= 1),
          typeof l == 'object' &&
          l !== null &&
          typeof l.render == 'function' &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Re(r) ? ((i = !0), Kr(t)) : (i = !1),
              (t.memoizedState =
                l.state !== null && l.state !== void 0 ? l.state : null),
              Ri(t),
              (l.updater = sl),
              (t.stateNode = l),
              (l._reactInternals = t),
              Ki(t, r, e, n),
              (t = Zi(null, t, r, !0, i, n)))
            : ((t.tag = 0), ee && i && ki(t), je(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (cl(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = Nf(r)),
            (e = lt(r, e)),
            l)
          ) {
            case 0:
              t = Gi(null, t, r, e, n);
              break e;
            case 1:
              t = Qs(null, t, r, e, n);
              break e;
            case 11:
              t = Us(null, t, r, e, n);
              break e;
            case 14:
              t = As(null, t, r, lt(r.type, e), n);
              break e;
          }
          throw Error(h(306, r, ''));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : lt(r, l)),
          Gi(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : lt(r, l)),
          Qs(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((Ws(t), e === null)) throw Error(h(387));
          (r = t.pendingProps),
            (i = t.memoizedState),
            (l = i.element),
            is(e, t),
            tl(t, r, null, n);
          var u = t.memoizedState;
          if (((r = u.element), i.isDehydrated))
            if (
              ((i = {
                element: r,
                isDehydrated: !1,
                cache: u.cache,
                pendingSuspenseBoundaries: u.pendingSuspenseBoundaries,
                transitions: u.transitions,
              }),
              (t.updateQueue.baseState = i),
              (t.memoizedState = i),
              t.flags & 256)
            ) {
              (l = jn(Error(h(423)), t)), (t = $s(e, t, r, n, l));
              break e;
            } else if (r !== l) {
              (l = jn(Error(h(424)), t)), (t = $s(e, t, r, n, l));
              break e;
            } else
              for (
                He = Mt(t.stateNode.containerInfo.firstChild),
                  Be = t,
                  ee = !0,
                  rt = null,
                  n = rs(t, null, r, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((kn(), r === l)) {
              t = Nt(e, t, n);
              break e;
            }
            je(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          ss(t),
          e === null && Ei(t),
          (r = t.type),
          (l = t.pendingProps),
          (i = e !== null ? e.memoizedProps : null),
          (u = l.children),
          vi(r, l) ? (u = null) : i !== null && vi(r, i) && (t.flags |= 32),
          Vs(e, t),
          je(e, t, u, n),
          t.child
        );
      case 6:
        return e === null && Ei(t), null;
      case 13:
        return Ks(e, t, n);
      case 4:
        return (
          Mi(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = Sn(t, null, r, n)) : je(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : lt(r, l)),
          Us(e, t, r, l, n)
        );
      case 7:
        return je(e, t, t.pendingProps, n), t.child;
      case 8:
        return je(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return je(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (i = t.memoizedProps),
            (u = l.value),
            Y(qr, r._currentValue),
            (r._currentValue = u),
            i !== null)
          )
            if (nt(i.value, u)) {
              if (i.children === l.children && !Le.current) {
                t = Nt(e, t, n);
                break e;
              }
            } else
              for (i = t.child, i !== null && (i.return = t); i !== null; ) {
                var o = i.dependencies;
                if (o !== null) {
                  u = i.child;
                  for (var s = o.firstContext; s !== null; ) {
                    if (s.context === r) {
                      if (i.tag === 1) {
                        (s = St(-1, n & -n)), (s.tag = 2);
                        var m = i.updateQueue;
                        if (m !== null) {
                          m = m.shared;
                          var g = m.pending;
                          g === null
                            ? (s.next = s)
                            : ((s.next = g.next), (g.next = s)),
                            (m.pending = s);
                        }
                      }
                      (i.lanes |= n),
                        (s = i.alternate),
                        s !== null && (s.lanes |= n),
                        Ti(i.return, n, t),
                        (o.lanes |= n);
                      break;
                    }
                    s = s.next;
                  }
                } else if (i.tag === 10) u = i.type === t.type ? null : i.child;
                else if (i.tag === 18) {
                  if (((u = i.return), u === null)) throw Error(h(341));
                  (u.lanes |= n),
                    (o = u.alternate),
                    o !== null && (o.lanes |= n),
                    Ti(u, n, t),
                    (u = i.sibling);
                } else u = i.child;
                if (u !== null) u.return = i;
                else
                  for (u = i; u !== null; ) {
                    if (u === t) {
                      u = null;
                      break;
                    }
                    if (((i = u.sibling), i !== null)) {
                      (i.return = u.return), (u = i);
                      break;
                    }
                    u = u.return;
                  }
                i = u;
              }
          je(e, t, l.children, n), (t = t.child);
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          En(t, n),
          (l = Xe(l)),
          (r = r(l)),
          (t.flags |= 1),
          je(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (l = lt(r, t.pendingProps)),
          (l = lt(r.type, l)),
          As(e, t, r, l, n)
        );
      case 15:
        return Bs(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : lt(r, l)),
          cl(e, t),
          (t.tag = 1),
          Re(r) ? ((e = !0), Kr(t)) : (e = !1),
          En(t, n),
          Ls(t, r, l),
          Ki(t, r, l, n),
          Zi(null, t, r, !0, e, n)
        );
      case 19:
        return Xs(e, t, n);
      case 22:
        return Hs(e, t, n);
    }
    throw Error(h(156, t.tag));
  };
  function ga(e, t) {
    return Zu(e, t);
  }
  function Sf(e, t, n, r) {
    (this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Je(e, t, n, r) {
    return new Sf(e, t, n, r);
  }
  function vu(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Nf(e) {
    if (typeof e == 'function') return vu(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === at)) return 11;
      if (e === ct) return 14;
    }
    return 2;
  }
  function Wt(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = Je(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : {lanes: t.lanes, firstContext: t.firstContext}),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function xl(e, t, n, r, l, i) {
    var u = 2;
    if (((r = e), typeof e == 'function')) vu(e) && (u = 1);
    else if (typeof e == 'string') u = 5;
    else
      e: switch (e) {
        case ze:
          return un(n.children, l, i, t);
        case $e:
          (u = 8), (l |= 8);
          break;
        case Ct:
          return (
            (e = Je(12, n, t, l | 2)), (e.elementType = Ct), (e.lanes = i), e
          );
        case Ie:
          return (e = Je(13, n, t, l)), (e.elementType = Ie), (e.lanes = i), e;
        case et:
          return (e = Je(19, n, t, l)), (e.elementType = et), (e.lanes = i), e;
        case le:
          return kl(n, l, i, t);
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case yt:
                u = 10;
                break e;
              case Kt:
                u = 9;
                break e;
              case at:
                u = 11;
                break e;
              case ct:
                u = 14;
                break e;
              case Te:
                (u = 16), (r = null);
                break e;
            }
          throw Error(h(130, e == null ? e : typeof e, ''));
      }
    return (
      (t = Je(u, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
    );
  }
  function un(e, t, n, r) {
    return (e = Je(7, e, r, t)), (e.lanes = n), e;
  }
  function kl(e, t, n, r) {
    return (
      (e = Je(22, e, r, t)),
      (e.elementType = le),
      (e.lanes = n),
      (e.stateNode = {isHidden: !1}),
      e
    );
  }
  function yu(e, t, n) {
    return (e = Je(6, e, null, t)), (e.lanes = n), e;
  }
  function gu(e, t, n) {
    return (
      (t = Je(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function Ef(e, t, n, r, l) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = $l(0)),
      (this.expirationTimes = $l(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = $l(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null);
  }
  function _u(e, t, n, r, l, i, u, o, s) {
    return (
      (e = new Ef(e, t, n, o, s)),
      t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
      (i = Je(3, null, null, t)),
      (e.current = i),
      (i.stateNode = e),
      (i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Ri(i),
      e
    );
  }
  function Cf(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Ce,
      key: r == null ? null : '' + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function _a(e) {
    if (!e) return Dt;
    e = e._reactInternals;
    e: {
      if (Yt(e) !== e || e.tag !== 1) throw Error(h(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Re(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(h(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Re(n)) return Yo(e, n, t);
    }
    return t;
  }
  function wa(e, t, n, r, l, i, u, o, s) {
    return (
      (e = _u(n, r, !0, e, l, i, u, o, s)),
      (e.context = _a(null)),
      (n = e.current),
      (r = Pe()),
      (l = Vt(n)),
      (i = St(r, l)),
      (i.callback = t ?? null),
      Ut(n, i, l),
      (e.current.lanes = l),
      An(e, l, r),
      De(e, r),
      e
    );
  }
  function Sl(e, t, n, r) {
    var l = t.current,
      i = Pe(),
      u = Vt(l);
    return (
      (n = _a(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = St(i, u)),
      (t.payload = {element: e}),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = Ut(l, t, u)),
      e !== null && (ot(e, l, u, i), el(e, l, u)),
      u
    );
  }
  function Nl(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function xa(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function wu(e, t) {
    xa(e, t), (e = e.alternate) && xa(e, t);
  }
  var ka =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          console.error(e);
        };
  function xu(e) {
    this._internalRoot = e;
  }
  (El.prototype.render = xu.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(h(409));
      Sl(e, t, null, null);
    }),
    (El.prototype.unmount = xu.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          nn(function () {
            Sl(null, e, null, null);
          }),
            (t[gt] = null);
        }
      });
  function El(e) {
    this._internalRoot = e;
  }
  El.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = lo();
      e = {blockedOn: null, target: e, priority: t};
      for (var n = 0; n < Tt.length && t !== 0 && t < Tt[n].priority; n++);
      Tt.splice(n, 0, e), n === 0 && oo(e);
    }
  };
  function ku(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Cl(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
    );
  }
  function Sa() {}
  function jf(e, t, n, r, l) {
    if (l) {
      if (typeof r == 'function') {
        var i = r;
        r = function () {
          var m = Nl(u);
          i.call(m);
        };
      }
      var u = wa(t, r, e, 0, null, !1, !1, '', Sa);
      return (
        (e._reactRootContainer = u),
        (e[gt] = u.current),
        bn(e.nodeType === 8 ? e.parentNode : e),
        nn(),
        u
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == 'function') {
      var o = r;
      r = function () {
        var m = Nl(s);
        o.call(m);
      };
    }
    var s = _u(e, 0, !1, null, null, !1, !1, '', Sa);
    return (
      (e._reactRootContainer = s),
      (e[gt] = s.current),
      bn(e.nodeType === 8 ? e.parentNode : e),
      nn(function () {
        Sl(t, s, n, r);
      }),
      s
    );
  }
  function jl(e, t, n, r, l) {
    var i = n._reactRootContainer;
    if (i) {
      var u = i;
      if (typeof l == 'function') {
        var o = l;
        l = function () {
          var s = Nl(u);
          o.call(s);
        };
      }
      Sl(t, u, e, l);
    } else u = jf(n, t, e, l, r);
    return Nl(u);
  }
  (no = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Un(t.pendingLanes);
          n !== 0 &&
            (Kl(t, n | 1), De(t, ue()), !(F & 6) && ((Tn = ue() + 500), Ft()));
        }
        break;
      case 13:
        nn(function () {
          var r = kt(e, 1);
          if (r !== null) {
            var l = Pe();
            ot(r, e, 1, l);
          }
        }),
          wu(e, 1);
    }
  }),
    (Yl = function (e) {
      if (e.tag === 13) {
        var t = kt(e, 134217728);
        if (t !== null) {
          var n = Pe();
          ot(t, e, 134217728, n);
        }
        wu(e, 134217728);
      }
    }),
    (ro = function (e) {
      if (e.tag === 13) {
        var t = Vt(e),
          n = kt(e, t);
        if (n !== null) {
          var r = Pe();
          ot(n, e, t, r);
        }
        wu(e, t);
      }
    }),
    (lo = function () {
      return Q;
    }),
    (io = function (e, t) {
      var n = Q;
      try {
        return (Q = e), t();
      } finally {
        Q = n;
      }
    }),
    (Al = function (e, t, n) {
      switch (t) {
        case 'input':
          if ((Ll(e, n), (t = n.name), n.type === 'radio' && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                'input[name=' + JSON.stringify('' + t) + '][type="radio"]',
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var l = Wr(r);
                if (!l) throw Error(h(90));
                zu(r), Ll(r, l);
              }
            }
          }
          break;
        case 'textarea':
          Ou(e, n);
          break;
        case 'select':
          (t = n.value), t != null && on(e, !!n.multiple, t, !1);
      }
    }),
    (Qu = pu),
    (Wu = nn);
  var Pf = {usingClientEntryPoint: !1, Events: [nr, yn, Wr, Hu, Vu, pu]},
    vr = {
      findFiberByHostInstance: Xt,
      bundleType: 0,
      version: '18.3.1',
      rendererPackageName: 'react-dom',
    },
    zf = {
      bundleType: vr.bundleType,
      version: vr.version,
      rendererPackageName: vr.rendererPackageName,
      rendererConfig: vr.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: we.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = Xu(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: vr.findFiberByHostInstance,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var Pl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Pl.isDisabled && Pl.supportsFiber)
      try {
        (Er = Pl.inject(zf)), (ft = Pl);
      } catch {}
  }
  return (
    (Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Pf),
    (Fe.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!ku(t)) throw Error(h(200));
      return Cf(e, t, null, n);
    }),
    (Fe.createRoot = function (e, t) {
      if (!ku(e)) throw Error(h(299));
      var n = !1,
        r = '',
        l = ka;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = _u(e, 1, !1, null, null, n, !1, r, l)),
        (e[gt] = t.current),
        bn(e.nodeType === 8 ? e.parentNode : e),
        new xu(t)
      );
    }),
    (Fe.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == 'function'
          ? Error(h(188))
          : ((e = Object.keys(e).join(',')), Error(h(268, e)));
      return (e = Xu(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (Fe.flushSync = function (e) {
      return nn(e);
    }),
    (Fe.hydrate = function (e, t, n) {
      if (!Cl(t)) throw Error(h(200));
      return jl(null, e, t, !0, n);
    }),
    (Fe.hydrateRoot = function (e, t, n) {
      if (!ku(e)) throw Error(h(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        i = '',
        u = ka;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (u = n.onRecoverableError)),
        (t = wa(t, null, e, 1, n ?? null, l, !1, i, u)),
        (e[gt] = t.current),
        bn(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          (n = r[e]),
            (l = n._getVersion),
            (l = l(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, l])
              : t.mutableSourceEagerHydrationData.push(n, l);
      return new El(t);
    }),
    (Fe.render = function (e, t, n) {
      if (!Cl(t)) throw Error(h(200));
      return jl(null, e, t, !1, n);
    }),
    (Fe.unmountComponentAtNode = function (e) {
      if (!Cl(e)) throw Error(h(40));
      return e._reactRootContainer
        ? (nn(function () {
            jl(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[gt] = null);
            });
          }),
          !0)
        : !1;
    }),
    (Fe.unstable_batchedUpdates = pu),
    (Fe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Cl(n)) throw Error(h(200));
      if (e == null || e._reactInternals === void 0) throw Error(h(38));
      return jl(e, t, n, !1, r);
    }),
    (Fe.version = '18.3.1-next-f1338f8080-20240426'),
    Fe
  );
}
var La;
function If() {
  if (La) return Eu.exports;
  La = 1;
  function L() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(L);
      } catch (H) {
        console.error(H);
      }
  }
  return L(), (Eu.exports = Ff()), Eu.exports;
}
var Ra;
function Uf() {
  if (Ra) return zl;
  Ra = 1;
  var L = If();
  return (zl.createRoot = L.createRoot), (zl.hydrateRoot = L.hydrateRoot), zl;
}
var Af = Uf();
const Bf = () =>
    d.jsx('div', {
      className: '',
      children: d.jsx('h1', {className: '', children: 'Footer'}),
    }),
  Hf = () =>
    d.jsx('div', {
      className: 'video-background',
      children: d.jsx('video', {
        id: 'html-video-781440207-1722877379854',
        playsInline: !0,
        loop: !0,
        muted: !0,
        autoPlay: !0,
        preload: 'none',
        className: 'video-background__video',
        children: d.jsx('source', {
          src: 'https://cdn.flipperzero.one/bsb_tilda_desktop_1st_vid_01.mp4',
          type: 'video/mp4',
        }),
      }),
    }),
  Oa = '/vikshiyan.github.io/assets/icon-cloud.svg',
  Vf =
    "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20width='24px'%20height='24px'%3e%3cpath%20d='M%2019.980469%202.9902344%20A%201.0001%201.0001%200%200%200%2019.869141%203%20L%2015%203%20A%201.0001%201.0001%200%201%200%2015%205%20L%2017.585938%205%20L%208.2929688%2014.292969%20A%201.0001%201.0001%200%201%200%209.7070312%2015.707031%20L%2019%206.4140625%20L%2019%209%20A%201.0001%201.0001%200%201%200%2021%209%20L%2021%204.1269531%20A%201.0001%201.0001%200%200%200%2019.980469%202.9902344%20z%20M%205%203%20C%203.9069372%203%203%203.9069372%203%205%20L%203%2019%20C%203%2020.093063%203.9069372%2021%205%2021%20L%2019%2021%20C%2020.093063%2021%2021%2020.093063%2021%2019%20L%2021%2013%20A%201.0001%201.0001%200%201%200%2019%2013%20L%2019%2019%20L%205%2019%20L%205%205%20L%2011%205%20A%201.0001%201.0001%200%201%200%2011%203%20L%205%203%20z'%3e%3c/path%3e%3c/svg%3e",
  Qf =
    "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='_Слой_1'%20data-name='Слой%201'%20viewBox='0%200%201000%201000'%3e%3cdefs%3e%3cstyle%3e%20.cls-1,%20.cls-2%20{%20fill:%20%23fff;%20}%20.cls-1,%20.cls-2,%20.cls-3%20{%20stroke:%20%23000;%20stroke-miterlimit:%2010;%20}%20.cls-1,%20.cls-3%20{%20stroke-width:%2025px;%20}%20.cls-2%20{%20stroke-width:%2030px;%20}%20.cls-3%20{%20fill:%20none;%20}%20%3c/style%3e%3c/defs%3e%3cline%20class='cls-2'%20x1='412.82'%20y1='48.24'%20x2='587.18'%20y2='48.24'%3e%3c/line%3e%3crect%20x='449.78'%20y='57.35'%20width='99.34'%20height='55.14'%3e%3c/rect%3e%3cline%20class='cls-1'%20x1='777.46'%20y1='154.47'%20x2='845.53'%20y2='222.54'%3e%3c/line%3e%3cline%20class='cls-1'%20x1='500'%20y1='124.04'%20x2='500'%20y2='188.51'%3e%3c/line%3e%3cline%20class='cls-1'%20x1='127.84'%20y1='500'%20x2='188.51'%20y2='500'%3e%3c/line%3e%3cline%20class='cls-1'%20x1='500'%20y1='872.16'%20x2='500'%20y2='811.49'%3e%3c/line%3e%3cline%20class='cls-1'%20x1='878.52'%20y1='500'%20x2='811.49'%20y2='500'%3e%3c/line%3e%3ccircle%20cx='500'%20cy='500'%20r='43.43'%3e%3c/circle%3e%3cline%20class='cls-1'%20x1='581.15'%20y1='547.48'%20x2='246.69'%20y2='354.38'%3e%3c/line%3e%3cg%3e%3cpath%20class='cls-3'%20d='m166.47,308.07c66.46-115.24,190.93-192.81,333.53-192.81,212.49,0,384.75,172.26,384.75,384.75,0,70.29-18.85,136.17-51.77,192.87'%3e%3c/path%3e%3cpath%20class='cls-3'%20d='m166.47,308.07c-32.58,56.49-51.22,122.03-51.22,191.93,0,212.49,172.26,384.75,384.75,384.75,142.2,0,266.38-77.15,332.98-191.87'%3e%3c/path%3e%3c/g%3e%3cpath%20d='m223.16,294.54c27.45-36.86,62.4-68.35,101.87-91.65,41.02-24.22,87.38-39.75,134.98-45.31v273.25l-236.84-136.3Z'%3e%3c/path%3e%3c/svg%3e",
  Wf =
    "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='_Слой_1'%20data-name='Слой%201'%20viewBox='0%200%201000%201000'%3e%3cdefs%3e%3cstyle%3e%20.cls-1%20{%20fill:%20%23fff;%20stroke:%20%23000;%20stroke-miterlimit:%2010;%20stroke-width:%2030.27px;%20}%20%3c/style%3e%3c/defs%3e%3crect%20x='117.53'%20y='120.6'%20width='342.01'%20height='342.01'%20rx='25.81'%20ry='25.81'%3e%3c/rect%3e%3crect%20x='117.53'%20y='537.39'%20width='342.01'%20height='342.01'%20rx='25.81'%20ry='25.81'%3e%3c/rect%3e%3crect%20x='540.46'%20y='537.39'%20width='342.01'%20height='342.01'%20rx='25.81'%20ry='25.81'%3e%3c/rect%3e%3cline%20class='cls-1'%20x1='711.46'%20y1='120.6'%20x2='711.46'%20y2='462.61'%3e%3c/line%3e%3cline%20class='cls-1'%20x1='882.47'%20y1='291.6'%20x2='540.46'%20y2='291.6'%3e%3c/line%3e%3c/svg%3e",
  $f = '/vikshiyan.github.io/assets/icon-third.svg',
  Kf =
    "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%3e%3crect%20x='8'%20y='11'%20width='24'%20height='2'%20fill='black'%3e%3c/rect%3e%3crect%20x='8'%20y='19'%20width='24'%20height='2'%20fill='black'%3e%3c/rect%3e%3crect%20x='8'%20y='27'%20width='24'%20height='2'%20fill='black'%3e%3c/rect%3e%3c/svg%3e",
  Yf = '/vikshiyan.github.io/assets/icon-Busy.svg',
  Xf = ({toggleMenu: L}) =>
    d.jsxs('div', {
      className: 'mobile-header',
      children: [
        d.jsx('img', {
          src: Yf,
          alt: 'icon busy',
          className: 'mobile-header__icon',
        }),
        d.jsx('button', {
          className: 'mobile-header__burger-button',
          onClick: L,
          children: d.jsx('img', {src: Kf, alt: 'icon burger'}),
        }),
      ],
    }),
  Gf =
    "data:image/svg+xml,%3csvg%20role='presentation'%20class='t-popup__close-icon'%20width='23px'%20height='23px'%20viewBox='0%200%2023%2023'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3cg%20stroke='none'%20stroke-width='1'%20fill='%231d1d1d'%20fill-rule='evenodd'%3e%3crect%20transform='translate(11.313708,%2011.313708)%20rotate(-45.000000)%20translate(-11.313708,%20-11.313708)'%20x='10.3137085'%20y='-3.6862915'%20width='2'%20height='30'%20%3e%3c/rect%3e%3crect%20transform='translate(11.313708,%2011.313708)%20rotate(-315.000000)%20translate(-11.313708,%20-11.313708)'%20x='10.3137085'%20y='-3.6862915'%20width='2'%20height='30'%20%3e%3c/rect%3e%3c/g%3e%3c/svg%3e;",
  gr =
    "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='26'%20height='26'%20viewBox='0%200%2026%2026'%20fill='none'%3e%3cpath%20d='M11%205L19.4853%2013.4853L11%2021.9706'%20stroke='black'%20stroke-width='2'%3e%3c/path%3e%3c/svg%3e",
  Zf = ({closeMenu: L}) =>
    d.jsxs('aside', {
      className: 'mobile-menu',
      children: [
        d.jsx('button', {
          className: 'mobile-menu__close',
          onClick: L,
          children: d.jsx('img', {src: Gf, alt: 'icon close'}),
        }),
        d.jsxs('nav', {
          className: 'mobile-menu-nav',
          children: [
            d.jsx('a', {
              href: '#',
              className: 'mobile-menu-nav__link',
              children: d.jsxs('div', {
                className: 'mobile-menu-nav__block',
                children: [
                  d.jsx('span', {
                    className: 'mobile-menu-nav__title',
                    children: 'Home',
                  }),
                  d.jsx('img', {
                    src: gr,
                    alt: 'icon arrow',
                    className: 'mobile-menu-nav__icon',
                  }),
                ],
              }),
            }),
            d.jsx('a', {
              href: '#',
              className: 'mobile-menu-nav__link',
              children: d.jsxs('div', {
                className: 'mobile-menu-nav__block',
                children: [
                  d.jsx('span', {
                    className: 'mobile-menu-nav__title',
                    children: ' Shop',
                  }),
                  d.jsx('img', {
                    src: gr,
                    alt: 'icon arrow',
                    className: 'mobile-menu-nav__icon',
                  }),
                ],
              }),
            }),
            d.jsx('a', {
              href: '#',
              className: 'mobile-menu-nav__link',
              children: d.jsxs('div', {
                className: 'mobile-menu-nav__block',
                children: [
                  d.jsx('span', {
                    className: 'mobile-menu-nav__title',
                    children: ' Downloads',
                  }),
                  d.jsx('img', {
                    src: gr,
                    alt: 'icon arrow',
                    className: 'mobile-menu-nav__icon',
                  }),
                ],
              }),
            }),
            d.jsx('a', {
              href: '#',
              className: 'mobile-menu-nav__link',
              children: d.jsxs('div', {
                className: 'mobile-menu-nav__block',
                children: [
                  d.jsx('span', {
                    className: 'mobile-menu-nav__title',
                    children: ' Block',
                  }),
                  d.jsx('img', {
                    src: gr,
                    alt: 'icon arrow',
                    className: 'mobile-menu-nav__icon',
                  }),
                ],
              }),
            }),
            d.jsxs('a', {
              href: '#',
              className: 'mobile-menu-nav__link',
              children: [
                d.jsxs('div', {
                  className: 'mobile-menu-nav__lr',
                  children: [
                    d.jsxs('div', {
                      className: 'mobile-menu-nav__lr-block',
                      children: [
                        d.jsx('img', {
                          src: Oa,
                          alt: 'icon_cloud',
                          className: 'mobile-menu-nav__lr-cloud',
                        }),
                        d.jsx('div', {
                          className: 'mobile-menu-nav__lr-title',
                          children: 'Busy Cloud',
                        }),
                      ],
                    }),
                    d.jsx('img', {
                      src: gr,
                      alt: 'icon arrow',
                      className: 'mobile-menu-nav__icon',
                    }),
                  ],
                }),
                d.jsx('div', {
                  className: 'mobile-menu-nav__lr-description',
                  children:
                    'Log in to Busy Cloud to control your device via API and MQTT',
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  Jf = () => {
    const [L, H] = Ma.useState(!1),
      h = () => {
        H((ge) => !ge);
      };
    return d.jsxs('header', {
      className: 'header',
      children: [
        d.jsx(Hf, {}),
        d.jsx('nav', {
          className: 'header-nav',
          children: d.jsxs('ul', {
            className: 'header-nav__list',
            children: [
              d.jsx('li', {
                className: 'header-nav__item',
                children: d.jsx('a', {
                  href: '#',
                  className: 'header-nav__link--active',
                  children: 'Home',
                }),
              }),
              d.jsx('li', {
                className: 'header-nav__item',
                children: d.jsx('a', {
                  href: '#',
                  className: 'header-nav__link',
                  children: 'Shop',
                }),
              }),
              d.jsx('li', {
                className: 'header-nav__item',
                children: d.jsx('a', {
                  href: '#',
                  className: 'header-nav__link',
                  children: 'Downloads',
                }),
              }),
              d.jsx('li', {
                className: 'header-nav__item',
                children: d.jsx('a', {
                  href: '#',
                  className: 'header-nav__link',
                  children: 'Block',
                }),
              }),
              d.jsx('li', {
                className: 'header-nav__item header-nav__item--right',
                children: d.jsxs('a', {
                  href: '#',
                  className: 'header-nav__lr',
                  children: [
                    d.jsx('img', {
                      src: Oa,
                      alt: 'icon_cloud',
                      className: 'header-nav__lr-cloud',
                    }),
                    d.jsxs('div', {
                      children: [
                        d.jsxs('div', {
                          children: [
                            d.jsx('div', {
                              className: 'header-nav__lr-title',
                              children: 'Cloud Access',
                            }),
                            d.jsx('img', {
                              src: Vf,
                              alt: 'icon_for_cloud',
                              className: 'header-nav__lr-icon',
                            }),
                          ],
                        }),
                        d.jsx('div', {
                          className: 'header-nav__lr-description',
                          children:
                            'Log in to Busy Cloud to control your device via API and MQTT',
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
        d.jsx(Xf, {toggleMenu: h}),
        L && d.jsx(Zf, {closeMenu: h}),
        d.jsxs('div', {
          className: 'header-content',
          children: [
            d.jsxs('h1', {
              className: 'header-content__title',
              children: [
                d.jsxs('span', {
                  className: 'header-content__title-special',
                  children: ['Busy Status Bar', ' '],
                }),
                'is a productivity multi-tool device with an LED pixel screen. Displays a personal busy message. Built-in Pomodoro timer and Apps. Fully customizable, open-source, and hacker-friendly.',
              ],
            }),
            d.jsx('div', {
              className: 'header-content__wrapper-button',
              children: d.jsx('button', {
                className: 'header-content__button',
                children: 'Buy',
              }),
            }),
          ],
        }),
        d.jsxs('div', {
          className: 'header-footer',
          children: [
            d.jsxs('div', {
              className: 'header-footer__item',
              children: [
                d.jsx('img', {
                  src: Qf,
                  alt: 'Productivity tool',
                  className: 'header-footer__icon',
                }),
                d.jsxs('div', {
                  className: 'header-footer__info',
                  children: [
                    d.jsx('div', {
                      className: 'header-footer__titile',
                      children: 'Productivity tool',
                    }),
                    d.jsx('div', {
                      className: 'header-footer__description',
                      children:
                        'Time management apps, custom busy message, Pomodoro focus timer',
                    }),
                  ],
                }),
              ],
            }),
            d.jsxs('div', {
              className: 'header-footer__item',
              children: [
                d.jsx('img', {
                  src: Wf,
                  alt: 'Apps and integration',
                  className: 'header-footer__icon',
                }),
                d.jsxs('div', {
                  className: 'header-footer__info',
                  children: [
                    d.jsx('div', {
                      className: 'header-footer__titile',
                      children: 'Apps and integration',
                    }),
                    d.jsx('div', {
                      className: 'header-footer__description',
                      children:
                        'App Library, connection to 3rd party software, integrations with calendar events and calls',
                    }),
                  ],
                }),
              ],
            }),
            d.jsxs('div', {
              className: 'header-footer__item',
              children: [
                d.jsx('img', {
                  src: $f,
                  alt: 'Developer friendly',
                  className: 'header-footer__icon',
                }),
                d.jsxs('div', {
                  className: 'header-footer__info',
                  children: [
                    d.jsx('div', {
                      className: 'header-footer__titile',
                      children: 'Developer friendly',
                    }),
                    d.jsx('div', {
                      className: 'header-footer__description',
                      children:
                        'Open HTTP API, open-source SDK, Python / Go / JavaScript libs, MQTT, no vendor lock-in',
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  qf =
    "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='29'%20height='30'%20viewBox='0%200%2029%2030'%20fill='none'%3e%3cpath%20d='M14.5%200.5C5.89086%200.5%200%205.77038%200%2015C0%2024.2296%205.89086%2029.5%2014.5%2029.5C23.1091%2029.5%2029%2024.2296%2029%2015C29%205.77038%2023.1091%200.5%2014.5%200.5ZM22.3114%2017.3933H6.68861C5.68034%2017.3933%205.01554%2017.0129%205.01554%2015.0037C5.01554%2012.9945%205.68034%2012.6141%206.68861%2012.6141H22.3151C23.3234%2012.6141%2023.9882%2012.9945%2023.9882%2015.0037C23.9882%2017.0129%2023.3234%2017.3933%2022.3151%2017.3933H22.3114Z'%20fill='%23F51F1F'%3e%3c/path%3e%3c/svg%3e",
  bf =
    "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='29'%20height='29'%20viewBox='0%200%2029%2029'%20fill='none'%3e%3cpath%20d='M9.0326%200H3.41754C0.794689%200%200%200.988695%200%206.2232C0%2011.4577%200.794689%2012.4464%203.41754%2012.4464H9.0326C11.6554%2012.4464%2012.4501%2011.4577%2012.4501%206.2232C12.4501%200.988695%2011.6554%200%209.0326%200Z'%20fill='black'%3e%3c/path%3e%3cpath%20d='M24.6964%200.000244141H19.0814C16.4585%200.000244141%2015.6638%200.988939%2015.6638%206.22344C15.6638%2011.4579%2016.4585%2012.4466%2019.0814%2012.4466H24.6964C27.3193%2012.4466%2028.114%2011.4579%2028.114%206.22344C28.114%200.988939%2027.3193%200.000244141%2024.6964%200.000244141Z'%20fill='black'%3e%3c/path%3e%3cpath%20d='M9.0326%2015.6624H3.41754C0.794689%2015.6624%200%2016.651%200%2021.8856C0%2027.1201%200.794689%2028.1087%203.41754%2028.1087H9.0326C11.6554%2028.1087%2012.4501%2027.1201%2012.4501%2021.8856C12.4501%2016.651%2011.6554%2015.6624%209.0326%2015.6624Z'%20fill='black'%3e%3c/path%3e%3cpath%20d='M24.6964%2015.6624H19.0814C16.4585%2015.6624%2015.6638%2016.651%2015.6638%2021.8856C15.6638%2027.1201%2016.4585%2028.1087%2019.0814%2028.1087H24.6964C27.3193%2028.1087%2028.114%2027.1201%2028.114%2021.8856C28.114%2016.651%2027.3193%2015.6624%2024.6964%2015.6624Z'%20fill='black'%3e%3c/path%3e%3c/svg%3e",
  ed = '/vikshiyan.github.io/assets/icon-sixth.svg',
  td =
    "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='392'%20height='415'%20viewBox='0%200%20392%20415'%20fill='none'%3e%3cpath%20d='M392%2064H0V20C0%208.95431%208.9543%200%2020%200H372C383.046%200%20392%208.95431%20392%2020V64Z'%20fill='white'%3e%3c/path%3e%3crect%20x='-0.5'%20y='0.5'%20width='391'%20height='414'%20rx='19.5'%20transform='matrix(-1%200%200%201%20391%200)'%20stroke='black'%3e%3c/rect%3e%3cline%20x1='1'%20y1='63.5'%20x2='392'%20y2='63.5'%20stroke='black'%3e%3c/line%3e%3cpath%20d='M356.988%2025.9999L372.306%2041.3177'%20stroke='black'%20stroke-opacity='0.3'%20stroke-width='0.928355'%3e%3c/path%3e%3cpath%20d='M372.306%2025.9998L356.988%2041.3176'%20stroke='black'%20stroke-opacity='0.3'%20stroke-width='0.928355'%3e%3c/path%3e%3crect%20x='331.458'%20y='26.9285'%20width='13.9253'%20height='13.9253'%20stroke='black'%20stroke-opacity='0.3'%20stroke-width='0.928355'%3e%3c/rect%3e%3cmask%20id='path-7-inside-1_905_40'%20fill='white'%3e%3cpath%20d='M305%2026.4644H319.854V41.318H305V26.4644Z'%3e%3c/path%3e%3c/mask%3e%3cpath%20d='M319.854%2040.3897H305V42.2464H319.854V40.3897Z'%20fill='black'%20fill-opacity='0.3'%20mask='url(%23path-7-inside-1_905_40)'%3e%3c/path%3e%3c/svg%3e",
  nd = () =>
    d.jsxs('div', {
      className: 'productivity-display',
      children: [
        d.jsxs('h1', {
          className: 'productivity-display__main-title',
          children: ['Productivity ', d.jsx('br', {}), ' multi-tool'],
        }),
        d.jsx('div', {}),
        d.jsxs('div', {
          className: 'productivity-display__item',
          children: [
            d.jsxs('div', {
              className: 'productivity-display__heading',
              children: [
                d.jsx('img', {
                  src: qf,
                  alt: 'icon fourth',
                  className: 'productivity-display__icon',
                }),
                d.jsx('h2', {
                  className: 'productivity-display__title',
                  children: 'Busy Status',
                }),
              ],
            }),
            d.jsx('h3', {
              className: 'productivity-display__subtitle',
              children:
                'Customizable busy status message to match your own workflow.',
            }),
            d.jsxs('div', {
              children: [
                d.jsxs('div', {
                  className: 'productivity-display__dot-text',
                  children: [
                    d.jsx('span', {
                      className: 'productivity-display__dot',
                      children: '•',
                    }),
                    d.jsx('span', {
                      className: 'productivity-display__text',
                      children:
                        'Set any busy message, expiry timer and activation trigger',
                    }),
                  ],
                }),
                d.jsxs('div', {
                  className: 'productivity-display__dot-text',
                  children: [
                    d.jsx('span', {
                      className: 'productivity-display__dot',
                      children: '•',
                    }),
                    d.jsx('span', {
                      className: 'productivity-display__text',
                      children:
                        'Upload custom busy graphics or choose from gallery',
                    }),
                  ],
                }),
                d.jsxs('div', {
                  className: 'productivity-display__dot-text',
                  children: [
                    d.jsx('span', {
                      className: 'productivity-display__dot',
                      children: '•',
                    }),
                    d.jsx('span', {
                      className: 'productivity-display__text',
                      children:
                        'Activate manually from device or remotely from PC,',
                    }),
                  ],
                }),
                d.jsxs('div', {
                  className: 'productivity-display__dot-text',
                  children: [
                    d.jsx('span', {
                      className: 'productivity-display__dot',
                      children: '•',
                    }),
                    d.jsx('span', {
                      className: 'productivity-display__text',
                      children:
                        'Mobile App or via APIAutomatic activation by Zoom, Discord, Microsoft Teams, Google Calendar',
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        d.jsxs('div', {
          className: 'productivity-display__item',
          children: [
            d.jsxs('div', {
              className: 'productivity-display__heading',
              children: [
                d.jsx('img', {
                  src: bf,
                  alt: 'icon fift',
                  className: 'productivity-display__icon',
                }),
                d.jsx('h2', {
                  className: 'productivity-display__title',
                  children: 'Apps',
                }),
              ],
            }),
            d.jsx('h3', {
              className: 'productivity-display__subtitle',
              children:
                'Built-in apps: clock, weather, social media metrics, currency chart, pixel art wallpapers, and more.',
            }),
            d.jsxs('div', {
              children: [
                d.jsxs('div', {
                  className: 'productivity-display__dot-text',
                  children: [
                    d.jsx('span', {
                      className: 'productivity-display__dot',
                      children: '•',
                    }),
                    d.jsx('span', {
                      className: 'productivity-display__text',
                      children: 'Install JavaScript apps from community',
                    }),
                  ],
                }),
                d.jsxs('div', {
                  className: 'productivity-display__dot-text',
                  children: [
                    d.jsx('span', {
                      className: 'productivity-display__dot',
                      children: '•',
                    }),
                    d.jsx('span', {
                      className: 'productivity-display__text',
                      children: 'Cloud-based Python/JavaScript/Go apps',
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        d.jsxs('div', {
          className: 'productivity-display__item',
          children: [
            d.jsxs('div', {
              className: 'productivity-display__heading',
              children: [
                d.jsx('img', {
                  src: ed,
                  alt: 'icon sixth',
                  className: 'productivity-display__icon',
                }),
                d.jsx('h2', {
                  className: 'productivity-display__title',
                  children: 'Pomodoro timer',
                }),
              ],
            }),
            d.jsx('h3', {
              className: 'productivity-display__subtitle',
              children:
                'Time management technique based on short intervals of focused work broken by five-minute breaks.',
            }),
            d.jsxs('div', {
              children: [
                d.jsxs('div', {
                  className: 'productivity-display__dot-text',
                  children: [
                    d.jsx('span', {
                      className: 'productivity-display__dot',
                      children: '•',
                    }),
                    d.jsx('span', {
                      className: 'productivity-display__text',
                      children: 'Configure your own focus intervals',
                    }),
                  ],
                }),
                d.jsxs('div', {
                  className: 'productivity-display__dot-text',
                  children: [
                    d.jsx('span', {
                      className: 'productivity-display__dot',
                      children: '•',
                    }),
                    d.jsx('span', {
                      className: 'productivity-display__text',
                      children: 'Integration with hourly payment time trackers',
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        d.jsxs('div', {
          className: 'productivity-display__developer-section',
          children: [
            d.jsx('img', {
              src: td,
              alt: 'photo table',
              className: 'productivity-display__developer-table',
            }),
            d.jsxs('div', {
              className: 'productivity-display__developer-title',
              children: ['>', '_ Developers friendly'],
            }),
            d.jsxs('div', {
              className: 'productivity-display__developer-container',
              children: [
                d.jsxs('div', {
                  className: 'productivity-display__developer-rigth',
                  children: [
                    d.jsx('div', {
                      className: 'productivity-display__developer-item',
                      children: d.jsxs('div', {
                        className: 'productivity-display__developer-text',
                        children: ['>', ' Open HTTP API'],
                      }),
                    }),
                    d.jsx('div', {
                      className: 'productivity-display__developer-item',
                      children: d.jsxs('div', {
                        className: 'productivity-display__developer-text',
                        children: ['>', ' Bluetooth Low Energy'],
                      }),
                    }),
                    d.jsx('div', {
                      className: 'productivity-display__developer-item',
                      children: d.jsxs('div', {
                        className: 'productivity-display__developer-text',
                        children: [
                          '>',
                          ' Free JavaScript ',
                          d.jsx('br', {}),
                          ' apps SDK',
                        ],
                      }),
                    }),
                    d.jsx('div', {
                      className: 'productivity-display__developer-item',
                      children: d.jsxs('div', {
                        className: 'productivity-display__developer-text',
                        children: ['>', ' Libs for Python/JavaScript/Go'],
                      }),
                    }),
                    d.jsx('div', {
                      className: 'productivity-display__developer-item',
                      children: d.jsxs('div', {
                        className: 'productivity-display__developer-text',
                        children: ['>', ' USB Virtual LAN device'],
                      }),
                    }),
                    d.jsx('div', {
                      className: 'productivity-display__developer-item',
                      children: d.jsxs('div', {
                        className: 'productivity-display__developer-text',
                        children: ['>', ' Self-hosted cloud provisioning'],
                      }),
                    }),
                    d.jsx('div', {
                      className: 'productivity-display__developer-item',
                      children: d.jsxs('div', {
                        className: 'productivity-display__developer-text',
                        children: ['>', ' Wi-Fi 2.4 GHz'],
                      }),
                    }),
                  ],
                }),
                d.jsxs('div', {
                  className: 'productivity-display__developer-left',
                  children: [
                    d.jsx('div', {
                      className: 'productivity-display__developer-item',
                      children: d.jsxs('div', {
                        className: 'productivity-display__developer-text',
                        children: ['>', ' Control via MQTT'],
                      }),
                    }),
                    d.jsx('div', {
                      className: 'productivity-display__developer-item',
                      children: d.jsxs('div', {
                        className: 'productivity-display__developer-text',
                        children: [
                          '>',
                          ' Serial COM port ',
                          d.jsx('br', {}),
                          ' over USB',
                        ],
                      }),
                    }),
                    d.jsx('div', {
                      className: 'productivity-display__developer-item',
                      children: d.jsxs('div', {
                        className: 'productivity-display__developer-text',
                        children: [
                          '>',
                          ' IoT integrations: IFTTT, HomeAssistant',
                        ],
                      }),
                    }),
                    d.jsx('div', {
                      className: 'productivity-display__developer-item',
                      children: d.jsxs('div', {
                        className: 'productivity-display__developer-text',
                        children: ['>', ' No vendor lock-in'],
                      }),
                    }),
                    d.jsx('div', {
                      className: 'productivity-display__developer-item',
                      children: d.jsxs('div', {
                        className: 'productivity-display__developer-text',
                        children: ['>', ' Offline API (no internet required)'],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
function rd() {
  return d.jsxs('div', {
    id: 'page-top',
    className: 'page',
    children: [
      d.jsx(Jf, {}),
      d.jsx('div', {className: 'container', children: d.jsx(nd, {})}),
      d.jsx(Bf, {}),
    ],
  });
}
Af.createRoot(document.getElementById('root')).render(
  d.jsx(Ma.StrictMode, {children: d.jsx(rd, {})}),
);
