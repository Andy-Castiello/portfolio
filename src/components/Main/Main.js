import React from "react";

import Portada from "./Portada/Portada";
import SobreMi from "./SobreMi/SobreMi";
import MisTrabajos from "./MisTrabajos/MisTrabajos";
import Contacto from "./Contacto/Contacto";

import './Main.css'

const Main = ()=>{

    return(

        <main className="main">
            <Portada />
            <SobreMi />
            <MisTrabajos />
            <Contacto />
        </main>
    );
}

export default Main;