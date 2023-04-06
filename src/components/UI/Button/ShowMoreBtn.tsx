import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { hideFavFilmsCards } from "../../../state/favFilmsCardsShow";

export default function ShowMoreBtn() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const openFavPage = () => {
    navigate("/Zenix_Film/favourite");
    dispatch(hideFavFilmsCards());
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
