import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import JpHome from "./pages/JpHome";
import "./style/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <JpHome />
  </StrictMode>
);