import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Font setup
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Global metadata for SEO + tab info
export const metadata: Metadata = {
  title: "Sydney L. Hopson Jr. | Full-Stack Developer Portfolio",
  description:
    "Explore the work of Sydney L. Hopson Jr., a Full-Stack Developer and Systems Architect building scalable, accessible, and secure platforms for public sector, healthcare, and enterprise clients.",
  icons: {
    icon: "/favicon.ico", // modern PNG favicon
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black`}
      >
        {children}
      </body>
    </html>
  );
}
