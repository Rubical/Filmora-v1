import React, { FC, useEffect } from "react";
import { useAppSelector } from "../../hooks/reduxHooks";
import FilmCard from "../../components/UI/Cards/FilmCard/FilmCard";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Favourite: FC = () => {
  const favouriteFilms = useAppSelector((state) => state.favouriteFilms);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        rowGap: "20px",
        columnGap: "20px",
        marginTop: "120px",
        justifyContent: "center",
      }}
    >
      {favouriteFilms.length ? (
        favouriteFilms.map((film) => {
          return <FilmCard key={film.id} film={film} />;
        })
      ) : (
        <Typography
          sx={{
            color: "white",
            marginTop: "50px",
            fontSize: "30px",
            fontWeight: "600",
          }}
        >
          {" "}
          No films found
        </Typography>
      )}
    </Box>
  );
};

export default Favourite;
