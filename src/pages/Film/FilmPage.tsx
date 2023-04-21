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
import Skeleton from "@mui/material/Skeleton";
import { firstLetterToUpperCase } from "../../utils/firstLetterToUpperCase";

interface IFilm {
  backdrop_path: string;
  release_date: string;
  status: string;
  budget: number;
  revenue: number;
  runtime: number;
  first_air_date: "string";
  last_episode_to_air: IEpisode;
  next_episode_to_air: IEpisode;
}

interface IEpisode {
  air_date: string;
  episode_number: number;
  name: string;
}

const FilmPage: FC = () => {
  const { id } = useParams();
  const { type } = useParams();

  const dispatch = useAppDispatch();

  const film: any = useAppSelector((state) => state.film.film);
  const filmIsLoading = useAppSelector((state) => state.film.loading);

  const {
    backdrop_path,
    release_date,
    status,
    budget,
    revenue,
    runtime,
    first_air_date,
    last_episode_to_air,
    next_episode_to_air,
  } = film as IFilm;

  const actors = useAppSelector((state) => state.actors.actors);

  const video: any = useAppSelector((state) => state.filmVideo.filmVideo);
  const posters = useAppSelector((state) => state.posters.posters);
  const similarMovies = useAppSelector(
    (state) => state.similarMovies.similarMovies
  );
  const videoIsLoading = useAppSelector((state) => state.filmVideo.loading);

  const date = type === " movie" ? release_date : first_air_date;

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchFilm({ id, filmType: type }));
    dispatch(fetchActors({ id, filmType: type }));
    dispatch(fetchVideo({ id, filmType: type }));
    dispatch(fetchPosters({ id, filmType: type }));
    dispatch(fetchSimilarMovies({ id, filmType: type }));
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
          zIndex: "1",
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
      <Box
        sx={{
          display: "flex",
          flexWrap: { xs: "wrap", md: "no-wrap" },
          justifyContent: "space-between",
          marginBottom: { xs: "100px", md: "150px" },
        }}
      >
        <YoutubeFrame
          embedId={
            video?.find((el: any) => el.type === "Trailer")?.key ||
            video?.find((el: any) => el.key)
          }
        />
        <Box
          sx={{
            position: "relative",
            zIndex: "2",
            display: { xs: "flex", lg: "block" },
            columnGap: "30px",
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              position: "relative",
              color: "white",
              marginBottom: "25px",
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "600",
                marginBottom: "5px",
              }}
            >
              Release Date
            </Typography>
            <Typography sx={{ fontSize: "14px", color: "lightgray" }}>
              {date ? date : "No info"}
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
              {type === "movie" ? "Budget" : "Last episode"}
            </Typography>
            {type === "movie" ? (
              <Typography sx={{ fontSize: "14px", color: "lightgray" }}>
                {budget
                  ? budget.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })
                  : "No info"}
              </Typography>
            ) : (
              <>
                <Typography sx={{ fontSize: "14px", color: "lightgray" }}>
                  {last_episode_to_air?.air_date}
                </Typography>
                <Typography sx={{ fontSize: "14px", color: "lightgray" }}>
                  {last_episode_to_air?.episode_number}
                </Typography>
              </>
            )}
          </Box>
          <Box
            sx={{ position: "relative", color: "white", marginBottom: "25px" }}
          >
            <Typography
              sx={{ fontSize: "14px", fontWeight: "600", marginBottom: "5px" }}
            >
              {type === "movie" ? "Revenue" : "Next episode"}
            </Typography>
            {type === "movie" ? (
              <Typography sx={{ fontSize: "14px", color: "lightgray" }}>
                {revenue
                  ? revenue.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })
                  : "No info"}
              </Typography>
            ) : (
              <>
                <Typography sx={{ fontSize: "14px", color: "lightgray" }}>
                  {next_episode_to_air?.air_date
                    ? next_episode_to_air?.air_date
                    : "Ended"}
                </Typography>
                <Typography sx={{ fontSize: "14px", color: "lightgray" }}>
                  {next_episode_to_air?.episode_number
                    ? `${next_episode_to_air?.episode_number} episode`
                    : ""}
                </Typography>
              </>
            )}
          </Box>
          {type === "movie" ? (
            <Box
              sx={{
                position: "relative",
                color: "white",
                marginBottom: "25px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "600",
                  marginBottom: "5px",
                }}
              >
                Runtime
              </Typography>
              <Typography sx={{ fontSize: "14px", color: "lightgray" }}>
                {runtime ? toHoursAndMinutes(runtime) : "No info"}
              </Typography>
            </Box>
          ) : (
            ""
          )}
        </Box>
      </Box>
      {actors?.length ? (
        <Box sx={{ position: "relative", zIndex: "2" }}>
          <Typography
            sx={{
              color: "white",
              position: "relative",
              fontSize: { xs: "24px", md: "34px" },
              marginBottom: "40px",
              display: { xs: "flex", md: "block" },
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            Top billed casts
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: { xs: "center", md: "flex-start" },
              columnGap: "30px",
              rowGap: "30px",
              marginBottom: { xs: "100px", md: "150px" },
            }}
          >
            {actors.slice(0, 10).map((actor: any) => {
              return actor.known_for_department === "Acting" ? (
                <ActorCard key={actor.id} actor={actor} />
              ) : null;
            })}
          </Box>
        </Box>
      ) : (
        ""
      )}
      {posters?.length ? (
        <Box sx={{ position: "relative", zIndex: "2" }}>
          <Typography
            sx={{
              color: "white",
              position: "relative",
              fontSize: { xs: "24px", md: "34px" },
              marginBottom: "40px",
              display: { xs: "flex", md: "block" },
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            {`${firstLetterToUpperCase(type)} posters`}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: { xs: "center", md: "flex-start" },
              columnGap: "30px",
              rowGap: "30px",
              marginBottom: { xs: "100px", md: "150px" },
            }}
          >
            {posters.slice(0, 18).map((poster: any) => {
              return <PosterCard key={poster.file_path} poster={poster} />;
            })}
          </Box>
        </Box>
      ) : (
        ""
      )}
      {similarMovies?.length ? (
        <Box sx={{ position: "relative", zIndex: "2" }}>
          <Typography
            sx={{
              color: "white",
              position: "relative",
              fontSize: { xs: "24px", md: "34px" },
              marginBottom: { xs: "20px", md: "40px" },
              display: { xs: "flex", md: "block" },
              justifyContent: "center",
            }}
          >
            {`Similar ${type === "movie" ? "movies" : "tv series"}`}
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
            {similarMovies.slice(0, 14).map((film: any) => {
              return <FilmCard key={film.id} film={film} />;
            })}
          </Box>
        </Box>
      ) : (
        ""
      )}
    </Container>
  );
};

export default FilmPage;
