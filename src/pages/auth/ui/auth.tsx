import React, { useState } from "react"
import styles from "./AuthPage.module.css"
import { RegisterForm } from "@/features/auth"
import { LoginForm } from "@/features/auth"
import UndoIcon from "@mui/icons-material/Undo"

export interface Form {
	email: string
	password: string
	name?: string
}

export const AuthPage = () => {
	const [authType, setAuthType] = useState<"login" | "register">("register")

	return (
		<main className={styles.container}>
			<button className={styles.button}>
				<UndoIcon />
			</button>
			<RegisterForm
				authType={authType}
				setAuthType={setAuthType}
			/>
			<LoginForm
				authType={authType}
				setAuthType={setAuthType}
			/>
		</main>
	)
}
