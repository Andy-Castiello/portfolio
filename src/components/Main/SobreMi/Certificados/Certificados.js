import React from "react";

import Certificado from "./Certificado/Certificado";

import './Certificados.css';

import GLOBAL from '../../../../Globals';
import { useSelector } from "react-redux";

const Certificados = () =>{

    const display = useSelector(store=>store.main.display);

    const certificados = require("./certificados.json")["certificados"].map((certificado,i)=>{

        return Certificado(certificado,i);
    })
    let style = {};
    let styleTitle = {};

    if(display == GLOBAL.MAIN.DISPLAY.FADINGOUT){

        style = {

            animation: "bottom-fadeOut .2s linear .1s forwards"
        };
    }else{

        styleTitle = {

            animation: `top-fadeIn .4s linear .5s forwards`,
            transform: "translateY(4rem)",
            opacity: 0
        }        
    }

    return(

        <article style={style} className="sobre-mi__certificates">
            <h3 style={styleTitle} className="sobre-mi__certificates__title">Mis Certificados</h3>
            <section className="sobre-mi__certificates__list">

                {certificados}
            </section>
        </article>
    );
}

export default Certificados;