import indonesiaMap from "../../../assets/maps/id.svg";

import LocationMarker from "./LocationMarker";
import { locationsData } from "./locationsData";

const LocationsMap = ({
  activeLocation,
}) => {
  return (
    <div
      className="
        group
        relative

        h-[280px]
        sm:h-[350px]
        md:h-[420px]
        lg:h-[500px]

        rounded-[36px]

        overflow-hidden

        border
        border-white/10

        bg-[#041A28]

        shadow-[0_30px_80px_rgba(0,0,0,0.25)]
      "
    >
      {/* Dot Pattern */}
      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle,#1E4258_1px,transparent_1px)]
          [background-size:12px_12px]

          opacity-20
        "
      />

      {/* Glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2

          -translate-x-1/2
          -translate-y-1/2

          w-72
          h-72

          rounded-full

          bg-lime-400/10

          blur-[120px]

          animate-float

          transition-all
          duration-700

          group-hover:scale-125
        "
      />

      {/* Secondary Glow */}
      <div
        className="
          absolute
          right-10
          bottom-10

          w-40
          h-40

          rounded-full

          bg-cyan-400/10

          blur-[100px]

          animate-float
        "
      />

      {/* Indonesia Map */}
      <img
        src={indonesiaMap}
        alt="Indonesia Map"
        className="
          absolute
          inset-0

          w-full
          h-full

          object-contain

          p-4
          md:p-8

          opacity-70

          select-none
          pointer-events-none

          animate-map-float

          transition-all
          duration-700

          group-hover:scale-105
          group-hover:opacity-90
        "
      />

      {/* Gradient Overlay */}
      <div
        className="
          absolute
          inset-0

          bg-gradient-to-br
          from-transparent
          via-transparent
          to-lime-400/5

          pointer-events-none
        "
      />

      {/* Markers */}
      {locationsData.map((location) => (
        <LocationMarker
          key={location.id}
          {...location}
          active={
            activeLocation === location.id
          }
        />
      ))}
    </div>
  );
};

export default LocationsMap;