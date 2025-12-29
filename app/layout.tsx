import { Metadata } from 'next';
import './globals.css';

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
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-46LGGRPJ3F"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-46LGGRPJ3F');
            `,
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}