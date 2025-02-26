import React from "react"
import styles from "./registerForm.module.scss"
import { SubmitHandler, useForm } from "react-hook-form"
import { Form } from "@/pages/auth/ui/auth"
import StyledInput from "@/shared/ui/Input/StyledInput"
import StyledButton from "@/shared/ui/Button/StyledButton"

interface RegisterFormProps {
	authType: "login" | "register"
	setAuthType: React.Dispatch<React.SetStateAction<"login" | "register">>
}

export const RegisterForm = ({ authType, setAuthType }: RegisterFormProps) => {
	const { register, handleSubmit, reset, formState } = useForm<Form>({
		mode: "onChange"
	})

	const emailError = formState.errors.email?.message
	const passwordError = formState.errors.password?.message

	const handleRegister: SubmitHandler<Form> = ({ name, email, password }) => {}

	return (
		<>
			<div
				className={`${styles.formContainer} ${styles.formSignUpContainer} ${
					authType === "login" && styles.formSignUpContainer__hidden
				}`}
			>
				<div className={styles.formBox}>
					<p className={styles.title}>Create Account</p>
					<form>
						<StyledInput
							type={"name"}
							register={register("name", { required: false })}
						/>
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
					</form>
					<p className={styles.errorMessage}>{emailError || passwordError}</p>
					<StyledButton
						text={"SIGN UP"}
						submit={true}
					/>
				</div>
			</div>
			<div
				className={`${styles.changeFormTypeContainer} ${
					authType !== "login" && styles.changeFormTypeContainer__hidden
				}`}
			>
				<span
					className={`${styles.backgroundBubble} ${styles.backgroundBubbleTop} ${
						authType !== "login" && styles.backgroundBubbleTop__hidden
					}`}
				/>
				<span
					className={`${styles.backgroundBubble} ${styles.backgroundBubbleBottom} ${
						authType !== "login" && styles.backgroundBubbleBottom__hidden
					}`}
				/>
				<div
					className={`${styles.changeFormTypeBox} ${
						authType === "login" && styles.backgroundBubbleBottom__hidden
					}`}
				>
					<p className={styles.changeFormTypeBoxTitle}>Welcome Back !</p>
					<p className={styles.changeFormTypeBoxText}>
						To keep connected with us please login with your personal info
					</p>
					<StyledButton
						text={"SIGN IN"}
						fn={() => {
							reset()
							setAuthType("login")
						}}
					/>
				</div>
			</div>
		</>
	)
}
