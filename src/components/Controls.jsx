import { useState } from "react"
import Box from "@mui/material/Box"
import SpeedDial from "@mui/material/SpeedDial"
import SpeedDialIcon from "@mui/material/SpeedDialIcon"
import SpeedDialAction from "@mui/material/SpeedDialAction"

import { toPng } from "html-to-image"
import download from "downloadjs"

import PrintIcon from "@mui/icons-material/Print"
import Edit from "@mui/icons-material/Edit"

import Form from "./Form"

export default function Controls({ value, setValue }) {
    const [formOpen, setFormOpen] = useState(false)

    const handleClickOpenForm = () => {
        setFormOpen(true)
    }

    const handleClickDownload = () => {
        var node = document.querySelector("#score")

        toPng(node)
            .then(function (dataUrl) {
                download(dataUrl, "download.png")
            })
            .catch(function (error) {
                console.error("oops, something went wrong!", error)
            })
    }

    const actions = [
        { icon: <PrintIcon />, name: "Print", onClick: handleClickDownload },
        { icon: <Edit />, name: "Edit", onClick: handleClickOpenForm },
    ]

    return (
        <>
            <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: "absolute", bottom: 16, right: 16 }}
                icon={<SpeedDialIcon />}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        onClick={action.onClick}
                    />
                ))}
            </SpeedDial>
            <Form
                open={formOpen}
                setOpen={setFormOpen}
                value={value}
                setValue={setValue}
            />
        </>
    )
}
