import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const SideBarFilmCard = () => {
  return (
    <>
      <Typography
        sx={{
          fontSize: "18px",
          color: "white",
          fontWeight: "600",
          margin: "20px 0 10px 0",
        }}
      >
        Continue watching
      </Typography>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="/static/images/cards/live-from-space.jpg"
        alt="Live from space album cover"
      />
      <CardContent sx={{ flex: "1 0 auto" }}>
        <Typography component="div" variant="h5">
          Live From Space
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div">
          Mac Miller
        </Typography>
      </CardContent>
    </>
  );
};

export default SideBarFilmCard;
