import React from 'react'
import classes from './header.module.css';
import Toggle from '../Toggle/Toggle';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import Logo from '../UI/Logo/Logo';


const Header=(props)=> (
    <header className={classes.Header}>
        <Toggle clicked={props.drawerToggelClicked}/>
        <div className={classes.Logo}>
            <Logo/>
        </div>
       
        <nav className={classes.DesktopOnly}>
            <NavigationItems/>
        </nav>
    </header>
);

export default Header