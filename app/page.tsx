import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AppStoreButtons } from "@/components/AppStoreButtons";
import { Section } from "@/components/Section";
import { HowItWorks } from "@/components/HowItWorks";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Indie_Flower } from "next/font/google";

const indieFlower = Indie_Flower({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`${indieFlower.className} min-h-screen bg-base`}>
      <Header />
      <main>
        <Hero />
        <AppStoreButtons />
        <Section />
        <HowItWorks />
        <FAQ />
        <Footer />
      </main>
    </div>
  );
}
