"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_aquarium_ShowAquarium_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/aquarium/ShowAquarium.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/aquarium/ShowAquarium.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
  name: 'ShowAquarium',
  components: {},
  data: function data() {
    return {};
  },
  mounted: function mounted() {
    this.fetchAquarium();
    this.fetchFishes();
  },
  computed: {
    aquarium: function aquarium() {
      return this.$store.state.aquarium.aquarium;
    },
    fishes: function fishes() {
      return this.$store.state.fish.fishes;
    },
    loadingStatus: function loadingStatus() {
      return this.$store.state.aquarium.loadingStatus;
    }
  },
  methods: {
    fetchAquarium: function fetchAquarium() {
      this.$store.dispatch('aquarium/findById', this.$route.params.id);
    },
    fetchFishes: function fetchFishes() {
      this.$store.dispatch('fish/findAll', this.$route.params.id);
    },
    newFish: function newFish() {
      this.$router.push({
        name: 'AddFish'
      });
    },
    getFish: function getFish(fish) {
      this.$router.push({
        name: 'EditFish',
        params: {
          fishId: fish.id,
          aquariumId: this.$route.params.id
        }
      });
    },
    deleteFish: function deleteFish(fish) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var params;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                params = {
                  aquariumId: _this.$route.params.id,
                  fishId: fish.id
                };
                _context.next = 3;
                return _this.$store.dispatch('fish/destroy', params);

              case 3:
                _context.next = 5;
                return _this.$router.go(0);

              case 5:
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

/***/ "./resources/js/views/aquarium/ShowAquarium.vue":
/*!******************************************************!*\
  !*** ./resources/js/views/aquarium/ShowAquarium.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ShowAquarium_vue_vue_type_template_id_96832f46___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShowAquarium.vue?vue&type=template&id=96832f46& */ "./resources/js/views/aquarium/ShowAquarium.vue?vue&type=template&id=96832f46&");
/* harmony import */ var _ShowAquarium_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShowAquarium.vue?vue&type=script&lang=js& */ "./resources/js/views/aquarium/ShowAquarium.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ShowAquarium_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ShowAquarium_vue_vue_type_template_id_96832f46___WEBPACK_IMPORTED_MODULE_0__.render,
  _ShowAquarium_vue_vue_type_template_id_96832f46___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/aquarium/ShowAquarium.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/aquarium/ShowAquarium.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/aquarium/ShowAquarium.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowAquarium_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ShowAquarium.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/aquarium/ShowAquarium.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowAquarium_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/aquarium/ShowAquarium.vue?vue&type=template&id=96832f46&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/aquarium/ShowAquarium.vue?vue&type=template&id=96832f46& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowAquarium_vue_vue_type_template_id_96832f46___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowAquarium_vue_vue_type_template_id_96832f46___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowAquarium_vue_vue_type_template_id_96832f46___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ShowAquarium.vue?vue&type=template&id=96832f46& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/aquarium/ShowAquarium.vue?vue&type=template&id=96832f46&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/aquarium/ShowAquarium.vue?vue&type=template&id=96832f46&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/aquarium/ShowAquarium.vue?vue&type=template&id=96832f46& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
    _c("ol", { staticClass: "breadcrumb" }, [
      _c(
        "li",
        { staticClass: "breadcrumb-item" },
        [
          _c("router-link", { attrs: { to: "/aquariums" } }, [
            _vm._v("Aquariums")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c("li", { staticClass: "breadcrumb-item active" }, [
        _vm._v("Aquarium Info")
      ])
    ]),
    _vm._v(" "),
    _vm.aquarium
      ? _c("div", { staticClass: "card mb-3" }, [
          _c("div", { staticClass: "card-header d-flex" }, [
            _c("span", [
              _vm._v(
                "\n                    Aquarium " +
                  _vm._s(_vm.aquarium.name) +
                  " information\n                "
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "d-block" }, [
              _c("div", { staticClass: "aquarium_details" }, [
                _c("p", [
                  _c("span", { staticClass: "font-weight-bold" }, [
                    _vm._v("Aquarium name: ")
                  ]),
                  _vm._v(_vm._s(_vm.aquarium.name))
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("span", { staticClass: "font-weight-bold" }, [
                    _vm._v("Glass type: ")
                  ]),
                  _vm._v(_vm._s(_vm.aquarium.glass_type))
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("span", { staticClass: "font-weight-bold" }, [
                    _vm._v("Size: ")
                  ]),
                  _vm._v(
                    _vm._s(_vm.aquarium.size) + "\n                            "
                  ),
                  _vm.aquarium.location === "South Africa"
                    ? _c("span", [_vm._v(" litres")])
                    : _c("span", [_vm._v(" gallons")])
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("span", { staticClass: "font-weight-bold" }, [
                    _vm._v("Shape: ")
                  ]),
                  _vm._v(_vm._s(_vm.aquarium.shape))
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("span", { staticClass: "font-weight-bold" }, [
                    _vm._v("location: ")
                  ]),
                  _vm._v(_vm._s(_vm.aquarium.location))
                ])
              ]),
              _vm._v(" "),
              _c("div", [
                _c("div", { staticClass: "card-header d-flex" }, [
                  _c("span", [
                    _vm._v(
                      "\n                                List of all the fish in the aquarium\n                            "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary btn-sm ml-auto",
                      on: {
                        click: function($event) {
                          return _vm.newFish()
                        }
                      }
                    },
                    [
                      _c("span", { staticClass: "fa fa-plus" }),
                      _vm._v(" Add New Fish")
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("table", { staticClass: "table" }, [
                  _vm._m(0),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.fishes, function(fish) {
                      return _c("tr", { key: fish.id }, [
                        _c("td", [_vm._v(_vm._s(fish.id))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(fish.species))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(fish.color))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(fish.number_of_fins))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(fish.aquarium.name))]),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-primary btn-sm",
                              on: {
                                click: function($event) {
                                  return _vm.getFish(fish)
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
                                  return _vm.deleteFish(fish)
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
        ])
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("td", { staticClass: "font-weight-bold" }, [_vm._v("#")]),
        _vm._v(" "),
        _c("td", { staticClass: "font-weight-bold" }, [_vm._v("Species")]),
        _vm._v(" "),
        _c("td", { staticClass: "font-weight-bold" }, [_vm._v("Color")]),
        _vm._v(" "),
        _c("td", { staticClass: "font-weight-bold" }, [_vm._v("No of Fins")]),
        _vm._v(" "),
        _c("td", { staticClass: "font-weight-bold" }, [_vm._v("Aquarium")]),
        _vm._v(" "),
        _c("td", { staticClass: "font-weight-bold" }, [_vm._v("Actions")])
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);