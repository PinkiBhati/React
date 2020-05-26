import React, { useState } from 'react'
import Aux from '../Aux/Aux'
import classes from './layout.module.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';


const Layout = props => {

    const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);

    const sideDrawerClosedHandler=()=>{
        setSideDrawerIsVisible(false);
    }

    const sideDrawerToggleHandler=()=>{
        setSideDrawerIsVisible(!sideDrawerIsVisible)
    }
    
        return (
            <Aux>
                <Toolbar
                    drawerToggelClicked={sideDrawerToggleHandler} />
                <SideDrawer 
                    open={sideDrawerIsVisible} 
                    closed={sideDrawerClosedHandler}/>
                <main className={classes.Content}>
                    {props.children}
                </main>
            </Aux>
        );

    


}

export default Layout;