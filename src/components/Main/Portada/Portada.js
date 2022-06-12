import React from "react";

import './Portada.css';

const Portada = ()=>{

    return(

        <section className="portada">
            <article className="portada__title">
                <p className="portada__title__text">Hola,</p>
                <h1 className="portada__title__h1">soy Andrés.</h1>
                <p className="portada__title__text">Desarrollador Web</p>
            </article>
            <a className="portada__link" href="#">Contactame...</a>
        </section>
    );
}

export default Portada;