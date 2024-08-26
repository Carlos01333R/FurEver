import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Match from "./page/match.jsx";
import Dog from "./page/Dog.jsx";
import Cat from "./page/Cat.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/match",
    element: <Match />,
  },
  {
    path: "/Dog",
    element: <Dog />,
  },
  {
    path: "/Cat",
    element: <Cat />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </StrictMode>
);
