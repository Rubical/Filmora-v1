import React, { FC, useEffect } from "react";
import FilmCard from "../../components/FilmCard/FilmCard";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Loader from "../../components/UI/Loader/Loader";
import PagePagination from "../../components/UI/Pagination/Pagination";
import { useNavigate } from "react-router-dom";
import { useSearchedFilms } from "../../hooks/useSearchedFilms";
import { useActions } from "../../hooks/useActions";

const SearchedFilmsPage: FC = () => {
  const navigate = useNavigate();
  const { filmsFound, loading, totalPages, page, filmQuery } =
    useSearchedFilms();
  const { changeSearchedFilmPage, fetchSearchedFilms } = useActions();

  const changePage = (page: number) => {
    navigate(`/Zenix_film/searched/${filmQuery}/page/${page}`);
    changeSearchedFilmPage(page);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchSearchedFilms();
  }, [page]);

  return loading ? (
    <Loader />
  ) : (
    <Box sx={{ marginTop: "120px" }}>
      {filmsFound.length ? (
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
            {filmsFound.map((film) => {
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

export default SearchedFilmsPage;
