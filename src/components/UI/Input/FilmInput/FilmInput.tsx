import React, { ChangeEvent, FC } from "react";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import {
  changeSearchedFilmPage,
  changeSearchedQuery,
  fetchSearchedFilms,
} from "../../../../state/searchFilmSlice";
import { useNavigate } from "react-router-dom";

const FilmInput: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const queryFilm = useAppSelector((state) => state.searchFilm.filmQuery);

  const getSearchedFilms = () => {
    if (!queryFilm.length) {
      return;
    }
    dispatch(fetchSearchedFilms());
    dispatch(changeSearchedFilmPage(1));
    navigate(`/Zenix_Film/searched/${queryFilm}/page/1`);
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (event.key === "Enter") {
      getSearchedFilms();
    }
  };

  return (
    <Box
      sx={{
        width: "200px",
        height: { xs: "45px", sm: "50px" },
        border: "2px solid lightgray",
        marginRight: { xs: "0", md: "100px" },
        marginTop: { xs: "15px", lg: "0px" },
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <InputBase
        sx={{
          ml: 1,
          maxWidth: "70%",
          color: "lightgray",
          input: {
            "&::placeholder": {
              opacity: 1,
            },
          },
        }}
        placeholder="Search"
        value={queryFilm}
        onKeyDown={handleKeyDown}
        onChange={(e: ChangeEvent) => {
          let currValue = (e.target as HTMLInputElement).value;
          dispatch(changeSearchedQuery(currValue));
        }}
      />
      <IconButton
        onClick={getSearchedFilms}
        type="button"
        sx={{ p: "10px", color: "lightgray" }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Box>
  );
};

export default FilmInput;
