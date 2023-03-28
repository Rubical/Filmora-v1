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
  const [isDownloading, setIfDownloading] = useState(false);

  const download = () => {
    downloadFileUrl(
      `https://image.tmdb.org/t/p/w185_and_h278_face${file_path}`
    );
  };

  const { file_path } = poster;
  return (
    <Card
      sx={{
        maxWidth: "150px",
        color: "white",
        position: "relative",
        backgroundColor: "transparent",
        boxShadow: "none",
      }}
    >
      {poster.file_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w185_and_h278_face${file_path}`}
          alt="actor"
        />
      ) : null}
      <DownloadBtn download={download} />
    </Card>
  );
};

export default ActorCard;
