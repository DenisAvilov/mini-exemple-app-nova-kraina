"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Avatar_1 = require("@material-ui/core/Avatar");
var Button_1 = require("@material-ui/core/Button");
var CssBaseline_1 = require("@material-ui/core/CssBaseline");
var TextField_1 = require("@material-ui/core/TextField");
var FormControlLabel_1 = require("@material-ui/core/FormControlLabel");
var Checkbox_1 = require("@material-ui/core/Checkbox");
var Link_1 = require("@material-ui/core/Link");
var Paper_1 = require("@material-ui/core/Paper");
var Box_1 = require("@material-ui/core/Box");
var Grid_1 = require("@material-ui/core/Grid");
var LockOutlined_1 = require("@material-ui/icons/LockOutlined");
var Typography_1 = require("@material-ui/core/Typography");
var styles_1 = require("@material-ui/core/styles");
var react_router_dom_1 = require("react-router-dom");
function Copyright() {
    return (react_1["default"].createElement(Typography_1["default"], { variant: "body2", color: "textSecondary", align: "center" },
        'Copyright © ',
        react_1["default"].createElement(Link_1["default"], { color: "inherit", href: "http://localhost:3000/" }, "Nova Ukraina"),
        ' ',
        new Date().getFullYear(),
        '.'));
}
var useStyles = styles_1.makeStyles(function (theme) { return ({
    root: {
        height: '100vh'
    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundColor: theme.palette.type === 'light'
            ? theme.palette.grey[50]
            : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    },
    extendedIcon: {
        marginRight: theme.spacing(1)
    }
}); });
function SignIn() {
    var classes = useStyles();
    return (react_1["default"].createElement(Grid_1["default"], { container: true, component: "main", className: classes.root },
        react_1["default"].createElement(CssBaseline_1["default"], null),
        react_1["default"].createElement(Grid_1["default"], { item: true, xs: false, sm: 4, md: 7, className: classes.image }),
        react_1["default"].createElement(Grid_1["default"], { item: true, xs: 12, sm: 8, md: 5, component: Paper_1["default"], elevation: 6, square: true },
            react_1["default"].createElement("div", { className: classes.paper },
                react_1["default"].createElement(Avatar_1["default"], { className: classes.avatar },
                    react_1["default"].createElement(LockOutlined_1["default"], null)),
                react_1["default"].createElement(Typography_1["default"], { component: "h1", variant: "h5" }, "\u0423\u0432\u0456\u0439\u0442\u0438"),
                react_1["default"].createElement("form", { className: classes.form, noValidate: true },
                    react_1["default"].createElement(TextField_1["default"], { variant: "outlined", margin: "normal", required: true, fullWidth: true, id: "email", label: "Email Address", name: "email", autoComplete: "email", autoFocus: true }),
                    react_1["default"].createElement(TextField_1["default"], { variant: "outlined", margin: "normal", required: true, fullWidth: true, name: "password", label: "Password", type: "password", id: "password", autoComplete: "current-password" }),
                    react_1["default"].createElement(FormControlLabel_1["default"], { control: react_1["default"].createElement(Checkbox_1["default"], { value: "remember", color: "primary" }), label: "\u0417\u0430\u043F\u0430\u043C'\u044F\u0442\u0430\u0442\u0438 \u043C\u0435\u043D\u0435" }),
                    react_1["default"].createElement(Button_1["default"], { type: "submit", fullWidth: true, variant: "contained", color: "primary", className: classes.submit }, "\u0423\u0432\u0456\u0439\u0442\u0438"),
                    react_1["default"].createElement(Grid_1["default"], { container: true },
                        react_1["default"].createElement(Grid_1["default"], { item: true, xs: true },
                            react_1["default"].createElement(Link_1["default"], { href: "#", variant: "body2" }, "\u0417\u0430\u0433\u0443\u0431\u0438\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C?")),
                        react_1["default"].createElement(Grid_1["default"], { item: true },
                            react_1["default"].createElement(react_router_dom_1.NavLink, { to: "/signup" }, 'Не маете аккаунту? Створити'))),
                    react_1["default"].createElement(Box_1["default"], { mt: 5 },
                        react_1["default"].createElement(Copyright, null)))))));
}
exports["default"] = SignIn;
