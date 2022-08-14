import React from "react";

import './Skill.css';

import { useEffect,useRef,useState } from "react";
import { useSelector } from "react-redux";
import GLOBAL from '../../../../../Globals';

const Skill = (skill)=>{

    const powerBar = useRef(null);
    const display = useSelector(store=>store.main.display);
    
    let style = {};
    if( display == GLOBAL.MAIN.DISPLAY.NORMAL){

        style = {
            
            transition: `width ${0.05*skill.level}s 1.4s`,
            width: 0
        }
        
        
    }else{
        
        style = {
            
            width: `${skill.level}%`
        }
    }
  
    useEffect(()=>{
        
        if( display == GLOBAL.MAIN.DISPLAY.FADINGOUT){
            
            setTimeout(()=>setWidth(true), 700);
            
        }else{

            setWidth();
        }

    });

    const setWidth = (expanded=false)=>{


        if(expanded){
            
            powerBar.current.style.width = 0;
            powerBar.current.style.transition = "width 0s 0s";
        }else{

            powerBar.current.style.width = `${skill.level}%`;
            powerBar.current.style.transition = `width ${0.05*skill.level}s 1.4s`;
        } 
    }
    
    
    return(

        <div className="sobre-mi__skills__skill">
            <h3 className="sobre-mi__skills__skill__title">{skill.title}</h3>
            <div className="sobre-mi__skills__skill__bar__base"><div ref={powerBar} style={style} className={"sobre-mi__skills__skill__bar"}></div></div>
        </div>
    );
}

export default Skill;