import React, { FC } from "react";
import { useActions } from "../../hooks/useActions";
import { useFavouriteFilms } from "../../hooks/useFavouriteFilms";
import { useFilmFilter } from "../../hooks/useFilmFilter";
import { IFilm } from "../../types/film.types";
import Button from "@mui/material/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

interface IAddBtn {
  film: IFilm;
}

const AddFilmToFavouriteBtn: FC<IAddBtn> = ({ film }) => {
  const favouriteFilms = useFavouriteFilms();
  const { type } = useFilmFilter();
  const { removeFavouriteFilm, addFavouriteFilm } = useActions();

  return (
    <Button
      disableRipple={true}
      sx={{
        padding: "10px 0px",
        "&:hover": { backgroundColor: "transparent" },
      }}
      onClick={(event) => {
        event.stopPropagation();
        favouriteFilms.find((el) => el.film.id === film.id)
          ? removeFavouriteFilm(film.id)
          : addFavouriteFilm({ film: film, type: type });
      }}
    >
      {favouriteFilms.find((el) => el.film.id === film.id) ? (
        <FavoriteIcon
          sx={{
            color: "rgba(164,23,23,0.84)",
            transition: "color 0.1s ease-in",
            "&:hover": { color: "rgba(129,50,50,0.84)" },
          }}
        />
      ) : (
        <FavoriteBorderIcon
          sx={{
            color: "rgba(129,50,50,0.84)",
            transition: "color 0.1s ease-in",
            "&:hover": { color: "rgba(164,23,23,0.84)" },
          }}
        />
      )}
    </Button>
  );
};

export default AddFilmToFavouriteBtn;
