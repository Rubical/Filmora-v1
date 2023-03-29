import Card from "@mui/joy/Card";
import Box from "@mui/joy/Box";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Link from "@mui/material/Link";
import Typography from "@mui/joy/Typography";
import { IFilmsList } from "../../../../state/filmListSlice";
import getPrettyDate from "../../../../utils/getPrettyDate";
import { getGenreByID } from "../../../../utils/getGenreById";
import { FC } from "react";
import { NavLink } from "react-router-dom";
import cl from "./FilmCard.module.css";
import imgNotFound from "./../../../../images/imgNotFound.jpg";

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
    <NavLink
      style={{
        display: "flex",
        maxWidth: "380px",
        margin: "10px 10px",
        backgroundColor: "relevant",
      }}
      className={cl.card}
      to={`/Zenix_Film/view/film/${id}`}
    >
      <Card
        sx={{
          height: "100%",
          width: "100%",
          boxShadow: "none",
          borderRadius: "5px",
        }}
      >
        <CardCover sx={{ position: "absolute" }}>
          <img
            style={{ borderRadius: "5px", objectFit: "fill" }}
            src={
              backdrop_path
                ? `https://www.themoviedb.org/t/p/original/${backdrop_path}`
                : imgNotFound
            }
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
              backgroundColor: "rgba(18, 18, 18 ,0.5)",
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
    </NavLink>
  );
};

export default FilmCard;
