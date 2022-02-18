import { ActionTypes } from '../actions/actionTypes';
import productsList from './product';

const INITIAL_STATE = {
    allProducts: productsList,
    currentProducts: productsList
}

export const products = (state = INITIAL_STATE, {type, payload}) => {
    switch (type) {
        case ActionTypes.FILTER_PRODUCTS:    
            return {...state, currentProducts: payload}

        default:
            return state;
    }
}