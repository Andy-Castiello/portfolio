import React from 'react';

import Toolbar from './components/Toolbar/Toolbar';
import Main from './components/Main/Main';

import './App.css';
import {Provider} from 'react-redux';
import generateStore from './redux/store';

const App = ()=>{

    React.useEffect(()=>{

        function backgroundPosition(){

            const body = document.querySelector("body");
            
            let proporcion = (body.offsetHeight-window.innerHeight)/(window.innerHeight*.7)

            body.style["backgroundPositionY"] = `${body.getBoundingClientRect().top/proporcion}px`;
        }
        function backgroundResize(){

            if(1280/804 < window.innerWidth/(window.innerHeight*1.7)){

                document.getElementsByTagName("body")[0].style["background-size"] = "100vw auto";
            }else{

                document.getElementsByTagName("body")[0].style["background-size"] = "auto 170vh";
            }
            backgroundPosition();
        }
        window.addEventListener("scroll",backgroundPosition);
        window.addEventListener("resize",backgroundResize);
        backgroundPosition();
        backgroundResize();
    },[]);


    return (

        <Provider store={generateStore()}>
            <Toolbar />
            <Main />
        </Provider>
    );
}

export default App;