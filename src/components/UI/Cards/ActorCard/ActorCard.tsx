import { FC } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import noImg from "./no-img.jpg";
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
        maxWidth: "180px",
        height: "358px",
        color: "white",
        position: "relative",
        backgroundColor: "transparent",
        boxShadow: "none",
      }}
    >
      <img
        style={{
          width: "180px",
          height: "270px",
          objectFit: "cover",
          backgroundColor: "rgba(30,30,30,0.67)",
        }}
        src={
          actor.profile_path
            ? `https://image.tmdb.org/t/p/w185_and_h278_face${actor.profile_path}`
            : noImg
        }
        alt="actor"
      />

      <CardContent>
        <Typography sx={{ fontSize: "15px", fontWeight: "600" }}>
          {name ? name : "No info"}
        </Typography>
        <Typography sx={{ fontSize: "12px", color: "lightgray" }}>
          {character ? character : "No info"}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ActorCard;
