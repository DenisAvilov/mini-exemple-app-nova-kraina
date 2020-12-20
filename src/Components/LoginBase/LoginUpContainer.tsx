import React from 'react'
import { connect } from 'react-redux'
import { sanAuthUpEmail } from '../../redux/authUp_email'
import { RootReducerType } from '../../redux/redux'
import { SignUp } from './SignUp'


class LoginUpContainer extends React.Component<LoginAllTypes> {
 
  render() {
    return <SignUp sanAuthUpEmail={this.props.sanAuthUpEmail}/>
  }
}
let mapStateToProps = (state: RootReducerType): MapStateToProps => {
  return {
    email: state.userAuthMail.email,
  }
}
export default connect( mapStateToProps, { sanAuthUpEmail} )( LoginUpContainer )
    type AuthUpEmailTS = {
        firstName?: string | null,
        lastName?: string| null,
        email?: string| null,
        password?: string| null,
        getInspired?: boolean
      }
    type MapDispath = {
        sanAuthUpEmail: (dataUser: AuthUpEmailTS ) => void
      }
    type MapStateToProps = {
         email?: string | null
    }
    type OwnType = {}
    type LoginAllTypes = MapStateToProps & MapDispath
