import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import EventIcon from "@mui/icons-material/Event";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import Typography from "@mui/material/Typography";
import logo from "./logo.png";

export default function TemporaryDrawer() {
  return (
    <Box
      sx={{
        width: 250,
        color: "lightgray",
        paddingLeft: "20px",
        backgroundColor: "rgb(40, 40, 40)",
      }}
      role="presentation"
    >
      <Box sx={{ display: { xs: "none", md: "flex", padding: "20px 10px" } }}>
        <img src={logo} alt="logo" style={{ width: "130px", height: "50px" }} />
      </Box>
      <Typography
        sx={{ fontSize: "10px", padding: "40px 0 16px 16px", color: "gray" }}
      >
        M E N U
      </Typography>

      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <DonutSmallIcon sx={{ color: "lightgray" }} />
            </ListItemIcon>
            <ListItemText primary="Browse" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <VideoLibraryIcon sx={{ color: "lightgray" }} />
            </ListItemIcon>
            <ListItemText primary="Watchlist" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <EventIcon sx={{ color: "lightgray" }} />
            </ListItemIcon>
            <ListItemText primary="Coming soon" />
          </ListItemButton>
        </ListItem>
      </List>

      <Typography
        sx={{ fontSize: "10px", padding: "40px 0 16px 16px", color: "gray" }}
      >
        O P T I O N S
      </Typography>

      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <SettingsIcon sx={{ color: "lightgray" }} />
            </ListItemIcon>
            <ListItemText primary="Seetings" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LogoutIcon sx={{ color: "lightgray" }} />
            </ListItemIcon>
            <ListItemText primary="Log out" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}
