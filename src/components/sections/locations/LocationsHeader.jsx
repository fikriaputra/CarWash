import { motion } from "framer-motion";

const LocationsHeader = () => {
  return (
    <div className="text-center">
      <motion.h2
        initial={{
          opacity: 0,
          y: 60,
          filter: "blur(8px)",
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
        }}
        className="
          text-5xl
          md:text-7xl

          font-light

          uppercase

          text-white
        "
      >
        Temukan Lokasi
      </motion.h2>

      <motion.p
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
          duration: 0.8,
          delay: 0.2,
        }}
        className="
          mt-5

          max-w-3xl
          mx-auto

          text-slate-400
          text-lg
        "
      >
        Di Bunda Car Wash, kami terus berkembang dan
        menemukan lokasi baru yang nyaman.
        Temukan cabang terdekat di sekitar Anda.
      </motion.p>
    </div>
  );
};

export default LocationsHeader;