import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { LOCAL_STORAGE_AUTH_TOKEN } from "@/shared/constants/constants"

interface User {
	created_at: string
}

interface AuthState {
	name: string
	email: string
	isLogged: boolean
	user: User | null
}

const initialState: AuthState = {
	name: "",
	email: "",
	isLogged: false,
	user: null
}

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setName: (state, action: PayloadAction<string>) => {
			state.name = action.payload
		},
		setEmail: (state, action: PayloadAction<string>) => {
			state.email = action.payload
		},
		setUser: (state, action: PayloadAction<User | null>) => {
			state.user = action.payload
		}
	}
})

export const { setName, setEmail, setUser } = authSlice.actions
export default authSlice.reducer
