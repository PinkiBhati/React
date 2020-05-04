import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import classes from './layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';


class Layout extends Component {

    state={
        showSideDrawer: true
    }
    SideDrawerClosedHandler=()=>{
        this.setState({showSideDrawer: false})
    }
    render() {
        return (
            <Aux>
                <Toolbar />
                <SideDrawer closed={this.SideDrawerClosedHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );

    }


}

export default Layout;