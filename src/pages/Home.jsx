import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/hero/Hero";
import Locations from "../components/sections/locations/Locations";
import Pricing from "../components/sections/pricing/Pricing";
import Reviews from "../components/sections/reviews/Reviews";
import Services from "../components/sections/services/Services";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Locations />
      <Pricing />
      <Reviews />
      <Footer />
    </>
  );
};

export default Home;