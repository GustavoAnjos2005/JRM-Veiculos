//componentes
import Header from "./components/Header";
import Hero from "./components/Hero";
import Cars from "./components/Cars";
import About from "./components/About";
import Why from "./components/Why";
import Testimonial from "./components/Testimonial";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import BackToTopBtn from "./components/BackToTopBtn";

export default function Home() {
  return (
    <main className="max-w-[1920px] bg-white mx-auto relative overflow-hidden">
      <Header />
      <Hero />
      <Cars />
      <About />
      <Why />
      <Testimonial />
      <Cta />
      <Footer />
      <BackToTopBtn />
      {/*<div className="h-[4000px]"></div>*/}
    </main>
  );
}
