"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_aquarium_AddAquarium_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/aquarium/AddAquarium.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/aquarium/AddAquarium.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  name: 'AddAquarium',
  components: {},
  data: function data() {
    return {
      aquarium: {
        name: '',
        glass_type: '',
        size: '',
        shape: '',
        location: ''
      },
      locations: [{
        id: '1',
        text: 'South Africa'
      }, {
        id: '2',
        text: 'United States of America'
      }],
      glass_types: [{
        id: '1',
        text: 'Glass'
      }, {
        id: '2',
        text: 'Acrylic'
      }]
    };
  },
  computed: _defineProperty({
    aquariumError: function aquariumError() {
      var _this$$store$state$aq;

      return (_this$$store$state$aq = this.$store.state.aquarium.aquariumError) !== null && _this$$store$state$aq !== void 0 ? _this$$store$state$aq : {};
    },
    loadingStatus: function loadingStatus() {
      return this.$store.state.aquarium.loadingStatus;
    }
  }, "aquariumError", function aquariumError() {
    var _this$$store$state$aq2;

    return (_this$$store$state$aq2 = this.$store.state.aquarium.aquariumError) !== null && _this$$store$state$aq2 !== void 0 ? _this$$store$state$aq2 : {};
  }),
  methods: {
    createAquarium: function () {
      var _createAquarium = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.$store.dispatch('aquarium/create', this.aquarium);

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function createAquarium() {
        return _createAquarium.apply(this, arguments);
      }

      return createAquarium;
    }(),
    cancel: function cancel() {
      this.$router.push({
        name: 'Aquariums'
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/views/aquarium/AddAquarium.vue":
/*!*****************************************************!*\
  !*** ./resources/js/views/aquarium/AddAquarium.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AddAquarium_vue_vue_type_template_id_ba5b6eb2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddAquarium.vue?vue&type=template&id=ba5b6eb2& */ "./resources/js/views/aquarium/AddAquarium.vue?vue&type=template&id=ba5b6eb2&");
/* harmony import */ var _AddAquarium_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddAquarium.vue?vue&type=script&lang=js& */ "./resources/js/views/aquarium/AddAquarium.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddAquarium_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddAquarium_vue_vue_type_template_id_ba5b6eb2___WEBPACK_IMPORTED_MODULE_0__.render,
  _AddAquarium_vue_vue_type_template_id_ba5b6eb2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/aquarium/AddAquarium.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/aquarium/AddAquarium.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/aquarium/AddAquarium.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddAquarium_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddAquarium.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/aquarium/AddAquarium.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddAquarium_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/aquarium/AddAquarium.vue?vue&type=template&id=ba5b6eb2&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/aquarium/AddAquarium.vue?vue&type=template&id=ba5b6eb2& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddAquarium_vue_vue_type_template_id_ba5b6eb2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddAquarium_vue_vue_type_template_id_ba5b6eb2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddAquarium_vue_vue_type_template_id_ba5b6eb2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddAquarium.vue?vue&type=template&id=ba5b6eb2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/aquarium/AddAquarium.vue?vue&type=template&id=ba5b6eb2&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/aquarium/AddAquarium.vue?vue&type=template&id=ba5b6eb2&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/aquarium/AddAquarium.vue?vue&type=template&id=ba5b6eb2& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
        _vm._v("Add Aquarium")
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card mb-3" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _c("div", { staticClass: "d-block" }, [
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.createAquarium()
                }
              }
            },
            [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "name" } }, [_vm._v("Enter Name")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.aquarium.name,
                      expression: "aquarium.name"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    id: "name",
                    placeholder: "Enter aquarium name"
                  },
                  domProps: { value: _vm.aquarium.name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.aquarium, "name", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.aquariumError
                  ? _c("p", { staticClass: "input__error-msg" }, [
                      _vm._v(_vm._s(_vm.aquariumError.name))
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "glass_type" } }, [
                  _vm._v("Select Glass Type")
                ]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.aquarium.glass_type,
                        expression: "aquarium.glass_type"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { id: "glass_type" },
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.aquarium,
                          "glass_type",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { disabled: "", value: "" } }, [
                      _vm._v("Please select an aquarium glass type")
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.glass_types, function(glass_type) {
                      return _c(
                        "option",
                        {
                          key: glass_type.id,
                          domProps: { value: glass_type.text }
                        },
                        [
                          _vm._v(
                            "\n                                    " +
                              _vm._s(glass_type.text) +
                              "\n                                "
                          )
                        ]
                      )
                    })
                  ],
                  2
                ),
                _vm._v(" "),
                _vm.aquariumError
                  ? _c("p", { staticClass: "input__error-msg" }, [
                      _vm._v(_vm._s(_vm.aquariumError.glass_type))
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "size" } }, [_vm._v("Enter Size")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.aquarium.size,
                      expression: "aquarium.size"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "number",
                    id: "size",
                    placeholder: "Enter aquarium size"
                  },
                  domProps: { value: _vm.aquarium.size },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.aquarium, "size", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.aquariumError
                  ? _c("p", { staticClass: "input__error-msg" }, [
                      _vm._v(_vm._s(_vm.aquariumError.size))
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "shape" } }, [
                  _vm._v("Enter Shape")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.aquarium.shape,
                      expression: "aquarium.shape"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    id: "shape",
                    placeholder: "Enter aquarium shape"
                  },
                  domProps: { value: _vm.aquarium.shape },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.aquarium, "shape", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.aquariumError
                  ? _c("p", { staticClass: "input__error-msg" }, [
                      _vm._v(_vm._s(_vm.aquariumError.email))
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.aquariumError
                  ? _c("p", { staticClass: "input__error-msg" }, [
                      _vm._v(_vm._s(_vm.aquariumError.shape))
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "location" } }, [
                  _vm._v("Select Location")
                ]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.aquarium.location,
                        expression: "aquarium.location"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { id: "location" },
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.aquarium,
                          "location",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { disabled: "", value: "" } }, [
                      _vm._v("Please select the location of the aquarium")
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.locations, function(location) {
                      return _c(
                        "option",
                        {
                          key: location.id,
                          domProps: { value: location.text }
                        },
                        [
                          _vm._v(
                            "\n                                    " +
                              _vm._s(location.text) +
                              "\n                                "
                          )
                        ]
                      )
                    })
                  ],
                  2
                ),
                _vm._v(" "),
                _vm.aquariumError
                  ? _c("p", { staticClass: "input__error-msg" }, [
                      _vm._v(_vm._s(_vm.aquariumError.location))
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("div", { staticClass: "text-right" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-default",
                    attrs: { type: "button" },
                    on: {
                      click: function($event) {
                        return _vm.cancel()
                      }
                    }
                  },
                  [_vm._v("Cancel")]
                ),
                _vm._v(" "),
                _vm._m(1)
              ])
            ]
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
    return _c("div", { staticClass: "card-header d-flex" }, [
      _c("span", [
        _vm._v("\n                    Add Aquarium\n                ")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      { staticClass: "btn btn-primary", attrs: { type: "submit" } },
      [_c("span", { staticClass: "fa fa-check" }), _vm._v(" Save")]
    )
  }
]
render._withStripped = true



/***/ })

}]);