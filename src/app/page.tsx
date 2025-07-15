import { About } from "@/components/layout/about";
import { Attorneys } from "@/components/layout/attorneys";
import { Cases } from "@/components/layout/cases";
import { Hero } from "@/components/layout/hero";
import { Services } from "@/components/layout/services";

export default function Home() {
  return (
    <main>
      <Hero></Hero>
      <About></About>
      <Services></Services>
      <Attorneys></Attorneys>
      <Cases></Cases>
    </main>
  );
}
