import Card from "@mui/joy/Card";
import Box from "@mui/joy/Box";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { IFilmsList } from "../../../../state/filmListSlice";
import getPrettyDate from "../../../../utils/getPrettyDate";
import { getGenreByID } from "../../../../utils/getGenreById";
import { FC, useContext } from "react";
import { useNavigate } from "react-router-dom";
import imgNotFound from "./../../../../images/imgNotFound.jpg";
import { useAppSelector } from "../../../../hooks/reduxHooks";
import StarIcon from "@mui/icons-material/Star";
import AddToFavBtn from "../../Button/AddToFavBtn";
import { Context } from "./../../../../context/context";

interface IFilm {
  film: IFilmsList;
}

const FilmCard: FC<IFilm> = ({ film }) => {
  const isAuth = useContext(Context);
  const type = useAppSelector((state) => state.category.type);
  const navigate = useNavigate();
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
    <Card
      sx={{
        display: "flex",
        width: { xs: "90%", sm: "40%", lg: "calc(33.3% - 40px)" },
        height: { xs: "220px", sm: "180px", md: "250px", lg: "220px" },
        margin: "10px 10px",
        backgroundColor: "relevant",
        boxShadow: "none",
        borderRadius: "5px",
        cursor: "pointer",
        transition: "transform 0.2s ease-in",
        "&:hover": { transform: "scale(1.1)" },
      }}
      onClick={() => {
        navigate(`/Zenix_Film/view/${type}/${id}`);
      }}
    >
      <CardCover sx={{ position: "absolute" }}>
        <img
          style={{ borderRadius: "5px" }}
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
          backgroundColor: "transparent",
          display: "flex",
          alignItems: "center",
          padding: "6px 6px 8px 1px",
          borderTopLeftRadius: "5px",
        }}
      >
        <StarIcon sx={{ color: "rgb(230, 230, 0)", transform: "scale(0.9)" }} />
        <Typography
          sx={{ color: "white", fontSize: "15px", fontWeight: "600" }}
        >
          {vote_average?.toFixed(1)}
        </Typography>
      </Box>

      <CardContent
        sx={{
          justifyContent: "flex-end",
        }}
      >
        {isAuth ? (
          <Box sx={{ position: "absolute", right: "0px", top: "0px" }}>
            <AddToFavBtn id={id} />
          </Box>
        ) : (
          ""
        )}

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
  );
};

export default FilmCard;
