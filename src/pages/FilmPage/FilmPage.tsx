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
import Typography from "@mui/material/Typography";
import YoutubeFrame from "../../components/YoutubeFrame/YoutubeFrame";
import { fetchVideo } from "../../state/filmVideoSlice";
import { toHoursAndMinutes } from "../../utils/convertToHoursAndMinutes";
import { fetchPosters } from "../../state/postersSlice";
import PosterCard from "../../components/UI/Cards/PosterCard/PosterCard";
import { fetchSimilarMovies } from "../../state/similarMoviesSlice";
import FilmCard from "../../components/UI/Cards/FilmCard/FilmCard";
import backgroundImg from "./background.jpg";

interface IFilm {
  backdrop_path: string;
  release_date: string;
  status: string;
  budget: number;
  revenue: number;
  runtime: number;
}

const FilmPage: FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const film: any = useAppSelector((state) => state.film.film);
  const filmIsLoading = useAppSelector((state) => state.film.loading);

  const { backdrop_path, release_date, status, budget, revenue, runtime } =
    film as IFilm;

  const actors = useAppSelector((state) => state.actors.actors);

  const video: any = useAppSelector((state) => state.filmVideo.filmVideo);
  const posters = useAppSelector((state) => state.posters.posters);
  const similarMovies = useAppSelector(
    (state) => state.similarMovies.similarMovies
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchFilm(id));
    dispatch(fetchActors(id));
    dispatch(fetchVideo(id));
    dispatch(fetchPosters(id));
    dispatch(fetchSimilarMovies(id));
  }, [id]);

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
              : backgroundImg
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
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <YoutubeFrame
          embedId={
            video.find((el: any) => el.type === "Trailer")?.key ||
            video.find((el: any) => el.key)
          }
        />
        <Box sx={{ marginTop: "40px" }}>
          <Box
            sx={{ position: "relative", color: "white", marginBottom: "25px" }}
          >
            <Typography
              sx={{ fontSize: "14px", fontWeight: "600", marginBottom: "5px" }}
            >
              Release Date
            </Typography>
            <Typography sx={{ fontSize: "14px", color: "lightgray" }}>
              {release_date ? release_date : "No info"}
            </Typography>
          </Box>
          <Box
            sx={{ position: "relative", color: "white", marginBottom: "25px" }}
          >
            <Typography
              sx={{ fontSize: "14px", fontWeight: "600", marginBottom: "5px" }}
            >
              Status
            </Typography>
            <Typography sx={{ fontSize: "14px", color: "lightgray" }}>
              {status ? status : "No info"}
            </Typography>
          </Box>
          <Box
            sx={{ position: "relative", color: "white", marginBottom: "25px" }}
          >
            <Typography
              sx={{ fontSize: "14px", fontWeight: "600", marginBottom: "5px" }}
            >
              Budget
            </Typography>
            <Typography sx={{ fontSize: "14px", color: "lightgray" }}>
              {budget
                ? budget.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })
                : "No info"}
            </Typography>
          </Box>
          <Box
            sx={{ position: "relative", color: "white", marginBottom: "25px" }}
          >
            <Typography
              sx={{ fontSize: "14px", fontWeight: "600", marginBottom: "5px" }}
            >
              Revenue
            </Typography>
            <Typography sx={{ fontSize: "14px", color: "lightgray" }}>
              {revenue
                ? revenue.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })
                : "No info"}
            </Typography>
          </Box>
          <Box
            sx={{ position: "relative", color: "white", marginBottom: "25px" }}
          >
            <Typography
              sx={{ fontSize: "14px", fontWeight: "600", marginBottom: "5px" }}
            >
              Runtime
            </Typography>
            <Typography sx={{ fontSize: "14px", color: "lightgray" }}>
              {runtime ? toHoursAndMinutes(runtime) : "No info"}
            </Typography>
          </Box>
        </Box>
      </Box>
      {actors ? (
        <>
          <Typography
            sx={{
              color: "white",
              position: "relative",
              fontSize: "34px",
              marginBottom: "40px",
            }}
          >
            Top billed casts
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              columnGap: "35px",
              rowGap: "30px",
              marginBottom: "150px",
            }}
          >
            {actors.slice(0, 10).map((actor: any) => {
              return actor.known_for_department === "Acting" ? (
                <ActorCard key={actor.id} actor={actor} />
              ) : null;
            })}
          </Box>
        </>
      ) : (
        ""
      )}
      {posters ? (
        <>
          <Typography
            sx={{
              color: "white",
              position: "relative",
              fontSize: "34px",
              marginBottom: "40px",
            }}
          >
            Movie posters
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              columnGap: "35px",
              rowGap: "30px",
              marginBottom: "150px",
            }}
          >
            {posters.slice(0, 18).map((poster: any) => {
              return <PosterCard key={poster.file_path} poster={poster} />;
            })}
          </Box>
        </>
      ) : (
        ""
      )}
      {similarMovies ? (
        <>
          <Typography
            sx={{
              color: "white",
              position: "relative",
              fontSize: "34px",
              marginBottom: "40px",
            }}
          >
            Similar movies
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              rowGap: "20px",
              columnGap: "20px",
              padding: "0",
            }}
          >
            {similarMovies.slice(0, 15).map((film: any) => {
              return <FilmCard key={film.id} film={film} />;
            })}
          </Box>
        </>
      ) : (
        ""
      )}
    </Container>
  );
};

export default FilmPage;
