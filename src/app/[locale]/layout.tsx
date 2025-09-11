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
import Contact from "@/components/Contact/Contact";



export const metadata: Metadata = {
  title: "Schilddrüse Clinic",
  description: "Schilddrüse Clinic",
  icons: icon.src,
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
          <Contact lo={locale}/>
          <Footer lo={locale}></Footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
