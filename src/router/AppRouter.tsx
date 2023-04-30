import { FC, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { publicRoutes, privateRoutes } from "./routes";

const AppRouter: FC = () => {
  const { isLogined } = useAuth();

  return isLogined ? (
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
