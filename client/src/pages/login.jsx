import React from "react";

//component import
import SignPage from "./sign_up";

//mui import
import { Paper, TextField, Button } from "@mui/material";

export default function LoginPage() {
    return (
        <div>
            <Paper
                sx={{
                    // alignItems:"center",
                    // justifyContent:"center",
                    // direction:"column",
                    width: "250px",
                    padding: "15px",
                }}
                container
                alignItems="center"
                direction="row"
                justifyContent="center"
            >
                <TextField></TextField>
                <br />
                <TextField></TextField>
                <br />
                <TextField></TextField>
                <br />
                <Button>Submit</Button>
            </Paper>

            <br></br>
            <SignPage />
        </div>
    );
}
