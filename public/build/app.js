(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Header/Header */ "./assets/components/Header/Header.js");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Footer/Footer */ "./assets/components/Footer/Footer.js");
/* harmony import */ var _components_Main_Main__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Main/Main */ "./assets/components/Main/Main.js");
/* harmony import */ var _base_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./base.module.scss */ "./assets/base.module.scss");
/* harmony import */ var _base_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_base_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _config_apiPgsql__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./config/apiPgsql */ "./assets/config/apiPgsql.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }




function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }










var App = /*#__PURE__*/function (_Component) {
  _inherits(App, _Component);

  var _super = _createSuper(App);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _super.call(this, props);
    _this.state = {
      haikus: [],
      homepage: {},
      loading: false
    };
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadingHaikus();
      this.setState({
        loading: false
      });
      this.loadingHomepage();
    }
  }, {
    key: "loadingHaikus",
    value: function loadingHaikus() {
      var _this2 = this;

      _config_apiPgsql__WEBPACK_IMPORTED_MODULE_9__["default"].get('/api/homepage/haikus/list').then(function (res) {
        _this2.setState({
          haikus: res.data,
          loading: true
        });
      }, function (error) {
        return console.log(error);
      });
    }
  }, {
    key: "loadingHomepage",
    value: function loadingHomepage() {
      var _this3 = this;

      console.log('hello');
      _config_apiPgsql__WEBPACK_IMPORTED_MODULE_9__["default"].get('/api/homepage').then(function (res) {
        _this3.setState({
          homepage: res.data[0],
          loading: true
        });

        console.log(res.data[0]);
      }, function (error) {
        return console.log(error);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          haikus = _this$state.haikus,
          homepage = _this$state.homepage;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Suspense"], {
        fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", null, "Loading...")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Header_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
        homepage: homepage
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Main_Main__WEBPACK_IMPORTED_MODULE_6__["default"], {
        homepage: homepage,
        haikus: haikus
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__["Footer"], null));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

react_dom__WEBPACK_IMPORTED_MODULE_3___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["BrowserRouter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(App, null)), document.getElementById('root'));

/***/ }),

/***/ "./assets/assets/images/fisherman-2739115_1280.jpg":
/*!*********************************************************!*\
  !*** ./assets/assets/images/fisherman-2739115_1280.jpg ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/build/images/fisherman-2739115_1280.cde2641d.jpg");

/***/ }),

/***/ "./assets/base.module.scss":
/*!*********************************!*\
  !*** ./assets/base.module.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/components/Compendium/Compendium.js":
/*!****************************************************!*\
  !*** ./assets/components/Compendium/Compendium.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _config_apiPgsql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config/apiPgsql */ "./assets/config/apiPgsql.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }





function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var Compendium = /*#__PURE__*/function (_Component) {
  _inherits(Compendium, _Component);

  var _super = _createSuper(Compendium);

  function Compendium(props) {
    var _this;

    _classCallCheck(this, Compendium);

    _this = _super.call(this, props);
    _this.state = {
      themes: [],
      years: []
    };
    return _this;
  }

  _createClass(Compendium, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      _config_apiPgsql__WEBPACK_IMPORTED_MODULE_5__["default"].get("/api/themes/list", {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (res) {
        if (res.status === 200) {
          _this2.setState({
            themes: res.data
          });
        }
      })["catch"](function (error) {
        console.log(error);
      });
      _config_apiPgsql__WEBPACK_IMPORTED_MODULE_5__["default"].get("/api/years/list", {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (res) {
        if (res.status === 200) {
          _this2.setState({
            years: res.data
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          themes = _this$state.themes,
          years = _this$state.years;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", {
        className: "theme__title"
      }, "Th\xE8mes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("hr", {
        className: "theme__separator"
      }), themes && themes.map(function (t, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
          className: "theme__link",
          key: t.title + i,
          to: "/theme/" + t.title
        }, t.title);
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", {
        className: "year__title"
      }, "Ann\xE9es"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("hr", {
        className: "year__separator"
      }), years && years.map(function (y, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
          key: y.year + i,
          to: "/year/" + y.year
        }, y.year);
      }));
    }
  }]);

  return Compendium;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Compendium);

/***/ }),

/***/ "./assets/components/Footer/Footer.js":
/*!********************************************!*\
  !*** ./assets/components/Footer/Footer.js ***!
  \********************************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Footer_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer.module.scss */ "./assets/components/Footer/Footer.module.scss");
/* harmony import */ var _Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Footer_module_scss__WEBPACK_IMPORTED_MODULE_2__);



var Footer = function Footer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer__link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/whoAmI",
    className: "footer__link"
  }, "Qui suis-je"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/contact",
    className: "footer__link"
  }, "Contact")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer__copyright"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Copyright \xA9 V\xE9ronique Manchon - auteur du blog")));
};

/***/ }),

/***/ "./assets/components/Footer/Footer.module.scss":
/*!*****************************************************!*\
  !*** ./assets/components/Footer/Footer.module.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/components/Form/ContactForm.js":
/*!***********************************************!*\
  !*** ./assets/components/Form/ContactForm.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _ContactForm_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ContactForm.module.scss */ "./assets/components/Form/ContactForm.module.scss");
/* harmony import */ var _ContactForm_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ContactForm_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _config_apiPgsql__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../config/apiPgsql */ "./assets/config/apiPgsql.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }





function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var CustomInput = function CustomInput(_ref) {
  var field = _ref.field,
      form = _ref.form,
      props = _objectWithoutProperties(_ref, ["field", "form"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "form__" + field.name
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", {
    htmlFor: field.name
  }, field.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", _extends({}, field, props, {
    id: field.name,
    name: field.name
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__["ErrorMessage"], {
    name: field.name,
    component: CustomError
  }));
};

var CustomTextarea = function CustomTextarea(_ref2) {
  var field = _ref2.field,
      form = _ref2.form,
      props = _objectWithoutProperties(_ref2, ["field", "form"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "form__" + field.name
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", {
    htmlFor: props.label
  }, "Message ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "form__" + field.name + "--labelLength"
  }, "500 caract\xE8res maximum...")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("textarea", _extends({}, field, {
    id: field.name,
    name: field.name,
    maxLength: "500",
    placeholder: "Bonjour...."
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__["ErrorMessage"], {
    name: field.name,
    component: CustomError
  }));
};

var CustomError = function CustomError(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "form__error"
  }, props.children);
};

var MessageSubmit = function MessageSubmit(_ref3) {
  var state = _ref3.state;

  if (state.message.length > 1) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "message"
    }, state.message);
  } else if (state.message.length > 1) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "error"
    }, state.error);
  }
};

var ContactForm = /*#__PURE__*/function (_Component) {
  _inherits(ContactForm, _Component);

  var _super = _createSuper(ContactForm);

  function ContactForm(props) {
    var _this;

    _classCallCheck(this, ContactForm);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "userSchema", yup__WEBPACK_IMPORTED_MODULE_6__["object"]().shape({
      firstname: yup__WEBPACK_IMPORTED_MODULE_6__["string"]().min(2, 'minimun 2 caractères').max(20, 'la saisie est trop longue').required('champ requis'),
      lastname: yup__WEBPACK_IMPORTED_MODULE_6__["string"]().min(2, 'minimun 2 caractères').max(20, 'la saisie est trop longue').required('champ requis'),
      email: yup__WEBPACK_IMPORTED_MODULE_6__["string"]().email('mauvais email').required('champ requis'),
      topic: yup__WEBPACK_IMPORTED_MODULE_6__["string"]().min(2, 'le sujet doit comporter au moins 2 caractères').max(50, 'la saisie est trop longue').required('champ requis'),
      body: yup__WEBPACK_IMPORTED_MODULE_6__["string"]().min(10, 'le texte doit être intelligible').max(500, 'trop long').required('champ requis')
    }));

    _defineProperty(_assertThisInitialized(_this), "submit", function (values, actions) {
      console.log('coucou');
      _config_apiPgsql__WEBPACK_IMPORTED_MODULE_7__["default"].post('/api/contact/form', values, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (res) {
        if (201 === res.status) {
          _this.setState({
            message: 'Le message a bien été enregistré.',
            error: ''
          });

          actions.setSubmitting(false);
        }
      })["catch"](function () {
        _this.setState({
          error: 'Une erreur est survenue lors de l\'envoie du formulaire, le message n\'a pu être enregistré.',
          message: ''
        });

        actions.setSubmitting(false);
      });
      console.log(actions);
    });

    _this.input = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef();
    _this.state = {
      message: '',
      code: 0
    };
    return _this;
  }

  _createClass(ContactForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.input.current.focus();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "contact"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", null, "Formulaire de contact"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("hr", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__["Formik"], {
        initialValues: {
          firstname: '',
          lastname: '',
          email: '',
          topic: '',
          body: '',
          items: []
        },
        onSubmit: this.submit,
        validationSchema: this.userSchema
      }, function (_ref4) {
        var handleSubmit = _ref4.handleSubmit,
            isSubmitting = _ref4.isSubmitting;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, _this2.state.message || _this2.state.error ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(MessageSubmit, {
          state: _this2.state
        }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("form", {
          onSubmit: handleSubmit,
          className: "form"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
          name: "firstname",
          ref: _this2.input,
          component: CustomInput
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
          name: "lastname",
          component: CustomInput
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
          name: "email",
          component: CustomInput
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
          name: "topic",
          component: CustomInput
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
          name: "body",
          component: CustomTextarea
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
          className: "form__btn--submit",
          type: "submit",
          disabled: isSubmitting
        }, "Soumettre")));
      }));
    }
  }]);

  return ContactForm;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ContactForm);

/***/ }),

/***/ "./assets/components/Form/ContactForm.module.scss":
/*!********************************************************!*\
  !*** ./assets/components/Form/ContactForm.module.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/components/Header/Header.js":
/*!********************************************!*\
  !*** ./assets/components/Header/Header.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header.module.scss */ "./assets/components/Header/Header.module.scss");
/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Header_module_scss__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Button = function Button(_ref) {
  var _onClick = _ref.onClick,
      isToggleOn = _ref.isToggleOn;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    onClick: function onClick() {
      return _onClick();
    },
    type: "button",
    className: "navBar__btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "line"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "line"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "line"
  })), isToggleOn && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavBar, null));
};

var NavBar = function NavBar() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "header__navBar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    to: "/haikus/homepage",
    activeClassName: "active",
    className: "header__navBar--link"
  }, "Accueil"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    to: "/haikus/all",
    className: "header__navBar--link"
  }, "Ha\xEFkus"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    to: "/haikus/prose",
    className: "header__navBar--link"
  }, "Prose"));
};

var Header = /*#__PURE__*/function (_Component) {
  _inherits(Header, _Component);

  var _super = _createSuper(Header);

  function Header(props) {
    var _this;

    _classCallCheck(this, Header);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "updatePredicate", function () {
      _this.setState({
        isPhoneViewport: window.innerWidth <= 375
      });
    });

    _defineProperty(_assertThisInitialized(_this), "displayMenu", function () {
      var isToggleOn = _this.state.isToggleOn;

      _this.setState({
        isToggleOn: !isToggleOn
      });
    });

    _this.state = {
      isToggleOn: false,
      isPhoneViewport: false
    };
    return _this;
  }

  _createClass(Header, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updatePredicate();
      window.addEventListener("resize", this.updatePredicate);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.updatePredicate);
    }
  }, {
    key: "render",
    value: function render() {
      var homepage = this.props.homepage;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, homepage.title), this.state.isPhoneViewport ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Button, {
        onClick: this.displayMenu,
        isToggleOn: this.state.isToggleOn
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavBar, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "header__searchBar"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "text",
        name: "search",
        placeholder: "rechercher un haikus"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        className: "searchBar__btn"
      }, "search")));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./assets/components/Header/Header.module.scss":
/*!*****************************************************!*\
  !*** ./assets/components/Header/Header.module.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/components/Landscape/Landscape.js":
/*!**************************************************!*\
  !*** ./assets/components/Landscape/Landscape.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_images_fisherman_2739115_1280_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/fisherman-2739115_1280.jpg */ "./assets/assets/images/fisherman-2739115_1280.jpg");
/* harmony import */ var _Landscape_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Landscape.module.scss */ "./assets/components/Landscape/Landscape.module.scss");
/* harmony import */ var _Landscape_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Landscape_module_scss__WEBPACK_IMPORTED_MODULE_2__);




var Landscape = function Landscape(_ref) {
  var homepage = _ref.homepage;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "landscape"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "landscape__title"
  }, "Mon blog pour partager ma passion des ha\xEFkus"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "landscape__separator"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "landscape__presentation"
  }, homepage.presentation));
};

/* harmony default export */ __webpack_exports__["default"] = (Landscape);

/***/ }),

/***/ "./assets/components/Landscape/Landscape.module.scss":
/*!***********************************************************!*\
  !*** ./assets/components/Landscape/Landscape.module.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/components/Main/Main.js":
/*!****************************************!*\
  !*** ./assets/components/Main/Main.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Landscape_Landscape__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Landscape/Landscape */ "./assets/components/Landscape/Landscape.js");
/* harmony import */ var _features_haikus_components_HaikuList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../features/haikus/components/HaikuList */ "./assets/features/haikus/components/HaikuList.js");
/* harmony import */ var _NotFound_NotFound__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../NotFound/NotFound */ "./assets/components/NotFound/NotFound.js");
/* harmony import */ var _Form_ContactForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Form/ContactForm */ "./assets/components/Form/ContactForm.js");
/* harmony import */ var _Compendium_Compendium__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Compendium/Compendium */ "./assets/components/Compendium/Compendium.js");
/* harmony import */ var _Main_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Main.module.scss */ "./assets/components/Main/Main.module.scss");
/* harmony import */ var _Main_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Main_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }




function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }










var Main = /*#__PURE__*/function (_Component) {
  _inherits(Main, _Component);

  var _super = _createSuper(Main);

  function Main(props) {
    _classCallCheck(this, Main);

    return _super.call(this, props);
  }

  _createClass(Main, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          homepage = _this$props.homepage,
          haikus = _this$props.haikus;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Route"], {
        exact: true,
        path: "/haikus/homepage",
        render: function render() {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
            className: "main"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Landscape_Landscape__WEBPACK_IMPORTED_MODULE_3__["default"], {
            homepage: homepage
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_features_haikus_components_HaikuList__WEBPACK_IMPORTED_MODULE_4__["default"], {
            haikus: haikus
          }));
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Route"], {
        exact: true,
        path: "/haikus/all"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "main"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Compendium_Compendium__WEBPACK_IMPORTED_MODULE_7__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Route"], {
        exact: true,
        path: "/contact",
        render: function render() {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
            className: "main"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Form_ContactForm__WEBPACK_IMPORTED_MODULE_6__["default"], null));
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Redirect"], {
        from: "/",
        to: "/haikus/homepage"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Route"], {
        component: _NotFound_NotFound__WEBPACK_IMPORTED_MODULE_5__["default"]
      }));
    }
  }]);

  return Main;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./assets/components/Main/Main.module.scss":
/*!*************************************************!*\
  !*** ./assets/components/Main/Main.module.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/components/NotFound/NotFound.js":
/*!************************************************!*\
  !*** ./assets/components/NotFound/NotFound.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");



var NotFound = function NotFound() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "not_found"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Page Not Found"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    style: {
      textdecoration: 'none'
    },
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "not_found__button"
  }, "Homepage")));
};

/* harmony default export */ __webpack_exports__["default"] = (NotFound);

/***/ }),

/***/ "./assets/config/apiPgsql.js":
/*!***********************************!*\
  !*** ./assets/config/apiPgsql.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var apiPgsql = {};
console.log('environement ', Object({"NODE_ENV":"development"}));

if (true) {
  apiPgsql = axios__WEBPACK_IMPORTED_MODULE_0__["create"]({
    baseURL: 'http://127.0.0.1:8000',
    headers: {
      'Content-type': 'application/json'
    }
  });
} else {}

/* harmony default export */ __webpack_exports__["default"] = (apiPgsql);

/***/ }),

/***/ "./assets/features/haikus/components/Haiku.js":
/*!****************************************************!*\
  !*** ./assets/features/haikus/components/Haiku.js ***!
  \****************************************************/
/*! exports provided: Haiku */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Haiku", function() { return Haiku; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var Haiku = function Haiku(_ref) {
  var haiku = _ref.haiku;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "haiku"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, haiku.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, haiku.content), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "\u2217"));
};

/***/ }),

/***/ "./assets/features/haikus/components/HaikuList.js":
/*!********************************************************!*\
  !*** ./assets/features/haikus/components/HaikuList.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HaikuList; });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Haiku__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Haiku */ "./assets/features/haikus/components/Haiku.js");
/* harmony import */ var _HaikuList_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HaikuList.module.scss */ "./assets/features/haikus/components/HaikuList.module.scss");
/* harmony import */ var _HaikuList_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_HaikuList_module_scss__WEBPACK_IMPORTED_MODULE_5__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }





function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var HaikuList = /*#__PURE__*/function (_Component) {
  _inherits(HaikuList, _Component);

  var _super = _createSuper(HaikuList);

  function HaikuList(props) {
    _classCallCheck(this, HaikuList);

    return _super.call(this, props);
  }

  _createClass(HaikuList, [{
    key: "render",
    value: function render() {
      var haikus = this.props.haikus;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "haikusList"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3", {
        className: "haikusList__title"
      }, "Mes derniers ha\xEFkus"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("hr", {
        className: "haikusList__separator"
      }), haikus && haikus.map(function (h, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Haiku__WEBPACK_IMPORTED_MODULE_4__["Haiku"], {
          key: h.title + i,
          haiku: h
        });
      }));
    }
  }]);

  return HaikuList;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);



/***/ }),

/***/ "./assets/features/haikus/components/HaikuList.module.scss":
/*!*****************************************************************!*\
  !*** ./assets/features/haikus/components/HaikuList.module.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./assets/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hc3NldHMvaW1hZ2VzL2Zpc2hlcm1hbi0yNzM5MTE1XzEyODAuanBnIiwid2VicGFjazovLy8uL2Fzc2V0cy9iYXNlLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0NvbXBlbmRpdW0vQ29tcGVuZGl1bS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvRm9ybS9Db250YWN0Rm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Gb3JtL0NvbnRhY3RGb3JtLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9MYW5kc2NhcGUvTGFuZHNjYXBlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0xhbmRzY2FwZS9MYW5kc2NhcGUubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvTWFpbi9NYWluLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL01haW4vTWFpbi5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Ob3RGb3VuZC9Ob3RGb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29uZmlnL2FwaVBnc3FsLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9mZWF0dXJlcy9oYWlrdXMvY29tcG9uZW50cy9IYWlrdS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvZmVhdHVyZXMvaGFpa3VzL2NvbXBvbmVudHMvSGFpa3VMaXN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9mZWF0dXJlcy9oYWlrdXMvY29tcG9uZW50cy9IYWlrdUxpc3QubW9kdWxlLnNjc3MiXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImhhaWt1cyIsImhvbWVwYWdlIiwibG9hZGluZyIsImxvYWRpbmdIYWlrdXMiLCJzZXRTdGF0ZSIsImxvYWRpbmdIb21lcGFnZSIsImFwaVBnc3FsIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJDb21wb25lbnQiLCJSZWFjdERvbSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJDb21wZW5kaXVtIiwidGhlbWVzIiwieWVhcnMiLCJoZWFkZXJzIiwic3RhdHVzIiwibWFwIiwidCIsImkiLCJ0aXRsZSIsInkiLCJ5ZWFyIiwiRm9vdGVyIiwiQ3VzdG9tSW5wdXQiLCJmaWVsZCIsImZvcm0iLCJuYW1lIiwiQ3VzdG9tRXJyb3IiLCJDdXN0b21UZXh0YXJlYSIsImxhYmVsIiwiY2hpbGRyZW4iLCJNZXNzYWdlU3VibWl0IiwibWVzc2FnZSIsImxlbmd0aCIsIkNvbnRhY3RGb3JtIiwiWXVwIiwic2hhcGUiLCJmaXJzdG5hbWUiLCJtaW4iLCJtYXgiLCJyZXF1aXJlZCIsImxhc3RuYW1lIiwiZW1haWwiLCJ0b3BpYyIsImJvZHkiLCJ2YWx1ZXMiLCJhY3Rpb25zIiwicG9zdCIsInNldFN1Ym1pdHRpbmciLCJpbnB1dCIsIlJlYWN0IiwiZm9yd2FyZFJlZiIsImNvZGUiLCJjdXJyZW50IiwiZm9jdXMiLCJpdGVtcyIsInN1Ym1pdCIsInVzZXJTY2hlbWEiLCJoYW5kbGVTdWJtaXQiLCJpc1N1Ym1pdHRpbmciLCJCdXR0b24iLCJvbkNsaWNrIiwiaXNUb2dnbGVPbiIsIk5hdkJhciIsIkhlYWRlciIsImlzUGhvbmVWaWV3cG9ydCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJ1cGRhdGVQcmVkaWNhdGUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpc3BsYXlNZW51IiwiTGFuZHNjYXBlIiwicHJlc2VudGF0aW9uIiwiTWFpbiIsIk5vdEZvdW5kIiwidGV4dGRlY29yYXRpb24iLCJwcm9jZXNzIiwiYXhpb3MiLCJiYXNlVVJMIiwiSGFpa3UiLCJoYWlrdSIsImNvbnRlbnQiLCJIYWlrdUxpc3QiLCJoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBOztJQUtNQSxHOzs7OztBQUNGLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxZQUFNLEVBQUUsRUFEQztBQUVUQyxjQUFRLEVBQUUsRUFGRDtBQUdUQyxhQUFPLEVBQUU7QUFIQSxLQUFiO0FBRmU7QUFPbEI7Ozs7d0NBQ21CO0FBQ2hCLFdBQUtDLGFBQUw7QUFDQSxXQUFLQyxRQUFMLENBQWM7QUFDVkYsZUFBTyxFQUFFO0FBREMsT0FBZDtBQUlBLFdBQUtHLGVBQUw7QUFFSDs7O29DQUVlO0FBQUE7O0FBRVpDLDhEQUFRLENBQUNDLEdBQVQsQ0FBYSwyQkFBYixFQUNLQyxJQURMLENBQ1ksVUFBQUMsR0FBRyxFQUFJO0FBQ1AsY0FBSSxDQUFDTCxRQUFMLENBQWM7QUFDVkosZ0JBQU0sRUFBRVMsR0FBRyxDQUFDQyxJQURGO0FBRVZSLGlCQUFPLEVBQUU7QUFGQyxTQUFkO0FBR0csT0FMZixFQU1RLFVBQUFTLEtBQUs7QUFBQSxlQUFJQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWixDQUFKO0FBQUEsT0FOYjtBQU9IOzs7c0NBRWlCO0FBQUE7O0FBQ2RDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLE9B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akUsS0FBRixHQUFVRCxDQUF2QjtBQUEyQixlQUFLLEVBQUdrRTtBQUFuQyxVQURtQjtBQUFBLE9BQVgsQ0FMaEIsQ0FEUDtBQVlIOzs7O0VBckJrQzlFLCtDOzs7Ozs7Ozs7Ozs7O0FDSnZDLHVDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgU3VzcGVuc2UgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3REb20gZnJvbSAncmVhY3QtZG9tJztcblxuaW1wb3J0IEhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlcic7XG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlcic7XG5pbXBvcnQgTWFpbiBmcm9tICcuL2NvbXBvbmVudHMvTWFpbi9NYWluJztcblxuaW1wb3J0ICcuL2Jhc2UubW9kdWxlLnNjc3MnO1xuXG5pbXBvcnQge0Jyb3dzZXJSb3V0ZXIgYXMgUm91dGVyfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IGFwaVBnc3FsIGZyb20gXCIuL2NvbmZpZy9hcGlQZ3NxbFwiO1xuXG5cblxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGhhaWt1czogW10sXG4gICAgICAgICAgICBob21lcGFnZToge30sXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLmxvYWRpbmdIYWlrdXMoKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmxvYWRpbmdIb21lcGFnZSgpO1xuXG4gICAgfVxuXG4gICAgbG9hZGluZ0hhaWt1cygpIHtcblxuICAgICAgICBhcGlQZ3NxbC5nZXQoJy9hcGkvaG9tZXBhZ2UvaGFpa3VzL2xpc3QnKVxuICAgICAgICAgICAgLnRoZW4gKCByZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhaWt1czogcmVzLmRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0pfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXG4gICAgfVxuXG4gICAgbG9hZGluZ0hvbWVwYWdlKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnaGVsbG8nKTtcbiAgICAgICAgYXBpUGdzcWwuZ2V0KCcvYXBpL2hvbWVwYWdlJylcbiAgICAgICAgICAgIC50aGVuKCByZXMgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBob21lcGFnZTogcmVzLmRhdGFbMF0sXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IHRydWVcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhWzBdKX0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBoYWlrdXMsIGhvbWVwYWdlIH0gPSB0aGlzLnN0YXRlXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8U3VzcGVuc2UgZmFsbGJhY2s9ezxoMT5Mb2FkaW5nLi4uPC9oMT59PlxuICAgICAgICAgICAgICAgICAgICA8SGVhZGVyIGhvbWVwYWdlPXsgaG9tZXBhZ2UgfS8+XG4gICAgICAgICAgICAgICAgICAgIDxNYWluIGhvbWVwYWdlPXsgaG9tZXBhZ2UgfSBoYWlrdXM9eyBoYWlrdXMgfSAvPlxuICAgICAgICAgICAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgICAgICA8L1N1c3BlbnNlPlxuXG4gICAgICAgIClcbiAgICB9XG59XG5cblxuXG5SZWFjdERvbS5yZW5kZXIoXG4gICAgICAgIDxSb3V0ZXI+XG4gICAgICAgICAgICA8QXBwIC8+XG4gICAgICAgIDwvUm91dGVyPlxuICAgICxcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG4pO1xuIiwiZXhwb3J0IGRlZmF1bHQgXCIvYnVpbGQvaW1hZ2VzL2Zpc2hlcm1hbi0yNzM5MTE1XzEyODAuY2RlMjY0MWQuanBnXCI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtMaW5rfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IGFwaVBnc3FsIGZyb20gXCIuLi8uLi9jb25maWcvYXBpUGdzcWxcIjtcblxuY2xhc3MgQ29tcGVuZGl1bSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdGhlbWVzOiBbXSxcbiAgICAgICAgICAgIHllYXJzOiBbXSxcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICBhcGlQZ3NxbC5nZXQoXCIvYXBpL3RoZW1lcy9saXN0XCIsIHtcbiAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICB9LFxuICAgICAgIH0pXG4gICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgIGlmKHJlcy5zdGF0dXMgPT09IDIwMCl7XG4gICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICB0aGVtZXM6IHJlcy5kYXRhXG4gICAgICAgICAgICAgICB9KVxuICAgICAgICAgICB9XG4gICAgICAgfSlcbiAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgfSk7XG4gICAgICAgYXBpUGdzcWwuZ2V0KFwiL2FwaS95ZWFycy9saXN0XCIsIHtcbiAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICB9XG4gICAgICAgfSlcbiAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgIGlmKHJlcy5zdGF0dXMgPT09IDIwMCl7XG4gICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgIHllYXJzOiByZXMuZGF0YVxuICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgdGhlbWVzLCB5ZWFycyB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGhlbWVfX3RpdGxlXCI+VGjDqG1lczwvaDI+XG4gICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cInRoZW1lX19zZXBhcmF0b3JcIi8+XG4gICAgICAgICAgICAgICB7IHRoZW1lcyAmJiB0aGVtZXMubWFwKCh0LGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwidGhlbWVfX2xpbmtcIiBrZXk9eyB0LnRpdGxlICsgaSB9IHRvPXsgXCIvdGhlbWUvXCIgKyB0LnRpdGxlIH0+eyB0LnRpdGxlIH08L0xpbms+XG4gICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ5ZWFyX190aXRsZVwiPkFubsOpZXM8L2gyPlxuICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cInllYXJfX3NlcGFyYXRvclwiIC8+XG4gICAgICAgICAgICAgICB7IHllYXJzICYmIHllYXJzLm1hcCgoeSxpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgPExpbmsga2V5PXsgeS55ZWFyICsgaSB9IHRvPXsgXCIveWVhci9cIiArIHkueWVhciB9PnsgeS55ZWFyIH08L0xpbms+XG4gICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgPC8+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBlbmRpdW07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgJy4vRm9vdGVyLm1vZHVsZS5zY3NzJztcblxuZXhwb3J0IGNvbnN0IEZvb3RlciA9ICgpID0+IChcblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfX2xpbmtcIj5cbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi93aG9BbUlcIiBjbGFzc05hbWU9XCJmb290ZXJfX2xpbmtcIj5RdWkgc3Vpcy1qZTwvTGluaz5cbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9jb250YWN0XCIgY2xhc3NOYW1lPVwiZm9vdGVyX19saW5rXCI+Q29udGFjdDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9fY29weXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+Q29weXJpZ2h0ICZjb3B5OyBWw6lyb25pcXVlIE1hbmNob24gLSBhdXRldXIgZHUgYmxvZzwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuKVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Rm9ybWlrLCBGaWVsZCwgRXJyb3JNZXNzYWdlfSBmcm9tICdmb3JtaWsnO1xuaW1wb3J0ICcuL0NvbnRhY3RGb3JtLm1vZHVsZS5zY3NzJztcbmltcG9ydCAqIGFzIFl1cCBmcm9tICd5dXAnO1xuaW1wb3J0IGFwaVBnc3FsIGZyb20gXCIuLi8uLi9jb25maWcvYXBpUGdzcWxcIjtcblxuXG5jb25zdCBDdXN0b21JbnB1dCA9ICh7IGZpZWxkLCBmb3JtLCAuLi5wcm9wc30pID0+IHtcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgXCJmb3JtX19cIiArIGZpZWxkLm5hbWUgfT5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXsgZmllbGQubmFtZSB9PnsgZmllbGQubmFtZSB9PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB7IC4uLmZpZWxkIH0geyAuLi5wcm9wcyB9IGlkPXtmaWVsZC5uYW1lfSBuYW1lPXtmaWVsZC5uYW1lfSAvPlxuICAgICAgICAgICAgPEVycm9yTWVzc2FnZSBuYW1lPXtmaWVsZC5uYW1lfSBjb21wb25lbnQ9eyBDdXN0b21FcnJvciB9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuY29uc3QgQ3VzdG9tVGV4dGFyZWEgPSAoeyBmaWVsZCwgZm9ybSwgLi4ucHJvcHN9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBcImZvcm1fX1wiICsgZmllbGQubmFtZSB9PlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9eyBwcm9wcy5sYWJlbCB9Pk1lc3NhZ2UgPHNwYW4gY2xhc3NOYW1lPXtcImZvcm1fX1wiICsgZmllbGQubmFtZSArIFwiLS1sYWJlbExlbmd0aFwifT41MDAgY2FyYWN0w6hyZXMgbWF4aW11bS4uLjwvc3Bhbj48L2xhYmVsPlxuICAgICAgICAgICAgPHRleHRhcmVhIHsgLi4uZmllbGQgfSBpZD17ZmllbGQubmFtZX0gbmFtZT17ZmllbGQubmFtZX0gIG1heExlbmd0aD1cIjUwMFwiIHBsYWNlaG9sZGVyPVwiQm9uam91ci4uLi5cIi8+XG4gICAgICAgICAgICA8RXJyb3JNZXNzYWdlIG5hbWU9e2ZpZWxkLm5hbWV9IGNvbXBvbmVudD17IEN1c3RvbUVycm9yIH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5jb25zdCBDdXN0b21FcnJvciA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybV9fZXJyb3JcIj57IHByb3BzLmNoaWxkcmVuIH08L2Rpdj5cbiAgICApXG59XG5cbmNvbnN0IE1lc3NhZ2VTdWJtaXQgPSAoeyBzdGF0ZSB9KSA9PiB7XG5cbiAgICAgICAgaWYgKHN0YXRlLm1lc3NhZ2UubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZVwiPnsgc3RhdGUubWVzc2FnZSB9PC9kaXY+XG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdGUubWVzc2FnZS5sZW5ndGggPiAxICl7XG4gICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJlcnJvclwiPnsgc3RhdGUuZXJyb3IgfTwvZGl2PlxuICAgICAgICB9XG59XG5cbmNsYXNzIENvbnRhY3RGb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuaW5wdXQgPSBSZWFjdC5mb3J3YXJkUmVmKCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICcnLFxuICAgICAgICAgICAgY29kZTogMCxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVzZXJTY2hlbWEgPSBZdXAub2JqZWN0KCkuc2hhcGUoe1xuICAgICAgICBmaXJzdG5hbWU6IFl1cC5zdHJpbmcoKS5taW4oMiwgJ21pbmltdW4gMiBjYXJhY3TDqHJlcycpLm1heCgyMCwgJ2xhIHNhaXNpZSBlc3QgdHJvcCBsb25ndWUnKS5yZXF1aXJlZCgnY2hhbXAgcmVxdWlzJyksXG4gICAgICAgIGxhc3RuYW1lOiBZdXAuc3RyaW5nKCkubWluKDIsICdtaW5pbXVuIDIgY2FyYWN0w6hyZXMnKS5tYXgoMjAsICdsYSBzYWlzaWUgZXN0IHRyb3AgbG9uZ3VlJykucmVxdWlyZWQoJ2NoYW1wIHJlcXVpcycpLFxuICAgICAgICBlbWFpbDogWXVwLnN0cmluZygpLmVtYWlsKCdtYXV2YWlzIGVtYWlsJykucmVxdWlyZWQoJ2NoYW1wIHJlcXVpcycpLFxuICAgICAgICB0b3BpYzogWXVwLnN0cmluZygpLm1pbigyLCAnbGUgc3VqZXQgZG9pdCBjb21wb3J0ZXIgYXUgbW9pbnMgMiBjYXJhY3TDqHJlcycpLm1heCg1MCwgJ2xhIHNhaXNpZSBlc3QgdHJvcCBsb25ndWUnKS5yZXF1aXJlZCgnY2hhbXAgcmVxdWlzJyksXG4gICAgICAgIGJvZHk6IFl1cC5zdHJpbmcoKS5taW4oMTAsICdsZSB0ZXh0ZSBkb2l0IMOqdHJlIGludGVsbGlnaWJsZScpLm1heCg1MDAsICd0cm9wIGxvbmcnKS5yZXF1aXJlZCgnY2hhbXAgcmVxdWlzJylcbiAgICB9KTtcblxuICAgIHN1Ym1pdCA9ICh2YWx1ZXMsIGFjdGlvbnMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2NvdWNvdScpO1xuICAgICAgICBhcGlQZ3NxbC5wb3N0KCcvYXBpL2NvbnRhY3QvZm9ybScsIHZhbHVlcywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSApXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmICggMjAxID09PSByZXMuc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdMZSBtZXNzYWdlIGEgYmllbiDDqXTDqSBlbnJlZ2lzdHLDqS4nLFxuICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogJydcbiAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICBhY3Rpb25zLnNldFN1Ym1pdHRpbmcoZmFsc2UpO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiAnVW5lIGVycmV1ciBlc3Qgc3VydmVudWUgbG9ycyBkZSBsXFwnZW52b2llIGR1IGZvcm11bGFpcmUsIGxlIG1lc3NhZ2UgblxcJ2EgcHUgw6p0cmUgZW5yZWdpc3Ryw6kuJyxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJydcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBhY3Rpb25zLnNldFN1Ym1pdHRpbmcoZmFsc2UpO1xuXG4gICAgICAgICAgICB9KVxuICAgICAgICBjb25zb2xlLmxvZyhhY3Rpb25zKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5pbnB1dC5jdXJyZW50LmZvY3VzKCk7XG4gICAgfVxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+Rm9ybXVsYWlyZSBkZSBjb250YWN0PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1pa1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17IHsgZmlyc3RuYW1lOiAnJywgbGFzdG5hbWU6ICcnLCBlbWFpbDogJycsIHRvcGljOiAnJywgYm9keTogJycsIGl0ZW1zOiBbXSB9IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXsgdGhpcy5zdWJtaXQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvblNjaGVtYT17IHRoaXMudXNlclNjaGVtYSB9XG5cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgeyAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVN1Ym1pdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1N1Ym1pdHRpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0aGlzLnN0YXRlLm1lc3NhZ2UgfHwgdGhpcy5zdGF0ZS5lcnJvciA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZVN1Ym1pdCBzdGF0ZT17IHRoaXMuc3RhdGUgfSAvPiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17IGhhbmRsZVN1Ym1pdCB9IGNsYXNzTmFtZT1cImZvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiZmlyc3RuYW1lXCIgcmVmPXsgdGhpcy5pbnB1dCB9ICBjb21wb25lbnQ9eyBDdXN0b21JbnB1dCB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cImxhc3RuYW1lXCIgIGNvbXBvbmVudD17IEN1c3RvbUlucHV0IH0gIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cImVtYWlsXCIgIGNvbXBvbmVudD17IEN1c3RvbUlucHV0IH0gIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cInRvcGljXCIgIGNvbXBvbmVudD17IEN1c3RvbUlucHV0IH0gIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cImJvZHlcIiAgY29tcG9uZW50PXsgQ3VzdG9tVGV4dGFyZWEgfSAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZvcm1fX2J0bi0tc3VibWl0XCIgdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPXsgaXNTdWJtaXR0aW5nIH0+U291bWV0dHJlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtaWs+XG4gICAgICAgICAgICAgICAgPC8+XG5cblxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0Rm9ybTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge05hdkxpbmt9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgJy4vSGVhZGVyLm1vZHVsZS5zY3NzJztcblxuXG5jb25zdCBCdXR0b24gPSAoeyBvbkNsaWNrLCBpc1RvZ2dsZU9uIH0pID0+IChcbiAgICA8PlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2soKSB9IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJuYXZCYXJfX2J0blwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZVwiPjwvZGl2PlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgeyBpc1RvZ2dsZU9uICYmIDxOYXZCYXIgLz4gfVxuICAgIDwvPlxuXG5cbik7XG5cbmNvbnN0IE5hdkJhciA9ICgpID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fbmF2QmFyXCI+XG4gICAgICAgIDxOYXZMaW5rIHRvPVwiL2hhaWt1cy9ob21lcGFnZVwiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiIGNsYXNzTmFtZT1cImhlYWRlcl9fbmF2QmFyLS1saW5rXCI+QWNjdWVpbDwvTmF2TGluaz5cbiAgICAgICAgPE5hdkxpbmsgdG89XCIvaGFpa3VzL2FsbFwiIGNsYXNzTmFtZT1cImhlYWRlcl9fbmF2QmFyLS1saW5rXCI+SGHDr2t1czwvTmF2TGluaz5cbiAgICAgICAgPE5hdkxpbmsgdG89XCIvaGFpa3VzL3Byb3NlXCIgY2xhc3NOYW1lPVwiaGVhZGVyX19uYXZCYXItLWxpbmtcIj5Qcm9zZTwvTmF2TGluaz5cbiAgICA8L2Rpdj5cbilcblxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaXNUb2dnbGVPbjogZmFsc2UsXG4gICAgICAgICAgICBpc1Bob25lVmlld3BvcnQ6IGZhbHNlLFxuICAgICAgICB9XG5cbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlUHJlZGljYXRlKCk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMudXBkYXRlUHJlZGljYXRlKTtcblxuICAgIH1cblxuICAgIHVwZGF0ZVByZWRpY2F0ZSA9ICgpID0+IHtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlzUGhvbmVWaWV3cG9ydDogd2luZG93LmlubmVyV2lkdGggPD0gMzc1XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLnVwZGF0ZVByZWRpY2F0ZSk7XG4gICAgfVxuXG4gICAgZGlzcGxheU1lbnUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgaXNUb2dnbGVPbiB9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlzVG9nZ2xlT246ICFpc1RvZ2dsZU9uXG4gICAgICAgIH0pXG5cbiAgICB9XG5cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBob21lcGFnZSB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgIDxoMT57aG9tZXBhZ2UudGl0bGV9PC9oMT5cblxuICAgICAgICAgICAgICAgICAgICB7IHRoaXMuc3RhdGUuaXNQaG9uZVZpZXdwb3J0ID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsgdGhpcy5kaXNwbGF5TWVudSB9IGlzVG9nZ2xlT249eyB0aGlzLnN0YXRlLmlzVG9nZ2xlT24gfSAvPlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkJhciAgLz5cbiAgICAgICAgICAgICAgICAgICAgKX1cblxuXG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fc2VhcmNoQmFyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJzZWFyY2hcIiBwbGFjZWhvbGRlcj1cInJlY2hlcmNoZXIgdW4gaGFpa3VzXCIvPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNlYXJjaEJhcl9fYnRuXCI+c2VhcmNoPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgKVxuICAgIH1cblxufVxuXG5cblxuXG5cblxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExhbmRzY2FwZUltYWdlIGZyb20gJy4uLy4uL2Fzc2V0cy9pbWFnZXMvZmlzaGVybWFuLTI3MzkxMTVfMTI4MC5qcGcnO1xuaW1wb3J0ICcuL0xhbmRzY2FwZS5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IExhbmRzY2FwZSA9ICh7IGhvbWVwYWdlIH0pID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFuZHNjYXBlXCI+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJsYW5kc2NhcGVfX3RpdGxlXCI+TW9uIGJsb2cgcG91ciBwYXJ0YWdlciBtYSBwYXNzaW9uIGRlcyBoYcOva3VzPC9oMj5cbiAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwibGFuZHNjYXBlX19zZXBhcmF0b3JcIi8+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxhbmRzY2FwZV9fcHJlc2VudGF0aW9uXCI+eyBob21lcGFnZS5wcmVzZW50YXRpb24gfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExhbmRzY2FwZTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBMYW5kc2NhcGUgZnJvbSBcIi4uL0xhbmRzY2FwZS9MYW5kc2NhcGVcIjtcbmltcG9ydCBIYWlrdUxpc3QgZnJvbSBcIi4uLy4uL2ZlYXR1cmVzL2hhaWt1cy9jb21wb25lbnRzL0hhaWt1TGlzdFwiO1xuaW1wb3J0IE5vdEZvdW5kIGZyb20gXCIuLi9Ob3RGb3VuZC9Ob3RGb3VuZFwiO1xuaW1wb3J0IENvbnRhY3RGb3JtIGZyb20gXCIuLi9Gb3JtL0NvbnRhY3RGb3JtXCI7XG5pbXBvcnQgQ29tcGVuZGl1bSBmcm9tIFwiLi4vQ29tcGVuZGl1bS9Db21wZW5kaXVtXCI7XG5cbmltcG9ydCAnLi9NYWluLm1vZHVsZS5zY3NzJztcbmltcG9ydCB7UmVkaXJlY3QsIFJvdXRlLCBTd2l0Y2h9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmNsYXNzIE1haW4gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgIHN1cGVyKHByb3BzKVxuICAgfVxuXG4gICByZW5kZXIoKXtcbiAgICAgICBjb25zdCB7IGhvbWVwYWdlICwgaGFpa3VzIH0gPSB0aGlzLnByb3BzXG4gICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9oYWlrdXMvaG9tZXBhZ2VcIiByZW5kZXI9eyAoKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFuZHNjYXBlIGhvbWVwYWdlPXsgaG9tZXBhZ2UgfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIYWlrdUxpc3QgaGFpa3VzPXsgaGFpa3VzIH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfSAvPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9oYWlrdXMvYWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tcGVuZGl1bSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL2NvbnRhY3RcIiAgcmVuZGVyPXsgKCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRhY3RGb3JtIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX0vPlxuICAgICAgICAgICAgICAgICAgICA8UmVkaXJlY3QgZnJvbT1cIi9cIiB0bz1cIi9oYWlrdXMvaG9tZXBhZ2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgY29tcG9uZW50PXtOb3RGb3VuZH0gLz5cbiAgICAgICAgICAgICAgICA8L1N3aXRjaD5cblxuXG5cbiAgICAgICApXG4gICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge05hdkxpbmt9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmNvbnN0IE5vdEZvdW5kID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm90X2ZvdW5kXCI+XG4gICAgICAgICAgICA8aDE+UGFnZSBOb3QgRm91bmQ8L2gxPlxuICAgICAgICAgICAgPE5hdkxpbmsgc3R5bGU9e3t0ZXh0ZGVjb3JhdGlvbjogJ25vbmUnfX0gdG89XCIvXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwibm90X2ZvdW5kX19idXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgSG9tZXBhZ2VcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOb3RGb3VuZDtcbiIsImltcG9ydCAqIGFzIGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5sZXQgYXBpUGdzcWwgPSB7fTtcbmNvbnNvbGUubG9nKCdlbnZpcm9uZW1lbnQgJywgcHJvY2Vzcy5lbnYpO1xuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpe1xuICAgIGFwaVBnc3FsID0gYXhpb3MuY3JlYXRlKHtcbiAgICAgICAgYmFzZVVSTDogJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH1cblxuICAgIH0pXG5cbn0gZWxzZSB7XG4gICAgYXBpUGdzcWwgPSBheGlvcy5jcmVhdGUoe1xuICAgICAgICBiYXNlVVJMOiAnaHR0cHM6Ly9qNG1keGlzYnJxLWs2aGx6MzNsbTdqMm8uZXUuczV5LmlvJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9XG4gICAgfSlcbn1cbmV4cG9ydCBkZWZhdWx0IGFwaVBnc3FsO1xuXG5cblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuXG5cblxuZXhwb3J0IGNvbnN0IEhhaWt1ID0gKHsgaGFpa3UgfSkgPT4ge1xuXG5cbiAgICByZXR1cm4gKFxuICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFpa3VcIj5cbiAgICAgICAgICAgPGg2PnsgaGFpa3UudGl0bGUgfTwvaDY+XG4gICAgICAgICAgIDxwPnsgaGFpa3UuY29udGVudCB9PC9wPlxuICAgICAgICAgICA8ZGl2PiZsb3dhc3Q7PC9kaXY+XG4gICAgICAgPC9kaXY+XG4gICAgKTtcblxufVxuXG5cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBIYWlrdSB9IGZyb20gXCIuL0hhaWt1XCI7XG5pbXBvcnQgJy4vSGFpa3VMaXN0Lm1vZHVsZS5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGFpa3VMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgaGFpa3VzIH0gPSB0aGlzLnByb3BzO1xuXG5cbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWlrdXNMaXN0XCI+XG4gICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImhhaWt1c0xpc3RfX3RpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgIE1lcyBkZXJuaWVycyBoYcOva3VzXG4gICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiaGFpa3VzTGlzdF9fc2VwYXJhdG9yXCIvPlxuICAgICAgICAgICAgICAgICAgIHsgaGFpa3VzICYmIGhhaWt1cy5tYXAoKGgsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgPEhhaWt1IGtleT17IGgudGl0bGUgKyBpIH0gaGFpa3U9eyBoIH0gLz5cbiAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIClcbiAgICB9XG59XG5cblxuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9