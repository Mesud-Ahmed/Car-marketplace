import React, { useState } from "react";
import { carDetails, features } from "../configs/data";
import UploadImages from "../components/UploadImages";
import InputField from "@/components/InputField";
import TextAreaField from "@/components/TextAreaField";
import DropDwonField from "@/components/DropDwonField";
import Header from "@/components/Header";


const AddListing = () => {
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

  const onSubmit = (e) => {
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
      ...formData,
      features: featuresData,
      images: imageUrls,
    };
    console.log("Form Data Submitted:", dataToSubmit);

    setFormData({});
    setFeaturesData({});
    setImageUrls([]);
    setLoader(false);
    alert("Form submitted successfully! Check the console for the data.");
  };

  return (
    <>
  
    <Header/>
    <div className="px-10 md:px-20 my-10">
      <h2 className="font-bold text-4xl">Add New Listing</h2>
      <div className="p-10 border rounded-xl mt-10">
        <div>
          <h2 className="font-medium text-xl mb-6">Car Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {carDetails.carDetails.map((item, index) => (
              <div key={index}>
                <label className="text-sm flex gap-2 items-center mb-2">
                  {item.label}{" "}
                  {item.required && <span className="text-red-500">*</span>}
                </label>
                {item.fieldType === "text" || item.fieldType === "number" ? (
                  <InputField
                    item={item}
                    handleInputChange={handleInputChange}
                  />
                ) : item.fieldType === "dropdown" ? (
                  <DropDwonField
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
                <input
                  type="checkbox"
                  onChange={(e) =>
                    handleFeaturesChange(item.name, e.target.checked)
                  }
                />
                <h2>{item.label}</h2>
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
          <button
            type="button"
            onClick={onSubmit}
            disabled={loader}
            className={`bg-blue-500 text-white px-4 py-2 rounded ${
              loader ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
            }`}
          >
            {loader ? "Loading..." : "Submit"}
          </button>
        </div>
      </div>
    </div>
      
    </>
  );
};

export default AddListing;
