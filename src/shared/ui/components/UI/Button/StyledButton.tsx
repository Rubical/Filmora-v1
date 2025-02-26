import React from "react"
import styles from "./StyledButton.module.css"

const StyledButton = ({
	text,
	submit,
	fn
}: {
	text: string
	submit?: boolean
	fn?: () => void
}) => {
	return (
		<button
			className={styles.button}
			type={submit ? "submit" : "button"}
		>
			{text}
		</button>
	)
}

export default StyledButton
