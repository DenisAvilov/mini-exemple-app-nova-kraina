import React from 'react'
import { Profile } from '../Profile/Profile'

import { Body } from './Body'
type mapBodyPropstS= {}
type dispathBodyTS= {}
type ownBodyTS= {}

type initiales = mapBodyPropstS | dispathBodyTS | ownBodyTS

export class BodyContainer extends React.Component<initiales> {
  render() {
    return ( <>
      {/* <Body /> */}
        <Profile />
    </> )
  }
}
