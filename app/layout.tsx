import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Boushahri Group Medical",
  description: "Your Gateway to Medical Expansion in the Gulf - BGM helps pharmaceutical, beauty, and medical equipment brands succeed in Kuwait, Bahrain, and Oman.",
  icons: {
    icon: [
      { url: '/bgm.png', sizes: '32x32', type: 'image/png' },
      { url: '/bgm.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/bgm.png',
    apple: '/bgm.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/bgm.png',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
