import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog/Blog";
import Categories from "../Components/Categories/Categories";
import CouresDetails from "../Components/CourseDetails/CouresDetails";
import Courses from "../Components/Courses/Courses";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Faq from "../Components/Faq/Faq";
import Footer from "../Components/Footer/Footer";
import Home from "../Components/Home/Home";
import Main from "../Components/Main/Main";

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
        path: "/category/:id",
        element: <Categories></Categories>,
      },
      {
        path: "/details/:id",
        element: <CouresDetails></CouresDetails>,
      },
    ],
  },
]);

export default router;
