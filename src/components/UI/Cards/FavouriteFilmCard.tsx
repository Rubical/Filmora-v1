import { FC } from "react";
import { IFilmsList } from "../../../state/filmListSlice";
import imgNotFound from "../../../images/imgNotFound.jpg";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { removeFavouriteFilm } from "../../../state/favouriteFilmsSlice";
import { hideFavFilmsCards } from "../../../state/favFilmsCardsShow";
import { useNavigate } from "react-router-dom";

interface IFavouriteFilmCard {
  film: IFilmsList;
}

const FavouriteFilmCard: FC<IFavouriteFilmCard> = ({ film }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const type = useAppSelector((state) => state.category.type);
  const deleteFavFilm = () => {
    dispatch(removeFavouriteFilm(film.id));
  };
  return (
    <Box
      sx={{
        cursor: "pointer",
      }}
      onClick={() => {
        dispatch(hideFavFilmsCards());
        navigate(`/Zenix_Film/view/${type}/${film.id}`);
      }}
    >
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          sx={{ width: "150px", height: "85px", backgroundColor: "white" }}
          image={
            film.backdrop_path
              ? `https://www.themoviedb.org/t/p/original/${film.backdrop_path}`
              : imgNotFound
          }
          alt="img"
        ></CardMedia>
        <CloseIcon
          onClick={(e) => {
            e.stopPropagation();
            deleteFavFilm();
          }}
          sx={{
            position: "absolute",
            top: "2px",
            right: "2px",
            color: "white",
            transform: "scale(0.8)",
            transition: "scale 0.1s ease-in",
            "&:hover": {
              transform: "scale(1)",
              cursor: "pointer",
            },
          }}
        />
      </Box>
      <CardContent
        sx={{ flex: "1 0 auto", padding: "7px 0", marginBottom: "15px" }}
      >
        <Typography sx={{ width: "150px", textAlign: "center" }}>
          {film.original_title || film.name || "No name"}
        </Typography>
      </CardContent>
    </Box>
  );
};

export default FavouriteFilmCard;
