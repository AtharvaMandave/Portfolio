import { Syne, IBM_Plex_Mono, Inter } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "ATHARVA // DIGITAL LAB — AI Engineer & Full-Stack Systems",
  description: "An interactive digital laboratory showcasing software systems, AI architectures, full-stack engineering, and experimental computer science by Atharva Mandave.",
  keywords: "Atharva Mandave, Digital Lab, AI Engineer, Full-Stack Developer, Computer Engineering, Interactive Portfolio, Three.js, React, Next.js",
  authors: [{ name: "Atharva Mandave" }],
  openGraph: {
    title: "ATHARVA // DIGITAL LAB",
    description: "Welcome to Atharva's Digital Laboratory. Explore software systems, AI research, and interactive engineering.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syne.variable} ${ibmPlexMono.variable} ${inter.variable}`}>
      <head>
        <meta name="color-scheme" content="dark" />
      </head>
      <body className="bg-[#090909] text-[#E8E2D3] font-sans antialiased selection:bg-[#B7FF4A] selection:text-[#090909] overflow-x-hidden min-h-screen">
        {children}
      </body>
    </html>
  );
}
