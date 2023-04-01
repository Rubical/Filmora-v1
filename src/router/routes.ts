import React from "react";
import FilmPage from "../pages/Film/FilmPage";
import MoviesPage from "../pages/Movies/MoviesPage";
import ErrorPage from "../pages/Error/ErrorPage";

interface Routes {
  path: string;
  element: React.FC;
}

export const privateRoutes: Routes[] = [
  {
    path: "/Zenix_Film/:type?/:page?/:num?",
    element: MoviesPage,
  },
  {
    path: "/Zenix_Film/view/:type/:id",
    element: FilmPage,
  },
  { path: "/*", element: ErrorPage },
];
export const publicRoutes: Routes[] = [
  {
    path: "/Zenix_Film/:type?/:page?/:num?",
    element: MoviesPage,
  },
  {
    path: "/Zenix_Film/view/:type/:id",
    element: FilmPage,
  },
  { path: "/*", element: ErrorPage },
];
