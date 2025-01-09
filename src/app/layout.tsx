"use client"

import { store } from "@/store/store"
import { Provider } from "react-redux"

import "./globals.css"
import { useEffect } from "react"
import { useFilmList } from "@/hooks/useFilmList"
import { useFilmFilter } from "@/hooks/useFilmFilter"
import { useActions } from "@/hooks/useActions"
import { ThemeProvider } from "@mui/material/styles"
import { theme } from "@/themes/themes"

export default function RootLayout({ children }: { children: React.ReactNode }) {
	const { page } = useFilmList()
	const { type, category } = useFilmFilter()
	const { fetchFilms } = useActions()

	useEffect(() => {
		window.scrollTo(0, 0)
		fetchFilms()
	}, [page, type, category])

	return (
		<html lang="en">
			<body>
				<ThemeProvider theme={theme}>
					<Provider store={store}>{children} </Provider>
				</ThemeProvider>
			</body>
		</html>
	)
}
