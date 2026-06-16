import foamLeft from "../../../assets/decorations/foam-left.png";
import foamRight from "../../../assets/decorations/foam-right.png";
import dots from "../../../assets/decorations/dots.png";

const bubbles = [
  "top-10 left-8 w-40 h-40",
  "top-16 right-10 w-28 h-28",
  "top-52 left-1/4 w-16 h-16",
  "top-64 right-1/4 w-20 h-20",
  "top-[45%] left-10 w-24 h-24",
  "top-[55%] right-20 w-16 h-16",
  "bottom-48 left-1/4 w-20 h-20",
  "bottom-32 right-1/3 w-24 h-24",
  "bottom-10 left-20 w-16 h-16",
  "bottom-20 right-10 w-32 h-32",
];

const BackgroundDecoration = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Dots Left */}
      <img
        src={dots}
        alt=""
        className="
          absolute
          left-0
          top-1/3
          w-40
          opacity-60
        "
      />

      {/* Dots Right */}
      <img
        src={dots}
        alt=""
        className="
          absolute
          right-0
          bottom-24
          w-32
          opacity-60
        "
      />

      {/* Foam Left */}
      <img
        src={foamLeft}
        alt=""
        className="
          absolute
          left-0
          bottom-0
          w-80
          opacity-40
        "
      />

      {/* Foam Right */}
      <img
        src={foamRight}
        alt=""
        className="
          absolute
          right-0
          bottom-0
          w-80
          opacity-40
        "
      />

      {/* Bubbles */}
      {bubbles.map((bubble, index) => (
        <div
          key={index}
          className={`
            absolute
            ${bubble}
            rounded-full
            border
            border-white/80
            bg-white/30
            backdrop-blur-sm
            shadow-[0_8px_40px_rgba(255,255,255,0.5)]
          `}
        >
          <div
            className="
              absolute
              top-3
              left-3
              w-4
              h-4
              rounded-full
              bg-white/80
            "
          />
        </div>
      ))}
    </div>
  );
};

export default BackgroundDecoration;