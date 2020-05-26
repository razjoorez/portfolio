function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-main-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainMainComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"row mt-4\">\n    <div class=\"col-2\">\n\n    </div>\n    <div class=\"col-8\">\n        <div class=\"card text-center\">\n            <div class=\"card-header bg-dark\">\n              Reza Razjoo Portfolio\n            </div>\n            <div class=\"card-body bg-dark\">\n              <h5 class=\"card-title\">This is a sample Single page application created with Angular 8</h5>\n              <p class=\"card-text\">The site includes samples of angular reactive forms with validation, example of this \n                  can be seen in the personal-details link  </p>\n              <a href=\"#\" class=\"btn btn-light\">Go somewhere</a>\n            </div>\n            <div class=\"card-footer text-muted\">\n             Footer\n            </div>\n          </div>\n    </div>\n    <div class=\"col-2\"></div>\n</div>";
    /***/
  },

  /***/
  "./src/app/main/main-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/main/main-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: MainRoutingModule */

  /***/
  function srcAppMainMainRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainRoutingModule", function () {
      return MainRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./main.component */
    "./src/app/main/main.component.ts");

    var routes = [{
      path: '',
      component: _main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"]
    }];

    var MainRoutingModule = function MainRoutingModule() {
      _classCallCheck(this, MainRoutingModule);
    };

    MainRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MainRoutingModule);
    /***/
  },

  /***/
  "./src/app/main/main.component.scss":
  /*!******************************************!*\
    !*** ./src/app/main/main.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainMainComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card-title, .card-header {\n  color: wheat;\n}\n\n.card-text {\n  color: whitesmoke;\n}\n\n.btn.btn-primary {\n  background-color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yZXphcmF6am9vL0Rlc2t0b3AvcG9ydGZvbGlvL3BvcnRmb2xpby9zcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFDO0VBRUcsWUFBQTtBQ0FKOztBREdBO0VBRUksaUJBQUE7QUNESjs7QURJQTtFQUVJLHVCQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9tYWluL21haW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgLmNhcmQtdGl0bGUgLCAuY2FyZC1oZWFkZXIgIHtcblxuICAgIGNvbG9yOiB3aGVhdDtcbn1cblxuLmNhcmQtdGV4dCB7XG5cbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcbn1cblxuLmJ0bi5idG4tcHJpbWFyeSB7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuIiwiLmNhcmQtdGl0bGUsIC5jYXJkLWhlYWRlciB7XG4gIGNvbG9yOiB3aGVhdDtcbn1cblxuLmNhcmQtdGV4dCB7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuXG4uYnRuLmJ0bi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/main/main.component.ts":
  /*!****************************************!*\
    !*** ./src/app/main/main.component.ts ***!
    \****************************************/

  /*! exports provided: MainComponent */

  /***/
  function srcAppMainMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
      return MainComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MainComponent = /*#__PURE__*/function () {
      function MainComponent() {
        _classCallCheck(this, MainComponent);
      }

      _createClass(MainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MainComponent;
    }();

    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-main',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./main.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./main.component.scss */
      "./src/app/main/main.component.scss"))["default"]]
    })], MainComponent);
    /***/
  },

  /***/
  "./src/app/main/main.module.ts":
  /*!*************************************!*\
    !*** ./src/app/main/main.module.ts ***!
    \*************************************/

  /*! exports provided: MainModule */

  /***/
  function srcAppMainMainModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainModule", function () {
      return MainModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _main_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./main-routing.module */
    "./src/app/main/main-routing.module.ts");
    /* harmony import */


    var _main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./main.component */
    "./src/app/main/main.component.ts");

    var MainModule = function MainModule() {
      _classCallCheck(this, MainModule);
    };

    MainModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _main_routing_module__WEBPACK_IMPORTED_MODULE_3__["MainRoutingModule"]]
    })], MainModule);
    /***/
  }
}]);
//# sourceMappingURL=main-main-module-es5.js.map