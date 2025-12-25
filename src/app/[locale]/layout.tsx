import type { Metadata } from "next";
import "./globals.css";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
// import icon from "../../../public/images/logo.png"
import icon from "./favicon.ico"
// import Script from "next/script";
import { Montserrat } from "next/font/google";
import FloatingContact from "@/components/FloatingContact/FloatingContact";
import FloatingBooking from "@/components/FloatingBooking/FloatingBooking";
 import Prices from "@/components/Prices/Prices";
// import { Analytics } from "@vercel/analytics/next";



export const metadata: Metadata = {
  title: "Dr.in Fairoz Mohammed | Schilddrüseordination",
  description: "Specialized thyroid clinic in Vienna offering diagnosis, ultrasound, blood tests, treatment of thyroid disorders, Hashimoto, nodules, and pregnancy-related thyroid care. Fachärztin für Schilddrüse in Wien.",
  icons: icon.src,
  keywords: [
    'Schilddrüse', 'thyroid', 'thyroid gland', 'Schilddrüsen Praxis', 'thyroid clinic',
    'Schilddrüsenspezialist', 'thyroid specialist', 'Endokrinologe', 'endocrinologist',
    'Schilddrüsenarzt Wein', 'thyroid doctor Wein', 'Schilddrüsenbehandlung', 'thyroid treatment',

    'Schilddrüsenunterfunktion', 'hypothyroidism', 'Schilddrüsenüberfunktion', 'hyperthyroidism',
    'Hashimoto', 'Hashimoto Thyreoiditis', 'Morbus Basedow', 'Graves disease',
    'Schilddrüsenknoten', 'thyroid nodules', 'Struma', 'goiter', 'Schilddrüsenkrebs', 'thyroid cancer',

    'Schilddrüsendiagnostik', 'thyroid diagnosis', 'Schilddrüsenultraschall', 'thyroid ultrasound',
    'Schilddrüsenszintigrafie', 'thyroid scan', 'Feinnadelpunktion', 'fine-needle aspiration',
    'Schilddrüsen Bluttest', 'thyroid blood test', 'TSH', 'T3', 'T4', 'Schilddrüsen Antikörper',

    'Radiojodtherapie', 'radioiodine therapy', 'Schilddrüsen Operation', 'thyroid surgery',
    'Hormontherapie', 'hormone replacement therapy', 'L-Thyroxin', 'levothyroxine',

    'Wein', 'Schilddrüsen Praxis Wein', 'thyroid clinic Wein', 'Endokrinologe Wein',
    'Englischsprachiger Arzt Wein', 'English speaking doctor Wein',

    'individuelle Therapie', 'individual therapy', 'Vorsorge', 'preventive care', 'persönliche Betreuung',

    "thyroid clinic", "Schilddrüsenklinik", "thyroid specialist Vienna", "Schilddrüsenarzt Wien",
    "hyperthyroidism", "Hyperthyreose", "hypothyroidism", "Hypothyreose",
    "Hashimoto", "Morbus Basedow", "thyroid nodules", "Schilddrüsenknoten",
    "thyroid ultrasound", "Schilddrüsen-Ultraschall", "Feinnadelpunktion", "thyroid surgery consultation",
    "Vienna thyroid clinic", "Schilddrüsenklinik Wien"
  ],
  
};


  const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["200", "400","700"], 
  });
  
export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>;

}>) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} className={montserrat.className}>
      <body>
        <NextIntlClientProvider>
          <Header lo={locale}></Header>
          {children}
          <Prices />
          <FloatingBooking />
          <FloatingContact />
          <Footer lo={locale}></Footer>
        </NextIntlClientProvider>
        {/* <Analytics /> */}
      </body>
    </html>
  );
}
