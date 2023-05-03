import React, { FC } from "react";
import { theme } from "../../themes/themes";
import errorImg from "./error-404.jpg";
import BackToMainBtn from "../../components/UI/Button/BackToMainBtn";
import { ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";

const ErrorPage: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          margin: "0 auto",
          columnGap: "80px",
          height: "50vh",
          width: "70%",
          flexWrap: "wrap",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <BackToMainBtn />
        <Box
          sx={{
            height: { xs: "30vh", sm: "50vh", md: "70vh", lg: "90vh" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{ width: "70%", height: "90%" }}
            src={errorImg}
            alt="error"
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default ErrorPage;
