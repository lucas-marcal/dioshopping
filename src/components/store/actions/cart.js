import { ActionTypes } from "./actionTypes"

export const Add = (cart, product) => {
    return{
        type: ActionTypes.ADD_TO_CART,
        cart,
        product
    }
}

export const AddItem = (cart, product) => {
    return{
        type: ActionTypes.ADD_ITEM,
        cart,
        product
    }
}

export const RemoveItem = (cart, product) => {
    return{
        type: ActionTypes.REMOVE_ITEM,
        cart,
        product
    }
}

export const DeleteItem = (cart, product) => {
    return{
        type: ActionTypes.DELETE_ITEM,
        cart,
        product
    }
}

export const ChangeCart = (localCart) => {
    return{
        type: ActionTypes.CHANGE_CART,
        localCart
    }
}