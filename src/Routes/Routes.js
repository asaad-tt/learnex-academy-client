import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog/Blog";
import Category from "../Components/Category/Category";
import CheckOut from "../Components/CheckOut/CheckOut";
import CheckOutPage from "../Components/CheckOutPage/CheckOutPage";

import Courses from "../Components/Courses/Courses";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Faq from "../Components/Faq/Faq";
import Footer from "../Components/Footer/Footer";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Main from "../Components/Main/Main";
import Register from "../Components/Register/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/footer",
        element: <Footer></Footer>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
        loader: () => {
          return fetch("http://localhost:5000/course-awesome");
        },
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <CheckOut></CheckOut>
          </PrivateRoute>
        ),
      },
      {
        path: "/checkoutPage/:id",
        element: <CheckOutPage></CheckOutPage>,
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/category/${params.id}`);
        },
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/category/${params.id}`);
        },
      },
    ],
  },
]);

export default router;
