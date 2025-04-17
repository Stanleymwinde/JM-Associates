import { About, Carousel, GetAQuote, Services } from "@/components/ui/home";
import HomeNews from "@/components/ui/news/page";

export default function Home() {
  return (
    <>
      <Carousel />
      <About />
      <Services />
      <GetAQuote />
      <HomeNews />
    </>
  );
}
