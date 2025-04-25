import Link from "next/link";
import { Button } from "@/components/ui/button";
const Profile = () => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Admin",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">
            Welcome, {user.name}!
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Manage your car listings from here.
          </p>
        </div>

    
        <div className="flex justify-center">
          <Button asChild>
            <Link href="/add-listing">Add New Listing</Link>
          </Button>
        </div>
      </div>
      {/* fetch the car listings from the db and display them in responsive grid layout with few  */}
    </div>
  );
};

export default Profile;