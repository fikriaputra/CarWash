import { motion } from "framer-motion";

const ServiceCard = ({
  title,
  description,
  image,
  icon: Icon,
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
      }}
      className="
        group
        relative

        bg-white

        rounded-[32px]

        overflow-hidden

        shadow-[0_20px_60px_rgba(0,0,0,0.08)]

        transition-all
        duration-500

        hover:-translate-y-3

        hover:shadow-[0_30px_80px_rgba(163,230,53,0.15)]
      "
    >
      {/* Glow Hover */}
      <div
        className="
          absolute
          inset-0

          bg-gradient-to-br
          from-lime-400/0
          to-lime-400/5

          opacity-0

          group-hover:opacity-100

          transition-all
          duration-500

          pointer-events-none
        "
      />

      {/* Floating Icon */}
      <div
        className="
          absolute
          top-6
          left-1/2
          -translate-x-1/2

          w-24
          h-24

          rounded-full

          bg-lime-300

          flex
          items-center
          justify-center

          text-4xl
          text-slate-900

          shadow-xl

          z-20

          transition-all
          duration-500

          group-hover:scale-110
        "
      >
        <Icon />
      </div>

      {/* Image */}
      <div className="pt-32 px-6">
        <div
          className="
            overflow-hidden
            rounded-2xl
          "
        >
          <img
            src={image}
            alt={title}
            className="
              w-full
              h-64

              object-cover

              transition-transform
              duration-700

              group-hover:scale-105
            "
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <h3
          className="
            text-3xl
            font-bold

            text-slate-900

            text-center
          "
        >
          {title}
        </h3>

        {/* Animated Divider */}
        <div
          className="
            w-14
            h-1

            bg-lime-400

            mx-auto
            mt-4

            rounded-full

            transition-all
            duration-500

            group-hover:w-20
          "
        />

        <p
          className="
            mt-6

            text-slate-500

            text-center

            leading-relaxed
          "
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;