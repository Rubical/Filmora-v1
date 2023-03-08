import { useContext } from "react";
import { Context } from "../../../context/context";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import SignInBtn from "../Button/SignIn";

function NavBar() {
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
            flexDirection: { xs: "row-reverse", md: "row" },
          }}
        >
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
            }}
          ></Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              sx={{
                my: 2,
                color: "lightGray",
                display: "block",
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              Movies
            </Button>
            <Button
              sx={{
                my: 2,
                color: "lightGray",
                display: "block",
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              Sports
            </Button>
            <Button
              sx={{
                my: 2,
                color: "lightGray",
                fontSize: "14px",
                fontWeight: "600",
                display: "block",
              }}
            >
              TV series
            </Button>
            <Button
              sx={{
                my: 2,
                color: "lightGray",
                display: "block",
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              Kids
            </Button>
          </Box>
          {!isAuth ? <SignInBtn /> : null}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
