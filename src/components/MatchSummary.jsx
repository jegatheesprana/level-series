import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"

export default function MatchSummary({ value }) {
    return (
        <Paper sx={{ p: 1, borderRadius: 4, px: 3, mt: 2 }}>
            <Typography variant="h5" component="div" textAlign="center">
                {value.winningTeam} won by {value.wonBy}
            </Typography>
        </Paper>
    )
}
