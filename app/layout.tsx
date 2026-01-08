import { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: "AlterNation Chennai - Jazz and improvised, contemporary music",
  description:
    "Independent, alternative events showcasing the best contemporary, jazz original and improvised music in Chennai",
  keywords: [
    "AlterNation Chennai",
    "independent music",
    "alternative music",
    "contemporary music",
    "jazz music",
    "improvised music",
    "original music",
    "Chennai music events",
    "live music Chennai",
    "jazz in Chennai",
  ],
  authors: [{ name: "AlterNation Chennai" }],
  creator: "AlterNation Chennai",
  publisher: "AlterNation Chennai",
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-46LGGRPJ3F"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-46LGGRPJ3F');
          `}
        </Script>

        <Header />
        <div className="min-h-screen flex flex-col">
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}