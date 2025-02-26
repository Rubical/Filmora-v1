import { FC } from "react"
import { getGenreByID } from "@/shared/config/utils/getGenreById"
import imgNotFound from "./filmcard-image-placeholder.jpg"
import StarIcon from "@mui/icons-material/Star"
import { Film } from "@/shared/types"
import Image from "next/image"
import styles from "./FilmCard.module.scss"

export const FilmCard = ({ film }: { film: Film }) => {
	const isLogged = true
	const {
		id,
		original_title,
		backdrop_path,
		release_date,
		vote_average,
		genre_ids,
		name,
		first_air_date,
		poster_path
	} = film

	const date = release_date ? release_date : first_air_date
	const filmName = original_title ? original_title : name
	const genres = getGenreByID(genre_ids)

	return (
		<div className={styles.card}>
			<Image
				style={{ borderRadius: "5px" }}
				src={
					backdrop_path
						? `https://www.themoviedb.org/t/p/original/${backdrop_path}`
						: poster_path
						? `https://www.themoviedb.org/t/p/original/${poster_path}`
						: imgNotFound
				}
				alt="image"
			/>
			<div className={styles.ratingBox}>
				<StarIcon className={styles.ratingIcon} />
				<p className={styles.ratingText}>{vote_average?.toFixed(1)}</p>
			</div>

			{isLogged && <div className={styles.favouriteButtonBox}></div>}
			<div className={styles.infoBox}>
				<p>{filmName || "No name"}</p>
				<div className={styles.dateBox}>
					<p className={styles.dateText}>{date ? new Date(date).getFullYear() : ""}</p>
					<div className={styles.genresBox}>
						{genres &&
							genres.map((el) => {
								return (
									<p
										key={el}
										className={styles.genreText}
									>
										{el}
									</p>
								)
							})}
					</div>
				</div>
			</div>
		</div>
	)
}
