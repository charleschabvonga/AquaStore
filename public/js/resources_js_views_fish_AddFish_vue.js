"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_fish_AddFish_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/fish/AddFish.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/fish/AddFish.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'AddFish',
  data: function data() {
    return {
      fish: {
        species: '',
        color: [],
        number_of_fins: '',
        aquarium_id: '',
        aquarium_param: this.$route.params.id
      },
      colors: [{
        id: '1',
        text: 'Black'
      }, {
        id: '2',
        text: 'White'
      }, {
        id: '3',
        text: 'Blue'
      }, {
        id: '4',
        text: 'Red'
      }, {
        id: '5',
        text: 'Green'
      }, {
        id: '6',
        text: 'Yellow'
      }, {
        id: '7',
        text: 'Orange'
      }, {
        id: '8',
        text: 'Pink'
      }, {
        id: '9',
        text: 'Grey'
      }, {
        id: '10',
        text: 'Brown'
      }, {
        id: '11',
        text: 'Purple'
      }, {
        id: '12',
        text: 'Gold'
      }, {
        id: '13',
        text: 'Silver'
      }, {
        id: '14',
        text: 'Indigo'
      }, {
        id: '15',
        text: 'Violet'
      }],
      species: [{
        id: '1',
        text: 'Guppy'
      }, {
        id: '2',
        text: 'Gold'
      }, {
        id: '3',
        text: 'Rainbow'
      }, {
        id: '4',
        text: 'Silver Dollar'
      }, {
        id: '5',
        text: 'Siamese Fighting'
      }]
    };
  },
  mounted: function mounted() {
    this.fetchAquariums();
  },
  computed: {
    loadingStatus: function loadingStatus() {
      return this.$store.state.fish.loadingStatus;
    },
    aquariums: function aquariums() {
      return this.$store.state.aquarium.aquariums.map(function (aquarium) {
        return {
          id: aquarium.id,
          text: aquarium.name
        };
      });
    },
    fishError: function fishError() {
      var _this$$store$state$fi;

      return (_this$$store$state$fi = this.$store.state.fish.fishError) !== null && _this$$store$state$fi !== void 0 ? _this$$store$state$fi : {};
    }
  },
  methods: {
    createFish: function () {
      var _createFish = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.$store.dispatch('fish/create', this.fish);

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function createFish() {
        return _createFish.apply(this, arguments);
      }

      return createFish;
    }(),
    cancel: function cancel() {
      this.$router.push({
        name: 'ShowAquarium',
        params: {
          id: this.$route.params.id
        }
      });
    },
    fetchAquariums: function fetchAquariums() {
      this.$store.dispatch('aquarium/findAll');
    }
  }
});

/***/ }),

/***/ "./resources/js/views/fish/AddFish.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/fish/AddFish.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AddFish_vue_vue_type_template_id_7036dd7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddFish.vue?vue&type=template&id=7036dd7e& */ "./resources/js/views/fish/AddFish.vue?vue&type=template&id=7036dd7e&");
/* harmony import */ var _AddFish_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddFish.vue?vue&type=script&lang=js& */ "./resources/js/views/fish/AddFish.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddFish_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddFish_vue_vue_type_template_id_7036dd7e___WEBPACK_IMPORTED_MODULE_0__.render,
  _AddFish_vue_vue_type_template_id_7036dd7e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/fish/AddFish.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/fish/AddFish.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/fish/AddFish.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddFish_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddFish.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/fish/AddFish.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddFish_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/fish/AddFish.vue?vue&type=template&id=7036dd7e&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/fish/AddFish.vue?vue&type=template&id=7036dd7e& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddFish_vue_vue_type_template_id_7036dd7e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddFish_vue_vue_type_template_id_7036dd7e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddFish_vue_vue_type_template_id_7036dd7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddFish.vue?vue&type=template&id=7036dd7e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/fish/AddFish.vue?vue&type=template&id=7036dd7e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/fish/AddFish.vue?vue&type=template&id=7036dd7e&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/fish/AddFish.vue?vue&type=template&id=7036dd7e& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
            _vm._v("Aquarium")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c("li", { staticClass: "breadcrumb-item active" }, [
        _vm._v("Add New Fish")
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
                  return _vm.createFish.apply(null, arguments)
                }
              }
            },
            [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "species" } }, [
                  _vm._v("Select Species")
                ]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.fish.species,
                        expression: "fish.species"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { id: "species" },
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
                          _vm.fish,
                          "species",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { disabled: "", value: "" } }, [
                      _vm._v("Please select the fish species.")
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.species, function(item) {
                      return _c(
                        "option",
                        { key: item.id, domProps: { value: item.text } },
                        [
                          _vm._v(
                            "\n                                " +
                              _vm._s(item.text) +
                              "\n                            "
                          )
                        ]
                      )
                    })
                  ],
                  2
                ),
                _vm._v(" "),
                _vm.fishError
                  ? _c("p", { staticClass: "input__error-msg" }, [
                      _vm._v(_vm._s(_vm.fishError.species))
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "color" } }, [
                  _vm._v("Select Color(s)")
                ]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.fish.color,
                        expression: "fish.color"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { multiple: "", id: "color" },
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
                          _vm.fish,
                          "color",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { disabled: "", value: "" } }, [
                      _vm._v("Please select colors the fish has.")
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.colors, function(color) {
                      return _c(
                        "option",
                        { key: color.id, domProps: { value: color.text } },
                        [
                          _vm._v(
                            "\n                                " +
                              _vm._s(color.text) +
                              "\n                            "
                          )
                        ]
                      )
                    })
                  ],
                  2
                ),
                _vm._v(" "),
                _vm.fishError
                  ? _c("p", { staticClass: "input__error-msg" }, [
                      _vm._v(_vm._s(_vm.fishError.color))
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "number_of_fins" } }, [
                  _vm._v("Enter Number of Fins")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.fish.number_of_fins,
                      expression: "fish.number_of_fins"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "number",
                    id: "number_of_fins",
                    placeholder: "Enter number of fins"
                  },
                  domProps: { value: _vm.fish.number_of_fins },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.fish, "number_of_fins", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.fishError
                  ? _c("p", { staticClass: "input__error-msg" }, [
                      _vm._v(_vm._s(_vm.fishError.number_of_fins))
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "aquarium" } }, [
                  _vm._v("Select Aquarium")
                ]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.fish.aquarium_id,
                        expression: "fish.aquarium_id"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { id: "aquarium" },
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
                          _vm.fish,
                          "aquarium_id",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { disabled: "", value: "" } }, [
                      _vm._v("Please select an aquarium for the fish.")
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.aquariums, function(aquarium) {
                      return _c(
                        "option",
                        {
                          key: aquarium.id,
                          domProps: { value: aquarium.text }
                        },
                        [
                          _vm._v(
                            "\n                                " +
                              _vm._s(aquarium.text) +
                              "\n                            "
                          )
                        ]
                      )
                    })
                  ],
                  2
                ),
                _vm._v(" "),
                _vm.fishError
                  ? _c("p", { staticClass: "input__error-msg" }, [
                      _vm._v(_vm._s(_vm.fishError.aquarium_id))
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
        _vm._v("\n                    Fish Management\n                ")
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