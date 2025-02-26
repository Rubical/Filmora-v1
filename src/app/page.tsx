"use client"

import { Box, Container } from "@mui/material"

const Page = () => {
	// useSupabaseData()
	// const { push } = useRouter()
	//
	// const { isLogged } = useAuth()

	return (
		<Container sx={{ display: "grid", gridTemplateColumns: "1.2fr 6fr 1.2fr" }}>
			{/*<SideBarLeft />*/}
			{/*<Box*/}
			{/*	sx={{ position: "relative", display: "flex", flexDirection: "column", minHeight: "100vh" }}*/}
			{/*>*/}
			{/*	{loading ? (*/}
			{/*		<Loader />*/}
			{/*	) : (*/}
			{/*		<>*/}
			{/*			<NavBar />*/}
			{/*			<Box*/}
			{/*				sx={{*/}
			{/*					display: "flex",*/}
			{/*					flexWrap: "wrap",*/}
			{/*					justifyContent: "center",*/}
			{/*					rowGap: "20px",*/}
			{/*					columnGap: "20px",*/}
			{/*					padding: "0"*/}
			{/*				}}*/}
			{/*			>*/}
			{/*				{filmsList[0] ? <FrontFilmCard film={filmsList[0]} /> : null}*/}
			{/*				{filmsList.slice(1, filmsList.length - 1).map((film) => {*/}
			{/*					return (*/}
			{/*						<FilmCard*/}
			{/*							key={film.id}*/}
			{/*							film={film}*/}
			{/*						/>*/}
			{/*					)*/}
			{/*				})}*/}
			{/*				<PagePagination*/}
			{/*					currentPage={page}*/}
			{/*					totalPages={100}*/}
			{/*					changePage={handlePageChange}*/}
			{/*				/>*/}
			{/*			</Box>*/}
			{/*		</>*/}
			{/*	)}*/}
			{/*</Box>*/}
			{/*{isLogged ? <SideBarRight /> : <SignInBtn />}*/}
		</Container>
	)
}

export default Page
