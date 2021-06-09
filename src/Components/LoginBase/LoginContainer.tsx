import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { sanAuthMailIn } from '../../redux/general'
import { RootReducerType } from '../../redux/redux'
import { authUsersEmail, profile } from '../../redux/reselect'
import { SignIn} from './SignIn'

class LoginContainer extends React.Component<LoginAllTypes> {
  render() {
    return ( this.props.isOpen
      ? <Redirect to={'/'}></Redirect>
      : <SignIn sanAuthMailIn={this.props.sanAuthMailIn}
        error={this.props.error}/>)
  }
}
let mapStateToProps = (state: RootReducerType): MapStateToProps => {
  return {
    email: state.general.profile.email,
    error: authUsersEmail(state).error,
    isOpen: profile(state).profile.isOpen,
  }
}
export default connect( mapStateToProps,
    { sanAuthMailIn} )( LoginContainer )

    type MapDispath = {
      sanAuthMailIn: ( email: string,
        password: string,
        controlLabel?: boolean ) => void
    }
    type MapStateToProps = {
        email: string
        error?: string | null
        isOpen?: boolean
    }
    type OwnType = {}
    type LoginAllTypes = MapStateToProps & MapDispath & OwnType
