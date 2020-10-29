"use strict";
var _a, _b;
exports.__esModule = true;
var styles_1 = require("@material-ui/core/styles");
var defaltStyle = styles_1.createMuiTheme({
    palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#ff4400'
        },
        secondary: {
            light: '#0066ff',
            main: '#0044ff',
            // dark: will be calculated from palette.secondary.main,
            contrastText: '#ffcc00'
        },
        // Used by `getContrastText()` to maximize the contrast between
        // the background and the text.
        contrastThreshold: 3,
        // Used by the functions below to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset: 0.2
    }
});
var darkStyle = styles_1.createMuiTheme({
    palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#000000'
        },
        secondary: {
            light: '#0066ff',
            main: '#0044ff',
            // dark: will be calculated from palette.secondary.main,
            contrastText: '#ffcc00'
        },
        // Used by `getContrastText()` to maximize the contrast between
        // the background and the text.
        contrastThreshold: 3,
        // Used by the functions below to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset: 0.2
    }
});
var themeCheck = true;
var theme = themeCheck ? defaltStyle : darkStyle;
theme.typography.h5 = (_a = {},
    _a[theme.breakpoints.down('sm')] = {
        fontSize: '0.9rem'
    },
    _a);
theme.typography.h6 = (_b = {},
    _b[theme.breakpoints.down('sm')] = {
        fontSize: '0.7rem'
    },
    _b);
exports["default"] = theme;
