import { motion } from "framer-motion";

import ReviewCard from "./ReviewCard";
import { reviewsData } from "./reviewsData";

const ReviewsGrid = () => {
  return (
    <div
      className="
        mt-20

        grid
        gap-8

        md:grid-cols-2
        xl:grid-cols-3
      "
    >
      {reviewsData.map(
        (review, index) => (
          <motion.div
            key={review.id}
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: index * 0.15,
            }}
          >
            <ReviewCard {...review} />
          </motion.div>
        )
      )}
    </div>
  );
};

export default ReviewsGrid;