import { useContext, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { fetchPopularFilms } from "../state/filmsSlice";
import FilmCard from "../components/FilmCard/FilmCard";
import MainFilmCard from "../components/FilmCard/MainCard";
import { Context } from "../context/context";

const Films = () => {
  const isAuth = useContext(Context);
  const films = useAppSelector((state) => state.films.filmsList);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPopularFilms());
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        rowGap: "20px",
        columnGap: "20px",
        padding: isAuth ? "0 0 0 0" : " 0 20px 0 20px",
      }}
    >
      {films.map((film, index) => {
        return index === 0 ? (
          <MainFilmCard film={films[index]} />
        ) : (
          <FilmCard key={film.id} film={film} />
        );
      })}
    </div>
  );
};

export default Films;
