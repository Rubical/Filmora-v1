"use client"

import { Container, Button, Box } from "@mui/material"
import UndoIcon from "@mui/icons-material/Undo"
import { useState } from "react"
import { RegisterForm } from "@/widgets/authForm/registerForm/ui/registerForm"
import LoginForm from "@/widgets/authForm/loginForm/ui/loginForm"

export const AuthView = () => {
	const [authType, setAuthType] = useState<"register" | "login">("login")
	return (
		<Container
			sx={{
				position: "relative",
				width: { xs: "90%", md: "80%" },
				height: { xs: "700px", lg: "600px" },
				margin: "50px auto 0 auto",
				borderRadius: "12px",
				overflow: "hidden"
			}}
		>
			<Button
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

			<RegisterForm
				authType={authType}
				setAuthType={setAuthType}
			/>
			<LoginForm
				authType={authType}
				setAuthType={setAuthType}
			/>
		</Container>
	)
}
