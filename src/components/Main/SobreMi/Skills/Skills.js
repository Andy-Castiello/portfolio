import React from "react";

import Skill from "./Skill/Skill";

import './Skills.css';

import GLOBAL from '../../../../Globals';
import { useSelector } from 'react-redux';

const Skills = ()=>{

    const display = useSelector(store=>store.main.display);

    const skills = require("./Skills.json")["skills"].map(skill=>Skill(skill));

    let style = {};

    if(display == GLOBAL.MAIN.DISPLAY.FADINGOUT){

        style = {

            animation: "bottom-fadeOut .2s linear forwards"
        }
    }else{

        style = {

            animation: "top-fadeIn .4s linear 1s forwards",
            transform: "translateY(4rem)",
            opacity: 0
        }        
    }

    return(

        <article style={style} className="sobre-mi__skills">
            {skills}
        </article>
    );
}
export default Skills;