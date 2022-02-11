import React, { useState } from "react";
import { Modal, makeStyles, Button, Grid, Typography, } from "@material-ui/core";
import { StayPrimaryLandscape } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(1),
        textAlign: "center",
        borderRadius: "10px",
    },
    modal: {
        position: "absolute",
        width: "auto",
        backgroundColor: theme.palette.background.paper,
        border: "1px solid orange",
        borderRadius: "10px",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    details: {
        padding: theme.spacing(3)
    },
    description: {
        marginTop: theme.spacing(1)
    },
    title: {
        fontWeight: "500"
    }
}));

function getModalStyle() {

    return {
        top: "50vh",
        left: "50vw",
        transform: "translate(-50%, -50%)",
    };
}

const ProductDetails = ( product ) => {
    const { id_product, image, price, name_category, name_product } = product;
    console.log(product)
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <Grid container style={modalStyle} className={classes.modal}>
            <Grid item xs={12} md={6}>
                <img
                    width="100%"
                    src={image}
                    alt={name_product}
                    className={classes.paper}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <Grid container className={classes.details}>
                    <Typography variant="h4" id="modalTitle" className={classes.title}>
                        {name_product}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        id="modalDescription"
                        className={classes.description}
                    >
                        Uma descrição simples do produto "{name_product}"
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        id="modalCategory"
                        className={classes.description}
                    >
                        Categoria: {name_category}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );


    return (
        <div>
            <Button
                variant="contained"
                color="secondary"
                onClick={handleOpen}
                fullWidth
            >
                Detalhes
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
};

export default ProductDetails;
