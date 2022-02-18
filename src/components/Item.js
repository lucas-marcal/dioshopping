import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core/';
import { useDispatch, useSelector } from 'react-redux';
import {filterProduct} from "./store/actions/productActions";

const Item = ({ name, details }) => {

    const products = useSelector((state) => state.products.allProducts);

    const filterItems = (catItem) => {
        const result=products.filter((curData)=>{
            return curData.name_categorys === catItem;
        })
        dispatch(filterProduct(result))
    }

    const dispatch = useDispatch();

    return(
        <ListItem button onClick={() => filterItems(name)}>
            <ListItemText
                primary={name}
                secondary={details}
            />
        </ListItem>
    )
}

export default Item;
