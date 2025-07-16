import { About } from "@/components/layout/about";
import { Attorneys } from "@/components/layout/attorneys";
import { Cases } from "@/components/layout/cases";
import { Hero } from "@/components/layout/hero";
import { ScrollReveal } from "@/components/layout/scroll-reveal";
import { Services } from "@/components/layout/services";
import { Testimonials } from "@/components/layout/testimonials";

export default function Home() {
  return (
    <main>
      <ScrollReveal>
        <Hero></Hero>
        <About></About>
        <Services></Services>
        <Attorneys></Attorneys>
        <Cases></Cases>
        <Testimonials></Testimonials>
      </ScrollReveal>
    </main>
  );
}
