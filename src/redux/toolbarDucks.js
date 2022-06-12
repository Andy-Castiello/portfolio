import GLOBAL from '../Globals';

//constants

const initialState = {

    display : GLOBAL.TOOLBAR.NORMAL
}

const SET_TOOLBAR_DISPLAY = "SET_TOOLBAR_DISPLAY";

//reducers

export default function toolbarReducer(state = initialState,action){

    switch(action.type){

        case SET_TOOLBAR_DISPLAY:

            return {...state,display:action.payload};

        default:
            return state;
    }
}

//actions

export const setToolbarDisplayAction = (display)=>(dispatch,getState)=>{

    dispatch({

        type: SET_TOOLBAR_DISPLAY,
        payload: display
    });
}