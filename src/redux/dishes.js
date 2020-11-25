import *  as ActionTypes from './ActionTypes';

//this is a pure function, as such you cannot modify its state directly in here
export const Dishes = (state = {
    isLoading: true,
    errMess: null,
    dishes: []
    }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_DISHES:
            return {...state, isLoading: false, errMess: null, dishes: action.payload}; 

        case ActionTypes.DISHES_LOADING:
            return {...state, isLoading: true, errMess: null, dishes: []}; //taking the original state, state is immutable

        case ActionTypes.DISHES_FAILED:
            return {...state, isLoading: false, errMess: action.payload, dishes: []}; 

        default:
            return state; //no modification of the state, the state is simply returned
    }
}