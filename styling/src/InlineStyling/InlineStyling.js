import React from 'react'

const divstyle={
    width: '90%',
    height: '60px',
    margin: '30px 60px',
    border: '5px solid black',
    boxShadow: 'black',
    color: 'brown',
    backgroundColor: 'lightblue'
}

const paragragh={

    fontSize: 'large',
    textAlign: 'center'
}


const InlineStyling=()=> {
    return (
        <div style={divstyle}>
            <p style={paragragh}>This is Inline css styling</p>
        </div>
    )
}

export default InlineStyling
