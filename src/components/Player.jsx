import * as React from "react"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"

export default function Player({ name, value }) {
    return (
        <Paper
            sx={{
                p: 1,
                backgroundColor: "white",
                color: "black",
                borderRadius: 4,
            }}
        >
            <Box sx={{ flexGrow: 1, px: 2 }}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Typography variant="h6" component="div">
                            {name}
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography
                            variant="h6"
                            component="div"
                            textAlign="end"
                        >
                            {value}
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    )
}
