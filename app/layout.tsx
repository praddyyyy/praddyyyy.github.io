import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import HeaderNew from "@/components/HeaderNew";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeChanger from "@/components/ThemeChanger";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pradeeshwar's Portfolio",
  description: "Pradeeshwar's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="!scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <ActiveSectionContextProvider>
            <HeaderNew />
            {children}
            {/* <ThemeChanger /> */}
            <Footer />
          </ActiveSectionContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
