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
    "Mamaku Studio adalah portofolio arsitektur yang menampilkan karya desain rumah, interior, eksterior, dan bangunan kreatif dengan sentuhan modern dan fungsional. Temukan informasi tentang proyek kami, tim, dan cara menghubungi Mamaku Studio.",
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
