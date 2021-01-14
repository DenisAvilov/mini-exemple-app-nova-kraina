import React from 'react'
import { connect } from 'react-redux'
import { sanAuthUpEmail } from '../../redux/authUp_email'
import { RootReducerType } from '../../redux/redux'
import { SignUp } from './SignUp'
import { authUsersEmail } from '../../redux/reselect'
import { Redirect } from 'react-router-dom'

class LoginUpContainer extends React.Component<LoginAllTypes> {
  render() {
    return (this.props.isOpen ? <Redirect to={'/'} /> : <SignUp sanAuthUpEmail={this.props.sanAuthUpEmail} />)
  }
}
let mapStateToProps = (state: RootReducerType): MapStateToProps => {
  return {
    email: state.userAuthMail.email,
    isOpen: authUsersEmail(state).isOpen,
  }
}
export default connect( mapStateToProps, { sanAuthUpEmail} )( LoginUpContainer )
    type AuthUpEmailTS = {
        firstName?: string | null,
        lastName?: string| null,
        email: string,
        password: string,
        getInspired?: boolean
      }
    type MapDispath = {
        sanAuthUpEmail: (dataUser: AuthUpEmailTS ) => void
      }
    type MapStateToProps = {
         email: string,
         isOpen: boolean,
    }
    type OwnType = {}
    type LoginAllTypes = MapStateToProps & MapDispath
