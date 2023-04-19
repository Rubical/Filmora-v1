import Card from "@mui/joy/Card";
import Box from "@mui/joy/Box";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { IFilmsList } from "../../../../state/filmListSlice";
import { getGenreByID } from "../../../../utils/getGenreById";
import { FC } from "react";
import cl from "./MainFilmCard.module.css";
import { useNavigate } from "react-router-dom";
import WatchFilmBtn from "../../Button/WatchFilmBtn";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import img from "./img.jpg";
import StarIcon from "@mui/icons-material/Star";
import { hideFavFilmsCards } from "../../../../state/favFilmsCardsShow";

interface IFilm {
  film: IFilmsList;
}

const MainFilmCard: FC<IFilm> = ({ film }) => {
  const type = useAppSelector((state) => state.category.type);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { id, original_title, backdrop_path, genre_ids, name, vote_average } =
    film;

  return (
    <Card
      sx={{
        height: { lg: "500px", sm: "400px", md: "450px", xs: "350px" },
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
          height: { lg: "600px", sm: "320px", md: "450px", xs: "220px" },
          display: "flex",
          alignSelf: "flex-end",
          borderRadius: "0px",
          position: "absolute",
        }}
      >
        <img
          style={{
            borderRadius: "0px",
          }}
          src={
            backdrop_path
              ? `https://www.themoviedb.org/t/p/original/${backdrop_path}`
              : img
          }
          alt="image"
        />
        <Box
          className={`${cl.fromBlack} ${cl.bgGradientToRight}`}
          sx={{ borderRadius: "0px", width: { xs: "20%", md: "50%" } }}
        ></Box>
        <Box
          className={`${cl.fromBlack} ${cl.bgGradientToTop}`}
          sx={{
            borderRadius: "0px",
            width: "100%",
            height: { xs: "15vh", md: "30vh" },
            bottom: "0px",
          }}
        ></Box>
        <Box
          className={`${cl.fromBlack} ${cl.bgGradientToLeft}`}
          sx={{
            width: { xs: "40%", md: "75%" },
            right: "0px",
          }}
        ></Box>
      </CardCover>
      <CardContent
        sx={{
          justifyContent: "center",
          ml: "15px",
          flexDirection: "column",
          marginTop: { xs: "20px", sm: "0px" },
        }}
      >
        <Typography
          level="h2"
          sx={{
            fontSize: { lg: "50px", md: "40px", sm: "30px", xs: "25px" },
            maxWidth: { xs: "200px", sm: "60%" },
          }}
          textColor="#fff"
          mb={1}
        >
          {original_title || name || "No name"}
        </Typography>
        {vote_average ? (
          <Box
            sx={{
              display: "flex",
              marginBottom: { xs: "10px", sm: "15px" },
            }}
          >
            <StarIcon
              sx={{
                color: "rgb(230, 230, 0)",
                width: { xs: "20px", md: "30px" },
              }}
            ></StarIcon>
            <Box
              sx={{
                marginLeft: "5px",
                display: "flex",
                columnGap: "7px",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "13px", sm: "16px" },
                  paddingTop: { xs: "2px", sm: "0" },
                  color: "white",
                  fontWeight: "600",
                }}
              >
                {`${vote_average?.toFixed(1)} `}
              </Typography>
            </Box>
          </Box>
        ) : (
          ""
        )}
        {genre_ids ? (
          <Box sx={{ display: "flex", columnGap: "15px" }}>
            {getGenreByID(genre_ids)?.map((el) => {
              return (
                <Typography
                  key={el}
                  sx={{
                    justifyContent: "center",
                    color: "white",
                    backgroundColor: "rgba(53, 51, 56, 0.7)",
                    padding: { xs: "3px 10px", sm: "5px 10px" },
                    borderRadius: "15px",
                    fontSize: { xs: "13px", sm: "16px" },
                  }}
                >
                  {el}
                </Typography>
              );
            })}
          </Box>
        ) : (
          ""
        )}
        <Box
          onClick={() => {
            dispatch(hideFavFilmsCards());
            navigate(`/Zenix_Film/view/${type}/${id}`);
          }}
        >
          {" "}
          <WatchFilmBtn />
        </Box>
      </CardContent>
    </Card>
  );
};

export default MainFilmCard;
