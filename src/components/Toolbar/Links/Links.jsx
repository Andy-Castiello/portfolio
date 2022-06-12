import React from "react";

import './Links.css';

const Links=()=>{

    return(
        <nav className="nav-bar__links">
            <a className="nav-bar__links__link link-animated" href="#sobre-mi">Sobre Mí</a>
            <a className="nav-bar__links__link link-animated" href="#trabajos">Mis Trabajos</a>
            <a className="nav-bar__links__link link-animated" href="#contacto">Contacto</a>
        </nav>
    );
}

export default Links;