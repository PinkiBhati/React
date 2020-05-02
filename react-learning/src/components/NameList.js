import React from 'react'
import Person from './Person';

function NameList() {
    // const persons = [{id:1,name:'Pinki',age:24},{id:2,name:'Preeti',age:22},{id:3,name:'Ankit',age:26}]
    // const personList = persons.map(person => <Person key ={person.id}person={person}/>);
    const names=['Pinki','Preeti','Ankit']
const nameList= names.map((name,index)=> <h2 key={index}>{index} {name}</h2>)
    return (
        <div>{nameList}</div>
    )
}

export default NameList
