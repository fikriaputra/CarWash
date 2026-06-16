import LocationCard from "./LocationCard";
import { locationsData } from "./locationsData";

const LocationsList = ({
  activeLocation,
  setActiveLocation,
}) => {
  return (
    <div className="space-y-5">
      {locationsData.map((location) => (
        <LocationCard
          key={location.id}
          {...location}
          active={
            activeLocation === location.id
          }
          onHover={() =>
            setActiveLocation(location.id)
          }
        />
      ))}
    </div>
  );
};

export default LocationsList;