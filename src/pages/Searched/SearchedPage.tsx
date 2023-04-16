import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import FilmCard from "../../components/UI/Cards/FilmCard/FilmCard";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Loader from "../../components/UI/Loader/Loader";
import PagePagination from "../../components/UI/Pagination/Pagination";
import { useNavigate } from "react-router-dom";
import {
  changeSearchedFilmPage,
  fetchSearchedFilms,
} from "../../state/searchFilmSlice";

const SearchedPage: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const searchedFilms = useAppSelector((state) => state.searchFilm.filmsFound);
  const searchedFilmsLoading = useAppSelector(
    (state) => state.searchFilm.loading
  );
  const totalPages = useAppSelector((state) => state.searchFilm.totalPages);
  const page = useAppSelector((state) => state.searchFilm.page);
  const searchQuery = useAppSelector((state) => state.searchFilm.filmQuery);
  const changePage = (page: number) => {
    navigate(`/Zenix_film/searched/${searchQuery}/page/${page}`);
    dispatch(changeSearchedFilmPage(page));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchSearchedFilms());
  }, [page]);

  return searchedFilmsLoading ? (
    <Loader />
  ) : (
    <Box sx={{ marginTop: "120px" }}>
      {searchedFilms.length ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              rowGap: "20px",
              columnGap: "20px",
              width: "100%",
            }}
          >
            {searchedFilms.map((film) => {
              return <FilmCard key={film.id} film={film} />;
            })}
          </Box>
          <PagePagination
            totalPages={totalPages}
            changePage={changePage}
            currentPage={page}
          />
        </Box>
      ) : (
        <Typography
          sx={{
            color: "white",
            marginTop: "50px",
            fontSize: "30px",
            fontWeight: "600",
            textAlign: "center",
            width: "100%",
          }}
        >
          No films found
        </Typography>
      )}
    </Box>
  );
};

export default SearchedPage;
