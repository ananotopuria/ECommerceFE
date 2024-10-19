import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "./homePage";
import About from "./aboutPage";
import Account from "./accountPage";
import Cart from "./cartPage";
import CheckOut from "./checkOutPage";
import Contact from "./contactPage";
import Login from "./loginPage";
import NotFound from "./notFoundPage";
import Detail from "./productDetailPage";
import SignUp from "./signUpPage";
import Wishlist from "./wishlistPage";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "account",
        element: <Account />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <CheckOut />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "notfound",
        element: <NotFound />,
      },
      {
        path: "productdetail",
        element: <Detail />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
    ],
  },
]);

export default router;
