import React from 'react';
//import Radium from 'radium';
import styled from 'styled-components';
import './Person.css'

const StyledDiv = styled.div ` styled.div
    
width:60%;
margin: auto;
border: 1px solid #ccc;
box-shadow: 16px;
padding: 10px;
text-align: center;


 @media (min-width : 500px){

    width: 450px;

}`

// const rnd = Math.random();

// if(rnd > 0.7)
// {
//     throw new Error('something went wrong');
// }
const person = (props) => {

    console.log('[Person.js] rendering');
    // const style={
    //     '@media (min-width: 500px)':{
    //         width:'450px'
    //     }
    // };
    return (
        //    <div className="Person" style={style}>
        <StyledDiv >
        <p onClick = { props.click } > I m a { props.name }
        of { props.age }
        years old! </p> 
        <p> { props.children } </p> <
        input type = "text"
        onChange = { props.changed }
        value = { props.name }
        /> </StyledDiv>

    )
}

export default person;