import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts } from "./store/actions/productActions";

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

    console.log("Produtos: ", products)

    return (
        <>
            <ProductComponent />
        </>
    );
};

export default ProductListing;
