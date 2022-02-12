import { ActionTypes } from '../actions/actionTypes';
import productsList from './product';

const PRODUCT = productsList;

export const products = (state = PRODUCT, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products: payload}
        default:
            return state;
    }
}