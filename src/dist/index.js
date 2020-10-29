"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_dom_1 = require("react-dom");
require("./index.css");
var App_1 = require("./App");
var serviceWorker = require("./serviceWorker");
var react_router_dom_1 = require("react-router-dom");
var styles_1 = require("@material-ui/core/styles");
var themeStyles_1 = require("./themeStyles");
var optionalString = '//localhost:3000';
console.log(themeStyles_1["default"], ' theme');
react_dom_1["default"].render(react_1["default"].createElement(react_1["default"].StrictMode, null,
    react_1["default"].createElement(react_router_dom_1.BrowserRouter, { basename: optionalString },
        react_1["default"].createElement(styles_1.MuiThemeProvider, { theme: themeStyles_1["default"] },
            react_1["default"].createElement(App_1["default"], null)))), document.getElementById('root'));
serviceWorker.unregister();
