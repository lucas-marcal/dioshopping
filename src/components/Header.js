import React from "react";
import { Link } from "react-router-dom";
import { Container, Grid, Typography, Button, makeStyles } from "@material-ui/core/";
import Cart from "./Cart";

const useStyles = makeStyles((theme) => ({
    btn: {
        marginRight: "15px",
        color: "black",
        fontSize: "24px",
        textDecoration: "none"
    },
    center: {
        alignItems: "center",
    }
}));

const Header = () => {
    const classes = useStyles();

    return (
            <Grid
                container
                justifyContent="space-between"
                alignItems="center"
            >
                <Grid item>    
                    <Link to="/" style={{ textDecoration: 'none' }}>
                    <Typography variant="button" className={classes.btn}>Dio Shopping</Typography>
                    </Link>
                    <Link to="/contato">
                        <Button color="primary">Contato</Button>
                    </Link>
                </Grid>
                <Grid item>
                    <Cart />
                </Grid>
            </Grid>
    );
};

export default Header;
