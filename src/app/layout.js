// RootLayout.js

import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";
import WebStories from "@/components/webStories/WebStories";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children, includeLayout = true }) {
  if (includeLayout == true) {
    return (
      <html lang="en">
        <head>
          <meta name="google-site-verification" content="pnYpAezLasKVKt8zLLL9_e9KkSM1Gup1Qeozx-mgO30" />
          <link
            rel="apple-touch-icon"
            href="https://www.bloggersground.com/favicon.ico"
          />
        </head>
        <body className={inter.className}>
          <ThemeContextProvider>
            <ThemeProvider>
              <div className="container">
                <div className="wrapper">
                  <Navbar />
                  {children}
                  <Footer />
                </div>
              </div>
            </ThemeProvider>
          </ThemeContextProvider>
        </body>
      </html>
    );
  }else{
    // If includeLayout is false, render only the children without the layout
    return <>hi</>;
  }
}
