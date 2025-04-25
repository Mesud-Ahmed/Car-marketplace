import Link from "next/link";
import { Button } from "@/components/ui/button";
import { db } from "../../../configs";
import { Carlisting } from "../../../configs/schema";
import Image from "next/image";
import { MdSpeed } from "react-icons/md";
import { BsFuelPump } from "react-icons/bs";
import { FaCogs } from "react-icons/fa";

const Profile = async () => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Admin",
  };

  const carListings = await db.select().from(Carlisting);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">
            Welcome, {user.name}!
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Manage your car listings from here.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <Button asChild>
            <Link href="/add-listing">+ Add New Listing</Link>
          </Button>
        </div>

        
        {carListings.length === 0 ? (
          <p className="text-center text-gray-600">No car listings found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {carListings.map((listing) => (
              <div
                key={listing.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative">
                  {listing.images && listing.images.length > 0 ? (
                    <Image
                      src={listing.images[0]}
                      alt={`${listing.make} ${listing.model}`}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                  ) : (
                    <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">No Image</span>
                    </div>
                  )}
                  {listing.condition === "New" && (
                    <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">
                      New
                    </span>
                  )}
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {listing.make} {listing.model}
                  </h3>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                    {listing.mileage ? (
                      <div className="flex items-center gap-1">
                        <MdSpeed />
                        <span>{listing.mileage} Miles</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-1">
                        <MdSpeed />
                        <span>0 Miles</span>
                      </div>
                    )}
                    <div className="flex items-center gap-1">
                      <BsFuelPump />
                      <span>{listing.type}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaCogs />
                      <span>{listing.transmission}</span>
                    </div>
                  </div>
                  <p className="mt-3 text-lg font-bold text-gray-800">
                    {listing.sellingPrice} ETB
                  </p>
                  <Link
                    href={`/listings/${listing.id}`}
                    className="mt-3 inline-block text-blue-600 hover:underline text-sm"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;