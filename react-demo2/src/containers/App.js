import React, { Component } from 'react';
import './App.css';
//import Person from '../Components/Persons/Person/Person'
import Cockpit from '../Components/Cockpit/Cockpit'
import Persons from '../Components/Persons/Persons'

//import styled from 'styled-components'
//import Radium, {StyleRoot} from 'radium';

// const StyledButton = styled.button` 
// background-color:${props => props.alt ? 'red' :'yellow'};
// color:white;
// font: inherit;
// border:1x solid blue;
// cusror: pointer;
// padding: 8px;

// &:hover {
//   background-color:${props => props.alt ? 'salmon' :'lightgreen'};
//   color: black;`

class App extends Component {


  constructor(props) {
    super(props);
    console.log("[App.js] construtor");

  }
  state = {
    persons: [
      { id: 'as1', name: 'Max', age: 23 },
      { id: 'as2', name: 'Manu', age: 45 },
      { id: 'as3', name: 'pinki', age: 24 }
    ],
    showPersons: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  componentWillMount() {
    console.log('[App.js] componentWillMount');
  }
  switchHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 23 },
        { name: 'Manu', age: 45 },
        { name: 'pinki', age: 24 }
      ]
    })
  }


  nameChangeHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    //const person= Object.assign({},this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState(
      {
        // persons:[
        //   {name:'maxi', age:23},
        //   {name: event.target.value, age:45},
        //   {name:'pinki',age:24}
        // ]

        persons: persons
      }
    )

  }

  deletePersonHandler = (personIndex) => {
    // const persons= this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }
  render() {
    console.log('[App.js] render');

    // const style={
    //   backgroundColor: 'green',
    //   color:'white',
    //   font: 'inherit',
    //   border:'1x solid blue',
    //   cusror:'pointer',
    //   padding: '8px',
    //   ':hover':{
    //     backgroundColor:'lightgreen',
    //     color:'black'
    //   }
    // };

    let persons = null;

    if (this.state.showPersons) {
      persons =
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler} />;


      /* <Person name ={this.state.obj[0].name} age={this.state.obj[0].age}/>
      <Person name ={this.state.obj[1].name} age={this.state.obj[1].age}
       click={this.switchHandler.bind(this,'Maxiii')}
       changed={this.nameChangeHandler}>My hobbies: Racing</Person>
      <Person name ={this.state.obj[2].name} age={this.state.obj[2].age}/> */


      // style.backgroundColor='red';
      // style[':hover']={
      //   backgroundColor:'salmon',
      //   color:'black'
      // }
    }

    // let classes=['red','bold'].join(' ');

    return (
      // <StyleRoot>
      <div className="App">
        <Cockpit
          title={this.props.appTitle}
          persons={this.state.persons}
          toggle={this.togglePersonsHandler} />
        {persons}
      </div>
      // </StyleRoot>
    );


    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi i am react app'));
  }
}

export default App;
