import React from "react";

import Certificado from "./Certificado/Certificado";

import './Certificados.css';

const Certificados = () =>{

    const certificados = require("./certificados.json")["certificados"].map(certificado=>{

        return Certificado(certificado);
    })

    return(

        <article className="sobre-mi__certificates">
            {certificados}
        </article>
    );
}

export default Certificados;