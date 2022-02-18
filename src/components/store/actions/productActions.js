import { ActionTypes } from "./actionTypes"

export const filterProduct = (products) => {
    return {
        type: ActionTypes.FILTER_PRODUCTS,
        payload: products,
    }
}