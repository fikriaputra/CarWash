import {
  FaStar,
  FaQuoteRight,
} from "react-icons/fa";

const ReviewCard = ({
  review,
  name,
  city,
  avatar,
}) => {
  return (
    <div
      className="
        bg-white

        rounded-[36px]

        p-8

        shadow-[0_20px_60px_rgba(0,0,0,0.12)]

        hover:-translate-y-3
        hover:shadow-[0_30px_80px_rgba(163,230,53,0.15)]

        transition-all
        duration-500
      "
    >
      <div className="flex justify-between">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className="text-lime-400"
            />
          ))}
        </div>

        <FaQuoteRight
          className="
            text-5xl
            text-lime-400
          "
        />
      </div>

      <p
        className="
          mt-8

          text-slate-600

          leading-relaxed

          min-h-[120px]
        "
      >
        {review}
      </p>

      <div
        className="
          mt-8
          pt-6

          border-t
        "
      >
        <div className="flex items-center gap-4">
          <img
            src={avatar}
            alt={name}
            className="
              w-14
              h-14

              rounded-full

              object-cover
            "
          />

          <div>
            <h4
              className="
                font-bold
                text-slate-900
              "
            >
              {name}
            </h4>

            <p
              className="
                text-slate-500
              "
            >
              {city}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;