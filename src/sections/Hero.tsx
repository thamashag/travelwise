// components/Hero.jsx
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="bg-cover bg-[url('../assets/hero6.jpg')]">
      <div className="h-screen flex items-center">
        <div className="w-[1200px] h-full flex flex-col justify-center mx-[20px] md:mx-[40px] lg:mx-[100px]">
          <h1 className="text-8xl font-semibold text-white">
            <span className="text-[#d5fcf9]">Santorini,</span> Greece
          </h1>
          <p className="font-light text-2xl mt-5 text-white">
            Santorini - one of the Cycladic Islands belonging to Greece in the
            Aegean Sea. The hilly landscape of the island was formed as a result
            of the strongest volcanic eruption in the XVI century BC.
          </p>
          <Button
            variant="outline"
            className="w-[150px] h-[50px] mt-5 px-6 py-3 text-lg rounded-xl border-none bg-[#cefdf0] transition-all duration-700 ease-in-out hover:bg-[#b6f7e2] hover:scale-105 hover:shadow-lg"
          >
            Book Now
          </Button>
        </div>
      </div>
    </section>
  );
}
