import { motion } from "framer-motion";

const PricingHeader = () => {
  return (
    <div className="text-center max-w-4xl mx-auto">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="
          text-lime-500
          font-semibold
        "
      >
        ✨ 2,357+ pelanggan puas
      </motion.p>

      <motion.h2
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
        }}
        className="
          mt-3

          text-5xl
          md:text-7xl

          font-black

          text-slate-900
        "
      >
        Carwash
        <span className="text-lime-500">
          {" "}
          Harga
        </span>
      </motion.h2>

      <p
        className="
          mt-6

          text-slate-500
          text-lg

          leading-relaxed
        "
      >
        Pilih paket terbaik untuk menjaga
        kendaraan Anda tetap bersih,
        mengkilap dan terlindungi.
      </p>
    </div>
  );
};

export default PricingHeader;