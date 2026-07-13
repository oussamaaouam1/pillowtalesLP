import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Pillow Tales — Premium Bedtime Stories for Kids",
  description:
    "Turn screen time into sleepy time. Premium, calming, and kid-safe bedtime stories with beautiful 3D illustrations. COPPA compliant. Zero ads, zero tracking.",
  keywords: [
    "bedtime stories",
    "kids stories",
    "children app",
    "sleep stories",
    "COPPA compliant",
    "kid-safe",
  ],
  openGraph: {
    title: "Pillow Tales — Premium Bedtime Stories for Kids",
    description:
      "Turn screen time into sleepy time. Premium, calming, and kid-safe bedtime stories.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
