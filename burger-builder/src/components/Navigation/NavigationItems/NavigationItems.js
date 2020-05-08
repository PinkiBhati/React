import React from 'react'
import classes from './navigationItems.module.css'
import NaviagtionItem from './NavigationItem/NaviagtionItem'


const NavigationItems=()=> (
    <ul className={classes.NavigationItems}>
        <NaviagtionItem link="/" exact >Burger Builder</NaviagtionItem>
        <NaviagtionItem link="/orders" >Orders</NaviagtionItem>
    </ul>
)

export default NavigationItems
