import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header, Footer, FloatingReviews, FloatingWhatsApp } from "@/components";

import JsonLd from "@/components/seo/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bestdentistinhadapsar.com'),
  title: "Dental Clinic in Hadapsar, Pune | Glaze Dental Clinic & Implant Centre",
  description: "Glaze Dental Clinic in Hadapsar, Pune offers expert dental care: root canal treatment, dental implants, braces, smile designing, and painless treatments. Serving Magarpatta, Kharadi & nearby. Book today!",
  keywords: "dental clinic in hadapsar, dentist hadapsar pune, root canal treatment hadapsar, dental implants hadapsar, braces hadapsar, smile designing pune, dentist near magarpatta, cosmetic dentist hadapsar, teeth whitening, painless dentistry pune, dr ashish gadekar",
  icons: {
    icon: '/logo/logo.png',
    apple: '/logo/logo.png',
  },
  openGraph: {
    title: "Dental Clinic in Hadapsar, Pune | Glaze Dental Clinic & Implant Centre",
    description: "Expert dental clinic in Hadapsar, Pune. Root canal, dental implants, braces, smile designing. Serving Magarpatta, Kharadi and nearby areas.",
    type: "website",
    locale: "en_US",
    siteName: "Glaze Dental Clinic",
    url: "https://bestdentistinhadapsar.com",
    images: [
      {
        url: "https://bestdentistinhadapsar.com/logo/logo.png",
        width: 1200,
        height: 630,
        alt: "Glaze Dental Clinic - Best Dentist in Hadapsar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Clinic in Hadapsar, Pune | Glaze Dental Clinic & Implant Centre",
    description: "Expert dental care in Hadapsar & near Magarpatta. Implants, root canal, braces, smile designing.",
    images: ["https://bestdentistinhadapsar.com/logo/logo.png"],
  },
  alternates: {
    canonical: "https://bestdentistinhadapsar.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <JsonLd />
        <Header />
        {/* <FloatingReviews /> */}
        <FloatingWhatsApp />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
