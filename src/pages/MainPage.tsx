import { useContext, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { fetchPopularFilms } from "../state/filmsSlice";
import FilmCard from "../components/FilmCard/FilmCard";
import MainFilmCard from "../components/MainFilmCard/MainFilmCard";
import { Context } from "../context/context";

const MainPage = () => {
  const isAuth = useContext(Context);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPopularFilms());
  }, []);

  const films = useAppSelector((state) => state.films.filmsList);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        rowGap: "20px",
        columnGap: "20px",
        padding: "0",
      }}
    >
      {films[0] ? <MainFilmCard film={films[0]} /> : null}
      {films.slice(1, films.length).map((film) => {
        return <FilmCard key={film.id} film={film} />;
      })}
    </div>
  );
};

export default MainPage;
