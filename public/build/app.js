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
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _ContactForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ContactForm.module.scss */ "./assets/components/Form/ContactForm.module.scss");
/* harmony import */ var _ContactForm_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ContactForm_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "form__" + field.name
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
    htmlFor: field.name
  }, field.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", _extends({}, field, props, {
    id: field.name,
    name: field.name
  })));
};

var CustomTextarea = function CustomTextarea(_ref2) {
  var field = _ref2.field,
      form = _ref2.form,
      props = _objectWithoutProperties(_ref2, ["field", "form"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "form__body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
    htmlFor: props.label
  }, "Message"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("textarea", _extends({}, field, {
    id: "body",
    name: "body",
    maxLength: "500",
    placeholder: "Bonjour...."
  })));
};

var CustomError = function CustomError(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "form__error"
  }, props.children);
};

var ContactForm = /*#__PURE__*/function (_Component) {
  _inherits(ContactForm, _Component);

  var _super = _createSuper(ContactForm);

  function ContactForm() {
    var _this;

    _classCallCheck(this, ContactForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "userSchema", yup__WEBPACK_IMPORTED_MODULE_7__["object"]().shape({
      firstname: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().min(2, 'minimun 2 caractères').max(20, 'la saisie est trop longue').required('champ requis'),
      lastname: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().min(2, 'minimun 2 caractères').max(20, 'la saisie est trop longue').required('champ requis'),
      email: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().email('mauvais email').required('champ requis'),
      topic: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().min(2, 'le sujet doit comporter au moins 2 caractères').max(50, 'la saisie est trop longue').required('champ requis'),
      body: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().min(10, 'le texte doit être intelligible').max(500, 'trop long').required('champ requis')
    }));

    _defineProperty(_assertThisInitialized(_this), "submit", function (values, actions) {
      console.log(actions);
      actions.setSubmitting(false);
    });

    return _this;
  }

  _createClass(ContactForm, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__["Formik"], {
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
      }, function (_ref3) {
        var handleSubmit = _ref3.handleSubmit,
            isSubmitting = _ref3.isSubmitting;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("form", {
          onSubmit: handleSubmit,
          className: "form"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__["Field"], {
          name: "firstname",
          component: CustomInput
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__["ErrorMessage"], {
          name: "firstname",
          component: CustomError
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__["Field"], {
          name: "lastname",
          component: CustomInput
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__["ErrorMessage"], {
          name: "lastname",
          component: CustomError
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__["Field"], {
          name: "email",
          component: CustomInput
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__["ErrorMessage"], {
          name: "email",
          component: CustomError
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__["Field"], {
          name: "topic",
          component: CustomInput
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__["ErrorMessage"], {
          name: "topic",
          component: CustomError
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__["Field"], {
          name: "body",
          component: CustomTextarea
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__["ErrorMessage"], {
          name: "body",
          component: CustomError
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
          className: "form__button",
          type: "submit",
          disabled: isSubmitting
        }, "Envoyer"));
      });
    }
  }]);

  return ContactForm;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

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
/* harmony import */ var _Main_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Main.module.scss */ "./assets/components/Main/Main.module.scss");
/* harmony import */ var _Main_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Main_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
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
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
        exact: true,
        path: "/haikus/all"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
        exact: true,
        path: "/contact",
        render: function render() {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
            className: "main"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Form_ContactForm__WEBPACK_IMPORTED_MODULE_6__["default"], null));
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Redirect"], {
        from: "/",
        to: "/haikus/homepage"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hc3NldHMvaW1hZ2VzL2Zpc2hlcm1hbi0yNzM5MTE1XzEyODAuanBnIiwid2VicGFjazovLy8uL2Fzc2V0cy9iYXNlLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Gb3JtL0NvbnRhY3RGb3JtLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0Zvcm0vQ29udGFjdEZvcm0ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0xhbmRzY2FwZS9MYW5kc2NhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvTGFuZHNjYXBlL0xhbmRzY2FwZS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9NYWluL01haW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvTWFpbi9NYWluLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL05vdEZvdW5kL05vdEZvdW5kLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb25maWcvYXBpUGdzcWwuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ZlYXR1cmVzL2hhaWt1cy9jb21wb25lbnRzL0hhaWt1LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9mZWF0dXJlcy9oYWlrdXMvY29tcG9uZW50cy9IYWlrdUxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ZlYXR1cmVzL2hhaWt1cy9jb21wb25lbnRzL0hhaWt1TGlzdC5tb2R1bGUuc2NzcyJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwiaGFpa3VzIiwiaG9tZXBhZ2UiLCJsb2FkaW5nIiwibG9hZGluZ0hhaWt1cyIsInNldFN0YXRlIiwibG9hZGluZ0hvbWVwYWdlIiwiYXBpUGdzcWwiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIkNvbXBvbmVudCIsIlJlYWN0RG9tIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIkZvb3RlciIsIkN1c3RvbUlucHV0IiwiZmllbGQiLCJmb3JtIiwibmFtZSIsIkN1c3RvbVRleHRhcmVhIiwibGFiZWwiLCJDdXN0b21FcnJvciIsImNoaWxkcmVuIiwiQ29udGFjdEZvcm0iLCJZdXAiLCJzaGFwZSIsImZpcnN0bmFtZSIsIm1pbiIsIm1heCIsInJlcXVpcmVkIiwibGFzdG5hbWUiLCJlbWFpbCIsInRvcGljIiwiYm9keSIsInZhbHVlcyIsImFjdGlvbnMiLCJzZXRTdWJtaXR0aW5nIiwiaXRlbXMiLCJzdWJtaXQiLCJ1c2VyU2NoZW1hIiwiaGFuZGxlU3VibWl0IiwiaXNTdWJtaXR0aW5nIiwiQnV0dG9uIiwib25DbGljayIsImlzVG9nZ2xlT24iLCJOYXZCYXIiLCJIZWFkZXIiLCJpc1Bob25lVmlld3BvcnQiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwidXBkYXRlUHJlZGljYXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0aXRsZSIsImRpc3BsYXlNZW51IiwiTGFuZHNjYXBlIiwicHJlc2VudGF0aW9uIiwiTWFpbiIsIk5vdEZvdW5kIiwidGV4dGRlY29yYXRpb24iLCJwcm9jZXNzIiwiYXhpb3MiLCJiYXNlVVJMIiwiaGVhZGVycyIsIkhhaWt1IiwiaGFpa3UiLCJj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LHVFQUFmLEU7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS08sSUFBTStELEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQWU7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7QUFHaEMsc0JBQ0c7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDSSx1RUFBTUEsS0FBSyxDQUFDWixLQUFaLENBREosZUFFSSxzRUFBS1ksS0FBSyxDQUFDQyxPQUFYLENBRkosZUFHSSxpRkFISixDQURIO0FBUUgsQ0FYTSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMUDtBQUNBO0FBQ0E7O0lBRXFCQyxTOzs7OztBQUNqQixxQkFBWTFFLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw2QkFDVEEsS0FEUztBQUVsQjs7Ozs2QkFFUTtBQUFBLFVBQ0dFLE1BREgsR0FDYyxLQUFLRixLQURuQixDQUNHRSxNQURIO0FBSUwsMEJBQ087QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0k7QUFBSSxpQkFBUyxFQUFDO0FBQWQsa0NBREosZUFJSTtBQUFJLGlCQUFTLEVBQUM7QUFBZCxRQUpKLEVBS01BLE1BQU0sSUFBSUEsTUFBTSxDQUFDeUUsR0FBUCxDQUFXLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLDRCQUNuQiwyREFBQyw0Q0FBRDtBQUFPLGFBQUcsRUFBR0QsQ0FBQyxDQUFDaEIsS0FBRixHQUFVaUIsQ0FBdkI7QUFBMkIsZUFBSyxFQUFHRDtBQUFuQyxVQURtQjtBQUFBLE9BQVgsQ0FMaEIsQ0FEUDtBQVlIOzs7O0VBckJrQzVELCtDOzs7Ozs7Ozs7Ozs7O0FDSnZDLHVDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgbGF6eSwgU3VzcGVuc2UgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3REb20gZnJvbSAncmVhY3QtZG9tJztcblxuaW1wb3J0IEhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlcic7XG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlcic7XG5pbXBvcnQgTWFpbiBmcm9tICcuL2NvbXBvbmVudHMvTWFpbi9NYWluJztcblxuaW1wb3J0ICcuL2Jhc2UubW9kdWxlLnNjc3MnO1xuXG5pbXBvcnQge0Jyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBTd2l0Y2h9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgYXBpUGdzcWwgZnJvbSBcIi4vY29uZmlnL2FwaVBnc3FsXCI7XG5cblxuXG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaGFpa3VzOiBbXSxcbiAgICAgICAgICAgIGhvbWVwYWdlOiB7fSxcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMubG9hZGluZ0hhaWt1cygpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubG9hZGluZ0hvbWVwYWdlKCk7XG5cbiAgICB9XG5cbiAgICBsb2FkaW5nSGFpa3VzKCkge1xuXG4gICAgICAgIGFwaVBnc3FsLmdldCgnL2FwaS9ob21lcGFnZS9oYWlrdXMvbGlzdCcpXG4gICAgICAgICAgICAudGhlbiAoIHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFpa3VzOiByZXMuZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSl9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcbiAgICB9XG5cbiAgICBsb2FkaW5nSG9tZXBhZ2UoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdoZWxsbycpO1xuICAgICAgICBhcGlQZ3NxbC5nZXQoJy9hcGkvaG9tZXBhZ2UnKVxuICAgICAgICAgICAgLnRoZW4oIHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGhvbWVwYWdlOiByZXMuZGF0YVswXSxcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGFbMF0pfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGhhaWt1cywgaG9tZXBhZ2UgfSA9IHRoaXMuc3RhdGVcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PGgxPkxvYWRpbmcuLi48L2gxPn0+XG5cbiAgICAgICAgICAgICAgICAgICAgPEhlYWRlciBob21lcGFnZT17IGhvbWVwYWdlIH0vPlxuICAgICAgICAgICAgICAgICAgICA8TWFpbiBob21lcGFnZT17IGhvbWVwYWdlIH0gaGFpa3VzPXsgaGFpa3VzIH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICAgICAgPC9TdXNwZW5zZT5cblxuICAgICAgICApXG4gICAgfVxufVxuXG5cblxuUmVhY3REb20ucmVuZGVyKFxuICAgICAgICA8Um91dGVyPlxuICAgICAgICAgICAgPEFwcCAvPlxuICAgICAgICA8L1JvdXRlcj5cbiAgICAsXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuKTtcbiIsImV4cG9ydCBkZWZhdWx0IFwiL2J1aWxkL2ltYWdlcy9maXNoZXJtYW4tMjczOTExNV8xMjgwLmNkZTI2NDFkLmpwZ1wiOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCAnLi9Gb290ZXIubW9kdWxlLnNjc3MnO1xuXG5leHBvcnQgY29uc3QgRm9vdGVyID0gKCkgPT4gKFxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9fbGlua1wiPlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3dob0FtSVwiIGNsYXNzTmFtZT1cImZvb3Rlcl9fbGlua1wiPlF1aSBzdWlzLWplPC9MaW5rPlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2NvbnRhY3RcIiBjbGFzc05hbWU9XCJmb290ZXJfX2xpbmtcIj5Db250YWN0PC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX19jb3B5cmlnaHRcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5Db3B5cmlnaHQgJmNvcHk7IFbDqXJvbmlxdWUgTWFuY2hvbiAtIGF1dGV1ciBkdSBibG9nPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4pXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtGb3JtaWssIEZpZWxkLCBFcnJvck1lc3NhZ2UsIEZpZWxkQXJyYXl9IGZyb20gJ2Zvcm1payc7XG5pbXBvcnQgJy4vQ29udGFjdEZvcm0ubW9kdWxlLnNjc3MnO1xuaW1wb3J0ICogYXMgWXVwIGZyb20gJ3l1cCc7XG5cblxuY29uc3QgQ3VzdG9tSW5wdXQgPSAoeyBmaWVsZCwgZm9ybSwgLi4ucHJvcHN9KSA9PiB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IFwiZm9ybV9fXCIgKyBmaWVsZC5uYW1lIH0+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17IGZpZWxkLm5hbWUgfT57IGZpZWxkLm5hbWUgfTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgeyAuLi5maWVsZCB9IHsgLi4ucHJvcHMgfSBpZD17ZmllbGQubmFtZX0gbmFtZT17ZmllbGQubmFtZX0gLz5cblxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmNvbnN0IEN1c3RvbVRleHRhcmVhID0gKHsgZmllbGQsIGZvcm0sIC4uLnByb3BzfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybV9fYm9keVwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9eyBwcm9wcy5sYWJlbCB9Pk1lc3NhZ2U8L2xhYmVsPlxuICAgICAgICAgICAgPHRleHRhcmVhIHsgLi4uZmllbGQgfSBpZD1cImJvZHlcIiBuYW1lPVwiYm9keVwiICBtYXhMZW5ndGg9XCI1MDBcIiBwbGFjZWhvbGRlcj1cIkJvbmpvdXIuLi4uXCIvPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmNvbnN0IEN1c3RvbUVycm9yID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtX19lcnJvclwiPnsgcHJvcHMuY2hpbGRyZW4gfTwvZGl2PlxuICAgIClcbn1cblxuY2xhc3MgQ29udGFjdEZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgdXNlclNjaGVtYSA9IFl1cC5vYmplY3QoKS5zaGFwZSh7XG4gICAgICAgIGZpcnN0bmFtZTogWXVwLnN0cmluZygpLm1pbigyLCAnbWluaW11biAyIGNhcmFjdMOocmVzJykubWF4KDIwLCAnbGEgc2Fpc2llIGVzdCB0cm9wIGxvbmd1ZScpLnJlcXVpcmVkKCdjaGFtcCByZXF1aXMnKSxcbiAgICAgICAgbGFzdG5hbWU6IFl1cC5zdHJpbmcoKS5taW4oMiwgJ21pbmltdW4gMiBjYXJhY3TDqHJlcycpLm1heCgyMCwgJ2xhIHNhaXNpZSBlc3QgdHJvcCBsb25ndWUnKS5yZXF1aXJlZCgnY2hhbXAgcmVxdWlzJyksXG4gICAgICAgIGVtYWlsOiBZdXAuc3RyaW5nKCkuZW1haWwoJ21hdXZhaXMgZW1haWwnKS5yZXF1aXJlZCgnY2hhbXAgcmVxdWlzJyksXG4gICAgICAgIHRvcGljOiBZdXAuc3RyaW5nKCkubWluKDIsICdsZSBzdWpldCBkb2l0IGNvbXBvcnRlciBhdSBtb2lucyAyIGNhcmFjdMOocmVzJykubWF4KDUwLCAnbGEgc2Fpc2llIGVzdCB0cm9wIGxvbmd1ZScpLnJlcXVpcmVkKCdjaGFtcCByZXF1aXMnKSxcbiAgICAgICAgYm9keTogWXVwLnN0cmluZygpLm1pbigxMCwgJ2xlIHRleHRlIGRvaXQgw6p0cmUgaW50ZWxsaWdpYmxlJykubWF4KDUwMCwgJ3Ryb3AgbG9uZycpLnJlcXVpcmVkKCdjaGFtcCByZXF1aXMnKVxuICAgIH0pO1xuXG4gICAgc3VibWl0ID0gKHZhbHVlcywgYWN0aW9ucykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhhY3Rpb25zKTtcbiAgICAgICAgYWN0aW9ucy5zZXRTdWJtaXR0aW5nKGZhbHNlKTtcbiAgICB9XG5cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICAgICAgPEZvcm1pa1xuICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzPXsgeyBmaXJzdG5hbWU6ICcnLCBsYXN0bmFtZTogJycsIGVtYWlsOiAnJywgdG9waWM6ICcnLCBib2R5OiAnJywgaXRlbXM6IFtdIH0gfVxuICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17IHRoaXMuc3VibWl0IH1cbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvblNjaGVtYT17IHRoaXMudXNlclNjaGVtYSB9XG5cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHsgKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVN1Ym1pdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzU3VibWl0dGluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyBoYW5kbGVTdWJtaXQgfSBjbGFzc05hbWU9XCJmb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJmaXJzdG5hbWVcIiAgY29tcG9uZW50PXsgQ3VzdG9tSW5wdXQgfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFcnJvck1lc3NhZ2UgbmFtZT1cImZpcnN0bmFtZVwiIGNvbXBvbmVudD17IEN1c3RvbUVycm9yIH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cImxhc3RuYW1lXCIgIGNvbXBvbmVudD17IEN1c3RvbUlucHV0IH0gIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVycm9yTWVzc2FnZSBuYW1lPVwibGFzdG5hbWVcIiBjb21wb25lbnQ9eyBDdXN0b21FcnJvciB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJlbWFpbFwiICBjb21wb25lbnQ9eyBDdXN0b21JbnB1dCB9ICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFcnJvck1lc3NhZ2UgbmFtZT1cImVtYWlsXCIgY29tcG9uZW50PXsgQ3VzdG9tRXJyb3IgfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwidG9waWNcIiAgY29tcG9uZW50PXsgQ3VzdG9tSW5wdXQgfSAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RXJyb3JNZXNzYWdlIG5hbWU9XCJ0b3BpY1wiIGNvbXBvbmVudD17IEN1c3RvbUVycm9yIH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cImJvZHlcIiAgY29tcG9uZW50PXsgQ3VzdG9tVGV4dGFyZWEgfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFcnJvck1lc3NhZ2UgbmFtZT1cImJvZHlcIiBjb21wb25lbnQ9eyBDdXN0b21FcnJvciB9IC8+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZm9ybV9fYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPXsgaXNTdWJtaXR0aW5nIH0+RW52b3llcjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvRm9ybWlrPlxuXG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RGb3JtO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TmF2TGlua30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCAnLi9IZWFkZXIubW9kdWxlLnNjc3MnO1xuXG5cbmNvbnN0IEJ1dHRvbiA9ICh7IG9uQ2xpY2ssIGlzVG9nZ2xlT24gfSkgPT4gKFxuICAgIDw+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gb25DbGljaygpIH0gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cIm5hdkJhcl9fYnRuXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lXCI+PC9kaXY+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICB7IGlzVG9nZ2xlT24gJiYgPE5hdkJhciAvPiB9XG4gICAgPC8+XG5cblxuKTtcblxuY29uc3QgTmF2QmFyID0gKCkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19uYXZCYXJcIj5cbiAgICAgICAgPE5hdkxpbmsgdG89XCIvaGFpa3VzL2hvbWVwYWdlXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCIgY2xhc3NOYW1lPVwiaGVhZGVyX19uYXZCYXItLWxpbmtcIj5BY2N1ZWlsPC9OYXZMaW5rPlxuICAgICAgICA8TmF2TGluayB0bz1cIi9oYWlrdXMvYWxsXCIgY2xhc3NOYW1lPVwiaGVhZGVyX19uYXZCYXItLWxpbmtcIj5IYcOva3VzPC9OYXZMaW5rPlxuICAgICAgICA8TmF2TGluayB0bz1cIi9oYWlrdXMvcHJvc2VcIiBjbGFzc05hbWU9XCJoZWFkZXJfX25hdkJhci0tbGlua1wiPlByb3NlPC9OYXZMaW5rPlxuICAgIDwvZGl2PlxuKVxuXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBpc1RvZ2dsZU9uOiBmYWxzZSxcbiAgICAgICAgICAgIGlzUGhvbmVWaWV3cG9ydDogZmFsc2UsXG4gICAgICAgIH1cblxuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVQcmVkaWNhdGUoKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy51cGRhdGVQcmVkaWNhdGUpO1xuXG4gICAgfVxuXG4gICAgdXBkYXRlUHJlZGljYXRlID0gKCkgPT4ge1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXNQaG9uZVZpZXdwb3J0OiB3aW5kb3cuaW5uZXJXaWR0aCA8PSAzNzVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMudXBkYXRlUHJlZGljYXRlKTtcbiAgICB9XG5cbiAgICBkaXNwbGF5TWVudSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgeyBpc1RvZ2dsZU9uIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXNUb2dnbGVPbjogIWlzVG9nZ2xlT25cbiAgICAgICAgfSlcblxuICAgIH1cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGhvbWVwYWdlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGgxPntob21lcGFnZS50aXRsZX08L2gxPlxuXG4gICAgICAgICAgICAgICAgICAgIHsgdGhpcy5zdGF0ZS5pc1Bob25lVmlld3BvcnQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eyB0aGlzLmRpc3BsYXlNZW51IH0gaXNUb2dnbGVPbj17IHRoaXMuc3RhdGUuaXNUb2dnbGVPbiB9IC8+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2QmFyICAvPlxuICAgICAgICAgICAgICAgICAgICApfVxuXG5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19zZWFyY2hCYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInNlYXJjaFwiIHBsYWNlaG9sZGVyPVwicmVjaGVyY2hlciB1biBoYWlrdXNcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic2VhcmNoQmFyX19idG5cIj5zZWFyY2g8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICApXG4gICAgfVxuXG59XG5cblxuXG5cblxuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGFuZHNjYXBlSW1hZ2UgZnJvbSAnLi4vLi4vYXNzZXRzL2ltYWdlcy9maXNoZXJtYW4tMjczOTExNV8xMjgwLmpwZyc7XG5pbXBvcnQgJy4vTGFuZHNjYXBlLm1vZHVsZS5zY3NzJztcblxuY29uc3QgTGFuZHNjYXBlID0gKHsgaG9tZXBhZ2UgfSkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYW5kc2NhcGVcIj5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImxhbmRzY2FwZV9fdGl0bGVcIj5Nb24gYmxvZyBwb3VyIHBhcnRhZ2VyIG1hIHBhc3Npb24gZGVzIGhhw69rdXM8L2gyPlxuICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJsYW5kc2NhcGVfX3NlcGFyYXRvclwiLz5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGFuZHNjYXBlX19wcmVzZW50YXRpb25cIj57IGhvbWVwYWdlLnByZXNlbnRhdGlvbiB9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGFuZHNjYXBlO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgbGF6eSwgU3VzcGVuc2UgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBMYW5kc2NhcGUgZnJvbSBcIi4uL0xhbmRzY2FwZS9MYW5kc2NhcGVcIjtcbmltcG9ydCBIYWlrdUxpc3QgZnJvbSBcIi4uLy4uL2ZlYXR1cmVzL2hhaWt1cy9jb21wb25lbnRzL0hhaWt1TGlzdFwiO1xuaW1wb3J0IE5vdEZvdW5kIGZyb20gXCIuLi9Ob3RGb3VuZC9Ob3RGb3VuZFwiO1xuaW1wb3J0IENvbnRhY3RGb3JtIGZyb20gXCIuLi9Gb3JtL0NvbnRhY3RGb3JtXCI7XG5cbmltcG9ydCAnLi9NYWluLm1vZHVsZS5zY3NzJztcbmltcG9ydCB7UmVkaXJlY3QsIFJvdXRlLCBTd2l0Y2h9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmNsYXNzIE1haW4gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgIHN1cGVyKHByb3BzKVxuICAgfVxuXG4gICByZW5kZXIoKXtcbiAgICAgICBjb25zdCB7IGhvbWVwYWdlICwgaGFpa3VzIH0gPSB0aGlzLnByb3BzXG4gICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9oYWlrdXMvaG9tZXBhZ2VcIiByZW5kZXI9eyAoKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFuZHNjYXBlIGhvbWVwYWdlPXsgaG9tZXBhZ2UgfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIYWlrdUxpc3QgaGFpa3VzPXsgaGFpa3VzIH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfSAvPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9oYWlrdXMvYWxsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvY29udGFjdFwiICByZW5kZXI9eyAoKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udGFjdEZvcm0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfS8+XG4gICAgICAgICAgICAgICAgICAgIDxSZWRpcmVjdCBmcm9tPVwiL1wiIHRvPVwiL2hhaWt1cy9ob21lcGFnZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBjb21wb25lbnQ9e05vdEZvdW5kfSAvPlxuICAgICAgICAgICAgICAgIDwvU3dpdGNoPlxuXG5cblxuICAgICAgIClcbiAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7TmF2TGlua30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuY29uc3QgTm90Rm91bmQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJub3RfZm91bmRcIj5cbiAgICAgICAgICAgIDxoMT5QYWdlIE5vdCBGb3VuZDwvaDE+XG4gICAgICAgICAgICA8TmF2TGluayBzdHlsZT17e3RleHRkZWNvcmF0aW9uOiAnbm9uZSd9fSB0bz1cIi9cIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJub3RfZm91bmRfX2J1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICBIb21lcGFnZVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5vdEZvdW5kO1xuIiwiaW1wb3J0ICogYXMgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmxldCBhcGlQZ3NxbCA9IHt9O1xuY29uc29sZS5sb2coJ2Vudmlyb25lbWVudCAnLCBwcm9jZXNzLmVudik7XG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jyl7XG4gICAgYXBpUGdzcWwgPSBheGlvcy5jcmVhdGUoe1xuICAgICAgICBiYXNlVVJMOiAnaHR0cDovLzEyNy4wLjAuMTo4MDAwJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfVxuXG4gICAgfSlcblxufSBlbHNlIHtcbiAgICBhcGlQZ3NxbCA9IGF4aW9zLmNyZWF0ZSh7XG4gICAgICAgIGJhc2VVUkw6ICdodHRwczovL2o0bWR4aXNicnEtazZobHozM2xtN2oyby5ldS5zNXkuaW8nLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH1cbiAgICB9KVxufVxuZXhwb3J0IGRlZmF1bHQgYXBpUGdzcWw7XG5cblxuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5cblxuXG5leHBvcnQgY29uc3QgSGFpa3UgPSAoeyBoYWlrdSB9KSA9PiB7XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWlrdVwiPlxuICAgICAgICAgICA8aDY+eyBoYWlrdS50aXRsZSB9PC9oNj5cbiAgICAgICAgICAgPHA+eyBoYWlrdS5jb250ZW50IH08L3A+XG4gICAgICAgICAgIDxkaXY+Jmxvd2FzdDs8L2Rpdj5cbiAgICAgICA8L2Rpdj5cbiAgICApO1xuXG59XG5cblxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEhhaWt1IH0gZnJvbSBcIi4vSGFpa3VcIjtcbmltcG9ydCAnLi9IYWlrdUxpc3QubW9kdWxlLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIYWlrdUxpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBoYWlrdXMgfSA9IHRoaXMucHJvcHM7XG5cblxuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhaWt1c0xpc3RcIj5cbiAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiaGFpa3VzTGlzdF9fdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgTWVzIGRlcm5pZXJzIGhhw69rdXNcbiAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJoYWlrdXNMaXN0X19zZXBhcmF0b3JcIi8+XG4gICAgICAgICAgICAgICAgICAgeyBoYWlrdXMgJiYgaGFpa3VzLm1hcCgoaCwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICA8SGFpa3Uga2V5PXsgaC50aXRsZSArIGkgfSBoYWlrdT17IGggfSAvPlxuICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuXG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=