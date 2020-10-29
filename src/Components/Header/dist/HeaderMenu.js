"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var clsx_1 = require("clsx");
var tezis1_jpg_1 = require("./../../img/tezis1.jpg");
var styles_1 = require("@material-ui/core/styles");
var Drawer_1 = require("@material-ui/core/Drawer");
var Button_1 = require("@material-ui/core/Button");
var List_1 = require("@material-ui/core/List");
var Divider_1 = require("@material-ui/core/Divider");
var ListItem_1 = require("@material-ui/core/ListItem");
var ListItemIcon_1 = require("@material-ui/core/ListItemIcon");
var ListItemText_1 = require("@material-ui/core/ListItemText");
var MoveToInbox_1 = require("@material-ui/icons/MoveToInbox");
var Mail_1 = require("@material-ui/icons/Mail");
var Menu_1 = require("@material-ui/icons/Menu");
var Grid_1 = require("@material-ui/core/Grid");
var react_router_dom_1 = require("react-router-dom");
// import theme from '../../themeStyles';
var core_1 = require("@material-ui/core");
var useStyles = styles_1.makeStyles(function (theme) {
    var _a;
    return styles_1.createStyles({
        root: (_a = {
                height: 60,
                padding: '10px 0',
                left: 0,
                position: 'absolute',
                top: 0,
                zIndex: 1000
            },
            _a[theme.breakpoints.down('lg')] = {
                padding: '0 10px'
            },
            _a),
        burgerElement: {
            '& > *': {
                marginLeft: theme.spacing(1)
            }
        },
        logo: __assign(__assign({}, theme.typography.button), { 'fontWeight': 'bold', 'color': 'rgb(68 7 7)', 'borderRadius': '2px', '&:hover': {
                transition: 'all 0.4s ease',
                color: 'rgb(247 244 244)',
                background: 'linear-gradient(45deg, #000000 50%, red 50%)'
            }, 'background': 'linear-gradient(45deg, #ffc61878 50%, #1878ff7a 50%)', 'padding': '10px 15px' }),
        list: {
            width: 250
        },
        fullList: {
            width: 'auto'
        },
        colorThem: {
            color: theme.palette.primary.main
        },
        listLink: {
            // color: 'green',
            color: theme.palette.primary.main
        }
    });
});
function HeaderMenu() {
    var classes = useStyles();
    var _a = react_1["default"].useState({
        right: false
    }), state = _a[0], setState = _a[1];
    var toggleDrawer = function (anchor, open) { return function (event) {
        var _a;
        if (event.type === 'keydown' &&
            (event.key === 'Tab' ||
                event.key === 'Shift')) {
            return;
        }
        setState(__assign(__assign({}, state), (_a = {}, _a[anchor] = open, _a)));
    }; };
    var list = function (anchor) { return (react_1["default"].createElement("div", { className: clsx_1["default"](classes.list), role: "presentation", onClick: toggleDrawer(anchor, false), onKeyDown: toggleDrawer(anchor, false) },
        react_1["default"].createElement(List_1["default"], null,
            react_1["default"].createElement(react_router_dom_1.NavLink, { to: "/signin", style: {
                    textDecoration: 'none'
                } },
                react_1["default"].createElement(ListItem_1["default"], { button: true },
                    react_1["default"].createElement(ListItemIcon_1["default"], null,
                        " ",
                        react_1["default"].createElement(MoveToInbox_1["default"], null),
                        "  "),
                    react_1["default"].createElement(ListItemText_1["default"], { secondary: "\u0412\u0445\u0456\u0434" }))),
            react_1["default"].createElement(react_router_dom_1.NavLink, { to: "/about", style: {
                    textDecoration: 'none'
                } },
                react_1["default"].createElement(ListItem_1["default"], { button: true },
                    react_1["default"].createElement(ListItemIcon_1["default"], null,
                        " ",
                        react_1["default"].createElement(Mail_1["default"], null),
                        " "),
                    react_1["default"].createElement(ListItemText_1["default"], { secondary: 'Про мене' })))),
        react_1["default"].createElement(Divider_1["default"], null),
        react_1["default"].createElement(core_1.CardMedia, { component: "img", alt: "Contemplative Reptile", height: "auto", image: "" + tezis1_jpg_1["default"], title: "Contemplative Reptile" }))); };
    return (react_1["default"].createElement(Grid_1["default"], { container: true, alignItems: 'center', className: classes.root },
        react_1["default"].createElement(Grid_1["default"], { item: true, sm: true, xs: true, container: true, alignItems: "center" },
            react_1["default"].createElement(Grid_1["default"], { item: true },
                react_1["default"].createElement(react_router_dom_1.NavLink, { className: classes.logo, to: "", activeStyle: {
                        textDecoration: 'none'
                    } }, 'Nova Kraїna'))),
        react_1["default"].createElement(Grid_1["default"], { item: true, sm: true, xs: true, container: true, justify: "flex-end", className: classes.burgerElement },
            react_1["default"].createElement(Button_1["default"], { onClick: toggleDrawer('right', true) },
                react_1["default"].createElement(Menu_1["default"], { className: classes.colorThem })),
            react_1["default"].createElement(Drawer_1["default"], { anchor: 'right', open: state['right'], onClose: toggleDrawer('right', false) }, list('right')))));
}
exports["default"] = HeaderMenu;
