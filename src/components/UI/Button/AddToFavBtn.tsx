import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import {
  addfavouriteFilm,
  removeFavouriteFilm,
} from "../../../state/favouriteFilmsSlice";
import { IFilmsList } from "../../../state/filmListSlice";
import Button from "@mui/material/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Face3 } from "@mui/icons-material";

interface IAddBtn {
  film: IFilmsList;
}

const AddToFavBtn: FC<IAddBtn> = ({ film }) => {
  const dispatch = useAppDispatch();
  const favouriteFilms = useAppSelector((state) => state.favouriteFilms);

  return (
    <Button
      disableRipple={true}
      sx={{
        padding: "10px 0px",
        "&:hover": { backgroundColor: "transparent" },
      }}
      onClick={(event) => {
        event.stopPropagation();
        favouriteFilms.find((el) => el.id === film.id)
          ? dispatch(removeFavouriteFilm(film.id))
          : dispatch(addfavouriteFilm(film));
      }}
    >
      {favouriteFilms.find((el) => el.id === film.id) ? (
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

export default AddToFavBtn;
