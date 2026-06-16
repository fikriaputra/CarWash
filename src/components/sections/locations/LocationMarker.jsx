import { FaMapMarkerAlt } from "react-icons/fa";

const LocationMarker = ({
  city,
  top,
  left,
  active,
  labelPosition = "right",
}) => {
  return (
    <div
      className="
        absolute
        z-20

        -translate-x-1/2
        -translate-y-1/2
      "
      style={{
        top,
        left,
      }}
    >
      {/* Pulse Animation */}
      {active && (
        <span
          className="
            absolute
            left-1/2
            top-1/2

            -translate-x-1/2
            -translate-y-1/2

            w-10
            h-10

            rounded-full

            bg-lime-400/30

            animate-ping
          "
        />
      )}

      {/* Marker */}
      <FaMapMarkerAlt
        className={`
          relative

          text-3xl

          transition-all
          duration-300

          drop-shadow-lg

          ${
            active
              ? "text-lime-400 scale-110 animate-marker"
              : "text-white"
          }
        `}
      />

      {/* Label */}
      <div
        className={`
          absolute

          ${
            labelPosition === "right"
              ? "left-8 top-1/2 -translate-y-1/2"
              : labelPosition === "left"
              ? "right-8 top-1/2 -translate-y-1/2"
              : labelPosition === "top"
              ? "left-1/2 -translate-x-1/2 -top-10"
              : "left-1/2 -translate-x-1/2 top-8"
          }

          whitespace-nowrap

          px-3
          py-1.5

          rounded-full

          text-xs
          font-medium

          border

          backdrop-blur-md

          transition-all
          duration-300

          ${
            active
              ? `
                bg-lime-400
                text-black
                border-lime-400
              `
              : `
                bg-black/80
                text-white
                border-white/10
              `
          }
        `}
      >
        {city}
      </div>
    </div>
  );
};

export default LocationMarker;