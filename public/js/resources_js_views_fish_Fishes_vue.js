"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_fish_Fishes_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/fish/Fishes.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/fish/Fishes.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Fishes',
  data: function data() {
    return {};
  },
  mounted: function mounted() {
    this.fetchFishes();
  },
  computed: {
    fishes: function fishes() {
      return this.$store.state.fish.fishes;
    },
    loadingStatus: function loadingStatus() {
      return this.$store.state.fish.loadingStatus;
    }
  },
  methods: {
    fetchFishes: function fetchFishes() {
      this.$store.dispatch('fish/findAll', this.$route.params.id);
    },
    newFish: function newFish() {
      this.$router.push({
        name: 'AddFish'
      });
    },
    getAquarium: function getAquarium(fish) {
      this.$router.push({
        name: 'EditFish',
        params: {
          id: fish.id
        }
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/views/fish/Fishes.vue":
/*!********************************************!*\
  !*** ./resources/js/views/fish/Fishes.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Fishes_vue_vue_type_template_id_5bb6120e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Fishes.vue?vue&type=template&id=5bb6120e& */ "./resources/js/views/fish/Fishes.vue?vue&type=template&id=5bb6120e&");
/* harmony import */ var _Fishes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Fishes.vue?vue&type=script&lang=js& */ "./resources/js/views/fish/Fishes.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Fishes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Fishes_vue_vue_type_template_id_5bb6120e___WEBPACK_IMPORTED_MODULE_0__.render,
  _Fishes_vue_vue_type_template_id_5bb6120e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/fish/Fishes.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/fish/Fishes.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/fish/Fishes.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Fishes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Fishes.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/fish/Fishes.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Fishes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/fish/Fishes.vue?vue&type=template&id=5bb6120e&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/fish/Fishes.vue?vue&type=template&id=5bb6120e& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Fishes_vue_vue_type_template_id_5bb6120e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Fishes_vue_vue_type_template_id_5bb6120e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Fishes_vue_vue_type_template_id_5bb6120e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Fishes.vue?vue&type=template&id=5bb6120e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/fish/Fishes.vue?vue&type=template&id=5bb6120e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/fish/Fishes.vue?vue&type=template&id=5bb6120e&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/fish/Fishes.vue?vue&type=template&id=5bb6120e& ***!
  \******************************************************************************************************************************************************************************************************************/
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
        [_c("router-link", { attrs: { to: "/" } }, [_vm._v("Dashboard")])],
        1
      ),
      _vm._v(" "),
      _c("li", { staticClass: "breadcrumb-item active" }, [_vm._v("Fish")])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card mb-3" }, [
      _c("div", { staticClass: "card-header d-flex" }, [
        _vm._m(0),
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
          [_c("span", { staticClass: "fa fa-plus" }), _vm._v(" Create New")]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
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
                _c("td", [_vm._v(_vm._s(fish.aquarium_id))]),
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
                  _vm._m(2, true)
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
    return _c("span", [
      _c("i", { staticClass: "fas fa-chart-area" }),
      _vm._v("\n                    Fish Management\n                ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("td", [_vm._v("#")]),
        _vm._v(" "),
        _c("td", [_vm._v("Species")]),
        _vm._v(" "),
        _c("td", [_vm._v("Color")]),
        _vm._v(" "),
        _c("td", [_vm._v("No of fins")]),
        _vm._v(" "),
        _c("td", [_vm._v("Aquarium")]),
        _vm._v(" "),
        _c("td", [_vm._v("Actions")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("button", { staticClass: "btn btn-danger btn-sm" }, [
      _c("span", { staticClass: "fa fa-trash" })
    ])
  }
]
render._withStripped = true



/***/ })

}]);