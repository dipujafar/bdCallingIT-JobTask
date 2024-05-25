import Container from "../../shaerd/Container";
import SectionTitle from "../../shaerd/SectionTitle";
import Natural_Plants_img from "../../assets/image/category1.jpeg";
import Plant_Accessories_img from "../../assets/image/category2.jpeg";
import Artificial_Plants_img from "../../assets/image/category3.jpeg";
import { FaArrowRightLong } from "react-icons/fa6";

const Categories = () => {
  return (
    <div>
      <SectionTitle
        heading={"Categories"}
        subHeading={"Find what you are looking for"}
      ></SectionTitle>
      <div className="bg-[#C1DCDC] py-10">
        <Container>
          <div className="flex flex-col md:flex-row gap-20">
            <div className="relative md:-top-28">
              <img
                src={Natural_Plants_img}
                alt="Natural Plants"
                className="rounded"
              />
              <h1 className="text-center text-lg font-bold mt-2">
                Natural Plants
              </h1>
            </div>
            <div>
              <img
                src={Plant_Accessories_img}
                alt="Natural Plants"
                className="rounded"
              />
              <h1 className="text-center text-lg font-bold mt-2">
                Plant Accessories
              </h1>
            </div>
            <div className="relative md:-top-28">
              <img
                src={Artificial_Plants_img}
                alt="Natural Plants"
                className="rounded"
              />
              <h1 className="text-center text-lg font-bold mt-2">
                Artificial Plants
              </h1>
            </div>
          </div>
          <div className="mt-5 space-y-2 flex flex-col justify-center items-center">
            <p>
              Horem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
            </p>
            <button className="flex justify-center items-center gap-2 btn">
              Explore <FaArrowRightLong />
            </button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Categories;
