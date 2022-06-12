import React from "react";

import './Redes.css';
import linkedin from './images/linkedin.png';
import github from './images/github.png';
import whatsapp from './images/whatsapp.png';
import telegram from './images/telegram.png';

const Redes = ()=>{

    return(

        <div className="nav-bar__redes">
            <a className="nav-bar__redes__link link-animated" href="#"><img className="nav-bar__redes__link__img" src={linkedin} alt=""/></a>
            <a className="nav-bar__redes__link link-animated" href="#"><img className="nav-bar__redes__link__img" src={github} alt=""/></a>
            <a className="nav-bar__redes__link link-animated" href="#"><img className="nav-bar__redes__link__img" src={whatsapp} alt=""/></a>
            <a className="nav-bar__redes__link link-animated" href="#"><img className="nav-bar__redes__link__img" src={telegram} alt=""/></a>
        </div>
    );
}

export default Redes;