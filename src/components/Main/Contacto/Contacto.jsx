import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { backgroundColor, backgroundResize } from "../../../functions";
import Globals from "../../../Globals";
import { setMainContentAction, setMainDisplayAction } from "../../../redux/mainDucks";

import './Contacto.css';

const Contacto = ()=>{

    const display = useSelector(store=>store.main.display);
    const dispatch = useDispatch();

    let style = [];
    let backStyle = {};

    if(display == Globals.MAIN.DISPLAY.FADINGOUT){

        style.push({

            animation: "bottom-fadeOut .2s linear .5s forwards",
        })
        style.push({

            ...style[0],
            animationDelay: ".45s"
        });
        style.push({

            ...style[0],
            animationDelay: ".36s"
        });
        style.push({

            ...style[0],
            animationDelay: ".27s"
        });
        style.push({

            ...style[0],
            animationDelay: ".18s"
        });
        style.push({

            ...style[0],
            animationDelay: ".09s"
        });
        style.push({

            ...style[0],
            animationDelay: "0s"
        });
        
        backStyle = {

            animation: "fadeOut .2s linear .5s forwards"
        }
    }else{

        style.push({

            animation: "left-fadeIn .4s linear .3s forwards",
            transform: "translateX(-4rem)",
            opacity : 0
        })
        style.push({

            ...style[0],
            animationDelay: ".5s" 
        })
        style.push({

            animation: "top-fadeIn .4s linear .7s forwards",
            transform: "translateY(4rem)",
            opacity : 0 
        })
        style.push({

            ...style[2],
            animationDelay: ".9s" 
        })
        style.push({

            ...style[2],
            animationDelay: "1.1s" 
        })
        style.push({

            ...style[2],
            animationDelay: "1.3s" 
        })
        style.push({

            ...style[0],
            animationDelay: "1.5s" 
        })
    }
    function handleSubmit(e){

       /*  dispatch(setMainDisplayAction(Globals.MAIN.DISPLAY.FADINGOUT));

        setTimeout(async () => {

            
            await dispatch(setMainContentAction(Globals.MAIN.CONTENT.SUCCESSFORM));
            dispatch(setMainDisplayAction(Globals.MAIN.DISPLAY.NORMAL));
            backgroundColor();
            backgroundResize();
        }, 800); */
    }

    return (

        <section style={backStyle} id="contacto" className="contacto">
            <h2 style={style[0]} className="contacto__title">Hablemos...</h2>
            <p style={style[1]} className="contacto__text">Si querés realizarme una consulta por un trabajo o despejar cualquier tipo de duda, enviame un mensaje!</p>
            <form onSubmit={e=>handleSubmit(e)} action="https://formspree.io/f/mjvzbnbk" method="POST" className="contacto__form">
                <input required name="nombre" style={style[2]} placeholder="Nombre" className="contacto__form__nombre contacto__form__text-input" type="text"/>
                <input required name="email" style={style[3]} placeholder="E-Mail" className="contacto__form__email contacto__form__text-input" type="text"/>
                <input required name="asunto" style={style[4]} placeholder="Asunto" className="contacto__form__asunto contacto__form__text-input" type="text"/>
                <textarea required name="mensaje" style={style[5]} spellCheck="false" placeholder="Mensaje" className="contacto__form__mensaje contacto__form__text-input"></textarea>
                <input style={style[6]} className="contacto__form__submit" type="submit" value="Enviar Consulta!"/>
            </form>
        </section>
    );
}

export default Contacto;