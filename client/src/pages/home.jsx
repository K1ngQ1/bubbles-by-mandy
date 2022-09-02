import React from "react";

//mui imports
import {
    Card,
    CardContent,
    CardMedia,
    Button,
    Box,
    Typography,
} from "@mui/material";

export default function HomePage() {
    return (
        <Box
        sx={{ display: "flex", flexDirection: "column" }}
        >
            <Card
                sx={{
                    display: "flex",
                    alignContent: "center",
                    alignSelf: "center",
                    justifyContent: "center",
                    justifySelf: "center",
                }}
            >
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            About Us
                        </Typography>
                        <Typography component="div">Text adsjhfa fakljhsdf asdfasdjhfla fadjfhaldf asdfjhasdljfas djfhasl asdjfhasdlf asdjfhajskdfa djhfasdfjasdfja sdf jakfha sdjfhasjfa fjdalfjdhfa adsfha sjdfasdf ahfjkdasfla da dklajflkd adkfljadk adfkaklsdjfa dfkasdkfas djfalkdfja dsfkdjfkajs fasdkfjak sdkfljasd fajdkfjdf klajd fkjlasdf jasd</Typography>
                        <Typography
                            variant="subtitle1"
                            color="text.secondary"
                            component="div"
                        >
                            -Name
                        </Typography>
                    </CardContent>
                </Box>
                <CardMedia
                    component="img"
                    sx={{ justifySelf: 'end', width:"15vw", height:'100%'}}
                    image="logo.jpeg"
                    alt="Live from space album cover"
                />
            </Card>
        </Box>
    );
}
