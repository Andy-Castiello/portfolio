import GLOBAL from '../Globals';

//constants

const initialState = {

    display : GLOBAL.MAIN.DISPLAY.NORMAL,
    content : GLOBAL.MAIN.CONTENT.NORMAL
}

const SET_MAIN_DISPLAY = "SET_MAIN_DISPLAY";
const SET_MAIN_CONTENT = "SET_MAIN_CONTENT";

//reducers

export default function mainReducer(state = initialState,action){

    switch(action.type){

        case SET_MAIN_DISPLAY:

            return {...state,display:action.payload};
        case SET_MAIN_CONTENT:

            return {...state,content:action.payload};

        default:
            return state;
    }
}

//actions

export const setMainDisplayAction = (display)=>(dispatch,getState)=>{

    dispatch({

        type: SET_MAIN_DISPLAY,
        payload: display
    });
}

export const setMainContentAction = (content)=>(dispatch,getState)=>{

    dispatch({

        type: SET_MAIN_CONTENT,
        payload: content
    });
}