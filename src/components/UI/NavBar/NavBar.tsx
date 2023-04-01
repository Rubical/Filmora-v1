import { FC, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import FilmInput from "../../FilmInput/FilmInput";
import cl from "./NavBar.module.css";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { setType } from "../../../state/categorySlice";
import { useNavigate } from "react-router-dom";
import { setPage } from "../../../state/paginationSlice";

const NavBar: FC = () => {
  const [activeBtn, setActiveBtn] = useState(1);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const changeType = (type: string) => {
    dispatch(setType(type));
  };

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
                dispatch(setPage(1));
                changeType("movie");
                setActiveBtn(1);
                navigate("/Zenix_Film/movie/page/1");
              }}
              disableRipple={true}
              sx={{
                my: 2,
                color: activeBtn === 1 ? "white" : "lightgray",
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
              className={activeBtn === 1 ? cl.navLinkActive : null}
            >
              Movies
            </Button>

            <Button
              onClick={() => {
                dispatch(setPage(1));
                changeType("tv");
                setActiveBtn(2);
                navigate("/Zenix_Film/tv/page/1");
              }}
              disableRipple={true}
              sx={{
                my: 2,
                color: activeBtn === 2 ? "white" : "lightgray",
                fontSize: "14px",
                fontWeight: "600",
                display: "block",
                letterSpacing: "1px",
                transition: "color 0.1s ease-in",
                "&:hover": {
                  color: "white",
                  backgroundColor: " transparent",
                },
              }}
              className={activeBtn === 2 ? cl.navLinkActive : null}
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
