import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './nav.module.css'

const Nav = () => {
    return (
        <nav>
            <h3>Logo</h3>
            <ul className={classes.Links}>
                <NavLink to="/about" >
                    <li >About</li>
                </NavLink>
                <NavLink to="/shop" >
                    <li >Shop</li>
                </NavLink>
                

            </ul>
        </nav>
    )
}

export default Nav
