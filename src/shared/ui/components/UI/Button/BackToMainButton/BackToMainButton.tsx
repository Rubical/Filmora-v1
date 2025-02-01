import React, { FC } from "react"
import { useRouter } from "next/router"
import UndoIcon from "@mui/icons-material/Undo"
import styles from "./BackToMainButton.module.css"

const BackToMainButton = () => {
	const router = useRouter()

	const handleButtonPress = () => {
		router.push("/Zenix_Film")
	}

	return (
		<button
			onClick={handleButtonPress}
			className={styles.button}
		>
			<UndoIcon />
		</button>
	)
}

export default BackToMainButton
