import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { fetchPopularFilms } from "../state/filmsSlice";

const Films = () => {
  const dispatch = useAppDispatch();
  const films = useAppSelector((state) => state.films);
  useEffect(() => {
    dispatch(fetchPopularFilms());
    console.log(films);
  }, []);
  return <div></div>;
};

export default Films;
