import React from 'react'

function Person(props) {
    return (
        <div>
            <h2>My id is {props.person.id}  and my name is  {props.person.name} and my age is  {props.person.age}</h2>
        </div>
    )
}

export default Person
