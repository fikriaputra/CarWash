import { motion } from "framer-motion";
import HeroButtons from "./HeroButtons";

const HeroContent = () => {
  return (
    <div className="max-w-2xl">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="
          inline-flex
          items-center
          gap-2
          px-4
          py-2
          rounded-full
          bg-lime-400/20
          border
          border-lime-400/30
          text-lime-300
          text-sm
          font-medium
          backdrop-blur-sm
          mb-6
        "
      >
        ✨ Premium Car Wash Service
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="
          text-white/80
          text-base
          md:text-lg
        "
      >
        Bersih maksimal, wangi tahan lama.
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="
          mt-4
          text-5xl
          md:text-7xl
          font-extrabold
          leading-[0.95]
          text-white
        "
      >
        Bunda
        <span className="block text-lime-400">
          Car Wash
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="
          mt-6
          text-lg
          md:text-2xl
          text-white/90
          leading-relaxed
          max-w-xl
        "
      >
        Kami siap membuat kendaraan Anda kembali
        bersih, mengkilap, dan nyaman digunakan setiap hari.
      </motion.p>

      <HeroButtons />
    </div>
  );
};

export default HeroContent;