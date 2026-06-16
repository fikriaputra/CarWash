import PricingBackground from "./PricingBackground";
import PricingHeader from "./PricingHeader";
import PricingGrid from "./PricingGrid";
import PricingBenefits from "./PricingBenefits";

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="
        relative
        overflow-hidden

        py-24
        md:py-32

        bg-[#F5F8FA]
      "
    >
      <PricingBackground />

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
        <PricingHeader />

        <PricingGrid />

        <PricingBenefits />
      </div>
    </section>
  );
};

export default Pricing;