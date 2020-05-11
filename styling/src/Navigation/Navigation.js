import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import classes from './navigation.module.css'

class Navigation extends Component {
    render() {
        return (
            <nav className={classes.Nav}>
                <ul className={classes.Links}>
                    <NavLink to="/radium">
                        <li >Radium</li>
                    </NavLink>

                    <NavLink to="/styledComponents">
                        <li>StyledComponent</li>
                    </NavLink>
                    <NavLink to="/cssModule">
                        <li >CssModule</li>
                    </NavLink>
                    <NavLink to="/inlineCss">
                        <li >InlineCss</li>
                    </NavLink>
                </ul>
            </nav>
        )
    }
}

export default Navigation

