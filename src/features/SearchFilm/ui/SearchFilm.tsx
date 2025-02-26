import React, { ChangeEvent, FC } from "react"
import Box from "@mui/material/Box"
import InputBase from "@mui/material/InputBase"
import IconButton from "@mui/material/IconButton"
import SearchIcon from "@mui/icons-material/Search"
import { useNavigate } from "react-router-dom"
import { useSearchedFilms } from "../../hooks/useSearchedFilms"
import { useActions } from "../../hooks/useActions"

const FilmSearchInput: FC = () => {
	const navigate = useNavigate()
	const { fetchSearchedFilms, changeSearchedFilmPage, changeSearchedQuery } = useActions()

	const { filmQuery } = useSearchedFilms()

	const getSearchedFilms = () => {
		if (!filmQuery.length) {
			return
		}

		fetchSearchedFilms()
		changeSearchedFilmPage(1)
		navigate(`/Zenix_Film/searched/${filmQuery}/page/1`)
	}

	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		if (event.key === "Enter") {
			getSearchedFilms()
		}
	}

	return (
		<Box
			sx={{
				width: "200px",
				height: { xs: "45px", sm: "50px" },
				border: "2px solid lightgray",
				marginRight: { xs: "0", md: "100px" },
				marginTop: { xs: "15px", lg: "0px" },
				display: "flex",
				justifyContent: "space-between"
			}}
		>
			<InputBase
				sx={{
					ml: 1,
					maxWidth: "70%",
					color: "lightgray",
					input: {
						"&::placeholder": {
							opacity: 1
						}
					}
				}}
				placeholder="Search"
				value={filmQuery}
				onKeyDown={handleKeyDown}
				onChange={(e: ChangeEvent) => {
					let currValue = (e.target as HTMLInputElement).value
					changeSearchedQuery(currValue)
				}}
			/>
			<IconButton
				onClick={getSearchedFilms}
				type="button"
				sx={{ p: "10px", color: "lightgray" }}
				aria-label="search"
			>
				<SearchIcon />
			</IconButton>
		</Box>
	)
}

export default FilmSearchInput
