import React from 'react';

import classes from './counterControl.module.css';

const counterControl = (props) => (
    <div className={classes.CounterControl} onClick={props.clicked}>
        {props.label}
    </div>
);

export default counterControl;