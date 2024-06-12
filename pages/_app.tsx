import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Router from "@/router/router";

export default function App({ Component, pageProps }: AppProps) {
  // useEffect(() => {
  //   const rootElement = document.getElementById("app");

  //   console.log(
  //     "root element ",
  //     rootElement,
  //     " innerHTML ",
  //     rootElement?.innerHTML
  //   );

  //   if (rootElement && !rootElement.innerHTML) {
  //     console.log("createRoot");
  //     const root = createRoot(rootElement);
  //     root.render(
  //       <StrictMode>
  //         <RouterProvider router={router} />
  //       </StrictMode>
  //     );
  //   }
  // }, []);

  return <Router />

  // return <RouterProvider router={router} />;
  // return <Component {...pageProps} />;
  // return (
  //     <RouterProvider router={router} />
  // );
  // return null;
}
