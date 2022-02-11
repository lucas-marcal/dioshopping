import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts } from "./store/actions/productActions";
import { Grid } from "@material-ui/core";

import productsList from "./store/reducers/product";

const ProductListing = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();

    // const fetchProducts = async () => {
    //     const response = await axios
    //     .get("https://fakestoreapi.com/products")
    //     .catch((err) => {
    //         console.log("Err", err);
    //     });
    //     console.log(response.data);
    //     // dispatch(setProducts(response.data));
    // }

    // useEffect(() => {
    //     fetchProducts();
    // }, []);

    return (
        <Grid container spacing={3}>
            <ProductComponent />
        </Grid>
    );
};

export default ProductListing;
