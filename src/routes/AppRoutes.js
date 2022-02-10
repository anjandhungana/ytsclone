import { Routes, Route } from "react-router-dom";

import { ROUTES } from "./routes";

export const AppRoutes = () => {
  return (
    <Routes>
      {ROUTES.map((route, key) => {
        return <Route path={route.path} element={route.element} exact={route.exact} key = {key} />;
      })}
    </Routes>
  );
};
