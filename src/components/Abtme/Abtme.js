import React from 'react';
import classes from './Abtme.module.css';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

const Abtme = () => {
    return (
        <div>
            <h1 className = {classes.header}>About Me</h1>
            <div className = {classes.Abtme}>
                My name is Ben and I am currently a student at UT Austin, class of 2022. 
                I double major in Astronomy and Physics and I'm interested in delving deeper into computer science.
                In my free time I love trying my luck on "gacha" games and creating interesting projects. 
                (Resume button below doesn't work since I didn't want to pay to host a site)
            </div>
            <div className= {classes.resume}>
                <a href ="C:\Users\Ben\Desktop\website2\public\BenjaminYaoResume.pdf">
                <Button variant="outline-light">Resume</Button>
                </a>
            </div>
            <div className = {classes.contactInfo}>
                Phone: (609)-480-6967
            </div>
            <div className = {classes.contactInfo}>
                Email: benyao111@utexas.edu
            </div>
        </div>
    )
}

export default Abtme