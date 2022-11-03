/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/burger.js":
/*!**********************************!*\
  !*** ./src/js/modules/burger.js ***!
  \**********************************/
/***/ (function(module) {

eval("module.exports = () => {\n    const burger = document.querySelector('.header__burger'),\n          burgerMenu = document.querySelector('.header__nav-mobile');\n          body = document.querySelector('body');\n\n    burger.addEventListener('click', () => {\n        burger.classList.toggle('active');\n        burgerMenu.classList.toggle('active');\n        body.classList.toggle('nonscroll');\n    });\n}\n\n//# sourceURL=webpack://my_pack/./src/js/modules/burger.js?");

/***/ }),

/***/ "./src/js/modules/dropdown.js":
/*!************************************!*\
  !*** ./src/js/modules/dropdown.js ***!
  \************************************/
/***/ (function(module) {

eval("module.exports = () => {\n    const toggleBtn = document.querySelector('.header__dropdown-toggle');\n    const dropdownMenu = document.querySelector('.header__dropdown-menu');\n    \n    function removeClass() {\n        dropdownMenu.classList.remove('active');\n        toggleBtn.classList.remove('active');\n    }\n    \n    toggleBtn.addEventListener('click', () => {\n        dropdownMenu.classList.toggle('active');\n        toggleBtn.classList.toggle('active');\n    });\n\n    document.addEventListener('click', e => {\n        if (e.target !== toggleBtn) {\n            removeClass();\n        }\n    });\n\n    document.addEventListener('keydown', e => {\n        if (e.key === 'Escape' || e.key === 'Tab') {\n            removeClass();\n        }\n    });\n}\n\n//# sourceURL=webpack://my_pack/./src/js/modules/dropdown.js?");

/***/ }),

/***/ "./src/js/modules/fade.js":
/*!********************************!*\
  !*** ./src/js/modules/fade.js ***!
  \********************************/
/***/ (function(module) {

eval("module.exports = () => {\n\n    const promoWrapper = document.querySelector('.promo__title');\n    const promoBtn = document.querySelector('.promo__btn');\n\n    setTimeout(() => {\n        promoWrapper.classList.add('active');\n    }, 500)\n    \n    setTimeout(() => {\n        promoBtn.classList.add('active');\n    }, 1000)\n    \n}\n\n//# sourceURL=webpack://my_pack/./src/js/modules/fade.js?");

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ (function(module) {

eval("module.exports = () => {\n \n    $('.services__slider ').slick({\n        slidesToShow: 4,\n        slidesToScroll: 1,\n        autoplay: true,\n        autoplaySpeed: 2000,\n        arrows: true,\n        responsive: [\n            {\n              breakpoint: 768,\n              settings: {\n                arrows: false,\n                slidesToShow: 3\n              }\n            },\n            {\n              breakpoint: 576,\n              settings: {\n                arrows: false,\n                slidesToShow: 1\n              }\n            }\n          ]\n    });\n    \n}\n\n//# sourceURL=webpack://my_pack/./src/js/modules/slider.js?");

/***/ }),

/***/ "./src/js/modules/soft-search.js":
/*!***************************************!*\
  !*** ./src/js/modules/soft-search.js ***!
  \***************************************/
/***/ (function(module) {

eval("module.exports =  $(document).ready(function() {    \n    $(\"body\").css(\"opacity\", \"1\");\n});\n\n\n//# sourceURL=webpack://my_pack/./src/js/modules/soft-search.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("document.addEventListener('DOMContentLoaded', () => {\n    const slider = __webpack_require__(/*! ./modules/slider.js */ \"./src/js/modules/slider.js\")();\n    const burger = __webpack_require__(/*! ./modules/burger.js */ \"./src/js/modules/burger.js\")();\n    // const map = require('./modules/map.js')();\n\n    const fade = __webpack_require__(/*! ./modules/fade.js */ \"./src/js/modules/fade.js\")();\n    const dropDown = __webpack_require__(/*! ./modules/dropdown.js */ \"./src/js/modules/dropdown.js\")();\n    })\n\n\n\n\nconst softSearch = __webpack_require__(/*! ./modules/soft-search.js */ \"./src/js/modules/soft-search.js\");\n\n//# sourceURL=webpack://my_pack/./src/js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/script.js");
/******/ 	
/******/ })()
;