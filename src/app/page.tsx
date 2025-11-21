import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { Testimonials } from "@/components/Testimonials";
import { ContactForm } from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="pt-20"> {/* offset for fixed navbar */}
      <section id="home"><Hero /></section>
      <section id="about"><About /></section>
      <section id="services"><Services /></section>
      <section id="why"><WhyUs /></section>
      <section id="testimonials"><Testimonials /></section>
      <section id="contact"><ContactForm /></section>
    </main>
  );
}