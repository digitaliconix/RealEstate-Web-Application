(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./frontend/src/@core/mixins/ui/transition.js":
/*!****************************************************!*\
  !*** ./frontend/src/@core/mixins/ui/transition.js ***!
  \****************************************************/
/*! exports provided: heightTransition, _ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "heightTransition", function() { return heightTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_", function() { return _; });
var heightTransition = {
  /*
      HowTo:
      1. Add dynamic style to element and set style as `trHeight`
      2. Set transition speed using `transition: 0.35s height;` <= you can use appropriate value;
      3. Optionally you can set `overflow: hidden;` to hide element overflow while height is animated.
      4. Set initial height using `trSetHeight` before any operation. [mounted hook is recommended - You can use `ref` for dynamic contents]
      5. Toggle height using height operations 🍻
      6. Toggle usage of $nextTick for height operations is any issue occur [experimental] 🔬
    */
  data: function data() {
    return {
      trHeight: null
    };
  },
  methods: {
    trAddHeight: function trAddHeight(val) {
      // Add height to existing height
      // Usage: Where new element is append or more height is added (e.g. list append)

      /* Assumes:
       - Height is assigned and is `String`
       - Incoming value is valid number in `Number` or `String`
      */
      var heightValue = Number(this.trHeight.substring(0, this.trHeight.length - 2));
      this.trHeight = "".concat(heightValue + Number(val), "px");
    },
    trTrimHeight: function trTrimHeight(val) {
      // Remove height from existing height
      // Usage: Where new element is removed or height is remove (e.g. list pop/ele remove)

      /* Assumes:
       - Height is assigned and is `String`
       - Incoming value is valid number in `Number` or `String`
      */
      var heightValue = Number(this.trHeight.substring(0, this.trHeight.length - 2));
      this.trHeight = "".concat(heightValue - Number(val), "px");
    },
    trSetHeight: function trSetHeight(val) {
      // Set height
      // Usage: Mostly for assigning initial value from mounted hook

      /* Assumes:
       - Height is not assigned and what to assign for add/remove operation
       - What to set height at something for odd usage
       - Incoming value is valid number in `Number` or `String`
      */
      if (val === null) this.trHeight = 'auto';else this.trHeight = "".concat(Number(val), "px");
    }
  }
}; // Ignore below for now. We will remove it when we add more transition in future.

var _ = null;

/***/ }),

/***/ "./frontend/src/client/views/Project/ProjectTabs/Building.vue":
/*!********************************************************************!*\
  !*** ./frontend/src/client/views/Project/ProjectTabs/Building.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Building_vue_vue_type_template_id_2e703466_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Building.vue?vue&type=template&id=2e703466&scoped=true& */ "./frontend/src/client/views/Project/ProjectTabs/Building.vue?vue&type=template&id=2e703466&scoped=true&");
/* harmony import */ var _Building_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Building.vue?vue&type=script&lang=js& */ "./frontend/src/client/views/Project/ProjectTabs/Building.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Building_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Building_vue_vue_type_template_id_2e703466_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Building_vue_vue_type_template_id_2e703466_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2e703466",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/client/views/Project/ProjectTabs/Building.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/client/views/Project/ProjectTabs/Building.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./frontend/src/client/views/Project/ProjectTabs/Building.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Building_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Building.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/client/views/Project/ProjectTabs/Building.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Building_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/client/views/Project/ProjectTabs/Building.vue?vue&type=template&id=2e703466&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./frontend/src/client/views/Project/ProjectTabs/Building.vue?vue&type=template&id=2e703466&scoped=true& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Building_vue_vue_type_template_id_2e703466_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Building.vue?vue&type=template&id=2e703466&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/client/views/Project/ProjectTabs/Building.vue?vue&type=template&id=2e703466&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Building_vue_vue_type_template_id_2e703466_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Building_vue_vue_type_template_id_2e703466_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/client/views/Project/ProjectTabs/ExtraChargeType.vue":
/*!***************************************************************************!*\
  !*** ./frontend/src/client/views/Project/ProjectTabs/ExtraChargeType.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ExtraChargeType_vue_vue_type_template_id_e9652396_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExtraChargeType.vue?vue&type=template&id=e9652396&scoped=true& */ "./frontend/src/client/views/Project/ProjectTabs/ExtraChargeType.vue?vue&type=template&id=e9652396&scoped=true&");
/* harmony import */ var _ExtraChargeType_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExtraChargeType.vue?vue&type=script&lang=js& */ "./frontend/src/client/views/Project/ProjectTabs/ExtraChargeType.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ExtraChargeType_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ExtraChargeType_vue_vue_type_template_id_e9652396_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ExtraChargeType_vue_vue_type_template_id_e9652396_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "e9652396",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/client/views/Project/ProjectTabs/ExtraChargeType.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/client/views/Project/ProjectTabs/ExtraChargeType.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./frontend/src/client/views/Project/ProjectTabs/ExtraChargeType.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExtraChargeType_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ExtraChargeType.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/client/views/Project/ProjectTabs/ExtraChargeType.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExtraChargeType_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/client/views/Project/ProjectTabs/ExtraChargeType.vue?vue&type=template&id=e9652396&scoped=true&":
/*!**********************************************************************************************************************!*\
  !*** ./frontend/src/client/views/Project/ProjectTabs/ExtraChargeType.vue?vue&type=template&id=e9652396&scoped=true& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExtraChargeType_vue_vue_type_template_id_e9652396_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ExtraChargeType.vue?vue&type=template&id=e9652396&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/client/views/Project/ProjectTabs/ExtraChargeType.vue?vue&type=template&id=e9652396&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExtraChargeType_vue_vue_type_template_id_e9652396_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExtraChargeType_vue_vue_type_template_id_e9652396_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/client/views/Project/ProjectTabs/UnitType.vue":
/*!********************************************************************!*\
  !*** ./frontend/src/client/views/Project/ProjectTabs/UnitType.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UnitType_vue_vue_type_template_id_430fae12_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UnitType.vue?vue&type=template&id=430fae12&scoped=true& */ "./frontend/src/client/views/Project/ProjectTabs/UnitType.vue?vue&type=template&id=430fae12&scoped=true&");
/* harmony import */ var _UnitType_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UnitType.vue?vue&type=script&lang=js& */ "./frontend/src/client/views/Project/ProjectTabs/UnitType.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UnitType_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UnitType_vue_vue_type_template_id_430fae12_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UnitType_vue_vue_type_template_id_430fae12_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "430fae12",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/client/views/Project/ProjectTabs/UnitType.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/client/views/Project/ProjectTabs/UnitType.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./frontend/src/client/views/Project/ProjectTabs/UnitType.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UnitType_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UnitType.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/client/views/Project/ProjectTabs/UnitType.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UnitType_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/client/views/Project/ProjectTabs/UnitType.vue?vue&type=template&id=430fae12&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./frontend/src/client/views/Project/ProjectTabs/UnitType.vue?vue&type=template&id=430fae12&scoped=true& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UnitType_vue_vue_type_template_id_430fae12_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UnitType.vue?vue&type=template&id=430fae12&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/client/views/Project/ProjectTabs/UnitType.vue?vue&type=template&id=430fae12&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UnitType_vue_vue_type_template_id_430fae12_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UnitType_vue_vue_type_template_id_430fae12_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/client/views/Project/Setup/Index.vue":
/*!***********************************************************!*\
  !*** ./frontend/src/client/views/Project/Setup/Index.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_7a708ce2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=7a708ce2&scoped=true& */ "./frontend/src/client/views/Project/Setup/Index.vue?vue&type=template&id=7a708ce2&scoped=true&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./frontend/src/client/views/Project/Setup/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_7a708ce2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_7a708ce2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7a708ce2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/client/views/Project/Setup/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/client/views/Project/Setup/Index.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./frontend/src/client/views/Project/Setup/Index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/client/views/Project/Setup/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/client/views/Project/Setup/Index.vue?vue&type=template&id=7a708ce2&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./frontend/src/client/views/Project/Setup/Index.vue?vue&type=template&id=7a708ce2&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_7a708ce2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=7a708ce2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/client/views/Project/Setup/Index.vue?vue&type=template&id=7a708ce2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_7a708ce2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_7a708ce2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/components/Form/Error.vue":
/*!************************************************!*\
  !*** ./frontend/src/components/Form/Error.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Error_vue_vue_type_template_id_4496bcfc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Error.vue?vue&type=template&id=4496bcfc& */ "./frontend/src/components/Form/Error.vue?vue&type=template&id=4496bcfc&");
/* harmony import */ var _Error_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Error.vue?vue&type=script&lang=js& */ "./frontend/src/components/Form/Error.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Error_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Error_vue_vue_type_template_id_4496bcfc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Error_vue_vue_type_template_id_4496bcfc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/components/Form/Error.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/components/Form/Error.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./frontend/src/components/Form/Error.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Error_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Error.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/components/Form/Error.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Error_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/components/Form/Error.vue?vue&type=template&id=4496bcfc&":
/*!*******************************************************************************!*\
  !*** ./frontend/src/components/Form/Error.vue?vue&type=template&id=4496bcfc& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Error_vue_vue_type_template_id_4496bcfc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Error.vue?vue&type=template&id=4496bcfc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/components/Form/Error.vue?vue&type=template&id=4496bcfc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Error_vue_vue_type_template_id_4496bcfc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Error_vue_vue_type_template_id_4496bcfc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/client/views/Project/ProjectTabs/Building.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/client/views/Project/ProjectTabs/Building.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _core_mixins_ui_transition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/mixins/ui/transition */ "./frontend/src/@core/mixins/ui/transition.js");
/* harmony import */ var _libs_mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/libs/mixins */ "./frontend/src/libs/mixins.js");
/* harmony import */ var _libs_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/libs/api */ "./frontend/src/libs/api.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-ripple-directive */ "./frontend/node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue */ "./frontend/node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Form_Error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Form/Error */ "./frontend/src/components/Form/Error.vue");
/* harmony import */ var _components_Table_Panel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/Table/Panel */ "./frontend/src/components/Table/Panel.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'BuildingTab',
  components: {
    Panel: _components_Table_Panel__WEBPACK_IMPORTED_MODULE_7__["default"],
    Error: _components_Form_Error__WEBPACK_IMPORTED_MODULE_6__["default"],
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BForm"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormGroup"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormInput"],
    BModal: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BModal"],
    BTooltip: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BTooltip"],
    BFormTextarea: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormTextarea"]
  },
  directives: {
    'b-modal': bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["VBModal"],
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  mixins: [_core_mixins_ui_transition__WEBPACK_IMPORTED_MODULE_1__["heightTransition"], _libs_mixins__WEBPACK_IMPORTED_MODULE_2__["form"]],
  data: function data() {
    return {
      form: {
        title: null,
        project_id: this.$route.params.id
      },
      // show: false,
      store: "/api/buildings",
      method: 'POST',
      selectedModel: null,
      message: 'Project Buildings Added',
      title: 'Create',
      formModal: false,
      urlApi: "/api/buildings",
      additionalParams: {
        project_id: this.$route.params.id
      },
      columns: [{
        label: 'Name',
        field: 'title'
      }, {
        label: 'Action',
        field: 'action',
        action: true
      }]
    };
  },
  methods: {
    createForm: function createForm() {
      this.title = 'Create';
      this.store = '/api/buildings';
      this.message = 'Project Buildings Added';
      vue__WEBPACK_IMPORTED_MODULE_5___default.a.set(this.$data, 'formModal', true);
    },
    resetModal: function resetModal() {
      this.form = {
        title: null,
        description: null,
        project_id: this.$route.params.id
      };
      vue__WEBPACK_IMPORTED_MODULE_5___default.a.set(this.$data, 'selectedModel', null);
    },
    handleOk: function handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault(); // Trigger submit handler

      this.formSubmitted();
    },
    edit: function edit(item) {
      this.title = 'Edit';
      this.store = "/api/buildings/".concat(item.id, "?_method=PUT");
      this.message = 'Project Buildings Updated';
      this.setForm(item);
      vue__WEBPACK_IMPORTED_MODULE_5___default.a.set(this.$data, 'formModal', true);
    },
    formSubmitted: function formSubmitted() {
      var _this = this;

      this.submit(this.form, function (res) {
        vue__WEBPACK_IMPORTED_MODULE_5___default.a.set(_this.$data, 'formModal', false);

        _this.success();

        _this.$refs.panel.reload();
      });
    },
    setForm: function setForm(item) {
      vue__WEBPACK_IMPORTED_MODULE_5___default.a.set(this.$data, 'selectedModel', item);
      vue__WEBPACK_IMPORTED_MODULE_5___default.a.set(this.$data.form, 'id', item.id);
      vue__WEBPACK_IMPORTED_MODULE_5___default.a.set(this.$data.form, 'title', item.title);
      vue__WEBPACK_IMPORTED_MODULE_5___default.a.set(this.$data.form, 'description', item.description);
    },
    deleteUser: function deleteUser(id) {
      console.log("delete ".concat(id));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/client/views/Project/ProjectTabs/ExtraChargeType.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/client/views/Project/ProjectTabs/ExtraChargeType.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _core_mixins_ui_transition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/mixins/ui/transition */ "./frontend/src/@core/mixins/ui/transition.js");
/* harmony import */ var _libs_mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/libs/mixins */ "./frontend/src/libs/mixins.js");
/* harmony import */ var _libs_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/libs/api */ "./frontend/src/libs/api.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-ripple-directive */ "./frontend/node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue */ "./frontend/node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Form_Error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Form/Error */ "./frontend/src/components/Form/Error.vue");
/* harmony import */ var _components_Table_Panel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/Table/Panel */ "./frontend/src/components/Table/Panel.vue");
/* harmony import */ var _components_Form_TagInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/Form/TagInput */ "./frontend/src/components/Form/TagInput.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ExtraChargeTypeTab',
  components: {
    XTagInput: _components_Form_TagInput__WEBPACK_IMPORTED_MODULE_8__["default"],
    Panel: _components_Table_Panel__WEBPACK_IMPORTED_MODULE_7__["default"],
    Error: _components_Form_Error__WEBPACK_IMPORTED_MODULE_6__["default"],
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BForm"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormGroup"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormInput"],
    BModal: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BModal"],
    BTooltip: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BTooltip"],
    BFormTextarea: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormTextarea"]
  },
  directives: {
    'b-modal': bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["VBModal"],
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  mixins: [_core_mixins_ui_transition__WEBPACK_IMPORTED_MODULE_1__["heightTransition"], _libs_mixins__WEBPACK_IMPORTED_MODULE_2__["form"]],
  data: function data() {
    return {
      form: {
        title: null,
        charge_type: null,
        charge_type_id: null,
        project_id: this.$route.params.id
      },
      // show: false,
      store: "/api/project_charge_types",
      method: 'POST',
      selectedModel: null,
      message: 'Project Charge Added',
      title: 'Create',
      formModal: false,
      urlApi: "/api/project_charge_types",
      additionalParams: {
        project_id: this.$route.params.id
      },
      columns: [{
        label: 'Name',
        field: 'title'
      }, {
        label: 'Charge Type',
        field: 'title',
        displayText: 'charge_type'
      }, {
        label: 'Action',
        field: 'action',
        action: true
      }]
    };
  },
  methods: {
    createForm: function createForm() {
      this.title = 'Create';
      this.store = '/api/project_charge_types';
      this.message = 'Project Charge Added';
      vue__WEBPACK_IMPORTED_MODULE_5___default.a.set(this.$data, 'formModal', true);
    },
    resetModal: function resetModal() {
      this.form = {
        title: null,
        charge_type: null,
        charge_type_id: null,
        price: null,
        description: null,
        project_id: this.$route.params.id
      };
      vue__WEBPACK_IMPORTED_MODULE_5___default.a.set(this.$data, 'selectedModel', null);
    },
    handleOk: function handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault(); // Trigger submit handler

      this.formSubmitted();
    },
    edit: function edit(item) {
      this.title = 'Edit';
      this.store = "/api/project_charge_types/".concat(item.id, "?_method=PUT");
      this.message = 'Project Charge Updated';
      this.setForm(item);
      vue__WEBPACK_IMPORTED_MODULE_5___default.a.set(this.$data, 'formModal', true);
    },
    formSubmitted: function formSubmitted() {
      var _this = this;

      this.submit(this.form, function (res) {
        vue__WEBPACK_IMPORTED_MODULE_5___default.a.set(_this.$data, 'formModal', false);

        _this.success();

        _this.$refs.panel.reload();
      });
    },
    setForm: function setForm(item) {
      vue__WEBPACK_IMPORTED_MODULE_5___default.a.set(this.$data, 'selectedModel', item);
      vue__WEBPACK_IMPORTED_MODULE_5___default.a.set(this.$data.form, 'id', item.id);
      vue__WEBPACK_IMPORTED_MODULE_5___default.a.set(this.$data.form, 'title', item.title);
      vue__WEBPACK_IMPORTED_MODULE_5___default.a.set(this.$data.form, 'charge_type', item.charge_type);
      vue__WEBPACK_IMPORTED_MODULE_5___default.a.set(this.$data.form, 'charge_type_id', item.charge_type_id);
      vue__WEBPACK_IMPORTED_MODULE_5___default.a.set(this.$data.form, 'price', item.price);
      vue__WEBPACK_IMPORTED_MODULE_5___default.a.set(this.$data.form, 'description', item.description);
    },
    onChargeTypeUpdate: function onChargeTypeUpdate(e) {
      vue__WEBPACK_IMPORTED_MODULE_5___default.a.set(this.$data.form, 'charge_type', e);
      vue__WEBPACK_IMPORTED_MODULE_5___default.a.set(this.$data.form, 'charge_type_id', e.id);
    },
    deleteUser: function deleteUser(id) {
      console.log("delete ".concat(id));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/client/views/Project/ProjectTabs/UnitType.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/client/views/Project/ProjectTabs/UnitType.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _core_mixins_ui_transition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/mixins/ui/transition */ "./frontend/src/@core/mixins/ui/transition.js");
/* harmony import */ var _libs_mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/libs/mixins */ "./frontend/src/libs/mixins.js");
/* harmony import */ var _libs_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/libs/api */ "./frontend/src/libs/api.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-ripple-directive */ "./frontend/node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue */ "./frontend/node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Form_Error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Form/Error */ "./frontend/src/components/Form/Error.vue");
/* harmony import */ var _components_Table_Panel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/Table/Panel */ "./frontend/src/components/Table/Panel.vue");
/* harmony import */ var _components_Form_TagInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/Form/TagInput */ "./frontend/src/components/Form/TagInput.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ExtraChargeTypeTab',
  components: {
    XTagInput: _components_Form_TagInput__WEBPACK_IMPORTED_MODULE_8__["default"],
    Panel: _components_Table_Panel__WEBPACK_IMPORTED_MODULE_7__["default"],
    Error: _components_Form_Error__WEBPACK_IMPORTED_MODULE_6__["default"],
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BForm"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormGroup"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormInput"],
    BModal: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BModal"],
    BTooltip: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BTooltip"],
    BFormTextarea: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormTextarea"]
  },
  directives: {
    'b-modal': bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["VBModal"],
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  mixins: [_core_mixins_ui_transition__WEBPACK_IMPORTED_MODULE_1__["heightTransition"], _libs_mixins__WEBPACK_IMPORTED_MODULE_2__["form"]],
  data: function data() {
    return {
      form: {
        title: null,
        project_id: this.$route.params.id
      },
      // show: false,
      store: "/api/unit_types",
      method: 'POST',
      selectedModel: null,
      message: 'Project Unit Added',
      title: 'Create',
      formModal: false,
      urlApi: "/api/unit_types",
      additionalParams: {
        project_id: this.$route.params.id
      },
      columns: [{
        label: 'Name',
        field: 'title'
      }, {
        label: 'Base price',
        field: 'base_price'
      }, {
        label: 'Area',
        field: 'area'
      }, {
        label: 'Measurement Type',
        displayText: 'measurement_type',
        field: 'title'
      }, {
        label: 'Action',
        field: 'action',
        action: true
      }]
    };
  },
  methods: {
    createForm: function createForm() {
      this.title = 'Create';
      this.store = '/api/unit_types';
      this.message = 'Project Unit Added';
      vue__WEBPACK_IMPORTED_MODULE_5___default.a.set(this.$data, 'formModal', true);
    },
    resetModal: function resetModal() {
      this.form = {
        title: null,
        base_price: null,
        area: null,
        measurement_type: null,
        measurement_type_id: null,
        description: null,
        project_id: this.$route.params.id
      };
      vue__WEBPACK_IMPORTED_MODULE_5___default.a.set(this.$data, 'selectedModel', null);
    },
    handleOk: function handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault(); // Trigger submit handler

      this.formSubmitted();
    },
    edit: function edit(item) {
      this.title = 'Edit';
      this.store = "/api/unit_types/".concat(item.id, "?_method=PUT");
      this.message = 'Project Unit Updated';
      this.setForm(item);
      vue__WEBPACK_IMPORTED_MODULE_5___default.a.set(this.$data, 'formModal', true);
    },
    formSubmitted: function formSubmitted() {
      var _this = this;

      this.submit(this.form, function (res) {
        vue__WEBPACK_IMPORTED_MODULE_5___default.a.set(_this.$data, 'formModal', false);

        _this.success();

        _this.$refs.panel.reload();
      });
    },
    setForm: function setForm(item) {
      vue__WEBPACK_IMPORTED_MODULE_5___default.a.set(this.$data, 'selectedModel', item);
      vue__WEBPACK_IMPORTED_MODULE_5___default.a.set(this.$data.form, 'id', item.id);
      vue__WEBPACK_IMPORTED_MODULE_5___default.a.set(this.$data.form, 'title', item.title);
      vue__WEBPACK_IMPORTED_MODULE_5___default.a.set(this.$data.form, 'base_price', item.base_price);
      vue__WEBPACK_IMPORTED_MODULE_5___default.a.set(this.$data.form, 'area', item.area);
      vue__WEBPACK_IMPORTED_MODULE_5___default.a.set(this.$data.form, 'measurement_type', item.measurement_type);
      vue__WEBPACK_IMPORTED_MODULE_5___default.a.set(this.$data.form, 'measurement_type_id', item.measurement_type_id);
      vue__WEBPACK_IMPORTED_MODULE_5___default.a.set(this.$data.form, 'description', item.description);
    },
    onMeasurementTypeUpdate: function onMeasurementTypeUpdate(e) {
      vue__WEBPACK_IMPORTED_MODULE_5___default.a.set(this.$data.form, 'measurement_type', e);
      vue__WEBPACK_IMPORTED_MODULE_5___default.a.set(this.$data.form, 'measurement_type_id', e.id);
    },
    deleteUser: function deleteUser(id) {
      console.log("delete ".concat(id));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/client/views/Project/Setup/Index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/client/views/Project/Setup/Index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _client_views_Project_ProjectTabs_Building__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/client/views/Project/ProjectTabs/Building */ "./frontend/src/client/views/Project/ProjectTabs/Building.vue");
/* harmony import */ var _client_views_Project_ProjectTabs_ExtraChargeType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/client/views/Project/ProjectTabs/ExtraChargeType */ "./frontend/src/client/views/Project/ProjectTabs/ExtraChargeType.vue");
/* harmony import */ var _client_views_Project_ProjectTabs_UnitType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/client/views/Project/ProjectTabs/UnitType */ "./frontend/src/client/views/Project/ProjectTabs/UnitType.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    UnitTypeTab: _client_views_Project_ProjectTabs_UnitType__WEBPACK_IMPORTED_MODULE_3__["default"],
    ExtraChargeTypeTab: _client_views_Project_ProjectTabs_ExtraChargeType__WEBPACK_IMPORTED_MODULE_2__["default"],
    BuildingTab: _client_views_Project_ProjectTabs_Building__WEBPACK_IMPORTED_MODULE_1__["default"],
    BTabs: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BTabs"],
    BTab: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BTab"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardText"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"]
  },
  data: function data() {
    return {
      show: false,
      tab: [{
        show: true
      }, {
        show: false
      }, {
        show: false
      }]
    };
  },
  created: function created() {},
  methods: {
    changeTab: function changeTab(e) {
      for (var i = 0; i < this.tab.length; i++) {
        this.tab[i].show = false;
      }

      this.tab[e].show = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/components/Form/Error.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/components/Form/Error.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    error: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/client/views/Project/ProjectTabs/Building.vue?vue&type=template&id=2e703466&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/client/views/Project/ProjectTabs/Building.vue?vue&type=template&id=2e703466&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { cols: "12" } },
            [
              _c(
                "b-button",
                {
                  directives: [
                    {
                      name: "ripple",
                      rawName: "v-ripple.400",
                      value: "rgba(255, 255, 255, 0.15)",
                      expression: "'rgba(255, 255, 255, 0.15)'",
                      modifiers: { "400": true }
                    }
                  ],
                  staticClass: "mr-1 mb-1",
                  attrs: { type: "submit", variant: "primary", align: "right" },
                  on: { click: _vm.createForm }
                },
                [_vm._v("\n                Create\n            ")]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("panel", {
        ref: "panel",
        attrs: {
          "url-api": _vm.urlApi,
          columns: _vm.columns,
          "additional-params": _vm.additionalParams
        },
        scopedSlots: _vm._u([
          {
            key: "action",
            fn: function(props) {
              return _c(
                "div",
                { staticClass: "text-nowrap" },
                [
                  _c("feather-icon", {
                    staticClass: "cursor-pointer",
                    attrs: {
                      id: "building-row-" + props.item.id + "-edit-icon",
                      icon: "EditIcon",
                      size: "16"
                    },
                    on: {
                      click: function($event) {
                        return _vm.edit(props.item)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("b-tooltip", {
                    staticClass: "cursor-pointer",
                    attrs: {
                      target: "building-row-" + props.item.id + "-edit-icon",
                      title: "Edit Building"
                    }
                  })
                ],
                1
              )
            }
          }
        ])
      }),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            id: "modal-prevent-closing",
            title: _vm.title + " Building",
            "ok-title": "Save",
            "cancel-variant": "outline-secondary"
          },
          on: { hidden: _vm.resetModal, ok: _vm.handleOk },
          model: {
            value: _vm.formModal,
            callback: function($$v) {
              _vm.formModal = $$v
            },
            expression: "formModal"
          }
        },
        [
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { md: "12" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Title", "label-for": "title" } },
                    [
                      _c("b-form-input", {
                        attrs: {
                          id: "title",
                          type: "text",
                          placeholder: "Title"
                        },
                        model: {
                          value: _vm.form.title,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "title", $$v)
                          },
                          expression: "form.title"
                        }
                      }),
                      _vm._v(" "),
                      _c("error", { attrs: { error: _vm.error.title } })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "12" } },
                [
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        label: "Description",
                        "label-for": "description"
                      }
                    },
                    [
                      _c("b-form-textarea", {
                        attrs: {
                          id: "description",
                          type: "text",
                          placeholder: "Description"
                        },
                        model: {
                          value: _vm.form.description,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "description", $$v)
                          },
                          expression: "form.description"
                        }
                      }),
                      _vm._v(" "),
                      _c("error", { attrs: { error: _vm.error.description } })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/client/views/Project/ProjectTabs/ExtraChargeType.vue?vue&type=template&id=e9652396&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/client/views/Project/ProjectTabs/ExtraChargeType.vue?vue&type=template&id=e9652396&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { cols: "12" } },
            [
              _c(
                "b-button",
                {
                  directives: [
                    {
                      name: "ripple",
                      rawName: "v-ripple.400",
                      value: "rgba(255, 255, 255, 0.15)",
                      expression: "'rgba(255, 255, 255, 0.15)'",
                      modifiers: { "400": true }
                    }
                  ],
                  staticClass: "mr-1 mb-1",
                  attrs: { type: "submit", variant: "primary", align: "right" },
                  on: { click: _vm.createForm }
                },
                [_vm._v("\n                Create\n            ")]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("panel", {
        ref: "panel",
        attrs: {
          "url-api": _vm.urlApi,
          columns: _vm.columns,
          "additional-params": _vm.additionalParams
        },
        scopedSlots: _vm._u([
          {
            key: "action",
            fn: function(props) {
              return _c(
                "div",
                { staticClass: "text-nowrap" },
                [
                  _c("feather-icon", {
                    staticClass: "cursor-pointer",
                    attrs: {
                      id: "extra-charge-row-" + props.item.id + "-edit-icon",
                      icon: "EditIcon",
                      size: "16"
                    },
                    on: {
                      click: function($event) {
                        return _vm.edit(props.item)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("b-tooltip", {
                    staticClass: "cursor-pointer",
                    attrs: {
                      target:
                        "extra-charge-row-" + props.item.id + "-edit-icon",
                      title: "Edit Charge Type"
                    }
                  })
                ],
                1
              )
            }
          }
        ])
      }),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            id: "modal-prevent-closing",
            title: _vm.title + " Charge Type",
            "ok-title": "Save",
            "cancel-variant": "outline-secondary"
          },
          on: { hidden: _vm.resetModal, ok: _vm.handleOk },
          model: {
            value: _vm.formModal,
            callback: function($$v) {
              _vm.formModal = $$v
            },
            expression: "formModal"
          }
        },
        [
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { md: "6" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Title", "label-for": "title" } },
                    [
                      _c("b-form-input", {
                        attrs: {
                          id: "title",
                          type: "text",
                          placeholder: "Title"
                        },
                        model: {
                          value: _vm.form.title,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "title", $$v)
                          },
                          expression: "form.title"
                        }
                      }),
                      _vm._v(" "),
                      _c("error", { attrs: { error: _vm.error.title } })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "6" } },
                [
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        label: "Charge Type",
                        "label-for": "mc-charge-type-id"
                      }
                    },
                    [
                      _c("x-tag-input", {
                        attrs: {
                          resource: "/api/search/charge_types",
                          value: _vm.form.charge_type,
                          column: "title",
                          name: "title"
                        },
                        on: { input: _vm.onChargeTypeUpdate }
                      }),
                      _vm._v(" "),
                      _c("error", {
                        attrs: { error: _vm.error.measurement_type_id }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "12" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Price", "label-for": "price" } },
                    [
                      _c("b-form-input", {
                        attrs: {
                          id: "price",
                          type: "text",
                          placeholder: "Price"
                        },
                        model: {
                          value: _vm.form.price,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "price", $$v)
                          },
                          expression: "form.price"
                        }
                      }),
                      _vm._v(" "),
                      _c("error", { attrs: { error: _vm.error.price } })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "12" } },
                [
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        label: "Description",
                        "label-for": "description"
                      }
                    },
                    [
                      _c("b-form-textarea", {
                        attrs: {
                          id: "description",
                          type: "text",
                          placeholder: "Description"
                        },
                        model: {
                          value: _vm.form.description,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "description", $$v)
                          },
                          expression: "form.description"
                        }
                      }),
                      _vm._v(" "),
                      _c("error", { attrs: { error: _vm.error.description } })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/client/views/Project/ProjectTabs/UnitType.vue?vue&type=template&id=430fae12&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/client/views/Project/ProjectTabs/UnitType.vue?vue&type=template&id=430fae12&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { cols: "12" } },
            [
              _c(
                "b-button",
                {
                  directives: [
                    {
                      name: "ripple",
                      rawName: "v-ripple.400",
                      value: "rgba(255, 255, 255, 0.15)",
                      expression: "'rgba(255, 255, 255, 0.15)'",
                      modifiers: { "400": true }
                    }
                  ],
                  staticClass: "mr-1 mb-1",
                  attrs: { type: "submit", variant: "primary", align: "right" },
                  on: { click: _vm.createForm }
                },
                [_vm._v("\n                    Create\n                ")]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("panel", {
        ref: "panel",
        attrs: {
          "url-api": _vm.urlApi,
          columns: _vm.columns,
          "additional-params": _vm.additionalParams
        },
        scopedSlots: _vm._u([
          {
            key: "action",
            fn: function(props) {
              return _c(
                "div",
                { staticClass: "text-nowrap" },
                [
                  _c("feather-icon", {
                    staticClass: "cursor-pointer",
                    attrs: {
                      id: "unit-type-row-" + props.item.id + "-edit-icon",
                      icon: "EditIcon",
                      size: "16"
                    },
                    on: {
                      click: function($event) {
                        return _vm.edit(props.item)
                      }
                    }
                  })
                ],
                1
              )
            }
          }
        ])
      }),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            id: "modal-prevent-closing",
            title: _vm.title + " Unit Type",
            "ok-title": "Save",
            "cancel-variant": "outline-secondary"
          },
          on: { hidden: _vm.resetModal, ok: _vm.handleOk },
          model: {
            value: _vm.formModal,
            callback: function($$v) {
              _vm.formModal = $$v
            },
            expression: "formModal"
          }
        },
        [
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { md: "6" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Title", "label-for": "title" } },
                    [
                      _c("b-form-input", {
                        attrs: {
                          id: "title",
                          type: "text",
                          placeholder: "Title"
                        },
                        model: {
                          value: _vm.form.title,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "title", $$v)
                          },
                          expression: "form.title"
                        }
                      }),
                      _vm._v(" "),
                      _c("error", { attrs: { error: _vm.error.title } })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "6" } },
                [
                  _c(
                    "b-form-group",
                    {
                      attrs: { label: "Base Price", "label-for": "base-price" }
                    },
                    [
                      _c("b-form-input", {
                        attrs: {
                          id: "base-price",
                          type: "number",
                          placeholder: "Base Price"
                        },
                        model: {
                          value: _vm.form.base_price,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "base_price", $$v)
                          },
                          expression: "form.base_price"
                        }
                      }),
                      _vm._v(" "),
                      _c("error", { attrs: { error: _vm.error.base_price } })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "6" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Area", "label-for": "area" } },
                    [
                      _c("b-form-input", {
                        attrs: {
                          id: "area",
                          type: "number",
                          placeholder: "Area"
                        },
                        model: {
                          value: _vm.form.area,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "area", $$v)
                          },
                          expression: "form.area"
                        }
                      }),
                      _vm._v(" "),
                      _c("error", { attrs: { error: _vm.error.area } })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "6" } },
                [
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        label: "Measurement Type",
                        "label-for": "mc-measurement-type-id"
                      }
                    },
                    [
                      _c("x-tag-input", {
                        attrs: {
                          resource: "/api/search/measurement_types",
                          value: _vm.form.measurement_type,
                          column: "title",
                          name: "title"
                        },
                        on: { input: _vm.onMeasurementTypeUpdate }
                      }),
                      _vm._v(" "),
                      _c("error", {
                        attrs: { error: _vm.error.measurement_type_id }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "12" } },
                [
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        label: "Description",
                        "label-for": "description"
                      }
                    },
                    [
                      _c("b-form-textarea", {
                        attrs: {
                          id: "description",
                          type: "text",
                          placeholder: "Description"
                        },
                        model: {
                          value: _vm.form.description,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "description", $$v)
                          },
                          expression: "form.description"
                        }
                      }),
                      _vm._v(" "),
                      _c("error", { attrs: { error: _vm.error.description } })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/client/views/Project/Setup/Index.vue?vue&type=template&id=7a708ce2&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/client/views/Project/Setup/Index.vue?vue&type=template&id=7a708ce2&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "b-card",
        { attrs: { title: _vm.$route.meta.breadcrumb[0].text } },
        [
          _c(
            "b-tabs",
            { ref: "tab", on: { input: _vm.changeTab } },
            [
              _c(
                "b-tab",
                { attrs: { title: "Building/Blocks" } },
                [_vm.tab[0].show ? [_c("building-tab")] : _vm._e()],
                2
              ),
              _vm._v(" "),
              _c(
                "b-tab",
                { attrs: { title: "Unit Types" } },
                [_vm.tab[1].show ? [_c("unit-type-tab")] : _vm._e()],
                2
              ),
              _vm._v(" "),
              _c(
                "b-tab",
                { attrs: { title: "Charge Types" } },
                [_vm.tab[2].show ? [_c("extra-charge-type-tab")] : _vm._e()],
                2
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/components/Form/Error.vue?vue&type=template&id=4496bcfc&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/components/Form/Error.vue?vue&type=template&id=4496bcfc& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.error
    ? _c("small", { staticClass: "text-danger" }, [
        _vm._v(_vm._s(_vm.error[0]))
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);