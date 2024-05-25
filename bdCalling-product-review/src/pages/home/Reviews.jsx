import useReviews from "../../hook/useReviews";
import Container from "../../shaerd/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { IoStar } from "react-icons/io5";
import { BiSolidQuoteSingleLeft } from "react-icons/bi";

const Reviews = () => {
  const [reviews, isLoading] = useReviews();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-dots loading-lg text-green-600"></span>
      </div>
    );
  }

  return (
    <div className="my-16">
      <Container>
        <h1 className="text-3xl font-bold  mb-10">
          What customers say about <br /> GREEMIND?
        </h1>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="card md:p-8 max-w-4xl mx-auto bg-[#C1DCDC] shadow-xl">
                <div className="card-body items-center  max-w-3xl text-lg mx-auto">
                  <p>{review?.review}</p>
                </div>
                <figure className="px-10 pt-10">
                  <div className="flex lex-col lg:flex-row justify-between items-center">
                    <div className="flex flex-col lg:flex-row gap-2 relative lg:right-56">
                      <div className="flex">
                        <BiSolidQuoteSingleLeft className="text-5xl" />
                        <img
                          src={review?.image}
                          alt="clientImage"
                          className="rounded-full w-40"
                        />
                      </div>
                      <h2 className="ml-5 card-title">{review?.name}</h2>
                    </div>
                    <div className="flex gap-2">
                      <IoStar className="text-2xl" />
                      <p>{review?.rating}</p>
                    </div>
                  </div>
                </figure>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default Reviews;
