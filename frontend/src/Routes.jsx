import { createBrowserRouter } from "react-router-dom";

import { Dashboard } from "./pages/Dashboard";
import { ErrorPage } from "./pages/ErrorPage";
import { SignInPage } from "./pages/SignIn";
import { Home } from "./pages/Home";
import App from "./App";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/signin", element: <SignInPage /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);
