"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import sidecar from "../../assets/sidecar.png";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

function Hero() {
  const router = useRouter();
  const [condition, setCondition] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const query = new URLSearchParams();
    if (condition) query.set("condition", condition);
    if (make) query.set("make", make);
    if (model) query.set("model", model);
    if (price) query.set("price", price);
    router.push(`/search?${query.toString()}`);
  };

  const commonModels = [
    "Accent",
    "Alto",
    "Atto 3",
    "C-HR",
    "CR-V",
    "Civic",
    "Corolla",
    "Creta",
    "Dzire",
    "Ertiga",
    "Fortuner",
    "HiAce",
    "Hilux",
    "Ioniq 5",
    "Jimny",
    "Kona",
    "Land Cruiser",
    "Lancer",
    "Pajero",
    "Picanto",
    "Prado",
    "RAV4",
    "Ranger",
    "Santa Fe",
    "Seagull",
    "Seltos",
    "Sportage",
    "Swift",
    "Tang",
    "Tucson",
    "Vitara",
    "Yaris",
    "Yuan Plus"
  ];

  return (
    <section className="bg-gradient-to-b from-hero-bg to-white py-16 flex flex-col items-center">
      <p className="text-text-light-gray text-lg">
        Find cars for sale or rent near you
      </p>
      <h2 className="text-5xl font-bold text-text-dark-blue mt-2 text-center">
        Find Your Dream Car
      </h2>
      <form
        onSubmit={handleSearch}
        className="mt-8 flex flex-col sm:flex-row items-center bg-white rounded-lg shadow-md p-4 w-full max-w-3xl gap-4 sm:gap-0"
      >
        <Select onValueChange={setCondition} value={condition}>
          <SelectTrigger className="w-full sm:w-28 border-none text-dropdown-active focus:ring-0">
            <SelectValue placeholder="Any condition" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="New">New</SelectItem>
              <SelectItem value="Used">Used</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <div className="border-l h-6 mx-4 border-gray-200 hidden sm:block"></div>
        <Select onValueChange={setMake} value={make}>
          <SelectTrigger className="w-full sm:w-28 border-none text-dropdown-placeholder focus:ring-0">
            <SelectValue placeholder="Any Makes" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="BMW">BMW</SelectItem>
              <SelectItem value="BYD">BYD</SelectItem>
              <SelectItem value="Chevrolet">Chevrolet</SelectItem>
              <SelectItem value="Ford">Ford</SelectItem>
              <SelectItem value="Honda">Honda</SelectItem>
              <SelectItem value="Hyundai">Hyundai</SelectItem>
              <SelectItem value="Kia">Kia</SelectItem>
              <SelectItem value="Land Rover">Land Rover</SelectItem>
              <SelectItem value="Lifan">Lifan</SelectItem>
              <SelectItem value="Mercedes-Benz">Mercedes-Benz</SelectItem>
              <SelectItem value="Mitsubishi">Mitsubishi</SelectItem>
              <SelectItem value="Nissan">Nissan</SelectItem>
              <SelectItem value="Suzuki">Suzuki</SelectItem>
              <SelectItem value="Toyota">Toyota</SelectItem>
              <SelectItem value="Volkswagen">Volkswagen</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <div className="border-l h-6 mx-4 border-gray-200 hidden sm:block"></div>
        <Select onValueChange={setModel} value={model}>
          <SelectTrigger className="w-full sm:w-28 border-none text-dropdown-placeholder focus:ring-0">
            <SelectValue placeholder="Any Models" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {commonModels.map((model) => (
                <SelectItem key={model} value={model}>
                  {model}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <div className="border-l h-6 mx-4 border-gray-200 hidden sm:block"></div>
        <Select onValueChange={setPrice} value={price}>
          <SelectTrigger className="w-full sm:w-28 border-none text-dropdown-placeholder focus:ring-0">
            <SelectValue placeholder="All Prices (in ETB)" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="low">1 - 5 million</SelectItem>
              <SelectItem value="mid">6 - 10 million</SelectItem>
              <SelectItem value="high">Above 10 million</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <button
          type="submit"
          className="sm:ml-4 p-2 bg-blue-500 rounded-full cursor-pointer"
        >
          <Search className="h-5 w-5 text-white" />
        </button>
      </form>
      <Image
        src={sidecar}
        alt="sideway car image"
        className="mt-8 w-full max-w-2xl object-cover rounded-lg"
      />
    </section>
  );
}

export default Hero;
