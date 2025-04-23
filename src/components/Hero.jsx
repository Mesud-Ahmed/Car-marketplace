import { Search } from 'lucide-react';
import sidecar from '../assets/sidecar.png'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

function Hero() {
  return (
    <section className="bg-gradient-to-b from-hero-bg to-white py-16 flex flex-col items-center">
      <p className="text-text-light-gray text-lg">Find cars for sale or rent near you</p>
      <h2 className="text-5xl font-bold text-text-dark-blue mt-2 text-center">
        Find Your Dream Car
      </h2>
      <div className="mt-8 flex flex-col sm:flex-row items-center bg-white rounded-lg shadow-md p-4 w-full max-w-3xl gap-4 sm:gap-0">
        <Select>
          <SelectTrigger className="w-full sm:w-28 border-none text-dropdown-active focus:ring-0">
            <SelectValue placeholder="Used Cars" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="new">New Cars</SelectItem>
              <SelectItem value="used">Used Cars</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <div className="border-l h-6 mx-4 border-gray-200 hidden sm:block"></div>
        <Select>
          <SelectTrigger className="w-full sm:w-28 border-none text-dropdown-placeholder focus:ring-0">
            <SelectValue placeholder="Any Makes" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="toyota">Toyota</SelectItem>
              <SelectItem value="honda">Honda</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <div className="border-l h-6 mx-4 border-gray-200 hidden sm:block"></div>
        <Select>
          <SelectTrigger className="w-full sm:w-28 border-none text-dropdown-placeholder focus:ring-0">
            <SelectValue placeholder="Any Models" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="civic">Civic</SelectItem>
              <SelectItem value="camry">Camry</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <div className="border-l h-6 mx-4 border-gray-200 hidden sm:block"></div>
        <Select>
          <SelectTrigger className="w-full sm:w-28 border-none text-dropdown-placeholder focus:ring-0">
            <SelectValue placeholder="All Prices" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="low">$0 - $10,000</SelectItem>
              <SelectItem value="high">$10,000+</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <button className="sm:ml-4 p-2 bg-blue-500 rounded-full cursor-pointer">
          <Search className="h-5 w-5 text-white" />
        </button>
      </div>
      <img
        src={sidecar}
        alt="sideway car image"
        className="mt-8 w-full max-w-2xl object-cover rounded-lg"
      />
    </section>
  );
}

export default Hero;