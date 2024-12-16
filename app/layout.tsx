import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ResponsiveNav } from "@/components/home/Navbar/ResponsiveNav";
import Footer from "@/components/home/Footer/Footer";
import ScrollToTop from "@/components/helper/ScrollToTop";

const font = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Real Estate",
  description: "Real Estate App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={font.className}>
        {/* navbar */}
        <ResponsiveNav/>
        
        {children}
        {/* footer */}
        <Footer/>
        <ScrollToTop/>
      </body>
    </html>
  );
}
