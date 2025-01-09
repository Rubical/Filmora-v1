import React, { FC } from "react"
import { useRouter } from "next/router"
import Button from "@mui/material/Button"
import UndoIcon from "@mui/icons-material/Undo"

const BackToMainBtn = () => {
	const router = useRouter()

	const handleButtonPress = () => {
		router.push("/Zenix_Film")
	}

	return (
		<Button
			onClick={handleButtonPress}
			sx={{
				position: "absolute",
				top: "20px",
				left: { xs: "10px", md: "20px" },
				transform: { xs: "scale(1.5)", md: "scale(2)" },
				zIndex: "300",
				padding: "0px",
				transition: "transform 0.3s ease-in",
				"&:hover": {
					backgroundColor: "transparent",
					transform: "scale(2) rotate(-45deg)"
				},
				"&:active": {
					visibility: "hidden",
					transition: "visibility ease-in 1.5s"
				}
			}}
			disableRipple={true}
		>
			<UndoIcon />
		</Button>
	)
}

export default BackToMainBtn
