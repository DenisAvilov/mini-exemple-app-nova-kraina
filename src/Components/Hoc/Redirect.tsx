import React from 'react'
import { Redirect } from 'react-router'
import { RootReducerType } from '../../redux/redux'
// import { profile } from '../../redux/reselect'
import { connect } from 'react-redux'


let mapStateToProps = (store: RootReducerType) => {
  return {
    isOpen: store.profile.isOpen,
  }
}
type TSprops = ReturnType<typeof mapStateToProps>

export const redirect = (Component: React.ComponentType) => {
  class WrapComponent extends React.Component<any> {
    return() {
      if (!this.props.isOpen) return <Redirect to={{pathname: '/signin'}} />
      return <Component {...this.props}/>
    }
  }
  let GetWrapComponent = connect(mapStateToProps, {})(WrapComponent)
  return GetWrapComponent
}
