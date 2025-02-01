import React from "react"
import styles from "./changeType.module.scss"
import { useActions } from "@/shared/lib/useActions"
import { useType } from "@/features/changeType/libs/useType"

export const ChangeType = () => {
	const { changeType } = useActions()
	const type = useType()

	return (
		<div className={styles.buttonContainer}>
			<button
				onClick={() => changeType("movie")}
				className={`${styles.button} ${type === "tv" && styles.button__active} `}
			>
				Movies
			</button>
			<button
				onClick={() => changeType("tv")}
				className={`${styles.button} ${type === "tv" && styles.button__active} `}
			>
				TV series
			</button>
		</div>
	)
}
