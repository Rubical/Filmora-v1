import Card from "@mui/joy/Card";
import Box from "@mui/joy/Box";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { IFilmsList } from "../../../../state/filmListSlice";
import { getGenreByID } from "../../../../utils/getGenreById";
import { FC } from "react";
import cl from "./MainFilmCard.module.css";
import { NavLink } from "react-router-dom";
import WatchFilmBtn from "../../Button/WatchFilmBtn";
import { useAppSelector } from "../../../../hooks/reduxHooks";
import img from "./img.jpg";

export interface IFilm {
  film: IFilmsList;
}

const MainFilmCard: FC<IFilm> = ({ film }) => {
  const type = useAppSelector((state) => state.category.type);
  const { id, original_title, backdrop_path, genre_ids, first_air_date, name } =
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
          {original_title || name || "No name"}
        </Typography>
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
        ) : (
          ""
        )}

        <NavLink
          style={{ width: "160px", marginTop: "20px" }}
          to={`/Zenix_Film/view/film/${id}`}
        >
          <WatchFilmBtn />
        </NavLink>
      </CardContent>
    </Card>
  );
};

export default MainFilmCard;
