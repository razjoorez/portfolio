function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["address-address-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/address/address.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/address/address.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAddressAddressComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>address works!</p>\n";
    /***/
  },

  /***/
  "./src/app/address/address-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/address/address-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: AddressRoutingModule */

  /***/
  function srcAppAddressAddressRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddressRoutingModule", function () {
      return AddressRoutingModule;
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


    var _address_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./address.component */
    "./src/app/address/address.component.ts");

    var routes = [{
      path: '',
      component: _address_component__WEBPACK_IMPORTED_MODULE_3__["AddressComponent"]
    }];

    var AddressRoutingModule = function AddressRoutingModule() {
      _classCallCheck(this, AddressRoutingModule);
    };

    AddressRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AddressRoutingModule);
    /***/
  },

  /***/
  "./src/app/address/address.component.scss":
  /*!************************************************!*\
    !*** ./src/app/address/address.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAddressAddressComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZHJlc3MvYWRkcmVzcy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/address/address.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/address/address.component.ts ***!
    \**********************************************/

  /*! exports provided: AddressComponent */

  /***/
  function srcAppAddressAddressComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddressComponent", function () {
      return AddressComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AddressComponent = /*#__PURE__*/function () {
      function AddressComponent() {
        _classCallCheck(this, AddressComponent);
      }

      _createClass(AddressComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AddressComponent;
    }();

    AddressComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-address',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./address.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/address/address.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./address.component.scss */
      "./src/app/address/address.component.scss"))["default"]]
    })], AddressComponent);
    /***/
  },

  /***/
  "./src/app/address/address.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/address/address.module.ts ***!
    \*******************************************/

  /*! exports provided: AddressModule */

  /***/
  function srcAppAddressAddressModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddressModule", function () {
      return AddressModule;
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


    var _address_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./address-routing.module */
    "./src/app/address/address-routing.module.ts");
    /* harmony import */


    var _address_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./address.component */
    "./src/app/address/address.component.ts");

    var AddressModule = function AddressModule() {
      _classCallCheck(this, AddressModule);
    };

    AddressModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_address_component__WEBPACK_IMPORTED_MODULE_4__["AddressComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _address_routing_module__WEBPACK_IMPORTED_MODULE_3__["AddressRoutingModule"]]
    })], AddressModule);
    /***/
  }
}]);
//# sourceMappingURL=address-address-module-es5.js.map