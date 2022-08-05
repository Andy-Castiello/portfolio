import React from "react";
import { useSelector } from "react-redux";
import GLOBAL from "../../../../../Globals";

import './Certificado.css';

const Certificado = (certificado,i)=>{

    const display = useSelector(store=>store.main.display);

    let style = {};

    if(display == GLOBAL.MAIN.DISPLAY.NORMAL){

        let delay = 0;
        i<4 ? delay = i : delay = 4;
        style = {
    
            animation: `top-fadeIn .4s linear ${.8+delay*.3}s forwards`,
            transform: "translateY(4rem)",
            opacity: 0
        }
    }
       
    return(

        <a target="_blank" href={certificado.link} style={style} className="sobre-mi__certificates__card">
            <h3 className="sobre-mi__certificates__card__title">{certificado.title}</h3>
            <p className="sobre-mi__certificates__card__institution">{certificado.institution}</p>
            <p className="sobre-mi__certificates__card__date">{certificado.date}</p>
        </a>
    );
}

export default Certificado;