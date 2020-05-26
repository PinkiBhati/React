import React from 'react'
import classes from './toggle.module.css'

const Toggle=(props)=> {
    return (
        <div className={classes.Toggle} onClick={props.clicked} >
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Toggle
