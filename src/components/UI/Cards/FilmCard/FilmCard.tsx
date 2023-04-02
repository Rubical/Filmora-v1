import Card from "@mui/joy/Card";
import Box from "@mui/joy/Box";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { IFilmsList } from "../../../../state/filmListSlice";
import getPrettyDate from "../../../../utils/getPrettyDate";
import { getGenreByID } from "../../../../utils/getGenreById";
import { FC } from "react";
import { NavLink } from "react-router-dom";
import cl from "./FilmCard.module.css";
import imgNotFound from "./../../../../images/imgNotFound.jpg";
import { useAppSelector } from "../../../../hooks/reduxHooks";
import StarIcon from "@mui/icons-material/Star";

interface IFilm {
  film: IFilmsList;
}

const FilmCard: FC<IFilm> = ({ film }) => {
  const type = useAppSelector((state) => state.category.type);
  const {
    id,

    original_title,
    backdrop_path,
    release_date,
    vote_average,

    genre_ids,
    name,
    first_air_date,
  } = film;

  const date = release_date ? release_date : first_air_date;
  return (
    <NavLink
      style={{
        display: "flex",
        maxWidth: "380px",
        maxHeight: "200px",
        margin: "10px 10px",
        backgroundColor: "relevant",
      }}
      className={cl.card}
      to={`/Zenix_Film/view/${type}/${id}`}
    >
      <Card
        sx={{
          height: "100%",
          width: "100%",
          boxShadow: "none",
          borderRadius: "5px",
          transition: "transform 0.2s ease-in",
          "&:hover": { transform: "scale(1.1)" },
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
        <Box
          sx={{
            position: "absolute",
            left: "0px",
            top: "0px",
            backgroundColor: "rgb(172, 0, 0)",
            display: "flex",
            alignItems: "center",
            padding: "6px 6px 8px 1px",
          }}
        >
          <StarIcon sx={{ color: "white", transform: "scale(0.7)" }} />
          <Typography
            sx={{ color: "white", fontSize: "15px", fontWeight: "600" }}
          >
            {vote_average}
          </Typography>
        </Box>
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
              {original_title || name || "No name"}
            </Typography>
            <Box sx={{ display: "flex", columnGap: "10px" }}>
              <Typography
                textColor="white"
                sx={{ fontSize: "12px", marginRight: "10px", marginTop: "2px" }}
              >
                {date ? getPrettyDate(new Date(date)) : ""}
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
