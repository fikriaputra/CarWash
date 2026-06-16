import {
  FaShieldAlt,
  FaClock,
  FaLeaf,
  FaStar,
} from "react-icons/fa";

const items = [
  {
    icon: FaShieldAlt,
    title: "Kualitas Premium",
  },
  {
    icon: FaStar,
    title: "Kepuasan Terjamin",
  },
  {
    icon: FaClock,
    title: "Menghemat Waktu",
  },
  {
    icon: FaLeaf,
    title: "Ramah Lingkungan",
  },
];

const PricingBenefits = () => {
  return (
    <div
      className="
        mt-8

        bg-white

        rounded-3xl

        shadow-lg

        p-8

        grid
        gap-8

        md:grid-cols-2
        lg:grid-cols-4
      "
    >
      {items.map((item) => (
        <div
          key={item.title}
          className="
            flex
            items-center
            gap-4
          "
        >
          <item.icon
            className="
              text-2xl
              text-lime-500
            "
          />

          <span
            className="
              font-semibold
              text-slate-800
            "
          >
            {item.title}
          </span>
        </div>
      ))}
    </div>
  );
};

export default PricingBenefits;