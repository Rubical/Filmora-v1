import React, { FC } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { setPage } from "../../../state/paginationSlice";
import { useNavigate } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(172,0,0)",
      contrastText: "white",
    },
  },
});

declare module "@mui/material/styles" {
  interface Palette {
    primary: Palette["primary"];
  }

  interface PaletteOptions {
    primary?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    primary: true;
  }
}

const PagePagination: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const type = useAppSelector((state) => state.category.type);
  return (
    <ThemeProvider theme={theme}>
      <Stack
        spacing={2}
        sx={{
          position: "relative",
          marginTop: "50px",
        }}
      >
        <Pagination
          sx={{
            color: "white",
            button: {
              color: "#ffffff",
            },
            div: {
              color: "#ffffff",
            },
          }}
          onChange={(e, page) => {
            dispatch(setPage(page));
            navigate(`/Zenix_Film/${type}/page/${page}`);
          }}
          count={99}
          shape="rounded"
          page={useAppSelector((state) => state.pagination)}
          color={"primary"}
        />
      </Stack>{" "}
    </ThemeProvider>
  );
};

export default PagePagination;
