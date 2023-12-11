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
            loader: () => fetch("https://the-news-dragon-server-1bqd2sont-ahsanulhoqueabir.vercel.app/categories/0"),
          },
          {
            path: "/category/:cat",
            element: <Category />,
            loader: ({ params }) =>
              fetch(`https://the-news-dragon-server-1bqd2sont-ahsanulhoqueabir.vercel.app/categories/${params.cat}`),
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
          fetch(`https://the-news-dragon-server-1bqd2sont-ahsanulhoqueabir.vercel.app/news/${params.id}`),
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
