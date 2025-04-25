import suv from '../../assets/suv.png';
import sedan from '../../assets/sedan.png';
import electric from '../../assets/electric.png';
import hybrid from '../../assets/hybrid.png';
import pickUp from '../../assets/pickup.png';
import Image from 'next/image';

function BrowseSection() {
  const categories = [
    { name: 'SUV', image: suv },
    { name: 'Sedan', image: sedan },
    { name: 'Electric', image: electric },
    { name: 'Hybrid', image: hybrid },
    { name: 'Pick up', image: pickUp },
  ];

  return (
    <section className="py-16 bg-white">
      <h3 className="text-3xl font-bold text-text-dark-blue text-center">Browse by Type</h3>
      <div className="flex flex-wrap justify-center mt-8 gap-6 cursor-pointer">
        {categories.map((category) => (
          <div
            key={category.name}
            className="p-4 border border-gray-200 rounded-lg w-32 text-center hover:shadow-md transition-shadow"
          >
            <Image
              src={category.image}
              alt={category.name}
              className="h-10 w-10 mx-auto object-contain"
            />
            <p className="mt-2 text-text-dark-gray">{category.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BrowseSection;