import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout";
import NotFound from "../Error/NotFound";
import Home from "../Home/Home";
import About from "../About/About";
import Products from "../Products/Products";
import Order from "../Orders/Orders";

const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/product",
        element: <Products></Products>,
      },
      {
        path: "/order",
        element: <Order></Order>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
]);

export default route;
