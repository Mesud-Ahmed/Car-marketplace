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
    "Yuan Plus",
  ];

  return (
    <section className="relative h-[600px] w-full">
      <div className="absolute inset-0 ">
        <Image
          src={sidecar}
          alt="A sleek car on display for Car Marketplace"
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          className="brightness-75 hidden md:block"
        />
        <Image
          src={sidecar}
          alt="A sleek car on display for Car Marketplace"
          layout="fill"
          
          placeholder="blur"
          className="brightness-75 block md:hidden"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8">
        <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
          Freedom Car Sale
        </p>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-3 tracking-tight">
          Drive Your Dream Car Today
        </h2>

        <form
          onSubmit={handleSearch}
          className="mt-58  font-black flex flex-col sm:flex-row items-center  rounded-2xl md:rounded-full shadow-lg p-2 sm:p-3 w-full max-w-4xl gap-2 sm:gap-0"
        >
          <Select onValueChange={setCondition} value={condition}>
            <SelectTrigger className="w-full sm:w-42  text-gray-900  bg-white opacity-70">
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
            <SelectTrigger className="w-full sm:w-42  text-gray-600 bg-white opacity-70">
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
            <SelectTrigger className="w-full sm:w-42  text-gray-600 bg-white opacity-70">
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
            <SelectTrigger className="w-full sm:w-42  text-gray-600 bg-white opacity-70">
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
            className="sm:ml-4 p-2 bg-blue-500 rounded-full hover:bg-blue-600 transition-colors duration-300"
          >
            <Search className="h-5 w-5 text-white" />
          </button>
        </form>
      </div>
    </section>
  );
}

export default Hero;
