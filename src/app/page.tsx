import { Hero } from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import TutorChat from "@/components/TutorChat";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Testimonials />
      <TutorChat />
      <ContactForm />
    </main>
  );
}
