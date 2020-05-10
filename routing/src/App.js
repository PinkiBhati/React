import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import About from './components/About';
import Shop from './components/Shop';
import Home from './components/Home';
import Error from './components/Error'
import Nav from './components/Nav';

function App() {
  return (
    <Router>
    <div className="App">
      
      <Nav/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path ="/about" component={About}/>
          <Route path="/shop" component={Shop}/>
          <Route component={Error}/>
        </Switch>
      
    </div>
    </Router>
  );
}

export default App;
