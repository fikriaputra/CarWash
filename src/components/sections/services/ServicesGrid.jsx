import ServiceCard from "./ServiceCard";
import { servicesData } from "./servicesData";

const ServicesGrid = () => {
  return (
    <div
      className="
        mt-20

        grid
        gap-8

        md:grid-cols-2
        xl:grid-cols-3
      "
    >
      {servicesData.map((service) => (
        <ServiceCard
          key={service.id}
          {...service}
        />
      ))}
    </div>
  );
};

export default ServicesGrid;