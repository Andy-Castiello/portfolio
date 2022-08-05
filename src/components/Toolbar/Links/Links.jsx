import React from "react";

import './Links.css';
import GLOBAL from "../../../Globals";
import {useSelector,useDispatch} from 'react-redux';
import { setToolbarDisplayAction } from "../../../redux/toolbarDucks";
import { setMainContentAction, setMainDisplayAction } from "../../../redux/mainDucks";

//constantes
const SOBREMI = "SOBREMI";
const TRABAJOS = "TRABAJOS";
const CONTACTO = "CONTACTO";

const Links=()=>{
    const display = useSelector(store => store.toolbar.display);
    const content = useSelector(store => store.main.content)
    const width = useSelector(store => store.clientWidth);
    const dispatch = useDispatch();

    const scrollToLink = (link) =>{

        switch(link){
        
            case SOBREMI:
                document.getElementById("sobre-mi").scrollIntoView();
                break;
            case TRABAJOS:
                document.getElementById("trabajos").scrollIntoView();
                break;
            case CONTACTO:
                document.getElementById("contacto").scrollIntoView();
                break;
            default:
                document.getElementById("portada").scrollIntoView();
        }
    }

    const handleClick = async (link)=>{

        if(content == GLOBAL.MAIN.CONTENT.SUCCESSFORM){

            if(width==GLOBAL.CLIENTWIDTH.SMALL){
                
                await dispatch(setMainContentAction(GLOBAL.MAIN.CONTENT.NORMAL));
                dispatch(setToolbarDisplayAction(GLOBAL.TOOLBAR.SHRINKING)); 
                scrollToLink(link);
    
            }else{
                
                dispatch(setMainDisplayAction(GLOBAL.MAIN.DISPLAY.FADINGOUT));
                setTimeout(async ()=>{
                    
                    await dispatch(setMainContentAction(GLOBAL.MAIN.CONTENT.NORMAL));
                    scrollToLink(link);
                    dispatch(setMainDisplayAction(GLOBAL.MAIN.DISPLAY.NORMAL));
                },800);
            }
        }else{

            if(width==GLOBAL.CLIENTWIDTH.SMALL){
    
                dispatch(setToolbarDisplayAction(GLOBAL.TOOLBAR.SHRINKING)); 
                scrollToLink(link);
    
            }else{
    
                dispatch(setMainDisplayAction(GLOBAL.MAIN.DISPLAY.FADINGOUT));
                setTimeout(()=>{
    
                    scrollToLink(link);
                    dispatch(setMainDisplayAction(GLOBAL.MAIN.DISPLAY.NORMAL))   
                }, 800);
            }
        }
    }
    if(display==GLOBAL.TOOLBAR.EXPANDED){


        return(
            <nav className="nav-bar__links--expanded">
                <p style={{animationDelay:".3s"}} onClick={()=>handleClick(SOBREMI)} className="nav-bar__links__link" href="#sobre-mi">Sobre Mí</p>
                <p style={{animationDelay:".4s"}} onClick={()=>handleClick(TRABAJOS)} className="nav-bar__links__link" href="#trabajos">Mis Trabajos</p>
                <p style={{animationDelay:".5s"}} onClick={()=>handleClick(CONTACTO)} className="nav-bar__links__link" href="#contacto">Contacto</p>
            </nav>
        );
    }else{

        return(
            <nav className="nav-bar__links">
                <p onClick={()=>handleClick(SOBREMI)} className="nav-bar__links__link link-animated" href="#sobre-mi">Sobre Mí</p>
                <p onClick={()=>handleClick(TRABAJOS)} className="nav-bar__links__link link-animated" href="#trabajos">Mis Trabajos</p>
                <p onClick={()=>handleClick(CONTACTO)} className="nav-bar__links__link link-animated" href="#contacto">Contacto</p>
            </nav>
        );
    }
}

export default Links;