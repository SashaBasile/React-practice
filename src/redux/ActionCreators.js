import * as ActionTypes from './ActionTypes';
// * means everything which has been exported from a given file
import { DISHES } from '../shared/dishes';
import { baseUrl } from '../shared/baseURL';


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
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    return fetch(baseUrl + 'dishes') 
        .then(Response => Response.json())
        .then(dishes => dispatch(addDishes(dishes)));
}

//DISHES
//function which return an action
export const dishesLoading = () => ({
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
});

//COMMENTS
export const fetchComments = () => (dispatch) => {
        return fetch(baseUrl + 'comments') 
            .then(Response => Response.json())
            .then(comments => dispatch(addComments(comments)));
}

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

//PROMOS
export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading());

    return fetch(baseUrl + 'promotions') 
        .then(Response => Response.json())
        .then(promos => dispatch(addPromos(promos)));
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
type: ActionTypes.PROMOS_FAILED,
payload: errmess
});

export const addPromos = (promos) => ({
type: ActionTypes.ADD_PROMOS,
payload: promos
});