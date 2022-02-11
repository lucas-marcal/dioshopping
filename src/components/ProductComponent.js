import React from "react";
import {
    Paper,
    Grid,
    Typography,
    Button,
    makeStyles,
} from "@material-ui/core/";
import { useSelector, useDispatch } from "react-redux";
import cartActions from "./store/actions/cart";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        borderRadius: "10px",
    },
}));

const ProductComponent = () => {
    const products = useSelector((state) => state.products);
    const { id_product, name_product, price, image } = products;

    const classes = useStyles();
    const renderList = products.map((product) => {
        const { id_product, title, image, price, category, name_product } =
            product;
        console.log(product);
        return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={id_product}>
                <Paper className={classes.paper}>
                    <Grid container direction="column">
                        <Grid item>
                            <img width="140px" src={image} alt={title} />
                            <Typography variant="h6">{name_product}</Typography>
                            <Typography variant="subtitle1">
                                R$ {price.toFixed(2)}
                            </Typography>
                        </Grid>

                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() =>
                                dispatch(cartActions.Add(cart, product))
                            }
                        >
                            Adicionar
                        </Button>
                    </Grid>
                </Paper>
            </Grid>
        );
    });
    const cart = useSelector((state) => state.cart.value);
    const dispatch = useDispatch();

    return <>{renderList}</>;
};

export default ProductComponent;
