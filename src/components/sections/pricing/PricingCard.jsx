import { motion } from "framer-motion";

import {
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

const PricingCard = ({
  title,
  description,
  icon: Icon,
  features,
  buttonText,
  highlight,
  delay,
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
      }}
      transition={{
        duration: 0.7,
        delay,
      }}
      className="relative"
    >
      {highlight && (
        <div
          className="
            absolute
            inset-0

            rounded-[36px]

            bg-lime-400/10

            blur-3xl
          "
        />
      )}

      <div
        className={`
          relative

          bg-white

          rounded-[36px]

          p-8

          shadow-xl

          transition-all
          duration-500

          hover:-translate-y-3
          hover:shadow-[0_30px_80px_rgba(132,204,22,0.18)]

          ${
            highlight
              ? "border-2 border-lime-400"
              : "border border-slate-100"
          }
        `}
      >
        {highlight && (
          <div
            className="
              absolute
              -top-4
              left-1/2
              -translate-x-1/2

              bg-lime-400

              px-5
              py-2

              rounded-full

              text-xs
              font-bold
            "
          >
            BEST VALUE
          </div>
        )}

        <div
          className="
            w-20
            h-20

            mx-auto

            rounded-full

            bg-lime-100

            flex
            items-center
            justify-center

            text-3xl
            text-lime-500

            animate-icon-float
          "
        >
          <Icon />
        </div>

        <h3
          className="
            mt-8

            text-center

            text-4xl
            font-bold

            text-slate-900
          "
        >
          {title}
        </h3>

        <div
          className="
            w-20
            h-1

            mx-auto
            mt-5

            bg-lime-400
            rounded-full
          "
        />

        <p
          className="
            mt-6

            text-center

            text-slate-500

            leading-relaxed
          "
        >
          {description}
        </p>

        <div className="mt-8 space-y-4">
          {features.map((item) => (
            <div
              key={item}
              className="
                flex
                items-center
                gap-3
              "
            >
              <FaCheckCircle className="text-lime-500" />

              <span>{item}</span>
            </div>
          ))}
        </div>

        <button
          className={`
            mt-10
            w-full

            py-4

            rounded-xl

            font-semibold

            flex
            items-center
            justify-center
            gap-3

            transition-all
            duration-300

            ${
              highlight
                ? "bg-lime-400 text-black hover:bg-lime-500"
                : "border border-lime-400 text-lime-600 hover:bg-lime-50"
            }
          `}
        >
          {buttonText}

          <FaArrowRight />
        </button>
      </div>
    </motion.div>
  );
};

export default PricingCard;