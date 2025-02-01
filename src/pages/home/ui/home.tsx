import React from "react"
import styles from "@/pages/home/ui/MainPage.module.css"
import NavBar from "@/components/UI/NavBar/NavBar"
import FrontFilmCard from "@/widgets/main-banner/FrontFilmCard/FrontFilmCard"
import FilmCard from "@/entities/FilmCard/FilmCard"
import PagePagination from "@/components/UI/Pagination/Pagination"

function HomePage() {
	return (
		<div className={styles.main}>
			<div className={styles.container}>
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
			</div>
		</div>
	)
}

export default HomePage
