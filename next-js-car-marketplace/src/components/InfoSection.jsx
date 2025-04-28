import Image from 'next/image';
import footerCar from '../../assets/footerCar.png';

const InfoSection = () => {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:items-center md:gap-12">
          
          <div className="md:col-span-1">
            <div className="max-w-lg md:max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                About Us
              </h2>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                At Abraham Car Marketplace, we’re passionate about connecting you with your dream car. With a curated selection of vehicles, from luxury SUVs to reliable sedans, we make buying and selling cars simple, transparent, and hassle-free. Our mission is to provide a seamless experience with trusted listings and exceptional customer service.
              </p>
              
            </div>
          </div>

         
          <div className="md:col-span-2">
            <Image
              src={footerCar}
              className="w-full h-84 object-cover rounded-lg shadow-md md:h-100"
              alt="A luxury car on display at Car Marketplace"
              placeholder="blur"
             
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;