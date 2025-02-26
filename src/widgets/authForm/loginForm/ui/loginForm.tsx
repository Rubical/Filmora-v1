import React, { Dispatch, SetStateAction } from "react"
import { Box, Button, Input, Typography } from "@mui/material"
import FacebookIcon from "@mui/icons-material/Facebook"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import { useForm } from "react-hook-form"

interface LoginFormProps {
	authType: "login" | "register"
	setAuthType: Dispatch<SetStateAction<"login" | "register">>
}

export const LoginForm = ({ authType, setAuthType }: LoginFormProps) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm()

	const isLogin = authType === "login"

	return (
		<Box>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					position: "absolute",
					bottom: { xs: isLogin ? "0px" : "calc(100% - 600px)", lg: "0" },
					width: { xs: "100%", lg: "65%" },
					height: { xs: "65%", lg: "100%" },
					padding: "25px",
					backgroundColor: "#1e1e1e",
					transition: "1.25s",
					color: "lightgray",
					left: { xs: "0px", lg: isLogin ? "0px" : "calc(100% - 600px)" },
					zIndex: isLogin ? "1" : "0",
					transformOrigin: "right",
					visibility: isLogin ? "visible" : "hidden",
					opacity: isLogin ? "1" : "0"
				}}
			>
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						flexDirection: "column",
						width: "100%",
						height: "100%"
					}}
				>
					<Typography
						sx={{
							fontSize: { xs: "24px", md: "34px" },
							marginBottom: { xs: "20px", md: "0" },
							fontWeight: "700",
							lineHeight: { xs: "1.5", md: "3" },
							color: "lightgray"
						}}
					>
						Sign in to Website
					</Typography>
					<Box>
						<Button
							onClick={() => {}}
							sx={{
								"&:hover": { backgroundColor: "rgba(59,89,152,0.3)" }
							}}
							disableRipple={true}
						>
							<FacebookIcon sx={{ color: "#3b5998" }} />
						</Button>
						<Button
							onClick={() => {}}
							sx={{ "&:hover": { backgroundColor: "rgba(0,119,181,0.3)" } }}
							disableRipple={true}
						>
							<LinkedInIcon sx={{ color: "#0077b5" }} />
						</Button>
					</Box>
					<Typography
						sx={{
							marginTop: { xs: "15px", md: "30px" },
							marginBottom: "12px"
						}}
					>
						or use your email account
					</Typography>
					<Input
						{...register("email", { required: true })}
						autoComplete="off"
						sx={{
							width: "350px",
							maxWidth: "90%",
							height: "40px",
							margin: "4px 0",
							paddingLeft: "25px",
							fontSize: "13px",
							letterSpacing: "0.15px",
							border: "none",
							outline: "none",
							fontFamily: "Montserrat, sans-serif",
							backgroundColor: "rgba(31, 31, 31, 0.73)",
							color: "lightgray",
							transition: "0.25s ease",
							boxShadow: errors.email
								? "inset 2px 2px 4px rgba(174, 0, 0, 0.93), inset -2px -2px 4px rgba(174, 0, 0, 0.93)"
								: "inset 2px 2px 4px rgba(44, 44, 44, 0.73), inset -2px -2px 4px rgba(44, 44, 44, 0.73)",
							"&:focus": {
								boxShadow:
									"inset 2px 2px 4px rgba(65, 65, 65, 0.58), inset -2px -2px 4px rgba(65, 65, 65, 0.58)"
							}
						}}
						placeholder="Email"
					/>
					<Input
						{...register("password", { required: true })}
						autoComplete="off"
						sx={{
							width: "350px",
							maxWidth: "90%",
							height: "40px",
							margin: "4px 0",
							paddingLeft: "25px",
							fontSize: "13px",
							letterSpacing: "0.15px",
							border: "none",
							outline: "none",
							fontFamily: "Montserrat, sans-serif",
							backgroundColor: "rgba(31, 31, 31, 0.73)",
							color: "lightgray",
							transition: "0.25s ease",
							boxShadow: errors.password
								? "inset 2px 2px 4px rgba(174, 0, 0, 0.93), inset -2px -2px 4px rgba(174, 0, 0, 0.93)"
								: "inset 2px 2px 4px rgba(44, 44, 44, 0.73), inset -2px -2px 4px rgba(44, 44, 44, 0.73)",
							"&:focus": {
								boxShadow:
									"inset 2px 2px 4px rgba(65, 65, 65, 0.58), inset -2px -2px 4px rgba(65, 65, 65, 0.58)"
							}
						}}
						type="password"
						placeholder="Password"
					/>
					<Typography sx={{ color: "rgb(192,0,0)", fontSize: "15px", height: "22.5px" }}>
						{/*{error}*/}
					</Typography>
					<Button
						sx={{
							width: " 180px",
							height: "50px",
							borderRadius: "25px",
							marginTop: "50px",
							fontWeight: "700",
							fontSize: "14px",
							letterSpacing: "1.15px",
							backgroundColor: "rgb(172,0,0)",
							color: "lightgray",
							border: "none",
							outline: "none",
							"&:hover": {
								backgroundColor: "rgb(132,0,0)"
							}
						}}
					>
						SIGN IN
					</Button>
				</Box>
			</Box>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					position: "absolute",
					top: { xs: isLogin ? "0" : "calc(100% - 300px)", lg: "0" },
					left: { xs: "0", lg: isLogin ? "calc(100% - 450px)" : " 0" },
					height: { xs: "35%", lg: "100%" },
					width: { xs: "100%", lg: "35%" },
					padding: "50px",
					zIndex: "2",
					transition: "1.25s",
					backgroundColor: "#1e1e1e",
					overflow: "hidden",
					transformOrigin: "left",
					boxShadow: "4px 4px 10px rgba(70, 70, 70, 0.87), -4px -4px 10px rgba(70, 70, 70, 0.87)"
				}}
			>
				<Box
					sx={{
						position: "absolute",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						flexDirection: "column",
						width: "400px",
						padding: "50px 55px",
						transition: " 1.25s",
						visibility: isLogin ? "visible" : "hidden",
						opacity: isLogin ? "1" : "0"
					}}
				>
					<Typography
						sx={{
							fontSize: { xs: "25px", md: "34px" },
							fontWeight: "700",
							lineHeight: "3",
							color: "lightgray"
						}}
					>
						Hello Friend !
					</Typography>
					<Typography
						sx={{
							fontSize: "14px",
							letterSpacing: "0.25px",
							textAlign: "center",
							lineHeight: "1.6",
							color: "lightgray"
						}}
					>
						Enter your personal details and start journey with us
					</Typography>
					<Button
						onClick={() => {
							setAuthType("register")
						}}
						sx={{
							width: " 180px",
							height: "50px",
							borderRadius: "25px",
							marginTop: { xs: "20px", md: "50px" },
							fontWeight: "700",
							fontSize: "14px",
							letterSpacing: "1.15px",
							backgroundColor: "rgb(172,0,0)",
							color: "lightgray",
							border: "none",
							outline: "none",
							"&:hover": {
								backgroundColor: "rgb(132,0,0)"
							}
						}}
					>
						SIGN UP
					</Button>
				</Box>
			</Box>
			<Box
				sx={{
					position: "absolute",
					width: { xs: "250px", md: "500px" },
					height: { xs: "250px", md: "500px" },
					borderRadius: "50%",
					backgroundColor: "rgba(28, 28, 28, 0.87)",
					boxShadow:
						"inset 8px 8px 12px rgba(70, 70, 70, 0.87), inset -8px -8px 12px rgba(70, 70, 70, 0.87)",
					bottom: "-60%",
					left: authType === "login" ? "calc(100% - 250px)" : "-40%",
					transition: "1.25s",
					zIndex: "3"
				}}
			></Box>
			<Box
				sx={{
					position: "absolute",
					width: { xs: "200px", md: "300px" },
					height: { xs: "200px", md: "300px" },
					borderRadius: "50%",
					backgroundColor: "rgba(28, 28, 28, 0.87)",
					boxShadow:
						"inset 8px 8px 12px rgba(70, 70, 70, 0.87), inset -8px -8px 12px rgba(70, 70, 70, 0.87)",
					top: "-30%",
					left: authType === "login" ? "calc(100% - 350px)" : "60%",
					transition: "1.25s",
					zIndex: "3"
				}}
			></Box>
		</Box>
	)
}

export default LoginForm
