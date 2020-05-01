import React, { Component } from 'react';
//import Radium from 'radium';
import styled from 'styled-components';
import './Person.css'

// const StyledDiv = styled.div` styled.div

// width:60%;
// margin: auto;
// border: 1px solid #ccc;
// box-shadow: 16px;
// padding: 10px;
// text-align: center;


//  @media (min-width : 500px){

//     width: 450px;

// }`

class Person extends Component {

    render() {

        console.log('[Person.js] rendering');
        return (
            //    <div className="Person" style={style}>

            <
            button >
            <
            p onClick = { this.props.click } > I m a { this.props.name }
            of { this.props.age }
            years old! < /p> <
            p > { this.props.children } < /p> <
            input type = "text"
            onChange = { this.props.changed }
            value = { this.props.name }
            /> </button >

        );
    }


}

export default person;