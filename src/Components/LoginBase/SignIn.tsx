import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import { Formik, Form, ErrorMessage, FastField } from 'formik'
import { useDispatch } from 'react-redux';
import userEmail, { sanAuthMailIn } from './../../redux/auth_users_email'


type InitialValuesTsIn = {
  email?: string | null,
  password?: string | null,
  controlLabel?: boolean,
}
type PropsSignIn = {
  email?: string | null,
  sanAuthMailIn: ( email?: string | null, password?: string | null, controlLabel?: boolean, ) => void,
  }
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="http://localhost:3000/">
        Nova Ukraina
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
    theme.palette.type === 'light'
      ? theme.palette.grey[50]
      : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));
const validate = (values: InitialValuesTsIn) => {
  let error: InitialValuesTsIn = {}
  if (!values.password ) {
    error.password = 'Обов\'язкове поле'
  }
  if (!values.email) {
    error.email = 'Обов\'язкове поле'
  } else if
  (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    error.email = 'Невірна адреса електронної пошти';
  }
  return error
}
export const SignIn:React.FC< PropsSignIn > = (props: PropsSignIn) => {
  let {email} = props
  const classes = useStyles();
  // const dispatch = useDispatch()
  const onSubmit = (values: InitialValuesTsIn) => {
    props.sanAuthMailIn(values.email, values.password, values.controlLabel)
    // dispatch(props.sanAuthMailIn(values.email, values.password, values.controlLabel))
  }
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Увійти
          </Typography>
          <Formik
            initialValues = { {email: '', password: '', controlLabel: false} }
            validate = {validate}
            onSubmit = { onSubmit }
          >
            { (formik) => {
              return (
                <Form className={classes.form}>
                  <FastField name="email">
                    {(props : any) => {
                      return <div>
                        <TextField
                          variant="outlined"
                          margin="normal"
                          type="email"
                          {...props.field}
                          required
                          fullWidth
                          label="Пошта"
                          autoComplete="email"
                          autoFocus
                        />
                        <ErrorMessage name="email">
                          {(errorMsg) => <div className="error"> {errorMsg} </div>}
                        </ErrorMessage>

                      </div>
                    }
                    }
                  </FastField>
                  <FastField name="password">
                    { (props: any) => {
                      return (
                        <React.Fragment>
                          <TextField
                            variant="outlined"
                            margin="normal"
                            {...props.field}
                            required
                            fullWidth
                            label="Пароль"
                            type="password"
                            autoComplete="current-password"
                          />
                          <ErrorMessage name="password">
                            {(errorMsg) => <div className="error"> {errorMsg} </div>}</ErrorMessage>
                        </React.Fragment>
                      )
                    }}
                  </FastField>
                  <FastField name="controlLabel">
                    { (props: any) => {
                      return ( <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        {...props.field}
                        label="Запам'ятати мене"
                      />)
                    }}
                  </FastField>

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
              Увійти
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      <Link href="#" variant="body2">
                  Загубили пароль?
                      </Link>
                    </Grid>
                    <Grid item>
                      <NavLink to="/signup">
                        {/* <Link href="/signup" variant="body2"> */}
                        {'Не маете аккаунту? Створити'}
                        {/* </Link> */}
                      </NavLink>
                    </Grid>
                  </Grid>
                  <Box mt={5}>
                    <Copyright />
                    <div>{email}</div>
                  </Box>
                </Form>
              )
            }}

          </Formik>
        </div>
      </Grid>

    </Grid>
  );
}
