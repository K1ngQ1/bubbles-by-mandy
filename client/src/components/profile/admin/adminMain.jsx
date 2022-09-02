import React from "react";

//component imports
//admin
import StockList from "./stockList.tsx";
import OrderList from "./orderList.tsx";
import Input_form from "./input_form.tsx";

//mui import
import { Typography } from "@mui/material";

export default function AdminMain() {
    return (
        <div>
            <hr />
            <Typography variant="h3">Admin:</Typography>
            <OrderList />
            <StockList />
            <Input_form />
        </div>
    );
}
