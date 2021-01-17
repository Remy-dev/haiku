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

    _this.state = {
      message: '',
      code: 0
    };
    return _this;
  }

  _createClass(ContactForm, [{
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
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "compendium"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hc3NldHMvaW1hZ2VzL2Zpc2hlcm1hbi0yNzM5MTE1XzEyODAuanBnIiwid2VicGFjazovLy8uL2Fzc2V0cy9iYXNlLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Gb3JtL0NvbnRhY3RGb3JtLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0Zvcm0vQ29udGFjdEZvcm0ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0xhbmRzY2FwZS9MYW5kc2NhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvTGFuZHNjYXBlL0xhbmRzY2FwZS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9NYWluL01haW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvTWFpbi9NYWluLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL05vdEZvdW5kL05vdEZvdW5kLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb25maWcvYXBpUGdzcWwuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ZlYXR1cmVzL2hhaWt1cy9jb21wb25lbnRzL0hhaWt1LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9mZWF0dXJlcy9oYWlrdXMvY29tcG9uZW50cy9IYWlrdUxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ZlYXR1cmVzL2hhaWt1cy9jb21wb25lbnRzL0hhaWt1TGlzdC5tb2R1bGUuc2NzcyJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwiaGFpa3VzIiwiaG9tZXBhZ2UiLCJsb2FkaW5nIiwibG9hZGluZ0hhaWt1cyIsInNldFN0YXRlIiwibG9hZGluZ0hvbWVwYWdlIiwiYXBpUGdzcWwiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIkNvbXBvbmVudCIsIlJlYWN0RG9tIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIkZvb3RlciIsIkN1c3RvbUlucHV0IiwiZmllbGQiLCJmb3JtIiwibmFtZSIsIkN1c3RvbUVycm9yIiwiQ3VzdG9tVGV4dGFyZWEiLCJsYWJlbCIsImNoaWxkcmVuIiwiTWVzc2FnZVN1Ym1pdCIsIm1lc3NhZ2UiLCJsZW5ndGgiLCJDb250YWN0Rm9ybSIsIll1cCIsInNoYXBlIiwiZmlyc3RuYW1lIiwibWluIiwibWF4IiwicmVxdWlyZWQiLCJsYXN0bmFtZSIsImVtYWlsIiwidG9waWMiLCJib2R5IiwidmFsdWVzIiwiYWN0aW9ucyIsInBvc3QiLCJoZWFkZXJzIiwic3RhdHVzIiwic2V0U3VibWl0dGluZyIsImNvZGUiLCJpdGVtcyIsInN1Ym1pdCIsInVzZXJTY2hlbWEiLCJoYW5kbGVTdWJtaXQiLCJpc1N1Ym1pdHRpbmciLCJCdXR0b24iLCJvbkNsaWNrIiwiaXNUb2dnbGVPbiIsIk5hdkJhciIsIkhlYWRlciIsImlzUGhvbmVWaWV3cG9ydCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJ1cGRhdGVQcmVkaWNhdGUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInRpdGxlIiwiZGlzcGxheU1lbnUiLCJMYW5kc2NhcGUiLCJwcmVzZW50YXRpb24iLCJNYWluIiwiTm90Rm91bmQiLCJ0ZXh0ZGVjb3JhdGlvbiIsInByb2Nlc3MiLCJheGlvcyIsImJhc2VVUkwiLCJIYWlrdSIsImhhaWt1IiwiY29udGVudCIsIkhhaWt1TGlzdCIsIm1hcCIsImgiLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBOztJQUtNQSxHOzs7OztBQUNGLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxZQUFNLEVBQUUsRUFEQztBQUVUQyxjQUFRLEVBQUUsRUFGRDtBQUdUQyxhQUFPLEVBQUU7QUFIQSxLQUFiO0FBRmU7QUFPbEI7Ozs7d0NBQ21CO0FBQ2hCLFdBQUtDLGFBQUw7QUFDQSxXQUFLQyxRQUFMLENBQWM7QUFDVkYsZUFBTyxFQUFFO0FBREMsT0FBZDtBQUlBLFdBQUtHLGVBQUw7QUFFSDs7O29DQUVlO0FBQUE7O0FBRVpDLDhEQUFRLENBQUNDLEdBQVQsQ0FBYSwyQkFBYixFQUNLQyxJQURMLENBQ1ksVUFBQUMsR0FBRyxFQUFJO0FBQ1AsY0FBSSxDQUFDTCxRQUFMLENBQWM7QUFDVkosZ0JBQU0sRUFBRVMsR0FBRyxDQUFDQyxJQURGO0FBRVZSLGlCQUFPLEVBQUU7QUFGQyxTQUFkO0FBR0csT0FMZixFQU1RLFVBQUFTLEtBQUs7QUFBQSxlQUFJQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWixDQUFKO0FBQUEsT0FOYjtBQU9IOzs7c0NBRWlCO0FBQUE7O0FBQ2RDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7QUFDQVAsOERBQVEsQ0FBQ0MsR0FBVCxDQUFhLGVBQWIsRUFDS0MsSUFETCxDQUNXLFVBQUFDLEdBQUcsRUFBSTtBQUNWLGNBQUksQ0FBQ0wsUUFBTCxDQUFjO0FBQ1ZILGtCQUFRLEVBQUVRLEdBQUcsQ0FBQ0MsSUFBSixDQUFTLENBQVQsQ0FEQTtBQUVWUixp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QXZCO0FBQTJCLGVBQUssRUFBR0Q7QUFBbkMsVUFEbUI7QUFBQSxPQUFYLENBTGhCLENBRFA7QUFZSDs7OztFQXJCa0NsRSwrQzs7Ozs7Ozs7Ozs7OztBQ0p2Qyx1QyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFN1c3BlbnNlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RG9tIGZyb20gJ3JlYWN0LWRvbSc7XG5cbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXInO1xuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSAnLi9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXInO1xuaW1wb3J0IE1haW4gZnJvbSAnLi9jb21wb25lbnRzL01haW4vTWFpbic7XG5cbmltcG9ydCAnLi9iYXNlLm1vZHVsZS5zY3NzJztcblxuaW1wb3J0IHtCcm93c2VyUm91dGVyIGFzIFJvdXRlcn0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBhcGlQZ3NxbCBmcm9tIFwiLi9jb25maWcvYXBpUGdzcWxcIjtcblxuXG5cblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBoYWlrdXM6IFtdLFxuICAgICAgICAgICAgaG9tZXBhZ2U6IHt9LFxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nSGFpa3VzKCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5sb2FkaW5nSG9tZXBhZ2UoKTtcblxuICAgIH1cblxuICAgIGxvYWRpbmdIYWlrdXMoKSB7XG5cbiAgICAgICAgYXBpUGdzcWwuZ2V0KCcvYXBpL2hvbWVwYWdlL2hhaWt1cy9saXN0JylcbiAgICAgICAgICAgIC50aGVuICggcmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYWlrdXM6IHJlcy5kYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9KX0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxuICAgIH1cblxuICAgIGxvYWRpbmdIb21lcGFnZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2hlbGxvJyk7XG4gICAgICAgIGFwaVBnc3FsLmdldCgnL2FwaS9ob21lcGFnZScpXG4gICAgICAgICAgICAudGhlbiggcmVzID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgaG9tZXBhZ2U6IHJlcy5kYXRhWzBdLFxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiB0cnVlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YVswXSl9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgaGFpa3VzLCBob21lcGFnZSB9ID0gdGhpcy5zdGF0ZVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8aDE+TG9hZGluZy4uLjwvaDE+fT5cbiAgICAgICAgICAgICAgICAgICAgPEhlYWRlciBob21lcGFnZT17IGhvbWVwYWdlIH0vPlxuICAgICAgICAgICAgICAgICAgICA8TWFpbiBob21lcGFnZT17IGhvbWVwYWdlIH0gaGFpa3VzPXsgaGFpa3VzIH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICAgICAgPC9TdXNwZW5zZT5cblxuICAgICAgICApXG4gICAgfVxufVxuXG5cblxuUmVhY3REb20ucmVuZGVyKFxuICAgICAgICA8Um91dGVyPlxuICAgICAgICAgICAgPEFwcCAvPlxuICAgICAgICA8L1JvdXRlcj5cbiAgICAsXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuKTtcbiIsImV4cG9ydCBkZWZhdWx0IFwiL2J1aWxkL2ltYWdlcy9maXNoZXJtYW4tMjczOTExNV8xMjgwLmNkZTI2NDFkLmpwZ1wiOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCAnLi9Gb290ZXIubW9kdWxlLnNjc3MnO1xuXG5leHBvcnQgY29uc3QgRm9vdGVyID0gKCkgPT4gKFxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9fbGlua1wiPlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3dob0FtSVwiIGNsYXNzTmFtZT1cImZvb3Rlcl9fbGlua1wiPlF1aSBzdWlzLWplPC9MaW5rPlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2NvbnRhY3RcIiBjbGFzc05hbWU9XCJmb290ZXJfX2xpbmtcIj5Db250YWN0PC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX19jb3B5cmlnaHRcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5Db3B5cmlnaHQgJmNvcHk7IFbDqXJvbmlxdWUgTWFuY2hvbiAtIGF1dGV1ciBkdSBibG9nPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4pXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtGb3JtaWssIEZpZWxkLCBFcnJvck1lc3NhZ2V9IGZyb20gJ2Zvcm1payc7XG5pbXBvcnQgJy4vQ29udGFjdEZvcm0ubW9kdWxlLnNjc3MnO1xuaW1wb3J0ICogYXMgWXVwIGZyb20gJ3l1cCc7XG5pbXBvcnQgYXBpUGdzcWwgZnJvbSBcIi4uLy4uL2NvbmZpZy9hcGlQZ3NxbFwiO1xuXG5cbmNvbnN0IEN1c3RvbUlucHV0ID0gKHsgZmllbGQsIGZvcm0sIC4uLnByb3BzfSkgPT4ge1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBcImZvcm1fX1wiICsgZmllbGQubmFtZSB9PlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9eyBmaWVsZC5uYW1lIH0+eyBmaWVsZC5uYW1lIH08L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHsgLi4uZmllbGQgfSB7IC4uLnByb3BzIH0gaWQ9e2ZpZWxkLm5hbWV9IG5hbWU9e2ZpZWxkLm5hbWV9IC8+XG4gICAgICAgICAgICA8RXJyb3JNZXNzYWdlIG5hbWU9e2ZpZWxkLm5hbWV9IGNvbXBvbmVudD17IEN1c3RvbUVycm9yIH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5jb25zdCBDdXN0b21UZXh0YXJlYSA9ICh7IGZpZWxkLCBmb3JtLCAuLi5wcm9wc30pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IFwiZm9ybV9fXCIgKyBmaWVsZC5uYW1lIH0+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17IHByb3BzLmxhYmVsIH0+TWVzc2FnZSA8c3BhbiBjbGFzc05hbWU9e1wiZm9ybV9fXCIgKyBmaWVsZC5uYW1lICsgXCItLWxhYmVsTGVuZ3RoXCJ9PjUwMCBjYXJhY3TDqHJlcyBtYXhpbXVtLi4uPC9zcGFuPjwvbGFiZWw+XG4gICAgICAgICAgICA8dGV4dGFyZWEgeyAuLi5maWVsZCB9IGlkPXtmaWVsZC5uYW1lfSBuYW1lPXtmaWVsZC5uYW1lfSAgbWF4TGVuZ3RoPVwiNTAwXCIgcGxhY2Vob2xkZXI9XCJCb25qb3VyLi4uLlwiLz5cbiAgICAgICAgICAgIDxFcnJvck1lc3NhZ2UgbmFtZT17ZmllbGQubmFtZX0gY29tcG9uZW50PXsgQ3VzdG9tRXJyb3IgfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmNvbnN0IEN1c3RvbUVycm9yID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtX19lcnJvclwiPnsgcHJvcHMuY2hpbGRyZW4gfTwvZGl2PlxuICAgIClcbn1cblxuY29uc3QgTWVzc2FnZVN1Ym1pdCA9ICh7IHN0YXRlIH0pID0+IHtcblxuICAgICAgICBpZiAoc3RhdGUubWVzc2FnZS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlXCI+eyBzdGF0ZS5tZXNzYWdlIH08L2Rpdj5cbiAgICAgICAgfSBlbHNlIGlmIChzdGF0ZS5tZXNzYWdlLmxlbmd0aCA+IDEgKXtcbiAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImVycm9yXCI+eyBzdGF0ZS5lcnJvciB9PC9kaXY+XG4gICAgICAgIH1cbn1cblxuY2xhc3MgQ29udGFjdEZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbWVzc2FnZTogJycsXG4gICAgICAgICAgICBjb2RlOiAwLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXNlclNjaGVtYSA9IFl1cC5vYmplY3QoKS5zaGFwZSh7XG4gICAgICAgIGZpcnN0bmFtZTogWXVwLnN0cmluZygpLm1pbigyLCAnbWluaW11biAyIGNhcmFjdMOocmVzJykubWF4KDIwLCAnbGEgc2Fpc2llIGVzdCB0cm9wIGxvbmd1ZScpLnJlcXVpcmVkKCdjaGFtcCByZXF1aXMnKSxcbiAgICAgICAgbGFzdG5hbWU6IFl1cC5zdHJpbmcoKS5taW4oMiwgJ21pbmltdW4gMiBjYXJhY3TDqHJlcycpLm1heCgyMCwgJ2xhIHNhaXNpZSBlc3QgdHJvcCBsb25ndWUnKS5yZXF1aXJlZCgnY2hhbXAgcmVxdWlzJyksXG4gICAgICAgIGVtYWlsOiBZdXAuc3RyaW5nKCkuZW1haWwoJ21hdXZhaXMgZW1haWwnKS5yZXF1aXJlZCgnY2hhbXAgcmVxdWlzJyksXG4gICAgICAgIHRvcGljOiBZdXAuc3RyaW5nKCkubWluKDIsICdsZSBzdWpldCBkb2l0IGNvbXBvcnRlciBhdSBtb2lucyAyIGNhcmFjdMOocmVzJykubWF4KDUwLCAnbGEgc2Fpc2llIGVzdCB0cm9wIGxvbmd1ZScpLnJlcXVpcmVkKCdjaGFtcCByZXF1aXMnKSxcbiAgICAgICAgYm9keTogWXVwLnN0cmluZygpLm1pbigxMCwgJ2xlIHRleHRlIGRvaXQgw6p0cmUgaW50ZWxsaWdpYmxlJykubWF4KDUwMCwgJ3Ryb3AgbG9uZycpLnJlcXVpcmVkKCdjaGFtcCByZXF1aXMnKVxuICAgIH0pO1xuXG4gICAgc3VibWl0ID0gKHZhbHVlcywgYWN0aW9ucykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnY291Y291Jyk7XG4gICAgICAgIGFwaVBnc3FsLnBvc3QoJy9hcGkvY29udGFjdC9mb3JtJywgdmFsdWVzLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9IClcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCAyMDEgPT09IHJlcy5zdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0xlIG1lc3NhZ2UgYSBiaWVuIMOpdMOpIGVucmVnaXN0csOpLicsXG4gICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiAnJ1xuICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgIGFjdGlvbnMuc2V0U3VibWl0dGluZyhmYWxzZSk7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6ICdVbmUgZXJyZXVyIGVzdCBzdXJ2ZW51ZSBsb3JzIGRlIGxcXCdlbnZvaWUgZHUgZm9ybXVsYWlyZSwgbGUgbWVzc2FnZSBuXFwnYSBwdSDDqnRyZSBlbnJlZ2lzdHLDqS4nLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGFjdGlvbnMuc2V0U3VibWl0dGluZyhmYWxzZSk7XG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgIGNvbnNvbGUubG9nKGFjdGlvbnMpO1xuICAgIH1cblxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+Rm9ybXVsYWlyZSBkZSBjb250YWN0PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1pa1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17IHsgZmlyc3RuYW1lOiAnJywgbGFzdG5hbWU6ICcnLCBlbWFpbDogJycsIHRvcGljOiAnJywgYm9keTogJycsIGl0ZW1zOiBbXSB9IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXsgdGhpcy5zdWJtaXQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvblNjaGVtYT17IHRoaXMudXNlclNjaGVtYSB9XG5cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgeyAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVN1Ym1pdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1N1Ym1pdHRpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0aGlzLnN0YXRlLm1lc3NhZ2UgfHwgdGhpcy5zdGF0ZS5lcnJvciA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZVN1Ym1pdCBzdGF0ZT17IHRoaXMuc3RhdGUgfSAvPiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17IGhhbmRsZVN1Ym1pdCB9IGNsYXNzTmFtZT1cImZvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiZmlyc3RuYW1lXCIgIGNvbXBvbmVudD17IEN1c3RvbUlucHV0IH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwibGFzdG5hbWVcIiAgY29tcG9uZW50PXsgQ3VzdG9tSW5wdXQgfSAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiZW1haWxcIiAgY29tcG9uZW50PXsgQ3VzdG9tSW5wdXQgfSAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwidG9waWNcIiAgY29tcG9uZW50PXsgQ3VzdG9tSW5wdXQgfSAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiYm9keVwiICBjb21wb25lbnQ9eyBDdXN0b21UZXh0YXJlYSB9IC8+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmb3JtX19idG4tLXN1Ym1pdFwiIHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD17IGlzU3VibWl0dGluZyB9PlNvdW1ldHRyZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybWlrPlxuICAgICAgICAgICAgICAgIDwvPlxuXG5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdEZvcm07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtOYXZMaW5rfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0ICcuL0hlYWRlci5tb2R1bGUuc2Nzcyc7XG5cblxuY29uc3QgQnV0dG9uID0gKHsgb25DbGljaywgaXNUb2dnbGVPbiB9KSA9PiAoXG4gICAgPD5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKCkgfSB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwibmF2QmFyX19idG5cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVcIj48L2Rpdj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIHsgaXNUb2dnbGVPbiAmJiA8TmF2QmFyIC8+IH1cbiAgICA8Lz5cblxuXG4pO1xuXG5jb25zdCBOYXZCYXIgPSAoKSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX25hdkJhclwiPlxuICAgICAgICA8TmF2TGluayB0bz1cIi9oYWlrdXMvaG9tZXBhZ2VcIiBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIiBjbGFzc05hbWU9XCJoZWFkZXJfX25hdkJhci0tbGlua1wiPkFjY3VlaWw8L05hdkxpbms+XG4gICAgICAgIDxOYXZMaW5rIHRvPVwiL2hhaWt1cy9hbGxcIiBjbGFzc05hbWU9XCJoZWFkZXJfX25hdkJhci0tbGlua1wiPkhhw69rdXM8L05hdkxpbms+XG4gICAgICAgIDxOYXZMaW5rIHRvPVwiL2hhaWt1cy9wcm9zZVwiIGNsYXNzTmFtZT1cImhlYWRlcl9fbmF2QmFyLS1saW5rXCI+UHJvc2U8L05hdkxpbms+XG4gICAgPC9kaXY+XG4pXG5cbmNsYXNzIEhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGlzVG9nZ2xlT246IGZhbHNlLFxuICAgICAgICAgICAgaXNQaG9uZVZpZXdwb3J0OiBmYWxzZSxcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVByZWRpY2F0ZSgpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLnVwZGF0ZVByZWRpY2F0ZSk7XG5cbiAgICB9XG5cbiAgICB1cGRhdGVQcmVkaWNhdGUgPSAoKSA9PiB7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpc1Bob25lVmlld3BvcnQ6IHdpbmRvdy5pbm5lcldpZHRoIDw9IDM3NVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy51cGRhdGVQcmVkaWNhdGUpO1xuICAgIH1cblxuICAgIGRpc3BsYXlNZW51ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB7IGlzVG9nZ2xlT24gfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpc1RvZ2dsZU9uOiAhaXNUb2dnbGVPblxuICAgICAgICB9KVxuXG4gICAgfVxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgaG9tZXBhZ2UgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8aDE+e2hvbWVwYWdlLnRpdGxlfTwvaDE+XG5cbiAgICAgICAgICAgICAgICAgICAgeyB0aGlzLnN0YXRlLmlzUGhvbmVWaWV3cG9ydCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17IHRoaXMuZGlzcGxheU1lbnUgfSBpc1RvZ2dsZU9uPXsgdGhpcy5zdGF0ZS5pc1RvZ2dsZU9uIH0gLz5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZCYXIgIC8+XG4gICAgICAgICAgICAgICAgICAgICl9XG5cblxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX3NlYXJjaEJhclwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwic2VhcmNoXCIgcGxhY2Vob2xkZXI9XCJyZWNoZXJjaGVyIHVuIGhhaWt1c1wiLz5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzZWFyY2hCYXJfX2J0blwiPnNlYXJjaDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgIClcbiAgICB9XG5cbn1cblxuXG5cblxuXG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMYW5kc2NhcGVJbWFnZSBmcm9tICcuLi8uLi9hc3NldHMvaW1hZ2VzL2Zpc2hlcm1hbi0yNzM5MTE1XzEyODAuanBnJztcbmltcG9ydCAnLi9MYW5kc2NhcGUubW9kdWxlLnNjc3MnO1xuXG5jb25zdCBMYW5kc2NhcGUgPSAoeyBob21lcGFnZSB9KSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhbmRzY2FwZVwiPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibGFuZHNjYXBlX190aXRsZVwiPk1vbiBibG9nIHBvdXIgcGFydGFnZXIgbWEgcGFzc2lvbiBkZXMgaGHDr2t1czwvaDI+XG4gICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImxhbmRzY2FwZV9fc2VwYXJhdG9yXCIvPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsYW5kc2NhcGVfX3ByZXNlbnRhdGlvblwiPnsgaG9tZXBhZ2UucHJlc2VudGF0aW9uIH08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYW5kc2NhcGU7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgTGFuZHNjYXBlIGZyb20gXCIuLi9MYW5kc2NhcGUvTGFuZHNjYXBlXCI7XG5pbXBvcnQgSGFpa3VMaXN0IGZyb20gXCIuLi8uLi9mZWF0dXJlcy9oYWlrdXMvY29tcG9uZW50cy9IYWlrdUxpc3RcIjtcbmltcG9ydCBOb3RGb3VuZCBmcm9tIFwiLi4vTm90Rm91bmQvTm90Rm91bmRcIjtcbmltcG9ydCBDb250YWN0Rm9ybSBmcm9tIFwiLi4vRm9ybS9Db250YWN0Rm9ybVwiO1xuXG5pbXBvcnQgJy4vTWFpbi5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQge1JlZGlyZWN0LCBSb3V0ZSwgU3dpdGNofSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5jbGFzcyBNYWluIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICBzdXBlcihwcm9wcylcbiAgIH1cblxuICAgcmVuZGVyKCl7XG4gICAgICAgY29uc3QgeyBob21lcGFnZSAsIGhhaWt1cyB9ID0gdGhpcy5wcm9wc1xuICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvaGFpa3VzL2hvbWVwYWdlXCIgcmVuZGVyPXsgKCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhbmRzY2FwZSBob21lcGFnZT17IGhvbWVwYWdlIH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGFpa3VMaXN0IGhhaWt1cz17IGhhaWt1cyB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvaGFpa3VzL2FsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wZW5kaXVtXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9jb250YWN0XCIgIHJlbmRlcj17ICgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250YWN0Rm9ybSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9Lz5cbiAgICAgICAgICAgICAgICAgICAgPFJlZGlyZWN0IGZyb209XCIvXCIgdG89XCIvaGFpa3VzL2hvbWVwYWdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGNvbXBvbmVudD17Tm90Rm91bmR9IC8+XG4gICAgICAgICAgICAgICAgPC9Td2l0Y2g+XG5cblxuXG4gICAgICAgKVxuICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtOYXZMaW5rfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5jb25zdCBOb3RGb3VuZCA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdF9mb3VuZFwiPlxuICAgICAgICAgICAgPGgxPlBhZ2UgTm90IEZvdW5kPC9oMT5cbiAgICAgICAgICAgIDxOYXZMaW5rIHN0eWxlPXt7dGV4dGRlY29yYXRpb246ICdub25lJ319IHRvPVwiL1wiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cIm5vdF9mb3VuZF9fYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgIEhvbWVwYWdlXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTm90Rm91bmQ7XG4iLCJpbXBvcnQgKiBhcyBheGlvcyBmcm9tICdheGlvcydcblxubGV0IGFwaVBnc3FsID0ge307XG5jb25zb2xlLmxvZygnZW52aXJvbmVtZW50ICcsIHByb2Nlc3MuZW52KTtcbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKXtcbiAgICBhcGlQZ3NxbCA9IGF4aW9zLmNyZWF0ZSh7XG4gICAgICAgIGJhc2VVUkw6ICdodHRwOi8vMTI3LjAuMC4xOjgwMDAnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9XG5cbiAgICB9KVxuXG59IGVsc2Uge1xuICAgIGFwaVBnc3FsID0gYXhpb3MuY3JlYXRlKHtcbiAgICAgICAgYmFzZVVSTDogJ2h0dHBzOi8vajRtZHhpc2JycS1rNmhsejMzbG03ajJvLmV1LnM1eS5pbycsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfVxuICAgIH0pXG59XG5leHBvcnQgZGVmYXVsdCBhcGlQZ3NxbDtcblxuXG5cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cblxuXG5cbmV4cG9ydCBjb25zdCBIYWlrdSA9ICh7IGhhaWt1IH0pID0+IHtcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhaWt1XCI+XG4gICAgICAgICAgIDxoNj57IGhhaWt1LnRpdGxlIH08L2g2PlxuICAgICAgICAgICA8cD57IGhhaWt1LmNvbnRlbnQgfTwvcD5cbiAgICAgICAgICAgPGRpdj4mbG93YXN0OzwvZGl2PlxuICAgICAgIDwvZGl2PlxuICAgICk7XG5cbn1cblxuXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSGFpa3UgfSBmcm9tIFwiLi9IYWlrdVwiO1xuaW1wb3J0ICcuL0hhaWt1TGlzdC5tb2R1bGUuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhhaWt1TGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGhhaWt1cyB9ID0gdGhpcy5wcm9wcztcblxuXG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFpa3VzTGlzdFwiPlxuICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJoYWlrdXNMaXN0X190aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICBNZXMgZGVybmllcnMgaGHDr2t1c1xuICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImhhaWt1c0xpc3RfX3NlcGFyYXRvclwiLz5cbiAgICAgICAgICAgICAgICAgICB7IGhhaWt1cyAmJiBoYWlrdXMubWFwKChoLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgIDxIYWlrdSBrZXk9eyBoLnRpdGxlICsgaSB9IGhhaWt1PXsgaCB9IC8+XG4gICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICApXG4gICAgfVxufVxuXG5cblxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==