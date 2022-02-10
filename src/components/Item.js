import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core/';
import { Link } from 'react-router-dom';

const Item = ({ name, details }) => {
    return(
        <ListItem button component={Link} to="/">
            <ListItemText
                primary={name}
                secondary={details}
            />
        </ListItem>
    )
}

export default Item;
