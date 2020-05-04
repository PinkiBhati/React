import React from 'react'
import classes from './navigationItems.module.css'
import NaviagtionItem from './NavigationItem/NaviagtionItem'


const NavigationItems=()=> (
    <ul className={classes.NavigationItems}>
        <NaviagtionItem link="/" active >Burger Builder</NaviagtionItem>
        <NaviagtionItem link="/" >Checkout</NaviagtionItem>
    </ul>
)

export default NavigationItems
