import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({
  title,
  description,
  image,
  icon: Icon,
}) => {
  return (
    <div
      className="
        relative
        bg-white
        rounded-[32px]
        shadow-[0_20px_60px_rgba(0,0,0,0.08)]
        overflow-hidden
        transition-all
        duration-300
        hover:-translate-y-3
      "
    >
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
        "
      >
        <Icon />
      </div>

      <div className="pt-32 px-6">
        <img
          src={image}
          alt={title}
          className="
            w-full
            h-64
            object-cover
            rounded-2xl
          "
        />
      </div>

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

        <div
          className="
            w-14
            h-1
            bg-lime-400
            mx-auto
            mt-4
            rounded-full
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

        <button
          className="
            mt-8
            mx-auto
            flex
            items-center
            gap-3

            text-lime-500
            font-semibold
          "
        >
          Learn More
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;