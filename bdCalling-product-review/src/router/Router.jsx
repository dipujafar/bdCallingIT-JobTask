import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import SignUpMain from "../authentication/signup/SignUpMain";
import Login from "../authentication/login/Login";
import Products from "../pages/products/Products";
import ProductDetails from "../pages/products/ProductDetails";
import ErrorPage from "../shaerd/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "products",
        element: <Products></Products>,
      },
      {
        path: "product/:id",
        element: <ProductDetails></ProductDetails>,
      },
    ],
  },
  {
    path: "/signup",
    element: <SignUpMain></SignUpMain>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);

export default router;
