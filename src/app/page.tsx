import Header from "@/app/sections/Header";
import Hero from "@/app/sections/Hero";
import LogoTicker from "@/components/LogoTicker";
import Features from "./sections/Features";
import Testimonials from "./sections/Testimonials";
import CallToAction from "./sections/CallToAction";
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <Features />
      <Testimonials />
      <CallToAction />
    </>
  );
}
