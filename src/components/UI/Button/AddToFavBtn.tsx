import React, { FC } from "react";
import Button from "@mui/material/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import {
  addfavouriteFilm,
  removeFavouriteFilm,
} from "../../../state/favouriteFilmsSlice";
import { fetchFilm } from "../../../state/filmSlice";
interface IAddBtn {
  id: number;
}
const AddToFavBtn: FC<IAddBtn> = ({ id }) => {
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
        favouriteFilms.indexOf(id) === -1
          ? dispatch(addfavouriteFilm(id))
          : dispatch(removeFavouriteFilm(id));
      }}
    >
      <FavoriteIcon
        sx={{
          color: favouriteFilms.includes(id) ? "rgba(164,23,23,0.84)" : "gray",
          transition: "color 0.1s ease-in",
          "&:hover": { color: "rgba(157,63,63,0.84)" },
        }}
      />
    </Button>
  );
};

export default AddToFavBtn;
