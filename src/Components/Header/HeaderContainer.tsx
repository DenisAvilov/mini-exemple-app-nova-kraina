import React from 'react'
import HeaderMenu from './HeaderMenu'


export class HeaderContainer extends React.Component {
  componentDidUpdate(prevProps: any) {
    // eslint-disable-next-line no-debugger
    const { match }: any = this.props
    console.log(match)
  }
  render() {
    return (<HeaderMenu />)
  }
}
