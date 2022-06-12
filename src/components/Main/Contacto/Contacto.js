import React from "react";

import './Contacto.css';

const Contacto = ()=>{

    return (

        <section id="contacto" className="contacto">
            <h2 className="contacto__title">Hablemos...</h2>
            <p className="contacto__text">Si querés realizarme una consulta por un trabajo o despejar cualquier tipo de duda, enviame un mensaje!</p>
            <form className="contacto__form">
                <input placeholder="Nombre" className="contacto__form__nombre contacto__form__text-input" type="text"/>
                <input placeholder="E-Mail" className="contacto__form__email contacto__form__text-input" type="text"/>
                <input placeholder="Asunto" className="contacto__form__asunto contacto__form__text-input" type="text"/>
                <textarea placeholder="Mensaje" className="contacto__form__mensaje contacto__form__text-input"></textarea>
                <input className="contacto__form__submit" type="submit" value="Enviar Consulta!"/>
            </form>
        </section>
    );
}

export default Contacto;