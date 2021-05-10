import React from 'react'
import './App.css'
import BodyContainer from './Components/Body/BodyContainer'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Route, Router, Switch } from 'react-router-dom'
import HeaderContainer from './Components/Header/HeaderContainer'
import LoginContainer from './Components/LoginBase/LoginContainer'
import LoginUpContainer from './Components/LoginBase/LoginUpContainer'
import { RootReducerType } from './redux/redux'
import { authUsersEmail } from './redux/reselect'
import { connect } from 'react-redux'
import { sanIsOpen } from './redux/auth_users_email'
import { auth } from './API/authMail'
import ProfileContainer from './Components/Profile/ProfileContainer'


const useStyles = makeStyles( (theme: Theme) => createStyles( {
  root: {
    position: 'relative',
  },
}))

type AppTs = {
  isOpen: boolean
}
const App: React.FC<AppTs> = (props) => {
  const classes = useStyles()
  let { isOpen } = props
  // console.log('App ', isOpen)
  return (
    <div className={classes.root}>
      {/* <CssBaseline /> */}


      <Switch>
        {isOpen
          ? <Route exact path="/" render={ () =>
            <React.Fragment>
              <HeaderContainer />
              <ProfileContainer/>
            </React.Fragment> } />
          : <Route exact path="/" render={ () => <React.Fragment>
            <HeaderContainer />
            <BodyContainer />
          </React.Fragment>} />}
        <Route path="/signup" render={ ()=> ( <LoginUpContainer /> )}/>
        <Route path="/signin" render={ () => ( <LoginContainer /> )} />
      </Switch>
    </div>

  );
};

// Class AppContainer
class AppContainer extends React.Component<AppContainerAllTS> {
  componentDidMount() {
    // listen for auth status change
    auth.onAuthStateChanged( (user) => {
      if (user) {
        this.props.sanIsOpen(true, user.uid)
      } else {
        this.props.sanIsOpen(false, '')
        // console.log('out ', user )
      }
    })
  }


  render() {
    return <App isOpen={this.props.isOpen}/>
  }
}

const mapStateToProps = (state: RootReducerType): MapStateToProps => {
  return {
    isOpen: authUsersEmail(state).isOpen,
  }
}

export default connect<MapStateToProps, TDispatchProps, ownBodyTS, RootReducerType>(mapStateToProps, {sanIsOpen})( AppContainer )

type MapStateToProps = {
  isOpen: boolean
}
type TDispatchProps= {
  sanIsOpen: (isOpen: boolean, uid: string) => void,
}
type ownBodyTS= {}

type AppContainerAllTS = MapStateToProps & TDispatchProps & ownBodyTS

// type AppRouteTS = {}
// const AppRoute: React.FC<AppRouteTS> = () => {
// }
