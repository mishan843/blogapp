// RootLayout.js

import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";

import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children, includeLayout = true }) {
  if (includeLayout == true) {
    return (
      <html lang="en">
        <head>
          <meta name="google-site-verification" content="pnYpAezLasKVKt8zLLL9_e9KkSM1Gup1Qeozx-mgO30" />
          <meta name="google-adsense-account" content="ca-pub-7889951321132333" />
          <link
            rel="apple-touch-icon"
            href="https://www.bloggersground.com/favicon.ico"
          />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-P1B4RQV7T3"></script>

          <script


            id="google-analytics"


            strategy="afterInteractive"


            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-P1B4RQV7T3');
              `,
            }}
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
  } else {
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
                  {children}
                </div>
              </div>
            </ThemeProvider>
          </ThemeContextProvider>
        </body>
      </html>
    );
  }
}
