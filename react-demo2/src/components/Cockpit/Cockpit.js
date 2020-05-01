import React from 'react';
import './Cockpit.css'
const cockpit = (props) => {

    const classes = [];
    if (props.persons.length <= 2) {
        classes.push('red');
    }

    if (props.persons.length <= 1) {
        classes.push('bold');
    }
    return (
        <div className="Cockpit">
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}>This is nice</p>
            <button className="button" onClick={props.toggle}>Toggle Person</button>
        </div>
    );
};

export default cockpit;