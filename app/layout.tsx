import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KAAST - Control Every Screen From Your Phone",
  description:
    "Run promotions and playlists from your fingertips. Keep every screen on-brand with KAAST.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Indie+Flower&family=Urbanist:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
