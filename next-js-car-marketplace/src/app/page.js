import Header from "../components/Header";
import Footer from "@/components/Footer";
import InfoSection from "@/components/InfoSection";
import Hero from "../components/Hero";
import MostSearched from "@/components/MostSearched";
import WhyChooseUs from "../components/WhyChooseUs";
import BrowseSection from "@/components/BrowseSection";
const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      
      <Hero />
      <BrowseSection/>
      <MostSearched />
      <WhyChooseUs />
      <InfoSection/>
      <Footer/>
    </div>
  );
};

export default Home;
