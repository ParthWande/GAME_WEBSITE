import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Layout from "../Pages/Layout";
import ErrorPage from "../Pages/ErrorPage";
import GameDetail from "../Pages/GameDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "games/:slug", element: <GameDetail /> },
    ],
  },
]);

export default router;
