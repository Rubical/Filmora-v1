import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type UserState = {
	name?: string
	email: string
	isLogged: boolean
}

const defaultValues = {
	name: "",
	email: ""
}

const initialState: UserState = {
	...defaultValues,
	isLogged: !!defaultValues.email
}

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<UserState>) => {
			return { ...action.payload, isLogged: !!action.payload.email }
		},
		deleteUser: () => {
			return {
				name: "",
				email: "",
				isLogged: false
			}
		}
	}
})

export const { setUser, deleteUser } = userSlice.actions
export default userSlice.reducer
