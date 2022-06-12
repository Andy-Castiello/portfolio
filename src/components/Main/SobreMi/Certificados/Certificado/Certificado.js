import React from "react";

import './Certificado.css';

const Certificado = (certificado)=>{


    return(

        <div className="sobre-mi__certificates__card">
            <h3 className="sobre-mi__certificates__card__title">{certificado.title}</h3>
            <p className="sobre-mi__certificates__card__institution">{certificado.institution}</p>
            <p className="sobre-mi__certificates__card__date">{certificado.date}</p>
        </div>
    );
}

export default Certificado;