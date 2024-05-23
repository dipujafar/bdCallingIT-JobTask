import Container from "../../shaerd/Container";
import SectionTitle from "../../shaerd/SectionTitle";
import { GiFlowerPot } from "react-icons/gi";
import { PiShippingContainer } from "react-icons/pi";
import { SlCallOut } from "react-icons/sl";

const About = () => {
  return (
    <Container>
      <SectionTitle
        heading={"About us"}
        subHeading={"Order now and appreciate the beauty of nature"}
      ></SectionTitle>
      <div className="flex flex-col md:flex-row gap-7 text-center">
        <div className="mt-8 flex flex-col justify-center items-center space-y-1">
          <div className="bg-[#C1DCDC] p-4 rounded-full ">
            <GiFlowerPot className="text-4xl" />
          </div>
          <h1 className="text-lg font-bold">Large Assortment</h1>
          <p>
            we offer many different types of products with fewer variations in
            each category.
          </p>
        </div>
        <div className="mt-8 flex flex-col justify-center items-center space-y-1">
          <div className="bg-[#C1DCDC] p-4 rounded-full ">
            <PiShippingContainer className="text-4xl" />
          </div>
          <h1 className="text-lg font-bold">Fast & Free Shipping</h1>
          <p>
            4-day or less delivery time, free shipping and an expedited delivery
            option.
          </p>
        </div>
        <div className="mt-8 flex flex-col justify-center items-center space-y-1">
          <div className="bg-[#C1DCDC] p-4 rounded-full ">
            <SlCallOut className="text-4xl" />
          </div>
          <h1 className="text-lg font-bold">24/7 Support</h1>
          <p>answers to any business related inquiry 24/7 and in real-time.</p>
        </div>
      </div>
    </Container>
  );
};

export default About;
