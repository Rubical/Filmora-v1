"use client"

import { useEffect } from "react"
import { useRouter } from "next/router"
import { useFilmList } from "@/hooks/useFilmList"
import { useFilmFilter } from "@/hooks/useFilmFilter"
import { useActions } from "@/hooks/useActions"
import { useAuth } from "@/hooks/useAuth"
import { useSupabaseData } from "@/hooks/useSupabaseData"
import { Box, Container } from "@mui/material"
import FilmCard from "../components/FilmCard/FilmCard"
import FrontFilmCard from "../components/FrontFilmCard/FrontFilmCard"
import Loader from "../components/UI/Loader/Loader"
import PagePagination from "../components/UI/Pagination/Pagination"
import SideBarLeft from "../components/UI/SideBar/SideBarLeft/SideBarLeft"
import SideBarRight from "../components/UI/SideBar/SideBarRight/SideBarRight"
import SignInBtn from "../components/UI/Button/SignInBtn"
import NavBar from "../components/UI/NavBar/NavBar"

const Page = () => {
	useSupabaseData()
	const { push } = useRouter()

	const { isLogged } = useAuth()
	const { page, loading, filmsList } = useFilmList()
	const { type, category } = useFilmFilter()
	const { changeFilmListPage } = useActions()

	const handlePageChange = (page: number) => {
		changeFilmListPage(page)
		push(`/Zenix_Film/${type}/${category}/page/${page}`)
	}

	return (
		<Container sx={{ display: "grid", gridTemplateColumns: "1.2fr 6fr 1.2fr" }}>
			<SideBarLeft />
			<Box
				sx={{ position: "relative", display: "flex", flexDirection: "column", minHeight: "100vh" }}
			>
				{loading ? (
					<Loader />
				) : (
					<>
						<NavBar />
						<Box
							sx={{
								display: "flex",
								flexWrap: "wrap",
								justifyContent: "center",
								rowGap: "20px",
								columnGap: "20px",
								padding: "0"
							}}
						>
							{filmsList[0] ? <FrontFilmCard film={filmsList[0]} /> : null}
							{filmsList.slice(1, filmsList.length - 1).map((film) => {
								return (
									<FilmCard
										key={film.id}
										film={film}
									/>
								)
							})}
							<PagePagination
								currentPage={page}
								totalPages={100}
								changePage={handlePageChange}
							/>
						</Box>
					</>
				)}
			</Box>
			{isLogged ? <SideBarRight /> : <SignInBtn />}
		</Container>
	)
}

export default Page
