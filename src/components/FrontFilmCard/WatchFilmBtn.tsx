import { Button } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { hideFavFilmsCards } from "../../store/favFilmCardsShow.slice";
import { useAppDispatch } from "../../hooks/useTypedSelector";

const WatchFilmBtn = () => {
  const dispatch = useAppDispatch();
  return (
    <Button
      onClick={() => {
        dispatch(hideFavFilmsCards());
      }}
      sx={{
        width: { xs: "120px", sm: "160px" },
        padding: { xs: "6px 8px", sm: "11px 0" },
        backgroundColor: "rgb(172,0,0)",
        borderRadius: "25px",
        textTransform: "none",
        fontWeight: "600",
        fontSize: { xs: "13px", sm: "15px" },
        marginTop: { xs: "10px", sm: "20px" },
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
