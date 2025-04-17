import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Benefits } from "@/components/sections/Benefits";
import { DataSecurity } from "@/components/sections/DataSecurity";
import { Testimonials } from "@/components/sections/Testimonials";
import { Recognition } from "@/components/sections/Recognition";
import { Faq } from "@/components/sections/Faq";
import { Cta } from "@/components/sections/Cta";
import { CookieConsent } from "@/components/layout/CookieConsent";

export default function Home() {
  return (
    <main>
      <Hero />
      <Recognition />
      <Services />
      <Benefits />
      <DataSecurity />
      <Testimonials />
      <Faq />
      <Cta />
      <Footer />
      <CookieConsent />
    </main>
  );
}
