import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "@/i18n/dictionaries";
import Hero from "@/components/Hero";
import AboutServices from "@/components/AboutServices";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <>
      <Hero dict={dict.hero} />
      <AboutServices aboutDict={dict.about} servicesDict={dict.services} />
      <Projects dict={dict.projects} />
      <Testimonials dict={dict.testimonials} />
      <Contact dict={dict.contact} />
    </>
  );
}
