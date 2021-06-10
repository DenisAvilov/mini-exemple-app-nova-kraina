import React from 'react'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { Formik, Form, ErrorMessage, Field } from 'formik'
import { NavLink } from 'react-router-dom'
import { Logo } from '../Header/HeaderMenu'
import { TSdefaultProfile } from '../../redux/typesTs'
import { logoDefault } from './../../img/logo.svg'
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://denisavilov.github.io/cv-developer/">
      Nova Ukraina
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const useStyles = makeStyles((theme) => ({
  paper: {
    // marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  content: {
    paddingTop: theme.spacing(8),
  },
}))


export const SignUp: React.FC<LoginUpTS> = (props: LoginUpTS) => {
  const { registrNewProfile } = props
  const classes = useStyles()
  const validate = (values: TSdefaultProfile): {} => {
    let error: errorTest = {}
    if (!values.firstName) {
      error.firstName = 'Обов\'язкове поле';
    } else if (values.firstName.length <= 1) {
      error.firstName = 'Не менше двох знаків'
    } if (!values.lastName) {
      error.lastName = 'Обов\'язкове поле';
    } else if (values.lastName.length <= 1) {
      error.lastName = 'Не менше двох знаків'
    }
    if (!values.password) {
      error.password = 'Обов\'язкове поле';
    } else if (/^\s+$/.test(values.password)) {
      error.password = 'Пароль не може починатись з пробелу'
    } else if (values.password.length < 6) {
      error.password = 'Не менше 6 знаків'
    }
    if (!values.email) {
      error.email = 'Обов\'язкове поле';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      error.email = 'Невірна адреса електронної пошти';
    }
    return error;
  }
  const onSubmit = (values: TSdefaultProfile) => {
    registrNewProfile (values)
  }

  return (
    <Container component="main" maxWidth="xs" className={classes.content}>
      <CssBaseline />
      <div className={classes.paper}>
        <Logo />
        <Typography component="h1" variant="h5">
          Зареєструйтесь
        </Typography>
        <Formik
          initialValues = {
            { firstName: '',
              lastName: '',
              email: '',
              password: '',
              getInspired: false,
              status: '',
              isOpen: false,
              teflon: {
                vodafon: null,
                kievstar: null,
                life: null,
              },
              contact: {
                facebook: null,
                viber: null,
                telegram: null,
                tiktok: null,
                tviter: null,
              },
              placeOfResidence: {
                country: null,
                city: null,
                village: null,
              },
              photo: {
                avatar: logoDefault,
                avatarBgLarge: null,
                avatarBgMini: null,
              },

            }}
          validate = {validate}
          onSubmit = { onSubmit }
        >
          { (formik: { isValid: any }) => {
            return (
              <Form className={classes.form} >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Field name="firstName" >
                      { ( props : any) => {
                        return <div>
                          <TextField
                            autoFocus
                            placeholder="Ім'я"
                            {...props.field}
                            variant="outlined"
                            fullWidth
                            required
                            label="Ім'я"
                            type="text"
                          />
                          <ErrorMessage name="firstName">
                            {(errorMsg: React.ReactNode) => <div className="error"> {errorMsg} </div>}
                          </ErrorMessage>
                        </div>
                      }}
                    </Field>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field name="lastName" >
                      {(props : any) => {
                        return <div>
                          <TextField
                            placeholder="Призвище"
                            type="text"
                            {...props.field}
                            required
                            variant="outlined"
                            fullWidth
                            label="Призвище"
                          />
                          <ErrorMessage name="lastName">
                            {(errorMsg) => <div className="error"> {errorMsg} </div>}
                          </ErrorMessage>
                        </div>
                      }}
                    </Field>
                  </Grid>
                  <Grid item xs={12}>
                    <Field name="email" >
                      {( props : any) => {
                        return <div>
                          <TextField
                            placeholder="Пошта"
                            type="email"
                            {...props.field}
                            required
                            variant="outlined"
                            fullWidth
                            label="Пошта"
                            autoComplete="email"
                          />
                          <ErrorMessage name="email">
                            {(errorMsg: React.ReactNode) => <div className="error"> {errorMsg} </div>}
                          </ErrorMessage>
                        </div>
                      }}
                    </Field>
                  </Grid>
                  <Grid item xs={12}>
                    <Field name="password" >
                      {(props: any) => {
                        return <div>
                          <TextField
                            placeholder="Пароль"
                            type="password"
                            {...props.field}
                            variant="outlined"
                            fullWidth
                            required
                            label="Пароль"
                            autoComplete="current-password"
                          />

                          <ErrorMessage name="password">
                            {(errorMsg: React.ReactNode) => <div className="error"> {errorMsg} </div>}
                          </ErrorMessage>
                        </div>
                      }}
                    </Field>
                  </Grid>
                  <Grid item xs={12}>
                    <Field name='getInspired'>
                      {(props: any)=>{
                        return <div>
                          <FormControlLabel
                            {...props.field}
                            control={<Checkbox value="allowExtraEmails" color="primary" />}
                            label="Я хочу отримувати натхнення, маркетингові акції та оновлення електронною поштою."
                            id="getInspired"
                          />
                        </div>
                      }}
                    </Field>

                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  // disabled= {!formik.isValid}
                >
            Зареєструватись
                </Button>
                <Grid container justify="flex-end">
                  <Grid item>
                    <NavLink to="/signin">
                      {'Маєте акаунт? Увійти'}
                    </NavLink>
                  </Grid>
                </Grid>
              </Form>
            )
          }}
        </Formik>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  )
}

type LoginUpTS = {
  registrNewProfile : (dataUser: TSdefaultProfile ) => void
}


type errorTest = {
  lastName?: string,
  firstName?: string,
  email?: string,
  password?: string
}

// let str = "Widget";
// if (~str.indexOf("Widget")) {
//   alert( 'Совпадение есть' ); // работает
// }
