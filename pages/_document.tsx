import { RouterProvider } from "@tanstack/react-router";
import { Html, Head, Main, NextScript } from "next/document";
import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";

export default function Document() {
  // useEffect(() => {
  //   const rootElement = document.getElementById("app");

  //   console.log("root element ", rootElement);

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

  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
