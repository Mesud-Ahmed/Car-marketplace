import { Gauge, Fuel, Settings, ArrowRight } from 'lucide-react';
import corola from '../assets/Corrolla.png';
import ford from '../assets/Ford Transit.png';

function MostSearched() {
  const cars = [
    {
      model: 'Ford Transit – 2021',
      specs: {
        engine: '4.0L PowerPulse Momentum ',
        mileage: '25000 Miles',
        fuel: 'Diesel',
        transmission: 'Manual',
      },
      price: '$22,000',
      image: ford,
    },
    {
      model: 'Corolla – 2022',
      specs: {
        engine: 'Electric, Dual Motor',
        mileage: '15000 Miles',
        fuel: 'Electric',
        transmission: 'Autopilot',
      },
      price: '$45,000',
      image: corola,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <h3 className="text-3xl font-bold text-gray-800 text-center">The Most Searched Cars</h3>
      <div className="flex flex-wrap justify-center mt-8 gap-6 max-w-6xl mx-auto">
        {cars.map((car) => (
          <div
            key={car.model}
            className="bg-[#050B20] rounded-lg shadow-md w-full sm:w-64 text-white "
          >
            <img
              src={car.image}
              alt={car.model}
              className="w-full h-40 md:object-cover"
            />
            <div className="p-4 ">
              <h4 className="font-bold text-lg">{car.model}</h4>
              <p className="text-sm mt-1">{car.specs.engine}</p>
              <div className="flex items-center gap-4 mt-2 text-sm">
                <div className="flex items-center gap-1">
                  <Gauge className="h-4 w-4" />
                  <span>{car.specs.mileage}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Fuel className="h-4 w-4" />
                  <span>{car.specs.fuel}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Settings className="h-4 w-4" />
                  <span>{car.specs.transmission}</span>
                </div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <p className="font-bold text-2xl">{car.price}</p>
                <a href="#" className="flex items-center text-sm hover:underline">
                  View Details <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MostSearched;