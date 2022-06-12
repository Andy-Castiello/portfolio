import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import toolbarReducer from './toolbarDucks';

const rootReducers = combineReducers({

    toolbar: toolbarReducer
});

export default function generateStore(){

    return createStore(rootReducers,compose(applyMiddleware(thunk)));
}