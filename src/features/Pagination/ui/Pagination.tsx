import React, { FC } from "react"
import Pagination from "@mui/material/Pagination"
import Stack from "@mui/material/Stack"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"
import { theme } from "@/shared/ui/themes"

interface PaginationProps {
	totalPages: number
	setPage: React.Dispatch<React.SetStateAction<number>>
	currentPage: number
}

export const CustomPagination = ({ totalPages, setPage, currentPage }: PaginationProps) => {
	const isScreenBig = useMediaQuery("(min-width:600px)")
	return (
		<ThemeProvider theme={theme}>
			<Stack
				spacing={2}
				sx={{
					position: "relative",
					marginTop: "50px"
				}}
			>
				<Pagination
					boundaryCount={isScreenBig ? 2 : 0}
					hideNextButton={!isScreenBig}
					hidePrevButton={!isScreenBig}
					sx={{
						width: "100%",
						color: "white",
						button: {
							color: "#ffffff"
						},
						div: {
							color: "#ffffff"
						}
					}}
					onChange={(e, page) => {
						setPage(page)
					}}
					count={totalPages}
					shape="rounded"
					page={currentPage}
					color={"primary"}
				/>
			</Stack>
		</ThemeProvider>
	)
}
