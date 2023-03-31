import React from "react";
import FilmPage from "../pages/FilmPage/FilmPage";
import Movies from "../pages/Movies/Movies";

interface Routes {
  path: string;
  element: React.FC;
}

export const privateRoutes: Routes[] = [
  {
    path: "/Zenix_Film/:page?/:num?",
    element: Movies,
  },
  {
    path: "/Zenix_Film/view/film/:id",
    element: FilmPage,
  },
];
export const publicRoutes: Routes[] = [
  {
    path: "/Zenix_Film",
    element: Movies,
  },
  {
    path: "/Zenix_Film/view/film/:id",
    element: FilmPage,
  },
];
