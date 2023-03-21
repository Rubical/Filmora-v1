import Card from "@mui/joy/Card";
import Box from "@mui/joy/Box";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { IFilmsList } from "../../state/filmsSlice";
import getPrettyDate from "../../utils/getPrettyDate";
import { getGenreByID } from "../../utils/getGenreById";
import { FC } from "react";

interface IFilm {
  film: IFilmsList;
}

const FilmCard: FC<IFilm> = ({ film }) => {
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
        height: { xs: "220px", sm: "180px", md: "250px", lg: "220px" },
        width: { xs: "90%", sm: "40%", md: "40%", lg: "calc(33.3% - 40px)" },
        margin: "10px 10px",
      }}
    >
      <CardCover>
        <img
          style={{ objectFit: "fill" }}
          src={`https://www.themoviedb.org/t/p/original/${backdrop_path}`}
          alt="image"
        />
      </CardCover>
      <CardContent
        sx={{
          justifyContent: "flex-end",
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(18, 18, 18 ,0.4)",
            padding: "13px 10px",
            borderRadius: "10px",
          }}
        >
          <Typography
            level="h2"
            fontSize="lg"
            textColor="#fff"
            marginBottom="5px"
          >
            {original_title}
          </Typography>
          <Box sx={{ display: "flex", columnGap: "10px" }}>
            <Typography
              textColor="white"
              sx={{ fontSize: "12px", marginRight: "10px", marginTop: "2px" }}
            >
              {getPrettyDate(new Date(release_date))}
            </Typography>
            <Box sx={{ display: "flex", columnGap: "10px" }}>
              {getGenreByID(genre_ids)?.map((el) => {
                return (
                  <Typography
                    key={el}
                    sx={{ color: "white", fontSize: "14px" }}
                  >
                    {el}
                  </Typography>
                );
              })}
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default FilmCard;
