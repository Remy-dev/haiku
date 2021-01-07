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
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Header/Header */ "./assets/components/Header/Header.js");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Footer/Footer */ "./assets/components/Footer/Footer.js");
/* harmony import */ var _components_NotFound_NotFound__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/NotFound/NotFound */ "./assets/components/NotFound/NotFound.js");
/* harmony import */ var _components_Landscape_Landscape__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Landscape/Landscape */ "./assets/components/Landscape/Landscape.js");
/* harmony import */ var _app_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.module.scss */ "./assets/app.module.scss");
/* harmony import */ var _app_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_app_module_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _config_apiPgsql__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./config/apiPgsql */ "./assets/config/apiPgsql.js");
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










var LazyHaikuList = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_4__["lazy"])(function () {
  return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./features/haikus */ "./assets/features/haikus/index.js"));
});

var App = /*#__PURE__*/function (_Component) {
  _inherits(App, _Component);

  var _super = _createSuper(App);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _super.call(this, props);
    _this.state = {
      haikus: [],
      homepage: [],
      loading: false
    };
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadingHomepage();
      this.setState({
        loading: false
      });
      this.loadingHaikus();
    }
  }, {
    key: "loadingHaikus",
    value: function loadingHaikus() {
      var _this2 = this;

      _config_apiPgsql__WEBPACK_IMPORTED_MODULE_12__["default"].get('/haikus/list').then(function (res) {
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

      _config_apiPgsql__WEBPACK_IMPORTED_MODULE_12__["default"].get('/homepage').then(function (res) {
        _this3.setState({
          homepage: res.data,
          loading: true
        });
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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Header_Header__WEBPACK_IMPORTED_MODULE_6__["default"], {
        homepage: homepage
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Landscape_Landscape__WEBPACK_IMPORTED_MODULE_9__["default"], {
        homepage: homepage
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4__["Suspense"], {
        fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h1", null, "Loading...")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Route"], {
        exact: true,
        path: "/haikus/all",
        render: function render() {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(LazyHaikuList, {
            haikus: haikus
          });
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Redirect"], {
        from: "/",
        to: "/haikus/all"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Route"], {
        component: _components_NotFound_NotFound__WEBPACK_IMPORTED_MODULE_8__["default"]
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_7__["Footer"], null));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

react_dom__WEBPACK_IMPORTED_MODULE_5___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["BrowserRouter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(App, null)), document.getElementById('root'));

/***/ }),

/***/ "./assets/app.module.scss":
/*!********************************!*\
  !*** ./assets/app.module.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/whoAmI",
    className: "footer__link"
  }, "Qui suis-je"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/contact",
    className: "footer__link"
  }, "Contact")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "copyright"
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

/***/ "./assets/components/Header/Header.js":
/*!********************************************!*\
  !*** ./assets/components/Header/Header.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.module.scss */ "./assets/components/Header/Header.module.scss");
/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Header_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");




var Header = function Header(_ref) {
  var homepage = _ref.homepage;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, homepage.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, homepage.subTitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "navBar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/haikus/all",
    className: "navBar__button"
  }, "Accueil"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/haikus/meshaikus",
    className: "navBar__button"
  }, "Mes Ha\xEFkus"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/haikus/rose",
    className: "navBar__button"
  }, "Rose")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "separator"
  }));
};

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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_fisherman_2739115_1280_jpg__WEBPACK_IMPORTED_MODULE_1__["default"],
    alt: "Smiley face",
    width: "300px",
    height: "300px"
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

if (Object({"NODE_ENV":"development"}) === 'development') {
  apiPgsql = axios__WEBPACK_IMPORTED_MODULE_0__["create"]({
    baseURL: 'http://localhost:8000/api',
    headers: {
      'Content-type': 'application/json'
    }
  });
} else {
  apiPgsql = axios__WEBPACK_IMPORTED_MODULE_0__["create"]({
    baseURL: 'https://j4mdxisbrq-k6hlz33lm7j2o.eu.s5y.io/api',
    headers: {
      'Content-type': 'application/json'
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (apiPgsql);

/***/ })

},[["./assets/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Fzc2V0cy9pbWFnZXMvZmlzaGVybWFuLTI3MzkxMTVfMTI4MC5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9MYW5kc2NhcGUvTGFuZHNjYXBlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0xhbmRzY2FwZS9MYW5kc2NhcGUubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvTm90Rm91bmQvTm90Rm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbmZpZy9hcGlQZ3NxbC5qcyJdLCJuYW1lcyI6WyJMYXp5SGFpa3VMaXN0IiwibGF6eSIsIkFwcCIsInByb3BzIiwic3RhdGUiLCJoYWlrdXMiLCJob21lcGFnZSIsImxvYWRpbmciLCJsb2FkaW5nSG9tZXBhZ2UiLCJzZXRTdGF0ZSIsImxvYWRpbmdIYWlrdXMiLCJhcGlQZ3NxbCIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiTm90Rm91bmQiLCJDb21wb25lbnQiLCJSZWFjdERvbSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJGb290ZXIiLCJIZWFkZXIiLCJ0aXRsZSIsInN1YlRpdGxlIiwiTGFuZHNjYXBlIiwiTGFuZHNjYXBlSW1hZ2UiLCJwcmVzZW50YXRpb24iLCJ0ZXh0ZGVjb3JhdGlvbiIsInByb2Nlc3MiLCJheGlvcyIsImJhc2VVUkwiLCJoZWFkZXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBR0EsSUFBTUEsYUFBYSxnQkFBR0Msa0RBQUksQ0FBQztBQUFBLFNBQU0sMklBQU47QUFBQSxDQUFELENBQTFCOztJQUVNQyxHOzs7OztBQUNGLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxZQUFNLEVBQUUsRUFEQztBQUVUQyxjQUFRLEVBQUUsRUFGRDtBQUdUQyxhQUFPLEVBQUU7QUFIQSxLQUFiO0FBRmU7QUFPbEI7Ozs7d0NBQ21CO0FBQ2hCLFdBQUtDLGVBQUw7QUFDQSxXQUFLQyxRQUFMLENBQWM7QUFDVkYsZUFBTyxFQUFFO0FBREMsT0FBZDtBQUdBLFdBQUtHLGFBQUw7QUFHSDs7O29DQUVlO0FBQUE7O0FBRVpDLCtEQUFRLENBQUNDLEdBQVQsQ0FBYSxjQUFiLEVBQ0tDLElBREwsQ0FDWSxVQUFBQyxHQUFHLEVBQUk7QUFDUCxjQUFJLENBQUNMLFFBQUwsQ0FBYztBQUNWSixnQkFBTSxFQUFFUyxHQUFHLENBQUNDLElBREY7QUFFVlIsaUJBQU8sRUFBRTtBQUZDLFNBQWQ7QUFHRyxPQUxmLEVBTVEsVUFBQVMsS0FBSztBQUFBLGVBQUlDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaLENBQUo7QUFBQSxPQU5iO0FBT0g7OztzQ0FFaUI7QUFBQTs7QUFDZEwsK0RBQVEsQ0FBQ0MsR0FBVCxDQUFhLFdBQWIsRUFDS0MsSUFETCxDQUNXLFVBQUFDLEdBQUcsRUFBSTtBQUNWLGNBQUksQ0FBQ0wsUUFBTCxDQUFjO0FBQ1ZILGtCQUFRLEVBQUVR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IiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIGxhenksIFN1c3BlbnNlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RG9tIGZyb20gJ3JlYWN0LWRvbSc7XG5cbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXInO1xuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSAnLi9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXInO1xuaW1wb3J0IE5vdEZvdW5kIGZyb20gXCIuL2NvbXBvbmVudHMvTm90Rm91bmQvTm90Rm91bmRcIjtcblxuaW1wb3J0IExhbmRzY2FwZSBmcm9tIFwiLi9jb21wb25lbnRzL0xhbmRzY2FwZS9MYW5kc2NhcGVcIjtcbmltcG9ydCAnLi9hcHAubW9kdWxlLnNjc3MnO1xuXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgUmVkaXJlY3QsIFN3aXRjaCwgUm91dGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IGFwaVBnc3FsIGZyb20gXCIuL2NvbmZpZy9hcGlQZ3NxbFwiO1xuXG5cbmNvbnN0IExhenlIYWlrdUxpc3QgPSBsYXp5KCgpID0+IGltcG9ydCgnLi9mZWF0dXJlcy9oYWlrdXMnKSlcblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBoYWlrdXM6IFtdLFxuICAgICAgICAgICAgaG9tZXBhZ2U6IFtdLFxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nSG9tZXBhZ2UoKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5sb2FkaW5nSGFpa3VzKCk7XG5cblxuICAgIH1cblxuICAgIGxvYWRpbmdIYWlrdXMoKSB7XG5cbiAgICAgICAgYXBpUGdzcWwuZ2V0KCcvaGFpa3VzL2xpc3QnKVxuICAgICAgICAgICAgLnRoZW4gKCByZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhaWt1czogcmVzLmRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0pfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXG4gICAgfVxuXG4gICAgbG9hZGluZ0hvbWVwYWdlKCkge1xuICAgICAgICBhcGlQZ3NxbC5nZXQoJy9ob21lcGFnZScpXG4gICAgICAgICAgICAudGhlbiggcmVzID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgaG9tZXBhZ2U6IHJlcy5kYXRhLFxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiB0cnVlXG4gICAgICAgICAgICAgICAgfSl9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgaGFpa3VzLCBob21lcGFnZSB9ID0gdGhpcy5zdGF0ZVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8SGVhZGVyIGhvbWVwYWdlPXsgaG9tZXBhZ2UgfS8+XG4gICAgICAgICAgICAgICAgPExhbmRzY2FwZSBob21lcGFnZT17IGhvbWVwYWdlIH0gLz5cbiAgICAgICAgICAgICAgICA8U3VzcGVuc2UgZmFsbGJhY2s9ezxoMT5Mb2FkaW5nLi4uPC9oMT59PlxuICAgICAgICAgICAgICAgICAgICA8U3dpdGNoPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9oYWlrdXMvYWxsXCIgcmVuZGVyPXsgKCkgPT4gKDxMYXp5SGFpa3VMaXN0IGhhaWt1cz17IGhhaWt1cyB9IC8+KX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWRpcmVjdCBmcm9tPVwiL1wiIHRvPVwiL2hhaWt1cy9hbGxcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGNvbXBvbmVudD17Tm90Rm91bmR9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9Td2l0Y2g+XG5cbiAgICAgICAgICAgICAgICA8L1N1c3BlbnNlPlxuICAgICAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgICAgIDwvPlxuXG4gICAgICAgIClcbiAgICB9XG59XG5cblxuXG5SZWFjdERvbS5yZW5kZXIoXG4gICAgPFJvdXRlcj5cbiAgICAgICAgPEFwcCAvPlxuICAgIDwvUm91dGVyPiAsXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImV4cG9ydCBkZWZhdWx0IFwiL2J1aWxkL2ltYWdlcy9maXNoZXJtYW4tMjczOTExNV8xMjgwLmNkZTI2NDFkLmpwZ1wiOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCAnLi9Gb290ZXIubW9kdWxlLnNjc3MnO1xuXG5leHBvcnQgY29uc3QgRm9vdGVyID0gKCkgPT4gKFxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3dob0FtSVwiIGNsYXNzTmFtZT1cImZvb3Rlcl9fbGlua1wiPlF1aSBzdWlzLWplPC9MaW5rPlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2NvbnRhY3RcIiBjbGFzc05hbWU9XCJmb290ZXJfX2xpbmtcIj5Db250YWN0PC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29weXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+Q29weXJpZ2h0ICZjb3B5OyBWw6lyb25pcXVlIE1hbmNob24gLSBhdXRldXIgZHUgYmxvZzwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuKVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9IZWFkZXIubW9kdWxlLnNjc3MnXG5pbXBvcnQge0xpbmt9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmNvbnN0IEhlYWRlciA9ICh7IGhvbWVwYWdlIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgICAgPGgxPnsgaG9tZXBhZ2UudGl0bGUgfTwvaDE+XG4gICAgICAgICAgICA8aDM+eyBob21lcGFnZS5zdWJUaXRsZSB9PC9oMz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2QmFyXCI+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvaGFpa3VzL2FsbFwiIGNsYXNzTmFtZT1cIm5hdkJhcl9fYnV0dG9uXCI+QWNjdWVpbDwvTGluaz5cbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9oYWlrdXMvbWVzaGFpa3VzXCIgY2xhc3NOYW1lPVwibmF2QmFyX19idXR0b25cIj5NZXMgSGHDr2t1czwvTGluaz5cbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9oYWlrdXMvcm9zZVwiIGNsYXNzTmFtZT1cIm5hdkJhcl9fYnV0dG9uXCI+Um9zZTwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cInNlcGFyYXRvclwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMYW5kc2NhcGVJbWFnZSBmcm9tICcuLi8uLi9hc3NldHMvaW1hZ2VzL2Zpc2hlcm1hbi0yNzM5MTE1XzEyODAuanBnJztcbmltcG9ydCAnLi9MYW5kc2NhcGUubW9kdWxlLnNjc3MnO1xuY29uc3QgTGFuZHNjYXBlID0gKHsgaG9tZXBhZ2UgfSkgPT4ge1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFuZHNjYXBlXCI+XG4gICAgICAgICAgICAgPGltZyBzcmM9e0xhbmRzY2FwZUltYWdlfSBhbHQ9XCJTbWlsZXkgZmFjZVwiIHdpZHRoPVwiMzAwcHhcIiBoZWlnaHQ9XCIzMDBweFwiIC8+XG4gICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGFuZHNjYXBlX19wcmVzZW50YXRpb25cIj5cbiAgICAgICAgICAgICAgICAgeyBob21lcGFnZS5wcmVzZW50YXRpb24gfVxuICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGFuZHNjYXBlO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtOYXZMaW5rfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5jb25zdCBOb3RGb3VuZCA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdF9mb3VuZFwiPlxuICAgICAgICAgICAgPGgxPlBhZ2UgTm90IEZvdW5kPC9oMT5cbiAgICAgICAgICAgIDxOYXZMaW5rIHN0eWxlPXt7dGV4dGRlY29yYXRpb246ICdub25lJ319IHRvPVwiL1wiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cIm5vdF9mb3VuZF9fYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgIEhvbWVwYWdlXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTm90Rm91bmQ7XG4iLCJpbXBvcnQgKiBhcyBheGlvcyBmcm9tICdheGlvcydcblxubGV0IGFwaVBnc3FsID0ge307XG5cbmlmKHByb2Nlc3MuZW52ID09PSAnZGV2ZWxvcG1lbnQnKXtcbiAgICBhcGlQZ3NxbCA9IGF4aW9zLmNyZWF0ZSh7XG4gICAgICAgIGJhc2VVUkw6ICdodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfVxuXG4gICAgfSlcblxufSBlbHNlIHtcbiAgICBhcGlQZ3NxbCA9IGF4aW9zLmNyZWF0ZSh7XG4gICAgICAgIGJhc2VVUkw6ICdodHRwczovL2o0bWR4aXNicnEtazZobHozM2xtN2oyby5ldS5zNXkuaW8vYXBpJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9XG4gICAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXBpUGdzcWw7XG5cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9