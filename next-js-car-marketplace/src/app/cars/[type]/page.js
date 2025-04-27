import { db } from "../../../../configs";
import { Carlisting } from "../../../../configs/schema";
import { eq } from "drizzle-orm";
import CarItem from "../../../components/CarItem";

export default async function CarsByType({ params }) {
  const { type } = params;

  const formattedType = type.charAt(0).toUpperCase() + type.slice(1)

  let cars = [];
  let error = null;

  try {

    if (["suv", "sedan", "pickup"].includes(type)) {

      cars = await db
        .select()
        .from(Carlisting)
        .where(eq(Carlisting.category, type));
    } else if (["electric", "hybrid"].includes(type)) {

      cars = await db
        .select()
        .from(Carlisting)
        .where(eq(Carlisting.type, type));
    } else {
      throw new Error(`Invalid car type: ${type}`);
    }
  } catch (err) {
    console.error(`Error fetching ${formattedType} cars:`, err);
    error = `Failed to load ${formattedType} cars.`;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
          {formattedType} Cars
        </h1>

        {error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : cars.length === 0 ? (
          <p className="text-center text-gray-600">
            No {formattedType} cars found.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cars.map((car) => (
              <CarItem key={car.id} car={car} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}