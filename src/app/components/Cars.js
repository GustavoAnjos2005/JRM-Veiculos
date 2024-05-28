// componentes
import Brands from "./Brands";
import CarSlide from "./CarSlide";

export default function Cars() {
  return (
    <section className="h-screen flex items-center" id="cars">
      <div className="container mx-auto">
        <Brands />
        <CarSlide />
      </div>
    </section>
  );
}
