import RedPage from "@/components/red-page";
import GreenPage from "@/components/green-page";
import BluePage from "@/components/blue-page";
import MainPage from "@/components/main-page";
import { StrictMode, useEffect, useRef, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFoundPage from "@/components/not-found-page";

// declare module "@tanstack/react-router" {
//   interface Register {
//     router: typeof router;
//   }
// }

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainPage />,
//   },
//   {
//     path: "red-page",
//     element: <RedPage />,
//   },
//   {
//     path: "blue-page",
//     element: <BluePage />,
//   },
// ]);

const Router = () => {
  const [router, setRouter] = useState<any>();

  useEffect(() => {
    if (router) return;

    // const rootRoute = createRootRoute({
    //   component: MainPage,
    // });

    // const routeTree = rootRoute.addChildren([
    //   createRoute({
    //     getParentRoute: () => rootRoute,
    //     path: "red-page",
    //     component: RedPage,
    //   }),
    //   createRoute({
    //     getParentRoute: () => rootRoute,
    //     path: "blue-page",
    //     component: BluePage,
    //   }),
    //   createRoute({
    //     getParentRoute: () => rootRoute,
    //     path: "/",
    //     component: GreenPage,
    //   }),
    // ]);

    // const r = createRouter({
    //   routeTree,
    //   defaultNotFoundComponent: () => {
    //     return (
    //       <div>
    //         <p>Not found!</p>
    //         <Link to="/">Go home</Link>
    //       </div>
    //     );
    //   },
    //   notFoundMode: "root",
    // });

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
