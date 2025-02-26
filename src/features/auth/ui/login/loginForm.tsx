import React from "react"
import styles from "@/pages/auth/ui/auth.module.scss"
import { signInWithOAuth } from "@/shared/lib/supabase"
import { SubmitHandler, useForm } from "react-hook-form"
import { Form } from "@/pages/auth/ui/auth"
import StyledInput from "@/shared/ui/Input/StyledInput"
import StyledButton from "@/shared/ui/Button/StyledButton"
import FacebookIcon from "@mui/icons-material/Facebook"
import LinkedInIcon from "@mui/icons-material/LinkedIn"

interface LoginFormProps {
	authType: "login" | "register"
	setAuthType: React.Dispatch<React.SetStateAction<"login" | "register">>
}

export const LoginForm = ({ authType, setAuthType }: LoginFormProps) => {
	const { register, handleSubmit, reset, formState } = useForm<Form>({
		mode: "onChange"
	})

	const emailError = formState.errors.email?.message
	const passwordError = formState.errors.password?.message

	const handleLogin: SubmitHandler<Form> = ({ email, password }) => {}
	return (
		<>
			<div
				className={`${styles.formContainer} ${styles.formSignInContainer} ${
					authType === "register" && styles.formSignUpContainer__hidden
				}`}
			>
				<div className={styles.formBox}>
					<p className={styles.title}>Sign in to Website</p>
					<div>
						<button
							className={styles.facebookBtn}
							onClick={() => {
								signInWithOAuth("facebook")
							}}
						>
							<FacebookIcon sx={{ color: "#3b5998" }} />
						</button>
						<button
							className={styles.facebookBtn}
							onClick={() => {
								signInWithOAuth("linkedin")
							}}
						>
							<LinkedInIcon sx={{ color: "#0077b5" }} />
						</button>
					</div>
					<p className={styles.subTitle}>or use your email account</p>
					<StyledInput
						type={"email"}
						register={register("email", {
							required: "This field is required",
							pattern: {
								value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
								message: "Invalid email address!"
							}
						})}
						error={emailError}
					/>
					<StyledInput
						type={"password"}
						register={register("password", {
							required: "This field is required",
							pattern: {
								value: /^([a-zA-Z0-9_-]){6,200}$/,
								message: "Password should be at least 6 symbols!"
							}
						})}
						error={passwordError}
					/>
					<p className={styles.errorMessage}>{emailError || passwordError}</p>
					<StyledButton
						text={"SIGN IN"}
						submit={true}
					/>
				</div>
			</div>
			<div
				className={`${styles.changeFormTypeBox} ${
					authType !== "login" && styles.backgroundBubbleBottom__hidden
				}`}
			>
				<p className={styles.changeFormTypeBoxTitle}>Hello Friend !</p>
				<p className={styles.changeFormTypeBoxText}>
					Enter your personal details and start journey with us
				</p>
				<StyledButton
					text={"SIGN UP"}
					fn={() => {
						reset()
						setAuthType("login")
					}}
				/>
			</div>
		</>
	)
}

export default LoginForm
