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

const PricingBackground = () => {
  return (
    <>
      {/* Dot Pattern */}
      <div
        className="
          absolute
          inset-0

          opacity-[0.04]

          bg-[radial-gradient(circle,#84cc16_1px,transparent_1px)]
          [background-size:30px_30px]
        "
      />

      {/* Glow kiri */}
      <div
        className="
          absolute
          left-[-120px]
          top-20

          w-[500px]
          h-[500px]

          rounded-full

          bg-lime-400/10

          blur-[180px]
        "
      />

      {/* Glow kanan */}
      <div
        className="
          absolute
          right-[-120px]
          bottom-20

          w-[400px]
          h-[400px]

          rounded-full

          bg-lime-300/10

          blur-[180px]
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
            border-[#E6EDF3]

            bg-white/15

            opacity-60

            animate-float-slow
          `}
        >
          {/* Highlight 1 */}
          <div
            className="
              absolute
              top-[18%]
              left-[22%]

              w-[18%]
              h-[18%]

              rounded-full

              bg-white/50
            "
          />

          {/* Highlight 2 */}
          <div
            className="
              absolute
              bottom-[20%]
              right-[22%]

              w-[10%]
              h-[10%]

              rounded-full

              bg-white/30
            "
          />
        </div>
      ))}
    </>
  );
};

export default PricingBackground;