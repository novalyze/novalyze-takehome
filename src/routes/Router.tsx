import React, { Suspense, lazy } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { PrivateRoute } from "./PrivateRoute";
import { routes } from "../constant/routes";
import Header from "../components/Header";
import PageLoader from "../components/PageLoader";
import LoadingSpinner from "../components/LoadingSpinner";

// Lazy load pages for better performance
const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Header />
      <PageLoader />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path={routes.home} element={<Home />} />
          </Route>
          <Route path={routes.login} element={<Login />} />
          <Route path={routes.register} element={<Register />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
