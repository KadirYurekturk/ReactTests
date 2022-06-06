import { Grid } from "@mui/material";
import React from "react";


export default function Center(props) {
    return (
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            textAlign="center"
            sx={{ minHeight: "100vh" }}
        >
            <Grid item xs={1}>
                {props.children}
            </Grid>
        </Grid>
    );
}
