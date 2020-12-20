import React from 'react'
import './App.css'
import Container from '@material-ui/core/Container'
import { BodyContainer } from './Components/Body/BodyContainer'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Route, Switch } from 'react-router-dom'
import { HeaderContainer } from './Components/Header/HeaderContainer'
import LoginContainer from './Components/LoginBase/LoginContainer'
import LoginUpContainer from './Components/LoginBase/LoginUpContainer'


const useStyles = makeStyles( (theme: Theme) => createStyles( {
  root: {
    position: 'relative',
  },
}))


const App: React.FC<{}> = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {/* <CssBaseline /> */}
      <Route path="/signup" render={ ()=> ( <LoginUpContainer /> )}/>
      <Route path="/signin" render={ () => ( <LoginContainer /> )} />
      <Switch>
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


export default App
// type AppRouteTS = {}
// const AppRoute: React.FC<AppRouteTS> = () => {
// }
