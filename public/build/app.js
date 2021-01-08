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

      _config_apiPgsql__WEBPACK_IMPORTED_MODULE_12__["default"].get('/api/haikus/list').then(function (res) {
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
      _config_apiPgsql__WEBPACK_IMPORTED_MODULE_12__["default"].get('/api/homepage').then(function (res) {
        _this3.setState({
          homepage: res.data,
          loading: true
        });

        console.log(res.status);
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
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header.module.scss */ "./assets/components/Header/Header.module.scss");
/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Header_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");





var Header = function Header(_ref) {
  var homepage = _ref.homepage;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, homepage && homepage.map(function (h, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "header"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, h.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, h.subTitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "navBar"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      to: "/haikus/all",
      className: "navBar__button"
    }, "Accueil"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      to: "/haikus/meshaikus",
      className: "navBar__button"
    }, "Mes Ha\xEFkus"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      to: "/haikus/rose",
      className: "navBar__button"
    }, "Rose")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
      className: "separator"
    }));
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
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_images_fisherman_2739115_1280_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/images/fisherman-2739115_1280.jpg */ "./assets/assets/images/fisherman-2739115_1280.jpg");
/* harmony import */ var _Landscape_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Landscape.module.scss */ "./assets/components/Landscape/Landscape.module.scss");
/* harmony import */ var _Landscape_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Landscape_module_scss__WEBPACK_IMPORTED_MODULE_3__);





var Landscape = function Landscape(_ref) {
  var homepage = _ref.homepage;
  console.log(homepage);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "landscape"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: _assets_images_fisherman_2739115_1280_jpg__WEBPACK_IMPORTED_MODULE_2__["default"],
    alt: "Smiley face",
    width: "300px",
    height: "300px"
  }), homepage && homepage.map(function (h, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "landscape__presentation"
    }, h.presentation);
  }));
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
console.log("development");

if (true) {
  apiPgsql = axios__WEBPACK_IMPORTED_MODULE_0__["create"]({
    baseURL: 'http://127.0.0.1:8000',
    headers: {
      'Content-type': 'application/json'
    }
  });
} else {}

/* harmony default export */ __webpack_exports__["default"] = (apiPgsql);

/***/ })

},[["./assets/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Fzc2V0cy9pbWFnZXMvZmlzaGVybWFuLTI3MzkxMTVfMTI4MC5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9MYW5kc2NhcGUvTGFuZHNjYXBlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0xhbmRzY2FwZS9MYW5kc2NhcGUubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvTm90Rm91bmQvTm90Rm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbmZpZy9hcGlQZ3NxbC5qcyJdLCJuYW1lcyI6WyJMYXp5SGFpa3VMaXN0IiwibGF6eSIsIkFwcCIsInByb3BzIiwic3RhdGUiLCJoYWlrdXMiLCJob21lcGFnZSIsImxvYWRpbmciLCJsb2FkaW5nSGFpa3VzIiwic2V0U3RhdGUiLCJsb2FkaW5nSG9tZXBhZ2UiLCJhcGlQZ3NxbCIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwiTm90Rm91bmQiLCJDb21wb25lbnQiLCJSZWFjdERvbSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJGb290ZXIiLCJIZWFkZXIiLCJtYXAiLCJoIiwiaSIsInRpdGxlIiwic3ViVGl0bGUiLCJMYW5kc2NhcGUiLCJMYW5kc2NhcGVJbWFnZSIsImluZGV4IiwicHJlc2VudGF0aW9uIiwidGV4dGRlY29yYXRpb24iLCJwcm9jZXNzIiwiYXhpb3MiLCJiYXNlVVJMIiwiaGVhZGVycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUdBLElBQU1BLGFBQWEsZ0JBQUdDLGtEQUFJLENBQUM7QUFBQSxTQUFNLDJJQUFOO0FBQUEsQ0FBRCxDQUExQjs7SUFFTUMsRzs7Ozs7QUFDRixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDVEMsWUFBTSxFQUFFLEVBREM7QUFFVEMsY0FBUSxFQUFFLEVBRkQ7QUFHVEMsYUFBTyxFQUFFO0FBSEEsS0FBYjtBQUZlO0FBT2xCOzs7O3dDQUNtQjtBQUNoQixXQUFLQyxhQUFMO0FBQ0EsV0FBS0MsUUFBTCxDQUFjO0FBQ1ZGLGVBQU8sRUFBRTtBQURDLE9BQWQ7QUFJQSxXQUFLRyxlQUFMO0FBRUg7OztvQ0FFZTtBQUFBOztBQUVaQywrREFBUSxDQUFDQyxHQUFULENBQWEsa0JBQWIsRUFDS0MsSUFETCxDQUNZLFVBQUFDLEdBQUcsRUFBSTtBQUNQLGNBQUksQ0FBQ0wsUUFBTCxDQUFjO0FBQ1ZKLGdCQUFNLEVBQUVTLEdBQUcsQ0FBQ0MsSUFERjtBQUVWUixpQkFBTyxFQUFFO0FBRkMsU0FBZDtBQUdHLE9BTGYsRUFNUSxVQUFBUyxLQUFLO0FBQUEsZUFBSUMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVosQ0FBSjtBQUFBLE9BTmI7QUFPSDs7O3NDQUVpQjtBQUFBOztBQUNkQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaO0FBQ0FQLCtEQUFRLENBQUNDLEdBQVQsQ0FBYSxlQUFiLEVBQ0tDLElBREws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R0FBRyxFQUFmO0FBQ0FNLE9BQU8sQ0FBQ0MsR0FBUixDQUFZb0IsYUFBWjs7QUFDQSxJQUFHQSxJQUFILEVBQTBDO0FBQ3RDM0IsVUFBUSxHQUFHNEIsNENBQUEsQ0FBYTtBQUNwQkMsV0FBTyxFQUFFLHVCQURXO0FBRXBCQyxXQUFPLEVBQUU7QUFDTCxzQkFBZ0I7QUFEWDtBQUZXLEdBQWIsQ0FBWDtBQVFILENBVEQsTUFTTyxFQU9OOztBQUNjOUIsdUVBQWYsRSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBsYXp5LCBTdXNwZW5zZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERvbSBmcm9tICdyZWFjdC1kb20nO1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyJztcbmltcG9ydCB7IEZvb3RlciB9IGZyb20gJy4vY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyJztcbmltcG9ydCBOb3RGb3VuZCBmcm9tIFwiLi9jb21wb25lbnRzL05vdEZvdW5kL05vdEZvdW5kXCI7XG5cbmltcG9ydCBMYW5kc2NhcGUgZnJvbSBcIi4vY29tcG9uZW50cy9MYW5kc2NhcGUvTGFuZHNjYXBlXCI7XG5pbXBvcnQgJy4vYXBwLm1vZHVsZS5zY3NzJztcblxuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIFJlZGlyZWN0LCBTd2l0Y2gsIFJvdXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBhcGlQZ3NxbCBmcm9tIFwiLi9jb25maWcvYXBpUGdzcWxcIjtcblxuXG5jb25zdCBMYXp5SGFpa3VMaXN0ID0gbGF6eSgoKSA9PiBpbXBvcnQoJy4vZmVhdHVyZXMvaGFpa3VzJykpXG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaGFpa3VzOiBbXSxcbiAgICAgICAgICAgIGhvbWVwYWdlOiBbXSxcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMubG9hZGluZ0hhaWt1cygpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubG9hZGluZ0hvbWVwYWdlKCk7XG5cbiAgICB9XG5cbiAgICBsb2FkaW5nSGFpa3VzKCkge1xuXG4gICAgICAgIGFwaVBnc3FsLmdldCgnL2FwaS9oYWlrdXMvbGlzdCcpXG4gICAgICAgICAgICAudGhlbiAoIHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFpa3VzOiByZXMuZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSl9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcbiAgICB9XG5cbiAgICBsb2FkaW5nSG9tZXBhZ2UoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdoZWxsbycpO1xuICAgICAgICBhcGlQZ3NxbC5nZXQoJy9hcGkvaG9tZXBhZ2UnKVxuICAgICAgICAgICAgLnRoZW4oIHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGhvbWVwYWdlOiByZXMuZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLnN0YXR1cyl9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgaGFpa3VzLCBob21lcGFnZSB9ID0gdGhpcy5zdGF0ZVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8SGVhZGVyIGhvbWVwYWdlPXsgaG9tZXBhZ2UgfS8+XG4gICAgICAgICAgICAgICAgPExhbmRzY2FwZSBob21lcGFnZT17IGhvbWVwYWdlIH0gLz5cbiAgICAgICAgICAgICAgICA8U3VzcGVuc2UgZmFsbGJhY2s9ezxoMT5Mb2FkaW5nLi4uPC9oMT59PlxuICAgICAgICAgICAgICAgICAgICA8U3dpdGNoPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9oYWlrdXMvYWxsXCIgcmVuZGVyPXsgKCkgPT4gKDxMYXp5SGFpa3VMaXN0IGhhaWt1cz17IGhhaWt1cyB9IC8+KX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWRpcmVjdCBmcm9tPVwiL1wiIHRvPVwiL2hhaWt1cy9hbGxcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGNvbXBvbmVudD17Tm90Rm91bmR9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9Td2l0Y2g+XG5cbiAgICAgICAgICAgICAgICA8L1N1c3BlbnNlPlxuICAgICAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgICAgIDwvPlxuXG4gICAgICAgIClcbiAgICB9XG59XG5cblxuXG5SZWFjdERvbS5yZW5kZXIoXG4gICAgPFJvdXRlcj5cbiAgICAgICAgPEFwcCAvPlxuICAgIDwvUm91dGVyPiAsXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImV4cG9ydCBkZWZhdWx0IFwiL2J1aWxkL2ltYWdlcy9maXNoZXJtYW4tMjczOTExNV8xMjgwLmNkZTI2NDFkLmpwZ1wiOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCAnLi9Gb290ZXIubW9kdWxlLnNjc3MnO1xuXG5leHBvcnQgY29uc3QgRm9vdGVyID0gKCkgPT4gKFxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3dob0FtSVwiIGNsYXNzTmFtZT1cImZvb3Rlcl9fbGlua1wiPlF1aSBzdWlzLWplPC9MaW5rPlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2NvbnRhY3RcIiBjbGFzc05hbWU9XCJmb290ZXJfX2xpbmtcIj5Db250YWN0PC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29weXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+Q29weXJpZ2h0ICZjb3B5OyBWw6lyb25pcXVlIE1hbmNob24gLSBhdXRldXIgZHUgYmxvZzwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuKVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9IZWFkZXIubW9kdWxlLnNjc3MnXG5pbXBvcnQge0xpbmt9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmNvbnN0IEhlYWRlciA9ICh7IGhvbWVwYWdlIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgeyBob21lcGFnZSAmJiBob21lcGFnZS5tYXAoIChoLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgxPnsgaC50aXRsZSB9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGgzPnsgaC5zdWJUaXRsZSB9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZCYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2hhaWt1cy9hbGxcIiBjbGFzc05hbWU9XCJuYXZCYXJfX2J1dHRvblwiPkFjY3VlaWw8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9oYWlrdXMvbWVzaGFpa3VzXCIgY2xhc3NOYW1lPVwibmF2QmFyX19idXR0b25cIj5NZXMgSGHDr2t1czwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2hhaWt1cy9yb3NlXCIgY2xhc3NOYW1lPVwibmF2QmFyX19idXR0b25cIj5Sb3NlPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cInNlcGFyYXRvclwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC8+XG5cbiAgICApXG5cbn1cblxuXG5cblxuXG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMYW5kc2NhcGVJbWFnZSBmcm9tICcuLi8uLi9hc3NldHMvaW1hZ2VzL2Zpc2hlcm1hbi0yNzM5MTE1XzEyODAuanBnJztcbmltcG9ydCAnLi9MYW5kc2NhcGUubW9kdWxlLnNjc3MnO1xuY29uc3QgTGFuZHNjYXBlID0gKHsgaG9tZXBhZ2UgfSkgPT4ge1xuICAgICBjb25zb2xlLmxvZyhob21lcGFnZSk7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFuZHNjYXBlXCI+XG4gICAgICAgICAgICAgPGltZyBzcmM9e0xhbmRzY2FwZUltYWdlfSBhbHQ9XCJTbWlsZXkgZmFjZVwiIHdpZHRoPVwiMzAwcHhcIiBoZWlnaHQ9XCIzMDBweFwiIC8+XG4gICAgICAgICAgICAgICAgIHsgaG9tZXBhZ2UgJiYgaG9tZXBhZ2UubWFwKCAoaCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxhbmRzY2FwZV9fcHJlc2VudGF0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAge2gucHJlc2VudGF0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICApKSB9XG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGFuZHNjYXBlO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtOYXZMaW5rfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5jb25zdCBOb3RGb3VuZCA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdF9mb3VuZFwiPlxuICAgICAgICAgICAgPGgxPlBhZ2UgTm90IEZvdW5kPC9oMT5cbiAgICAgICAgICAgIDxOYXZMaW5rIHN0eWxlPXt7dGV4dGRlY29yYXRpb246ICdub25lJ319IHRvPVwiL1wiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cIm5vdF9mb3VuZF9fYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgIEhvbWVwYWdlXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTm90Rm91bmQ7XG4iLCJpbXBvcnQgKiBhcyBheGlvcyBmcm9tICdheGlvcydcblxubGV0IGFwaVBnc3FsID0ge307XG5jb25zb2xlLmxvZyhwcm9jZXNzLmVudi5OT0RFX0VOVilcbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKXtcbiAgICBhcGlQZ3NxbCA9IGF4aW9zLmNyZWF0ZSh7XG4gICAgICAgIGJhc2VVUkw6ICdodHRwOi8vMTI3LjAuMC4xOjgwMDAnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9XG5cbiAgICB9KVxuXG59IGVsc2Uge1xuICAgIGFwaVBnc3FsID0gYXhpb3MuY3JlYXRlKHtcbiAgICAgICAgYmFzZVVSTDogJ2h0dHBzOi8vajRtZHhpc2JycS1rNmhsejMzbG03ajJvLmV1LnM1eS5pbycsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfVxuICAgIH0pXG59XG5leHBvcnQgZGVmYXVsdCBhcGlQZ3NxbDtcblxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=