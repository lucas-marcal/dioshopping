import { ActionTypes } from "./actionTypes"

const Add = (cart, product) => {
    return{
        type: ActionTypes.ADD_TO_CART,
        cart,
        product
    }
}

const AddItem = (cart, product) => {
    return{
        type: ActionTypes.ADD_ITEM,
        cart,
        product
    }
}

const RemoveItem = (cart, product) => {
    return{
        type: ActionTypes.REMOVE_ITEM,
        cart,
        product
    }
}

const DeleteItem = (cart, product) => {
    return{
        type: ActionTypes.DELETE_ITEM,
        cart,
        product
    }
}

const ChangeCart = (localCart) => {
    return{
        type: ActionTypes.CHANGE_CART,
        localCart
    }
}

export default {
    Add,
    AddItem,
    RemoveItem,
    DeleteItem,
    ChangeCart
}
