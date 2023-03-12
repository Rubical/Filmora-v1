import Card from "@mui/joy/Card";
import { Button } from "@mui/material";
import Box from "@mui/joy/Box";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { IFilmsList } from "../../state/filmsSlice";
import { getGenreByID } from "../../utils/getGenreById";
import { FC } from "react";

interface IFilm {
  film: IFilmsList;
}

const MainFilmCard: FC<IFilm> = ({ film }) => {
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
        position: "relative",
        height: { lg: "600px", sm: "400px", xs: "250px" },
        width: "100%",
        marginTop: { xs: "100px", sm: "0" },
      }}
    >
      <CardCover>
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
      <CardContent
        sx={{
          justifyContent: { xs: "space-between", sm: "center" },
          ml: "15px",
          flexDirection: "column",
          marginTop: "0",
        }}
      >
        <Typography
          level="h2"
          sx={{
            fontSize: { md: "50px", xd: "30px", xs: "25px" },
            maxWidth: { xs: "200px", sm: "95%" },
          }}
          textColor="#fff"
          mb={1}
        >
          {original_title}
        </Typography>
        <Box sx={{ display: "flex", columnGap: "15px" }}>
          {getGenreByID(genre_ids)?.map((el) => {
            return (
              <Typography
                key={el}
                sx={{
                  justifyContent: "center",
                  color: "white",
                  backgroundColor: "rgba(53, 51, 56, 0.7)",
                  padding: "5px 10px",
                  borderRadius: "15px",
                  fontSize: { xs: "14px", sm: "16px" },
                }}
              >
                {el}
              </Typography>
            );
          })}
        </Box>
        <Button
          sx={{
            width: "160px",
            padding: "9px 0",
            backgroundColor: "rgb(172,0,0)",
            borderRadius: "25px",
            marginTop: "20px",
            textTransform: "none",
            fontWeight: "600",
            "&:hover": {
              backgroundColor: "rgb(152,0,0)",
            },
            marginBottom: { xs: "10px", sm: "0" },
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
