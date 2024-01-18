import React from "react";
import { Outlet } from "react-router-dom";
import Basket from "../components/Basket/Basket";
import Home from "../components/Home/Home";
import Menu from "../components/Menu/Menu";
import About from "../pages/About/About";
import Navbar from "./../components/Navbar/Navbar";
import Add from "../components/Add/Add";

export const routes = [
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/navbar",
        element: <Navbar />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/basket",
        element: <Basket />,
      },
      {
        path: "/add",
        element: <Add />,
      },
    ],
  },
];
