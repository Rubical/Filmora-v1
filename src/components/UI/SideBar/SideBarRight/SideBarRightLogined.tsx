import * as React from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import SideBarFilmCard from "../../Cards/FavourilteFilmCard/FavouriteFilmCard";
import ShowMoreBtn from "../../Button/ShowMoreBtn";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import StarsIcon from "@mui/icons-material/Stars";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import Typography from "@mui/material/Typography";
import { setCategory, setType } from "../../../../state/categorySlice";
import { changeFilmListPage } from "../../../../state/filmListSlice";
import {
  setActiveCategoryBtn,
  setActiveTypeBtn,
} from "../../../../state/activeBtnsSlice";
import { hideFavFilmsCards } from "../../../../state/favFilmsCardsShow";
import { useNavigate } from "react-router-dom";

export default function SideBarRightLogined() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const favouriteFilms = useAppSelector((state) => state.favouriteFilms);
  const filmIsLoading = useAppSelector((state) => state.film.loading);
  const film = useAppSelector((state) => state.film.film);
  const favFilmsCardsShow = useAppSelector((state) => state.favFilmsCardsShow);

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";

  const mobileMenuId = "primary-search-account-menu-mobile";

  const openFavPage = () => {
    dispatch(setType("movie"));
    dispatch(setCategory("popular"));
    dispatch(changeFilmListPage(1));
    dispatch(setActiveTypeBtn(1));
    dispatch(setActiveCategoryBtn(1));
    dispatch(hideFavFilmsCards());
    navigate("/Zenix_Film/favourite");
  };

  const renderMobileMenu = (
    <Menu
      sx={{
        "& .MuiPaper-root": {
          backgroundColor: "rgb(20, 20, 20)",
          position: "relative",
          zIndex: "2",
          width: "300px",
        },
      }}
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem
        onClick={openFavPage}
        sx={{
          color: "white",
          "&:hover": {
            backgroundColor: "rgb(15,15,15)",
          },
        }}
      >
        <IconButton size="medium" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={0} color="error">
            <StarsIcon />
          </Badge>
        </IconButton>
        <p>Favourite</p>
      </MenuItem>
      <MenuItem
        sx={{
          color: "white",
          "&:hover": {
            backgroundColor: "rgb(15,15,15)",
          },
        }}
      >
        <IconButton
          size="medium"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={0} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem
        sx={{
          color: "white",
          "&:hover": {
            backgroundColor: "rgb(15,15,15)",
          },
        }}
      >
        <IconButton
          size="medium"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box
      sx={{
        display: "flex",
        width: { xs: "50px", sm: "80px", md: "100px", lg: "200px" },
        flexDirection: "column",
        alignItems: "center",
        color: "lightgray",
        flexShrink: "0",
      }}
      role="presentation"
    >
      <Box
        sx={{
          position: "relative",
          zIndex: "2",
          display: {
            xs: "none",
            lg: "flex",
          },
          justifyContent: "center",
          paddingTop: "13px",
        }}
      >
        <IconButton
          onClick={openFavPage}
          sx={{ color: "lightgray" }}
          size="large"
          aria-label="show 0 new mails"
          color="inherit"
        >
          <Badge badgeContent={0} color="error">
            <StarsIcon />
          </Badge>
        </IconButton>
        <IconButton
          sx={{ color: "lightgray" }}
          size="large"
          aria-label="show 0 new notifications"
          color="inherit"
        >
          <Badge badgeContent={0} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton
          sx={{ color: "lightgray" }}
          size="large"
          edge="end"
          aria-label="account of current user"
          aria-controls={menuId}
          aria-haspopup="true"
        >
          <AccountCircle />
        </IconButton>
      </Box>
      <Box sx={{ display: { md: "flex", lg: "none" } }}>
        <IconButton
          sx={{ color: "lightgray", padding: " 24px 0" }}
          size="large"
          aria-label="show more"
          aria-controls={mobileMenuId}
          aria-haspopup="true"
          onClick={handleMobileMenuOpen}
        >
          <MoreIcon />
        </IconButton>
      </Box>
      {renderMobileMenu}
      <Box
        sx={{
          display: {
            xs: "none",
            lg: "flex",
          },
          flexDirection: "column",
          alignItems: "center",
          marginTop: "40px",
        }}
      >
        {favFilmsCardsShow ? (
          favouriteFilms.length ? (
            <>
              <Typography
                sx={{
                  width: "150px",
                  color: "white",
                  marginBottom: "20px",
                  fontWeight: "600",
                }}
                component="div"
                variant="h5"
              >
                Favourite
              </Typography>
              {favouriteFilms.slice(0, 3).map((el) => (
                <SideBarFilmCard
                  key={el.film.id}
                  film={el.film}
                  filmType={el.type}
                />
              ))}
              {favouriteFilms.length > 3 ? <ShowMoreBtn /> : ""}
            </>
          ) : (
            ""
          )
        ) : (
          ""
        )}
      </Box>
    </Box>
  );
}
