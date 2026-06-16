import {
  FaMapMarkerAlt,
  FaChevronRight,
} from "react-icons/fa";

const LocationCard = ({
  city,
  address,
  active,
  googleMapsUrl,
  onHover,
}) => {
  const handleOpenMaps = () => {
    window.open(
      encodeURI(googleMapsUrl),
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <button
      onMouseEnter={onHover}
      onClick={handleOpenMaps}
      className={`
        group

        w-full

        rounded-3xl
        p-6

        border

        flex
        items-center
        justify-between

        text-left

        transition-all
        duration-300

        hover:-translate-y-2
        hover:border-lime-400/40
        hover:shadow-[0_20px_60px_rgba(163,230,53,0.08)]

        ${
          active
            ? `
              bg-lime-400
              border-lime-400
              text-black
            `
            : `
              bg-white/[0.02]
              backdrop-blur-sm
              border-white/10
              text-white
            `
        }
      `}
    >
      <div className="flex items-center gap-5">
        <div
          className={`
            w-14
            h-14

            rounded-full

            flex
            items-center
            justify-center

            text-xl

            ${
              active
                ? "bg-black/10"
                : "bg-white/5"
            }
          `}
        >
          <FaMapMarkerAlt />
        </div>

        <div>
          <h4 className="font-bold text-lg md:text-xl">
            {city}
          </h4>

          <p
            className={`
              mt-1
              text-sm

              ${
                active
                  ? "text-black/70"
                  : "text-slate-400"
              }
            `}
          >
            {address}
          </p>
        </div>
      </div>

      <FaChevronRight
        className="
          transition-transform
          duration-300
          group-hover:translate-x-1
        "
      />
    </button>
  );
};

export default LocationCard;