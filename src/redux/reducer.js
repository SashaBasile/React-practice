import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';

export const initialState = {
        dishes: DISHES,
        comments: COMMENTS,
        promotions: PROMOTIONS,
        leaders: LEADERS
};

//this is a pure function - you cannot change the state directly here
// in the function. 
// state = initialState --> when the Reducer is first called by the store line indicates
//that if the state is undefined, the dafult value will be initialState
export const Reducer = (state = initialState, action) => {
    return state; // no modification of the state, the state is simply returned
};