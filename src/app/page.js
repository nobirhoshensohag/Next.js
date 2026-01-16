import Image from "next/image";
import Hero from "@/components/landing/Hero";

import WhyChoose from "@/components/landing/WhyChoose"
import CTA from "@/components/landing/CTA";

export default function Home() {
  return (
     <>
      <section>
      <Hero></Hero>
      </section>
      
       <section>
        <WhyChoose></WhyChoose>
      </section>
      <section>
        <CTA></CTA>
      </section>
  
    </>
  );
}
