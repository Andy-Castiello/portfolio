import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import toolbarReducer from './toolbarDucks';
import mainReducer from './mainDucks';
import clientWidthReducer from './clientWidthDucks';

const rootReducers = combineReducers({

    toolbar: toolbarReducer,
    main: mainReducer,
    clientWidth: clientWidthReducer
});

export default function generateStore(){

    return createStore(rootReducers,compose(applyMiddleware(thunk)));
}