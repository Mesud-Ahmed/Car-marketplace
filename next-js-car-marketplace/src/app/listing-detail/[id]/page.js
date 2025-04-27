import { db } from "../../../../configs";
import { Carlisting } from "../../../../configs/schema";
import { eq } from "drizzle-orm";
import Image from "next/image";
import { features } from "../../../../configs/data";
import { FaCircle, FaCalendar, FaTachometerAlt, FaCogs, FaGasPump, FaPhone, FaTelegramPlane } from "react-icons/fa";

const capitalizeWords = (str) => {
  if (!str) return "";
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

export default async function ListingDetail({ params }) {
  const { id } = await params; 

  let car = null;
  let error = null;

  try {
    const result = await db
      .select()
      .from(Carlisting)
      .where(eq(Carlisting.id, parseInt(id)));
    if (result.length === 0) {
      throw new Error("Car listing not found");
    }
    car = result[0];
  } catch (err) {
    console.error("Error fetching car listing:", err);
    error = "Failed to load car listing.";
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-red-500">{error}</p>
        </div>
      </div>
    );
  }

  const enabledFeatures = features.features
    .filter((feature) => car.features[feature.name])
    .map((feature) => feature.label.toLowerCase());

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {car.listingTitle}
          </h1>
          <div className="flex flex-wrap gap-3 mb-6">
            <div className="flex items-center bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
              <FaCalendar className="mr-2" />
              {car.year}
            </div>
            <div className="flex items-center bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
              <FaTachometerAlt className="mr-2" />
              {car.mileage.toLocaleString()}
            </div>
            <div className="flex items-center bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
              <FaCogs className="mr-2" />
              {capitalizeWords(car.transmission)}
            </div>
            <div className="flex items-center bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
              <FaGasPump className="mr-2" />
              {capitalizeWords(car.type)}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Image
                src={car.images[0] || "/placeholder-car.jpg"}
                alt={car.listingTitle}
                width={600}
                height={400}
                className="w-full h-80 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
              <div>
                <h2 className="text-lg font-semibold text-gray-600">Our Price</h2>
                <p className="text-3xl font-bold text-gray-800 mt-2">
                  {car.sellingPrice} ETB
                </p>
              </div>
              <div className="mt-4 space-y-3">
                <a
                  href="tel:+251923537258"
                  className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
                >
                  <FaPhone className="h-5 w-5" />
                  Contact Us
                </a>
                <a
                  href="https://t.me/sflk898"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full border border-blue-500 text-blue-500 py-2 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
                >
                  <FaTelegramPlane className="h-5 w-5" />
                  Message Us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            {car.images.length > 1 && (
              <div className="flex gap-2 mb-4 overflow-x-auto">
                {car.images.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    alt={`${car.listingTitle} thumbnail ${index + 1}`}
                    width={100}
                    height={60}
                    className="h-16 w-24 object-cover rounded-md cursor-pointer hover:opacity-80"
                  />
                ))}
              </div>
            )}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800">Description</h2>
              <p className="mt-2 text-gray-600">{car.listingDescription}</p>
            </div>
          </div>

          <div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800">
                Specifications
              </h2>
              <div className="mt-4 space-y-3">
                <div className="flex items-center">
                  <FaCircle className="text-blue-500 mr-2" size={10} />
                  <span className="text-gray-600 font-medium">Category:</span>
                  <span className="ml-2 text-gray-800">
                    {capitalizeWords(car.category)}
                  </span>
                </div>
                <div className="flex items-center">
                  <FaCircle className="text-blue-500 mr-2" size={10} />
                  <span className="text-gray-600 font-medium">Condition:</span>
                  <span className="ml-2 text-gray-800">{car.condition}</span>
                </div>
                <div className="flex items-center">
                  <FaCircle className="text-blue-500 mr-2" size={10} />
                  <span className="text-gray-600 font-medium">Make:</span>
                  <span className="ml-2 text-gray-800">{car.make}</span>
                </div>
                <div className="flex items-center">
                  <FaCircle className="text-blue-500 mr-2" size={10} />
                  <span className="text-gray-600 font-medium">Model:</span>
                  <span className="ml-2 text-gray-800">
                    {capitalizeWords(car.model)}
                  </span>
                </div>
                <div className="flex items-center">
                  <FaCircle className="text-blue-500 mr-2" size={10} />
                  <span className="text-gray-600 font-medium">Year:</span>
                  <span className="ml-2 text-gray-800">{car.year}</span>
                </div>
                <div className="flex items-center">
                  <FaCircle className="text-blue-500 mr-2" size={10} />
                  <span className="text-gray-600 font-medium">Drive Type:</span>
                  <span className="ml-2 text-gray-800">{car.driveType}</span>
                </div>
                <div className="flex items-center">
                  <FaCircle className="text-blue-500 mr-2" size={10} />
                  <span className="text-gray-600 font-medium">
                    Transmission:
                  </span>
                  <span className="ml-2 text-gray-800">
                    {capitalizeWords(car.transmission)}
                  </span>
                </div>
                <div className="flex items-center">
                  <FaCircle className="text-blue-500 mr-2" size={10} />
                  <span className="text-gray-600 font-medium">Fuel Type:</span>
                  <span className="ml-2 text-gray-800">
                    {capitalizeWords(car.type)}
                  </span>
                </div>
                <div className="flex items-center">
                  <FaCircle className="text-blue-500 mr-2" size={10} />
                  <span className="text-gray-600 font-medium">Mileage:</span>
                  <span className="ml-2 text-gray-800">
                    {car.mileage.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center">
                  <FaCircle className="text-blue-500 mr-2" size={10} />
                  <span className="text-gray-600 font-medium">
                    Engine Size:
                  </span>
                  <span className="ml-2 text-gray-800">
                    {car.engineSize || "N/A"}
                  </span>
                </div>
                <div className="flex items-center">
                  <FaCircle className="text-blue-500 mr-2" size={10} />
                  <span className="text-gray-600 font-medium">Cylinder:</span>
                  <span className="ml-2 text-gray-800">
                    {car.cylinder || "N/A"}
                  </span>
                </div>
                <div className="flex items-center">
                  <FaCircle className="text-blue-500 mr-2" size={10} />
                  <span className="text-gray-600 font-medium">Color:</span>
                  <span className="ml-2 text-gray-800">
                    {capitalizeWords(car.color) || "N/A"}
                  </span>
                </div>
              </div>
            </div>

            {enabledFeatures.length > 0 && (
              <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-gray-800">Features</h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  {enabledFeatures.map((feature, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
