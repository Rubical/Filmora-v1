import * as React from "react";
import { useContext } from "react";
import { Context } from "../../../../context/context";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import SideBarFilmCard from "../../Cards/FavouriteFilmCard";
import { useAppSelector } from "../../../../hooks/reduxHooks";

export default function SideBarRightLogined() {
  const favouriteFilms = useAppSelector((state) => state.favouriteFilms);

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

  const renderMobileMenu = (
    <Menu
      sx={{
        "& .MuiPaper-root": {
          backgroundColor: "rgb(20, 20, 20)",
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
      <MenuItem sx={{ color: "white" }}>
        <IconButton size="medium" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={0} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem sx={{ color: "white" }}>
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
      <MenuItem sx={{ color: "white" }}>
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
        flexDirection: "column",
        alignItems: "center",
        color: "lightgray",
        backgroundColor: "rgb(20,20,20)",
      }}
      role="presentation"
    >
      <Box
        sx={{
          display: {
            xs: "none",
            lg: "flex",
            justifyContent: "center",
            paddingTop: "13px",
          },
        }}
      >
        <IconButton
          sx={{ color: "white" }}
          size="large"
          aria-label="show 0 new mails"
          color="inherit"
        >
          <Badge badgeContent={0} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <IconButton
          sx={{ color: "white" }}
          size="large"
          aria-label="show 0 new notifications"
          color="inherit"
        >
          <Badge badgeContent={0} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton
          sx={{ color: "white" }}
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
          sx={{ color: "white", padding: " 15px 0" }}
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
      <Box>
        {favouriteFilms
          ? favouriteFilms.map((el) => <SideBarFilmCard id={el} />)
          : ""}
      </Box>
    </Box>
  );
}
