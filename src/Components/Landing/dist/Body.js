"use strict";
exports.__esModule = true;
exports.Body = void 0;
var react_dom_1 = require("react-dom");
var react_fullpage_1 = require("@fullpage/react-fullpage");
require("./Body.css");
var learn_main_page_jpg_1 = require("./../../img/learn_main_page.jpg");
var unsplash_jpg_1 = require("./../../img/unsplash.jpg");
var fon2mini_jpg_1 = require("./../../img/fon2mini.jpg");
var voidOnline_png_1 = require("./../../img/voidOnline.png");
var media_jpg_1 = require("./../../img/media.jpg");
var survey_1_jpg_1 = require("./../../img/survey-1.jpg");
var finskiy_1280_jpg_1 = require("./../../img/finskiy_1280.jpg");
var field_jpg_1 = require("./../../img/field.jpg");
var ukraine_jpg_1 = require("./../../img/ukraine.jpg");
var fantasy_jpg_1 = require("./../../img/fantasy.jpg");
var pamatka_png_1 = require("./../../img/pamatka.png");
var handsome_png_1 = require("./../../img/handsome.png");
var road_jpg_1 = require("./../../img/road.jpg");
// import time from './../../img/time.mp4'
var schoolUkraine_jpg_1 = require("./../../img/schoolUkraine.jpg");
var styles_1 = require("@material-ui/core/styles");
var Container_1 = require("@material-ui/core/Container");
var Grid_1 = require("@material-ui/core/Grid");
var Paper_1 = require("@material-ui/core/Paper");
var CardMedia_1 = require("@material-ui/core/CardMedia");
var Typography_1 = require("@material-ui/core/Typography");
require("./LandingBody.css");
var react_1 = require("react");
var Fab_1 = require("@material-ui/core/Fab");
var ArrowDownward_1 = require("@material-ui/icons/ArrowDownward");
var ArrowForward_1 = require("@material-ui/icons/ArrowForward");
var titleFonts = 'Yeseva One , cursive';
var titleDopus = 'Caveat, cursive';
var useStyles = styles_1.makeStyles(function (theme) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    return styles_1.createStyles({ margin: {
            // margin: theme.spacing(1),
            // transform: 'translate(-50%, -50%)',
            // left: '48%',
            // right: '50%',
            // top: '30%',
            zIndex: 3333
        },
        extendedIcon: {
        // marginRight: theme.spacing(1),
        },
        img: {
            'backgroundSize': 'cover',
            'backgroundPosition': 'center',
            'backgroundRepeat': 'no-repeat',
            'position': 'relative',
            '&:after': {
                position: 'absolute',
                content: 'close-quote',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                zIndex: 999
            }
        }, titleFonts: (_a = {
                fontFamily: titleFonts,
                fontSize: '77px',
                fontWeight: 700,
                letterSpacing: '3px',
                color: '#2063a7',
                textShadow: '1px 1px 2px white'
            },
            _a[theme.breakpoints.down('sm')] = {
                fontSize: '30px'
            },
            _a),
        titleDopus: (_b = {
                fontFamily: titleDopus,
                color: 'white',
                fontSize: '35px',
                textShadow: '1px 1px 2px black'
            },
            _b[theme.breakpoints.down('sm')] = {
                fontSize: '20px'
            },
            _b),
        img1: {
            backgroundImage: "url(" + learn_main_page_jpg_1["default"] + ")"
        },
        field: {
            backgroundImage: "url(" + field_jpg_1["default"] + ")"
        },
        ukraine: {
            backgroundImage: "url(" + ukraine_jpg_1["default"] + ")"
        },
        fantasy: {
            backgroundImage: "url(" + fantasy_jpg_1["default"] + ")"
        },
        imgMedia: {
            backgroundImage: "url(" + media_jpg_1["default"] + ")"
        },
        handsome: {
            backgroundImage: "url(" + handsome_png_1["default"] + ")"
        },
        img2: {
            backgroundImage: "url(" + unsplash_jpg_1["default"] + ")"
        },
        img3: {
            backgroundImage: "url(" + fon2mini_jpg_1["default"] + ")"
        },
        road: {
            backgroundImage: "url(" + road_jpg_1["default"] + ")"
        },
        pamatka: {
            backgroundImage: "url(" + pamatka_png_1["default"] + ")"
        },
        finskiy: { backgroundImage: "url(" + finskiy_1280_jpg_1["default"] + ")" },
        survey: {
            backgroundImage: "url(" + survey_1_jpg_1["default"] + ")"
        },
        schoolUkraine: {
            backgroundImage: "url(" + schoolUkraine_jpg_1["default"] + ")"
        },
        paper: (_c = {
                'backgroundColor': 'rgba(255,255,255,  0.6)',
                'padding': '15px 10px'
            },
            _c[theme.breakpoints.up('md')] = {
                fontSize: '1.7rem'
            },
            _c['& a'] = (_d = {
                    textDecoration: 'none',
                    marginBottom: '10px'
                },
                _d[theme.breakpoints.up('sm')] = {
                    marginLeft: '10px'
                },
                _d),
            _c['& a:hover'] = {
                color: theme.palette.primary.main
            },
            _c),
        myTypography: (_e = {
                fontWeight: theme.typography.fontWeightBold,
                textShadow: '1px 1px 1px black',
                fontSize: '1.2rem',
                color: '#cecece'
            },
            _e[theme.breakpoints.up('md')] = {
                fontSize: '2.2rem'
            },
            _e),
        titleFontsBr: (_f = {},
            _f[theme.breakpoints.down('sm')] = {
                display: 'none'
            },
            _f),
        wrapLogo: (_g = {
                height: '100vh'
            },
            _g[theme.breakpoints.down('sm')] = {
                alignContent: 'space-around'
            },
            _g[theme.breakpoints.up('sm')] = {
                '& .MuiFab-label': {
                    fontSize: 'medium'
                }
            },
            _g), logo: {
            flexDirection: 'column',
            alignSelf: 'center',
            alignContent: 'center'
        },
        logoDiscription: {
            alignSelf: 'center'
        },
        secondSlide: {
            marginBottom: '10px'
        }, slidePravo: (_h = {
                alignContent: 'center',
                display: 'flex',
                justifyContent: 'center'
            },
            _h[theme.breakpoints.down('sm')] = {
                maxHeight: '555px'
            },
            _h), slidePravoFirst: {
            justifyContent: 'center',
            height: '100vh',
            top: '20px'
        },
        media: {
            height: 0,
            paddingTop: '60.25%',
            backgroundSize: 'contain'
        },
        clearFloat: {
            float: 'none',
            display: 'table'
        },
        overflow: {
            position: 'absolute',
            content: 'close-quote',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            zIndex: 999
        },
        typographySpan: {
            fontSize: '20px',
            marginRight: '10px'
        },
        test: {
            COLOR: 'aliceblue',
            fontSize: '4rem',
            fontWeight: 500
        },
        vuvchenaPravoSlide2: {
            height: '100vh',
            alignContent: 'space-around'
        }, a: (_j = {
                textDecoration: 'none',
                marginBottom: '10px'
            },
            _j[theme.breakpoints.up('sm')] = {
                marginLeft: '10px'
            },
            _j), pamatkaStyle: {
            maxWidth: '800px'
        } });
});
exports.Body = function () {
    var classes = useStyles();
    var anchors = ['novaKraina', 'vladaBezposeredno', 'vivchennyaPrava', 'potribenRozgolos'];
    return (react_1["default"].createElement(react_fullpage_1["default"]
    // fullpage options
    , { 
        // fullpage options
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE', scrollingSpeed: 1000, scrollHorizontally: true, scrollHorizontallyKey: 'YOUR KEY HERE', continuousHorizontal: true, navigation: true, slidesNavigation: true, 
        // fitToSection = {true}
        // paddingTop = {'200px'}
        loopHorizontal: false, scrollBar: true, anchors: anchors, 
        // continuousHorizontal = {true}
        render: function (_a) {
            var state = _a.state, fullpageApi = _a.fullpageApi;
            return (react_1["default"].createElement(react_fullpage_1["default"].Wrapper, null,
                react_1["default"].createElement("div", { className: "section mySectionTest" },
                    react_1["default"].createElement("div", { className: "slide " + classes.img + " " + classes.img2 + " ", "data-anchor": "slide1" },
                        react_1["default"].createElement(Container_1["default"], { maxWidth: "lg" },
                            react_1["default"].createElement(Grid_1["default"], { container: true, item: true, xs: 12, className: classes.wrapLogo },
                                react_1["default"].createElement(Grid_1["default"], { container: true, item: true, xs: 12, sm: 6, className: classes.logo },
                                    react_1["default"].createElement(Typography_1["default"], { className: classes.titleFonts },
                                        "NOVA",
                                        react_1["default"].createElement("br", { className: classes.titleFontsBr }),
                                        " UKRA\u0407N\u0410"),
                                    react_1["default"].createElement(Typography_1["default"], { className: classes.titleDopus }, "\u041F\u0440\u0438\u0439\u0448\u043E\u0432 \u0447\u0430\u0441 \u0440\u043E\u0437\u0441\u0442\u0430\u0432\u0438\u0442\u0438 \u043A\u0440\u0430\u043F\u043A\u0438 \u043D\u0430\u0434 \u0407")),
                                react_1["default"].createElement(Grid_1["default"], { container: true, item: true, xs: 12, sm: 6, className: classes.logoDiscription },
                                    react_1["default"].createElement(Typography_1["default"], { variant: 'button', component: "h2", className: classes.myTypography, align: 'center' },
                                        "\u0420\u043E\u0437\u0431\u0443\u0434\u043E\u0432\u0430 \u043F\u0440\u043E\u0454\u043A\u0442\u0443 \u0441\u043E\u0446\u0456\u0430\u043B\u044C\u043D\u043E\u0457 \u043C\u0435\u0440\u0435\u0436\u0456 \u0442\u0435\u0440\u0438\u0442\u043E\u0440\u0456\u0430\u043B\u044C\u043D\u0438\u0445 \u0433\u0440\u043E\u043C\u0430\u0434 \u0423\u043A\u0440\u0430\u0457\u043D\u0438",
                                        react_1["default"].createElement("br", null),
                                        "\u044F\u043A\u0443 \u043C\u0438 \u043F\u043E\u0432\u0438\u043D\u043D\u0456 \u0441\u0442\u0432\u043E\u0440\u0438\u0442\u0438 \u0432\u043B\u0430\u0441\u043D\u043E\u0440\u0443\u0447")),
                                react_1["default"].createElement(Grid_1["default"], { container: true, item: true, xs: 12, sm: 12, justify: 'center' },
                                    react_1["default"].createElement(Fab_1["default"], { variant: "extended", color: "primary", "aria-label": "add", className: classes.margin, onClick: function () {
                                            fullpageApi.moveSectionDown();
                                        } },
                                        react_1["default"].createElement(ArrowDownward_1["default"], { className: classes.extendedIcon }),
                                        "\u044F\u043A\u0438\u0439 \u043F\u0435\u0440\u0435\u043B\u0456\u043A \u0444\u0443\u043D\u043A\u0446\u0456\u0457?")))))),
                react_1["default"].createElement("div", { className: "section " },
                    react_1["default"].createElement("div", { className: "slide " + classes.img + " " + classes.img3, "data-anchor": "slide1" },
                        react_1["default"].createElement(Container_1["default"], { maxWidth: "lg" },
                            react_1["default"].createElement(Typography_1["default"], { variant: "h1", align: 'center', className: classes.titleFonts + " " + classes.secondSlide },
                                "\u0417\u0434\u0456\u0439\u0441\u043D\u044E\u0432\u0430\u0442\u0438 \u0432\u043B\u0430\u0434\u0443 ",
                                react_1["default"].createElement("br", { className: classes.titleFontsBr }),
                                " \u0431\u0435\u0437\u043F\u043E\u0441\u0435\u0440\u0435\u0434\u043D\u044C\u043E"),
                            react_1["default"].createElement(Grid_1["default"], { container: true, spacing: 3 },
                                react_1["default"].createElement(Grid_1["default"], { item: true, xs: 12, sm: 6 },
                                    react_1["default"].createElement(CardMedia_1["default"], { className: classes.media, image: voidOnline_png_1["default"], title: "Void online" })),
                                react_1["default"].createElement(Grid_1["default"], { container: true, item: true, xs: 12, sm: 6, justify: 'center', direction: 'column' },
                                    react_1["default"].createElement(Typography_1["default"], { variant: 'button', component: "h2", className: classes.myTypography, align: 'center' },
                                        "\u041F\u0440\u0438\u0439\u043D\u044F\u0442\u0442\u044F \u0440\u0456\u0448\u0435\u043D\u044C \u0442\u0435\u0440\u0438\u0442\u043E\u0440\u0456\u0430\u043B\u044C\u043D\u0438\u0445 \u0433\u0440\u043E\u043C\u0430\u0434,",
                                        react_1["default"].createElement("br", null),
                                        "\u0447\u0435\u0440\u0435\u0437 \u0433\u043E\u043B\u043E\u0441\u0443\u0432\u0430\u043D\u043D\u044F ONLINE")),
                                react_1["default"].createElement(Grid_1["default"], { container: true, item: true, xs: 12, sm: 12, justify: 'space-around' },
                                    react_1["default"].createElement(Fab_1["default"], { variant: "extended", color: "primary", "aria-label": "add", className: classes.margin, onClick: function () {
                                            fullpageApi.moveSectionDown();
                                        } },
                                        react_1["default"].createElement(ArrowDownward_1["default"], { className: classes.extendedIcon }),
                                        "\u0414\u0430\u043B\u0456"),
                                    react_1["default"].createElement(Fab_1["default"], { variant: "extended", color: "primary", "aria-label": "add", className: classes.margin, onClick: function () {
                                            fullpageApi.moveSlideRight();
                                        } },
                                        react_1["default"].createElement(ArrowForward_1["default"], { className: classes.extendedIcon }),
                                        "\u0434\u0435\u0442\u0430\u043B\u044C\u043D\u043E"))))),
                    react_1["default"].createElement("div", { className: "slide " + classes.img + " " + classes.imgMedia + " ", "data-anchor": "slide2" },
                        react_1["default"].createElement(Container_1["default"], null,
                            react_1["default"].createElement(Grid_1["default"], { container: true, spacing: 3, className: classes.vuvchenaPravoSlide2 },
                                react_1["default"].createElement(Grid_1["default"], { container: true, item: true, xs: 12, sm: 12, justify: 'center' },
                                    react_1["default"].createElement(Paper_1["default"], { className: classes.paper },
                                        react_1["default"].createElement(Typography_1["default"], { variant: "h5", align: 'center' },
                                            "\u0416\u043E\u0434\u043D\u0430 \u0441\u043E\u0446\u0456\u0430\u043B\u044C\u043D\u0430 \u043C\u0435\u0440\u0435\u0436\u0430 \u043D\u0435 \u0437\u0434\u0430\u0442\u043D\u0430 \u0431\u0443\u0442\u0438 \u0433\u0430\u0440\u0430\u043D\u0442\u043E\u043C \u043F\u0440\u043E\u0437\u043E\u0440\u0438\u0445 \u0432\u0438\u0431\u043E\u0440\u0456\u0432, \u0430 \u043D\u0456 \u043D\u0430 \u0440\u0456\u0432\u043D\u0456 \u0416\u041A\u0413, \u0442\u0430 \u043D\u0430 \u0436\u043E\u0434\u043D\u043E\u043C\u0443 \u0456\u043D\u0448\u043E\u043C\u0443 \u0440\u0456\u0432\u043D\u0456. \u0410\u043B\u0435 \u043D\u0430\u0446\u0456\u043E\u043D\u0430\u043B\u044C\u043D\u0430 \u043D\u0435\u043F\u0440\u043E\u0432\u043B\u0430\u0434\u043D\u0430 \u043C\u0435\u0440\u0435\u0436\u0430 \u043D\u0430 \u0442\u0430\u043A\u0435 \u043C\u043E\u0436\u0435 \u0431\u0443\u0442\u0438 \u0437\u0434\u0430\u0442\u043D\u0430.",
                                            react_1["default"].createElement("br", null),
                                            "  ",
                                            react_1["default"].createElement("br", null),
                                            "\u041C\u0435\u0440\u0435\u0436\u0430 \u043F\u043E\u0432\u0438\u043D\u043D\u0430 \u043E\u0431'\u0454\u0434\u043D\u0430\u0442\u0438 \u043B\u044E\u0434\u0435\u0439 \u044F\u043A\u0456 \u043F\u0440\u043E\u0436\u0438\u0432\u0430\u044E\u0442\u044C, \u0437\u0430 \u043F\u043E\u0441\u0442\u0456\u0439\u043D\u0438\u043C \u043C\u0456\u0441\u0446\u0435\u043C \u043F\u0440\u043E\u0436\u0438\u0432\u0430\u043D\u043D\u044F, \u0442\u0430 \u043D\u0430\u0434\u0430\u0442\u0438 \u0457\u043C \u043C\u043E\u0436\u043B\u0438\u0432\u0456\u0441\u0442\u044C \u043A\u0435\u0440\u0443\u0432\u0430\u0442\u0438 \u0446\u0438\u043C \u043C\u0430\u0439\u043D\u043E\u043C, \u0442\u0430 \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0438\u0442\u0438 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C \u043D\u0430\u0434 \u0447\u0438\u043D\u043E\u0432\u043D\u0438\u043A\u0430\u043C\u0438.",
                                            react_1["default"].createElement("br", null),
                                            "  ",
                                            react_1["default"].createElement("br", null),
                                            "\u041D\u0430 \u044F\u043A\u0438\u0445 \u0440\u0456\u0432\u043D\u044F\u0445 \u0436\u0438\u0442\u0442\u044F, \u043C\u043E\u0436\u0435 \u0431\u0443\u0442\u0438 \u043A\u043E\u0440\u0438\u0441\u043D\u0430 \u0446\u044F \u043C\u0435\u0440\u0435\u0436\u0430?"))),
                                react_1["default"].createElement(Grid_1["default"], { container: true, item: true, xs: 12, sm: 12, justify: 'center' },
                                    react_1["default"].createElement(Fab_1["default"], { variant: "extended", color: "primary", "aria-label": "add", className: classes.margin, onClick: function () {
                                            fullpageApi.moveSlideRight();
                                        } },
                                        react_1["default"].createElement(ArrowForward_1["default"], { className: classes.extendedIcon }),
                                        "\u0414\u0456\u0437\u043D\u0430\u0442\u0438\u0441\u044C"))))),
                    react_1["default"].createElement("div", { className: "slide " + classes.img + " " + classes.ukraine + " ", "data-anchor": "slide2" },
                        react_1["default"].createElement(Container_1["default"], null,
                            react_1["default"].createElement(Grid_1["default"], { container: true, spacing: 3 },
                                react_1["default"].createElement(Grid_1["default"], { container: true, item: true, xs: 12, sm: 12, justify: 'center' },
                                    react_1["default"].createElement(Paper_1["default"], { className: classes.paper },
                                        react_1["default"].createElement(Typography_1["default"], { variant: "h5", align: 'left' },
                                            "\u0421\u043F\u0440\u043E\u0449\u0443\u0454 \u0437\u0431\u043E\u0440\u0438 \u0433\u0440\u043E\u043C\u0430\u0434\u0438 \u0443 \u0433\u043E\u0440\u043E\u0434\u0456, \u0441\u0435\u043B\u0456, \u0447\u0438 \u0441\u0435\u043B\u0438\u0449\u0456.",
                                            react_1["default"].createElement("br", null),
                                            "\u041D\u0435 \u043E\u0431\u043E\u0432'\u044F\u0437\u043A\u043E\u0432\u043E \u0437\u0431\u0438\u0440\u0430\u0442\u0438\u0441\u044C \u043D\u0430 \u0432\u0443\u043B\u0438\u0446\u0456.",
                                            react_1["default"].createElement("br", null),
                                            "\u0413\u043E\u043B\u043E\u0441\u0443\u0432\u0430\u0442\u0438 \u043C\u043E\u0436\u043D\u0430 24/7 \u043E\u043D\u043B\u0430\u0439\u043D.",
                                            react_1["default"].createElement("br", null),
                                            "\u0421\u043F\u0440\u043E\u0449\u0443\u0454 \u0437\u0431\u043E\u0440\u0438 \u0433\u0440\u043E\u043C\u0430\u0434\u0438 \u0443 \u0434\u0438\u0442\u044F\u0447\u0438\u0445 \u0441\u0430\u0434\u043E\u0447\u043A\u0430\u0445, \u0448\u043A\u0456\u043B\u043A\u0430\u0445 \u0430\u0431\u043E \u0456\u043D\u0448\u0438\u0445 \u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u0438\u0445 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0430\u0445, \u044F\u043A\u0456 \u0454 \u0432\u043B\u0430\u0441\u043D\u0456\u0441\u0442\u044E \u0433\u0440\u043E\u043C\u0430\u0434\u0438, \u0434\u043E\u043F\u043E\u043C\u0430\u0433\u0430\u0454 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044E\u0432\u0430\u0442\u0438 \u043D\u0430\u0434\u0445\u043E\u0434\u0436\u0435\u043D\u043D\u044F \u0442\u0430 \u0440\u043E\u0437\u043F\u043E\u0434\u0456\u043B \u0433\u0440\u043E\u0448\u0435\u0432\u0438\u0445 \u043E\u0434\u0438\u043D\u0438\u0446\u044C.",
                                            react_1["default"].createElement("br", null),
                                            "\u0421\u043F\u0456\u0432\u043F\u0440\u0430\u0446\u044F \u0437 \u043A\u043E\u043C\u0443\u043D\u0430\u043B\u044C\u043D\u0438\u043C\u0438 \u043F\u0440\u0438\u0434\u043F\u0440\u0456\u044F\u0442\u0456\u044F\u043C\u0438 \u044F\u043A \u0432\u043B\u0430\u0441\u043D\u0438\u043A \u043D\u0435 \u044F\u043A \u0441\u043F\u043E\u0436\u0438\u0432\u0430\u0447. \u041D\u0430\u043F\u0440\u0438\u043A\u043B\u0430\u0434: \u0423\u043A\u0440\u0433\u0430\u0437 \u0442\u043E\u0449\u043E. ",
                                            react_1["default"].createElement("br", null),
                                            "\u041C\u0435\u0440\u0435\u0436\u0430 \u043C\u0430\u0454 \u043D\u0430\u0434\u0430\u0442\u0438 \u043C\u043E\u0436\u043B\u0438\u0432\u0456\u0441\u0442\u044C \u043C\u0430\u0442\u0438 \u043F\u0440\u043E\u0437\u043E\u0440\u0438\u0439 \u0440\u0435\u0439\u0442\u0438\u043D\u0433 \u0447\u0438\u043D\u043E\u0432\u043D\u0438\u043A\u0456\u0432 \u0443\u0441\u0456\u0445 \u0440\u0456\u0432\u043D\u0456\u0432 \u0432\u0441\u0456\u0445 \u0440\u0435\u0433\u0456\u043E\u043D\u0456\u0432.",
                                            react_1["default"].createElement("br", null),
                                            "\u0442\u0430 \u044F\u043A\u0449\u043E \u0440\u0435\u0439\u0442\u0438\u043D\u0433 \u043D\u0430 \u043A\u0440\u0430\u0441\u043D\u0456\u0439 \u043B\u0456\u043D\u0456\u0457, \u0442\u043E \u0432\u0438\u0431\u043E\u0440\u0438 \u043C\u043E\u0436\u0443\u0442\u044C \u043F\u043E\u0447\u0430\u0442\u0438\u0441\u044C \u0443 \u0430\u0432\u0442\u043E\u043C\u043E\u0442\u0438\u0447\u043D\u043E\u043C\u0443 \u0440\u0435\u0436\u0438\u043C\u0456.",
                                            react_1["default"].createElement("br", null),
                                            react_1["default"].createElement("br", null),
                                            "\u041D\u0430 \u0440\u0435\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u044E \u043F\u043E\u0442\u0440\u0456\u0431\u0435\u043D \u0447\u0430\u0441. \u0426\u0435 \u043C\u043E\u0436\u043D\u0430 \u0437\u0440\u043E\u0431\u0438\u0442\u0438 \u043E\u0431'\u0454\u0434\u043D\u0430\u0432\u0448\u0438 \u0437\u0443\u0441\u0438\u043B\u043B\u044F!"))),
                                react_1["default"].createElement(Grid_1["default"], { container: true, item: true, xs: 12, sm: 12, justify: 'center' },
                                    react_1["default"].createElement(Fab_1["default"], { variant: "extended", color: "primary", "aria-label": "add", className: classes.margin, onClick: function () {
                                            fullpageApi.moveSlideRight();
                                        } },
                                        react_1["default"].createElement(ArrowForward_1["default"], { className: classes.extendedIcon }),
                                        "\u0447\u043E\u043C\u0443 \u0446\u0435 \u043D\u0435 \u0437\u0440\u043E\u0431\u0438\u0442\u044C \u0447\u0438\u043D\u043D\u0430 \"\u0432\u043B\u0430\u0434\u0430\"?"))))),
                    react_1["default"].createElement("div", { className: "slide " + classes.img + " " + classes.handsome + " ", "data-anchor": "slide2" },
                        react_1["default"].createElement(Container_1["default"], null,
                            react_1["default"].createElement(Grid_1["default"], { container: true, spacing: 3 },
                                react_1["default"].createElement(Grid_1["default"], { container: true, item: true, xs: 12, sm: 12, justify: 'center' },
                                    react_1["default"].createElement(Paper_1["default"], { className: classes.paper },
                                        react_1["default"].createElement(Typography_1["default"], { variant: "h5", align: 'center' },
                                            "\u041D\u0430\u044F\u0432\u043D\u0430 \"\u0432\u043B\u0430\u0434\u0430\" \u0441\u0442\u0432\u043E\u0440\u044E\u0454 \u0441\u0435\u0440\u0432\u0456\u0441\u0438 \u043A\u043E\u0442\u0440\u0456 \u0434\u043E\u043F\u043E\u043C\u0430\u0433\u0430\u044E\u0442\u044C \u043F\u043B\u0430\u0442\u0438\u0442\u0438 \u0437\u0430 \u0440\u0430\u0445\u0443\u043D\u043A\u0430\u043C\u0438. \u0412\u043E\u043D\u0438 \u0436\u043E\u0434\u043D\u0438\u043C \u0447\u0438\u043D\u043E\u043C \u043D\u0435 \u0434\u043E\u043F\u043E\u043C\u0430\u0433\u0430\u044E\u0442\u044C \u0433\u0440\u043E\u043C\u0430\u0434\u044F\u043D\u0430\u043C \u0437\u0434\u0456\u0439\u0441\u043D\u044E\u0432\u0430\u0442\u0438 \u0432\u043B\u0430\u0434\u0443, \u0442\u0430 \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0442\u0438\u0441\u044C \u0441\u0432\u043E\u0457\u043C\u0438 \u043A\u043E\u043D\u0441\u0442\u0438\u0442\u0443\u0446\u0456\u0439\u043D\u0438\u043C\u0438 \u043F\u0440\u0430\u0432\u0430\u043C\u0438 ",
                                            react_1["default"].createElement("br", null),
                                            " ",
                                            react_1["default"].createElement("br", null),
                                            "\"\u0432\u043B\u0430\u0434\u0430\" \u0440\u043E\u0431\u0438\u0442\u044C \u0432\u0441\u0435 \u0449\u043E\u0431 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044E\u0432\u0430\u0442\u0438, \u0430 \u043D\u0435 \u0441\u043F\u0456\u0432\u043F\u0440\u0430\u0446\u044E\u0432\u0430\u0442\u0438"),
                                        react_1["default"].createElement("br", null),
                                        react_1["default"].createElement("br", null),
                                        react_1["default"].createElement(Typography_1["default"], { variant: "h5", align: 'center' }, "\u041F\u0440\u0438\u0454\u0434\u043D\u0443\u0439\u0441\u044F \u0434\u043E \u0441\u043F\u0456\u043B\u044C\u043D\u043E\u0442\u0438 \u0442\u0430 \u0433\u0440\u0443\u043F\u0438 \u0434\u043B\u044F \u043E\u0431\u0433\u043E\u0432\u043E\u0440\u0435\u043D\u043D\u044F \u043C\u0435\u0440\u0435\u0436\u0456 \u0443 facebook"))),
                                react_1["default"].createElement(Grid_1["default"], { container: true, item: true, xs: 12, sm: 12, justify: 'center' },
                                    react_1["default"].createElement("a", { href: 'https://www.facebook.com/novakraina.pp.ua', className: classes.a },
                                        react_1["default"].createElement(Fab_1["default"], { variant: "extended", color: "primary", "aria-label": "add", className: classes.margin }, "\u041F\u0440\u0438\u0454\u0434\u043D\u0430\u0442\u0438\u0441\u044C \u0434\u043E \u0441\u043F\u0456\u043B\u044C\u043D\u043E\u0442\u0438")),
                                    react_1["default"].createElement("a", { href: ' https://www.facebook.com/groups/900034500492310/', className: classes.a },
                                        react_1["default"].createElement(Fab_1["default"], { variant: "extended", color: "primary", "aria-label": "add", className: classes.margin }, "\u041F\u0440\u0438\u0454\u0434\u043D\u0430\u0442\u0438\u0441\u044C \u0434\u043E \u0433\u0440\u0443\u043F\u0438"))))))),
                react_1["default"].createElement("div", { className: "section " },
                    react_1["default"].createElement("div", { className: "slide " + classes.img + " " + classes.img1, "data-anchor": "slide1" },
                        react_1["default"].createElement(Container_1["default"], { maxWidth: "lg", className: "" + classes.slidePravo },
                            react_1["default"].createElement(Grid_1["default"], { container: true, spacing: 3, item: true, xs: 12, sm: 12, className: "" + classes.slidePravoFirst },
                                react_1["default"].createElement(Typography_1["default"], { align: "center", variant: "h1", className: classes.titleFonts }, "\u0412\u0438\u0432\u0447\u0435\u043D\u043D\u044F \u043F\u0440\u0430\u0432\u0430"),
                                react_1["default"].createElement(Typography_1["default"], { align: 'center', variant: 'button', component: "h2", className: classes.myTypography },
                                    "\u041D\u0430 \u043F\u0440\u0430\u043A\u0442\u0438\u0447\u043D\u0438\u0445 \u043F\u0440\u0438\u043A\u043B\u0430\u0434\u0430\u0445  ",
                                    react_1["default"].createElement("br", null),
                                    "\u0443 \u043F\u043E\u0432\u0441\u044F\u043A\u0434\u0435\u043D\u043D\u043E\u043C\u0443 \u0436\u0438\u0442\u0442\u0456 \u043F\u043E\u043A\u0440\u0430\u0449\u0443\u0432\u0430\u0442\u0438 \u0440\u0456\u0432\u0435\u043D\u044C \u0441\u0432\u0456\u0434\u043E\u043C\u043E\u0441\u0442\u0456 \u0432 \u043F\u0440\u0430\u0432\u043E\u0432\u043E\u043C\u0443 \u043F\u043E\u043B\u0456 \u0433\u0440\u043E\u043C\u0430\u0434\u044F\u043D \u0423\u043A\u0440\u0430\u0457\u043D\u0438.",
                                    react_1["default"].createElement("br", null),
                                    "\u044F\u043A \u0446\u0435 \u043C\u043E\u0436\u0435 \u0431\u0443\u0442\u0438?"),
                                react_1["default"].createElement(Grid_1["default"], { container: true, item: true, xs: 12, sm: 12, justify: 'space-around' },
                                    react_1["default"].createElement(Fab_1["default"], { variant: "extended", color: "primary", "aria-label": "add", className: classes.margin, onClick: function () {
                                            fullpageApi.moveSectionDown();
                                        } },
                                        react_1["default"].createElement(ArrowDownward_1["default"], { className: classes.extendedIcon }),
                                        "\u0414\u0430\u043B\u0456"),
                                    react_1["default"].createElement(Fab_1["default"], { variant: "extended", color: "primary", "aria-label": "add", className: classes.margin, onClick: function () {
                                            fullpageApi.moveSlideRight();
                                        } },
                                        react_1["default"].createElement(ArrowForward_1["default"], { className: classes.extendedIcon }),
                                        "\u0434\u0435\u0442\u0430\u043B\u044C\u043D\u043E"))))),
                    react_1["default"].createElement("div", { className: "slide " + classes.img + " " + classes.survey + " ", "data-anchor": "slide2" },
                        react_1["default"].createElement(Container_1["default"], null,
                            react_1["default"].createElement(Grid_1["default"], { container: true, spacing: 3, className: classes.vuvchenaPravoSlide2 },
                                react_1["default"].createElement(Grid_1["default"], { container: true, item: true, xs: 12, sm: 12, justify: 'center' },
                                    react_1["default"].createElement(Paper_1["default"], { className: classes.paper },
                                        react_1["default"].createElement(Typography_1["default"], { variant: "h5", align: 'center' },
                                            "\u041C\u0438 \u044F\u043A \u0433\u0440\u043E\u043C\u0430\u0434\u044F\u043D\u0438 \u0423\u043A\u0440\u0430\u0457\u043D\u0438, \u0437\u0433\u0456\u0434\u043D\u043E 11 \u0441\u0442. \u041A.\u0423. \u043C\u0430\u0454\u043C\u043E \u043F\u0440\u0430\u0432\u043E \u0441\u0430\u043C\u043E\u043E\u0440\u0433\u0430\u043D\u0456\u0437\u043E\u0432\u0443\u0432\u0430\u0442\u0438\u0441\u044F, \u0441\u0442\u0432\u043E\u0440\u044E\u0432\u0430\u0442\u0438 \u043E\u0440\u0433\u0430\u043D\u0438 \u043C\u0456\u0441\u0446\u0435\u0432\u043E\u0433\u043E \u0441\u0430\u043C\u043E\u0432\u0440\u044F\u0434\u0443\u0432\u0430\u043D\u043D\u044F, \u0456 \u0440\u0435\u0430\u043B\u0456\u0437\u043E\u0432\u0443\u0432\u0430\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 \u043D\u0438\u0445, \u043D\u0430 \u0437\u0431\u043E\u0440\u0430\u0445 \u0441\u0432\u043E\u0457 \u043F\u0440\u0430\u0432\u0430.",
                                            react_1["default"].createElement("br", null),
                                            "\u0420\u0435\u0433\u0443\u043B\u044F\u0440\u043D\u0430 \u0443\u0447\u0430\u0441\u0442\u044C \u0443 \u043F\u0440\u0438\u0439\u043D\u044F\u0442\u0442\u0456 \u0440\u0456\u0448\u0435\u043D\u044C \u0437\u0430 \u043C\u0456\u0441\u0446\u0435\u043C \u043F\u0440\u043E\u0436\u0438\u0432\u0430\u043D\u043D\u044F \u0448\u043B\u044F\u0445\u043E\u043C \u0433\u043E\u043B\u043E\u0441\u0443\u0432\u0430\u043D\u043D\u044F \u043E\u043D\u043B\u0430\u0439\u043D, \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u044E\u0447\u0438 \u0432\u0431\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0439 \u0456\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442 \u0432 \u0443\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0456\u0439 \u0441\u043E\u0446\u0456\u0430\u043B\u044C\u043D\u0456\u0439 \u043C\u0435\u0440\u0435\u0436\u0456 - \u043F\u043E\u043B\u0456\u043F\u0448\u0438\u0442\u044C \u0441\u0432\u0456\u0434\u043E\u043C\u0456\u0441\u0442\u044C \u0433\u0440\u043E\u043C\u043E\u0434\u044F\u043D.",
                                            react_1["default"].createElement("br", null),
                                            " ",
                                            react_1["default"].createElement("br", null),
                                            "\u042F\u043A\u0456 \u043F\u0438\u0442\u0430\u043D\u043D\u044F \u043C\u043E\u0436\u043D\u0430 \u0432\u0438\u0440\u0456\u0448\u0438\u0442\u0438, \u043D\u0435 \u0432\u0438\u0445\u043E\u0434\u044F\u0447\u0438 \u0437 \u0434\u043E\u043C\u0443?"))),
                                react_1["default"].createElement(Grid_1["default"], { container: true, item: true, xs: 12, sm: 12, justify: 'center' },
                                    react_1["default"].createElement(Fab_1["default"], { variant: "extended", color: "primary", "aria-label": "add", className: classes.margin, onClick: function () {
                                            fullpageApi.moveSlideRight();
                                        } },
                                        react_1["default"].createElement(ArrowForward_1["default"], { className: classes.extendedIcon }),
                                        "\u0414\u0456\u0437\u043D\u0430\u0442\u0438\u0441\u044C"))))),
                    react_1["default"].createElement("div", { className: "slide " + classes.img + " " + classes.finskiy + " ", "data-anchor": "slide2" },
                        react_1["default"].createElement(Container_1["default"], null,
                            react_1["default"].createElement(Grid_1["default"], { container: true, spacing: 3, justify: 'center', className: classes.vuvchenaPravoSlide2 },
                                react_1["default"].createElement(Grid_1["default"], { item: true, xs: 12, sm: 8 },
                                    react_1["default"].createElement(Paper_1["default"], { className: classes.paper },
                                        react_1["default"].createElement(Typography_1["default"], { variant: "h5", align: 'center' }, "\u0421\u043F\u0456\u043B\u044C\u043D\u0435 \u043F\u0440\u0438\u0439\u043D\u044F\u0442\u0442\u044F \u0440\u0456\u0448\u0435\u043D\u044C \u043C\u0430\u0454 \u0437\u0434\u0456\u0439\u0441\u043D\u044E\u0432\u0430\u0442\u0438\u0441\u044F, \u0447\u0435\u0440\u0435\u0437 \u0433\u043E\u043B\u043E\u0441\u0443\u0432\u0430\u043D\u043D\u044F \u043D\u0430 \u043F\u043E\u0440\u044F\u0434\u043A\u0443 \u0434\u0435\u043D\u043D\u043E\u043C\u0443 \u043C\u043E\u0436\u0435 \u0431\u0443\u0442\u0438 \u0430\u0431\u0441\u043E\u043B\u044E\u0442\u043D\u043E \u0431\u0443\u0434\u044C-\u044F\u043A\u0456 \u043F\u0438\u0442\u0430\u043D\u043D\u044F \u0449\u043E \u0441\u0442\u043E\u0441\u0443\u0454\u0442\u044C\u0441\u044F \u0416\u041A\u0413 \u0442\u0430 \u0439 \u043F\u0438\u0442\u0430\u043D\u044C \u043C\u0456\u0441\u0446\u0435\u0432\u043E\u0433\u043E \u0441\u0430\u043C\u043E\u0443\u043F\u0440\u0430\u0432\u043B\u0456\u043D\u043D\u044F. \u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u043C \u0433\u043E\u043B\u043E\u0441\u0443\u0432\u0430\u043D\u044C \u0431\u0443\u0434\u0435 \u043F\u0440\u043E\u0442\u043E\u043A\u043E\u043B \u0437\u0431\u043E\u0440\u0456\u0432 \u0433\u0440\u043E\u043C\u0430\u0434\u044F\u043D \u0441\u0444\u043E\u0440\u043C\u043E\u0432\u0430\u043D\u0438\u0439 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u043D\u0438\u043C \u0447\u0438\u043D\u043E\u043C. \u041A\u043E\u0436\u0435\u043D \u0443\u0447\u0430\u0441\u043D\u0438\u043A \u043F\u0435\u0440\u0435\u0434 \u0433\u043E\u043B\u043E\u0441\u0443\u0432\u0430\u043D\u043D\u044F\u043C \u043E\u0442\u0440\u0438\u043C\u0443\u0454 \u043F\u043E\u0432\u043D\u0438\u0439 \u043F\u0435\u0440\u0435\u043B\u0456\u043A \u043F\u0438\u0442\u0430\u043D\u044C \u0456 \u043F\u0440\u043E\u043F\u043E\u0437\u0438\u0446\u0456\u0439 \u0443 \u0444\u043E\u0440\u043C\u0456 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u043D\u0456\u0439 \u0434\u043E \u041A\u043E\u043D\u0441\u0442\u0438\u0442\u0443\u0446\u0456\u0457 \u0423\u043A\u0440\u0430\u0457\u043D\u0438. \u0422\u0430\u043A\u0438\u043C \u0447\u0438\u043D\u043E\u043C, \u0432\u0438\u0440\u0456\u0448\u0443\u0454 \u0434\u0435 \u0442\u0440\u0435\u0431\u043E, \u043D\u0430\u043F\u0440\u0438\u043A\u043B\u0430\u0434: \"\u043F\u0438\u043B\u044F\u0442\u0438 \u0430\u0431\u043E \u0441\u0430\u0434\u0436\u0430\u0442\u0438\" \u043B\u044E\u0434\u0438 \u043F\u043E\u0447\u043D\u0443\u0442\u044C \u0443\u0433\u043B\u0438\u0431\u043B\u044F\u0442\u044C\u0441\u044F \u0432 \u043F\u0440\u0430\u0432\u043E\u0432\u0435 \u043F\u043E\u043B\u0435 \u0433\u043B\u0438\u0431\u0448\u0435 \u0432\u0438\u0432\u0447\u0430\u044E\u0447\u0438 \u0441\u0432\u043E\u0457 \u0437\u0430\u043A\u043E\u043D\u043D\u0456 \u043F\u0440\u0430\u0432\u0430 \u0456 \u043E\u0442\u0440\u0438\u043C\u0430\u044E\u0442\u044C \u043C\u0435\u0445\u0430\u043D\u0456\u0437\u043C \u0446\u0438\u043C\u0438 \u043F\u0440\u0430\u0432\u0430\u043C\u0438 \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0442\u0438\u0441\u044C.")),
                                    react_1["default"].createElement("br", null),
                                    react_1["default"].createElement(Paper_1["default"], { className: classes.paper },
                                        react_1["default"].createElement(Typography_1["default"], { variant: "h6", align: 'center' }, "\u041F\u0440\u0438\u0454\u0434\u043D\u0443\u0439\u0441\u044F \u0434\u043E \u0441\u043F\u0456\u043B\u044C\u043D\u043E\u0442\u0438 \u0442\u0430 \u0433\u0440\u0443\u043F\u0438 \u0434\u043B\u044F \u043E\u0431\u0433\u043E\u0432\u043E\u0440\u0435\u043D\u043D\u044F \u043C\u0435\u0440\u0435\u0436\u0456 \u0443 facebook"))),
                                react_1["default"].createElement(Grid_1["default"], { container: true, item: true, xs: 12, sm: 12, justify: 'center' },
                                    react_1["default"].createElement("a", { href: 'https://www.facebook.com/novakraina.pp.ua', className: classes.a },
                                        react_1["default"].createElement(Fab_1["default"], { variant: "extended", color: "primary", "aria-label": "add", className: classes.margin }, "\u041F\u0440\u0438\u0454\u0434\u043D\u0430\u0442\u0438\u0441\u044C \u0434\u043E \u0441\u043F\u0456\u043B\u044C\u043D\u043E\u0442\u0438")),
                                    react_1["default"].createElement("a", { href: ' https://www.facebook.com/groups/900034500492310/', className: classes.a },
                                        react_1["default"].createElement(Fab_1["default"], { variant: "extended", color: "primary", "aria-label": "add", className: classes.margin }, "\u041F\u0440\u0438\u0454\u0434\u043D\u0430\u0442\u0438\u0441\u044C \u0434\u043E \u0433\u0440\u0443\u043F\u0438"))))))),
                react_1["default"].createElement("div", { className: "section " },
                    react_1["default"].createElement("div", { className: "slide " + classes.img + " " + classes.fantasy, "data-anchor": "slide1" },
                        react_1["default"].createElement(Container_1["default"], { maxWidth: "lg", className: "" + classes.slidePravo },
                            react_1["default"].createElement(Grid_1["default"], { container: true, spacing: 3, item: true, xs: 12, sm: 12, className: "" + classes.slidePravoFirst },
                                react_1["default"].createElement(Typography_1["default"], { align: "center", variant: "h1", className: classes.titleFonts }, "\u041F\u043E\u0442\u0440\u0456\u0431\u0435\u043D \u0440\u043E\u0437\u0433\u043E\u043B\u043E\u0441"),
                                react_1["default"].createElement(Typography_1["default"], { align: 'center', variant: 'button', component: "h2", className: classes.myTypography },
                                    "\u0412\u0441\u0435 \u0437\u0430\u043B\u0435\u0436\u0456\u0442\u044C \u0432\u0456\u0434 \u043D\u0430\u0441  ",
                                    react_1["default"].createElement("br", null),
                                    "\u041F\u0430\u043C'\u044F\u0442\u0430\u0439, \u0449\u043E \u041A\u043E\u0432\u0447\u0435\u0433 \u0437\u043C\u0430\u0439\u0441\u0442\u0440\u0443\u0432 \u043B\u044E\u0431\u0438\u0442\u0435\u043B\u044C, \u0430 \u0442\u0438\u0442\u0430\u043D\u0456\u043A \u043F\u0440\u043E\u0444\u0435\u0441\u0456\u043E\u043D\u0430\u043B\u0438.",
                                    react_1["default"].createElement("br", null),
                                    "\u0427\u0438\u043C \u044F \u043C\u043E\u0436\u0443 \u0431\u0443\u0442\u0438 \u043A\u043E\u0440\u0438\u0441\u043D\u0438\u043C?"),
                                react_1["default"].createElement(Grid_1["default"], { container: true, item: true, xs: 12, sm: 12, justify: 'center' },
                                    react_1["default"].createElement(Fab_1["default"], { variant: "extended", color: "primary", "aria-label": "add", className: classes.margin, onClick: function () {
                                            fullpageApi.moveSlideRight();
                                        } },
                                        react_1["default"].createElement(ArrowForward_1["default"], { className: classes.extendedIcon }),
                                        "\u0434\u0435\u0442\u0430\u043B\u044C\u043D\u043E"))))),
                    react_1["default"].createElement("div", { className: "slide " + classes.img + " " + classes.field + " ", "data-anchor": "slide2" },
                        react_1["default"].createElement(Container_1["default"], null,
                            react_1["default"].createElement(Grid_1["default"], { container: true, spacing: 3, className: classes.vuvchenaPravoSlide2 },
                                react_1["default"].createElement(Grid_1["default"], { container: true, item: true, xs: 12, sm: 12, justify: 'center' },
                                    react_1["default"].createElement(Paper_1["default"], { className: classes.paper },
                                        react_1["default"].createElement(Typography_1["default"], { variant: "h5", align: 'center', className: classes.a },
                                            "\u042F\u043A\u0449\u043E \u0442\u0438 \u0437\u0432\u0438\u0447\u0430\u0439\u043D\u0438\u0439 \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447 \u0441\u043E\u0446\u0456\u0430\u043B\u044C\u043D\u043E\u0457 \u043C\u0435\u0440\u0435\u0436\u0456, \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0439\u0441\u044F \u0443 \u0441\u043F\u0456\u043B\u044C\u043D\u043E\u0442\u0456 ",
                                            react_1["default"].createElement("a", { href: 'https://www.facebook.com/novakraina.pp.ua', className: classes.a }, " Smart Ukraine "),
                                            " \u0443 facebook , \u0446\u0454 \u0434\u043E\u043F\u043E\u043C\u043E\u0436\u0435 \u0432\u0440\u0430\u0445\u0443\u0432\u0430\u0442\u0438 \u043F\u043E\u0442\u0440\u0454\u0431\u0443 \u0446\u044C\u043E\u0433\u043E \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0443. ",
                                            react_1["default"].createElement("br", null),
                                            " ",
                                            react_1["default"].createElement("br", null),
                                            "\u042F\u043A\u0449\u043E \u0442\u0438 \u0431\u0430\u0436\u0430\u0454\u0448 \u0434\u043E\u043B\u0443\u0447\u0438\u0442\u0438\u0441\u044C \u0434\u043E \u0440\u043E\u0437\u0440\u043E\u0431\u043A\u0438 \u0446\u0456\u0454\u0457 \u043C\u0435\u0440\u0435\u0436\u0456 \u0430\u0431\u043E \u0432\u0438\u0441\u043B\u043E\u0432\u0438\u0442\u0438\u0441\u044C, \u043F\u0440\u043E\u043A\u043E\u043C\u0435\u043D\u0442\u0443\u0432\u0430\u0442\u0438, \u0437\u0430\u043F\u0440\u043E\u043F\u043E\u043D\u0443\u0432\u0430\u0442\u0438 \u0449\u043E\u0441\u044C, \u0442\u043E\u0434\u0456 \u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0439\u0441\u044F \u0443 \u0433\u0440\u0443\u043F\u0456 ",
                                            react_1["default"].createElement("a", { href: 'https://www.facebook.com/groups/900034500492310/', className: classes.a }, " \u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430 \u0421\u043E\u0446\u0456\u0430\u043B\u044C\u043D\u0430 \u041C\u0435\u0440\u0435\u0436\u0430 \u0413\u0440\u043E\u043C\u0430\u0434 "),
                                            " \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0438 Smart Ukraine",
                                            react_1["default"].createElement("br", null),
                                            " ",
                                            react_1["default"].createElement("br", null),
                                            "\u0410 \u0442\u0430\u043A\u043E\u0436 \u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0439\u0442\u0435\u0441\u044C \u043D\u0430 \u0446\u044C\u043E\u043C\u0443 \u0441\u0430\u0439\u0442\u0456, \u0446\u0435\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 \u0431\u0443\u0434\u0435 \u043C\u0456\u043D\u0456 \u043F\u0440\u043E\u0442\u043E\u0442\u0438\u043F\u043E\u043C \u043C\u0435\u0440\u0435\u0436\u0456",
                                            react_1["default"].createElement("br", null),
                                            " ",
                                            react_1["default"].createElement("br", null),
                                            "\u0412\u0435\u043B\u0438\u0447\u0435\u0437\u043D\u0430 \u043F\u043E\u0434\u044F\u043A\u0430 \u0441\u0432\u0456\u0434\u043E\u043C\u0438\u043C \u0423\u043A\u0440\u0430\u0457\u043D\u0446\u044F\u043C \u044F\u043A\u0456 \u043D\u0430\u0434\u0438\u0445\u0430\u044E\u0442\u044C \u0442\u0430 \u0432\u0456\u0434\u0447\u0438\u043D\u044F\u044E\u0442\u044C \u0437\u0430\u0432\u0456\u0441\u0443 \u043C\u0430\u0441\u043E\u0432\u043E\u0457 \u0431\u0435\u0441\u0441\u043E\u0437\u043D\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0456, \u0437\u0430 \u0440\u0430\u0434\u0438 \u0441\u043F\u0456\u043B\u044C\u043D\u043E\u0457 \u043C\u0435\u0442\u0438 - \u043C\u0430\u0442\u0438 \u0434\u043E\u0441\u0442\u043E\u0439\u043D\u0435 \u0436\u0438\u0442\u0442\u044F \u0443 \u0441\u0432\u043E\u0457\u0439 \u043A\u0440\u0430\u0457\u043D\u0456. ",
                                            react_1["default"].createElement("br", null),
                                            " ",
                                            react_1["default"].createElement("br", null),
                                            react_1["default"].createElement("a", { href: "http://bagnetnacii.blogspot.com/" }, "\u0413\u041E \u041E\u041F\u0413 \"\u0411\u0430\u0433\u043D\u0435\u0442 \u041D\u0430\u0446\u0456\u0457\""),
                                            " ",
                                            react_1["default"].createElement("br", null),
                                            react_1["default"].createElement("a", { href: "https://budmo.in.ua/" }, "\u0428\u043A\u043E\u043B\u0430 \u041A\u043E\u043D\u0441\u0442\u0438\u0442\u0443\u0446\u0456\u0457"),
                                            " ",
                                            react_1["default"].createElement("br", null),
                                            react_1["default"].createElement("a", { href: "http://ukr-merezha.com/" }, "\u0421\u0443\u0441\u043F\u0456\u043B\u044C\u043D\u0430 \u0441\u0438\u0441\u0442\u0435\u043C\u0430"),
                                            " ",
                                            react_1["default"].createElement("br", null),
                                            react_1["default"].createElement("a", { href: "https://spgr.org.ua/" }, "\u0421\u043F\u0440\u0430\u0432\u0430 \u0433\u0440\u043E\u043C\u0430\u0434"),
                                            " ",
                                            react_1["default"].createElement("br", null))))))))));
        } }));
};
react_dom_1["default"].render(react_1["default"].createElement(exports.Body, null), document.getElementById('root'));
// "homepage": "https://denisavilov.github.io/Nova_Kraina_deploy",
