import { Rating } from "@smastrom/react-rating";
import { AiOutlineLike } from "react-icons/ai";
import { AiTwotoneDislike } from "react-icons/ai";
import { FaReply } from "react-icons/fa";

/* eslint-disable react/prop-types */
const ProductReviews = ({ reviews }) => {
  return (
    <div className="grid grid-cols-1 gap-2">
      {reviews.length
        ? reviews?.map((review) => (
            <div key={review._id} className="card w-96  bg-[#C1DCDC] mx-auto ">
              <div className="card-body items-center text-center">
                <h2 className="card-title">{review?.reviewer_name}</h2>
                <Rating
                  style={{ maxWidth: 100 }}
                  value={parseFloat(Math.round(review.rating))}
                />
                <p>{review?.review}</p>
                <div className="card-actions justify-end">
                  <div className="flex justify-center items-center gap-5">
                    <AiOutlineLike className="text-xl" />

                    <AiTwotoneDislike className="text-xl" />
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <FaReply className="text-end text-4xl p-2" />
              </div>
            </div>
          ))
        : "No review yet"}
    </div>
  );
};

export default ProductReviews;
