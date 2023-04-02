import * as React from "react";
import { useContext, useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import StarRateIcon from "@mui/icons-material/StarRate";
import EventIcon from "@mui/icons-material/Event";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import logo from "../../../../images/logo.png";
import { Context } from "../../../../context/context";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import { setPage } from "../../../../state/paginationSlice";
import { setCategory, setType } from "../../../../state/categorySlice";
import {
  setActiveCategoryBtn,
  setActiveTypeBtn,
} from "../../../../state/activeBtnsSlice";

export const SideBarLeft: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const isAuth = useContext(Context);
  const type = useAppSelector((state) => state.category.type);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const activeCategoryBtn = useAppSelector(
    (state) => state.activeBtns.activeCategoryBtn
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box
      sx={{
        color: "lightgray",
        margin: "0 auto",
        alignItems: { xs: "center", lg: "flex-start" },
        position: "relative",
        zIndex: "5",
        width: "100%",
        height: "100%",
        paddingLeft: "20px",
      }}
      role="presentation"
    >
      <Box
        sx={{
          display: { xs: "none", lg: "flex", padding: "20px 10px" },
          cursor: "pointer",
        }}
        onClick={(e) => {
          e.stopPropagation();
          navigate("/Zenix_Film/movie/popular/page/1");
          dispatch(setType("movie"));
          dispatch(setCategory("popular"));
          dispatch(setPage(1));
          dispatch(setActiveTypeBtn(1));
          dispatch(setActiveCategoryBtn(1));
        }}
      >
        <img src={logo} alt="logo" style={{ width: "130px", height: "50px" }} />
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "flex", lg: "none" },
          paddingLeft: { xs: "0", sm: "3px" },
          paddingTop: "9px",
          marginBottom: "40px",
        }}
      >
        <IconButton
          sx={{ padding: { xs: "15px 0", sm: "15px" } }}
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
        >
          <MenuIcon sx={{ color: "lightgray" }} />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiPaper-root": {
              backgroundColor: "rgb(20, 20, 20)",
            },
          }}
        >
          <MenuItem
            sx={{
              "&:hover": {
                backgroundColor: "rgb(15,15,15)",
              },
            }}
            onClick={(e) => {
              e.stopPropagation();
              navigate("/Zenix_Film/movie/popular/page/1");
              dispatch(setType("movie"));
              dispatch(setPage(1));
              handleCloseNavMenu();
            }}
          >
            <Typography
              sx={{
                color: "lightgray",
              }}
              textAlign="center"
            >
              Movies
            </Typography>
          </MenuItem>

          <MenuItem
            sx={{
              "&:hover": {
                backgroundColor: "rgb(15,15,15)",
              },
            }}
            onClick={(e) => {
              e.stopPropagation();
              navigate("/Zenix_Film/tv/popular/page/1");
              dispatch(setType("tv"));
              dispatch(setPage(1));
              handleCloseNavMenu();
            }}
          >
            <Typography sx={{ color: "lightgray" }} textAlign="center">
              TV series
            </Typography>
          </MenuItem>
        </Menu>
      </Box>
      <Typography
        sx={{
          fontSize: "10px",
          padding: "40px 0 16px 20px",
          color: "gray",
          display: { xs: "none", lg: "flex" },
          letterSpacing: "8px",
        }}
      >
        MOVIES
      </Typography>

      <List>
        <ListItem disablePadding>
          <ListItemButton
            disableRipple={true}
            onClick={() => {
              dispatch(setActiveCategoryBtn(1));
              dispatch(setCategory("popular"));
              dispatch(setPage(1));
              navigate(`/Zenix_Film/${type}/popular/page/1`);
            }}
            sx={{
              marginBottom: "10px",
              padding: { xs: "8px 0", sm: "8px 16px" },
            }}
          >
            <WhatshotIcon
              sx={{
                color: activeCategoryBtn === 1 ? "rgb(172, 0, 0)" : "lightgray",
                marginRight: { xs: "0", sm: "10px" },
              }}
            />
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: "14px",
                display: { xs: "none", lg: "flex" },
                transition: "color 0.1s ease-in",
                "&:hover": {
                  color: "white",
                },
                color: activeCategoryBtn === 1 ? "white" : "lightgray",
                letterSpacing: "1px",
              }}
            >
              TRENDING
            </Typography>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            disableRipple={true}
            onClick={() => {
              dispatch(setActiveCategoryBtn(2));
              dispatch(setCategory("top_rated"));
              dispatch(setPage(1));
              navigate(`/Zenix_Film/${type}/top_rated/page/1`);
            }}
            sx={{
              marginBottom: "10px",
              padding: { xs: "18px 0", sm: "8px 16px" },
            }}
          >
            <StarRateIcon
              sx={{
                color: activeCategoryBtn === 2 ? "rgb(172, 0, 0)" : "lightgray",
                marginRight: { xs: "18px 0", sm: "10px" },
              }}
            />
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: "14px",
                display: { xs: "none", lg: "flex" },
                transition: "color 0.1s ease-in",
                "&:hover": {
                  color: "white",
                },
                color: activeCategoryBtn === 2 ? "white" : "lightgray",

                letterSpacing: "1px",
              }}
            >
              TOP RATED
            </Typography>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            disableRipple={true}
            onClick={() => {
              dispatch(setActiveCategoryBtn(3));
              dispatch(setCategory("coming"));
              dispatch(setPage(1));
              navigate(`/Zenix_Film/${type}/coming/page/1`);
            }}
            sx={{
              marginBottom: "10px",
              padding: { xs: "8px 0", sm: "8px 16px" },
            }}
          >
            <EventIcon
              sx={{
                color: activeCategoryBtn === 3 ? "rgb(172, 0, 0)" : "lightgray",
                marginRight: { xs: "8px 0", sm: "10px" },
              }}
            />
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: "14px",
                display: { xs: "none", lg: "flex" },
                transition: "color 0.1s ease-in",
                "&:hover": {
                  color: "white",
                },
                color: activeCategoryBtn === 3 ? "white" : "lightgray",

                letterSpacing: "1px",
              }}
            >
              COMING SOON
            </Typography>
          </ListItemButton>
        </ListItem>
      </List>

      <Typography
        sx={{
          fontSize: "10px",
          padding: "40px 0 16px 20px",
          color: "gray",
          display: { xs: "none", lg: "flex" },
          letterSpacing: "8px",
        }}
      >
        OPTIONS
      </Typography>

      <List>
        <ListItem disablePadding>
          <ListItemButton
            sx={{
              marginBottom: "10px",
              padding: { xs: "18px 0", sm: "8px 16px" },
            }}
          >
            <SettingsIcon
              sx={{
                color: "lightgray",
                marginRight: { xs: "8px 0", sm: "10px" },
              }}
            />
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: "14px",
                display: { xs: "none", lg: "flex" },
                transition: "color 0.1s ease-in",
                "&:hover": {
                  color: "white",
                },
                color: "lightgray",
                letterSpacing: "1px",
              }}
            >
              SEETINGS
            </Typography>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          {isAuth ? (
            <ListItemButton
              sx={{
                marginBottom: "10px",
                padding: { xs: "0", sm: "8px 16px" },
              }}
            >
              <LogoutIcon
                sx={{
                  color: "lightgray",
                  marginRight: { xs: "0", sm: "10px" },
                  marginLeft: "2px",
                }}
              />
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "14px",
                  display: { xs: "none", lg: "flex" },
                  transition: "color 0.1s ease-in",
                  "&:hover": {
                    color: "white",
                  },
                  color: "lightgray",
                  letterSpacing: "1px",
                }}
              >
                LOG OUT
              </Typography>
            </ListItemButton>
          ) : null}
        </ListItem>
      </List>
    </Box>
  );
};
