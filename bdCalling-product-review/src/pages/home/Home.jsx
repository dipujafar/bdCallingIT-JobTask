import { Helmet } from "react-helmet-async";
import About from "./About";
import Banner from "./Banner";
import DisplayProduct from "./DisplayProduct";
import Categories from "./Categories";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div className="space-y-16 lg:space-y-20">
      <Helmet>
        <title>GREENMIND | Home</title>
      </Helmet>
      <Banner></Banner>
      <DisplayProduct></DisplayProduct>
      <About></About>
      <Categories></Categories>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
