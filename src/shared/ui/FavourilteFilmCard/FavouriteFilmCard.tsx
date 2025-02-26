import { FC } from "react"
import { useNavigate } from "react-router-dom"
import { useActions } from "../../lib/useActions"
import { IFilm } from "../../types/Film.types"
import imgNotFound from "./favfilmcard-image-placeholder.jpg"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import CloseIcon from "@mui/icons-material/Close"
import Typography from "@mui/material/Typography"
import { supabase } from "../../config/auth"

interface IFavouriteFilmCard {
	film: IFilm
	filmType: string
}

const CardContentNoPadding = styled(CardContent)(`
  padding: 0;
  &:last-child {
    padding-bottom: 0;
  }
`)

const FavouriteFilmCard: FC<IFavouriteFilmCard> = ({ film, filmType }) => {
	const navigate = useNavigate()

	const { hideFavFilmsCards, deleteFavouriteFilm } = useActions()

	const deleteFavouriteFilmCard = async () => {
		deleteFavouriteFilm(film.id)
		await supabase.from("FavFilm").delete().eq("filmId", film.id)
	}

	return (
		<Box
			sx={{
				cursor: "pointer",
				marginBottom: "20px"
			}}
			onClick={() => {
				hideFavFilmsCards()
				navigate(`/Zenix_Film/view/${filmType}/${film.id}`)
			}}
		>
			<Box sx={{ position: "relative" }}>
				<CardMedia
					component="img"
					sx={{
						width: "150px",
						height: "85px",
						backgroundColor: "rgba(30,30,30,0.67)"
					}}
					image={
						film.backdrop_path
							? `https://www.themoviedb.org/t/p/original/${film.backdrop_path}`
							: imgNotFound
					}
					alt="img"
				></CardMedia>
				<CloseIcon
					onClick={(e) => {
						e.stopPropagation()
						deleteFavouriteFilmCard()
					}}
					sx={{
						position: "absolute",
						top: "2px",
						right: "2px",
						color: "white",
						transform: "scale(0.8)",
						transition: "scale 0.1s ease-in",
						"&:hover": {
							transform: "scale(1)",
							cursor: "pointer"
						}
					}}
				/>
			</Box>
			<CardContentNoPadding sx={{ flex: "1 0 auto", padding: "7px 0", marginBottom: "15px" }}>
				<Typography sx={{ width: "150px", textAlign: "center" }}>
					{film.original_title || film.name || "No name"}
				</Typography>
			</CardContentNoPadding>
		</Box>
	)
}

export default FavouriteFilmCard
