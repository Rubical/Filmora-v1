import { FC, useContext } from "react";
import { Context } from "../../../context/context";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import SignInBtn from "../Button/SignIn";
import FilmInput from "../../FilmInput/FilmInput";
import cl from "./NavBar.module.css";
import SideBarRightLogined from "../SideBar/SideBarRightLogined";

const NavBar: FC = () => {
  const isAuth = useContext(Context);

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
              sx={{
                my: 2,
                color: "white",
                display: "block",
                fontSize: "14px",
                fontWeight: "600",
                letterSpacing: "1px",
              }}
              className={cl.navLinkActive}
            >
              Movies
            </Button>
            <Button
              sx={{
                my: 2,
                color: "white",
                display: "block",
                fontSize: "14px",
                fontWeight: "600",
                letterSpacing: "1px",
              }}
            >
              Sports
            </Button>
            <Button
              sx={{
                my: 2,
                color: "white",
                fontSize: "14px",
                fontWeight: "600",
                display: "block",
                letterSpacing: "1px",
              }}
            >
              TV series
            </Button>
            <Button
              sx={{
                my: 2,
                color: "white",
                display: "block",
                fontSize: "14px",
                fontWeight: "600",
                letterSpacing: "1px",
              }}
            >
              Kids
            </Button>
          </Box>
          <FilmInput />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
