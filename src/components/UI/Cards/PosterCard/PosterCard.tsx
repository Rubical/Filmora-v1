import { FC, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Download } from "@mui/icons-material";
import DownloadBtn from "../../Button/DownloadBtn";
import { downloadFileUrl } from "../../../../utils/downloadFileUrl";

interface IPoster {
  file_path: string;
}

interface IPosterCard {
  poster: IPoster;
}

const ActorCard: FC<IPosterCard> = ({ poster }) => {
  const { file_path } = poster;

  const download = () => {
    downloadFileUrl(`https://image.tmdb.org/t/p/original/${file_path}`);
  };

  return (
    <Card
      sx={{
        width: "145px",
        height: "218px",
        color: "white",
        position: "relative",
        backgroundColor: "transparent",
        boxShadow: "none",
      }}
    >
      {poster.file_path ? (
        <img
          style={{ width: "100%", height: "100%", backgroundColor: "white" }}
          src={`https://image.tmdb.org/t/p/w185_and_h278_face${file_path}`}
          alt="actor"
        />
      ) : null}
      <DownloadBtn download={download} />
    </Card>
  );
};

export default ActorCard;
