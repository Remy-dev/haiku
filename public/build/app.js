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
/* harmony import */ var _base_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./base.module.scss */ "./assets/base.module.scss");
/* harmony import */ var _base_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_base_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _config_apiPgsql__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./config/apiPgsql */ "./assets/config/apiPgsql.js");
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









var LazyMain = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_4__["lazy"])(function () {
  return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./components/Main/Main */ "./assets/components/Main/Main.js"));
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

      _config_apiPgsql__WEBPACK_IMPORTED_MODULE_11__["default"].get('/api/homepage/haikus/list').then(function (res) {
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
      _config_apiPgsql__WEBPACK_IMPORTED_MODULE_11__["default"].get('/api/homepage').then(function (res) {
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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Header_Header__WEBPACK_IMPORTED_MODULE_6__["default"], {
        homepage: homepage
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4__["Suspense"], {
        fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h1", null, "Loading...")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["Route"], {
        exact: true,
        path: "/haikus/all",
        render: function render() {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(LazyMain, {
            homepage: homepage,
            haikus: haikus
          });
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["Redirect"], {
        from: "/",
        to: "/haikus/all"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["Route"], {
        component: _components_NotFound_NotFound__WEBPACK_IMPORTED_MODULE_8__["default"]
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_7__["Footer"], null));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

react_dom__WEBPACK_IMPORTED_MODULE_5___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["BrowserRouter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(App, null)), document.getElementById('root'));

/***/ }),

/***/ "./assets/base.module.scss":
/*!*********************************!*\
  !*** ./assets/base.module.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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





var Button = function Button() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "button",
    className: "navBar__btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "line"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "line"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "line"
  }));
};

var NavBar = function NavBar() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "header__navBar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    to: "/haikus/all",
    activeClassName: "active",
    className: "header__navBar-link"
  }, "Accueil"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    to: "/haikus/meshaikus",
    className: "header__navBar-link"
  }, "Mes Ha\xEFkus"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    to: "/haikus/rose",
    className: "header__navbar-link"
  }, "Rose"));
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
      console.log('click', _this.state.isToggleOn);

      _this.setState(function (state) {
        !state.isToggleOn;
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
      var buttonClickEvent = document.getElementsByClassName(".navBar__btn") ? document.getElementsByClassName(".navBar__btn") : null;
      this.updatePredicate();
      window.addEventListener("resize", this.updatePredicate);
      {
        this.state.isPhoneViewport && buttonClickEvent.addEventListener("click", this.displayMenu);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var buttonClickEvent = document.getElementsByClassName(".navBar__btn") && document.getElementsByClassName(".navBar__btn");
      window.removeEventListener("resize", this.updatePredicate);
      {
        this.state.isPhoneViewport && buttonClickEvent.addEventListener("click", this.displayMenu);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var homepage = this.props.homepage;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, homepage.title), this.state.isPhoneViewport ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Button, {
        onClick: this.displayMenu
      }, this.state.isToggleOn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavBar, null) : null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavBar, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
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

/***/ })

},[["./assets/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9iYXNlLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvTm90Rm91bmQvTm90Rm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbmZpZy9hcGlQZ3NxbC5qcyJdLCJuYW1lcyI6WyJMYXp5TWFpbiIsImxhenkiLCJBcHAiLCJwcm9wcyIsInN0YXRlIiwiaGFpa3VzIiwiaG9tZXBhZ2UiLCJsb2FkaW5nIiwibG9hZGluZ0hhaWt1cyIsInNldFN0YXRlIiwibG9hZGluZ0hvbWVwYWdlIiwiYXBpUGdzcWwiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIk5vdEZvdW5kIiwiQ29tcG9uZW50IiwiUmVhY3REb20iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiRm9vdGVyIiwiQnV0dG9uIiwiTmF2QmFyIiwiSGVhZGVyIiwiaXNQaG9uZVZpZXdwb3J0Iiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlzVG9nZ2xlT24iLCJidXR0b25DbGlja0V2ZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInVwZGF0ZVByZWRpY2F0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJkaXNwbGF5TWVudSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0aXRsZSIsInRleHRkZWNvcmF0aW9uIiwicHJvY2Vz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WSxlQUFaLEVBQTZCdUIsa0NBQTdCOztBQUNBLElBQUdBLElBQUgsRUFBMEM7QUFDdEM5QixVQUFRLEdBQUcrQiw0Q0FBQSxDQUFhO0FBQ3BCQyxXQUFPLEVBQUUsdUJBRFc7QUFFcEJDLFdBQU8sRUFBRTtBQUNMLHNCQUFnQjtBQURYO0FBRlcsR0FBYixDQUFYO0FBUUgsQ0FURCxNQVNPLEVBT047O0FBQ2NqQyx1RUFBZixFIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgbGF6eSwgU3VzcGVuc2UgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3REb20gZnJvbSAncmVhY3QtZG9tJztcblxuaW1wb3J0IEhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlcic7XG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlcic7XG5pbXBvcnQgTm90Rm91bmQgZnJvbSBcIi4vY29tcG9uZW50cy9Ob3RGb3VuZC9Ob3RGb3VuZFwiO1xuXG5pbXBvcnQgJy4vYmFzZS5tb2R1bGUuc2Nzcyc7XG5cbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBSZWRpcmVjdCwgU3dpdGNoLCBSb3V0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgYXBpUGdzcWwgZnJvbSBcIi4vY29uZmlnL2FwaVBnc3FsXCI7XG5cblxuY29uc3QgTGF6eU1haW4gPSBsYXp5KCgpID0+IGltcG9ydCgnLi9jb21wb25lbnRzL01haW4vTWFpbicpKVxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGhhaWt1czogW10sXG4gICAgICAgICAgICBob21lcGFnZToge30sXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLmxvYWRpbmdIYWlrdXMoKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmxvYWRpbmdIb21lcGFnZSgpO1xuXG4gICAgfVxuXG4gICAgbG9hZGluZ0hhaWt1cygpIHtcblxuICAgICAgICBhcGlQZ3NxbC5nZXQoJy9hcGkvaG9tZXBhZ2UvaGFpa3VzL2xpc3QnKVxuICAgICAgICAgICAgLnRoZW4gKCByZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhaWt1czogcmVzLmRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0pfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXG4gICAgfVxuXG4gICAgbG9hZGluZ0hvbWVwYWdlKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnaGVsbG8nKTtcbiAgICAgICAgYXBpUGdzcWwuZ2V0KCcvYXBpL2hvbWVwYWdlJylcbiAgICAgICAgICAgIC50aGVuKCByZXMgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBob21lcGFnZTogcmVzLmRhdGFbMF0sXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IHRydWVcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhWzBdKX0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBoYWlrdXMsIGhvbWVwYWdlIH0gPSB0aGlzLnN0YXRlXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8SGVhZGVyIGhvbWVwYWdlPXsgaG9tZXBhZ2UgfS8+XG5cbiAgICAgICAgICAgICAgICA8U3VzcGVuc2UgZmFsbGJhY2s9ezxoMT5Mb2FkaW5nLi4uPC9oMT59PlxuICAgICAgICAgICAgICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvaGFpa3VzL2FsbFwiIHJlbmRlcj17ICgpID0+ICg8TGF6eU1haW4gaG9tZXBhZ2U9eyBob21lcGFnZSB9IGhhaWt1cz17IGhhaWt1cyB9IC8+KX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWRpcmVjdCBmcm9tPVwiL1wiIHRvPVwiL2hhaWt1cy9hbGxcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGNvbXBvbmVudD17Tm90Rm91bmR9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9Td2l0Y2g+XG5cbiAgICAgICAgICAgICAgICA8L1N1c3BlbnNlPlxuICAgICAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgIDwvPlxuXG4gICAgICAgIClcbiAgICB9XG59XG5cblxuXG5SZWFjdERvbS5yZW5kZXIoXG4gICAgICAgIDxSb3V0ZXI+XG4gICAgICAgICAgICA8QXBwIC8+XG4gICAgICAgIDwvUm91dGVyPlxuICAgICxcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG4pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0ICcuL0Zvb3Rlci5tb2R1bGUuc2Nzcyc7XG5cbmV4cG9ydCBjb25zdCBGb290ZXIgPSAoKSA9PiAoXG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX19saW5rXCI+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvd2hvQW1JXCIgY2xhc3NOYW1lPVwiZm9vdGVyX19saW5rXCI+UXVpIHN1aXMtamU8L0xpbms+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvY29udGFjdFwiIGNsYXNzTmFtZT1cImZvb3Rlcl9fbGlua1wiPkNvbnRhY3Q8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3B5cmlnaHRcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5Db3B5cmlnaHQgJmNvcHk7IFbDqXJvbmlxdWUgTWFuY2hvbiAtIGF1dGV1ciBkdSBibG9nPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4pXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtOYXZMaW5rfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0ICcuL0hlYWRlci5tb2R1bGUuc2Nzcyc7XG5cblxuY29uc3QgQnV0dG9uID0gKCkgPT4gKFxuXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cIm5hdkJhcl9fYnRuXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lXCI+PC9kaXY+XG4gICAgICAgIDwvYnV0dG9uPlxuKTtcblxuY29uc3QgTmF2QmFyID0gKCkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19uYXZCYXJcIj5cblxuICAgICAgICA8TmF2TGluayB0bz1cIi9oYWlrdXMvYWxsXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCIgY2xhc3NOYW1lPVwiaGVhZGVyX19uYXZCYXItbGlua1wiPkFjY3VlaWw8L05hdkxpbms+XG4gICAgICAgIDxOYXZMaW5rIHRvPVwiL2hhaWt1cy9tZXNoYWlrdXNcIiBjbGFzc05hbWU9XCJoZWFkZXJfX25hdkJhci1saW5rXCI+TWVzIEhhw69rdXM8L05hdkxpbms+XG4gICAgICAgIDxOYXZMaW5rIHRvPVwiL2hhaWt1cy9yb3NlXCIgY2xhc3NOYW1lPVwiaGVhZGVyX19uYXZiYXItbGlua1wiPlJvc2U8L05hdkxpbms+XG4gICAgPC9kaXY+XG4pXG5cbmNsYXNzIEhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGlzVG9nZ2xlT246IGZhbHNlLFxuICAgICAgICAgICAgaXNQaG9uZVZpZXdwb3J0OiBmYWxzZSxcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBsZXQgYnV0dG9uQ2xpY2tFdmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCIubmF2QmFyX19idG5cIikgPyBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiLm5hdkJhcl9fYnRuXCIpIDogbnVsbDtcbiAgICAgICAgdGhpcy51cGRhdGVQcmVkaWNhdGUoKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy51cGRhdGVQcmVkaWNhdGUpO1xuICAgICAgICB7IHRoaXMuc3RhdGUuaXNQaG9uZVZpZXdwb3J0ICYmIGJ1dHRvbkNsaWNrRXZlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuZGlzcGxheU1lbnUpIH1cblxuICAgIH1cblxuICAgIHVwZGF0ZVByZWRpY2F0ZSA9ICgpID0+IHtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlzUGhvbmVWaWV3cG9ydDogd2luZG93LmlubmVyV2lkdGggPD0gMzc1XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBsZXQgYnV0dG9uQ2xpY2tFdmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCIubmF2QmFyX19idG5cIikgJiYgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIi5uYXZCYXJfX2J0blwiKTtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy51cGRhdGVQcmVkaWNhdGUpO1xuICAgICAgICB7IHRoaXMuc3RhdGUuaXNQaG9uZVZpZXdwb3J0ICYmIGJ1dHRvbkNsaWNrRXZlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuZGlzcGxheU1lbnUpIH1cbiAgICB9XG5cbiAgICBkaXNwbGF5TWVudSA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2NsaWNrJywgdGhpcy5zdGF0ZS5pc1RvZ2dsZU9uKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSggc3RhdGUgPT4ge1xuICAgICAgICAgICAgIXN0YXRlLmlzVG9nZ2xlT25cbiAgICAgICAgfSlcblxuICAgIH1cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGhvbWVwYWdlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGgxPntob21lcGFnZS50aXRsZX08L2gxPlxuXG4gICAgICAgICAgICAgICAgICAgIHsgdGhpcy5zdGF0ZS5pc1Bob25lVmlld3BvcnQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eyB0aGlzLmRpc3BsYXlNZW51IH0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGhpcy5zdGF0ZS5pc1RvZ2dsZU9uID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2QmFyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZCYXIgIC8+XG4gICAgICAgICAgICAgICAgICAgICl9XG5cblxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX3NlYXJjaEJhclwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwic2VhcmNoXCIgcGxhY2Vob2xkZXI9XCJyZWNoZXJjaGVyIHVuIGhhaWt1c1wiLz5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzZWFyY2hCYXJfX2J0blwiPnNlYXJjaDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgIClcbiAgICB9XG5cbn1cblxuXG5cblxuXG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtOYXZMaW5rfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5jb25zdCBOb3RGb3VuZCA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdF9mb3VuZFwiPlxuICAgICAgICAgICAgPGgxPlBhZ2UgTm90IEZvdW5kPC9oMT5cbiAgICAgICAgICAgIDxOYXZMaW5rIHN0eWxlPXt7dGV4dGRlY29yYXRpb246ICdub25lJ319IHRvPVwiL1wiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cIm5vdF9mb3VuZF9fYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgIEhvbWVwYWdlXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTm90Rm91bmQ7XG4iLCJpbXBvcnQgKiBhcyBheGlvcyBmcm9tICdheGlvcydcblxubGV0IGFwaVBnc3FsID0ge307XG5jb25zb2xlLmxvZygnZW52aXJvbmVtZW50ICcsIHByb2Nlc3MuZW52KTtcbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKXtcbiAgICBhcGlQZ3NxbCA9IGF4aW9zLmNyZWF0ZSh7XG4gICAgICAgIGJhc2VVUkw6ICdodHRwOi8vMTI3LjAuMC4xOjgwMDAnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9XG5cbiAgICB9KVxuXG59IGVsc2Uge1xuICAgIGFwaVBnc3FsID0gYXhpb3MuY3JlYXRlKHtcbiAgICAgICAgYmFzZVVSTDogJ2h0dHBzOi8vajRtZHhpc2JycS1rNmhsejMzbG03ajJvLmV1LnM1eS5pbycsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfVxuICAgIH0pXG59XG5leHBvcnQgZGVmYXVsdCBhcGlQZ3NxbDtcblxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=