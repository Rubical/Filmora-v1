import { FC, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import FilmInput from "../Input/FilmInput/FilmInput";
import cl from "./NavBar.module.css";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { setCategory, setType } from "../../../state/categorySlice";
import { useNavigate } from "react-router-dom";
import {
  setActiveCategoryBtn,
  setActiveTypeBtn,
} from "../../../state/activeBtnsSlice";
import { showFavFilmsCards } from "../../../state/favFilmsCardsShow";
import {
  changeSearchedFilmPage,
  changeSearchedQuery,
} from "../../../state/searchFilmSlice";
import { changeFilmListPage } from "../../../state/filmListSlice";

const NavBar: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const type = useAppSelector((state) => state.category.type);
  const category = useAppSelector((state) => state.category.category);
  const activeTypeBtn = useAppSelector(
    (state) => state.activeBtns.activeTypeBtn
  );
  const activeCategoryBtn = useAppSelector(
    (state) => state.activeBtns.activeCategoryBtn
  );

  return (
    <AppBar
      sx={{
        background: "transparent",
        boxShadow: "none",
      }}
      position="absolute"
    >
      <Container maxWidth="xl" sx={{ paddingRight: { xs: "0px", md: "20px" } }}>
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            flexDirection: "row",
            marginLeft: { xs: "15px" },
            justifyContent: { xs: "space-between" },
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", lg: "flex" },
              paddingTop: "8px",
            }}
          >
            <Button
              onClick={() => {
                dispatch(changeFilmListPage(1));
                dispatch(setType("movie"));
                dispatch(setCategory("popular"));
                dispatch(setActiveTypeBtn(1));
                dispatch(setActiveCategoryBtn(1));
                dispatch(showFavFilmsCards());
                dispatch(changeSearchedQuery(""));
                dispatch(changeSearchedFilmPage(1));
                navigate(`/Zenix_Film/movie/popular/page/1`);
              }}
              disableRipple={true}
              sx={{
                my: 2,
                color: activeTypeBtn === 1 ? "white" : "lightgray",
                display: "block",
                fontSize: "14px",
                fontWeight: "600",
                letterSpacing: "1px",
                transition: "color 0.1s ease-in",
                "&:hover": {
                  color: "white",
                  backgroundColor: "transparent",
                },
              }}
              className={activeTypeBtn === 1 ? cl.navLinkActive : null}
            >
              Movies
            </Button>

            <Button
              onClick={() => {
                dispatch(changeFilmListPage(1));
                dispatch(setType("tv"));
                dispatch(setCategory("popular"));
                dispatch(setActiveTypeBtn(2));
                dispatch(setActiveCategoryBtn(1));
                dispatch(showFavFilmsCards());
                dispatch(changeSearchedQuery(""));
                dispatch(changeSearchedFilmPage(1));
                navigate(`/Zenix_Film/tv/popular/page/1`);
              }}
              disableRipple={true}
              sx={{
                my: 2,
                color: activeTypeBtn === 2 ? "white" : "lightgray",
                fontSize: "14px",
                fontWeight: "600",
                display: "block",
                letterSpacing: "1px",
                transition: "color 0.1s ease-in",
                "&:hover": {
                  color: "white",
                },
              }}
              className={activeTypeBtn === 2 ? cl.navLinkActive : null}
            >
              TV series
            </Button>
          </Box>
          <FilmInput />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
