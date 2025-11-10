import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";

import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import Item from "./pages/Item.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Order from "./pages/Order.jsx";

const router = createBrowserRouter([
  {
    path: "/burger-tavern-react/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "menu", element: <Menu /> },
      { path: "item/:slug", element: <Item /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "order", element: <Order /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
