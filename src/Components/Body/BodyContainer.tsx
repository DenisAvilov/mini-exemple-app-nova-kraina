import React from 'react'
import { connect } from 'react-redux'
import { auth } from '../../API/authMail'
import { sanIsOpen } from '../../redux/auth_users_email'
import { RootReducerType } from '../../redux/redux'
import {idToken} from '../../redux/reselect'
import HeaderContainer from '../Header/HeaderContainer'

import { Profile } from '../Profile/Profile'

import { Body } from './Body'
type TStateProps= {
  isOpen: boolean
}
type TDispatchProps= {
  sanIsOpen: (isOpen: boolean) => void,
}
type ownBodyTS= {}

type initiales = TStateProps & TDispatchProps & ownBodyTS

class BodyContainer extends React.Component<initiales> {
  componentDidMount() {
  // listen for auth status change
    auth.onAuthStateChanged( (user) => {
      if (user) {
        this.props.sanIsOpen(true)
        console.log('onAuthStateChanged user ', user )
      } else {
        this.props.sanIsOpen(false)
        console.log('out ', user )
      }
    })
  }
  render() {
    console.log('this.props ', this.props)
    let { isOpen } = this.props
    // eslint-disable-next-line no-constant-condition
    return ( <Body /> )
  }
}
let mapStateToprops = (state: RootReducerType) => {
  return {
    idToken: idToken(state),
    isOpen: state.userAuthMail.isOpen,
  }
}

export default connect
<TStateProps, TDispatchProps, ownBodyTS, RootReducerType>( mapStateToprops, {sanIsOpen} )(BodyContainer)
