import type { AppProps } from "next/app";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "@fontsource/inter";
import "@fontsource/rubik";
import "../global.css";

gsap.registerPlugin(ScrollTrigger);

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
