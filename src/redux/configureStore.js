import { createStore } from 'redux';
import { Reducer, initialState } from './reducer';

export const ConfigureStore = () => {
    const store = createStore(
        Reducer, //reducer
        initialState //the initial state of the store
    );

    return store;
}