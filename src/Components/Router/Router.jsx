import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout";
import NotFound from "../Error/NotFound";
import Home from "../Home/Home";
import About from "../About/About";
import Order from "../Orders/Orders";
import GrnadPa from "../GrendPa/GrnadPa";

const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        loader: ()=>{
          return(
            fetch("tshirt.json")
          )
        },
        element: <Home></Home>,
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
        path: "/grandpa",
        element: <GrnadPa></GrnadPa>,
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
]);

export default route;
