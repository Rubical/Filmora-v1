import React, { FC, useEffect } from "react";
import { useAppSelector } from "../../hooks/useTypedSelector";
import FilmCard from "../../components/FilmCard/FilmCard";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const FavouritePage: FC = () => {
  const favouriteFilms = useAppSelector((state) => state.favouriteFilms);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          rowGap: "20px",
          columnGap: "20px",
          marginTop: "120px",
          width: "100%",
        }}
      >
        {favouriteFilms.length ? (
          favouriteFilms.map((film) => {
            return (
              <FilmCard
                key={film.film.id}
                film={film.film}
                filmType={film.type}
              />
            );
          })
        ) : (
          <Typography
            sx={{
              color: "white",
              marginTop: "50px",
              fontSize: "30px",
              fontWeight: "600",
              textAlign: "center",
              width: "100%",
            }}
          >
            No films found
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default FavouritePage;
