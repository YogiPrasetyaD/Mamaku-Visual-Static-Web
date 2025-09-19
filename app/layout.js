import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

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
  openGraph: {
    siteName: "Mamaku Studio",
  },
  applicationName: "Mamaku Studio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        {/* Favicon */}
        <link rel="icon" type="image/png" href="/logoputih.png" />
        <link rel="apple-touch-icon" href="/logoputih.png" />
        <meta name="theme-color" content="#ffffff" />

        {/* Open Graph fallback */}
        <meta property="og:site_name" content="Mamaku Studio" />
        <meta property="og:image" content="https://mamakustudio.com/logoputih.png" />
        <meta
          property="og:title"
          content="Mamaku Studio | Portofolio Arsitektur & Desain Bangunan"
        />
        <meta
          property="og:description"
          content="Mamaku Studio – portofolio arsitektur & desain rumah, interior, eksterior modern."
        />

        {/* Structured Data JSON-LD */}
        <Script id="structured-data" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Mamaku Studio",
            url: "https://mamakustudio.com",
          })}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
