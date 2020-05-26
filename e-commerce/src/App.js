import React from 'react';
import './App.css';
import Header from './components/Header';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'

function App() {

  return (

    <div className="App">
      <Header />
      <Switch>
        <Route path="/cart" component={Logout} />} />
        <Route path="/orders" component={Logout} />} />
        <Route path="/login" component={Logout} />} />
        <Route path="/categories" component={Categories} />
        <Route path="/" exact component={BurgerBuilder} />
      </Switch>
    </div>


  );
}

export default App;
