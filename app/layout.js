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
    "Mamaku Studio – portofolio arsitektur & desain rumah, interior, eksterior modern. Temukan proyek, tim, dan cara hubungi kami.",
  keywords: [
    "Mamaku Studio",
    "portofolio arsitektur",
    "desain rumah",
    "desain interior",
    "desain eksterior",
    "arsitek Indonesia",
    "desain bangunan modern",
    "Mamaku Architecture Projects",
    "About Mamaku Studio",
    "Contact Mamaku Studio",
    "konsultasi desain arsitektur",
    "arsitek kreatif Indonesia"
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
