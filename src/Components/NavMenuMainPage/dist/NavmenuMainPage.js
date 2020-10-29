"use strict";
exports.__esModule = true;
var react_1 = require("react");
var styles_1 = require("@material-ui/core/styles");
var Paper_1 = require("@material-ui/core/Paper");
var Tabs_1 = require("@material-ui/core/Tabs");
var Tab_1 = require("@material-ui/core/Tab");
var useStyles = styles_1.makeStyles({
    root: {
        flexGrow: 1,
        position: 'fixed',
        zIndex: 9999999999999,
        top: 70,
        left: 30,
        right: 30,
        backgroundColor: '#4d383866'
    },
    tab: {
        color: '#ffffff'
    }
});
// type NavmenuMainPageTS = {fullpageApi: {}}
function NavmenuMainPage() {
    var classes = useStyles();
    var _a = react_1["default"].useState(0), value = _a[0], setValue = _a[1];
    var handleChange = function (event, newValue) {
        console.log(newValue);
        setValue(newValue);
    };
    return (value === 0 ? react_1["default"].createElement(react_1["default"].Fragment, null) :
        react_1["default"].createElement(Paper_1["default"], { className: classes.root },
            react_1["default"].createElement(Tabs_1["default"], { value: value, onChange: handleChange, indicatorColor: "secondary", textColor: "secondary", centered: true },
                react_1["default"].createElement(Tab_1["default"], { label: "\u041F\u043E\u0447\u0430\u0442\u043E\u043A", className: classes.tab }),
                react_1["default"].createElement(Tab_1["default"], { label: "\u042F\u043A \u043F\u0440\u0430\u0446\u044E\u0435", className: classes.tab }),
                react_1["default"].createElement(Tab_1["default"], { label: "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u043E", className: classes.tab }))));
}
exports["default"] = NavmenuMainPage;
