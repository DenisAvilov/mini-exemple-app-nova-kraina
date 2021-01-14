import ReactDOM from 'react-dom'
import ReactFullpage from '@fullpage/react-fullpage'
import './Body.css'
import fon2mini from './../../img/learn_main_page.jpg'
import pravovePole from './../../img/unsplash.jpg'
import voidOnlineImg from './../../img/fon2mini.jpg'
import voidOnline from './../../img/voidOnline.png'
import media from './../../img/media.jpg'
import survey from './../../img/survey-1.jpg'
import finDom from './../../img/finskiy_1280.jpg'
import field from './../../img/field.jpg'
import ukraine from './../../img/ukraine.jpg'
import fantasy from './../../img/fantasy.jpg'
import pamatka from './../../img/pamatka.png'
import handsome from './../../img/handsome.png'
import road from './../../img/road.jpg'
// import time from './../../img/time.mp4'
import schoolUkraine from './../../img/schoolUkraine.jpg';
import { makeStyles, createStyles, Theme} from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

import './LandingBody.css'
import React from 'react'
import Fab from '@material-ui/core/Fab'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowForward from '@material-ui/icons/ArrowForward';
const titleFonts = 'Yeseva One , cursive'
const titleDopus = 'Caveat, cursive'
type BodyTS = {}

const useStyles = makeStyles( (theme: Theme) => createStyles(
    { margin: {
      // margin: theme.spacing(1),
      // transform: 'translate(-50%, -50%)',
      // left: '48%',
      // right: '50%',
      // top: '30%',
      zIndex: 3333,
      // [theme.breakpoints.down('sm')]: {
      //   transform: 'translate(-50%, 29px)',
      // },
      // [theme.breakpoints.up('sm')]: {
      //   transform: 'translate(-50%, -50%)',
      // },
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
        zIndex: 999,
      },
    },
    titleFonts: {
      fontFamily: titleFonts,
      fontSize: '77px',
      fontWeight: 700,
      letterSpacing: '3px',
      color: '#2063a7',
      textShadow: '1px 1px 2px white',
      [theme.breakpoints.down('sm')]: {
        fontSize: '30px',
      },
    },
    titleDopus: {
      fontFamily: titleDopus,
      color: 'white',
      fontSize: '35px',
      textShadow: '1px 1px 2px black',
      [theme.breakpoints.down('sm')]: {
        fontSize: '20px',
      },
    },
    img1: {
      backgroundImage: `url(${fon2mini})`,
    },
    field: {
      backgroundImage: `url(${field})`,
    },
    ukraine: {
      backgroundImage: `url(${ukraine})`,
    },
    fantasy: {
      backgroundImage: `url(${fantasy})`,
    },
    imgMedia: {
      backgroundImage: `url(${media})`,
    },
    handsome: {
      backgroundImage: `url(${handsome})`,
    },
    img2: {
      backgroundImage: `url(${pravovePole})`,
    },
    img3: {
      backgroundImage: `url(${voidOnlineImg})`,
    },
    road: {
      backgroundImage: `url(${road})`,
    },
    pamatka: {
      backgroundImage: `url(${pamatka})`,
    },
    finskiy: { backgroundImage: `url(${finDom})`},
    survey: {
      backgroundImage: `url(${survey})`,
    },
    schoolUkraine: {
      backgroundImage: `url(${schoolUkraine})`,
    },
    paper: {
      'backgroundColor': 'rgba(255,255,255,  0.6)',
      'padding': '15px 10px',
      [theme.breakpoints.up('md')]: {
        fontSize: '1.7rem',
      },
      '& a': {
        textDecoration: 'none',
        marginBottom: '10px',
        [theme.breakpoints.up('sm')]: {
          marginLeft: '10px',
        },
      },
      '& a:hover': {
        color: theme.palette.primary.main,
      },
    },
    myTypography: {
      fontWeight: theme.typography.fontWeightBold,
      textShadow: '1px 1px 1px black',
      fontSize: '1.2rem',
      color: '#cecece',
      [theme.breakpoints.up('md')]: {
        fontSize: '2.2rem',
      },
    },
    titleFontsBr: {
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    wrapLogo: {
      height: '100vh',
      [theme.breakpoints.down('sm')]: {
        alignContent: 'space-around',
      },
      [theme.breakpoints.up('sm')]: {
        '& .MuiFab-label': {
          fontSize: 'medium',
        },
      },
    },
    logo: {
      flexDirection: 'column',
      alignSelf: 'center',
      alignContent: 'center',
    },
    logoDiscription: {
      alignSelf: 'center',
    },
    secondSlide: {
      marginBottom: '10px',
    },
    slidePravo: {
      alignContent: 'center',
      display: 'flex',
      justifyContent: 'center',
      [theme.breakpoints.down('sm')]: {
        maxHeight: '555px',
      },
    },
    slidePravoFirst: {
      justifyContent: 'center',
      height: '100vh',
      top: '20px',
    },
    media: {
      height: 0,
      paddingTop: '60.25%', // 16:9
      backgroundSize: 'contain',
    },
    clearFloat: {
      float: 'none',
      display: 'table',
    },
    overflow: {
      position: 'absolute',
      content: 'close-quote',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      zIndex: 999,

    },
    typographySpan: {
      fontSize: '20px',
      marginRight: '10px',
    },
    test: {
      COLOR: 'aliceblue',
      fontSize: '4rem',
      fontWeight: 500,
    },
    vuvchenaPravoSlide2: {
      height: '100vh',
      alignContent: 'space-around',
    },
    a: {
      textDecoration: 'none',
      marginBottom: '10px',
      [theme.breakpoints.up('sm')]: {
        marginLeft: '10px',
      },
    },
    pamatkaStyle: {
      maxWidth: '800px',
    },
    } ) )

export const Body: React.FC<BodyTS> = () => {
  const classes = useStyles()
  const anchors = ['novaKraina', 'vladaBezposeredno', 'vivchennyaPrava', 'potribenRozgolos'];
  return (
    <ReactFullpage
      // fullpage options
      licenseKey = {'OPEN-SOURCE-GPLV3-LICENSE'}
      scrollingSpeed = {1000} /* Options here */
      scrollHorizontally = {true}
      scrollHorizontallyKey = {'YOUR KEY HERE'}
      continuousHorizontal = {true}
      navigation = {true}
      slidesNavigation = {true}
      // fitToSection = {true}
      // paddingTop = {'200px'}
      loopHorizontal = {false}
      scrollBar = {true}
      anchors = {anchors}
      // continuousHorizontal = {true}
      render={({ state, fullpageApi }) => {
        return (

          <ReactFullpage.Wrapper>
            <div className={`section mySectionTest`} >
              <div className={`slide ${classes.img } ${classes.img2} `} data-anchor="slide1" >
                <Container maxWidth="lg" >
                  <Grid container item xs={12} className={classes.wrapLogo}>
                    <Grid container item xs={12} sm={6} className={classes.logo}>
                      <Typography className={classes.titleFonts}>
                        NOVA<br className={classes.titleFontsBr} /> UKRAЇNА</Typography>
                      <Typography className={classes.titleDopus}>
                        Прийшов час розставити крапки над Ї
                      </Typography>
                    </Grid>
                    <Grid container item xs={12} sm={6} className={classes.logoDiscription}>
                      <Typography variant='button' component="h2" className={classes.myTypography} align='center'>
                      Розбудова проєкту соціальної мережі
                      територіальних громад України<br/>
                      яку ми повинні створити власноруч
                      </Typography>

                    </Grid>
                    <Grid container item xs={12} sm={12} justify={'center'}>
                      <Fab variant="extended" color="primary" aria-label="add" className={classes.margin} onClick={() => {
                        fullpageApi.moveSectionDown()
                      } }>
                        <ArrowDownwardIcon className={classes.extendedIcon} />
                який перелік функцій?
                      </Fab>
                    </Grid>
                  </Grid>

                </Container>
              </div>
            </div>
            <div className={`section `}>
              <div className={`slide ${classes.img} ${classes.img3}` } data-anchor="slide1">
                <Container maxWidth="lg" >
                  <Typography variant="h1" align='center' className={`${classes.titleFonts} ${classes.secondSlide}`}>
                  Здійснювати владу <br className={classes.titleFontsBr} /> безпосередньо</Typography>
                  <Grid container spacing={3} >
                    <Grid item xs={12} sm={6} >
                      <CardMedia
                        className={classes.media}
                        image={voidOnline}
                        title="Void online"
                      />
                    </Grid>
                    <Grid container item xs={12} sm={6} justify={'center'} direction={'column'}>
                      <Typography variant='button' component="h2" className={classes.myTypography} align='center'>
                        Прийняття рішень територіальних громад,<br/>через голосування ONLINE
                      </Typography>
                    </Grid>
                    <Grid container item xs={12} sm={12} justify={'space-around'}>
                      <Fab variant="extended" color="primary" aria-label="add" className={classes.margin} onClick={() => {
                        fullpageApi.moveSectionDown()
                      } }>
                        <ArrowDownwardIcon className={classes.extendedIcon} />
                Далі
                      </Fab>
                      <Fab variant="extended" color="primary" aria-label="add" className={classes.margin} onClick={() => {
                        fullpageApi.moveSlideRight()
                      } }>
                        <ArrowForward className={classes.extendedIcon} />
                        детально
                      </Fab>
                    </Grid>
                  </Grid>
                </Container>
              </div>
              <div className={`slide ${classes.img } ${classes.imgMedia} `} data-anchor="slide2" >
                <Container>
                  <Grid container spacing={3} className={classes.vuvchenaPravoSlide2}>
                    <Grid container item xs={12} sm={12} justify={'center'} >
                      <Paper className={classes.paper}>
                        <Typography variant="h5" align='center'>
                        Жодна соціальна мережа не здатна бути гарантом прозорих
                        виборів, а ні на рівні ЖКГ, та на жодному іншому рівні.
                        Але національна непровладна мережа на таке може бути здатна.
                          <br/>  <br/>
                          Мережа повинна об'єднати людей які проживають, за постійним місцем проживання,
                          та надати їм можливість керувати цим майном, та забезпечити контроль над чиновниками.
                          <br/>  <br/>
                        На яких рівнях життя, може бути корисна ця мережа?
                        </Typography>
                      </Paper>
                    </Grid>
                    <Grid container item xs={12} sm={12} justify={'center'}>
                      <Fab variant="extended" color="primary" aria-label="add" className={classes.margin} onClick={() => {
                        fullpageApi.moveSlideRight()
                      } }>
                        <ArrowForward className={classes.extendedIcon} />
              Дізнатись
                      </Fab>
                    </Grid>
                  </Grid>
                </Container>
              </div>
              <div className={`slide ${classes.img } ${classes.ukraine} `} data-anchor="slide2" >
                <Container>
                  <Grid container spacing={3} >
                    <Grid container item xs={12} sm={12} justify={'center'}>
                      <Paper className={classes.paper}>
                        <Typography variant="h5" align='left'>

                          Спрощує збори громади у городі, селі, чи селищі.<br/>
                          Не обов'язково збиратись на вулиці.<br/>
                          Голосувати можна 24/7 онлайн.<br/>

                          Спрощує збори громади у дитячих садочках, шкілках або інших государствених установах,
                          які є власністю громади, допомагає контролювати надходження та розподіл грошевих одиниць.<br/>

                          Співпраця з комунальними придпріятіями як власник не як споживач. Наприклад: Укргаз тощо. <br/>

                          Мережа має надати можливість мати прозорий рейтинг чиновників усіх рівнів всіх регіонів.<br/>
                          та якщо рейтинг на красній лінії, то вибори можуть початись у автомотичному режимі.
                          <br/><br/>
                          На реалізацію потрібен час. Це можна зробити об'єднавши зусилля!
                        </Typography>
                      </Paper>
                    </Grid>
                    <Grid container item xs={12} sm={12} justify={'center'}>
                      <Fab variant="extended" color="primary" aria-label="add" className={classes.margin} onClick={() => {
                        fullpageApi.moveSlideRight()
                      } }>
                        <ArrowForward className={classes.extendedIcon} />
              чому це не зробить чинна "влада"?
                      </Fab>
                    </Grid>
                  </Grid>
                </Container>
              </div>
              <div className={`slide ${classes.img } ${classes.handsome} `} data-anchor="slide2" >
                <Container>
                  <Grid container spacing={3} >
                    <Grid container item xs={12} sm={12} justify={'center'}>
                      <Paper className={classes.paper}>
                        <Typography variant="h5" align='center'>
                        Наявна "влада" створює сервіси котрі допомагають платити за рахунками.
                        Вони жодним чином не допомагають громадянам здійснювати владу, та користуватись своїми
                        конституційними правами <br/> <br/>
                        "влада" робить все щоб контролювати, а не співпрацювати
                        </Typography><br/><br/>
                        <Typography variant="h5" align='center'>
                        Приєднуйся до спільноти та групи для обговорення мережі у facebook
                        </Typography>
                      </Paper>
                    </Grid>
                    <Grid container item xs={12} sm={12} justify={'center'} >
                      <a href='https://www.facebook.com/novakraina.pp.ua' className={classes.a}>
                        <Fab variant="extended" color="primary" aria-label="add" className={classes.margin} >
                    Приєднатись до спільноти
                        </Fab>
                      </a>
                      <a href=' https://www.facebook.com/groups/900034500492310/' className={classes.a}>
                        <Fab variant="extended" color="primary" aria-label="add" className={classes.margin} >
                    Приєднатись до групи
                        </Fab>
                      </a>
                    </Grid>
                  </Grid>
                </Container>
              </div>
            </div>
            <div className={`section `}>
              <div className={`slide ${classes.img } ${classes.img1}`} data-anchor="slide1">
                <Container maxWidth="lg" className={`${classes.slidePravo}`}>
                  <Grid container spacing={3} item xs={12} sm={12} className={`${classes.slidePravoFirst}`}>

                    <Typography align="center" variant="h1" className={classes.titleFonts} >Вивчення права</Typography>

                    <Typography align='center' variant='button' component="h2" className={classes.myTypography} >
                    На практичних прикладах  <br/>
                            у повсякденному житті
                    покращувати рівень свідомості
                    в правовому полі громадян України.
                      <br/>
                            як це може бути?
                    </Typography>
                    <Grid container item xs={12} sm={12} justify={'space-around'}>
                      <Fab variant="extended" color="primary" aria-label="add" className={classes.margin} onClick={() => {
                        fullpageApi.moveSectionDown()
                      } }>
                        <ArrowDownwardIcon className={classes.extendedIcon} />
                Далі
                      </Fab>
                      <Fab variant="extended" color="primary" aria-label="add" className={classes.margin} onClick={() => {
                        fullpageApi.moveSlideRight()
                      } }>
                        <ArrowForward className={classes.extendedIcon} />
                        детально
                      </Fab>
                    </Grid>
                  </Grid>
                </Container>
              </div>
              <div className={`slide ${classes.img } ${classes.survey} `} data-anchor="slide2" >
                <Container>
                  <Grid container spacing={3} className={classes.vuvchenaPravoSlide2}>
                    <Grid container item xs={12} sm={12} justify={'center'}>
                      <Paper className={classes.paper}>
                        <Typography variant="h5" align='center'>
                        Ми як громадяни України, згідно
                          <a href='https://youtu.be/4xqZL9UNQmA'target="_blank" className={classes.a}> 5 </a>,
                          <a href='https://youtu.be/Gu61DUmFmL4'target="_blank" className={classes.a}> 7 </a>,
                          <a href='https://youtu.be/-YWTnJ-gClU'target="_blank" className={classes.a}> 13 </a>,
                          <a href='https://youtu.be/-xjNEzk4B7E'target="_blank" className={classes.a}> 140 </a>,
                          <a href='https://youtu.be/bs87kD65l-E'target="_blank" className={classes.a}> 141 </a>,
                          <a href='https://youtu.be/5qDxb69SClw'target="_blank" className={classes.a}> 142 </a>,
                          <a href='https://youtu.be/2GYYD76ZWss'target="_blank" className={classes.a}> 143 </a>,
                            ст. К.У. маємо право самоорганізовуватися,
                        створювати органи місцевого самоврядування,
                        і реалізовувати через них, на зборах свої права.<br/>
                        Регулярна участь у прийнятті рішень за місцем проживання шляхом голосування онлайн,
                        використовуючи вбудований інструмент в українській соціальній мережі - поліпшить свідомість громодян.
                          <br/> <br/>
                        Які питання можна вирішити, не виходячи з дому?
                        </Typography>
                      </Paper>
                    </Grid>
                    <Grid container item xs={12} sm={12} justify={'center'}>
                      <Fab variant="extended" color="primary" aria-label="add" className={classes.margin} onClick={() => {
                        fullpageApi.moveSlideRight()
                      } }>
                        <ArrowForward className={classes.extendedIcon} />
              Дізнатись
                      </Fab>
                    </Grid>
                  </Grid>

                </Container>
              </div>
              <div className={`slide ${classes.img } ${classes.finskiy} `} data-anchor="slide2" >
                <Container>
                  <Grid container spacing={3} justify={'center'} className={classes.vuvchenaPravoSlide2}>
                    <Grid item xs={12} sm={8}>
                      <Paper className={classes.paper}>
                        <Typography variant="h5" align='center'>Спільне прийняття рішень має здійснюватися,
через голосування на порядку денному може бути абсолютно будь-які питання що стосується ЖКГ та й питань місцевого самоврядування.
Результатом голосувань буде протокол зборів громадян сформований автоматичним чином.
Кожен учасник перед голосуванням отримує повний перелік питань і пропозицій у формі відповідній до Конституції України.
Таким чином, вирішує де треба, наприклад: "пиляти або саджати" люди почнуть роглиблюватись в правове поле глибше вивчаючи свої законні права і отримають механізм цими правами користуватись.
                        </Typography>
                      </Paper><br/>
                      <Paper className={classes.paper}>
                        <Typography variant="h6" align='center'>
                        Приєднуйся до спільноти та групи для обговорення мережі у facebook
                        </Typography>
                      </Paper>
                    </Grid>
                    <Grid container item xs={12} sm={12} justify={'center'} >
                      <a href='https://www.facebook.com/novakraina.pp.ua' className={classes.a}>
                        <Fab variant="extended" color="primary" aria-label="add" className={classes.margin} >
                    Приєднатись до спільноти
                        </Fab>
                      </a>
                      <a href=' https://www.facebook.com/groups/900034500492310/' className={classes.a}>
                        <Fab variant="extended" color="primary" aria-label="add" className={classes.margin} >
                    Приєднатись до групи
                        </Fab>
                      </a>
                    </Grid>

                  </Grid>
                </Container>
              </div>
            </div>
            { /* Пам'ятка*/}
            { /* <div className={`section `}>
              <div className={`slide ${classes.img } ${classes.road}`} data-anchor="slide1">
                <Container maxWidth="lg" className={`${classes.slidePravo}`}>
                  <Grid container spacing={3} item xs={12} sm={12} className={`${classes.slidePravoFirst}`}>

                    <Typography align="center" variant="h1" className={classes.titleFonts} >Па'ятка для кожного громадянина</Typography>
                    <Grid container item xs={12} sm={12} justify={'center'}>
                      <div className={classes.pamatkaStyle}>
                        <CardMedia
                          component="img"
                          alt="Па'ятка для кожного громадянина"
                          height="auto"
                          image={`${pamatka}`}
                          title="Па'ятка для кожного громадянина"
                        />
                      </div>

                    </Grid>

                    <Grid container item xs={12} sm={12} justify={'center'}>
                      <Fab variant="extended" color="primary" aria-label="add" className={classes.margin} onClick={() => {
                        fullpageApi.moveSlideRight()
                      } }>
                        <ArrowForward className={classes.extendedIcon} />
                        детально
                      </Fab>
                    </Grid>
                  </Grid>
                </Container>
              </div>
              <div className={`slide ${classes.img } ${classes.survey} `} data-anchor="slide2" >
                <Container>
                  <Grid container spacing={3} className={classes.vuvchenaPravoSlide2}>
                    <Grid container item xs={12} sm={12} justify={'center'}>
                      <Paper className={classes.paper}>
                        <Typography variant="h5" align='center'>
                        Якщо ти звичайний користувач соціальної мережі, зареєструйся у спільноті <a href='https://www.facebook.com/novakraina.pp.ua' className={classes.a}> Smart Ukraine </a> у facebook
                          , цє допоможе врахувати потрєбу цього продукту. <br/> <br/>
                          Якщо ти бажаєш долучитись до розробки цієї мережі або висловитись, прокоментувати, запропонувати щось, тоді реєструйся у групі <a href='https://www.facebook.com/groups/900034500492310/' className={classes.a}> Українська Соціальна Мережа Громад </a> сторінки Smart Ukraine

                          <br/> <br/>
                          А також реєструйтесь на цьому сайті, цей ресурс буде міні прототипом мережі
                        </Typography>
                      </Paper>
                    </Grid>
                    <Grid container item xs={12} sm={12} justify={'center'}>
                      <Fab variant="extended" color="primary" aria-label="add" className={classes.margin} onClick={() => {
                        fullpageApi.moveSlideRight()
                      } }>
                        <ArrowForward className={classes.extendedIcon} />
              Дізнатись
                      </Fab>
                    </Grid>
                  </Grid>

                </Container>
              </div>
              <div className={`slide ${classes.img } ${classes.finskiy} `} data-anchor="slide2" >
                <Container>
                  <Grid container spacing={3} justify={'center'} className={classes.vuvchenaPravoSlide2}>
                    <Grid item xs={12} sm={8}>
                      <Paper className={classes.paper}>
                        <Typography variant="h5" align='center'>Спільне прийняття рішень має здійснюватися,
                          через голосування на порядку денному може бути абсолютно будь-які питання що стосується ЖКГ та й питань місцевого самоврядування.
                          Результатом голосувань буде протокол зборів громадян сформований автоматичним чином.
                          Кожен учасник перед голосуванням отримує повний перелік питань і пропозицій у формі відповідній до Конституції України.
                          Таким чином, вирішує де треба, наприклад: "пиляти або саджати" люди почнуть углибляться в правове поле глибше вивчаючи свої законні права і отримають механізм цими правами користуватись.
                        </Typography>
                      </Paper><br/>
                      <Paper className={classes.paper}>
                        <Typography variant="h6" align='center'>
                        Приєднуйся до спільноти та групи для обговорення мережі у facebook
                        </Typography>
                      </Paper>
                    </Grid>
                    <Grid container item xs={12} sm={12} justify={'center'} >
                      <a href='https://www.facebook.com/novakraina.pp.ua' className={classes.a}>
                        <Fab variant="extended" color="primary" aria-label="add" className={classes.margin} >
                    Приєднатись до спільноти
                        </Fab>
                      </a>
                      <a href='https://www.facebook.com/groups/900034500492310/' className={classes.a}>
                        <Fab variant="extended" color="primary" aria-label="add" className={classes.margin} >
                    Приєднатись до групи
                        </Fab>
                      </a>
                    </Grid>
                  </Grid>
                </Container>
              </div>
                    </div> */ }
            { /* Потрібен розголос*/}
            <div className={`section `}>
              <div className={`slide ${classes.img } ${classes.fantasy}`} data-anchor="slide1">
                <Container maxWidth="lg" className={`${classes.slidePravo}`}>
                  <Grid container spacing={3} item xs={12} sm={12} className={`${classes.slidePravoFirst}`}>

                    <Typography align="center" variant="h1" className={classes.titleFonts} >Потрібен розголос</Typography>

                    <Typography align='center' variant='button' component="h2" className={classes.myTypography} >
                    Кожен з нас хто змінює себе, той змінює світ <br/>
                    
                      <br/>
                            Чим я можу бути корисним?
                    </Typography>
                    <Grid container item xs={12} sm={12} justify={'center'}>
                      <Fab variant="extended" color="primary" aria-label="add" className={classes.margin} onClick={() => {
                        fullpageApi.moveSlideRight()
                      } }>
                        <ArrowForward className={classes.extendedIcon} />
                        дізнатись
                      </Fab>
                    </Grid>
                  </Grid>
                </Container>
              </div>
              <div className={`slide ${classes.img } ${classes.field} `} data-anchor="slide2" >
                <Container>
                  <Grid container spacing={3} className={classes.vuvchenaPravoSlide2}>
                    <Grid container item xs={12} sm={12} justify={'center'}>
                      <Paper className={classes.paper}>
                        <Typography variant="h5" align='center' className={classes.a}>
                        Якщо ти звичайний користувач соціальної мережі, зареєструйся у спільноті <a href='https://www.facebook.com/novakraina.pp.ua' className={classes.a}> Smart Ukraine </a> у facebook
                          , цє допоможе врахувати потрєбу цього продукту. <br/> <br/>
                          Якщо ти бажаєш долучитись до розробки цієї мережі або висловитись, прокоментувати,
                          запропонувати щось, тоді реєструйся у групі
                          <a href='https://www.facebook.com/groups/900034500492310/' className={classes.a}> Українська Соціальна Мережа Громад </a> сторінки
                          <a href='https://www.facebook.com/novakraina.pp.ua' className={classes.a}> Smart Ukraine </a>

                          <br/> <br/>
                          А також реєструйтесь на цьому сайті, цей ресурс буде міні прототипом мережі
                          <br/> <br/>
                          Величезна подяка свідомим Українцям які надихають та відчиняють завісу масової безсвідомості,
                          за ради спільної мети - мати достойне життя у своїй країні. <br/> <br/>
                          <a href="http://bagnetnacii.blogspot.com/">ГО ОПГ "Багнет Нації"</a> <br/>
                          <a href="https://budmo.in.ua/">Школа Конституції</a> <br/>
                          <a href="http://ukr-merezha.com/">Суспільна система</a> <br/>
                        </Typography>
                      </Paper>
                    </Grid>
                  </Grid>

                </Container>
              </div>
            </div>
          </ReactFullpage.Wrapper>

        );
      }}
    >
    </ReactFullpage>

  )
};

ReactDOM.render(<Body />, document.getElementById('root'));
// "homepage": "https://denisavilov.github.io/Nova_Kraina_deploy",
