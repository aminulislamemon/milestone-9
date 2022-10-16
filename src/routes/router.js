import { createBrowserRouter } from "react-router-dom";
import { Blogs } from "../components/Blogs";
import { ErrorPage } from "../components/ErrorPage";
import { Home } from "../components/Home";
import { Quiz } from "../components/Quiz";
import { Statistics } from "../components/Statistics";
import Root from "../layouts/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "statistics",
        element: <Statistics />,
      },
      {
        path: "blog",
        element: <Blogs />,
      },
      {
        path: "topic",
        element: <Home />,
      },
      {
        path: "topic/:id",
        element: <Quiz />,
        loader: ({ params }) =>{

            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
        }
      },
    ],
  },
]);
