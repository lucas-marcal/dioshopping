import React from "react";
import { useSelector } from "react-redux";
import { Box, Grid, Typography, List, makeStyles } from "@material-ui/core/";
import Item from "../components/Item";
import ProductListing from "../components/ProductListing";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "15px",
    },
    category: {
        flexGrow: 1,
        marginTop: "25px",
    },
    paper: {
        padding: theme.spacing(2),
    },
}));

const HomePage = () => {
    const products = useSelector((state) => state.products);
    const classes = useStyles();

    const categorys = products.map((category) => {
        const container = {};
        container["id"] = category.id_categorys;
        container["name"] = category.name_categorys;
        return container;
    });

    const category = categorys
        .map(JSON.stringify)
        .filter(function (item, index, arr) {
            return arr.indexOf(item, index + 1) === -1;
        })
        .map(JSON.parse);

    const arrayCategory = categorys.map((category) => category.name);
    let count = {};

    for (let i = 0; i < arrayCategory.length; i++) {
        let key = arrayCategory[i];
        count[key] = count[key] ? count[key] + 1 : 1;
    }

    return (
        <Grid container className={classes.root}>
            <Grid item xs={12} sm={3}>
                <Box className={classes.paper} elevation={3}>
                    <Typography variant="h5" color="primary">
                        Categorias
                    </Typography>
                    <List>
                        {category.map((category) => {
                            return (
                                <Item
                                    key={category.id}
                                    name={category.name}
                                    details={count[category.name]}
                                />
                            );
                        })}
                    </List>
                </Box>
            </Grid>
            <Grid item xs={12} sm={9}>
                <ProductListing />
            </Grid>
        </Grid>
    );
};

export default HomePage;
