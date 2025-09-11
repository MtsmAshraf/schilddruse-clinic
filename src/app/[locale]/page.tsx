import "./globals.css";
import Hero from "@/components/Hero/Hero";
import BlogCards from "@/components/BlogCards/BlogCards";
import styles from "./home.module.css"
import MainHeading from "@/components/MainHeading/MainHeading";

export default async function Home({
  params
} : {
  params: Promise<{locale: string}>
}) {
  const { locale } = await params
  // const t = useTranslations('HomePage');
  // const t = await getTranslations('HomePage');
  return (
    <main className={styles.home}>
      {/* <Loader /> */}
      <Hero lo={locale} />
      <section className={styles.blogCards}>
        <MainHeading>
            Blog
        </MainHeading>
        <div className="container">
          <BlogCards />
        </div>
      </section>
    </main>
  );
}
