import { store } from "@/shared/store/store"
import { Provider } from "react-redux"

import "./globals.css"
import { ThemeProvider } from "@mui/material/styles"
import { theme } from "@/shared/themes/themes"
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter"

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<AppRouterCacheProvider>
					<ThemeProvider theme={theme}>{children}</ThemeProvider>+{" "}
				</AppRouterCacheProvider>
			</body>
		</html>
	)
}
