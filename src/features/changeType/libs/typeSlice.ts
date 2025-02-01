import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export const typeSlice = createSlice({
	name: "type",
	initialState: "movie",
	reducers: {
		changeType: (_, action: PayloadAction<"movie" | "tv">) => {
			return action.payload
		}
	}
})

export const { changeType } = typeSlice.actions

export default typeSlice.reducer
