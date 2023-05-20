import * as React from "react"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"

import Player from "./Player"

export default function PlayerDetail({ team, value }) {
    return (
        <Box sx={{ flexGrow: 1, mt: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Stack spacing={1}>
                        {[1, 2, 3].map((el) => (
                            <Player
                                key={team + el + "batsman"}
                                name={value[`team${team}batsman${el}name`]}
                                value={`${
                                    value[`team${team}batsman${el}runs`]
                                } (${value[`team${team}batsman${el}balls`]})`}
                            />
                        ))}
                    </Stack>
                </Grid>
                <Grid item xs={6}>
                    <Stack spacing={1}>
                        {[1, 2, 3].map((el) => (
                            <Player
                                key={team + el + "bowler"}
                                name={value[`team${team}bowler${el}name`]}
                                value={`${
                                    value[`team${team}bowler${el}runs`]
                                }/${value[`team${team}bowler${el}wickets`]} (${
                                    value[`team${team}bowler${el}overs`]
                                })`}
                            />
                        ))}
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    )
}
