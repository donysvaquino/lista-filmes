import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Filme from "./pages/Filme.jsx";
import Error404 from "./pages/Error404.jsx";
import Lista from "./pages/Lista.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/filmes/:filmeId",
    element: <Filme />,
  },
  {
    path: "/lista",
    element: <Lista />,
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
