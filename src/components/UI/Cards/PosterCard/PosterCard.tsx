import { FC } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

interface IPoster {
  file_path: string;
}

interface IPosterCard {
  poster: IPoster;
}

const ActorCard: FC<IPosterCard> = ({ poster }) => {
  const { file_path } = poster;
  return (
    <Card
      sx={{
        maxWidth: "185px",
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
      <CardContent></CardContent>
    </Card>
  );
};

export default ActorCard;
