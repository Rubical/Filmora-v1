import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useFavouriteFilms } from "../../../../hooks/useFavouriteFilms";
import { useFavFilmCardsShow } from "../../../../hooks/useFavFilmCardsShow";
import { useActions } from "../../../../hooks/useActions";
import SideBarFilmCard from "../../../FavourilteFilmCard/FavouriteFilmCard";
import ShowMoreBtn from "./ShowMoreBtn";
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

export default function SideBarRight() {
  const navigate = useNavigate();
  const {
    setType,
    setCategory,
    changeFilmListPage,
    setActiveTypeBtn,
    setActiveCategoryBtn,
    hideFavFilmsCards,
  } = useActions();
  const favouriteFilms = useFavouriteFilms();
  const favFilmsCardsShow = useFavFilmCardsShow();

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
    setType("movie");
    setCategory("popular");
    changeFilmListPage(1);
    setActiveTypeBtn(1);
    setActiveCategoryBtn(1);
    hideFavFilmsCards();
    navigate("/Zenix_Film/favourite");
  };

  const renderMobileMenu = (
    <Menu
      sx={{
        "& .MuiPaper-root": {
          backgroundColor: "rgb(20, 20, 20)",
          position: "relative",
          zIndex: "5",
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
        position: "relative",
        zIndex: "5",
      }}
      role="presentation"
    >
      <Box
        sx={{
          position: "relative",
          zIndex: "5",
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
                  key={el.film.film.id}
                  film={el.film.film}
                  filmType={el.film.type}
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
