import * as React from "react";
import { useContext } from "react";
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
import cl from "./SideBarLeft.module.css";
import { NavLink } from "react-router-dom";

export const SideBarLeft: React.FC = () => {
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
    <>
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
        className={cl.sideBarLeft}
      >
        <NavLink to="/Zenix_Film/movies/trending">
          <Box
            sx={{ display: { xs: "none", lg: "flex", padding: "20px 10px" } }}
          >
            <img
              src={logo}
              alt="logo"
              style={{ width: "130px", height: "50px" }}
            />
          </Box>
        </NavLink>
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
              display: { xs: "block", lg: "none" },
              "& .MuiPaper-root": {
                backgroundColor: "rgb(20, 20, 20)",
              },
            }}
          >
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography sx={{ color: "white" }} textAlign="center">
                Movies
              </Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography sx={{ color: "white" }} textAlign="center">
                Sports
              </Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography sx={{ color: "white" }} textAlign="center">
                TV series
              </Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography sx={{ color: "white" }} textAlign="center">
                Kids
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
          <Link sx={{ marginLeft: "-12px" }} className={cl.navLinkActive}>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  marginBottom: "10px",
                  padding: { xs: "8px 0", sm: "8px 16px" },
                }}
              >
                <WhatshotIcon
                  sx={{
                    color: "white",
                    marginRight: { xs: "0", sm: "10px" },
                  }}
                />
                <Typography
                  sx={{
                    fontWeight: "600",
                    fontSize: "14px",
                    display: { xs: "none", lg: "flex" },
                    color: "white",
                    letterSpacing: "1px",
                  }}
                >
                  TRENDING
                </Typography>
              </ListItemButton>
            </ListItem>
          </Link>
          <ListItem disablePadding>
            <ListItemButton
              sx={{
                marginBottom: "10px",
                padding: { xs: "18px 0", sm: "8px 16px" },
              }}
            >
              <StarRateIcon
                sx={{
                  color: "white",
                  marginRight: { xs: "18px 0", sm: "10px" },
                }}
              />
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "14px",
                  display: { xs: "none", lg: "flex" },
                  color: "white",
                  letterSpacing: "1px",
                }}
              >
                TOP RATED
              </Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              sx={{
                marginBottom: "10px",
                padding: { xs: "8px 0", sm: "8px 16px" },
              }}
            >
              <EventIcon
                sx={{
                  color: "white",
                  marginRight: { xs: "8px 0", sm: "10px" },
                }}
              />
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "14px",
                  display: { xs: "none", lg: "flex" },
                  color: "white",
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
                  color: "white",
                  marginRight: { xs: "8px 0", sm: "10px" },
                }}
              />
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "14px",
                  display: { xs: "none", lg: "flex" },
                  color: "white",
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
                    color: "white",
                    marginRight: { xs: "0", sm: "10px" },
                    marginLeft: "2px",
                  }}
                />
                <Typography
                  sx={{
                    fontWeight: "600",
                    fontSize: "14px",
                    display: { xs: "none", lg: "flex" },
                    color: "white",
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
      <div
        className={`${cl.fromBlack} ${cl.bgGradientToRight}`}
        style={{ borderRadius: "0px", width: "20%" }}
      ></div>
    </>
  );
};
