//import { PROMOTIONS } from '../shared/promotions'; // you do not need anyome as you fetch from the server
import * as ActionTypes from './ActionTypes';

export const Promotions = (state = {
        isLoading: true,
        errMess: null,
        promotions: []
        }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_PROMOS:
            return {...state, isLoading: false, errMess: null, promotions: action.payload}; 

        case ActionTypes.PROMOS_LOADING:
            return {...state, isLoading: true, errMess: null, promotions: []}; //taking the original state, state is immutable

        case ActionTypes.PROMOS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, promotions: []}; 
        default:
            return state;
    }
}