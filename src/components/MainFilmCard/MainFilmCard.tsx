import Card from "@mui/joy/Card";
import { Button } from "@mui/material";
import Box from "@mui/joy/Box";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { IFilmsList } from "../../state/filmListSlice";
import { getGenreByID } from "../../utils/getGenreById";
import { FC } from "react";
import cl from "./MainFilmCard.module.css";
import { NavLink } from "react-router-dom";

export interface IFilm {
  film: IFilmsList;
}

const MainFilmCard: FC<IFilm> = ({ film }) => {
  const {
    id,
    adult,
    original_title,
    backdrop_path,
    release_date,
    overview,
    vote_average,
    vote_count,
    genre_ids,
  } = film;

  return (
    <Card
      sx={{
        height: { lg: "400px", sm: "300px", md: "350px", xs: "250px" },
        width: "100%",
        marginTop: "0",
        background: "black",
        borderRadius: "0px",
        boxShadow: "none",
      }}
    >
      <CardCover
        sx={{
          right: "0px",
          top: "0px",
          left: "auto",
          width: "90%",
          maxWidth: "1200px",
          height: { lg: "700px", sm: "350px", md: "500px", xs: "250px" },
          display: "flex",
          alignSelf: "flex-end",
          borderRadius: "0px",
        }}
      >
        <img
          style={{
            objectFit: "fill",
            borderRadius: "0px",
          }}
          src={`https://www.themoviedb.org/t/p/original/${backdrop_path}`}
          alt="image"
        />
        <div
          className={`${cl.fromBlack} ${cl.bgGradientToRight}`}
          style={{ borderRadius: "0px", width: "50%" }}
        ></div>
        <div
          className={`${cl.fromBlack} ${cl.bgGradientToTop}`}
          style={{
            borderRadius: "0px",
            width: "100%",
            height: "30vh",
            bottom: "0px",
          }}
        ></div>
        <div
          className={`${cl.fromBlack} ${cl.bgGradientToLeft}`}
          style={{
            borderRadius: "0px",
            width: "75%",
            right: "0px",
          }}
        ></div>
      </CardCover>
      <CardContent
        sx={{
          justifyContent: "center",
          ml: "15px",
          flexDirection: "column",
          marginTop: { xs: "60px", sm: "0px" },
        }}
      >
        <Typography
          level="h2"
          sx={{
            fontSize: { md: "50px", xd: "30px", xs: "25px" },
            maxWidth: { xs: "200px", sm: "60%" },
          }}
          textColor="#fff"
          mb={1}
        >
          {original_title}
        </Typography>
        <Box sx={{ display: "flex", columnGap: "15px" }}>
          {getGenreByID(genre_ids)?.map((el) => {
            return (
              <Typography
                key={el}
                sx={{
                  justifyContent: "center",
                  color: "white",
                  backgroundColor: "rgba(53, 51, 56, 0.7)",
                  padding: "5px 10px",
                  borderRadius: "15px",
                  fontSize: { xs: "14px", sm: "16px" },
                }}
              >
                {el}
              </Typography>
            );
          })}
        </Box>
        <NavLink
          style={{ width: "160px", marginTop: "20px" }}
          to={`/Zenix_Film/view/film/${id}`}
        >
          <Button
            sx={{
              width: "160px",
              padding: "9px 0",
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
        </NavLink>
      </CardContent>
    </Card>
  );
};

export default MainFilmCard;
