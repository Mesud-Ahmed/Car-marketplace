import { ArrowRight } from "lucide-react";
import { Carlisting } from "../../configs/schema";
import Image from "next/image";
import { MdSpeed } from "react-icons/md";
import { BsFuelPump } from "react-icons/bs";
import { FaCogs } from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { db } from "../../configs";
import { sql } from "drizzle-orm";

async function MostSearched() {
  const cars = await db
    .select()
    .from(Carlisting)
    .where(
      sql`CAST(REPLACE(${Carlisting.sellingPrice}, ',', '') AS INTEGER) > 6000000`
    )
    .limit(10);

  return (
    <section className="py-16 bg-white">
      <h3 className="text-3xl font-bold text-gray-800 text-center">
        Top Luxury Cars
      </h3>
      <h2 className="text-xl  text-gray-500 text-center py-4">
        Discover some of the Finest Selection of our High-End Vehicles
      </h2>
      <div className="mt-8 max-w-6xl mx-auto px-12 md:px-4">
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
                key={`${car.id}-${index}`}
                className="basis-full md:basis-1/2 lg:basis-1/3 px-2"
              >
                <div className="bg-[#050B20] rounded-lg shadow-md w-full text-white">
                  <Image
                    src={car.images[0]}
                    alt={`${car.make} ${car.model}`}
                    width={400}
                    height={160}
                    className="w-full h-40 object-cover rounded-t-lg"
                  />

                  <div className="p-4">
                    <h4 className="font-bold text-lg">
                      {car.make} {car.model}
                    </h4>
                    <p className="text-sm mt-1">{car.engineSize}</p>
                    <div className="flex items-center gap-4 mt-2 text-sm">
                      <div className="flex items-center gap-1">
                        <MdSpeed className="h-4 w-4" />
                        <span>{car.mileage} Miles</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BsFuelPump className="h-4 w-4" />
                        <span>{car.type}</span>
                      </div>

                      <div className="flex items-center gap-1">
                        <FaCogs className="h-4 w-4" />
                        <span>{car.transmission}</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <p className="font-bold text-2xl">{car.sellingPrice} <span className="font-semibold text-sm">ETB</span> </p>
                      <a
                        href={`/listings/${car.id}`}
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
