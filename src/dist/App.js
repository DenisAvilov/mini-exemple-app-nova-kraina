"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
var Container_1 = require("@material-ui/core/Container");
var BodyContainer_1 = require("./Components/Body/BodyContainer");
var styles_1 = require("@material-ui/core/styles");
var react_router_dom_1 = require("react-router-dom");
var HeaderContainer_1 = require("./Components/Header/HeaderContainer");
var LoginContainer_1 = require("./Components/LoginBase/LoginContainer");
var SignUp_1 = require("./Components/LoginBase/SignUp");
var useStyles = styles_1.makeStyles(function (theme) { return styles_1.createStyles({
    root: {
        position: 'relative'
    }
}); });
var App = function () {
    var classes = useStyles();
    return (react_1["default"].createElement("div", { className: classes.root },
        react_1["default"].createElement(react_router_dom_1.Switch, null,
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/signup", render: function () { return (react_1["default"].createElement(SignUp_1["default"], null)); } }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/signin", render: function () { return (react_1["default"].createElement(LoginContainer_1.LoginContainer, null)); } }),
            react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: "/", render: function () {
                    return react_1["default"].createElement(react_1["default"].Fragment, null,
                        react_1["default"].createElement(Container_1["default"], { maxWidth: "lg", className: classes.root },
                            react_1["default"].createElement(HeaderContainer_1.HeaderContainer, null)),
                        react_1["default"].createElement(BodyContainer_1.BodyContainer, null));
                } }))));
};
exports["default"] = App;
// type AppRouteTS = {}
// const AppRoute: React.FC<AppRouteTS> = () => {
// }
