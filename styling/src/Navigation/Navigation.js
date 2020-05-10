import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import classes from './navigation.module.css'

 class Navigation extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <NavLink  to="/radium">
                        <li className={classes.Links}>Radium</li>
                    </NavLink>
                    
                    <NavLink  to="/styledComponents">
                        <li className={classes.Links}>StyledComponent</li>
                    </NavLink>
                    <NavLink  to="/cssModule">
                        <li className={classes.Links}>CssModule</li>
                    </NavLink>
                    <NavLink to="/inlineCss">
                        <li className={classes.Links}>InlineCss</li>
                    </NavLink>
                </ul>
            </nav>
        )
    }
}

export default Navigation

