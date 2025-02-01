import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { movieDBApi } from "@/libs/movieDBApi"
import userReducer from "./user.slice"

export const makeStore = () => {
	const rootReducer = combineReducers({
		[movieDBApi.reducerPath]: movieDBApi.reducer,
		user: userReducer
	})
	return configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(movieDBApi.middleware)
	})
}

export type AppStore = ReturnType<typeof makeStore>
