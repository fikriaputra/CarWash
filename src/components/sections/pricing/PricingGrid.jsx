import PricingCard from "./PricingCard";
import { pricingData } from "./pricingData";

const PricingGrid = () => {
  return (
    <div
      className="
        mt-20

        grid
        gap-8

        lg:grid-cols-3
      "
    >
      {pricingData.map((plan, index) => (
        <PricingCard
          key={plan.id}
          {...plan}
          delay={index * 0.15}
        />
      ))}
    </div>
  );
};

export default PricingGrid;