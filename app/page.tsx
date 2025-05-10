
import InputFeild from "@/components/common/InputFeild";
import Hero from "@/components/sections/Hero";
import Works from "@/components/sections/Works";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Footer from "@/components/layout/Footer"
import Contact from "@/components/sections/Contact";


export default function Home() {
  return (
    <main>
      <Hero />
      <Works />
      <Contact />
      <Footer />
    </main>
  );
}
