import HeroContent from "./HeroContent";
import heroBg from "../../../assets/images/Background.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
      "
    >
      {/* Background */}
      <img
        src={heroBg}
        alt="Bunda Car Wash"
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          object-center
        "
      />

      {/* Green Glow */}
      <div
        className="
          absolute
          left-[-150px]
          bottom-[-150px]
          w-[500px]
          h-[500px]
          bg-lime-400/20
          blur-[180px]
          rounded-full
          z-[1]
        "
      />

      {/* Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-black/80
          via-black/45
          to-black/10
          z-[2]
        "
      />

      {/* Content */}
      <div
        className="
          relative
          z-30
          max-w-7xl
          mx-auto
          min-h-screen
          px-6
          lg:px-8
          flex
          items-center
          pt-32
        "
      >
        <HeroContent />
      </div>

      {/* Bottom Curve */}
      <div
        className="
          absolute
          bottom-0
          left-0
          w-full
          z-10
          pointer-events-none
        "
      >
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-[180px]"
          preserveAspectRatio="none"
        >
          <path
            fill="#f5f8fa"
            d="
              M0,288
              C240,240 360,240 540,270
              C760,310 980,340 1180,180
              C1280,100 1360,70 1440,90
              L1440,320
              L0,320
              Z
            "
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;