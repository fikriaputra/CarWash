import LocationsList from "./LocationsList";
import LocationsMap from "./LocationsMap";

const LocationsContent = ({
  activeLocation,
  setActiveLocation,
}) => {
  return (
    <div
      className="
        mt-20

        grid
        gap-10

        lg:grid-cols-[340px_1fr]
        xl:grid-cols-[380px_1fr]
      "
    >
      <LocationsList
        activeLocation={activeLocation}
        setActiveLocation={
          setActiveLocation
        }
      />

      <LocationsMap
        activeLocation={activeLocation}
      />
    </div>
  );
};

export default LocationsContent;