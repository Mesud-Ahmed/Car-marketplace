function WhyChooseUs() {
    const items = [
      {
        icon: '💰',
        title: 'Special Financing Offers',
        description: 'Our stress-free Finance department that can find financial solutions to save you money.',
      },
      {
        icon: '💎',
        title: 'Trusted Car Dealership',
        description: 'Reliable service from a dealership you can trust.',
      },
      {
        icon: '📊',
        title: 'Transparent Pricing',
        description: 'No hidden fees, just clear and honest pricing.',
      },
      {
        icon: '🔧',
        title: 'Expert Car Service',
        description: 'Top-notch maintenance from certified professionals.',
      },
    ];
  
    return (
      <section className="py-16 bg-gray-50">
        <h3 className="text-3xl font-bold text-gray-800 text-center">Why Choose Us?</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 max-w-6xl mx-auto">
          {items.map((item) => (
            <div key={item.title} className="text-center border-b-2 md:border-r-2 md:border-b-0 p-2 text-shadow-gray-500 shadow-xl md:shadow-none">
              <div className="text-4xl bg-gradient-to-r from-icon-gradient-start to-icon-gradient-end text-transparent bg-clip-text">
                {item.icon}
              </div>
              <h4 className="mt-4 font-bold text-gray-800">{item.title}</h4>
              <p className="mt-2 text-text-light-gray">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default WhyChooseUs;