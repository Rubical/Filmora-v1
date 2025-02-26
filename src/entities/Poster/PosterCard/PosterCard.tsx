import React, { FC } from "react"
import { IPoster } from "./../../types/posters.types"
import { downloadFileUrl } from "@/shared/config/utils/downloadFileUrl"
import Card from "@mui/material/Card"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import FileDownloadIcon from "@mui/icons-material/FileDownload"

interface IPosterCard {
	poster: IPoster
}

const ActorCard: FC<IPosterCard> = ({ poster }) => {
	const { file_path } = poster

	const download = () => {
		downloadFileUrl(`https://image.tmdb.org/t/p/original/${file_path}`)
	}

	return (
		<Card
			sx={{
				width: { xs: "100px", sm: "140px" },
				height: { xs: "150px", sm: "210px" },
				color: "white",
				position: "relative",
				backgroundColor: "transparent",
				boxShadow: "none"
			}}
		>
			{poster.file_path ? (
				<img
					style={{
						width: "100%",
						height: "100%",
						backgroundColor: "rgba(30,30,30,0.67)"
					}}
					src={`https://image.tmdb.org/t/p/w185_and_h278_face${file_path}`}
					alt="actor"
				/>
			) : null}
			<Button
				sx={{
					width: "100%",
					display: "flex",
					justifyContent: "space-between",
					padding: "10px",
					position: "absolute",
					bottom: "0px",
					backgroundColor: "#dadada",
					textTransform: "none",

					"&:hover": {
						backgroundColor: "#c1c1c1"
					}
				}}
				onClick={download}
			>
				<Typography
					sx={{
						color: "#313131",
						fontWeight: "600",
						fontSize: { xs: "12px", sm: "14px" },
						paddingTop: "1px"
					}}
				>
					Download
				</Typography>
				<FileDownloadIcon
					sx={{ color: "#313131", width: { xs: "18px", md: "24px" } }}
				></FileDownloadIcon>
			</Button>
		</Card>
	)
}

export default ActorCard
