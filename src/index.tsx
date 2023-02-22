import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Weather from "./pages/weather/wather";
import Gallery from "./pages/gallery/gallery";

import "./index.css";
import App from "./App";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} element={<Weather />} />,
      <Route path="gallery" element={<Gallery />} />
    </Route>,
  ),
);

const root = ReactDOM.createRoot(document.getElementById("root") as Element);
root.render(<RouterProvider router={router} />);
