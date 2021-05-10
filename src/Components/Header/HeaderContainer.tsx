import firebase from 'firebase'
import React from 'react'
import { connect } from 'react-redux'
import { auth } from '../../API/authMail'
import { sanFullName, sanIsOpen, sanLogout } from '../../redux/auth_users_email'
import { RootReducerType } from '../../redux/redux'
import { authUsersEmail, resProfile } from '../../redux/reselect'
import HeaderMenu from './HeaderMenu'


class HeaderContainer extends React.Component<HeaderContainerAllTS> {
  componentDidMount() {
    auth.onAuthStateChanged(
        (user) => {
          if (user ) {
            this.props.sanIsOpen(true, user.uid)
            this.getCurrentUser(this.props.uid)
          } else {
            this.props.sanIsOpen(false, '')
          }
        }
    )
    console.log('auth ', auth)
  }
  componentDidUpdate(prevProps: any) {
    console.log('prevProps ', prevProps)
    console.log('this.props.fullName ', this.props.fullName)
    if (this.props.fullName !== prevProps.fullName) {
      this.props.sanFullName(this.props.fullName)
      if (this.props.fullName == 'Anonymous') {
        this.getCurrentUser(this.props.uid)
      }
    }
  }
  getCurrentUser(uid: string) {
    firebase.database().ref(`/users/` + uid)
        .once('value').then((snapshot) => {
          let username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
          this.props.sanFullName(username)
        })
  }

  render() {
    let {isOpen, sanLogout, fullName} = this.props
    return (<HeaderMenu isOpen={isOpen} sanLogout={sanLogout} fullName={fullName}/>)
  }
}

const mapStateToProps = ( state: RootReducerType ): MapStateToProps => {
  return {
    isOpen: authUsersEmail(state).isOpen,
    fullName: authUsersEmail(state).fullName,
    uid: authUsersEmail(state).uid,
  }
}

export default connect<MapStateToProps, TDispatchProps, ownBodyTS, RootReducerType>( mapStateToProps, {sanIsOpen, sanLogout, sanFullName} )(HeaderContainer)

type TDispatchProps = {
  sanIsOpen: (isOpen: boolean, uid: string) => void
  sanLogout: () => void
  sanFullName: (fullName: string) => void

}
type MapStateToProps = {
    isOpen: boolean
    fullName: string
    uid: string
  }
type ownBodyTS = {}
type HeaderContainerAllTS = MapStateToProps & TDispatchProps & ownBodyTS
