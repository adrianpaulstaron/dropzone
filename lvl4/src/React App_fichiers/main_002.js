webpackHotUpdate("main",{

/***/ "./src/Dropzone.js":
/*!*************************!*\
  !*** ./src/Dropzone.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dropzone */ "./node_modules/react-dropzone/dist/es/index.js");
var _jsxFileName = "/Users/adrian/Desktop/frontend-jobs-master/lvl1/src/Dropzone.js";




function Dropzone() {
  const onDrop = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(acceptedFiles => {// Do something with the files
  }, []);

  const _useDropzone = Object(react_dropzone__WEBPACK_IMPORTED_MODULE_2__["useDropzone"])({
    onDrop
  }),
        getRootProps = _useDropzone.getRootProps,
        getInputProps = _useDropzone.getInputProps,
        isDragActive = _useDropzone.isDragActive;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", Object.assign({}, getRootProps(), {
    style: {
      height: 300,
      width: 500,
      backgroundColor: "#F5F5F5",
      color: "#333333"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", Object.assign({}, getInputProps(), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  })), isDragActive ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      margin: 230
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Drop the files here") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      marginTop: 230
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Drag and drop some files here, or click to select files"));
}

/* harmony default export */ __webpack_exports__["default"] = (Dropzone);

/***/ })

})
//# sourceMappingURL=main.8f0293477a85b8aec2f5.hot-update.js.map