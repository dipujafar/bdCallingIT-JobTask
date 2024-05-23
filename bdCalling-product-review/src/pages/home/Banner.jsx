import Container from "../../shaerd/Container";
import { RxDividerVertical } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import bannerImg from "../../assets/image/bannerImg.png";
import arrowImg from "../../assets/image/arrowImg.png";

const Banner = () => {
  return (
    <Container>
      <div className="w-full min-h-[calc(100vh-69px)] bg-[#C1DCDC] mt-5 rounded px-4 pt-4 md:px-12 md:pt-12 flex flex-col-reverse lg:gap-5 lg:flex-row">
        <div className="flex-1 text-black">
          <h1 className="text-7xl font-bold ">
            Buy your <br /> dream plants
          </h1>
          <div className="flex gap-10 mt-8">
            <div>
              <h4 className="text-4xl">50+</h4>
              <h4 className="text-xl">Plant Species</h4>
            </div>
            <p>
              <RxDividerVertical className="h-full text-4xl" />
            </p>
            <div>
              <h4 className="text-4xl">50+</h4>
              <h4 className="text-xl">Plant Species</h4>
            </div>
          </div>
          <div className="mt-14 relative">
            <form>
              <input
                type="text"
                placeholder="What are you looking for?"
                className="h-14 px-2 w-full rounded"
              />
            </form>
            <p className="absolute right-2 top-2 px-2 py-2  rounded bg-[#C1DCDC]">
              <IoIosSearch className="text-2xl" />
            </p>
          </div>
        </div>
        <div className="flex w-40 lg:mt-24 justify-center items-center">
          <img src={arrowImg} alt="arrowImg " />
        </div>
        <div className="flex-1 ">
          <div className="bg-[#1E1E1E] rounded-t-full  bg-bottom rounded-bl-full ">
            <img
              src={bannerImg}
              alt="banner_image"
              className="flex justify-center items-center"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
