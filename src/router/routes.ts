import React from "react";
import FilmPage from "../screens/film/FilmPage";
import MainPage from "../screens/main/MainPage";
import ErrorPage from "../screens/error/ErrorPage";
import FavouritePage from "../screens/favourite/FavouritePage";
import SearchedFilmsPage from "../screens/searchedFilms/SearchedFilmsPage";
import SignInPage from "../screens/signin/SignInPage";

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
  { path: "/Zenix_Film/login", element: SignInPage },
  {
    path: "/Zenix_Film/searched/:queryParam/:page/:num",
    element: SearchedFilmsPage,
  },
];
