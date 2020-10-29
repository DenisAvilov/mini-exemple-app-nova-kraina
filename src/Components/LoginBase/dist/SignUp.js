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
var Grid_1 = require("@material-ui/core/Grid");
var Box_1 = require("@material-ui/core/Box");
var LockOutlined_1 = require("@material-ui/icons/LockOutlined");
var Typography_1 = require("@material-ui/core/Typography");
var styles_1 = require("@material-ui/core/styles");
var Container_1 = require("@material-ui/core/Container");
function Copyright() {
    return (react_1["default"].createElement(Typography_1["default"], { variant: "body2", color: "textSecondary", align: "center" },
        'Copyright © ',
        react_1["default"].createElement(Link_1["default"], { color: "inherit", href: "https://www.facebook.com/avilovd.a" }, "Projektautor"),
        ' ',
        new Date().getFullYear(),
        '.'));
}
var useStyles = styles_1.makeStyles(function (theme) { return ({
    paper: {
        // marginTop: theme.spacing(8),
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
        marginTop: theme.spacing(3)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    },
    content: {
        paddingTop: theme.spacing(8)
    }
}); });
function SignUp() {
    var classes = useStyles();
    return (react_1["default"].createElement(Container_1["default"], { component: "main", maxWidth: "xs", className: classes.content },
        react_1["default"].createElement(CssBaseline_1["default"], null),
        react_1["default"].createElement("div", { className: classes.paper },
            react_1["default"].createElement(Avatar_1["default"], { className: classes.avatar },
                react_1["default"].createElement(LockOutlined_1["default"], null)),
            react_1["default"].createElement(Typography_1["default"], { component: "h1", variant: "h5" }, "\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0439\u0442\u0435\u0441\u044C"),
            react_1["default"].createElement("form", { className: classes.form, noValidate: true },
                react_1["default"].createElement(Grid_1["default"], { container: true, spacing: 2 },
                    react_1["default"].createElement(Grid_1["default"], { item: true, xs: 12, sm: 6 },
                        react_1["default"].createElement(TextField_1["default"], { autoComplete: "fname", name: "firstName", variant: "outlined", required: true, fullWidth: true, id: "firstName", label: "\u0406\u043C'\u044F", autoFocus: true })),
                    react_1["default"].createElement(Grid_1["default"], { item: true, xs: 12, sm: 6 },
                        react_1["default"].createElement(TextField_1["default"], { variant: "outlined", required: true, fullWidth: true, id: "lastName", label: "\u041F\u0440\u0456\u0437\u0432\u0438\u0449\u0435", name: "lastName", autoComplete: "lname" })),
                    react_1["default"].createElement(Grid_1["default"], { item: true, xs: 12 },
                        react_1["default"].createElement(TextField_1["default"], { variant: "outlined", required: true, fullWidth: true, id: "email", label: "\u041F\u043E\u0448\u0442\u0430", name: "email", autoComplete: "email" })),
                    react_1["default"].createElement(Grid_1["default"], { item: true, xs: 12 },
                        react_1["default"].createElement(TextField_1["default"], { variant: "outlined", required: true, fullWidth: true, name: "password", label: "\u041F\u0430\u0440\u043E\u043B\u044C", type: "password", id: "password", autoComplete: "current-password" })),
                    react_1["default"].createElement(Grid_1["default"], { item: true, xs: 12 },
                        react_1["default"].createElement(FormControlLabel_1["default"], { control: react_1["default"].createElement(Checkbox_1["default"], { value: "allowExtraEmails", color: "primary" }), label: "\u042F \u0445\u043E\u0447\u0443 \u043E\u0442\u0440\u0438\u043C\u0443\u0432\u0430\u0442\u0438 \u043D\u0430\u0442\u0445\u043D\u0435\u043D\u043D\u044F, \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u043E\u0432\u0456 \u0430\u043A\u0446\u0456\u0457 \u0442\u0430 \u043E\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u044E \u043F\u043E\u0448\u0442\u043E\u044E." }))),
                react_1["default"].createElement(Button_1["default"], { type: "submit", fullWidth: true, variant: "contained", color: "primary", className: classes.submit }, "\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044C"),
                react_1["default"].createElement(Grid_1["default"], { container: true, justify: "flex-end" },
                    react_1["default"].createElement(Grid_1["default"], { item: true },
                        react_1["default"].createElement(Link_1["default"], { href: "#", variant: "body2" }, "\u041C\u0430\u0454\u0442\u0435 \u0430\u043A\u0430\u0443\u043D\u0442? \u0423\u0432\u0456\u0439\u0442\u0438"))))),
        react_1["default"].createElement(Box_1["default"], { mt: 5 },
            react_1["default"].createElement(Copyright, null))));
}
exports["default"] = SignUp;
