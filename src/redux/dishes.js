import { DISHES } from '../shared/dishes';

//this is a pure function, as such you cannot modify its state directly in here
export const Dishes = (state = DISHES, action) => {
    switch(action.type) {
        default:
            return state; //no modification of the state, the state is simply returned
    }
}