import React, { FC, useContext, useEffect } from "react";
import { useFavouriteFilms } from "../../hooks/useFavouriteFilms";
import { Context } from "../../context/context";
import SideBarLeft from "../../components/UI/SideBar/SideBarLeft/SideBarLeft";
import NavBar from "../../components/UI/NavBar/NavBar";
import SideBarRight from "../../components/UI/SideBar/SideBarRight/SideBarRight";
import SignInBtn from "../../components/UI/Button/SignInBtn";
import FilmCard from "../../components/FilmCard/FilmCard";
import cl from "./FavouritePage.module.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const FavouritePage: FC = () => {
  const isAuth = useContext(Context);
  const favouriteFilms = useFavouriteFilms();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={cl.grid}>
      <SideBarLeft />
      <div className={cl.main}>
        <NavBar />
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
      </div>
      {isAuth ? <SideBarRight /> : <SignInBtn />}
    </div>
  );
};

export default FavouritePage;
