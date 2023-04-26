import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFilmList } from "../../hooks/useFilmList";
import { useFilmFilter } from "../../hooks/useFilmFilter";
import { useActions } from "../../hooks/useActions";
import FilmCard from "../../components/FilmCard/FilmCard";
import FrontFilmCard from "../../components/FrontFilmCard/FrontFilmCard";
import Loader from "../../components/UI/Loader/Loader";
import PagePagination from "../../components/UI/Pagination/Pagination";

const MainPage = () => {
  const navigate = useNavigate();
  const { page, loading, filmsList } = useFilmList();
  const { type, category } = useFilmFilter();
  const { fetchFilms, changeFilmListPage } = useActions();

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchFilms();
  }, [page, type, category]);

  const changePage = (page: number) => {
    changeFilmListPage(page);
    navigate(`/Zenix_Film/${type}/${category}/page/${page}`);
  };

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
        {filmsList[0] ? <FrontFilmCard film={filmsList[0]} /> : null}
        {filmsList.slice(1, filmsList.length - 1).map((film) => {
          return <FilmCard key={film.id} film={film} />;
        })}
        <PagePagination
          currentPage={page}
          totalPages={100}
          changePage={changePage}
        />
      </div>
    </>
  );
};

export default MainPage;
