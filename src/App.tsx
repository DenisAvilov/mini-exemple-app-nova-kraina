import React from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom'
import HeaderContainer from './Components/Header/HeaderContainer'
import LoginContainer from './Components/LoginBase/LoginContainer'
import LoginUpContainer from './Components/LoginBase/LoginUpContainer'
import store, { RootReducerType } from './redux/redux'
import { initRes, profile } from './redux/reselect'
import { connect, Provider } from 'react-redux'
import ProfileContainer from './Components/Profile/ProfileContainer'
import { Landing } from './Components/Landing/Landing'
import { initSuccess } from './redux/initialization'
import { compose } from 'redux'
import theme from './themeStyles'
import { InfoCards } from './Components/Profile/InfoCards/InfoCards'

export class App extends React.Component<AppContainerAllTS> {
  componentDidMount() {
    this.props.initSuccess()
  }

  render() {
    const {init, isOpen } = this.props
    if (!init) return <>Завантаження...</>
    return (
      <Switch>
        <Route path="/signup" render={ ()=> ( <LoginUpContainer /> )}/>
        <Route path="/signin" render={ () => ( <LoginContainer /> )} />
        <Route path="/infocards" render={
          () => <InfoCards/>}/>

        {isOpen ?
        <Route exact path={['/', '/profile/:userId?']} render={
          () => <React.Fragment> <HeaderContainer/> <ProfileContainer/>
          </React.Fragment> } />
        :
        <Route exact path="/" render={
          ()=> ( <React.Fragment> <HeaderContainer/> <Landing/>
          </React.Fragment>)}/>
        }
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    )
  }
}

const NoMatch: React.FC<{}> = () => <div> Нема запитуваної вами сторінки</div>

const mapStateToProps = (state: RootReducerType): MapStateToProps => {
  return {
    init: initRes(state).success,
    firstName: profile(state).profile.firstName,
    isOpen: profile(state).profile.isOpen,
  }
}
const AppContainer = compose<React.ComponentType>(
    withRouter,
    connect<MapStateToProps,
    TDispatchProps, TSown, RootReducerType>(mapStateToProps, {initSuccess})
)(App)

const URL = process.env.PUBLIC_URL || '/mini-exemple-app-nova-kraina'

export const NovaKraina:React.FC = () => {
  return <Provider store={store}>
    <BrowserRouter basename={URL}>
      <MuiThemeProvider theme={theme} >
        <AppContainer />
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>
}

type MapStateToProps = {
  isOpen: boolean
  firstName: null | string
  init: boolean
}
type TDispatchProps= {
  initSuccess: () => void
}
type TSown= {
}
type AppContainerAllTS = MapStateToProps & TDispatchProps & TSown

