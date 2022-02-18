import React from "react";
import {
    Paper,
    Grid,
    Typography,
    Button,
    makeStyles,
} from "@material-ui/core/";
import { useSelector, useDispatch } from "react-redux";
import {Add} from "./store/actions/cart";
import ProductDetails from "./ProductDetails";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        borderRadius: "10px",
    },
    btn: {
        marginBottom: theme.spacing(1),
    },
    price: {
        marginBottom: theme.spacing(1),
    }
}));

const ProductComponent = () => {
    const products = useSelector((state) => state.products.currentProducts);

    const classes = useStyles();
    const renderList = products.map((product) => {
        const { id_product, image, price, name_product, name_categorys } = product;

        return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={id_product}>
                <Paper className={classes.paper}>
                    <Grid container direction="column">
                        <Grid item>
                            <img width="140px" src={image} alt={name_product} className={classes.price} />
                            <Typography variant="h6">{name_product}</Typography>
                            <Typography variant="subtitle1" className={classes.price} >
                                R$ {price.toFixed(2)}
                            </Typography>
                        </Grid>

                        <Button
                            className={classes.btn}
                            variant="contained"
                            color="primary"
                            onClick={() =>
                                dispatch(Add(cart, product))
                            }
                        >
                            Adicionar
                        </Button>
                        <ProductDetails
                            name_product={name_product}
                            image={image}
                            price={price}
                            name_category={name_categorys}
                        />
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
