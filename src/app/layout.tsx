import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "¿k tal?",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
      </head>
      <body className="min-h-screen flex flex-col">
        <header
          className="flex items-center justify-between shadow-lg px-4 sm:px-10 
         bg-[#e1dfe8] text-white font-sans min-h-[70px] tracking-wide relative z-50 py-2"
        >
          <div className="flex items-center space-x-3">
            <a href="/">
              <img src="/logo.png" alt="Logo" className="h-14 w-auto" />
            </a>
          </div>

          <nav className="flex space-x-6">
            <a
              href="/guide"
              className="text-[#17364c] hover:text-gray-500 transition-colors"
            >
              Guide
            </a>
            <a
              href="/chat"
              className="text-[#17364c] hover:text-gray-500 transition-colors"
            >
              Chat
            </a>
          </nav>
        </header>{" "}
        <div className="bg-[#e1dfe8] flex-grow pb-20">
          {children}
        </div>
      </body>
    </html>
  );
}
