import React from 'react';

import Toolbar from './components/Toolbar/Toolbar';
import Main from './components/Main/Main';

import './App.css';
import {Provider} from 'react-redux';
import generateStore from './redux/store';
import { backgroundPosition , backgroundResize } from './functions';

const App = ()=>{

    React.useEffect(()=>{

        window.addEventListener("scroll",backgroundPosition);
        window.addEventListener("resize",backgroundResize);
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