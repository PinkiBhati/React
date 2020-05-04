import React from 'react'
import original from '../../assets/images/original.png';
import classes from './logo.module.css'

const Logo=()=> (

    <div className={classes.Logo}>
        <img src={original} alt="My Burger"></img>
    </div>
);

export default Logo
