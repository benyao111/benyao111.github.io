import React, {Component} from 'react';
import classes from './mainpage.module.css'
import Aux from '../../hoc/Auxi'
import NavigationItems from '../Navigation/NavigationItems/NavigationItems'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import AboutMe from '../../containers/AboutMe/AboutMe'

class Mainpage extends Component {
    state = {
        showSideDrawer: false
    }
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {
            showSideDrawer: !prevState.showSideDrawer};
    });
    }

    render() {
        return(
            <Aux>
            <Toolbar drawerToggleClicked = {this.sideDrawerToggleHandler}/>
            <SideDrawer
                open = {this.state.showSideDrawer}
                closed = {this.sideDrawerClosedHandler}/>
            <div className = {classes.mainpage}> Benjamin Yao </div>
            </Aux>
        )
    }
    
}

export default Mainpage