import React, {Component} from 'react';
import classes from './mainpage.module.css';
import Aux from '../../hoc/Auxi';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import AboutMe from '../../containers/AboutMe/AboutMe';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

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

    LinkedinClicked = () => {
        console.log("LinkedinClicked")
        //
    };

    GitClicked= () => {
        console.log("GitClicked")
        //
    };
    render() {
        return(
            <Aux>
            <Toolbar drawerToggleClicked = {this.sideDrawerToggleHandler}/>
            <SideDrawer
                open = {this.state.showSideDrawer}
                closed = {this.sideDrawerClosedHandler}/>
            <div className = {classes.mainpage}> Benjamin Yao </div>
            <div  className = {classes.links}>
                <a href = 'https://www.linkedin.com/in/byao/'>
                    <Button variant="outline-light" onClick = {this.LinkedinClicked}>LinkedIn</Button>
                </a>
            </div>
            <div className = {classes.links}>
                <a href = 'https://github.com/benyao111'>
                    <Button variant="outline-light" onClick = {this.GitClicked}>GitHub</Button>
                </a>
            </div>
            </Aux>
        )
    }
    //probably should have made a container for this but oh well
    
}

export default Mainpage