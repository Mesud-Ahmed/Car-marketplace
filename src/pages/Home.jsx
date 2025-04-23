import Header from "../components/Header";
import Hero from "../components/Hero";
import MostSearched from "@/components/MostSearched";
import WhyChooseUs from "../components/WhyChooseUs";
const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <MostSearched />
      <WhyChooseUs />
    </div>
  );
};

export default Home;
