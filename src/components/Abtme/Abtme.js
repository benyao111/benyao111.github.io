import React from 'react';
import classes from './Abtme.module.css'

const Abtme = () => {
    return (
        <div>
            <h1 className = {classes.header}>About Me</h1>
            <div className = {classes.Abtme}>
                My name is Ben and I am currently a student at UT Austin, class of 2022. 
                I double major in Astronomy and Physics and I'm interested in delving deeper into computer science.
                In my free time I love staking my odds on "gacha" games and __.
            </div>
            <div>Link to Resume</div>
        </div>
    )
}

export default Abtme