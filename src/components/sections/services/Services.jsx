import BackgroundDecoration from "./BackgroundDecoration";
import ServicesHeader from "./ServicesHeader";
import ServicesGrid from "./ServicesGrid";

const Services = () => {
  return (
    <section
      id="services"
      className="
        relative
        overflow-hidden
        py-24
        md:py-32
        min-h-screen
        bg-[#F5F8FA]
      "
    >
      <BackgroundDecoration />

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-6
          lg:px-8
        "
      >
        <ServicesHeader />
        <ServicesGrid />
      </div>
    </section>
  );
};

export default Services;