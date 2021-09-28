"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_aquarium_Aquariums_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/aquarium/Aquariums.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/aquarium/Aquariums.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Aquariums',
  components: {},
  data: function data() {
    return {};
  },
  mounted: function mounted() {
    this.fetchAquariums();
  },
  computed: {
    aquariums: function aquariums() {
      return this.$store.state.aquarium.aquariums;
    },
    loadingStatus: function loadingStatus() {
      return this.$store.state.aquarium.loadingStatus;
    }
  },
  methods: {
    fetchAquariums: function fetchAquariums() {
      this.$store.dispatch('aquarium/findAll');
    },
    newAquarium: function newAquarium() {
      this.$router.push({
        name: 'AddAquarium'
      });
    },
    getAquarium: function getAquarium(aquarium) {
      this.$router.push({
        name: 'EditAquarium',
        params: {
          id: aquarium.id
        }
      });
    },
    showAquarium: function showAquarium(aquarium) {
      this.$router.push({
        name: 'ShowAquarium',
        params: {
          id: aquarium.id
        }
      });
    },
    deleteAquarium: function deleteAquarium(aquarium) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.$store.dispatch('aquarium/destroy', aquarium.id);

              case 2:
                _context.next = 4;
                return _this.$router.go(0);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./resources/js/views/aquarium/Aquariums.vue":
/*!***************************************************!*\
  !*** ./resources/js/views/aquarium/Aquariums.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Aquariums_vue_vue_type_template_id_7d1a743a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Aquariums.vue?vue&type=template&id=7d1a743a& */ "./resources/js/views/aquarium/Aquariums.vue?vue&type=template&id=7d1a743a&");
/* harmony import */ var _Aquariums_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Aquariums.vue?vue&type=script&lang=js& */ "./resources/js/views/aquarium/Aquariums.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Aquariums_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Aquariums_vue_vue_type_template_id_7d1a743a___WEBPACK_IMPORTED_MODULE_0__.render,
  _Aquariums_vue_vue_type_template_id_7d1a743a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/aquarium/Aquariums.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/aquarium/Aquariums.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/aquarium/Aquariums.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Aquariums_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Aquariums.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/aquarium/Aquariums.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Aquariums_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/aquarium/Aquariums.vue?vue&type=template&id=7d1a743a&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/aquarium/Aquariums.vue?vue&type=template&id=7d1a743a& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Aquariums_vue_vue_type_template_id_7d1a743a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Aquariums_vue_vue_type_template_id_7d1a743a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Aquariums_vue_vue_type_template_id_7d1a743a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Aquariums.vue?vue&type=template&id=7d1a743a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/aquarium/Aquariums.vue?vue&type=template&id=7d1a743a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/aquarium/Aquariums.vue?vue&type=template&id=7d1a743a&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/aquarium/Aquariums.vue?vue&type=template&id=7d1a743a& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container-fluid" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "card mb-3" }, [
      _c("div", { staticClass: "card-header d-flex" }, [
        _c("span", [
          _vm._v("\n                    Aquariums Management\n                ")
        ]),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn btn-primary btn-sm ml-auto",
            on: {
              click: function($event) {
                return _vm.newAquarium()
              }
            }
          },
          [
            _c("span", { staticClass: "fa fa-plus" }),
            _vm._v("Add New Aquarium")
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _c("table", { staticClass: "table" }, [
          _vm._m(1),
          _vm._v(" "),
          _c(
            "tbody",
            _vm._l(_vm.aquariums, function(aquarium) {
              return _c("tr", { key: aquarium.id }, [
                _c("td", [_vm._v(_vm._s(aquarium.id))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(aquarium.name))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(aquarium.glass_type))]),
                _vm._v(" "),
                _c("td", [
                  _vm._v(
                    _vm._s(aquarium.size) +
                      " \n                                "
                  ),
                  aquarium.location === "South Africa"
                    ? _c("span", [_vm._v(" litres")])
                    : _c("span", [_vm._v(" gallons")])
                ]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(aquarium.shape))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(aquarium.location))]),
                _vm._v(" "),
                _c("td", [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-warning btn-sm",
                      on: {
                        click: function($event) {
                          return _vm.showAquarium(aquarium)
                        }
                      }
                    },
                    [_c("span", { staticClass: "fa fa-info-circle" })]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary btn-sm",
                      on: {
                        click: function($event) {
                          return _vm.getAquarium(aquarium)
                        }
                      }
                    },
                    [_c("span", { staticClass: "fa fa-edit" })]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-danger btn-sm",
                      on: {
                        click: function($event) {
                          return _vm.deleteAquarium(aquarium)
                        }
                      }
                    },
                    [_c("span", { staticClass: "fa fa-trash" })]
                  )
                ])
              ])
            }),
            0
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ol", { staticClass: "breadcrumb" }, [
      _c("li", { staticClass: "breadcrumb-item active" }, [_vm._v("Aquariums")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("td", { staticClass: "font-weight-bold" }, [_vm._v("#")]),
        _vm._v(" "),
        _c("td", { staticClass: "font-weight-bold" }, [_vm._v("Name")]),
        _vm._v(" "),
        _c("td", { staticClass: "font-weight-bold" }, [_vm._v("Glass Type")]),
        _vm._v(" "),
        _c("td", { staticClass: "font-weight-bold" }, [_vm._v("Size")]),
        _vm._v(" "),
        _c("td", { staticClass: "font-weight-bold" }, [_vm._v("Shape")]),
        _vm._v(" "),
        _c("td", { staticClass: "font-weight-bold" }, [_vm._v("Location")]),
        _vm._v(" "),
        _c("td", { staticClass: "font-weight-bold" }, [_vm._v("Actions")])
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);