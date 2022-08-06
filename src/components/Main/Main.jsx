import React from "react";

import Portada from "./Portada/Portada";
import SobreMi from "./SobreMi/SobreMi";
import MisTrabajos from "./MisTrabajos/MisTrabajos";
import Contacto from "./Contacto/Contacto";
import SuccessForm from "./SuccessForm/SuccessForm"

import { useSelector, useDispatch } from 'react-redux';
import { setClientWidth } from "../../redux/clientWidthDucks";
import GLOBAL from './../../Globals';

import './Main.css'
import { backgroundColor } from "../../functions";

const Main = ()=>{

    const width = useSelector(store => store.clientWidth);
    const display = useSelector(store=>store.main.display);
    const content = useSelector(store=>store.main.content);
    const dispatch = useDispatch();

    window.addEventListener('resize',()=>{
        
        if(window.innerWidth>1200){
            
            if(width!=GLOBAL.CLIENTWIDTH.EXTRALARGE)dispatch(setClientWidth(GLOBAL.CLIENTWIDTH.EXTRALARGE));
            
        }else if(window.innerWidth>768){
            
            
            if(width!=GLOBAL.CLIENTWIDTH.LARGE)dispatch(setClientWidth(GLOBAL.CLIENTWIDTH.LARGE));

        }else if(window.innerWidth>480){
            
            
            if(width!=GLOBAL.CLIENTWIDTH.MEDIUM)dispatch(setClientWidth(GLOBAL.CLIENTWIDTH.MEDIUM));
            
            
        }else if(width!=GLOBAL.CLIENTWIDTH.SMALL){
            
            
            dispatch(setClientWidth(GLOBAL.CLIENTWIDTH.SMALL));
        }
    });
    React.useEffect(()=>{

        window.addEventListener('scroll',backgroundColor);
        backgroundColor();

    },[]);

    let style = {};

    if(display == GLOBAL.MAIN.DISPLAY.FADINGOUT){

        style = {

            animation: "background-onFade .8s linear forwards"
        }
    }else{
       
        style = {

            animation: "background-onNormal .8s linear  forwards"
        }

    }

    if(content == GLOBAL.MAIN.CONTENT.NORMAL){

        return(
    
            <main style={style} className="main">
    
                    <Portada />
                    <SobreMi />
                    <MisTrabajos />
                    <Contacto />
               
            </main>
        );
    }else{

        return(
    
            <main style={style} className="main">
    
                <SuccessForm />
            </main>
        );
    }
}

export default Main;