import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFilmList } from "../../hooks/useFilmList";
import { useFilmFilter } from "../../hooks/useFilmFilter";
import { useActions } from "../../hooks/useActions";
import { useAuth } from "../../hooks/useAuth";
import FilmCard from "../../components/FilmCard/FilmCard";
import FrontFilmCard from "../../components/FrontFilmCard/FrontFilmCard";
import Loader from "../../components/UI/Loader/Loader";
import PagePagination from "../../components/UI/Pagination/Pagination";
import cl from "./MainPage.module.css";
import SideBarLeft from "../../components/UI/SideBar/SideBarLeft/SideBarLeft";
import SideBarRight from "../../components/UI/SideBar/SideBarRight/SideBarRight";
import SignInBtn from "../../components/UI/Button/SignInBtn";
import NavBar from "../../components/UI/NavBar/NavBar";

const MainPage = () => {
  const { isLogined } = useAuth();
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

  return (
    <div className={cl.grid}>
      <SideBarLeft />
      <div className={cl.main}>
        {loading ? (
          <Loader />
        ) : (
          <>
            <NavBar />
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
        )}
      </div>
      {isLogined ? <SideBarRight /> : <SignInBtn />}
    </div>
  );
};

export default MainPage;
