"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MdSpeed } from "react-icons/md";
import { BsFuelPump } from "react-icons/bs";
import { FaCogs } from "react-icons/fa";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

export default function Profile() {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Admin",
  };

  const [carListings, setCarListings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [listingToDelete, setListingToDelete] = useState(null);
  const [isDeleting,setIsDeleting] = useState(false)
  
  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await fetch("/api/listings");
        if (!response.ok) {
          throw new Error("Failed to fetch listings");
        }
        const data = await response.json();
        setCarListings(data.data || []);
      } catch (err) {
        console.error("Error fetching listings:", err);
        setError("Failed to load car listings.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchListings();
  }, []);

  
  const handleDelete = async () => {
    if (!listingToDelete) return;
    setIsDeleting(true)
    try {
      const response = await fetch(`/api/listings/${listingToDelete.id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to delete listing");
      }

      setCarListings((prev) =>
        prev.filter((listing) => listing.id !== listingToDelete.id)
      );
      setDeleteDialogOpen(false);
      setListingToDelete(null);
      
      alert("Car listing deleted successfully!");
      setIsDeleting(false)
    } catch (err) {
      console.error("Error deleting listing:", err);
      alert(err.message || "Failed to delete car listing. Please try again.");
    }
  };

  const openDeleteDialog = (listing) => {
    setListingToDelete(listing);
    setDeleteDialogOpen(true);
  };

  if (isLoading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">{error}</div>;
  }

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
                 
                    <Image
                      src={listing.images[0]}
                      alt={`${listing.make} ${listing.model}`}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover"
                    />

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
                    <div className="flex items-center gap-1">
                      <MdSpeed />
                      <span>{listing.mileage || 0} Miles</span>
                    </div>

                    <div className="flex items-center gap-1">
                      <BsFuelPump />
                      <span>{listing.type || "N/A"}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaCogs />
                      <span>{listing.transmission || "N/A"}</span>
                    </div>
                  </div>
                  <p className="mt-3 text-lg font-bold text-gray-800">
                    {listing.sellingPrice} ETB
                  </p>
                  <div className="mt-3 flex gap-2">
                    <Link
                      href={`/listing-detail/${listing.id}`}
                      className="inline-block text-blue-600 hover:underline text-sm"
                    >
                      View Details
                    </Link>
                  </div>
                  <div className="flex justify-between p-2">
                    <Button
                      asChild
                      className="inline-block text-green-600 bg-gray-200 hover:bg-gray-100 text-sm"
                    >
                      <Link href={`/add-listing?listingId=${listing.id}`}>
                        Edit
                      </Link>
                    </Button>

                    <Dialog
                      open={deleteDialogOpen}
                      onOpenChange={setDeleteDialogOpen}
                    >
                      <DialogTrigger asChild>
                        <Button
                          variant="destructive"
                          className="inline-block text-sm"
                          onClick={() => openDeleteDialog(listing)}
                        >
                          Delete
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Confirm Deletion</DialogTitle>
                          <DialogDescription>
                            Are you sure you want to delete the listing for{" "}
                            <span className="font-semibold">
                              {listingToDelete?.make} {listingToDelete?.model}
                            </span>
                            ? This action cannot be undone.
                          </DialogDescription>
                        </DialogHeader>
                        <DialogFooter className='flex justify-between'>
                          <Button
                            variant="outline"
                            onClick={() => setDeleteDialogOpen(false)}
                          >
                            Cancel
                          </Button>
                          <Button variant="destructive" onClick={handleDelete} >
                           {isDeleting?'Deleting':'Delete'} 
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
