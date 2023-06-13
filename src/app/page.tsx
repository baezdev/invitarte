import { Header } from "@/components/home/Header";
import { Offers } from "@/components/home/Offers";
import { Events } from "@/components/home/Events";
import { Content } from "@/components/home/Content";
import { Plans } from "@/components/home/Plans";
import { About } from "@/components/home/About";
import { Testimonials } from "@/components/home/Testimonials";
import { Phrase } from "@/components/home/Phrase";
import { Footer } from "@/components/ui/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Offers />
      <Events />
      <Content />
      <Plans />
      <About />
      <Testimonials />
      <Phrase />
      <Footer />
    </>
  )
}
