import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import MainHeader from "../components/main-header/main-header";
import MainHeaderBg from "../components/main-header/main-header-bg";

export const metadata = {
  title: "Next Course App",
  description: "Fist App!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />

        {children}
      </body>
    </html>
  );
}
