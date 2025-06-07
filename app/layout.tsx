import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";

// Font setup
const barlow = Barlow_Condensed({
  variable: "--font-heading",
  weight: ["500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Donald Upshaw | Forklift Operator & Machine Specialist",
  description:
    "Resume and experience portfolio of Donald Upshaw, a certified forklift and machine operator based in Decatur, GA. OSHA certified and trained in food production, warehouse safety, and heavy equipment handling.",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/favicon.png",
  },
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${barlow.variable} ${inter.variable} bg-neutral-900 text-white`}>
      <body className="antialiased bg-neutral-900 text-white font-sans m-0 p-0">
        {children}
      </body>
    </html>
  );
}
