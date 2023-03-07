import Card from "@mui/joy/Card";
import Box from "@mui/joy/Box";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import { IFilmsList } from "../../state/filmsSlice";

interface IFilm {
  film: IFilmsList;
}

const MainFilmCard = ({ film }: IFilm) => {
  console.log(film);
  return (
    <Card
      sx={{
        minHeight: "550px",
        width: 1030,
        borderRadius: "0px",
      }}
    >
      <CardCover sx={{}}>
        <img
          style={{ objectFit: "fill", borderRadius: "0px" }}
          src={`https://www.themoviedb.org/t/p/original/${film.backdrop_path}`}
          alt="image"
        />
      </CardCover>
      <CardCover
        sx={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
        }}
      />
      <CardContent sx={{ justifyContent: "center" }}>
        <Typography level="h2" fontSize="50px" textColor="#fff" mb={1}>
          {film.original_title}
        </Typography>
        <Box
          sx={{
            width: "100px",
            justifyContent: "center",
            color: "white",
            backgroundColor: "rgba(83, 81, 86, 0.8)",
          }}
        >
          Genres
        </Box>
      </CardContent>
    </Card>
  );
};

export default MainFilmCard;
