(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

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
/* harmony import */ var _Haiku_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Haiku.module.scss */ "./assets/features/haikus/components/Haiku.module.scss");
/* harmony import */ var _Haiku_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Haiku_module_scss__WEBPACK_IMPORTED_MODULE_1__);


var Haiku = function Haiku(_ref) {
  var haiku = _ref.haiku;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "haiku"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "haiku__title"
  }, haiku.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "separator"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "haiku__content"
  }, haiku.content));
};

/***/ }),

/***/ "./assets/features/haikus/components/Haiku.module.scss":
/*!*************************************************************!*\
  !*** ./assets/features/haikus/components/Haiku.module.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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
      console.log('render haiku list ', haikus);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h4", {
        className: "haikus__title"
      }, "mes derniers haikus"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("ul", {
        className: "haikus__list"
      }, haikus && haikus.map(function (haiku, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Haiku__WEBPACK_IMPORTED_MODULE_4__["Haiku"], {
          key: haiku.title + index,
          haiku: haiku
        });
      })));
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

/***/ }),

/***/ "./assets/features/haikus/index.js":
/*!*****************************************!*\
  !*** ./assets/features/haikus/index.js ***!
  \*****************************************/
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
/* harmony import */ var _components_HaikuList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/HaikuList */ "./assets/features/haikus/components/HaikuList.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
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





var Haikus = /*#__PURE__*/function (_Component) {
  _inherits(Haikus, _Component);

  var _super = _createSuper(Haikus);

  function Haikus(props) {
    _classCallCheck(this, Haikus);

    return _super.call(this, props);
  }

  _createClass(Haikus, [{
    key: "render",
    value: function render() {
      var haikus = this.props.haikus;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_HaikuList__WEBPACK_IMPORTED_MODULE_3__["default"], {
        haikus: haikus
      }));
    }
  }]);

  return Haikus;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Haikus);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvZmVhdHVyZXMvaGFpa3VzL2NvbXBvbmVudHMvSGFpa3UuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ZlYXR1cmVzL2hhaWt1cy9jb21wb25lbnRzL0hhaWt1Lm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9mZWF0dXJlcy9oYWlrdXMvY29tcG9uZW50cy9IYWlrdUxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ZlYXR1cmVzL2hhaWt1cy9jb21wb25lbnRzL0hhaWt1TGlzdC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvZmVhdHVyZXMvaGFpa3VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkhhaWt1IiwiaGFpa3UiLCJ0aXRsZSIsImNvbnRlbnQiLCJIYWlrdUxpc3QiLCJwcm9wcyIsImhhaWt1cyIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJpbmRleCIsIkNvbXBvbmVudCIsIkhhaWt1cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFTyxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUTtBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLHNCQUNiO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0k7QUFBSSxhQUFTLEVBQUM7QUFBZCxLQUErQkEsS0FBSyxDQUFDQyxLQUFyQyxDQURKLGVBRUk7QUFBSSxhQUFTLEVBQUM7QUFBZCxJQUZKLGVBR0k7QUFBRyxhQUFTLEVBQUM7QUFBYixLQUFnQ0QsS0FBSyxDQUFDRSxPQUF0QyxDQUhKLENBRGE7QUFBQSxDQUFkLEM7Ozs7Ozs7Ozs7O0FDSFAsdUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTs7SUFFcUJDLFM7Ozs7O0FBQ2pCLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNkJBQ1RBLEtBRFM7QUFFbEI7Ozs7NkJBRVE7QUFBQSxVQUNHQyxNQURILEdBQ2MsS0FBS0QsS0FEbkIsQ0FDR0MsTUFESDtBQUVMQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWixFQUFrQ0YsTUFBbEM7QUFDQSwwQkFDSSxxSUFDSTtBQUFJLGlCQUFTLEVBQUM7QUFBZCwrQkFESixlQUVJO0FBQUksaUJBQVMsRUFBQztBQUFkLFNBQ01BLE1BQU0sSUFBSUEsTUFBTSxDQUFDRyxHQUFQLENBQVcsVUFBQ1IsS0FBRCxFQUFRUyxLQUFSO0FBQUEsNEJBRW5CLDJEQUFDLDRDQUFEO0FBQU8sYUFBRyxFQUFHVCxLQUFLLENBQUNDLEtBQU4sR0FBY1EsS0FBM0I7QUFBbUMsZUFBSyxFQUFHVDtBQUEzQyxVQUZtQjtBQUFBLE9BQVgsQ0FEaEIsQ0FGSixDQURKO0FBV0g7Ozs7RUFuQmtDVSwrQzs7Ozs7Ozs7Ozs7OztBQ0p2Qyx1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTs7SUFFTUMsTTs7Ozs7QUFDRixrQkFBWVAsS0FBWixFQUFrQjtBQUFBOztBQUFBLDZCQUNSQSxLQURRO0FBRWpCOzs7OzZCQUVPO0FBQUEsVUFDR0MsTUFESCxHQUNjLEtBQUtELEtBRG5CLENBQ0dDLE1BREg7QUFFTCwwQkFDSSxxSUFDSSwyREFBQyw2REFBRDtBQUFXLGNBQU0sRUFBR0E7QUFBcEIsUUFESixDQURKO0FBS0g7Ozs7RUFaaUJLLCtDOztBQWVOQyxxRUFBZixFIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuL0hhaWt1Lm1vZHVsZS5zY3NzJ1xuXG5leHBvcnQgY29uc3QgSGFpa3UgPSAoeyBoYWlrdSB9KSA9PiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFpa3VcIj5cbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJoYWlrdV9fdGl0bGVcIj57IGhhaWt1LnRpdGxlIH08L2g0PlxuICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cInNlcGFyYXRvclwiLz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImhhaWt1X19jb250ZW50XCI+eyBoYWlrdS5jb250ZW50IH08L3A+XG4gICAgICAgIDwvZGl2PlxuKVxuXG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0hhaWt1fSBmcm9tIFwiLi9IYWlrdVwiO1xuaW1wb3J0ICcuL0hhaWt1TGlzdC5tb2R1bGUuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhhaWt1TGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGhhaWt1cyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc29sZS5sb2coJ3JlbmRlciBoYWlrdSBsaXN0ICcsIGhhaWt1cyk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJoYWlrdXNfX3RpdGxlXCI+bWVzIGRlcm5pZXJzIGhhaWt1czwvaDQ+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImhhaWt1c19fbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICB7IGhhaWt1cyAmJiBoYWlrdXMubWFwKChoYWlrdSwgaW5kZXgpID0+IChcblxuICAgICAgICAgICAgICAgICAgICAgICAgPEhhaWt1IGtleT17IGhhaWt1LnRpdGxlICsgaW5kZXggfSBoYWlrdT17IGhhaWt1IH0gLz5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICApXG4gICAgfVxufVxuXG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIYWlrdUxpc3QgZnJvbSBcIi4vY29tcG9uZW50cy9IYWlrdUxpc3RcIjtcbmltcG9ydCB7Um91dGUsIFN3aXRjaH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuY2xhc3MgSGFpa3VzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgIH1cblxuICAgcmVuZGVyKCkge1xuICAgICAgIGNvbnN0IHsgaGFpa3VzIH0gPSB0aGlzLnByb3BzXG4gICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgIDxIYWlrdUxpc3QgaGFpa3VzPXsgaGFpa3VzIH0gLz5cbiAgICAgICAgICAgPC8+XG4gICAgICAgKVxuICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIYWlrdXM7XG4iXSwic291cmNlUm9vdCI6IiJ9