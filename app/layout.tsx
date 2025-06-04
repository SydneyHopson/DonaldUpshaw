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
  title: "Isaiah Harris | Certified Forklift Operator & Labor Specialist",
  description:
    "Resume and experience portfolio of Isaiah Harris, a certified forklift operator and labor specialist based in Lithonia, GA. OSHA certified, skilled in warehouse operations, landscaping, HVAC, and heavy equipment handling.",
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // eslint-disable-next-line @next/next/no-page-custom-font
    <html lang="en" className={`${barlow.variable} ${inter.variable}`}>
      <body className="antialiased bg-white text-black font-sans">
        {children}
      </body>
    </html>
  );
}
