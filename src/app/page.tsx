import { Header } from "@/components/home/Header";
import { Offers } from "@/components/home/Offers";
import { Events } from "@/components/home/Events";
import { Content } from "@/components/home/Content";
import { Plans } from "@/components/home/Plans";

export default function Home() {
  return (
    <>
      <Header />
      <Offers />
      <Events />
      <Content />
      <Plans />
    </>
  )
}
