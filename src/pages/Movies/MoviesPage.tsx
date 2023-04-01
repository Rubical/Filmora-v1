import { useContext, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { fetchFilms } from "../../state/filmListSlice";
import FilmCard from "../../components/UI/Cards/FilmCard/FilmCard";
import MainFilmCard from "../../components/UI/Cards/MainFilmCard/MainFilmCard";
import { Context } from "../../context/context";
import Loader from "../../components/UI/Loader/Loader";
import PagePagination from "../../components/UI/Pagination/Paginaton";

const MoviesPage = () => {
  const isAuth = useContext(Context);
  const dispatch = useAppDispatch();

  const page = useAppSelector((state) => state.pagination);
  const type = useAppSelector((state) => state.category.type);
  const category = useAppSelector((state) => state.category.category);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchFilms());
  }, [page, type, category]);

  const films = useAppSelector((state) => state.films.filmsList);
  const loading = useAppSelector((state) => state.films.loading);

  return loading ? (
    <Loader />
  ) : (
    <>
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
        {films.slice(1, films.length - 1).map((film) => {
          return <FilmCard key={film.id} film={film} />;
        })}
        <PagePagination />
      </div>
    </>
  );
};

export default MoviesPage;
