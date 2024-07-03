import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Nav } from "./components/views/nav";
import { Footer } from "./components/views/footer";
import { Menu } from "./components/views/menu";
import { GlobalContextProvider } from "./context/globalcontext";
import { TimelineProvider } from "./context/timelinecontext";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-lato",
});

const supr = localFont({
  src: "../public/fonts/Futura Bold font.ttf",
  variable: "--font-supr",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${supr.variable}`}>
        <GlobalContextProvider>
          <TimelineProvider>
            <Nav  />
            <Menu />
          </TimelineProvider>
          {children}
          <Footer />
        </GlobalContextProvider>
      </body>
    </html>
  );
}
