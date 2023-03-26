import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { fetchFilm } from "../../state/filmSlice";
import CardCover from "@mui/joy/CardCover";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import cl from "./FilmPage.module.css";
import Loader from "../../components/UI/Loader/Loader";
import { fetchActors } from "../../state/actorsSlice";
import ActorCard from "../../components/UI/Cards/ActorCard/ActorCard";
import FilmInfo from "../../components/FilmInfo/FilmInfo";
import {IFilmsList} from "../../state/filmListSlice";
import Typography from "@mui/material/Typography";



const FilmPage: FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  console.log(id)

  useEffect(() => {
    dispatch(fetchFilm(id));
    dispatch(fetchActors(id));
  }, []);

  const film: any = useAppSelector((state) => state.film.film);
  const filmIsLoading = useAppSelector((state) => state.film.loading);

  const { backdrop_path } = film as any;

  const actors = useAppSelector((state) => state.actors.actors);

  return filmIsLoading ? (
    <Loader />
  ) : (
    <Container>
      <CardCover
        sx={{
          right: "0px",
          top: "0px",
          left: "auto",
          width: "100%",
          height: "100vh",
          display: "flex",
          alignSelf: "flex-end",
          borderRadius: "0px",
          position: "fixed",
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
          style={{ borderRadius: "0px", width: "100%" }}
        ></div>

        <div
          className={`${cl.fromBlack} ${cl.bgGradientToLeft}`}
          style={{
            borderRadius: "0px",
            width: "100%",
            right: "0px",
          }}
        ></div>
      </CardCover>

      <FilmInfo film={film} />

        <Typography sx={{color: 'white', position: 'relative', fontSize: '34px', marginBottom: '40px'}}>Top billed casts</Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", columnGap: '110px', justifyContent: 'center' }}>
        {actors.slice(0,8).map((actor: any) => {
          return actor.known_for_department === "Acting" ? (
            <ActorCard key={actor.id} actor={actor} />
          ) : null;
        })}
      </Box>
    </Container>
  );
};

export default FilmPage;
