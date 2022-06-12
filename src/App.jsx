import React from 'react';

import Toolbar from './components/Toolbar/Toolbar';
import Main from './components/Main/Main';

import './App.css';
import {Provider} from 'react-redux';
import generateStore from './redux/store';

const App = ()=>{

    return (

        <Provider store={generateStore()}>
            <Toolbar />
            <Main />
        </Provider>
    );
}

export default App;