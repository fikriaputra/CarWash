import { motion } from "framer-motion";
import ReviewBadge from "./ReviewBadge";

const ReviewsHeader = () => {
  return (
    <div className="text-center">
      <motion.p
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        className="
          text-lime-400
          font-semibold
        "
      >
        ✨ 2,357+ pelanggan puas
      </motion.p>

      <motion.h2
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.7,
        }}
        className="
          mt-4

          text-5xl
          md:text-7xl

          font-black

          text-white
        "
      >
        Apa Kata
        <span className="text-lime-400">
          {" "}
          Pelanggan Kami
        </span>
      </motion.h2>

      <p
        className="
          mt-6

          max-w-3xl
          mx-auto

          text-slate-300
          text-lg
        "
      >
        Ribuan pelanggan mempercayakan
        kendaraan mereka kepada Bunda
        Car Wash setiap harinya.
      </p>

      <div className="mt-10">
        <ReviewBadge />
      </div>
    </div>
  );
};

export default ReviewsHeader;