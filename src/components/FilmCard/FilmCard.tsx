import Card from "@mui/joy/Card";
import Box from "@mui/joy/Box";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { IFilmsList } from "../../state/filmsSlice";
import getPrettyDate from "../../utils/getPrettyDate";
import { getGenreByID } from "../../utils/getGenreById";

interface IFilm {
  film: IFilmsList;
}

const FilmCard = ({ film }: IFilm) => {
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
        minHeight: "250px",
        width: { md: "calc(33.3% - 13px)", xs: "100%" },
      }}
    >
      <CardCover sx={{}}>
        <img
          style={{ objectFit: "fill" }}
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
          justifyContent: "flex-end",
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(158, 158, 158 ,0.3)",
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
              textColor="neutral.300"
              sx={{ fontSize: "12px", marginRight: "10px" }}
            >
              {getPrettyDate(new Date(release_date))}
            </Typography>
            <Box sx={{ display: "flex", columnGap: "10px" }}>
              {getGenreByID(genre_ids)?.map((el) => {
                return (
                  <Typography sx={{ color: "lightGray", fontSize: "14px" }}>
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
