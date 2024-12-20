import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="bg-cover bg-center bg-[url('/assets/hero6.jpg')]">
      <div className="h-screen flex items-center">
        {/* Centralized container with consistent width */}
        <div className="w-full max-w-[1500px] h-full flex flex-col justify-center mx-auto px-[20px] pb-[100px] md:pb-[5px]">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-semibold text-white">
            <span className="text-[#d5fcf9]">Santorini,</span> Greece
          </h1>
          <p className="font-light text-base md:text-lg lg:text-2xl mt-5 text-white">
            Santorini - one of the Cycladic Islands belonging to Greece in the
            Aegean Sea. The hilly landscape of the island was formed as a result
            of the strongest volcanic eruption in the XVI century BC.
          </p>
          <Button
            variant="outline"
            className="w-[120px] md:w-[150px] h-[40px] md:h-[50px] mt-5 px-6 py-3 text-sm md:text-lg rounded-xl border-none bg-[#cefdf0] transition-all duration-700 ease-in-out hover:bg-[#b6f7e2] hover:scale-105 hover:shadow-lg"
          >
            Book Now
          </Button>
        </div>
      </div>
    </section>
  );
}
