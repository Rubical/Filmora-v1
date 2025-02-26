import React, { Dispatch, SetStateAction } from "react"
import { Box, Button, Input, Typography } from "@mui/material"
import { useForm } from "react-hook-form"

interface RegisterFormProps {
	authType: "login" | "register"
	setAuthType: Dispatch<SetStateAction<"login" | "register">>
}

export const RegisterForm = ({ authType, setAuthType }: RegisterFormProps) => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors }
	} = useForm()
	console.log(errors)
	const isLogin = authType === "login"

	return (
		<Box>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					position: "absolute",
					bottom: { xs: isLogin ? "0px" : "calc(100% - 420px)", lg: "0" },
					width: { xs: "100%", lg: "65%" },
					height: { xs: "65%", lg: "100%" },
					backgroundColor: "#1e1e1e",
					transition: "1.25s",
					color: "lightgray",
					zIndex: "2",
					left: { xs: "0px", lg: isLogin ? "0px" : "calc(100% - 800px)" },
					visibility: isLogin ? "hidden" : "visible",
					opacity: isLogin ? "0" : "1"
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
							fontWeight: "700",
							lineHeight: "3",
							color: "lightgray"
						}}
					>
						Create Account
					</Typography>
					<Input
						{...register("name", { required: false })}
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
							boxShadow:
								"inset 2px 2px 4px rgba(44, 44, 44, 0.73), inset -2px -2px 4px rgba(44, 44, 44, 0.73)",
							"&:focus": {
								boxShadow:
									"inset 2px 2px 4px rgba(65, 65, 65, 0.58), inset -2px -2px 4px rgba(65, 65, 65, 0.58)"
							}
						}}
						type="text"
						placeholder="Name (optional)"
					/>
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
						{/*{console.log(errors)}*/}
					</Typography>
					<Button
						onClick={() => {}}
						sx={{
							width: " 180px",
							height: "50px",
							borderRadius: "25px",
							marginTop: { xs: "0", md: "50px" },
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
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
					width: "400px",
					padding: "50px 55px",
					transition: " 1.25s",
					visibility: isLogin ? "hidden" : "visible",
					opacity: isLogin ? "0" : "1",
					zIndex: "3"
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
					Welcome Back !
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
					To keep connected with us please login with your personal info
				</Typography>
				<Button
					onClick={() => {
						setAuthType("login")
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
					SIGN IN
				</Button>
			</Box>
		</Box>
	)
}
