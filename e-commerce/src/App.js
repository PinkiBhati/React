import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import Categories from './components/Categories/Categories';
import Login from './components/Login/Login';

function App() {

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/categories" component={Categories} />
        <Route path="/login" component={Login} />} />
        {/* <Route path="/cart" component={Logout} />} />
        <Route path="/orders" component={Logout} />} />
        
        
        <Route path="/" exact component={Home} /> */}
      </Switch>
    </div>


  );
}

export default App;
