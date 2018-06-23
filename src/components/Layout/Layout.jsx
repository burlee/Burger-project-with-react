import React, {Component} from 'react';
import Aux from '../../hoc/aux_x';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component{
    state = {
        showSideDrawer: false
    }

    sideDrawerClose = () => {
        this.setState({showSideDrawer: false})
    }

    drawerToggleHandler = () => {
        this.setState((prevState) =>{
            return {showSideDrawer: !prevState.showSideDrawer}
        })
    }

    render(){
        return(
            <Aux>
                <Toolbar clicked={this.drawerToggleHandler}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClose} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
};


export default Layout;