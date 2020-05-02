import React, { Component } from 'react';
import './App.css';
// import Greet from './Greet'
// import Welcome from './Welcome'
// import Message from './Message'
// import Counter from './Counter'
// import FunctionClick from './FunctionClick';
// import ParentComponent from './ParentComponent';
// import UserGreeting from './UserGreeting';
import NameList from './NameList'

class App extends Component {
  
 render(){
   return(
     <div className="App">
  
       <NameList/>

    
     </div>
   );
 }
  
  
}

export default App;
