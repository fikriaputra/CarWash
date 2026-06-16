const bubbles = [
  {
    position: "top-8 left-8",
    size: "w-24 h-24",
    opacity: "opacity-40",
  },

  {
    position: "top-16 right-12",
    size: "w-16 h-16",
    opacity: "opacity-50",
  },

  {
    position: "top-56 left-1/4",
    size: "w-10 h-10",
    opacity: "opacity-30",
  },

  {
    position: "top-72 right-1/4",
    size: "w-14 h-14",
    opacity: "opacity-50",
  },

  {
    position: "bottom-40 left-12",
    size: "w-16 h-16",
    opacity: "opacity-40",
  },

  {
    position: "bottom-24 right-12",
    size: "w-12 h-12",
    opacity: "opacity-50",
  },
];

const ReviewsBackground = () => {
  return (
    <>
      {/* Glow Left */}
      <div
        className="
          absolute
          left-[-200px]
          top-0

          w-[600px]
          h-[600px]

          rounded-full

          bg-lime-400/15

          blur-[180px]
        "
      />

      {/* Glow Right */}
      <div
        className="
          absolute
          right-[-200px]
          bottom-0

          w-[500px]
          h-[500px]

          rounded-full

          bg-lime-400/10

          blur-[180px]
        "
      />

      {/* Dots Left */}
      <div
        className="
          absolute
          left-0
          top-10

          w-44
          h-44

          opacity-20

          bg-[radial-gradient(circle,#84cc16_2px,transparent_2px)]
          [background-size:16px_16px]
        "
      />

      {/* Dots Right */}
      <div
        className="
          absolute
          right-0
          top-20

          w-40
          h-40

          opacity-20

          bg-[radial-gradient(circle,#84cc16_2px,transparent_2px)]
          [background-size:16px_16px]
        "
      />

      {/* Bubble Decorations */}
      {bubbles.map((bubble, index) => (
        <div
          key={index}
          className={`
            absolute
            ${bubble.position}
            ${bubble.size}
            ${bubble.opacity}

            rounded-full

            border
            border-white/10

            bg-white/[0.03]

            backdrop-blur-[1px]

            animate-float-slow
          `}
        >
          {/* Highlight Utama */}
          <div
            className="
              absolute

              top-[18%]
              left-[22%]

              w-[22%]
              h-[22%]

              rounded-full

              bg-white/25

              blur-[1px]
            "
          />

          {/* Highlight Kecil */}
          <div
            className="
              absolute

              top-[38%]
              left-[42%]

              w-[8%]
              h-[8%]

              rounded-full

              bg-white/20
            "
          />
        </div>
      ))}
    </>
  );
};

export default ReviewsBackground;