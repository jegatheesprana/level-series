import { useState } from "react"

import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"

import TeamDetail from "./TeamDetail"
import PlayerDetail from "./PlayerDetail"
import MatchSummary from "./MatchSummary"
import Controls from "./Controls"

import player from "../assets/player.png"
import player2 from "../assets/player2.png"

const Score = () => {
    const [value, setValue] = useState({
        team1name: "Level 0",
        team1overs: "10",
        team1runs: "10",
        team1wickets: "8",

        team1batsman1name: "a",
        team1batsman1runs: "10",
        team1batsman1balls: "10",

        team1batsman2name: "a",
        team1batsman2runs: "10",
        team1batsman2balls: "10",

        team1batsman3name: "a",
        team1batsman3runs: "10",
        team1batsman3balls: "10",

        team1bowler1name: "s",
        team1bowler1runs: "10",
        team1bowler1wickets: "0",
        team1bowler1overs: "1",

        team1bowler2name: "s",
        team1bowler2runs: "10",
        team1bowler2wickets: "0",
        team1bowler2overs: "1",

        team1bowler3name: "s",
        team1bowler3runs: "10",
        team1bowler3wickets: "0",
        team1bowler3overs: "1",

        team2name: "Level 4",
        team2overs: "13",
        team2runs: "64",
        team2wickets: "9",

        team2batsman1name: "a",
        team2batsman1runs: "10",
        team2batsman1balls: "10",

        team2batsman2name: "a",
        team2batsman2runs: "10",
        team2batsman2balls: "10",

        team2batsman3name: "a",
        team2batsman3runs: "10",
        team2batsman3balls: "10",

        team2bowler1name: "s",
        team2bowler1runs: "10",
        team2bowler1wickets: "0",
        team2bowler1overs: "1",

        team2bowler2name: "s",
        team2bowler2runs: "10",
        team2bowler2wickets: "0",
        team2bowler2overs: "1",

        team2bowler3name: "s",
        team2bowler3runs: "10",
        team2bowler3wickets: "0",
        team2bowler3overs: "1",

        winningTeam: "Level 4",
        wonBy: "20 runs",
    })

    return (
        <>
            <div id="score" className="wrapper">
                <div className="container">
                    <Box
                        component="img"
                        sx={{
                            position: "absolute",
                            height: 450,
                            left: -100,
                            bottom: 0,
                            zIndex: -1,
                        }}
                        src={player}
                    />
                    <Box
                        component="img"
                        sx={{
                            position: "absolute",
                            right: 0,
                            height: 300,
                            zIndex: -1,
                        }}
                        src={player2}
                    />
                    <Container maxWidth="md" sx={{ pt: 2, height: "100vh" }}>
                        <Typography variant="h4" textAlign="center">
                            MATCH SUMMARY
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            gutterBottom
                            textAlign="center"
                        >
                            Amizh-karo trophy 2023
                        </Typography>
                        <TeamDetail team={1} value={value} />
                        <PlayerDetail team={1} value={value} />
                        <TeamDetail team={2} value={value} />
                        <PlayerDetail team={2} value={value} />
                        <MatchSummary value={value} />
                    </Container>
                </div>
            </div>
            <Controls value={value} setValue={setValue} />
        </>
    )
}

export default Score
