import React from "react";

//mui imports
import { Card, CardContent, Typography, Box } from "@mui/material";

export default function ContactPage() {
    return (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Card
                sx={{
                    display: "flex",
                    alignContent: "center",
                    alignSelf: "center",
                    justifyContent: "center",
                    justifySelf: "center",
                    width: "100%"
                }}
            >
                <CardContent>
                    <Typography variant="h5" component="div">
                        tes
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        adjective
                    </Typography>
                    <Typography variant="body2">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}
