import React from "react";

import './Skill.css';

const Skill = (skill)=>{

    return(

        <div className="sobre-mi__skills__skill">
            <h3 className="sobre-mi__skills__skill__title">{skill.title}</h3>
            <div className="sobre-mi__skills__skill__bar__base"><div className={"sobre-mi__skills__skill__bar sobre-mi__skills__skill__bar__level--"+skill.level}></div></div>
        </div>
    );
}

export default Skill;