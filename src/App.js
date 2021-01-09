import React, {Component} from 'react';
import Mainpage from './components/mainpage/mainpage'
import './App.css';
import {Route, Switch} from 'react-router-dom'
import AboutMe from '../src/containers/AboutMe/AboutMe'
import Projects from '../src/containers/Projects/Projects'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
        <Route path = '/' exact component = {Mainpage}/>
        <Route path = '/aboutme' component = {AboutMe}/>
        <Route path = '/projects' component = {Projects}/>
        </Switch>
      </div>
      );
    }
}
export default App;
