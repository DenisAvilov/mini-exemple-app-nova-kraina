import React from 'react'
import { connect } from 'react-redux'
import {sanLogout} from '../../redux/general'
import { RootReducerType } from '../../redux/redux'
import { profile} from '../../redux/reselect'
import { TSdefaultProfile } from '../../redux/typesTs'
import {HeaderMenu} from './HeaderMenu'


class HeaderContainer extends React.Component<HeaderContainerAllTS> {
  render() {
    let {isOpen, sanLogout, profile} = this.props
    return (<HeaderMenu
      isOpen={isOpen} sanLogout={sanLogout} profile={profile}
    />)
  }
}

const mapStateToProps = ( state: RootReducerType ): MapStateToProps => {
  return {
    isOpen: profile(state).profile.isOpen,
    profile: profile(state).profile,
  }
}

export default
connect< MapStateToProps, TDispatchProps, ownBodyTS, RootReducerType >
( mapStateToProps, { sanLogout } )(HeaderContainer)

type TDispatchProps = {
  sanLogout: () => void
}
type MapStateToProps = {
    isOpen: boolean
    profile: TSdefaultProfile
  }
type ownBodyTS = {}
type HeaderContainerAllTS = MapStateToProps & TDispatchProps & ownBodyTS
