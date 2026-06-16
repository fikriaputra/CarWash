import { motion } from "framer-motion";

const ServicesHeader = () => {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.5,
        }}
        className="
          inline-flex
          items-center
          gap-2

          px-5
          py-2

          rounded-full

          bg-lime-100

          text-lime-600
          font-semibold
        "
      >
        ✨ OUR SERVICES
      </motion.div>

      <motion.h2
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.7,
          delay: 0.1,
        }}
        className="
          mt-6

          text-4xl
          md:text-6xl

          font-black

          text-slate-900

          leading-tight
        "
      >
        Layanan Terbaik Untuk

        <span className="block text-lime-500">
          Kendaraan Anda
        </span>
      </motion.h2>

      <motion.p
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.7,
          delay: 0.2,
        }}
        className="
          mt-6

          text-slate-500
          text-lg

          leading-relaxed
        "
      >
        Kami memberikan perawatan terbaik
        untuk menjaga kendaraan tetap bersih
        dan kinclong setiap saat.
      </motion.p>
    </div>
  );
};

export default ServicesHeader;