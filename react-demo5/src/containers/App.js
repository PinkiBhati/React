import React, { Component } from 'react'
import  './App.css';
//import Person from '../Components/Persons/Person/Person'
import Cockpit from '../components/Cockpit/Cockpit'
import Persons from '../components/Persons/Persons'
import withClass from '../hoc/withClass'
import Aux from '../hoc/Aux'
import AuthContext from '../context/auth-context'

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
    state={
        persons: [
            { id: 'as1', name: 'Max', age: 23 },
            { id: 'as2', name: 'Manu', age: 45 },
            { id: 'as3', name: 'pinki', age: 24 }
        ],
        showPersons: false,
        showCockpit: true,
        changeCounter : 0,
        authenticated:false
    }

    static getDerivedStateFromProps(props, state) {
        console.log('[App.js] getDerivedStateFromProps', props);
        return state;
    }

    componentDidMount() {
        console.log('[App.js] componentDidMount');
    }

    // componentWillMount() {
    //     console.log('[App.js] componentWillMount');
    // }
    switchHandler=(newName) => {
        this.setState({
            persons: [
                { name: newName, age: 23 },
                { name: 'Manu', age: 45 },
                { name: 'pinki', age: 24 }
            ]
        })
    };

    loginHandler=()=>{

      this.setState({authenticated:true});
    };


    nameChangeHandler=(event, id) => {

        const personIndex=this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person={...this.state.persons[personIndex] };

        //const person= Object.assign({},this.state.persons[personIndex]);

        person.name=event.target.value;

        const persons=[...this.state.persons];
        persons[personIndex]=person;
        this.setState((prevState,props)=>{
          return{

            persons: persons,
            changeCounter: prevState.changeCounter+1
          };
        });
    };

    deletePersonHandler=(personIndex) => {
        // const persons= this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({ persons: persons })
    }

    togglePersonsHandler=() => {
        const doesShow=this.state.showPersons;
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

        let persons=null;

        if (this.state.showPersons) {
            persons=<Persons
            persons={ this.state.persons }
            clicked={ this.deletePersonHandler }
            changed={ this.nameChangeHandler }
            isAuthenticated={this.state.authenticated}
            />;


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
          
            <Aux>
              <button onClick={()=>{this.setState({showCockpit: false})}}>Remove cockpit</button>
              <AuthContext.Provider value={{authenticated: this.state.authenticated,login:this.loginHandler}}>
            {this.state.showCockpit ? <Cockpit title={ this.props.appTitle }
            personsLength={ this.state.persons.length }
            toggle={ this.togglePersonsHandler }
            login={this.loginHandler}
            /> : null}
            { persons } 
            </AuthContext.Provider>
            </Aux>
            
        );


        //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi i am react app'));
    }
}

export default withClass(App, "App");