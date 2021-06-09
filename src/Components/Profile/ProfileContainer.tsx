import React from 'react'
import { connect } from 'react-redux'
import { avatarChangeSun, profileStoreSun} from '../../redux/general'
import { RootReducerType } from '../../redux/redux'
import { profile } from '../../redux/reselect'
import { Profile } from './Profile'
import { TSdefaultProfile } from '../../redux/typesTs'
import { compose } from 'redux'

class ProfileContainer extends React.Component< ProfileTS > {

  render() {
    const {profile, avatarChangeSun, uid} = this.props
    return (
      <Profile profile={profile} uid={uid}
        avatarChangeSun={avatarChangeSun} avatar={profile.photo.avatar}/>
    )
  }
}

const mapStateToProps = (state:RootReducerType) : MapStateToPropsTS => {
  return {
    isOpen: profile(state).profile.isOpen,
    profile: profile(state).profile,
    uid: state.general.uid,
  }
}

export default compose(
    // withRouter,
    // redirect,
    connect<MapStateToPropsTS, DispatchPropsTS,
  OwnStateTS, RootReducerType>(mapStateToProps, { avatarChangeSun, profileStoreSun} )
)(ProfileContainer)


type MapStateToPropsTS = {
  isOpen: boolean
  profile: TSdefaultProfile
  uid: string
}

type DispatchPropsTS = {
  profileStoreSun: (avatar?: null | string | File | undefined) => void
  avatarChangeSun: (fileUse: File, uid: string) => void
}
type OwnStateTS = {}

type ProfileTS = MapStateToPropsTS & DispatchPropsTS & OwnStateTS
