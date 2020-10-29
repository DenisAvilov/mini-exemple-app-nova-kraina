import React from 'react'
import './App.css'
import Container from '@material-ui/core/Container'
import { BodyContainer } from './Components/Body/BodyContainer'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Route, Switch } from 'react-router-dom'
import { HeaderContainer } from './Components/Header/HeaderContainer'
import { LoginContainer } from './Components/LoginBase/LoginContainer'
import SignUp from './Components/LoginBase/SignUp'

const useStyles = makeStyles( (theme: Theme) => createStyles( {
  root: {
    position: 'relative',
  },
}))

const App: React.FC<appTs> = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {/* <CssBaseline /> */}
      <Switch>
        <Route path="/signup" render={ ()=> ( <SignUp /> )}/>
        <Route path="/signin" render={ () => ( <LoginContainer /> )} />
        <Route exact path="/" render={ () =>
          <React.Fragment>
            <Container maxWidth="lg" className={classes.root}>
              <HeaderContainer />
            </Container>
            <BodyContainer/>
          </React.Fragment>
        } />
      </Switch>
    </div>

  );
};

type appTs = {}
export default App;
// type AppRouteTS = {}
// const AppRoute: React.FC<AppRouteTS> = () => {

// }
