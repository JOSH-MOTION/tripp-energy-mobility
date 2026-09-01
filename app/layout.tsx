import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { site } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: {
    default: `${site.name} | Solar Schools, Electric Buses, EV Charging | Africa & South Asia`,
    template: `%s | ${site.name}`,
  },
  description:
    "Tripp Energy and Mobility transforms schools across Sub-Saharan Africa and South Asia into solar-powered energy and mobility hubs. SPARC+CM programme: Nigeria, India, Pakistan, DRC, Ethiopia.",
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} | Solar Schools, Electric Buses, EV Charging`,
    description:
      "Solar-powered schools, electric buses, and community EV charging across Sub-Saharan Africa and South Asia.",
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description:
      "Solar-powered schools, electric buses, and community EV charging across Sub-Saharan Africa and South Asia.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: `https://${site.domain}`,
    description:
      "Tripp Energy and Mobility is a Société à Mission transforming schools across Sub-Saharan Africa and South Asia into solar-powered community energy and mobility hubs.",
    address: site.offices.map((o) => ({
      "@type": "PostalAddress",
      streetAddress: o.address,
    })),
    email: "contact@trippenergy.com",
  };

  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieConsent />
        <WhatsAppButton />
      </body>
    </html>
  );
}
