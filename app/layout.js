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

export const metadata = {
  title: "Mamaku Studio | Portofolio Arsitektur & Desain Bangunan",
  description:
    "Mamaku Studio adalah portofolio arsitektur yang menampilkan karya desain rumah, interior, eksterior, dan bangunan kreatif dengan sentuhan modern dan fungsional.",
  keywords: [
    "Mamaku Studio",
    "architecture portfolio",
    "house design",
    "interior design",
    "exterior design",
    "Indonesian architect",
    "modern building design",
  ],
};

export default function RootLayout({ children }) {
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
