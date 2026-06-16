import ReviewsBackground from "./ReviewsBackground";
import ReviewsHeader from "./ReviewsHeader";
import ReviewsGrid from "./ReviewsGrid";
import WaveBottom from "./WaveBottom";

const Reviews = () => {
  return (
    <section
      id="reviews"
      className="
        relative
        overflow-hidden

        py-24
        md:py-32

        bg-[#02131F]
      "
    >
      <ReviewsBackground />

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
        <ReviewsHeader />

        <ReviewsGrid />
      </div>

      <WaveBottom />
    </section>
  );
};

export default Reviews;