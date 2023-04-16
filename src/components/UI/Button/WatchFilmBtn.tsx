import { Button } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { hideFavFilmsCards } from "../../../state/favFilmsCardsShow";
import { useAppDispatch } from "../../../hooks/reduxHooks";

const WatchFilmBtn = () => {
  const dispatch = useAppDispatch();
  return (
    <Button
      onClick={() => {
        dispatch(hideFavFilmsCards());
      }}
      sx={{
        width: "160px",
        padding: "11px 0",
        backgroundColor: "rgb(172,0,0)",
        borderRadius: "25px",
        textTransform: "none",
        fontWeight: "600",
        marginTop: "20px",
        "&:hover": {
          backgroundColor: "rgb(142,0,0)",
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
