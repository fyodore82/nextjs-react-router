import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Router from "@/router/router";

export default function App({ Component, pageProps }: AppProps) {
  return <Router />
}
