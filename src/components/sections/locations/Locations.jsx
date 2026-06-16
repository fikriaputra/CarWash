import { useState } from "react";
import { locationsData } from "./locationsData";
import { FaDirections } from "react-icons/fa";

import LocationsHeader from "./LocationsHeader";
import LocationsContent from "./LocationsContent";
import WaveBottom from "./WaveBottom";


const Locations = () => {
  const [activeLocation, setActiveLocation] =
    useState(1);

const activeLocationData =
  locationsData.find(
    (location) =>
      location.id === activeLocation
  );

  return (
    <section
      id="locations"
      className="
        relative
        overflow-hidden

        py-24
        md:py-32

        bg-[#02131F]
      "
    >
      {/* Glow Left */}
      <div
        className="
          absolute
          left-0
          top-0

          w-96
          h-96

          bg-lime-400/10

          rounded-full

          blur-[150px]
        "
      />

      {/* Glow Right */}
      <div
        className="
          absolute
          right-0
          bottom-0

          w-96
          h-96

          bg-cyan-400/5

          rounded-full

          blur-[180px]
        "
      />

      <div
        className="
          relative
          z-10

          max-w-7xl
          mx-auto

          px-6
          lg:px-8
        "
      >
        <LocationsHeader />

        <LocationsContent
          activeLocation={activeLocation}
          setActiveLocation={
            setActiveLocation
          }
        />

        <div className="text-center mt-14">
          <button
  onClick={() =>
    window.open(
      activeLocationData.googleMapsUrl,
      "_blank",
      "noopener,noreferrer"
    )
  }
  className="
    inline-flex
    items-center
    gap-3

    bg-lime-400
    text-black

    px-8
    py-4

    rounded-2xl

    font-semibold

    shadow-lg
    shadow-lime-400/20

    hover:scale-105
    hover:shadow-lime-400/40

    transition-all
    duration-300
  "
>
  <FaDirections />

  Get Directions
</button>
        </div>
      </div>

      <WaveBottom />
    </section>
  );
};

export default Locations;