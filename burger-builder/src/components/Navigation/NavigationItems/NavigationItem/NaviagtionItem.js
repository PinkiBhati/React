import React from 'react'
import classes from './navigationItem.module.css'
const NaviagtionItem = (props) => (
    <li className={classes.NavigationItem}>
        <a
            href={props.link}
            className={classes.active ? classes.active : null}>
            {props.children}</a>
    </li>
);

export default NaviagtionItem
