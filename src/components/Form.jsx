import { useState, forwardRef, useEffect } from "react"
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import Typography from "@mui/material/Typography"
import DialogTitle from "@mui/material/DialogTitle"
import Slide from "@mui/material/Slide"
import TextField from "@mui/material/TextField"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />
})

export default function Form({
    open,
    setOpen,
    value: originalValue,
    setValue: setOriginalValue,
}) {
    const [value, setValue] = useState({})
    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleChange = (e) => {
        setValue((value) => {
            const dupValue = { ...value }
            dupValue[e.target.name] = e.target.value
            return dupValue
        })
    }

    const handleSave = () => {
        setOriginalValue(value)
        handleClose()
    }

    useEffect(() => {
        setValue(originalValue)
    }, [open])

    return (
        <div>
            <Dialog
                maxWidth="lg"
                fullWidth
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>Match Summary Details</DialogTitle>
                <DialogContent>
                    {[1, 2].map((team) => (
                        <Box key={team} sx={{ mt: 2 }}>
                            <Typography variant="h6" gutterBottom>
                                Team {team}
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item md={6}>
                                    <TextField
                                        label="Team Name"
                                        variant="outlined"
                                        fullWidth
                                        name={`team${team}name`}
                                        value={value[`team${team}name`]}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item md={6}>
                                    <TextField
                                        label="Overs"
                                        variant="outlined"
                                        fullWidth
                                        name={`team${team}overs`}
                                        value={value[`team${team}overs`]}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item md={6}>
                                    <TextField
                                        label="Runs"
                                        variant="outlined"
                                        fullWidth
                                        name={`team${team}runs`}
                                        value={value[`team${team}runs`]}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item md={6}>
                                    <TextField
                                        label="Wickets"
                                        variant="outlined"
                                        fullWidth
                                        name={`team${team}wickets`}
                                        value={value[`team${team}wickets`]}
                                        onChange={handleChange}
                                    />
                                </Grid>
                            </Grid>
                            <Typography
                                variant="subtitle1"
                                gutterBottom
                                sx={{ mt: 2 }}
                            >
                                Batsmen
                            </Typography>
                            {[1, 2, 3].map((el) => (
                                <Grid
                                    container
                                    spacing={2}
                                    key={team + el}
                                    sx={{ mt: 1 }}
                                >
                                    <Grid item md={6}>
                                        <TextField
                                            label="Name"
                                            variant="outlined"
                                            fullWidth
                                            name={`team${team}batsman${el}name`}
                                            value={
                                                value[
                                                    `team${team}batsman${el}name`
                                                ]
                                            }
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item md={3}>
                                        <TextField
                                            label="Runs"
                                            variant="outlined"
                                            fullWidth
                                            name={`team${team}batsman${el}runs`}
                                            value={
                                                value[
                                                    `team${team}batsman${el}runs`
                                                ]
                                            }
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item md={3}>
                                        <TextField
                                            label="Balls"
                                            variant="outlined"
                                            fullWidth
                                            name={`team${team}batsman${el}balls`}
                                            value={
                                                value[
                                                    `team${team}batsman${el}balls`
                                                ]
                                            }
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                </Grid>
                            ))}

                            <Typography
                                variant="subtitle1"
                                gutterBottom
                                sx={{ mt: 2 }}
                            >
                                Bowlers
                            </Typography>
                            {[1, 2, 3].map((el) => (
                                <Grid
                                    container
                                    spacing={2}
                                    key={team + el}
                                    sx={{ mt: 1 }}
                                >
                                    <Grid item md={6}>
                                        <TextField
                                            label="Name"
                                            variant="outlined"
                                            fullWidth
                                            name={`team${team}bowler${el}name`}
                                            value={
                                                value[
                                                    `team${team}bowler${el}name`
                                                ]
                                            }
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item md={2}>
                                        <TextField
                                            label="Runs"
                                            variant="outlined"
                                            fullWidth
                                            name={`team${team}bowler${el}runs`}
                                            value={
                                                value[
                                                    `team${team}bowler${el}runs`
                                                ]
                                            }
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item md={2}>
                                        <TextField
                                            label="Wickets"
                                            variant="outlined"
                                            fullWidth
                                            name={`team${team}bowler${el}wickets`}
                                            value={
                                                value[
                                                    `team${team}bowler${el}wickets`
                                                ]
                                            }
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item md={2}>
                                        <TextField
                                            label="Overs"
                                            variant="outlined"
                                            fullWidth
                                            name={`team${team}bowler${el}overs`}
                                            value={
                                                value[
                                                    `team${team}bowler${el}overs`
                                                ]
                                            }
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                </Grid>
                            ))}
                        </Box>
                    ))}

                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                        Summary
                    </Typography>

                    <Grid container spacing={2}>
                        <Grid item md={6}>
                            <TextField
                                label="Winning Team"
                                variant="outlined"
                                fullWidth
                                name={`winningTeam`}
                                value={value[`winningTeam`]}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item md={6}>
                            <TextField
                                label="Won By"
                                variant="outlined"
                                fullWidth
                                name={`wonBy`}
                                value={value[`wonBy`]}
                                onChange={handleChange}
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSave}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
