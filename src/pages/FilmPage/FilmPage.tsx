import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { fetchFilm } from "../../state/filmSlice";
import CardCover from "@mui/joy/CardCover";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import getPrettyDate from "../../utils/getPrettyDate";
import cl from "./FilmPage.module.css";
import StarIcon from "@mui/icons-material/Star";
import { getGenreByID } from "../../utils/getGenreById";

const FilmPage: FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFilm(id));
  }, []);

  const film = useAppSelector((state) => state.film.film);
  console.log(film);

  const {
    adult,
    budget,
    homepage,
    original_title,
    backdrop_path,
    release_date,
    overview,
    vote_average,
    vote_count,
    genre_ids,
    poster_path,
  } = film as any;

  return (
    <Container>
      <CardCover
        sx={{
          right: "0px",
          top: "0px",
          left: "auto",
          width: "100%",
          maxWidth: "1200px",
          height: "100vh",
          display: "flex",
          alignSelf: "flex-end",
          borderRadius: "0px",
          position: "absolute",
          zIndex: "0",
        }}
      >
        <img
          style={{
            borderRadius: "0px",
          }}
          src={
            backdrop_path
              ? `https://www.themoviedb.org/t/p/original/${backdrop_path}`
              : ""
          }
          alt="image"
        />
        <div
          className={`${cl.fromBlack} ${cl.bgGradientToRight}`}
          style={{ borderRadius: "0px", width: "80%" }}
        ></div>

        <div
          className={`${cl.fromBlack} ${cl.bgGradientToLeft}`}
          style={{
            borderRadius: "0px",
            width: "80%",
            right: "0px",
          }}
        ></div>
      </CardCover>
      <Box
        sx={{
          position: "relative",
          marginTop: "170px",
          marginLeft: "20px",
          color: "lightgray",
        }}
      >
        <img
          style={{
            width: "300px",
            height: "450px",
            float: "left",
            marginRight: "30px",
          }}
          src={
            poster_path
              ? `https://www.themoviedb.org/t/p/original/${poster_path}`
              : ""
          }
          alt="poster"
        />
        <Typography sx={{ fontSize: "35px", fontWeight: "600" }}>
          {original_title} {"("} {getPrettyDate(new Date(release_date))} {")"}
        </Typography>
        <Box sx={{ display: "flex", marginTop: "20px" }}>
          <StarIcon sx={{ color: "rgb(250, 250, 0, 0.8)" }}></StarIcon>
          <Box
            sx={{
              letterSpacing: "0.3px",
              marginLeft: "5px",
              paddingTop: "3px",
            }}
          >
            {vote_average?.toFixed(1)} {"Rating"}
          </Box>
        </Box>
        <Box>
          {" "}
          {getGenreByID(genre_ids)?.map((el) => {
            return (
              <Typography key={el} sx={{ color: "white", fontSize: "14px" }}>
                {el}
              </Typography>
            );
          })}
        </Box>
      </Box>
    </Container>
  );
};

export default FilmPage;
