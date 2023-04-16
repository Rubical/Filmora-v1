import React from "react";
import FilmPage from "../pages/Film/FilmPage";
import MainPage from "../pages/Main/MainPage";
import ErrorPage from "../pages/Error/ErrorPage";
import FavouritePage from "../pages/Favourite/FavouritePage";
import SearchedPage from "../pages/Searched/SearchedPage";

interface Routes {
  path: string;
  element: React.FC;
}

export const privateRoutes: Routes[] = [
  {
    path: "/Zenix_Film/:type?/:category?/:page?/:num?",
    element: MainPage,
  },
  {
    path: "/Zenix_Film/view/:type/:id",
    element: FilmPage,
  },
  { path: "/*", element: ErrorPage },
  { path: "/Zenix_Film/favourite", element: FavouritePage },
  {
    path: "/Zenix_Film/searched/:queryParam/:page/:num",
    element: SearchedPage,
  },
];
export const publicRoutes: Routes[] = [
  {
    path: "/Zenix_Film/:type?/:category?/:page?/:num?",
    element: MainPage,
  },
  {
    path: "/Zenix_Film/view/:type/:id",
    element: FilmPage,
  },
  { path: "/*", element: ErrorPage },
];
