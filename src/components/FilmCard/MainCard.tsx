import Card from "@mui/joy/Card";
import { Button } from "@mui/material";
import Box from "@mui/joy/Box";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { IFilmsList } from "../../state/filmsSlice";
import { getGenreByID } from "../../utils/getGenreById";

interface IFilm {
  film: IFilmsList;
}

const MainFilmCard = ({ film }: IFilm) => {
  const {
    id,
    adult,
    original_title,
    backdrop_path,
    release_date,
    overview,
    vote_average,
    vote_count,
    genre_ids,
  } = film;

  return (
    <Card
      sx={{
        height: { lg: "600px", sm: "350px", xs: "250px" },
        width: "100%",
        borderRadius: "0px",
      }}
    >
      <CardCover sx={{}}>
        <img
          style={{ objectFit: "fill", borderRadius: "0px" }}
          src={`https://www.themoviedb.org/t/p/original/${backdrop_path}`}
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
        <Typography
          level="h2"
          sx={{ fontSize: { md: "50px", xd: "30px" } }}
          textColor="#fff"
          mb={1}
        >
          {original_title}
        </Typography>
        <Box sx={{ display: "flex", columnGap: "15px" }}>
          {getGenreByID(genre_ids)?.map((el) => {
            return (
              <Typography
                sx={{
                  justifyContent: "center",
                  color: "white",
                  backgroundColor: "rgba(53, 51, 56, 0.7)",
                  padding: "5px 10px",
                  borderRadius: "15px",
                }}
              >
                {el}
              </Typography>
            );
          })}
        </Box>
        <Button
          sx={{
            width: "150px",
            backgroundColor: "rgb(172,0,0)",
            borderRadius: "25px",
            marginTop: "20px",
            textTransform: "none",
            fontWeight: "600",
            "&:hover": {
              backgroundColor: "rgb(152,0,0)",
            },
          }}
          variant="contained"
          endIcon={<PlayCircleIcon />}
        >
          Watch
        </Button>
      </CardContent>
    </Card>
  );
};

export default MainFilmCard;
