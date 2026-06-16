import { FaStar } from "react-icons/fa";

const ReviewBadge = () => {
  return (
    <div
      className="
        inline-flex
        items-center
        gap-8

        px-8
        py-5

        rounded-full

        bg-[#041A28]

        border
        border-lime-400/20

        shadow-[0_0_40px_rgba(163,230,53,0.15)]
      "
    >
      <div
        className="
          w-14
          h-14

          rounded-full

          bg-lime-400

          flex
          items-center
          justify-center
        "
      >
        <FaStar className="text-black text-xl" />
      </div>

      <h3
        className="
          text-4xl
          font-bold
          text-white
        "
      >
        4.9
        <span className="text-lime-400">
          /5
        </span>
      </h3>

      <div
        className="
          w-px
          h-12
          bg-white/10
        "
      />

      <div>
        <p className="text-white">
          Rating dari
        </p>

        <p
          className="
            text-lime-400
            font-semibold
          "
        >
          2.300+ Review
        </p>
      </div>
    </div>
  );
};

export default ReviewBadge;