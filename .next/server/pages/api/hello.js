'use strict';
(() => {
  var exports = {};
  exports.id = 453;
  exports.ids = [453];
  exports.modules = {
    /***/ 4665: /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => /* binding */ handler,
        /* harmony export */
      });
      function handler(req, res) {
        res.status(200).json({
          text: 'hello',
        });
      }

      /***/
    },
  };
  // load runtime
  var __webpack_require__ = require('../../webpack-api-runtime.js');
  __webpack_require__.C(exports);
  var __webpack_exec__ = (moduleId) =>
    __webpack_require__((__webpack_require__.s = moduleId));
  var __webpack_exports__ = __webpack_exec__(4665);
  module.exports = __webpack_exports__;
})();
