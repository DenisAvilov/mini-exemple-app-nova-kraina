import React from 'react'
import { connect } from 'react-redux'
import { registrNewProfile } from '../../redux/general'
import { RootReducerType } from '../../redux/redux'
import { SignUp } from './SignUp'
import { profile } from '../../redux/reselect'
import { Redirect } from 'react-router-dom'
import { TSdefaultProfile } from '../../redux/typesTs'

class LoginUpContainer extends React.Component<LoginAllTypes> {
  render() {
    return (this.props.isOpen
    ? <Redirect to={'/'} />
    : <SignUp registrNewProfile ={this.props.registrNewProfile } />)
  }
}
let mapStateToProps = (state: RootReducerType): MapStateToProps => {
  return {
    email: state.general.profile.email,
    isOpen: profile(state).profile.isOpen,

  }
}
export default connect< MapStateToProps, MapDispath, OwnType, RootReducerType>
( mapStateToProps, { registrNewProfile } )( LoginUpContainer )

    type MapDispath = {
        registrNewProfile : (dataUser: TSdefaultProfile ) => void
      }
    type MapStateToProps = {
        email: string,
        isOpen?: boolean,
    }
    type OwnType = {}
    type LoginAllTypes = MapStateToProps & MapDispath & OwnType
