import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { setMainContentAction, setMainDisplayAction } from "../../../redux/mainDucks";
import { backgroundColor, backgroundResize } from "../../../functions";


import "./SuccessForm.css";
import GLOBAL from "../../../Globals";

function SuccessForm(){

    const display = useSelector(store =>store.main.display);
    const dispatch = useDispatch();

    let style = [];

    if(display == GLOBAL.MAIN.DISPLAY.NORMAL){

        style.push({

            animation: "top-fadeIn .4s linear .3s forwards",
            transform: "translateY(4rem)",
            opacity: "0"
        });
        style.push({

            ...style[0],
            animationDelay: ".5s"
        });
        style.push({

            ...style[0],
            animationDelay: ".8s"
        });
    }else if(display == GLOBAL.MAIN.DISPLAY.FADINGOUT){

        style.push({

            animation: "bottom-fadeOut .2s linear .2s forwards",

        });
        style.push({

            ...style[0],
            animationDelay: ".1s"
        });
        style.push({

            ...style[0],
            animationDelay: "0s"
        });
    }
    const handleClick = ()=>{

        dispatch(setMainDisplayAction(GLOBAL.MAIN.DISPLAY.FADINGOUT));
        setTimeout(async () => {
            
            await dispatch(setMainContentAction(GLOBAL.MAIN.CONTENT.NORMAL));
            dispatch(setMainDisplayAction(GLOBAL.MAIN.DISPLAY.NORMAL));
            backgroundColor();
            backgroundResize();
        }, 800);
    }

    return(

        <div className="success-form">
            <h2 style={style[0]} className="success-form__title">Gracias por contactarme!</h2>
            <p style={style[1]} className="success-form__caption">Te voy a estar respondiendo lo antes posible...</p>
            <button style={style[2]} className="success-form__button" onClick={handleClick}>Volver al inicio</button>
        </div>
    )

}

export default SuccessForm;