import RedPage from "@/components/red-page";
import GreenPage from "@/components/green-page";
import BluePage from "@/components/blue-page";
import MainPage from "@/components/main-page";
import { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFoundPage from "@/components/not-found-page";

const Router = () => {
  const [router, setRouter] = useState<any>();

  useEffect(() => {
    if (router) return;

    const r = createBrowserRouter([
      {
        path: "/nextjs-react-router",
        element: <MainPage />,
        children: [
          {
            path: "red-page",
            element: <RedPage />,
          },
          {
            path: "blue-page",
            element: <BluePage />,
          },
          {
            path: "green-page",
            element: <GreenPage />,
          },
        ],
      },
      {
        path: "/*",
        element: <NotFoundPage />,
      }
    ]);

    setRouter(r);
  }, []);

  if (!router) return null;

  return <RouterProvider router={router} />;
};

export default Router;
