"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_aquarium_user_UserShowAquarium_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/aquarium/user/UserShowAquarium.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/aquarium/user/UserShowAquarium.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'UserShowAquarium',
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
      var _this$$store$state$aq;

      return (_this$$store$state$aq = this.$store.state.aquarium.aquarium) !== null && _this$$store$state$aq !== void 0 ? _this$$store$state$aq : {};
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
      this.$store.dispatch('aquarium/userFindById', this.$route.params.id);
    },
    fetchFishes: function fetchFishes() {
      this.$store.dispatch('fish/userFindAll', this.$route.params.id);
    }
  }
});

/***/ }),

/***/ "./resources/js/views/aquarium/user/UserShowAquarium.vue":
/*!***************************************************************!*\
  !*** ./resources/js/views/aquarium/user/UserShowAquarium.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserShowAquarium_vue_vue_type_template_id_e3cce99c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserShowAquarium.vue?vue&type=template&id=e3cce99c& */ "./resources/js/views/aquarium/user/UserShowAquarium.vue?vue&type=template&id=e3cce99c&");
/* harmony import */ var _UserShowAquarium_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserShowAquarium.vue?vue&type=script&lang=js& */ "./resources/js/views/aquarium/user/UserShowAquarium.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserShowAquarium_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserShowAquarium_vue_vue_type_template_id_e3cce99c___WEBPACK_IMPORTED_MODULE_0__.render,
  _UserShowAquarium_vue_vue_type_template_id_e3cce99c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/aquarium/user/UserShowAquarium.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/aquarium/user/UserShowAquarium.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/aquarium/user/UserShowAquarium.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserShowAquarium_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserShowAquarium.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/aquarium/user/UserShowAquarium.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserShowAquarium_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/aquarium/user/UserShowAquarium.vue?vue&type=template&id=e3cce99c&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/views/aquarium/user/UserShowAquarium.vue?vue&type=template&id=e3cce99c& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserShowAquarium_vue_vue_type_template_id_e3cce99c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserShowAquarium_vue_vue_type_template_id_e3cce99c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserShowAquarium_vue_vue_type_template_id_e3cce99c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserShowAquarium.vue?vue&type=template&id=e3cce99c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/aquarium/user/UserShowAquarium.vue?vue&type=template&id=e3cce99c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/aquarium/user/UserShowAquarium.vue?vue&type=template&id=e3cce99c&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/aquarium/user/UserShowAquarium.vue?vue&type=template&id=e3cce99c& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
          _c("router-link", { attrs: { to: "/user/aquariums" } }, [
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
                _vm._m(0),
                _vm._v(" "),
                _c("table", { staticClass: "table" }, [
                  _vm._m(1),
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
                        _c("td", [_vm._v(_vm._s(fish.aquarium.name))])
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
    return _c("div", { staticClass: "card-header d-flex" }, [
      _c("span", [
        _vm._v(
          "\n                                List of all the fish in the aquarium\n                            "
        )
      ])
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
        _c("td", { staticClass: "font-weight-bold" }, [_vm._v("Species")]),
        _vm._v(" "),
        _c("td", { staticClass: "font-weight-bold" }, [_vm._v("Color")]),
        _vm._v(" "),
        _c("td", { staticClass: "font-weight-bold" }, [_vm._v("No of fins")]),
        _vm._v(" "),
        _c("td", { staticClass: "font-weight-bold" }, [_vm._v("Aquarium")])
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);