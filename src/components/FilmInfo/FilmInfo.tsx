import { FC } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import getPrettyDate from "../../utils/getPrettyDate";
import { IFilmsList } from "../../state/filmListSlice";

interface IFilmInfo {
  film: IFilmInfo;
}

interface IFilmInfo extends IFilmsList {
  budget: number;
  homepage: string;
  genres: any;
  poster_path: string;
}

interface IFilmInfoCard {
  film: IFilmInfo;
}

const FilmInfo: FC<IFilmInfoCard> = ({ film }) => {
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
    genres,
    poster_path,
  } = film;

  return (
    <Box
      sx={{
        position: "relative",
        color: "lightgray",
        margin: "170px 0 0 20px",
        overflow: "auto",
        marginBottom: "150px",
      }}
    >
      <img
        style={{
          width: "300px",
          height: "450px",
          float: "left",
          marginRight: "30px",
          background: "white",
        }}
        src={
          poster_path
            ? `https://www.themoviedb.org/t/p/original/${poster_path}`
            : ""
        }
        alt="poster"
      />
      <Box>
        <Typography
          sx={{ fontSize: "35px", fontWeight: "600", maxWidth: "700px" }}
        >
          {original_title}
        </Typography>
        <Typography
          sx={{
            fontSize: "35px",
            fontWeight: "600",
            maxWidth: "700px",
            whiteSpace: "nowrap",
          }}
        >
          {"("}
          {getPrettyDate(new Date(release_date))}
          {" )"}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          marginTop: "20px",
          color: "lightgray",
          marginBottom: "5px",
        }}
      >
        <StarIcon sx={{ color: "rgb(230, 230, 0)" }}></StarIcon>
        <Box
          sx={{
            marginLeft: "5px",
            display: "flex",
            columnGap: "7px",
          }}
        >
          <Typography sx={{ fontSize: "16px" }}>
            {vote_average?.toFixed(1)}
          </Typography>
          <Typography sx={{ fontSize: "16px" }}>Rating</Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", columnGap: "7px" }}>
        {genres.map((el: any, index: number) => {
          return index === genres.length - 1 ? (
            <Typography key={el.id} sx={{ fontSize: "14px" }}>
              {el.name}
            </Typography>
          ) : (
            <Typography key={el.id} sx={{ fontSize: "14px" }}>
              {el.name} {"/"}
            </Typography>
          );
        })}
      </Box>
      <Typography
        sx={{ marginTop: "40px", fontWeight: "600", marginBottom: "10px" }}
      >
        Overview
      </Typography>
      <Typography sx={{ maxWidth: "95%" }}>{overview}</Typography>
    </Box>
  );
};

export default FilmInfo;
