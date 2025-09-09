// import { useTranslations } from "next-intl";
// import { getTranslations } from "next-intl/server";
import Contact from "@/components/Contact/Contact";
import "./globals.css";
import Hero from "@/components/Hero/Hero";
import Features from "@/components/Features/Features";
import Steps from "@/components/Steps/Steps";
import Partners from "@/components/Partners/Partners";
import Cars from "@/components/Cars/Cars";
import Loader from "@/components/Loader/Loader";

export default async function Home({
  params
} : {
  params: Promise<{locale: string}>
}) {
  const { locale } = await params
  // const t = useTranslations('HomePage');
  // const t = await getTranslations('HomePage');
  return (
    <main>
      <Loader />
      <Hero lo={locale} />
      <Features lo={locale} />
      <Cars lo={locale} />
      <Steps lo={locale} />
      <Partners />
      <Contact lo={locale}/>
    </main>
  );
}
