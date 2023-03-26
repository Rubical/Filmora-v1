import { FC, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { Context } from "../context/context";
import { publicRoutes, privateRoutes } from "./routes";

const AppRouter: FC = () => {
  const isAuth = useContext(Context);
  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => {
        return (
          <Route
            key={route.path}
            path={route.path}
            element={<route.element />}
          />
        );
      })}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => {
        return (
          <Route
            key={route.path}
            path={route.path}
            element={<route.element />}
          />
        );
      })}
    </Routes>
  );
};

export default AppRouter;
