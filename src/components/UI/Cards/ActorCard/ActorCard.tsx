import { FC } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

interface IActor {
  id: number;
  known_for_department: string;
  name: string;
  character: string;
  profile_path: string;
}

interface IActorCard {
  actor: IActor;
}

const ActorCard: FC<IActorCard> = ({ actor }) => {
  const { name, character, profile_path } = actor;
  return (
    <Card
      sx={{
        maxWidth: "185px",
        color: "white",
        position: "relative",
        backgroundColor: "transparent",
      }}
    >
      {actor.profile_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w185_and_h278_face${actor.profile_path}`}
          alt="actor"
        />
      ) : null}
      <CardContent>
        <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
          {name}
        </Typography>
        <Typography sx={{ fontSize: "12px", color: "lightgray" }}>
          {character}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ActorCard;
