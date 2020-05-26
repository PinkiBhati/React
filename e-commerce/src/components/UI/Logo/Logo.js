import React from 'react'
import original from '../../../assets/images/ecom.png';
import classes from './logo.module.css'

const Logo=()=> (

    <div className={classes.Logo}>
        <img src={original} alt="My E-commerce"></img>
    </div>
);

export default Logo