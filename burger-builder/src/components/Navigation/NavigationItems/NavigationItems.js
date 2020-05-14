import React from 'react'
import classes from './navigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'


const NavigationItems=(props)=> (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact >Burger Builder</NavigationItem>
        {props.isAuthenticated? <NavigationItem link="/orders" >Orders</NavigationItem>: null}
        {!props.isAuthenticated
            ? <NavigationItem link="/auth">Log In</NavigationItem>
            : <NavigationItem link="/logout">Logout</NavigationItem>}
        {/* {!props.isAuthenticated ? <NaviagtionItem link="/auth">Authenticate</NaviagtionItem> :<NaviagtionItem link="/logout">Logout</NaviagtionItem>} */}
    </ul>
)

export default NavigationItems
