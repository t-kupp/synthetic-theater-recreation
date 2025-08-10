import Header from "@/components/header/Header";
import Mouse from "@/components/Mouse";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

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
    <main className={`${PPSupplyMono.variable} ${PPNeueBit.variable} antialiased`}>
      <Header />
      <Component {...pageProps} />
      <Mouse />
    </main>
  );
}
