import {createStore} from "redux";
import contants from './constants'

const initialState = {
    repos: [],
    inputValue: ''
};

const reducer=(state=initialState,action)=>{
    switch(action.type) {
        case contants.SEARCH_INPUT:{
            return Object.assign({},state,{inputValue: action.searchValue})
        }
        case contants.FORM_SUBMIT:{
            return Object.assign({},state,{repos: action.repositories})
        }
        default:
            return state
    }
};

const store = createStore(reducer);

export default store
