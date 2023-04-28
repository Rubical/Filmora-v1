import React, { FC, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchedFilms } from "../../hooks/useSearchedFilms";
import { useActions } from "../../hooks/useActions";
import FilmCard from "../../components/FilmCard/FilmCard";
import Loader from "../../components/UI/Loader/Loader";
import PagePagination from "../../components/UI/Pagination/Pagination";
import cl from "./SearchedFilmsPage.module.css";
import { Context } from "../../context/context";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SideBarLeft from "../../components/UI/SideBar/SideBarLeft/SideBarLeft";
import SideBarRight from "../../components/UI/SideBar/SideBarRight/SideBarRight";
import SignInBtn from "../../components/UI/Button/SignInBtn";
import NavBar from "../../components/UI/NavBar/NavBar";

const SearchedFilmsPage: FC = () => {
  const isAuth = useContext(Context);
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

  return (
    <div className={cl.grid}>
      <SideBarLeft />
      <div className={cl.main}>
        {loading ? (
          <Loader />
        ) : (
          <>
            <NavBar />
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
          </>
        )}
      </div>
      {isAuth ? <SideBarRight /> : <SignInBtn />}
    </div>
  );
};

export default SearchedFilmsPage;
