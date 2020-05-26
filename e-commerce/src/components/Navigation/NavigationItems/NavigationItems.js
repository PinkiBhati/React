import React from 'react'
import classes from './navigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'


const NavigationItems=(props)=> (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact >Home</NavigationItem>
        <NavigationItem link="/categories">Categories</NavigationItem>
         <NavigationItem link="/orders" >Orders</NavigationItem>
         <NavigationItem link="/cart" >Cart</NavigationItem>
         <NavigationItem link="/auth">Log In</NavigationItem>
         
    </ul>
)

export default NavigationItems;