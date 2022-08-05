import GLOBAL from '../Globals';

//constants

let initialState;

if(window.innerWidth>1200){
            
    initialState = GLOBAL.CLIENTWIDTH.EXTRALARGE;
    
}else if(window.innerWidth>768){
    
    
    initialState = GLOBAL.CLIENTWIDTH.LARGE;
    
}else if(window.innerWidth>480){
    
    
    initialState = GLOBAL.CLIENTWIDTH.MEDIUM;
    
}else{
    
    
    initialState = GLOBAL.CLIENTWIDTH.SMALL;
    
}




const SET_CLIENTWIDTH = "SET_CLIENTWIDTH";

//reducers

export default function clientWidthReducer(state = initialState,action){

    switch(action.type){

        case SET_CLIENTWIDTH:

            return action.payload;

        default:
            return state;
    }
}

//actions

export const setClientWidth = (width)=>(dispatch,getState)=>{

    dispatch({

        type: SET_CLIENTWIDTH,
        payload: width
    });
}