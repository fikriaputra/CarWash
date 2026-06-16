import { FaArrowRight } from "react-icons/fa";

const HeroButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-10">
      <button
        className="
          bg-lime-400
          text-black
          px-8
          py-4
          rounded-xl
          font-semibold
          flex
          items-center
          justify-center
          gap-3
          transition-all
          duration-300
          hover:scale-105
          shadow-lg
          shadow-lime-500/20
          hover:shadow-lime-400/40
        "
      >
        Booking Sekarang
        <FaArrowRight />
      </button>

      <button
        className="
          border
          border-white/70
          bg-white/5
          backdrop-blur-sm
          text-white
          px-8
          py-4
          rounded-xl
          font-medium
          transition-all
          duration-300
          hover:bg-white
          hover:text-black
        "
      >
        Lihat Layanan
      </button>
    </div>
  );
};

export default HeroButtons;