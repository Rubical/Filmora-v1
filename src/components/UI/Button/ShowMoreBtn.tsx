import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { hideFavFilmsCards } from "../../../state/favFilmsCardsShow";
import {
  setActiveCategoryBtn,
  setActiveTypeBtn,
} from "../../../state/activeBtnsSlice";
import { setCategory, setType } from "../../../state/categorySlice";
import { changeFilmListPage } from "../../../state/filmListSlice";
import {
  changeSearchedFilmPage,
  changeSearchedQuery,
} from "../../../state/searchFilmSlice";

export default function ShowMoreBtn() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const openFavPage = () => {
    dispatch(setType("movie"));
    dispatch(setCategory("popular"));
    dispatch(changeFilmListPage(1));
    dispatch(setActiveTypeBtn(1));
    dispatch(setActiveCategoryBtn(1));
    dispatch(hideFavFilmsCards());
    navigate("/Zenix_Film/favourite");
  };
  return (
    <Stack spacing={2} direction="row" sx={{ position: "static" }}>
      <Button
        onClick={openFavPage}
        sx={{
          border: "1px solid rgba(192, 0, 0, 0.5)",
          color: "rgba(192, 0, 0)",
          "&:hover": {
            border: "1px solid rgba(192, 0, 0)",
          },
        }}
        variant="outlined"
      >
        Show more
      </Button>
    </Stack>
  );
}
