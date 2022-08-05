import React from 'react';

import Trabajo from './Trabajo/Trabajo';

import './MisTrabajos.css';
import {useSelector} from 'react-redux';
import GLOBAL from '../../../Globals';

const MisTrabajos = ()=>{

    const trabajos = require("./MisTrabajos.json")["trabajos"].map((trabajo,i)=>Trabajo(trabajo,i));
    const display = useSelector(store=>store.main.display);
    const width = useSelector(store=>store.clientWidth);
    
    let style = {};

    if(display == GLOBAL.MAIN.DISPLAY.FADINGOUT && width != GLOBAL.CLIENTWIDTH.SMALL){

        style = {

            animation : "bottom-fadeOut .2s linear .5s forwards"
        }
    }else{

        style = {

            animation : "left-fadeIn .4s linear .3s forwards",
            transform: "translateX(-4rem)",
            opacity: 0
        }
    }

    return(
        <section id="trabajos" className='trabajos'>
            <h2 style={style} className='trabajos__title'>Mis Trabajos</h2>
            <div className='trabajos__list'>
                {trabajos}
            </div>
        </section>
    );
}

export default MisTrabajos;
