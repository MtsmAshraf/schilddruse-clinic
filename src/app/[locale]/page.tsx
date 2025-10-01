import "./globals.css";
import Hero from "@/components/Hero/Hero";
import BlogCards from "@/components/BlogCards/BlogCards";
import styles from "./home.module.css"
import Loader from "@/components/Loader/Loader";
import Services from "@/components/Services/Services";
import OrdinationComponent from "@/components/OrdinationComponent/OrdinationComponent";
import Termine from "@/components/Termine/Termine";
import Telemedizin from "@/components/Telemedizin/Telemedizin";

export default async function Home({
  params
} : {
  params: Promise<{locale: string}>
}) {
    const {locale} = await params
  
  // const t = useTranslations('HomePage');
  // const t = await getTranslations('HomePage');
  return (
      <main className={styles.home}>
        <Loader />
        <Hero lo={locale} />
        <Termine />
        <Services />
        <OrdinationComponent />
        <BlogCards lo={locale} />
        <Telemedizin />
        {/* <Faq /> */}
        {/* <About /> */}
      </main>
  );
}
