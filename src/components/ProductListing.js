import React from "react";
import ProductComponent from "./ProductComponent";
import { Grid } from "@material-ui/core";


const ProductListing = () => {

    return (
        <Grid container spacing={3}>
            <ProductComponent />
        </Grid>
    );
};

export default ProductListing;
