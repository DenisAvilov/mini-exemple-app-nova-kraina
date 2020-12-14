import React from 'react'
import { connect } from 'react-redux'
import { sanAuthMailIn } from '../../redux/auth_users_email'
import { RootReducerType } from '../../redux/redux'
import { SignIn} from './SignIn'


class LoginContainer extends React.Component<LoginAllTypes> {

  render() {
    return <SignIn sanAuthMailIn={this.props.sanAuthMailIn} email={this.props.email}/>
  }
}
let mapStateToProps = (state: RootReducerType): MapStateToProps => {
  return {
    email: state.userAuthMail.email,
  }
}
export default connect( mapStateToProps,
    { sanAuthMailIn} )( LoginContainer )

    type MapDispath = {
      sanAuthMailIn: ( email?: string | null,
        password?: string | null,
        controlLabel?: boolean ) => void
    }
    type MapStateToProps = {
         email?: string | null
    }
    type OwnType = {}
    type LoginAllTypes = MapStateToProps & MapDispath & OwnType

