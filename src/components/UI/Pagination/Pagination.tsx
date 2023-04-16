import React, { FC } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
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

interface IPagination {
  totalPages: number;
  changePage: (page: number) => void;
  currentPage: number;
}

const PagePagination: FC<IPagination> = ({
  totalPages,
  changePage,
  currentPage,
}) => {
  console.log(totalPages);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const type = useAppSelector((state) => state.category.type);
  const category = useAppSelector((state) => state.category.category);
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
            changePage(page);
          }}
          count={totalPages}
          shape="rounded"
          page={currentPage}
          color={"primary"}
        />
      </Stack>
    </ThemeProvider>
  );
};

export default PagePagination;
