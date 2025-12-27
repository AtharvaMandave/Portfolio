import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Atharva Mandave | Computer Engineering Student | Full-Stack Developer",
  description: "Portfolio of a 3rd-year Computer Engineering student specializing in full-stack development and AI projects. Explore my projects, skills, and achievements.",
  keywords: "Computer Engineering, Full-Stack Developer, AI Projects, React, Next.js, Node.js, Portfolio, Internship",
  authors: [{ name: "Atharva Mandave" }],
  openGraph: {
    title: "Atharva Mandave | Computer Engineering Student",
    description: "Portfolio showcasing full-stack development and AI projects",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
