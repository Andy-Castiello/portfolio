import React from "react";

import './Portada.css';

import { useSelector } from "react-redux";
import GLOBAL from '../../../Globals';

const Portada = ()=>{

    const width = useSelector(store=>store.clientWidth);
    const mainDisplay = useSelector(store=>store.main.display);

    const style = [];

    if(mainDisplay == GLOBAL.MAIN.DISPLAY.FADINGOUT && width!=GLOBAL.CLIENTWIDTH.SMALL){

        style.push({
            animationName:'bottom-fadeOut',
            animationDuration: ".3s",
            animationTimingFunction: "linear",
            animationFillMode: "forwards",
            animationDelay: ".4s"
        });
        style.push({...style[0],animationDelay:".3s"
        });
        style.push({...style[0],animationDelay:".2s"
        });
        style.push({...style[0],animationDelay:".1s"
        })
    }else{

        style.push({
            
            transform: "translateX(-3rem)",
            opacity: "0",
            animation: "left-fadeIn .3s linear forwards",
            animationDelay: ".3s"
        });
        style.push({...style[0],animationDelay:".6s"
        });
        style.push({...style[0],animationDelay:".9s"
        });
        style.push({...style[0],
            
            transform: "translateY(3rem)",
            animationName: "top-fadeIn",
            animationDelay:"1.2s"
        })
    }

    function handleClick(){

        document.querySelector("html").style.scrollBehavior = "smooth";
        document.getElementById("contacto").scrollIntoView();
        document.querySelector("html").style.scrollBehavior = "auto";
    }
    
    
    return(

        <section id="portada" className="portada">
            <article className="portada__title">
                <p style={style[0]} className="portada__title__text">Hola,</p>
                <h1 style={style[1]} className="portada__title__h1">soy Andrés.</h1>
                <p style={style[2]} className="portada__title__text">Desarrollador Web</p>
            </article>
            <a onClick={handleClick} style={style[3]} className="portada__link">Contactame...</a>
        </section>
    );
}

export default Portada;