import {
  About,
  Carousel,
  GetAQuote,
  RecentNews,
  Services,
} from "@/components/ui/home";

export default function Home() {
  return (
    <>
      <Carousel />
      <About />
      <Services />
      <GetAQuote />
      <RecentNews />
    </>
  );
}
