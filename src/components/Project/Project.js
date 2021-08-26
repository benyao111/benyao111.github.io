import React from 'react';
import classes from './Project.module.css';
import Button from 'react-bootstrap/Button';

const Project = () => {
    return (
        <div>
            <h1 className = {classes.header}>Projects</h1>
            <div className = {classes.header2}>
            Python Projects:
            </div>
                <a href = "https://github.com/benyao111/pythonbot" className={classes.alink}>
                    <div className = {classes.PythonProjects}>
                    Instagram Bot: Created an Instagram bot program using Python (Selenium) that can scroll through Instagram and 
                    like specific posts to help out influencers with low follower counts.
                    </div>
                </a>
                <a href = "https://github.com/benyao111/dbmigration" className={classes.alink}>
                    <div className = {classes.PythonProjects}>
                    Database Migration/Update Script: Script created during my internship at Comcast to migrate IP addresses 
                    and FQDNs to the TES Connector backend database. 
                    </div>
                </a>
            <div className = {classes.header2}>
                JavaScript Projects:
            </div>
                <a href = "https://react-burger-d3798.web.app/" className={classes.alink}>
                    <div className = {classes.PythonProjects}>
                    Burger App: Created a burger building and ordering web app with React JS
                    </div>
                </a>
                <a href = "https://github.com/benyao111/Weather-Website" className={classes.alink}>
                    <div className = {classes.PythonProjects}>
                    Weather Website: Pulls data from a public weather API to give accurate readings of the temperature, location, and forecast summary for a single day.
                    </div>    
                </a>
                <a href = "/" className = {classes.alink}>
                    <div className = {classes.PythonProjects}>
                    This Website: Built with React JS.
                    </div>
                </a>
        

        </div>
    )

    }

export default Project