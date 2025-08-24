import Header from "@/components/header/Header";
import Mouse from "@/components/Mouse";
import NoiseBackground from "@/components/NoiseBackground";
import "@/styles/globals.css";
import gsap from "gsap";
import { Draggable, InertiaPlugin, ScrollSmoother, ScrollTrigger, SplitText } from "gsap/all";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

gsap.registerPlugin(SplitText, Draggable, InertiaPlugin, ScrollSmoother, ScrollTrigger);

const PPSupplyMono = localFont({
  src: [{ path: "../../public/fonts/PPSupplyMono-Regular.woff2", weight: "400" }],
  variable: "--font-pp-supply-mono",
});

const PPNeueBit = localFont({
  src: [{ path: "../../public/fonts/PPNeueBit-Bold.woff2", weight: "700" }],
  variable: "--font-pp-neue-bit",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${PPSupplyMono.variable} ${PPNeueBit.variable} h-full antialiased`}>
      <NoiseBackground />
      <Header />
      <Component {...pageProps} />
      <Mouse />
    </main>
  );
}
