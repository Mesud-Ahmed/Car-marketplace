import { Carlisting } from "../../configs/schema";
import CarItem from "./CarItem";
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
                <CarItem car={car} />
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
