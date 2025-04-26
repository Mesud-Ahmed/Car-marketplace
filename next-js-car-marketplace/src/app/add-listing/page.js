"use client";
import { useState } from "react";
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
  const [formData, setFormData] = useState({});
  const [featuresData, setFeaturesData] = useState({});
  const [imageUrls, setImageUrls] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);

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

    const dataToSubmit = {
      listingTitle: formData.listingTitle,
      tagline: formData.tagline,
      originalPrice: formData.originalPrice,
      sellingPrice: formData.sellingPrice,
      category: formData.category,
      condition: formData.condition,
      type: formData.type,
      make: formData.make,
      model: formData.model,
      year: parseInt(formData.year),
      mileage: parseInt(formData.mileage),
      driveType: formData.driveType,
      transmission: formData.transmission,
      engineSize: formData.engineSize,
      cylinder: parseInt(formData.cylinder) || 0,
      color: formData.color,
      offerType: formData.offerType,
      listingDescription: formData.listingDescription,
      features: featuresData,
      images: imageUrls,
    };

    try {
      const response = await fetch("/api/listings", {
        method: "POST",
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
      alert("Car listing added successfully!");

      setFormData({});
      setFeaturesData({});
      setImageUrls([]);
    } catch (e) {
      console.error("error", e);
      alert("Failed to add car listing. Please try again.");
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="px-10 md:px-20 my-10">
      <h2 className="font-bold text-4xl">Add New Listing</h2>
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
                  />
                ) : item.fieldType === "dropdown" ? (
                  <DropDownField
                    item={item}
                    handleInputChange={handleInputChange}
                  />
                ) : item.fieldType === "textarea" ? (
                  <TextAreaField
                    item={item}
                    handleInputChange={handleInputChange}
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
                  onChange={(e) =>
                    handleFeaturesChange(item.name, e.target.checked)
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
            {loader ? <FiLoader className="animate-spin text-lg" /> : "Submit"}
          </Button>
        </div>
      </form>
    </div>
  );
}
