"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { carDetails, features } from "../../../configs/data";
import UploadImages from "../../components/UploadImages";
import InputField from "@/components/InputField";
import TextAreaField from "@/components/TextAreaField";
import DropDownField from "@/components/DropDownField";
import IconField from "@/components/IconField";
import { Button } from "@/components/ui/button";
import { FiLoader } from "react-icons/fi";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export default function AddListingPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({});
  const [featuresData, setFeaturesData] = useState({});
  const [imageUrls, setImageUrls] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const [listingId, setListingId] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("listingId");
    if (id) {
      setIsLoading(true);
      setListingId(id);
      fetch(`/api/listings/${id}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.data) {
            const listing = data.data;
            setFormData({
              listingTitle: listing.listingTitle,
              tagline: listing.tagline,
              originalPrice: listing.originalPrice,
              sellingPrice: listing.sellingPrice,
              category: listing.category,
              condition: listing.condition,
              type: listing.type,
              make: listing.make,
              model: listing.model,
              year: listing.year.toString(),
              driveType: listing.driveType,
              transmission: listing.transmission,
              engineSize: listing.engineSize,
              cylinder: listing.cylinder?.toString() || "",
              color: listing.color,
              offerType: listing.offerType,
              listingDescription: listing.listingDescription,
              mileage: listing.mileage?.toString() || "",
            });
            setFeaturesData(listing.features || {});
          }
        })
        .catch((err) => {
          console.error("Error fetching listing:", err);
          setError("Failed to load listing data.");
        }).finally(() => setIsLoading(false));
    }
  }, []);

  const handleInputChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFeaturesChange = (name, value) => {
    setFeaturesData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    setError(null);

    const requiredFields = carDetails.carDetails.filter(
      (item) => item.required
    );
    const missingFields = requiredFields.filter(
      (item) => !formData[item.name] || formData[item.name].trim() === ""
    );

    if (missingFields.length > 0) {
      setError(
        `Please fill out all required fields: ${missingFields
          .map((item) => item.label)
          .join(", ")}`
      );
      setLoader(false);
      return;
    }

    if (imageUrls.length === 0) {
      setError("Please upload at least one image.");
      setLoader(false);
      return;
    }

    const numberPattern = /^[0-9,]+$/;
    if (formData.originalPrice && !numberPattern.test(formData.originalPrice)) {
      setError("Original Price must be a valid number (e.g 230,000)");
      setLoader(false);
      return;
    }
    if (!numberPattern.test(formData.sellingPrice)) {
      setError("Selling Price must be a valid number (e.g 230,000)");
      setLoader(false);
      return;
    }

    const dataToSubmit = {
      listingTitle: formData.listingTitle,
      tagline: formData.tagline,
      originalPrice: formData.originalPrice || null,
      sellingPrice: formData.sellingPrice,
      category: formData.category,
      condition: formData.condition,
      type: formData.type,
      make: formData.make,
      model: formData.model,
      year: parseInt(formData.year),
      driveType: formData.driveType,
      transmission: formData.transmission,
      engineSize: formData.engineSize,
      cylinder: parseInt(formData.cylinder) || 0,
      color: formData.color,
      offerType: formData.offerType,
      listingDescription: formData.listingDescription,
      mileage: parseInt(formData.mileage) || 0,
      features: featuresData,
      images: imageUrls.length > 0 ? imageUrls : formData.images || [],
    };

    try {
      const url = listingId ? `/api/listings/${listingId}` : "/api/listings";
      const method = listingId ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSubmit),
      });

      if (!response.ok) {
        throw new Error("Failed to save listing");
      }

      const result = await response.json();
      console.log("data saved", result);
      alert(
        listingId
          ? "Car listing updated successfully!"
          : "Car listing added successfully!"
      );
      setFormData({});
      setFeaturesData({});
      setImageUrls([]);
      
      router.push("/profile");
    } catch (e) {
      console.error("error", e);
      alert("Failed to save car listing. Please try again.");
    } finally {
      setLoader(false);
    }
  };
  if (isLoading) {
    return <div className="text-center py-10">Loading...</div>;
  }
  return (
    
    <div className="px-10 md:px-20 my-10">
      <h2 className="font-bold text-4xl">
        {listingId ? "Edit Listing" : "Add New Listing"}
      </h2>
      <form onSubmit={onSubmit} className="p-10 border rounded-xl mt-10">
        <div>
          <h2 className="font-medium text-xl mb-6">Car Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {carDetails.carDetails.map((item, index) => (
              <div key={index}>
                <Label
                  htmlFor={item.name}
                  className="text-sm flex gap-2 items-center mb-2"
                >
                  <IconField icon={item.icon} />
                  {item.label}{" "}
                  {item.required && <span className="text-red-500">*</span>}
                </Label>

                {item.fieldType === "text" || item.fieldType === "number" ? (
                  <InputField
                    item={item}
                    handleInputChange={handleInputChange}
                    value={formData[item.name] || ""}
                  />
                ) : item.fieldType === "dropdown" ? (
                  <DropDownField
                    item={item}
                    handleInputChange={handleInputChange}
                    value={formData[item.name] || ""}
                  />
                ) : item.fieldType === "textarea" ? (
                  <TextAreaField
                    item={item}
                    handleInputChange={handleInputChange}
                    value={formData[item.name] || ""}
                  />
                ) : null}
              </div>
            ))}
          </div>
        </div>
        <hr className="my-6" />
        <div>
          <h2 className="font-medium text-xl my-6">Features</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {features.features.map((item, index) => (
              <div key={index} className="flex gap-2 items-center">
                <Checkbox
                  id={item.name}
                  checked={featuresData[item.name] || false}
                  onCheckedChange={(checked) =>
                    handleFeaturesChange(item.name, checked)
                  }
                />
                <label htmlFor={item.name}>{item.label}</label>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-6" />
        <UploadImages
          setImages={setImageUrls}
          loader={loader}
          reset={imageUrls.length === 0}
        />
        {error && <p className="text-red-500 mt-4">{error}</p>}
        <div className="mt-10 flex justify-end">
          <Button type="submit" disabled={loader}>
            {loader ? (
              <FiLoader className="animate-spin text-lg" />
            ) : listingId ? (
              "Update Listing"
            ) : (
              "Submit"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
