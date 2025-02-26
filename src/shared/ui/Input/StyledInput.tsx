import React from "react"
import { UseFormRegisterReturn } from "react-hook-form/dist/types/form"
import { firstLetterToUpperCase } from "@/shared/config/utils/firstLetterToUpperCase"
import styles from "./StyledInput.module.css"

interface StyleInputProps {
	type: "name" | "email" | "password"
	register: UseFormRegisterReturn
	error?: string | undefined
}

const StyledInput = ({ register, error, type }: StyleInputProps) => {
	return (
		<input
			{...register}
			autoComplete="off"
			type={type}
			placeholder={firstLetterToUpperCase(type)}
			className={styles.input && error ? styles.input_error : ""}
		/>
	)
}

export default StyledInput
