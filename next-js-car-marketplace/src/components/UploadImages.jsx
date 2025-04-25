'use client'
import React, { useState, useEffect, useRef } from "react";
import { IoMdCloseCircle } from "react-icons/io";

const UploadImages = ({ setImages, loader, reset }) => {
  const [imageList, setImageList] = useState([]);
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    setImages(imageList.map((item) => item.url));
  }, [imageList, setImages]);

  useEffect(() => {
    if (reset) setImageList([]);
  }, [reset]);

  useEffect(() => {
    const loadCloudinaryScript = () => {
      if (window.cloudinary) {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget(
          {
            cloudName: "dx1y42ctn",
            uploadPreset: "new-car-market",
            multiple: true,
            sources: ["local", "url", "camera"],
          },
          (error, result) => {
            if (error) {
              console.error("Cloudinary Upload Widget Error:", error);
            }
            if (result.event === "success") {
              setImageList((prev) => [
                ...prev,
                { url: result.info.secure_url, publicId: result.info.public_id },
              ]);
            }
          }
        );
      } else {
        const script = document.createElement("script");
        script.src = "https://upload-widget.cloudinary.com/global/all.js";
        script.type = "text/javascript";
        script.async = true;
        script.onload = () => {
          cloudinaryRef.current = window.cloudinary;
          widgetRef.current = cloudinaryRef.current.createUploadWidget(
            {
              cloudName: "dx1y42ctn",
              uploadPreset: "new-car-market",
              multiple: true,
              sources: ["local", "url", "camera"],
            },
            (error, result) => {
              if (error) {
                console.error("Cloudinary Upload Widget Error:", error);
              }
              if (result.event === "success") {
                setImageList((prev) => [
                  ...prev,
                  { url: result.info.secure_url, publicId: result.info.public_id },
                ]);
              }
            }
          );
        };
        script.onerror = () => {
          console.error("Failed to load Cloudinary Upload Widget script.");
        };
        document.head.appendChild(script);
      }
    };

    loadCloudinaryScript();

    return () => {
      const script = document.querySelector(
        'script[src="https://upload-widget.cloudinary.com/global/all.js"]'
      );
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  const onImageRemove = (index) => {
    setImageList((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2 className="font-medium text-xl my-3">Upload Car Images</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {imageList.map((item, index) => (
          <div key={index} className="relative">
            <IoMdCloseCircle
              onClick={() => onImageRemove(index)}
              className="absolute top-3 right-0.2 text-red-500 cursor-pointer text-xl"
            />
            <img
              src={`${item.url}?f_auto,q_auto`}
              className="w-[200px] h-[130px] object-contain rounded-xl"
              alt={`Car image ${index + 1}`}
            />
          </div>
        ))}
        <button
          type="button"
          disabled={loader || !widgetRef.current}
          onClick={() => widgetRef.current && widgetRef.current.open()}
          className={`border rounded-xl border-dotted border-blue-500 bg-blue-100 p-10 cursor-pointer ${
            loader || !widgetRef.current
              ? "opacity-50 cursor-not-allowed"
              : "hover:shadow-sm"
          }`}
        >
          <h2 className="text-lg text-center">+</h2>
        </button>
      </div>
    </div>
  );
};

export default UploadImages;