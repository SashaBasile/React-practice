import * as ActionTypes from './ActionTypes';
// * means everything which has been exported from a given file
import { DISHES } from '../shared/dishes';


//Action object 
export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});

//this is a thunk - which returns a function
export const fetchDishes =  () => (dispatch) => {
    dispatch(dishesLoading(true));

    setTimeout(() => {
        dispatch(addDishes(DISHES));
    }, 2000);
}

//function which return an action
export const dishesLoading  = () => ({
    type: ActionTypes.DISHES_LOADING
});

//function creator
export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

//function creator
export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
})