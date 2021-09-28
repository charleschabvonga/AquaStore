"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_aquarium_EditAquarium_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/aquarium/EditAquarium.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/aquarium/EditAquarium.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _store_modules_aquarium_aquarium_mutations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/modules/aquarium/aquarium.mutations */ "./resources/js/store/modules/aquarium/aquarium.mutations.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
  name: 'UpdateAquarium',
  components: {},
  data: function data() {
    return {
      newAquarium: {},
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
  mounted: function mounted() {
    this.fetchAquarium();
  },
  created: function created() {
    var _this = this;

    _store_modules_aquarium_aquarium_mutations__WEBPACK_IMPORTED_MODULE_0__.aquariumEventBus.$on('aquarium-set', function (aquarium) {
      _this.newAquarium = _objectSpread({}, aquarium);
    });
  },
  computed: {
    aquarium: function aquarium() {
      return this.$store.state.aquarium.aquarium;
    },
    loadingStatus: function loadingStatus() {
      return this.$store.state.aquarium.loadingStatus;
    },
    aquariumError: function aquariumError() {
      var _this$$store$state$aq;

      return (_this$$store$state$aq = this.$store.state.aquarium.aquariumError) !== null && _this$$store$state$aq !== void 0 ? _this$$store$state$aq : {};
    }
  },
  methods: {
    fetchAquarium: function fetchAquarium() {
      this.$store.dispatch('aquarium/findById', this.$route.params.id);
    },
    editAquarium: function editAquarium() {
      var aquarium = {
        id: this.$route.params.id,
        name: this.newAquarium.name,
        glass_type: this.newAquarium.glass_type,
        size: this.newAquarium.size,
        shape: this.newAquarium.shape,
        location: this.newAquarium.location
      };
      this.$store.dispatch('aquarium/update', aquarium);
    },
    cancel: function cancel() {
      this.$router.push({
        name: 'Aquariums'
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/views/aquarium/EditAquarium.vue":
/*!******************************************************!*\
  !*** ./resources/js/views/aquarium/EditAquarium.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EditAquarium_vue_vue_type_template_id_3eca602c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditAquarium.vue?vue&type=template&id=3eca602c& */ "./resources/js/views/aquarium/EditAquarium.vue?vue&type=template&id=3eca602c&");
/* harmony import */ var _EditAquarium_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditAquarium.vue?vue&type=script&lang=js& */ "./resources/js/views/aquarium/EditAquarium.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditAquarium_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditAquarium_vue_vue_type_template_id_3eca602c___WEBPACK_IMPORTED_MODULE_0__.render,
  _EditAquarium_vue_vue_type_template_id_3eca602c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/aquarium/EditAquarium.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/aquarium/EditAquarium.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/aquarium/EditAquarium.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditAquarium_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditAquarium.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/aquarium/EditAquarium.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditAquarium_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/aquarium/EditAquarium.vue?vue&type=template&id=3eca602c&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/aquarium/EditAquarium.vue?vue&type=template&id=3eca602c& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditAquarium_vue_vue_type_template_id_3eca602c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditAquarium_vue_vue_type_template_id_3eca602c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditAquarium_vue_vue_type_template_id_3eca602c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditAquarium.vue?vue&type=template&id=3eca602c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/aquarium/EditAquarium.vue?vue&type=template&id=3eca602c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/aquarium/EditAquarium.vue?vue&type=template&id=3eca602c&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/aquarium/EditAquarium.vue?vue&type=template&id=3eca602c& ***!
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
        _vm._v("Update Aquarium")
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card mb-3" }, [
      _c("div", { staticClass: "card-header d-flex" }, [
        _c("span", [
          _vm._v(
            "\n                    Update Aquarium " +
              _vm._s(_vm.aquarium.name) +
              "\n                "
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _c("div", { staticClass: "d-block" }, [
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.editAquarium()
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
                      value: _vm.newAquarium.name,
                      expression: "newAquarium.name"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    id: "name",
                    placeholder: "Enter aquarium name"
                  },
                  domProps: { value: _vm.newAquarium.name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.newAquarium, "name", $event.target.value)
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
                        value: _vm.newAquarium.glass_type,
                        expression: "newAquarium.glass_type"
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
                          _vm.newAquarium,
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
                      value: _vm.newAquarium.size,
                      expression: "newAquarium.size"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "number",
                    id: "size",
                    placeholder: "Enter aquarium size"
                  },
                  domProps: { value: _vm.newAquarium.size },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.newAquarium, "size", $event.target.value)
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
                      value: _vm.newAquarium.shape,
                      expression: "newAquarium.shape"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    id: "shape",
                    placeholder: "Enter aquarium shape"
                  },
                  domProps: { value: _vm.newAquarium.shape },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.newAquarium, "shape", $event.target.value)
                    }
                  }
                }),
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
                        value: _vm.newAquarium.location,
                        expression: "newAquarium.location"
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
                          _vm.newAquarium,
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
                _vm._m(0)
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
    return _c(
      "button",
      { staticClass: "btn btn-primary", attrs: { type: "submit" } },
      [_c("span", { staticClass: "fa fa-check" }), _vm._v(" Update")]
    )
  }
]
render._withStripped = true



/***/ })

}]);