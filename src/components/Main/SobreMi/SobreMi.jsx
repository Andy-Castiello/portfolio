import React from "react";

import Certificados from "./Certificados/Certificados"; 
import Skills from "./Skills/Skills";

import {useSelector} from 'react-redux';
import GLOBAL from '../../../Globals';

import './SobreMi.css'


const SobreMi = ()=>{

    const width = useSelector(store=>store.clientWidth);
    const main = useSelector(store=>store.main);

    let style1 ={};
    let style2 ={};
    let style3 ={};
    if(main.display==GLOBAL.MAIN.DISPLAY.FADINGOUT && width!=GLOBAL.CLIENTWIDTH.SMALL){

        style1 = {

            animation: "fadeOut .2s linear .5s forwards"
        }
        style2 = {

            animationName: "bottom-fadeOut",
            animationDuration: ".2s",
            animationFillMode: "forwards",
            animationTimingFunction: "linear",
            animationDelay: ".3s"
        }
        style3 = {

            ...style2,
            animationDelay:".2s"
        }
    }else{

        style1 = {

            animation: "fadeIn .3s linear forwards",
            opacity : 0
        }
        style2 = {

            animationName: "left-fadeIn",
            animationDuration: ".4s",
            animationFillMode: "forwards",
            animationTimingFunction: "linear",
            animationDelay: ".3s",
            transform: "translateX(-4rem)",
            opacity : 0
        }
        style3 = {

            ...style2,
            animationDelay:".5s"
        }
    }
    return (

        <section style={style1} id="sobre-mi" className="sobre-mi">
            <h2 style={style2} className="sobre-mi__title">Sobre mí</h2>
            <p style={style3} className="sobre-mi__text">

                Hace algunos años descubrí la programación, un mundo que me atrapo. Comenzé, y sigo, estudiando de manera autodidacta y luego, además, a capacitarme a través de cursos en diferentes plataformas. Mi objetivo es dedicarme al 100% a esto que me apaciona y al mismo tiempo mejorar y descubrir nuevos y diferentes métodos de programación que me permitan seguir mejorando como desarrollador día a día.

                {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. */}
            </p>
            <Certificados />
            <Skills />
        </section>
    );
}

export default SobreMi;