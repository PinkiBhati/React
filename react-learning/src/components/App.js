import React, { Component } from 'react';
import Greet from './Greet'
import './App.css';
import Welcome from './Welcome'
import Message from './Message'
import Counter from './Counter'

class App extends Component {
  
 render(){
   return(
     <div className="App">

    <Counter/>
      <Greet/>
      <Welcome/>
      <Message/>
     </div>
   );
 }
  
  
}

export default App;
