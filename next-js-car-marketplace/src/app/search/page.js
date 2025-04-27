import { db } from "../../../configs";
import { Carlisting } from "../../../configs/schema";
import { eq, and, gte, lte, sql } from "drizzle-orm";
import CarItem from "../../components/CarItem";

export default async function SearchPage({ searchParams }) {
  const { condition, make, model, price } = await searchParams;

  let cars = [];
  let error = null;

  try {
    const conditions = [];

    if (condition) {
      conditions.push(eq(Carlisting.condition, condition));
    }
    if (make) {
      conditions.push(eq(Carlisting.make, make));
    }
    if (model) {
      conditions.push(eq(Carlisting.model, model));
    }
    if (price) {
      if (price === "low") {
        conditions.push(
          and(
            gte(
              sql`CAST(REPLACE(${Carlisting.sellingPrice}, ',', '') AS INTEGER)`,
              1000000
            ),
            lte(
              sql`CAST(REPLACE(${Carlisting.sellingPrice}, ',', '') AS INTEGER)`,
              5000000
            )
          )
        );
      } else if (price === "mid") {
        conditions.push(
          and(
            gte(
              sql`CAST(REPLACE(${Carlisting.sellingPrice}, ',', '') AS INTEGER)`,
              6000000
            ),
            lte(
              sql`CAST(REPLACE(${Carlisting.sellingPrice}, ',', '') AS INTEGER)`,
              10000000
            )
          )
        );
      } else if (price === "high") {
        conditions.push(
          gte(
            sql`CAST(REPLACE(${Carlisting.sellingPrice}, ',', '') AS INTEGER)`,
            10000001
          )
        );
      }
    }

    cars = await db
      .select()
      .from(Carlisting)
      .where(conditions.length > 0 ? and(...conditions) : undefined);
  } catch (err) {
    console.error("Error fetching cars:", err);
    error = "Failed to load search results.";
  }

  const titleParts = [];
  if (condition) titleParts.push(condition);
  if (make) titleParts.push(make);
  if (model) titleParts.push(model);
  const searchTitle = titleParts.length > 0 ? `${titleParts.join(" ")} Cars` : "Search Results";

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
          {searchTitle}
        </h1>

        {error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : cars.length === 0 ? (
          <p className="text-center text-gray-600">No cars found matching your criteria.</p>
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