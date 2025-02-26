import { FC, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useActions } from "@/shared/hooks/useActions"
import { useAuth } from "@/shared/hooks/useAuth"
import { useActors } from "@/shared/hooks/useActors"
import { useFilm } from "@/shared/hooks/useFilm"
import { useVideo } from "@/shared/hooks/useVideo"
import { usePosters } from "@/shared/hooks/usePosters"
import { useSimilarMovies } from "@/shared/hooks/useSimilarMovies"
import { useSupabaseData } from "@/shared/hooks/useSupabaseData"
import Loader from "../../components/UI/Loader/Loader"
import ActorCard from "../../components/ActorCard/ActorCard"
import FilmInfo from "@/widgets/FilmInfo/FilmInfo"
import YoutubeFrame from "@/features/YoutubeFrame/YoutubeFrame"
import PosterCard from "../../components/PosterCard/PosterCard"
import FilmCard from "../../components/FilmCard/FilmCard"
import SideBarLeft from "../../components/UI/SideBar/SideBarLeft/SideBarLeft"
import SideBarRight from "../../components/UI/SideBar/SideBarRight/SideBarRight"
import SignInBtn from "../../components/UI/Button/SignInBtn"
import NavBar from "../../components/UI/NavBar/NavBar"
import cl from "./FilmPage.module.css"
import backgroundImg from "./background-img-placeholder.jpg"
import { firstLetterToUpperCase } from "@/shared/utils/firstLetterToUpperCase"
import { toHoursAndMinutes } from "@/shared/utils/convertToHoursAndMinutes"
import CardCover from "@mui/joy/CardCover"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { Skeleton } from "@mui/material"
import Button from "@mui/material/Button"
import LoginIcon from "@mui/icons-material/Login"

const FilmPage: FC = () => {
	const { isLogined } = useAuth()
	const { id } = useParams()
	const { type } = useParams()

	const { fetchFilm, fetchActors, fetchVideo, fetchPosters, fetchSimilarMovies } = useActions()

	const actors = useActors()
	const { film, loading } = useFilm()
	const { filmVideo, videoIsLoading } = useVideo()
	const posters = usePosters()
	const similarMovies = useSimilarMovies()

	const {
		backdrop_path,
		release_date,
		status,
		budget,
		revenue,
		runtime,
		first_air_date,
		last_episode_to_air,
		next_episode_to_air
	} = film

	const date = type === " movie" ? release_date : first_air_date

	useSupabaseData()

	useEffect(() => {
		window.scrollTo(0, 0)
		fetchFilm({ id, filmType: type })
		fetchActors({ id, filmType: type })
		fetchVideo({ id, filmType: type })
		fetchPosters({ id, filmType: type })
		fetchSimilarMovies({ id, filmType: type })
	}, [id])

	return (
		<div className={cl.grid}>
			<SideBarLeft />
			<div className={cl.main}>
				{loading ? (
					<Loader />
				) : (
					<>
						<NavBar />
						<Container>
							<CardCover
								sx={{
									right: "0px",
									top: "0px",
									left: "auto",
									width: "100%",
									height: "100vh",
									display: "flex",
									alignSelf: "flex-end",
									borderRadius: "0px",
									position: "fixed",
									zIndex: "1"
								}}
							>
								<Image
									src={
										backdrop_path
											? `https://www.themoviedb.org/t/p/original/${backdrop_path}`
											: backgroundImg
									}
									alt="image"
								/>
								<div
									className={`${cl.fromBlack} ${cl.bgGradientToRight}`}
									style={{ borderRadius: "0px", width: "100%" }}
								></div>

								<div
									className={`${cl.fromBlack} ${cl.bgGradientToLeft}`}
									style={{
										borderRadius: "0px",
										width: "100%",
										right: "0px"
									}}
								></div>
							</CardCover>

							<FilmInfo film={film} />
							<Box
								sx={{
									display: "flex",
									flexWrap: { xs: "wrap", md: "no-wrap" },
									justifyContent: "space-between",
									marginBottom: { xs: "100px", md: "150px" }
								}}
							>
								{videoIsLoading ? (
									<Skeleton
										sx={{
											width: {
												xs: "100%",
												sm: "440px",
												md: "600px",
												lg: "600px"
											},
											height: {
												xs: "auto",
												sm: "230px",
												md: "330px",
												lg: "330px"
											}
										}}
									/>
								) : (
									<YoutubeFrame embedId={filmVideo?.find((el) => el.type === "Trailer")?.key} />
								)}
								<Box
									sx={{
										position: "relative",
										zIndex: "2",
										display: { xs: "flex", lg: "block" },
										columnGap: "30px",
										flexWrap: "wrap"
									}}
								>
									<Box
										sx={{
											position: "relative",
											color: "white",
											marginBottom: "25px"
										}}
									>
										<Typography
											sx={{
												fontSize: "14px",
												fontWeight: "600",
												marginBottom: "5px"
											}}
										>
											Release Date
										</Typography>
										<Typography sx={{ fontSize: "14px", color: "lightgray" }}>
											{date ? date : "No info"}
										</Typography>
									</Box>

									<Box
										sx={{
											position: "relative",
											color: "white",
											marginBottom: "25px"
										}}
									>
										<Typography
											sx={{
												fontSize: "14px",
												fontWeight: "600",
												marginBottom: "5px"
											}}
										>
											Status
										</Typography>
										<Typography sx={{ fontSize: "14px", color: "lightgray" }}>
											{status ? status : "No info"}
										</Typography>
									</Box>
									<Box
										sx={{
											position: "relative",
											color: "white",
											marginBottom: "25px"
										}}
									>
										<Typography
											sx={{
												fontSize: "14px",
												fontWeight: "600",
												marginBottom: "5px"
											}}
										>
											{type === "movie" ? "Budget" : "Last episode"}
										</Typography>
										{type === "movie" ? (
											<Typography sx={{ fontSize: "14px", color: "lightgray" }}>
												{budget
													? budget.toLocaleString("en-US", {
															style: "currency",
															currency: "USD"
													  })
													: "No info"}
											</Typography>
										) : (
											<>
												<Typography sx={{ fontSize: "14px", color: "lightgray" }}>
													{last_episode_to_air?.air_date}
												</Typography>
												<Typography sx={{ fontSize: "14px", color: "lightgray" }}>
													{last_episode_to_air?.episode_number}
												</Typography>
											</>
										)}
									</Box>
									<Box
										sx={{
											position: "relative",
											color: "white",
											marginBottom: "25px"
										}}
									>
										<Typography
											sx={{
												fontSize: "14px",
												fontWeight: "600",
												marginBottom: "5px"
											}}
										>
											{type === "movie" ? "Revenue" : "Next episode"}
										</Typography>
										{type === "movie" ? (
											<Typography sx={{ fontSize: "14px", color: "lightgray" }}>
												{revenue
													? revenue.toLocaleString("en-US", {
															style: "currency",
															currency: "USD"
													  })
													: "No info"}
											</Typography>
										) : (
											<>
												<Typography sx={{ fontSize: "14px", color: "lightgray" }}>
													{next_episode_to_air?.air_date ? next_episode_to_air?.air_date : "Ended"}
												</Typography>
												<Typography sx={{ fontSize: "14px", color: "lightgray" }}>
													{next_episode_to_air?.episode_number
														? `${next_episode_to_air?.episode_number} episode`
														: ""}
												</Typography>
											</>
										)}
									</Box>
									{type === "movie" ? (
										<Box
											sx={{
												position: "relative",
												color: "white",
												marginBottom: "25px"
											}}
										>
											<Typography
												sx={{
													fontSize: "14px",
													fontWeight: "600",
													marginBottom: "5px"
												}}
											>
												Runtime
											</Typography>
											<Typography sx={{ fontSize: "14px", color: "lightgray" }}>
												{runtime ? toHoursAndMinutes(runtime) : "No info"}
											</Typography>
										</Box>
									) : (
										""
									)}
								</Box>
							</Box>
							{actors?.length ? (
								<Box sx={{ position: "relative", zIndex: "2" }}>
									<Typography
										sx={{
											color: "white",
											position: "relative",
											fontSize: { xs: "24px", md: "34px" },
											marginBottom: "40px",
											display: { xs: "flex", md: "block" },
											justifyContent: { xs: "center", md: "flex-start" }
										}}
									>
										Top billed casts
									</Typography>
									<Box
										sx={{
											display: "flex",
											flexWrap: "wrap",
											justifyContent: { xs: "center", md: "flex-start" },
											columnGap: "30px",
											rowGap: "30px",
											marginBottom: { xs: "100px", md: "150px" }
										}}
									>
										{actors.slice(0, 10).map((actor: any) => {
											return actor.known_for_department === "Acting" ? (
												<ActorCard
													key={actor.id}
													actor={actor}
												/>
											) : null
										})}
									</Box>
								</Box>
							) : (
								""
							)}
							{posters?.length ? (
								<Box sx={{ position: "relative", zIndex: "2" }}>
									<Typography
										sx={{
											color: "white",
											position: "relative",
											fontSize: { xs: "24px", md: "34px" },
											marginBottom: "40px",
											display: { xs: "flex", md: "block" },
											justifyContent: { xs: "center", md: "flex-start" }
										}}
									>
										{`${firstLetterToUpperCase(type)} posters`}
									</Typography>
									<Box
										sx={{
											display: "flex",
											flexWrap: "wrap",
											justifyContent: { xs: "center", md: "flex-start" },
											columnGap: "30px",
											rowGap: "30px",
											marginBottom: { xs: "100px", md: "150px" }
										}}
									>
										{posters.slice(0, 18).map((poster: any) => {
											return (
												<PosterCard
													key={poster.file_path}
													poster={poster}
												/>
											)
										})}
									</Box>
								</Box>
							) : (
								""
							)}
							{similarMovies?.length ? (
								<Box sx={{ position: "relative", zIndex: "2" }}>
									<Typography
										sx={{
											color: "white",
											position: "relative",
											fontSize: { xs: "24px", md: "34px" },
											marginBottom: { xs: "20px", md: "40px" },
											display: { xs: "flex", md: "block" },
											justifyContent: "center"
										}}
									>
										{`Similar ${type === "movie" ? "movies" : "tv series"}`}
									</Typography>
									<Box
										sx={{
											display: "flex",
											flexWrap: "wrap",
											rowGap: "20px",
											columnGap: "20px",
											padding: "0"
										}}
									>
										{similarMovies.slice(0, 14).map((film: any) => {
											return (
												<FilmCard
													key={film.id}
													film={film}
												/>
											)
										})}
									</Box>
								</Box>
							) : (
								""
							)}
						</Container>{" "}
					</>
				)}
			</div>
			{isLogined ? (
				<SideBarRight />
			) : (
				<Box
					sx={{
						flexGrow: 0,
						color: "lightgray",
						justifySelf: "flex-end",
						padding: { xs: "17px 5px 0 0", lg: "24px 40px 0 0" },
						position: "relative",
						zIndex: "100"
					}}
				>
					<Button
						onClick={() => {
							navigate("/Zenix_Film/login")
						}}
						disableRipple={true}
						sx={{
							fontSize: "14px",
							fontWeight: "600",
							color: "lightgray",
							transition: "color 0.1s ease-in",
							"&:hover": {
								color: "white"
							}
						}}
					>
						<Typography
							sx={{
								display: { xs: "none", sm: "flex" },
								fontWeight: "600",
								fontSize: "14px"
							}}
						>
							SIGN IN
						</Typography>
						<LoginIcon sx={{ display: { xs: "flex", sm: "none" } }}></LoginIcon>
					</Button>
				</Box>
			)}
		</div>
	)
}

export default FilmPage
