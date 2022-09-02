import React from "react";

//component imports
import { Link } from "react-router-dom";

//mui import
import {
    Card,
    CardContent,
    Button,
    Typography,
    CardMedia,
    CardHeader,
    CardActions,
} from "@mui/material";

export default function ItemCard() {
    return (
        <Card sx={{ maxWidth: "20vw" }} color="primary">
            <CardHeader title="Item Title" subheader="Item Class" />
            <CardMedia component="img" height="150px" image="./test.jpeg" />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    Description
                </Typography>
                <Typography>Price</Typography>
            </CardContent>
            <CardActions>
                <Button color="primary">Add to Cart</Button>
                <Link to="/product/1" style={{ textDecoration: "none" }}>
                    <Button color="primary">Go to Page</Button>
                </Link>
            </CardActions>
        </Card>
    );
}
