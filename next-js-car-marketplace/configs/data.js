import { 
  FaTag, 
  FaComment, 
  FaDollarSign, 
  FaCar, 
  FaCheckCircle, 
  FaBolt, 
  FaIndustry, 
  FaCarSide, 
  FaCalendar, 
  FaCog, 
  FaCogs, 
  FaWrench, 
  FaTachometerAlt, 
  FaPalette, 
  FaGift, 
  FaFileAlt ,
   
} from 'react-icons/fa';
import { GiAutoRepair } from "react-icons/gi";

export const carDetails = {
  carDetails: [
    { label: "Listing Title", name: "listingTitle", fieldType: "text", required: true, column: 2, icon: FaTag },
    { label: "Tagline", name: "tagline", fieldType: "text", column: 2, icon: FaComment },
    { label: "Original Price", name: "originalPrice", fieldType: "text", column: 1, icon: FaDollarSign },
    { label: "Selling Price", name: "sellingPrice", fieldType: "text", required: true, column: 1, icon: FaDollarSign },
    { label: "Category", name: "category", fieldType: "dropdown", required: true, options: ["Sedan", "SUV", "Truck", "Coupe"], column: 1, icon: FaCar },
    { label: "Condition", name: "condition", fieldType: "dropdown", required: true, options: ["New", "Used", "Certified Pre-Owned"], column: 1, icon: FaCheckCircle },
    { label: "Type", name: "type", fieldType: "dropdown", required: true, options: ["Electric", "Hybrid", "Petrol"], column: 1, icon: FaBolt },
    { label: "Make", name: "make", fieldType: "dropdown", required: true, options: ["Toyota", "Honda", "Ford", "Chevrolet", "Nissan", "BMW", "Mercedes-Benz", "Rolls-Royce", "Aston Martin", "Ferrari", "Lamborghini", "McLaren", "Pagani", "Bugatti"], column: 1, icon: FaIndustry },
    { label: "Model", name: "model", fieldType: "text", column: 1, icon: FaCarSide },
    { label: "Year", name: "year", fieldType: "number", required: true, column: 1, icon: FaCalendar },
    { label: "Mileage", name: "mileage", fieldType: "number", required: true, column: 1, icon: FaTachometerAlt },
    { label: "Drive Type", name: "driveType", fieldType: "dropdown", required: true, options: ["FWD", "RWD", "AWD", "4WD"], column: 1, icon: FaCog },
    { label: "Transmission", name: "transmission", fieldType: "dropdown", required: true, column: 1, options: ["Automatic", "Manual"], icon: FaCogs },
    { label: "Engine Size", name: "engineSize", fieldType: "text", column: 1, icon: FaWrench },
    { label: "Cylinder", name: "cylinder", fieldType: "number", column: 1, icon: GiAutoRepair  },
    { label: "Color", name: "color", fieldType: "text", column: 1, icon: FaPalette },
    { label: "Offer Type", name: "offerType", fieldType: "dropdown", options: ["Buy", "Hot Offer", "Sell", "Urgent"], column: 2, icon: FaGift },
    { label: "Listing Description", name: "listingDescription", fieldType: "textarea", required: true, column: 2, icon: FaFileAlt },
  ],
};
  
  export const features = {
    features: [
      { label: "Adaptive Cruise Control", name: "adaptiveCruiseControl" },
      { label: "Android Auto", name: "androidAuto" },
      { label: "Apple CarPlay", name: "appleCarPlay" },
      { label: "Backup Camera", name: "backupCamera" },
      { label: "Blind Spot Monitoring", name: "blindSpotMonitoring" },
      { label: "Bluetooth", name: "bluetooth" },
      { label: "Heated Seats", name: "heatedSeats" },
      { label: "Keyless Entry", name: "keylessEntry" },
      { label: "Lane Departure Warning", name: "laneDepartureWarning" },
      { label: "Leather Seats", name: "leatherSeats" },
      { label: "Navigation System", name: "navigationSystem" },
      { label: "Parking Sensors", name: "parkingSensors" },
      { label: "Power Windows", name: "powerWindows" },
      { label: "Premium Audio System", name: "premiumAudioSystem" },
      { label: "Sunroof", name: "sunroof" },
    ],
  };