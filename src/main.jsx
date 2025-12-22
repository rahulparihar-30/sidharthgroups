import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home.jsx";
import Construction from "./businesses/Construction.jsx";
import Pharma from "./businesses/Pharma.jsx";
import Agritech from "./businesses/Agritech.jsx";
import Films from "./businesses/Films.jsx";
import Franchise from "./businesses/Franchise.jsx";
import Finance from "./businesses/Finance.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "sid-construction",
        element: <Construction />,
      },
      {
        path: "franchise",
        element: <Franchise />,
      },
      {
        path: "pharma",
        element: <Pharma />,
      },
      {
        path: "agri",
        element: <Agritech />,
      },
      {
        path: "lalit-films",
        element: <Films />,
      },
      {
        path: "finance",
        element: <Finance />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
