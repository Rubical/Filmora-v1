import React, { FC } from "react";
import { useActions } from "../../hooks/useActions";
import { useFavouriteFilms } from "../../hooks/useFavouriteFilms";
import { useFilmFilter } from "../../hooks/useFilmFilter";
import { useAuth } from "../../hooks/useAuth";
import { IFilm } from "../../types/film.types";
import Button from "@mui/material/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { supabase } from "../../auth/auth";

interface IFilmInfo {
  filmInfo: IFilm;
}

interface IAddBtn {
  film: IFilm;
}

const AddFilmToFavouriteBtn: FC<IAddBtn> = ({ film }) => {
  const favouriteFilms = useFavouriteFilms();
  const { type } = useFilmFilter();
  const { removeFavouriteFilm, addFavouriteFilm } = useActions();

  const toggleFavouriteFilm = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { data } = await supabase
      .from("FavFilm")
      .select("filmInfo")
      .eq("userId", user?.id);

    if (data?.find((el) => el.filmInfo.id === film.id)) {
      const deleteFavFilm = await supabase
        .from("FavFilm")
        .delete()
        .eq("filmId", film.id);
    } else {
      const insertFavFilm = await supabase.from("FavFilm").insert([
        {
          id: Date.now(),
          userId: user?.id,
          filmId: film.id,
          filmInfo: film,
        },
      ]);
    }
  };

  return (
    <Button
      disableRipple={true}
      sx={{
        padding: "10px 0px",
        "&:hover": { backgroundColor: "transparent" },
      }}
      onClick={(event) => {
        event.stopPropagation();
        toggleFavouriteFilm();
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
