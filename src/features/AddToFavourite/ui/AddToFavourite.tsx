import React from "react"
import FavoriteIcon from "@mui/icons-material/Favorite"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import { Film } from "@/shared/types"
import styles from "./AddToFavourite.module.scss"

export const AddToFavourite = ({ film }: { film: Film }) => {
	const isFav = false
	return (
		<button className={styles.button}>
			{isFav ? (
				<FavoriteIcon
					sx={{
						color: "rgba(164,23,23,0.84)",
						transition: "color 0.1s ease-in",
						"&:hover": { color: "rgba(129,50,50,0.84)" }
					}}
				/>
			) : (
				<FavoriteBorderIcon
					sx={{
						color: "rgba(129,50,50,0.84)",
						transition: "color 0.1s ease-in",
						"&:hover": { color: "rgba(164,23,23,0.84)" }
					}}
				/>
			)}
		</button>
	)
}
