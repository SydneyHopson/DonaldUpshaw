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

export const metadata: Metadata = {
  title: "Sydney L. Hopson Jr. | Certified Forklift Operator & Logistics Clerk",
  description:
    "Resume and experience portfolio of Sydney L. Hopson Jr., a certified forklift operator and logistics clerk based in Stone Mountain, GA. Trained in OSHA safety, inventory management, and warehouse systems.",
  icons: {
    icon: [
      { url: "/images/logo2.png", type: "image/png" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/images/logo2.png",
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
