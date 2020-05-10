import React, { Component } from 'react'
import classes from './cssModule.module.css'

 class CssModule extends Component {
    render() {
        return (
            <div className={classes.Div} >
                <p className={classes.Paragraph}> This is all about Css Module</p>
            </div>
        )
    }
}

export default CssModule
