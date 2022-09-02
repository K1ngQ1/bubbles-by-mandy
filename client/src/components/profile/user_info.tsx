import React, { useState } from "react";

//component imports

//mui import
import {
    Button,
    TableContainer,
    Typography,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    TextField,
    Paper,
} from "@mui/material";

export default function User_info() {
    const [edit, setEdit] = useState(false);

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
        createData("tabs", 3, "1995-12-17T03:24:00", "22322kladf"),
        createData("tabs", 3, "1995-12-17T03:24:00", "22322kladf"),
        createData("tabs", 3, "1995-12-17T03:24:00", "22322kladf"),
    ];
    return (
        <div>
            <Typography variant="h4">User Info:</Typography>
            <br />
            {!edit ? (
                <div>
                    <hr />
                    <Typography variant="h5">Name:</Typography>
                    <Typography variant="h6">**name</Typography>
                    <Typography variant="h5">Phone Number:</Typography>
                    <Typography variant="h6">**phone</Typography>
                    <Typography variant="h5">E-mail:</Typography>
                    <Typography variant="h6">**email</Typography>
                    <Typography variant="h5">Adress:</Typography>
                    <Typography variant="h6">**adress</Typography>
                    <br />
                    <Button
                        onClick={() => setEdit(true)}
                        variant="outlined"
                        color="primary"
                    >
                        Edit
                    </Button>
                    <br />
                    <br />
                </div>
            ) : (
                <div>
                    <TextField
                        id="Name"
                        label="Name"
                        focused
                        variant="outlined"
                        color="primary"
                        fullWidth
                    />
                    <br />
                    <br />
                    <TextField
                        id="Surname"
                        label="Surname"
                        focused
                        variant="outlined"
                        color="primary"
                        fullWidth
                    />
                    <br />
                    <br />
                    <TextField
                        id="phone"
                        label="Phone Number"
                        focused
                        variant="outlined"
                        color="primary"
                        fullWidth
                        type="number"
                    />
                    <br />
                    <br />
                    <TextField
                        id="email"
                        label="E-Mail"
                        focused
                        variant="outlined"
                        color="primary"
                        fullWidth
                    />
                    <br />
                    <br />
                    <TextField
                        id="street"
                        label="Street Adress"
                        focused
                        variant="outlined"
                        color="primary"
                    />
                    <br />
                    <br />
                    <TextField
                        id="Suburb"
                        label="suburb"
                        focused
                        variant="outlined"
                        color="primary"
                    />
                    <br />
                    <br />
                    <TextField
                        id="city"
                        label="City"
                        focused
                        variant="outlined"
                        color="primary"
                    />
                    <br />
                    <br />
                    <TextField
                        id="province"
                        label="Province"
                        focused
                        variant="outlined"
                        color="primary"
                    />
                    <br />
                    <br />
                    <TextField
                        id="postcode"
                        label="Postcode"
                        focused
                        variant="outlined"
                        color="primary"
                        type="number"
                    />
                    <br />
                    <br />
                    <Button
                        onClick={() => setEdit(false)}
                        variant="outlined"
                        color="primary"
                    >
                        Save
                    </Button>
                    <br />
                    <br />
                </div>
            )}
            <div>
                <Typography variant="h5">Order History:</Typography>
                <TableContainer  component={(Paper)}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Status:</TableCell>
                                <TableCell align="right">Amount:</TableCell>
                                <TableCell align="right">Date:</TableCell>
                                <TableCell align="right">ID:</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    // key ={row.name}
                                    sx={{
                                        "&:last-child td, &:last-child th": {
                                            border: 0,
                                        },
                                    }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">
                                        {row.amount}
                                    </TableCell>
                                    <TableCell align="right">
                                        {row.date}
                                    </TableCell>
                                    <TableCell align="right">
                                        {row.id}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <br />
                <br />
            </div>
        </div>
    );
}
