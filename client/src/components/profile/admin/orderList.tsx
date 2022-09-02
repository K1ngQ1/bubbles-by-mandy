import React from "react";

//mui imports
import {
    Button,
    MenuItem,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    TextField,
    Typography,
} from "@mui/material";

export default function OrderList() {
    const createData = (
        name: String,
        amount: number,
        date: String,
        id: String
    ) => {
        return { name, amount, date, id };
    };

    const rows = [
        createData("tabs", 3, "1995-12-17T03:24:00", "22322kladf"),
        createData("tabs", 3, "1995-12-17T03:24:00", "22322kladf"),
        createData("tabs", 3, "1995-12-17T03:24:00", "22322kladf"),
    ];

    return (
        <>
            <hr />
            <Typography variant="h4">Order List:</Typography>
            <TableContainer>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            <TableRow>
                                Date:{" "}
                                {new Date(Date.now()).toLocaleDateString()}
                            </TableRow>
                            <TableRow>Id: 123142243rgwrg2435452</TableRow>
                            <TableRow>
                                <TableRow>
                                    <TableCell>Name: **name</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Surname: **surname</TableCell>
                                </TableRow>
                            </TableRow>
                            <TableRow>
                                <br />
                                <TextField
                                    label="Tag"
                                    focused
                                    fullWidth
                                    select
                                    // value={tag}
                                    // onChange={handleChange}
                                >
                                    <MenuItem>Awaiting Payment</MenuItem>
                                    <MenuItem>Proccesing</MenuItem>
                                    <MenuItem>Ready to Ship</MenuItem>
                                </TextField>
                                <br />
                                <br />
                            </TableRow>
                            <TableRow>Shipping info:</TableRow>
                            <TableRow>7 asdf</TableRow>
                            <TableRow>vakjl</TableRow>
                            <TableRow>dasf</TableRow>
                            <TableRow>0111</TableRow>
                            <TableRow>Number: 078 870 9898</TableRow>

                            {rows.map((row) => (
                                <TableRow>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell align="right">
                                        x{row.amount}
                                    </TableCell>
                                </TableRow>
                            ))}
                            <TableRow>
                                <br/>
                                <Button>Complete</Button>
                            </TableRow>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </TableContainer>
        </>
    );
}
