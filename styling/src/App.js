import React, { Component } from 'react'
import StyledComponent from './StyledComponent/StyledComponent'
import CssModule from './CssModule/CssModule'
import InlineStyling from './InlineStyling/InlineStyling'
import RadiumComp from './Radium/RadiumComp'

 class App extends Component {
  render() {
    return (
      <div>
        <StyledComponent/>
        <CssModule/>
        <InlineStyling/>
        <RadiumComp/>
      </div>
    )
  }
}

export default App

