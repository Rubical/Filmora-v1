import * as React from "react";
import { useContext } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import EventIcon from "@mui/icons-material/Event";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import logo from "./logo.png";
import { Context } from "../../../context/context";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function SideBarLeft() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const isAuth = useContext(Context);

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
        paddingLeft: "15px",
        backgroundColor: "rgb(33, 33, 33)",
        paddingRight: { md: "30px", sx: "10px" },
      }}
      role="presentation"
    >
      <Box sx={{ display: { xs: "none", md: "flex", padding: "20px 10px" } }}>
        <img src={logo} alt="logo" style={{ width: "130px", height: "50px" }} />
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "flex", md: "none" },
          paddingLeft: "3px",
          paddingTop: "12px",
          marginBottom: "40px",
        }}
      >
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
        >
          <MenuIcon sx={{ color: "white" }} />
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
            display: { xs: "block", md: "none" },
          }}
        >
          <MenuItem onClick={handleCloseNavMenu}>
            <Typography sx={{ color: "black" }} textAlign="center">
              Movies
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleCloseNavMenu}>
            <Typography textAlign="center">Sports</Typography>
          </MenuItem>
          <MenuItem onClick={handleCloseNavMenu}>
            <Typography textAlign="center">TV series</Typography>
          </MenuItem>
          <MenuItem onClick={handleCloseNavMenu}>
            <Typography textAlign="center">Kids</Typography>
          </MenuItem>
        </Menu>
      </Box>
      <Typography
        sx={{
          fontSize: "10px",
          padding: "40px 0 16px 16px",
          color: "gray",
          display: { xs: "none", md: "flex" },
        }}
      >
        M E N U
      </Typography>

      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ marginBottom: "10px" }}>
            <DonutSmallIcon sx={{ color: "lightgray", marginRight: "10px" }} />
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: "14px",
                display: { xs: "none", md: "flex" },
              }}
            >
              BROWSE
            </Typography>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ marginBottom: "10px" }}>
            <VideoLibraryIcon
              sx={{ color: "lightgray", marginRight: "10px" }}
            />
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: "14px",
                display: { xs: "none", md: "flex" },
              }}
            >
              WATCHLIST
            </Typography>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ marginBottom: "10px" }}>
            <EventIcon sx={{ color: "lightgray", marginRight: "10px" }} />
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: "14px",
                display: { xs: "none", md: "flex" },
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
          padding: "40px 0 16px 16px",
          color: "gray",
          display: { xs: "none", md: "flex" },
        }}
      >
        O P T I O N S
      </Typography>

      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ marginBottom: "10px" }}>
            <SettingsIcon sx={{ color: "lightgray", marginRight: "10px" }} />
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: "14px",
                display: { xs: "none", md: "flex" },
              }}
            >
              SEETINGS
            </Typography>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          {isAuth ? (
            <ListItemButton sx={{ marginBottom: "10px" }}>
              <LogoutIcon sx={{ color: "lightgray", marginRight: "10px" }} />
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "14px",
                  display: { xs: "none", md: "flex" },
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
}
