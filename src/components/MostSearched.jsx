import { Gauge, Fuel, Settings, ArrowRight } from "lucide-react";
import corola from "../assets/Corrolla.png";
import ford from "../assets/Ford Transit.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function MostSearched() {
  const cars = [
    {
      model: "Ford Transit – 2021",
      specs: {
        engine: "4.0L PowerPulse Momentum",
        mileage: "25000 Miles",
        fuel: "Diesel",
        transmission: "Manual",
      },
      price: "$22,000",
      image: ford,
    },
    {
      model: "Corolla – 2022",
      specs: {
        engine: "Electric, Dual Motor",
        mileage: "15000 Miles",
        fuel: "Electric",
        transmission: "Autopilot",
      },
      price: "$45,000",
      image: corola,
    },
    {
      model: "Ford Transit – 2021",
      specs: {
        engine: "4.0L PowerPulse Momentum",
        mileage: "25000 Miles",
        fuel: "Diesel",
        transmission: "Manual",
      },
      price: "$22,000",
      image: ford,
    },
    {
      model: "Corolla – 2022",
      specs: {
        engine: "Electric, Dual Motor",
        mileage: "15000 Miles",
        fuel: "Electric",
        transmission: "Autopilot",
      },
      price: "$45,000",
      image: corola,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <h3 className="text-3xl font-bold text-gray-800 text-center">
        The Most Searched Cars
      </h3>
      <div className="mt-8 max-w-6xl  mx-auto px-12 md:px-4">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {cars.map((car, index) => (
              <CarouselItem
                key={`${car.model}-${index}`}
                className="basis-full md:basis-1/2 lg:basis-1/3 px-2"
              >
                <div className="bg-[#050B20] rounded-lg shadow-md w-full text-white">
                  <img
                    src={car.image}
                    alt={car.model}
                    className="w-full h-40 md:object-cover rounded-t-lg"
                  />
                  <div className="p-4">
                    <h4 className="font-bold text-lg">{car.model}</h4>
                    <p className="text-sm mt-1">{car.specs.engine}</p>
                    <div className="flex items-center gap-4 mt-2 text-sm">
                      <div className="flex items-center gap-1">
                        <Gauge className="h-4 w-4" />
                        <span>{car.specs.mileage}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Fuel className="h-4 w-4" />
                        <span>{car.specs.fuel}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Settings className="h-4 w-4" />
                        <span>{car.specs.transmission}</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <p className="font-bold text-2xl">{car.price}</p>
                      <a
                        href="#"
                        className="flex items-center text-sm hover:underline"
                      >
                        View Details <ArrowRight className="ml-1 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-white border border-gray-200 text-text-dark-gray hover:bg-gray-50 cursor-pointer" />
          <CarouselNext className="bg-white border border-gray-200 text-text-dark-gray hover:bg-gray-50 cursor-pointer" />
        </Carousel>
      </div>
    </section>
  );
}

export default MostSearched;
