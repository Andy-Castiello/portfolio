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

    if(display == GLOBAL.MAIN.DISPLAY.FADINGOUT){

        style = {

            animation: "bottom-fadeOut .2s linear .1s forwards"
        }
    }else{

        style = {}        
    }

    return(

        <article style={style} className="sobre-mi__certificates">
            {certificados}
        </article>
    );
}

export default Certificados;