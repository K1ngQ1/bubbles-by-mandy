import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

//css import
import "./css.css";

//component import from @mui
import { Box } from "@mui/material";
import { Container } from "@mui/system";

//default component import
import Header from "./components/header";
import ProductPage from "./pages/product_page.jsx";
import SignPage from "./pages/sign_up.jsx";
import ItemPage from "./pages/product_item.jsx";
import LoginPage from "./pages/login.jsx";
import ContactPage from "./pages/contact.jsx";
import CartPage from "./pages/cart.jsx";
import ProfilePage from "./pages/profile.jsx";
import HomePage from "./pages/home.jsx";

const theme = createTheme({
    palette: {
        primary: {
            light: "#E2B6BF",
            main: "#E2B4BD",
            dark: "#C66C7E",
        },
        secondary: {
            light: "#DCFAEE",
            main: "#C9F7E5",
            dark: "#137C54",
        },
        contrastThreshold: 2,
        tonalOffset: 0.05,
    },
});

const App = () => {
    return (
        <Router>
            <ThemeProvider theme={theme}>
                <Container>
                    <Header />
                    <Box
                        sx={{
                            width: "max",
                            height: "max",
                            backgroundColor: "secondary.light",
                            padding: "15px",
                        }}
                    >
                        <Switch>
                            <Route exact path="/">
                                <HomePage />
                            </Route>
                            <Route path="/contact">
                                <ContactPage />
                            </Route>
                            <Route path="/profile">
                                <ProfilePage />
                            </Route>
                            <Route path="/product/:id">
                                <ItemPage />
                            </Route>
                            <Route exact path="/product-page">
                                <ProductPage />
                            </Route>
                            <Route path="/login">
                                <LoginPage />
                            </Route>
                            <Route path="/sign-up">
                                <SignPage />
                            </Route>
                            <Route path="/cart">
                                <CartPage />
                            </Route>
                        </Switch>
                    </Box>
                </Container>
            </ThemeProvider>
        </Router>
    );
};

export default App;
