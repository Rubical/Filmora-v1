import { Button } from "@mui/material";

import PlayCircleIcon from "@mui/icons-material/PlayCircle";

const WatchFilmBtn = () => {
  return (
    <Button
      sx={{
        width: "160px",
        padding: "11px 0",
        backgroundColor: "rgb(172,0,0)",
        borderRadius: "25px",

        textTransform: "none",
        fontWeight: "600",
        "&:hover": {
          backgroundColor: "rgb(152,0,0)",
        },
        marginBottom: { xs: "10px", sm: "0" },
      }}
      variant="contained"
      endIcon={<PlayCircleIcon />}
    >
      Watch
    </Button>
  );
};

export default WatchFilmBtn;
