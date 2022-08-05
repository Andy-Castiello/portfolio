import React from "react";

import './Redes.css';
import linkedin from './images/linkedin.png';
import github from './images/github.png';
import whatsapp from './images/whatsapp.png';
import telegram from './images/telegram.png';
import GLOBAL from "../../../Globals";
import {useSelector} from 'react-redux';

const Redes = ()=>{

    const display = useSelector(store => store.toolbar.display);
    if(display==GLOBAL.TOOLBAR.EXPANDED){
        return(

            
            <div className="nav-bar__redes--expanded">
                <a target="_blank" style={{animationDelay:".3s"}} className="nav-bar__redes__link" href="https://www.linkedin.com/in/andr%C3%A9s-castiello-ab262a218?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BU0DgXKW1RHaAHMm87uqwhA%3D%3D"><img className="nav-bar__redes__link__img" src={linkedin} alt=""/><p>LinkedIn</p></a>
                <a target="_blank" style={{animationDelay:".4s"}} className="nav-bar__redes__link" href="https://github.com/Andy-Castiello"><img className="nav-bar__redes__link__img" src={github} alt=""/><p>GitHub</p></a>
                <a target="_blank" style={{animationDelay:".5s"}} className="nav-bar__redes__link" href="https://walink.co/0bfc61"><img className="nav-bar__redes__link__img" src={whatsapp} alt=""/><p>WhatsApp</p></a>
                <a target="_blank" style={{animationDelay:".6s"}} className="nav-bar__redes__link" href="https://t.me/AndyCas_96"><img className="nav-bar__redes__link__img" src={telegram} alt=""/><p>Telegram</p></a>
            </div>
        );
    }else{

        return(

            <div className="nav-bar__redes">
                <a target="_blank" className="nav-bar__redes__link link-animated" href="https://www.linkedin.com/in/andr%C3%A9s-castiello-ab262a218?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BU0DgXKW1RHaAHMm87uqwhA%3D%3D"><img className="nav-bar__redes__link__img" src={linkedin} alt=""/></a>
                <a target="_blank" className="nav-bar__redes__link link-animated" href="https://github.com/Andy-Castiello"><img className="nav-bar__redes__link__img" src={github} alt=""/></a>
                <a target="_blank" className="nav-bar__redes__link link-animated" href="https://walink.co/0bfc61"><img className="nav-bar__redes__link__img" src={whatsapp} alt=""/></a>
                <a target="_blank" className="nav-bar__redes__link link-animated" href="https://t.me/AndyCas_96"><img className="nav-bar__redes__link__img" src={telegram} alt=""/></a>
            </div>
        );
    }
}

export default Redes;