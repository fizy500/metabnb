import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import HeaderDesktop from "./Components/HeaderDesktop";
import PageToStay from "./Pages/PageToStay";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Place",
    element: <PageToStay />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HeaderDesktop />
    <RouterProvider router={router} />
  </React.StrictMode>
);
