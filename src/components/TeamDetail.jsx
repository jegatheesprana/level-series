import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"

export default function TeamDetail({ value, team }) {
    return (
        <Paper sx={{ p: 1, borderRadius: 4, px: 3, mt: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Typography variant="h5" component="div">
                        {value[`team${team}name`]}
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography variant="h5" component="div">
                        OVERS {value[`team${team}overs`]}
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography variant="h5" component="div" textAlign="end">
                        {value[`team${team}runs`]}/{value[`team${team}wickets`]}
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    )
}
