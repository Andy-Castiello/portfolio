import React from "react";

import Certificados from "./Certificados/Certificados"; 
import Skills from "./Skills/Skills";

import './SobreMi.css'

const SobreMi = ()=>{

    return (

        <section id="sobre-mi" className="sobre-mi">
         <h2 className="sobre-mi__title">Sobre mí</h2>
         <p className="sobre-mi__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
         <Certificados />
         <Skills />
      </section>
    );
}

export default SobreMi;