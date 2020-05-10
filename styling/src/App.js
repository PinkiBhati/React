import React, { Component } from 'react'
import StyledComponent from './StyledComponent/StyledComponent'
import CssModule from './CssModule/CssModule'
import InlineStyling from './InlineStyling/InlineStyling'
import RadiumComp from './Radium/RadiumComp'
import {BrowserRouter,Switch, Route} from 'react-router-dom'
import Navigation from './Navigation/Navigation'
import Home from './Home'

 class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/styledComponents" component={StyledComponent}/>
            <Route path="/cssModule" component={CssModule}/>
            <Route path="/inlineCss" component={InlineStyling}/>
            <Route path="/radium" component={RadiumComp}/>

          </Switch>
      </div>

      </BrowserRouter>
      
    )
  }
}

export default App

