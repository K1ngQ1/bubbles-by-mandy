import React from "react";

//mui import
import { Grid, Box, Button, ButtonGroup, Typography } from "@mui/material";

//component import
import ItemCard from "../components/itemcard.jsx";

export default function ProductPage() {
    return (
        <div>
            <Typography variant="h3" color="primary">
                Our products:
            </Typography>
            <Box
                sx={{
                    margin: "15px",
                    padding: "15px",
                }}
            >
                <Grid
                    container
                    alignItems="center"
                    direction="row"
                    justifyContent="center"
                >
                    <ButtonGroup
                        color="primary"
                        aria-label="selection buttons"
                        size="large"
                    >
                        <Button>All</Button>
                        <Button>Bathroom</Button>
                        <Button>Kitchen</Button>
                        <Button>other</Button>
                    </ButtonGroup>
                </Grid>
            </Box>
            <Grid
                container
                alignItems="center"
                direction="row"
                justifyContent="center"
            >
                <Typography variant="h4" color="primary">
                    {`All:`}
                </Typography>
            </Grid>
            <br/>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <ItemCard />
                </Grid>
                <Grid item xs={3}>
                    <ItemCard />
                </Grid>
                <Grid item xs={3}>
                    <ItemCard />
                </Grid>
                <Grid item xs={3}>
                    <ItemCard />
                </Grid>
                <Grid item xs={3}>
                    <ItemCard />
                </Grid>
            </Grid>
        </div>
    );
}
