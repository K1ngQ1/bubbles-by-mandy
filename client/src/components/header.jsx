import React from "react";

//component import from @mui
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

//css import
import "../css.css";

export default function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link
                        to="/"
                        style={{ textDecoration: "none", color: "black" }}
                    >
                        <img src="./logo.jpeg" className="logo" />
                    </Link>
                </Typography>
                <Link
                    to="/product-page"
                    style={{ textDecoration: "none", color: "black" }}
                >
                    <Button color="inherit">Products</Button>
                </Link>
                <Link
                    to="/contact"
                    style={{ textDecoration: "none", color: "black" }}
                >
                    <Button color="inherit">Contact Us</Button>
                </Link>
                <Link
                    to="/profile"
                    style={{ textDecoration: "none", color: "black" }}
                >
                    <Button color="inherit">profile</Button>
                </Link>
                <Link
                    to="/login"
                    style={{ textDecoration: "none", color: "black" }}
                >
                    <Button color="inherit">Login</Button>
                </Link>
                <Link
                    to="/cart"
                    style={{ textDecoration: "none", color: "black" }}
                >
                    <Button color="inherit">CART</Button>
                </Link>
            </Toolbar>
        </AppBar>
    );
}
