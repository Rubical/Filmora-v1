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
        width: { xs: "120px", md: "180px" },
        height: { xs: "260px", md: "360px" },
        color: "white",
        position: "relative",
        backgroundColor: "transparent",
        boxShadow: "none",
      }}
    >
      <img
        style={{
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
        <Typography
          sx={{ fontSize: { xs: "12px", md: "15px" }, fontWeight: "600" }}
        >
          {name ? name : "No info"}
        </Typography>
        <Typography
          sx={{ fontSize: { xs: "10px", md: "12px" }, color: "lightgray" }}
        >
          {character ? character : "No info"}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ActorCard;
