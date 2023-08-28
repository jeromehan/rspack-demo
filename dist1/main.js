/******/
(() => {
  // webpackBootstrap
  /******/
  var __webpack_modules__ = [
    ,
    /* 0 */
    /* 1 */
    /***/
    (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        answer: () => /* binding */ answer /* harmony export */,
      });
      const answer = 42;

      /***/
    } /* 2 */,
    /***/
    function (module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;
      !(function (a, t) {
        true
          ? !((__WEBPACK_AMD_DEFINE_FACTORY__ = t),
            (__WEBPACK_AMD_DEFINE_RESULT__ =
              typeof __WEBPACK_AMD_DEFINE_FACTORY__ === "function"
                ? __WEBPACK_AMD_DEFINE_FACTORY__.call(
                    exports,
                    __webpack_require__,
                    exports,
                    module
                  )
                : __WEBPACK_AMD_DEFINE_FACTORY__),
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &&
              (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
          : 0;
      })(this, function (a, t, n) {
        var e = function (a, t, n, e, i, r) {
          for (
            var o = 0, s = ["webkit", "moz", "ms", "o"], m = 0;
            m < s.length && !window.requestAnimationFrame;
            ++m
          )
            (window.requestAnimationFrame =
              window[s[m] + "RequestAnimationFrame"]),
              (window.cancelAnimationFrame =
                window[s[m] + "CancelAnimationFrame"] ||
                window[s[m] + "CancelRequestAnimationFrame"]);
          window.requestAnimationFrame ||
            (window.requestAnimationFrame = function (a, t) {
              var n = new Date().getTime(),
                e = Math.max(0, 16 - (n - o)),
                i = window.setTimeout(function () {
                  a(n + e);
                }, e);
              return (o = n + e), i;
            }),
            window.cancelAnimationFrame ||
              (window.cancelAnimationFrame = function (a) {
                clearTimeout(a);
              });
          var u = this;
          u.options = {
            useEasing: !0,
            useGrouping: !0,
            separator: ",",
            decimal: ".",
            easingFn: null,
            formattingFn: null,
          };
          for (var l in r) r.hasOwnProperty(l) && (u.options[l] = r[l]);
          "" === u.options.separator && (u.options.useGrouping = !1),
            u.options.prefix || (u.options.prefix = ""),
            u.options.suffix || (u.options.suffix = ""),
            (u.d = "string" == typeof a ? document.getElementById(a) : a),
            (u.startVal = Number(t)),
            (u.endVal = Number(n)),
            (u.countDown = u.startVal > u.endVal),
            (u.frameVal = u.startVal),
            (u.decimals = Math.max(0, e || 0)),
            (u.dec = Math.pow(10, u.decimals)),
            (u.duration = 1e3 * Number(i) || 2e3),
            (u.formatNumber = function (a) {
              (a = a.toFixed(u.decimals)), (a += "");
              var t, n, e, i;
              if (
                ((t = a.split(".")),
                (n = t[0]),
                (e = t.length > 1 ? u.options.decimal + t[1] : ""),
                (i = /(\d+)(\d{3})/),
                u.options.useGrouping)
              )
                for (; i.test(n); )
                  n = n.replace(i, "$1" + u.options.separator + "$2");
              return u.options.prefix + n + e + u.options.suffix;
            }),
            (u.easeOutExpo = function (a, t, n, e) {
              return (n * (-Math.pow(2, (-10 * a) / e) + 1) * 1024) / 1023 + t;
            }),
            (u.easingFn = u.options.easingFn
              ? u.options.easingFn
              : u.easeOutExpo),
            (u.formattingFn = u.options.formattingFn
              ? u.options.formattingFn
              : u.formatNumber),
            (u.version = function () {
              return "1.7.1";
            }),
            (u.printValue = function (a) {
              var t = u.formattingFn(a);
              "INPUT" === u.d.tagName
                ? (this.d.value = t)
                : "text" === u.d.tagName || "tspan" === u.d.tagName
                ? (this.d.textContent = t)
                : (this.d.innerHTML = t);
            }),
            (u.count = function (a) {
              u.startTime || (u.startTime = a), (u.timestamp = a);
              var t = a - u.startTime;
              (u.remaining = u.duration - t),
                u.options.useEasing
                  ? u.countDown
                    ? (u.frameVal =
                        u.startVal -
                        u.easingFn(t, 0, u.startVal - u.endVal, u.duration))
                    : (u.frameVal = u.easingFn(
                        t,
                        u.startVal,
                        u.endVal - u.startVal,
                        u.duration
                      ))
                  : u.countDown
                  ? (u.frameVal =
                      u.startVal - (u.startVal - u.endVal) * (t / u.duration))
                  : (u.frameVal =
                      u.startVal + (u.endVal - u.startVal) * (t / u.duration)),
                u.countDown
                  ? (u.frameVal = u.frameVal < u.endVal ? u.endVal : u.frameVal)
                  : (u.frameVal =
                      u.frameVal > u.endVal ? u.endVal : u.frameVal),
                (u.frameVal = Math.round(u.frameVal * u.dec) / u.dec),
                u.printValue(u.frameVal),
                t < u.duration
                  ? (u.rAF = requestAnimationFrame(u.count))
                  : u.callback && u.callback();
            }),
            (u.start = function (a) {
              return (
                (u.callback = a), (u.rAF = requestAnimationFrame(u.count)), !1
              );
            }),
            (u.pauseResume = function () {
              u.paused
                ? ((u.paused = !1),
                  delete u.startTime,
                  (u.duration = u.remaining),
                  (u.startVal = u.frameVal),
                  requestAnimationFrame(u.count))
                : ((u.paused = !0), cancelAnimationFrame(u.rAF));
            }),
            (u.reset = function () {
              (u.paused = !1),
                delete u.startTime,
                (u.startVal = t),
                cancelAnimationFrame(u.rAF),
                u.printValue(u.startVal);
            }),
            (u.update = function (a) {
              cancelAnimationFrame(u.rAF),
                (u.paused = !1),
                delete u.startTime,
                (u.startVal = u.frameVal),
                (u.endVal = Number(a)),
                (u.countDown = u.startVal > u.endVal),
                (u.rAF = requestAnimationFrame(u.count));
            }),
            u.printValue(u.startVal);
        };
        return e;
      });

      /***/
    } /******/,
  ];
  /************************************************************************/
  /******/
  // The module cache
  /******/
  var __webpack_module_cache__ = {};
  /******/
  /******/
  // The require function
  /******/
  function __webpack_require__(moduleId) {
    /******/
    // Check if module is in cache
    /******/
    var cachedModule = __webpack_module_cache__[moduleId];
    /******/
    if (cachedModule !== undefined) {
      /******/
      return cachedModule.exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)
    /******/
    var module = (__webpack_module_cache__[moduleId] = {
      /******/
      // no module.id needed
      /******/
      // no module.loaded needed
      /******/
      exports: {} /******/,
    });
    /******/
    /******/
    // Execute the module function
    /******/
    __webpack_modules__[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/
    // Return the exports of the module
    /******/
    return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/
  /* webpack/runtime/define property getters */
  /******/
  (() => {
    /******/
    // define getter functions for harmony exports
    /******/
    __webpack_require__.d = (exports, definition) => {
      /******/
      for (var key in definition) {
        /******/
        if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/
          Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/
  /* webpack/runtime/hasOwnProperty shorthand */
  /******/
  (() => {
    /******/
    __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/
  /* webpack/runtime/make namespace object */
  /******/
  (() => {
    /******/
    // define __esModule on exports
    /******/
    __webpack_require__.r = (exports) => {
      /******/
      if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/
        Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/
      Object.defineProperty(exports, "__esModule", {
        value: true,
      });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be in strict mode.
  (() => {
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */
    var _answer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

    const CountUp = __webpack_require__(2);
    console.log(CountUp);
    function render() {
      document.getElementById(
        "root"
      ).innerHTML = `the answer to the universe is ${_answer__WEBPACK_IMPORTED_MODULE_0__.answer}`;
    }
    render();
    let options = {
      startVal: 20,
      // 开始的数字  一般设置0开始
      decimalPlaces: 2,
      // number类型 小数位，整数自动添.00
      duration: 5,
      // number类型 动画延迟秒数，默认值是2
      useGrouping: true,
      // boolean类型  是否开启逗号，默认true(1,000)false(1000)
      useEasing: true,
      // booleanl类型 动画缓动效果(ease),默认true
      smartEasingThreshold: 500,
      // numberl类型 大于这个数值的值开启平滑缓动
      smartEasingAmount: 300,
      // numberl类型
      separator: ",",
      // string 类型 分割用的符号
      decimal: ".",
      // string 类型  小数分割符合
      prefix: "￥",
      // sttring 类型  数字开头添加固定字符
      suffix: "元",
      // sttring类型 数字末尾添加固定字符
      numerals: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "], // Array类型 替换从0到9对应的字，也就是自定数字字符了,数组存储
    };

    var countUp = new CountUp("root", 2000, options);
    if (!countUp.error) {
      // 事件
      countUp.start();
      // 启动
      countUp.pauseResume();
      // 暂停或者恢复  如果在运行状态触发该方法则暂定，暂定状态再触发则恢复。
      countUp.reset();
      // 重置
      countUp.update(989);
      // 更新最终值
    } else {
      console.error(countUp.error);
    }
  })();

  /******/
})();
//# sourceMappingURL=main.js.map
