import { Link } from "react-router-dom";
import useDisplayProducts from "../../hook/useDisplayProducts";
import Container from "../../shaerd/Container";
import { FaArrowRightLong } from "react-icons/fa6";

const DisplayProduct = () => {
  const [products, isLoading] = useDisplayProducts("");

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-dots loading-lg text-green-600"></span>
      </div>
    );
  }

  return (
    <Container>
      <div className="flex flex-col lg:flex-row gap-5">
        <div className=" flex-1 space-y-4">
          <h1 className="text-3xl font-bold ">
            Best Selling <br /> Plants
          </h1>
          <p className="text-lg  mt-2">
            Easiest way to <br /> healthy life by buying <br /> your favorite
            plants{" "}
          </p>
          <Link to={"/products"} className="btn bg-[#C1DCDC] ">
            See more <FaArrowRightLong />
          </Link>
        </div>
        <div className="flex flex-col lg:flex-row gap-5">
          {products.length ? (
            products?.slice(0, 3)?.map((product) => (
              <div
                key={product?._id}
                className="card card-compact  bg-base-100 shadow-xl"
              >
                <figure>
                  <img
                    src={product?.image}
                    alt="product_image"
                    className="w-80 h-80"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{product?.name}</h2>
                  <p className="text-lg">$ {product?.price}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-2xl">{` Sorry!! There are currently no available products of your search name.`}</p>
          )}
        </div>
      </div>
    </Container>
  );
};

export default DisplayProduct;
