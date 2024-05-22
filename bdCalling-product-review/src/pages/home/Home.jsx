import Container from "../../shaerd/Container";
import { RxDividerVertical } from "react-icons/rx";
<RxDividerVertical />;

const Home = () => {
  return (
    <Container>
      <div className="w-full h-[512px] bg-[#C1DCDC] mt-5 rounded px-10 pt-10 flex flex-col md:flex-row">
        <div className="flex-1 ">
          <h1 className="text-7xl font-bold">
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
        </div>
        <div className="flex-1"></div>
      </div>
    </Container>
  );
};

export default Home;
