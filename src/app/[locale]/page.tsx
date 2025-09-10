// import { useTranslations } from "next-intl";
// import { getTranslations } from "next-intl/server";
import Contact from "@/components/Contact/Contact";
import "./globals.css";
import Hero from "@/components/Hero/Hero";
import BlogCards from "@/components/BlogCards/BlogCards";

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
      {/* <Loader /> */}
      <Hero lo={locale} />
      <BlogCards />
      <Contact lo={locale}/>
    </main>
  );
}
