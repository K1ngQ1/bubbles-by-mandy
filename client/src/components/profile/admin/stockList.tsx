import React from "react";

//mui imports
import {
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    TextField,
    Typography,
} from "@mui/material";

export default function StockList() {
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
        <>
            <hr />
            <Typography variant="h4">Stock List:</Typography>
            <Table sx={{width: 1200}}>
            <TableContainer >
                <TableBody>

                        {rows.map((row) => (
                            <>
                                <Typography variant="h5">Item Name:</Typography>
                                <TableRow>
                                    <TextField
                                        id="name"
                                        label={row.name}
                                        // focused
                                        variant="outlined"
                                        // color="primary"
                                        fullWidth
                                        multiline
                                        maxRows={8}
                                    />
                                </TableRow>
                                <br />
                                <TableRow>
                                    <TextField
                                        id="name"
                                        label={row.name}
                                        // focused
                                        variant="outlined"
                                        // color="primary"
                                        fullWidth
                                        multiline
                                        maxRows={8}
                                    />
                                </TableRow>
                                <br />
                                <br />
                                <TableRow>
                                    <TextField
                                        id="name"
                                        label={row.name}
                                        // focused
                                        variant="outlined"
                                        // color="primary"
                                        fullWidth
                                        multiline
                                        maxRows={8}
                                    />
                                </TableRow>
                                <br />
                                <br />
                                <TableRow>
                                    <TextField
                                        id="name"
                                        label={row.name}
                                        // focused
                                        variant="outlined"
                                        // color="primary"
                                        fullWidth
                                        multiline
                                        maxRows={8}
                                    />
                                </TableRow>
                                <br />
                                <br />
                                <TableRow>
                                    <TextField
                                        id="name"
                                        label={row.name}
                                        // focused
                                        variant="outlined"
                                        // color="primary"
                                        fullWidth
                                        multiline
                                        maxRows={8}
                                    />
                                </TableRow>
                                <br />
                                <br />
                                <TableRow>
                                    <TextField
                                        id="name"
                                        label={row.name}
                                        // focused
                                        variant="outlined"
                                        // color="primary"
                                        fullWidth
                                        multiline
                                        maxRows={8}
                                    />
                                </TableRow>
                                <br />
                                <br />
                                <TableRow>
                                    <TextField
                                        id="name"
                                        label={row.name}
                                        // focused
                                        variant="outlined"
                                        // color="primary"
                                        fullWidth
                                        multiline
                                        maxRows={8}
                                    />
                                </TableRow>
                                <br />
                                <br />
                                <TableRow>
                                    <Button>
                                        Image
                                    </Button>
                                </TableRow>
                                <br />
                                <br />
                                <TableRow>
                                    <Button>
                                        Save
                                    </Button>
                                </TableRow>
                                <br />
                                <br />
                                <hr />
                            </>
                        ))}

                </TableBody>
            </TableContainer>
            </Table>
        </>
    );
}
