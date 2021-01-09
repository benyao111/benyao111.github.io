import React, {Component} from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'
import Aux from '../../hoc/Auxi'

class Projects extends Component {
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
            </Aux>
        )
    }
}

export default Projects