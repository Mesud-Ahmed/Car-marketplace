import Image from "next/image";
import { MdSpeed } from "react-icons/md";
import { BsFuelPump } from "react-icons/bs";
import { FaCogs } from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
const CarItem = ({ car }) => {
  return (
    <div className="bg-[#050B20] rounded-lg shadow-md w-full text-white">
      <Image
        src={car.images[0]}
        alt={`${car.make} ${car.model}`}
        width={400}
        height={160}
        className="w-full h-40 object-cover rounded-t-lg"
      />

      <div className="p-4">
        <h4 className="font-bold text-lg">
          {car.make} {car.model}
        </h4>
        <p className="text-sm mt-1">{car.engineSize}</p>
        <div className="flex items-center gap-4 mt-2 text-sm">
          <div className="flex items-center gap-1">
            <MdSpeed className="h-4 w-4" />
            <span>{car.mileage} Miles</span>
          </div>
          <div className="flex items-center gap-1">
            <BsFuelPump className="h-4 w-4" />
            <span>{car.type}</span>
          </div>

          <div className="flex items-center gap-1">
            <FaCogs className="h-4 w-4" />
            <span>{car.transmission}</span>
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <p className="font-bold text-2xl">
            {car.sellingPrice}{" "}
            <span className="font-semibold text-sm">ETB</span>{" "}
          </p>

          <Link
            href={`/listing-detail/${car.id}`}
            className="inline-block text-blue-600 hover:underline text-sm"
          >
            View Details 
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarItem;
