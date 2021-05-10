import React from 'react'
import { connect } from 'react-redux'
import { setStatus } from '../../redux/profile_reduce'
import { RootReducerType } from '../../redux/redux'
import { authUsersEmail, resProfile } from '../../redux/reselect'
import { Profile } from './Profile'

class ProfileContainer extends React.Component< ProfileTS > {
  componentDidUpdate(prevProps:any) {
    if (this.props.uid != prevProps.uid) {
      this.props.setStatus(this.props.uid)
    }
  }
  render() {
    let { fullName, status } = this.props
    return (
      <Profile fullName={fullName} status={status}/>
    )
  }
}

const mapStateToProps = (state:RootReducerType) : MapStateToPropsTS => {
  return {
    fullName: authUsersEmail(state).fullName,
    uid: authUsersEmail(state).uid,
    status: resProfile(state).status,
  }
}

export default connect<MapStateToPropsTS, DispatchPropsTS,
 OwnStateTS, RootReducerType>(
     mapStateToProps, {setStatus} )(ProfileContainer)

type MapStateToPropsTS = {
    fullName: string
    uid: string
    status: string
}
type DispatchPropsTS = {
  setStatus: (uid: string) => void
}
type OwnStateTS = {}

type ProfileTS = MapStateToPropsTS & DispatchPropsTS & OwnStateTS
