import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import News from "../pages/News/News";
import Category from "../pages/News/Category";
import Login from "../pages/login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import TermsAndCondition from "../component/TermsAndCondition";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/",
            element: <Category />,
            loader: () => fetch("http://localhost:3000/categories/0"),
          },
          {
            path: "/category/:id",
            element: <Category />,
            loader: ({ params }) =>
              fetch(`http://localhost:3000/categories/${params.id}`),
          },
        ],
      },
      {
        path: "news/:id",
        element: (
          <PrivateRoute>
            <News />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/news/${params.id}`),
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: 'terms',
    element: <TermsAndCondition/>
  }
]);

export default route;
