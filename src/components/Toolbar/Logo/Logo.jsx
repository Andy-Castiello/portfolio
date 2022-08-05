import React from 'react';

import './Logo.css';

import GLOBAL from '../../../Globals';
import home from './images/home.png'
import { useSelector, useDispatch } from 'react-redux';
import { setToolbarDisplayAction } from '../../../redux/toolbarDucks';
import { setMainContentAction, setMainDisplayAction } from '../../../redux/mainDucks';

const Logo = ()=>{

    const display = useSelector(store=>store.toolbar.display);
    const width = useSelector(store =>store.clientWidth);
    const content = useSelector(store =>store.main.content);
    const dispatch = useDispatch();
    
    const handleClick= async ()=>{

        if(content == GLOBAL.MAIN.CONTENT.SUCCESSFORM){

            if(width==GLOBAL.CLIENTWIDTH.SMALL){
                
                await dispatch(setMainContentAction(GLOBAL.MAIN.CONTENT.NORMAL));
                dispatch(setToolbarDisplayAction(GLOBAL.TOOLBAR.SHRINKING));
                document.getElementById("portada").scrollIntoView();
            }else{
                dispatch(setMainDisplayAction(GLOBAL.MAIN.DISPLAY.FADINGOUT));
                setTimeout(async ()=>{
                    
                    await dispatch(setMainContentAction(GLOBAL.MAIN.CONTENT.NORMAL));
                    document.getElementById("portada").scrollIntoView();
                    dispatch(setMainDisplayAction(GLOBAL.MAIN.DISPLAY.NORMAL))   
                }, 800);   
            }
        }else{

            if(width==GLOBAL.CLIENTWIDTH.SMALL){
    
                dispatch(setToolbarDisplayAction(GLOBAL.TOOLBAR.SHRINKING));
                document.getElementById("portada").scrollIntoView();
            }else{
    
                dispatch(setMainDisplayAction(GLOBAL.MAIN.DISPLAY.FADINGOUT));
                setTimeout(()=>{
        
                    document.getElementById("portada").scrollIntoView();
                    dispatch(setMainDisplayAction(GLOBAL.MAIN.DISPLAY.NORMAL))   
                }, 800);
            }
        }

    }
    if(display == GLOBAL.TOOLBAR.EXPANDED){

        return (
    
            <div onClick={()=>{handleClick()}} className="nav-bar__logo--expanded">
                
                <a className='nav-bar__logo__link'><img src={home} className='nav-bar__logo__icon' alt=""/>Inicio</a>
            </div>
        )

    }else{

        return (
    
            <div onClick={()=>{handleClick()}} className="nav-bar__logo">
                <p className="nav-bar__logo__letter">A</p>
                <p className="nav-bar__logo__caption">Desarrollador Web</p>
            </div>
        )
    }
}

export default Logo;