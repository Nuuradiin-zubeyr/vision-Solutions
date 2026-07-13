import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata = {
  title: "Vision Solutions Limited — Technology & AI Solutions for a Thriving Somalia",
  description:
    "Vision Solutions Limited is a technology and AI company delivering IT consulting, AI integration, software development and support across the Horn of Africa.",
  openGraph: {
    title: "Vision Solutions Limited",
    description: "The leading technology and AI solutions company in the Horn of Africa.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable}`}>
      <body>{children}</body>
    </html>
  );
}
