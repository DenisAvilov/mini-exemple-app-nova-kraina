import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { sanAuthMailIn } from '../../redux/auth_users_email'
import { RootReducerType } from '../../redux/redux'
import { authUsersEmail } from '../../redux/reselect'
import BodyContainer from '../Body/BodyContainer'
import { SignIn} from './SignIn'


class LoginContainer extends React.Component<LoginAllTypes> {
  constructor(props: any) {
    super(props)
  }
  componentDidMount() {
    // console.log(this.props.match.params.userId)
  }
  componentDidUpdate(prevProps: any) {
    // Популярный пример (не забудьте сравнить пропсы):
    if (this.props.isOpen !== prevProps.isOpen) {
      console.log('this.props ', this.props)
      console.log('prevProps ', prevProps.isOpen)
    }
  }
  render() {
    console.log('sing In', this.props.isOpen)
    return ( this.props.isOpen
      ? <Redirect to={'/'}></Redirect>
      : <SignIn sanAuthMailIn={this.props.sanAuthMailIn} error={this.props.error}/>)
  }
}
let mapStateToProps = (state: RootReducerType): MapStateToProps => {
  return {
    email: state.userAuthMail.email,
    error: authUsersEmail(state).error,
    isOpen: authUsersEmail(state).isOpen,
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
        isOpen: boolean
    }
    type OwnType = {}
    type LoginAllTypes = MapStateToProps & MapDispath
