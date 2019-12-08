import {ADDNOTE,CHANGENOTE} from '../actions/index.js';

const initStore = {
    notes:[],
    noteText:''
}


function reducer(state=initStore,action){
    switch(action.type){
        case ADDNOTE:
            return {...state,notes:action.payload}
        case CHANGENOTE:
            return {...state,noteText:action.payload}    
        default:
            return state; 
        }
}

export default reducer;