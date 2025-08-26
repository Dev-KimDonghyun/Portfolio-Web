import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import JpHome from "./Pages/JpHome";
import KrHome from "./Pages/KrHome";
import NotFound from "./Pages/NotFound";
import "./style/index.css";

const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/jp" replace /> },
  { path: "/jp", children: [{ index: true, element: <JpHome /> }] },
  { path: "/kr", children: [{ index: true, element: <KrHome /> }] },
  { path: "*", element: <NotFound /> },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
);
