function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["details-details-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/details/personal-details/personal-details.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/details/personal-details/personal-details.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDetailsPersonalDetailsPersonalDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row mt-4\">\n    <div class=\"col-4\"></div>\n    <div class=\"col-4\">\n<form>\n    <div class=\"form-group\">\n        <label for=\"exampleInputName\">Name</label>\n        <input type=\"text\" class=\"form-control\" id=\"exampleInputName\" aria-describedby=\"emailHelp\">\n        \n      </div>\n      <div class=\"form-group\">\n          <label for=\"exampleInputLastName\">Last Name</label>\n          <input type=\"text\" class=\"form-control\" id=\"exampleInputLastName\" aria-describedby=\"nameHelp\">\n          \n        </div>\n    <div class=\"form-group\">\n      <label for=\"exampleInputEmail1\">Email address</label>\n      <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\">\n      <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"exampleInputPassword1\">Password</label>\n      <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\">\n    </div>\n    <div class=\"form-group form-check\">\n      <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\">\n      <label class=\"form-check-label\" for=\"exampleCheck1\">Check me out</label>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n  </form>\n</div>\n<div class=\"col-4\"></div>\n</div>";
    /***/
  },

  /***/
  "./src/app/details/details-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/details/details-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: DetailsRoutingModule */

  /***/
  function srcAppDetailsDetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailsRoutingModule", function () {
      return DetailsRoutingModule;
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


    var _personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./personal-details/personal-details.component */
    "./src/app/details/personal-details/personal-details.component.ts");

    var routes = [{
      path: '',
      component: _personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_3__["PersonalDetailsComponent"]
    }];

    var DetailsRoutingModule = function DetailsRoutingModule() {
      _classCallCheck(this, DetailsRoutingModule);
    };

    DetailsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DetailsRoutingModule);
    /***/
  },

  /***/
  "./src/app/details/details.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/details/details.module.ts ***!
    \*******************************************/

  /*! exports provided: DetailsModule */

  /***/
  function srcAppDetailsDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailsModule", function () {
      return DetailsModule;
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


    var _personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./personal-details/personal-details.component */
    "./src/app/details/personal-details/personal-details.component.ts");
    /* harmony import */


    var _details_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./details-routing.module */
    "./src/app/details/details-routing.module.ts");

    var DetailsModule = function DetailsModule() {
      _classCallCheck(this, DetailsModule);
    };

    DetailsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_3__["PersonalDetailsComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _details_routing_module__WEBPACK_IMPORTED_MODULE_4__["DetailsRoutingModule"]],
      exports: [_personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_3__["PersonalDetailsComponent"]]
    })], DetailsModule);
    /***/
  },

  /***/
  "./src/app/details/personal-details/personal-details.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/details/personal-details/personal-details.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDetailsPersonalDetailsPersonalDetailsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbHMvcGVyc29uYWwtZGV0YWlscy9wZXJzb25hbC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/details/personal-details/personal-details.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/details/personal-details/personal-details.component.ts ***!
    \************************************************************************/

  /*! exports provided: PersonalDetailsComponent */

  /***/
  function srcAppDetailsPersonalDetailsPersonalDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PersonalDetailsComponent", function () {
      return PersonalDetailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PersonalDetailsComponent = /*#__PURE__*/function () {
      function PersonalDetailsComponent() {
        _classCallCheck(this, PersonalDetailsComponent);
      }

      _createClass(PersonalDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PersonalDetailsComponent;
    }();

    PersonalDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-personal-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./personal-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/details/personal-details/personal-details.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./personal-details.component.scss */
      "./src/app/details/personal-details/personal-details.component.scss"))["default"]]
    })], PersonalDetailsComponent);
    /***/
  }
}]);
//# sourceMappingURL=details-details-module-es5.js.map