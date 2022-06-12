import React from 'react';

import Trabajo from './Trabajo/Trabajo';

import './MisTrabajos.css';

const MisTrabajos = ()=>{

    const trabajos = require("./MisTrabajos.json")["trabajos"].map(trabajo=>Trabajo(trabajo));

    return(
        <section id="trabajos" className='trabajos'>
            <h2 className='trabajos__title'>Mis Trabajos</h2>
            <div className='trabajos__list'>
                {trabajos}
            </div>
        </section>
    );
}

export default MisTrabajos;
