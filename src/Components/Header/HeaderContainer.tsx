import React from 'react'
import { connect } from 'react-redux'
import { auth } from '../../API/authMail'
import { sanIsOpen, sanLogout } from '../../redux/auth_users_email'
import { RootReducerType } from '../../redux/redux'
import { authUsersEmail } from '../../redux/reselect'
import HeaderMenu from './HeaderMenu'


class HeaderContainer extends React.Component<HeaderContainerAllTS> {
  componentDidMount() {
    auth.onAuthStateChanged(
        (user) => {
          if (user) {
            this.props.sanIsOpen(true)
            console.log('onAuthStateChanged user ', user )
          } else {
            this.props.sanIsOpen(false)
            console.log('out ', user )
          }
        }
    )
  }
  render() {
    let {isOpen, sanLogout} = this.props
    return (<HeaderMenu isOpen={isOpen} sanLogout={sanLogout}/>)
  }
}

const mapStateToProps = ( state: RootReducerType ): MapStateToProps => {
  return {
    isOpen: authUsersEmail(state).isOpen,
  }
}

export default connect<MapStateToProps, TDispatchProps, ownBodyTS, RootReducerType>( mapStateToProps, {sanIsOpen, sanLogout} )(HeaderContainer)

type TDispatchProps = {
  sanIsOpen: (isOpen: boolean) => void
  sanLogout: () => void
}
type MapStateToProps = {
    isOpen: boolean
  }
type ownBodyTS = {}
type HeaderContainerAllTS = MapStateToProps & TDispatchProps & ownBodyTS
