import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/hero/Hero";
import Locations from "../components/sections/locations/Locations";
import Services from "../components/sections/services/Services";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Locations />
    </>
  );
};

export default Home;