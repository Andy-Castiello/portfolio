import React from "react";
import { useSelector } from "react-redux";
import Globals from "../../../../Globals";

import "./Trabajo.css";

const Trabajo = (trabajo,i)=>{

    const display = useSelector(store=>store.main.display);

    let style = {};

    if(display == Globals.MAIN.DISPLAY.FADINGOUT){

        style = {

            animation: `right-fadeOut .2s linear ${.35-i*.07}s forwards`
        }
    }else{

        style = {

            animation: `right-fadeIn .3s linear ${i*3*.1+.6}s forwards`,
            transform: "translateX(4rem)",
            opacity: 0
        }
    }

    return(
        <a style={style} className="trabajos__list__trabajo" href={trabajo.link} target="_blank">
            <div style={{backgroundImage:`url(${trabajo.image})`}} className="trabajos__list__trabajo__figure">
            </div>
            {display==Globals.MAIN.DISPLAY.NORMAL ?
            
                <div className="trabajos__list__trabajo__info">
                    <h2 className="trabajos__list__trabajo__info__title">{trabajo.title}</h2>
                    <p className="trabajos__list__trabajo__info__description">{trabajo.description}</p>
                </div>
            :
                null
            }
        </a>
    );
}

export default Trabajo;