import React from "react";

import Skill from "./Skill/Skill";

import './Skills.css';

const Skills = ()=>{

    const skills = require("./Skills.json")["skills"].map(skill=>Skill(skill));

    return(

        <article className="sobre-mi__skills">
            {skills}
        </article>
    );
}
export default Skills;